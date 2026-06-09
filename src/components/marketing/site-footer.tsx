import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { company, legalLinks, navItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/80">irsSMEX</p>
          <h2 className="max-w-md text-2xl font-semibold text-white">AI systems designed to move like software and operate like enterprise infrastructure.</h2>
          <p className="max-w-lg text-sm leading-7 text-slate-400">{company.location}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:text-white">
              {company.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <span>{company.phone}</span>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Company</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Policies</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
