import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Data Analyst Career Guides UK | Skills, Portfolio, CV & Interviews",
  description: "Practical UK data analyst guides covering skills, Power BI, SQL, Python, portfolio projects, career change, CVs and interviews.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage() {
  const categories = [...new Set(articles.map(a=>a.category))];
  return <>
    <section className="blogHero sectionPad"><span className="eyebrow">THE NEXUS NOTEBOOK</span><h1>Career guides for people who want to <em>do the work</em>, not just collect certificates.</h1><p>Practical, source-aware guidance on data analyst skills, projects, interviews, career change and responsible AI use.</p><div className="categoryPills"><span>All</span>{categories.map(c=><span key={c}>{c}</span>)}</div></section>
    <section className="sectionPad blogIndex sectionGap"><div className="featuredArticle"><div className="featuredArt"><span>Featured guide</span><strong>12</strong><small>WEEK ROADMAP</small></div><div><span className="eyebrow">Career Roadmaps</span><h2>{articles[0].title}</h2><p>{articles[0].description}</p><Link className="button button--dark" href={`/blog/${articles[0].slug}`}>Read the full roadmap →</Link></div></div><div className="blogGrid blogGrid--index">{articles.slice(1).map((a,i)=><article className="blogCard" key={a.slug}><div className={`blogArt blogArt--${(i%4)+1}`}><span>{a.category}</span></div><small>{a.readTime} · Updated 17 Sep 2026</small><h3>{a.title}</h3><p>{a.description}</p><Link href={`/blog/${a.slug}`}>Read guide →</Link></article>)}</div></section>
  </>;
}
