import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section
      id="education"
      className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl scroll-mt-24 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <SectionHeading eyebrow="Background" heading="Education" />
      <div className="mt-8 flex gap-4 sm:pl-12">
        <GraduationCap className="mt-1 size-6 shrink-0 text-primary" />
        <div>
          <h3 className="font-serif text-xl italic">{education.degree}</h3>
          <p className="text-sm text-muted-foreground">
            {education.institution} · {education.location}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {education.expected} · GPA {education.gpa} · {education.honors}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="text-foreground">Relevant coursework: </span>
            {education.coursework.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
