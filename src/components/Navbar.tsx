import "dayjs/locale/es";

import { locations, navLinks, type NavLink } from "../constants";
import { useTranslation } from "../i18n";
import QuickToggles from "./QuickToggles";
import useLanguageStore from "../store/language";
import useLocationStore from "../store/location";
import useWindowStore from "../store/window";
import useMinuteClock from "../hooks/useMinuteClock";

const Navbar = () => {
  const t = useTranslation();
  const { openWindow } = useWindowStore();
  const setActiveLocation = useLocationStore(
    (state) => state.setActiveLocation,
  );
  const language = useLanguageStore((state) => state.language);
  const now = useMinuteClock();

  const openLink = (link: NavLink) => {
    if ("folder" in link) {
      setActiveLocation(locations[link.folder]);
      openWindow("finder");
      return;
    }

    openWindow(link.window);
  };

  return (
    <nav className="menubar" aria-label={t.navbar.menu}>
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
        <QuickToggles className="navbar-pill" />

        <time dateTime={now.format("YYYY-MM-DDTHH:mm")}>
          {now.locale(language).format(t.navbar.dateFormat)}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
