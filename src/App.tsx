import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useEffect } from "react";

import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Terminal from "./windows/Terminal";
import Resume from "./windows/Resume";
import Finder from "./windows/Finder";
import Text from "./windows/Text";
import Image from "./windows/Image";
import Contact from "./windows/Contact";
import Photos from "./windows/Gallery";
import Home from "./components/Home";
import Settings from "./windows/Settings";
import CaseStudy from "./windows/CaseStudy";
import { useResolvedTheme } from "./store/theme";
import useLanguageStore from "./store/language";
import { useTranslation } from "./i18n";

gsap.registerPlugin(Draggable);

const App = () => {
  const theme = useResolvedTheme();
  const language = useLanguageStore((state) => state.language);
  const t = useTranslation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
  }, [language, t]);

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <CaseStudy />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Home />
      <Settings />
    </main>
  );
};

export default App;
