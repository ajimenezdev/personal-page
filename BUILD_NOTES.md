# personal-page — Build notes

New personal CV website for Álvaro Jiménez Martín.
Astro 5 + TypeScript (strict) + Tailwind CSS v4. Fully static output, zero client JS.

## Structure

```
src/
  data/
    types.ts      Shared TypeScript types (mirrors the old siteConfig.js shape)
    cv.en.ts      English CV data (primary language)
    cv.es.ts      Spanish CV data — DRAFT, pending Álvaro's review
    github.ts     Build-time GitHub repo fetcher (never throws; [] on failure)
  i18n/
    ui.ts         UI strings dict {en, es} + month formatter
  components/     Header, Hero, About, Skills, Experience, AiFocus, Education,
                  Publications, Projects, Hobbies, Contact, Footer, SectionHeading
  layouts/
    BaseLayout.astro   <head> SEO/OG/hreflang, skip link, header + footer
  pages/
    index.astro        English at /
    es/index.astro     Spanish at /es
  styles/
    global.css         Tailwind v4 theme (warm neutrals + terracotta accent)
public/
  resume_alvaro_jimenez.pdf   Copied from the old repo (still the old PDF!)
  images/                     avatar.jpg, cover.jpeg, 404.jpeg, ufo-and-cow.svg
  favicon.svg                 Simple "A" mark in terracotta
```

Style: "Cálido moderno" — warm light background (cream), one terracotta accent
(clay-700 `#9a3412` for text/buttons, clay-600 for large accents), rounded
cards, soft shadows, Fraunces serif display headings + system sans body.

## Build / preview

```bash
npm install
npm run build     # → dist/ (verified working)
npm run preview   # serve dist/ locally
```

- Projects section fetches `https://api.github.com/users/ajimenezdev/repos`
  **at build time** (top 6 non-forks by stars). Fails safe to a fallback link.
- Sitemap via `@astrojs/sitemap` (en + es, hreflang aware).
- SEO: per-language title/description, canonical, OG/Twitter tags, hreflang.

## Deploy (Cloudflare Pages, when ready)

1. Push this folder to the GitHub repo (see note below about the repo name).
2. Cloudflare dashboard → Pages → connect the repo. Build command: `npm run build`,
   output dir: `dist`. No env vars needed.
3. Add custom domain `alvarojimenezmartin.com` in the Pages project.

## ⚠️ Content needing Álvaro's review

1. **AI section** (`src/data/cv.en.ts` → `ai`, `cv.es.ts` → `ai`): brand-new,
   provisional content. Clearly marked as draft on the page itself.
2. **Spanish translation** (`src/data/cv.es.ts` + `src/i18n/ui.ts` es dict):
   translated by AI, marked DRAFT at the top of the file. Needs his read-through.
3. **Meta job** (`jobs[0]`): description intentionally left empty (renders a
   "coming soon" placeholder). He should write 2–3 lines.
4. **About text** (`authorDescription`): refreshed from the old site to reflect
   Mobile Engineer @ Meta — please review the wording.
5. **Résumé PDF** (`public/resume_alvaro_jimenez.pdf`): still the OLD file from
   the Gatsby repo. Replace with an updated PDF before/after launch.
6. Old copy says "1 year and 5 months" etc. — kept verbatim from the old site.

## Important: the GitHub repo is already renamed

`ajimenezdev/gatsby-cv` now **301-redirects to `ajimenezdev/personal-page`**
(same repo id, renamed by Álvaro on/before 2026-09-12). Push the new site to
**`ajimenezdev/personal-page`** (branch `master`), replacing the old Gatsby
code — history is preserved. The Projects section currently lists
`personal-page` (the old Gatsby code) among top repos; after the push it will
represent the new site itself, which is fine.
