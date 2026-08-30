export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: "Full Stack" | "Backend" | "Cloud" | "Software";
  categories: string[];
  featured: boolean;
  year: string;
  technologies: string[];
  features?: string[];
  focus?: string[];
  overview: string;
  problem?: string;
  approach?: string;
  architecture?: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
}

export const projectsData: Project[] = [
  // 1. ExpenseOS
  {
    id: "expenseos",
    name: "ExpenseOS",
    tagline: "Collaborative financial vault and mobile expense management platform with automated settlement balances.",
    category: "Full Stack",
    categories: ["Full Stack", "Fintech", "Mobile"],
    featured: true,
    year: "2026",
    technologies: ["Java 25", "Spring Boot 4", "Spring Security", "PostgreSQL", "React Native", "Expo", "Docker"],
    features: [
      "Personal expense tracking and spending analytics",
      "Equal, exact, and percentage group bill splitting",
      "Automated debt simplification and settlement balance engine",
      "Offline-first mobile application with fast local storage"
    ],
    focus: ["Settlement Algorithms", "Mobile Architecture", "Spring Boot 4", "Offline State"],
    overview: "A collaborative financial vault and personal expense management platform for tracking spending, splitting group bills, settling balances, and visualizing financial activity across web and mobile.",
    problem: "Group bill splitting often suffers from complex non-transitive debt cycles and slow offline synchronization in mobile network dead zones.",
    approach: "Constructed an automated settlement balance engine paired with an offline-first mobile client using MMKV local storage and TanStack Query optimistic mutations.",
    architecture: "Containerized Java 25 & Spring Boot 4 REST services with PostgreSQL persistence, connected to an Expo React Native mobile client with Expo Router navigation.",
    githubUrl: "https://github.com/SaiAmirthesh/ExpenseOS",
    liveUrl: null
  },

  // 2. EduConflux
  {
    id: "educonflux",
    name: "EduConflux",
    tagline: "AI-powered education operations platform combining academic operations, communication, and RBAC.",
    category: "Full Stack",
    categories: ["Full Stack", "Education", "Backend"],
    featured: true,
    year: "2026",
    technologies: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "PostgreSQL", "React", "JWT", "Docker"],
    features: [
      "Enterprise backend architecture following Clean Architecture & SOLID",
      "Hierarchical Role-Based Access Control (RBAC)",
      "Academic operations, course materials, and scheduling",
      "Containerized multi-service Docker Compose infrastructure"
    ],
    focus: ["Clean Architecture", "SOLID Principles", "Enterprise Security", "Modular Design"],
    overview: "A unified platform combining academic operations, communication, collaboration, classroom functionality, and AI assistance for educational institutions.",
    problem: "Institutions struggle with disconnected tools for attendance, coursework, grading, and communication without unified authorization.",
    approach: "Designed a modular enterprise system implementing Clean Architecture principles with granular domain isolation and role-based policies.",
    architecture: "Spring Boot backend with Spring Security and Hibernate ORM over PostgreSQL, paired with a React frontend.",
    githubUrl: "https://github.com/SaiAmirthesh",
    liveUrl: null
  },

  // 3. CloudVault
  {
    id: "cloudvault",
    name: "CloudVault",
    tagline: "Secure file management and sharing platform with MinIO object storage and password-protected share links.",
    category: "Cloud",
    categories: ["Cloud", "Backend"],
    featured: true,
    year: "2026",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "MinIO", "JWT", "Docker"],
    features: [
      "S3-compatible object storage via MinIO cluster",
      "Granular file ownership and metadata engine",
      "Encrypted share links with optional expiration and password protection",
      "JWT-authenticated secure access gateway"
    ],
    focus: ["Object Storage", "Link Cryptography", "Containerization", "Access Control"],
    overview: "A secure file management and sharing platform focused on file ownership, object storage, metadata management, and secure share links.",
    problem: "Cloud storage solutions require granular access delegation without exposing direct S3 bucket credentials or unauthenticated blob URLs.",
    approach: "Implemented an intermediary tokenized gateway that issues time-expiring, password-protected presigned URLs for MinIO object buckets with full audit logging.",
    architecture: "Spring Boot service layer handling metadata in PostgreSQL and streaming binary payloads to containerized MinIO object storage clusters.",
    githubUrl: "https://github.com/SaiAmirthesh/CloudVault",
    liveUrl: null
  },

  // 4. AcademicHub
  {
    id: "academichub",
    name: "AcademicHub",
    tagline: "Modern university management platform with multi-role dashboards and Arcjet runtime security.",
    category: "Full Stack",
    categories: ["Full Stack", "Education"],
    featured: true,
    year: "2026",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Better Auth", "Arcjet"],
    features: [
      "Role-based portals for administrators, teachers, and students",
      "Department, course, and faculty management",
      "Join-code classroom enrollment pipeline",
      "Arcjet runtime attack protection and rate limiting"
    ],
    focus: ["RBAC Portals", "Database Schemas", "Runtime Security", "Responsive UI"],
    overview: "A modern university management platform providing secure role-based access for administrators, teachers, and students to manage academic operations through a unified dashboard.",
    problem: "Academic operations are frequently fragmented across disparate portals vulnerable to brute-force credential stuffing.",
    approach: "Unified administrative, faculty, and student portals into a single high-performance TypeScript stack secured with Arcjet threat detection and Better Auth sessions.",
    architecture: "React + Vite frontend styled with Tailwind CSS, Node.js + Express backend, Drizzle ORM paired with Neon PostgreSQL serverless database, and Arcjet security middleware.",
    githubUrl: "https://github.com/SaiAmirthesh/AcademicHub",
    liveUrl: null
  }
];
