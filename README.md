<div align="center">

  <img src="public/MyLogo.png" alt="Sai Amirthesh Logo" width="96" height="96" style="border-radius: 50%;" />

  # Sai Amirthesh — Portfolio & Engineering Platform

  **Interactive Scrollytelling & System Architecture Showcase**

  [![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

  <br />

  <p align="center">
    A state-of-the-art developer portfolio combining <b>cinematic 240-frame 3D canvas scrollytelling</b>, an <b>interactive Unix-like CLI terminal shell</b>, live real-time <b>GitHub & LeetCode APIs</b>, and deep-dive architectural breakdowns of backend distributed systems.
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-interactive-cli-terminal">Interactive CLI</a> •
    <a href="#-system-architecture--projects">Projects</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-contact--socials">Contact</a>
  </p>

</div>

---

##  Key Features

- **Cinematic 240-Frame 3D Scrollytelling**:
  - High-performance HTML5 `<canvas>` rendering synchronized with scroll timeline.
  - Smooth dynamic playback at 60+ FPS powered by Lenis smooth scrolling and Framer Motion spring physics.
  - Optimized concurrent batch asset streaming with minimal `0% → 100%` initialization loading bar.

- **Interactive Unix CLI Terminal (`⌘K` / `Ctrl+K`)**:
  - Launchable from the header logo badge or keyboard shortcut (`⌘K` / `Ctrl+K`).
  - Supports custom command evaluation: `help`, `about`, `projects`, `skills`, `experience`, `resume`, `contact`, `github`, `clear`, and `exit`.
  - Up/Down command history navigation, Tab auto-completion, isolated modal scrolling with page lock, and auto-download execution for resumes.

- **Live Real-Time Activity & Metric Integrations**:
  - **Full-Width GitHub Contribution Heatmap**: Synced via server-side API proxy route (`/api/github`) rendering active annual contributions.
  - **LeetCode GraphQL Synchronization**: Live rating, solved difficulty distribution (Easy, Medium, Hard), and percentile metrics.

- **Modern Dark & Electric Cyan Design System**:
  - Obsidian dark palette (`#050505`) with curated electric cyan and cobalt blue accents.
  - Pinned viewport top scroll progress bar tracking page depth in real time.
  - Dedicated academic standing card (VIT CGPA: **9.44 / 10**) and career timeline.

---

## Interactive CLI Terminal

The portfolio embeds an interactive Unix-like command shell accessible globally via `⌘K` or by clicking the header logo:

```text
┌────────────────────────────────────────────────────────┐
│  Sai Amirthesh — Interactive Portfolio Shell v1.0      │
│  Type 'help' to view all available commands.           │
└────────────────────────────────────────────────────────┘
```

### Supported Commands

| Command | Description |
| :--- | :--- |
| `help` | Lists all available shell commands and syntax |
| `about` / `bio` | Displays background, education (VIT, CGPA 9.44), and engineering philosophy |
| `projects` / `ls` | Lists primary architectures with tech stacks and repository links |
| `skills` | Displays technical stack categorized across backend, AI/ML, DevOps & databases |
| `experience` / `exp` | Displays software engineering internship roles (Cisco, Hubino) |
| `resume` | Initiates instant download of `Sai_Resume.pdf` |
| `contact` / `email` | Displays direct contact information and social handles |
| `github` | Summarizes GitHub metrics, repository count, and profile URL |
| `clear` / `cls` | Clears terminal history and screen |
| `exit` / `quit` | Closes the CLI modal and returns to the website |

---

## System Architecture & Projects

| Project | Domain | Key Architecture & Stack |
| :--- | :--- | :--- |
| **ExpenseOS** | Enterprise FinTech | Distributed microservices, Spring Boot, Spring Cloud Gateway, Kafka event bus, PostgreSQL with distributed locking. |
| **EduConflux** | EdTech / AI System | Next.js, Node.js, Spring Boot, RAG document processing, vector search, Redis session cache. |
| **CloudVault** | Cloud Storage & Security | Zero-knowledge client-side encryption, chunked multi-part streaming, AWS S3 storage backend. |
| **AcademicHub** | Campus Infrastructure | Scalable RESTful API service, role-based access control (RBAC), JWT authentication, Docker containerization. |

---

## Tech Stack

### Frontend & UI
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Smooth Scrolling**: [@studio-freight/lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend & APIs
- **Next.js Server Proxy Routes**:
  - `/api/github` — GitHub contribution calendar proxy
  - `/api/leetcode` — LeetCode GraphQL API proxy
- **Core Engineering Languages**: Java (Spring Boot), TypeScript, Python, SQL

---

## Project Structure

```text
ibuiltthis/
├── app/
│   ├── api/
│   │   ├── github/route.ts       # Server-side GitHub contributions API proxy
│   │   └── leetcode/route.ts     # Server-side LeetCode GraphQL proxy
│   ├── globals.css               # Core styling and design tokens
│   ├── icon.svg                  # Vector SVG browser tab favicon
│   ├── icon.png                  # High-res favicon fallback
│   ├── layout.tsx                # Root layout, fonts, smooth scroll, scroll progress
│   └── page.tsx                  # Landing page assembling all sections
├── components/
│   ├── landingPage/
│   │   ├── Contact.tsx           # Contact footer, socials, resume download
│   │   ├── Header.tsx            # Navigation bar & CLI modal launcher
│   │   └── IbuiltthisScroll.tsx  # 240-frame 3D canvas scrollytelling engine
│   ├── portfolio/
│   │   ├── AboutSection.tsx      # Bio narrative, VIT CGPA card, upcoming role
│   │   ├── ActivitySection.tsx   # Real GitHub heatmap & LeetCode metrics
│   │   ├── ExperienceSection.tsx # Cisco & Hubino career timeline
│   │   ├── ProjectsSection.tsx   # Architectural project showcase & deep-dives
│   │   ├── SkillsSection.tsx     # Categorized skill matrix
│   │   └── TerminalCLI.tsx       # Interactive Unix terminal shell modal
│   └── ui/
│       ├── ScrollProgress.tsx    # Viewport-pinned glowing progress bar
│       └── SmoothScrolling.tsx   # Lenis smooth scroll wrapper
├── data/
│   ├── bio.ts                    # Personal background, status & metadata
│   ├── experience.ts             # Professional roles & achievements
│   ├── projects.ts               # Project architectures, highlights & tags
│   └── skills.ts                 # Categorized technical competencies
├── public/
│   ├── MyLogo.png                # Custom SA. emblem disc logo
│   ├── Sai_Resume.pdf            # Downloadable resume PDF
│   └── sequence/                 # 241-frame 4K sequence frames
└── services/
    ├── githubService.ts          # Client-side GitHub service fetcher
    └── leetcodeService.ts        # Client-side LeetCode service fetcher
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher
- **npm** / **pnpm** / **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SaiAmirthesh/ibuiltthis.git
   cd ibuiltthis
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

##  Deployment

The project is optimized for zero-configuration deployment on **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SaiAmirthesh/ibuiltthis)

```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## 📬 Contact & Socials

- **Engineer**: Sai Amirthesh
- **Role**: Computer Science Student (AI & Robotics) @ VIT 
- **Email**: [saiamirthesh.23@gmail.com](mailto:saiamirthesh.23@gmail.com)
- **GitHub**: [@SaiAmirthesh](https://github.com/SaiAmirthesh)
- **LinkedIn**: [sai-amirthesh](https://www.linkedin.com/in/sai-amirthesh/)
- **LeetCode**: [@SaiAmirthesh](https://leetcode.com/u/SaiAmirthesh/)

---

<div align="center">
  <sub>Designed & Engineered with precision by Sai Amirthesh.</sub>
</div>
