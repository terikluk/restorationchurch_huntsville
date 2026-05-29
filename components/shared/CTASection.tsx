import Link from "next/link";
import clsx from "clsx";

interface CTASectionProps {
  heading: string;
  subtext?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "primary" | "accent";
}

export default function CTASection({
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "primary",
}: CTASectionProps) {
  return (
    <section className="bg-navy-gradient py-14 md:py-20 px-4 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {heading}
        </h2>
        {subtext && (
          <p className="text-lg mb-10 text-white/80 max-w-xl mx-auto leading-relaxed">
            {subtext}
          </p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryHref}
            className="bg-white text-primary font-semibold px-8 py-4 rounded-sm hover:bg-blue-50 transition-colors text-base"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="border-2 border-amber text-amber font-semibold px-8 py-4 rounded-sm hover:bg-amber/10 transition-colors text-base"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
