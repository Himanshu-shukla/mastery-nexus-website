"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "./CourseCard";
import type { CatalogItem } from "@/lib/catalog";

type Tab = {
  id: string;
  label: string;
  items: CatalogItem[];
  chips?: { id: string; label: string }[];
  more: { label: string; href: string };
};

export default function TrendingTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const [chip, setChip] = useState("featured");
  const tab = tabs.find((t) => t.id === active)!;
  const items = (tab.chips ? tab.items.filter((i) => i.tags.includes(chip)) : tab.items).slice(0, 4);

  return (
    <>
      <div className="mxTabs" role="tablist" aria-label="Trending categories">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === active}
            className={`mxTabs__tab ${t.id === active ? "is-active" : ""}`}
            onClick={() => { setActive(t.id); setChip("featured"); }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab.chips && (
        <div className="mxChips" role="group" aria-label="Filter by topic">
          {tab.chips.map((c) => (
            <button key={c.id} className={`mxChips__chip ${c.id === chip ? "is-active" : ""}`} onClick={() => setChip(c.id)} aria-pressed={c.id === chip}>
              {c.label}
            </button>
          ))}
        </div>
      )}

      <div className="mxGrid4" role="tabpanel">
        {items.map((item) => <CourseCard key={item.id} item={item} />)}
      </div>

      <div className="mxCenter">
        <Link className="mxUnderline" href={tab.more.href}>{tab.more.label}</Link>
      </div>
    </>
  );
}
