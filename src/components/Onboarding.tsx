import { MousePointerClick, X } from "lucide-react";
import { locations } from "../constants";
import useIsMobile from "../hooks/useIsMobile";
import { useTranslation } from "../i18n";
import useLocationStore from "../store/location";
import useOnboardingStore from "../store/onboarding";
import useWindowStore from "../store/window";

/** First-visit tip, like a macOS notification. Closed once, never shown again. */
const Onboarding = () => {
  const t = useTranslation();
  const { dismissed, dismiss } = useOnboardingStore();
  const isMobile = useIsMobile();
  const openWindow = useWindowStore((state) => state.openWindow);
  const setActiveLocation = useLocationStore(
    (state) => state.setActiveLocation,
  );

  if (dismissed) return null;

  const start = () => {
    setActiveLocation(locations.about);
    openWindow("finder");
    dismiss();
  };

  return (
    <div id="onboarding" role="status">
      <MousePointerClick className="onboarding-icon" aria-hidden="true" />
      <div>
        <h2>{t.onboarding.title}</h2>
        <p>{isMobile ? t.onboarding.mobileText : t.onboarding.text}</p>
        <div className="onboarding-actions">
          <button type="button" className="primary" onClick={start}>
            {t.onboarding.start}
          </button>
          <button type="button" onClick={dismiss}>
            {t.onboarding.dismiss}
          </button>
        </div>
      </div>
      <button
        type="button"
        className="onboarding-close"
        aria-label={t.onboarding.dismiss}
        onClick={dismiss}
      >
        <X aria-hidden="true" />
      </button>
    </div>
  );
};

export default Onboarding;
