"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./sticky.module.scss";
import {
  motion,
  useMotionValue,
  useSpring,
  transform,
  animate,
} from "framer-motion";
import { cn } from "@/lib/utils";

export default function StickyCursor({ stickyElement }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const cursor = useRef(null);
  const cursorSize = isHovered ? 175 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const smoothOptions = { damping: 60, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const target = e.target;

    const hasBigCursor = target.closest('[data-cursor="big"]');
    const currentElement = hasBigCursor || stickyElement?.current;

    if (!currentElement) {
      setIsHovered(false);
      setCursorLabel("");
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
      return;
    }

    const { left, top, height, width } = currentElement.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      const distance = { x: clientX - center.x, y: clientY - center.y };

      // Calculate scale based on distance but don't apply rotation
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height / 19], [1, 0.5]);
      const newScaleY = transform(absDistance, [0, width / 19], [1, 0.5]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.5);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.5);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = (e: any) => {
    const target = e.target;
    const element =
      target.closest('[data-cursor="big"]') || target === stickyElement?.current
        ? target
        : null;

    if (element) {
      setIsHovered(true);
      const label = element.getAttribute("data-cursorLabel");
      setCursorLabel(label || "");

      // Reset any rotation when entering hover state
      if (cursor.current) {
        animate(cursor.current, { rotate: 0 }, { duration: 0.3 });
      }
    }
  };

  const manageMouseLeave = (e: any) => {
    const target = e.target;
    const relatedTarget = e.relatedTarget;

    if (
      !relatedTarget?.closest('[data-cursor="big"]') &&
      relatedTarget !== stickyElement?.current
    ) {
      setIsHovered(false);
      setCursorLabel("");
      animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 });
    }
  };

  useEffect(() => {
    stickyElement?.current?.addEventListener("mouseenter", manageMouseOver);
    stickyElement?.current?.addEventListener("mouseleave", manageMouseLeave);

    const elements = document.querySelectorAll('[data-cursor="big"]');
    elements.forEach((element) => {
      element.addEventListener("mouseenter", manageMouseOver);
      element.addEventListener("mouseleave", manageMouseLeave);
    });

    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      stickyElement?.current?.removeEventListener(
        "mouseenter",
        manageMouseOver
      );
      stickyElement?.current?.removeEventListener(
        "mouseleave",
        manageMouseLeave
      );

      elements.forEach((element) => {
        element.removeEventListener("mouseenter", manageMouseOver);
        element.removeEventListener("mouseleave", manageMouseLeave);
      });

      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);

  return (
    <div className={cn(styles.cursorContainer, "hidden lg:block")}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={cn(styles.cursor, "flex items-center justify-center")}
        ref={cursor}
      >
        {cursorLabel && (
          <span className="font-semibold text-white pointer-events-none select-none text-center p-5 h3">
            {cursorLabel}
          </span>
        )}
      </motion.div>
    </div>
  );
}
