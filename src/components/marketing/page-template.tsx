import type { ReactNode } from "react";

import { AnimatedBackground } from "@/components/marketing/animated-background";
import { Reveal } from "@/components/marketing/reveal";
import { Badge } from "@/components/ui/badge";

export function PageTemplate({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl space-y-6">
          <Badge variant="outline" className="border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200">
            {eyebrow}
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="text-lg leading-8 text-slate-300">{description}</p>
        </Reveal>
        <div className="relative mt-12">{children}</div>
      </section>
    </div>
  );
}
