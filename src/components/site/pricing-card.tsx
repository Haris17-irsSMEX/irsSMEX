import { Check } from "lucide-react";

import { GlowCard } from "@/components/site/glow-card";
import { PremiumButton } from "@/components/site/premium-button";
import { Reveal } from "@/components/site/reveal";

type PricingCardProps = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  buttonLabel: string;
  features: string[];
  featured?: boolean;
  delay?: number;
};

export function PricingCard({
  name,
  price,
  cadence,
  description,
  buttonLabel,
  features,
  featured = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <Reveal delay={delay}>
      <GlowCard
        className={`flex h-full min-h-[470px] flex-col p-6 sm:p-7 ${
          featured ? "border-cyan-200/55 shadow-[0_0_90px_rgba(34,211,238,0.22),0_28px_120px_rgba(0,0,0,0.62)]" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#F8FAFC]">{name}</h3>
            <p className="mt-3 text-sm leading-6 text-[#A1A1AA]">{description}</p>
          </div>
          {featured ? (
            <span className="rounded-full border border-cyan-300/35 bg-cyan-300/15 px-3 py-1 text-xs font-semibold text-cyan-50 shadow-[0_0_28px_rgba(34,211,238,0.24)]">
              Recommended
            </span>
          ) : null}
        </div>
        <div className="mt-8 flex items-end gap-1">
          <span className="text-5xl font-semibold tracking-[-0.07em] text-white">{price}</span>
          {cadence ? <span className="pb-2 text-sm text-[#71717A]">{cadence}</span> : null}
        </div>
        <div className="mt-8 space-y-3.5">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-zinc-300">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/10 shadow-[0_0_18px_rgba(34,211,238,0.14)]">
                <Check className="h-3.5 w-3.5 text-cyan-100" />
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <PremiumButton
          href="/contact"
          variant={featured ? "primary" : "secondary"}
          className="mt-auto w-full"
        >
          {buttonLabel}
        </PremiumButton>
      </GlowCard>
    </Reveal>
  );
}
