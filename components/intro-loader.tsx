"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroLoader() {
  const [show, setShow] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const hasSeen = window.sessionStorage.getItem("worod-intro-seen");
    if (hasSeen || reduceMotion) return;
    const enterFrame = window.requestAnimationFrame(() => setShow(true));
    const timer = window.setTimeout(() => {
      setShow(false);
      window.sessionStorage.setItem("worod-intro-seen", "true");
    }, 1650);
    return () => {
      window.cancelAnimationFrame(enterFrame);
      window.clearTimeout(timer);
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="intro-grid" aria-hidden="true" />
          <div className="intro-inner">
            <div className="intro-topline">
              <span>WOROD HAZEM</span>
              <span>PORTFOLIO / 2026</span>
            </div>
            <motion.div
              className="intro-monogram"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              WH
            </motion.div>
            <div className="intro-status">
              <span className="status-dot" />
              <span>DIGITAL SYSTEMS INITIALIZING</span>
              <motion.span
                className="intro-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.15, delay: 0.15, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
