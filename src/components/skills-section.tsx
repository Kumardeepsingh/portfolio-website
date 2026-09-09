import { Badge } from "@/components/ui/badge";
import { Wrench } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { getSkillIcon } from "@/lib/skill-icons";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl scroll-mt-24 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <SectionHeading eyebrow="Toolkit" heading="Skills" icon={Wrench} />
      <p className="mt-6 max-w-xl text-muted-foreground sm:pl-12">
        What I reach for most, grouped by where it fits: languages, frameworks, data and
        infrastructure, and the tools that tie a project together.
      </p>
      <div className="mt-10 grid gap-x-12 gap-y-12 sm:grid-cols-2 sm:pl-12">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => {
                const Icon = getSkillIcon(skill);
                return (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="h-8 gap-2 rounded-full px-4 text-sm font-normal [&>svg]:size-3.5!"
                  >
                    <Icon />
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
