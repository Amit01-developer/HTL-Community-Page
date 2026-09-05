const tracks = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Build innovative web apps that solve real-world problems. Focus on UX, performance, and modern web tech.",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "API Design"],
    color: "bg-[#ffe135]",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    desc: "Create intelligent solutions using ML, computer vision, or NLP. Push the boundaries of what AI can achieve.",
    skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis", "ML Algorithms"],
    color: "bg-[#ff3c6e] text-white",
  },
  {
    icon: "📱",
    title: "Mobile Development",
    desc: "Develop cutting-edge mobile apps for iOS or Android. Focus on performance, usability, and innovative features.",
    skills: ["Swift/Kotlin", "React Native", "Flutter", "UI/UX Design", "API Integration"],
    color: "bg-[#3cffb8]",
  },
  {
    icon: "💡",
    title: "Open Innovation",
    desc: "Think outside the box. This track is for groundbreaking ideas that don't fit traditional categories.",
    skills: ["Creative Thinking", "Problem Solving", "Prototyping", "Any Technology"],
    color: "bg-black text-white",
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="bg-[#0a0a12] border-b-2 border-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-bold text-xs tracking-widest uppercase text-[#ff3c6e] mb-3 text-center">What We Build</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl text-center text-white mb-4">
          Hacking <span className="text-[#ffe135]">Tracks</span>
        </h2>
        <p className="text-center text-white/40 mb-14 max-w-lg mx-auto">
          Choose your path to innovation. Each track offers unique challenges and learning opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {tracks.map((t) => (
            <div key={t.title} className={`${t.color} rounded-3xl border-2 border-white/10 p-8 hover:-translate-y-1 transition-transform duration-200`}>
              <span className="text-5xl mb-4 block">{t.icon}</span>
              <h3 className="font-[family-name:var(--font-display)] font-extrabold text-2xl mb-3">{t.title}</h3>
              <p className="text-sm leading-relaxed opacity-70 mb-5">{t.desc}</p>
              <div className="flex flex-wrap gap-2">
                {t.skills.map((s) => (
                  <span key={s} className="bg-black/10 text-xs font-bold px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
