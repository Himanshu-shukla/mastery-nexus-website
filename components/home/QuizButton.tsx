"use client";

export default function QuizButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={className} onClick={() => window.dispatchEvent(new Event("open-career-quiz"))}>
      {children}
    </button>
  );
}
