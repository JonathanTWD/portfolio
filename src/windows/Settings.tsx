import { useEffect } from "react";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import useThemeStore, { type Theme } from "../store/theme";

const Settings = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <div id="window-header">
        <WindowControls target="settings" canMaximize={false} />
        <h2>Settings</h2>
      </div>

      <div className="settings-content">
        <aside className="settings-sidebar">
          <img src="/images/settings.png" alt="" className="size-12" />
          <div>
            <p className="text-sm font-semibold">Appearance</p>
            <p className="text-xs text-gray-500">Personalize your desktop</p>
          </div>
        </aside>

        <section className="settings-panel">
          <div>
            <h3>Theme</h3>
            <p className="settings-description">
              Choose how your portfolio looks. Your choice is saved for your
              next visit.
            </p>
          </div>

          <div className="theme-options" role="radiogroup" aria-label="Theme">
            {(["light", "dark"] as Theme[]).map((option) => (
              <button
                key={option}
                type="button"
                className={`theme-option${theme === option ? " selected" : ""}`}
                role="radio"
                aria-checked={theme === option}
                onClick={() => setTheme(option)}
              >
                <span className={`theme-preview ${option}`} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="capitalize">{option}</span>
                {theme === option && <span className="theme-check">✓</span>}
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

const SettingsWindow = WindowWrapper(Settings, "settings");

export default SettingsWindow;