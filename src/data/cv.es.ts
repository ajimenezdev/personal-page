import type { CvData } from './types';

/**
 * DRAFT — traducción al español pendiente de revisión por Álvaro.
 * Spanish CV data (draft — pending Álvaro's review).
 */
export const cv: CvData = {
  meta: {
    title: 'Álvaro Jiménez Martín — Ingeniero móvil',
    description:
      'Web personal de Álvaro Jiménez Martín, Mobile Engineer en Meta trabajando en remoto desde España. React Native, desarrollo móvil e IA.',
    authorName: 'Álvaro Jiménez Martín',
    authorAvatar: '/images/avatar.jpg',
    siteUrl: 'https://alvarojimenezmartin.com',
    resumePath: '/resume_alvaro_jimenez.pdf',
    locale: 'es_ES',
  },
  heroRole: 'Mobile Engineer en Meta',
  heroLocation: 'Chiclana de la Frontera, España · En remoto',
  // BORRADOR — revisar.
  authorDescription: `Soy Mobile Engineer en Meta, trabajando en remoto desde Chiclana de la Frontera (España). Me especializo en React Native y desarrollo móvil, con una trayectoria que abarca JavaScript full-stack, soluciones blockchain y una gran variedad de stacks: React, AngularJS, .Net, Java y Android.<br/><br/>
  A lo largo de los años he trabajado en startups, medianas empresas y grandes corporaciones — desde ser uno de los cinco primeros empleados de una startup londinense hasta construir productos móviles a escala global.<br/><br/>
  Mi compromiso es entregar software fiable y de alta calidad: ya sea construyendo una funcionalidad nueva, corrigiendo un error complicado o explorando lo que la IA puede aportar al desarrollo móvil.`,
  skillGroups: [
    {
      title: 'Núcleo',
      items: ['React Native', 'TypeScript', 'React', 'JavaScript'],
    },
    {
      title: 'Con experiencia',
      items: ['CSS', 'HTML', 'Git', 'Node.js'],
    },
    {
      title: 'También en la caja de herramientas',
      items: ['Android', 'Java', '.NET'],
    },
  ],
  jobs: [
    {
      company: 'Meta',
      begin: { month: 'may', year: '2022' },
      duration: null,
      location: 'En remoto',
      occupation: 'Mobile Engineer',
      // BORRADOR — descripción pendiente de redactar por Álvaro.
      description: '',
    },
    {
      company: 'Bitfinex',
      begin: { month: 'oct', year: '2019' },
      duration: '2 años y 7 meses',
      location: 'En remoto',
      occupation: 'Mobile Engineer',
      description:
        'Como miembro del equipo de desarrollo móvil, me especializo en React Native y me encargo de tareas muy variadas: desde mejorar y corregir funcionalidades existentes hasta desarrollar otras nuevas. Mi objetivo es ofrecer soluciones fiables y de alta calidad que respondan a las necesidades de los usuarios.',
    },
    {
      company: 'Lifelabs.io',
      begin: { month: 'may', year: '2018' },
      duration: '1 año y 5 meses',
      location: 'Reino Unido - En remoto',
      occupation: 'Lead Frontend Developer',
      description:
        'Como desarrollador principal de la empresa, lideré el desarrollo frontend y de aplicaciones móviles, además de colaborar en la arquitectura y la coordinación de los equipos de backend y blockchain. Mi compromiso era entregar soluciones de alta calidad trabajando codo con codo con mis compañeros para lograr nuestros objetivos comunes.',
    },
    {
      company: 'Flipper',
      begin: { month: 'oct', year: '2015' },
      duration: '2 años y 7 meses',
      location: 'Londres, Reino Unido',
      occupation: 'Senior Developer',
      description:
        'Como uno de los cinco primeros empleados de la empresa, participé a fondo en todas las áreas técnicas: backend, frontend, bases de datos, devops y BI. Mi foco principal fue el desarrollo frontend, donde asumí un rol de liderazgo dentro del equipo.',
    },
    {
      company: 'Radisson Blu Edwardian London',
      begin: { month: 'oct', year: '2013' },
      duration: '2 años',
      location: 'Londres, Reino Unido',
      occupation: 'Software developer',
      description:
        'Me encargué de desarrollar aplicaciones web responsive para dar soporte a distintas áreas de negocio de la empresa. Además de crear nuevas aplicaciones, mantuve y di soporte al catálogo existente. Como parte de mi trabajo, aprendí continuamente cómo funciona el negocio para aplicar ese conocimiento y proponer mejoras en los sistemas existentes.',
    },
    {
      company: 'HotelBeds',
      begin: { month: 'oct', year: '2012' },
      duration: '1 año',
      location: 'Mallorca, España',
      occupation: 'Software developer',
      description:
        'Como miembro del equipo encargado de crear una nueva web para la venta de entradas complementarias y excursiones vacacionales, me responsabilicé de integrar el nuevo sitio en el motor de reservas existente.',
    },
    {
      company: 'Brujula',
      begin: { month: 'feb', year: '2012' },
      duration: '7 meses',
      location: 'Mallorca, España',
      occupation: 'Junior developer',
      description:
        'Como parte de un equipo de desarrollo que trabajaba para una empresa externa, me encargué de gestionar su intranet: mantener la información de nuevos clientes y empleados, tener el stock actualizado y desarrollar pequeñas aplicaciones. Trabajé estrechamente con mi equipo y con el cliente para asegurar que nuestras soluciones cumplían sus necesidades.',
    },
    {
      company: 'Bizzit',
      begin: { month: 'jul', year: '2010' },
      duration: '3 meses',
      location: 'Mallorca, España',
      occupation: 'Intern developer',
      description:
        'En mi segundo internship de verano, continué trabajando en los mismos módulos del año anterior, ampliando funcionalidades existentes y completando otras nuevas. Esta experiencia me permitió consolidar los conocimientos adquiridos en mi primer internship y seguir creciendo como desarrollador.',
    },
    {
      company: 'Bizzit',
      begin: { month: 'jul', year: '2009' },
      duration: '3 meses',
      location: 'Mallorca, España',
      occupation: 'Intern developer',
      description:
        'Durante mi internship de verano, trabajé en la intranet de la empresa, desarrollando nuevas funcionalidades y corrigiendo errores. Fue una gran oportunidad para ganar experiencia en desarrollo de software y aprender de compañeros con más experiencia.',
    },
  ],
  // BORRADOR — sección nueva, contenido provisional.
  ai: [
    {
      title: 'Desarrollo asistido por IA',
      description:
        'Uso diario de asistentes de programación con IA en todo el flujo de trabajo — prototipado, refactorización y revisión de código — para entregar más rápido sin bajar el listón de calidad.',
      tags: ['LLMs', 'Productividad'],
    },
    {
      title: 'IA en productos móviles',
      description:
        'Explorando cómo los grandes modelos de lenguaje y el machine learning en el dispositivo pueden crear experiencias móviles realmente útiles.',
      tags: ['Móvil', 'Machine learning'],
    },
    {
      title: 'Aprendizaje continuo',
      description:
        'Siguiendo de cerca el mundo de la IA: nuevos modelos, técnicas de evaluación y patrones prácticos para integrar la IA en productos reales.',
      tags: ['LLMs', 'MLOps'],
    },
  ],
  publications: [
    {
      title: 'React Native nivel intermedio',
      company_medium: 'OpenWebinars',
      date: { month: 'jun', year: '2019' },
      link: 'https://openwebinars.net/cursos/react-native-intermedio/',
      description:
        'Formación online grabada para una plataforma española de e-learning. Dirigida a desarrolladores que ya conocen React Native y quieren profundizar en la plataforma.',
    },
    {
      title: 'React Native para principiantes',
      company_medium: 'OpenWebinars',
      date: { month: 'jun', year: '2019' },
      link: 'https://openwebinars.net/cursos/react-native-principiantes/',
      description:
        'Formación online grabada para una plataforma española de e-learning. Dirigida a desarrolladores JS que quieren aprender los fundamentos de React Native.',
    },
  ],
  education: [
    {
      school: 'Universitat de les Illes Balears',
      degree: 'Grado',
      field: 'Ingeniería de Software',
      startYear: 2006,
      endYear: 2011,
    },
  ],
  languages: [
    { language: 'Español', level: 'Nativo', code: 'ES' },
    { language: 'Catalán', level: 'Nativo' },
    { language: 'Inglés', level: 'Fluido, escrito y hablado', code: 'GB' },
  ],
  social: {
    twitter: 'https://twitter.com/ajimenezdev/',
    linkedin: 'https://www.linkedin.com/in/alvarojimenezmartin/',
    github: 'https://github.com/ajimenezdev/',
    email: 'ajmjimens@gmail.com',
  },
  hobbies: [
    { name: 'Fútbol', icon: 'football' },
    { name: 'Fotografía', icon: 'camera' },
    { name: 'Senderismo', icon: 'hiking' },
    { name: 'Viajar', icon: 'travel' },
    { name: 'Cine y series', icon: 'tv' },
  ],
  headerLinks: [
    { label: 'Sobre mí', url: 'about' },
    { label: 'Habilidades', url: 'skills' },
    { label: 'Experiencia', url: 'experience' },
    { label: 'IA', url: 'ai' },
    { label: 'Proyectos', url: 'projects' },
    { label: 'Contacto', url: 'contact' },
  ],
};
