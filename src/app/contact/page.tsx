import type { Metadata } from "next";

import { GlowCard } from "@/components/site/glow-card";
import { PremiumButton } from "@/components/site/premium-button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company, supportCards } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact irsSMEX support or business for product questions.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell">
        <Reveal as="section">
          <SectionHeading
            title="Contact irsSMEX"
            description="Use this page for product support, business inquiries, pricing questions, or policy clarification."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-4">
              {supportCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 100}>
                    <GlowCard className="p-5">
                      <Icon className="h-5 w-5 text-white transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.55)]" />
                      <p className="mt-4 text-sm text-[#71717A]">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{item.value}</p>
                    </GlowCard>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={160}>
              <GlowCard className="p-6">
                <form>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="Name" className="h-11 rounded-md border-white/10 bg-black/50 text-white placeholder:text-zinc-600 transition focus-visible:border-cyan-200/50 focus-visible:ring-cyan-300/20" />
                    <Input type="email" placeholder="Email" className="h-11 rounded-md border-white/10 bg-black/50 text-white placeholder:text-zinc-600 transition focus-visible:border-cyan-200/50 focus-visible:ring-cyan-300/20" />
                  </div>
                  <Input placeholder="Company or project" className="mt-4 h-11 rounded-md border-white/10 bg-black/50 text-white placeholder:text-zinc-600 transition focus-visible:border-cyan-200/50 focus-visible:ring-cyan-300/20" />
                  <Textarea placeholder="How can we help?" className="mt-4 min-h-36 rounded-md border-white/10 bg-black/50 text-white placeholder:text-zinc-600 transition focus-visible:border-cyan-200/50 focus-visible:ring-cyan-300/20" />
                  <p className="mt-4 text-sm leading-6 text-[#71717A]">
                    We aim to respond within 2-3 business days. Brand: {company.name}. Location: {company.location}.
                  </p>
                  <PremiumButton type="submit" className="mt-5">
                    Contact Support
                  </PremiumButton>
                </form>
              </GlowCard>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
