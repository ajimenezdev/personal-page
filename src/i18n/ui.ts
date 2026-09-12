import type { Lang } from '../data/types';

export interface UIStrings {
  skipToContent: string;
  siteOwner: string;
  languageLabel: string;
  english: string;
  spanish: string;
  heroGreeting: string;
  heroCtaContact: string;
  heroCtaResume: string;
  resumeFileName: string;
  aboutTitle: string;
  aboutKicker: string;
  skillsTitle: string;
  skillsKicker: string;
  experienceTitle: string;
  experienceKicker: string;
  present: string;
  aiTitle: string;
  aiKicker: string;
  aiDraftNote: string;
  educationTitle: string;
  educationKicker: string;
  languagesTitle: string;
  publicationsTitle: string;
  publicationsKicker: string;
  projectsTitle: string;
  projectsKicker: string;
  projectsIntro: string;
  projectsFallback: string;
  viewOnGithub: string;
  stars: string;
  hobbiesTitle: string;
  hobbiesKicker: string;
  contactTitle: string;
  contactKicker: string;
  contactText: string;
  contactEmailCta: string;
  footerBuiltWith: string;
  footerRights: string;
  metaDescriptionPlaceholder: string;
}

export const ui: Record<Lang, UIStrings> = {
  en: {
    skipToContent: 'Skip to content',
    siteOwner: 'Álvaro Jiménez Martín',
    languageLabel: 'Language',
    english: 'English',
    spanish: 'Español',
    heroGreeting: "Hi! I'm Alvaro!",
    heroCtaContact: 'Get in touch',
    heroCtaResume: 'Download résumé',
    resumeFileName: 'Alvaro_Jimenez_Martin_Resume.pdf',
    aboutTitle: 'About',
    aboutKicker: 'A quick introduction',
    skillsTitle: 'Skills',
    skillsKicker: 'What I work with',
    experienceTitle: 'Experience',
    experienceKicker: 'Where I’ve worked',
    present: 'Present',
    aiTitle: 'AI',
    aiKicker: 'What I’m exploring right now',
    aiDraftNote: 'Draft section — content to be shaped with Álvaro.',
    educationTitle: 'Education',
    educationKicker: 'Where I studied',
    languagesTitle: 'Languages',
    publicationsTitle: 'Publications',
    publicationsKicker: 'Courses I’ve recorded',
    projectsTitle: 'Projects',
    projectsKicker: 'Open source on GitHub',
    projectsIntro: 'A selection of my public repositories, ordered by stars.',
    projectsFallback:
      'The project list could not be loaded when building the site.',
    viewOnGithub: 'View on GitHub',
    stars: 'stars',
    hobbiesTitle: 'Hobbies',
    hobbiesKicker: 'When I’m not coding',
    contactTitle: 'Contact',
    contactKicker: 'Let’s talk',
    contactText:
      'I’m always happy to chat about mobile development, React Native, AI, or new opportunities.',
    contactEmailCta: 'Send me an email',
    footerBuiltWith: 'Built with Astro',
    footerRights: 'All rights reserved.',
    metaDescriptionPlaceholder: 'Description coming soon.',
  },
  es: {
    skipToContent: 'Saltar al contenido',
    siteOwner: 'Álvaro Jiménez Martín',
    languageLabel: 'Idioma',
    english: 'English',
    spanish: 'Español',
    heroGreeting: '¡Hola! ¡Soy Álvaro!',
    heroCtaContact: 'Contáctame',
    heroCtaResume: 'Descargar CV',
    resumeFileName: 'Alvaro_Jimenez_Martin_CV.pdf',
    aboutTitle: 'Sobre mí',
    aboutKicker: 'Una breve presentación',
    skillsTitle: 'Habilidades',
    skillsKicker: 'Con lo que trabajo',
    experienceTitle: 'Experiencia',
    experienceKicker: 'Dónde he trabajado',
    present: 'Actualidad',
    aiTitle: 'IA',
    aiKicker: 'Lo que estoy explorando ahora',
    aiDraftNote: 'Sección en borrador — contenido pendiente de definir con Álvaro.',
    educationTitle: 'Educación',
    educationKicker: 'Dónde estudié',
    languagesTitle: 'Idiomas',
    publicationsTitle: 'Publicaciones',
    publicationsKicker: 'Cursos que he grabado',
    projectsTitle: 'Proyectos',
    projectsKicker: 'Código abierto en GitHub',
    projectsIntro:
      'Una selección de mis repositorios públicos, ordenados por estrellas.',
    projectsFallback:
      'La lista de proyectos no se pudo cargar al generar la web.',
    viewOnGithub: 'Ver en GitHub',
    stars: 'estrellas',
    hobbiesTitle: 'Aficiones',
    hobbiesKicker: 'Cuando no programo',
    contactTitle: 'Contacto',
    contactKicker: 'Hablemos',
    contactText:
      'Siempre me apetece charlar sobre desarrollo móvil, React Native, IA o nuevas oportunidades.',
    contactEmailCta: 'Envíame un email',
    footerBuiltWith: 'Hecha con Astro',
    footerRights: 'Todos los derechos reservados.',
    metaDescriptionPlaceholder: 'Descripción pendiente.',
  },
};

/** Month abbreviation (as stored in data) → display label per language. */
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

/** "may 2022" → "May 2022" / "may 2022" depending on lang. */
export function formatMonthYear(
  month: string,
  year: string,
  lang: Lang,
): string {
  const label = months[lang][month.toLowerCase()] ?? month;
  return `${label} ${year}`;
}
