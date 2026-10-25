import type { Dictionary } from "../i18n/locales/es";
import type {
  GalleryImageId,
  LocationTextId,
  TechCategoryId,
} from "../i18n/types";

export type WindowKey =
  | "settings"
  | "finder"
  | "contact"
  | "resume"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";

export type NavLink = {
  id: number;
  labelKey: keyof Dictionary["navbar"]["links"];
  type: WindowKey;
};

export type NavIcon = {
  id: number;
  img: string;
};

export type DockAppId = keyof Dictionary["dock"]["apps"];

export type DockApp = {
  id: DockAppId;
  icon: string;
  canOpen: boolean;
};

export type TechStackItem = {
  category: TechCategoryId;
  items: string[];
};

export type Social = {
  id: number;
  text: string;
  icon: string;
  bg: string;
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

export type FileType = "txt" | "url" | "img" | "fig" | "pdf";

type LocationBase = {
  id: number;
  /** Literal name, used when the name is the same in every language. */
  name?: string;
  /** Translated name and content, read from the i18n dictionaries. */
  textId?: LocationTextId;
  icon: string;
  position?: string;
};

export type FileLocation = LocationBase & {
  kind: "file";
  fileType: FileType;
  href?: string;
  imageUrl?: string;
  showPhotoSlot?: boolean;
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
    labelKey: "projects",
    type: "finder",
  },
  {
    id: 3,
    labelKey: "contact",
    type: "contact",
  },
  {
    id: 4,
    labelKey: "resume",
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
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "photos",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "settings",
    icon: "settings.png",
    canOpen: true,
  },
] satisfies DockApp[];

const techStack = [
  {
    category: "frontend",
    items: ["React", "TypeScript"],
  },
  {
    category: "backend",
    items: ["Node.js", "Express", "NestJS", "Spring Boot"],
  },
  {
    category: "database",
    items: ["PostgreSQL", "MySQL", "Oracle"],
  },
  {
    category: "ui",
    items: ["Tailwind CSS", "shadcn/ui", "CSS"],
  },
  {
    category: "testing",
    items: ["Vitest", "Jest", "Supertest"],
  },
  {
    category: "devops",
    items: ["Git", "Docker", "SonarQube"],
  },
] satisfies TechStackItem[];

const socials = [
  {
    id: 1,
    text: "GitHub",
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

const CONTACT_EMAIL = "jonathanmoreraapaza@gmail.com";

const galleryProjects = [
  {
    id: "canaccesible",
    name: "CanAccesible",
    images: [
      {
        id: 1,
        img: "/images/canaccesible-project/canaccesible-8.png",
        altId: "about",
      },
      {
        id: 2,
        img: "/images/canaccesible-project/canaccesible-7.png",
        altId: "login",
      },
      {
        id: 3,
        img: "/images/canaccesible-project/canaccesible-1.png",
        altId: "landing",
      },
      {
        id: 4,
        img: "/images/canaccesible-project/canaccesible-6.png",
        altId: "map",
      },
      {
        id: 5,
        img: "/images/canaccesible-project/canaccesible-2.png",
        altId: "incident",
      },
      {
        id: 6,
        img: "/images/canaccesible-project/canaccesible-3.png",
        altId: "contact",
      },
      {
        id: 7,
        img: "/images/canaccesible-project/canaccesible-4.png",
        altId: "blog",
      },
      {
        id: 8,
        img: "/images/canaccesible-project/canaccesible-5.png",
        altId: "management",
      },
    ],
  },
] satisfies GalleryProject[];

export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
  CONTACT_EMAIL,
  galleryProjects,
};

const WORK_LOCATION: WorkLocation = {
  id: 1,
  type: "work",
  textId: "work",
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
          textId: "canaccesibleProject",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
        },
        {
          id: 12,
          textId: "canaccesibleStack",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-30",
        },
        {
          id: 2,
          name: "canaccesible.es",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://canaccesible.es",
          position: "top-5 left-80",
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
          imageUrl: "/images/canaccesible-project/canaccesible-1.png",
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
          position: "top-36 left-80",
          imageUrl: "/images/canaccesible-project/canaccesible-4.png",
        },
        {
          id: 8,
          name: "image-5.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-69 left-5",
          imageUrl: "/images/canaccesible-project/canaccesible-5.png",
        },
        {
          id: 9,
          name: "image-6.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-69 left-30",
          imageUrl: "/images/canaccesible-project/canaccesible-6.png",
        },
        {
          id: 10,
          name: "image-7.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-69 left-55",
          imageUrl: "/images/canaccesible-project/canaccesible-7.png",
        },
        {
          id: 11,
          name: "image-8.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-69 left-80",
          imageUrl: "/images/canaccesible-project/canaccesible-8.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION: FolderLocation = {
  id: 2,
  type: "about",
  textId: "about",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      textId: "aboutMe",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      showPhotoSlot: true,
    },
  ],
};

const RESUME_LOCATION: FolderLocation = {
  id: 3,
  type: "resume",
  textId: "resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      textId: "resumePdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-10 left-5",
    },
  ],
};

const TRASH_LOCATION: FolderLocation = {
  id: 4,
  type: "trash",
  textId: "trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

export const locations: Locations = {
  work: WORK_LOCATION,
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
  txtfile: closedWindow(),
  imgfile: closedWindow(),
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
