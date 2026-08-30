export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  badgeText: string;
  period: string;
  status: "Incoming" | "Completed" | "Current";
  description: string;
  technologies: string[];
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "cisco",
    company: "Cisco",
    role: "Upcoming Software Engineering Intern",
    badgeText: "Upcoming Software Engineering Intern @ Cisco",
    period: "Upcoming",
    status: "Incoming",
    description: "Upcoming Software Engineering Internship.",
    technologies: ["Software Engineering", "Backend", "Systems", "Networking"],
    highlights: [
      "Upcoming Software Engineering Internship @ Cisco."
    ]
  },
  {
    id: "hubino",
    company: "Hubino",
    role: "Software Development Intern",
    badgeText: "Software Development Intern @ Hubino",
    period: "June 2026",
    status: "Completed",
    description: "Backend Developer for ServiceHub, a multi-tenant home services marketplace.",
    technologies: ["Express", "TypeScript", "PostgreSQL", "Drizzle ORM", "Cron Jobs", "React Native", "SSE"],
    highlights: [
      "Designed core backend architecture for a multi-tenant home services marketplace within a 3-week MVP sprint powering admin web portal and mobile apps using Express, TypeScript, Drizzle ORM, and PostgreSQL.",
      "Designed and implemented a scheduled professional matching service using cron jobs to automatically assign nearby available professionals based on customer location.",
      "Designed booking lifecycle workflows with real-time booking notifications using Server-Sent Events (SSE), ensuring consistent state transitions."
    ]
  }
];
