import { useSyncExternalStore } from "react";

/** Below this width the portfolio switches to the phone home screen. */
const mobileQuery = window.matchMedia("(max-width: 767px)");

const subscribe = (onChange: () => void) => {
  mobileQuery.addEventListener("change", onChange);
  return () => mobileQuery.removeEventListener("change", onChange);
};

const useIsMobile = () =>
  useSyncExternalStore(subscribe, () => mobileQuery.matches);

export const isMobileViewport = () => mobileQuery.matches;

export default useIsMobile;
