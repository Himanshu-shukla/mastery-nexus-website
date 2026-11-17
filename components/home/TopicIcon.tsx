const D = "#00262b";
const P = "#f0a3b8";

const common = { width: 96, height: 80, viewBox: "0 0 96 80", fill: "none", strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export default function TopicIcon({ name }: { name: string }) {
  switch (name) {
    case "excel":
      return (
        <svg {...common}>
          <rect x="18" y="12" width="60" height="54" stroke={D} />
          <rect x="21" y="15" width="16" height="10" fill={P} />
          {[30, 42, 54].map((y) => <path key={y} d={`M18 ${y}h60`} stroke={D} />)}
          {[38, 58].map((x) => <path key={x} d={`M${x} 12v54`} stroke={D} />)}
        </svg>
      );
    case "powerbi":
      return (
        <svg {...common}>
          <path d="M16 68h64" stroke={D} />
          <rect x="22" y="44" width="10" height="24" stroke={D} />
          <rect x="38" y="30" width="10" height="38" fill={P} />
          <rect x="54" y="18" width="10" height="50" stroke={D} />
          <path d="M20 34 40 20l14 8 22-16" stroke={D} />
        </svg>
      );
    case "sql":
      return (
        <svg {...common}>
          <ellipse cx="48" cy="18" rx="22" ry="7" stroke={D} />
          <path d="M26 18v44c0 4 10 7 22 7s22-3 22-7V18" stroke={D} />
          <path d="M26 33c0 4 10 7 22 7s22-3 22-7v8c0 4-10 7-22 7s-22-3-22-7z" fill={P} />
          <path d="M26 48c0 4 10 7 22 7s22-3 22-7" stroke={D} />
        </svg>
      );
    case "python":
      return (
        <svg {...common}>
          <path d="M18 18h60l-4 44H14z" stroke={D} />
          <path d="M17 28h60" stroke={D} />
          <circle cx="68" cy="58" r="9" fill={P} />
          <circle cx="68" cy="58" r="3.5" fill="#fff" />
        </svg>
      );
    case "statistics":
      return (
        <svg {...common}>
          <path d="M18 64V34h8v30M32 64V22h8v30M46 52V12h8v28" stroke={D} />
          <circle cx="64" cy="54" r="10" stroke={P} strokeWidth={3.2} />
          <path d="m71 61 9 9" stroke={P} strokeWidth={3.2} />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <path d="M40 66v-8c-6-1-10-5-10-10v-6l-4-2 4-6c0-10 8-18 18-18s18 8 18 18c0 8-4 13-8 16v16" stroke={D} />
          <rect x="40" y="62" width="16" height="6" fill={P} />
          <path d="M48 4v6M24 12l4 4M72 12l-4 4M16 32h6M74 32h6" stroke={P} />
        </svg>
      );
    case "cleaning":
      return (
        <svg {...common}>
          <path d="M16 14h64L56 42v20l-16 8V42z" stroke={D} />
          <path d="M28 22h40l-10 12H38z" fill={P} />
        </svg>
      );
    case "dashboards":
      return (
        <svg {...common}>
          <path d="M22 14h54l-4 40H18z" stroke={D} />
          <path d="M12 62h68l-2 6H10z" stroke={D} />
          <circle cx="47" cy="34" r="9" fill={P} />
          <circle cx="47" cy="34" r="3.5" fill="#fff" />
        </svg>
      );
    case "portfolio":
      return (
        <svg {...common}>
          <path d="M30 8h42l-6 64H24z" stroke={D} />
          <path d="M36 22h8M50 22h8M36 32h24M36 42h22M36 52h8M50 52h8" stroke={P} strokeWidth={3} />
        </svg>
      );
    case "interviews":
    default:
      return (
        <svg {...common}>
          <circle cx="30" cy="34" r="7" stroke={D} />
          <circle cx="66" cy="34" r="7" stroke={D} />
          <circle cx="48" cy="20" r="7" stroke={D} />
          <path d="M14 58c0-8 7-13 16-13M82 58c0-8-7-13-16-13M30 38h36" stroke={D} />
          <circle cx="48" cy="46" r="8" fill={P} />
          <path d="M34 66c0-7 6-11 14-11s14 4 14 11z" fill={P} />
        </svg>
      );
  }
}
