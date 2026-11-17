import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Analyst Course UK | 12-Week Personalised Analytics + AI Programme",
  description: "Learn Excel, Power BI, SQL, Python, statistics and applied AI in a 12-week personalised UK Data Analyst career accelerator with projects and career support.",
  alternates: { canonical: "/course" }
};

const phases = [
  ["Before week 1", "Skill-gap assessment", "Complete short evidence tasks, choose realistic target roles and agree your weekly learning capacity.", "Mastery Map + role target"],
  ["Weeks 1–2", "Excel + data preparation", "Data cleaning, formulas, pivots, lookup logic, KPI definitions and clear business summaries.", "Operations KPI Tracker"],
  ["Weeks 3–4", "Power BI + storytelling", "Power Query, modelling, DAX, executive dashboard design, accessibility and narrative.", "Executive BI Dashboard"],
  ["Weeks 5–6", "SQL + relational thinking", "Filtering, joins, aggregations, CTEs, windows, NULL handling, validation and business-case queries.", "SQL Business Case Pack"],
  ["Weeks 7–8", "Python + applied GenAI", "pandas, notebooks, reusable cleaning, APIs, AI-assisted analysis with validation and privacy guardrails.", "Analyst Copilot Mini-App"],
  ["Week 9", "Statistics + decision making", "Variation, sampling, correlation, simple inference, experiment thinking and careful interpretation.", "Decision Memo"],
  ["Week 10", "Portfolio + GitHub sprint", "Polish project repositories, documentation, visuals and concise project stories for interviews.", "Hiring-Ready Portfolio"],
  ["Weeks 11–12", "Career + interview sprint", "CV, LinkedIn, technical and behavioural mock interviews, application strategy and placement support.", "Role-ready application pack"]
];

