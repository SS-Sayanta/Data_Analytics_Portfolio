"use client";

import { motion } from "framer-motion";
import { ExternalLink, ChevronRight, Cpu, Leaf } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects } from "@/data/portfolio";
import { staggerContainer, fadeUp, scaleIn, viewportConfig } from "@/lib/animations";

const aiProjects = projects.filter((p) => p.category === "ai");

/**
 * AI Projects Section — Highlighted AI/ML projects with deeper technical detail
 */
export default function AIProjectsSection() {
  return (
    <section id="ai-projects" className="section" aria-label="AI Projects section">
      <div className="container-max">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="section-label mb-3">
            AI Projects
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Artificial{" "}
            <span className="gradient-text">Intelligence</span> Projects
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl">
            Real-world AI systems built from first principles — from data collection to model
            deployment, serving users with measurable impact.
          </motion.p>
        </motion.div>

        {/* AI Projects Container */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {aiProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="glass rounded-3xl p-6 md:p-8 lg:p-10 border border-white/[0.07] grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-4 lg:mb-8"
            >
              {/* Left Column: Details, Problem/Solution & Actions */}
              <div className="flex flex-col pl-6 md:pl-8 pr-4 py-6 md:py-8">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      project.id === "period-prediction-ai"
                        ? "bg-violet-500/15 text-violet-400 border border-violet-500/25"
                        : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                    }`}
                  >
                    AI Project
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{project.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{project.subtitle}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{project.description}</p>

                {/* Problem Statement & Solution — Clean subheadings without heavy blue background boxes */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-rose-400 font-mono text-xs tracking-wider uppercase mb-1 font-semibold">
                      Problem Statement
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-mono text-xs tracking-wider uppercase mb-1 font-semibold">
                      Our Solution
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {project.features.slice(0, 5).map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <ChevronRight
                          size={13}
                          className={
                            project.id === "period-prediction-ai"
                              ? "text-violet-400 mt-0.5 shrink-0"
                              : "text-emerald-400 mt-0.5 shrink-0"
                          }
                        />
                        <span className="text-xs sm:text-sm text-slate-400">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Impact */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                    Business Impact
                  </h4>
                  <div className="space-y-2">
                    {project.impact.map((i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-400">{i}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <GithubIcon size={15} />
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Architecture & Stats Grid */}
              <div className="flex flex-col gap-4">
                <div
                  className="glass rounded-2xl p-6 md:p-8 border border-white/[0.07] relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${project.id === "period-prediction-ai" ? "rgba(139,92,246,0.08)" : "rgba(16,185,129,0.08)"} 0%, 
                      rgba(59,130,246,0.05) 100%)`,
                  }}
                >
                  {/* Background glow */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
                    style={{
                      background:
                        project.id === "period-prediction-ai" ? "#8b5cf6" : "#10b981",
                    }}
                  />

                  {/* Architecture Content */}
                  <div className="relative z-10 p-2 md:p-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                        project.id === "period-prediction-ai"
                          ? "bg-violet-500/15 border border-violet-500/25"
                          : "bg-emerald-500/15 border border-emerald-500/25"
                      }`}
                    >
                      {project.id === "period-prediction-ai" ? (
                        <Cpu size={24} className="text-violet-400" />
                      ) : (
                        <Leaf size={24} className="text-emerald-400" />
                      )}
                    </div>

                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                      Technical Architecture
                    </h4>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-mono mb-4">
                      {project.architecture}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="glass rounded-2xl p-4 md:p-5 border border-white/[0.06] text-center"
                      >
                        <div className="text-xl sm:text-2xl font-bold gradient-text metric-value">
                          {m.value}
                          {m.unit && <span className="text-xs sm:text-sm ml-0.5">{m.unit}</span>}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
