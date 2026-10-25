import clsx from "clsx";
import {
  Compass,
  FolderOpen,
  Images,
  Mail,
  Settings,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";
import type { DockAppId } from "../constants";

const GLYPHS: Record<DockAppId, LucideIcon> = {
  finder: FolderOpen,
  casestudy: Compass,
  photos: Images,
  contact: Mail,
  terminal: SquareTerminal,
  settings: Settings,
};

type AppIconProps = {
  app: DockAppId;
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
