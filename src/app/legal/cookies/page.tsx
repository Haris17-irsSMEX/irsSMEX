import type { Metadata } from "next";

import { GlowCard } from "@/components/site/glow-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Review the irsSMEX Cookie Policy.",
};

const cookies = [
  ["Essential cookies", "These may be used for core site functionality, security, and navigation."],
  ["Analytics cookies", "These may help us understand site usage and improve product and support pages."],
  ["Preference cookies", "These may remember settings or user preferences where implemented."],
  ["How users can control cookies", "Users can manage cookies through browser settings and available consent options where implemented."],
  ["Payment tools", "Payments may be processed by Paddle where available, and related payment pages may use their own cookies or technical session tools."],
];

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell max-w-5xl">
        <Reveal as="section">
          <SectionHeading title="Cookie Policy" description={`Last updated: ${company.legalDate}`} />
          <div className="mt-10 grid gap-4">
            {cookies.map(([title, body], index) => (
              <Reveal key={title} as="section" delay={index * 80}>
                <GlowCard className="p-5">
                  <h2 className="text-base font-medium text-white transition duration-300 hover:[text-shadow:0_0_20px_rgba(34,211,238,0.35)]">{title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#A1A1AA]">{body}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
