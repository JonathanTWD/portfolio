import { ArrowRight, MapPin } from "lucide-react";
import { locations } from "../constants";
import useMinuteClock from "../hooks/useMinuteClock";
import { useTranslation } from "../i18n";
import useLanguageStore from "../store/language";
import useShowcaseStore from "../store/showcase";
import useWindowStore from "../store/window";

/** The first project folder is the featured one. */
const featured = locations.work.children.find((folder) => folder.showcaseId);

/** Desktop widgets: clock, current status and the featured project. */
const Widgets = () => {
  const t = useTranslation();
  const language = useLanguageStore((state) => state.language);
  const openWindow = useWindowStore((state) => state.openWindow);
  const setShowcaseProject = useShowcaseStore((state) => state.setActiveId);
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
        <p className="widget-muted widget-location">
          <MapPin aria-hidden="true" />
          {t.widgets.now.location}
        </p>
        <button
          type="button"
          className="widget-action"
          onClick={() => openWindow("contact")}
        >
          {t.widgets.now.action}
          <ArrowRight aria-hidden="true" />
        </button>
      </section>

      {featured?.showcaseId && (
        <section className="widget">
          <h2 className="widget-title">{t.widgets.featured.title}</h2>
          <p className="widget-status">{featured.name}</p>
          <p className="widget-muted">
            {t.showcase.projects[featured.showcaseId].hero.lede}
          </p>
          <button
            type="button"
            className="widget-action"
            onClick={() => {
              if (featured.showcaseId) setShowcaseProject(featured.showcaseId);
              openWindow("showcase");
            }}
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
