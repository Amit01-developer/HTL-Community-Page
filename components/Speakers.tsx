export default function Speakers() {
  return (
    <section id="speakers" className="bg-[#ffe135] border-b-2 border-black py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-bold text-xs tracking-widest uppercase text-black/40 mb-3">Coming Soon</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl mb-6">
          Speaker <span className="highlight">Lineup</span>
        </h2>
        <p className="text-black/60 text-lg max-w-xl mx-auto mb-12">
          We&apos;re lining up some absolute legends for the next event. Announcements dropping soon — stay tuned!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-black/5 border-2 border-dashed border-black/20 rounded-2xl p-8 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center text-2xl">🎤</div>
              <p className="font-[family-name:var(--font-display)] font-bold text-sm text-black/30">TBA</p>
              <p className="text-xs text-black/20">Speaker</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-black/40 text-sm">
          Want to speak at HTL? &nbsp;
          <a href="mailto:hacktolearn001@gmail.com" className="underline font-bold hover:text-black transition-colors">
            Reach out →
          </a>
        </p>
      </div>
    </section>
  );
}
