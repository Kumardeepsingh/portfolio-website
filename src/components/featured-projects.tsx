import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-sm text-primary">
          <span className="text-muted-foreground">#</span> featured-projects
        </h2>
        <Button variant="ghost" asChild>
          <Link href="/projects">
            All projects <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
