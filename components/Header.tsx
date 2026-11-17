"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NexusLogo from "./NexusLogo";
import { ChevronDown, CloseIcon, SearchIcon } from "./home/icons";

type MenuLink = { label: string; href: string };
type MenuGroup = { title: string; links: MenuLink[]; viewAll?: MenuLink; sub?: { label: string; links: MenuLink[] }[] };

const C = "/course";
const AI = "/blog/ai-for-data-analysts-responsible-workflow";
const PF = "/blog/data-analyst-portfolio-projects-uk";
const PBI = "/blog/power-bi-portfolio-checklist";
const SQLG = "/blog/sql-interview-preparation-data-analyst";
const CS = "/career-support";

/** Each inner array is one column of the mega menu. */
const learnColumns: MenuGroup[][] = [
  [
    {
      title: "New at Mastery Nexus",
      links: [
        { label: "Skill-Gap Diagnostic & Learning Map", href: "/personalised-learning" },
        { label: "Responsible Generative AI for Analysts", href: AI },
        { label: "Portfolio Sprint: Case Studies & GitHub", href: PF },
        { label: "Analyst Copilot Project", href: AI },
        { label: "Power BI Portfolio Checklist", href: PBI },
        { label: "SQL Interview Preparation", href: SQLG },
        { label: "All New Additions", href: C }
      ]
    }
  ],
  [
    {
      title: "Browse by topic",
      links: [
        { label: "Excel", href: C },
        { label: "Power BI", href: C },
        { label: "SQL", href: C },
        { label: "Python & pandas", href: C },
        { label: "Statistics", href: C }
      ],
      viewAll: { label: "View all topics", href: C },
      sub: [
        { label: "Popular", links: [
          { label: "Applied generative AI", href: AI },
          { label: "Data storytelling", href: C },
          { label: "Dashboard design", href: PBI }
        ] },
        { label: "For beginners", links: [
          { label: "Excel for beginners", href: C },
          { label: "SQL for beginners", href: C },
          { label: "Python for beginners", href: C }
        ] }
      ]
    }
  ],
  [
    {
      title: "Build your portfolio",
      links: [
        { label: "Operations KPI Tracker", href: PF },
        { label: "Executive BI Dashboard", href: PBI },
        { label: "SQL Business Case", href: SQLG },
        { label: "Customer Insight Notebook", href: PF },
        { label: "Decision Memo", href: PF }
      ],
      viewAll: { label: "View all portfolio projects", href: PF },
      sub: [
        { label: "Popular", links: [
          { label: "Analyst Copilot (Python + AI)", href: AI },
          { label: "Power BI portfolio checklist", href: PBI },
          { label: "Projects that hold up in interviews", href: PF },
          { label: "Writing project case studies", href: PF },
          { label: "GitHub for analysts", href: PF }
        ] }
      ]
    }
  ],
  [
    {
      title: "Join the programme",
      links: [
        { label: "12-week Data Analytics + AI", href: C },
        { label: "Personalised learning", href: "/personalised-learning" },
        { label: "Free skill-gap assessment", href: "/contact" },
        { label: "Career & placement support", href: CS },
        { label: "Book a free consultation", href: "/contact" }
      ],
      sub: [
        { label: "The 12-week plan", links: [
          { label: "Weeks 1–2: Excel + data quality", href: C },
          { label: "Weeks 3–4: Power BI", href: C },
          { label: "Weeks 5–6: SQL", href: C },
          { label: "Weeks 7–8: Python + GenAI", href: C },
          { label: "Week 9: Statistics + decisions", href: C },
          { label: "Weeks 10–12: Portfolio & career sprint", href: C }
        ] }
      ]
    }
  ],
  [
    {
      title: "Read career guides",
      links: [
        { label: "Become a data analyst in the UK", href: "/blog/how-to-become-data-analyst-uk-12-week-roadmap" },
        { label: "Skill-gap checklist", href: "/blog/data-analyst-skill-gap-assessment-checklist" },
        { label: "Excel vs SQL vs Power BI vs Python", href: "/blog/excel-sql-power-bi-python-what-data-analysts-need" },
        { label: "Data analyst CV for career changers", href: "/blog/data-analyst-cv-uk-career-changer" }
      ],
      viewAll: { label: "View all guides", href: "/blog" }
    },
    {
      title: "Explore career support",
      links: [
        { label: "CV & LinkedIn positioning", href: CS },
        { label: "Portfolio review", href: CS },
        { label: "Mock interviews", href: CS },
        { label: "Role targeting & applications", href: CS },
        { label: "Placement guidance", href: CS }
      ],
      viewAll: { label: "View all career support", href: CS }
    }
  ]
];

export type SearchEntry = { id: string; kind: string; title: string; tool: string; toolColor: string; provider: string; duration?: string; href: string };

const trendingSearches = ["Excel", "Power BI", "SQL", "Python", "pandas", "Statistics", "Applied AI", "Dashboard", "Data Cleaning", "Portfolio", "GitHub", "CV", "Interview", "Career change", "Placement", "Skill-gap"];
const favouriteIds = ["m-excel", "m-powerbi", "m-sql", "m-python", "m-career"];

function SearchRow({ item, onPick }: { item: SearchEntry; onPick: () => void }) {
  return (
    <Link className="mxSearch__row" href={item.href} onClick={onPick}>
      <span className="mxSearch__logo"><i style={{ background: item.toolColor }} aria-hidden="true" />{item.tool}</span>
      <span className="mxSearch__text">
        <strong>{item.title}</strong>
        <small>{[item.kind === "Guide" ? "Career guide" : item.provider, item.duration?.replace(" to complete", "")].filter(Boolean).join(" • ")}</small>
      </span>
    </Link>
  );
}

