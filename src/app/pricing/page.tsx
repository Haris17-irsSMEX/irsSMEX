import type { Metadata } from "next";

import { PricingCard } from "@/components/site/pricing-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { pricingTiers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Review irsSMEX pricing plans and billing information.",
};

export default function PricingPage() {
  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell">
        <Reveal as="section">
          <SectionHeading
            title="Find the Right Plan for Your Workflow"
            description="Plans show what users receive after purchase, with clear support and cancellation language."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={tier.name} {...tier} delay={index * 100} />
            ))}
          </div>
          <Reveal delay={420}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-[#71717A]">
              Payments and subscriptions may be processed through Paddle where available. Taxes may be calculated at checkout. Plans can be cancelled before the next billing period.
            </p>
          </Reveal>
        </Reveal>
      </div>
    </main>
  );
}
