import type { Dictionary } from "../i18n/locales/es";
import type {
  GalleryImageId,
  LocationTextId,
  ShowcaseProjectId,
  TechCategoryId,
} from "../i18n/types";

export type WindowKey =
  | "settings"
  | "finder"
  | "contact"
  | "resume"
  | "photos"
  | "terminal"
  | "showcase"
  | "txtfile"
  | "imgfile";

export type FolderType =
  "work" | "experience" | "education" | "about" | "resume" | "trash";

export type NavLink = {
  id: number;
  labelKey: keyof Dictionary["navbar"]["links"];
} & (
  | { window: Exclude<WindowKey, "finder" | "txtfile" | "imgfile"> }
  | { folder: FolderType }
);

export type DockAppId = keyof Dictionary["dock"]["apps"];

export type DockApp = {
  id: DockAppId;
  canOpen: boolean;
};

export type TechStackItem = {
  category: TechCategoryId;
  items: string[];
};

export type Social = {
  id: number;
  text: string;
  icon: "github" | "linkedin";
  link: string;
};

export type GalleryImage = {
  id: number;
  img: string;
  altId: GalleryImageId;
};

export type GalleryProject = {
  id: string;
  name: string;
  images: GalleryImage[];
};

export type FileType = "txt" | "url" | "img" | "pdf";

type LocationBase = {
  id: number;
  /** Literal name, used when the name is the same in every language. */
  name?: string;
  /** Translated name and content, read from the i18n dictionaries. */
  textId?: LocationTextId;
};

export type FileLocation = LocationBase & {
  kind: "file";
  fileType: FileType;
  href?: string;
  /** Icon for links: a website, a repository or a certificate. */
  linkStyle?: "web" | "github" | "certificate";
  imageUrl?: string;
  /** Opens one of the portfolio's own windows instead of a link. */
  opensWindow?: "showcase";
  /** Project page to show when opensWindow is the Showcase. */
  showcaseProject?: ShowcaseProjectId;
  /** Portrait shown at the top of the document. */
  photo?: string;
};

export interface FolderLocation extends LocationBase {
  kind: "folder";
  type?: FolderType;
  /** Position of the folder icon on the desktop, as Tailwind classes. */
  windowPosition?: string;
  /** For project folders: their page in the Showcase. */
  showcaseId?: ShowcaseProjectId;
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

export type Locations = Omit<Record<FolderType, FolderLocation>, "work"> & {
  work: WorkLocation;
};

const navLinks = [
  { id: 1, labelKey: "projects", folder: "work" },
  { id: 2, labelKey: "experience", folder: "experience" },
  { id: 3, labelKey: "about", folder: "about" },
  { id: 4, labelKey: "resume", window: "resume" },
  { id: 5, labelKey: "contact", window: "contact" },
] satisfies NavLink[];

const dockApps = [
  {
    id: "finder",
    canOpen: true,
  },
  {
    id: "showcase",
    canOpen: true,
  },
  {
    id: "photos",
    canOpen: true,
  },
  {
    id: "contact",
    canOpen: true,
  },
  {
    id: "terminal",
    canOpen: true,
  },
  {
    id: "settings",
    canOpen: true,
  },
] satisfies DockApp[];

const techStack = [
  {
    category: "frontend",
    items: ["React", "TypeScript", "TanStack Query"],
  },
  {
    category: "backend",
    items: ["Java", "Spring Boot", "Node.js", "Express", "NestJS"],
  },
  {
    category: "database",
    items: ["PostgreSQL", "MySQL", "Oracle", "Prisma"],
  },
  {
    category: "ui",
    items: ["Tailwind CSS", "shadcn/ui", "CSS"],
  },
  {
    category: "testing",
    items: ["Vitest", "Jest", "Supertest", "Playwright"],
  },
  {
    category: "devops",
    items: ["Git", "Docker", "GitHub Actions", "SonarQube"],
  },
] satisfies TechStackItem[];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "github",
    link: "https://github.com/JonathanTWD",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jonathan-m-856238315/",
  },
] satisfies Social[];

const CONTACT_EMAIL = "jonathanmoreraapaza@gmail.com";

const RESUME_URL = "/files/resume.pdf";

const TABLARIA_IMAGES = "/images/tablaria";

