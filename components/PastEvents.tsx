const pastEvents = [
  {
    id: "htl-v1",
    edition: "HTL #1",
    title: "HACKtoLEARN Hackathon",
    date: "15 December 2025",
    type: "Online Hackathon",
    tagline: "24-hour online hackathon — code, build, pitch.",
    color: "bg-[#ffe135]",
    stats: [
      { label: "Participants", value: "100+" },
      { label: "Teams", value: "25+" },
      { label: "Tracks", value: "4" },
      { label: "Duration", value: "24 hrs" },
    ],
    winners: [
      { place: "🥇", label: "1st Place", team: "Ayaskirti", leader: "Kris Kumar Mehhra" },
      { place: "🥈", label: "2nd Place", team: "HY-Fi", leader: "Yogita Jha" },
      { place: "🥉", label: "3rd Place", team: "The Hybrid", leader: "Manas AjayKumar Choski" },
      { place: "👩‍💻", label: "Best Girls Team", team: "ZeroByte", leader: "Parvathy Padmakumar" },
    ],
    topTeams: ["Code Sixers", "SX2", "SheMalware", "Probably Coding", "Hack_teck"],
    tracks: ["Web Dev", "AI/ML", "Mobile", "Open Innovation"],
    timeline: [
      { date: "24 Oct 2025", event: "First Event Launched" },
      { date: "5 Nov 2025", event: "Registrations Open" },
      { date: "30 Nov 2025", event: "Registrations Close" },
      { date: "1–6 Dec 2025", event: "Round 1 — Idea Submission" },
      { date: "15–16 Dec 2025", event: "Online Hackathon Phase" },
      { date: "27 Dec 2025", event: "Results Announced" },
    ],
    link: "https://hacktolearn.netlify.app",
  },
];

export default function PastEvents() {
  return (
    <section id="past-events" className="bg-[#0a0a12] border-b-2 border-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-bold text-xs tracking-widest uppercase text-[#ff3c6e] mb-3 text-center">What We&apos;ve Done</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl text-center text-white mb-4">
          Past <span className="text-[#ffe135]">Events</span>
        </h2>
        <p className="text-center text-white/40 mb-16 max-w-lg mx-auto">
          Every event we&apos;ve run, the winners, the teams, and the memories.
        </p>

        {pastEvents.map((ev) => (
          <div key={ev.id} className="rounded-3xl border-2 border-white/10 overflow-hidden mb-10">

            {/* Header */}
            <div className={`${ev.color} border-b-2 border-black p-8 flex flex-col md:flex-row md:items-center justify-between gap-4`}>
              <div>
                <span className="bg-black text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">{ev.edition}</span>
                <h3 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl mt-3">{ev.title}</h3>
                <p className="font-semibold text-black/60 mt-1">📅 {ev.date} &nbsp;·&nbsp; 💻 {ev.type}</p>
                <p className="text-black/70 mt-2 text-sm">{ev.tagline}</p>
              </div>
              <a href={ev.link} target="_blank" rel="noopener noreferrer"
                className="bg-black text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#ff3c6e] transition-colors flex-shrink-0 text-center">
                View Event Site ↗
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-white/10">
              {ev.stats.map((s) => (
                <div key={s.label} className="p-6 text-center border-r border-white/10 last:border-r-0">
                  <p className="font-[family-name:var(--font-display)] font-extrabold text-3xl text-[#ffe135]">{s.value}</p>
                  <p className="text-white/40 text-xs mt-1 font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

              {/* Winners */}
              <div className="p-8">
                <p className="font-[family-name:var(--font-display)] font-extrabold text-white text-lg mb-5">🏆 Winners</p>
                <div className="flex flex-col gap-3">
                  {ev.winners.map((w) => (
                    <div key={w.team} className="flex items-center gap-4 bg-white/5 rounded-xl px-4 py-3">
                      <span className="text-2xl">{w.place}</span>
                      <div>
                        <p className="font-bold text-white text-sm">{w.team}</p>
                        <p className="text-white/40 text-xs">Leader: {w.leader}</p>
                      </div>
                      <span className="ml-auto text-xs text-white/30 font-semibold">{w.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="p-8">
                <p className="font-[family-name:var(--font-display)] font-extrabold text-white text-lg mb-5">📅 Timeline</p>
                <div className="flex flex-col gap-3 relative">
                  <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/10" />
                  {ev.timeline.map((t) => (
                    <div key={t.date} className="flex gap-4 items-start pl-6 relative">
                      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#ffe135] border-2 border-black flex-shrink-0" />
                      <div>
                        <p className="text-[#ffe135] text-xs font-bold">{t.date}</p>
                        <p className="text-white/60 text-sm">{t.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top teams + tracks */}
            <div className="border-t-2 border-white/10 p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Top Teams</p>
                <div className="flex flex-wrap gap-2">
                  {ev.topTeams.map((t) => (
                    <span key={t} className="bg-white/5 border border-white/10 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Tracks</p>
                <div className="flex flex-wrap gap-2">
                  {ev.tracks.map((t) => (
                    <span key={t} className="bg-[#ffe135]/10 border border-[#ffe135]/20 text-[#ffe135] text-xs font-semibold px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
