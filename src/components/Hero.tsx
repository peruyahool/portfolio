import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onSeeWorksClick: () => void;
  onReachOutClick: () => void;
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

const ROLES = ["Analyst", "AI Automation Engineer", "Big Data Specialist"];
const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Hero({ onSeeWorksClick, onReachOutClick, onNavClick, activeSection }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Cycle Roles
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(roleTimer);
  }, []);

  // Monitor Scroll for Navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // HHL.js player initialization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
      });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native Apple device support
      video.src = HLS_URL;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    // Select elements in local context
    const nameReveal = heroRef.current?.querySelector(".name-reveal");
    const blurInElements = heroRef.current?.querySelectorAll(".blur-in");

    if (!nameReveal || !blurInElements) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Staged animations
    tl.fromTo(
      nameReveal,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    );

    tl.fromTo(
      blurInElements,
      { opacity: 0, filter: "blur(10px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
      "-=0.9" // overlaps slightly with name reveal
    );
  }, []);

  return (
    <div
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between items-center bg-black overflow-hidden select-none"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 brightness-[0.45] contrast-[0.95]"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-0 pointer-events-none" />
      </div>

      {/* Floating Navbar (rendered within hero context but fixed screen space) */}
      <nav
        id="global-navbar"
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
      >
        <div
          className={`glass rounded-full px-2 py-1.5 flex items-center gap-2 transition-all duration-300 ${
            scrolled ? "shadow-lg shadow-black/50" : "shadow-none"
          }`}
        >
          {/* Logo */}
          <button
            id="nav-logo-button"
            onClick={() => onNavClick("home")}
            className="w-8 h-8 rounded-full accent-border flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            <span className="font-display text-[11px] font-bold text-text-primary">YP</span>
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-white/10" />

          {/* Nav Links */}
          <div className="flex gap-1">
            {[
              { label: "Home", id: "home" },
              { label: "Resume", id: "resume" },
              { label: "Work", id: "work" },
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => onNavClick(link.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/10 text-text-primary"
                      : "text-white/50 hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-white/10" />

          {/* "Say hi" button */}
          <button
            id="nav-say-hi-button"
            onClick={onReachOutClick}
            className="accent-border px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer flex items-center gap-1 hover:scale-105 transition-all duration-200 text-text-primary"
          >
            Say hi <span className="text-[10px]">↗</span>
          </button>
        </div>
      </nav>

      {/* Hero Content (Centered) */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 max-w-4xl z-10 pt-20">
        {/* Name */}
        <h1
          id="hero-name"
          className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-4 select-none animate-fade-in"
        >
          Yahool Perumal
        </h1>

        {/* Contact/Location metadata sub-line */}
        <div className="blur-in text-xs tracking-[0.1em] text-white/50 mb-6 font-mono font-light select-all">
          Bangalore, Karnataka • +91 93457 34551 • peruyahool@gmail.com
        </div>

        {/* Role line */}
        <div className="blur-in text-lg md:text-2xl text-text-primary/95 mb-4 font-body font-light tracking-wide min-h-[36px]">
          A{" "}
          <span
            key={roleIdx}
            className="font-display italic text-text-primary animate-role-fade-in inline-block font-medium mx-1"
          >
            {ROLES[roleIdx]}
          </span>{" "}
          based in Bangalore.
        </div>

        {/* Description */}
        <p
          id="hero-description"
          className="blur-in text-sm md:text-base text-muted max-w-xl mb-12 font-light leading-relaxed font-body"
        >
          Passionate AI Automation Engineer and Big Data enthusiast focused on building intelligent workflows, AI-powered applications, and scalable automation systems.
        </p>

        {/* CTA Buttons */}
        <div id="hero-ctas" className="blur-in flex flex-wrap gap-4 justify-center items-center">
          {/* See Works */}
          <button
            id="hero-see-works"
            onClick={onSeeWorksClick}
            className="group relative rounded-full text-sm font-semibold select-none transition-all duration-300 hover:scale-105 active:scale-95 px-[2px] py-[2px] overflow-hidden"
          >
            <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative rounded-full px-7 py-3.5 bg-text-primary text-bg font-body group-hover:bg-bg group-hover:text-text-primary transition-colors duration-300 flex items-center gap-1.5">
              See Works
            </div>
          </button>

          {/* Reach Out */}
          <button
            id="hero-reach-out"
            onClick={onReachOutClick}
            className="group relative rounded-full text-sm font-semibold select-none transition-all duration-300 hover:scale-105 active:scale-95 px-[2px] py-[2px] overflow-hidden"
          >
            <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative rounded-full px-7 py-3.5 bg-bg border-2 border-stroke text-text-primary font-body group-hover:border-transparent transition-colors duration-300">
              Reach out...
            </div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div id="scroll-section-indicator" className="z-10 pb-8 flex flex-col items-center gap-3">
        <span className="text-xs text-muted font-body uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-text-primary animate-scroll-down rounded-full origin-top" />
        </div>
      </div>
    </div>
  );
}
