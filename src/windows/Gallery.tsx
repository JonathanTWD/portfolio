import { useState } from "react";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import { galleryProjects, type GalleryImage } from "../constants";
import useWindowStore from "../store/window";

const Photos = () => {
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
      name: `${activeProject.name} image ${image.id}`,
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: image.img,
    });
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="gallery-shell">
        <aside className="gallery-sidebar">
          <h3>Projects</h3>
          <ul>
            {galleryProjects.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  className={project.id === activeProjectId ? "active" : ""}
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
            {activeProject.images.map((image) => (
              <button
                className="gallery-tile"
                key={image.id}
                type="button"
                aria-label={`Open ${image.alt}`}
                onClick={() => openImage(image)}
              >
                <img src={image.img} alt={image.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
