import { create } from "zustand";
import { persist } from "zustand/middleware";

type OnboardingState = {
  /** The welcome tip was closed once; it never shows again. */
  dismissed: boolean;
  dismiss: () => void;
};

const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      dismissed: false,
      dismiss: () => set({ dismissed: true }),
    }),
    { name: "portfolio-onboarding" },
  ),
);

export default useOnboardingStore;
