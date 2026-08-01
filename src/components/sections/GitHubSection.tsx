"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GitCommit, Star, GitFork, Flame, Code2 } from "lucide-react";
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
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="section-label mb-3">
            GitHub Activity
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            GitHub <span className="gradient-text">Statistics</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl">
            An active open-source contributor with consistent commits, community engagement,
            and projects spanning data analytics, AI, and web development.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10"
        >
          <StatCard
            icon={GitCommit}
            label="Total Commits"
            value={githubStats.totalCommits}
            color="#3b82f6"
          />
          <StatCard
            icon={GithubIcon}
            label="Repositories"
            value={githubStats.totalRepos}
            color="#8b5cf6"
          />
          <StatCard
            icon={Star}
            label="Stars Earned"
            value={githubStats.totalStars}
            color="#f59e0b"
          />
          <StatCard
            icon={GitFork}
            label="Forks"
            value={githubStats.totalForks}
            color="#10b981"
          />
          <StatCard
            icon={Flame}
            label="Day Streak"
            value={githubStats.streak}
            color="#f97316"
            suffix=" 🔥"
          />
          <StatCard
            icon={Code2}
            label="Contributions"
            value={githubStats.contributions}
            color="#06b6d4"
          />
        </motion.div>

        {/* Language breakdown + contribution heatmap */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-white/[0.06]"
          >
            <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
              <Code2 size={16} className="text-blue-400" />
              Top Languages
            </h3>
            <div className="space-y-4">
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

            {/* Language donut visual */}
            <div className="mt-6 flex flex-wrap gap-2">
              {githubStats.languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: lang.color }}
                  />
                  <span className="text-xs text-slate-500">{lang.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contribution heatmap visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-white/[0.06]"
          >
            <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
              <Flame size={16} className="text-orange-400" />
              Contribution Activity
            </h3>

            {/* Simulated contribution grid */}
            <div className="overflow-x-auto">
              <div className="grid gap-1" style={{ gridTemplateRows: "repeat(7, 1fr)" }}>
                {Array.from({ length: 7 }).map((_, row) => (
                  <div key={row} className="flex gap-1">
                    {Array.from({ length: 52 }).map((_, col) => {
                      const hash = (row * 37 + col * 17) % 100;
                      const intensity = hash / 100;
                      const hasCommit = hash > 45;
                      const alpha = hasCommit ? Math.min(intensity * 1.4, 1) : 0.07;
                      return (
                        <div
                          key={col}
                          className="w-3 h-3 rounded-sm transition-opacity hover:opacity-100"
                          style={{
                            background: hasCommit
                              ? `rgba(59,130,246,${alpha})`
                              : "rgba(255,255,255,0.05)",
                          }}
                          title={hasCommit ? `${Math.floor(intensity * 10)} contributions` : "No contributions"}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
              <span>Less</span>
              <div className="flex gap-1">
                {[0.1, 0.3, 0.5, 0.7, 0.9].map((alpha) => (
                  <div
                    key={alpha}
                    className="w-3 h-3 rounded-sm"
                    style={{ background: `rgba(59,130,246,${alpha})` }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>

            {/* CTA */}
            <a
              href="https://github.com/sayanta-ghosh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <GithubIcon size={15} />
              View full profile on GitHub →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
