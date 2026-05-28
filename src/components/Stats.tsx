import { motion } from "motion/react";

interface StatItem {
  number: string;
  label: string;
  sub: string;
}

const STATS: StatItem[] = [
  {
    number: "12+",
    label: "Automation Tools Mastered",
    sub: "Leveraged for production workflows, database pipelines, and generative RAG agents.",
  },
  {
    number: "5+",
    label: "Production-grade AI Apps",
    sub: "Executed from architecture plans to reliable deployments.",
  },
  {
    number: "100%",
    label: "Commitment to Velocity",
    sub: "Eliminating manual, repetitive enterprise operational overhead with automated processes.",
  },
];

export default function Stats() {
  return (
    <section id="stats-section" className="bg-bg py-20 md:py-28 text-text-primary select-none border-t border-stroke/35">
      <div className="max-w-[1250px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Animated 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col p-8 rounded-3xl bg-surface/10 border border-stroke/40 hover:border-stroke hover:bg-surface/30 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              {/* Subtle accent hover indicator inside container */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#38bdf8] to-[#c084fc] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              {/* Stat big display number */}
              <div className="text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary/90 group-hover:text-text-primary group-hover:translate-x-1 transition-all duration-500 mb-4 font-bold tracking-tight">
                {stat.number}
              </div>

              {/* Title label */}
              <h3 className="text-lg font-body font-semibold tracking-wide text-text-primary mb-2">
                {stat.label}
              </h3>

              {/* Sub descriptor description text */}
              <p className="text-xs md:text-sm text-muted font-body font-light leading-relaxed">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
