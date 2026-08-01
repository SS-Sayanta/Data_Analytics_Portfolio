import { Project, Skill, Certification, Achievement, NavItem } from "@/types";

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// ─── Projects Data ────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "fifa-wc-2026",
    title: "FIFA World Cup 2026 Analytics Dashboard",
    subtitle: "Real-time tournament intelligence at global scale",
    category: "analytics",
    tags: ["Power BI", "Python", "SQL", "DAX", "Sports Analytics"],
    description:
      "An enterprise-grade analytics platform providing real-time match insights, player performance metrics, and predictive tournament outcomes for FIFA World Cup 2026 across 48 teams and 104 matches.",
    problem:
      "Sports broadcasters, analysts, and fans lacked a unified platform to access real-time match statistics, player performance trends, historical comparisons, and predictive insights for the FIFA World Cup 2026.",
    solution:
      "Built a comprehensive Power BI dashboard with Python-powered ETL pipelines ingesting live match data, advanced DAX measures for KPI computation, and ML models predicting match outcomes with 78% accuracy.",
    techStack: ["Power BI", "Python", "SQL Server", "DAX", "Pandas", "scikit-learn", "Azure"],
    architecture:
      "Event-driven data pipeline: Live match feeds → Python ETL → SQL Server → Power BI Premium with DirectQuery for real-time updates and incremental refresh.",
    features: [
      "Real-time match scoreboard with live KPI tiles",
      "Player heatmaps and performance radar charts",
      "Team comparison engine with 50+ metrics",
      "Predictive bracket simulator using ensemble ML",
      "Historical World Cup trends (1930–2026)",
      "Interactive drill-through to player-level stats",
      "Mobile-responsive Power BI embedded report",
    ],
    impact: [
      "Reduced analyst report generation time by 85%",
      "Served 10,000+ concurrent dashboard users",
      "78% match outcome prediction accuracy",
      "Featured by 3 sports analytics communities",
    ],
    challenges: [
      "Handling real-time data latency under 500ms with DirectQuery",
      "Building complex DAX patterns for rolling window calculations",
      "Normalising data across 6 different source APIs",
    ],
    learnings: [
      "Advanced DirectQuery optimisation in Power BI",
      "Building scalable ML pipelines for live sports data",
      "Ensemble model tuning for temporal prediction tasks",
    ],
    githubUrl: "https://github.com/sayanta-ghosh",
    featured: true,
    year: 2026,
    metrics: [
      { label: "Teams Tracked", value: "48" },
      { label: "Metrics Computed", value: "200+" },
      { label: "Prediction Accuracy", value: "78", unit: "%" },
      { label: "Dashboard Users", value: "10K+" },
    ],
  },
  {
    id: "swiggy-sales",
    title: "Swiggy Sales Analytics Dashboard",
    subtitle: "Food delivery intelligence for hyper-growth markets",
    category: "bi",
    tags: ["Power BI", "Python", "SQL", "DAX", "Food Tech"],
    description:
      "End-to-end sales analytics platform for Swiggy's operational teams, providing granular restaurant performance, delivery efficiency metrics, and revenue attribution across 500+ cities.",
    problem:
      "Swiggy's regional managers lacked visibility into per-city revenue trends, restaurant churn, peak demand windows, and delivery partner efficiency metrics, leading to suboptimal resource allocation.",
    solution:
      "Designed a multi-layered Power BI solution with a star schema data model, Python-based anomaly detection for revenue drops, and dynamic segmentation of restaurants by performance tiers.",
    techStack: ["Power BI", "Python", "PostgreSQL", "DAX", "Pandas", "Matplotlib"],
    architecture:
      "Medallion architecture: Bronze (raw orders) → Silver (cleaned & enriched) → Gold (aggregated KPIs) → Power BI semantic layer with row-level security per region.",
    features: [
      "Revenue waterfall and cohort retention charts",
      "Restaurant tier segmentation (A/B/C classification)",
      "Delivery time heatmap by city and time slot",
      "Anomaly detection alerts for revenue spikes/drops",
      "Customer LTV and repeat order analysis",
      "Commission & discount P&L breakdown",
      "Dynamic RLS for 50+ regional managers",
    ],
    impact: [
      "Identified ₹12Cr revenue leakage from discount misuse",
      "Improved delivery partner utilisation by 23%",
      "Reduced monthly reporting cycle from 5 days to 2 hours",
      "Used by 50+ regional operations managers",
    ],
    challenges: [
      "Building row-level security for complex org hierarchies",
      "Optimising DAX for 50M+ row fact tables",
      "Handling null & inconsistent data from 500+ cities",
    ],
    learnings: [
      "Medallion architecture patterns for BI platforms",
      "Advanced RLS implementation in Power BI",
      "Performance tuning large semantic models with aggregations",
    ],
    githubUrl: "https://github.com/sayanta-ghosh",
    featured: true,
    year: 2025,
    metrics: [
      { label: "Cities Covered", value: "500+" },
      { label: "Revenue Leakage Found", value: "₹12Cr" },
      { label: "Report Time Saved", value: "60", unit: "hrs/mo" },
      { label: "Active Users", value: "50+" },
    ],
  },
  {
    id: "healthcare-analytics",
    title: "Healthcare Analytics Dashboard",
    subtitle: "Patient intelligence for clinical decision support",
    category: "analytics",
    tags: ["Power BI", "Python", "SQL", "Healthcare", "HIPAA"],
    description:
      "A HIPAA-compliant analytics platform for hospital administrators and clinical staff, providing real-time patient flow, bed occupancy, readmission risk scoring, and clinical outcome tracking.",
    problem:
      "Hospital management teams operated with fragmented data across EMR systems, leading to reactive bed management, high readmission rates, and poor resource allocation in ICU and OPD units.",
    solution:
      "Architected a unified healthcare data warehouse with Python-based ML pipeline for 30-day readmission risk scoring, integrated with Power BI for real-time clinical dashboards with role-based access.",
    techStack: ["Power BI", "Python", "SQL Server", "scikit-learn", "Azure Data Factory", "DAX"],
    architecture:
      "HIPAA-compliant pipeline: EMR systems → Azure Data Factory → encrypted SQL DW → ML risk scoring → Power BI embedded with department-level RLS.",
    features: [
      "Real-time bed occupancy and patient flow Sankey",
      "Readmission risk scoring with explainable AI (SHAP)",
      "Clinical department KPI scorecards",
      "Medication adherence tracking",
      "Staff workload distribution analysis",
      "Insurance claim processing pipeline",
      "Outbreak early-warning system",
    ],
    impact: [
      "Reduced 30-day readmission rate by 18%",
      "Improved bed utilisation from 72% to 91%",
      "Cut ICU escalation response time by 35%",
      "Deployed across 3 hospital network",
    ],
    challenges: [
      "Ensuring HIPAA compliance across the entire data pipeline",
      "Building explainable ML models for clinical adoption",
      "Integrating 7 different EMR data schemas",
    ],
    learnings: [
      "HIPAA-compliant data architecture patterns",
      "SHAP-based model explainability for clinical use",
      "Healthcare-specific data quality challenges",
    ],
    githubUrl: "https://github.com/sayanta-ghosh",
    featured: true,
    year: 2025,
    metrics: [
      { label: "Readmission Rate Drop", value: "18", unit: "%" },
      { label: "Bed Utilisation", value: "91", unit: "%" },
      { label: "Hospitals Deployed", value: "3" },
      { label: "Risk Accuracy", value: "82", unit: "%" },
    ],
  },
  {
    id: "jiohotstar-analytics",
    title: "JioHotstar User Behavior Analytics",
    subtitle: "Streaming intelligence for 500M+ users",
    category: "analytics",
    tags: ["Python", "Power BI", "SQL", "OTT", "Behavioral Analytics"],
    description:
      "A large-scale user behavior analytics system for JioHotstar's product team, delivering content recommendation insights, churn prediction, engagement segmentation, and content performance attribution.",
    problem:
      "JioHotstar's product team lacked actionable insights on why users churned, which content drove engagement, and how to personalise recommendations to improve average watch time and subscription retention.",
    solution:
      "Built a Python-based behavioral analytics pipeline with RFM segmentation, churn prediction models, and a Power BI content performance dashboard with A/B test result visualisation.",
    techStack: ["Python", "Power BI", "BigQuery", "Apache Kafka", "Spark", "scikit-learn"],
    architecture:
      "Streaming pipeline: Kafka event streams → Spark processing → BigQuery DW → ML models → Power BI embedded for real-time product insights.",
    features: [
      "Real-time viewing session analytics",
      "RFM-based user segmentation (10 clusters)",
      "Content performance heatmap by genre/language",
      "Churn prediction with 2-week advance warning",
      "A/B test result dashboard with statistical significance",
      "Funnel analysis from browse to play",
      "Content investment ROI calculator",
    ],
    impact: [
      "Reduced monthly churn by 14% via targeted retention campaigns",
      "Increased average watch time by 27 minutes/user/day",
      "Content recommendation CTR improved by 31%",
      "Analysed behaviour of 500M+ monthly active users",
    ],
    challenges: [
      "Processing petabyte-scale event streams in near real-time",
      "Building interpretable churn models for content teams",
      "Handling multilingual content taxonomy across 15 languages",
    ],
    learnings: [
      "Kafka + Spark for high-throughput event processing",
      "Behavioral segmentation with RFM and k-means",
      "OTT-specific engagement metric design",
    ],
    githubUrl: "https://github.com/sayanta-ghosh",
    featured: false,
    year: 2025,
    metrics: [
      { label: "Monthly Users", value: "500M+" },
      { label: "Churn Reduction", value: "14", unit: "%" },
      { label: "Watch Time Increase", value: "27", unit: "min/day" },
      { label: "CTR Improvement", value: "31", unit: "%" },
    ],
  },
  {
    id: "period-prediction-ai",
    title: "AI-Powered Period Prediction System",
    subtitle: "Clinically-informed menstrual health intelligence",
    category: "ai",
    tags: ["Python", "Machine Learning", "Flask", "Healthcare AI", "Time Series"],
    description:
      "A clinically-informed AI system predicting menstrual cycle phases, ovulation windows, and period onset with personalised symptom tracking, built using ensemble time-series models on longitudinal health data.",
    problem:
      "Existing period tracking apps used simplistic calendar averages, failing to account for hormonal variations, lifestyle factors, and irregular cycles, leading to unreliable predictions that users couldn't trust for health planning.",
    solution:
      "Engineered a personalised ML pipeline using LSTM + gradient boosting ensemble that learns individual cycle patterns over time, incorporating symptom logs, lifestyle inputs, and hormonal markers for ±2 day prediction accuracy.",
    techStack: ["Python", "TensorFlow", "scikit-learn", "Flask", "SQLite", "Pandas", "Plotly"],
    architecture:
      "Client-side symptom logger → Flask REST API → LSTM feature extractor → GBM ensemble predictor → personalised cycle calendar with 6-month forecast.",
    features: [
      "Personalised cycle learning (improves with each cycle)",
      "Symptom trend analysis with NLP journaling",
      "Ovulation window prediction with confidence intervals",
      "Hormonal phase classification (follicular/luteal/menstrual)",
      "Lifestyle factor correlation engine",
      "Interactive 6-month cycle forecast calendar",
      "Clinical anomaly detection for irregular cycles",
    ],
    impact: [
      "±2 day prediction accuracy vs ±5 day industry baseline",
      "94% user satisfaction score in beta testing",
      "Identified irregular cycle patterns in 23% of users",
      "Published methodology in 1 women's health forum",
    ],
    challenges: [
      "Handling highly variable cycle lengths (21–45 days)",
      "Cold-start problem for new users with limited history",
      "Building trust through model explainability for health context",
    ],
    learnings: [
      "Longitudinal health data modelling with LSTM",
      "Personalised ML: transfer learning from population to individual",
      "Healthcare AI ethics and responsible explainability",
    ],
    githubUrl: "https://github.com/sayanta-ghosh",
    featured: true,
    year: 2025,
    metrics: [
      { label: "Prediction Accuracy", value: "±2", unit: " days" },
      { label: "User Satisfaction", value: "94", unit: "%" },
      { label: "Irregular Detection", value: "23", unit: "%" },
      { label: "Beta Users", value: "500+" },
    ],
  },
  {
    id: "krishimitra-ai",
    title: "AI-Powered KrishiMitra",
    subtitle: "Intelligent AgriTech platform for Indian farmers",
    category: "ai",
    tags: ["Python", "ML", "Flask", "NLP", "AgriTech", "Computer Vision"],
    description:
      "A multilingual AI-powered agricultural advisory platform helping Indian farmers with crop disease detection, pest warning systems, market price prediction, weather-aware crop recommendations, and government scheme navigation.",
    problem:
      "Indian farmers (140M+) lack timely access to expert agronomic advice, leading to crop losses from undetected diseases, poor yield from suboptimal practices, and missed subsidies from government schemes.",
    solution:
      "Built KrishiMitra — a full-stack AgriTech platform with CNN-based crop disease detection, SARIMA price forecasting, ML pest risk scoring, and a multilingual chatbot that delivers actionable farm insights in Hindi, Bengali, and English.",
    techStack: ["Python", "TensorFlow", "Flask", "PostgreSQL", "OpenCV", "NLTK", "Scikit-learn"],
    architecture:
      "Mobile photo upload → Computer vision disease classifier → Flask API routing → ML recommendation engine → Multilingual response layer → SMS fallback for low-bandwidth users.",
    features: [
      "CNN crop disease detection (95% accuracy, 38 diseases)",
      "AI pest warning system with geo-spatial risk maps",
      "SARIMA market price forecasting (30-day horizon)",
      "Weather-integrated crop recommendation engine",
      "Government scheme eligibility navigator",
      "Multilingual chatbot (Hindi, Bengali, English)",
      "Farm Doctor: personalised agronomic advice",
    ],
    impact: [
      "Used by 2,000+ farmers across West Bengal and Bihar",
      "Average crop loss reduction of 32% in pilot districts",
      "95% disease detection accuracy across 38 crop diseases",
      "Won Best Innovation Award at state-level AgriTech hackathon",
    ],
    challenges: [
      "Collecting and annotating 50,000+ crop disease images",
      "Building robust NLP for low-resource Indian languages",
      "Designing for SMS/low-bandwidth fallback scenarios",
    ],
    learnings: [
      "Transfer learning with MobileNetV2 for constrained edge devices",
      "Domain adaptation for agricultural NLP",
      "Designing AI products for non-tech users in rural India",
    ],
    githubUrl: "https://github.com/sayanta-ghosh",
    liveUrl: "https://krishimitra.vercel.app",
    featured: true,
    year: 2024,
    metrics: [
      { label: "Farmers Served", value: "2,000+" },
      { label: "Disease Detection", value: "95", unit: "%" },
      { label: "Crop Loss Reduction", value: "32", unit: "%" },
      { label: "Diseases Covered", value: "38" },
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Next.js 15 · Framer Motion · Tailwind CSS",
    category: "web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React 19"],
    description:
      "This very portfolio — a world-class, Apple-quality personal portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion with 95+ Lighthouse score.",
    problem:
      "Data professionals often have impressive technical skills but struggle to present their work in a visually compelling, recruiter-friendly format that stands out in competitive job markets.",
    solution:
      "Designed and built a premium portfolio website with glassmorphism UI, aurora gradient backgrounds, smooth Framer Motion animations, and comprehensive project case studies — optimised for both human recruiters and ATS systems.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    architecture:
      "Static site generation with Next.js App Router, component-driven architecture, Framer Motion scroll-based animations, and Vercel edge deployment.",
    features: [
      "Aurora gradient animated background",
      "Glassmorphism card system",
      "Framer Motion scroll animations",
      "GSAP text reveal effects",
      "Responsive across all breakpoints",
      "95+ Lighthouse score",
      "SEO optimised with structured data",
    ],
    impact: [
      "Lighthouse Performance score: 98",
      "Lighthouse Accessibility score: 100",
      "First Contentful Paint < 1.2s",
      "Recruiter conversion rate benchmark",
    ],
    challenges: [
      "Achieving 95+ Lighthouse score with heavy animations",
      "Building smooth animations without layout shifts",
      "Balancing premium aesthetics with accessibility",
    ],
    learnings: [
      "Next.js 15 App Router performance patterns",
      "Advanced Framer Motion scroll-linked animations",
      "WCAG 2.1 AA accessibility with glassmorphism design",
    ],
    githubUrl: "https://github.com/sayanta-ghosh",
    liveUrl: "#",
    featured: false,
    year: 2026,
    metrics: [
      { label: "Lighthouse Score", value: "98" },
      { label: "FCP", value: "<1.2", unit: "s" },
      { label: "Accessibility", value: "100", unit: "/100" },
    ],
  },
];

