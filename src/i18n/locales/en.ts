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
      location: "Las Palmas de Gran Canaria, Spain",
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
      meta: "Fullstack developer in Las Palmas de Gran Canaria",
      description: [
        "I'm a fullstack developer and I mostly work with React, TypeScript, Java and Spring Boot. I care as much about the business logic as about the experience of the people using the application.",
        "I've built REST APIs, web interfaces and database integrations, and I enjoy refactoring code so it's clearer and easier to maintain.",
        "During my internship at The Wise Dreams I worked on a billing system for a hotel chain.",
        "On my own I built Tablaria, an inventory app with customisable tables, real-time collaboration and an AI assistant, and as a team we built CanAccesible, a community platform for reporting accessibility barriers in the Canary Islands.",
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
      subtitle: "Fullstack developer intern at The Wise Dreams",
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
    tablariaProject: {
      name: "Project.txt",
      subtitle: "Tablaria",
      meta: "Personal project, October – November 2026",
      description: [
        "Tablaria is a free web app for inventory in customisable tables. Each business creates its own columns, links tables together and works as a team in real time, with the ease of a spreadsheet and the safety of a database.",
        "A use case: a hardware store prints QR labels for its shelves. Scanning one with a phone opens the product's record with its stock, supplier and price, and from there the store logs a delivery or takes stock.",
        "I designed, built and deployed it end to end: frontend, API, database, security, tests and infrastructure. You can try it without signing up at tablaria.es, with “Try the demo”.",
      ],
      bullets: [
        "Typed columns, links between tables, lookups, rollups and formulas.",
        "A calendar with drag and drop, plus low-stock and upcoming-date alerts.",
        "Stock movements with their history, and an activity log for each table.",
        "Printable QR labels and a QR and barcode scanner that uses the camera.",
        "Excel and CSV import and export, with a preview and per-cell validation.",
        "Organisations with roles, shared tables and read-only public links.",
        "Real time and presence: you can see who is editing each cell.",
        "An AI assistant that answers questions about the data, typed or spoken.",
        "Installable app, light and dark themes, a help centre and pre-rendered pages for SEO.",
      ],
    },
    tablariaStack: {
      name: "Stack.txt",
      subtitle: "Tablaria technologies by area",
      description: [
        "Frontend: React 19, TypeScript, Vite, React Router, TanStack Query and TanStack Table, react-hook-form, Tailwind CSS 4, shadcn/ui (Base UI) and react-i18next.",
        "Backend: NestJS 11 with TypeScript, validation with zod and WebSocket with ws for real time.",
        "Database: PostgreSQL 16 with Prisma 7 and migrations, storing each record's values in JSONB.",
        "Shared code: a pnpm monorepo with a package of zod schemas, types and constants used by both the web app and the API.",
        "Security: httpOnly cookies, rotating refresh tokens, argon2id passwords, rate limits and headers with a CSP.",
        "Services: Groq for the AI assistant, Resend for email and Filebase (S3-compatible) for attachments.",
        "Deployment: Render (static site and Docker API), Neon for PostgreSQL and a custom domain.",
        "Testing and CI: Jest, Supertest, Vitest, Testing Library, Playwright, axe and CodeQL on GitHub Actions.",
      ],
    },
    tablariaQuality: {
      name: "Quality.txt",
      subtitle: "Security, quality and accessibility",
      description: [
        "Tablaria was built with the practices of a production product, not as a mock-up.",
      ],
      bullets: [
        "51 architecture decisions documented as ADRs, with their context and consequences.",
        "OWASP Top 10 security audits before releasing versions, with findings and fixes in the changelog.",
        "Backend unit and e2e tests, including that no user can read or change another user's data on any endpoint.",
        "Frontend tests and full flows with Playwright: sign-up, email verification, tables, records and the demo.",
        "Accessibility checked with axe (WCAG 2.2 A and AA) in light and dark themes, including the app's dialogs.",
        "Every pull request runs lint, typecheck, build and all tests on GitHub Actions, and CodeQL looks for security flaws.",
        "A handover guide, a contributing guide, a security policy and an MIT licence.",
      ],
    },
    tablariaDiagram: { name: "Architecture" },
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
    diagram: "Open the interactive diagram",
    projects: {
      tablaria: {
        address: "tablaria.es/showcase",
        hero: {
          title: "Tablaria",
          lede: "Inventory in tables made to measure: each business creates its own columns, links tables and works as a team in real time.",
          role: "Personal project: designed, built and deployed end to end",
          visit: "Try the demo",
          code: "View the code",
        },
        features: {
          heading: "What it does",
          items: [
            {
              id: "home",
              title: "What matters, at a glance",
              text: "The home page brings together totals, tables and upcoming dates. Low-stock and upcoming-date alerts are also flagged in the cells.",
            },
            {
              id: "calendar",
              title: "Calendar",
              text: "Every table with dates has a monthly calendar, and an agenda on phones. Dragging a record to another day changes its date.",
            },
            {
              id: "labels",
              title: "QR labels and scanner",
              text: "Printable labels that open the product's record when scanned, and an in-app scanner that reads QR codes and barcodes with the camera. It installs on a phone like an app.",
            },
            {
              id: "metrics",
              title: "Metrics for every table",
              text: "Totals and averages, products below their minimum, charts by group and trends over time.",
            },
          ],
        },
        more: {
          heading: "And also",
          items: [
            "An AI assistant that answers questions about the data, typed or spoken, using read-only tools.",
            "Real time and presence: changes appear without reloading and you can see who is editing each cell.",
            "Typed columns, links between tables, lookups, rollups and custom formulas.",
            "Organisations with roles, tables shared by email and read-only public links.",
            "Excel and CSV import and export, with a preview and per-cell validation.",
            "Stock and activity history: who changed what, and when.",
            "A public help centre and pre-rendered pages for search engines and AI assistants.",
          ],
        },
        architecture: {
          heading: "Architecture",
          intro:
            "A pnpm monorepo: a pre-rendered static web app, a NestJS API and PostgreSQL, with zod schemas shared between frontend and backend.",
          layers: [
            {
              title: "Web",
              items: [
                "React 19 and Vite",
                "TanStack Query and Table",
                "Tailwind CSS 4 and shadcn/ui",
                "Pre-rendered public pages",
              ],
            },
            {
              title: "API",
              items: [
                "NestJS 11 and zod",
                "Sessions in httpOnly cookies",
                "WebSocket with a ticket",
                "Read-only AI assistant",
              ],
            },
            {
              title: "Data",
              items: [
                "PostgreSQL 16 on Neon",
                "Prisma 7 and migrations",
                "Records in JSONB",
                "Attachments in a private S3 bucket",
              ],
            },
          ],
          services: {
            title: "External services",
            items: ["Groq", "Resend", "Filebase"],
          },
          deploy: {
            title: "Deployment",
            items: ["Render", "Docker", "Neon", "GitHub Actions"],
          },
        },
        contribution: {
          heading: "What I built",
          items: [
            "The product and the interface, from the landing page to the demo with sample data.",
            "The React and TypeScript frontend: editable tables, calendar, metrics, scanner and installable app.",
            "The NestJS API with Prisma: data model, role-based permissions, real time and the AI assistant.",
            "Authentication: httpOnly cookies, rotating refresh tokens with theft detection, and argon2id.",
            "Unit, e2e and accessibility tests, and CI with GitHub Actions and CodeQL.",
            "Deployment on Render, Neon, Resend and Filebase, with a custom domain.",
          ],
        },
        decisions: {
          heading: "Technical decisions",
          items: [
            {
              title: "Flexible tables in JSONB",
              text: "Each user's tables are metadata, not physical tables: values are stored in JSONB by column id. Search, filters and sorting are parameterised SQL built only from columns that exist, and a test checks that user input never reaches the SQL text.",
            },
            {
              title: "Sessions that detect theft",
              text: "A 15-minute access token and an opaque refresh token, both in httpOnly cookies. Every refresh rotates the token, and reusing one that was already rotated revokes the whole session. Sign-up and sign-in never reveal which emails exist.",
            },
            {
              title: "Real time that leaks no data",
              text: "The WebSocket only announces that a table changed, and the browser fetches the data again from the API, which checks access. The connection opens with a single-use ticket, because the API lives on a different domain from the web app.",
            },
            {
              title: "An AI that can only read",
              text: "The assistant uses read-only tools that run with the user's permissions. Even if a record contains malicious instructions, the worst outcome is a wrong answer: never reading someone else's data or changing anything.",
            },
            {
              title: "Formulas without eval",
              text: "A purpose-built parser shared by the API and the form, with spreadsheet-style functions (IF, ROUND, TODAY…) and size limits so nobody can overload the server.",
            },
          ],
        },
        team: {
          heading: "How I worked",
          text: "Every feature went in through a pull request with CI and shipped in a release with notes in the changelog.",
          facts: [
            "51 architecture decisions documented as ADRs.",
            "OWASP Top 10 security audits before releasing versions.",
            "Accessibility checked with axe (WCAG 2.2 A and AA) on every pull request.",
            "Tests with Jest, Vitest and Playwright, and security analysis with CodeQL.",
            "Open source under the MIT licence.",
          ],
        },
      },
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
          items: [
            {
              id: "report",
              title: "Report incidents",
              text: "Anyone can post an accessibility barrier with photos. The community comments on it, likes it and follows its progress.",
            },
            {
              id: "map",
              title: "Interactive map",
              text: "Incidents are shown on a Leaflet map, and coordinates are turned into addresses with the Nominatim API.",
            },
            {
              id: "manage",
              title: "Management and notifications",
              text: "Dashboards for users and administrators, a support chat and real-time notifications.",
            },
          ],
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
      tablariaTable:
        "Tablaria products table with categories, linked suppliers and prices",
      tablariaHome: "Tablaria home with totals, tables and upcoming dates",
      tablariaCalendar: "Tablaria orders calendar, coloured by status",
      tablariaLabels: "Sheet of product QR labels in Tablaria",
      tablariaMetrics:
        "Metrics for the Tablaria products table, with low-stock alerts and charts",
      tablariaMobile: "A Tablaria product record on a phone, with its QR label",
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
    location: "Las Palmas de Gran Canaria, Spain",
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
