import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link
        href="/projects"
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Back to projects
      </Link>

      <div className="mt-6 flex items-start justify-between gap-4">
        <h1 className="font-serif text-4xl italic tracking-tight">{project.name}</h1>
        <Badge variant="outline" className="rounded-full shrink-0">
          {project.category}
        </Badge>
      </div>
      <p className="mt-2 text-lg text-muted-foreground">{project.oneLiner}</p>

      {project.image && (
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl border bg-muted">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Button className="rounded-full px-6" asChild>
          <Link href={project.githubUrl} target="_blank">
            <GithubIcon className="size-4" /> View Code
          </Link>
        </Button>
        {project.liveUrl && (
          <Button variant="outline" className="rounded-full px-6" asChild>
            <Link href={project.liveUrl} target="_blank">
              <ArrowUpRight className="size-4" /> Live Demo
            </Link>
          </Button>
        )}
      </div>

      <Separator className="my-10" />

      <section>
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Overview
        </h2>
        <p className="mt-3 text-muted-foreground">{project.description}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Tech Stack
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full font-mono font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Key Features
        </h2>
        <ul className="mt-3 list-inside list-disc space-y-1.5 text-muted-foreground">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Architecture
        </h2>
        <p className="mt-3 text-muted-foreground">{project.architecture}</p>
      </section>
    </article>
  );
}