const galleryProjects = [
  {
    id: "tablaria",
    name: "Tablaria",
    images: [
      { id: 1, img: `${TABLARIA_IMAGES}/tabla.webp`, altId: "tablariaTable" },
      { id: 2, img: `${TABLARIA_IMAGES}/inicio.webp`, altId: "tablariaHome" },
      {
        id: 3,
        img: `${TABLARIA_IMAGES}/calendario.webp`,
        altId: "tablariaCalendar",
      },
      {
        id: 4,
        img: `${TABLARIA_IMAGES}/etiquetas-qr.webp`,
        altId: "tablariaLabels",
      },
      {
        id: 5,
        img: `${TABLARIA_IMAGES}/metricas.webp`,
        altId: "tablariaMetrics",
      },
      {
        id: 6,
        img: `${TABLARIA_IMAGES}/ficha-movil.webp`,
        altId: "tablariaMobile",
      },
    ],
  },
  {
    id: "canaccesible",
    name: "CanAccesible",
    images: [
      {
        id: 1,
        img: "/images/canaccesible-project/canaccesible-8.webp",
        altId: "landing",
      },
      {
        id: 2,
        img: "/images/canaccesible-project/canaccesible-7.webp",
        altId: "about",
      },
      {
        id: 3,
        img: "/images/canaccesible-project/canaccesible-1.webp",
        altId: "map",
      },
      {
        id: 4,
        img: "/images/canaccesible-project/canaccesible-6.webp",
        altId: "login",
      },
      {
        id: 5,
        img: "/images/canaccesible-project/canaccesible-2.webp",
        altId: "management",
      },
      {
        id: 6,
        img: "/images/canaccesible-project/canaccesible-3.webp",
        altId: "incident",
      },
      {
        id: 7,
        img: "/images/canaccesible-project/canaccesible-4.webp",
        altId: "blog",
      },
      {
        id: 8,
        img: "/images/canaccesible-project/canaccesible-5.webp",
        altId: "contact",
      },
    ],
  },
] satisfies GalleryProject[];

export type ShowcaseShot = {
  src: string;
  alt: GalleryImageId;
  /** Crop to a fixed ratio, so features with different screenshots line up. */
  crop?: { ratio: string; position?: "top" | "bottom" };
};

export type ShowcaseProject = {
  id: ShowcaseProjectId;
  /** Finder folder that holds the project's links. */
  folder: string;
  hero: ShowcaseShot;
  /** Screenshots for the features, matched by id with the dictionary. */
  features: { id: string; shot: ShowcaseShot }[];
  /** Interactive architecture diagram, if the project has one. */
  diagram?: string;
};

const CANACCESIBLE_IMAGES = "/images/canaccesible-project";

/**
 * Projects in the Showcase, in tab order. Add a project here, plus its page
 * under showcase.projects in the dictionaries.
 */
const showcaseProjects: ShowcaseProject[] = [
  {
    id: "tablaria",
    folder: "Tablaria",
    hero: { src: `${TABLARIA_IMAGES}/tabla.webp`, alt: "tablariaTable" },
    features: [
      {
        id: "home",
        shot: { src: `${TABLARIA_IMAGES}/inicio.webp`, alt: "tablariaHome" },
      },
      {
        id: "calendar",
        shot: {
          src: `${TABLARIA_IMAGES}/calendario.webp`,
          alt: "tablariaCalendar",
        },
      },
      {
        id: "labels",
        shot: {
          src: `${TABLARIA_IMAGES}/etiquetas-qr.webp`,
          alt: "tablariaLabels",
          crop: { ratio: "1440 / 640" },
        },
      },
      {
        id: "metrics",
        shot: {
          src: `${TABLARIA_IMAGES}/metricas.webp`,
          alt: "tablariaMetrics",
          crop: { ratio: "16 / 10", position: "bottom" },
        },
      },
    ],
    diagram: "/projects/tablaria/arquitectura.html",
  },
  {
    id: "canaccesible",
    folder: "CanAccesible",
    hero: { src: `${CANACCESIBLE_IMAGES}/canaccesible-8.webp`, alt: "landing" },
    features: [
      {
        id: "report",
        shot: {
          src: `${CANACCESIBLE_IMAGES}/canaccesible-3.webp`,
          alt: "incident",
          crop: { ratio: "1901 / 866" },
        },
      },
      {
        id: "map",
        shot: { src: `${CANACCESIBLE_IMAGES}/canaccesible-1.webp`, alt: "map" },
      },
      {
        id: "manage",
        shot: {
          src: `${CANACCESIBLE_IMAGES}/canaccesible-2.webp`,
          alt: "management",
        },
      },
    ],
  },
];

export {
  navLinks,
  dockApps,
  techStack,
  socials,
  CONTACT_EMAIL,
  RESUME_URL,
  galleryProjects,
  showcaseProjects,
};

const tablariaImages: FileLocation[] = [
  "tabla",
  "inicio",
  "calendario",
  "etiquetas-qr",
  "metricas",
  "ficha-movil",
].map((name, index) => ({
  id: 8 + index,
  name: `${name}.png`,
  kind: "file",
  fileType: "img",
  imageUrl: `${TABLARIA_IMAGES}/${name}.webp`,
}));

const canaccesibleImages: FileLocation[] = Array.from(
  { length: 8 },
  (_, index) => ({
    id: 4 + index,
    name: `image-${index + 1}.png`,
    kind: "file",
    fileType: "img",
    imageUrl: `/images/canaccesible-project/canaccesible-${index + 1}.webp`,
  }),
);

