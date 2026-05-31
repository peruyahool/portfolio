import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Journal from "./components/Journal";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Wire IntersectionObserver to track the active viewport section dynamically
  useEffect(() => {
    if (isLoading) return;

    const sections = ["home", "resume", "work", "contact"];
    const options = {
      root: null,
      rootMargin: "-35% 0px -35% 0px", // Triggers when the section takes up the primary focus region
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  // Smooth scroll controller
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-bg text-text-primary selection:bg-[#38bdf8]/35 selection:text-text-primary overflow-x-hidden">
      {/* Background Mesh Simulated Atmosphere */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#c084fc] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#38bdf8] blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 halftone"></div>
      </div>

      {/* Intro Loading Screen with transition */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Single Page Content */}
      {!isLoading && (
        <main className="w-full h-full relative z-10">
          {/* Section 2: Hero */}
          <Hero
            activeSection={activeSection}
            onNavClick={handleNavClick}
            onSeeWorksClick={() => handleNavClick("work")}
            onReachOutClick={() => handleNavClick("contact")}
          />

          {/* Section 3: Career Trajectory */}
          <Journal />

          {/* Section 4: Selected Works */}
          <SelectedWorks />

          {/* Section 5: Explorations (Visual playground with Parallax Layouts) */}
          <Explorations />

          {/* Section 6: Stats */}
          <Stats />

          {/* Section 7: Footer & Contact */}
          <ContactFooter />
        </main>
      )}
    </div>
  );
}
