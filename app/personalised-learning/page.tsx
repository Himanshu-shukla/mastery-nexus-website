import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Personalised Data Analytics Learning | Skill-Gap Assessment UK",
  description: "See how Mastery Nexus uses an evidence-based skill-gap assessment to personalise data analyst training, projects and mentor priorities.",
  alternates: { canonical: "/personalised-learning" }
};

export default function PersonalisedLearningPage() {
  return <>
    <section className="pageHero pageHero--mint sectionPad"><div><span className="eyebrow">PERSONALISED LEARNING</span><h1>Your learning plan should know what you already know.</h1><p>Mastery Nexus starts with evidence: what you can do today, which roles you want, which proof you lack and how much time you can realistically commit.</p><div className="buttonRow"><Link className="button button--dark" href="/contact">Take the free skill-gap assessment →</Link><a className="button button--ghost" href="#mastery-map">See the scoring model</a></div></div><div className="personalGraphic"><div className="orbit orbit--a"/><div className="orbit orbit--b"/><div className="personCard"><span>YOUR MASTERY MAP</span><strong>Prioritise what moves you closer to the role.</strong><small>Evidence → gaps → weekly priorities → projects → career proof</small></div></div></section>

    <section className="sectionPad sectionGap twoColText"><div><span className="eyebrow">Why generic learning fails</span><h2>Two learners can need the same role—and completely different practice.</h2></div><div><p>Someone with five years in finance may already understand KPIs, stakeholders and business decisions but need SQL and Power BI proof. A developer may code comfortably but struggle to present analysis visually. A graduate may need structure across all six areas.</p><p>Personalisation is not random content. It is a consistent core curriculum with targeted practice depth, project contexts and mentor feedback.</p></div></section>

    <section className="sectionPad sectionGap" id="mastery-map"><div className="sectionHeading sectionHeading--wide"><span className="eyebrow">Mastery Map™ assessment</span><h2>Six areas. Evidence-based scoring. One priority map.</h2><p>Your score comes from short tasks, examples and discussion—not from asking whether you “feel confident”.</p></div><div className="assessmentGrid">{[
      ["Business framing","Can you turn an ambiguous stakeholder request into a measurable question and define useful KPIs?"],
      ["Data preparation","Can you identify data-quality issues, clean them consistently and explain your validation checks?"],
      ["SQL & relational thinking","Can you join the right tables, work at the correct grain and validate totals?"],
      ["Reporting & Power BI","Can you model data, define measures and create a report that supports a decision?"],
      ["Python & statistics","Can you automate repeatable analysis and interpret statistical evidence without overclaiming?"],
      ["Career proof","Can you show and explain projects, position your previous experience and handle interview questions?"]
    ].map(([t,p],i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section>

    <section className="adaptiveSection sectionGap"><div className="sectionPad adaptiveInner"><div><span className="eyebrow eyebrow--light">Adaptive priorities</span><h2>The syllabus stays coherent. Your emphasis changes.</h2><p>We protect the sequence that makes analytical work understandable, while changing the amount of practice and feedback around your biggest gaps.</p></div><div className="adaptiveExamples"><article><strong>Career changer from finance</strong><p>Accelerate business basics. Deepen SQL, Power BI, GitHub and interview project storytelling.</p></article><article><strong>Developer moving into analytics</strong><p>Compress Python foundations. Focus on reporting, stakeholder communication, portfolio design and role positioning.</p></article><article><strong>Complete beginner</strong><p>More guided Excel/data cleaning, foundational SQL drills and smaller checkpoint projects before the capstones.</p></article></div></div></section>

    <section className="sectionPad sectionGap"><div className="sectionHeading"><span className="eyebrow">Weekly mentor loop</span><h2>Assess → practise → build → explain → adjust.</h2></div><div className="loopGrid">{["Review evidence from the week","Choose the next highest-value gap","Complete targeted practice","Apply it in a project or task","Explain your decisions to a mentor","Update the next week’s priority"].map((x,i)=><div key={x}><b>{i+1}</b><span>{x}</span></div>)}</div></section>

    <section className="consultSection sectionPad sectionGap"><div className="consultCopy"><span className="eyebrow">Start with a diagnostic</span><h2>Find out where your real gaps are.</h2><p>The first conversation is designed to be useful even if you do not enrol. Bring your CV, LinkedIn or any projects you already have.</p></div><LeadForm /></section>
  </>;
}
