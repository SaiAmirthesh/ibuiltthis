export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", context: "Primary language for enterprise backends & Spring Boot applications." },
      { name: "Python", context: "Used for AI/ML pipelines, scripting, data analysis, and RAG systems." },
      { name: "TypeScript", context: "Type-safe full-stack web applications, Express, and React Native." },
      { name: "JavaScript", context: "Core web development, Node.js runtimes, and frontend interactivity." },
      { name: "C", context: "Low-level systems programming, memory management, and OS concepts." },
      { name: "C++", context: "Performance-critical algorithms and data structures." }
    ]
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Spring Boot", context: "Enterprise REST APIs, microservices, and dependency injection." },
      { name: "Spring MVC", context: "Model-View-Controller architecture and web request routing." },
      { name: "Spring Security", context: "JWT authentication, RBAC authorization, and HttpOnly cookies." },
      { name: "Express.js", context: "Fast, unopinionated backend APIs and middleware execution." },
      { name: "NestJS", context: "Progressive enterprise TypeScript Node.js framework." },
      { name: "RESTful APIs", context: "Clean HTTP API design, endpoint versioning, and JSON contracts." },
      { name: "WebSockets", context: "Real-time bidirectional client-server event communication." }
    ]
  },
  {
    category: "Databases & ORM",
    skills: [
      { name: "PostgreSQL", context: "Relational database for ACID transactional data storage." },
      { name: "MySQL", context: "Relational data persistence and structured SQL querying." },
      { name: "MongoDB", context: "NoSQL document database for dynamic schemas and JSON collections." },
      { name: "Drizzle ORM", context: "TypeScript-first ORM with fast SQL query execution." },
      { name: "Hibernate", context: "Java object-relational mapping, caching, and entity management." },
      { name: "Spring Data JPA", context: "Data access repositories and abstraction layers in Spring." }
    ]
  },
  {
    category: "AI / ML",
    skills: [
      { name: "LangChain", context: "Building composable LLM pipelines and prompt-driven applications." },
      { name: "LangGraph", context: "Stateful multi-agent workflows and graph-based AI cycles." },
      { name: "Scikit-learn", context: "Machine learning algorithms, classification, and regression models." },
      { name: "NumPy", context: "High-performance scientific computing and multi-dimensional arrays." },
      { name: "Pandas", context: "Data manipulation, tabular transformation, and dataset analysis." },
      { name: "RAG", context: "Retrieval-Augmented Generation with vector embeddings and semantic search." },
      { name: "Prompt Engineering", context: "Structuring LLM system instructions, zero-shot and few-shot reasoning." }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Docker", context: "Containerization, Dockerfiles, and multi-service Compose environments." },
      { name: "Git", context: "Distributed version control, branch management, and commit workflows." },
      { name: "GitHub", context: "Repository hosting, code collaboration, pull requests, and CI/CD." }
    ]
  },
  {
    category: "Related Coursework & Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", context: "Problem solving, tree/graph traversals, dynamic programming, and binary search." },
      { name: "OOP", context: "Object-Oriented Programming principles, design patterns, and SOLID architecture." },
      { name: "DBMS", context: "Database management systems, normalization, indexing, and transaction ACID properties." },
      { name: "Operating Systems", context: "Process scheduling, thread concurrency, deadlock detection, and virtual memory." },
      { name: "Computer Networks", context: "OSI stack, TCP/IP, HTTP/HTTPS protocols, routing, and sockets." }
    ]
  }
];
