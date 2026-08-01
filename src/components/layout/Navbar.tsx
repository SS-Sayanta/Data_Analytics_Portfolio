"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { navItems } from "@/data/portfolio";

/**
 * Navigation Bar — Fixed glassmorphism navbar with scroll detection and mobile menu
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = navItems.map((n) => n.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
        }}
      />

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "h-16 backdrop-blur-md bg-slate-900/80 border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "h-20 bg-transparent"
        }`}
        role="banner"
      >
        <div className="container-max flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-2 group lg:w-1/4"
            aria-label="Sayanta Ghosh - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shrink-0">
              SG
            </div>
            <span className="font-bold text-white tracking-tight">
              Sayanta Ghosh
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 lg:w-2/4" aria-label="Main navigation">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-1.5 text-sm font-medium transition-all duration-300 group ${
                    isActive ? "text-blue-400" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Underline effect */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 transform transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                  {/* Subtle hover glow shape */}
                  <span className="absolute -inset-x-2.5 -inset-y-1 rounded-lg bg-white/0 group-hover:bg-white/[0.03] transition-all duration-300 -z-10" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile trigger & Right column alignment */}
          <div className="flex items-center justify-end lg:w-1/4">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="fixed right-0 top-0 bottom-0 z-[60] w-72 bg-[#0d1117] border-l border-white/[0.08] flex flex-col"
              role="dialog"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <span className="font-semibold text-white text-sm">Navigation</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="space-y-1">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              <div className="px-6 py-5 border-t border-white/5">
                <a
                  href="/Sayanta_Ghosh_Resume.pdf"
                  download
                  className="btn-primary w-full justify-center"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
