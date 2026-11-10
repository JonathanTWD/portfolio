import type {
  GalleryImageId,
  Language,
  LocationText,
  LocationTextId,
  ShowcasePage,
  ShowcaseProjectId,
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
  showcaseFile: { name: "Escaparate" },
  // BORRADOR: basado en tu CV. Reescríbelo con tus palabras cuando quieras.
  aboutMe: {
    name: "sobre-mi.txt",
    subtitle: "Jonathan Morera",
    meta: "Desarrollador fullstack en Las Palmas de Gran Canaria",
    description: [
      "Soy desarrollador fullstack y trabajo sobre todo con React, TypeScript, Java y Spring Boot. Me interesa tanto la lógica de negocio como la experiencia de quien usa la aplicación.",
      "He desarrollado APIs REST, interfaces web e integraciones con bases de datos, y disfruto refactorizando código para que sea más claro y fácil de mantener.",
      "En mis prácticas en The Wise Dreams trabajé en un sistema de facturación para una cadena hotelera.",
      "Por mi cuenta he creado Tablaria, una aplicación de inventario en tablas personalizables con tiempo real y un asistente de IA, y en equipo desarrollamos CanAccesible, una plataforma comunitaria para reportar barreras de accesibilidad en Canarias.",
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
    subtitle: "Desarrollador fullstack en prácticas en The Wise Dreams",
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
  studies: {
    name: "estudios.txt",
    subtitle: "Estudios",
    sections: [
      {
        title: "Curso de especialización en IA y Big Data",
        meta: "IES El Rincón, 2026 – actualidad",
      },
      {
        title: "Desarrollo de Aplicaciones Web (DAW)",
        meta: "IES El Rincón, 2024 – 2026",
        description: [
          "Ciclo formativo de grado superior en Desarrollo de Aplicaciones Web. CanAccesible nació en este ciclo, como proyecto de un equipo de estudiantes de segundo curso.",
        ],
      },
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
  tablariaProject: {
    name: "Proyecto.txt",
    subtitle: "Tablaria",
    meta: "Proyecto personal, octubre – noviembre de 2026",
    description: [
      "Tablaria es una aplicación web gratuita de inventario en tablas personalizables. Cada negocio crea sus columnas, enlaza unas tablas con otras y trabaja en equipo en tiempo real, con la comodidad de una hoja de cálculo y la seguridad de una base de datos.",
      "Un caso de uso: una ferretería imprime etiquetas QR para sus estanterías. Al escanear una con el móvil se abre la ficha del producto con su stock, su proveedor y su precio, y desde ahí registra una entrada o hace inventario.",
      "Lo diseñé, desarrollé y desplegué de principio a fin: frontend, API, base de datos, seguridad, tests e infraestructura. Se puede probar sin registrarse en tablaria.es, con «Probar la demo».",
    ],
    bullets: [
      "Columnas con tipo, relaciones entre tablas, consultas, resúmenes y fórmulas.",
      "Calendario con arrastrar y soltar, y avisos de stock bajo y de fechas próximas.",
      "Movimientos de stock con su historial, e historial de actividad de cada tabla.",
      "Etiquetas QR para imprimir y un escáner de QR y códigos de barras con la cámara.",
      "Importar y exportar Excel y CSV, con vista previa y validación de cada celda.",
      "Organizaciones con roles, tablas compartidas y enlaces públicos de solo lectura.",
      "Tiempo real y presencia: se ve quién edita cada celda.",
      "Asistente de IA que responde preguntas sobre los datos, por escrito o con voz.",
      "App instalable, tema claro y oscuro, centro de ayuda y páginas prerenderizadas para SEO.",
    ],
  },
  tablariaStack: {
    name: "Stack.txt",
    subtitle: "Tecnologías de Tablaria por área",
    description: [
      "Frontend: React 19, TypeScript, Vite, React Router, TanStack Query y TanStack Table, react-hook-form, Tailwind CSS 4, shadcn/ui (Base UI) y react-i18next.",
      "Backend: NestJS 11 con TypeScript, validación con zod y WebSocket con ws para el tiempo real.",
      "Base de datos: PostgreSQL 16 con Prisma 7 y migraciones, con los valores de cada registro en JSONB.",
      "Código compartido: un monorepo con pnpm y un paquete de esquemas zod, tipos y constantes que usan la web y la API.",
      "Seguridad: cookies httpOnly, refresh tokens rotatorios, contraseñas con argon2id, límites de peticiones y cabeceras con CSP.",
      "Servicios: Groq para el asistente de IA, Resend para el correo y Filebase (compatible con S3) para los adjuntos.",
      "Despliegue: Render (web estática y API en Docker), Neon para PostgreSQL y dominio propio.",
      "Testing y CI: Jest, Supertest, Vitest, Testing Library, Playwright, axe y CodeQL en GitHub Actions.",
    ],
  },
  tablariaQuality: {
    name: "Calidad.txt",
    subtitle: "Seguridad, calidad y accesibilidad",
    description: [
      "Tablaria se construyó con las prácticas de un producto en producción, no como una maqueta.",
    ],
    bullets: [
      "51 decisiones de arquitectura documentadas como ADR, con su contexto y sus consecuencias.",
      "Auditorías de seguridad OWASP Top 10 antes de publicar las versiones, con los hallazgos y su solución en el changelog.",
      "Tests unitarios y e2e del backend, incluido que ningún usuario pueda leer ni modificar los datos de otro en ningún endpoint.",
      "Tests del frontend y flujos completos con Playwright: registro, verificación por email, tablas, registros y la demo.",
      "Accesibilidad comprobada con axe (WCAG 2.2 A y AA) en tema claro y oscuro, también en los diálogos de la app.",
      "Cada pull request pasa lint, typecheck, build y todos los tests en GitHub Actions, y CodeQL busca fallos de seguridad.",
      "Guía de traspaso, guía de contribución, política de seguridad y licencia MIT.",
    ],
  },
  tablariaDiagram: { name: "Arquitectura" },
  canaccesibleProject: {
    name: "Proyecto.txt",
    description: [
      "CanAccesible es una plataforma comunitaria para reportar y mejorar la accesibilidad en las Islas Canarias.",
      "Las personas pueden publicar incidencias de accesibilidad, añadir imágenes, dar me gusta y comentar reportes, seguir su evolución y explorar las incidencias en un mapa interactivo.",
      "El producto incluye también paneles de usuario, chat de soporte con administradores, notificaciones en tiempo real, interfaz bilingüe y un blog centrado en accesibilidad.",
      "El equipo trabaja con metodología ágil usando GitHub Projects, ramas por funcionalidad, pull requests, tests, documentación técnica y despliegue en producción en DigitalOcean.",
      "Equipo: Carlos Pérez Santana, Iriome Matos González y Jonathan Josué Morera Apaza.",
      "Mi aportación: autenticación y flujos de usuario con JWT, perfil y avatar, recuperación y cambio de contraseña, correo transaccional con Resend, mejoras de SEO, infraestructura de tests del frontend, tests de backend y frontend, trabajo en los dominios User, Role, Notification e IncidentComment, y participación en la gestión y el despliegue del proyecto en el VPS de DigitalOcean.",
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
  tablariaTable:
    "Tabla de productos de Tablaria con categorías, proveedores enlazados y precios",
  tablariaHome:
    "Inicio de Tablaria con las cifras, las tablas y las fechas próximas",
  tablariaCalendar: "Calendario de pedidos de Tablaria, coloreado por estado",
  tablariaLabels: "Hoja de etiquetas QR de los productos en Tablaria",
  tablariaMetrics:
    "Métricas de la tabla de productos en Tablaria, con avisos de bajo mínimo y gráficos",
  tablariaMobile:
    "Ficha de un producto de Tablaria en el móvil, con su etiqueta QR",
  about: "Página «Sobre nosotros» de CanAccesible",
  login: "Inicio de sesión de CanAccesible",
  landing: "Página de inicio de CanAccesible",
  map: "Mapa de incidencias de CanAccesible",
  incident: "Detalle de una incidencia en CanAccesible",
  contact: "Página de contacto de CanAccesible",
  blog: "Blog de CanAccesible",
  management: "Gestión de incidencias en CanAccesible",
};

const showcasePages: Record<ShowcaseProjectId, ShowcasePage> = {
  tablaria: {
    address: "tablaria.es/escaparate",
    hero: {
      title: "Tablaria",
      lede: "Inventario en tablas hechas a tu medida: cada negocio crea sus columnas, enlaza tablas y trabaja en equipo en tiempo real.",
      role: "Proyecto personal: diseño, desarrollo y despliegue de principio a fin",
      visit: "Probar la demo",
      code: "Ver el código",
    },
    features: {
      heading: "Qué hace",
      items: [
        {
          id: "home",
          title: "Lo importante, de un vistazo",
          text: "El inicio reúne las cifras, las tablas y las fechas que se acercan. Los avisos de stock bajo y de fechas próximas también se marcan en las celdas.",
        },
        {
          id: "calendar",
          title: "Calendario",
          text: "Cada tabla con fechas tiene su calendario mensual, y en el móvil una agenda. Arrastrar un registro a otro día cambia su fecha.",
        },
        {
          id: "labels",
          title: "Etiquetas QR y escáner",
          text: "Etiquetas para imprimir que abren la ficha del producto al escanearlas, y un escáner en la app que lee QR y códigos de barras con la cámara. Se instala en el móvil como una app.",
        },
        {
          id: "metrics",
          title: "Métricas de cada tabla",
          text: "Totales y medias, productos bajo mínimo, gráficos por grupos y evolución en el tiempo.",
        },
      ],
    },
    more: {
      heading: "Y además",
      items: [
        "Asistente de IA que responde preguntas sobre los datos, por escrito o con voz, con herramientas de solo lectura.",
        "Tiempo real y presencia: los cambios aparecen sin recargar y se ve quién edita cada celda.",
        "Columnas con tipo, relaciones entre tablas, consultas, resúmenes y fórmulas propias.",
        "Organizaciones con roles, tablas compartidas por email y enlaces públicos de solo lectura.",
        "Importar y exportar Excel y CSV, con vista previa y validación de cada celda.",
        "Historial de stock y de actividad: quién cambió qué y cuándo.",
        "Centro de ayuda público y páginas prerenderizadas para buscadores y asistentes de IA.",
      ],
    },
    architecture: {
      heading: "Arquitectura",
      intro:
        "Un monorepo con pnpm: web estática prerenderizada, API en NestJS y PostgreSQL, con esquemas zod compartidos entre el frontend y el backend.",
      layers: [
        {
          title: "Web",
          items: [
            "React 19 y Vite",
            "TanStack Query y Table",
            "Tailwind CSS 4 y shadcn/ui",
            "Páginas públicas prerenderizadas",
          ],
        },
        {
          title: "API",
          items: [
            "NestJS 11 y zod",
            "Sesión con cookies httpOnly",
            "WebSocket con ticket",
            "Asistente de IA de solo lectura",
          ],
        },
        {
          title: "Datos",
          items: [
            "PostgreSQL 16 en Neon",
            "Prisma 7 y migraciones",
            "Registros en JSONB",
            "Adjuntos en un bucket S3 privado",
          ],
        },
      ],
      services: {
        title: "Servicios externos",
        items: ["Groq", "Resend", "Filebase"],
      },
      deploy: {
        title: "Despliegue",
        items: ["Render", "Docker", "Neon", "GitHub Actions"],
      },
    },
    contribution: {
      heading: "Qué hice",
      items: [
        "El producto y la interfaz, desde la landing hasta la demo con datos de ejemplo.",
        "El frontend en React y TypeScript: tablas editables, calendario, métricas, escáner y app instalable.",
        "La API en NestJS con Prisma: modelo de datos, permisos por rol, tiempo real y asistente de IA.",
        "La autenticación: cookies httpOnly, refresh tokens rotatorios con detección de robo y argon2id.",
        "Los tests unitarios, e2e y de accesibilidad, y la CI con GitHub Actions y CodeQL.",
        "El despliegue en Render, Neon, Resend y Filebase, con dominio propio.",
      ],
    },
    decisions: {
      heading: "Decisiones técnicas",
      items: [
        {
          title: "Tablas flexibles en JSONB",
          text: "Las tablas de cada usuario son metadatos, no tablas físicas: los valores se guardan en JSONB por id de columna. La búsqueda, los filtros y el orden son SQL parametrizado, construido solo con columnas que existen, y un test comprueba que la entrada del usuario nunca llega al texto SQL.",
        },
        {
          title: "Sesiones que detectan robos",
          text: "Un access token de 15 minutos y un refresh token opaco, ambos en cookies httpOnly. Cada refresh rota el token, y reutilizar uno ya rotado revoca toda la sesión. El registro y el inicio de sesión no revelan qué emails existen.",
        },
        {
          title: "Tiempo real que no filtra datos",
          text: "El WebSocket solo avisa de que una tabla cambió, y el navegador vuelve a pedir los datos a la API, que comprueba el acceso. La conexión se abre con un ticket de un solo uso, porque la API vive en otro dominio que la web.",
        },
        {
          title: "Una IA que solo puede leer",
          text: "El asistente usa herramientas de solo lectura que se ejecutan con los permisos del usuario. Aunque un registro contenga instrucciones maliciosas, lo peor posible es una respuesta equivocada: nunca leer datos ajenos ni cambiar nada.",
        },
        {
          title: "Fórmulas sin eval",
          text: "Un analizador propio, compartido por la API y el formulario, con funciones en español como en una hoja de cálculo (SI, REDONDEAR, HOY…) y límites de tamaño para que nadie sobrecargue el servidor.",
        },
      ],
    },
    team: {
      heading: "Cómo lo trabajé",
      text: "Cada función entró por una pull request con CI y se publicó en una versión con sus notas en el changelog.",
      facts: [
        "51 decisiones de arquitectura documentadas como ADR.",
        "Auditorías de seguridad OWASP Top 10 antes de publicar las versiones.",
        "Accesibilidad comprobada con axe (WCAG 2.2 A y AA) en cada pull request.",
        "Tests con Jest, Vitest y Playwright, y análisis de seguridad con CodeQL.",
        "Código abierto con licencia MIT.",
      ],
    },
  },
  canaccesible: {
    address: "canaccesible.es/escaparate",
    hero: {
      title: "CanAccesible",
      lede: "Plataforma comunitaria para reportar barreras de accesibilidad en Canarias y consultarlas en un mapa interactivo.",
      role: "Desarrollador fullstack en un equipo de tres personas",
      visit: "Visitar la web",
      code: "Ver el código",
    },
    features: {
      heading: "Qué hace",
      items: [
        {
          id: "report",
          title: "Reportar incidencias",
          text: "Cualquiera puede publicar una barrera de accesibilidad con fotos. La comunidad la comenta, le da me gusta y sigue su evolución.",
        },
        {
          id: "map",
          title: "Mapa interactivo",
          text: "Las incidencias se muestran sobre un mapa con Leaflet, y las coordenadas se convierten en direcciones con la API de Nominatim.",
        },
        {
          id: "manage",
          title: "Gestión y notificaciones",
          text: "Paneles para usuarios y administradores, chat de soporte y notificaciones en tiempo real.",
        },
      ],
    },
    architecture: {
      heading: "Arquitectura",
      intro:
        "Una aplicación web de tres capas, desplegada con contenedores en DigitalOcean.",
      layers: [
        {
          title: "Cliente",
          items: [
            "React 19 y Vite",
            "Zustand",
            "Tailwind CSS",
            "react-i18next",
          ],
        },
        {
          title: "API REST",
          items: [
            "Node.js y Express",
            "JWT y Express Session",
            "Socket.io",
            "Web Push",
          ],
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
        "Gestión y despliegue: acceso al VPS de DigitalOcean y ayuda con el despliegue de la aplicación en producción.",
      ],
    },
    decisions: {
      heading: "Decisiones técnicas",
      items: [
        {
          title: "Socket.io para el tiempo real",
          text: "Comparamos implementar WebSockets nativos en Node con usar Socket.io, y elegimos Socket.io para las notificaciones y las actualizaciones en tiempo real.",
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
      text: "Metodología ágil con GitHub Projects, ramas por funcionalidad, pull requests, tests, documentación técnica y despliegue en producción en DigitalOcean. Además de desarrollar, participé en la gestión del proyecto y en su despliegue en el VPS.",
      members:
        "Equipo: Carlos Pérez Santana, Iriome Matos González y Jonathan Morera.",
    },
  },
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
  },
  dock: {
    apps: {
      finder: "Portfolio",
      showcase: "Escaparate",
      photos: "Galería",
      contact: "Contacto",
      terminal: "Terminal",
      settings: "Ajustes",
    },
    restoreHint: "Clic para restaurar",
    restore: (name: string) => `Restaurar ${name}`,
  },
  widgets: {
    label: "Widgets",
    dateFormat: "dddd, D [de] MMMM",
    now: {
      title: "Ahora mismo",
      status: "Buscando puesto fullstack",
      detail: "Disponible para entrevistas",
      location: "Las Palmas de Gran Canaria, España",
      action: "Contactar",
    },
    featured: {
      title: "Proyecto destacado",
      action: "Ver en el Escaparate",
    },
  },
  mobile: {
    home: "Inicio",
    backHome: "Volver a la pantalla de inicio",
    apps: "Apps",
    extraApps: {
      resume: "CV",
      about: "Sobre mí",
      experience: "Experiencia",
    },
  },
  onboarding: {
    mobileText:
      "Toca una app para abrirla y usa «Inicio», arriba a la izquierda, para volver.",
    title: "Cómo moverte por el portfolio",
    text: "Abre las apps desde el dock de abajo. Arrastra las ventanas por su barra superior y usa los botones de colores para cerrar, minimizar o maximizar.",
    start: "Empezar por Sobre mí",
    dismiss: "Entendido",
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
  showcase: {
    title: "Escaparate",
    tabs: "Proyectos",
    openSite: (site: string) => `Abrir ${site} en una pestaña nueva`,
    diagram: "Ver el diagrama interactivo",
    projects: showcasePages,
  },
  gallery: {
    title: "Galería",
    projects: "Proyectos",
    open: (alt: string) => `Abrir ${alt}`,
    imageName: (project: string, index: number) => `${project} imagen ${index}`,
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
    location: "Las Palmas de Gran Canaria, España",
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
