import type { ReactNode } from "react";
interface CardProps {
  children: ReactNode;
  className?: string;
}
export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-card-bg border border-border rounded-xl shadow-lg p-5 ${className}`}
    >
      {children}
    </div>
  );
}
