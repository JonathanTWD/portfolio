import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { lazy, Suspense, useEffect } from "react";

import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Terminal from "./windows/Terminal";
import Finder from "./windows/Finder";
import Text from "./windows/Text";
import Image from "./windows/Image";
import Contact from "./windows/Contact";
import Photos from "./windows/Gallery";
import Home from "./components/Home";
import Widgets from "./components/Widgets";
import Onboarding from "./components/Onboarding";
import MobileHome from "./components/MobileHome";
import useIsMobile from "./hooks/useIsMobile";
import useWindowStore from "./store/window";
import Settings from "./windows/Settings";
import Showcase from "./windows/Showcase";
import { useResolvedTheme } from "./store/theme";
import useLanguageStore from "./store/language";
import { useTranslation } from "./i18n";

gsap.registerPlugin(Draggable);

/* The PDF viewer is heavy: load it the first time the resume opens. */
const Resume = lazy(() => import("./windows/Resume"));

const App = () => {
  const theme = useResolvedTheme();
  const language = useLanguageStore((state) => state.language);
  const t = useTranslation();
  const isMobile = useIsMobile();
  const isResumeOpen = useWindowStore((state) => state.windows.resume.isOpen);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
  }, [language, t]);

  return (
    <main>
      {isMobile ? (
        <MobileHome />
      ) : (
        <>
          <Navbar />
          <Welcome />
          <Widgets />
          <Dock />
          <Home />
        </>
      )}
      <Onboarding />

      <Terminal />
      <Showcase />
      {isResumeOpen && (
        <Suspense fallback={null}>
          <Resume />
        </Suspense>
      )}
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Settings />
    </main>
  );
};

export default App;
