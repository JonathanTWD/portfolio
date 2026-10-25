import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import { LANGUAGES, useTranslation } from "../i18n";
import useLanguageStore from "../store/language";
import useThemeStore, { type Theme } from "../store/theme";

const THEMES: Theme[] = ["light", "dark"];

const Settings = () => {
  const t = useTranslation();
  const { theme, setTheme } = useThemeStore();
  const { language, setLanguage } = useLanguageStore();

  return (
    <>
      <div className="window-header">
        <WindowControls target="settings" canMaximize={false} />
        <h2>{t.settings.title}</h2>
      </div>

      <div className="settings-content">
        <aside className="settings-sidebar">
          <img src="/images/settings.png" alt="" className="size-12" />
          <div>
            <p className="text-sm font-semibold">{t.settings.sidebarTitle}</p>
            <p>{t.settings.sidebarDescription}</p>
          </div>
        </aside>

        <div className="settings-panel">
          <section>
            <h3>{t.settings.theme.heading}</h3>
            <p className="settings-description">
              {t.settings.theme.description}
            </p>

            <div
              className="settings-options mt-4"
              role="radiogroup"
              aria-label={t.settings.theme.heading}
            >
              {THEMES.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`settings-option${theme === option ? " selected" : ""}`}
                  role="radio"
                  aria-checked={theme === option}
                  onClick={() => setTheme(option)}
                >
                  <span className={`theme-preview ${option}`} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span>{t.settings.theme.options[option]}</span>
                  {theme === option && (
                    <span className="option-check" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3>{t.settings.language.heading}</h3>
            <p className="settings-description">
              {t.settings.language.description}
            </p>

            <div
              className="settings-options mt-4"
              role="radiogroup"
              aria-label={t.settings.language.heading}
            >
              {LANGUAGES.map((option) => (
                <button
                  key={option}
                  type="button"
                  lang={option}
                  className={`settings-option${language === option ? " selected" : ""}`}
                  role="radio"
                  aria-checked={language === option}
                  onClick={() => setLanguage(option)}
                >
                  <span>{t.settings.language.options[option]}</span>
                  {language === option && (
                    <span className="option-check" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const SettingsWindow = WindowWrapper(Settings, "settings");

export default SettingsWindow;
