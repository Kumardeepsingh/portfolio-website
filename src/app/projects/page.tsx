"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = ["All", "Full-Stack", "Frontend", "Desktop", "Mobile"] as const;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="font-mono text-sm text-primary">
        <span className="text-muted-foreground">#</span> all-projects
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Everything below is pulled directly from my GitHub — real dependencies, real
        architecture, no filler.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={cn(
              "rounded-full border px-3 py-1 font-mono text-sm transition-colors",
              filter === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
