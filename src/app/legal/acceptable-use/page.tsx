import type { Metadata } from "next";

import { GlowCard } from "@/components/site/glow-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Review the irsSMEX Acceptable Use Policy.",
};

const rules = [
  "Illegal activity",
  "Unauthorized access",
  "Hacking third-party systems",
  "Malware, spyware, keyloggers, or related abuse",
  "Abuse of AI outputs",
  "Copyright or trademark infringement",
  "Deceptive or fraudulent activity",
  "Attempts to bypass usage limits",
  "Use of products to violate another person's privacy or rights",
];

export default function AcceptableUsePage() {
  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell max-w-5xl">
        <Reveal as="section">
          <SectionHeading title="Acceptable Use Policy" description={`Last updated: ${company.legalDate}`} />
          <div className="mt-10 grid gap-4">
            {rules.map((rule, index) => (
              <Reveal key={rule} delay={index * 70}>
                <GlowCard className="p-5">
                  <p className="text-sm leading-7 text-[#A1A1AA]">
                    Users may not use irsSMEX products or services for: {rule}.
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
