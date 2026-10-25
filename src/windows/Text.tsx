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

  const { name, subtitle, meta, description, bullets } = getLocationText(
    t,
    data,
  );

  return (
    <>
      <div className="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <article className="text-document">
        {data.showPhotoSlot && (
          <div className="photo-slot" aria-hidden="true">
            <span>JM</span>
            <span>{t.textFile.photoPlaceholder}</span>
          </div>
        )}
        {subtitle && (
          <header>
            <h1>{subtitle}</h1>
            {meta && <p className="document-meta">{meta}</p>}
          </header>
        )}
        {description?.map((paragraph, index) => (
          <p key={`${name}-${index}`}>{paragraph}</p>
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
