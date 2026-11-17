"use client";

import { FormEvent, useState } from "react";

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={`leadForm ${compact ? "leadForm--compact" : ""}`} onSubmit={submit}>
      <label><span>First name*</span><input name="firstName" required autoComplete="given-name" /></label>
      {!compact && <label><span>Last name*</span><input name="lastName" required autoComplete="family-name" /></label>}
      <label><span>Email*</span><input name="email" type="email" required autoComplete="email" /></label>
      <label><span>Mobile*</span><input name="phone" type="tel" required autoComplete="tel" placeholder="+44" /></label>
      {!compact && <label><span>Current situation</span><select name="situation" defaultValue="career-change"><option value="career-change">I want to change career</option><option value="first-role">I want my first data role</option><option value="upskill">I want to upskill</option><option value="portfolio">I need projects + interview help</option></select></label>}
      {!compact && <label><span>Weekly study time</span><select name="availability" defaultValue="6-10"><option value="3-5">3–5 hours</option><option value="6-10">6–10 hours</option><option value="10+">10+ hours</option></select></label>}
      <label className="check"><input name="consent" type="checkbox" required /><span>I agree to be contacted about my assessment and programme options.</span></label>
      <button className="button button--dark" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request free assessment →"}</button>
      {status === "success" && <p className="formMessage formMessage--success">Thanks — your request has been received. The next step is a short skill-gap conversation.</p>}
      {status === "error" && <p className="formMessage">Something went wrong. Please try again or email admissions.</p>}
    </form>
  );
}
