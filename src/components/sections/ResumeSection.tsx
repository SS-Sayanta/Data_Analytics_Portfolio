"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye, Briefcase, GraduationCap, Award } from "lucide-react";
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
          >
            <motion.div variants={fadeUp} className="section-label mb-3">
              Resume
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              Download My{" "}
              <span className="gradient-text">Resume</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-8">
              A comprehensive resume covering 7+ data analytics and AI projects, 6 professional
              certifications, and measurable business impact across industries. ATS-optimised and
              recruiter-ready.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4 mb-8">
              {[
                {
                  icon: Briefcase,
                  label: "Experience",
                  desc: "Data Analytics · BI Development · AI Engineering",
                },
                {
                  icon: GraduationCap,
                  label: "Education",
                  desc: "B.Tech in Computer Science | Data & AI Focus",
                },
                {
                  icon: Award,
                  label: "Certifications",
                  desc: "Microsoft PL-300, AI-900, Google DA, IBM DS + more",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
              <a
                href="/Sayanta_Ghosh_Resume.pdf"
                download="Sayanta_Ghosh_Resume.pdf"
                className="btn-primary"
                aria-label="Download resume as PDF"
              >
                <Download size={16} />
                Download PDF Resume
              </a>
              <a
                href="/Sayanta_Ghosh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Preview resume"
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

              {/* Resume page mockup */}
              <div className="bg-[#0d1117] p-8">
                <div className="bg-white rounded-lg p-6 aspect-[0.77] w-full overflow-hidden shadow-xl">
                  {/* Resume header */}
                  <div className="border-b-2 border-gray-800 pb-4 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">Sayanta Ghosh</h2>
                    <p className="text-sm text-blue-600 font-medium mt-0.5">
                      Data Analyst · BI Developer · AI Engineer
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["sayanta.ghosh@email.com", "github.com/sayanta-ghosh", "LinkedIn"].map(
                        (item) => (
                          <span
                            key={item}
                            className="text-[10px] text-gray-500 flex items-center gap-1"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Resume body lines */}
                  <div className="space-y-3">
                    {["SKILLS", "PROJECTS", "CERTIFICATIONS", "EDUCATION"].map((section) => (
                      <div key={section}>
                        <div className="text-[9px] font-bold text-gray-800 tracking-widest mb-1 uppercase">
                          {section}
                        </div>
                        <div className="space-y-1">
                          {Array.from({ length: section === "SKILLS" ? 3 : 2 }).map(
                            (_, i) => {
                              const widths: Record<string, number[]> = {
                                SKILLS: [92, 89, 76],
                                PROJECTS: [91, 82],
                                CERTIFICATIONS: [88, 79],
                                EDUCATION: [80, 85],
                              };
                              const widthVal = widths[section]?.[i] ?? 80;
                              return (
                                <div key={i} className="flex gap-2 items-start">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                                  <div
                                    className="h-2 rounded-sm bg-gray-100 flex-1"
                                    style={{ width: `${widthVal}%` }}
                                  />
                                </div>
                              );
                            }
                          )}
                        </div>
                        <div className="border-b border-gray-100 mt-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
