import { ArrowUpRight, type LucideIcon } from "lucide-react";

import { GlowCard } from "@/components/site/glow-card";
import { PremiumButton } from "@/components/site/premium-button";
import { Reveal } from "@/components/site/reveal";

type ProductCardProps = {
  name: string;
  status: string;
  description: string;
  icon: LucideIcon;
  href: string;
  highlights: string[];
  delay?: number;
};

export function ProductCard({
  name,
  status,
  description,
  icon: Icon,
  href,
  highlights,
  delay = 0,
}: ProductCardProps) {
  return (
    <Reveal delay={delay}>
      <GlowCard className="flex h-full min-h-[420px] flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white shadow-[0_0_28px_rgba(34,211,238,0.12)] transition duration-300 group-hover:scale-110 group-hover:border-cyan-200/50 group-hover:shadow-[0_0_36px_rgba(34,211,238,0.34)]">
            <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-[#A1A1AA]">
            {status}
          </span>
        </div>
        <h3 className="mt-7 text-3xl font-semibold tracking-[-0.055em] text-[#F8FAFC]">{name}</h3>
        <p className="mt-4 text-sm leading-7 text-[#A1A1AA]">{description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-[#A1A1AA]">
              {item}
            </span>
          ))}
        </div>
        <PremiumButton href={href} variant="ghost" className="mt-auto h-auto justify-start px-0 pt-8 hover:bg-transparent">
          Learn more
          <ArrowUpRight className="h-4 w-4" />
        </PremiumButton>
      </GlowCard>
    </Reveal>
  );
}
