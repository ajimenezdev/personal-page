import type { Lang } from '../data/types';

export interface UIStrings {
  skipToContent: string;
  siteOwner: string;
  languageLabel: string;
  menuLabel: string;
  english: string;
  spanish: string;
  heroGreeting: string;
  heroCtaContact: string;
  heroCtaResume: string;
  resumeFileName: string;
  aboutTitle: string;
  skillsTitle: string;
  experienceTitle: string;
  present: string;
  aiTitle: string;
  aiDraftNote: string;
  aiProofNote: string;
  educationTitle: string;
  languagesTitle: string;
  publicationsTitle: string;
  projectsTitle: string;
  projectsIntro: string;
  projectsFallback: string;
  viewOnGithub: string;
  stars: string;
  star: string;
  hobbiesTitle: string;
  contactTitle: string;
  contactText: string;
  contactEmailCta: string;
  footerBuiltWith: string;
  footerRights: string;
}

export const ui: Record<Lang, UIStrings> = {
  en: {
    skipToContent: 'Skip to content',
    siteOwner: 'Álvaro Jiménez Martín',
    languageLabel: 'Language',
    menuLabel: 'Menu',
    english: 'English',
    spanish: 'Español',
    heroGreeting: "Hi! I’m Alvaro!",
    heroCtaContact: 'Get in touch',
    heroCtaResume: 'Download résumé',
    resumeFileName: 'Alvaro_Jimenez_Martin_Resume.pdf',
    aboutTitle: 'About',
    skillsTitle: 'Skills',
    experienceTitle: 'Experience',
    present: 'Present',
    aiTitle: 'AI',
    aiDraftNote: 'Draft section — content to be shaped with Álvaro.',
    aiProofNote:
      'Proof of work: this very website was designed and built with AI assistance.',
    educationTitle: 'Education',
    languagesTitle: 'Languages',
    publicationsTitle: 'Publications',
    projectsTitle: 'Projects',
    projectsIntro: 'A selection of my public repositories, ordered by stars.',
    projectsFallback:
      'The project list could not be loaded when building the site.',
    viewOnGithub: 'View on GitHub',
    stars: 'stars',
    star: 'star',
    hobbiesTitle: 'Hobbies',
    contactTitle: 'Contact',
    contactText:
      'I’m always happy to chat about mobile development, React Native, AI, or new opportunities.',
    contactEmailCta: 'Send me an email',
    footerBuiltWith: 'Built with Astro',
    footerRights: 'All rights reserved.',
  },
  es: {
    skipToContent: 'Saltar al contenido',
    siteOwner: 'Álvaro Jiménez Martín',
    languageLabel: 'Idioma',
    menuLabel: 'Menú',
    english: 'English',
    spanish: 'Español',
    heroGreeting: '¡Hola! ¡Soy Álvaro!',
    heroCtaContact: 'Contáctame',
    heroCtaResume: 'Descargar CV',
    resumeFileName: 'Alvaro_Jimenez_Martin_CV.pdf',
    aboutTitle: 'Sobre mí',
    skillsTitle: 'Habilidades',
    experienceTitle: 'Experiencia',
    present: 'Actualidad',
    aiTitle: 'IA',
    aiDraftNote: 'Sección en borrador — contenido pendiente de definir con Álvaro.',
    aiProofNote:
      'La prueba: esta misma web se diseñó y construyó con ayuda de IA.',
    educationTitle: 'Educación',
    languagesTitle: 'Idiomas',
    publicationsTitle: 'Publicaciones',
    projectsTitle: 'Proyectos',
    projectsIntro:
      'Una selección de mis repositorios públicos, ordenados por estrellas.',
    projectsFallback:
      'La lista de proyectos no se pudo cargar al generar la web.',
    viewOnGithub: 'Ver en GitHub',
    stars: 'estrellas',
    star: 'estrella',
    hobbiesTitle: 'Aficiones',
    contactTitle: 'Contacto',
    contactText:
      'Siempre me apetece charlar sobre desarrollo móvil, React Native, IA o nuevas oportunidades.',
    contactEmailCta: 'Envíame un email',
    footerBuiltWith: 'Hecha con Astro',
    footerRights: 'Todos los derechos reservados.',
  },
};

/** Month abbreviation (as stored in data) to display label per language. */
const months: Record<Lang, Record<string, string>> = {
  en: {
    jan: 'Jan', feb: 'Feb', mar: 'Mar', apr: 'Apr', may: 'May', jun: 'Jun',
    jul: 'Jul', aug: 'Aug', sep: 'Sep', oct: 'Oct', nov: 'Nov', dec: 'Dec',
  },
  es: {
    jan: 'ene', feb: 'feb', mar: 'mar', apr: 'abr', may: 'may', jun: 'jun',
    jul: 'jul', aug: 'ago', sep: 'sep', oct: 'oct', nov: 'nov', dec: 'dic',
  },
};

/** "may 2022" becomes "May 2022" (en) or "may 2022" (es). */
export function formatMonthYear(
  month: string,
  year: string,
  lang: Lang,
): string {
  const label = months[lang][month.toLowerCase()] ?? month;
  return `${label} ${year}`;
}
