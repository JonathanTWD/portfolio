import { create } from "zustand";
import {
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
  type WindowKey,
  type Location,
} from "../constants";

export type { WindowKey } from "../constants";

type WindowConfig = typeof WINDOW_CONFIG;
type WindowData = Location | null;

type WindowState = {
  windows: WindowConfig;
  nextZ: number;
  openWindow: (windowKey: WindowKey, data?: WindowData) => void;
  closeWindow: (windowKey: WindowKey) => void;
  minimizeWindow: (windowKey: WindowKey) => void;
  restoreWindow: (windowKey: WindowKey) => void;
  toggleMaximizeWindow: (windowKey: WindowKey) => void;
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
          isMinimized: false,
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
          isMinimized: false,
          isMaximized: false,
          zIndex: INITIAL_Z_INDEX,
          data: null,
        },
      },
    })),

  minimizeWindow: (windowKey) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [windowKey]: {
          ...state.windows[windowKey],
          isMinimized: true,
        },
      },
    })),

  restoreWindow: (windowKey) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [windowKey]: {
          ...state.windows[windowKey],
          isOpen: true,
          isMinimized: false,
          zIndex: state.nextZ,
        },
      },
      nextZ: state.nextZ + 1,
    })),

  toggleMaximizeWindow: (windowKey) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [windowKey]: {
          ...state.windows[windowKey],
          isMinimized: false,
          isMaximized: !state.windows[windowKey].isMaximized,
          zIndex: state.nextZ,
        },
      },
      nextZ: state.nextZ + 1,
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

/** The window in front: the open, non-minimized one with the highest z-index. */
export const selectFocusedWindow = (state: WindowState): WindowKey | null => {
  let focused: WindowKey | null = null;

  for (const [key, entry] of Object.entries(state.windows) as [
    WindowKey,
    WindowConfig[WindowKey],
  ][]) {
    if (!entry.isOpen || entry.isMinimized) continue;
    if (!focused || entry.zIndex > state.windows[focused].zIndex) focused = key;
  }

  return focused;
};

export default useWindowStore;
