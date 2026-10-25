import clsx from "clsx";
import { locations, type FolderLocation } from "../constants";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "../store/window";
import useLocationStore from "../store/location";
import { getLocationText, useTranslation } from "../i18n";
import FileIcon from "./FileIcon";

const projects = locations.work?.children ?? [];

const Home = () => {
  const t = useTranslation();

  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project: FolderLocation) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder", { dragClickables: true });
  });

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("folder", project.windowPosition)}
          >
            <button
              type="button"
              onClick={() => handleOpenProjectFinder(project)}
            >
              <FileIcon item={project} />
              <span>{getLocationText(t, project).name}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
