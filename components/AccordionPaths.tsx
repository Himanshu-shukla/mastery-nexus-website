"use client";

import { useState } from "react";
import Link from "next/link";

const paths = [
  { title: "Why Mastery Nexus?", short: "Why us", color: "blue", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80", href: "/about", text: "A career product, not a content library: diagnosis, learning, proof and job-search support in one route." },
  { title: "Personalised learning", short: "Your plan", color: "mint", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80", href: "/personalised-learning", text: "Your starting point changes the practice depth, project emphasis and weekly mentor priorities." },
  { title: "12-week programme", short: "Programme", color: "orange", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80", href: "/course", text: "Excel, Power BI, SQL, Python, statistics and applied AI connected through business-focused projects." },
  { title: "Career support", short: "Support", color: "yellow", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80", href: "/career-support", text: "CV, LinkedIn, portfolio storytelling, mock interviews, applications and placement guidance." }
];

export default function AccordionPaths() {
  const [active, setActive] = useState(1);
  return (
    <div className="pathAccordion" onMouseLeave={() => setActive(1)}>
      {paths.map((p, i) => (
        <article key={p.title} className={`pathPanel pathPanel--${p.color} ${active === i ? "pathPanel--active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} tabIndex={0}>
          <img src={p.image} alt="" />
          <div className="pathShade" />
          <div className="pathCollapsed">{p.short}</div>
          <div className="pathContent">
            <span className="eyebrow eyebrow--light">Explore</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <Link href={p.href}>Find out more →</Link>
          </div>
        </article>
      ))}
    </div>
  );
}
