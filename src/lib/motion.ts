const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/** True when the person asked the system for less motion. */
export const prefersReducedMotion = () => reducedMotion.matches;
