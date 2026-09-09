import type { LucideIcon } from "lucide-react";

export function SectionHeading({
  eyebrow,
  heading,
  icon: Icon,
}: {
  eyebrow: string;
  heading: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-4">
      <Icon className="size-6 shrink-0 text-primary" />
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-1 font-serif text-3xl italic sm:text-4xl">{heading}</h2>
      </div>
    </div>
  );
}
