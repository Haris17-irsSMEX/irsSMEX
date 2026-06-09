import { GlowHeading } from "@/components/site/glow-heading";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  delay?: number;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  delay = 0,
}: SectionHeadingProps) {
  return (
    <Reveal
      delay={delay}
      className={cn(
        align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl",
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/60">
          {eyebrow}
        </p>
      ) : null}
      <GlowHeading as="h2" className="text-4xl sm:text-5xl lg:text-6xl">
        {title}
      </GlowHeading>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-[#A1A1AA] sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
