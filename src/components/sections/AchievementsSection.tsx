"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, FileText, Star, Calendar } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { achievements } from "@/data/portfolio";
import { staggerContainer, fadeUp, scaleIn, viewportConfig } from "@/lib/animations";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  "file-text": FileText,
  github: GithubIcon,
  star: Star,
};

const categoryColors = {
  award: {
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.2)",
    badge: "Award",
  },
  competition: {
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.2)",
    badge: "Competition",
  },
  publication: {
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.2)",
    badge: "Publication",
  },
  contribution: {
    color: "#10b981",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.2)",
    badge: "Open Source",
  },
};

/**
 * Achievements Section — Award and recognition cards with timeline feel
 */
export default function AchievementsSection() {
  return (
    <section id="achievements" className="section" aria-label="Achievements section">
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
            Recognition
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Achievements &{" "}
            <span className="gradient-text">Highlights</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl">
            Awards, competition results, publications, and open-source contributions that
            define the journey.
          </motion.p>
        </motion.div>

        {/* Achievements grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon as keyof typeof iconMap] ?? Trophy;
            const colors = categoryColors[achievement.category];

            return (
              <motion.div
                key={achievement.id}
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden"
                style={{ borderColor: colors.border }}
              >
                {/* Glow bg */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10"
                  style={{ background: colors.color }}
                />

                <div className="relative z-10">
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                    >
                      <Icon size={22} style={{ color: colors.color }} />
                    </div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: colors.bg, color: colors.color, border: `1px solid ${colors.border}` }}
                    >
                      {colors.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white leading-tight mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <Calendar size={11} />
                    {achievement.date}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
