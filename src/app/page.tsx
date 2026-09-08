import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SkillsSection } from "@/components/skills-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Hero />
      <Separator className="mx-auto max-w-5xl" />
      <About />
      <Separator className="mx-auto max-w-5xl" />
      <SkillsSection />
      <Separator className="mx-auto max-w-5xl" />
      <FeaturedProjects />
      <Separator className="mx-auto max-w-5xl" />
      <EducationSection />
      <Separator className="mx-auto max-w-5xl" />
      <ContactSection />
    </>
  );
}
