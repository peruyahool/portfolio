import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, BookOpen, Briefcase, Award, ArrowUpRight, CheckCircle, Database, Cpu, Sparkles, Server, Layout, HelpCircle, FileText, Users } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "AI & Automation",
    icon: Sparkles,
    skills: ["Agentic Workflows", "AI Agents", "AI Observability", "Anthropic Claude API", "AutoGen", "CrewAI", "Function Calling", "Intelligent Process Automation", "LangGraph", "Make (Integromat)", "Multi-Agent Systems", "n8n", "OpenAI API", "Pinecone", "Tool Calling", "Weaviate", "Webhook Integration", "Workflow Automation", "Zapier"]
  },
  {
    title: "LLM & Frameworks",
    icon: Cpu,
    skills: ["AI Workflow Design", "Conversational AI", "Hugging Face", "LangChain", "LlamaIndex", "Prompt Engineering", "RAG Architecture"]
  },
  {
    title: "Databases & Vector DBs",
    icon: Database,
    skills: ["ChromaDB", "Firebase", "MySQL", "PostgreSQL", "SAP IQ", "Snowflake", "SQL Server", "Supabase"]
  },
  {
    title: "Data & Analytics",
    icon: Server,
    skills: ["Data Visualization", "EDA", "Excel", "KPI Dashboards", "Power BI (DAX)", "Predictive Analytics", "Tableau"]
  },
  {
    title: "AI/ML",
    icon: Layout,
    skills: ["Deep Learning", "Hypothesis Testing", "Keras / TensorFlow", "MLOps", "NLP Preprocessing", "Regression", "Scikit-learn"]
  },
  {
    title: "Full-Stack & Dev Tools",
    icon: Cpu,
    skills: ["Docker", "FastAPI", "Git / GitHub", "React + TypeScript", "Streamlit", "Vite", "VPS Deployment"]
  },
  {
    title: "Cloud & Platforms",
    icon: Cpu,
    skills: ["Azure Fundamentals (AZ-900)", "Gemini API", "Google AI Studio", "Hadoop", "Ollama", "Open WebUI", "Spark"]
  },
  {
    title: "Soft Skills",
    icon: HelpCircle,
    skills: ["Critical Thinking", "Cross-Functional Collaboration", "Data-Driven Decision Making", "Presentation Skills", "Problem Solving"]
  }
];

