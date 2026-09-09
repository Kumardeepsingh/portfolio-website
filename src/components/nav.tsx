"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/projects", label: "Projects", id: "projects" },
  { href: "/#education", label: "Education", id: "education" },
  { href: "/resume", label: "Resume", id: null },
  { href: "/#contact", label: "Contact", id: "contact" },
];

const sectionIds = ["about", "skills", "projects", "education", "contact"];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection(sectionIds);

  const isActive = (link: (typeof links)[number]) => {
    if (link.href === "/resume") return pathname === "/resume";
    if (pathname === "/projects") return link.href === "/projects";
    return pathname === "/" && activeSection === link.id;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-serif text-xl italic tracking-tight text-foreground">
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link) ? "page" : undefined}
                className={cn(
                  "text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-primary",
                  isActive(link)
                    ? "text-primary underline underline-offset-4 decoration-primary/60"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-4 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link) ? "page" : undefined}
              className={cn(
                "rounded-md px-2 py-2.5 text-xs font-medium uppercase tracking-[0.15em] hover:bg-accent hover:text-primary",
                isActive(link) ? "text-primary" : "text-muted-foreground",
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
