import {
  BriefcaseBusiness,
  FileText,
  Folder,
  FolderKanban,
  GraduationCap,
  Trash2,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { FolderLocation, FolderType } from "../constants";

const GLYPHS: Record<FolderType, LucideIcon> = {
  work: FolderKanban,
  experience: BriefcaseBusiness,
  education: GraduationCap,
  about: UserRound,
  resume: FileText,
  trash: Trash2,
};

/** Small sidebar glyph for a Finder location. */
const LocationIcon = ({ location }: { location: FolderLocation }) => {
  const Glyph = location.type ? GLYPHS[location.type] : Folder;

  return (
    <Glyph className="location-icon" strokeWidth={1.9} aria-hidden="true" />
  );
};

export default LocationIcon;
