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
    skills: ["AI Automation", "AI Agents", "Workflow Automation", "Prompt Engineering", "RAG Applications", "Conversational AI", "Multi-Agent Systems", "Intelligent Process Automation", "AI Workflow Design"]
  },
  {
    title: "Automation Tools & Frameworks",
    icon: Cpu,
    skills: ["n8n", "Zapier", "Make (Integromat)", "LangChain", "LlamaIndex", "Hugging Face", "Streamlit", "Ollama", "Open WebUI", "Google AI Studio", "GitHub Copilot", "Claude", "Gemini"]
  },
  {
    title: "Databases & Vector Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQL Server", "SAP IQ", "Firebase", "Supabase", "ChromaDB", "Snowflake"]
  },
  {
    title: "Data & Backend Technologies",
    icon: Server,
    skills: ["SQL", "APIs", "Webhooks", "JSON", "ETL Pipelines", "Data Cleaning", "Data Transformation", "Data Modeling", "Workflow Integration", "Backend Automation"]
  },
  {
    title: "AI/ML & Analytics",
    icon: Layout,
    skills: ["Machine Learning Basics", "Predictive Analytics", "Deep Learning Fundamentals", "Exploratory Data Analysis (EDA)", "KPI Dashboards", "Data Visualization", "Prompt Optimization"]
  },
  {
    title: "Cloud & Dev Tools",
    icon: Cpu,
    skills: ["Docker", "Git / GitHub", "VPS Deployment", "Azure Fundamentals", "Hadoop", "Spark", "Power BI", "Tableau", "Excel", "Python (Pandas, NumPy, Matplotlib)"]
  },
  {
    title: "Soft Skills",
    icon: HelpCircle,
    skills: ["Problem Solving", "Critical Thinking", "Cross-Functional Collaboration", "Leadership", "Communication", "Time Management", "Presentation Skills", "Data-Driven Decision Making"]
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
          <title>Yahool Perumal - Resume</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            @media print {
              body { color: #000; background: #fff; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body class="bg-white text-gray-950 p-10 font-sans leading-relaxed">
          <div class="max-w-4xl mx-auto border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div class="flex justify-between items-start border-b border-gray-300 pb-5 mb-6">
              <div>
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">Yahool Perumal</h1>
                <p class="text-gray-500 font-medium mt-1">AI & Full-Stack Engineer — TCS, Bangalore</p>
                <p class="text-sm text-gray-400 mt-0.5">Bangalore, Karnataka, India</p>
              </div>
              <div class="text-right text-sm text-gray-500">
                <p>peruyahool@gmail.com</p>
                <p>+91 93457 34551</p>
                <p class="mt-1 font-mono text-xs">peruyahool.github.io</p>
              </div>
            </div>

            {/* Profile */}
            <div class="mb-6">
              <h2 class="text-xs font-bold text-gray-900 border-b-2 border-gray-800 pb-1 mb-3 uppercase tracking-wider">Professional Summary</h2>
              <p class="text-sm text-gray-750">
                Highly capable AI & Full-Stack Automation Engineer with deep expertise in designing multi-agent workflows, Retrieval-Augmented Generation (RAG) loops, and high-volume analytical database processing systems. Specialized in SAP IQ, SQL optimizations, and direct platform automations using n8n, Supabase, and custom AI reasoning applications.
              </p>
            </div>

            {/* Work History */}
            <div class="mb-6">
              <h2 class="text-xs font-bold text-gray-900 border-b-2 border-gray-800 pb-1 mb-3 uppercase tracking-wider">Work Experience</h2>
              
              <div class="mb-4">
                <div class="flex justify-between font-medium text-gray-900">
                  <span class="font-bold text-sm">Analyst, Enterprise Data & Automation</span>
                  <span>Apr 2026 – Present</span>
                </div>
                <p class="text-xs text-gray-500 italic">Tata Consultancy Services (TCS) • Bangalore, India</p>
                <ul class="list-disc list-outside pl-4 mt-2 text-xs text-gray-700 space-y-1">
                  <li>Optimized and analyzed high-volume SQL workloads in SAP IQ columnar databases for enterprise-scale analytics and reporting.</li>
                  <li>Performed query tuning, execution plan analysis, and database performance monitoring to improve system efficiency.</li>
                  <li>Investigated production issues through log analysis, data validation, and root-cause troubleshooting.</li>
                  <li>Worked extensively with structured datasets, SQL procedures, and JSON-based data flows to support analytical pipelines.</li>
                  <li>Managed database health reliability, resolving incident anomalies across enterprise-scale operational environments.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div class="mb-6">
              <h2 class="text-xs font-bold text-gray-900 border-b-2 border-gray-800 pb-1 mb-3 uppercase tracking-wider">Education</h2>
              <div>
                <div class="flex justify-between font-medium text-gray-900">
                  <span class="font-bold text-sm">B.Tech in Computer Science (Big Data Analysis)</span>
                  <span>2020 – 2024</span>
                </div>
                <p class="text-xs text-gray-500">SRM University • GPA: 8.56</p>
              </div>
            </div>

            {/* Core Skills */}
            <div class="mb-6">
              <h2 class="text-xs font-bold text-gray-900 border-b-2 border-gray-800 pb-1 mb-3 uppercase tracking-wider">Core Skills Matrix</h2>
              <div class="grid grid-cols-2 gap-4 text-xs text-gray-750">
                <div>
                  <p><strong>AI & Automation:</strong> LLM Prompts, RAG, Multi-Agent pipelines, n8n, Zapier, Make</p>
                  <p class="mt-1"><strong>Databases:</strong> PostgreSQL, SAP IQ, Supabase, Firestore, vector indices (ChromaDB)</p>
                </div>
                <div>
                  <p><strong>Languages & Dev:</strong> Python, SQL, TypeScript/React, API/Webhooks, Docker, Git</p>
                  <p class="mt-1"><strong>Soft Skills:</strong> Complex problem solving, Agile team coordination, Technical leadership</p>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 class="text-xs font-bold text-gray-900 border-b-2 border-gray-800 pb-1 mb-3 uppercase tracking-wider">Featured Projects</h2>
              <div class="text-xs text-gray-750 space-y-3">
                <div>
                  <p class="font-bold text-gray-900 text-sm">AI-Driven Autonomous IT Incident Platform (TCS Hackathon Prize Winner)</p>
                  <p class="mt-0.5">Built a 5-layer anomaly detection and automatic remediation system reducing MTTR by 65% and automated analysis by 80%.</p>
                </div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">AI Resume Analyzer (Solo Project)</p>
                  <p class="mt-0.5">A full-stack parsing and evaluation feedback ecosystem built from scratch using Gemini LLM, React, and Firebase.</p>
                </div>
              </div>
            </div>

            {/* Print trigger CTA */}
            <div class="no-print mt-10 pt-4 border-t border-gray-200 flex justify-end">
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
                          Apr 2026 – Present
                        </span>
                        <span className="text-xs text-white/40 font-body mt-1">
                          Bangalore, India
                        </span>
                      </div>
                    </div>

                    {/* Bullets List */}
                    <div className="space-y-4">
                      {[
                        "Optimized and analyzed high-volume SQL workloads in SAP IQ columnar databases for enterprise-scale analytics and reporting",
                        "Performed query tuning, execution plan analysis, and database performance monitoring to improve system efficiency and response time",
                        "Investigated production issues through log analysis, data validation, and root-cause troubleshooting across analytical environments",
                        "Worked extensively with structured datasets, SQL procedures, and JSON-based data flows to support backend analytics operations",
                        "Managed enterprise data reliability by monitoring database health, resolving incidents, and maintaining data consistency across systems",
                        "Analyzed operational data patterns and system behavior to support reporting accuracy and process optimization initiatives",
                        "Collaborated with cross-functional teams on analytics support, database maintenance, and enterprise data operations within large-scale environments",
                        "Gained hands-on experience with column-oriented database architecture, SQL optimization, and enterprise analytical systems"
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-[#38bdf8] shrink-0 mt-1" />
                          <p className="text-sm text-white/70 leading-relaxed font-light font-body">
                            {bullet}
                          </p>
                        </div>
                      ))}
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
                        Focused on enterprise analytics operations using SAP IQ columnar databases, SQL optimization, and production support analysis. Worked on performance monitoring, query analysis, data validation, and backend analytical workflows across large-scale business systems.
                      </p>

                      <div className="space-y-4 pt-4 border-t border-white/5">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/40">Division</span>
                          <span className="text-[#38bdf8] font-medium">Global Delivery / Analytics</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-white/40">Query Stack</span>
                          <span className="text-[#38bdf8] font-medium">SAP IQ, SQL, JSON</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-white/40">Target Operations</span>
                          <span className="text-[#38bdf8] font-medium">Process Automation, Database reliability</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between bg-[#38bdf8]/5 p-4 rounded-2xl">
                      <span className="text-xs text-white/50 uppercase tracking-widest font-mono">Engagement Role</span>
                      <span className="text-xs text-white uppercase tracking-wider font-semibold">Analyst</span>
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
                      <p className="text-xs text-white/40 font-body">Chennai, India • 06/2020 - 05/2024</p>
                      <p className="text-sm text-white/70 leading-relaxed font-light font-body mt-2">
                        Specialized in <strong className="text-white">Computer Science with Big Data Analysis</strong>. Acquired solid foundations in exploratory database modeling, predictive machine learning algorithms, and distributed analytics pipelines.
                      </p>
                    </div>

                    {/* SMBM SCHOOL */}
                    <div className="relative">
                      <div className="absolute left-[-31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white/40 border-4 border-[#0a0a0a]" />
                      <span className="text-[10px] text-white/40 font-mono tracking-widest font-semibold uppercase">
                        High School Education
                      </span>
                      <h3 className="text-lg font-display text-white italic mt-1 font-medium">SMBM School</h3>
                      <p className="text-xs text-white/40 font-body">01/2015 - 01/2020</p>
                      <p className="text-sm text-white/60 leading-relaxed font-light font-body mt-2">
                        Developed high-level critical thinking, analytic reasoning, and scientific inquiry skills, launching early interests in computer logic systems.
                      </p>
                    </div>

                    {/* PRASIDDHI VIDYODAYA SCHOOL */}
                    <div className="relative">
                      <div className="absolute left-[-31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
                      <span className="text-[10px] text-white/40 font-mono tracking-widest font-semibold uppercase">
                        Primary School Education
                      </span>
                      <h3 className="text-lg font-display text-white italic mt-1 font-medium">Prasiddhi Vidyodaya School</h3>
                      <p className="text-xs text-white/40 font-body">01/2005 - 01/2015</p>
                      <p className="text-sm text-white/50 leading-relaxed font-light font-body mt-2">
                        Broad elementary training providing base competencies in advanced mathematical calculation, verbal syntax analysis, and team collaborations.
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
