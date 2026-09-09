export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "PHP", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Spring Boot", "React", "Next.js", "JavaFX", "Tailwind CSS"],
  },
  {
    category: "Data & Infrastructure",
    skills: ["MySQL", "PostgreSQL", "Elasticsearch", "Docker", "Keycloak (OAuth2/OIDC)"],
  },
  {
    category: "Tools & Integrations",
    skills: ["Git", "Linux", "Stripe API", "Zoom SDK", "Tableau Desktop", "Tableau Prep"],
  },
];
