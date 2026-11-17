"use client";

import { useState } from "react";
import PagedRow from "./PagedRow";
import { QuoteIcon } from "./icons";

export type Voice = { quote: string; who: string; where: string; tone: string };

function VoiceCard({ v }: { v: Voice }) {
  const [open, setOpen] = useState(false);
  const long = v.quote.length > 150;
  const initials = v.who.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <article className="mxVoice">
      <div className="mxVoice__top">
        <QuoteIcon className="mxVoice__mark" />
        <div>
          <p className={`mxVoice__quote ${long && !open ? "is-clamped" : ""}`}>{v.quote}</p>
          {long && <button className="mxVoice__more" onClick={() => setOpen((o) => !o)}>{open ? "Show less" : "Show More"}</button>}
        </div>
      </div>
      <footer className="mxVoice__who">
        <span className="mxVoice__avatar" style={{ background: v.tone }} aria-hidden="true">{initials}</span>
        <div><strong>{v.who}</strong><strong>{v.where}</strong></div>
      </footer>
    </article>
  );
}

export default function Testimonials({ voices }: { voices: Voice[] }) {
  return (
    <PagedRow label="Learner starting points" perPage={3} className="mxPaged--voices">
      {voices.map((v) => <VoiceCard key={v.who + v.where} v={v} />)}
    </PagedRow>
  );
}
