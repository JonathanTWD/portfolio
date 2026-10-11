import dayjs from "dayjs";

import { navIcons, navLinks } from "../constants";
import useWindowStore from "../store/window";
import useThemeStore from "../store/theme";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const theme = useThemeStore((state) => state.theme);

  return (
    <nav>
      <div>
        <img
          src={theme === "dark" ? "/images/logo-white.svg" : "/images/logo.svg"}
          alt="JonathanDev logo"
        />
        <p className="font-bold">JonathanDev's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
            {navIcons.map(({ id, img }) => (
                <li key={id} className="cursor-pointer">
                    <img
                      src={img}
                      alt={`icon-${id}`}
                      className="navbar-status-icon"
                    />
                </li>
            ))}
        </ul>

        <time>{dayjs().format("MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
