import Navigation from "../components/Navigation";
import Hero from "../components/home/Hero";
import SkillsSection from "../components/skills/SkillsSection";
import ProjectsSection from "../components/projects/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
