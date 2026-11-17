import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import CareerQuiz from "@/components/CareerQuiz";
import { site } from "@/lib/site";
import { allItems } from "@/lib/catalog";

const inter = Inter({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-inter", display: "swap" });

const searchIndex = allItems.map(({ id, kind, title, tool, toolColor, provider, duration, href }) => ({ id, kind, title, tool, toolColor, provider, duration, href }));

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Mastery Nexus | Data Analyst Course UK | Personalised 12-Week Career Training", template: "%s | Mastery Nexus" },
  description: site.description,
  keywords: ["data analyst course UK", "data analytics course UK", "Power BI course UK", "SQL course UK", "data analyst placement support", "personalised data analytics training"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_GB", url: site.url, siteName: site.name, title: "Mastery Nexus — Personalised Data Analyst Career Training", description: site.description, images: [{ url: "/og-card.png", width: 1200, height: 630, alt: "Mastery Nexus Data Analyst Career Training" }] },
  twitter: { card: "summary_large_image", title: "Mastery Nexus — Personalised Data Analyst Career Training", description: site.description, images: ["/og-card.png"] },
  robots: { index: true, follow: true },
  category: "education"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>
        <CursorGlow />
        <Header searchIndex={searchIndex} />
        <main>{children}</main>
        <Footer />
        <CareerQuiz />
      </body>
    </html>
  );
}
