import { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ArrowUpRight, Mail } from "lucide-react";

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function ContactFooter() {
  const footerVideoRef = useRef<HTMLVideoElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // HLS Video Initialization
  useEffect(() => {
    const video = footerVideoRef.current;
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
      video.src = HLS_URL;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // GSAP Marquee implementation
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const anim = gsap.to(el, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: "none",
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <footer
      id="resume"
      className="relative pt-24 pb-12 bg-bg text-text-primary select-none overflow-hidden"
    >
      {/* Reflected HLS Background Video with heavier overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <video
          ref={footerVideoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] brightness-[0.22] contrast-[0.95]"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent z-0" />
      </div>

      {/* Marquee Row */}
      <div className="relative z-10 w-full overflow-hidden py-6 border-y border-stroke/20 bg-surface/5 backdrop-blur-sm mb-16 md:mb-24">
        <div className="flex whitespace-nowrap" style={{ width: "200%" }}>
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            {Array(10)
              .fill("BUILDING THE FUTURE • ")
              .map((text, idx) => (
                <span
                  key={`marquee-${idx}`}
                  className="text-4xl md:text-6xl font-display italic font-light tracking-widest text-[#38bdf8]/20 mr-12 select-none animate-pulse"
                >
                  {text}
                </span>
              ))}
            {Array(10)
              .fill("BUILDING THE FUTURE • ")
              .map((text, idx) => (
                <span
                  key={`marquee-dup-${idx}`}
                  className="text-4xl md:text-6xl font-display italic font-light tracking-widest text-[#38bdf8]/20 mr-12 select-none animate-pulse"
                >
                  {text}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Main Contents */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
        {/* Contact CTA */}
        <div className="max-w-xl mb-16 md:mb-24 flex flex-col items-center">
          <span className="text-xs text-muted font-body uppercase tracking-[0.3em] font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-display italic text-text-primary mb-8 select-none leading-none">
            Let's work together
          </h2>

          <p className="text-sm md:text-base text-muted font-body leading-relaxed max-w-xl font-light mb-10">
            For intelligent process automations, database analytics, machine learning flows, or custom RAG & AI-agent setups — send an email and let's build something exceptional.
          </p>

          {/* Mailto Button with exquisite interactive ring design */}
          <a
            href="mailto:peruyahool@gmail.com"
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-semibold p-[1.5px] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="absolute -inset-[1.5px] rounded-full opacity-100 accent-gradient -z-10" />
            <span className="flex items-center gap-2.5 bg-surface px-8 py-4 rounded-full border border-white/10 group-hover:border-transparent text-text-primary text-sm font-medium transition-colors">
              <Mail className="w-4 h-4 text-[#38bdf8]" />
              peruyahool@gmail.com
            </span>
          </a>
        </div>

        {/* Footer Bar Links */}
        <div className="w-full border-t border-stroke/40 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-muted font-body font-light tracking-wide">
              Available for projects & full-time roles
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            {[
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "GitHub", url: "https://github.com" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-0.5 text-xs text-muted hover:text-text-primary transition-colors font-body font-light"
              >
                {social.name}
                <ArrowUpRight className="w-3 h-3 text-muted/50 group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>

          {/* Copyright mark */}
          <div className="text-xs text-muted/60 font-body font-light">
            &copy; {new Date().getFullYear()} Yahool Perumal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
