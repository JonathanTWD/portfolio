import type { Dictionary } from "./es";

const en: Dictionary = {
  meta: {
    title: "Jonathan Morera's Portfolio",
  },
  navbar: {
    brand: "JonathanDev's Portfolio",
    logoAlt: "JonathanDev logo",
    links: {
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    dateFormat: "ddd MMM D h:mm A",
  },
  welcome: {
    greeting: "Hey, I'm Jonathan! Welcome to my",
    title: "portfolio",
    smallScreen:
      "For now, this portfolio is designed for desktop and tablet screens.",
  },
  dock: {
    apps: {
      finder: "Portfolio",
      photos: "Gallery",
      contact: "Contact",
      terminal: "Skills",
      settings: "Settings",
    },
    restoreHint: "Click to restore",
    restore: (name) => `Restore ${name}`,
  },
  windowControls: {
    close: "Close window",
    minimize: "Minimize window",
    maximize: "Maximize window",
  },
  finder: {
    favorites: "Favorites",
    work: "Work",
    search: "Search",
    emptyFolder: "This folder is empty.",
  },
  locations: {
    work: { name: "Work" },
    about: { name: "About me" },
    resume: { name: "Resume" },
    trash: { name: "Trash" },
    resumePdf: { name: "Resume.pdf" },
    // DRAFT: placeholder copy, replace it with your own "About me".
    aboutMe: {
      name: "about-me.txt",
      subtitle: "Fullstack developer",
      description: [
        "I'm Jonathan Morera, a fullstack developer. I like building products end to end: from the database and the API to the interface people actually use.",
        "I mostly work with TypeScript, React and Node.js, and I also have experience with NestJS, Spring Boot and relational databases such as PostgreSQL, MySQL and Oracle.",
        "My most complete project is CanAccesible, a community platform for reporting and improving accessibility in the Canary Islands, where I owned authentication, user flows, transactional email and the testing infrastructure.",
        "I'm currently looking for my next role as a fullstack developer.",
      ],
    },
    canaccesibleProject: {
      name: "Project.txt",
      description: [
        "CanAccesible is a community platform for reporting and improving accessibility across the Canary Islands.",
        "People can publish accessibility incidents, add images, like and comment on reports, follow updates, and explore incidents on an interactive map.",
        "The product also includes user dashboards, administrator support chat, real-time notifications, a bilingual interface, and an accessibility-focused blog.",
        "The team follows an Agile workflow with GitHub Projects, feature branches, pull requests, tests, technical documentation, and production deployment on DigitalOcean.",
        "Team: Carlos Pérez Santana, Iriome Matos González, and Jonathan Josué Morera Apaza.",
        "My contribution: authentication and user flows with JWT, profile and avatar features, password recovery and change-password flows, transactional email with Resend, SEO improvements, frontend test infrastructure, backend and frontend tests, and work on the User, Role, Notification, and IncidentComment domains.",
      ],
    },
    canaccesibleStack: {
      name: "Stack.txt",
      subtitle: "CanAccesible technologies by area",
      description: [
        "Frontend: React 19, Vite, React Router, Tailwind CSS, Zustand, React Helmet Async, Headless UI, MUI, and Lucide React.",
        "Backend: Node.js and Express.js for the REST API, middleware, controllers, and business services.",
        "Database: MySQL as the relational database and Sequelize as the ORM, with migrations and seeders managed through Sequelize CLI.",
        "Authentication and security: JWT for protected requests, Express Session for sessions, OpenLDAP and LDAP JS for user management, and SSHA-protected passwords.",
        "Maps and geolocation: Leaflet and React Leaflet for the interactive map, together with the Nominatim API for converting coordinates into addresses.",
        "Communication and notifications: Socket.io for real-time communication, Web Push with VAPID for notifications, and Resend for transactional email.",
        "Files and infrastructure: Multer, AWS SDK S3, and DigitalOcean Spaces for images; Docker Compose, DigitalOcean, Nginx, and Let's Encrypt for deployment.",
        "Testing and quality: Vitest, React Testing Library, JSDOM, Jest, Supertest, ESLint, and Postman.",
        "Internationalization and external services: react-i18next for Spanish and English, and the MyMemory API for translating dynamic content.",
      ],
    },
  },
  textFile: {
    photoPlaceholder: "Photo coming soon",
  },
  gallery: {
    title: "Gallery",
    projects: "Projects",
    open: (alt) => `Open ${alt}`,
    imageName: (project, index) => `${project} image ${index}`,
    images: {
      about: "CanAccesible about page",
      login: "CanAccesible login page",
      landing: "CanAccesible landing page",
      map: "CanAccesible incidents map",
      incident: "CanAccesible incident detail",
      contact: "CanAccesible contact page",
      blog: "CanAccesible blog page",
      management: "CanAccesible incident management page",
    },
  },
  terminal: {
    title: "Tech stack",
    command: "show tech stack",
    category: "Category",
    technologies: "Technologies",
    summary: (categories, items) =>
      `${items} technologies across ${categories} categories`,
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Databases",
      ui: "UI & styling",
      testing: "Testing",
      devops: "DevOps & tools",
    },
  },
  contact: {
    title: "Contact",
    heading: "Let's talk",
    photoAlt: "Photo of Jonathan Morera",
  },
  resume: {
    title: "Resume.pdf",
    download: "Download resume",
  },
  settings: {
    title: "Settings",
    sidebarTitle: "Preferences",
    sidebarDescription: "Personalize your desktop",
    theme: {
      heading: "Theme",
      description:
        "Choose how the portfolio looks. Your choice is saved for your next visit.",
      options: {
        light: "Light",
        dark: "Dark",
        system: "Auto",
      },
    },
    language: {
      heading: "Language",
      description: "Choose the language for the whole portfolio.",
      options: {
        es: "Español",
        en: "English",
      },
    },
  },
};

export default en;
