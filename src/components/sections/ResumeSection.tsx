"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye, Code, GraduationCap, Award } from "lucide-react";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

/**
 * Resume Download Section — Premium resume preview and download CTA
 */
export default function ResumeSection() {
  return (
    <section id="resume" className="section" aria-label="Resume download section">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col space-y-6 md:space-y-8"
          >
            <div>
              <motion.div variants={fadeUp} className="section-label mb-3">
                Resume & Credentials
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug md:leading-tight mb-4"
              >
                Final-Year BCA Student specializing in{" "}
                <span className="gradient-text">Data Analytics & Business Intelligence</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-6">
                Hands-on experience designing Power BI dashboards, SQL-driven analytics projects, and
                end-to-end reporting solutions (FIFA WC 2026, Swiggy Sales, Healthcare, JioHotstar Analytics).
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex flex-col space-y-5 md:space-y-6">
              {[
                {
                  icon: GraduationCap,
                  label: "Education",
                  desc: "BCA (Swami Vivekananda University, 2023–2027) | Current CGPA: 8.38 (3rd Yr)",
                },
                {
                  icon: Code,
                  label: "Top Skills",
                  desc: "Python, SQL, Power BI, DAX, Power Query, Advanced Excel, MySQL, Pandas, NumPy",
                },
                {
                  icon: Award,
                  label: "Certifications & Achievements",
                  desc: "IBM: Python for Data Science & AI · 1st Prize Winner — Techfest Nirmal Mela 2025 (SVU) · AI-Powered Hackathon Participant (VU, 2026)",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 py-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap mt-6 md:mt-8">
              <a
                href="/resume.pdf"
                download="Sayanta_Ghosh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Download PDF Resume"
              >
                <Download size={16} />
                Download PDF Resume
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Preview Resume Online"
              >
                <Eye size={16} />
                Preview Online
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Resume preview card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass rounded-3xl overflow-hidden border border-white/[0.07] shadow-2xl">
              {/* PDF viewer chrome */}
              <div className="flex items-center gap-3 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <FileText size={12} />
                    Sayanta_Ghosh_Resume.pdf
                  </div>
                </div>
              </div>

              {/* High-Quality Resume Preview Image */}
              <div className="relative w-full h-[550px] md:h-[650px] rounded-xl overflow-y-auto shadow-2xl border border-slate-700 bg-slate-900 group">
                <img
                  src="/resume-preview.jpg"
                  alt="Sayanta Ghosh Resume Preview"
                  className="w-full h-auto object-top shadow-lg"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg text-sm transition-all"
                  >
                    👁️ View Full PDF
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
