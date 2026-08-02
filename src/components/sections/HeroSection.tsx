"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons";
const roles = [
  "Data Analyst",
  "Business Intelligence Developer",
  "Power BI & SQL Specialist",
];

/**
 * Hero Section — Full-viewport hero with typewriter, particle grid, and animated stats
 */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Safety check for out of bounds index (e.g. during hot-reloads)
    if (titleIndex >= roles.length) {
      setTitleIndex(0);
      return;
    }
    const current = roles[titleIndex];
    if (!current) return;

    if (!isDeleting) {
      // Typing
      if (displayText !== current) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 80);
      } else {
        // Fully typed, wait then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Deleting
      if (displayText !== "") {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, 40);
      } else {
        // Fully deleted, switch to next title
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const stats = [
    { value: "5+", label: "BI & Analytics Dashboards" },
    { value: "100%", label: "Data Quality Focus" },
    { value: "10k+", label: "Data Rows Modeled" },
    { value: "BCA", label: "Graduate (2027)" },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated hero gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="container-max w-full flex flex-col items-center z-10 pt-28 pb-16"
      >
        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start w-full mb-12 lg:mb-16">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-6 px-4 sm:px-6">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mt-2 mb-4 sm:mb-6 px-4 py-2 rounded-full glass border border-emerald-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-400 tracking-wide">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-3 sm:mb-4">
                <span className="text-white">Sayanta </span>
                <span className="gradient-text">Ghosh</span>
              </h1>
            </motion.div>

            {/* Dynamic title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="min-h-[2.5rem] flex items-center"
            >
              <p className="text-sm sm:text-lg text-slate-300 leading-normal font-light">
                <span className="text-blue-400 font-medium">{displayText}</span>
                <span className="inline-block w-0.5 h-5 bg-blue-400 ml-1 animate-pulse" />
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed"
            >
              Transforming raw data into actionable business insights. Specializing in Power BI
              dashboards, SQL querying, and Python data analytics.{" "}
              <span className="block mt-2 text-slate-300 font-medium">Power BI · SQL · Python · Excel</span>
            </motion.p>

            {/* CTA Buttons & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 items-center w-full"
            >
              <Link href="#projects" className="btn-primary">
                <Sparkles size={16} />
                View My Work
              </Link>
              <a
                href="/resume.pdf"
                download="Sayanta_Ghosh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={16} />
                Download Resume
              </a>

              {/* Social Icons Inline */}
              <div className="flex items-center gap-4 ml-2 mt-2 sm:mt-0">
                {[
                  { icon: GithubIcon, href: "https://github.com/SS-Sayanta", label: "GitHub" },
                  {
                    icon: LinkedInIcon,
                    href: "https://www.linkedin.com/in/sayanta-ghosh-4b3a4231a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0iLtXRMVSjOj%2B5KpHnK2hg%3D%3D",
                    label: "LinkedIn",
                  },
                  { icon: Mail, href: "mailto:sayantaghosh002@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200 hover:scale-110"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Picture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-start w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative w-full max-w-[320px] md:max-w-[340px] group select-none -translate-y-6 md:-translate-y-8 transition-all duration-300"
            >
              <img
                src="/profile.jpg"
                alt="Sayanta Ghosh"
                className="w-full max-w-[320px] md:max-w-[340px] h-[380px] md:h-[420px] object-cover object-[center_20%] rounded-2xl border border-slate-700/60 shadow-xl mx-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Row (Full Width Below) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center pt-8 mb-12 lg:mb-16 border-t border-white/[0.06] w-full"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl sm:text-3xl font-bold gradient-text metric-value">
                {stat.value}
              </span>
              <span className="text-xs text-slate-500 font-medium mt-1 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
