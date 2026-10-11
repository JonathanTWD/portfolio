import { useRef, type ComponentType } from "react";
import useWindowStore, { type WindowKey } from "../store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = <Props extends object>(
  Component: ComponentType<Props>,
  windowKey: WindowKey,
) => {
  const Wrapped = (props: Props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, isMinimized, isMaximized, zIndex } = windows[windowKey];
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

      el.style.display = "block";

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
    }, [isOpen, isMinimized, isMaximized]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized || isMaximized) return;

      const [instance] = Draggable.create(el, {
        cursor: "default",
        activeCursor: "default",
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, [isOpen, isMinimized, isMaximized]);

    if (!isOpen) return null;

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{
          zIndex,
          top: isMaximized ? 0 : undefined,
          left: isMaximized ? 0 : undefined,
          width: isMaximized ? "100vw" : undefined,
          height: isMaximized ? "100vh" : undefined,
          borderRadius: isMaximized ? 0 : undefined,
        }}
        className={`absolute${isMaximized ? " is-maximized" : ""}`}
        onMouseDown={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
