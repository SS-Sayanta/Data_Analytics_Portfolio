"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Calendar } from "lucide-react";
import { Certification } from "@/types";
import { staggerContainer, fadeUp, scaleIn, viewportConfig } from "@/lib/animations";

export const certificationsData: Certification[] = [
  {
    id: "google-da",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    date: "2026",
    description:
      "Data Analysis, R, SQL, Tableau, Data Visualization, and Analytics Workflow.",
    badgeUrl: "/certifications/google.svg",
  },
  {
    id: "ibm-ds",
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM / Coursera",
    date: "2025",
    description:
      "Python, Machine Learning, Data Analysis, SQL, Data Visualization, and Applied Data Science.",
    badgeUrl: "/certifications/ibm.svg",
  },
  {
    id: "deloitte-analytics",
    title: "Data Analytics Job Simulation (Deloitte Australia)",
    issuer: "Deloitte / Forage",
    date: "2026",
    description:
      "Data Analytics, Dashboarding with Tableau, Data Cleaning, and Business Insights.",
    badgeUrl: "/certifications/deloitte.svg",
  },
  {
    id: "george-telegraph-hardware",
    title: "Computer Hardware & Advanced Networking",
    issuer: "George Telegraph",
    date: "2024",
    description:
      "System Administration, Network Architecture, Hardware Troubleshooting, and Infrastructure.",
    badgeUrl: "/certifications/george-telegraph.svg",
  },
];

const issuerLogos: Record<string, { color: string; bg: string; initials: string }> = {
  "Google / Coursera": { color: "#4285f4", bg: "rgba(66,133,244,0.12)", initials: "GG" },
  "IBM / Coursera": { color: "#0f62fe", bg: "rgba(15,98,254,0.12)", initials: "IBM" },
  "Deloitte / Forage": { color: "#86bc25", bg: "rgba(134,188,37,0.12)", initials: "DLT" },
  "George Telegraph": { color: "#f59e0b", bg: "rgba(245,158,11,0.12)", initials: "GT" },
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
            Industry-recognised professional certifications from Google, IBM, Deloitte, and George Telegraph —
            validating expertise in data analytics, data science, and IT infrastructure.
          </motion.p>
        </motion.div>

        {/* Cert grid and summary strip wrapper */}
        <div className="flex flex-col gap-10">
          {/* Cert grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certificationsData.map((cert) => {
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
                  className="glass rounded-2xl p-6 md:p-8 border border-white/[0.06] hover:border-white/12 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Accent top bar */}
                  <div
                    className="absolute top-0 inset-x-0 h-0.5"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${logo.color}, transparent)`,
                    }}
                  />

                  <div>
                    {/* Issuer badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold"
                        style={{ background: logo.bg, color: logo.color, border: `1px solid ${logo.color}30` }}
                      >
                        {logo.initials}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                        <CheckCircle2 size={13} />
                        <span>Verified</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-white leading-snug mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-3 font-medium">{cert.issuer}</p>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{cert.description}</p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar size={12} />
                      {cert.date}
                    </div>
                    {cert.credentialId && (
                      <span className="text-xs font-mono text-slate-500">
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
            className="glass rounded-2xl p-6 md:p-8 border border-white/[0.06] flex flex-wrap items-center justify-center gap-6"
          >
            <Award size={24} className="text-amber-400" />
            <p className="text-slate-400 text-sm text-center">
              <span className="text-white font-semibold">4 Professional Certifications</span> from
              Google, IBM, Deloitte, and George Telegraph
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Google DA", "IBM DS", "Deloitte Analytics", "Hardware & Networking"].map((badge) => (
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
      </div>
    </section>
  );
}
