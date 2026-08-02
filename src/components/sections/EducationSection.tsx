"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Calendar, Award, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/portfolio";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

export default function EducationSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "bca-svu":
        return GraduationCap;
      case "hs-wbbse":
        return School;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="education" className="section relative overflow-x-hidden" aria-label="Education section">
      <div className="container-max">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-14"
        >
          <motion.div variants={fadeUp} className="section-label mb-3">
            Academic Background
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Education & <span className="gradient-text">Qualifications</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal education in Computer Applications and Data Analytics, demonstrating consistent academic progression and specialized technical expertise.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 flex flex-col gap-6 md:gap-8 max-w-4xl mx-auto">
          {educationData.map((item, index) => {
            const IconComponent = getIcon(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Glowing Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-3 w-5 h-5 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 group-hover:border-blue-400 transition-all duration-300 shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>

                {/* Glassmorphic Card Box */}
                <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/5 flex flex-col gap-3 md:gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                        <IconComponent size={22} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                          {item.degree}
                        </h3>
                        <p className="text-sm font-medium text-slate-300">
                          {item.institution} {item.location ? `· ${item.location}` : ""}
                        </p>
                      </div>
                    </div>

                    {/* Timeline & Status Badge */}
                    <div className="flex flex-wrap items-center gap-2 shrink-0 self-start">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                        <Calendar size={13} className="text-blue-400" />
                        {item.timeline}
                      </span>
                      {item.current && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                          <CheckCircle2 size={12} />
                          Enrolled
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Specialization if present */}
                  {item.specialization && (
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold">
                        <Award size={14} className="text-violet-400" />
                        <span>Focus: {item.specialization}</span>
                      </div>
                    </div>
                  )}

                  {/* Grade Badge */}
                  <div className="flex items-center gap-2">
                    <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                      {item.grade}
                    </span>
                  </div>

                  {/* Details Bullet Points */}
                  {item.details && item.details.length > 0 && (
                    <ul className="mt-3 pt-3.5 border-t border-slate-800/80 flex flex-col gap-2 text-xs sm:text-sm text-slate-400">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-blue-400 mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
