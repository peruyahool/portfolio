import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, Cpu, Network, CheckCircle, Flame, Server, AlertCircle } from "lucide-react";

interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  category: string;
  description: string;
  techStack: string[];
  architectureFlow?: string[];
  metrics?: { label: string; value: string }[];
  accentColor: string;
  imageUrl: string;
  bgGradient: string;
}

const PROJECTS: ProjectDetails[] = [
  {
    id: "incident-intelligence",
    title: "AI-Driven Autonomous Incident Intelligence Platform",
    subtitle: "Enterprise IT Incident Automation",
    period: "Hackathon Project",
    category: "LLM Agent & AI Ops",
    description: "An end-to-end autonomous incident management platform designed for enterprise IT environments. The system ingests logs and metrics from servers, applications, databases, network devices, and cloud services via a monitoring layer. A 5-layer architecture covers data ingestion, anomaly detection, AI reasoning, and automated resolution.",
    techStack: ["Isolation Forest", "Autoencoders", "LLMs (GPT family)", "RAG (Retrieval-Augmented)", "Semantic Search", "ITSM Integration", "Cloud-native"],
    architectureFlow: ["Ingest raw metrics & logs", "Z-score / Isolation Forest anomaly flag", "LLM reasoning + semantic similarity search", "ITSM auto-ticket generation & resolution"],
    metrics: [
      { label: "F1-Score", value: "91.9%" },
      { label: "Anomaly Accuracy", value: "94.2%" },
      { label: "MTTR Reduction", value: "65%" },
      { label: "Analysis Automated", value: "80%" },
      { label: "Downtime Prevented", value: "44%" }
    ],
    accentColor: "#F59E0B",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    bgGradient: "from-amber-500/10 to-transparent"
  },
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    subtitle: "Full-Stack Smart Parsing & Feedback Pipeline",
    period: "Personal Project",
    category: "Full-Stack AI",
    description: "A full-stack AI-powered web application that parses uploaded resumes and delivers structured, actionable feedback using large language models. Users upload their resume in PDF/DOCX format, which is processed and piped into a custom LLM pipeline. The model evaluates content, skills clarity, ATS alignment, and returns detailed suggestions.",
    techStack: ["React + TypeScript", "Vite", "Firebase Auth", "Firestore", "Google AI Studio", "Gemini API", "Node.js Server"],
    architectureFlow: ["Resume upload (PDF/DOCX)", "Text parsing & sanitization", "Gemini LLM evaluation pipeline", "Structured interactive feedback UI"],
    accentColor: "#3B82F6",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    bgGradient: "from-blue-500/10 to-transparent"
  },
  {
    id: "rag-chatbot",
    title: "RAG Knowledge Chatbot",
    subtitle: "Document-Grounded Generative Q&A Engine",
    period: "Personal Project",
    category: "Generative AI",
    description: "A document-aware conversational AI system built on Retrieval-Augmented Generation (RAG). Users upload any documents which are automatically chunked, embedded, and stored in a vector index. At query time, the system retrieves semantically relevant text fragments and injects them as immediate context to formulate grounded answers.",
    techStack: ["Python", "FastAPI", "RAG Pipeline", "Vector Embeddings", "Semantic Search", "React + TypeScript", "Google AI Studio"],
    architectureFlow: ["Doc upload (.pdf, .txt)", "Recursive chunking & embedding", "Vector store indexing", "Semantic similarity search retrieval", "Grounded LLM context response"],
    accentColor: "#10B981",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    bgGradient: "from-emerald-500/10 to-transparent"
  },
  {
    id: "sakithi-clinic",
    title: "Sakithi Clinic Website",
    subtitle: "Full-Stack Hospital Hub Solo Build",
    period: "03/2026 - 04/2026",
    category: "Web & Workflow Automation",
    description: "Built and deployed a fully functional private clinic website solo, handling end-to-end development from UI mockups to live server infrastructure. Features a responsive frontend, custom auth, real-time data streaming and automated custom reporting pipelines.",
    techStack: ["Vite", "React + TypeScript", "Supabase", "Real-time Data", "n8n Workflows", "API Routing", "Netlify Deployment"],
    architectureFlow: ["Patient booking / form entry", "Real-time data synchronization with Supabase", "n8n automated notification routing", "Netlify continuous deployment loop"],
    accentColor: "#EC4899",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    bgGradient: "from-pink-500/10 to-transparent"
  },
  {
    id: "mental-health-chatbot",
    title: "Empathetic Mental Health Chatbot",
    subtitle: "Intent Prediction & Patient Response AI",
    category: "Machine Learning",
    description: "Collected, cleaned, and preprocessed conversational mental-health datasets to train a local neural network chatbot capable of intent discovery and human-centric feedback. Implemented extensive text standardization, word tokenization, padding, and word embeddings.",
    techStack: ["Artificial Neural Networks (ANN)", "Text Preprocessing", "Word Embeddings", "Tokenization & Padding", "Python / Keras", "Custom Dataset Cleaning"],
    architectureFlow: ["Raw chat dataset preprocessing", "Tokenization & custom word padding", "ANN model training & fitting", "Intent-driven conversational loop"],
    accentColor: "#8B5CF6",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    bgGradient: "from-purple-500/10 to-transparent"
  }
];

