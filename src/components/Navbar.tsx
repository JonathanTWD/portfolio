import dayjs from "dayjs";
import "dayjs/locale/es";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { locations, navLinks, type NavLink } from "../constants";
import { LANGUAGES, useTranslation } from "../i18n";
import useLanguageStore from "../store/language";
import useLocationStore from "../store/location";
import useThemeStore, { useResolvedTheme } from "../store/theme";
import useWindowStore from "../store/window";

/** Current time, refreshed at the start of every minute. */
const useMinuteClock = () => {
  const [now, setNow] = useState(() => dayjs());

  useEffect(() => {
    let interval: number | undefined;
    const timeout = window.setTimeout(
      () => {
        setNow(dayjs());
        interval = window.setInterval(() => setNow(dayjs()), 60_000);
      },
      60_000 - (Date.now() % 60_000),
    );

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  return now;
};

const Navbar = () => {
  const t = useTranslation();
  const { openWindow } = useWindowStore();
  const setActiveLocation = useLocationStore(
    (state) => state.setActiveLocation,
  );
  const { language, setLanguage } = useLanguageStore();
  const setTheme = useThemeStore((state) => state.setTheme);
  const resolvedTheme = useResolvedTheme();
  const now = useMinuteClock();

  const nextLanguage = LANGUAGES.find((option) => option !== language) ?? "es";
  const isDark = resolvedTheme === "dark";

  const openLink = (link: NavLink) => {
    if ("folder" in link) {
      setActiveLocation(locations[link.folder]);
      openWindow("finder");
      return;
    }

    openWindow(link.window);
  };

  return (
    <nav aria-label={t.navbar.menu}>
      <div>
        <span className="navbar-logo" aria-hidden="true">
          J
        </span>
        <p className="navbar-brand">{t.navbar.brand}</p>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button type="button" onClick={() => openLink(link)}>
                {t.navbar.links[link.labelKey]}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button
          type="button"
          className="navbar-pill"
          aria-label={t.navbar.switchLanguage(
            t.settings.language.options[nextLanguage],
          )}
          title={t.settings.language.options[nextLanguage]}
          onClick={() => setLanguage(nextLanguage)}
        >
          {language.toUpperCase()}
        </button>

        <button
          type="button"
          className="navbar-pill"
          aria-label={isDark ? t.navbar.switchToLight : t.navbar.switchToDark}
          title={isDark ? t.navbar.switchToLight : t.navbar.switchToDark}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <Sun /> : <Moon />}
        </button>

        <time dateTime={now.format("YYYY-MM-DDTHH:mm")}>
          {now.locale(language).format(t.navbar.dateFormat)}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
