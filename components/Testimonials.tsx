const testimonials = [
  { name: "Kris Kumar Mehhra", role: "1st Place Winner — HTL #1", team: "Team Ayaskirti", quote: "HTL gave us the perfect platform to build something real under pressure. The mentorship and community support was incredible.", emoji: "🥇" },
  { name: "Yogita Jha", role: "2nd Place Winner — HTL #1", team: "Team HY-Fi", quote: "Never thought I'd build a full project in 24 hours. HTL pushed us beyond our limits and we loved every second of it.", emoji: "🥈" },
  { name: "Parvathy Padmakumar", role: "Best Girls Team — HTL #1", team: "Team ZeroByte", quote: "The inclusive environment at HTL made us feel welcome from day one. This community is something special.", emoji: "👩‍💻" },
  { name: "Manas AjayKumar Choski", role: "3rd Place Winner — HTL #1", team: "Team The Hybrid", quote: "HTL is not just a hackathon — it's a movement. The energy, the people, the problems we solved — unforgettable.", emoji: "🥉" },
  { name: "Srivathsan M P", role: "Best Presentation — HTL #1", team: "Code Sixers", quote: "The judges were genuinely engaged and the feedback we got was worth more than any prize. Real learning happens here.", emoji: "🎤" },
  { name: "Riya Jahagirdar", role: "Top Team — HTL #1", team: "Probably Coding", quote: "From zero experience to top team — HTL made it possible. The beginner-friendly tracks are a game changer.", emoji: "🚀" },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f5f0e8] border-b-2 border-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-bold text-xs tracking-widest uppercase text-[#ff3c6e] mb-3 text-center">Community Love</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl text-center mb-14">
          What Hackers <span className="highlight">Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className={`rounded-2xl border-2 border-black p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200 ${i % 3 === 0 ? "bg-black text-white" : i % 3 === 1 ? "bg-[#ffe135]" : "bg-white"}`}>
              <span className="text-3xl">{t.emoji}</span>
              <p className={`text-sm leading-relaxed flex-1 ${i % 3 === 0 ? "text-white/70" : "text-black/70"}`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className={`font-[family-name:var(--font-display)] font-bold text-sm ${i % 3 === 0 ? "text-white" : "text-black"}`}>{t.name}</p>
                <p className={`text-xs ${i % 3 === 0 ? "text-white/40" : "text-black/40"}`}>{t.role}</p>
                <p className={`text-xs font-semibold mt-0.5 ${i % 3 === 0 ? "text-[#ffe135]" : "text-[#ff3c6e]"}`}>{t.team}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
