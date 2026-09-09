import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";
import { projects } from "@/data/projects";

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 print:py-0">
      <div className="flex items-center justify-between print:hidden">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Resume</p>
        <Button asChild variant="outline" className="rounded-full">
          <a href="/resume.pdf" download>
            <Download className="size-4" /> Download PDF
          </a>
        </Button>
      </div>

      <div className="mt-6">
        <h1 className="font-serif text-3xl italic">{siteConfig.name}</h1>
        <p className="text-muted-foreground">
          {siteConfig.location} · {siteConfig.email}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{siteConfig.github}</p>
      </div>

      <div className="mt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Education
        </h2>
        <p className="mt-3 font-medium">{education.degree}</p>
        <p className="text-sm text-muted-foreground">
          {education.institution}, {education.location} · {education.expected}
        </p>
        <p className="text-sm text-muted-foreground">
          GPA {education.gpa} · {education.honors}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Relevant coursework: {education.coursework.join(", ")}
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Skills</h2>
        <div className="mt-3 space-y-2">
          {skillGroups.map((group) => (
            <p key={group.category} className="text-sm">
              <span className="text-muted-foreground">{group.category}: </span>
              {group.skills.join(", ")}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Projects
        </h2>
        <div className="mt-3 space-y-5">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div key={project.slug}>
                <p className="font-medium">{project.name}</p>
                <p className="text-sm text-muted-foreground">{project.oneLiner}</p>
                <div className="mt-1.5 flex flex-wrap gap-1 print:hidden">
                  {project.techStack.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full font-mono text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
