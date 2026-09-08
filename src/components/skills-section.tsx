import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6">
      <h2 className="font-mono text-sm text-primary">
        <span className="text-muted-foreground">#</span> skills
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-sm text-muted-foreground">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-mono">
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
