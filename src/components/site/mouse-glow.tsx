"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -520, y: -520 });
  const current = useRef({ x: -520, y: -520 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (coarse || reduced) {
      glowRef.current?.style.setProperty("opacity", "0");
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.1;
      current.current.y += (target.current.y - current.current.y) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.current.x - 280}px, ${current.current.y - 280}px, 0)`;
      }

      frame.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[35rem] w-[35rem] rounded-full opacity-48 blur-[86px] will-change-transform md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,0.24) 0%, rgba(96,165,250,0.12) 34%, rgba(255,255,255,0.055) 50%, transparent 74%)",
      }}
    />
  );
}
