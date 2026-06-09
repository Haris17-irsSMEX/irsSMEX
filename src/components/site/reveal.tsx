"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type RevealTag = "div" | "section" | "article" | "header" | "footer";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  delay?: number;
  as?: RevealTag;
};

export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      "data-reveal": "true",
      "data-reveal-state": visible ? "visible" : "idle",
      className: cn(
        "translate-y-0 opacity-100 blur-0 transition-[opacity,transform,filter] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform,filter]",
        visible && "animate-reveal-rise",
        className,
      ),
      style: { animationDelay: `${delay}ms`, ...style },
      ...props,
    },
    children,
  );
}
