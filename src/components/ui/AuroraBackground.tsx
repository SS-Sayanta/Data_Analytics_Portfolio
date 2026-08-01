"use client";

/**
 * Aurora Background — Animated orbs with grid overlay for the premium dark aesthetic
 * Rendered fixed behind all content
 */
export default function AuroraBackground() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Aurora orbs */}
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
        <div className="aurora-grid" />
      </div>
    </>
  );
}