export default function SelectedWorks() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>("incident-intelligence");

  const toggleProject = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="bg-[#0a0a0a] py-20 md:py-28 text-text-primary select-none">
      <div className="max-w-[1250px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div
          id="works-header-anim"
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-body font-medium">
                Production Artifacts
              </span>
            </div>

            {/* Heading */}
            <h2 id="works-main-heading" className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-text-primary mb-4">
              Featured <span className="font-display italic">projects</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted font-body leading-relaxed max-w-md font-light">
              Deep research systems, full-stack AI orchestrations, and high-performance workflow agents.
            </p>
          </div>

          <span className="text-xs text-white/50 font-mono tracking-wider font-light">
            Interactive Project Blueprint View
          </span>
        </motion.div>

        {/* Stack of Expanding Project Cards */}
        <div id="project-stack" className="flex flex-col gap-6">
          {PROJECTS.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <motion.div
                key={project.id}
                id={`project-row-${project.id}`}
                className={`glass rounded-3xl border border-white/5 transition-all duration-300 overflow-hidden relative ${
                  isExpanded ? "ring-1 ring-white/10" : "hover:border-white/10"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                {/* Embedded halo background light on expand */}
                {isExpanded && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-40 pointer-events-none z-0`} />
                )}

                {/* Header Strip - Clickable Trigger */}
                <div
                  onClick={() => toggleProject(project.id)}
                  className="p-6 md:p-8 flex items-center justify-between cursor-pointer relative z-10 select-none hover:bg-white/[0.01] transition-colors"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Micro Photo */}
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden shrink-0 border border-white/10 relative">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">
                          {project.category}
                        </span>
                        {project.period && (
                          <span className="text-[10px] bg-white/5 border border-white/5 text-white/50 rounded px-2 py-0.5 font-mono">
                            {project.period}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg md:text-xl font-display text-white italic tracking-wide group-hover:text-[#38bdf8] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/50 font-body font-light mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs text-[#38bdf8] font-mono tracking-wider font-medium">
                      {isExpanded ? "Collapse Blueprint" : "Expand Details"}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-white/5 flex items-center justify-center transition-transform duration-300 bg-surface/40 ${
                      isExpanded ? "rotate-180" : ""
                    }`}>
                      <ChevronDown className="w-4 h-4 text-white/60" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Section */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`expanded-content-${project.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="relative z-10 overflow-hidden"
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                          
                          {/* Left Column: Deep Description & Tech Stack */}
                          <div className="lg:col-span-7 flex flex-col gap-6">
                            <div>
                              <h4 className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold mb-2">Project Abstract</h4>
                              <p className="text-sm md:text-base text-white/70 font-body leading-relaxed font-light">
                                {project.description}
                              </p>
                            </div>

                            {/* Tech Stack Chips Wrapper */}
                            <div>
                              <h4 className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold mb-3">Technologies Leveraged</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-xs bg-white/5 border border-white/5 text-white/80 rounded-lg px-3 py-1 font-body font-medium hover:border-[#38bdf8]/40 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column: Architecture pipeline visual / metrics */}
                          <div className="lg:col-span-5 flex flex-col gap-6 justify-between bg-black/30 p-5 rounded-2xl border border-white/5">
                            
                            {/* Performance metrics inside bento-grid if present */}
                            {project.metrics && (
                              <div>
                                <h4 className="text-xs text-[#38bdf8]/70 uppercase tracking-widest font-mono font-semibold mb-3 flex items-center gap-1">
                                  <Flame className="w-3.5 h-3.5" /> Checked Metrics
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                  {project.metrics.map((metric) => (
                                    <div key={metric.label} className="bg-white/5 rounded-xl p-3 border border-white/5 relative">
                                      <span className="text-[10px] text-white/40 font-body block uppercase leading-tight">{metric.label}</span>
                                      <span className="text-lg md:text-xl font-display font-bold italic mt-1 block text-white">{metric.value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Architecture Flow Step Indicator */}
                            {project.architectureFlow && (
                              <div className={project.metrics ? "mt-4 pt-4 border-t border-white/5" : ""}>
                                <h4 className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold mb-3.5 flex items-center gap-1">
                                  <Network className="w-3.5 h-3.5" /> Pipeline Architecture Flow
                                </h4>
                                <div className="flex flex-col gap-3 relative pl-3 border-l border-white/10 ml-1.5">
                                  {project.architectureFlow.map((step, sIdx) => (
                                    <div key={sIdx} className="relative flex items-start gap-3">
                                      {/* Indicator bullet */}
                                      <div className="absolute left-[-17.5px] top-1.5 w-2 h-2 rounded-full bg-[#38bdf8]" />
                                      <div>
                                        <span className="text-[10px] text-white/30 uppercase font-mono tracking-wider">Step 0{sIdx + 1}</span>
                                        <p className="text-xs text-white/85 font-mono leading-relaxed mt-0.5">{step}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
