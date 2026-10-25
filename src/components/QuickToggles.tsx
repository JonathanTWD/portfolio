import { Moon, Sun } from "lucide-react";
import { LANGUAGES, useTranslation } from "../i18n";
import useLanguageStore from "../store/language";
import useThemeStore, { useResolvedTheme } from "../store/theme";

/** Language and light/dark switches, shown in the menu bar and the phone status bar. */
const QuickToggles = ({ className }: { className: string }) => {
  const t = useTranslation();
  const { language, setLanguage } = useLanguageStore();
  const setTheme = useThemeStore((state) => state.setTheme);
  const isDark = useResolvedTheme() === "dark";

  const nextLanguage = LANGUAGES.find((option) => option !== language) ?? "es";
  const themeLabel = isDark ? t.navbar.switchToLight : t.navbar.switchToDark;

  return (
    <>
      <button
        type="button"
        className={className}
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
        className={className}
        aria-label={themeLabel}
        title={themeLabel}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? <Sun /> : <Moon />}
      </button>
    </>
  );
};

export default QuickToggles;
