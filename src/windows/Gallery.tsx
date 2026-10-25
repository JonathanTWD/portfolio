import { useState } from "react";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import { galleryProjects, type GalleryImage } from "../constants";
import useWindowStore from "../store/window";
import { useTranslation } from "../i18n";

const Photos = () => {
  const t = useTranslation();
  const { openWindow } = useWindowStore();
  const [activeProjectId, setActiveProjectId] = useState(
    galleryProjects[0]?.id ?? "",
  );
  const activeProject = galleryProjects.find(
    (project) => project.id === activeProjectId,
  );

  if (!activeProject) return null;

  const openImage = (image: GalleryImage) => {
    openWindow("imgfile", {
      id: image.id,
      name: t.gallery.imageName(activeProject.name, image.id),
      kind: "file",
      fileType: "img",
      imageUrl: image.img,
    });
  };

  return (
    <>
      <div className="window-header">
        <WindowControls target="photos" />
        <h2>{t.gallery.title}</h2>
      </div>

      <div className="gallery-shell">
        <aside className="gallery-sidebar">
          <h3>{t.gallery.projects}</h3>
          <ul className="sidebar-list">
            {galleryProjects.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  className={
                    project.id === activeProjectId ? "active" : "not-active"
                  }
                  onClick={() => setActiveProjectId(project.id)}
                >
                  <span aria-hidden="true">{project.name.slice(0, 1)}</span>
                  <span>{project.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="gallery-canvas">
          <div className="gallery-grid">
            {activeProject.images.map((image) => {
              const alt = t.gallery.images[image.altId];

              return (
                <button
                  className="gallery-tile"
                  key={image.id}
                  type="button"
                  aria-label={t.gallery.open(alt)}
                  onClick={() => openImage(image)}
                >
                  <img src={image.img} alt={alt} loading="lazy" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
