import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";
import { projects } from "@/data/projects";

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 print:py-0">
      <div className="flex items-center justify-between print:hidden">
        <h1 className="font-mono text-sm text-primary">
          <span className="text-muted-foreground">#</span> resume
        </h1>
        <Button asChild variant="outline">
          <a href="/resume.pdf" download>
            <Download className="size-4" /> Download PDF
          </a>
        </Button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">{siteConfig.name}</h2>
        <p className="text-muted-foreground">
          {siteConfig.location} · {siteConfig.email}
        </p>
        <p className="mt-1 font-mono text-sm text-muted-foreground">
          {siteConfig.github}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-mono text-sm text-primary">Education</h3>
        <p className="mt-2 font-medium">{education.degree}</p>
        <p className="text-sm text-muted-foreground">
          {education.institution}, {education.location} — {education.expected}
        </p>
        <p className="text-sm text-muted-foreground">
          GPA {education.gpa} · {education.honors}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-mono text-sm text-primary">Skills</h3>
        <div className="mt-2 space-y-2">
          {skillGroups.map((group) => (
            <p key={group.category} className="text-sm">
              <span className="text-muted-foreground">{group.category}: </span>
              {group.skills.join(", ")}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-mono text-sm text-primary">Projects</h3>
        <div className="mt-2 space-y-4">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div key={project.slug}>
                <p className="font-medium">{project.name}</p>
                <p className="text-sm text-muted-foreground">{project.oneLiner}</p>
                <div className="mt-1 flex flex-wrap gap-1 print:hidden">
                  {project.techStack.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <p className="mt-10 font-mono text-xs text-muted-foreground print:hidden">
        No resume.pdf uploaded yet — drop one into /public/resume.pdf to make the download
        button work, or use your browser&apos;s Print → Save as PDF on this page.
      </p>
    </section>
  );
}
