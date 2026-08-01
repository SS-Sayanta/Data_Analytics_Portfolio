"use client";

import { motion } from "framer-motion";
import { Monitor, Users, Activity, ShoppingCart } from "lucide-react";
import { staggerContainer, fadeUp, scaleIn, viewportConfig } from "@/lib/animations";

const dashboards = [
  {
    id: "fifa",
    title: "FIFA World Cup 2026",
    subtitle: "Tournament analytics & match predictions",
    icon: Activity,
    color: "#3b82f6",
    metrics: ["48 Teams", "104 Matches", "200+ KPIs"],
    tags: ["Power BI", "DAX", "Python"],
    preview: {
      type: "fifa",
      primaryColor: "#3b82f6",
      secondaryColor: "#8b5cf6",
    },
  },
  {
    id: "swiggy",
    title: "Swiggy Sales Analytics",
    subtitle: "Revenue intelligence for 500+ cities",
    icon: ShoppingCart,
    color: "#f97316",
    metrics: ["500+ Cities", "50M+ Orders", "₹12Cr Found"],
    tags: ["Power BI", "PostgreSQL", "RLS"],
    preview: {
      type: "swiggy",
      primaryColor: "#f97316",
      secondaryColor: "#f59e0b",
    },
  },
  {
    id: "healthcare",
    title: "Healthcare Analytics",
    subtitle: "Clinical outcomes & patient flow",
    icon: Activity,
    color: "#10b981",
    metrics: ["3 Hospitals", "18% Readmission Drop", "91% Bed Use"],
    tags: ["Power BI", "Azure", "ML"],
    preview: {
      type: "healthcare",
      primaryColor: "#10b981",
      secondaryColor: "#06b6d4",
    },
  },
  {
    id: "jiohotstar",
    title: "JioHotstar Behavior Analytics",
    subtitle: "Streaming intelligence at 500M scale",
    icon: Users,
    color: "#8b5cf6",
    metrics: ["500M+ Users", "14% Churn Drop", "31% CTR Up"],
    tags: ["Python", "BigQuery", "Kafka"],
    preview: {
      type: "jiohotstar",
      primaryColor: "#8b5cf6",
      secondaryColor: "#ec4899",
    },
  },
];

/**
 * SVG Dashboard Mockup — Renders a premium-looking BI dashboard preview
 */
function DashboardMockup({
  primaryColor,
  secondaryColor,
  type,
}: {
  primaryColor: string;
  secondaryColor: string;
  type: string;
}) {
  const bars = [65, 80, 45, 90, 70, 55, 85, 60, 75, 50];

  return (
    <svg
      viewBox="0 0 400 220"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Background */}
      <rect width="400" height="220" fill="rgba(3,7,18,0.95)" rx="12" />

      {/* Top bar */}
      <rect width="400" height="28" fill="rgba(255,255,255,0.04)" rx="0" />
      <circle cx="14" cy="14" r="4" fill={`${primaryColor}99`} />
      <circle cx="26" cy="14" r="4" fill={`${secondaryColor}99`} />
      <circle cx="38" cy="14" r="4" fill="rgba(255,255,255,0.2)" />

      {/* Title */}
      <text x="55" y="18" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace">
        {type.toUpperCase()} DASHBOARD
      </text>

      {/* KPI Cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={10 + i * 125}
            y={36}
            width="115"
            height="40"
            fill="rgba(255,255,255,0.04)"
            rx="6"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          <rect
            x={10 + i * 125}
            y={36}
            width="115"
            height="3"
            fill={i === 0 ? primaryColor : i === 1 ? secondaryColor : "#10b981"}
            rx="3"
          />
          <text
            x={18 + i * 125}
            y={56}
            fill="rgba(255,255,255,0.85)"
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
          >
            {i === 0 ? "94.2%" : i === 1 ? "₹12.4Cr" : "2.1K"}
          </text>
          <text
            x={18 + i * 125}
            y={68}
            fill="rgba(255,255,255,0.3)"
            fontSize="6"
            fontFamily="sans-serif"
          >
            {i === 0 ? "ACCURACY" : i === 1 ? "REVENUE" : "USERS"}
          </text>
        </g>
      ))}

      {/* Bar chart */}
      <rect
        x={10}
        y={86}
        width="230"
        height="120"
        fill="rgba(255,255,255,0.02)"
        rx="6"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
      />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={20 + i * 22}
          y={86 + 120 - h * 0.9 - 10}
          width="14"
          height={h * 0.9}
          fill={i % 2 === 0 ? `${primaryColor}cc` : `${secondaryColor}cc`}
          rx="3"
        />
      ))}
      <text x="14" y="198" fill="rgba(255,255,255,0.2)" fontSize="6">
        Monthly Trend ↗
      </text>

      {/* Line chart */}
      <rect
        x={248}
        y={86}
        width="142"
        height="120"
        fill="rgba(255,255,255,0.02)"
        rx="6"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
      />
      <polyline
        points={`258,186 272,156 286,176 300,126 314,146 328,136 342,116 356,131 370,121 384,141`}
        fill="none"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Area fill */}
      <polygon
        points={`258,196 258,186 272,156 286,176 300,126 314,146 328,136 342,116 356,131 370,121 384,141 384,196`}
        fill={`${primaryColor}22`}
      />
      <text x="252" y="100" fill="rgba(255,255,255,0.2)" fontSize="6">
        Performance
      </text>
    </svg>
  );
}

/**
 * Dashboard Showcase Section — Premium BI dashboard previews
 */
export default function DashboardSection() {
  return (
    <section id="dashboards" className="section" aria-label="Dashboard showcase section">
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
            Dashboard Showcase
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Power BI{" "}
            <span className="gradient-text">Dashboards</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl">
            Interactive business intelligence dashboards crafted for enterprise stakeholders.
            Each dashboard tells a complete data story.
          </motion.p>
        </motion.div>

        {/* Dashboard cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-8"
        >
          {dashboards.map((db) => (
            <motion.div
              key={db.id}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl overflow-hidden border border-white/[0.07] transition-all duration-300 hover:border-white/15"
              style={{
                boxShadow: `0 4px 40px ${db.color}15`,
              }}
            >
              {/* Dashboard preview */}
              <div className="p-4 bg-white/[0.02] border-b border-white/5">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 h-5 rounded bg-white/5 mx-2" />
                  <Monitor size={12} className="text-slate-600" />
                </div>
                <DashboardMockup
                  primaryColor={db.preview.primaryColor}
                  secondaryColor={db.preview.secondaryColor}
                  type={db.id}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${db.color}20`, border: `1px solid ${db.color}30` }}
                  >
                    <db.icon size={22} style={{ color: db.color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base leading-tight mb-0.5">
                      {db.title}
                    </h3>
                    <p className="text-sm text-slate-500">{db.subtitle}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {db.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        background: `${db.color}15`,
                        color: db.color,
                        border: `1px solid ${db.color}25`,
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {db.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
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
