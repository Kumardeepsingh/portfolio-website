export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  techStack: string[];
  features: string[];
  architecture: string;
  category: "Full-Stack" | "Frontend" | "Desktop" | "Mobile";
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "restaurant-review-platform",
    name: "Restaurant Review Platform",
    oneLiner:
      "Restaurant discovery platform in progress: OAuth2 auth and photo storage work end-to-end; search/review APIs are still being built.",
    description:
      "A restaurant discovery and review platform where users will search restaurants by location on an interactive map and read/leave reviews. Authentication runs through a self-hosted Keycloak instance using the OAuth2 authorization code flow, so the API validates real bearer tokens instead of a hand-rolled session system, and photo upload/storage is fully implemented. The Elasticsearch-backed restaurant and review domain (entities, repository, DTOs) is modeled, but the REST endpoints exposing restaurant search and review CRUD aren't wired up yet — verified by running the app locally rather than assumed from the code layout.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "Spring Data Elasticsearch",
      "Spring Security OAuth2",
      "Keycloak",
      "MapStruct",
      "shadcn/ui",
      "OpenStreetMap",
      "Docker Compose",
    ],
    features: [
      "OAuth2 login via self-hosted Keycloak (working end-to-end)",
      "Photo upload/storage service (working end-to-end)",
      "Map-based browsing UI with OpenStreetMap",
      "Restaurant and review domain modeled for Elasticsearch (entities/repository in place, REST layer in progress)",
    ],
    architecture:
      "Spring Boot backend acting as an OAuth2 resource server, validating tokens issued by Keycloak, with Elasticsearch and Kibana running as Docker Compose services; Next.js App Router frontend consuming the API through an axios service layer. The photo storage vertical slice (controller → service → repository) is complete; the restaurant/review vertical slice currently stops at the repository layer.",
    category: "Full-Stack",
    githubUrl: "https://github.com/Kumardeepsingh/Restaurant-Review-Platform",
    featured: true,
  },
  {
    slug: "event-ticket-platform",
    name: "Event Ticket Platform",
    oneLiner:
      "Event ticketing platform with QR-code ticket generation and live scan-based validation.",
    description:
      "An event ticketing platform covering the full loop: an organizer creates an event and ticket types, an attendee purchases a ticket and receives a QR code, and at the door an organizer-facing scanner reads that same QR code to validate entry in real time. Login runs through OIDC against Keycloak, with separate role-based views for organizers and attendees.",
    techStack: [
      "React 19",
      "Vite",
      "TypeScript",
      "React Router v7",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security OAuth2",
      "PostgreSQL",
      "ZXing",
      "OIDC (react-oidc-context)",
      "Docker Compose",
    ],
    features: [
      "Event creation and ticket type configuration",
      "Ticket purchase flow with QR-code issuance (ZXing)",
      "Organizer-facing live QR scan validation",
      "Role-based routing for attendees vs. organizers",
      "OIDC login via Keycloak",
    ],
    architecture:
      "Spring Boot REST API with DTOs/mappers backing a Vite + React 19 frontend split into attendee and organizer experiences; QR codes are generated server-side with ZXing and validated against the same backend when scanned client-side.",
    category: "Full-Stack",
    githubUrl: "https://github.com/Kumardeepsingh/An-Event-Ticket-Platform",
    featured: true,
  },
  {
    slug: "blog-application",
    name: "Blog Application",
    oneLiner:
      "Full-stack blogging platform with JWT authentication and a rich-text editor.",
    description:
      "A blogging platform with JWT-based authentication and a TipTap rich-text editor for composing posts. Post content is rendered through DOMPurify before it hits the DOM, so user-authored HTML can't be used to inject scripts — a deliberate XSS-safety decision rather than an afterthought.",
    techStack: [
      "React 18",
      "Vite",
      "TypeScript",
      "NextUI",
      "TipTap",
      "DOMPurify",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "JJWT",
      "PostgreSQL",
    ],
    features: [
      "JWT authentication with a custom filter chain",
      "Post CRUD with categories/tags",
      "Draft and published post states",
      "Rich-text editing via TipTap",
      "XSS-safe HTML rendering via DOMPurify",
    ],
    architecture:
      "Layered Spring Boot REST API (controller/service/repository) with a custom JWT auth filter and MapStruct DTO mapping; React SPA frontend with an AuthContext managing session state.",
    category: "Full-Stack",
    githubUrl: "https://github.com/Kumardeepsingh/BlogApplication",
    image: "/images/projects/blog-application.png",
    featured: true,
  },
  {
    slug: "react-weather-app",
    name: "React Weather App",
    oneLiner:
      "Interactive weather dashboard with map-based location search and schema-validated data.",
    description:
      "A weather dashboard showing current conditions plus hourly and daily forecasts, with location selection either through a search dropdown or by clicking directly on an interactive map. All API responses are validated against Zod schemas before being trusted by the UI, and data fetching is handled through TanStack Query for caching and loading states rather than raw useEffect calls.",
    techStack: [
      "React 19",
      "Vite",
      "TypeScript",
      "TanStack Query",
      "Zod",
      "Leaflet",
      "MapTiler SDK",
      "shadcn/ui",
      "Tailwind CSS v4",
    ],
    features: [
      "Current, hourly, and daily forecasts",
      "Map-based and dropdown location search",
      "Light/dark theme toggle",
      "Zod-validated API response schemas",
      "Loading skeleton states",
    ],
    architecture:
      "Frontend-only SPA with a clean separation between components, data-fetching hooks, and Zod schemas; TanStack Query handles caching/loading/error states for all weather API calls.",
    category: "Frontend",
    githubUrl: "https://github.com/Kumardeepsingh/React-WeatherApp",
    featured: true,
  },
  {
    slug: "peertutor",
    name: "PeerTutor",
    oneLiner:
      "Tutor marketplace with real Stripe payments and Zoom session integration.",
    description:
      "A marketplace connecting students with tutors: students search tutors by subject and availability, book sessions through an approval workflow, and pay through a real Stripe integration that applies a platform commission. Booked sessions get an actual Zoom meeting link generated via the Zoom Web SDK, and tutors upload credentials for admin verification.",
    techStack: [
      "PHP",
      "MySQL",
      "Stripe PHP SDK",
      "Zoom Web SDK",
      "Firebase PHP-JWT",
      "PHPMailer",
      "Guzzle",
    ],
    features: [
      "Tutor search/filtering by subject and availability",
      "Session booking with an approval workflow",
      "Stripe payments with platform commission logic",
      "Zoom meeting link generation per booked session",
      "Tutor credential verification and review/rating system",
      "Admin dashboard for users, tutors, and reports",
    ],
    architecture:
      "Procedural, file-per-page PHP (no framework) with shared database includes; the feature set — real Stripe and Zoom API integrations — is the strong part, while the lack of an MVC structure is a known trade-off worth being upfront about.",
    category: "Full-Stack",
    githubUrl: "https://github.com/Kumardeepsingh/PeerTutor",
    image: "/images/projects/peertutor.png",
    featured: true,
  },
  {
    slug: "spring-boot-tasks-application",
    name: "Spring Boot Tasks Application",
    oneLiner: "Full-stack task manager with lists, priorities, and status tracking.",
    description:
      "A task management app with task lists, priority levels, and status tracking, built as a clean example of REST CRUD fundamentals with a proper DTO/mapper layer on the backend.",
    techStack: ["React 18", "Vite", "TypeScript", "NextUI", "Spring Boot", "Spring Data JPA", "PostgreSQL"],
    features: [
      "Task CRUD with priority levels",
      "Status tracking across task lists",
      "DTO/mapper layer separating persistence from API shape",
    ],
    architecture: "Standard REST CRUD API (Spring Boot) with a Vite + React frontend.",
    category: "Full-Stack",
    githubUrl: "https://github.com/Kumardeepsingh/SpringBootTasksApplication",
    image: "/images/projects/spring-boot-tasks.png",
    featured: false,
  },
  {
    slug: "atm-simulator",
    name: "ATM Simulator",
    oneLiner: "Java Swing desktop ATM simulator with MySQL-backed accounts.",
    description:
      "A desktop ATM simulation covering login/signup, deposits, withdrawals, fast cash, balance checks, mini statements, and PIN changes, built around an interface-driven DAO pattern and a service layer to keep persistence, business logic, and UI cleanly separated.",
    techStack: ["Java", "Swing", "JDBC", "MySQL"],
    features: [
      "Multi-screen banking UI (deposit, withdraw, fast cash, mini statement, PIN change)",
      "Interface-driven DAO pattern (IAccountDao, ILoginDao, etc.)",
      "Service layer separating business logic from persistence",
      "Input validation and error handling throughout",
    ],
    architecture: "MVC-style desktop app with Controller/DAO/Model/Service/View packages.",
    category: "Desktop",
    githubUrl: "https://github.com/Kumardeepsingh/ATM-Simulator",
    featured: false,
  },
  {
    slug: "tods",
    name: "TODS — Tiffin Ordering & Delivery System",
    oneLiner: "JavaFX desktop app for managing school tiffin orders and deliveries.",
    description:
      "A point-of-sale style desktop app for managing school tiffin orders: parents place and view orders while admins manage students, meals, drivers, and order status, backed by MySQL through JDBC.",
    techStack: ["Java", "JavaFX", "JDBC", "MySQL"],
    features: [
      "Role-based access for parents vs. admins",
      "Order creation and editing",
      "Driver scheduling",
      "Customer/dependent profile management",
    ],
    architecture: "JavaFX FXML-view + controller pattern with a dedicated model package for domain objects.",
    category: "Desktop",
    githubUrl: "https://github.com/Kumardeepsingh/TODS",
    featured: false,
  },
  {
    slug: "budget-planner",
    name: "Budget Planner",
    oneLiner: "Native Android app for tracking income, expenses, and bill reminders.",
    description:
      "A native Android app for logging income and expenses, viewing transaction history, and getting notified before bills are due — fully offline, backed by local SQLite storage.",
    techStack: ["Java", "Android SDK", "SQLite"],
    features: [
      "Expense/income logging with transaction history",
      "Bill payment reminders via Android notifications",
      "Offline local storage (SQLiteOpenHelper)",
    ],
    architecture: "Standard Android Activity-based structure with RecyclerView adapters and a SQLite DbHandler.",
    category: "Mobile",
    githubUrl: "https://github.com/Kumardeepsingh/BudgetPlanner",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);
