import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Toolkit" heading="Skills" />
      <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:pl-12">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="rounded-full px-3 font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
