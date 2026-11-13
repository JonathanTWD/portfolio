import clsx from "clsx";
import { ArrowRight, ExternalLink, Lock, Network } from "lucide-react";
import BrandIcon from "../components/BrandIcon";
import WindowControls from "../components/WindowControls";
import {
  locations,
  showcaseProjects,
  type FileLocation,
  type ShowcaseShot,
} from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import { useTranslation, type Dictionary } from "../i18n";
import useShowcaseStore from "../store/showcase";

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
  const { activeId, setActiveId } = useShowcaseStore();

  const project =
    showcaseProjects.find(({ id }) => id === activeId) ?? showcaseProjects[0];
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

      {showcaseProjects.length > 1 && (
        <div
          className="browser-tabs"
          role="tablist"
          aria-label={t.showcase.tabs}
        >
          {showcaseProjects.map(({ id }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={id === project.id}
              className={clsx(id === project.id && "active")}
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
            {project.features.map(({ id, shot }) => {
              const feature = page.features.items.find(
                (item) => item.id === id,
              );
              if (!feature) return null;

              return (
                <div key={id} className="showcase-feature">
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                  <Screenshot shot={shot} t={t} lazy />
                </div>
              );
            })}
          </div>
        </section>

        {page.more && (
          <section>
            <h2>{page.more.heading}</h2>
            <ul className="showcase-list">
              {page.more.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

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
            {project.diagram && (
              <a
                className="showcase-button"
                href={project.diagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Network aria-hidden="true" />
                {t.showcase.diagram}
              </a>
            )}
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
          {page.team.facts && (
            <ul className="showcase-list showcase-facts">
              {page.team.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          )}
          {page.team.members && (
            <p className="showcase-note">{page.team.members}</p>
          )}
        </section>
      </article>
    </>
  );
};

/** A screenshot framed like a browser window, at its own proportions or cropped. */
const Screenshot = ({
  shot,
  t,
  lazy = false,
}: {
  shot: ShowcaseShot;
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
      style={
        shot.crop && {
          aspectRatio: shot.crop.ratio,
          objectPosition: shot.crop.position ?? "top",
        }
      }
    />
  </figure>
);

const ShowcaseWindow = WindowWrapper(Showcase, "showcase");

export default ShowcaseWindow;
