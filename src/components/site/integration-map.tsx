import { Sparkle } from "lucide-react";

import { GlowCard } from "@/components/site/glow-card";
import { Reveal } from "@/components/site/reveal";
import { integrations } from "@/lib/site-content";

export function IntegrationMap() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative grid gap-5 md:grid-cols-[1fr_260px_1fr] md:items-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[76%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent shadow-[0_0_28px_rgba(34,211,238,0.24)] md:block" />
        <div className="grid gap-5">
          {integrations.slice(0, 3).map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.name} delay={index * 100}>
                <GlowCard className="p-5 md:mr-10">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-white transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.55)]" />
                    <span className="text-sm font-medium text-zinc-300">{item.name}</span>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={180}>
          <div className="relative mx-auto flex h-52 w-52 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_0_100px_rgba(34,211,238,0.26)] transition duration-300 hover:-translate-y-[6px] hover:border-cyan-200/55 hover:shadow-[0_0_130px_rgba(34,211,238,0.38)]">
            <div className="absolute h-40 w-40 rounded-full bg-cyan-300/12 blur-3xl" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl bg-white text-black shadow-[0_0_68px_rgba(255,255,255,0.38)]">
              <Sparkle className="h-9 w-9" />
              <span className="sr-only">irsSMEX</span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {integrations.slice(3).map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.name} delay={index * 100}>
                <GlowCard className="p-5 md:ml-10">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-white transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.55)]" />
                    <span className="text-sm font-medium text-zinc-300">{item.name}</span>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