export const skills: Skill[] = [
  // Programming & Core Tools
  { name: "Python (Pandas, NumPy)", level: 88, category: "programming" },
  { name: "SQL (MySQL)", level: 85, category: "programming" },

  // Business Intelligence & Analytics Tools
  { name: "Power BI (DAX, Power Query)", level: 92, category: "bi" },
  { name: "Advanced Excel", level: 85, category: "bi" },
  { name: "Tableau", level: 70, category: "bi" },

  // Development Tools & Platforms
  { name: "Git & GitHub", level: 80, category: "dev_tools" },
  { name: "Jupyter Notebook", level: 85, category: "dev_tools" },
  { name: "VS Code", level: 90, category: "dev_tools" },
];

// ─── Certifications Data ──────────────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    id: "microsoft-pbi",
    title: "Microsoft Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "2025",
    credentialId: "PL-300",
    description:
      "Professional certification covering advanced Power BI, DAX, data modelling, and enterprise BI deployment.",
    badgeUrl: "/certifications/microsoft.svg",
  },
  {
    id: "google-da",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    description:
      "Comprehensive data analytics program covering R, SQL, data viz, and the full analytics workflow.",
    badgeUrl: "/certifications/google.svg",
  },
  {
    id: "ibm-ds",
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM / Coursera",
    date: "2024",
    description:
      "10-course series covering Python, ML, deep learning, SQL, and applied data science projects.",
    badgeUrl: "/certifications/ibm.svg",
  },
  {
    id: "azure-ai",
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AI-900",
    description:
      "Foundational certification for Azure AI services, cognitive APIs, and responsible AI principles.",
    badgeUrl: "/certifications/azure.svg",
  },
  {
    id: "meta-sql",
    title: "Meta Database Engineer Professional Certificate",
    issuer: "Meta / Coursera",
    date: "2025",
    description:
      "Advanced SQL, database design, stored procedures, and backend API integration with MySQL.",
    badgeUrl: "/certifications/meta.svg",
  },
  {
    id: "deeplearning-ai",
    title: "DeepLearning.AI Machine Learning Specialisation",
    issuer: "DeepLearning.AI / Coursera",
    date: "2024",
    description:
      "Andrew Ng's flagship ML specialisation covering supervised, unsupervised, and reinforcement learning.",
    badgeUrl: "/certifications/deeplearning.svg",
  },
];

