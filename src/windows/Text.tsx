import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";
import { getLocationText, useTranslation } from "../i18n";
import type { FileLocation } from "../constants";

const Text = () => {
  const t = useTranslation();
  const { windows } = useWindowStore();
  const data = windows.txtfile.data as FileLocation | null;

  if (!data) return null;

  const { name, subtitle, meta, description, bullets, sections } =
    getLocationText(t, data);

  return (
    <>
      <div className="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <article className="text-document">
        {(data.photo || subtitle) && (
          <header>
            {data.photo && (
              <img
                className="document-photo"
                src={data.photo}
                alt={t.contact.photoAlt}
              />
            )}
            {subtitle && <h1>{subtitle}</h1>}
            {meta && <p className="document-meta">{meta}</p>}
          </header>
        )}
        {description?.map((paragraph, index) => (
          <p key={`${name}-${index}`}>{paragraph}</p>
        ))}
        {sections?.map((section) => (
          <section key={section.title} className="document-section">
            <h2>{section.title}</h2>
            {section.meta && <p className="document-meta">{section.meta}</p>}
            {section.description?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        {bullets && (
          <ul>
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </article>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
