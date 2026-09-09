import { BarChart3, Code2, Database } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiDocker,
  SiElasticsearch,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKeycloak,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiZoom,
} from "react-icons/si";

const skillIcons: Record<string, IconType> = {
  Java: SiOpenjdk,
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Spring Boot": SiSpringboot,
  React: SiReact,
  "Next.js": SiNextdotjs,
  JavaFX: SiOpenjdk,
  "Tailwind CSS": SiTailwindcss,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Elasticsearch: SiElasticsearch,
  Docker: SiDocker,
  "Keycloak (OAuth2/OIDC)": SiKeycloak,
  Git: SiGit,
  Linux: SiLinux,
  "Stripe API": SiStripe,
  "Zoom SDK": SiZoom,
};

const genericFallbacks: Record<string, IconType> = {
  SQL: Database,
  "Tableau Desktop": BarChart3,
  "Tableau Prep": BarChart3,
};

export function getSkillIcon(name: string): IconType {
  return skillIcons[name] ?? genericFallbacks[name] ?? Code2;
}
