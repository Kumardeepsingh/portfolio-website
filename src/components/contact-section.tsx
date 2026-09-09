import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl scroll-mt-24 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <SectionHeading eyebrow="Let's Connect" heading="Get In Touch" />
      <p className="mt-8 max-w-xl text-muted-foreground sm:pl-12">
        I&apos;m actively looking for Software Engineer, Developer, and IT roles. The fastest
        way to reach me is email. Feel free to reach out about opportunities or just to talk
        about any of the projects above.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4 sm:pl-12">
        <Button size="lg" className="rounded-full px-6" asChild>
          <Link href={`mailto:${siteConfig.email}`}>
            <Mail className="size-4" /> {siteConfig.email}
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
          <Link href={siteConfig.github} target="_blank">
            <GithubIcon className="size-4" /> GitHub
          </Link>
        </Button>
        {siteConfig.linkedin && (
          <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
            <Link href={siteConfig.linkedin} target="_blank">
              <LinkedinIcon className="size-4" /> LinkedIn
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
}
