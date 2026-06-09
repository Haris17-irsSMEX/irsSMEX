import {
  ArrowRight,
  CheckCircle2,
  Command,
  ScanSearch,
  Search,
  SendHorizontal,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { GlowCard } from "@/components/site/glow-card";
import { GlowHeading } from "@/components/site/glow-heading";
import { PremiumButton } from "@/components/site/premium-button";
import { Reveal } from "@/components/site/reveal";

const floatingPills = ["AI Review", "Security Notes", "Launch Checklist", "Workflow Agents"];

const dashboardRows = [
  ["Dependency review", "42 checks", "Stable"],
  ["Config notes", "12 items", "Review"],
  ["Launch tasks", "8 steps", "Ready"],
];

export function Hero() {
  return (
    <Reveal as="section" className="relative overflow-hidden pb-24 pt-28 sm:pt-32 lg:pb-32 lg:pt-36">
      <div className="absolute left-1/2 top-28 h-[28rem] w-[54rem] -translate-x-1/2 rounded-full bg-cyan-300/12 blur-[110px]" />
      <div className="absolute left-1/2 top-24 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />
      <div className="premium-shell">
        <Reveal className="mx-auto max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-50/70 shadow-[0_0_34px_rgba(34,211,238,0.10)] backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
            AI Software for Modern Builders
          </div>
          <GlowHeading as="h1" className="mx-auto mt-6 max-w-5xl text-[clamp(3.1rem,6vw,5.9rem)] leading-[0.94] sm:text-[clamp(4rem,6vw,6.1rem)] lg:text-[clamp(4.6rem,5.4vw,6.5rem)]">
            <span className="text-premium-gradient">AI-Powered</span>{" "}
            Software for <span className="text-premium-gradient">Modern Builders</span>
          </GlowHeading>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-[#A1A1AA] sm:text-xl">
            irsSMEX builds practical AI tools that help developers, founders, and teams review software, automate workflows, and launch with confidence.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PremiumButton href="/products" variant="primary" className="min-w-44">
              View Products
              <ArrowRight className="h-4 w-4" />
            </PremiumButton>
            <PremiumButton href="/products/vibesafe" variant="secondary" className="min-w-44">
              Explore VibeSafe
            </PremiumButton>
          </div>
        </Reveal>

        <Reveal delay={160} className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute -left-10 top-12 hidden animate-float-slow rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-cyan-50/80 shadow-[0_0_34px_rgba(34,211,238,0.18)] backdrop-blur-xl md:block">
            AI Review
          </div>
          <div className="absolute -right-8 top-28 hidden animate-float-slow rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-cyan-50/80 shadow-[0_0_34px_rgba(34,211,238,0.18)] backdrop-blur-xl md:block" style={{ animationDelay: "1s" }}>
            Launch Checklist
          </div>
          <div className="absolute inset-x-12 -top-10 h-32 rounded-full bg-white/10 blur-3xl" />
          <GlowCard className="p-3 sm:p-4 soft-cyan-glow">
            <div className="relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#030306]/90">
              <div className="premium-dashboard-grid absolute inset-0 opacity-45" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/75 to-transparent" />
              <div className="relative grid gap-4 p-4 lg:grid-cols-[1.15fr_0.85fr] lg:p-5">
                <div className="rounded-xl border border-white/10 bg-black/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
                    <Search className="h-5 w-5 shrink-0 text-[#A1A1AA]" />
                    <span className="min-w-0 flex-1 text-left text-sm text-zinc-300 sm:text-base">
                      Analyze my app before launch...
                    </span>
                    <button className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_34px_rgba(255,255,255,0.42)] active:translate-y-0">
                      <SendHorizontal className="h-4 w-4 transition duration-300 group-hover:scale-110" />
                      <span className="sr-only">Submit analysis prompt</span>
                    </button>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                      <div className="flex items-center gap-2 text-sm text-white">
                        <ShieldCheck className="h-4 w-4 text-cyan-200" />
                        Review Signal
                      </div>
                      <div className="mt-5 h-2 rounded-full bg-white/10">
                        <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-cyan-200 to-blue-300 shadow-[0_0_20px_rgba(34,211,238,0.32)]" />
                      </div>
                      <p className="mt-3 text-xs text-[#71717A]">Suggested areas are grouped for developer review.</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                      <div className="flex items-center gap-2 text-sm text-white">
                        <ScanSearch className="h-4 w-4 text-cyan-200" />
                        Scan Summary
                      </div>
                      <div className="mt-5 flex items-end gap-2">
                        {[34, 58, 44, 76, 62, 88, 70].map((height, index) => (
                          <div key={index} className="w-full rounded-full bg-white/10">
                            <div className="rounded-full bg-white/80 shadow-[0_0_16px_rgba(255,255,255,0.22)]" style={{ height: `${height}px` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#71717A]">Workspace</p>
                      <p className="mt-2 text-2xl font-semibold text-white">VibeSafe</p>
                    </div>
                    <Command className="h-5 w-5 text-cyan-100/70" />
                  </div>
                  <div className="mt-6 space-y-3">
                    {dashboardRows.map(([label, value, status], index) => (
                      <div key={label} className="rounded-xl border border-white/10 bg-black/35 p-3">
                        <div className="flex items-center justify-between gap-3 text-sm">
                          <span className="text-zinc-300">{label}</span>
                          <span className="text-white">{value}</span>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="h-1.5 flex-1 rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-blue-300"
                              style={{ width: `${58 + index * 14}%` }}
                            />
                          </div>
                          <span className="ml-3 rounded-full border border-white/10 px-2 py-1 text-[10px] text-[#A1A1AA]">
                            {status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-4">
              {floatingPills.map((pill, index) => (
                <div
                  key={pill}
                  className="animate-float-slow rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-center text-xs text-zinc-300 shadow-[0_0_24px_rgba(34,211,238,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/45 hover:text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.22)]"
                  style={{ animationDelay: `${index * 450}ms` }}
                >
                  {pill}
                </div>
              ))}
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </Reveal>
  );
}
