import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <Badge variant="outline" className="border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}
