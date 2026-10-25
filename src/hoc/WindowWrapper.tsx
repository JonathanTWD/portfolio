import { useRef, type ComponentType } from "react";
import clsx from "clsx";
import useWindowStore, {
  selectFocusedWindow,
  type WindowKey,
} from "../store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import useIsMobile from "../hooks/useIsMobile";
import { takeLaunchOrigin } from "../lib/launchOrigin";
import { prefersReducedMotion } from "../lib/motion";

const WindowWrapper = <Props extends object>(
  Component: ComponentType<Props>,
  windowKey: WindowKey,
) => {
  const Wrapped = (props: Props) => {
    const { focusWindow, closeWindow, windows } = useWindowStore();
    const isMobile = useIsMobile();
    const { isOpen, isMinimized, isMaximized, zIndex } = windows[windowKey];
    const isFocused = useWindowStore(selectFocusedWindow) === windowKey;
    const ref = useRef<HTMLElement | null>(null);
    const normalTransform = useRef({ x: 0, y: 0 });
    const previousState = useRef({
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
    });

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      gsap.killTweensOf(el);

      if (!isOpen) {
        gsap.set(el, { clearProps: "transform,opacity,pointerEvents" });
        normalTransform.current = { x: 0, y: 0 };
        previousState.current = { isOpen, isMinimized, isMaximized };
        return;
      }

      el.style.display = "";

      /* Phones: full screen, growing out of the icon that was tapped. */
      if (isMobile) {
        gsap.set(el, { clearProps: "transform,opacity,pointerEvents" });
        const origin = takeLaunchOrigin();
        const opening = !previousState.current.isOpen;
        previousState.current = { isOpen, isMinimized, isMaximized };
        if (!opening || prefersReducedMotion()) return;

        gsap.fromTo(
          el,
          {
            scale: 0.2,
            opacity: 0,
            transformOrigin: origin
              ? `${origin.left + origin.width / 2}px ${origin.top + origin.height / 2}px`
              : "50% 50%",
          },
          { scale: 1, opacity: 1, duration: 0.38, ease: "power3.out" },
        );
        return;
      }

      const wasNormal =
        previousState.current.isOpen &&
        !previousState.current.isMinimized &&
        !previousState.current.isMaximized;

      if (isMinimized) {
        const dockIcon = document.querySelector<HTMLElement>(
          `[data-dock-window="${windowKey}"]`,
        );
        const windowRect = el.getBoundingClientRect();
        const targetRect = dockIcon?.getBoundingClientRect();
        const currentX = Number(gsap.getProperty(el, "x"));
        const currentY = Number(gsap.getProperty(el, "y"));

        if (wasNormal) normalTransform.current = { x: currentX, y: currentY };

        const targetX = targetRect
          ? currentX +
            targetRect.left +
            targetRect.width / 2 -
            (windowRect.left + windowRect.width / 2)
          : currentX;
        const targetY = targetRect
          ? currentY +
            targetRect.top +
            targetRect.height / 2 -
            (windowRect.top + windowRect.height / 2)
          : currentY + window.innerHeight / 2;

        gsap.to(el, {
          x: targetX,
          y: targetY,
          scale: 0.1,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
          pointerEvents: "none",
        });
        previousState.current = { isOpen, isMinimized, isMaximized };
        return;
      }

      if (isMaximized) {
        const currentX = Number(gsap.getProperty(el, "x"));
        const currentY = Number(gsap.getProperty(el, "y"));

        if (wasNormal) normalTransform.current = { x: currentX, y: currentY };

        gsap.fromTo(
          el,
          { x: currentX, y: currentY, scale: 0.96, opacity: 0.8 },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
            pointerEvents: "auto",
          },
        );
        previousState.current = { isOpen, isMinimized, isMaximized };
        return;
      }

      gsap.fromTo(
        el,
        { x: 0, y: 0, scale: 0.96, opacity: 0.8 },
        {
          x: normalTransform.current.x,
          y: normalTransform.current.y,
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
          pointerEvents: "auto",
        },
      );
      previousState.current = { isOpen, isMinimized, isMaximized };
    }, [isOpen, isMinimized, isMaximized, isMobile]);

    /* Move keyboard focus into a window when it opens. */
    useGSAP(() => {
      if (isOpen && !isMinimized) ref.current?.focus({ preventScroll: true });
    }, [isOpen, isMinimized]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized || isMaximized || isMobile) return;

      const [instance] = Draggable.create(el, {
        cursor: "default",
        activeCursor: "default",
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, [isOpen, isMinimized, isMaximized, isMobile]);

    if (!isOpen) return null;

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className={clsx(
          "window",
          isMaximized && "is-maximized",
          isMobile && "is-fullscreen",
          !isFocused && "is-inactive",
        )}
        tabIndex={-1}
        onMouseDown={() => focusWindow(windowKey)}
        onKeyDown={(event) => {
          // Escape closes the window, except while typing in a field.
          if (event.key !== "Escape") return;
          if ((event.target as HTMLElement).closest("input, textarea")) return;
          closeWindow(windowKey);
        }}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
