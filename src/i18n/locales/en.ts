import type { Dictionary } from "./es";

const en: Dictionary = {
  meta: {
    title: "Jonathan Morera's Portfolio",
  },
  navbar: {
    brand: "Jonathan Morera",
    links: {
      projects: "Projects",
      experience: "Experience",
      about: "About me",
      resume: "Resume",
      contact: "Contact",
    },
    menu: "Main menu",
    switchLanguage: (language) => `Switch language to ${language}`,
    switchToDark: "Turn on dark mode",
    switchToLight: "Turn on light mode",
    dateFormat: "ddd MMM D h:mm A",
  },
  welcome: {
    greeting: "Hey, I'm Jonathan! Welcome to my",
    title: "portfolio",
  },
  dock: {
    apps: {
      finder: "Portfolio",
      showcase: "Showcase",
      photos: "Gallery",
      contact: "Contact",
      terminal: "Terminal",
      settings: "Settings",
    },
    restoreHint: "Click to restore",
    restore: (name) => `Restore ${name}`,
  },
  widgets: {
    label: "Widgets",
    dateFormat: "dddd, MMMM D",
    now: {
      title: "Right now",
      status: "Looking for a fullstack role",
      detail: "Available for interviews",
      action: "Get in touch",
    },
    featured: {
      title: "Featured project",
      action: "View in Showcase",
    },
  },
  mobile: {
    home: "Home",
    backHome: "Back to the home screen",
    apps: "Apps",
    extraApps: {
      resume: "Resume",
      about: "About me",
      experience: "Experience",
    },
  },
  onboarding: {
    mobileText:
      "Tap an app to open it and use Home, at the top left, to go back.",
    title: "How to get around",
    text: "Open apps from the dock at the bottom. Drag windows by their top bar and use the coloured buttons to close, minimize or maximize them.",
    start: "Start with About me",
    dismiss: "Got it",
  },
  windowControls: {
    close: "Close window",
    minimize: "Minimize window",
    maximize: "Maximize window",
  },
  finder: {
    favorites: "Favorites",
    projects: "Projects",
    back: "Back",
    emptyFolder: "This folder is empty.",
  },
  locations: {
    work: { name: "Projects" },
    experience: { name: "Experience" },
    education: { name: "Education" },
    about: { name: "About me" },
    resume: { name: "Resume" },
    trash: { name: "Trash" },
    resumePdf: { name: "Resume.pdf" },
    showcaseFile: { name: "Showcase" },
    // DRAFT: based on your resume. Rewrite it in your own words whenever you like.
    aboutMe: {
      name: "about-me.txt",
      subtitle: "Jonathan Morera",
      meta: "Fullstack developer",
      description: [
        "I'm a fullstack developer and I mostly work with React, TypeScript, Java and Spring Boot. I care as much about the business logic as about the experience of the people using the application.",
        "I've built REST APIs, web interfaces and database integrations, and I enjoy refactoring code so it's clearer and easier to maintain.",
        "During my internship I worked on a billing system for a hotel chain, and my most complete project is CanAccesible, a community platform for reporting accessibility barriers in the Canary Islands.",
        "I'm currently taking the AI and Big Data specialization course and looking for my next role as a fullstack developer.",
      ],
      bullets: [
        "English B1, with experience working in international teams.",
        "Learning Chinese on my own.",
        "Driving licence (B).",
      ],
    },
    internship: {
      name: "fullstack-internship.txt",
      subtitle: "Fullstack developer intern",
      meta: "January 2026 – May 2026",
      description: [
        "Billing system for a hotel chain, built end to end with React (TypeScript) and Spring Boot.",
      ],
      bullets: [
        "Built the system end to end, keeping the interface and the business logic consistent.",
        "Refactored the codebase to remove duplication, improve readability and reduce complexity.",
        "Implemented REST API services and WebSocket connections for real-time features.",
        "Designed and integrated an interactive tour that made the system easier for its users to adopt.",
      ],
    },
    studies: {
      name: "studies.txt",
      subtitle: "Studies",
      sections: [
        {
          title: "Specialization course in AI and Big Data",
          meta: "IES El Rincón, 2026 – present",
        },
        {
          title: "Web Application Development (DAW)",
          meta: "IES El Rincón, 2024 – 2026",
          description: [
            "Two-year higher vocational degree in Web Application Development. CanAccesible started in this course, as a project by a team of second-year students.",
          ],
        },
      ],
    },
    awards: {
      name: "awards.txt",
      subtitle: "Awards",
      bullets: [
        "2022: winner of the group category in the 1st edition of Proyecto DRAGO.",
        "2021: winner of the regional stage of the 2nd Spanish Youth Science Olympiad.",
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
        "My contribution: authentication and user flows with JWT, profile and avatar features, password recovery and change-password flows, transactional email with Resend, SEO improvements, frontend test infrastructure, backend and frontend tests, work on the User, Role, Notification, and IncidentComment domains, and a hand in managing and deploying the project on the DigitalOcean VPS.",
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
  showcase: {
    title: "Showcase",
    tabs: "Projects",
    openSite: (site) => `Open ${site} in a new tab`,
    projects: {
      canaccesible: {
        address: "canaccesible.es/showcase",
        hero: {
          title: "CanAccesible",
          lede: "A community platform for reporting accessibility barriers in the Canary Islands and browsing them on an interactive map.",
          role: "Fullstack developer in a team of three",
          visit: "Visit the website",
          code: "View the code",
        },
        features: {
          heading: "What it does",
          items: {
            report: {
              title: "Report incidents",
              text: "Anyone can post an accessibility barrier with photos. The community comments on it, likes it and follows its progress.",
            },
            map: {
              title: "Interactive map",
              text: "Incidents are shown on a Leaflet map, and coordinates are turned into addresses with the Nominatim API.",
            },
            manage: {
              title: "Management and notifications",
              text: "Dashboards for users and administrators, a support chat and real-time notifications.",
            },
          },
        },
        architecture: {
          heading: "Architecture",
          intro:
            "A three-tier web application, deployed with containers on DigitalOcean.",
          layers: [
            {
              title: "Client",
              items: [
                "React 19 and Vite",
                "Zustand",
                "Tailwind CSS",
                "react-i18next",
              ],
            },
            {
              title: "REST API",
              items: [
                "Node.js and Express",
                "JWT and Express Session",
                "Socket.io",
                "Web Push",
              ],
            },
            {
              title: "Data",
              items: [
                "MySQL",
                "Sequelize with migrations",
                "DigitalOcean Spaces",
              ],
            },
          ],
          services: {
            title: "External services",
            items: ["Resend", "Nominatim", "MyMemory", "OpenLDAP"],
          },
          deploy: {
            title: "Deployment",
            items: ["Docker Compose", "Nginx", "Let's Encrypt", "DigitalOcean"],
          },
        },
        contribution: {
          heading: "My contribution",
          items: [
            "Authentication and user flows with JWT.",
            "Profile and avatar, password recovery and password change.",
            "Transactional email with Resend.",
            "SEO: semantic structure and page metadata.",
            "Frontend testing infrastructure, plus backend and frontend tests.",
            "User, Role, Notification and IncidentComment domains.",
            "Management and deployment: access to the DigitalOcean VPS and help deploying the application to production.",
          ],
        },
        decisions: {
          heading: "Technical decisions",
          items: [
            {
              title: "Socket.io for real time",
              text: "We compared implementing native WebSockets in Node with using Socket.io, and chose Socket.io for notifications and real-time updates.",
            },
            {
              title: "Images outside the API",
              text: "Photos are uploaded with Multer and stored in DigitalOcean Spaces through the S3 SDK, so the API server stores no files.",
            },
            {
              title: "Content in two languages",
              text: "The interface is translated with react-i18next, and content written by users is translated with the MyMemory API.",
            },
          ],
        },
        team: {
          heading: "How we worked",
          text: "Agile workflow with GitHub Projects, feature branches, pull requests, tests, technical documentation and production deployment on DigitalOcean. Besides developing, I took part in managing the project and deploying it to the VPS.",
          members:
            "Team: Carlos Pérez Santana, Iriome Matos González and Jonathan Morera.",
        },
      },
    },
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
    title: "Terminal",
    inputLabel: "Type a command",
    suggestions: "Try:",
    intro: "Type help to see every command.",
    notFound: (command) =>
      `Command not found: ${command}. Type help to see the commands.`,
    commands: {
      help: "Show this list",
      skills: "Technologies I work with",
      about: "Who I am",
      experience: "Work experience",
      education: "Education and awards",
      projects: "Projects",
      contact: "How to reach me",
      cv: "Open my resume",
      theme: "Change the theme: theme light, dark or auto",
      lang: "Change the language: lang es or en",
      clear: "Clear the terminal",
    },
    opening: (name) => `Opening ${name}…`,
    themeSet: (name) => `Theme set to ${name}.`,
    languageSet: (name) => `Language set to ${name}.`,
    usage: (usage) => `Usage: ${usage}`,
    projectLinks: "Website and repository:",
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
    name: "Jonathan Morera",
    role: "Fullstack developer",
    intro:
      "Have a role, a project or a question? Write to me and I'll get back to you.",
    email: "Send an email",
    photoAlt: "Photo of Jonathan Morera",
  },
  resume: {
    title: "Resume.pdf",
    download: "Download CV",
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
