import clsx from "clsx";
import { ArrowRight, ExternalLink, Lock } from "lucide-react";
import { useState } from "react";
import BrandIcon from "../components/BrandIcon";
import WindowControls from "../components/WindowControls";
import { locations, type FileLocation } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import { useTranslation, type Dictionary, type GalleryImageId } from "../i18n";

type ShowcaseProjectId = keyof Dictionary["showcase"]["projects"];
type FeatureId =
  keyof Dictionary["showcase"]["projects"][ShowcaseProjectId]["features"]["items"];

type Shot = {
  src: string;
  alt: GalleryImageId;
  /** Crop to the same wide ratio as the other screenshots, keeping the top. */
  crop?: boolean;
};

type ShowcaseProject = {
  id: ShowcaseProjectId;
  /** Finder folder that holds the project's links. */
  folder: string;
  hero: Shot;
  features: { id: FeatureId; shot: Shot }[];
};

const IMAGES = "/images/canaccesible-project";

/** Add a project here, plus its page under showcase.projects in the dictionaries. */
const PROJECTS: ShowcaseProject[] = [
  {
    id: "canaccesible",
    folder: "CanAccesible",
    hero: { src: `${IMAGES}/canaccesible-8.png`, alt: "landing" },
    features: [
      {
        id: "report",
        shot: {
          src: `${IMAGES}/canaccesible-3.png`,
          alt: "incident",
          crop: true,
        },
      },
      { id: "map", shot: { src: `${IMAGES}/canaccesible-1.png`, alt: "map" } },
      {
        id: "manage",
        shot: { src: `${IMAGES}/canaccesible-2.png`, alt: "management" },
      },
    ],
  },
];

const projectLinks = (folderName: string) => {
  const folder = locations.work.children.find(
    (item) => item.name === folderName,
  );
  const links = (folder?.children ?? []).filter(
    (item): item is FileLocation => item.kind === "file" && Boolean(item.href),
  );

  return {
    site: links.find((link) => link.linkStyle === "web")?.href,
    repo: links.find((link) => link.linkStyle === "github")?.href,
  };
};

/** A browser that shows each project as its own web page. */
const Showcase = () => {
  const t = useTranslation();
  const [activeId, setActiveId] = useState<ShowcaseProjectId>(PROJECTS[0].id);

  const project = PROJECTS.find(({ id }) => id === activeId) ?? PROJECTS[0];
  const page = t.showcase.projects[project.id];
  const { site, repo } = projectLinks(project.folder);
  const siteHost = site ? new URL(site).host : page.address;

  return (
    <>
      <div className="window-header browser-toolbar">
        <WindowControls target="showcase" />
        <p className="address-bar">
          <Lock aria-hidden="true" />
          <span>{page.address}</span>
        </p>
        <a
          className="toolbar-button"
          href={site}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.showcase.openSite(siteHost)}
          title={t.showcase.openSite(siteHost)}
        >
          <ExternalLink aria-hidden="true" />
        </a>
      </div>

      {PROJECTS.length > 1 && (
        <div
          className="browser-tabs"
          role="tablist"
          aria-label={t.showcase.tabs}
        >
          {PROJECTS.map(({ id }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={id === activeId}
              className={clsx(id === activeId && "active")}
              onClick={() => setActiveId(id)}
            >
              {t.showcase.projects[id].hero.title}
            </button>
          ))}
        </div>
      )}

      <article className="showcase-page" key={project.id}>
        <header className="showcase-hero">
          <h1>{page.hero.title}</h1>
          <p className="showcase-lede">{page.hero.lede}</p>
          <p className="showcase-note">{page.hero.role}</p>
          <div className="showcase-actions">
            <a
              className="showcase-button primary"
              href={site}
              target="_blank"
              rel="noopener noreferrer"
            >
              {page.hero.visit}
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              className="showcase-button"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandIcon brand="github" />
              {page.hero.code}
            </a>
          </div>
          <Screenshot shot={project.hero} t={t} />
        </header>

        <section>
          <h2>{page.features.heading}</h2>
          <div className="showcase-features">
            {project.features.map(({ id, shot }) => (
              <div key={id} className="showcase-feature">
                <div>
                  <h3>{page.features.items[id].title}</h3>
                  <p>{page.features.items[id].text}</p>
                </div>
                <Screenshot shot={shot} t={t} lazy />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>{page.architecture.heading}</h2>
          <p>{page.architecture.intro}</p>
          <div className="showcase-architecture">
            <ol className="architecture-layers">
              {page.architecture.layers.map((layer) => (
                <li key={layer.title}>
                  <h3>{layer.title}</h3>
                  <ul>
                    {layer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <div className="architecture-side">
              {[page.architecture.services, page.architecture.deploy].map(
                (group) => (
                  <div key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.items.join(", ")}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section>
          <h2>{page.contribution.heading}</h2>
          <ul className="showcase-list">
            {page.contribution.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{page.decisions.heading}</h2>
          <dl className="showcase-decisions">
            {page.decisions.items.map((decision) => (
              <div key={decision.title}>
                <dt>{decision.title}</dt>
                <dd>{decision.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>{page.team.heading}</h2>
          <p>{page.team.text}</p>
          <p className="showcase-note">{page.team.members}</p>
        </section>
      </article>
    </>
  );
};

/** A screenshot at its own proportions, framed like a browser window. */
const Screenshot = ({
  shot,
  t,
  lazy = false,
}: {
  shot: Shot;
  t: Dictionary;
  lazy?: boolean;
}) => (
  <figure className={clsx("showcase-shot", shot.crop && "is-cropped")}>
    <span className="shot-bar" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
    <img
      src={shot.src}
      alt={t.gallery.images[shot.alt]}
      loading={lazy ? "lazy" : undefined}
    />
  </figure>
);

const ShowcaseWindow = WindowWrapper(Showcase, "showcase");

export default ShowcaseWindow;
