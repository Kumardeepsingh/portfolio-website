export function SectionHeading({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px w-8 shrink-0 bg-primary/60" />
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-1 font-serif text-3xl italic sm:text-4xl">{heading}</h2>
      </div>
    </div>
  );
}
