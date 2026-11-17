import { articles } from "@/lib/blog";

export type CardKind = "Module" | "Project" | "Career support" | "Guide";

export type CatalogItem = {
  id: string;
  kind: CardKind;
  title: string;
  provider: string;
  duration?: string;
  level?: string;
  image: string;
  tool: string;
  toolColor: string;
  href: string;
  tags: string[];
  isNew?: boolean;
};

const img = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`;

export const modules: CatalogItem[] = [
  { id: "m-diagnostic", kind: "Module", title: "Skill-Gap Diagnostic & Personal Learning Map", provider: "Mastery Nexus", duration: "1 week to complete", level: "All levels", image: img("1434030216411-0b793f4b4173"), tool: "Mastery Map", toolColor: "#d64000", href: "/personalised-learning", tags: ["featured", "career"], isNew: true },
  { id: "m-excel", kind: "Module", title: "Excel for Analysts: Cleaning, Pivots & KPIs", provider: "Mastery Nexus", duration: "2 weeks to complete", level: "Introductory level", image: img("1543286386-713bdd548da4"), tool: "Excel", toolColor: "#1d6f42", href: "/course", tags: ["featured", "data-prep"] },
  { id: "m-powerbi", kind: "Module", title: "Power BI: Modelling, DAX & Dashboard Storytelling", provider: "Mastery Nexus", duration: "2 weeks to complete", level: "Intermediate level", image: img("1551288049-bebda4e38f71"), tool: "Power BI", toolColor: "#c99a00", href: "/course", tags: ["featured", "bi"] },
  { id: "m-sql", kind: "Module", title: "SQL for Business Analysis: Joins, CTEs & Windows", provider: "Mastery Nexus", duration: "2 weeks to complete", level: "Introductory level", image: img("1555066931-4365d14bab8c"), tool: "SQL", toolColor: "#336791", href: "/course", tags: ["featured", "data-prep", "programming"] },
  { id: "m-python", kind: "Module", title: "Python & pandas for Data Analysis", provider: "Mastery Nexus", duration: "2 weeks to complete", level: "Intermediate level", image: img("1517694712202-14dd9538aa97"), tool: "Python", toolColor: "#3776ab", href: "/course", tags: ["programming"] },
  { id: "m-genai", kind: "Module", title: "Responsible Generative AI for Analyst Workflows", provider: "Mastery Nexus", duration: "1 week to complete", level: "Intermediate level", image: img("1677442136019-21780ecad995"), tool: "Applied AI", toolColor: "#6b4fd8", href: "/blog/ai-for-data-analysts-responsible-workflow", tags: ["ai"], isNew: true },
  { id: "m-stats", kind: "Module", title: "Statistics for Better Business Decisions", provider: "Mastery Nexus", duration: "1 week to complete", level: "Introductory level", image: img("1504868584819-f8e8b4b6d7e3"), tool: "Statistics", toolColor: "#c2410c", href: "/course", tags: ["ai"] },
  { id: "m-portfolio", kind: "Module", title: "Portfolio Sprint: Case Studies, GitHub & Walkthroughs", provider: "Mastery Nexus", duration: "1 week to complete", level: "All levels", image: img("1498050108023-c5249f4df085"), tool: "GitHub", toolColor: "#24292f", href: "/blog/data-analyst-portfolio-projects-uk", tags: ["career"], isNew: true },
  { id: "m-career", kind: "Module", title: "Career Sprint: CV, LinkedIn & Mock Interviews", provider: "Mastery Nexus", duration: "2 weeks to complete", level: "All levels", image: img("1573496359142-b8d87734a5a2"), tool: "Careers", toolColor: "#00262b", href: "/career-support", tags: ["featured", "career"] }
];

export const projects: CatalogItem[] = [
  { id: "p-kpi", kind: "Project", title: "Operations KPI Tracker", provider: "Excel · Power BI", duration: "Built in weeks 1–2", level: "Introductory level", image: img("1460925895917-afdab827c52f"), tool: "Excel", toolColor: "#1d6f42", href: "/blog/data-analyst-portfolio-projects-uk", tags: ["data-prep", "bi"] },
  { id: "p-exec", kind: "Project", title: "Executive BI Dashboard", provider: "Power BI · DAX", duration: "Built in weeks 3–4", level: "Intermediate level", image: img("1526628953301-3e589a6a8b74"), tool: "Power BI", toolColor: "#c99a00", href: "/blog/power-bi-portfolio-checklist", tags: ["bi"] },
  { id: "p-sql", kind: "Project", title: "SQL Business Case", provider: "SQL", duration: "Built in weeks 5–6", level: "Intermediate level", image: img("1454165804606-c3d57bc86b40"), tool: "SQL", toolColor: "#336791", href: "/blog/sql-interview-preparation-data-analyst", tags: ["programming", "data-prep"] },
  { id: "p-notebook", kind: "Project", title: "Customer Insight Notebook", provider: "Python · pandas", duration: "Built in weeks 7–8", level: "Intermediate level", image: img("1488190211105-8b0e65b80b4e"), tool: "Python", toolColor: "#3776ab", href: "/blog/data-analyst-portfolio-projects-uk", tags: ["programming"] },
  { id: "p-memo", kind: "Project", title: "Decision Memo", provider: "Statistics", duration: "Built in week 9", level: "Introductory level", image: img("1542744173-8e7e53415bb0"), tool: "Statistics", toolColor: "#c2410c", href: "/blog/data-analyst-portfolio-projects-uk", tags: ["ai"] },
  { id: "p-copilot", kind: "Project", title: "Analyst Copilot", provider: "Python · Applied AI", duration: "Built in weeks 7–10", level: "Advanced level", image: img("1531482615713-2afd69097998"), tool: "Applied AI", toolColor: "#6b4fd8", href: "/blog/ai-for-data-analysts-responsible-workflow", tags: ["ai"], isNew: true }
];

export const careerSupport: CatalogItem[] = [
  { id: "c-cv", kind: "Career support", title: "UK CV & LinkedIn Positioning", provider: "Career team", duration: "Weeks 11–12", image: img("1586281380349-632531db7ed4"), tool: "CV", toolColor: "#00262b", href: "/blog/data-analyst-cv-uk-career-changer", tags: ["career"] },
  { id: "c-mock", kind: "Career support", title: "Technical & Behavioural Mock Interviews", provider: "Mentor-led", duration: "Weeks 11–12", image: img("1552664730-d307ca884978"), tool: "Interviews", toolColor: "#00262b", href: "/career-support", tags: ["career"] },
  { id: "c-target", kind: "Career support", title: "Role Targeting & Application Tracking", provider: "Career team", duration: "Ongoing", image: img("1551434678-e076c223a692"), tool: "Job search", toolColor: "#00262b", href: "/career-support", tags: ["career"] },
  { id: "c-place", kind: "Career support", title: "Placement Guidance & Portfolio Review", provider: "Career team", duration: "Ongoing", image: img("1600880292203-757bb62b4baf"), tool: "Placement", toolColor: "#00262b", href: "/career-support", tags: ["career"] }
];

const guideImages = [
  "1522202176988-66273c2fd55f",
  "1434030216411-0b793f4b4173",
  "1516321318423-f06f85e504b3",
  "1460925895917-afdab827c52f",
  "1580894894513-541e068a3e2b",
  "1555066931-4365d14bab8c",
  "1677442136019-21780ecad995",
  "1551288049-bebda4e38f71"
];

const guideTags: Record<string, string[]> = {
  "how-to-become-data-analyst-uk-12-week-roadmap": ["career"],
  "data-analyst-skill-gap-assessment-checklist": ["career"],
  "excel-sql-power-bi-python-what-data-analysts-need": ["data-prep", "programming"],
  "data-analyst-portfolio-projects-uk": ["career", "bi"],
  "data-analyst-cv-uk-career-changer": ["career"],
  "sql-interview-preparation-data-analyst": ["programming", "career"],
  "ai-for-data-analysts-responsible-workflow": ["ai"],
  "power-bi-portfolio-checklist": ["bi"]
};

export const guides: CatalogItem[] = articles.map((a, i) => ({
  id: `g-${a.slug}`,
  kind: "Guide",
  title: a.title,
  provider: "Mastery Nexus Careers",
  duration: a.readTime,
  image: img(guideImages[i % guideImages.length]),
  tool: a.category,
  toolColor: "#d64000",
  href: `/blog/${a.slug}`,
  tags: guideTags[a.slug] ?? [],
  isNew: a.slug === "ai-for-data-analysts-responsible-workflow" || a.slug === "power-bi-portfolio-checklist"
}));

export const allItems: CatalogItem[] = [...modules, ...projects, ...careerSupport, ...guides];

export const heroItems = ["m-excel", "m-powerbi", "m-sql", "m-python", "m-stats", "m-genai"].map(
  (id) => modules.find((m) => m.id === id)!
);

export const latestItems = allItems.filter((i) => i.isNew);

export const byTag = (tag: string, limit = 4) => allItems.filter((i) => i.tags.includes(tag)).slice(0, limit);

export const topicFilters = [
  { id: "featured", label: "Featured" },
  { id: "data-prep", label: "Data Preparation" },
  { id: "bi", label: "Reporting & BI" },
  { id: "programming", label: "SQL & Python" },
  { id: "ai", label: "Statistics & Applied AI" },
  { id: "career", label: "Career & Portfolio" }
];
