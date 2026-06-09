"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";

import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/72 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-white/8 shadow-[0_0_40px_rgba(56,189,248,0.18)]">
            <Sparkles className="h-5 w-5 text-cyan-300" />
          </span>
          <span>
            <span className="block text-sm uppercase tracking-[0.32em] text-cyan-200/80">irsSMEX</span>
            <span className="block text-xs text-slate-400">Enterprise AI Systems</span>
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/6 hover:text-white",
                      active && "bg-white/10 text-white",
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" className="rounded-full border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white">
            <Link href="/contact">Book a demo</Link>
          </Button>
          <Button asChild className="rounded-full bg-cyan-300 px-5 text-slate-950 hover:bg-cyan-200">
            <Link href="/pricing">View pricing</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full border border-white/10 text-white md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-white/10 bg-slate-950 text-white">
            <SheetHeader>
              <SheetTitle className="text-white">irsSMEX</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/6 hover:text-white",
                    pathname === item.href && "bg-white/10 text-white",
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild className="mt-3 rounded-full bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                <Link href="/contact">Book a demo</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
