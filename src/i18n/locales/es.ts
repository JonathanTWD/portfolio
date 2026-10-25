import type {
  GalleryImageId,
  Language,
  LocationText,
  LocationTextId,
  TechCategoryId,
} from "../types";

const locations: Record<LocationTextId, LocationText> = {
  work: { name: "Proyectos" },
  experience: { name: "Experiencia" },
  education: { name: "Formación" },
  about: { name: "Sobre mí" },
  resume: { name: "Currículum" },
  trash: { name: "Papelera" },
  resumePdf: { name: "CV.pdf" },
  caseStudyFile: { name: "Caso de estudio" },
  // BORRADOR: basado en tu CV. Reescríbelo con tus palabras cuando quieras.
  aboutMe: {
    name: "sobre-mi.txt",
    subtitle: "Jonathan Morera",
    meta: "Desarrollador fullstack",
    description: [
      "Soy desarrollador fullstack y trabajo sobre todo con React, TypeScript, Java y Spring Boot. Me interesa tanto la lógica de negocio como la experiencia de quien usa la aplicación.",
      "He desarrollado APIs REST, interfaces web e integraciones con bases de datos, y disfruto refactorizando código para que sea más claro y fácil de mantener.",
      "En mis prácticas trabajé en un sistema de facturación para una cadena hotelera, y mi proyecto más completo es CanAccesible, una plataforma comunitaria para reportar barreras de accesibilidad en Canarias.",
      "Ahora curso la especialización en IA y Big Data y busco mi próximo puesto como desarrollador fullstack.",
    ],
    bullets: [
      "Inglés B1, con experiencia colaborando en equipos internacionales.",
      "Estudio chino por mi cuenta.",
      "Carné de conducir B.",
    ],
  },
  internship: {
    name: "practicas-fullstack.txt",
    subtitle: "Desarrollador fullstack en prácticas",
    meta: "Enero 2026 – mayo 2026",
    description: [
      "Sistema de facturación para una cadena hotelera, desarrollado de principio a fin con React (TypeScript) y Spring Boot.",
    ],
    bullets: [
      "Desarrollé el sistema end to end, manteniendo la coherencia entre la interfaz y la lógica de negocio.",
      "Refactoricé el código base para eliminar duplicidad, mejorar la legibilidad y reducir la complejidad.",
      "Implementé servicios API REST y conexiones WebSocket para las funcionalidades en tiempo real.",
      "Diseñé e integré un tour interactivo que facilitó la adopción del sistema por parte de sus usuarios.",
    ],
  },
  aiBigData: {
    name: "ia-y-big-data.txt",
    subtitle: "Curso de especialización en IA y Big Data",
    meta: "IES El Rincón, 2026 – actualidad",
  },
  daw: {
    name: "daw.txt",
    subtitle: "Desarrollo de Aplicaciones Web (DAW)",
    meta: "IES El Rincón, 2024 – 2026",
    description: [
      "Ciclo formativo de grado superior en Desarrollo de Aplicaciones Web.",
    ],
  },
  awards: {
    name: "logros.txt",
    subtitle: "Logros",
    bullets: [
      "2022: ganador en la modalidad de grupos de la 1.ª edición del Proyecto DRAGO.",
      "2021: ganador de la fase autonómica de la II Olimpiada Científica Juvenil Española.",
    ],
  },
  canaccesibleProject: {
    name: "Proyecto.txt",
    description: [
      "CanAccesible es una plataforma comunitaria para reportar y mejorar la accesibilidad en las Islas Canarias.",
      "Las personas pueden publicar incidencias de accesibilidad, añadir imágenes, dar me gusta y comentar reportes, seguir su evolución y explorar las incidencias en un mapa interactivo.",
      "El producto incluye también paneles de usuario, chat de soporte con administradores, notificaciones en tiempo real, interfaz bilingüe y un blog centrado en accesibilidad.",
      "El equipo trabaja con metodología ágil usando GitHub Projects, ramas por funcionalidad, pull requests, tests, documentación técnica y despliegue en producción en DigitalOcean.",
      "Equipo: Carlos Pérez Santana, Iriome Matos González y Jonathan Josué Morera Apaza.",
      "Mi aportación: autenticación y flujos de usuario con JWT, perfil y avatar, recuperación y cambio de contraseña, correo transaccional con Resend, mejoras de SEO, infraestructura de tests del frontend, tests de backend y frontend, y trabajo en los dominios User, Role, Notification e IncidentComment.",
    ],
  },
  canaccesibleStack: {
    name: "Stack.txt",
    subtitle: "Tecnologías de CanAccesible por área",
    description: [
      "Frontend: React 19, Vite, React Router, Tailwind CSS, Zustand, React Helmet Async, Headless UI, MUI y Lucide React.",
      "Backend: Node.js y Express.js para la API REST, middlewares, controladores y servicios de negocio.",
      "Base de datos: MySQL como base de datos relacional y Sequelize como ORM, con migraciones y seeders gestionados con Sequelize CLI.",
      "Autenticación y seguridad: JWT para peticiones protegidas, Express Session para sesiones, OpenLDAP y LDAP JS para la gestión de usuarios, y contraseñas protegidas con SSHA.",
      "Mapas y geolocalización: Leaflet y React Leaflet para el mapa interactivo, junto con la API de Nominatim para convertir coordenadas en direcciones.",
      "Comunicación y notificaciones: Socket.io para comunicación en tiempo real, Web Push con VAPID para notificaciones y Resend para correo transaccional.",
      "Archivos e infraestructura: Multer, AWS SDK S3 y DigitalOcean Spaces para imágenes; Docker Compose, DigitalOcean, Nginx y Let's Encrypt para el despliegue.",
      "Testing y calidad: Vitest, React Testing Library, JSDOM, Jest, Supertest, ESLint y Postman.",
      "Internacionalización y servicios externos: react-i18next para español e inglés, y la API de MyMemory para traducir contenido dinámico.",
    ],
  },
};

