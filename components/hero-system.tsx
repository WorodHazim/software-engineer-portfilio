"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";

export function HeroSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 90, damping: 20 });
  const y = useSpring(my, { stiffness: 90, damping: 20 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((event.clientX - rect.left - rect.width / 2) * 0.035);
    my.set((event.clientY - rect.top - rect.height / 2) * 0.035);
  }

  return (
    <div
      ref={ref}
      className="hero-system"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      aria-label="Interactive digital systems diagram"
      role="img"
    >
      <div className="hero-system-grid" aria-hidden="true" />
      <div className="hero-system-topline">
        <span>SYSTEM MAP / WH—26</span>
        <span>32.0° N / 54.0° E</span>
      </div>
      <motion.div className="system-orbit orbit-one" style={{ x, y }} aria-hidden="true" />
      <motion.div className="system-orbit orbit-two" style={{ x: y, y: x }} aria-hidden="true" />
      <motion.div className="system-core" style={{ x, y }} aria-hidden="true">
        <span>WH</span>
        <small>INTERFACE / LOGIC / MOTION</small>
      </motion.div>
      <div className="system-node node-a">
        <span>01</span>
        <strong>DESIGN</strong>
      </div>
      <div className="system-node node-b">
        <span>02</span>
        <strong>BUILD</strong>
      </div>
      <div className="system-node node-c">
        <span>03</span>
        <strong>DEPLOY</strong>
      </div>
      <div className="system-node node-d">
        <span>04</span>
        <strong>EVOLVE</strong>
      </div>
      <div className="system-readout">
        <span className="status-dot" />
        <span>OPEN TO SELECTED PROJECTS</span>
      </div>
    </div>
  );
}
