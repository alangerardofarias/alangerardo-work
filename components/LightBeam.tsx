"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type LightBeamProps = {
  children: ReactNode;
  className?: string;
};

export default function LightBeam({ children, className = "" }: LightBeamProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    ["16px", "24px", "140px", "320px"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    [0.18, 0.1, 0.05, 0]
  );
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(28px)", "blur(68px)"]);
  const top = useTransform(scrollYProgress, [0, 1], ["3%", "10%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["96%", "110%"]);

  return (
    <div ref={targetRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="pointer-events-none absolute left-1/2"
        style={{
          width,
          opacity,
          filter: blur,
          top,
          height,
          transform: "translateX(-50%)",
          willChange: "width, opacity, filter, transform",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(122,127,107,0.14), rgba(122,127,107,0.04) 28%, rgba(122,127,107,0) 62%)",
          }}
        />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
