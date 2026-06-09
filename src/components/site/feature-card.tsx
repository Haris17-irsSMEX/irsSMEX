import type { LucideIcon } from "lucide-react";

import { GlowCard } from "@/components/site/glow-card";
import { Reveal } from "@/components/site/reveal";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  compact?: boolean;
  delay?: number;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  compact = false,
  delay = 0,
}: FeatureCardProps) {
  return (
    <Reveal delay={delay}>
      <GlowCard className="h-full p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white shadow-[0_0_28px_rgba(34,211,238,0.10)] transition duration-300 group-hover:scale-110 group-hover:border-cyan-200/50 group-hover:shadow-[0_0_34px_rgba(34,211,238,0.34)]">
          <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" />
        </div>
        <h3 className={compact ? "mt-5 text-lg font-semibold tracking-[-0.04em] text-[#F8FAFC]" : "mt-6 text-xl font-semibold tracking-[-0.04em] text-[#F8FAFC]"}>
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#A1A1AA]">{description}</p>
      </GlowCard>
    </Reveal>
  );
}
