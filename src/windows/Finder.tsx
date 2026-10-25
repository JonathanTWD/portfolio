import clsx from "clsx";
import { ChevronLeft } from "lucide-react";
import FileIcon from "../components/FileIcon";
import LocationIcon from "../components/LocationIcon";
import WindowControls from "../components/WindowControls";
import { locations, type FolderLocation, type Location } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import { getLocationText, useTranslation } from "../i18n";
import useLocationStore from "../store/location";
import useWindowStore from "../store/window";

const Finder = () => {
  const t = useTranslation();
  const { openWindow } = useWindowStore();
  const { activeLocation, history, setActiveLocation, goBack } =
    useLocationStore();

  const openItem = (item: Location) => {
    if (item.kind === "folder") return setActiveLocation(item);
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.fileType === "url" && item.href)
      return window.open(item.href, "_blank", "noopener,noreferrer");
    if (item.fileType === "txt") return openWindow("txtfile", item);
    if (item.fileType === "img") return openWindow("imgfile", item);
  };

  const renderList = (title: string, items: FolderLocation[]) => (
    <div className="finder-section">
      <h3>{title}</h3>
      <ul className="sidebar-list">
        {items.map((item) => (
          <li key={`${item.type ?? "folder"}-${item.id}`}>
            <button
              type="button"
              className={clsx(
                item === activeLocation ? "active" : "not-active",
              )}
              aria-current={item === activeLocation ? "page" : undefined}
              onClick={() => setActiveLocation(item)}
            >
              <LocationIcon location={item} />
              <span className="truncate">{getLocationText(t, item).name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  const items = activeLocation.children;

  return (
    <div className="finder-layout">
      <aside className="finder-sidebar">
        <WindowControls target="finder" />
        {renderList(t.finder.favorites, Object.values(locations))}
        {renderList(t.finder.projects, locations.work.children)}
      </aside>

      <section className="finder-main">
        <div className="finder-toolbar">
          <button
            type="button"
            className="toolbar-button"
            aria-label={t.finder.back}
            disabled={history.length === 0}
            onClick={goBack}
          >
            <ChevronLeft />
          </button>
          <h2>{getLocationText(t, activeLocation).name}</h2>
        </div>

        {items.length === 0 ? (
          <p className="empty-folder">{t.finder.emptyFolder}</p>
        ) : (
          <ul className="finder-grid">
            {items.map((item) => {
              const name = getLocationText(t, item).name;

              return (
                <li key={`${item.kind}-${item.id}`}>
                  <button
                    type="button"
                    className="finder-item"
                    onClick={() => openItem(item)}
                  >
                    <FileIcon item={item} />
                    <span>{name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
