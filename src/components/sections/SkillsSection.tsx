"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, BarChart3, Wrench } from "lucide-react";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

const skillCategories = [
  {
    title: "Programming & Databases",
    description:
      "Core languages, libraries, and database tools for structured data extraction, cleaning, and analysis.",
    icon: Code2,
    skills: ["Python", "Pandas", "NumPy", "SQL (MySQL)", "Data Wrangling", "EDA"],
  },
  {
    title: "BI & Visualization",
    description:
      "Building interactive executive dashboards and business intelligence reporting solutions.",
    icon: BarChart3,
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Advanced Excel",
      "Tableau",
      "Interactive Dashboards",
    ],
  },
  {
    title: "Tools & Workflows",
    description:
      "Version control, development environments, and collaborative analytics workflows.",
    icon: Wrench,
    skills: ["Git & GitHub", "Jupyter Notebook", "VS Code", "Google Colab"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section" aria-label="Skills section">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <motion.div variants={fadeUp} className="section-label mb-3">
            Expertise
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed"
          >
            Categorized technical capabilities, libraries, and analytics tools used to extract meaning from datasets.
          </motion.p>
        </motion.div>

        {/* 3 Grid Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                custom={index}
                className="bg-slate-900/50 backdrop-blur-md border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Tags List */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-slate-800/60 text-slate-300 border border-slate-700/50 px-3 py-1.5 rounded-lg text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
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
