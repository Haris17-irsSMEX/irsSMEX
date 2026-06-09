import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type PremiumButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border-white/55 bg-[linear-gradient(180deg,#ffffff_0%,#e7eef4_100%)] text-black shadow-[0_0_36px_rgba(255,255,255,0.24),0_0_80px_rgba(34,211,238,0.10)] hover:bg-white hover:shadow-[0_0_52px_rgba(255,255,255,0.44),0_0_96px_rgba(34,211,238,0.20)]",
  secondary:
    "border-white/14 bg-white/[0.045] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_28px_rgba(34,211,238,0.08)] hover:border-cyan-200/60 hover:bg-white/[0.09] hover:shadow-[0_0_44px_rgba(34,211,238,0.28),inset_0_1px_0_rgba(255,255,255,0.14)]",
  ghost:
    "border-transparent bg-transparent text-white hover:border-cyan-200/35 hover:bg-white/[0.065] hover:shadow-[0_0_34px_rgba(34,211,238,0.18)]",
};

export function PremiumButton({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  ...props
}: PremiumButtonProps) {
  const classes = cn(
    "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border px-7 text-sm font-semibold tracking-[-0.02em] transition duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:scale-[1.03] hover:[text-shadow:0_0_18px_rgba(34,211,238,0.35)] active:translate-y-0 active:scale-[0.98]",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.55),transparent_36%)] opacity-70" />
      <span className="absolute inset-y-0 -left-2/3 w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
