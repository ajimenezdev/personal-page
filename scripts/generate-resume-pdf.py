#!/usr/bin/env python3
"""Generate the downloadable CV PDF (public/resume_alvaro_jimenez.pdf)
from the site's own data: src/data/cv.en.ts (English).

Usage: python3 scripts/generate-resume-pdf.py
Output: public/resume_alvaro_jimenez.pdf (A4)

The PDF is generated from the same data the website renders, so it can
never drift from the site. If a field is missing or a count changes,
the script fails loudly instead of producing a silent partial CV.
Design echoes the site: serif display headings, terracotta accent
(clay-700 #9a3412), warm stone body text, on white for print.
"""

import re
import sys
from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data" / "cv.en.ts"
OUT = ROOT / "public" / "resume_alvaro_jimenez.pdf"

FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
SERIF = FONT_DIR / "DejaVuSerif.ttf"
SERIF_B = FONT_DIR / "DejaVuSerif-Bold.ttf"
SANS = FONT_DIR / "DejaVuSans.ttf"
SANS_B = FONT_DIR / "DejaVuSans-Bold.ttf"

INK = (43, 38, 34)
CLAY = (154, 52, 18)      # clay-700
MUTED = (107, 95, 75)     # stone-600
RULE = (231, 220, 200)    # stone-200

MONTHS = {
    "jan": "Jan", "feb": "Feb", "mar": "Mar", "apr": "Apr",
    "may": "May", "jun": "Jun", "jul": "Jul", "aug": "Aug",
    "sep": "Sep", "oct": "Oct", "nov": "Nov", "dec": "Dec",
}


def load_data():
    src = DATA.read_text(encoding="utf-8")

    def find(pattern, label):
        m = re.search(pattern, src, re.DOTALL)
        if not m:
            raise ValueError(f"no match for {label}")
        return m

    hero_role = find(r"heroRole: '([^']+)'", "heroRole").group(1)
    hero_location = find(r"heroLocation: '([^']+)'", "heroLocation").group(1)

    about_raw = find(r"authorDescription: `(.*?)`,", "authorDescription").group(1)
    about = [p.strip() for p in re.split(r"<br\s*/><br\s*/>", about_raw)]
    about = [re.sub(r"<br\s*/>", " ", p) for p in about]

    skill_groups = []
    for m in re.finditer(
        r"title: '([^']+)',\s*items: \[([^\]]+)\]", src
    ):
        items = re.findall(r"'([^']+)'", m.group(2))
        skill_groups.append((m.group(1), items))

    jobs = []
    for m in re.finditer(
        r"company: '([^']+)',\s*"
        r"begin: \{ month: '(\w+)', year: '(\d+)' \},\s*"
        r"duration: (null|'([^']+)'),\s*"
        r"location: '([^']+)',\s*"
        r"occupation: '([^']+)',\s*"
        r"description:\s*['\"]([^'\"]*)['\"],",
        src,
    ):
        jobs.append(
            {
                "company": m.group(1),
                "begin": f"{MONTHS[m.group(2)]} {m.group(3)}",
                "duration": m.group(5),  # None when null
                "location": m.group(6),
                "occupation": m.group(7),
                "description": m.group(8),
            }
        )

    ai = []
    for m in re.finditer(
        r"title: '([^']+)',\s*"
        r"description:\s*'([^']*)',\s*"
        r"tags: \[([^\]]+)\]",
        src,
    ):
        tags = re.findall(r"'([^']+)'", m.group(3))
        ai.append({"title": m.group(1), "description": m.group(2), "tags": tags})

    publications = []
    for m in re.finditer(
        r"title: '([^']+)',\s*"
        r"company_medium: '([^']+)',\s*"
        r"date: \{ month: '(\w+)', year: '(\d+)' \},\s*"
        r"link: '([^']+)',\s*"
        r"description:\s*'([^']*)',",
        src,
    ):
        publications.append(
            {
                "title": m.group(1),
                "medium": m.group(2),
                "date": f"{MONTHS[m.group(3)]} {m.group(4)}",
                "link": m.group(5),
                "description": m.group(6),
            }
        )

    edu = find(
        r"school: '([^']+)',\s*"
        r"degree: \"([^\"]+)\",\s*"
        r"field: '([^']+)',\s*"
        r"startYear: (\d+),\s*"
        r"endYear: (\d+),",
        "education",
    )
    education = {
        "school": edu.group(1),
        "degree": edu.group(2),
        "field": edu.group(3),
        "years": f"{edu.group(4)} — {edu.group(5)}",
    }

    languages = [
        (m.group(1), m.group(2))
        for m in re.finditer(r"language: '([^']+)', level: '([^']+)'", src)
    ]

    social = find(
        r"twitter: '([^']+)',\s*"
        r"linkedin: '([^']+)',\s*"
        r"github: '([^']+)',\s*"
        r"email: '([^']+)'",
        "social",
    )
    social = {
        "twitter": social.group(1),
        "linkedin": social.group(2),
        "github": social.group(3),
        "email": social.group(4),
    }

    hobbies = [
        m.group(1)
        for m in re.finditer(r"name: '([^']+)', icon: '[^']+'", src)
    ]

    # Fail loudly on drift: the site data must keep these shapes.
    assert len(skill_groups) == 3, f"skill groups: {len(skill_groups)}"
    assert len(jobs) == 9, f"jobs: {len(jobs)}"
    assert len(ai) == 3, f"AI items: {len(ai)}"
    assert len(publications) == 2, f"publications: {len(publications)}"
    assert len(languages) == 3, f"languages: {len(languages)}"
    assert len(hobbies) == 5, f"hobbies: {len(hobbies)}"

    # The AI section goes in the PDF only while the website renders it:
    # Álvaro hid the section on 23/11/2026, so the PDF drops it too.
    # Re-adding <AiFocus /> to src/pages/index.astro brings it back here.
    show_ai = "AiFocus" in (ROOT / "src" / "pages" / "index.astro").read_text(
        encoding="utf-8"
    )

    return {
        "hero_role": hero_role,
        "hero_location": hero_location,
        "about": about,
        "skill_groups": skill_groups,
        "jobs": jobs,
        "ai": ai,
        "show_ai": show_ai,
        "publications": publications,
        "education": education,
        "languages": languages,
        "social": social,
        "hobbies": hobbies,
    }


