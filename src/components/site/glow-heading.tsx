import { createElement, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type GlowHeadingTag = "h1" | "h2" | "h3";

type GlowHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  as?: GlowHeadingTag;
};

export function GlowHeading({
  children,
  as = "h2",
  className,
  ...props
}: GlowHeadingProps) {
  return createElement(
    as,
    {
      className: cn(
        "text-balance font-semibold leading-[0.92] tracking-[-0.065em] text-[#F8FAFC] drop-shadow-[0_0_26px_rgba(255,255,255,0.14)] transition duration-300 hover:drop-shadow-[0_0_46px_rgba(34,211,238,0.28)] hover:[text-shadow:0_0_34px_rgba(34,211,238,0.18)]",
        className,
      ),
      ...props,
    },
    children,
  );
}
