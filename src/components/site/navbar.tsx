"use client";

import Link from "next/link";
import { Menu, Sparkle } from "lucide-react";
import { usePathname } from "next/navigation";

import { PremiumButton } from "@/components/site/premium-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/58 px-3 py-2.5 shadow-[0_0_54px_rgba(34,211,238,0.12),0_18px_80px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-2xl">
        <Link href="/" className="group flex min-w-0 items-center gap-2 rounded-full px-2 text-white transition duration-300 hover:[text-shadow:0_0_18px_rgba(34,211,238,0.55)]">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.075] transition duration-300 group-hover:scale-110 group-hover:border-cyan-300/55 group-hover:shadow-[0_0_32px_rgba(34,211,238,0.34)]">
            <Sparkle className="h-4 w-4 transition duration-300 group-hover:scale-110" />
          </span>
          <span className="text-sm font-semibold tracking-[-0.03em] transition duration-300 group-hover:text-white">irsSMEX</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition duration-300 hover:bg-white/10 hover:text-white hover:shadow-[0_0_24px_rgba(34,211,238,0.18)] hover:[text-shadow:0_0_18px_rgba(34,211,238,0.55)]",
                pathname === link.href && "bg-white/10 text-white [text-shadow:0_0_14px_rgba(34,211,238,0.34)]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <PremiumButton href="/pricing" variant="primary" className="h-10 px-5">
            Get Started
          </PremiumButton>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-cyan-300/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.24)] md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open navigation</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="border-white/10 bg-[#050507]/95 text-white backdrop-blur-2xl">
            <SheetHeader>
              <SheetTitle className="text-white">irsSMEX</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:text-white hover:shadow-[0_0_24px_rgba(34,211,238,0.16)] hover:[text-shadow:0_0_18px_rgba(34,211,238,0.50)]",
                    pathname === link.href && "bg-white/10 text-white",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <PremiumButton href="/pricing" variant="primary" className="mt-3">
                Get Started
              </PremiumButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
