import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { getSkillIcon } from "@/lib/skill-icons";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl scroll-mt-24 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <SectionHeading eyebrow="Toolkit" heading="Skills" />
      <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:pl-12">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const Icon = getSkillIcon(skill);
                return (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="gap-1.5 rounded-full px-3 font-normal"
                  >
                    <Icon className="size-3.5" />
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
