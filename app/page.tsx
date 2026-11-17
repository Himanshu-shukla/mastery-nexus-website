import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import NexusLogo from "@/components/NexusLogo";
import CourseCard from "@/components/home/CourseCard";
import PagedRow from "@/components/home/PagedRow";
import ToolStrip from "@/components/home/ToolStrip";
import TrendingTabs from "@/components/home/TrendingTabs";
import TopCourses from "@/components/home/TopCourses";
import Testimonials, { type Voice } from "@/components/home/Testimonials";
import PopularSubjects from "@/components/home/PopularSubjects";
import QuizButton from "@/components/home/QuizButton";
import TopicIcon from "@/components/home/TopicIcon";
import { BookIcon, CapIcon, CertIcon, ClockIcon, FlameIcon, GlobeIcon, SparkleIcon, TrendIcon } from "@/components/home/icons";
import { byTag, careerSupport, guides, heroItems, latestItems, modules, projects, topicFilters } from "@/lib/catalog";
import { articles } from "@/lib/blog";
import { site } from "@/lib/site";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    url: site.url,
    description: site.description,
    areaServed: "United Kingdom",
    email: site.email
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "12-Week Data Analytics + AI Career Accelerator",
    description: "A personalised, mentor-led programme covering Excel, SQL, Power BI, Python, statistics, applied AI, portfolio projects and UK career preparation.",
    provider: { "@type": "Organization", name: site.name, sameAs: site.url },
    educationalLevel: "Beginner to early-career",
    teaches: ["Excel", "SQL", "Power BI", "Python", "pandas", "Statistics", "Applied generative AI", "Portfolio development", "Interview preparation"]
  }
];

const img = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

const formats = [
  {
    tone: "sand", icon: <BookIcon size={30} />, title: "Live mentor-led learning", text: "Learn the full analyst stack live online, with a mentor.",
    facts: ["12 weeks", "Weekly mentor checkpoints", "Adaptive practice depth"], cta: "Explore the programme", href: "/course"
  },
  {
    tone: "paper", icon: <CertIcon size={30} />, title: "Personalised learning map", text: "Start from a diagnosis, not from Lesson 1.",
    facts: ["Pre-week diagnostic", "Skip what you already know", "Focus on your real gaps"], cta: "See how it works", href: "/personalised-learning"
  },
  {
    tone: "sage", icon: <GlobeIcon size={30} />, title: "Portfolio projects", text: "Build proof you can defend in interviews.",
    facts: ["6 business-style projects", "Reviewed case studies", "GitHub-ready evidence"], cta: "Explore projects", href: "/blog/data-analyst-portfolio-projects-uk"
  },
  {
    tone: "mist", icon: <CapIcon size={30} />, title: "Career & placement support", text: "Run a structured UK job search.",
    facts: ["Weeks 11–12 and beyond", "CV, LinkedIn & mock interviews", "Placement guidance"], cta: "Explore career support", href: "/career-support"
  }
];

const voices: Voice[] = [
  { quote: "I use Excel every day, but I freeze when someone mentions SQL. I need a plan that starts where I actually am, not at Lesson 1.", who: "Operations coordinator", where: "Typical starting point", tone: "#a5b5ae" },
  { quote: "I've done a few online tutorials, but I have nothing I could show an employer. I need projects that hold up in an interview.", who: "Self-taught learner", where: "Typical starting point", tone: "#e1ddd3" },
  { quote: "I have ten years in finance and I know the numbers inside out. What I'm missing is Power BI, Python and a clear story for why I'm changing careers. My domain knowledge should be an advantage, not something I start over from.", who: "Finance professional", where: "Typical starting point", tone: "#f0a3b8" },
  { quote: "My technical skills are fine. It's the UK job market, the CV format and the interviews I need structure for.", who: "International graduate", where: "Typical starting point", tone: "#d1dbd9" },
  { quote: "I can only study in the evenings. I want to know exactly what to prioritise each week so nothing is wasted.", who: "Working parent", where: "Typical starting point", tone: "#f7d6a6" },
  { quote: "I built dashboards in my last job without ever calling it analytics. I want to turn that experience into a portfolio and a proper job title.", who: "Customer service lead", where: "Typical starting point", tone: "#a5b5ae" }
];

