import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionWrapper from "@/components/shared/SectionWrapper";

const values = [
  {
    title: "Scripture-Centered",
    description:
      "We believe the Bible is the inspired, authoritative Word of God and the foundation for all we believe and do.",
  },
  {
    title: "Christ-Exalting Worship",
    description:
      "Our services exist to magnify Jesus — through music, prayer, and the preaching of His Word.",
  },
  {
    title: "Authentic Community",
    description:
      "We are committed to doing life together — bearing one another's burdens and celebrating each other's victories.",
  },
  {
    title: "Generous Service",
    description:
      "Following Jesus means loving our neighbors. We actively serve Huntsville and support global missions.",
  },
];

const leadership = [
  {
    name: "Pastor James Mercer",
    title: "Lead Pastor",
    bio: "Pastor James has served in ministry for over 20 years. A graduate of Samford University and Southern Seminary, he and his wife Emily have called Huntsville home since 2011. His passion is seeing people find their identity in Christ and live with purpose.",
    imageUrl: "/Mercer_Male.jpg",
  },
  {
    name: "Emily Mercer",
    title: "Pastoral Care & Women's Ministry",
    bio: "Emily leads our Women's Circle and pastoral care team with warmth and wisdom. A licensed counselor and mother of three, she has a heart for walking alongside people through life's hardest seasons with grace and truth.",
    imageUrl: "/Mercer_Female.jpg",
  },
];

const beliefs = [
  "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
  "We believe in the full authority and inerrancy of Scripture as God's Word.",
  "We believe that Jesus Christ is fully God and fully man, born of a virgin, crucified for our sins, and risen bodily from the dead.",
  "We believe salvation comes by grace alone, through faith alone, in Christ alone.",
  "We believe in the present ministry of the Holy Spirit dwelling in every believer.",
  "We believe in the universal church, and the local church as central to God's mission in the world.",
  "We believe in the bodily resurrection of all people and the eternal life of those who trust in Christ.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="We are a community of imperfect people pursuing a perfect Savior — together."
        videoSrc="/About.mov"
      />

      {/* ─── Our Story ─── */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              How Restore Church Began
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Restore Church was planted in 2012 by a small group of families who shared a
                vision for a church that was deeply rooted in Scripture and deeply committed to
                the city of Huntsville. They gathered in living rooms, then a school gymnasium,
                and finally found a home in the heart of the city.
              </p>
              <p>
                Over the years, that vision has grown into a congregation of hundreds of
                families — but the heart has never changed. We still believe that the local
                church is the hope of the world, and that every person who walks through our
                doors deserves to hear that they are loved, seen, and wanted.
              </p>
              <p>
                Today, Restore Church continues to grow — not just in numbers, but in depth.
                We are committed to raising up the next generation of leaders, serving our city
                with excellence, and making disciples who make disciples.
              </p>
            </div>
          </div>
          <div className="relative pb-4 pl-4">
            <div className="absolute bottom-0 left-0 w-full h-full bg-primary rounded-sm" />
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl z-10">
              <Image
                src="/About_Us.png"
                alt="Restore Church history"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Mission & Values ─── */}
      <SectionWrapper className="bg-off-white">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            What We&apos;re About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Our Mission &amp; Values
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Our mission is to restore broken lives and build a thriving community through the
            love of Jesus Christ. These values shape everything we do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-sm shadow-sm flex gap-5">
              <div className="w-10 h-10 bg-primary rounded-full flex-shrink-0 flex items-center justify-center text-white font-serif font-bold text-lg">
                {i + 1}
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── Leadership ─── */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            Meet the Team
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">Our Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {leadership.map((person, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative pb-2 pr-2 flex-shrink-0">
                <div className="absolute bottom-0 right-0 w-full h-full bg-accent rounded-sm" />
                <div className="relative w-32 h-40 rounded-sm overflow-hidden shadow-lg z-10">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-3">
                  {person.title}
                </p>
                <p className="text-muted text-sm leading-relaxed">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── Statement of Faith ─── */}
      <SectionWrapper className="bg-primary-dark text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-accent-light uppercase tracking-widest text-sm font-semibold mb-2">
              What We Believe
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">
              Statement of Faith
            </h2>
          </div>
          <ul className="space-y-4">
            {beliefs.map((belief, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
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
                <p className="text-blue-100 leading-relaxed">{belief}</p>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <CTASection
        heading="We'd Love to Meet You"
        subtext="Every Sunday is a great time to visit. We can't wait to welcome you."
        primaryLabel="Plan Your Visit"
        primaryHref="/connect"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        variant="accent"
      />
    </>
  );
}
