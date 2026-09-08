import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6">
      <h2 className="font-mono text-sm text-primary">
        <span className="text-muted-foreground">#</span> education
      </h2>
      <div className="mt-6 flex gap-4">
        <GraduationCap className="mt-1 size-6 shrink-0 text-primary" />
        <div>
          <h3 className="font-semibold">{education.degree}</h3>
          <p className="text-sm text-muted-foreground">
            {education.institution} · {education.location}
          </p>
          <p className="mt-1 font-mono text-sm text-muted-foreground">
            {education.expected} · GPA {education.gpa} · {education.honors}
          </p>

          <div className="mt-6 space-y-4">
            {education.coursework.map((course) => (
              <div key={course.title}>
                <h4 className="text-sm font-medium">{course.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