export default function Journal() {
  const [activeTab, setActiveTab] = useState<"about" | "experience" | "education" | "skills" | "awards" >("experience");
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string | null>(null);

  const handlePrintResume = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>YAHOOL PERUMAL - Resume</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            body {
              font-family: 'Inter', sans-serif;
              font-size: 11px;
            }
            .section-title {
              border-bottom: 1.5px solid #1f2937;
              padding-bottom: 2px;
              margin-bottom: 8px;
              text-transform: uppercase;
              font-weight: 700;
              letter-spacing: 0.05em;
              color: #111827;
            }
            @media print {
              body { 
                color: #000; 
                background: #fff; 
                padding: 0; 
                margin: 0;
                font-size: 10.5px;
              }
              .no-print { display: none; }
              .page-break { page-break-before: always; }
            }
          </style>
        </head>
        <body class="bg-gray-100 text-gray-950 p-6 md:p-12 leading-relaxed">
          <div class="max-w-4xl mx-auto bg-white p-8 md:p-10 shadow-sm rounded-xl">
            {/* Header */}
            <div class="flex justify-between items-start border-b border-gray-300 pb-4 mb-5">
              <div>
                <h1 class="text-2xl font-bold tracking-tight text-gray-900 uppercase">YAHOOL PERUMAL</h1>
                <p class="text-sm text-gray-600 font-medium mt-0.5">AI Automation Engineer</p>
                <p class="text-xs text-gray-500 mt-1">Bangalore, Karnataka • +91 93457 34551 • peruyahool@gmail.com</p>
              </div>
              <div class="text-right text-xs text-gray-500 font-mono space-y-0.5">
                <p>LinkedIn</p>
                <p>GitHub: github.com/peruyahool</p>
                <p>Portfolio: portfolio-iota-sable-77.vercel.app</p>
              </div>
            </div>

            {/* Profile */}
            <div class="mb-5">
              <h2 class="section-title text-[11px]">Professional Summary</h2>
              <p class="text-gray-700 leading-relaxed">
                AI Automation Engineer specializing in AI agents, workflow automation, and intelligent business solutions. Proficient in building RAG applications, integrating APIs and webhooks, and developing scalable AI-powered systems using n8n, LangChain, LlamaIndex, Supabase, PostgreSQL, and modern AI platforms. Passionate about leveraging AI, analytics, and automation to streamline processes, enhance productivity, and deliver impactful real-world applications.
              </p>
            </div>

            {/* Work History */}
            <div class="mb-5">
              <h2 class="section-title text-[11px]">Work Experience</h2>
              
              <div class="mb-4">
                <div class="flex justify-between font-bold text-gray-900 text-xs">
                  <span>Tata Consultancy Services (TCS) — Analyst, Enterprise Data & Automation</span>
                  <span class="font-mono text-[11px]">06/2024 – Present</span>
                </div>
                <p class="text-xs text-gray-500 italic mt-0.5">Full-time · Bangalore</p>
                
                <div class="mt-3 space-y-3">
                  <div>
                    <h4 class="font-bold text-gray-800 text-[11px] mb-1">Data Analysis & Reporting</h4>
                    <ul class="list-disc list-outside pl-4 text-gray-700 space-y-1">
                      <li>Performed structured data analysis across SAP ERP modules using complex SQL queries to extract, transform, and interpret large datasets, enabling data-driven decision-making for operational teams.</li>
                      <li>Designed and maintained SQL-based reporting pipelines to surface business metrics, reducing ad-hoc query requests by standardising reusable report templates for stakeholders.</li>
                      <li>Analysed system logs, transaction data, and module-level records to identify patterns, anomalies, and root causes — translating raw data into actionable insights for cross-functional teams.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-bold text-gray-800 text-[11px] mb-1">Automation & Process Improvement</h4>
                    <ul class="list-disc list-outside pl-4 text-gray-700 space-y-1">
                      <li>Automated repetitive data extraction and reporting workflows using SQL scripts and scheduled jobs, eliminating manual effort and improving reporting turnaround time significantly.</li>
                      <li>Identified bottlenecks in manual data pull processes and re-engineered them into automated, repeatable pipelines — reducing analyst time spent on routine tasks and improving accuracy.</li>
                      <li>Documented and standardised automation scripts, enabling team members to self-serve reports without engineering intervention.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-bold text-gray-800 text-[11px] mb-1">AI/ML Exploration & Upskilling</h4>
                    <ul class="list-disc list-outside pl-4 text-gray-700 space-y-1">
                      <li>Independently researched and applied AI and machine learning techniques relevant to enterprise data problems including anomaly detection, NLP, and LLM-based automation — building hands-on projects alongside professional work.</li>
                      <li>Developed a strong foundation in Generative AI, RAG pipelines, and intelligent automation through self-directed study, applying concepts directly to personal projects (AI Incident Intelligence Platform, RAG Chatbot, AI Resume Analyzer).</li>
                      <li>Bridged domain knowledge of enterprise SAP data structures with modern AI tooling, positioning to drive intelligent automation in enterprise IT environments.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div class="mb-5">
              <h2 class="section-title text-[11px]">Education</h2>
              <div class="space-y-3">
                <div>
                  <div class="flex justify-between font-bold text-gray-900 text-xs">
                    <span>B.Tech — Computer Science & Engineering (Big Data Analysis)</span>
                    <span class="font-mono text-[11px]">06/2020 – 03/2024</span>
                  </div>
                  <p class="text-xs text-gray-600">SRM University, Chennai • GPA: 8.56</p>
                </div>
                <div>
                  <div class="flex justify-between font-bold text-gray-900 text-xs">
                    <span>SMBM School, Dindigul</span>
                    <span class="font-mono text-[11px]">06/2015 – 05/2020</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="page-break"></div>

            {/* Core Skills */}
            <div class="mb-5 pt-4">
              <h2 class="section-title text-[11px]">Core Skills Matrix</h2>
              <div class="grid grid-cols-2 gap-x-6 gap-y-2.5 text-gray-700">
                <div>
                  <p class="mb-1.5"><strong class="text-gray-900">AI & Automation:</strong> Agentic Workflows, AI Agents, AI Observability, Anthropic Claude API, AutoGen, CrewAI, Function Calling, Intelligent Process Automation, LangGraph, Make (Integromat), Multi-Agent Systems, n8n, OpenAI API, Pinecone, Tool Calling, Weaviate, Webhook Integration, Workflow Automation, Zapier</p>
                  <p class="mb-1.5"><strong class="text-gray-900">LLM & Frameworks:</strong> AI Workflow Design, Conversational AI, Hugging Face, LangChain, LlamaIndex, Prompt Engineering, RAG Architecture</p>
                  <p class="mb-1.5"><strong class="text-gray-900">Databases & Vector DBs:</strong> ChromaDB, Firebase, MySQL, PostgreSQL, SAP IQ, Snowflake, SQL Server, Supabase</p>
                  <p><strong class="text-gray-900">Data & Analytics:</strong> Data Visualization, EDA, Excel, KPI Dashboards, Power BI (DAX), Predictive Analytics, Tableau</p>
                </div>
                <div>
                  <p class="mb-1.5"><strong class="text-gray-900">AI/ML:</strong> Deep Learning, Hypothesis Testing, Keras / TensorFlow, MLOps, NLP Preprocessing, Regression, Scikit-learn</p>
                  <p class="mb-1.5"><strong class="text-gray-900">Full-Stack & Dev Tools:</strong> Docker, FastAPI, Git / GitHub, React + TypeScript, Streamlit, Vite, VPS Deployment</p>
                  <p class="mb-1.5"><strong class="text-gray-900">Cloud & Platforms:</strong> Azure Fundamentals (AZ-900), Gemini API, Google AI Studio, Hadoop, Ollama, Open WebUI, Spark</p>
                  <p><strong class="text-gray-900">Soft Skills:</strong> Critical Thinking, Cross-Functional Collaboration, Data-Driven Decision Making, Presentation Skills, Problem Solving</p>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div class="mb-5">
              <h2 class="section-title text-[11px]">Featured Projects</h2>
              <div class="space-y-3 text-gray-700 leading-relaxed font-light">
                <div>
                  <p class="font-bold text-gray-900 text-xs">AI-Driven Autonomous Incident Intelligence Platform — TCS Innovation Challenge <span class="text-gray-400 font-mono text-[10px]">04/2026</span></p>
                  <p class="mt-0.5">Designed and built a 5-layer autonomous incident management platform monitoring enterprise IT systems resolving incidents with minimal human intervention. Achieved 94.2% anomaly accuracy, 91.9% F1-score, and 65% MTTR reduction. Pipeline: raw log ingestion &rarr; anomaly detection &rarr; semantic similarity diagnostic &rarr; auto-remediation plan &rarr; ITSM ticket auto-creation.</p>
                </div>
                <div>
                  <p class="font-bold text-gray-900 text-xs">RAG Knowledge Chatbot — Personal Project <span class="text-gray-400 font-mono text-[10px]">05/2026 – 06/2026</span></p>
                  <p class="mt-0.5">Built a Retrieval-Augmented Generation system allowing users to upload any document and ask natural language questions — answers grounded in corporate documents with &lt;1% hallucination rate. Achieved ~1.1s latency and 92.4% retrieval recall. Full RAG lifecycle: ingestion &rarr; chunking &rarr; embedding &rarr; semantic retrieval &rarr; grounded LLM completion.</p>
                </div>
                <div>
                  <p class="font-bold text-gray-900 text-xs">AI Resume Analyzer — Personal Project <span class="text-gray-400 font-mono text-[10px]">01/2026 – 02/2026</span></p>
                  <p class="mt-0.5">Built a production-ready full-stack web app that parses uploaded resumes and generates section-by-section AI-powered feedback. Achieved &lt;2.5s response speed and 97.5% parsing accuracy.</p>
                </div>
                <div>
                  <p class="font-bold text-gray-900 text-xs">Full-Stack Automation Website — Sakithi Clinic — Personal Project <span class="text-gray-400 font-mono text-[10px]">02/2026 – 03/2026</span></p>
                  <p class="mt-0.5">Built and deployed a fully functional private clinic website solo. Implemented n8n workflows listening to Supabase database rows to route automated reminder messages, reducing booking overhead by 45%.</p>
                </div>
              </div>
            </div>

            {/* Certifications, Awards, volunteering */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
              <div>
                <h2 class="section-title text-[11px]">Certifications</h2>
                <div class="grid grid-cols-2 gap-x-3 gap-y-1 text-gray-700 text-[10px]">
                  <div>• Azure Fundamentals (AZ-900)</div>
                  <div>• Generative AI for Leaders</div>
                  <div>• Complete UX/Prompt Bootcamp</div>
                  <div>• SAP HANA Admin</div>
                  <div>• Statistics for Data Science</div>
                  <div>• Introduction to AI (IBM)</div>
                  <div>• SAP Joule for Consultants</div>
                  <div>• Process Mining (Celonis)</div>
                  <div>• Automation Explorer</div>
                  <div>• Linear Algebra for ML</div>
                  <div>• Big Data Computing</div>
                  <div>• Database foundations (Oracle)</div>
                  <div>• Python Fundamentals (Google)</div>
                </div>
              </div>
              <div>
                <h2 class="section-title text-[11px]">Awards & volunteering & Publications</h2>
                <div class="space-y-2 text-gray-700 text-[10.5px]">
                  <div>
                    <strong>• TACTICS 2026 — TCS Innovation Challenge</strong> <span class="text-gray-400 font-mono text-[9px]">(04/2026)</span>
                  </div>
                  <div>
                    <strong>• TCS AI Spark Hackathon Winner</strong> <span class="text-gray-400 font-mono text-[9px]">(08/2025)</span>
                  </div>
                  <div>
                    <strong>• Administrative Leadership Award</strong> (SRMIST) <span class="text-gray-400 font-mono text-[9px]">(05/2024)</span>
                  </div>
                  <div class="pt-1.5 border-t border-gray-150">
                    <strong>• Class Representative — SRMIST</strong> <span class="text-gray-400 font-mono text-[9px]">(01/2020 – 01/2024)</span>
                  </div>
                  <div>
                    <strong>• Secretary — Design & Innovation Club, SRMIST</strong>
                  </div>
                  <div class="pt-1.5 border-t border-gray-150 text-[10px]">
                    <strong>• Pub: Mental Health Assistant Chatbot...</strong> (05/2024)
                  </div>
                  <div class="text-[10px]">
                    <strong>• Pub: Enhancing Medical Healthcare Fraud...</strong> (10/2023)
                  </div>
                </div>
              </div>
            </div>

            {/* Print trigger CTA */}
            <div class="no-print mt-8 pt-4 border-t border-gray-200 flex justify-end">
              <button 
                onclick="window.print()" 
                class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow transition-all cursor-pointer"
              >
                Print / Save Document as PDF
              </button>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <section id="resume" className="bg-[#0a0a0a] py-20 md:py-28 text-text-primary select-none border-t border-white/5 relative overflow-hidden">
      
      {/* Visual mesh overlay matching the aesthetic */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#c084fc] blur-[130px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#38bdf8] blur-[130px] rounded-full" />
      </div>

      <div className="max-w-[1250px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div
          id="journal-header-anim"
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
                Resume & Profile
              </span>
            </div>

            {/* Heading */}
            <h2 id="journal-heading" className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-text-primary mb-4">
              Career <span className="font-display italic">trajectory</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted font-body leading-relaxed max-w-md font-light">
              An interactive overview of professional credentials, production history, and technological competencies.
            </p>

            {/* Download PDF Resume Action */}
            <div className="mt-5">
              <button
                onClick={handlePrintResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/30 hover:text-[#38bdf8] transition-all duration-300 cursor-pointer shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                Download PDF Resume ↗
              </button>
            </div>
          </div>

          {/* Tab Selection Controls (Glass Pill Slider) */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-surface/50 border border-white/5 rounded-2xl md:rounded-full max-w-full">
            {[
              { id: "experience", label: "Experience", icon: Briefcase },
              { id: "skills", label: "Skills Matrix", icon: Cpu },
              { id: "education", label: "Education & Publications", icon: BookOpen },
              { id: "awards", label: "Awards & Leadership", icon: Award },
              { id: "about", label: "In-Depth Bio", icon: Clock }
            ].map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white text-black shadow-md shadow-white/5 scale-[1.03]"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content Tabs Container */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: WORK EXPERIENCE */}
            {activeTab === "experience" && (
              <motion.div
                key="experience-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* TCS Analyst Highlight Post */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden group">
                    <div className="absolute top-[2px] left-[2px] w-[99%] h-[3px] bg-gradient-to-r from-[#38bdf8]/40 to-[#c084fc]/40 rounded-t-3xl" />
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                      <div>
                        <span className="text-[10px] bg-[#38bdf8]/10 text-[#38bdf8] px-2.5 py-1 rounded-md font-mono font-medium tracking-wider uppercase">
                          Featured Role
                        </span>
                        <h3 className="text-2xl font-display text-white italic mt-2">
                          Tata Consultancy Services (TCS)
                        </h3>
                        <p className="text-sm text-white/75 font-semibold font-body mt-1">Analyst — Enterprise Data & Automation</p>
                      </div>
                      
                      <div className="sm:text-right flex flex-col sm:items-end">
                        <span className="text-xs text-[#38bdf8] font-mono tracking-wider uppercase font-medium">
                          06/2024 – Present
                        </span>
                        <span className="text-xs text-white/40 font-body mt-1">
                          Bangalore, India
                        </span>
                      </div>
                    </div>

                    {/* Bullets List */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-semibold text-[#38bdf8] uppercase tracking-wider mb-2.5 font-mono">Data Analysis & Reporting</h4>
                        <div className="space-y-3">
                          {[
                            "Performed structured data analysis across SAP ERP modules using complex SQL queries to extract, transform, and interpret large datasets, enabling data-driven decision-making for operational teams.",
                            "Designed and maintained SQL-based reporting pipelines to surface business metrics, reducing ad-hoc query requests by standardising reusable report templates for stakeholders.",
                            "Analysed system logs, transaction data, and module-level records to identify patterns, anomalies, and root causes — translating raw data into actionable insights for cross-functional teams."
                          ].map((bullet, idx) => (
                            <div key={idx} className="flex gap-3 items-start">
                              <CheckCircle className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                              <p className="text-sm text-white/70 leading-relaxed font-light font-body">
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-[#38bdf8] uppercase tracking-wider mb-2.5 font-mono">Automation & Process Improvement</h4>
                        <div className="space-y-3">
                          {[
                            "Automated repetitive data extraction and reporting workflows using SQL scripts and scheduled jobs, eliminating manual effort and improving reporting turnaround time significantly.",
                            "Identified bottlenecks in manual data pull processes and re-engineered them into automated, repeatable pipelines — reducing analyst time spent on routine tasks and improving accuracy.",
                            "Documented and standardised automation scripts, enabling team members to self-serve reports without engineering intervention."
                          ].map((bullet, idx) => (
                            <div key={idx} className="flex gap-3 items-start">
                              <CheckCircle className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                              <p className="text-sm text-white/70 leading-relaxed font-light font-body">
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-[#38bdf8] uppercase tracking-wider mb-2.5 font-mono">AI/ML Exploration & Upskilling</h4>
                        <div className="space-y-3">
                          {[
                            "Independently researched and applied AI and machine learning techniques relevant to enterprise data problems including anomaly detection, NLP, and LLM-based automation — building hands-on projects alongside professional work.",
                            "Developed a strong foundation in Generative AI, RAG pipelines, and intelligent automation through self-directed study, applying concepts directly to personal projects (AI Incident Intelligence Platform, RAG Chatbot, AI Resume Analyzer).",
                            "Bridged domain knowledge of enterprise SAP data structures with modern AI tooling, positioning to drive intelligent automation in enterprise IT environments."
                          ].map((bullet, idx) => (
                            <div key={idx} className="flex gap-3 items-start">
                              <CheckCircle className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                              <p className="text-sm text-white/70 leading-relaxed font-light font-body">
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right panel: Career Focus Snapshot */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="bg-surface/30 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                    <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />
                    <div>
                      <h4 className="text-xs text-muted font-body uppercase tracking-[0.2em] font-medium mb-4">
                        TCS Engagement Summary
                      </h4>
                      <p className="text-sm text-white/80 font-body leading-relaxed mb-6 font-light font-body">
                        Focused on structured data analysis, reporting pipeline design, automation scripts, and AI/ML upskilling within enterprise environments. Bridged domain knowledge of SAP data structures with modern AI tooling to drive process optimization.
                      </p>

                      <div className="space-y-4 pt-4 border-t border-white/5">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/40">Division</span>
                          <span className="text-[#38bdf8] font-medium">Enterprise Data & Automation</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-white/40">Stack</span>
                          <span className="text-[#38bdf8] font-medium">SQL, Python, GenAI, n8n</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-white/40">Focus Areas</span>
                          <span className="text-[#38bdf8] font-medium">Data Reporting, Workflow Automation, AI Ops</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#38bdf8]/10 flex items-center justify-between bg-[#38bdf8]/5 p-4 rounded-2xl">
                      <span className="text-xs text-white/50 uppercase tracking-widest font-mono font-medium">Engagement Role</span>
                      <span className="text-xs text-[#38bdf8] uppercase tracking-wider font-semibold">Analyst</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: INTERACTIVE SKILLS MATRIX */}
            {activeTab === "skills" && (
              <motion.div
                key="skills-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8"
              >
                {/* Interactive filter row at top */}
                <div className="flex flex-wrap gap-2 items-center justify-start border-b border-white/5 pb-4">
                  <button
                    onClick={() => setSelectedSkillCategory(null)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                      selectedSkillCategory === null
                        ? "bg-[#c084fc] text-black shadow-md shadow-[#c084fc]/10"
                        : "bg-surface/50 text-white/60 hover:text-white"
                    }`}
                  >
                    All Categories ({SKILLS_DATA.length})
                  </button>
                  {SKILLS_DATA.map((cat) => (
                    <button
                      key={cat.title}
                      onClick={() => setSelectedSkillCategory(cat.title)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                        selectedSkillCategory === cat.title
                          ? "bg-[#c084fc] text-black shadow-md shadow-[#c084fc]/10"
                          : "bg-surface/50 text-white/60 hover:text-white"
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SKILLS_DATA.filter(
                    (cat) => selectedSkillCategory === null || cat.title === selectedSkillCategory
                  ).map((cat, idx) => {
                    const CategoryIcon = cat.icon;
                    return (
                      <motion.div
                        key={cat.title}
                        layout
                        className="bg-surface/30 border border-white/5 rounded-2xl p-6 hover:shadow-lg hover:shadow-black/50 hover:bg-surface/40 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/5">
                          <div className="w-8 h-8 rounded-full bg-[#38bdf8]/10 flex items-center justify-center">
                            <CategoryIcon className="w-4 h-4 text-[#38bdf8]" />
                          </div>
                          <h4 className="text-sm font-semibold text-white/90 font-body">{cat.title}</h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs bg-white/5 border border-white/5 text-white/80 hover:bg-white/10 hover:border-transparent rounded-lg px-2.5 py-1 transition-all duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 3: EDUCATION & PUBLICATIONS */}
            {activeTab === "education" && (
              <motion.div
                key="education-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                {/* Left Column: Academic Background Timeline */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-[#38bdf8]" />
                    <h4 className="text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-mono font-semibold">Academic Timeline</h4>
                  </div>
                  
                  <div className="flex flex-col gap-8 relative pl-6 border-l border-white/5 pb-4">
                    {/* SRM university */}
                    <div className="relative">
                      <div className="absolute left-[-31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#38bdf8] border-4 border-[#0a0a0a]" />
                      <span className="text-[10px] text-[#38bdf8] font-mono tracking-widest font-semibold uppercase">
                        B.Tech — GPA: 8.56
                      </span>
                      <h3 className="text-lg font-display text-white italic mt-1 font-medium">SRM University</h3>
                      <p className="text-xs text-white/40 font-body">Chennai, India • 06/2020 – 03/2024</p>
                      <p className="text-sm text-white/70 leading-relaxed font-light font-body mt-2">
                        Specialized in <strong className="text-white">Computer Science with Big Data Analysis</strong>. Acquired solid foundations in exploratory database modeling, predictive machine learning algorithms, and distributed analytics pipelines.
                      </p>
                    </div>

                    {/* SMBM SCHOOL */}
                    <div className="relative">
                      <div className="absolute left-[-31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#38bdf8] border-4 border-[#0a0a0a]" />
                      <span className="text-[10px] text-white/40 font-mono tracking-widest font-semibold uppercase">
                        High School Education
                      </span>
                      <h3 className="text-lg font-display text-white italic mt-1 font-medium">SMBM School</h3>
                      <p className="text-xs text-white/40 font-body">Dindigul, Tamil Nadu • 06/2015 – 05/2020</p>
                      <p className="text-sm text-white/60 leading-relaxed font-light font-body mt-2">
                        Developed high-level critical thinking, analytic reasoning, and scientific inquiry skills, launching early interests in computer logic systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Research & Publications */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-4 h-4 text-[#38bdf8]" />
                    <h4 className="text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-mono font-semibold">Research & Publications</h4>
                  </div>

                  <div className="space-y-6">
                    {/* Publication 1 */}
                    <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-colors">
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#38bdf8]/30 to-transparent" />
                      <span className="text-[10px] bg-[#38bdf8]/10 text-[#38bdf8] px-2.5 py-1 rounded-md font-mono font-medium tracking-wider uppercase">
                        10/2023
                      </span>
                      <h3 className="text-[16px] md:text-lg font-display text-white italic mt-3 leading-snug group-hover:text-[#38bdf8] transition-colors">
                        ENHANCING MEDICAL HEALTHCARE-FRAUD-ANALYSIS
                      </h3>
                      <p className="text-xs text-white/50 font-semibold font-body mt-1">
                        National conference on technology (NCTS'23)
                      </p>
                      <p className="text-sm text-white/70 font-light font-body mt-3 leading-relaxed">
                        A peer-reviewed research study focusing on developing advanced machine learning models to identify anomalies, fraudulent medical insurance claims, and billing discrepancies.
                      </p>
                    </div>

                    {/* Publication 2 */}
                    <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-colors">
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#38bdf8]/30 to-transparent" />
                      <span className="text-[10px] bg-[#38bdf8]/10 text-[#38bdf8] px-2.5 py-1 rounded-md font-mono font-medium tracking-wider uppercase">
                        05/2024
                      </span>
                      <h3 className="text-[16px] md:text-lg font-display text-white italic mt-3 leading-snug group-hover:text-[#38bdf8] transition-colors">
                        MENTAL HEALTH ASSISTANT CHATBOT USING NEURAL NETWORK TECHNIQUES
                      </h3>
                      <p className="text-xs text-white/50 font-semibold font-body mt-1">
                        International Research conference on computing technologies
                      </p>
                      <p className="text-sm text-white/70 font-light font-body mt-3 leading-relaxed">
                        Co-authored a research paper demonstrating real-time patient intent classification, custom word tokenization, padding, and response styling using specialized network frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: AWARDS & LEADERSHIP */}
            {activeTab === "awards" && (
              <motion.div
                key="awards-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                {/* Left column: Awards */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-[#38bdf8]" />
                    <h4 className="text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-mono font-semibold">Awards & Scholarships</h4>
                  </div>

                  <div className="space-y-6">
                    {/* Award 1 */}
                    <div className="glass rounded-2xl p-6 hover:border-white/10 transition-colors relative overflow-hidden">
                      <span className="text-[10px] text-[#38bdf8] font-mono tracking-wider uppercase">
                        04/2026
                      </span>
                      <h3 className="text-lg font-display text-white italic mt-1 leading-snug">TACTICS 2026</h3>
                      <p className="text-xs text-white/50 font-body">Tata Consultancy Services (TCS)</p>
                      <p className="text-sm text-white/70 font-light font-body mt-3 leading-relaxed">
                        Evaluated and honored for exceptional complex problem-solving, code refactoring logic, and system architecture strategy at TCS.
                      </p>
                    </div>

                    {/* Award 2 */}
                    <div className="glass rounded-2xl p-6 hover:border-white/10 transition-colors relative overflow-hidden">
                      <span className="text-[10px] text-[#38bdf8] font-mono tracking-wider uppercase">
                        08/2025
                      </span>
                      <h3 className="text-lg font-display text-white italic mt-1 leading-snug">TCS AI Spark Hackathon</h3>
                      <p className="text-xs text-white/50 font-body">Tata Consultancy Services (TCS)</p>
                      <p className="text-sm text-white/70 font-light font-body mt-3 leading-relaxed">
                        Earned a top recognition for developing advanced workflow automation paradigms, prompt design, and cloud database optimization tasks.
                      </p>
                    </div>

                    {/* Award 3 */}
                    <div className="glass rounded-2xl p-6 hover:border-white/10 transition-colors relative overflow-hidden">
                      <span className="text-[10px] text-[#38bdf8] font-mono tracking-wider uppercase">
                        05/2024
                      </span>
                      <h3 className="text-lg font-display text-white italic mt-1 leading-snug">Administrative Leadership Award</h3>
                      <p className="text-xs text-white/50 font-body">SRMIST</p>
                      <p className="text-sm text-white/70 font-light font-body mt-3 leading-relaxed">
                        Conferred during graduation inside SRMIST for stellar management of university fests, peer leadership, and class administration.
                      </p>

                      {/* Plaque Image */}
                      <div className="flex gap-4 items-center bg-white/5 border border-white/5 rounded-xl p-3 mt-4">
                        <img 
                          src="/award_treasure.png" 
                          alt="Administrative Leadership plaque" 
                          className="w-12 h-12 object-cover rounded-lg border border-white/10 shrink-0" 
                        />
                        <div>
                          <h5 className="text-[10px] text-[#38bdf8] font-mono uppercase tracking-wide">Linked Image</h5>
                          <p className="text-[11px] text-white/80 font-medium font-body leading-tight mt-0.5">Treasure of the CSE Department Award plaque</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column: Volunteering */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-[#38bdf8]" />
                    <h4 className="text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-mono font-semibold">Volunteering & Leadership</h4>
                  </div>

                  <div className="space-y-6">
                    {/* Role 1 */}
                    <div className="glass rounded-2xl p-6 hover:border-white/10 transition-colors relative overflow-hidden">
                      <span className="text-[10px] text-[#38bdf8] font-mono tracking-wider uppercase">
                        03/2020 - 05/2024
                      </span>
                      <h3 className="text-lg font-display text-white italic mt-1 leading-snug">Class Representative</h3>
                      <p className="text-xs text-white/50 font-body">SRMIST</p>
                      <p className="text-sm text-white/70 font-light font-body mt-3 leading-relaxed">
                        Served as key administrative bridge between SRM department faculty and a cohort of 70+ students, arranging tutoring blocks, organizing events, and smoothing academic operations.
                      </p>
                    </div>

                    {/* Role 2 */}
                    <div className="glass rounded-2xl p-6 hover:border-white/10 transition-colors relative overflow-hidden">
                      <span className="text-[10px] text-[#38bdf8] font-mono tracking-wider uppercase">
                        Active Term
                      </span>
                      <h3 className="text-lg font-display text-white italic mt-1 leading-snug">Secretary, Design and Innovation Club SRMIST</h3>
                      <p className="text-xs text-white/50 font-body">SRMIST</p>
                      <p className="text-sm text-white/70 font-light font-body mt-3 leading-relaxed">
                        Elected as Secretary to drive digital media sprints, manage budgets, execute designer meetings, and handle critical organizational decisions for the university club.
                      </p>

                      {/* Certificate Image */}
                      <div className="flex gap-4 items-center bg-white/5 border border-white/5 rounded-xl p-3 mt-4">
                        <img 
                          src="/secretary_di_club.png" 
                          alt="Design & Innovation Club certificate" 
                          className="w-12 h-12 object-cover rounded-lg border border-white/10 shrink-0" 
                        />
                        <div>
                          <h5 className="text-[10px] text-[#38bdf8] font-mono uppercase tracking-wide">Linked Image</h5>
                          <p className="text-[11px] text-white/80 font-medium font-body leading-tight mt-0.5">Secretary of the DI Club Farewell accolade</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: EXTENSIVE MASTER BIOGRAPHY */}
            {activeTab === "about" && (
              <motion.div
                key="about-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto flex flex-col gap-6"
              >
                <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#38bdf8] to-[#c084fc] opacity-50" />
                  
                  <div className="space-y-6 text-sm md:text-base text-white/70 leading-relaxed font-light font-body">
                    <p>
                      Passionate AI Automation Engineer and Big Data enthusiast focused on building intelligent workflows, AI-powered applications, and scalable automation systems. Experienced in developing automation solutions, AI agents, and RAG-based applications using modern frameworks and platforms such as{" "}
                      <a href="https://n8n.io?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">n8n <ArrowUpRight className="w-3 h-3" /></a>,{" "}
                      <a href="https://zapier.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">Zapier <ArrowUpRight className="w-3 h-3" /></a>,{" "}
                      <a href="https://www.make.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">Make <ArrowUpRight className="w-3 h-3" /></a>,{" "}
                      <a href="https://www.langchain.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">LangChain <ArrowUpRight className="w-3 h-3" /></a>,{" "}
                      <a href="https://www.llamaindex.ai?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">LlamaIndex <ArrowUpRight className="w-3 h-3" /></a>,{" "}
                      <a href="https://huggingface.co?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">Hugging Face <ArrowUpRight className="w-3 h-3" /></a>, and{" "}
                      <a href="https://streamlit.io?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">Streamlit <ArrowUpRight className="w-3 h-3" /></a>.
                    </p>

                    <p>
                      Skilled in integrating APIs, webhooks, AI models, vector databases, and cloud-based services to create end-to-end intelligent automation workflows. Hands-on experience with platforms and databases including{" "}
                      <a href="https://supabase.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">Supabase <ArrowUpRight className="w-3 h-3" /></a>,{" "}
                      <a href="https://www.trychroma.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">ChromaDB <ArrowUpRight className="w-3 h-3" /></a>,{" "}
                      <a href="https://firebase.google.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">Firebase <ArrowUpRight className="w-3 h-3" /></a>, PostgreSQL, and workflow orchestration tools. Familiar with AI development concepts such as multi-agent systems, prompt engineering, AI copilots, conversational AI, document processing pipelines, and AI-driven business automation.
                    </p>

                    <p>
                      Actively exploring and working with modern AI ecosystems and developer tools including{" "}
                      <a href="https://github.com/features/copilot?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">GitHub Copilot <ArrowUpRight className="w-3 h-3" /></a>,{" "}
                      <a href="https://claude.ai?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">Claude <ArrowUpRight className="w-3 h-3" /></a>,{" "}
                      <a href="https://gemini.google.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">Gemini <ArrowUpRight className="w-3 h-3" /></a>,{" "}
                      <a href="https://aistudio.google.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium inline-flex items-center gap-0.5">Google AI Studio <ArrowUpRight className="w-3 h-3" /></a>, Ollama, Open WebUI, vector databases, Docker, REST APIs, JSON workflows, and VPS deployments to build practical AI-powered solutions.
                    </p>

                    <p className="border-t border-white/5 pt-4 text-white/90 font-medium">
                      Passionate about leveraging AI and automation to simplify complex workflows, improve productivity, and develop innovative real-world applications that combine artificial intelligence, analytics, and intelligent process automation.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
