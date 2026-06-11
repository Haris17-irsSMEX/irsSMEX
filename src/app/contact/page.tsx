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
  description: "Contact irsSMEX for product questions, support, phone, or WhatsApp.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell">
        <Reveal as="section">
          <SectionHeading
            title="Contact irsSMEX"
            description="Use this page for product support, pricing questions, WhatsApp contact, or direct phone and email communication."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-4">
              {supportCards.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="h-5 w-5 text-white transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.55)]" />
                    <p className="mt-4 text-sm text-[#71717A]">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{item.value}</p>
                  </>
                );

                return (
                  <Reveal key={item.title} delay={index * 100}>
                    <GlowCard className="p-5">
                      {item.href ? (
                        <a href={item.href} className="block">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
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
                  <Textarea placeholder="How can we help?" className="mt-4 min-h-32 rounded-md border-white/10 bg-black/50 text-white placeholder:text-zinc-600 transition focus-visible:border-cyan-200/50 focus-visible:ring-cyan-300/20" />
                  <p className="mt-4 text-sm leading-6 text-[#71717A]">
                    Email: {company.supportEmail}. Phone: {company.phoneDisplay}. Brand: {company.name}. Location: {company.location}.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <PremiumButton type="submit">
                      Contact Support
                    </PremiumButton>
                    <PremiumButton href={company.whatsappHref} variant="secondary">
                      WhatsApp Us
                    </PremiumButton>
                  </div>
                </form>
              </GlowCard>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
