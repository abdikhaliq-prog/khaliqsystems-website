import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const Comp = Tag as "div";

  return (
    <Comp className={className}>{children}</Comp>
  );
}