class CV(FPDF):
    def footer(self):
        if self.page_no() == 1:
            return
        self.set_y(-12)
        self.set_font("Sans", "", 7.5)
        self.set_text_color(*MUTED)
        self.cell(0, 5, f"Álvaro Jiménez Martín · alvarojimenezmartin.com · {self.page_no()}", align="C")

    def section(self, title):
        self.ensure_space(20)
        self.ln(3)
        self.set_font("Serif", "B", 11.5)
        self.set_text_color(*CLAY)
        self.cell(0, 5.5, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*RULE)
        self.set_line_width(0.4)
        self.line(self.l_margin, self.get_y() + 0.5, self.w - self.r_margin, self.get_y() + 0.5)
        self.ln(2)

    def ensure_space(self, mm):
        if self.get_y() > self.h - self.b_margin - mm:
            self.add_page()

    def body(self, text, size=8.5, lh=4.4, color=INK, style=""):
        self.set_font("Sans", style, size)
        self.set_text_color(*color)
        self.multi_cell(0, lh, text, new_x="LMARGIN", new_y="NEXT")


def build(cv):
    pdf = CV("P", "mm", "A4")
    pdf.set_auto_page_break(auto=True, margin=12)
    pdf.set_margins(18, 13, 18)
    pdf.alias_nb_pages()
    for family, style, path in [
        ("Serif", "", SERIF), ("Serif", "B", SERIF_B),
        ("Sans", "", SANS), ("Sans", "B", SANS_B),
    ]:
        pdf.add_font(family, style, str(path))
    pdf.set_title("Álvaro Jiménez Martín — Mobile Engineer")
    pdf.set_author("Álvaro Jiménez Martín")
    pdf.add_page()

    # ---- Header ------------------------------------------------------
    pdf.set_font("Serif", "B", 23)
    pdf.set_text_color(*INK)
    pdf.cell(0, 10, "Álvaro Jiménez Martín", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Sans", "B", 11)
    pdf.set_text_color(*CLAY)
    pdf.cell(0, 6, cv["hero_role"], new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Sans", "", 9.5)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 5, cv["hero_location"], new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)
    pdf.set_font("Sans", "", 9)
    pdf.set_text_color(*INK)
    contact = [
        (cv["social"]["email"], "mailto:" + cv["social"]["email"]),
        ("linkedin.com/in/alvarojimenezmartin", cv["social"]["linkedin"]),
        ("github.com/ajimenezdev", cv["social"]["github"]),
        ("alvarojimenezmartin.com", "https://alvarojimenezmartin.com"),
    ]
    x = pdf.get_x()
    for i, (label, link) in enumerate(contact):
        if i:
            pdf.set_text_color(*MUTED)
            pdf.cell(3, 5, "·")
        pdf.set_text_color(*CLAY)
        pdf.cell(pdf.get_string_width(label) + 1, 5, label, link=link)
    pdf.ln(6)

    # ---- About -------------------------------------------------------
    pdf.section("About")
    for para in cv["about"]:
        pdf.body(para)
        pdf.ln(1)

    # ---- Skills ------------------------------------------------------
    pdf.section("Skills")
    for title, items in cv["skill_groups"]:
        pdf.set_font("Sans", "B", 9.5)
        pdf.set_text_color(*INK)
        pdf.cell(pdf.get_string_width(title + ": ") + 1, 5.2, title + ": ")
        pdf.set_font("Sans", "", 9.5)
        pdf.multi_cell(0, 4.4, " · ".join(items), new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)

    # ---- Experience --------------------------------------------------
    pdf.section("Experience")
    for job in cv["jobs"]:
        pdf.ensure_space(30)
        date = job["begin"] + (
            " — Present" if job["duration"] is None else f" ({job['duration']})"
        )
        pdf.set_font("Sans", "", 9)
        pdf.set_text_color(*MUTED)
        date_w = pdf.get_string_width(date) + 1
        pdf.set_font("Sans", "B", 10.5)
        pdf.set_text_color(*INK)
        pdf.cell(pdf.epw - date_w, 5, job["company"])
        pdf.set_font("Sans", "", 9)
        pdf.set_text_color(*MUTED)
        pdf.cell(date_w, 5, date, align="R", new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Sans", "", 9.5)
        pdf.set_text_color(*MUTED)
        pdf.cell(0, 4.6, f"{job['occupation']} · {job['location']}", new_x="LMARGIN", new_y="NEXT")
        pdf.body(job["description"])
        pdf.ln(1.5)

    # ---- AI ----------------------------------------------------------
    if cv["show_ai"]:
        pdf.section("AI")
        for item in cv["ai"]:
            pdf.ensure_space(22)
            pdf.set_font("Sans", "B", 10)
            pdf.set_text_color(*INK)
            pdf.cell(0, 5, item["title"], new_x="LMARGIN", new_y="NEXT")
            pdf.body(item["description"])
            pdf.set_font("Sans", "", 8.5)
            pdf.set_text_color(*MUTED)
            pdf.cell(0, 4, " · ".join(item["tags"]), new_x="LMARGIN", new_y="NEXT")
            pdf.ln(2)

    # ---- Education & languages ---------------------------------------
    pdf.section("Education")
    pdf.ensure_space(22)
    edu = cv["education"]
    pdf.set_font("Sans", "B", 10)
    pdf.set_text_color(*INK)
    pdf.cell(0, 5, f"{edu['degree']} in {edu['field']}", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Sans", "", 9.5)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 4.6, f"{edu['school']} · {edu['years']}", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1.5)
    pdf.set_font("Sans", "B", 9.5)
    pdf.set_text_color(*INK)
    pdf.cell(pdf.get_string_width("Languages: ") + 1, 5.2, "Languages: ")
    pdf.set_font("Sans", "", 9.5)
    pdf.multi_cell(
        0, 5.2,
        " · ".join(f"{lang} ({level})" for lang, level in cv["languages"]),
        new_x="LMARGIN", new_y="NEXT",
    )

    # ---- Teaching ----------------------------------------------------
    pdf.section("Teaching")
    for pub in cv["publications"]:
        pdf.ensure_space(24)
        pdf.set_font("Sans", "B", 10)
        pdf.set_text_color(*INK)
        pdf.cell(0, 5, pub["title"], new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Sans", "", 9.5)
        pdf.set_text_color(*MUTED)
        pdf.cell(0, 4.6, f"{pub['medium']} · {pub['date']}", new_x="LMARGIN", new_y="NEXT")
        pdf.body(pub["description"])
        pdf.ln(2.5)

    # ---- Hobbies -----------------------------------------------------
    # (Projects live on GitHub, already in the header contact line.)
    pdf.section("Hobbies")
    pdf.body(" · ".join(cv["hobbies"]))

    pdf.output(str(OUT))
    return OUT


if __name__ == "__main__":
    data = load_data()
    out = build(data)
    print(f"written: {out} ({out.stat().st_size} bytes)")
