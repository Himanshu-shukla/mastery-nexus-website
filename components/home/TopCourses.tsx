"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "./CourseCard";
import type { CatalogItem } from "@/lib/catalog";

type Group = { id: string; label: string; short: string; items: CatalogItem[]; href: string };

export default function TopCourses({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(groups[0].id);
  const group = groups.find((g) => g.id === active)!;
  return (
    <>
      <div className="mxPills" role="group" aria-label="Choose a subject">
        {groups.map((g) => (
          <button key={g.id} className={`mxPills__pill ${g.id === active ? "is-active" : ""}`} onClick={() => setActive(g.id)} aria-pressed={g.id === active}>
            {g.label}
          </button>
        ))}
      </div>
      <div className="mxGrid4">
        {group.items.map((item) => <CourseCard key={item.id} item={item} />)}
      </div>
      <div className="mxCenter">
        <Link className="mxBtn mxBtn--outline" href={group.href}>Explore more {group.short}</Link>
      </div>
    </>
  );
}
