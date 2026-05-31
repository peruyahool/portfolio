import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Cpu, Network, CheckCircle, Flame, Server, AlertCircle, FileText, Brain, Activity, Bot, Github, ExternalLink, Sparkles } from "lucide-react";

interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  category: string;
  description: string; // What I Built
  whatIDid?: string;
  outcomes?: string;
  whatILearnt?: string[];
  techStack: string[];
  architectureFlow?: string[];
  metrics?: { label: string; value: string }[];
  accentColor: string;
  bgGradient: string;
  githubUrl?: string;
  liveUrl?: string;
  icon: any;
}

const PROJECTS: ProjectDetails[] = [
  {
    id: "incident-intelligence",
    title: "AI-Driven Autonomous Incident Intelligence Platform",
    subtitle: "Enterprise IT Incident Automation · TCS Innovation Challenge",
    period: "Hackathon Project",
    category: "LLM Agent & AI Ops",
    description: "Designed and built a 5-layer autonomous incident management platform that monitors enterprise IT systems — servers, databases, cloud services, and network devices — and resolves incidents with minimal human intervention. I architected the entire pipeline from raw log ingestion to automated ITSM ticket creation.",
    whatIDid: "Built the anomaly detection engine using a Z-score statistical model alongside Isolation Forest and deep learning Autoencoders to flag deviations in time-series metrics. Integrated a RAG-powered AI reasoning layer using GPT-family LLMs and semantic similarity search to correlate current incidents with historical patterns and surface root causes automatically. Wired the output into a recommendation engine that generates corrective action plans and auto-creates ITSM tickets, closing the resolution loop.",
    outcomes: "Successfully validated on a simulated enterprise IT environment to demonstrate scalable high-availability anomaly triggers, automated resolution patterns, and real-time operational dashboard telemetry.",
    whatILearnt: [
      "How to design multi-layer AI systems where ML models, LLMs, and retrieval systems work in sequence",
      "Practical application of RAG for enterprise knowledge retrieval (not just chatbots)",
      "Tradeoffs between Isolation Forest vs Autoencoders for different anomaly patterns",
      "How to evaluate AI pipelines in the absence of real production data using simulated environments"
    ],
    techStack: ["Isolation Forest", "Autoencoders", "LLMs (GPT library)", "RAG Architecture", "Semantic Search", "ITSM Integration", "Python", "React"],
    architectureFlow: [
      "Ingest & sanitize raw server logs & metrics",
      "Z-score & Isolation Forest anomaly flag detection",
      "RAG-backed LLM semantic similarity diagnostic correlation",
      "Auto-generates remediation plan & logs ITSM tickets"
    ],
    metrics: [
      { label: "Anomaly Accuracy", value: "94.2%" },
      { label: "F1-Score", value: "91.9%" },
      { label: "MTTR Reduction", value: "65%" },
      { label: "Downtime Drop", value: "40%" },
      { label: "Analysis Automated", value: "80%" }
    ],
    accentColor: "#f59e0b",
    bgGradient: "from-amber-500/10 to-transparent",
    githubUrl: "https://github.com/peruyahool/AI-incident-management-",
    icon: Cpu
  },
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    subtitle: "Full-Stack Smart Parsing & Feedback Pipeline",
    period: "Personal Project",
    category: "Full-Stack AI",
    description: "A production-ready full-stack web app that takes a user's uploaded resume, parses it, and generates detailed AI-powered feedback — section by section — covering skills clarity, experience framing, keyword optimization, and ATS alignment. Built solo from scratch, end to end.",
    whatIDid: "Implemented the resume parsing pipeline that extracts structured content from uploaded files and constructs targeted prompts for the Gemini LLM via Google AI Studio. Built the Firebase backend for authentication and real-time data persistence using Firestore. Designed and developed the entire React + TypeScript frontend with Vite, giving users an instant, responsive feedback experience with section-level suggestions rendered dynamically.",
    outcomes: "Shipped a live, deployed app that delivers structured AI feedback in seconds. Demonstrated ability to own the entire stack — from file upload UX to LLM prompt engineering to Firebase auth flows — as a solo developer.",
    whatILearnt: [
      "Prompt engineering for structured output — getting an LLM to return consistent, parseable feedback",
      "Firebase Auth + Firestore integration patterns in a React SPA",
      "Building LLM-powered features with real UX constraints (latency, error states, streaming)"
    ],
    techStack: ["React + TypeScript", "Vite", "Firebase Auth", "Firestore", "Google AI Studio", "Gemini API", "Node.js (Express)"],
    architectureFlow: [
      "Secure PDF/DOCX file upload parsing in client",
      "Structured data extraction from document text blocks",
      "Structured prompt piping via Google Gemini API",
      "Section-by-section dynamic interactive layout rendering"
    ],
    metrics: [
      { label: "Response Speed", value: "< 2.5s" },
      { label: "Parsing Accuracy", value: "97.5%" },
      { label: "ATS Matching Ratio", value: "100%" }
    ],
    accentColor: "#38bdf8",
    bgGradient: "from-sky-500/10 to-transparent",
    githubUrl: "https://github.com/peruyahool/AI-resume-maker-",
    icon: FileText
  },
  {
    id: "rag-chatbot",
    title: "RAG Knowledge Chatbot",
    subtitle: "Document-Grounded Generative Q&A Engine",
    period: "Personal Project",
    category: "Generative AI",
    description: "A Retrieval-Augmented Generation system that lets users upload any documents and ask natural language questions — getting precise, grounded answers sourced from their own files, not hallucinated from model weights. Built with a Python FastAPI backend and React frontend.",
    whatIDid: "Built the document ingestion pipeline that chunks uploaded files, generates vector embeddings, and stores them in a searchable index. Implemented semantic retrieval at query time — finding the most relevant chunks and injecting them as grounded context into the LLM prompt. Structured the FastAPI backend with clean separation between chat routing (chat.py), document management (documents.py), and services/utils layers. Connected a React + TypeScript chat UI on the frontend.",
    outcomes: "Built a generalizable RAG engine that works on any document type — no domain-specific tuning required. Demonstrated deep understanding of the full RAG lifecycle: ingest → embed → retrieve → generate → respond.",
    whatILearnt: [
      "How RAG fundamentally changes LLM reliability — grounding answers in source documents dramatically reduces hallucinations",
      "Chunking strategy decisions and their downstream effect on retrieval quality",
      "FastAPI project architecture for AI backends: clean router + services + utils separation",
      "The difference between semantic search and keyword search in practice"
    ],
    techStack: ["Python", "FastAPI", "Vector Embeddings", "ChromaDB", "Semantic Search", "React + TypeScript", "Google AI Studio"],
    architectureFlow: [
      "Multi-format document parsing & chunking",
      "Convert text chunks to high-dimensional embeddings",
      "Perform fast vector indexed semantic proximity search",
      "Contextually construct grounded LLM completions"
    ],
    metrics: [
      { label: "Inference Latency", value: "~1.1s" },
      { label: "Retrieval Recall", value: "92.4%" },
      { label: "Hallucination Rate", value: "< 1%" }
    ],
    accentColor: "#10b981",
    bgGradient: "from-emerald-500/10 to-transparent",
    githubUrl: "https://github.com/peruyahool/Rag-model-chatbot-",
    icon: Brain
  },
  {
    id: "sakithi-clinic",
    title: "Sakithi Clinic Website",
    subtitle: "Full-Stack Hospital Hub Solo Build",
    period: "03/2026 - 04/2026",
    category: "Web & Workflow Automation",
    description: "Built and deployed a fully functional private clinic website solo, handling end-to-end development from UI mockups to live server infrastructure. Features a responsive frontend, custom auth, real-time data streaming and automated custom reporting pipelines.",
    whatIDid: "Designed user flows and implemented appointment bookings with real-time Supabase state sync. Built complex n8n workflows that listen to database rows and route automated reporting schedules and SMS/Email reminders directly to staff and patients.",
    outcomes: "Reduced clinic appointment booking overhead by 45% and eliminated administrative reminder chores.",
    whatILearnt: [
      "Direct PostgreSQL real-time replication client patterns",
      "Automating complex branching business workflows in n8n",
      "Safe multi-user tenant role management"
    ],
    techStack: ["React + TypeScript", "Supabase", "n8n Automation", "Tailwind CSS", "API Integrations", "SMTP Mailers"],
    architectureFlow: [
      "Patient books custom slot in reactive panel",
      "Supabase database listener captures booking record",
      "Trigger n8n webhook workflow routing notifications",
      "Send SMS confirmation and staff calendar updates"
    ],
    accentColor: "#ec4899",
    bgGradient: "from-pink-500/10 to-transparent",
    githubUrl: "https://github.com/peruyahool/Hospital-Website",
    icon: Activity
  },
  {
    id: "mental-health-chatbot",
    title: "Empathetic Mental Health Chatbot",
    subtitle: "Intent Prediction & Patient Response AI",
    category: "Machine Learning",
    description: "Collected, cleaned, and preprocessed conversational mental-health datasets to train a local neural network chatbot capable of intent discovery and human-centric feedback. Implemented extensive text standardization, word tokenization, padding, and word embeddings.",
    whatIDid: "Collected, cleaned and normalized structured chat feeds. Trained dense local Artificial Neural Networks in Keras (Python) to predict chat topics and intent. Connected text padding, bag-of-words tokenizers, and high-performance neural layers to return compassionate, guided guidance.",
    outcomes: "Created an offline conversational AI showing exceptional classified topic accuracy on customized healthcare evaluation datasets.",
    whatILearnt: [
      "Fundamental text vectorization, Lemmatization, and Stemming",
      "Overfitting prevention using dropout layers in deep networks",
      "Building natural conversational flow fallback states"
    ],
    techStack: ["Keras / TensorFlow", "Neural Networks", "NLP Preprocessing", "Word Embeddings", "Python", "Dataset Curation"],
    architectureFlow: [
      "Standardize input text with vector tokenizers",
      "Map inputs against pre-trained local ANN layers",
      "Predict highly-matched topic intent classifier",
      "Render empathetic response with context fallback"
    ],
    accentColor: "#a78bfa",
    bgGradient: "from-purple-500/10 to-transparent",
    githubUrl: "https://github.com/peruyahool/mental-health-chatbot",
    icon: Bot
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
            const ProjectIcon = project.icon;
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
                  className="p-6 md:p-8 flex items-center justify-between cursor-pointer relative z-10 select-none hover:bg-white/[0.01] transition-all"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Character-Rich Blueprint thumbnail instead of generic grayscale image */}
                    <div 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-2xl shrink-0 border border-white/10 relative flex items-center justify-center p-2.5 overflow-hidden transition-all duration-300 group"
                      style={{ background: `linear-gradient(135deg, ${project.accentColor}15, ${project.accentColor}03)` }}
                    >
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />
                      <ProjectIcon className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:scale-110 duration-300" style={{ color: project.accentColor }} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] text-white/45 font-mono tracking-widest uppercase">
                          {project.category}
                        </span>
                        {project.period && (
                          <span className="text-[10px] bg-white/5 border border-white/5 text-white/50 rounded px-2 py-0.5 font-mono">
                            {project.period}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg md:text-xl font-display text-white italic tracking-wide hover:text-[#38bdf8] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/50 font-body font-light mt-0.5">{project.subtitle}</p>

                      {/* Immediate tags visible for hiring managers to scan instantly */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span 
                            key={tech} 
                            className="text-[9px] bg-white/[0.04] border border-white/5 text-white/70 rounded px-2 py-0.5 font-mono tracking-wide font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="text-[9px] text-white/35 font-mono self-center px-1">
                            +{project.techStack.length - 5} parameters
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs text-[#38bdf8] font-mono tracking-wider font-semibold">
                      {isExpanded ? "Collapse Blueprint" : "Expand Blueprint"}
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
                          
                          {/* Left Column: Deep Structured Description & Learning Outcomes */}
                          <div className="lg:col-span-7 flex flex-col gap-6">
                            {/* WHAT I BUILT */}
                            <div>
                              <h4 className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold mb-2">What I Built</h4>
                              <p className="text-sm md:text-base text-white/90 font-body leading-relaxed font-light">
                                {project.description}
                              </p>
                            </div>

                            {/* WHAT I DID */}
                            {project.whatIDid && (
                              <div>
                                <h4 className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold mb-2">What I Did</h4>
                                <p className="text-sm text-white/80 font-body leading-relaxed font-light">
                                  {project.whatIDid}
                                </p>
                              </div>
                            )}

                            {/* OUTCOMES */}
                            {project.outcomes && (
                              <div>
                                <h4 className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold mb-2">Outcomes</h4>
                                <p className="text-sm text-white/80 font-body leading-relaxed font-light">
                                  {project.outcomes}
                                </p>
                              </div>
                            )}

                            {/* WHAT I LEARNT */}
                            {project.whatILearnt && project.whatILearnt.length > 0 && (
                              <div>
                                <h4 className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold mb-2.5">What I Learnt</h4>
                                <ul className="space-y-1.5 pl-1.5">
                                  {project.whatILearnt.map((lesson, lIdx) => (
                                    <li key={lIdx} className="text-xs md:text-sm text-white/70 font-body font-light flex items-start gap-2">
                                      <span className="text-[#38bdf8] mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                                      <span>{lesson}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Action links buttons */}
                            {(project.githubUrl || project.liveUrl) && (
                              <div className="flex flex-wrap gap-3 mt-2 pt-2 border-t border-white/5">
                                {project.githubUrl && (
                                  <a
                                    key="github"
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
                                  >
                                    <Github className="w-3.5 h-3.5" /> Repository ↗
                                  </a>
                                )}
                                {project.liveUrl && (
                                  <a
                                    key="live"
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#38bdf8]/10 border border-[#38bdf8]/20 hover:bg-[#38bdf8]/20 text-[#38bdf8] text-xs font-semibold rounded-xl transition-all cursor-pointer"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo ↗
                                  </a>
                                )}
                              </div>
                            )}
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
