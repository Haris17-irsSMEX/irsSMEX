"use client";

import { useRef, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type GlowCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  spotlight?: boolean;
};

export function GlowCard({
  children,
  className,
  spotlight = true,
  onMouseMove,
  ...props
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.11] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.026))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_110px_rgba(0,0,0,0.50)] backdrop-blur-2xl transition duration-300 ease-out will-change-transform hover:-translate-y-[6px] hover:border-cyan-200/55 hover:shadow-[0_0_72px_rgba(34,211,238,0.20),0_28px_120px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.14)]",
        className,
      )}
      onMouseMove={(event) => {
        if (spotlight && ref.current) {
          const rect = ref.current.getBoundingClientRect();
          ref.current.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
          ref.current.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
        }

        onMouseMove?.(event);
      }}
      {...props}
    >
      <div className="pointer-events-none absolute inset-px rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_34%,rgba(34,211,238,0.08)_68%,transparent)] opacity-70" />
      {spotlight ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(520px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(34,211,238,0.20), rgba(96,165,250,0.10) 28%, transparent 60%)",
          }}
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.055] via-transparent to-black/20" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
