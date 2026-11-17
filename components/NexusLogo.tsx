import Link from "next/link";

export default function NexusLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand ${inverse ? "brand--inverse" : ""}`} href="/" aria-label="Mastery Nexus home">
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 50 50" role="img">
          <path d="M7 28C7 17 14 9 24 9c8 0 13 4 19 12" />
          <path d="M43 22c0 11-7 19-17 19-8 0-13-4-19-12" />
          <circle cx="25" cy="25" r="4" />
        </svg>
      </span>
      <span className="brand__words"><strong>mastery</strong><span>nexus</span></span>
    </Link>
  );
}
