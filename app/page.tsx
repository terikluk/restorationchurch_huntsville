import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/shared/CTASection";
import SectionWrapper from "@/components/shared/SectionWrapper";

const serviceTimes = [
  {
    day: "Sunday",
    time: "9:00 AM",
    label: "Traditional Service",
    location: "Main Sanctuary",
  },
  {
    day: "Sunday",
    time: "11:00 AM",
    label: "Contemporary Service",
    location: "Main Sanctuary",
  },
  {
    day: "Wednesday",
    time: "6:30 PM",
    label: "Midweek Gathering",
    location: "Fellowship Hall",
  },
];

const lifeGroups = [
  {
    title: "Men's Brotherhood",
    description:
      "A space for men to grow together in faith, accountability, and authentic brotherhood.",
    schedule: "Saturdays at 7:30 AM",
  },
  {
    title: "Women's Circle",
    description:
      "Encouraging women to go deeper in their faith and build lasting relationships.",
    schedule: "Tuesdays at 6:30 PM",
  },
  {
    title: "Young Adults",
    description:
      "For adults 18–35 navigating life, faith, and purpose together in community.",
    schedule: "Thursdays at 7:00 PM",
  },
];

const events = [
  {
    date: { month: "JUN", day: "8" },
    title: "Summer Family Picnic",
    description:
      "Join us for food, fellowship, and fun at Ditto Landing. All ages welcome.",
  },
  {
    date: { month: "JUN", day: "15" },
    title: "Baptism Sunday",
    description:
      "Celebrate with those taking their next step of faith through water baptism.",
  },
  {
    date: { month: "JUN", day: "22" },
    title: "Serve Day Huntsville",
    description:
      "Together we serve our city with projects across the Huntsville community.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-screen flex items-center justify-center bg-primary-dark overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Cross_Sunset.mov" type="video/mp4" />
          <source src="/Cross_Sunset.mov" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-accent-light uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Welcome to Restore Church · Huntsville, Alabama
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Come Home.<br />Find Life.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            A church for every season of your story — gathering to worship, grow, and serve
            together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/connect"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-sm transition-colors text-lg"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/sermons"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-sm transition-colors text-lg"
            >
              Watch Online
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── Welcome Strip ─── */}
      <section className="bg-primary py-28 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5">
            We&apos;re So Glad You&apos;re Here
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            At Restore Church, we believe every person has a story — and that God is writing
            something beautiful through yours. Whether you&apos;ve been walking with Jesus for decades
            or are just beginning to explore faith, there is a place for you here.
          </p>
        </div>
      </section>

      {/* ─── Service Times ─── */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            We Gather Every Week
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3">
            Join Us This Weekend
          </h2>
          <p className="text-muted text-lg">We gather to worship, learn, and grow together.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceTimes.map((s, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-sm p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <p className="text-muted text-xs uppercase tracking-widest font-semibold mb-1">
                {s.day}
              </p>
              <p className="font-serif text-3xl font-bold text-primary mb-2">{s.time}</p>
              <p className="font-semibold text-gray-800">{s.label}</p>
              <p className="text-muted text-sm mt-1">{s.location}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="text-primary font-semibold hover:text-primary-dark transition-colors text-sm tracking-wide"
          >
            Get Directions &amp; More Info →
          </Link>
        </div>
      </SectionWrapper>

      {/* ─── I'm New Here ─── */}
      <SectionWrapper className="bg-off-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative pb-4 pr-4">
            <div className="absolute bottom-0 right-0 w-full h-full bg-accent rounded-sm" />
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl z-10">
              <Image
                src="/New_here.png"
                alt="People gathered at Restore Church Huntsville"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">
              First Time Here?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              What to Expect
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "A warm, welcoming community that will greet you by name",
                "Inspiring worship in a relaxed, come-as-you-are atmosphere",
                "Biblical teaching relevant to everyday life",
                "A safe, engaging environment for children of all ages",
                "No pressure — just an open invitation to experience something real",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/connect"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-sm transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Mission Statement ─── */}
      <section className="bg-primary-dark text-white py-40 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-0.5 bg-accent mx-auto mb-10" />
          <p className="text-blue-300 uppercase tracking-widest text-xs font-semibold mb-6">
            Our Mission
          </p>
          <h2 className="font-serif text-2xl md:text-4xl font-normal italic leading-relaxed mb-10 text-blue-50">
            &ldquo;To restore broken lives and build a thriving community through the love of Jesus Christ.&rdquo;
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>
      </section>

      {/* ─── Latest Sermon ─── */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            Latest Message
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">This Week&apos;s Sermon</h2>
        </div>
        <div className="max-w-4xl mx-auto bg-off-white rounded-sm overflow-hidden shadow-md flex flex-col md:flex-row">
          <div className="relative md:w-2/5 aspect-video md:aspect-auto min-h-48 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/Bible.mov" type="video/mp4" />
              <source src="/Bible.mov" type="video/quicktime" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
              Series: Renewed
            </p>
            <h3 className="font-serif text-2xl font-semibold mb-3">The Renewing Mind</h3>
            <p className="text-muted text-sm mb-4">
              Pastor James Mercer · May 25, 2026 · Romans 12:1–2
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              What would it look like if every area of your life was transformed from the inside
              out? This week, we explore what Scripture means when it invites us to be renewed.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/sermons"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-sm transition-colors text-sm"
              >
                Watch Now
              </Link>
              <Link
                href="/sermons"
                className="border border-primary text-primary hover:bg-primary-light font-semibold px-6 py-3 rounded-sm transition-colors text-sm"
              >
                All Sermons
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Life Groups ─── */}
      <SectionWrapper className="bg-accent-light">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            Community
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3">Life Groups</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Faith grows best in community. Find a group that&apos;s right for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {lifeGroups.map((group, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-accent rounded-full mb-5 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{group.title}</h3>
              <p className="text-muted mb-4 leading-relaxed text-sm">{group.description}</p>
              <p className="text-accent text-sm font-semibold">{group.schedule}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/connect"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-sm transition-colors"
          >
            Find Your Group
          </Link>
        </div>
      </SectionWrapper>

      {/* ─── Upcoming Events ─── */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-2">
            What&apos;s Coming Up
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">Upcoming Events</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {events.map((event, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary p-4 text-white text-center">
                <p className="text-xs uppercase tracking-widest text-blue-200">
                  {event.date.month}
                </p>
                <p className="font-serif text-4xl font-bold">{event.date.day}</p>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{event.description}</p>
                <Link
                  href="/events"
                  className="mt-4 inline-block text-primary text-sm font-semibold hover:text-primary-dark transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/events"
            className="border border-primary text-primary hover:bg-primary-light font-semibold px-8 py-4 rounded-sm transition-colors"
          >
            View All Events
          </Link>
        </div>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTASection
        heading="Ready to Take Your Next Step?"
        subtext="We'd love to welcome you home. Come as you are — we're saving a seat for you."
        primaryLabel="Connect With Us"
        primaryHref="/connect"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        variant="primary"
      />
    </>
  );
}
