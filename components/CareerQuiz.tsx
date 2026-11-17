"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CareerQuiz() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  useEffect(() => {
    const openQuiz = () => { setStep(0); setOpen(true); };
    window.addEventListener("open-career-quiz", openQuiz);
    return () => window.removeEventListener("open-career-quiz", openQuiz);
  }, []);
  const choices = ["I’m starting from zero", "I know some tools but lack projects", "I need interview & placement help"];
  return (
    <>
      <button className="quizFab" onClick={() => setOpen(true)} aria-label="Open career guide">✦</button>
      {open && <div className="quizPanel" role="dialog" aria-label="Mastery Nexus career guide">
        <div className="quizHead"><div><span className="quizAvatar">N</span><strong>Nexa</strong><small>Career guide</small></div><button onClick={() => setOpen(false)} aria-label="Close">×</button></div>
        {step === 0 ? <>
          <div className="quizBubble">Which description is closest to where you are right now?</div>
          <div className="quizChoices">{choices.map((c, i) => <button key={c} onClick={() => setStep(i + 1)}>{c}</button>)}</div>
        </> : <>
          <div className="quizBubble">A skill-gap assessment is the fastest next step. We’ll map your current evidence against your target role and show what to prioritise.</div>
          <Link className="button button--dark button--full" href="/contact" onClick={() => setOpen(false)}>Book free assessment →</Link>
          <button className="quizBack" onClick={() => setStep(0)}>← Change answer</button>
        </>}
      </div>}
    </>
  );
}
