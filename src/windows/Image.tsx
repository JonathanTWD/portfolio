import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

type ImageData = {
  name: string;
  imageUrl?: string;
};

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data as ImageData | null;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{data.name}</p>
      </div>

      <div className="p-5 bg-white">
        {data.imageUrl && (
          <div className="w-full">
            <img src={data.imageUrl} alt={data.name} className="w-full h-auto max-h-[70vh] object-contain" />
          </div>
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
