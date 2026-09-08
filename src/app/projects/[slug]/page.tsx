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
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/projects"
        className="flex items-center gap-1 font-mono text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> back to projects
      </Link>

      <div className="mt-6 flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
        <Badge variant="outline" className="font-mono shrink-0">
          {project.category}
        </Badge>
      </div>
      <p className="mt-2 text-lg text-muted-foreground">{project.oneLiner}</p>

      {project.image && (
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-lg border bg-muted">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <Link href={project.githubUrl} target="_blank">
            <GithubIcon className="size-4" /> View Code
          </Link>
        </Button>
        {project.liveUrl && (
          <Button variant="outline" asChild>
            <Link href={project.liveUrl} target="_blank">
              <ArrowUpRight className="size-4" /> Live Demo
            </Link>
          </Button>
        )}
      </div>

      <Separator className="my-8" />

      <section>
        <h2 className="font-mono text-sm text-primary">
          <span className="text-muted-foreground">#</span> overview
        </h2>
        <p className="mt-3 text-muted-foreground">{project.description}</p>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-sm text-primary">
          <span className="text-muted-foreground">#</span> tech-stack
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-sm text-primary">
          <span className="text-muted-foreground">#</span> key-features
        </h2>
        <ul className="mt-3 list-inside list-disc space-y-1.5 text-muted-foreground">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-sm text-primary">
          <span className="text-muted-foreground">#</span> architecture
        </h2>
        <p className="mt-3 text-muted-foreground">{project.architecture}</p>
      </section>
    </article>
  );
}
