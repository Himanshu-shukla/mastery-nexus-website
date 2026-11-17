import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { articleBySlug, articles } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() { return articles.map(a=>({slug:a.slug})); }

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params; const article = articleBySlug(slug); if (!article) return {};
  return { title: article.title, description: article.description, keywords: article.keywords, alternates:{canonical:`/blog/${article.slug}`}, openGraph:{type:"article", title:article.title, description:article.description, publishedTime:article.published, modifiedTime:article.updated} };
}

export default async function ArticlePage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params; const article = articleBySlug(slug); if (!article) notFound();
  const schema = { "@context":"https://schema.org", "@type":"Article", headline:article.title, description:article.description, datePublished:article.published, dateModified:article.updated, author:{"@type":"Organization",name:"Mastery Nexus Career Team"}, publisher:{"@type":"Organization",name:site.name,url:site.url}, mainEntityOfPage:`${site.url}/blog/${article.slug}`, keywords:article.keywords.join(", ") };
  return <>
    <JsonLd data={schema} />
    <article className="articlePage">
      <header className="articleHero sectionPad"><div className="articleCrumbs"><Link href="/blog">Career guides</Link><span>→</span><span>{article.category}</span></div><span className="eyebrow">{article.category}</span><h1>{article.title}</h1><p>{article.description}</p><div className="articleMeta"><span>{article.readTime}</span><span>Published 17 Sep 2026</span><span>Reviewed by Mastery Nexus Career Team</span></div></header>
      <div className="articleLayout sectionPad"><aside><strong>In this guide</strong>{article.sections.map(s=><a key={s.heading} href={`#${s.heading.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}>{s.heading}</a>)}<Link href="/contact" className="articleAsideCta">Get a free skill-gap assessment →</Link></aside><div className="articleBody"><p className="articleIntro">{article.intro}</p>{article.sections.map((s)=><section key={s.heading} id={s.heading.toLowerCase().replace(/[^a-z0-9]+/g,'-')}><h2>{s.heading}</h2>{s.answer&&<div className="directAnswer"><strong>In short</strong><p>{s.answer}</p></div>}{s.paragraphs?.map(p=><p key={p}>{p}</p>)}{s.bullets&&<ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>}</section>)}{article.sources&&<section className="sourceBox"><h2>Sources and further reading</h2><p>We use first-party or official sources where they improve the accuracy of a career or skills claim.</p>{article.sources.map(s=><a key={s.href} href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>)}</section>}<div className="articleCta"><span className="eyebrow">Turn the guide into a plan</span><h2>Want to know which of these skills you personally need next?</h2><Link className="button button--orange" href="/contact">Get a free skill-gap assessment →</Link></div></div></div>
    </article>
  </>;
}
