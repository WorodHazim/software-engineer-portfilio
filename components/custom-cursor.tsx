"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 700, damping: 45, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 700, damping: 45, mass: 0.3 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (event: MouseEvent) => {
      x.set(event.clientX - 7);
      y.set(event.clientY - 7);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enterInteractive = (event: Event) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a, button, input, textarea, [data-cursor='active']")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", leave);
    document.addEventListener("mouseover", enterInteractive);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
      document.removeEventListener("mouseover", enterInteractive);
    };
  }, [x, y]);

  return (
    <motion.div
      className="custom-cursor"
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0, scale: active ? 2.2 : 1 }}
      transition={{ duration: 0.18 }}
      aria-hidden="true"
    />
  );
}
