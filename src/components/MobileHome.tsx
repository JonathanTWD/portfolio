import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { locations, type FolderType, type WindowKey } from "../constants";
import useMinuteClock from "../hooks/useMinuteClock";
import { useTranslation } from "../i18n";
import { setLaunchOrigin } from "../lib/launchOrigin";
import { prefersReducedMotion } from "../lib/motion";
import useLanguageStore from "../store/language";
import useLocationStore from "../store/location";
import useWindowStore from "../store/window";
import AppIcon, { type AppIconId } from "./AppIcon";
import QuickToggles from "./QuickToggles";

type Shortcut = {
  icon: AppIconId;
  window: WindowKey;
  /** Finder folder to open, for shortcuts like About me. */
  folder?: FolderType;
};

const GRID: Shortcut[] = [
  { icon: "about", window: "finder", folder: "about" },
  { icon: "experience", window: "finder", folder: "experience" },
  { icon: "resume", window: "resume" },
  { icon: "photos", window: "photos" },
  { icon: "settings", window: "settings" },
];

const DOCK: Shortcut[] = [
  { icon: "finder", window: "finder", folder: "work" },
  { icon: "showcase", window: "showcase" },
  { icon: "contact", window: "contact" },
  { icon: "terminal", window: "terminal" },
];

/** The welcome word, with the variable-weight wave played on load and on tap. */
const WelcomeWord = ({ word }: { word: string }) => {
  const ref = useRef<HTMLHeadingElement | null>(null);

  const wave = () => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.fromTo(
      ref.current.querySelectorAll("span"),
      { fontVariationSettings: "'wght' 400" },
      {
        fontVariationSettings: "'wght' 900",
        duration: 0.35,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
        stagger: 0.06,
      },
    );
  };

  useGSAP(wave, { dependencies: [word] });

  return (
    <h1 ref={ref} onClick={wave}>
      {[...word].map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </h1>
  );
};

/** Phone home screen: same apps and content, laid out like iOS. */
const MobileHome = () => {
  const t = useTranslation();
  const language = useLanguageStore((state) => state.language);
  const openWindow = useWindowStore((state) => state.openWindow);
  const setActiveLocation = useLocationStore(
    (state) => state.setActiveLocation,
  );
  const now = useMinuteClock().locale(language);

  const label = (icon: AppIconId) =>
    icon in t.mobile.extraApps
      ? t.mobile.extraApps[icon as keyof typeof t.mobile.extraApps]
      : t.dock.apps[icon as keyof typeof t.dock.apps];

  const launch = (shortcut: Shortcut, element: HTMLElement) => {
    setLaunchOrigin(element);
    if (shortcut.folder) setActiveLocation(locations[shortcut.folder]);
    openWindow(shortcut.window);
  };

  const renderShortcut = (shortcut: Shortcut, withLabel: boolean) => (
    <li key={shortcut.icon}>
      <button
        type="button"
        aria-label={label(shortcut.icon)}
        onClick={(event) => launch(shortcut, event.currentTarget)}
      >
        <AppIcon app={shortcut.icon} />
        {withLabel && <span aria-hidden="true">{label(shortcut.icon)}</span>}
      </button>
    </li>
  );

  return (
    <section id="mobile-home">
      <header className="mobile-status">
        <time dateTime={now.format("HH:mm")}>{now.format("HH:mm")}</time>
        <div>
          <QuickToggles className="mobile-pill" />
        </div>
      </header>

      <div className="mobile-welcome">
        <p>{t.welcome.greeting}</p>
        <WelcomeWord word={t.welcome.title} />
      </div>

      <div className="mobile-widgets">
        <section className="widget">
          <p className="widget-time">{now.format("HH:mm")}</p>
          <p className="widget-muted first-letter:uppercase">
            {now.format(t.widgets.dateFormat)}
          </p>
        </section>
        <section className="widget">
          <h2 className="widget-title">{t.widgets.now.title}</h2>
          <p className="widget-status">
            <span className="status-dot" aria-hidden="true" />
            {t.widgets.now.status}
          </p>
        </section>
      </div>

      <ul className="mobile-grid" aria-label={t.mobile.apps}>
        {GRID.map((shortcut) => renderShortcut(shortcut, true))}
      </ul>

      <nav className="mobile-dock" aria-label="Dock">
        <ul>{DOCK.map((shortcut) => renderShortcut(shortcut, false))}</ul>
      </nav>
    </section>
  );
};

export default MobileHome;
