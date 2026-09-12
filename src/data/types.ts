/**
 * Shared TypeScript types for the CV data model.
 * Shape mirrors the original `data/siteConfig.js` from the Gatsby site
 * (kept as typed TS modules instead of plain JSON on purpose).
 */

export type Lang = 'en' | 'es';

export interface SiteMeta {
  /** <title> and og:title */
  title: string;
  /** meta description / og:description */
  description: string;
  authorName: string;
  authorAvatar: string;
  siteUrl: string;
  /** public path of the downloadable résumé PDF */
  resumePath: string;
  locale: string;
}

export interface SkillGroup {
  /** Display title of the group — already localized in each data file. */
  title: string;
  items: string[];
}

export interface MonthYear {
  month: string;
  year: string;
}

export interface Job {
  company: string;
  begin: MonthYear;
  /** Human-readable length of stay, or null when it's the current job. */
  duration: string | null;
  location: string;
  occupation: string;
  /** Empty string means "placeholder pending review". */
  description: string;
}

export interface Publication {
  title: string;
  company_medium: string;
  date: MonthYear;
  link: string;
  description: string;
}

/** Provisional cards for the new "AI" section — content is a draft. */
export interface AiHighlight {
  title: string;
  description: string;
  tags: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
}

export interface SpokenLanguage {
  language: string;
  level: string;
  code?: string;
}

export interface Social {
  twitter: string;
  linkedin: string;
  github: string;
  email: string;
}

export interface Hobby {
  name: string;
  /** Key into the inline icon set (see HobbyIcon.astro). */
  icon: 'football' | 'camera' | 'hiking' | 'travel' | 'tv';
}

export interface NavLink {
  label: string;
  url: string;
}

export interface CvData {
  meta: SiteMeta;
  /** Paragraphs separated by <br/><br/> (same convention as the old site). */
  authorDescription: string;
  heroRole: string;
  heroLocation: string;
  skillGroups: SkillGroup[];
  jobs: Job[];
  /** New section — provisional content, clearly editable. */
  ai: AiHighlight[];
  publications: Publication[];
  education: Education[];
  languages: SpokenLanguage[];
  social: Social;
  hobbies: Hobby[];
  headerLinks: NavLink[];
}

/** Minimal shape of a GitHub repo used by the Projects section. */
export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}
