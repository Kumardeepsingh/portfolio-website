export type Coursework = {
  title: string;
  description: string;
};

export const education = {
  institution: "Kwantlen Polytechnic University",
  location: "Surrey, BC",
  degree: "Bachelor of Technology in Information Technology",
  expected: "Expected Dec 2026",
  gpa: "3.89",
  honors: "Dean's Honor Roll, Fall 2025",
  coursework: [
    {
      title: "Object-Oriented Software Engineering",
      description:
        "Identified system requirements and produced object models and designs using UML. Applied software engineering principles and design patterns within an Agile development process.",
    },
    {
      title: "Software Quality Assurance",
      description:
        "Studied QA practices across the software development lifecycle, including TQM, ISO standards, verification and validation techniques, QA tooling, and software metrics. Developed and executed unit tests using JUnit.",
    },
    {
      title: "Web Application Development",
      description:
        "Studied the operating principles of the web — client-server models, Internet protocols, domain names, URLs, and hosting. Built and deployed data-driven web applications with HTML, CSS, JavaScript, and server-side programming.",
    },
  ] as Coursework[],
};
