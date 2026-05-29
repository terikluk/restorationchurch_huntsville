import { ReactNode } from "react";
import clsx from "clsx";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={clsx("py-24 md:py-32 px-4", className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
