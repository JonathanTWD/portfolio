import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants";

type Location = {
  id: number;
  name: string;
  icon: string;
  children?: Location[];
  position?: string;
};

const DEFAULT_LOCATION = locations.work;

type LocationState = {
  activeLocation: Location;
  setActiveLocation: (location: Location) => void;
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
