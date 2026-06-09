import type { Metadata } from "next";

import { GlowCard } from "@/components/site/glow-card";
import { GlowHeading } from "@/components/site/glow-heading";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { company, products } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about irsSMEX and its practical AI software products.",
};

const principles = [
  "Clear software products with practical deliverables",
  "Transparent pricing, support, and policy pages",
  "Responsible AI-assisted outputs without false guarantees",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell">
        <Reveal as="section">
          <SectionHeading
            title="AI Software for Modern Builders"
            description={company.description}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {principles.map((item, index) => (
              <Reveal key={item} delay={index * 100}>
                <GlowCard className="h-full p-6">
                  <p className="text-sm leading-7 text-zinc-300">{item}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="mt-24">
          <GlowCard className="p-6">
            <p className="text-sm text-[#71717A]">Primary product</p>
            <GlowHeading as="h2" className="mt-3 text-2xl">
              {products[0].name}
            </GlowHeading>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#A1A1AA]">
              {products[0].description}
            </p>
          </GlowCard>
        </Reveal>
      </div>
    </main>
  );
}
