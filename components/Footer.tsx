import Link from "next/link";
import NexusLogo from "./NexusLogo";
import { site } from "@/lib/site";
import { articles } from "@/lib/blog";
import { InstagramIcon, LinkedInIcon, MailIcon } from "./home/icons";

const topColumns = [
  {
    title: "Skills",
    links: [
      { label: "Excel", href: "/course" },
      { label: "SQL", href: "/course" },
      { label: "Power BI", href: "/course" },
      { label: "Python & pandas", href: "/course" },
      { label: "Statistics", href: "/course" },
      { label: "Applied generative AI", href: "/blog/ai-for-data-analysts-responsible-workflow" },
      { label: "Data storytelling", href: "/course" },
      { label: "Git & GitHub", href: "/blog/data-analyst-portfolio-projects-uk" }
    ],
    more: { label: "see the full curriculum", href: "/course" }
  },
  {
    title: "Programme",
    links: [
      { label: "12-week Data Analytics + AI Accelerator", href: "/course" },
      { label: "Personalised learning", href: "/personalised-learning" },
      { label: "Skill-gap assessment", href: "/personalised-learning" },
      { label: "Portfolio projects", href: "/blog/data-analyst-portfolio-projects-uk" },
      { label: "Career & placement support", href: "/career-support" }
    ],
    more: { label: "see the 12-week plan", href: "/course" }
  },
  {
    title: "Career guides",
    links: articles.slice(0, 6).map((a) => ({ label: a.title.split(":")[0], href: `/blog/${a.slug}` })),
    more: { label: "see more Guides", href: "/blog" }
  },
  {
    title: "Helpful resources",
    links: [
      { label: "Become a Data Analyst in the UK", href: "/blog/how-to-become-data-analyst-uk-12-week-roadmap" },
      { label: "Skill-gap checklist", href: "/blog/data-analyst-skill-gap-assessment-checklist" },
      { label: "Data analyst CV for career changers", href: "/blog/data-analyst-cv-uk-career-changer" },
      { label: "SQL interview preparation", href: "/blog/sql-interview-preparation-data-analyst" },
      { label: "Power BI portfolio checklist", href: "/blog/power-bi-portfolio-checklist" }
    ],
    more: { label: "see more Resources", href: "/blog" }
  }
];

export default function Footer() {
  return (
    <footer className="mxFooter">
      <div className="mxWrap">
        <div className="mxFooter__top">
          <NexusLogo inverse />
          <div className="mxFooter__social">
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={26} /></a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={26} /></a>
            <a href={`mailto:${site.email}`} aria-label="Email"><MailIcon size={26} /></a>
          </div>
        </div>

        <div className="mxFooter__cols">
          {topColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mxMono">{col.title}</h3>
              <ul>{col.links.map((l) => <li key={l.label}><Link href={l.href}>{l.label}</Link></li>)}</ul>
              <Link className="mxFooter__more" href={col.more.href}>{col.more.label}</Link>
            </div>
          ))}
        </div>

        <hr />

        <div className="mxFooter__cols mxFooter__cols--3">
          <div>
            <h3>Mastery Nexus</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/course">The programme</Link></li>
              <li><Link href="/career-support">Career support</Link></li>
              <li><Link href="/blog">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              <li><Link href="/contact">Contact us</Link></li>
              <li><Link href="/contact">Book a free consultation</Link></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="/sitemap.xml">Sitemap</a></li>
              <li><a href="/llms.txt">llms.txt</a></li>
              <li><span>Placement support and any guarantee are subject to programme terms.</span></li>
            </ul>
          </div>
        </div>

        <div className="mxFooter__bottom">
          <span>© 2026 Mastery Nexus. All rights reserved.</span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
