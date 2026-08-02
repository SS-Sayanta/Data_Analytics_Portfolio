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
    try {
      const response = await fetch("https://formspree.io/f/xeeyyoyb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
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
      value: "linkedin.com/in/sayanta-ghosh-4b3a4231a",
      href: "https://www.linkedin.com/in/sayanta-ghosh-4b3a4231a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0iLtXRMVSjOj%2B5KpHnK2hg%3D%3D",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
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
            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed">
              I&apos;m actively exploring full-time Data Analyst, BI Developer, and AI Engineering
              roles. Whether you have an opportunity, a project collaboration, or just want to talk
              data — I&apos;d love to hear from you.
            </motion.p>

            {/* Contact cards list container */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-4 md:gap-5 mt-6">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  variants={fadeUp}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : item.href.startsWith("mailto") ? undefined : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 glass rounded-xl p-4 sm:p-5 border border-white/[0.06] hover:border-white/12 transition-all duration-200 hover:translate-x-1 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon size={17} style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                    <p className="text-sm sm:text-base text-slate-300 group-hover:text-white transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Availability notice card */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3.5 sm:gap-4 glass rounded-xl p-4 sm:p-5 border border-emerald-500/20"
              >
                <div className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                </div>
                <p className="text-sm text-slate-400">
                  <span className="text-emerald-400 font-medium">Open to opportunities</span> —
                  Actively looking for Data Analyst & BI Developer roles
                </p>
              </motion.div>
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
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 sm:gap-6">
                  <h3 className="text-lg font-semibold text-white mb-1">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className={`w-full box-border h-12 px-4 py-3 bg-slate-900/90 border ${
                          errors.name ? "border-red-500/50" : "border-slate-700"
                        } rounded-xl text-slate-100 placeholder:text-slate-500 text-sm leading-normal focus:border-blue-500 focus:outline-none transition-all`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com"
                        className={`w-full box-border h-12 px-4 py-3 bg-slate-900/90 border ${
                          errors.email ? "border-red-500/50" : "border-slate-700"
                        } rounded-xl text-slate-100 placeholder:text-slate-500 text-sm leading-normal focus:border-blue-500 focus:outline-none transition-all`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Data Analyst Opportunity at Acme Corp"
                      className={`w-full box-border h-12 px-4 py-3 bg-slate-900/90 border ${
                        errors.subject ? "border-red-500/50" : "border-slate-700"
                      } rounded-xl text-slate-100 placeholder:text-slate-500 text-sm leading-normal focus:border-blue-500 focus:outline-none transition-all`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle size={11} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Hi Sayanta, I came across your portfolio and would love to discuss..."
                      className={`w-full box-border px-4 py-3 bg-slate-900/90 border ${
                        errors.message ? "border-red-500/50" : "border-slate-700"
                      } rounded-xl text-slate-100 placeholder:text-slate-500 text-sm leading-relaxed focus:border-blue-500 focus:outline-none transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                    <p className="text-xs text-slate-600 text-right mt-0.5">
                      {form.message.length} chars
                    </p>
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-400 flex items-center justify-center gap-1.5 p-2.5 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <AlertCircle size={14} /> Failed to send message. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full justify-center mt-3 sm:mt-4 py-3.5 px-6 rounded-xl font-semibold text-sm shadow-lg"
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
