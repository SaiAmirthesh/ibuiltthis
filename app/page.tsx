import Header from "@/components/landingPage/Header";
import IbuiltthisScroll from "@/components/landingPage/IbuiltthisScroll";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ActivitySection from "@/components/portfolio/ActivitySection";
import Contact from "@/components/landingPage/Contact";

export default async function Home() {
  return (
    <main className="w-full bg-[#050505] text-white">
      <Header />
      <IbuiltthisScroll />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ActivitySection />
      <Contact />
    </main>
  );
}
