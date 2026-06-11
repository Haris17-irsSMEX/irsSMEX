import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { company, footerLinks, legalLinks } from "@/lib/site-content";

const linkClass =
  "transition duration-300 hover:text-white hover:[text-shadow:0_0_18px_rgba(34,211,238,0.50)]";

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-[#020204]/92">
      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/28 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-300/6 blur-[64px]" />
      <div className="premium-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <Reveal>
            <div>
              <div className="text-5xl font-semibold tracking-[-0.08em] text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.14)] transition duration-300 hover:drop-shadow-[0_0_32px_rgba(34,211,238,0.22)] sm:text-7xl">
                irsSMEX
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#A1A1AA] sm:text-base">
                {company.description}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-[#A1A1AA] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-lg">
              <p className="text-white">Contact</p>
              <div className="mt-4 grid gap-2">
                <a href={`mailto:${company.supportEmail}`} className={linkClass}>
                  {company.supportEmail}
                </a>
                <a href={company.phoneHref} className={linkClass}>
                  {company.phoneDisplay}
                </a>
                <a href={company.whatsappHref} className={linkClass}>
                  WhatsApp
                </a>
                <p>{company.location}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={100}>
            <p className="text-sm font-semibold text-white">Company</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#71717A]">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-sm font-semibold text-white">Products</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#71717A]">
              <Link href="/products/vibesafe" className={linkClass}>VibeSafe</Link>
              <Link href="/products" className={linkClass}>AI Business Agents</Link>
              <span>AI UGC Ad Studio, experimental / not available for purchase</span>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-sm font-semibold text-white">Legal</p>
            <div className="mt-4 grid gap-3 text-sm text-[#71717A] sm:grid-cols-2 lg:grid-cols-1">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
