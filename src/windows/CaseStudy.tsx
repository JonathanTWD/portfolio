import { ArrowRight, ExternalLink, Lock } from "lucide-react";
import BrandIcon from "../components/BrandIcon";
import WindowControls from "../components/WindowControls";
import { locations, type FileLocation } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import { useTranslation, type GalleryImageId } from "../i18n";

const IMAGES = "/images/canaccesible-project";

const project = locations.work.children.find(
  (folder) => folder.name === "CanAccesible",
);
const links = (project?.children ?? []).filter(
  (item): item is FileLocation => item.kind === "file" && Boolean(item.href),
);
const siteUrl = links.find((link) => link.linkStyle === "web")?.href;
const repoUrl = links.find((link) => link.linkStyle === "github")?.href;

const FEATURES = [
  { id: "report", image: "canaccesible-3.png", alt: "incident" },
  { id: "map", image: "canaccesible-1.png", alt: "map" },
  { id: "manage", image: "canaccesible-2.png", alt: "management" },
] as const satisfies readonly {
  id: string;
  image: string;
  alt: GalleryImageId;
}[];

/** A browser showing the CanAccesible case study as a web page. */
const CaseStudy = () => {
  const t = useTranslation();
  const c = t.caseStudy;

  return (
    <>
      <div className="window-header browser-toolbar">
        <WindowControls target="casestudy" />
        <p className="address-bar">
          <Lock aria-hidden="true" />
          <span>{c.address}</span>
        </p>
        <a
          className="toolbar-button"
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={c.openSite}
          title={c.openSite}
        >
          <ExternalLink aria-hidden="true" />
        </a>
      </div>

      <article className="case-study">
        <header className="case-hero">
          <h1>{c.hero.title}</h1>
          <p className="case-lede">{c.hero.lede}</p>
          <p className="case-role">{c.hero.role}</p>
          <div className="case-actions">
            <a
              className="case-button primary"
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.hero.visit}
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              className="case-button"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandIcon brand="github" />
              {c.hero.code}
            </a>
          </div>
          <img
            className="case-shot hero-shot"
            src={`${IMAGES}/canaccesible-8.png`}
            alt={t.gallery.images.landing}
          />
        </header>

        <section>
          <h2>{c.features.heading}</h2>
          <div className="case-features">
            {FEATURES.map(({ id, image, alt }) => (
              <div key={id} className="case-feature">
                <img
                  className="case-shot"
                  src={`${IMAGES}/${image}`}
                  alt={t.gallery.images[alt]}
                  loading="lazy"
                />
                <div>
                  <h3>{c.features.items[id].title}</h3>
                  <p>{c.features.items[id].text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>{c.architecture.heading}</h2>
          <p>{c.architecture.intro}</p>
          <div className="case-architecture">
            <ol className="architecture-layers">
              {c.architecture.layers.map((layer) => (
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
              {[c.architecture.services, c.architecture.deploy].map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2>{c.contribution.heading}</h2>
          <ul className="case-list">
            {c.contribution.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{c.decisions.heading}</h2>
          <dl className="case-decisions">
            {c.decisions.items.map((decision) => (
              <div key={decision.title}>
                <dt>{decision.title}</dt>
                <dd>{decision.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>{c.team.heading}</h2>
          <p>{c.team.text}</p>
          <p className="case-role">{c.team.members}</p>
        </section>
      </article>
    </>
  );
};

const CaseStudyWindow = WindowWrapper(CaseStudy, "casestudy");

export default CaseStudyWindow;
