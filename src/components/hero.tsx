import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-24 sm:px-6 sm:py-32">
      <p className="font-mono text-sm text-primary">
        <span className="text-muted-foreground">$</span> whoami
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-2xl font-mono text-lg text-muted-foreground sm:text-xl">
        {siteConfig.role} — {siteConfig.tagline}
      </p>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button asChild>
          <Link href="/projects">
            View Projects <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={siteConfig.github} target="_blank">
            <GithubIcon className="size-4" /> GitHub
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={`mailto:${siteConfig.email}`}>
            <Mail className="size-4" /> Contact
          </Link>
        </Button>
      </div>
    </section>
  );
}
