import { User } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/education";
import { siteConfig } from "@/lib/site-config";

const quickFacts = [
  { label: "Location", value: siteConfig.location },
  { label: "Graduating", value: "December 2026" },
  { label: "GPA", value: education.gpa },
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl scroll-mt-24 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <SectionHeading eyebrow="Introduction" heading="About Me" icon={User} />
      <div className="mt-8 max-w-2xl space-y-4 text-muted-foreground sm:pl-12">
        <p>
          I&apos;m a fourth-year Bachelor of Technology in Information Technology student at{" "}
          {siteConfig.university}, in my final semester, maintaining a 3.89 GPA and Dean&apos;s
          Honor Roll standing. I build full-stack web applications, and I&apos;ve gone out of my
          way to work with real infrastructure rather than toy setups: Elasticsearch-backed
          search, OAuth2/OIDC auth through self-hosted Keycloak, and live third-party
          integrations like Stripe and Zoom, rather than mocked-out equivalents.
        </p>
        <p>
          That range shows across what I&apos;ve built: full-stack web apps with Spring Boot,
          React, and Next.js, desktop applications in Java Swing and JavaFX, and a native
          Android app, all backed by real databases rather than in-memory stand-ins. I like
          picking up the parts of a stack I haven&apos;t touched yet rather than staying in one
          comfortable corner of it.
        </p>
        <p>
          I&apos;m in my final semester now and looking for a Software Engineer, Developer, or
          IT role where I can keep building things end-to-end, from database design through to
          a working, deployed product, and learn from engineers who&apos;ve shipped at a larger
          scale than I have on my own.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border/60 pt-8 sm:pl-12">
        {quickFacts.map((fact) => (
          <div key={fact.label}>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              {fact.label}
            </p>
            <p className="mt-1 font-serif text-lg italic">{fact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
