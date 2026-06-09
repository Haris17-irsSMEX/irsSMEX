"use client";

import { motion } from "motion/react";

const orbs = [
  { className: "left-[-8rem] top-16 h-72 w-72 bg-cyan-500/18", x: [0, 30, -10, 0], y: [0, -30, 20, 0] },
  { className: "right-[-6rem] top-40 h-80 w-80 bg-blue-500/14", x: [0, -35, 12, 0], y: [0, 24, -18, 0] },
  { className: "left-1/3 bottom-[-8rem] h-96 w-96 bg-indigo-400/10", x: [0, 18, -25, 0], y: [0, -20, 28, 0] },
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,80,140,0.18),transparent_36%),radial-gradient(circle_at_bottom,rgba(24,95,110,0.18),transparent_30%),linear-gradient(180deg,#030711_0%,#06101f_42%,#02050c_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      {orbs.map((orb) => (
        <motion.div
          key={orb.className}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={{ x: orb.x, y: orb.y }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
