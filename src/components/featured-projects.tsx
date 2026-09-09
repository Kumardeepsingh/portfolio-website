import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <SectionHeading eyebrow="Portfolio" heading="Selected Work" />
        <Button variant="ghost" className="rounded-full" asChild>
          <Link href="/projects">
            All projects <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
