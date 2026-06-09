import { ArrowRight } from "lucide-react";

import { FeatureCard } from "@/components/site/feature-card";
import { GlowCard } from "@/components/site/glow-card";
import { GlowHeading } from "@/components/site/glow-heading";
import { Hero } from "@/components/site/hero";
import { IntegrationMap } from "@/components/site/integration-map";
import { PremiumButton } from "@/components/site/premium-button";
import { PricingCard } from "@/components/site/pricing-card";
import { ProductShowcase } from "@/components/site/product-showcase";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { UseCaseCard } from "@/components/site/use-case-card";
import {
  intelligenceCards,
  operationFeatures,
  pricingTiers,
  useCases,
} from "@/lib/site-content";

function DashboardChart() {
  return (
    <Reveal delay={180}>
      <GlowCard className="p-5 soft-cyan-glow">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-[#71717A]">Risk review trend</p>
            <p className="mt-2 text-4xl font-medium text-white">1,632</p>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#A1A1AA]">
            Review workspace
          </span>
        </div>
        <svg viewBox="0 0 460 220" className="mt-6 h-56 w-full" role="img" aria-label="Review activity chart">
          <defs>
            <linearGradient id="lineFade" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
              <stop offset="48%" stopColor="rgba(34,211,238,0.88)" />
              <stop offset="100%" stopColor="rgba(96,165,250,0.26)" />
            </linearGradient>
          </defs>
          <path d="M24 154 C76 88 116 150 160 112 C204 72 232 170 278 126 C322 84 360 96 436 54" fill="none" stroke="url(#lineFade)" strokeWidth="3" />
          <path d="M24 154 C76 88 116 150 160 112 C204 72 232 170 278 126 C322 84 360 96 436 54 L436 196 L24 196 Z" fill="rgba(34,211,238,0.055)" />
          {[72, 150, 230, 310, 390].map((x) => (
            <line key={x} x1={x} x2={x} y1="28" y2="196" stroke="rgba(255,255,255,0.06)" />
          ))}
          <circle cx="278" cy="126" r="5" fill="#F8FAFC" />
          <foreignObject x="292" y="98" width="130" height="42">
            <div className="rounded-full border border-white/10 bg-black/80 px-3 py-1 text-xs text-white">
              Review area
            </div>
          </foreignObject>
        </svg>
      </GlowCard>
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />

      <Reveal as="section" className="relative py-32 lg:py-44">
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-300/8 blur-3xl" />
        <div className="premium-shell">
          <SectionHeading
            title="Simplify Software Review With AI"
            description="Turn launch review into a focused workflow with scan summaries, configuration notes, and practical next steps."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              {operationFeatures.map((feature, index) => (
                <FeatureCard key={feature.title} {...feature} delay={index * 100} />
              ))}
            </div>
            <DashboardChart />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="relative py-32 lg:py-44">
        <div className="premium-shell">
          <SectionHeading
            title="Build, Review, and Scale With Actionable Intelligence"
            description="irsSMEX products are built for practical software teams that want clearer review workflows and launch planning."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {intelligenceCards.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} compact delay={index * 100} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="relative py-32 lg:py-44">
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-blue-400/8 blur-3xl" />
        <div className="premium-shell">
          <ProductShowcase />
        </div>
      </Reveal>

      <Reveal as="section" className="relative py-32 lg:py-44">
        <div className="absolute left-1/2 top-20 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-300/8 blur-3xl" />
        <div className="premium-shell">
          <SectionHeading
            title="Find the Right Plan for Your Workflow"
            description="Transparent software pricing for builders, teams, and larger organizations."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={tier.name} {...tier} delay={index * 100} />
            ))}
          </div>
          <Reveal delay={420}>
            <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-[#71717A]">
              Payments and subscriptions may be processed through Paddle where available. Taxes may be calculated at checkout. Plans can be cancelled before the next billing period.
            </p>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="relative py-32 lg:py-44">
        <div className="premium-shell">
          <SectionHeading
            title="Designed to Fit Modern Software Workflows"
            description="Use irsSMEX alongside the tools modern builders already use to plan, build, review, and launch."
          />
          <div className="mt-24">
            <IntegrationMap />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="relative py-32 lg:py-44">
        <div className="premium-shell">
          <SectionHeading
            title="Built for Real Builder Workflows"
            description="Use cases are framed around practical review and launch-readiness work, with no invented customer stories or brand marks."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={useCase} title={useCase} delay={index * 100} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute left-1/2 top-1/2 h-80 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/8 blur-3xl" />
        <div className="premium-shell text-center">
          <Reveal>
            <GlowCard className="mx-auto max-w-4xl p-8 sm:p-12">
              <GlowHeading as="h2" className="mx-auto max-w-3xl text-4xl sm:text-5xl">
                Start Building With Intelligent AI Software
              </GlowHeading>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#A1A1AA]">
                Explore irsSMEX products built for practical teams, founders, and developers.
              </p>
              <div className="mt-8 flex justify-center">
                <PremiumButton href="/products" variant="primary">
                  View Products
                  <ArrowRight className="h-4 w-4" />
                </PremiumButton>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </Reveal>
    </main>
  );
}
