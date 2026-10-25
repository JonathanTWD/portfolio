import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language } from "../i18n/types";

const detectLanguage = (): Language =>
  navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";

type LanguageState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: detectLanguage(),
      setLanguage: (language) => set({ language }),
    }),
    { name: "portfolio-language" },
  ),
);

export default useLanguageStore;
