import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionWrapper from "@/components/shared/SectionWrapper";

const events = [
  {
    date: { month: "JUN", day: "8", year: "2025" },
    title: "Summer Family Picnic",
    time: "12:00 PM – 4:00 PM",
    location: "Ditto Landing, Huntsville",
    description:
      "Our annual summer gathering for the whole family. Bring your lawn chairs and appetite — we'll have food, games, and plenty of fellowship for all ages. This is one of our favorite days of the year.",
    category: "Family",
  },
  {
    date: { month: "JUN", day: "15", year: "2025" },
    title: "Baptism Sunday",
    time: "9:00 AM & 11:00 AM Services",
    location: "Main Sanctuary",
    description:
      "Join us as we celebrate those taking their next step of faith through water baptism. If you've been thinking about being baptized, this is your Sunday. Talk to us after any service.",
    category: "Worship",
  },
  {
    date: { month: "JUN", day: "22", year: "2025" },
    title: "Serve Day Huntsville",
    time: "8:00 AM – 2:00 PM",
    location: "Various Locations, Huntsville",
    description:
      "We're taking our love for the city into the streets. Join teams serving at local schools, food banks, and neighborhoods across Huntsville. All skill levels welcome — just bring your hands and your heart.",
    category: "Outreach",
  },
  {
    date: { month: "JUL", day: "4", year: "2025" },
    title: "Freedom Celebration",
    time: "6:00 PM",
    location: "Church Grounds",
    description:
      "A patriotic evening of music, prayer, and fireworks. A special service followed by a community cookout on our grounds. An evening to remember.",
    category: "Special Event",
  },
  {
    date: { month: "JUL", day: "14", year: "2025" },
    title: "Membership Class",
    time: "12:30 PM – 3:00 PM",
    location: "Room 105, Main Building",
    description:
      "Interested in becoming a member of Restore Church? Join us for our monthly class where we share our vision, values, and the next steps for making this your church home.",
    category: "Growth",
  },
  {
    date: { month: "JUL", day: "28", year: "2025" },
    title: "Summer Worship Night",
    time: "7:00 PM",
    location: "Main Sanctuary",
    description:
      "An extended evening of worship — no message, no announcements, just music and prayer. Come prepared to encounter God in a simple, powerful way.",
    category: "Worship",
  },
];

const categoryColors: Record<string, string> = {
  Family: "bg-accent-light text-accent",
  Worship: "bg-primary-light text-primary",
  Outreach: "bg-orange-50 text-orange-700",
  "Special Event": "bg-purple-50 text-purple-700",
  Growth: "bg-yellow-50 text-yellow-700",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="There&apos;s always something happening at Restore Church. Come be part of it."
        videoSrc="/Events.mov"
      />

      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            What&apos;s Coming Up
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">
            Upcoming Events
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow flex"
            >
              {/* Date Badge */}
              <div className="bg-primary text-white text-center px-5 py-6 flex flex-col items-center justify-center flex-shrink-0 w-20">
                <p className="text-xs uppercase tracking-widest text-blue-200 mb-1">
                  {event.date.month}
                </p>
                <p className="font-serif text-3xl font-bold leading-none">{event.date.day}</p>
                <p className="text-blue-200 text-xs mt-1">{event.date.year}</p>
              </div>
              {/* Event Info */}
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-xl font-semibold">{event.title}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${categoryColors[event.category] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {event.category}
                  </span>
                </div>
                <p className="text-accent text-xs font-semibold mb-1">{event.time}</p>
                <p className="text-muted text-xs mb-3">{event.location}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-light rounded-sm p-8 text-center">
          <h3 className="font-serif text-2xl font-semibold mb-3 text-primary-dark">
            Stay in the Loop
          </h3>
          <p className="text-muted mb-6 max-w-lg mx-auto">
            Subscribe to our weekly email for the latest news, events, and announcements from
            Restore Church.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-gray-300 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-sm transition-colors text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </SectionWrapper>

      <CTASection
        heading="Questions About an Event?"
        subtext="We'd love to help you get plugged in. Reach out and we'll point you in the right direction."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        variant="accent"
      />
    </>
  );
}
