export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  answer?: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  published: string;
  updated: string;
  keywords: string[];
  intro: string;
  sections: ArticleSection[];
  sources?: { label: string; href: string }[];
};

export const articles: Article[] = [
  {
    slug: "how-to-become-data-analyst-uk-12-week-roadmap",
    title: "How to Become a Data Analyst in the UK: A Practical 12-Week Roadmap",
    description:
      "A beginner-friendly UK roadmap covering Excel, SQL, Power BI, Python, portfolio projects, CV preparation and interviews.",
    category: "Career Roadmaps",
    readTime: "12 min read",
    published: "2026-09-17",
    updated: "2026-09-17",
    keywords: ["how to become a data analyst UK", "data analyst roadmap UK", "data analyst course UK"],
    intro:
      "A good data analyst roadmap is not a list of every tool in analytics. It is a sequence of skills that helps you move from messy data to a clear business recommendation, then prove that ability in projects and interviews.",
    sections: [
      {
        heading: "What does a data analyst actually do?",
        answer:
          "A data analyst collects, prepares, explores and communicates data so an organisation can make better decisions. In practice, that can mean cleaning spreadsheets, querying databases, building dashboards, investigating changes in performance and explaining what the evidence means.",
        paragraphs: [
          "The UK Government Digital and Data Profession describes the role around collecting, managing, exploring and sharing data to support organisational objectives. That is a useful benchmark because it emphasises business impact, not just software knowledge."
        ]
      },
      {
        heading: "Weeks 1–2: Excel, data quality and business questions",
        paragraphs: [
          "Start with the fastest route to analytical confidence: tables, lookups, conditional logic, data cleaning, pivot tables and clear KPI definitions. Use one realistic dataset throughout the fortnight so you learn to recognise data problems instead of memorising isolated formulas."
        ],
        bullets: [
          "Clean dates, categories, blanks and duplicates",
          "Use XLOOKUP, SUMIFS, COUNTIFS and logical functions",
          "Build a simple KPI tracker and explain what changed",
          "Write a one-page insight summary for a non-technical stakeholder"
        ]
      },
      {
        heading: "Weeks 3–4: Power BI and data storytelling",
        paragraphs: [
          "Move from spreadsheet analysis to a repeatable reporting model. Learn Power Query, relationships, basic star-schema thinking, DAX measures and visual hierarchy. The goal is not a colourful dashboard; it is a trustworthy dashboard that answers a business question."
        ],
        bullets: [
          "Import and transform data in Power Query",
          "Create relationships and a small semantic model",
          "Write core DAX measures",
          "Build an executive summary page and a diagnostic detail page"
        ]
      },
      {
        heading: "Weeks 5–6: SQL for real analyst work",
        paragraphs: [
          "Practise SQL against linked tables, not only single-table exercises. You should be comfortable filtering, grouping, joining, using subqueries or CTEs, handling NULLs and validating your result before presenting it."
        ]
      },
      {
        heading: "Weeks 7–8: Python, pandas and responsible AI",
        paragraphs: [
          "Use Python when the analysis becomes repetitive, large or easier to express as code. Focus on pandas, basic visualisation, validation and reusable notebooks. Generative AI can accelerate drafting and debugging, but every output needs checking against the data and your own reasoning."
        ]
      },
      {
        heading: "Weeks 9–10: Statistics and portfolio evidence",
        paragraphs: [
          "Learn enough statistics to avoid overclaiming: distributions, sampling, correlation, confidence, simple hypothesis tests and basic regression or segmentation concepts. Then convert your strongest projects into interview assets with a clear problem, method, checks, result and recommendation."
        ]
      },
      {
        heading: "Weeks 11–12: CV, interviews and applications",
        paragraphs: [
          "A portfolio only helps if you can explain it. Rewrite your CV around evidence, practise project walkthroughs, prepare SQL and Power BI questions, rehearse behavioural examples and use a focused application tracker. Apply to roles that match your current proof rather than every job with the word data in the title."
        ]
      }
    ],
    sources: [
      { label: "UK Government Digital & Data Profession — Data analyst role", href: "https://ddat-capability-framework.service.gov.uk/role/data-analyst" },
      { label: "Microsoft Learn — PL-300 Power BI Data Analyst skills", href: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-300" }
    ]
  },
  {
    slug: "data-analyst-skill-gap-assessment-checklist",
    title: "Data Analyst Skill-Gap Assessment: The Checklist to Use Before You Start Learning",
    description:
      "Assess your current data, business, portfolio and interview skills before choosing what to learn next.",
    category: "Skill Gaps",
    readTime: "9 min read",
    published: "2026-09-17",
    updated: "2026-09-17",
    keywords: ["data analyst skill gap", "data analyst skills checklist", "data analytics skills UK"],
    intro:
      "Most people do not need more content. They need a clearer diagnosis of what they can already do, what employers will ask them to prove and which missing skills block the next step.",
    sections: [
      {
        heading: "The six areas to score",
        answer:
          "A useful data analyst skill-gap assessment should score six areas: business problem framing, data preparation, SQL, reporting and visualisation, Python/statistics, and career evidence such as projects and interview explanations.",
        bullets: [
          "Business: Can you turn a vague request into a measurable question?",
          "Data: Can you identify missing, duplicated or inconsistent values?",
          "SQL: Can you join tables, aggregate correctly and validate a result?",
          "Power BI: Can you model data and explain your KPI logic?",
          "Python/statistics: Can you automate repeatable analysis and interpret results?",
          "Career proof: Can you explain two projects in five minutes without reading notes?"
        ]
      },
      {
        heading: "Use evidence, not confidence, to score yourself",
        paragraphs: [
          "Do not rate yourself as advanced because a topic feels familiar. Use observable evidence. If you say you know SQL joins, complete a timed business query. If you say you know Power BI, rebuild a small dashboard from a raw file and explain each measure."
        ]
      },
      {
        heading: "Turn the score into a personalised plan",
        paragraphs: [
          "Keep the core sequence, but allocate more practice to the lowest-scoring areas that matter for your target role. A finance professional may need less business context and more SQL. A developer may need less Python and more dashboard storytelling. A complete beginner may need a slower first month and more guided exercises."
        ]
      }
    ],
    sources: [
      { label: "Government Analysis Function — Data analyst role profile", href: "https://analysisfunction.civilservice.gov.uk/careers/role-profiles-and-career-pathways/role-profile-data-analyst/" }
    ]
  },
  {
    slug: "excel-sql-power-bi-python-what-data-analysts-need",
    title: "Excel vs SQL vs Power BI vs Python: What UK Data Analysts Actually Need",
    description:
      "Understand how Excel, SQL, Power BI and Python fit together in a practical analyst workflow.",
    category: "Tools & Skills",
    readTime: "10 min read",
    published: "2026-09-17",
    updated: "2026-09-17",
    keywords: ["Excel SQL Power BI Python data analyst", "data analyst tools UK", "Power BI SQL course UK"],
    intro:
      "These tools are not competitors. They solve different parts of the same workflow. The strongest beginner portfolio shows that you know when to use each one and how to move cleanly between them.",
    sections: [
      { heading: "Excel: fast exploration and business familiarity", paragraphs: ["Excel is often the quickest way to inspect a file, clean small datasets, test a calculation and communicate with non-technical teams. Learn it well enough to work confidently, but do not let it become your only tool."] },
      { heading: "SQL: retrieving and shaping data at source", paragraphs: ["SQL matters because analysts rarely receive a perfect spreadsheet. You need to ask structured questions of relational data, combine tables and produce a reliable result set for analysis or reporting."] },
      { heading: "Power BI: reusable reporting and data storytelling", paragraphs: ["Power BI combines transformation, modelling, calculations and visual communication. Microsoft’s current PL-300 outline emphasises preparing, modelling, visualising, analysing and securing data—an accurate description of real reporting work."] },
      { heading: "Python: repeatability, scale and flexible analysis", paragraphs: ["Python is valuable when tasks become repetitive, when you need reusable cleaning logic, when you are working with APIs or when an analysis is easier to express programmatically. For entry-level roles, pandas proficiency is usually more valuable than jumping straight into complex machine learning."] },
      { heading: "A sensible learning order", answer: "For most beginners: Excel → Power BI basics → SQL → Python/pandas → statistics → integrated portfolio projects. The exact order can shift if your target role or existing experience is different." }
    ],
    sources: [{ label: "Microsoft Learn — PL-300 Study Guide", href: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-300" }]
  },
  {
    slug: "data-analyst-portfolio-projects-uk",
    title: "7 Data Analyst Portfolio Projects That Are Easier to Defend in Interviews",
    description:
      "Seven business-focused portfolio project ideas with clear outputs, questions and interview value.",
    category: "Portfolio",
    readTime: "11 min read",
    published: "2026-09-17",
    updated: "2026-09-17",
    keywords: ["data analyst portfolio projects UK", "Power BI projects", "SQL portfolio data analyst"],
    intro:
      "A project becomes interview evidence when you can explain the decision it supports, how you checked the data and what you would do next—not when it contains the most charts.",
    sections: [
      { heading: "1. Retail performance dashboard", paragraphs: ["Analyse sales, margin, returns and category performance across stores or regions. Build an executive dashboard and write three actions supported by the data."] },
      { heading: "2. Customer churn investigation", paragraphs: ["Use SQL and Python to profile churn by tenure, service usage and customer segment. Focus on interpretable drivers and the limits of the analysis."] },
      { heading: "3. NHS-style appointment operations case", paragraphs: ["Using public or synthetic data, analyse waiting times, no-shows or capacity patterns. Keep privacy and responsible data handling visible in your write-up."] },
      { heading: "4. Finance variance analysis", paragraphs: ["Compare actuals with budget or prior period, isolate drivers, build a Power BI report and write a short management commentary."] },
      { heading: "5. Marketing funnel analysis", paragraphs: ["Join campaign, lead and conversion tables. Calculate conversion rates, cost metrics and cohort differences, then recommend which channels need testing."] },
      { heading: "6. Delivery performance and root-cause analysis", paragraphs: ["Use SQL to calculate on-time delivery, then segment by supplier, location or product family. Validate whether an apparent problem is driven by volume mix."] },
      { heading: "7. Analyst copilot with guardrails", paragraphs: ["Create a small Python tool that summarises a validated dataset or drafts commentary from calculated metrics. Document what the AI is allowed to do, what must be checked and how you prevent unsupported claims."] }
    ]
  },
  {
    slug: "data-analyst-cv-uk-career-changer",
    title: "Data Analyst CV UK: How Career Changers Should Present Skills and Projects",
    description:
      "A practical UK-focused CV structure for career changers moving into data analytics.",
    category: "Career Support",
    readTime: "9 min read",
    published: "2026-09-17",
    updated: "2026-09-17",
    keywords: ["data analyst CV UK", "career change CV data analyst", "junior data analyst CV"],
    intro:
      "A career-change CV should make your transition easy to understand in the first few seconds. Your previous career is not irrelevant; it becomes stronger when you connect it to analytical tasks and recent evidence.",
    sections: [
      { heading: "Lead with a role-specific profile", paragraphs: ["State the analyst role you are targeting, the strongest transferable domain experience you bring and the tools you can now demonstrate. Avoid vague statements such as ‘passionate about data’." ] },
      { heading: "Create a technical evidence section", bullets: ["SQL: joins, CTEs, aggregation, validation", "Power BI: Power Query, data modelling, DAX, dashboard design", "Python: pandas, cleaning, analysis, automation", "Excel: advanced formulas, pivots, data quality checks"] },
      { heading: "Write projects like experience", paragraphs: ["For each project, include the business question, dataset, tools, analytical method, quality checks and a result. Quantify the dataset or workflow where meaningful, but do not invent business impact from a simulated project."] },
      { heading: "Translate previous experience", paragraphs: ["A retail manager has stakeholder, KPI and operational experience. A finance professional understands controls and variance. A recruiter understands funnels and conversion. Translate these into evidence that supports the analyst role rather than deleting them from your story."] },
      { heading: "Prepare the same story for LinkedIn and interviews", answer: "Your CV, LinkedIn profile and interview introduction should tell the same career-change story: where you came from, what you have built, what role you are targeting and what evidence shows you can do the work." }
    ]
  },
  {
    slug: "sql-interview-preparation-data-analyst",
    title: "SQL Interview Preparation for Data Analysts: What to Practise Beyond Syntax",
    description:
      "Prepare for analyst SQL interviews with query logic, validation, business explanation and common failure modes.",
    category: "Interview Prep",
    readTime: "10 min read",
    published: "2026-09-17",
    updated: "2026-09-17",
    keywords: ["SQL interview data analyst", "SQL questions data analyst UK", "data analyst interview preparation"],
    intro:
      "SQL interviews test more than whether you remember JOIN syntax. They expose how you interpret a question, choose the right grain, avoid double counting and explain your result.",
    sections: [
      { heading: "Practise the business question first", paragraphs: ["Before writing SQL, define the output grain. Are you returning one row per customer, order, month or product? Many wrong answers begin with a correct query at the wrong grain."] },
      { heading: "Core patterns to master", bullets: ["INNER and LEFT JOINs", "GROUP BY and HAVING", "CASE expressions", "date filtering and date buckets", "CTEs and subqueries", "window functions", "NULL handling", "deduplication and validation"] },
      { heading: "Validate before you present", paragraphs: ["Check row counts, distinct keys, total amounts and edge cases. If a join changes the number of rows unexpectedly, investigate before trusting the calculation."] },
      { heading: "Explain the result like an analyst", paragraphs: ["After writing the query, state what the result means, one limitation and one follow-up question. This turns a coding answer into analytical communication."] }
    ]
  },
  {
    slug: "ai-for-data-analysts-responsible-workflow",
    title: "AI for Data Analysts: A Responsible Workflow for Faster Analysis Without Losing Trust",
    description:
      "Use generative AI for analyst productivity while keeping validation, privacy, reproducibility and human judgement in the loop.",
    category: "AI for Analysts",
    readTime: "8 min read",
    published: "2026-09-17",
    updated: "2026-09-17",
    keywords: ["AI for data analysts", "GenAI data analytics", "data analyst AI tools"],
    intro:
      "AI can reduce time spent on repetitive drafting and debugging, but it does not remove the analyst’s responsibility for accuracy, privacy and business interpretation.",
    sections: [
      { heading: "Good uses of AI in analyst work", bullets: ["Drafting SQL or pandas code that you then test", "Explaining unfamiliar error messages", "Generating edge-case test ideas", "Refactoring repetitive code", "Drafting commentary from already-validated metrics"] },
      { heading: "Risky uses", bullets: ["Uploading confidential data to an unapproved tool", "Copying generated calculations without testing", "Letting AI invent causes for a trend", "Presenting generated citations or numbers without verification"] },
      { heading: "A four-step guardrail", answer: "1) Minimise sensitive data, 2) generate assistance rather than truth, 3) validate against source data and business rules, and 4) document where AI affected the workflow." }
    ]
  },
  {
    slug: "power-bi-portfolio-checklist",
    title: "Power BI Portfolio Checklist: What Makes a Dashboard Interview-Ready?",
    description:
      "A practical checklist for turning Power BI work into credible portfolio evidence for data analyst interviews.",
    category: "Power BI",
    readTime: "8 min read",
    published: "2026-09-17",
    updated: "2026-09-17",
    keywords: ["Power BI portfolio", "Power BI project data analyst", "Power BI interview UK"],
    intro:
      "An interview-ready Power BI project shows how you prepared data, modelled it, defined measures, designed the report and translated the output into a decision.",
    sections: [
      { heading: "The checklist", bullets: ["A clear business question", "Documented data source and cleaning steps", "Sensible relationships and model grain", "Measures separated from raw columns where appropriate", "KPI definitions written in plain English", "Accessible visual hierarchy", "A short insight summary", "Known limitations and next steps"] },
      { heading: "Align with real Power BI responsibilities", paragraphs: ["Microsoft’s current PL-300 skill outline is useful as a quality benchmark because it covers preparing, modelling, visualising and analysing data, plus management and security. Your portfolio does not need every enterprise feature, but it should show more than chart formatting."] }
    ],
    sources: [{ label: "Microsoft Learn — PL-300 Study Guide", href: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-300" }]
  }
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
