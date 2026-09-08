import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6">
      <h2 className="font-mono text-sm text-primary">
        <span className="text-muted-foreground">#</span> contact
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        I&apos;m actively looking for Software Engineer, Developer, and IT roles. The fastest
        way to reach me is email — feel free to reach out about opportunities or just to talk
        about any of the projects above.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild>
          <Link href={`mailto:${siteConfig.email}`}>
            <Mail className="size-4" /> {siteConfig.email}
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={siteConfig.github} target="_blank">
            <GithubIcon className="size-4" /> GitHub
          </Link>
        </Button>
        {siteConfig.linkedin && (
          <Button variant="outline" asChild>
            <Link href={siteConfig.linkedin} target="_blank">
              <LinkedinIcon className="size-4" /> LinkedIn
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
}
