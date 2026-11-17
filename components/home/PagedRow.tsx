"use client";

import { Children, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "./icons";

type Props = {
  children: ReactNode;
  label: string;
  /** cards visible per page on desktop */
  perPage?: number;
  sideArrows?: boolean;
  dotsTheme?: "light" | "plain";
  className?: string;
};

export default function PagedRow({ children, label, perPage = 4, sideArrows = false, dotsTheme = "light", className = "" }: Props) {
  const track = useRef<HTMLDivElement | null>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const pageWidth = el.clientWidth + gap;
    setPages(Math.max(1, Math.ceil((el.scrollWidth + gap) / pageWidth - 0.05)));
    setPage(Math.round(el.scrollLeft / pageWidth));
  }, []);

  useEffect(() => {
    measure();
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", measure);
    };
  }, [measure]);

  const go = (p: number) => {
    const el = track.current;
    if (!el) return;
    const next = (p + pages) % pages;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollTo({ left: next * (el.clientWidth + gap), behavior: "smooth" });
  };

  return (
    <div className={`mxPaged ${sideArrows ? "mxPaged--side" : ""} ${className}`} role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="mxPaged__viewport">
        {sideArrows && (
          <button className="mxPaged__side mxPaged__side--prev" onClick={() => go(page - 1)} aria-label="Previous">
            <ChevronLeft size={22} />
          </button>
        )}
        <div className="mxPaged__track" ref={track} style={{ ["--per" as string]: perPage }}>
          {Children.map(children, (child) => <div className="mxPaged__item">{child}</div>)}
        </div>
        {sideArrows && (
          <button className="mxPaged__side mxPaged__side--next" onClick={() => go(page + 1)} aria-label="Next">
            <ChevronRight size={22} />
          </button>
        )}
      </div>
      {pages > 1 && (
        <div className={`mxDots mxDots--${dotsTheme}`}>
          <button className="mxDots__arrow" onClick={() => go(page - 1)} aria-label="Previous page"><ChevronLeft size={22} /></button>
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} className={`mxDots__dot ${i === page ? "is-active" : ""}`} onClick={() => go(i)} aria-label={`Go to page ${i + 1}`} aria-current={i === page} />
          ))}
          <button className="mxDots__arrow" onClick={() => go(page + 1)} aria-label="Next page"><ChevronRight size={22} /></button>
        </div>
      )}
    </div>
  );
}
