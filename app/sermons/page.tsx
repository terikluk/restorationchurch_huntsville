import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionWrapper from "@/components/shared/SectionWrapper";

const sermons = [
  {
    series: "Renewed",
    title: "The Renewing Mind",
    pastor: "Pastor James Mercer",
    date: "June 1, 2025",
    passage: "Romans 12:1–2",
    duration: "42 min",
    imageColor: "0F3D6E",
  },
  {
    series: "Renewed",
    title: "New Every Morning",
    pastor: "Pastor James Mercer",
    date: "May 25, 2025",
    passage: "Lamentations 3:22–23",
    duration: "38 min",
    videoSrc: "/New_Every_Morning.mov",
  },
  {
    series: "Renewed",
    title: "The God Who Restores",
    pastor: "Emily Mercer",
    date: "May 18, 2025",
    passage: "Joel 2:25",
    duration: "35 min",
    videoSrc: "/The_God_Who_Restores.mov",
  },
  {
    series: "Roots",
    title: "Abiding in the Vine",
    pastor: "Pastor James Mercer",
    date: "May 11, 2025",
    passage: "John 15:1–8",
    duration: "44 min",
    videoSrc: "/Abiding_In_The_Vine.mov",
  },
  {
    series: "Roots",
    title: "Deep Waters",
    pastor: "Pastor James Mercer",
    date: "May 4, 2025",
    passage: "Psalm 1",
    duration: "40 min",
    videoSrc: "/Deep_Waters.mov",
  },
  {
    series: "Roots",
    title: "Built on the Rock",
    pastor: "Emily Mercer",
    date: "April 27, 2025",
    passage: "Matthew 7:24–27",
    duration: "37 min",
    videoSrc: "/Built_ON_The_Rock.mov",
  },
];

export default function SermonsPage() {
  const [featured, ...rest] = sermons;

  return (
    <>
      <PageHero
        title="Sermons"
        subtitle="Every message is an invitation — to know God more and live differently."
        videoSrc="/Sermons.mov"
      />

      {/* ─── Featured Sermon ─── */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-10">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            Latest Message
          </p>
          <h2 className="font-serif text-3xl font-semibold">This Week&apos;s Sermon</h2>
        </div>
        <div className="max-w-5xl mx-auto bg-off-white rounded-sm overflow-hidden shadow-lg flex flex-col md:flex-row">
          <div className="relative md:w-2/5 aspect-video md:aspect-auto min-h-52 overflow-hidden">
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
              <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl">
                <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-10 flex flex-col justify-center">
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
              Series: {featured.series}
            </p>
            <h3 className="font-serif text-3xl font-semibold mb-3">{featured.title}</h3>
            <p className="text-muted text-sm mb-2">
              {featured.pastor} · {featured.date}
            </p>
            <p className="text-muted text-sm mb-6">
              {featured.passage} · {featured.duration}
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-sm transition-colors text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Now
              </button>
              <button className="border border-gray-300 text-gray-700 hover:border-primary hover:text-primary font-semibold px-6 py-3 rounded-sm transition-colors text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Listen
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Sermon Archive ─── */}
      <SectionWrapper className="bg-off-white">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-2">
            Sermon Archive
          </p>
          <h2 className="font-serif text-3xl font-semibold">Recent Messages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((sermon, i) => (
            <div
              key={i}
              className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden group">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={sermon.videoSrc} type="video/mp4" />
                  <source src={sermon.videoSrc} type="video/quicktime" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-accent text-xs font-semibold uppercase tracking-wide mb-1">
                  {sermon.series}
                </p>
                <h3 className="font-serif text-lg font-semibold mb-1">{sermon.title}</h3>
                <p className="text-muted text-xs mb-3">
                  {sermon.pastor} · {sermon.date} · {sermon.duration}
                </p>
                <p className="text-primary text-xs font-semibold">{sermon.passage}</p>
                <div className="flex gap-3 mt-4">
                  <button className="text-xs bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2 rounded-sm transition-colors flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch
                  </button>
                  <button className="text-xs border border-gray-200 text-gray-600 hover:border-primary hover:text-primary font-semibold px-4 py-2 rounded-sm transition-colors flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    Listen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        heading="Never Miss a Message"
        subtext="Subscribe to our podcast or YouTube channel to keep up with every sermon."
        primaryLabel="Join Us This Sunday"
        primaryHref="/connect"
        variant="primary"
      />
    </>
  );
}
