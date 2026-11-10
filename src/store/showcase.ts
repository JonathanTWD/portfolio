import { create } from "zustand";
import type { ShowcaseProjectId } from "../i18n/types";

type ShowcaseState = {
  /** Project page open in the Showcase. */
  activeId: ShowcaseProjectId;
  setActiveId: (id: ShowcaseProjectId) => void;
};

const useShowcaseStore = create<ShowcaseState>((set) => ({
  activeId: "tablaria",
  setActiveId: (activeId) => set({ activeId }),
}));

export default useShowcaseStore;
