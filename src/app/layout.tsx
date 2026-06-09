import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/site/footer";
import { GalaxyBackground } from "@/components/site/galaxy-background";
import { MouseGlow } from "@/components/site/mouse-glow";
import { Navbar } from "@/components/site/navbar";
import { company } from "@/lib/site-content";

const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.irssmex.com"),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${bodyFont.variable} ${monoFont.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <GalaxyBackground />
        <MouseGlow />
        <div className="relative z-10 min-h-screen overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
