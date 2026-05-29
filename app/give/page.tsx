import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Give | Restore Church Huntsville",
  description: "Support the mission of Restore Church Huntsville through generous giving. Give online, in person, or via text.",
};
import CTASection from "@/components/shared/CTASection";
import SectionWrapper from "@/components/shared/SectionWrapper";

const whyWeGive = [
  {
    title: "Generosity Is Worship",
    description:
      "When we give, we're declaring that God is the owner of everything we have. Giving is one of the most tangible acts of trust in the goodness of God.",
  },
  {
    title: "It Advances the Mission",
    description:
      "Your generosity funds sermons, life groups, community outreach, and global missions. Every gift is an investment in lives being changed.",
  },
  {
    title: "It Changes You",
    description:
      "Scripture is clear: where your treasure is, your heart follows. Giving consistently loosens the grip of money and opens our hearts to greater joy.",
  },
];

const givingOptions = [
  {
    label: "Online",
    description: "Give securely any time from your computer or phone.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M2 10h20" />
      </svg>
    ),
  },
  {
    label: "In Person",
    description: "Giving boxes are available at every Sunday service.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: "Text to Give",
    description: 'Text "GIVE" to (256) 555-0188 to get started.',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function GivePage() {
  return (
    <>
      <PageHero
        title="Generosity"
        subtitle="We give because we have been given to. Everything starts with gratitude."
        videoSrc="/Give.mov"
      />

      {/* ─── Philosophy ─── */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber uppercase tracking-[0.18em] text-sm font-semibold mb-3">
            Why We Give
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Giving Is an Act of Faith
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              At Restore Church, we believe that generosity is more than a financial
              decision — it&apos;s a spiritual discipline that shapes our hearts and advances God&apos;s
              kingdom in our city and around the world.
            </p>
            <p>
              We are committed to being responsible stewards of every dollar given. Our
              finances are audited annually, and a summary of how we use our resources is
              available to all members.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Give Now CTA ─── */}
      <section className="bg-navy-gradient py-14 md:py-20 lg:py-28 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Give Online Today
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Secure, simple, and available any time. Your gift makes a difference.
          </p>
          <a
            href="https://tithe.ly/give_new/www/#/tithely/give-one-time/restore-church-hsv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-5 rounded-sm transition-colors text-xl"
          >
            Give Now
          </a>
          <p className="text-blue-200 text-sm mt-6">
            Giving is processed securely through our giving platform.
          </p>
        </div>
      </section>

      {/* ─── How to Give ─── */}
      <SectionWrapper className="bg-cream">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-semibold">Ways to Give</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {givingOptions.map((option, i) => (
            <div key={i} className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="flex justify-center mb-5">{option.icon}</div>
              <h3 className="font-serif text-xl font-semibold mb-2">{option.label}</h3>
              <p className="text-muted text-sm leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── Why We Give ─── */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <p className="text-amber uppercase tracking-[0.18em] text-sm font-semibold mb-2">
            The Heart Behind It
          </p>
          <h2 className="font-serif text-3xl font-semibold">Three Reasons We Give</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyWeGive.map((reason, i) => (
            <div key={i} className="text-center px-4">
              <div className="w-14 h-14 bg-amber-light rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="font-serif text-2xl font-bold text-amber">{i + 1}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        heading="Questions About Giving?"
        subtext="We want to make generosity as easy as possible. Reach out and we can help."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        variant="primary"
      />
    </>
  );
}
