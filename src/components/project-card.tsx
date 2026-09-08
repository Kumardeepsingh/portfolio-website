import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col justify-between transition-colors hover:border-primary/50">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg">{project.name}</CardTitle>
          <Badge variant="outline" className="font-mono text-xs shrink-0">
            {project.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm text-muted-foreground">{project.oneLiner}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="secondary" className="font-mono text-xs">
              +{project.techStack.length - 5}
            </Badge>
          )}
        </div>
        <div className="mt-auto flex items-center gap-4 pt-2 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1 font-mono text-primary hover:underline"
          >
            Read more <ArrowUpRight className="size-3.5" />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-1 font-mono text-muted-foreground hover:text-foreground"
          >
            <GithubIcon className="size-3.5" /> Code
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
