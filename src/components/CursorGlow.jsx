import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if ("ontouchstart" in window) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none cursor-glow-breathe"
    />
  );
}
