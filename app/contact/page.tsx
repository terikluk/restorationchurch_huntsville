import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";

const contactDetails = [
  {
    label: "Address",
    value: "2200 Memorial Pkwy NW\nHuntsville, AL 35801",
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(256) 555-0187",
    href: "tel:+12565550187",
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hello@restorationhuntsville.org",
    href: "mailto:hello@restorationhuntsville.org",
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const serviceTimes = [
  { label: "Sunday", times: ["9:00 AM — Traditional Service", "11:00 AM — Contemporary Service"] },
  { label: "Wednesday", times: ["6:30 PM — Midweek Gathering"] },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out any time — we're here to help."
      />

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ─── Left: Info ─── */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
              We&apos;re Here for You
            </h2>

            <div className="space-y-6 mb-10">
              {contactDetails.map((detail, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-gray-800 hover:text-primary transition-colors leading-relaxed"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Service Times */}
            <div className="bg-off-white rounded-sm p-6 mb-8">
              <h3 className="font-serif text-xl font-semibold mb-4">Service Times</h3>
              {serviceTimes.map((service, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <p className="font-semibold text-primary text-sm mb-1">{service.label}</p>
                  {service.times.map((t, j) => (
                    <p key={j} className="text-muted text-sm">{t}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-primary-light rounded-sm p-8 text-center border border-primary/10">
              <svg
                className="w-10 h-10 text-primary mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="font-semibold text-primary-dark mb-1">2200 Memorial Pkwy NW</p>
              <p className="text-muted text-sm mb-4">Huntsville, AL 35801</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* ─── Right: Contact Form ─── */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="James"
                    className="w-full border border-gray-300 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Mercer"
                    className="w-full border border-gray-300 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(256) 555-0000"
                  className="w-full border border-gray-300 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full border border-gray-300 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors text-gray-700"
                >
                  <option value="">Select a topic...</option>
                  <option>I&apos;m planning my first visit</option>
                  <option>I have a prayer request</option>
                  <option>I&apos;m interested in Life Groups</option>
                  <option>I want to get baptized</option>
                  <option>I want to serve</option>
                  <option>I have a general question</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-300 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-sm transition-colors text-base"
              >
                Send Message
              </button>
              <p className="text-center text-muted text-xs">
                We typically respond within 1–2 business days.
              </p>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