const topics = [
  { id: "ai", label: "Applied AI", href: "/blog/ai-for-data-analysts-responsible-workflow" },
  { id: "excel", label: "Excel", href: "/course" },
  { id: "interviews", label: "Interview Skills", href: "/career-support" },
  { id: "powerbi", label: "Power BI", href: "/blog/power-bi-portfolio-checklist" },
  { id: "cleaning", label: "Data Cleaning", href: "/course" },
  { id: "python", label: "Python", href: "/course" },
  { id: "dashboards", label: "Dashboards", href: "/course" },
  { id: "sql", label: "SQL", href: "/blog/sql-interview-preparation-data-analyst" },
  { id: "portfolio", label: "Portfolio Writing", href: "/blog/data-analyst-portfolio-projects-uk" },
  { id: "statistics", label: "Statistics", href: "/course" }
];

const subjectColumns = [
  {
    title: "Data Analysis", href: "/course",
    links: ["Excel", "Data Cleaning", "Power BI", "DAX", "SQL", "Python", "pandas", "Statistics", "Data Storytelling", "Applied Generative AI", "Git & GitHub", "Dashboard Design"].map((label) => ({ label, href: "/course" }))
  },
  {
    title: "Career Guides", href: "/blog",
    links: articles.map((a) => ({ label: a.title.split(":")[0], href: `/blog/${a.slug}` }))
  },
  {
    title: "Career Support", href: "/career-support",
    links: [
      { label: "Skill-Gap Assessment", href: "/personalised-learning" },
      { label: "Personal Learning Map", href: "/personalised-learning" },
      { label: "CV & LinkedIn", href: "/blog/data-analyst-cv-uk-career-changer" },
      { label: "Portfolio Review", href: "/career-support" },
      { label: "Mock Interviews", href: "/career-support" },
      { label: "SQL Interview Prep", href: "/blog/sql-interview-preparation-data-analyst" },
      { label: "Role Targeting", href: "/career-support" },
      { label: "Application Tracking", href: "/career-support" },
      { label: "Placement Guidance", href: "/career-support" },
      { label: "Free Consultation", href: "/contact" }
    ]
  }
];

