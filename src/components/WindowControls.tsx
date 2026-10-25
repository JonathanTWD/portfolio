import { ChevronLeft } from "lucide-react";
import useIsMobile from "../hooks/useIsMobile";
import { useTranslation } from "../i18n";
import useWindowStore, { type WindowKey } from "../store/window";

type WindowControlsProps = {
  target: WindowKey;
  canMaximize?: boolean;
};

const WindowControls = ({
  target,
  canMaximize = true,
}: WindowControlsProps) => {
  const { closeWindow, minimizeWindow, toggleMaximizeWindow } =
    useWindowStore();
  const t = useTranslation();
  const isMobile = useIsMobile();

  /* On phones every window is full screen: one button takes you back home. */
  if (isMobile) {
    return (
      <button
        type="button"
        className="mobile-back"
        aria-label={t.mobile.backHome}
        onClick={() => closeWindow(target)}
      >
        <ChevronLeft aria-hidden="true" />
        {t.mobile.home}
      </button>
    );
  }

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
