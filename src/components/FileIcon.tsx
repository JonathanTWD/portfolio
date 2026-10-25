import clsx from "clsx";
import { Award, GitBranch, Globe } from "lucide-react";
import type { Location } from "../constants";

const LINK_GLYPHS = {
  web: Globe,
  github: GitBranch,
  certificate: Award,
};

type FileIconProps = {
  item: Location;
  className?: string;
};

/** Finder and desktop icon for a folder or file, drawn from its type. */
const FileIcon = ({ item, className }: FileIconProps) => {
  if (item.kind === "folder") {
    return (
      <svg
        className={clsx("file-icon folder-icon", className)}
        viewBox="0 0 64 52"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="folder-back" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5aa8ff" />
            <stop offset="1" stopColor="#3a7ff0" />
          </linearGradient>
          <linearGradient id="folder-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8cc8ff" />
            <stop offset="1" stopColor="#4f97f7" />
          </linearGradient>
        </defs>
        <path
          d="M4 8a4 4 0 0 1 4-4h14l6 6h28a4 4 0 0 1 4 4v30a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
          fill="url(#folder-back)"
        />
        <path
          d="M4 18a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
          fill="url(#folder-front)"
        />
        <path d="M8 15h48" stroke="#fff" strokeOpacity=".45" />
      </svg>
    );
  }

  if (item.fileType === "img" && item.imageUrl) {
    return (
      <span className={clsx("file-icon image-icon", className)}>
        <img src={item.imageUrl} alt="" loading="lazy" />
      </span>
    );
  }

  if (item.fileType === "url") {
    const Glyph = LINK_GLYPHS[item.linkStyle ?? "web"];

    return (
      <span
        className={clsx(
          "file-icon link-icon",
          `link-${item.linkStyle ?? "web"}`,
          className,
        )}
        aria-hidden="true"
      >
        <Glyph strokeWidth={1.75} />
      </span>
    );
  }

  return (
    <span
      className={clsx(
        "file-icon document-icon",
        item.fileType === "pdf" && "is-pdf",
        className,
      )}
      aria-hidden="true"
    >
      {item.fileType === "pdf" && <span>PDF</span>}
    </span>
  );
};

export default FileIcon;
