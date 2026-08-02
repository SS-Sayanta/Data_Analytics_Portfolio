"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GitCommit, Star, GitFork, Flame, Code2, Database, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { githubStats } from "@/data/portfolio";
import { staggerContainer, fadeUp, scaleIn, viewportConfig } from "@/lib/animations";

/**
 * Animated counter hook
 */
function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start = Math.min(start + step, target);
            if (el) el.textContent = Math.floor(start).toLocaleString();
            if (start >= target) clearInterval(timer);
          }, 16);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observerRef.current.observe(el);
    return () => observerRef.current?.disconnect();
  }, [target, duration]);

  return ref;
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
  suffix = "",
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  color: string;
  suffix?: string;
}) {
  const countRef = useCountUp(value);

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass rounded-2xl p-6 border border-white/[0.06] text-center transition-all duration-300"
    >
      <div
        className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4"
        style={{ background: `${color}15`, border: `1px solid ${color}25` }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <div className="text-3xl font-bold text-white mb-1 metric-value">
        <span ref={countRef}>0</span>
        <span>{suffix}</span>
      </div>
      <div className="text-xs text-slate-500 font-medium">{label}</div>
    </motion.div>
  );
}

/**
 * GitHub Statistics Section — Animated counters, language breakdown, contribution visual
 */
export default function GitHubSection() {
  return (
    <section id="github" className="section" aria-label="GitHub Statistics section">
      <div className="container-max">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-10"
        >
          <motion.div variants={fadeUp} className="section-label mb-3">
            Coding & Problem Solving
          </motion.div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Problem Solving <span className="gradient-text">Stats</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold w-fit"
            >
              <CheckCircle2 size={16} className="text-blue-400" />
              <span>150+ Total Problems Solved</span>
            </motion.div>
          </div>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl text-sm sm:text-base">
            Demonstrated proficiency in SQL analytics, complex query optimization, algorithm design, and Python data manipulation.
          </motion.p>
        </motion.div>

        {/* Problem Solving Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* SQL Card */}
          <motion.div
            variants={scaleIn}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">SQL Analytics</h3>
                    <p className="text-xs text-slate-400">Query Optimization & Data Analytics</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-white metric-value">100</span>
                  <span className="text-xs text-slate-400 block font-medium">Problems</span>
                </div>
              </div>

              {/* Difficulty Badges */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="px-3 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-center">
                  <span className="text-xs font-semibold block uppercase tracking-wider">Easy</span>
                  <span className="text-lg font-bold text-emerald-300 metric-value">50</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 text-center">
                  <span className="text-xs font-semibold block uppercase tracking-wider">Medium</span>
                  <span className="text-lg font-bold text-amber-300 metric-value">30</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 text-center">
                  <span className="text-xs font-semibold block uppercase tracking-wider">Hard</span>
                  <span className="text-lg font-bold text-rose-300 metric-value">20</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Difficulty Distribution</span>
                  <span>100 Solved</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                  <div className="h-full bg-emerald-500" style={{ width: "50%" }} title="Easy: 50" />
                  <div className="h-full bg-amber-500" style={{ width: "30%" }} title="Medium: 30" />
                  <div className="h-full bg-rose-500" style={{ width: "20%" }} title="Hard: 20" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Python Card */}
          <motion.div
            variants={scaleIn}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">Python Programming</h3>
                    <p className="text-xs text-slate-400">Data Structures & Algorithm Logic</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-white metric-value">50</span>
                  <span className="text-xs text-slate-400 block font-medium">Problems</span>
                </div>
              </div>

              {/* Difficulty Badges */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="px-3 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-center">
                  <span className="text-xs font-semibold block uppercase tracking-wider">Easy</span>
                  <span className="text-lg font-bold text-emerald-300 metric-value">30</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 text-center">
                  <span className="text-xs font-semibold block uppercase tracking-wider">Medium</span>
                  <span className="text-lg font-bold text-amber-300 metric-value">20</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 text-center">
                  <span className="text-xs font-semibold block uppercase tracking-wider">Hard</span>
                  <span className="text-lg font-bold text-rose-300 metric-value">10</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Difficulty Distribution</span>
                  <span>50 Solved</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                  <div className="h-full bg-emerald-500" style={{ width: "50%" }} title="Easy: 30" />
                  <div className="h-full bg-amber-500" style={{ width: "33%" }} title="Medium: 20" />
                  <div className="h-full bg-rose-500" style={{ width: "17%" }} title="Hard: 10" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Language breakdown + contribution heatmap */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-white/[0.06] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
                <Code2 size={16} className="text-blue-400" />
                Top Languages (Data & Analytics Focus)
              </h3>
              <div className="space-y-4 mb-6">
                {githubStats.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium text-slate-300">{lang.name}</span>
                      <span className="font-mono text-slate-500">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: lang.color,
                          boxShadow: `0 0 8px ${lang.color}66`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Top Languages Card Embed */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=SS-Sayanta&theme=dark&hide_border=true&layout=compact"
                alt="SS-Sayanta GitHub Top Languages"
                className="w-full rounded-xl object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Real Contribution Heatmap Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-white/[0.06] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Flame size={16} className="text-orange-400" />
                Live GitHub Activity Graph
              </h3>

              {/* Real GitHub Activity Graph Embed */}
              <div className="overflow-x-auto max-w-full pb-2 scrollbar-thin rounded-xl">
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=SS-Sayanta&theme=react-dark&hide_border=true"
                  alt="SS-Sayanta GitHub Activity Graph"
                  className="w-full rounded-xl min-w-[500px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://github.com/SS-Sayanta"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors pt-3 border-t border-white/5"
            >
              <GithubIcon size={15} />
              View full live profile on GitHub →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
