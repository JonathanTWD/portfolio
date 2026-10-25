import { useSyncExternalStore } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = Exclude<Theme, "system">;

export const THEMES: Theme[] = ["light", "dark", "system"];

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => set({ theme }),
    }),
    { name: "portfolio-theme" },
  ),
);

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

const subscribeToSystemTheme = (onChange: () => void) => {
  darkQuery.addEventListener("change", onChange);
  return () => darkQuery.removeEventListener("change", onChange);
};

const getSystemTheme = (): ResolvedTheme =>
  darkQuery.matches ? "dark" : "light";

/** The theme actually on screen: "system" follows the operating system. */
export const useResolvedTheme = (): ResolvedTheme => {
  const theme = useThemeStore((state) => state.theme);
  const systemTheme = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemTheme,
  );

  return theme === "system" ? systemTheme : theme;
};

export default useThemeStore;
