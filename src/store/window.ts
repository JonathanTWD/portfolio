import { create } from "zustand";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants";

type WindowConfig = typeof WINDOW_CONFIG;
export type WindowKey = keyof WindowConfig;
type WindowData = Record<string, unknown> | null;

type WindowState = {
  windows: WindowConfig;
  nextZ: number;
  openWindow: (windowKey: WindowKey, data?: WindowData) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
};

const useWindowStore = create<WindowState>((set) => ({
  windows: WINDOW_CONFIG,
  nextZ: INITIAL_Z_INDEX + 1,

  openWindow: (windowKey, data = null) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [windowKey]: {
          ...state.windows[windowKey],
          isOpen: true,
          zIndex: state.nextZ,
          data: data ?? state.windows[windowKey].data,
        },
      },
      nextZ: state.nextZ + 1,
    })),

  closeWindow: (windowKey) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [windowKey]: {
          ...state.windows[windowKey],
          isOpen: false,
          zIndex: INITIAL_Z_INDEX,
          data: null,
        },
      },
    })),

  focusWindow: (windowKey) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [windowKey]: {
          ...state.windows[windowKey],
          zIndex: state.nextZ,
        },
      },
      nextZ: state.nextZ + 1,
    })),
}));

export default useWindowStore;
