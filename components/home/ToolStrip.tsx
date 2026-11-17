"use client";

import { useRef } from "react";
import { ArrowRight } from "./icons";

const tools = [
  { name: "Excel", color: "#1d6f42", glyph: "X" },
  { name: "Power BI", color: "#e8b100", glyph: "▮" },
  { name: "SQL", color: "#336791", glyph: "≡" },
  { name: "Python", color: "#3776ab", glyph: "Py" },
  { name: "pandas", color: "#150458", glyph: "pd" },
  { name: "Statistics", color: "#c2410c", glyph: "σ" },
  { name: "GitHub", color: "#24292f", glyph: "⌥" },
  { name: "Applied AI", color: "#6b4fd8", glyph: "✦" },
  { name: "Jupyter", color: "#f37626", glyph: "J" }
];

export default function ToolStrip() {
  const ref = useRef<HTMLDivElement | null>(null);
  const next = () => {
    const el = ref.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + el.clientWidth * 0.8, behavior: "smooth" });
  };
  return (
    <section className="mxTools" aria-label="Tools you will master">
      <div className="mxWrap mxTools__inner">
        <div className="mxTools__row" ref={ref}>
          {tools.map((t) => (
            <span className="mxTools__item" key={t.name}>
              <i style={{ background: t.color }} aria-hidden="true">{t.glyph}</i>
              {t.name}
            </span>
          ))}
        </div>
        <button className="mxTools__next" onClick={next} aria-label="Show more tools"><ArrowRight size={26} /></button>
      </div>
    </section>
  );
}