export default function HomePage() {
  const trendingTabs = [
    { id: "modules", label: "Core Modules", items: [...modules, ...projects], chips: topicFilters, more: { label: "View the full curriculum", href: "/course" } },
    { id: "projects", label: "Portfolio Projects", items: projects, more: { label: "View more portfolio projects", href: "/blog/data-analyst-portfolio-projects-uk" } },
    { id: "career", label: "Career Support", items: careerSupport, more: { label: "View more career support", href: "/career-support" } },
    { id: "guides", label: "Career Guides", items: guides, more: { label: "View all career guides", href: "/blog" } }
  ];

  const topGroups = [
    { id: "ai", label: "Applied AI", short: "AI & statistics content", items: byTag("ai"), href: "/blog/ai-for-data-analysts-responsible-workflow" },
    { id: "data-prep", label: "Data Preparation", short: "data preparation content", items: byTag("data-prep"), href: "/course" },
    { id: "bi", label: "Reporting & BI", short: "Power BI content", items: byTag("bi"), href: "/blog/power-bi-portfolio-checklist" },
    { id: "programming", label: "SQL & Python", short: "SQL & Python content", items: byTag("programming"), href: "/course" },
    { id: "career", label: "Careers", short: "career content", items: byTag("career"), href: "/career-support" }
  ];

  return (
    <div className="mxHome">
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="mxHero">
        <svg className="mxHero__pattern" viewBox="0 0 800 800" aria-hidden="true">
          <circle cx="400" cy="400" r="330" />
          <path d="M70 400h660M400 70c140 120 140 540 0 660M400 70c-140 120-140 540 0 660" />
          <path d="M120 240c180 60 380 60 560 0M120 560c180-60 380-60 560 0" />
        </svg>
        <div className="mxWrap mxHero__inner">
          <div className="mxHero__copy">
            <h1 className="mxDisplay">One programme, the full career arc.</h1>
            <p>Build in-demand data skills with modules mapped to the analyst roles you&apos;re aiming for; all in one place.</p>
            <Link className="mxBtn mxBtn--orange mxBtn--lg" href="/course">Explore the programme</Link>
          </div>
          <div className="mxHero__cards">
            <PagedRow label="Featured modules" perPage={2} dotsTheme="light" className="mxPaged--hero">
              {heroItems.map((item) => <CourseCard key={item.id} item={item} />)}
            </PagedRow>
          </div>
        </div>
      </section>

      <ToolStrip />

      {/* Latest */}
      <section className="mxSection mxSection--sand">
        <div className="mxWrap">
          <div className="mxHeading mxHeading--center">
            <h2 className="mxDisplay mxDisplay--md"><span className="mxNew mxNew--lg">NEW</span> The latest at Mastery Nexus</h2>
            <p>Explore our newest modules, projects and guides.</p>
          </div>
          <PagedRow label="Latest additions" perPage={4} sideArrows>
            {latestItems.map((item) => <CourseCard key={item.id} item={item} showNew />)}
          </PagedRow>
          <div className="mxCenter">
            <Link className="mxBtn mxBtn--orange mxBtn--lg" href="/course">Browse the full programme</Link>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="mxSection mxSection--offwhite">
        <div className="mxWrap">
          <h2 className="mxTitle"><FlameIcon size={40} className="mxFlame" /> Trending at Mastery Nexus</h2>
          <TrendingTabs tabs={trendingTabs} />
        </div>
      </section>

      {/* Learning path banner */}
      <section className="mxSection mxSection--white mxSection--tight">
        <div className="mxWrap">
          <div className="mxPath">
            <div className="mxPath__copy">
              <h2 className="mxDisplay mxDisplay--sm"><SparkleIcon size={34} className="mxSpark" /> Find your learning path</h2>
              <p>Answer a few questions to get personalised recommendations on what learning path is best for you.</p>
              <QuizButton className="mxBtn mxBtn--orange">Get Started</QuizButton>
            </div>
            <div className="mxPath__img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("1531545514256-b1400bc00f31", 900)} alt="Learner smiling while reading on a phone" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Learning formats */}
      <section className="mxSection mxSection--white">
        <div className="mxWrap">
          <div className="mxHeading mxHeading--center">
            <h2 className="mxDisplay">Find your perfect learning format</h2>
            <p className="mxLead">Mastery Nexus combines several ways to learn and grow your skills. See how each part works for you.</p>
          </div>
          <div className="mxFormats">
            {formats.map((f) => (
              <article className={`mxFormat mxFormat--${f.tone}`} key={f.title}>
                <header>
                  <div className="mxFormat__title"><span className="mxFormat__icon">{f.icon}</span><h3>{f.title}</h3></div>
                  <p>{f.text}</p>
                </header>
                <ul>
                  <li><ClockIcon size={24} />{f.facts[0]}</li>
                  <li><CertIcon size={24} />{f.facts[1]}</li>
                  <li><TrendIcon size={24} />{f.facts[2]}</li>
                </ul>
                <Link className="mxBtn mxBtn--dark mxBtn--block" href={f.href}>{f.cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Top courses */}
      <section className="mxSection mxSection--stone">
        <div className="mxWrap">
          <h2 className="mxTitle mxTitle--xl">Explore top modules</h2>
          <TopCourses groups={topGroups} />
        </div>
      </section>

      {/* Promo banner */}
      <section className="mxPromoBand">
        <div className="mxWrap mxPromoBand__inner">
          <div className="mxPromoBand__copy">
            <h2 className="mxDisplay mxDisplay--md">New cohort: start with what you&apos;re missing</h2>
            <p>Build career momentum you can take into the new year and beyond. <strong className="mxPink">Book a free skill-gap assessment</strong> this month and get a personalised 12-week learning map <strong>before you commit</strong>. No coding test required.</p>
            <Link className="mxBtn mxBtn--orange" href="/contact">Learn more</Link>
          </div>
          <div className="mxPromoBand__art" aria-hidden="true">
            <span className="mxPromoBand__teal" />
            <span className="mxPromoBand__pink" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("1573496359142-b8d87734a5a2", 900)} alt="" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Stats + testimonials */}
      <section className="mxSection mxSection--cream">
        <div className="mxWrap">
          <div className="mxHeading mxHeading--center">
            <h2 className="mxDisplay">Learn something new with Mastery Nexus</h2>
            <p className="mxLead">Mastery Nexus helps career changers across the UK build data skills they can prove. Start with a free assessment today!</p>
          </div>
          <div className="mxStats">
            <div><strong>12</strong><p>weeks from skill-gap diagnostic to a structured career sprint.</p></div>
            <div><strong>6</strong><p>business-style portfolio projects you can defend in interviews.</p></div>
            <div><strong>8</strong><p>focused stages covering Excel, Power BI, SQL, Python, statistics and AI.</p></div>
            <div><strong>1:1</strong><p>mentor checkpoints that adapt your plan to your evidence gaps.</p></div>
          </div>
          <div className="mxCenter"><Link className="mxUnderline" href="/course">Explore the 12-week plan today</Link></div>

          <h2 className="mxTitle mxTitle--center mxTitle--xl mxVoicesTitle">Hear where our learners are starting from</h2>
          <Testimonials voices={voices} />
          <div className="mxCenter"><Link className="mxUnderline" href="/personalised-learning">Read more about personalised learning</Link></div>
        </div>
      </section>

      {/* Career support band */}
      <section className="mxTeam">
        <div className="mxWrap mxTeam__inner">
          <div className="mxTeam__copy">
            <h2 className="mxDisplay mxDisplay--md">Support for every step of your job search</h2>
            <h3>Discover Mastery Nexus Career Support</h3>
            <p>Get reviewed projects, a role-specific CV, a clear career-change story and interview practice, then run a disciplined UK job search with your mentor.</p>
            <Link className="mxBtn mxBtn--orange" href="/career-support">Discover career support</Link>
          </div>
          <div className="mxTeam__art">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("1600880292203-757bb62b4baf", 1100)} alt="Two colleagues smiling during a meeting" loading="lazy" />
            <span className="mxTeam__badge"><NexusLogo inverse /><em>Careers</em></span>
          </div>
        </div>
      </section>

      {/* Popular topics */}
      <section className="mxSection mxSection--white">
        <div className="mxWrap mxWrap--narrow">
          <h2 className="mxTitle mxTitle--sm">Popular topics</h2>
          <div className="mxTopics">
            {topics.map((t) => (
              <Link className="mxTopic" key={t.id} href={t.href}>
                <TopicIcon name={t.id} />
                <span>{t.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="mxCommunity">
        <div className="mxWrap mxCommunity__inner">
          <div className="mxCommunity__copy">
            <h2 className="mxDisplay mxDisplay--md mxDisplay--green">Discover more than a classroom — join a learning community.</h2>
            <ul>
              <li>Learn the tools UK employers ask for: <Link href="/course">Excel</Link>, <Link href="/course">SQL</Link>, and <Link href="/blog/power-bi-portfolio-checklist">Power BI</Link>.</li>
              <li>Learn from anywhere in the UK with live online sessions and mentor checkpoints.</li>
              <li>Connect with other career changers working through the same 12-week plan.</li>
              <li>Build projects across operations, finance, customer and executive reporting.</li>
              <li>Engage with mentor-led practice that adapts to your starting point and weekly availability.</li>
            </ul>
          </div>
          <div className="mxCommunity__img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("1516321318423-f06f85e504b3", 1100)} alt="Learner working through an online lesson on a laptop" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Register band */}
      <section className="mxRegister">
        <div className="mxWrap">
          <h2 className="mxDisplay">Book your free skill-gap call</h2>
          <p>No coding test required.</p>
          <Link className="mxBtn mxBtn--orange" href="/contact">Get started</Link>
        </div>
      </section>

      <PopularSubjects columns={subjectColumns} />
    </div>
  );
}
