import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6">
      <h2 className="font-mono text-sm text-primary">
        <span className="text-muted-foreground">#</span> about
      </h2>
      <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
        <p>
          I&apos;m a third-year Bachelor of Technology in Information Technology student at{" "}
          {siteConfig.university}, maintaining a 3.89 GPA and Dean&apos;s Honor Roll standing.
          I build full-stack web applications, and I&apos;ve gone out of my way to work with
          real infrastructure rather than toy setups — Elasticsearch-backed search, OAuth2/OIDC
          auth through self-hosted Keycloak, and live third-party integrations like Stripe and
          Zoom, rather than mocked-out equivalents.
        </p>
        <p>
          I&apos;m looking for a Software Engineer, Developer, or IT role where I can keep
          building things end-to-end — from database design through to a working, deployed
          product — and learn from engineers who&apos;ve shipped at a larger scale than I have
          on my own.
        </p>
      </div>
    </section>
  );
}
