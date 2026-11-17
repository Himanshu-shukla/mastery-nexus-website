import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Data Analyst Placement Support UK | CV, Interviews & Job Search",
  description: "Structured UK data analyst career and placement support: CV, LinkedIn, portfolio, mock interviews, applications and continued guidance.",
  alternates: { canonical: "/career-support" }
};

export default function CareerSupportPage() {
  return <>
    <section className="pageHero pageHero--career sectionPad"><div><span className="eyebrow">CAREER & PLACEMENT SUPPORT</span><h1>Placement support works better when you have evidence worth placing.</h1><p>We connect technical learning to portfolio proof, CV positioning, interview preparation, focused applications and continued career guidance for suitable UK roles.</p><div className="buttonRow"><Link className="button button--orange" href="/contact">Discuss my career plan →</Link><a className="button button--ghost" href="#journey">See the full journey</a></div></div><div className="careerHeroStack"><div>CV & LinkedIn</div><div>Portfolio proof</div><div>Mock interviews</div><div>Role targeting</div><div>Placement guidance</div></div></section>

    <section className="sectionPad sectionGap twoColText"><div><span className="eyebrow">What placement support means</span><h2>Preparation, process and accountability—not a magic shortcut.</h2></div><div><p>Mastery Nexus helps eligible learners improve the quality of their evidence, positioning and interview performance, then run a more disciplined job search. Learners still need to attend, build projects, prepare properly and participate actively in applications and interviews.</p><p>If a specific cohort includes a placement guarantee, the guarantee is governed by a written agreement and eligibility requirements. It should never be interpreted as an unconditional promise of employment.</p></div></section>

    <section className="sectionPad sectionGap" id="journey"><div className="sectionHeading"><span className="eyebrow">The complete career journey</span><h2>Seven stages from skills to applications.</h2></div><div className="journeyList">{[
      ["Training","Build the technical and business skills required for your target role."],
      ["Portfolio","Create practical work you can show, explain and defend."],
      ["CV & LinkedIn","Position previous experience, new skills and project evidence for relevant UK roles."],
      ["Interview preparation","Practise technical, project and behavioural questions with structured feedback."],
      ["Job-search strategy","Define role targets, search channels, application quality standards and a weekly cadence."],
      ["Interview opportunities","Prepare deeply for each relevant opportunity instead of using generic answers."],
      ["Continued placement support","Keep refining applications and interview performance under the applicable programme process."]
    ].map(([t,p],i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{t}</h3><p>{p}</p></div></article>)}</div></section>

    <section className="placementKit sectionGap"><div className="sectionPad placementInner"><div><span className="eyebrow eyebrow--light">What support includes</span><h2>Your placement toolkit.</h2></div><div className="placementGrid">{["Role-specific CV rewrite","LinkedIn headline, about and proof","Portfolio narrative review","GitHub/project presentation","SQL technical practice","Power BI interview practice","Behavioural STAR stories","Mock interview feedback","Job-description matching","Application tracker","Recruiter outreach scripts","Weekly job-search review"].map(x=><span key={x}>✓ {x}</span>)}</div></div></section>

    <section className="sectionPad sectionGap trustSection"><div className="sectionHeading"><span className="eyebrow">Career evidence</span><h2>What makes an application more credible?</h2></div><div className="trustGrid"><article><h3>A role target that fits</h3><p>Applying for realistic entry or adjacent roles makes your CV and portfolio easier to position.</p></article><article><h3>Projects with decisions</h3><p>Explain the business problem, checks, method, result, limitations and recommendation.</p></article><article><h3>Interview repetition</h3><p>Practice lowers the cognitive load so you can think clearly when the real questions change.</p></article><article><h3>Application feedback</h3><p>Track response rates and change the CV, role mix or evidence when the data says the approach is weak.</p></article></div></section>

    <section className="termsCard sectionPad sectionGap"><div><span className="eyebrow">Eligibility & guarantee terms</span><h2>Clear terms protect both the learner and the programme.</h2><p>Where a 100% placement guarantee is offered for an eligible cohort, the signed agreement should state the qualifying role scope, learner obligations, attendance/project requirements, active participation expectations, support period and refund conditions. The website should link to those terms before payment.</p></div><Link className="button button--dark" href="/contact">Ask which terms apply to me →</Link></section>

    <section className="consultSection sectionPad sectionGap"><div className="consultCopy"><span className="eyebrow">Career consultation</span><h2>Bring your CV. Leave with a clearer target.</h2><p>We can review your current role, target, skill gaps and placement readiness before discussing the programme.</p></div><LeadForm /></section>
  </>;
}
