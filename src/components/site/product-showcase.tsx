import { ArrowRight, Check, ScanSearch } from "lucide-react";

import { GlowCard } from "@/components/site/glow-card";
import { GlowHeading } from "@/components/site/glow-heading";
import { PremiumButton } from "@/components/site/premium-button";
import { Reveal } from "@/components/site/reveal";
import { products } from "@/lib/site-content";

export function ProductShowcase() {
  const product = products[0];

  return (
    <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/60">Product Highlight</p>
        <GlowHeading className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
          AI Software Engineered for Practical Teams
        </GlowHeading>
        <p className="mt-6 text-base leading-8 text-[#A1A1AA]">{product.description}</p>
        <PremiumButton href="/products/vibesafe" variant="primary" className="mt-9">
          Explore VibeSafe
          <ArrowRight className="h-4 w-4" />
        </PremiumButton>
      </Reveal>

      <Reveal delay={120}>
        <GlowCard className="p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black shadow-[0_0_34px_rgba(255,255,255,0.26)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_44px_rgba(34,211,238,0.30)]">
                <ScanSearch className="h-5 w-5 transition duration-300 group-hover:scale-110" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">VibeSafe Review</p>
                <p className="text-xs text-[#71717A]">Launch-readiness workspace</p>
              </div>
            </div>
            <span className="rounded-full border border-cyan-300/25 bg-cyan-300/12 px-3 py-1.5 text-xs text-cyan-50">
              Active
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {product.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 100}>
                <GlowCard className="p-5" spotlight={false}>
                  <Check className="h-4 w-4 text-cyan-200 transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.55)]" />
                  <p className="mt-4 text-sm text-zinc-300">{item}</p>
                  <div className="mt-5 h-1.5 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-blue-300 shadow-[0_0_16px_rgba(34,211,238,0.22)]" style={{ width: `${62 + index * 8}%` }} />
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </GlowCard>
      </Reveal>
    </div>
  );
}
