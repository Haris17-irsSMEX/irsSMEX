import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { FeatureCard } from "@/components/site/feature-card";
import { GlowCard } from "@/components/site/glow-card";
import { GlowHeading } from "@/components/site/glow-heading";
import { PremiumButton } from "@/components/site/premium-button";
import { PricingCard } from "@/components/site/pricing-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  operationFeatures,
  pricingTiers,
  products,
  vibesafeDeliverables,
  vibesafeLimitations,
  vibesafeUseCases,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "VibeSafe",
  description: "VibeSafe is an AI-assisted security review tool for web application builders.",
};

export default function VibeSafePage() {
  const product = products[0];

  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell">
        <Reveal as="section" className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-[#71717A]">{product.status}</p>
          <GlowHeading as="h1" className="mt-4 text-5xl sm:text-6xl">
            VibeSafe
          </GlowHeading>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg leading-8 text-[#A1A1AA]">
            {product.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PremiumButton href="/pricing" variant="primary">
              View Pricing
              <ArrowRight className="h-4 w-4" />
            </PremiumButton>
            <PremiumButton href="/contact" variant="secondary">
              Contact Support
            </PremiumButton>
          </div>
        </Reveal>

        <Reveal as="section" className="mt-28 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              align="left"
              title="What users receive after purchase"
              description="VibeSafe is packaged around concrete review outputs and launch-readiness support."
            />
            <div className="mt-8 grid gap-3">
              {vibesafeDeliverables.map((item, index) => (
                <Reveal key={item} delay={index * 100}>
                  <GlowCard className="flex items-center gap-3 p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-200 transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.55)]" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={220}>
            <GlowCard className="p-6">
              <p className="text-sm font-medium text-white">Important limitation</p>
              <p className="mt-3 text-sm leading-7 text-[#A1A1AA]">
                VibeSafe is an AI-assisted review tool, not a certification or substitute for independent testing. It may miss vulnerabilities, security issues, or compliance risks. Users are responsible for reviewing results and applying appropriate security practices.
              </p>
            </GlowCard>
          </Reveal>
        </Reveal>

        <Reveal as="section" className="mt-28">
          <SectionHeading
            title="Feature Coverage"
            description="The product focuses on AI-assisted review, developer checklist output, and common launch-readiness signals."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {operationFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} delay={index * 100} />
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="mt-28 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" title="Use Cases" description="Designed for practical review workflows." />
            <div className="mt-8 grid gap-3">
              {vibesafeUseCases.map((item, index) => (
                <Reveal key={item} delay={index * 100}>
                  <GlowCard className="p-4">
                    <p className="text-sm leading-6 text-zinc-300">{item}</p>
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading align="left" title="Responsible Use" description="Clear boundaries help users understand the product scope." />
            <div className="mt-8 grid gap-3">
              {vibesafeLimitations.map((item, index) => (
                <Reveal key={item} delay={index * 100}>
                  <GlowCard className="p-4">
                    <p className="text-sm leading-6 text-zinc-300">{item}</p>
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="mt-28">
          <SectionHeading
            title="Choose a Plan"
            description="Buttons route to support or access requests until checkout is ready."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={tier.name} {...tier} delay={index * 100} />
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
