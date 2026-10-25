/**
 * Where the last app was launched from on the phone home screen, so the
 * window can grow out of the icon that was tapped.
 */
let origin: DOMRect | null = null;

export const setLaunchOrigin = (element: Element) => {
  origin = element.getBoundingClientRect();
};

export const takeLaunchOrigin = () => {
  const current = origin;
  origin = null;
  return current;
};
