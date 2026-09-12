# Auditoría — personal-page (12/09/2026)

> ✅ Tanda rápida aplicada el 12/09/2026: skills rehechas, assets muertos fuera,
> keywords fuera, 404 + robots.txt + CSS de impresión. Desplegado en
> https://alvarojimenezmartin.com. Queda pendiente: descripción de Meta,
> sección IA con pruebas, foto y PDF nuevos.

Revisión de la web recién desplegada en https://alvarojimenezmartin.com.
Ordenado por impacto. Lo que ya está bien: 37 KB por página, cero JS de cliente,
SEO base (canonical, hreflang, sitemap, OG), accesibilidad (skip link, ARIA) y
los dos enlaces de OpenWebinars siguen vivos (200 OK).

---

## 🔴 Cambiar

1. **Skills: nombres, orden y formato.** Hay erratas de formato — `Javascript`
   → `JavaScript`, `ReactNative` → `React Native`, `NodeJs` → `Node.js` — y el
   orden cuenta la historia equivocada: HTML/CSS primero para un Mobile Engineer
   @ Meta en 2026. Propuesta: liderar con React Native, TypeScript y React.
2. **Skills: fuera los porcentajes.** "Git 75%" vs "CSS 85%" no significa nada
   verificable y en una entrevista te pueden preguntar qué mide ese 5%.
   Sustituir las barras por grupos: p. ej. *Core* / *Con experiencia* /
   *He trasteado*.
3. **`TypeScript` brilla por su ausencia.** Es tu lenguaje diario y la web está
   construida en TS estricto. Añadirlo arriba del todo.
4. **Bitcoin / Ethereum al 30%** son rémoras de la época blockchain. Para el
   posicionamiento actual (mobile + IA) diluyen el mensaje: moverlos a una nota
   al pie o eliminarlos.
5. **Meta sin descripción.** El placeholder "coming soon" es visible en público
   y hace que la web parezca sin terminar. O escribes 2–3 líneas o se esconde
   la descripción hasta tenerla.
6. **Sección IA: quitar el pill de "borrador"** en cuanto apruebes el contenido
   (ahora mismo cualquier visitante lo ve). Y darle pruebas en vez de
   intenciones: "esta web se diseñó y construyó con asistencia de IA" es la
   mejor credencial posible y es verdad.
7. **Navegación incompleta.** El menú enlaza 6 de las 10 secciones; faltan
   Educación, Publicaciones y Hobbies. Añadirlas (es una sola página, caben).
8. **Hero: foto y CV desactualizados.** El avatar es el de la web antigua y el
   botón "Download résumé" descarga el PDF viejo. Foto nueva + PDF actualizado.
9. **About: matizar "blockchain solutions".** Una mención en el segundo párrafo
   ancla tu perfil a 2018; con el resto de cambios, una frase más neutra
   ("…and distributed systems") mantiene la experiencia sin el anclaje.

## 🗑 Quitar

- **Assets muertos en `public/`**: `ufo-and-cow.svg`, `404.jpeg` y `cover.jpeg`
  no se referencian desde ningún sitio. Fuera (menos peso, menos ruido).
- **Meta tag `keywords`**: Google lo ignora desde 2009. Ruido en el `<head>`.
- **El pill "borrador" y el "coming soon"** (al resolver los puntos 5 y 6).
- **El PDF antiguo** → sustituir, no solo quitar.

## ➕ Añadir

- **Página 404 (EN/ES).** Ahora un typo en la URL cae en el 404 genérico de
  Cloudflare. Una 404 con el estilo cálido y enlace a inicio cuesta 10 minutos.
- **`robots.txt`** apuntando al sitemap. Una línea.
- **Hoja de estilos de impresión.** Con `@media print` la página se imprime
  como un CV decente: es gratis y algún reclutador la usará.
- **Descripción del puesto en Meta** (ver punto 5).
- *(Opcional)* **Nota de disponibilidad**: "no busco ofertas" o "abierto a
  colaboraciones puntuales". Filtra ruido de LinkedIn.

---

## Orden de ataque sugerido

1. Skills (nombres + orden + TypeScript + fuera porcentajes y crypto) — 20 min
2. Esconder/escribir la descripción de Meta — 5 min / lo que tardes en escribirla
3. Quitar assets muertos + keywords — 5 min
4. 404 + robots.txt + print CSS — 30 min
5. Sección IA con pruebas + quitar el pill — cuando la revises
6. Foto + PDF nuevos — cuando los tengas
