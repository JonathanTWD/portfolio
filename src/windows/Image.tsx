import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";
import { getLocationText, useTranslation } from "../i18n";
import type { FileLocation } from "../constants";

const Image = () => {
  const t = useTranslation();
  const { windows } = useWindowStore();
  const data = windows.imgfile.data as FileLocation | null;

  if (!data) return null;

  const { name } = getLocationText(t, data);

  return (
    <>
      <div className="window-header">
        <WindowControls target="imgfile" />
        <p>{name}</p>
      </div>

      <div className="image-content">
        {data.imageUrl && <img src={data.imageUrl} alt={name} />}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
