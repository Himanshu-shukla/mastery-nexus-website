import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title:"Book a Free Data Analyst Skill-Gap Assessment", description:"Book a free Mastery Nexus career consultation to review your current skills, target data roles, portfolio evidence and next-step learning plan.", alternates:{canonical:"/contact"} };

export default function ContactPage(){return <>
  <section className="contactHero sectionPad"><div><span className="eyebrow">FREE SKILL-GAP ASSESSMENT</span><h1>Tell us where you are now. We’ll help you define the next gap.</h1><p>Use the form to request a short career consultation. It is designed to clarify your target role, current proof, biggest missing skills and whether the 12-week programme is a sensible fit.</p><div className="contactDetails"><span><strong>Email</strong>{site.email}</span><span><strong>Format</strong>Live online · UK-focused</span><span><strong>Typical call</strong>20–30 minutes</span></div></div><div className="contactFormCard"><h2>Request your free assessment</h2><p>No payment. No obligation. Bring your CV or LinkedIn if you have one.</p><LeadForm /></div></section>
  <section className="sectionPad sectionGap beforeCall"><div className="sectionHeading"><span className="eyebrow">Before the call</span><h2>Three things to think about.</h2></div><div className="beforeGrid"><article><span>01</span><h3>Which role?</h3><p>Data Analyst, BI Analyst, Business Analyst, reporting-focused role or still unsure?</p></article><article><span>02</span><h3>What evidence?</h3><p>Bring any projects, dashboards, code, CV or examples of analytical work you already do.</p></article><article><span>03</span><h3>What constraint?</h3><p>Be realistic about your weekly study time, timeline and the kind of support you need.</p></article></div></section>
</>}
