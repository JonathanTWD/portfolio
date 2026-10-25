import { ArrowRight } from "lucide-react";
import { locations } from "../constants";
import useMinuteClock from "../hooks/useMinuteClock";
import { useTranslation } from "../i18n";
import useLanguageStore from "../store/language";
import useWindowStore from "../store/window";

const featured = locations.work.children[0];

/** Desktop widgets: clock, current status and the featured project. */
const Widgets = () => {
  const t = useTranslation();
  const language = useLanguageStore((state) => state.language);
  const openWindow = useWindowStore((state) => state.openWindow);
  const now = useMinuteClock().locale(language);

  return (
    <aside id="widgets" aria-label={t.widgets.label}>
      <section className="widget">
        <time className="widget-time" dateTime={now.format("HH:mm")}>
          {now.format("HH:mm")}
        </time>
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
        <p className="widget-muted">{t.widgets.now.detail}</p>
        <button
          type="button"
          className="widget-action"
          onClick={() => openWindow("contact")}
        >
          {t.widgets.now.action}
          <ArrowRight aria-hidden="true" />
        </button>
      </section>

      {featured && (
        <section className="widget">
          <h2 className="widget-title">{t.widgets.featured.title}</h2>
          <p className="widget-status">{featured.name}</p>
          <p className="widget-muted">
            {t.showcase.projects.canaccesible.hero.lede}
          </p>
          <button
            type="button"
            className="widget-action"
            onClick={() => openWindow("showcase")}
          >
            {t.widgets.featured.action}
            <ArrowRight aria-hidden="true" />
          </button>
        </section>
      )}
    </aside>
  );
};

export default Widgets;
