export interface BioData {
  name: string;
  role: string;
  education: {
    degree: string;
    institution: string;
  };
  shortIntro: string;
  aboutText: string[];
  location: string;
  status: {
    studying: string;
    building: string;
    nextRole: string;
  };
  links: {
    github: string;
    linkedin: string;
    email: string;
    leetcode: string;
  };
}

export const bioData: BioData = {
  name: "Sai Amirthesh",
  role: "Computer Science Student / Aspiring Software Engineer",
  education: {
    degree: "B.Tech Computer Science and Engineering — AI & Robotics",
    institution: "Vellore Institute of Technology (VIT)",
  },
  shortIntro:
    "I am a Computer Science student at VIT focused on backend systems and software engineering. I learn best by building and love exploring new technologies to solve real-world problems.",
  aboutText: [
    "I'm a Computer Science student at VIT specializing in AI & Robotics, focused on backend systems and software engineering.",
    "My learning happens by building. Rather than only learning technologies theoretically, I build practical applications to understand how systems work from the inside out — from APIs and databases to authentication and cloud infrastructure.",
    "I'm driven by curiosity and love exploring new technologies across backend frameworks, distributed architectures, and applied AI, constantly experimenting to create reliable software."
  ],
  location: "VIT · CSE (AI & Robotics) | India",
  status: {
    studying: "Computer Science — AI & Robotics @ VIT",
    building: "Software projects across backend, AI and systems",
    nextRole: "Incoming Software Engineering Intern @ Cisco",
  },
  links: {
    github: "https://github.com/SaiAmirthesh",
    linkedin: "https://linkedin.com/in/sai-amirthesh",
    email: "saiamirtheshxoxo@gmail.com",
    leetcode: "https://leetcode.com/u/SaiAmirthesh/",
  },
};
