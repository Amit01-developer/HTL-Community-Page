const items = [
  { icon: "⚡", label: "Hackathons", color: "bg-[#ffe135]" },
  { icon: "🎤", label: "Tech Talks", color: "bg-[#ff3c6e] text-white" },
  { icon: "🤝", label: "Networking", color: "bg-[#3cffb8]" },
  { icon: "🛠️", label: "Workshops", color: "bg-black text-white" },
  { icon: "🎮", label: "Fun & Games", color: "bg-[#c084fc]" },
  { icon: "🏆", label: "Prizes", color: "bg-[#ffe135]" },
  { icon: "📚", label: "Resources", color: "bg-[#ff3c6e] text-white" },
  { icon: "🌐", label: "Open Source", color: "bg-[#3cffb8]" },
];

export default function Expect() {
  return (
    <section id="expect" className="bg-[#f5f0e8] border-b-2 border-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-bold text-xs tracking-widest uppercase text-[#ff3c6e] mb-3 text-center">The Experience</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl text-center mb-4">
          What to Expect
        </h2>
        <p className="text-center text-black/50 mb-14 max-w-lg mx-auto">
          An event run by the community, for the community. Our motivation is to lead with kindness, learning, and FUN.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.label} className={`${item.color} rounded-2xl border-2 border-black p-6 flex flex-col items-center gap-3 hover:-translate-y-2 transition-transform duration-200 cursor-default`}>
              <span className="text-5xl">{item.icon}</span>
              <p className="font-[family-name:var(--font-display)] font-extrabold text-sm text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
