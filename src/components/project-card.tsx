import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col justify-between overflow-hidden pt-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden border-b bg-muted">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="font-serif text-xl italic font-normal">{project.name}</CardTitle>
          <Badge variant="outline" className="rounded-full text-xs shrink-0">
            {project.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm text-muted-foreground">{project.oneLiner}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full font-mono text-xs font-normal">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="secondary" className="rounded-full font-mono text-xs font-normal">
              +{project.techStack.length - 5}
            </Badge>
          )}
        </div>
        <div className="mt-auto flex items-center gap-4 pt-2 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-primary hover:underline"
          >
            Read more <ArrowUpRight className="size-3.5" />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <GithubIcon className="size-3.5" /> Code
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
