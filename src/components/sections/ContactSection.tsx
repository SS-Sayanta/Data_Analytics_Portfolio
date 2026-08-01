"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import type { ContactFormData } from "@/types";

/**
 * Contact Section — Premium contact form with validation and success state
 */
export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim() || form.message.length < 20)
      newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sayantaghosh002@gmail.com",
      href: "mailto:sayantaghosh002@gmail.com",
      color: "#3b82f6",
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/SayantaGhosh",
      href: "https://linkedin.com/in/SayantaGhosh",
      color: "#0a66c2",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/SS-Sayanta",
      href: "https://github.com/SS-Sayanta",
      color: "#e2e8f0",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, West Bengal, India",
      href: "#",
      color: "#10b981",
    },
  ];

  return (
    <section id="contact" className="section" aria-label="Contact section">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp} className="section-label mb-3">
              Get in Touch
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              Let&apos;s{" "}
              <span className="gradient-text">Connect</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-10">
              I&apos;m actively exploring full-time Data Analyst, BI Developer, and AI Engineering
              roles. Whether you have an opportunity, a project collaboration, or just want to talk
              data — I&apos;d love to hear from you.
            </motion.p>

            {/* Contact cards */}
            <motion.div variants={staggerContainer} className="space-y-3">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  variants={fadeUp}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : item.href.startsWith("mailto") ? undefined : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/[0.06] hover:border-white/12 transition-all duration-200 hover:translate-x-1 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon size={17} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                    <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Availability notice */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-3 glass rounded-xl p-4 border border-emerald-500/20"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-emerald-400 font-medium">Open to opportunities</span> —
                Actively looking for Data Analyst & BI Developer roles
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass rounded-3xl p-8 border border-white/[0.07]">
              {status === "success" ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-slate-400 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className={`w-full bg-white/[0.04] border ${
                          errors.name ? "border-red-500/50" : "border-white/10"
                        } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-slate-400 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com"
                        className={`w-full bg-white/[0.04] border ${
                          errors.email ? "border-red-500/50" : "border-white/10"
                        } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-slate-400 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Data Analyst Opportunity at Acme Corp"
                      className={`w-full bg-white/[0.04] border ${
                        errors.subject ? "border-red-500/50" : "border-white/10"
                      } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-slate-400 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Hi Sayanta, I came across your portfolio and would love to discuss..."
                      className={`w-full bg-white/[0.04] border ${
                        errors.message ? "border-red-500/50" : "border-white/10"
                      } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-slate-600 text-right">
                      {form.message.length} chars
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full justify-center"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
