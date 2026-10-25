import { useTranslation } from "../i18n";
import useWindowStore, { type WindowKey } from "../store/window";

type WindowControlsProps = {
  target: WindowKey;
  canMaximize?: boolean;
};

const WindowControls = ({ target, canMaximize = true }: WindowControlsProps) => {
  const { closeWindow, minimizeWindow, toggleMaximizeWindow } = useWindowStore();
  const t = useTranslation();
  return (
    <div className="window-controls">
      <button
        type="button"
        className="close"
        aria-label={t.windowControls.close}
        onClick={() => closeWindow(target)}
      />
      <button
        type="button"
        className="minimize"
        aria-label={t.windowControls.minimize}
        onClick={() => minimizeWindow(target)}
      />
      {canMaximize && (
        <button
          type="button"
          className="maximize"
          aria-label={t.windowControls.maximize}
          onClick={() => toggleMaximizeWindow(target)}
        />
      )}
    </div>
  );
};

export default WindowControls;