const WORK_LOCATION: WorkLocation = {
  id: 1,
  type: "work",
  textId: "work",
  kind: "folder",
  children: [
    {
      id: 2,
      name: "Tablaria",
      kind: "folder",
      windowPosition: "top-[8vh] left-5",
      showcaseId: "tablaria",
      children: [
        {
          id: 1,
          textId: "showcaseFile",
          kind: "file",
          fileType: "url",
          linkStyle: "web",
          opensWindow: "showcase",
          showcaseProject: "tablaria",
        },
        {
          id: 2,
          textId: "tablariaProject",
          kind: "file",
          fileType: "txt",
        },
        {
          id: 3,
          textId: "tablariaStack",
          kind: "file",
          fileType: "txt",
        },
        {
          id: 4,
          textId: "tablariaQuality",
          kind: "file",
          fileType: "txt",
        },
        {
          id: 5,
          name: "tablaria.es",
          kind: "file",
          fileType: "url",
          linkStyle: "web",
          href: "https://tablaria.es",
        },
        {
          id: 6,
          name: "GitHub",
          kind: "file",
          fileType: "url",
          linkStyle: "github",
          href: "https://github.com/JonathanTWD/tablaria",
        },
        {
          id: 7,
          textId: "tablariaDiagram",
          kind: "file",
          fileType: "url",
          linkStyle: "web",
          href: "/projects/tablaria/arquitectura.html",
        },
        ...tablariaImages,
      ],
    },
    {
      id: 1,
      name: "CanAccesible",
      kind: "folder",
      windowPosition: "top-[22vh] left-5",
      showcaseId: "canaccesible",
      children: [
        {
          id: 13,
          textId: "showcaseFile",
          kind: "file",
          fileType: "url",
          linkStyle: "web",
          opensWindow: "showcase",
          showcaseProject: "canaccesible",
        },
        {
          id: 1,
          textId: "canaccesibleProject",
          kind: "file",
          fileType: "txt",
        },
        {
          id: 12,
          textId: "canaccesibleStack",
          kind: "file",
          fileType: "txt",
        },
        {
          id: 2,
          name: "canaccesible.es",
          kind: "file",
          fileType: "url",
          linkStyle: "web",
          href: "https://canaccesible.es",
        },
        {
          id: 3,
          name: "GitHub",
          kind: "file",
          fileType: "url",
          linkStyle: "github",
          href: "https://github.com/devcarlosperez/CanAccesible",
        },
        ...canaccesibleImages,
      ],
    },
  ],
};

const EXPERIENCE_LOCATION: FolderLocation = {
  id: 5,
  type: "experience",
  textId: "experience",
  kind: "folder",
  children: [
    {
      id: 1,
      textId: "internship",
      kind: "file",
      fileType: "txt",
    },
  ],
};

const EDUCATION_LOCATION: FolderLocation = {
  id: 6,
  type: "education",
  textId: "education",
  kind: "folder",
  children: [
    {
      id: 1,
      textId: "studies",
      kind: "file",
      fileType: "txt",
    },
    {
      id: 3,
      textId: "awards",
      kind: "file",
      fileType: "txt",
    },
    {
      id: 4,
      name: "Generative AI (Microsoft)",
      kind: "file",
      fileType: "url",
      linkStyle: "certificate",
      href: "https://www.linkedin.com/learning/certificates/68e6a5847f21a538bfc4a4958f57d05cdcf77757046b22a5b1a845a6574f4510",
    },
    {
      id: 5,
      name: "TypeScript (DevTalles)",
      kind: "file",
      fileType: "url",
      linkStyle: "certificate",
      href: "https://cursos.devtalles.com/certificates/omlyvd3d93",
    },
  ],
};

const ABOUT_LOCATION: FolderLocation = {
  id: 2,
  type: "about",
  textId: "about",
  kind: "folder",
  children: [
    {
      id: 1,
      textId: "aboutMe",
      kind: "file",
      fileType: "txt",
      photo: "/images/jonathan-1.jpeg",
    },
  ],
};

const RESUME_LOCATION: FolderLocation = {
  id: 3,
  type: "resume",
  textId: "resume",
  kind: "folder",
  children: [
    {
      id: 1,
      textId: "resumePdf",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION: FolderLocation = {
  id: 4,
  type: "trash",
  textId: "trash",
  kind: "folder",
  children: [],
};

/** Sidebar order in the Finder. */
export const locations: Locations = {
  work: WORK_LOCATION,
  experience: EXPERIENCE_LOCATION,
  education: EDUCATION_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const closedWindow = (): WindowConfigEntry => ({
  isOpen: false,
  isMinimized: false,
  isMaximized: false,
  zIndex: INITIAL_Z_INDEX,
  data: null,
});

const WINDOW_CONFIG: Record<WindowKey, WindowConfigEntry> = {
  settings: closedWindow(),
  finder: closedWindow(),
  contact: closedWindow(),
  resume: closedWindow(),
  photos: closedWindow(),
  terminal: closedWindow(),
  showcase: closedWindow(),
  txtfile: closedWindow(),
  imgfile: closedWindow(),
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
