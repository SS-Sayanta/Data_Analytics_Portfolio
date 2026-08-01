"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronRight,
  BarChart3,
  Brain,
  Globe,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects } from "@/data/portfolio";
import { type Project } from "@/types";
import { staggerContainer, fadeUp, scaleIn, viewportConfig } from "@/lib/animations";

const categoryIcons = {
  analytics: BarChart3,
  bi: TrendingUp,
  ai: Brain,
  web: Globe,
};

const categoryColors = {
  analytics: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  bi: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  ai: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  web: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
};

/**
 * Project Card — Premium case-study style card with metrics
 */
function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = categoryIcons[project.category];
  const colors = categoryColors[project.category];

  return (
    <motion.article
      variants={scaleIn}
      className="glass rounded-3xl overflow-hidden glass-hover card-glow border border-white/[0.06]"
      aria-label={`Project: ${project.title}`}
    >
      {/* Project header / preview */}
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, 
            rgba(59,130,246,0.08) 0%, 
            rgba(139,92,246,0.08) 50%, 
            rgba(6,182,212,0.05) 100%)`,
        }}
      >
        {/* Category badge */}
        <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${colors.bg} ${colors.text} ${colors.border}`}>
          <Icon size={11} />
          {project.category.toUpperCase()}
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full glass text-xs font-mono text-slate-400 border border-white/10">
          {project.year}
        </div>

        {/* Central icon */}
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center ${colors.bg} border ${colors.border}`}
        >
          <Icon size={36} className={colors.text} />
        </div>

        {/* Metrics overlay */}
        {project.metrics && (
          <div className="absolute bottom-0 inset-x-0 flex justify-around px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-sm font-bold text-white metric-value">
                  {m.value}
                  {m.unit && <span className="text-xs text-slate-300 ml-0.5">{m.unit}</span>}
                </div>
                <div className="text-[10px] text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-bold text-white leading-tight mb-1">{project.title}</h3>
            <p className="text-sm text-slate-500">{project.subtitle}</p>
          </div>
          {project.featured && (
            <span className="shrink-0 px-2 py-0.5 text-[10px] font-semibold tracking-wider rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20 uppercase">
              Featured
            </span>
          )}
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag opacity-50">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Expandable case study details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/5 pt-5 space-y-5 mb-5">
                {/* Problem */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-3 h-px bg-red-400/60" />
                    Business Problem
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{project.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-3 h-px bg-green-400/60" />
                    Solution
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{project.solution}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-3 h-px bg-blue-400/60" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                        <ChevronRight size={12} className="text-blue-400 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-3 h-px bg-amber-400/60" />
                    Business Impact
                  </h4>
                  <ul className="space-y-1">
                    {project.impact.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <ChevronRight size={12} className="text-amber-400 mt-0.5 shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-3 h-px bg-violet-400/60" />
                    Architecture
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono bg-white/[0.03] rounded-lg p-3 border border-white/5">
                    {project.architecture}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action row */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-blue-400 font-medium flex items-center gap-1 hover:text-blue-300 transition-colors"
          >
            {expanded ? "Hide Details" : "View Case Study"}
            <ChevronRight
              size={12}
              className={`transition-transform ${expanded ? "rotate-90" : ""}`}
            />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-1.5 px-3 text-xs"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <GithubIcon size={13} />
                GitHub
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-1.5 px-3 text-xs"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Projects Section — Featured projects with expandable case studies
 */
export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "analytics" | "bi" | "ai" | "web">("all");

  const categories = [
    { key: "all" as const, label: "All" },
    { key: "analytics" as const, label: "Analytics" },
    { key: "bi" as const, label: "Business Intelligence" },
    { key: "ai" as const, label: "AI / ML" },
    { key: "web" as const, label: "Web" },
  ];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section" aria-label="Projects section">
      <div className="container-max">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <motion.div variants={fadeUp} className="section-label mb-3">
            Portfolio
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl">
            End-to-end data products built for real business problems. Click &quot;View Case
            Study&quot; to explore the full technical architecture.
          </motion.p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === cat.key
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "text-slate-500 hover:text-slate-300 border border-transparent hover:border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