const galleryImages: Record<GalleryImageId, string> = {
  about: "Página «Sobre nosotros» de CanAccesible",
  login: "Inicio de sesión de CanAccesible",
  landing: "Página de inicio de CanAccesible",
  map: "Mapa de incidencias de CanAccesible",
  incident: "Detalle de una incidencia en CanAccesible",
  contact: "Página de contacto de CanAccesible",
  blog: "Blog de CanAccesible",
  management: "Gestión de incidencias en CanAccesible",
};

const techCategories: Record<TechCategoryId, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Bases de datos",
  ui: "UI y estilos",
  testing: "Testing",
  devops: "DevOps y herramientas",
};

const languageNames: Record<Language, string> = {
  es: "Español",
  en: "English",
};

const es = {
  meta: {
    title: "Portfolio de Jonathan Morera",
  },
  navbar: {
    brand: "Jonathan Morera",
    links: {
      projects: "Proyectos",
      experience: "Experiencia",
      about: "Sobre mí",
      resume: "CV",
      contact: "Contacto",
    },
    menu: "Menú principal",
    switchLanguage: (language: string) => `Cambiar el idioma a ${language}`,
    switchToDark: "Activar el modo oscuro",
    switchToLight: "Activar el modo claro",
    dateFormat: "ddd D MMM HH:mm",
  },
  welcome: {
    greeting: "¡Hola, soy Jonathan! Bienvenido a mi",
    title: "portfolio",
    smallScreen:
      "De momento, este portfolio está pensado para pantallas de escritorio y tablet.",
  },
  dock: {
    apps: {
      finder: "Portfolio",
      casestudy: "Caso de estudio",
      photos: "Galería",
      contact: "Contacto",
      terminal: "Terminal",
      settings: "Ajustes",
    },
    restoreHint: "Clic para restaurar",
    restore: (name: string) => `Restaurar ${name}`,
  },
  windowControls: {
    close: "Cerrar ventana",
    minimize: "Minimizar ventana",
    maximize: "Maximizar ventana",
  },
  finder: {
    favorites: "Favoritos",
    projects: "Proyectos",
    back: "Atrás",
    emptyFolder: "Esta carpeta está vacía.",
  },
  locations,
  textFile: {
    photoPlaceholder: "Foto próximamente",
  },
  caseStudy: {
    title: "Caso de estudio",
    address: "canaccesible.es/caso-de-estudio",
    openSite: "Abrir canaccesible.es en una pestaña nueva",
    hero: {
      title: "CanAccesible",
      lede: "Plataforma comunitaria para reportar barreras de accesibilidad en Canarias y consultarlas en un mapa interactivo.",
      role: "Desarrollador fullstack en un equipo de tres personas",
      visit: "Visitar la web",
      code: "Ver el código",
    },
    features: {
      heading: "Qué hace",
      items: {
        report: {
          title: "Reportar incidencias",
          text: "Cualquiera puede publicar una barrera de accesibilidad con fotos. La comunidad la comenta, le da me gusta y sigue su evolución.",
        },
        map: {
          title: "Mapa interactivo",
          text: "Las incidencias se muestran sobre un mapa con Leaflet, y las coordenadas se convierten en direcciones con la API de Nominatim.",
        },
        manage: {
          title: "Gestión y notificaciones",
          text: "Paneles para usuarios y administradores, chat de soporte y notificaciones en tiempo real.",
        },
      },
    },
    architecture: {
      heading: "Arquitectura",
      intro:
        "Una aplicación web de tres capas, desplegada con contenedores en DigitalOcean.",
      layers: [
        {
          title: "Cliente",
          items: ["React 19 y Vite", "Zustand", "Tailwind CSS", "react-i18next"],
        },
        {
          title: "API REST",
          items: ["Node.js y Express", "JWT y Express Session", "Socket.io", "Web Push"],
        },
        {
          title: "Datos",
          items: ["MySQL", "Sequelize con migraciones", "DigitalOcean Spaces"],
        },
      ],
      services: {
        title: "Servicios externos",
        items: ["Resend", "Nominatim", "MyMemory", "OpenLDAP"],
      },
      deploy: {
        title: "Despliegue",
        items: ["Docker Compose", "Nginx", "Let's Encrypt", "DigitalOcean"],
      },
    },
    contribution: {
      heading: "Mi aportación",
      items: [
        "Autenticación y flujos de usuario con JWT.",
        "Perfil y avatar, recuperación y cambio de contraseña.",
        "Correo transaccional con Resend.",
        "SEO: estructura semántica y metadatos de las páginas.",
        "Infraestructura de tests del frontend y tests de backend y frontend.",
        "Dominios User, Role, Notification e IncidentComment.",
      ],
    },
    // BORRADOR: añade aquí los retos reales y por qué tomasteis cada decisión.
    decisions: {
      heading: "Decisiones técnicas",
      items: [
        {
          title: "Tiempo real por dos vías",
          text: "Socket.io mantiene la aplicación al día mientras está abierta, y Web Push con VAPID avisa aunque la pestaña esté cerrada.",
        },
        {
          title: "Imágenes fuera de la API",
          text: "Las fotos se suben con Multer y se guardan en DigitalOcean Spaces a través del SDK de S3, así el servidor de la API no almacena archivos.",
        },
        {
          title: "Contenido en dos idiomas",
          text: "La interfaz se traduce con react-i18next y el contenido que escriben los usuarios, con la API de MyMemory.",
        },
      ],
    },
    team: {
      heading: "Cómo trabajamos",
      text: "Metodología ágil con GitHub Projects, ramas por funcionalidad, pull requests, tests, documentación técnica y despliegue en producción en DigitalOcean.",
      members:
        "Equipo: Carlos Pérez Santana, Iriome Matos González y Jonathan Morera.",
    },
  },
  gallery: {
    title: "Galería",
    projects: "Proyectos",
    open: (alt: string) => `Abrir ${alt}`,
    imageName: (project: string, index: number) =>
      `${project} imagen ${index}`,
    images: galleryImages,
  },
  terminal: {
    title: "Terminal",
    inputLabel: "Escribe un comando",
    suggestions: "Prueba:",
    intro: "Escribe help para ver todos los comandos.",
    notFound: (command: string) =>
      `Comando no encontrado: ${command}. Escribe help para ver los comandos.`,
    commands: {
      help: "Muestra esta lista",
      skills: "Tecnologías con las que trabajo",
      about: "Quién soy",
      experience: "Experiencia profesional",
      education: "Formación y logros",
      projects: "Proyectos",
      contact: "Cómo contactarme",
      cv: "Abre mi CV",
      theme: "Cambia el tema: theme light, dark o auto",
      lang: "Cambia el idioma: lang es o en",
      clear: "Limpia la terminal",
    },
    opening: (name: string) => `Abriendo ${name}…`,
    themeSet: (name: string) => `Tema cambiado a ${name}.`,
    languageSet: (name: string) => `Idioma cambiado a ${name}.`,
    usage: (usage: string) => `Uso: ${usage}`,
    projectLinks: "Web y repositorio:",
    summary: (categories: number, items: number) =>
      `${items} tecnologías en ${categories} categorías`,
    categories: techCategories,
  },
  contact: {
    title: "Contacto",
    name: "Jonathan Morera",
    role: "Desarrollador fullstack",
    intro:
      "¿Tienes un puesto, un proyecto o una pregunta? Escríbeme y te respondo.",
    email: "Escribir un correo",
    photoAlt: "Foto de Jonathan Morera",
  },
  resume: {
    title: "CV.pdf",
    download: "Descargar CV",
  },
  settings: {
    title: "Ajustes",
    sidebarTitle: "Preferencias",
    sidebarDescription: "Personaliza tu escritorio",
    theme: {
      heading: "Tema",
      description:
        "Elige cómo se ve el portfolio. Tu elección se guarda para la próxima visita.",
      options: {
        light: "Claro",
        dark: "Oscuro",
        system: "Automático",
      },
    },
    language: {
      heading: "Idioma",
      description: "Elige el idioma de todo el portfolio.",
      options: languageNames,
    },
  },
};

export type Dictionary = typeof es;

export default es;
