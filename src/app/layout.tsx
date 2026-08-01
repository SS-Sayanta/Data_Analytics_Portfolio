import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sayanta-ghosh.dev"),
  title: "Sayanta Ghosh | Data Analyst & BI Developer Portfolio",
  description:
    "Portfolio of Sayanta Ghosh — Data Analyst, Business Intelligence Developer, Power BI Expert, Python Developer & AI Enthusiast. Expert in Power BI, Python, SQL, DAX, Machine Learning, and Azure.",
  keywords: [
    "Sayanta Ghosh",
    "Data Analyst",
    "Business Intelligence Developer",
    "Power BI Developer",
    "Python Developer",
    "AI Engineer",
    "SQL Expert",
    "Machine Learning",
    "DAX",
    "Azure",
    "Data Science Portfolio",
    "Analytics Dashboard",
    "KrishiMitra",
    "JioHotstar Analytics",
    "FIFA World Cup Dashboard",
    "Healthcare Analytics",
  ],
  authors: [{ name: "Sayanta Ghosh", url: "https://sayanta-ghosh.dev" }],
  creator: "Sayanta Ghosh",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sayanta-ghosh.dev",
    title: "Sayanta Ghosh | Data Analyst & BI Developer Portfolio",
    description:
      "Transforming raw data into actionable insights. Power BI, Python, SQL, Machine Learning. 7+ enterprise projects. 6 certifications.",
    siteName: "Sayanta Ghosh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sayanta Ghosh — Data Analyst & BI Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayanta Ghosh | Data Analyst & BI Developer",
    description:
      "Power BI · Python · SQL · Machine Learning. 7+ enterprise data projects. Building AI systems that solve real problems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://sayanta-ghosh.dev",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sayanta Ghosh",
              jobTitle: "Data Analyst & Business Intelligence Developer",
              description:
                "Data Analyst specializing in Power BI, Python, SQL, Machine Learning, and AI systems",
              url: "https://sayanta-ghosh.dev",
              sameAs: [
                "https://github.com/sayanta-ghosh",
                "https://linkedin.com/in/sayanta-ghosh",
              ],
              knowsAbout: [
                "Power BI",
                "Data Analytics",
                "Business Intelligence",
                "Python",
                "SQL",
                "Machine Learning",
                "DAX",
                "Azure",
              ],
            }),
          }}
        />
      </head>
      <body
        className="antialiased min-h-screen bg-[#030712] text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
