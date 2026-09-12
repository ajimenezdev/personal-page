import type { CvData } from './types';

/**
 * English CV data — primary language of the site.
 * Converted from the old Gatsby `data/siteConfig.js`; the data model's
 * shape is preserved, now as a typed TS module.
 */
export const cv: CvData = {
  meta: {
    title: 'Álvaro Jiménez Martín — Mobile Engineer',
    description:
      'Personal website of Álvaro Jiménez Martín, Mobile Engineer at Meta working remotely from Spain. React Native, mobile development and AI.',
    authorName: 'Álvaro Jiménez Martín',
    authorAvatar: '/images/avatar.jpg',
    siteUrl: 'https://alvarojimenezmartin.com',
    resumePath: '/resume_alvaro_jimenez.pdf',
    locale: 'en_US',
  },
  heroRole: 'Mobile Engineer @ Meta',
  heroLocation: 'Chiclana de la Frontera, Spain · Remote',
  // NOTE (review): refreshed from the old site's text to reflect the current
  // role at Meta. Please review.
  authorDescription: `I'm a Mobile Engineer at Meta, working remotely from Chiclana de la Frontera, Spain. I specialize in React Native and mobile development, with a background that spans full-stack JavaScript, blockchain solutions, and a variety of stacks including React, AngularJS, .Net, Java, and Android.<br/><br/>
  Over the years I've worked with startups, mid-size companies, and large corporations — from being one of the first five employees at a London startup to building mobile products used at global scale.<br/><br/>
  I'm committed to delivering high-quality, reliable software: whether it's building a new feature, fixing a tricky bug, or exploring what AI can do for mobile development.`,
  skillGroups: [
    {
      title: 'Core',
      items: ['React Native', 'TypeScript', 'React', 'JavaScript'],
    },
    {
      title: 'Experienced',
      items: ['CSS', 'HTML', 'Git', 'Node.js'],
    },
    {
      title: 'Also in the toolbox',
      items: ['Android', 'Java', '.NET'],
    },
  ],
  jobs: [
    {
      company: 'Meta',
      begin: { month: 'may', year: '2022' },
      duration: null,
      location: 'Remote',
      occupation: 'Mobile Engineer',
      // NOTE (review): description intentionally left empty — Álvaro to fill in.
      description: '',
    },
    {
      company: 'Bitfinex',
      begin: { month: 'oct', year: '2019' },
      duration: '2 years and 7 months',
      location: 'Remote',
      occupation: 'Mobile Engineer',
      description:
        'As a member of the mobile development team, I specialize in ReactNative and handle a range of tasks, from improving and fixing existing features to developing new ones. My focus is on delivering high-quality, reliable solutions that meet the needs of our users.',
    },
    {
      company: 'Lifelabs.io',
      begin: { month: 'may', year: '2018' },
      duration: '1 year and 5 months',
      location: 'UK - Remote',
      occupation: 'Lead Frontend Developer',
      description:
        'As the lead developer for the company, I was responsible for leading frontend and mobile app development, as well as providing assistance with the architecture and coordination of the backend and blockchain teams. I was committed to delivering high-quality solutions and working collaboratively with my colleagues to achieve our shared goals.',
    },
    {
      company: 'Flipper',
      begin: { month: 'oct', year: '2015' },
      duration: '2 years and 7 months',
      location: 'London, UK',
      occupation: 'Senior Developer',
      description:
        'As one of the first five employees of the company, I have been heavily involved in all technical areas, including backend, frontend, database, devops, and BI. My primary focus has been on frontend development, where I have taken on a leadership role within the team.',
    },
    {
      company: 'Radisson Blu Edwardian London',
      begin: { month: 'oct', year: '2013' },
      duration: '2 years',
      location: 'London, UK',
      occupation: 'Software developer',
      description:
        'I was responsible for developing responsive web applications to support various business areas within the company. In addition to creating new applications, I also maintained and supported the existing catalog of applications. As part of my job, I continuously learned about how the business operates in order to apply that knowledge to my work and propose ways to improve the existing system.',
    },
    {
      company: 'HotelBeds',
      begin: { month: 'oct', year: '2012' },
      duration: '1 year',
      location: 'Majorca, Spain',
      occupation: 'Software developer',
      description:
        'As a member of a team tasked with creating a new website for selling complementary holiday tickets and excursions, I was responsible for integrating the new site into the existing booking engine.',
    },
    {
      company: 'Brujula',
      begin: { month: 'feb', year: '2012' },
      duration: '7 months',
      location: 'Majorca, Spain',
      occupation: 'Junior developer',
      description:
        'As part of a development team working for a third-party company, I was responsible for managing their intranet site. This included tasks such as maintaining information about new customers and employees, keeping the stock up to date, and developing small applications. I worked closely with my team members and the client to ensure that our solutions met their needs and delivered the desired results.',
    },
    {
      company: 'Bizzit',
      begin: { month: 'jul', year: '2010' },
      duration: '3 months',
      location: 'Majorca, Spain',
      occupation: 'Intern developer',
      description:
        'In my second summer internship, I continued working on the same elements from the previous year, extending existing features and completing new ones. This experience allowed me to build on the skills and knowledge that I gained during my first internship and continue to grow as a developer.',
    },
    {
      company: 'Bizzit',
      begin: { month: 'jul', year: '2009' },
      duration: '3 months',
      location: 'Majorca, Spain',
      occupation: 'Intern developer',
      description:
        "During my summer internship, I worked on the company's intranet site, developing new features and fixing existing bugs. I was able to gain valuable experience in software development and work closely with my team members to learn from more experienced people. Overall, the internship was a great opportunity for me to learn and grow as a developer.",
    },
  ],
  // NOTE (review): brand-new section, provisional content — Álvaro to shape.
  ai: [
    {
      title: 'AI-assisted development',
      description:
        'Using modern AI coding assistants across the daily workflow — prototyping, refactoring, and code review — to ship faster without lowering the quality bar.',
      tags: ['LLMs', 'Developer productivity'],
    },
    {
      title: 'AI in mobile products',
      description:
        'Exploring how large language models and on-device machine learning can create genuinely useful mobile experiences.',
      tags: ['Mobile', 'Machine learning'],
    },
    {
      title: 'Continuous learning',
      description:
        'Actively following the AI space: new models, evaluation techniques, and practical patterns for integrating AI into real products.',
      tags: ['LLMs', 'MLOps'],
    },
  ],
  publications: [
    {
      title: 'React Native intermediate level',
      company_medium: 'OpenWebinars',
      date: { month: 'jun', year: '2019' },
      link: 'https://openwebinars.net/cursos/react-native-intermedio/',
      description:
        'Online training recorded for a Spanish e-learning platform. The training is for developers who know a little bit of React Native and want to learn more about the platform.',
    },
    {
      title: 'React Native for beginners',
      company_medium: 'OpenWebinars',
      date: { month: 'jun', year: '2019' },
      link: 'https://openwebinars.net/cursos/react-native-principiantes/',
      description:
        'Online training recorded for a Spanish e-learning platform. The training is for JS developers willing to learn the basics of React Native.',
    },
  ],
  education: [
    {
      school: 'University of the Balearic Islands',
      degree: "Bachelor's degree",
      field: 'Software Engineering',
      startYear: 2006,
      endYear: 2011,
    },
  ],
  languages: [
    { language: 'Spanish', level: 'Native', code: 'ES' },
    { language: 'Catalan', level: 'Native' },
    { language: 'English', level: 'Fluent, written & spoken', code: 'GB' },
  ],
  social: {
    twitter: 'https://twitter.com/ajimenezdev/',
    linkedin: 'https://www.linkedin.com/in/alvarojimenezmartin/',
    github: 'https://github.com/ajimenezdev/',
    email: 'ajmjimens@gmail.com',
  },
  hobbies: [
    { name: 'Football', icon: 'football' },
    { name: 'Photography', icon: 'camera' },
    { name: 'Hiking', icon: 'hiking' },
    { name: 'Traveling', icon: 'travel' },
    { name: 'Movies & Series', icon: 'tv' },
  ],
  headerLinks: [
    { label: 'About', url: 'about' },
    { label: 'Skills', url: 'skills' },
    { label: 'Experience', url: 'experience' },
    { label: 'AI', url: 'ai' },
    { label: 'Projects', url: 'projects' },
    { label: 'Contact', url: 'contact' },
  ],
};
