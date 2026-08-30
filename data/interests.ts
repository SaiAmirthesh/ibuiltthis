export interface InterestItem {
  title: string;
  description: string;
  tag: string;
}

export interface LeetCodeStats {
  problemsSolved: string;
  contestRating: string;
  focusAreas: string[];
}

export const interestsData: InterestItem[] = [
  {
    title: "Backend Systems",
    description: "Designing APIs, services, authentication pipelines, and reliable application architecture.",
    tag: "Core Focus"
  },
  {
    title: "AI Applications",
    description: "Building practical AI systems using RAG, agentic state graphs, and intelligent document workflows.",
    tag: "Applied AI"
  },
  {
    title: "Developer Tools",
    description: "Tools, CLI utilities, and benchmarking scripts that make software development easier and more productive.",
    tag: "Dev Tooling"
  },
  {
    title: "Cloud & Infrastructure",
    description: "Understanding containerization, deployment pipelines, infrastructure as code, and cloud architecture.",
    tag: "DevOps"
  },
  {
    title: "Robotics",
    description: "Combining software engineering, computer vision, and robotics through ROS2 autonomous systems.",
    tag: "Systems & HW"
  }
];

export const leetcodeStats: LeetCodeStats = {
  problemsSolved: "100+",
  contestRating: "1700+",
  focusAreas: [
    "Dynamic Programming",
    "Backtracking",
    "Graphs & Trees",
    "Arrays & Hashing",
    "Greedy Algorithms"
  ]
};