export default function CoursePage() {
  const courseSchema = { "@context":"https://schema.org", "@type":"Course", name:"12-Week Data Analytics + AI Career Accelerator", description:"Personalised mentor-led UK data analyst training covering Excel, SQL, Power BI, Python, statistics, AI, projects and career preparation.", provider:{"@type":"Organization",name:site.name,url:site.url}, hasCourseInstance:{"@type":"CourseInstance", courseMode:"Online", location:"United Kingdom", courseWorkload:"PT12W"} };
  return <>
    <JsonLd data={courseSchema} />
    <section className="pageHero pageHero--course sectionPad"><div><span className="eyebrow">12-WEEK DATA ANALYTICS + AI CAREER ACCELERATOR</span><h1>Data Analyst training built around the gaps between <em>you</em> and the role.</h1><p>Master the core analyst workflow, build credible portfolio evidence and prepare for UK interviews with a learning plan adjusted to your starting point.</p><div className="buttonRow"><Link className="button button--orange" href="/contact">Get a free skill-gap assessment →</Link><a className="button button--ghost" href="#roadmap">View roadmap</a></div></div><div className="courseHeroCard"><span>Core stack</span><div className="toolCloud"><b>Excel</b><b>Power BI</b><b>SQL</b><b>Python</b><b>pandas</b><b>Statistics</b><b>Applied AI</b><b>GitHub</b></div><hr/><p><strong>Format:</strong> Live online + guided practice + project feedback</p><p><strong>Duration:</strong> 12 weeks</p><p><strong>Career support:</strong> Included</p></div></section>

    <section className="quickStrip sectionPad"><div><strong>Live</strong><span>mentor-led sessions</span></div><div><strong>12 weeks</strong><span>structured career sprint</span></div><div><strong>6+</strong><span>portfolio outputs</span></div><div><strong>1:1</strong><span>mentor checkpoints</span></div><div><strong>UK</strong><span>career preparation</span></div></section>

    <section className="sectionPad sectionGap twoColText"><div><span className="eyebrow">What makes it different</span><h2>One curriculum. Different priorities for different learners.</h2></div><div><p>Every learner needs the same analytical foundations, but not everyone needs the same amount of time on each topic. The Mastery Map uses evidence tasks and mentor review to shift the emphasis.</p><p>A developer may accelerate Python and spend more time on data storytelling. A finance professional may prioritise SQL and portfolio projects. A complete beginner receives more guided foundation work.</p></div></section>

    <section className="sectionPad sectionGap" id="roadmap"><div className="sectionHeading sectionHeading--wide"><span className="eyebrow">Roadmap</span><h2>From first diagnostic to interview-ready proof.</h2></div><div className="phaseGrid">{phases.map(([week,title,text,output],i)=><article className="phaseCard" key={title}><div className="phaseTop"><span>{String(i+1).padStart(2,'0')}</span><small>{week}</small></div><h3>{title}</h3><p>{text}</p><div className="phaseOutput"><small>OUTPUT</small><strong>{output}</strong></div></article>)}</div></section>

    <section className="sectionPad sectionGap curriculumDeep"><div className="sectionHeading"><span className="eyebrow">What you actually learn</span><h2>Tools connected to business decisions.</h2></div><div className="curriculumGrid">{[
      ["Excel & data quality",["Tables, structured references and data types","XLOOKUP, SUMIFS, COUNTIFS, IF logic","Pivots and KPI analysis","Cleaning, validation and audit checks"]],
      ["Power BI",["Power Query transformation","Data modelling and relationships","DAX measures and time logic","Dashboard UX and data storytelling"]],
      ["SQL",["SELECT, filtering and grouping","Multi-table joins","CTEs, subqueries and window functions","Data validation and business case queries"]],
      ["Python + pandas",["DataFrames and cleaning","Exploration and aggregation","Reusable analysis functions","Files, APIs and notebook workflows"]],
      ["Statistics",["Distributions and variability","Sampling and confidence","Correlation vs causation","Simple hypothesis tests and regression concepts"]],
      ["Applied AI",["Prompting for analyst workflows","Code assistance with validation","Structured outputs and summarisation","Privacy, hallucination and AI-use documentation"]]
    ].map(([title,items])=><article key={String(title)}><h3>{title as string}</h3><ul>{(items as string[]).map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></section>

    <section className="evidenceSection sectionGap"><div className="sectionPad evidenceInner"><div><span className="eyebrow eyebrow--light">Employer-aligned capability</span><h2>Why the curriculum goes beyond software buttons.</h2><p>The UK Government data analyst framework describes the role around preparing and analysing data, visualisation, communication, ethics and business impact. Microsoft’s current Power BI analyst outline similarly spans preparing, modelling, visualising and analysing data. We use these as external quality checks when shaping practical assignments.</p><div className="buttonRow"><a className="button button--cream" href="https://ddat-capability-framework.service.gov.uk/role/data-analyst" target="_blank" rel="noreferrer">UK Government framework ↗</a><a className="button button--lineLight" href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-300" target="_blank" rel="noreferrer">Microsoft PL-300 outline ↗</a></div></div><div className="evidenceQuote"><span>“Skill” is only useful when you can apply it to a business question and explain the result.</span><small>Mastery Nexus curriculum principle</small></div></div></section>

    <section className="sectionPad sectionGap"><div className="sectionHeading"><span className="eyebrow">Career preparation</span><h2>Training does not stop when the syllabus does.</h2></div><div className="careerPrepGrid">{["Role target & job description analysis","UK-focused CV and LinkedIn positioning","Portfolio and GitHub review","SQL / Power BI technical interview practice","Behavioural interview stories","Mock interview feedback","Application tracker and weekly review","Continued placement guidance under programme terms"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}</div><Link className="textLink" href="/career-support">Explore career and placement support →</Link></section>

    <section className="consultSection sectionPad sectionGap"><div className="consultCopy"><span className="eyebrow">Unsure whether 12 weeks fits your starting point?</span><h2>Get a skill-gap view before you enrol.</h2><p>We will tell you where the intensive plan fits, where you may need extra foundation work and which topics should receive most of your study time.</p></div><LeadForm /></section>
  </>;
}
