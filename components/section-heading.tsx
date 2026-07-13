import type { ReactNode } from "react";

export function SectionHeading({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-label">
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <h2>{children}</h2>
    </div>
  );
}
