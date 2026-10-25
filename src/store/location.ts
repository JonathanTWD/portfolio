import { create } from "zustand";
import { locations, type FolderLocation } from "../constants";

const DEFAULT_LOCATION = locations.work;

type LocationState = {
  activeLocation: FolderLocation;
  /** Folders visited before the active one, for the Back button. */
  history: FolderLocation[];
  setActiveLocation: (location: FolderLocation) => void;
  goBack: () => void;
  resetActiveLocation: () => void;
};

const useLocationStore = create<LocationState>((set) => ({
  activeLocation: DEFAULT_LOCATION,
  history: [],

  setActiveLocation: (location) =>
    set((state) =>
      location === state.activeLocation
        ? state
        : {
            activeLocation: location,
            history: [...state.history, state.activeLocation],
          },
    ),

  goBack: () =>
    set((state) => {
      const previous = state.history.at(-1);
      if (!previous) return state;

      return {
        activeLocation: previous,
        history: state.history.slice(0, -1),
      };
    }),

  resetActiveLocation: () =>
    set({ activeLocation: DEFAULT_LOCATION, history: [] }),
}));

export default useLocationStore;
