type P = { size?: number; className?: string };

const base = (size = 20) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true });

export const ClockIcon = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" /></svg>
);
export const GaugeIcon = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M4 18a9 9 0 1 1 16 0z" /><path d="m12 14 4-5" /></svg>
);
export const ChevronLeft = ({ size, className }: P) => <svg {...base(size)} className={className} strokeWidth={2.6}><path d="m15 5-7 7 7 7" /></svg>;
export const ChevronRight = ({ size, className }: P) => <svg {...base(size)} className={className} strokeWidth={2.6}><path d="m9 5 7 7-7 7" /></svg>;
export const ChevronDown = ({ size, className }: P) => <svg {...base(size)} className={className}><path d="m6 9 6 6 6-6" /></svg>;
export const ArrowRight = ({ size, className }: P) => <svg {...base(size)} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const SearchIcon = ({ size, className }: P) => <svg {...base(size)} className={className}><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>;
export const CloseIcon = ({ size, className }: P) => <svg {...base(size)} className={className} strokeWidth={2.6}><path d="M6 6l12 12M18 6 6 18" /></svg>;
export const FlameIcon = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M12 3c1 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-5 3-6 0 2 1 3 2 3 0-3-1-5 1-8z" /></svg>
);
export const SparkleIcon = ({ size, className }: P) => (
  <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" className={className} aria-hidden="true"><path d="M12 1c.6 5.6 5.4 10.4 11 11-5.6.6-10.4 5.4-11 11-.6-5.6-5.4-10.4-11-11C6.6 11.4 11.4 6.6 12 1z" fill="currentColor" /></svg>
);
export const BookIcon = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z" fill="currentColor" stroke="none" /><path d="M14 9h4M14 12h4M14 15h4" stroke="#fff" /></svg>
);
export const CertIcon = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M3 10h18M9 16v5l3-2 3 2v-5" /></svg>
);
export const GlobeIcon = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>
);
export const CapIcon = ({ size, className }: P) => (
  <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" className={className} aria-hidden="true"><path d="M12 3 1 9l11 6 9-4.9V17h2V9z" fill="currentColor" /><path d="M5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8L12 17z" fill="currentColor" /></svg>
);
export const TrendIcon = ({ size, className }: P) => <svg {...base(size)} className={className}><path d="m3 17 6-6 4 4 8-8M15 7h6v6" /></svg>;
export const QuoteIcon = ({ size, className }: P) => (
  <svg width={size ?? 28} height={size ?? 28} viewBox="0 0 28 24" className={className} aria-hidden="true"><path d="M2 4h9v8l-4 8H3l3-8H2zM16 4h9v8l-4 8h-4l3-8h-4z" fill="currentColor" /></svg>
);
export const LinkedInIcon = ({ size, className }: P) => (
  <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.85h-4v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.35-2 2.74v5.29h-4z" /></svg>
);
export const InstagramIcon = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
);
export const MailIcon = ({ size, className }: P) => <svg {...base(size)} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
