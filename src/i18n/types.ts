export type Language = "es" | "en";

export const LANGUAGES: Language[] = ["es", "en"];

export type LocationTextId =
  | "work"
  | "experience"
  | "education"
  | "about"
  | "resume"
  | "trash"
  | "resumePdf"
  | "aboutMe"
  | "internship"
  | "studies"
  | "awards"
  | "tablariaProject"
  | "tablariaStack"
  | "tablariaQuality"
  | "tablariaDiagram"
  | "canaccesibleProject"
  | "canaccesibleStack"
  | "showcaseFile";

export type LocationText = {
  name: string;
  /** Document heading. */
  subtitle?: string;
  /** Short line under the heading: dates, place. */
  meta?: string;
  description?: string[];
  bullets?: string[];
  /** Several entries in one document, each with its own heading. */
  sections?: { title: string; meta?: string; description?: string[] }[];
};

export type GalleryImageId =
  | "tablariaTable"
  | "tablariaHome"
  | "tablariaCalendar"
  | "tablariaLabels"
  | "tablariaMetrics"
  | "tablariaMobile"
  | "about"
  | "login"
  | "landing"
  | "map"
  | "incident"
  | "contact"
  | "blog"
  | "management";

export type TechCategoryId =
  "frontend" | "backend" | "database" | "ui" | "testing" | "devops";

/** Projects with their own page in the Showcase. */
export type ShowcaseProjectId = "tablaria" | "canaccesible";

/** The text of one project's page in the Showcase. */
export type ShowcasePage = {
  address: string;
  hero: {
    title: string;
    lede: string;
    role: string;
    visit: string;
    code: string;
  };
  /** Each item pairs with a screenshot by id (see showcaseProjects). */
  features: {
    heading: string;
    items: { id: string; title: string; text: string }[];
  };
  /** Further features without a screenshot. */
  more?: { heading: string; items: string[] };
  architecture: {
    heading: string;
    intro: string;
    layers: { title: string; items: string[] }[];
    services: { title: string; items: string[] };
    deploy: { title: string; items: string[] };
  };
  contribution: { heading: string; items: string[] };
  decisions: { heading: string; items: { title: string; text: string }[] };
  team: {
    heading: string;
    text: string;
    facts?: string[];
    members?: string;
  };
};
