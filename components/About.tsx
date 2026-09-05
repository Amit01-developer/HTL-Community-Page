const stats = [
  { value: "500+", label: "Members", bg: "bg-[#ffe135]" },
  { value: "30+", label: "Events Hosted", bg: "bg-[#ff3c6e] text-white" },
  { value: "100+", label: "Projects Built", bg: "bg-[#3cffb8]" },
  { value: "∞", label: "Things to Learn", bg: "bg-black text-white" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f5f0e8] border-b-2 border-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="font-bold text-xs tracking-widest uppercase text-[#ff3c6e] mb-4">What is HTL?</p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl leading-tight mb-6">
              The No.1 Community for{" "}
              <span className="wavy">Developers & Builders</span>
            </h2>
            <p className="text-black/60 leading-relaxed mb-4 text-base">
              It&apos;s like a conference, but way more fun. HACKtoLEARN is a community where developers, designers, and builders come together to learn by doing — through hackathons, workshops, and real projects.
            </p>
            <p className="text-black/60 leading-relaxed text-base">
              No boring lectures. No gatekeeping. Just passionate people who love to code and want to get better together.
            </p>
          </div>

          {/* Big quote card */}
          <div className="bg-black text-white rounded-3xl border-2 border-black p-8 rotate-1 hover:rotate-0 transition-transform duration-300">
            <p className="font-[family-name:var(--font-display)] font-extrabold text-2xl leading-snug mb-4">
              &ldquo;The best way to learn is to build something real with people who care.&rdquo;
            </p>
            <p className="text-white/50 text-sm">— HTL Community</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className={`${s.bg} rounded-2xl border-2 border-black p-6 text-center hover:-translate-y-1 transition-transform duration-200`}>
              <h3 className="font-[family-name:var(--font-display)] font-extrabold text-5xl mb-1">{s.value}</h3>
              <p className="font-semibold text-sm opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
