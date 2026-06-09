import Navigation from "../components/Navigation";
import Hero from "../components/home/Hero";
import SkillsSection from "../components/skills/SkillsSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
