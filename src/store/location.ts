import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations, type FolderLocation } from "../constants";

const DEFAULT_LOCATION = locations.work;

type LocationState = {
  activeLocation: FolderLocation;
  setActiveLocation: (location: FolderLocation) => void;
  resetActiveLocation: () => void;
};

const useLocationStore = create<LocationState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;