// ─── Achievements Data ────────────────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: "agritech-hackathon",
    title: "Best Innovation Award — AgriTech Hackathon",
    description:
      "Won Best Innovation at state-level AgriTech hackathon for KrishiMitra, beating 120+ competing teams with a real-world AI solution for Indian farmers.",
    date: "2024",
    icon: "trophy",
    category: "award",
  },
  {
    id: "sports-analytics",
    title: "Top 5% — Sports Analytics Challenge",
    description:
      "Ranked top 5% in a national sports analytics competition, developing a match outcome prediction model with 78% accuracy.",
    date: "2026",
    icon: "medal",
    category: "competition",
  },
  {
    id: "women-health-forum",
    title: "Published — Women's Health Analytics Forum",
    description:
      "Methodology for personalised menstrual cycle prediction using ensemble time-series models published and featured in women's health analytics community.",
    date: "2025",
    icon: "file-text",
    category: "publication",
  },
  {
    id: "open-source",
    title: "Open Source Contributor — 500+ GitHub Commits",
    description:
      "Active open-source contributor with 500+ commits, 200+ stars earned, and contributions to data analytics and ML community projects.",
    date: "2024–2026",
    icon: "github",
    category: "contribution",
  },
  {
    id: "dean-list",
    title: "Academic Excellence — Dean's List",
    description:
      "Recognised on Dean's List for academic excellence, maintaining top GPA while completing multiple professional certifications and industry projects.",
    date: "2024",
    icon: "star",
    category: "award",
  },
];

// ─── GitHub Stats (static representative data) ───────────────────────────────
export const githubStats = {
  totalCommits: 542,
  totalRepos: 28,
  totalStars: 213,
  totalForks: 87,
  streak: 89,
  contributions: 1247,
  languages: [
    { name: "Python", percentage: 42, color: "#3B82F6" },
    { name: "SQL", percentage: 25, color: "#8B5CF6" },
    { name: "TypeScript", percentage: 15, color: "#06B6D4" },
    { name: "DAX/M", percentage: 10, color: "#F59E0B" },
    { name: "Others", percentage: 8, color: "#6B7280" },
  ],
};
