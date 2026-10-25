import WindowControls from "../components/WindowControls";
import { Search } from "lucide-react";
import WindowWrapper from "../hoc/WindowWrapper";
import { locations, type FolderLocation, type Location } from "../constants";
import { getLocationText, useTranslation } from "../i18n";
import useLocationStore from "../store/location";
import clsx from "clsx";
import useWindowStore from "../store/window";

const Finder = () => {
  const t = useTranslation();
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item: Location) => {
    if (item.kind === "file" && item.fileType === "pdf")
      return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (item.fileType && ["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    const windowKey = `${item.fileType ?? ""}${item.kind ?? ""}`;
    if (windowKey !== "txtfile" && windowKey !== "imgfile") return;

    openWindow(windowKey, item);
  };

  const renderList = (name: string, items: FolderLocation[]) => (
    <div>
      <h3>{name}</h3>
      <ul className="sidebar-list">
        {items.map((item) => {
          const itemName = getLocationText(t, item).name;

          return (
            <li
              key={item.id}
              onClick={() => setActiveLocation(item)}
              className={clsx(
                item === activeLocation ? "active" : "not-active",
              )}
            >
              <img src={item.icon} alt="" className="w-4" />
              <p className="text-sm font-medium truncate">{itemName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const items = activeLocation?.children ?? [];

  return (
    <>
      <div className="window-header">
        <WindowControls target="finder" />
        <Search className="icon" aria-label={t.finder.search} />
      </div>

      <div className="finder-body">
        <div className="sidebar">
          {renderList(t.finder.favorites, Object.values(locations))}
          {renderList(t.finder.work, locations.work.children)}
        </div>

        <ul className="content">
          {items.length === 0 && (
            <p className="empty-folder">{t.finder.emptyFolder}</p>
          )}
          {items.map((item) => {
            const itemName = getLocationText(t, item).name;

            return (
              <li
                key={item.id}
                className={item.position}
                onClick={() => openItem(item)}
              >
                <img src={item.icon} alt="" />
                <p>{itemName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
