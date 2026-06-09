import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";

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
  const [videoSource, setVideoSource] = useState<string | null>(null);
  const [videoStatus, setVideoStatus] = useState<"checking" | "local" | "streaming">("checking");
  const [isVideoMuted, setIsVideoMuted] = useState(true);

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

  // Check if custom local video /intro.mp4 exists in /public directory
  useEffect(() => {
    let isMounted = true;
    
    // Attempt local video fetch
    fetch("/intro.mp4", { method: "HEAD" })
      .then((res) => {
        if (!isMounted) return;
        if (res.ok) {
          console.log("Local intro.mp4 found! Ready to play personalized background video.");
          setVideoSource("/intro.mp4");
          setVideoStatus("local");
        } else {
          console.log("No local intro.mp4 detected in public folder. Resorting to streaming background.");
          setVideoSource(HLS_URL);
          setVideoStatus("streaming");
        }
      })
      .catch(() => {
        if (!isMounted) return;
        setVideoSource(HLS_URL);
        setVideoStatus("streaming");
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // HLS / Direct Video player initialization
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSource) return;

    let hls: Hls | null = null;

    if (videoStatus === "streaming") {
      if (Hls.isSupported()) {
        hls = new Hls({
          maxMaxBufferLength: 10,
          enableWorker: true,
        });
        hls.loadSource(videoSource);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoSource;
      }
    } else {
      // Direct mp4 source playback
      video.src = videoSource;
      video.load();
      video.play().catch((err) => {
        console.warn("Autoplay was prevented initially. Video stays ready.", err);
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoSource, videoStatus]);

  // Pause video visual & audio when scrolling away from the Hero section
  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => {
            console.log("Play automatically resumed.", err);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, [videoSource]);

  // Handle Mute/Unmute toggle
  const handleToggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsVideoMuted(newMuted);
      
      // Force play if browser interrupted
      if (!newMuted) {
        videoRef.current.play().catch((err) => {
          console.warn("Play on unmute failed:", err);
        });
      }
    }
  };

  // GSAP Entrance Animations
  useEffect(() => {
    const nameReveal = heroRef.current?.querySelector(".name-reveal");
    const blurInElements = heroRef.current?.querySelectorAll(".blur-in");

    if (!nameReveal || !blurInElements) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      nameReveal,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    );

    tl.fromTo(
      blurInElements,
      { opacity: 0, filter: "blur(10px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
      "-=0.9"
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
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 brightness-[0.7] contrast-[1.0] opacity-[0.95] saturate-[1.12]"
          autoPlay
          muted={isVideoMuted}
          loop
          playsInline
        />
        {/* Fine-tuned dark spatial overlays to guarantee pristine contrast on text details */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/85 via-black/25 to-[#0a0a0a]/60 z-0" />
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
          className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-4 select-none animate-fade-in drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
        >
          Yahool Perumal
        </h1>

        {/* Contact/Location metadata sub-line */}
        <div className="blur-in text-xs tracking-[0.1em] text-white/90 mb-6 font-mono font-semibold select-all drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          Bangalore, Karnataka • +91 93457 34551 • peruyahool@gmail.com
        </div>

        {/* Role line */}
        <div className="blur-in text-lg md:text-2xl text-text-primary mb-4 font-body font-normal tracking-wide min-h-[36px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          A{" "}
          <span
            key={roleIdx}
            className="font-display italic text-[#38bdf8] animate-role-fade-in inline-block font-medium mx-1"
          >
            {ROLES[roleIdx]}
          </span>{" "}
          based in Bangalore.
        </div>

        {/* Description */}
        <p
          id="hero-description"
          className="blur-in text-sm md:text-base text-white/95 max-w-xl mb-12 font-medium leading-relaxed font-body drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
        >
          AI & Full-Stack Engineer, Bangalore — building intelligent systems end to end. Specializing in intelligent workflows, LLM agents, and scalable enterprise automation systems.
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

      {/* Scroll Indicator & Minimal Audio Control */}
      <div id="scroll-section-indicator" className="z-10 pb-8 flex flex-col items-center gap-3 relative w-full">
        <span className="text-xs text-muted font-body uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-text-primary animate-scroll-down rounded-full origin-top" />
        </div>

        {/* Minimalist Floating Audio Toggle (Bottom-Right aligned) */}
        <div className="absolute right-6 md:right-12 bottom-8 z-20">
          <button
            id="hero-sound-toggle-btn"
            onClick={handleToggleMute}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[#38bdf8] hover:border-[#38bdf8]/30 transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
            title={isVideoMuted ? "Unmute Intro sound" : "Mute Intro sound"}
          >
            {isVideoMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <div className="flex gap-[2px] items-end h-3 px-1">
                <span className="w-[1.5px] bg-[#38bdf8] rounded-full animate-audio-wave h-full" style={{ animationDelay: '0.1s' }} />
                <span className="w-[1.5px] bg-[#38bdf8] rounded-full animate-audio-wave h-2/3" style={{ animationDelay: '0.3s' }} />
                <span className="w-[1.5px] bg-[#38bdf8] rounded-full animate-audio-wave h-5/6" style={{ animationDelay: '0.2s' }} />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
