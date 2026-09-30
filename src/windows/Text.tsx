import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";
import type { FileLocation } from "../constants";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data as FileLocation | null;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>

      <article className="text-document p-5 space-y-5">
        {data.image && <img src={data.image} alt={data.name} />}
        {data.subtitle && <h2>{data.subtitle}</h2>}
        {data.description?.map((description, index) => (
          <p key={`${data.name}-${index}`}>{description}</p>
        ))}
      </article>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
