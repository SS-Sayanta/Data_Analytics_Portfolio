"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Calendar } from "lucide-react";
import { staggerContainer, fadeUp, scaleIn, viewportConfig } from "@/lib/animations";

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge: "AWARD" | "HACKATHON";
  icon: typeof Trophy;
  color: string;
  bg: string;
  border: string;
}

export const authenticAchievements: AchievementItem[] = [
  {
    id: "nirmal-mela-winner",
    title: "Tech Fest Nirmal Mela 2025 Winner",
    issuer: "Sister Nivedita University (SBU)",
    date: "2025",
    description: "Secured First Place / Winner at the Tech Fest Nirmal Mela competition held at SBU.",
    badge: "AWARD",
    icon: Trophy,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    id: "vu-ai-hackathon",
    title: "AI-Powered Hackathon Participation",
    issuer: "Vidyasagar University (VU)",
    date: "2026",
    description: "Successfully participated in the AI-Powered Hackathon organised at Vidyasagar University.",
    badge: "HACKATHON",
    icon: Medal,
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
  },
];

/**
 * Achievements Section — Authentic awards & competition achievements
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
            Key awards, tech fest victories, and hackathon milestones validating technical innovation and competitive excellence.
          </motion.p>
        </motion.div>

        {/* Achievements 2-card grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {authenticAchievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.id}
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass rounded-2xl p-6 md:p-8 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                style={{ borderColor: achievement.border }}
              >
                {/* Glow bg */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10"
                  style={{ background: achievement.color }}
                />

                <div className="relative z-10">
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: achievement.bg, border: `1px solid ${achievement.border}` }}
                    >
                      <Icon size={22} style={{ color: achievement.color }} />
                    </div>
                    <span
                      className="text-[10px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ background: achievement.bg, color: achievement.color, border: `1px solid ${achievement.border}` }}
                    >
                      {achievement.badge}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-base font-bold text-white leading-snug mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3 font-medium">{achievement.issuer}</p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {achievement.description}
                  </p>
                </div>

                {/* Footer date */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-4 border-t border-white/5 relative z-10">
                  <Calendar size={12} />
                  <span>{achievement.date}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
