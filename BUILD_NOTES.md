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

## Deploy (Cloudflare Pages) — done 12/09/2026

- Project `personal-page` connected to this repo (branch `master`, preset Astro,
  build `npm run build`, output `dist`). Every push to `master` auto-deploys.
- Custom domains: `alvarojimenezmartin.com` (Active, SSL) + `www`.
- Live at https://alvarojimenezmartin.com and
  https://personal-page-30i.pages.dev.
- Local preview: `npm run preview` serves `dist/`.

## ⚠️ Content needing Álvaro's review

1. **AI section** (`src/data/cv.en.ts` → `ai`, `cv.es.ts` → `ai`): brand-new,
   provisional content. Clearly marked as draft on the page itself. A proof
   line was added 21/11/2026 ("this very website was designed and built with
   AI assistance") — remove the draft pill only when he approves the content.
2. **Spanish translation** (`src/data/cv.es.ts` + `src/i18n/ui.ts` es dict):
   translated by AI, marked DRAFT at the top of the file. Needs his read-through.
3. **Meta job** (`jobs[0]`): description intentionally left empty; since
   21/11/2026 the card renders NO placeholder text (the public "coming soon"
   is gone). He should still write 2–3 lines when ready.
4. **About text** (`authorDescription`): "blockchain solutions" se queda
   como estaba por decisión expresa de Álvaro (21/11/2026, revertido el
   cambio a "distributed systems"). No volver a suavizarlo.
5. **Résumé PDF** (`public/resume_alvaro_jimenez.pdf`): still the OLD file from
   the Gatsby repo. Replace with an updated PDF before/after launch.
6. Old copy says "1 year and 5 months" etc. — kept verbatim from the old site.
7. **Header nav** completed 21/11/2026: all 9 sections linked (EN + ES),
   in page order.

## Sync local ↔ repo (21/11/2026)

- Local copy `~/workspace/personal-page/` has NO `.git` — plain working copy.
- Remote-only folders pulled into local so a future push doesn't wipe them:
  `public/enablebanking/` (privacy.html, terms.html — added 03/10/2026 via
  API) and `public/ny-808f63621a/` (private "Última mañana en NY" page,
  noindex, 10 mp3s, 4.4 MB). All other files were byte-identical.
- **Preview deploys:** `wrangler pages deploy` FAILS with this token
  (auth error 10000 — no Pages scope). Use a Workers Static Assets preview
  instead: `/tmp/pp-preview/wrangler.toml` (name `personal-page-preview`,
  assets = local `dist/`, 404-page) → `https://personal-page-preview.ajmjimens.workers.dev`.
  Production still deploys via the Pages project on push to `master`.
- Preview 21/11/2026: version b294e626 (nav 9 links, Meta placeholder hidden,
  About softened, AI proof line). Production NOT touched.
- **21/11/2026 (tarde), a petición de Álvaro:**
  - `public/ny-808f63621a/` BORRADA por completo (local; pendiente push para
    que desaparezca del repo y de producción).
  - "blockchain" SE QUEDA: revertido "distributed systems" → "blockchain
    solutions" (EN) y "sistemas distribuidos" → "soluciones blockchain" (ES).
    No volver a suavizarlo.
  - Navegación: la verificación en navegador mostró que los 9 enlaces NO
    cabían en la cabecera (scroll horizontal, enlaces recortados, nombre en
    dos líneas). Arreglo: contenedor de la cabecera `max-w-5xl` → `max-w-6xl`,
    nombre con `whitespace-nowrap`, enlaces `px-3` → `px-2.5`; además la
    barra de scroll del propio menú se oculta con CSS (`.no-scrollbar`,
    sigue deslizando en móvil). **Verificado en navegador 21/11 ~14:31
    (versión 1d20c258): 9 enlaces visibles en una fila, sin barra, en EN y
    ES; NY devuelve 404. Pendiente: push a `master` (publica en producción)
    con el OK de Álvaro.**

## Hallmark — 3 fases aplicadas 21/11/2026 (solo previa, sin publicar)

Auditoría: `~/workspace/your_files/auditoria-hallmark-web-personal.md`
(8 FAIL + 7 REFLEX + 7 Finish, 22 hallazgos). Fases A+B+C aplicadas en local
y desplegadas en la previa. Producción NO tocada, sin push al repo.

- **Fase A (FAIL):** kickers fuera (prop `kicker` y claves `*Kicker` de
  `ui.ts` eliminadas); etiquetas de Skills/Publicaciones sin tracking ni
  mayúsculas; 23 puntos medios sustituidos (periodo entre paréntesis,
  ocupación y ubicación en líneas separadas, coma en Publicaciones,
  paréntesis en el héroe, punto en el pie); flechas `→`/`←` fuera;
  `overflow-x: clip` en `html`/`body`; `prefers-reduced-motion` anula
  transiciones; sombras tokenizadas (`--shadow-card/chip/chip-lg/hero`,
  héroe con blur 20); `h1, h2 { overflow-wrap: break-word; min-width: 0;
  text-wrap: balance }`; sello Hallmark al inicio de `global.css`.
- **Fase B (REFLEX):** neutros `stone-*` re-teñidos cálidos en `@theme`
  (`stone-500 #77684f`, 5,24:1 sobre crema) + `--color-paper #fffdf8`
  (sustituye todos los `bg-white`/`bg-white/70`; `text-white` sobre
  terracota se queda); descripciones de Experience a `max-w-[52ch]`
  (65ch dejaba líneas de 79 caracteres; a 52ch la más larga es de 64);
  ritmo variado (secciones `py-16/20/24`, huecos 128-152 px) y banda
  teñida `bg-clay-50/70` en la sección IA; h2 a 40 px.
- **Fase C (Finish):** apóstrofos tipográficos (’) en `cv.en.ts` (6),
  `ui.ts` (saludo) y 404 (`doesn't`); botón de Contacto a la receta del
  héroe (`px-5 py-2.5`); `tabular-nums` en el «404»; un solo ancho
  (`max-w-6xl` en cabecera, contenido y pie) y un solo gap (`gap-5`);
  `p { text-wrap: pretty }` global; «1 star» en singular en Projects.
- **Waivers en el sello:** 65 (look cálido elegido por Álvaro el 12/09) y
  42 (navegación, 9 enlaces verificados).
- **Verificado en `dist/` y en navegador:** 0 `·`, 0 `→`, 0 `←`, 0 `&#39;`,
  0 kickers en EN, ES y 404 (único `·` restante: dentro de los comentarios
  del sello en el CSS compilado, no visible); línea más larga de Experience
  64 caracteres (verificado en vivo a 1919 px).
- **Menú burger en móvil (21/11, a petición de Álvaro):** en `<md` la
  cabecera muestra solo el nombre + botón burger; el panel desplegable
  lleva las 9 secciones y el cambio de idioma (English/Español). En `md+`
  la navegación completa no cambia. Script mínimo en `Header.astro`
  (abre/cierra, cierra al pulsar un enlace, con Escape y al pulsar fuera;
  `aria-expanded`). La regla `.no-scrollbar` de `global.css` se eliminó
  (ya no hay tira de navegación con scroll). Previa con el burger:
  versión 47008309 (21/11 ~15:22).
- **OJO:** `/tmp/pp-preview/` se borra entre turnos (`/tmp` es efímero);
  si desaparece, recrear el `wrangler.toml` (name `personal-page-preview`,
  assets = `dist/` local) y volver a desplegar.

## Important: the GitHub repo is already renamed

`ajimenezdev/gatsby-cv` now **301-redirects to `ajimenezdev/personal-page`**
(same repo id, renamed by Álvaro on/before 2026-09-12). Push the new site to
**`ajimenezdev/personal-page`** (branch `master`), replacing the old Gatsby
code — history is preserved. The Projects section currently lists
`personal-page` (the old Gatsby code) among top repos; after the push it will
represent the new site itself, which is fine.
