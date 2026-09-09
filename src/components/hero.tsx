import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-start justify-center gap-6 px-4 py-16 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
        {siteConfig.role}
      </p>
      <h1 className="font-serif text-5xl italic leading-[1.1] tracking-tight sm:text-7xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
        {siteConfig.tagline}
      </p>
      <div className="flex flex-wrap items-center gap-4 pt-4">
        <Button size="lg" className="rounded-full px-6" asChild>
          <Link href="/projects">
            View Projects <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
          <Link href={siteConfig.github} target="_blank">
            <GithubIcon className="size-4" /> GitHub
          </Link>
        </Button>
        <Button size="lg" variant="ghost" className="rounded-full px-6" asChild>
          <Link href={`mailto:${siteConfig.email}`}>
            <Mail className="size-4" /> Contact
          </Link>
        </Button>
      </div>
    </section>
  );
}
