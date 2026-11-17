"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "./icons";

type Column = { title: string; href: string; links: { label: string; href: string }[] };

export default function PopularSubjects({ columns }: { columns: Column[] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="mxSubjects" aria-labelledby="mx-subjects">
      <div className="mxWrap">
        <span className="mxMono" id="mx-subjects">Popular subjects</span>
        <div className="mxSubjects__grid">
          {columns.map((col) => (
            <div key={col.title}>
              <Link className="mxSubjects__head" href={col.href}>{col.title}<ChevronRight size={18} /></Link>
              <ul>
                {(expanded ? col.links : col.links.slice(0, 6)).map((l) => (
                  <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="mxSubjects__toggle" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded}>
          {expanded ? "Show fewer subjects" : "Show all subjects"}
        </button>
      </div>
    </section>
  );
}
