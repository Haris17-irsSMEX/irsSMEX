import type { Metadata } from "next";

import { GlowCard } from "@/components/site/glow-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Review the irsSMEX Terms of Service.",
};

const terms = [
  ["Who we are", "irsSMEX is a software brand based in Pakistan. We provide AI-assisted software products and related website services."],
  ["Use of services", "You agree to use our products and website lawfully and in accordance with these terms."],
  ["Accounts", "Some services may require account information. You are responsible for accurate information and protecting access credentials."],
  ["Subscriptions and billing", "Paid plans may renew on a recurring basis unless cancelled before the next billing period."],
  ["Paddle payment processing", "Payments may be processed by Paddle where available, and additional payment processor terms may apply."],
  ["Acceptable use", "Your use of the services must comply with our Acceptable Use Policy."],
  ["AI-assisted outputs", "Product outputs may contain limitations, incomplete observations, or false positives and should be reviewed by users."],
  ["User responsibility", "You remain responsible for how you interpret, review, and act on product outputs."],
  ["Intellectual property", "The website, branding, and product materials belong to irsSMEX unless otherwise stated."],
  ["Service availability", "We may update, change, limit, or discontinue services from time to time."],
  ["Cancellation", "Users may cancel subscriptions before the next billing period."],
  ["Termination", "We may suspend or terminate access for policy violations, abuse, or misuse of the service."],
  ["Limitation of liability", "We do not promise uninterrupted service or error-free outputs, and liability is limited to the extent permitted by law."],
  ["Contact", `Support email: ${company.supportEmail}. Business location: ${company.location}.`],
];

export default function TermsPage() {
  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell max-w-5xl">
        <Reveal as="section">
          <SectionHeading title="Terms of Service" description={`Last updated: ${company.legalDate}`} />
          <div className="mt-10 grid gap-4">
            {terms.map(([title, body], index) => (
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
