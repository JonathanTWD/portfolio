import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useEffect } from "react";

import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Terminal from "./windows/Terminal";
import Safari from "./windows/Safari";
import Resume from "./windows/Resume";
import Finder from "./windows/Finder";
import Text from "./windows/Text";
import Image from "./windows/Image";
import Contact from "./windows/Contact";
import Photos from "./windows/Gallery";
import Home from "./components/Home";
import Settings from "./windows/Settings";
import useThemeStore from "./store/theme";

gsap.registerPlugin(Draggable);

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
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