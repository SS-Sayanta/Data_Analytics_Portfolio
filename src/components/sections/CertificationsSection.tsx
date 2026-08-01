"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Calendar } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { staggerContainer, fadeUp, scaleIn, viewportConfig } from "@/lib/animations";

const issuerLogos: Record<string, { color: string; bg: string; initials: string }> = {
  Microsoft: { color: "#00a4ef", bg: "rgba(0,164,239,0.12)", initials: "MS" },
  "Google / Coursera": { color: "#4285f4", bg: "rgba(66,133,244,0.12)", initials: "GG" },
  "IBM / Coursera": { color: "#0f62fe", bg: "rgba(15,98,254,0.12)", initials: "IBM" },
  "Meta / Coursera": { color: "#1877f2", bg: "rgba(24,119,242,0.12)", initials: "META" },
  "DeepLearning.AI / Coursera": {
    color: "#cc0000",
    bg: "rgba(204,0,0,0.12)",
    initials: "DL",
  },
};

/**
 * Certifications Section — Premium certification cards with credential details
 */
export default function CertificationsSection() {
  return (
    <section id="certifications" className="section" aria-label="Certifications section">
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
            Credentials
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional{" "}
            <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl">
            Industry-recognised certifications from world-leading technology companies —
            validating expertise across data, AI, and cloud platforms.
          </motion.p>
        </motion.div>

        {/* Cert grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert) => {
            const logo = issuerLogos[cert.issuer] ?? {
              color: "#3b82f6",
              bg: "rgba(59,130,246,0.12)",
              initials: cert.issuer.slice(0, 2).toUpperCase(),
            };

            return (
              <motion.div
                key={cert.id}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-white/12 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 inset-x-0 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${logo.color}, transparent)`,
                  }}
                />

                {/* Issuer badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold"
                    style={{ background: logo.bg, color: logo.color, border: `1px solid ${logo.color}30` }}
                  >
                    {logo.initials}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-400">
                    <CheckCircle2 size={12} />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-white leading-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3 font-medium">{cert.issuer}</p>

                <p className="text-xs text-slate-400 leading-relaxed mb-5">{cert.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar size={11} />
                    {cert.date}
                  </div>
                  {cert.credentialId && (
                    <span className="text-xs font-mono text-slate-600">
                      #{cert.credentialId}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Badge strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-6 border border-white/[0.06] flex flex-wrap items-center justify-center gap-6"
        >
          <Award size={24} className="text-amber-400" />
          <p className="text-slate-400 text-sm text-center">
            <span className="text-white font-semibold">6 Professional Certifications</span> from
            Microsoft, Google, IBM, Meta, and DeepLearning.AI
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["PL-300", "AI-900", "Google DA", "IBM DS", "Meta DB", "DL.AI ML"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
