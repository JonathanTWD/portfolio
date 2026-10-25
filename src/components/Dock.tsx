import { Tooltip } from "react-tooltip";
import gsap from "gsap";

import { useEffect, useRef, useState } from "react";
import { dockApps, type FileLocation } from "../constants";
import { useGSAP } from "@gsap/react";
import useWindowStore, { type WindowKey } from "../store/window";
import { getLocationText, useTranslation } from "../i18n";
import FileIcon from "./FileIcon";
import AppIcon from "./AppIcon";
import clsx from "clsx";

const DOCUMENT_WINDOWS = ["resume", "txtfile", "imgfile"] as const;

type WindowPreviewProps = {
  windowKey: WindowKey;
  name: string;
  onRestore: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isClosing: boolean;
  onExitComplete: () => void;
};

const WindowPreview = ({
  windowKey,
  name,
  onRestore,
  onMouseEnter,
  onMouseLeave,
  isClosing,
  onExitComplete,
}: WindowPreviewProps) => {
  const t = useTranslation();
  const previewRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const source = document.getElementById(windowKey);
    const content = contentRef.current;

    if (!source || !content) return;

    const clone = source.cloneNode(true) as HTMLElement;
    clone.id = `${windowKey}-preview`;
    clone.querySelector(".window-header")?.remove();
    clone.style.position = "relative";
    clone.style.top = "0";
    clone.style.left = "0";
    clone.style.right = "auto";
    clone.style.bottom = "auto";
    clone.style.margin = "0";
    clone.style.opacity = "1";
    clone.style.pointerEvents = "none";
    clone.style.transform = "none";
    clone.style.transformOrigin = "top left";
    clone.style.width = `${source.getBoundingClientRect().width}px`;
    clone.style.height = `${source.getBoundingClientRect().height}px`;
    clone.style.boxShadow = "none";
    clone.style.borderRadius = "0";

    content.replaceChildren(clone);

    const { width, height } = source.getBoundingClientRect();
    const scale = Math.min(0.36, 268 / width, 132 / height);

    clone.style.transform = `scale(${scale})`;
  }, [windowKey]);

  useGSAP(() => {
    if (!previewRef.current) return;

    gsap.killTweensOf(previewRef.current);

    if (isClosing) {
      gsap.to(previewRef.current, {
        autoAlpha: 0,
        y: 12,
        xPercent: -50,
        scale: 0.92,
        duration: 0.18,
        ease: "power2.in",
        onComplete: onExitComplete,
      });
      return;
    }

    gsap.fromTo(
      previewRef.current,
      { autoAlpha: 0, y: 12, xPercent: -50, scale: 0.92 },
      {
        autoAlpha: 1,
        y: 0,
        xPercent: -50,
        scale: 1,
        duration: 0.22,
        ease: "power2.out",
      },
    );
  }, [isClosing]);

  return (
    <div
      ref={previewRef}
      className="window-preview"
      role="button"
      tabIndex={0}
      aria-label={t.dock.restore(name)}
      onClick={onRestore}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onRestore();
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="window-preview-header">
        <span className="window-preview-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="window-preview-title">{name}</span>
        <span className="window-preview-hint">{t.dock.restoreHint}</span>
      </div>
      <div ref={contentRef} className="window-preview-content" />
    </div>
  );
};

const Dock = () => {
  const { windows, openWindow, focusWindow, restoreWindow } = useWindowStore();
  const t = useTranslation();

  /* Windows without a dock app (resume, documents, images) sit at the right
     of the dock while minimized, like in macOS. */
  const minimizedDocuments = DOCUMENT_WINDOWS.filter(
    (key) => windows[key].isOpen && windows[key].isMinimized,
  );
  const dockRef = useRef<HTMLDivElement | null>(null);
  const hidePreviewTimeout = useRef<number | null>(null);
  const [previewWindow, setPreviewWindow] = useState<WindowKey | null>(null);
  const [isPreviewClosing, setIsPreviewClosing] = useState(false);
  const isWindowKey = (id: string): id is WindowKey => id in windows;

  const cancelPreviewHide = () => {
    if (hidePreviewTimeout.current !== null) {
      window.clearTimeout(hidePreviewTimeout.current);
      hidePreviewTimeout.current = null;
    }
  };

  const hidePreview = () => {
    cancelPreviewHide();
    hidePreviewTimeout.current = window.setTimeout(() => {
      setIsPreviewClosing(true);
    }, 160);
  };

  const showPreview = (windowKey: WindowKey) => {
    cancelPreviewHide();
    setPreviewWindow(windowKey);
    setIsPreviewClosing(false);
  };

  const closePreview = () => {
    cancelPreviewHide();
    if (previewWindow) setIsPreviewClosing(true);
  };

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll<HTMLButtonElement>(".dock-icon");
    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon: HTMLButtonElement) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 2000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -3 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();

      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon: HTMLButtonElement) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        }),
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  /* Like macOS: open the app, restore it if minimized, or bring it to the front. */
  const activateApp = (
    app: Pick<(typeof dockApps)[number], "id" | "canOpen">,
  ) => {
    if (!app.canOpen || !isWindowKey(app.id)) return;

    const window = windows[app.id];

    if (!window.isOpen) openWindow(app.id);
    else if (window.isMinimized) restoreWindow(app.id);
    else focusWindow(app.id);
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, canOpen }) => {
          const name = t.dock.apps[id];

          return (
            <div
              key={id}
              className="relative flex justify-center"
              onMouseEnter={() => {
                cancelPreviewHide();
                if (isWindowKey(id) && windows[id].isMinimized) {
                  showPreview(id);
                } else {
                  closePreview();
                }
              }}
              onMouseLeave={hidePreview}
            >
              {isWindowKey(id) &&
                windows[id].isMinimized &&
                previewWindow === id && (
                  <WindowPreview
                    windowKey={id}
                    name={name}
                    onRestore={() => {
                      cancelPreviewHide();
                      setPreviewWindow(null);
                      setIsPreviewClosing(false);
                      restoreWindow(id);
                    }}
                    onMouseEnter={cancelPreviewHide}
                    onMouseLeave={hidePreview}
                    isClosing={isPreviewClosing}
                    onExitComplete={() => {
                      setPreviewWindow(null);
                      setIsPreviewClosing(false);
                    }}
                  />
                )}
              <button
                type="button"
                className={clsx(
                  "dock-icon",
                  isWindowKey(id) && windows[id].isOpen && "is-running",
                )}
                data-dock-window={id}
                aria-label={name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={
                  isWindowKey(id) && windows[id].isMinimized ? undefined : name
                }
                data-tooltip-hidden={isWindowKey(id) && windows[id].isMinimized}
                data-tooltip-delay-show={99}
                disabled={!canOpen}
                onClick={() => activateApp({ id, canOpen })}
              >
                <AppIcon app={id} className={canOpen ? "" : "opacity-60"} />
              </button>
            </div>
          );
        })}
        {minimizedDocuments.length > 0 && (
          <span className="dock-separator" aria-hidden="true" />
        )}
        {minimizedDocuments.map((key) => {
          const data = windows[key].data;
          const item: FileLocation =
            key === "resume" || !data || data.kind !== "file"
              ? { id: 0, kind: "file", fileType: "pdf" }
              : data;
          const name =
            key === "resume" ? t.resume.title : getLocationText(t, item).name;

          return (
            <button
              key={key}
              type="button"
              className="dock-icon dock-document"
              data-dock-window={key}
              aria-label={t.dock.restore(name)}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              onClick={() => restoreWindow(key)}
            >
              <FileIcon item={item} />
            </button>
          );
        })}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
