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
    <section
      className={clsx(
        "py-16 md:py-24 lg:py-32 px-4 text-center text-white",
        variant === "primary" ? "bg-primary" : "bg-accent"
      )}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 leading-tight">
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
            className={clsx(
              "font-semibold px-8 py-4 rounded-sm transition-colors text-base",
              variant === "primary"
                ? "bg-white text-primary hover:bg-blue-50"
                : "bg-white text-accent hover:bg-green-50"
            )}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors text-base"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
