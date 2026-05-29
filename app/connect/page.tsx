import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionWrapper from "@/components/shared/SectionWrapper";

const lifeGroups = [
  {
    title: "Men's Brotherhood",
    description:
      "Men from all walks of life gathering for Bible study, prayer, and real accountability. This isn't a polished group — it's an honest one.",
    schedule: "Saturdays at 7:30 AM",
    location: "Room 101, Main Building",
  },
  {
    title: "Women's Circle",
    description:
      "A place for women to be seen, known, and encouraged. We study God's Word together and journey through life side by side.",
    schedule: "Tuesdays at 6:30 PM",
    location: "Room 204, Family Wing",
  },
  {
    title: "Young Adults",
    description:
      "For those 18–35 figuring out faith, career, relationships, and everything in between. Come as you are.",
    schedule: "Thursdays at 7:00 PM",
    location: "The Upper Room",
  },
  {
    title: "Couples Life Group",
    description:
      "Grow together as a couple alongside other married pairs navigating life with purpose and faith.",
    schedule: "Fridays at 7:00 PM",
    location: "Various Homes",
  },
  {
    title: "Senior Saints",
    description:
      "A warm gathering of mature believers for fellowship, prayer, and the rich wisdom that only comes from years of walking with God.",
    schedule: "Wednesdays at 10:00 AM",
    location: "Fellowship Hall",
  },
  {
    title: "Families with Kids",
    description:
      "Parents raising children in the faith — sharing the joys, challenges, and countless blessings of faith-filled family life.",
    schedule: "Sundays at 12:30 PM",
    location: "Room 301, Family Wing",
  },
];

const serveTeams = [
  { team: "Welcome Team", desc: "Be the first smile someone sees. Make guests feel truly at home." },
  { team: "Worship Team", desc: "Use your musical gifts to lead our congregation in praise." },
  { team: "Kids Ministry", desc: "Invest in the next generation by serving in our children's program." },
  { team: "Tech & Media", desc: "Run audio, video, and live streaming to support every service." },
  { team: "Grounds & Facilities", desc: "Keep our building clean, welcoming, and ready for ministry." },
  { team: "City Serve", desc: "Lead and participate in our outreach efforts across Huntsville." },
];

export default function ConnectPage() {
  return (
    <>
      <PageHero
        title="Get Connected"
        subtitle="The Christian life was never meant to be lived alone. Find your place in this community."
      />

      {/* ─── Life Groups ─── */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            Community Groups
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Life Groups</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Life groups meet throughout the week in homes and on campus. Find the one that fits
            your life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifeGroups.map((group, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-sm p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-xl font-semibold mb-2">{group.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{group.description}</p>
              <div className="space-y-1 text-xs text-muted">
                <p className="font-semibold text-primary">{group.schedule}</p>
                <p>{group.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-sm transition-colors"
          >
            Sign Up for a Group
          </Link>
        </div>
      </SectionWrapper>

      {/* ─── Serve Teams ─── */}
      <SectionWrapper className="bg-off-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">
              Make a Difference
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5">
              Serve With Us
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Every person has something to offer. Serving is one of the most powerful ways to
              grow in your faith and make a lasting impact on the people around you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serveTeams.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-sm shadow-sm">
                  <p className="font-semibold text-primary mb-1">{item.team}</p>
                  <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative pb-4 pl-4">
            <div className="absolute bottom-0 left-0 w-full h-full bg-accent rounded-sm" />
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl z-10">
              <Image
                src="/Serve_With_Us.png"
                alt="Volunteers serving together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Baptism & Membership ─── */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            Next Steps
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">
            Baptism &amp; Membership
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-primary-light p-8 rounded-sm">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.93 19.07A10 10 0 1119.07 4.93 10 10 0 014.93 19.07z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-3">Baptism</h3>
            <p className="text-muted leading-relaxed mb-4">
              Baptism is a public declaration of your faith in Jesus. If you&apos;ve made the decision
              to follow Christ, baptism is your next step. We offer baptism regularly — let us
              know you&apos;re ready.
            </p>
            <Link href="/contact" className="text-primary font-semibold text-sm hover:text-primary-dark">
              I Want to Be Baptized →
            </Link>
          </div>
          <div className="bg-accent-light p-8 rounded-sm">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-3">Membership</h3>
            <p className="text-muted leading-relaxed mb-4">
              Becoming a member of Restore Church means committing to this family — to show
              up, serve, and grow together. We offer a membership class on the first Sunday of
              each month.
            </p>
            <Link href="/contact" className="text-accent font-semibold text-sm hover:text-accent-dark">
              Join Our Next Class →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        heading="Ready to Connect?"
        subtext="Reach out and we'll help you find the perfect next step for where you are."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Plan Your Visit"
        secondaryHref="/connect"
        variant="primary"
      />
    </>
  );
}
