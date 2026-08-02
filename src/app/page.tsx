import AuroraBackground from "@/components/ui/AuroraBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import DashboardSection from "@/components/sections/DashboardSection";
import AIProjectsSection from "@/components/sections/AIProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

/**
 * Portfolio Home Page — Sayanta Ghosh
 * Data Analyst · BI Developer · AI Enthusiast
 */
export default function Home() {
  return (
    <>
      {/* Fixed aurora background */}
      <AuroraBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" role="main" className="overflow-x-hidden w-full max-w-full">
        <HeroSection />

        {/* Divider */}
        <div className="container-max">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <AboutSection />

        <div className="container-max">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <SkillsSection />

        <div className="container-max">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <ProjectsSection />

        <div className="container-max">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <DashboardSection />

        <div className="container-max">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <AIProjectsSection />

        <div className="container-max">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <CertificationsSection />

        <div className="container-max">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <AchievementsSection />

        <div className="container-max">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <GitHubSection />

        <div className="container-max">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <ResumeSection />

        <div className="container-max">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
