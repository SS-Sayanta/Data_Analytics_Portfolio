"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

const skillCategories = [
  {
    title: "Programming & Databases",
    description: "Core languages and database query tools for structured data extraction.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: ["Python", "Pandas", "NumPy", "SQL (MySQL)", "Data Wrangling", "EDA"],
  },
  {
    title: "BI & Visualization",
    description: "Building interactive executive dashboards and business insights tools.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    skills: ["Power BI", "DAX", "Power Query", "Advanced Excel", "Tableau", "Interactive Dashboards"],
  },
  {
    title: "Tools & Workflows",
    description: "Version control, development environments, and collaborative workflows.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["Git & GitHub", "Jupyter Notebook", "VS Code", "Google Colab"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 relative bg-transparent" aria-label="Skills section">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12 text-left"
        >
          <motion.span
            variants={fadeUp}
            className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2 block"
          >
            — Expertise
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white mb-3"
          >
            Technical <span className="text-blue-500">Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed"
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
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
              className="bg-slate-900/50 backdrop-blur-md border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors shrink-0">
                    {cat.icon}
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
                      className="bg-blue-950/50 text-blue-300 border border-blue-500/20 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-blue-900/40 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
