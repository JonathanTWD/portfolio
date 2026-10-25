export type Language = "es" | "en";

export const LANGUAGES: Language[] = ["es", "en"];

export type LocationTextId =
  | "work"
  | "about"
  | "resume"
  | "trash"
  | "resumePdf"
  | "aboutMe"
  | "canaccesibleProject"
  | "canaccesibleStack";

export type LocationText = {
  name: string;
  subtitle?: string;
  description?: string[];
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
