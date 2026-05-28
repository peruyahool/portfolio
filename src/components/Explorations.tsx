import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X, Award, FileText, Database, ShieldCheck, Zap, Layers } from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  className,
  ...props
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  [key: string]: any;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (fallbackSrc && imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      {...props}
    />
  );
}

interface PlaygroundItem {
  id: string;
  title: string;
  source: string;
  description: string;
  imageUrl: string;
  fallbackUrl?: string;
  rotationClass: string;
}

const PLAYGROUND_ITEMS: PlaygroundItem[] = [
  {
    id: "item-1",
    title: "Treasure of the CSE Department Award",
    source: "Association of Computer Science Engineers (ACE)",
    description: "Honored with the esteemed student body leadership accolade for guiding SRM CSE department associations, coordinating large scale technical fests, and digital initiatives.",
    imageUrl: "/award_treasure.png",
    fallbackUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    rotationClass: "-rotate-2",
  },
  {
    id: "item-2",
    title: "Secretary of DI Club Spotlight",
    source: "SRM DI Club Office Bearers",
    description: "Elected and praised as the Secretary of the DI Club, celebrated on stage during Farewell '24 for orchestrating digital designs and campus interaction.",
    imageUrl: "/secretary_di_club.png",
    fallbackUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    rotationClass: "rotate-3",
  },
  {
    id: "item-3",
    title: "Weekly 4K Endurance Run",
    source: "Weekend Athletic Discipline",
    description: "Committed to maintaining optimal cardiovascular fitness, mental clarity, and focus. I challenge myself by running a 4K route every weekend, building high personal discipline that translates directly back to writing robust, high-performance database queries.",
    imageUrl: "/running.png",
    fallbackUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80",
    rotationClass: "-rotate-1",
  },
  {
    id: "item-4",
    title: "B.Tech Graduation with Mom",
    source: "SRM University (GPA: 8.56)",
    description: "Savoring a proud, life-long milestone with my mother at the graduation ceremony on the colorful SRM campus steps. Specializing in computer science, distributed computing, and enterprise database optimization.",
    imageUrl: "/graduation_with_mom.jpeg",
    fallbackUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    rotationClass: "rotate-2",
  },
  {
    id: "item-5",
    title: "n8n Webhook Dispatch Routing Flow",
    source: "Sakthi Hospital Automation Suite",
    description: "Visual trigger modeling linking frontend user requests to automated scheduling loops and notification SMS streams.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    rotationClass: "-rotate-3",
  },
  {
    id: "item-6",
    title: "Empathetic Classification ANN",
    source: "Keras Mental Health Chatbot Model",
    description: "Model fitting certificate showing validation accuracy for padding, custom word-vector embedding, and intent exploration.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    rotationClass: "rotate-1",
  },
];

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  const [activeMedia, setActiveMedia] = useState<PlaygroundItem | null>(null);

  // GSAP ScrollTrigger logic
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;

    if (!container || !content || !leftCol || !rightCol) return;

    let pinTrigger: ScrollTrigger | null = null;
    let parallaxLeft: gsap.core.Tween | null = null;
    let parallaxRight: gsap.core.Tween | null = null;

    // Pin the center content text block
    pinTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      pin: content,
      pinSpacing: false,
    });

    // Create asymmetrical parallax scrolling for visual columns
    parallaxLeft = gsap.fromTo(
      leftCol,
      { y: 50 },
      {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      }
    );

    parallaxRight = gsap.fromTo(
      rightCol,
      { y: 120 },
      {
        y: -320,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      }
    );

    // Refresh triggers to ensure correct calculations
    ScrollTrigger.refresh();

    return () => {
      if (pinTrigger) pinTrigger.kill();
      if (parallaxLeft) parallaxLeft.kill();
      if (parallaxRight) parallaxRight.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="explorations-section"
      className="relative min-h-[200vh] md:min-h-[250vh] bg-bg w-full select-none"
    >
      {/* LAYER 1: Pinned content block (GSAP pinned) */}
      <div
        ref={contentRef}
        className="h-screen w-full flex flex-col items-center justify-center text-center px-4 relative z-10 pointer-events-none"
      >
        <div className="max-w-xl pointer-events-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-body font-medium">
              Work & Awards Proof
            </span>
            <span className="w-8 h-px bg-stroke" />
          </div>

          {/* Heading */}
          <h2 id="explorations-heading" className="text-4xl md:text-6xl font-display font-light text-text-primary mb-6">
            Visual <span className="font-display italic">evidence</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-muted font-body leading-relaxed max-w-sm mx-auto mb-8 font-light">
            A premium gallery of certifications, academic degrees, corporate plaques, and workflow schematics verifying architectural mastery.
          </p>

          {/* LinkedIn Invitation */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-full text-xs font-semibold px-[2px] py-[2px] mt-2 transition-all duration-300"
          >
            <div className="absolute -inset-[2px] rounded-full opacity-100 accent-gradient -z-10" />
            <span className="flex items-center gap-1 bg-surface px-5 py-3 rounded-full text-text-primary text-xs font-semibold border border-white/10 group-hover:border-transparent">
              View Verified LinkedIn Awards
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
          <p className="text-[10px] text-white/30 font-mono mt-3">
            (You can easily upload your own scanned image files here when ready)
          </p>
        </div>
      </div>

      {/* LAYER 2: Side-by-side Parallax columns of visual cards */}
      <div className="absolute inset-0 max-w-[1300px] mx-auto px-6 md:px-12 z-20 pointer-events-none">
        <div className="grid grid-cols-2 gap-8 md:gap-32 w-full pt-20 pb-40">
          {/* Left Column (Items 1, 3, 5) */}
          <div ref={leftColRef} className="flex flex-col gap-12 md:gap-40 items-start pointer-events-auto">
            {PLAYGROUND_ITEMS.filter((_, idx) => idx % 2 === 0).map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveMedia(item)}
                className={`group relative aspect-square w-full max-w-[300px] bg-surface rounded-2xl md:rounded-3xl border border-stroke overflow-hidden shadow-lg shadow-black/80 hover:shadow-black/50 transition-all cursor-pointer ${item.rotationClass} hover:rotate-0 hover:scale-[1.03] duration-500`}
              >
                {/* Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
                <ImageWithFallback
                  src={item.imageUrl}
                  fallbackSrc={item.fallbackUrl}
                  alt={item.title}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Always visible minimal tags on bottom info panel */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6 transition-all duration-300">
                  <div className="flex items-center gap-1 mb-1">
                    <Award className="w-3 h-3 text-[#38bdf8]" />
                    <span className="text-[9px] text-[#38bdf8] uppercase tracking-widest font-mono font-medium">
                      Verified Credentials
                    </span>
                  </div>
                  <h4 className="text-xs md:text-sm font-semibold text-white/95 leading-snug font-body">
                    {item.title}
                  </h4>
                </div>

                {/* Detail overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex flex-col justify-center p-6 text-left">
                  <span className="text-[10px] text-[#38bdf8] uppercase tracking-widest mb-2 font-mono font-medium flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 animate-pulse" /> {item.source}
                  </span>
                  <p className="text-xs md:text-sm font-semibold text-white mb-2 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-white/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                  <span className="text-[9px] text-white/30 uppercase tracking-widest font-mono mt-4 border-t border-white/5 pt-2 flex items-center gap-1">
                    CLICK TO VIEW DETAILS ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Items 2, 4, 6) */}
          <div ref={rightColRef} className="flex flex-col gap-12 md:gap-40 items-end pt-32 pointer-events-auto">
            {PLAYGROUND_ITEMS.filter((_, idx) => idx % 2 === 1).map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveMedia(item)}
                className={`group relative aspect-square w-full max-w-[300px] bg-surface rounded-2xl md:rounded-3xl border border-stroke overflow-hidden shadow-lg shadow-black/80 hover:shadow-black/50 transition-all cursor-pointer ${item.rotationClass} hover:rotate-0 hover:scale-[1.03] duration-500`}
              >
                {/* Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
                <ImageWithFallback
                  src={item.imageUrl}
                  fallbackSrc={item.fallbackUrl}
                  alt={item.title}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Always visible minimal tags on bottom info panel */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6 transition-all duration-300">
                  <div className="flex items-center gap-1 mb-1">
                    <Award className="w-3 h-3 text-[#38bdf8]" />
                    <span className="text-[9px] text-[#38bdf8] uppercase tracking-widest font-mono font-medium">
                      Verified Credentials
                    </span>
                  </div>
                  <h4 className="text-xs md:text-sm font-semibold text-white/95 leading-snug font-body">
                    {item.title}
                  </h4>
                </div>

                {/* Detail overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex flex-col justify-center p-6 text-left">
                  <span className="text-[10px] text-[#38bdf8] uppercase tracking-widest mb-2 font-mono font-medium flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 animate-pulse" /> {item.source}
                  </span>
                  <p className="text-xs md:text-sm font-semibold text-white mb-2 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-white/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                  <span className="text-[9px] text-white/30 uppercase tracking-widest font-mono mt-4 border-t border-white/5 pt-2 flex items-center gap-1">
                    CLICK TO VIEW DETAILS ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL TRIGGER */}
      {activeMedia && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 transition-all duration-300">
          <button
            onClick={() => setActiveMedia(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-surface border border-stroke text-muted hover:text-text-primary hover:bg-stroke hover:scale-105 transition-all cursor-pointer"
          >
            <X className="w-5 h-5 pointer-events-auto" />
          </button>

          <div
            className="flex flex-col max-w-2xl w-full items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Picture Frame */}
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group bg-surface">
              <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
              <ImageWithFallback
                src={activeMedia.imageUrl}
                fallbackSrc={activeMedia.fallbackUrl}
                alt={activeMedia.title}
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              {/* Visual overlay representing a sleek certificate frame */}
              <div className="absolute inset-6 border border-white/5 flex flex-col justify-between p-6 pointer-events-none">
                <div className="flex justify-between items-start">
                  <ShieldCheck className="w-8 h-8 text-[#38bdf8]/40" />
                  <span className="text-[9px] text-white/20 font-mono tracking-widest">TRANSACTION SECURE</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[9px] text-white/25 font-mono tracking-wider">YP • VALID VERIFICATION</span>
                  <Zap className="w-5 h-5 text-[#38bdf8]/30" />
                </div>
              </div>
            </div>

            {/* Title Metadata */}
            <div className="text-center max-w-xl">
              <span className="text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-mono font-medium">
                {activeMedia.source}
              </span>
              <h3 className="text-2xl font-display italic text-text-primary mt-1 mb-3">
                {activeMedia.title}
              </h3>
              <p className="text-sm text-white/70 font-body leading-relaxed font-light">
                {activeMedia.description}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-2 text-[10px] text-white/30 font-mono uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" /> Certificate File Ready
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
