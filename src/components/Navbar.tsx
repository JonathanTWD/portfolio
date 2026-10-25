import dayjs from "dayjs";
import "dayjs/locale/es";

import { navIcons, navLinks } from "../constants";
import { useTranslation } from "../i18n";
import useLanguageStore from "../store/language";
import useWindowStore from "../store/window";
import useThemeStore from "../store/theme";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const theme = useThemeStore((state) => state.theme);
  const language = useLanguageStore((state) => state.language);
  const t = useTranslation();

  return (
    <nav>
      <div>
        <img
          src={theme === "dark" ? "/images/logo-white.svg" : "/images/logo.svg"}
          alt={t.navbar.logoAlt}
        />
        <p className="font-bold">{t.navbar.brand}</p>

        <ul>
          {navLinks.map(({ id, labelKey, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{t.navbar.links[labelKey]}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id} className="cursor-pointer">
              <img src={img} alt="" className="navbar-status-icon" />
            </li>
          ))}
        </ul>

        <time>{dayjs().locale(language).format(t.navbar.dateFormat)}</time>
      </div>
    </nav>
  );
};

export default Navbar;
