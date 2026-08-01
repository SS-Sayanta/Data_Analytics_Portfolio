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

        <div className="space-y-12">
          {aiProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={`grid lg:grid-cols-2 gap-8 items-start ${
                idx % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Left: Visual */}
              <div
                className={`order-1 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div
                  className="glass rounded-3xl p-8 border border-white/[0.07] relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${project.id === "period-prediction-ai" ? "rgba(139,92,246,0.08)" : "rgba(16,185,129,0.08)"} 0%, 
                      rgba(59,130,246,0.05) 100%)`,
                  }}
                >
                  {/* Background decoration */}
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
                    style={{
                      background:
                        project.id === "period-prediction-ai" ? "#8b5cf6" : "#10b981",
                    }}
                  />

                  {/* Tech architecture display */}
                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                        project.id === "period-prediction-ai"
                          ? "bg-violet-500/15 border border-violet-500/25"
                          : "bg-emerald-500/15 border border-emerald-500/25"
                      }`}
                    >
                      {project.id === "period-prediction-ai" ? (
                        <Cpu size={28} className="text-violet-400" />
                      ) : (
                        <Leaf size={28} className="text-emerald-400" />
                      )}
                    </div>

                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Technical Architecture
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-mono bg-black/30 rounded-xl p-4 border border-white/5 mb-6">
                      {project.architecture}
                    </p>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics row */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="glass rounded-2xl p-4 border border-white/[0.06] text-center"
                      >
                        <div className="text-2xl font-bold gradient-text metric-value">
                          {m.value}
                          {m.unit && <span className="text-sm ml-0.5">{m.unit}</span>}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Content */}
              <div className={`order-2 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
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

                <h3 className="text-3xl font-bold text-white leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-4">{project.subtitle}</p>
                <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

                {/* Problem → Solution */}
                <div className="space-y-4 mb-6">
                  <div className="glass rounded-xl p-4 border border-white/5">
                    <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                      Problem Statement
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="glass rounded-xl p-4 border border-white/5">
                    <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">
                      Our Solution
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Key features */}
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
                              ? "text-violet-400"
                              : "text-emerald-400"
                          }
                        />
                        <span className="text-sm text-slate-400">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact highlights */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                    Business Impact
                  </h4>
                  <div className="space-y-2">
                    {project.impact.map((i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-amber-400 mt-2 shrink-0" />
                        <span className="text-sm text-slate-400">{i}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex gap-3">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
