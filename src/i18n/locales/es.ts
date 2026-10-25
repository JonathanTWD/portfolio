import type {
  GalleryImageId,
  Language,
  LocationText,
  LocationTextId,
  TechCategoryId,
} from "../types";

const locations: Record<LocationTextId, LocationText> = {
  work: { name: "Trabajo" },
  about: { name: "Sobre mí" },
  resume: { name: "Currículum" },
  trash: { name: "Papelera" },
  resumePdf: { name: "CV.pdf" },
  // BORRADOR: texto provisional, sustitúyelo por tu propio "Sobre mí".
  aboutMe: {
    name: "sobre-mi.txt",
    subtitle: "Desarrollador fullstack",
    description: [
      "Soy Jonathan Morera, desarrollador fullstack. Me gusta construir producto de principio a fin: desde la base de datos y la API hasta la interfaz que usa la gente.",
      "Trabajo sobre todo con TypeScript, React y Node.js, y también tengo experiencia con NestJS, Spring Boot y bases de datos relacionales como PostgreSQL, MySQL y Oracle.",
      "Mi proyecto más completo es CanAccesible, una plataforma comunitaria para reportar y mejorar la accesibilidad en Canarias, donde me encargué de la autenticación, los flujos de usuario, el correo transaccional y la infraestructura de tests.",
      "Ahora mismo busco mi próximo puesto como desarrollador fullstack.",
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
    brand: "Portfolio de JonathanDev",
    logoAlt: "Logo de JonathanDev",
    links: {
      projects: "Proyectos",
      contact: "Contacto",
      resume: "CV",
    },
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
      photos: "Galería",
      contact: "Contacto",
      terminal: "Habilidades",
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
    work: "Trabajo",
    search: "Buscar",
    emptyFolder: "Esta carpeta está vacía.",
  },
  locations,
  textFile: {
    photoPlaceholder: "Foto próximamente",
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
    title: "Stack tecnológico",
    command: "show tech stack",
    category: "Categoría",
    technologies: "Tecnologías",
    summary: (categories: number, items: number) =>
      `${items} tecnologías en ${categories} categorías`,
    categories: techCategories,
  },
  contact: {
    title: "Contacto",
    heading: "Hablemos",
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
