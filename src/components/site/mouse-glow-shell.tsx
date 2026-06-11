"use client";

import { useEffect, useState } from "react";

import { MouseGlow } from "@/components/site/mouse-glow";

export function MouseGlowShell() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <MouseGlow />;
}