export default function Header({ searchIndex = [] }: { searchIndex?: SearchEntry[] }) {
  const router = useRouter();
  const [learn, setLearn] = useState(false);
  const [menu, setMenu] = useState(false);
  const [promo, setPromo] = useState(true);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const learnRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLFormElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const favourites = useMemo(
    () => favouriteIds.map((id) => searchIndex.find((i) => i.id === id)).filter((i): i is SearchEntry => Boolean(i)),
    [searchIndex]
  );

  const closeSearch = () => { setFocused(false); setQuery(""); inputRef.current?.blur(); };

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) setLearn(false);
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setFocused(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setLearn(false); setFocused(false); } };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter((i) => `${i.title} ${i.tool} ${i.provider} ${i.kind}`.toLowerCase().includes(q)).slice(0, 8);
  }, [query, searchIndex]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results[0]) { router.push(results[0].href); closeSearch(); }
  };

  return (
    <header className="mxHeader">
      <div className="mxHeader__bar">
        <NexusLogo />

        <div className="mxLearn" ref={learnRef}>
          <button className={`mxLearn__btn ${learn ? "is-open" : ""}`} onClick={() => { setLearn((v) => !v); setFocused(false); }} aria-expanded={learn} aria-haspopup="true">
            Learn <ChevronDown size={18} className="mxLearn__chev" />
          </button>
          {learn && (
            <div className="mxLearn__panel">
              <div className="mxLearn__grid">
                {learnColumns.map((col, i) => (
                  <div className="mxLearn__col" key={i}>
                    {col.map((g) => (
                      <div className="mxLearn__group" key={g.title}>
                        <h3>{g.title}</h3>
                        <ul>
                          {g.links.map((l) => <li key={l.label}><Link href={l.href} onClick={() => setLearn(false)}>{l.label}</Link></li>)}
                        </ul>
                        {g.viewAll && <Link className="mxLearn__all" href={g.viewAll.href} onClick={() => setLearn(false)}>{g.viewAll.label}</Link>}
                        {g.sub?.map((sg) => (
                          <div className="mxLearn__sub" key={sg.label}>
                            <h4>{sg.label}</h4>
                            <ul>
                              {sg.links.map((l) => <li key={l.label}><Link href={l.href} onClick={() => setLearn(false)}>{l.label}</Link></li>)}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <form className={`mxSearch ${focused ? "is-open" : ""}`} role="search" onSubmit={submit} ref={searchRef}>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => { setFocused(true); setLearn(false); }}
            placeholder="Search for modules, projects, or guides..."
            aria-label="Search Mastery Nexus"
            aria-expanded={focused}
            aria-controls="mx-search-panel"
          />
          <button type="submit" aria-label="Search"><SearchIcon size={24} /></button>
          {focused && (
            <div className="mxSearch__panel" id="mx-search-panel">
              <div className="mxSearch__body">
                {query.trim() ? (
                  <>
                    <h3 className="mxSearch__label">Results for “{query.trim()}”</h3>
                    {results.length ? (
                      <div className="mxSearch__list">
                        {results.map((r) => <SearchRow key={r.id} item={r} onPick={closeSearch} />)}
                      </div>
                    ) : (
                      <p className="mxSearch__empty">No matches yet. Try one of the trending searches below.</p>
                    )}
                  </>
                ) : null}

                <h3 className="mxSearch__label">Trending at Mastery Nexus</h3>
                <div className="mxSearch__chips">
                  {trendingSearches.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => { setQuery(t); inputRef.current?.focus(); }}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {!query.trim() && (
                  <>
                    <h3 className="mxSearch__label">Learner favourites</h3>
                    <div className="mxSearch__list">
                      {favourites.map((f) => <SearchRow key={f.id} item={f} onPick={closeSearch} />)}
                    </div>
                  </>
                )}
              </div>
              <div className="mxSearch__foot">
                Start with a free skill-gap assessment! <Link href="/contact" onClick={closeSearch}>Learn more</Link>
              </div>
            </div>
          )}
        </form>

        <nav className={`mxHeader__links ${menu ? "is-open" : ""}`} aria-label="Main navigation">
          <Link href="/personalised-learning" onClick={() => setMenu(false)}>Personalised learning</Link>
          <Link href="/career-support" onClick={() => setMenu(false)}>Career support</Link>
          <Link href="/blog" onClick={() => setMenu(false)}>Guides</Link>
          <Link className="mxBtn mxBtn--orange mxBtn--sm" href="/contact" onClick={() => setMenu(false)}>Book free assessment</Link>
        </nav>

        <button className="mxHeader__toggle" onClick={() => setMenu((v) => !v)} aria-label="Toggle menu" aria-expanded={menu}>
          <span /><span /><span />
        </button>
      </div>

      {promo && (
        <div className="mxPromo">
          <p><span className="mxPromo__extra">Not sure where to start? </span><strong>Get a free skill-gap assessment</strong><span className="mxPromo__extra"> and a personalised 12-week learning map</span>. <Link href="/contact">Book yours</Link>.</p>
          <button onClick={() => setPromo(false)} aria-label="Dismiss announcement"><CloseIcon size={20} /></button>
        </div>
      )}
    </header>
  );
}
