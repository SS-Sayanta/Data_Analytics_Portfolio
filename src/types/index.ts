/**
 * Core TypeScript type definitions for Sayanta Ghosh's portfolio
 * Enterprise-grade type safety across all components
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "analytics" | "ai" | "web" | "bi";
  tags: string[];
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  architecture: string;
  features: string[];
  impact: string[];
  challenges: string[];
  learnings: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  year: number;
  metrics?: {
    label: string;
    value: string;
    unit?: string;
  }[];
}

export interface Skill {
  name: string;
  level: number; // 0–100
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory =
  | "programming"
  | "bi"
  | "dev_tools";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeUrl?: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  category: "award" | "competition" | "publication" | "contribution";
}

export interface GitHubStats {
  totalCommits: number;
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  streak: number;
  contributions: number;
  languages: { name: string; percentage: number; color: string }[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  timeline: string;
  grade: string;
  specialization?: string;
  details?: string[];
  current?: boolean;
}

export interface AnimationVariant {
  hidden: object;
  visible: object;
}
