export type WindowKey =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";

export type NavLink = {
  id: number;
  name: string;
  type: WindowKey;
};

export type NavIcon = {
  id: number;
  img: string;
};

export type DockApp = {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
};

export type BlogPost = {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
};

export type TechStackItem = {
  category: string;
  items: string[];
};

export type Social = {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
};

export type PhotoLink = {
  id: number;
  icon: string;
  title: string;
};

export type GalleryItem = {
  id: number;
  img: string;
};

export type FileType = "txt" | "url" | "img" | "fig" | "pdf";

type LocationBase = {
  id: number;
  name: string;
  icon: string;
  position?: string;
};

export type FileLocation = LocationBase & {
  kind: "file";
  fileType: FileType;
  href?: string;
  description?: string[];
  subtitle?: string;
  image?: string;
  imageUrl?: string;
};

export interface FolderLocation extends LocationBase {
  kind: "folder";
  type?: string;
  windowPosition?: string;
  children: Location[];
}

export type Location = FileLocation | FolderLocation;

export type WorkLocation = Omit<FolderLocation, "children"> & {
  children: FolderLocation[];
};

export type WindowConfigEntry = {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  data: Location | null;
};

export type Locations = {
  work: WorkLocation;
  about: FolderLocation;
  resume: FolderLocation;
  trash: FolderLocation;
};

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
] satisfies NavLink[];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
] satisfies NavIcon[];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
] satisfies DockApp[];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
] satisfies BlogPost[];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
] satisfies TechStackItem[];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#0D1117",
    link: "https://github.com/JonathanTWD",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/jonathan-m-856238315/",
  },
] satisfies Social[];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
] satisfies PhotoLink[];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
] satisfies GalleryItem[];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION: WorkLocation = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "CanAccesible",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[8vh] left-5",
      children: [
        {
          id: 1,
          name: "Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          description: [
            "CanAccesible is a community platform for reporting and improving accessibility across the Canary Islands.",
            "People can publish accessibility incidents, add images, like and comment on reports, follow updates, and explore incidents on an interactive map.",
            "The product also includes user dashboards, administrator support chat, real-time notifications, a bilingual interface, and an accessibility-focused blog.",
            "The team follows an Agile workflow with GitHub Projects, feature branches, pull requests, tests, technical documentation, and production deployment on DigitalOcean.",
            "Team: Carlos Perez Santana, Iriome Matos Gonzalez, and Jonathan Josue Morera Apaza.",
            "JonathanTWD contribution: authentication and user flows with JWT, profile and avatar features, password recovery and change-password flows, transactional email with Resend, SEO improvements, frontend test infrastructure, backend and frontend tests, and work on User, Role, Notification, and IncidentComment domains.",
          ],
        },
        {
          id: 12,
          name: "Stack.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-30",
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
        {
          id: 2,
          name: "canaccesible.es",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://canaccesible.es",
          position: "top-5 right-23",
        },
        {
          id: 3,
          name: "GitHub.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/devcarlosperez/CanAccesible",
          position: "top-5 left-55",
        },
        {
          id: 4,
          name: "image-1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-36 left-5",
          imageUrl: "/images/canaccesible-project/canaccesible-8.png",
        },
        {
          id: 5,
          name: "image-2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-36 left-30",
          imageUrl: "/images/canaccesible-project/canaccesible-2.png",
        },
        {
          id: 6,
          name: "image-3.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-36 left-55",
          imageUrl: "/images/canaccesible-project/canaccesible-3.png",
        },
        {
          id: 7,
          name: "image-4.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-36 right-23",
          imageUrl: "/images/canaccesible-project/canaccesible-4.png",
        },
        {
          id: 8,
          name: "image-5.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-12 left-5",
          imageUrl: "/images/canaccesible-project/canaccesible-5.png",
        },
        {
          id: 9,
          name: "image-6.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-12 left-30",
          imageUrl: "/images/canaccesible-project/canaccesible-6.png",
        },
        {
          id: 10,
          name: "image-7.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-12 left-55",
          imageUrl: "/images/canaccesible-project/canaccesible-7.png",
        },
        {
          id: 11,
          name: "image-8.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-12 right-23",
          imageUrl: "/images/canaccesible-project/canaccesible-8.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION: FolderLocation = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION: FolderLocation = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION: FolderLocation = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations: Locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG: Record<WindowKey, WindowConfigEntry> = {
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
