"use client";

import { useRef } from "react";

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement | null>(null);
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--px", `${x * 20}px`);
    el.style.setProperty("--py", `${y * 20}px`);
  };
  return (
    <div className="heroVisual" ref={ref} onPointerMove={move} onPointerLeave={() => {
      ref.current?.style.setProperty("--px", "0px");
      ref.current?.style.setProperty("--py", "0px");
    }}>
      <div className="heroRing heroRing--one" />
      <div className="heroRing heroRing--two" />
      <div className="heroPhoto heroPhoto--main">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=82" alt="Professional learner working on a career transition" />
        <div className="photoLabel"><span>01</span><strong>Assess your gaps</strong></div>
      </div>
      <div className="floatingCard floatingCard--top"><span className="dot dot--mint" /> Personal learning map</div>
      <div className="floatingCard floatingCard--bottom"><strong>12 weeks</strong><span>skills → proof → interviews</span></div>
      <div className="metricOrb"><span>1:1</span><small>mentor checkpoints</small></div>
    </div>
  );
}
