"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, Brain } from "lucide-react";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

/**
 * About Section — Personal story, skills overview, and tech philosophy
 */
export default function AboutSection() {
  const highlights = [
    {
      icon: BarChart3,
      label: "Business Intelligence & BI",
      desc: "Interactive Power BI & Excel Dashboards, DAX measures, and Power Query ETL",
      color: "text-blue-400",
      bg: "rgba(59,130,246,0.08)",
      border: "rgba(59,130,246,0.2)",
    },
    {
      icon: Database,
      label: "Data Transformation & SQL",
      desc: "Data cleaning, database querying with MySQL, and data wrangling",
      color: "text-violet-400",
      bg: "rgba(139,92,246,0.08)",
      border: "rgba(139,92,246,0.2)",
    },
    {
      icon: Brain,
      label: "Data Analytics & ML",
      desc: "Exploratory Data Analysis (EDA), Pandas, NumPy, and basic Machine Learning",
      color: "text-cyan-400",
      bg: "rgba(6,182,212,0.08)",
      border: "rgba(6,182,212,0.2)",
    },
  ];

  return (
    <section id="about" className="section" aria-label="About section">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp} className="section-label mb-3">
              About Me
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
            >
              Data storyteller.{" "}
              <span className="gradient-text">AI builder.</span>{" "}
              <span className="text-slate-400">Problem solver.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m <strong className="text-white">Sayanta Ghosh</strong>, a BCA final year student and
                passionate Data Analyst specialising in{" "}
                <span className="text-blue-400 font-medium">Business Intelligence</span>,{" "}
                <span className="text-violet-400 font-medium">Interactive Dashboards</span>, and{" "}
                <span className="text-cyan-400 font-medium">Data Storytelling</span>. I focus on
                transforming raw datasets into actionable insights using{" "}
                <span className="text-amber-400 font-medium">Power BI</span>,{" "}
                <span className="text-emerald-400 font-medium">SQL</span>,{" "}
                <span className="text-violet-400 font-medium">Python</span>, and Advanced Excel.
              </p>
              <p>
                I have hands-on experience building end-to-end analytics dashboards including{" "}
                <span className="text-white font-medium">Swiggy Sales Analytics</span>,{" "}
                <span className="text-white font-medium">Healthcare Metrics</span>,{" "}
                <span className="text-white font-medium">FIFA World Cup 2026</span>, and{" "}
                <span className="text-white font-medium">KrishiMitra</span>.
              </p>
              <p>
                My philosophy: <em className="text-slate-300">data without insight is just noise</em>
                . Every dashboard and analysis I build is designed to answer a real business
                question and drive measurable impact.
              </p>
            </motion.div>


          </motion.div>

          {/* Right — Competency cards (single-column vertical stack) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.01 }}
                className="glass rounded-2xl p-5 border transition-all duration-300 flex items-start gap-4"
                style={{
                  background: item.bg,
                  borderColor: item.border,
                }}
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${item.color}`}
                  style={{ background: item.bg, border: `1px solid ${item.border}` }}
                >
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1 leading-tight">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
