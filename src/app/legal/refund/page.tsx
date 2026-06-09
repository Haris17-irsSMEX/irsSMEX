import type { Metadata } from "next";

import { GlowCard } from "@/components/site/glow-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Review the irsSMEX Refund Policy.",
};

const refund = [
  "Users may cancel subscriptions anytime before the next billing cycle.",
  "Refund requests are reviewed case-by-case.",
  "Refunds may be considered within 14 days where legally required or where usage is limited.",
  "No refunds are provided for abuse, excessive usage, policy violations, or completed digital service delivery.",
  "Paddle may process payments and refunds where applicable.",
  `For help with billing questions or refund requests, contact ${company.supportEmail}.`,
];

export default function RefundPage() {
  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell max-w-5xl">
        <Reveal as="section">
          <SectionHeading title="Refund Policy" description={`Last updated: ${company.legalDate}`} />
          <div className="mt-10 grid gap-4">
            {refund.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <GlowCard className="p-5">
                  <p className="text-sm leading-7 text-[#A1A1AA]">{item}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
