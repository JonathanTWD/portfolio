import clsx from "clsx";
import {
  BriefcaseBusiness,
  Compass,
  FileText,
  FolderOpen,
  Images,
  Mail,
  Settings,
  SquareTerminal,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { DockAppId } from "../constants";

/** Dock apps plus the extra shortcuts on the phone home screen. */
export type AppIconId = DockAppId | "resume" | "about" | "experience";

const GLYPHS: Record<AppIconId, LucideIcon> = {
  finder: FolderOpen,
  showcase: Compass,
  photos: Images,
  contact: Mail,
  terminal: SquareTerminal,
  settings: Settings,
  resume: FileText,
  about: UserRound,
  experience: BriefcaseBusiness,
};

type AppIconProps = {
  app: AppIconId;
  className?: string;
};

const AppIcon = ({ app, className }: AppIconProps) => {
  const Glyph = GLYPHS[app];

  return (
    <span
      className={clsx("app-icon", `app-${app}`, className)}
      aria-hidden="true"
    >
      <Glyph strokeWidth={1.75} />
    </span>
  );
};

export default AppIcon;
