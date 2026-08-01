"use client";

import Link from "next/link";
import { Mail, Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons";
import { navItems } from "@/data/portfolio";

/**
 * Footer — Premium footer with links, social icons, and back-to-top
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/SS-Sayanta", label: "GitHub" },
    { icon: LinkedInIcon, href: "https://linkedin.com/in/SayantaGhosh", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sayantaghosh002@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#030712]" role="contentinfo">
      {/* Main footer content */}
      <div className="container-max py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                SG
              </div>
              <span className="font-semibold text-white">Sayanta Ghosh</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              Data Analyst · Business Intelligence Developer · AI Enthusiast.
              Transforming raw data into actionable insights that drive real business value.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-5">
              Resources
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/Sayanta_Ghosh_Resume.pdf"
                  download
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Download Resume
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SS-Sayanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/SayantaGhosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            Built with{" "}
            <Heart size={10} className="text-red-500 fill-red-500" />
            by Sayanta Ghosh · Next.js 15 · Framer Motion · Tailwind CSS
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Sayanta Ghosh. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
