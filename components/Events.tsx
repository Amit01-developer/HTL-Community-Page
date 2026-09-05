const events = [
  {
    tag: "🔥 Live Now",
    title: "HTL Knowledge Quest",
    meta: "📅 21 Mar – 19 Apr 2026  ·  💻 Online  ·  👤 Individual",
    desc: "HTL's first official quiz competition! Test your knowledge, logical thinking & problem-solving through MCQs, Rapid Fire, Audio-Visual, Logical, Technical & GK rounds. 15 questions · 20 mins · Hosted on Unstop.",
    color: "bg-[#ff3c6e] text-white",
    featured: true,
    badge: "28 Days Left",
    link: "https://unstop.com/quiz/htl-knowledge-quest-kanpur-institute-of-technology-kit-kanpur-1635749",
    cta: "Register on Unstop →",
  },
  {
    tag: "Coming Soon",
    title: "HTL Hackathon 2.0",
    meta: "📅 TBA 2026  ·  💻 Online + In-person",
    desc: "The second edition of our flagship hackathon. 48 hours, real problems, real solutions. Stay tuned for dates and registration.",
    color: "bg-[#ffe135]",
    featured: false,
    badge: null,
    link: "#join",
    cta: "Get Notified →",
  },
  {
    tag: "Coming Soon",
    title: "Open Source Night",
    meta: "📅 TBA 2026  ·  💻 Online",
    desc: "Learn how to contribute to open source, find good first issues, and build your public portfolio.",
    color: "bg-[#3cffb8]",
    featured: false,
    badge: null,
    link: "#join",
    cta: "Get Notified →",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-black border-b-2 border-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-bold text-xs tracking-widest uppercase text-[#ff3c6e] mb-3 text-center">What&apos;s Happening</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl text-center text-white mb-14">
          Upcoming <span className="text-[#ffe135]">Events</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className={`${e.color} rounded-3xl border-2 border-white/20 p-7 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-200`}>
              <div className="flex items-center justify-between gap-2">
                <span className="bg-black/10 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit">{e.tag}</span>
                {e.badge && (
                  <span className="bg-white text-black text-xs font-extrabold px-3 py-1 rounded-full animate-pulse">{e.badge}</span>
                )}
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-extrabold text-2xl">{e.title}</h3>
              <p className="text-xs font-semibold opacity-60">{e.meta}</p>
              <p className="text-sm leading-relaxed opacity-80 flex-1">{e.desc}</p>
              <a href={e.link} target={e.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="bg-black text-white font-bold text-sm px-5 py-3 rounded-full text-center hover:opacity-80 transition-opacity">
                {e.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
