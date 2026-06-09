import type { Metadata } from "next";

import { GlowCard } from "@/components/site/glow-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Review the irsSMEX Privacy Policy.",
};

const privacy = [
  ["Information we collect", "We may collect contact details, account information, product usage data, form submissions, and basic website analytics."],
  ["Account information", "If accounts are offered, users may provide names, email addresses, billing details, and business information."],
  ["Product usage data", "We may process technical and usage information needed to operate, improve, and support our products."],
  ["Payment data", "Payment data may be handled by payment processors such as Paddle where available. We may receive limited transaction details needed for billing support."],
  ["Cookies", "We may use essential, analytics, and preference cookies as described in our Cookie Policy."],
  ["Analytics", "We may use analytics tools to understand site usage and improve product pages and support flows."],
  ["Data security", "We take reasonable measures to protect information, but no method of storage or transmission is completely secure."],
  ["User rights", "Depending on applicable law, users may have rights to request access, correction, or deletion of certain information."],
  ["Contact", `For privacy questions, contact ${company.supportEmail}. Business location: ${company.location}.`],
];

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell max-w-5xl">
        <Reveal as="section">
          <SectionHeading title="Privacy Policy" description={`Last updated: ${company.legalDate}`} />
          <div className="mt-10 grid gap-4">
            {privacy.map(([title, body], index) => (
              <Reveal key={title} as="section" delay={index * 70}>
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
