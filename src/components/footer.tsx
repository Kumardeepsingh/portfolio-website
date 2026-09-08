import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
        <p className="font-mono">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex items-center gap-4">
          <Link href={siteConfig.github} target="_blank" aria-label="GitHub" className="hover:text-foreground">
            <GithubIcon className="size-5" />
          </Link>
          {siteConfig.linkedin && (
            <Link href={siteConfig.linkedin} target="_blank" aria-label="LinkedIn" className="hover:text-foreground">
              <LinkedinIcon className="size-5" />
            </Link>
          )}
          <Link href={`mailto:${siteConfig.email}`} aria-label="Email" className="hover:text-foreground">
            <Mail className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
