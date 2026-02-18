import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
            <ParticleBackground />
            <CursorGlow />
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <AchievementsSection />
                <ContactSection />
            </main>
        </div>
    );
};

export default Index;
