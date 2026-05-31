import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ArrowUpRight, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function ContactFooter() {
  const footerVideoRef = useRef<HTMLVideoElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | "warning" | null; text: string }>({
    type: null,
    text: ""
  });

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

  const triggerMailtoFallback = () => {
    const bodyText = `Hi Yahool,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`;
    const mailtoUrl = `mailto:peruyahool@gmail.com?subject=${encodeURIComponent(formData.topic)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: null, text: "" });

    const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID;
    const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY;

    // Zero-failure fallback check
    if (!serviceId || !templateId || !publicKey) {
      setSending(false);
      setStatus({
        type: "warning",
        text: "EmailJS API keys not detected in development environment variables. I've prepared a beautifully auto-formatted email draft for my mailbox below instead!"
      });
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.topic,
          message: formData.message,
        },
        publicKey
      );

      setSending(false);
      setStatus({
        type: "success",
        text: "Thanks for reaching out! Your message was transmitted securely via EmailJS. I will read and reply to your inquiry shortly."
      });
      setFormData({ name: "", email: "", topic: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setSending(false);
      setStatus({
        type: "error",
        text: `Failed to transmit message: ${error?.text || "Unknown server response"}. Let's fall back to opening your default mail application.`
      });
    }
  };

  return (
    <footer
      id="resume"
      className="relative pt-24 pb-12 bg-bg text-text-primary select-none overflow-hidden border-t border-white/5"
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
      <div className="relative z-10 max-w-[1250px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center">
        {/* Contact Form Container */}
        <div className="w-full max-w-2xl mx-auto mb-16 md:mb-24 text-left">
          <div className="text-center mb-10 pb-4">
            <span className="text-xs text-muted font-body uppercase tracking-[0.3em] font-semibold mb-3 block">
              Contact Dispatcher
            </span>
            <h2 className="text-4xl md:text-6xl font-display italic text-text-primary mb-4 select-none leading-none">
              Let's build together
            </h2>
            <p className="text-sm text-muted font-body leading-relaxed max-w-md mx-auto font-light">
              Submit the form below for intelligent workflow automation, production analytic pipelines, deep agent integrations, or custom RAG systems.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-10 border border-white/5 space-y-5 relative">
            <div className="absolute top-[2px] left-[2px] w-[99.5%] h-[2px] bg-gradient-to-r from-[#38bdf8]/40 to-[#c084fc]/40 rounded-t-3xl" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5 animate-fade-in">
                <label className="text-[10px] text-white/50 font-mono uppercase tracking-wider font-semibold">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8] focus:bg-white/[0.05] transition-all font-body font-light"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] text-white/50 font-mono uppercase tracking-wider font-semibold">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8] focus:bg-white/[0.05] transition-all font-body font-light"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-white/50 font-mono uppercase tracking-wider font-semibold">Subject / Project Intent</label>
              <input
                type="text"
                required
                value={formData.topic}
                onChange={(e) => setFormData({...formData, topic: e.target.value})}
                placeholder="RAG Orchestration / API Automation Consult"
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8] focus:bg-white/[0.05] transition-all font-body font-light"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-white/50 font-mono uppercase tracking-wider font-semibold">Detailed Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Describe your workflows, timelines, goals, or target objectives..."
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8] focus:bg-white/[0.05] transition-all font-body font-light resize-none"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto relative group inline-flex items-center justify-center rounded-xl text-xs font-semibold p-[1.5px] transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              >
                <div className="absolute -inset-[1.5px] rounded-xl opacity-100 accent-gradient -z-10 animate-pulse" />
                <span className="flex items-center gap-2 bg-surface px-8 py-3.5 rounded-xl border border-white/10 group-hover:border-transparent text-text-primary text-xs font-bold uppercase tracking-wider transition-colors w-full justify-center">
                  {sending ? "Transmitting..." : "Send Dispatch ↗"}
                </span>
              </button>

              <span className="text-[11px] text-white/40 font-mono text-center sm:text-right">
                Backup mailbox: <a href="mailto:peruyahool@gmail.com" className="text-[#38bdf8] hover:underline">peruyahool@gmail.com</a>
              </span>
            </div>

            {/* Status Feedback panels */}
            {status.type && (
              <div className={`mt-4 p-4 rounded-xl text-xs font-body font-light border flex flex-col gap-1.5 ${
                status.type === "success" 
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                  : status.type === "warning"
                  ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                  : "bg-rose-500/10 border-rose-500/20 text-rose-400"
              }`}>
                <p className="font-semibold font-mono uppercase tracking-wider text-[10px]">
                  {status.type === "success" ? "Message Dispatched Successfully" : status.type === "warning" ? "Environment Notice" : "Transmission Error"}
                </p>
                <p className="leading-relaxed">{status.text}</p>
                {status.type === "warning" && (
                  <button
                    type="button"
                    onClick={triggerMailtoFallback}
                    className="mt-2 text-xs font-bold text-[#38bdf8] underline text-left hover:text-[#38bdf8]/80 cursor-pointer"
                  >
                    Open default mail application draft ↗
                  </button>
                )}
              </div>
            )}
          </form>
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
