"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Aurora() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animation = useAnimation();

  useEffect(() => {
    animation.start({
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [animation]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]"
    >
      <motion.div
        animate={animation}
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(120, 50, 255, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(50, 150, 255, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 50% 60% at 40% 80%, rgba(255, 50, 150, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 60% 50%, rgba(50, 255, 200, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
        }}
      />
      <div className="absolute inset-0 bg-[#050505]/80" />
    </div>
  );
}
