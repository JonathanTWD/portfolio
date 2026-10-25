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
  | "about"
  | "login"
  | "landing"
  | "map"
  | "incident"
  | "contact"
  | "blog"
  | "management";

export type TechCategoryId =
  | "frontend"
  | "backend"
  | "database"
  | "ui"
  | "testing"
  | "devops";
