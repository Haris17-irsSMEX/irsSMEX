import { CheckCircle2 } from "lucide-react";

import { GlowCard } from "@/components/site/glow-card";
import { Reveal } from "@/components/site/reveal";

type UseCaseCardProps = {
  title: string;
  delay?: number;
};

export function UseCaseCard({ title, delay = 0 }: UseCaseCardProps) {
  return (
    <Reveal delay={delay}>
      <GlowCard className="p-5">
        <CheckCircle2 className="h-5 w-5 text-cyan-200 transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.55)]" />
        <p className="mt-4 text-sm leading-6 text-zinc-300">{title}</p>
      </GlowCard>
    </Reveal>
  );
}
