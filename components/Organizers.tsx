export default function Organizers() {
  return (
    <section id="team" className="bg-[#f5f0e8] border-b-2 border-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-bold text-xs tracking-widest uppercase text-[#ff3c6e] mb-3 text-center">The Person Behind HTL</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl text-center mb-14">
          Self-Run. <span className="highlight">Community-Led.</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-black text-white rounded-3xl border-2 border-black p-10 max-w-2xl mx-auto">
          <img
            src="https://hacktolearn.netlify.app/passport-min.jpg"
            alt="Amit Chaurasiya"
            className="w-32 h-32 rounded-2xl border-4 border-[#ffe135] object-cover flex-shrink-0"
          />
          <div>
            <span className="bg-[#ffe135] text-black text-xs font-extrabold tracking-widest uppercase px-3 py-1 rounded-full">Founder & Organizer</span>
            <h3 className="font-[family-name:var(--font-display)] font-extrabold text-3xl mt-3 mb-1">Amit Chaurasiya</h3>
            <p className="text-white/40 text-sm mb-1">Student · Web Developer · Kanpur, UP, India</p>
            <p className="text-white/25 text-xs mb-4">500+ connections · Dr. A.P.J. Abdul Kalam Technical University</p>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              CA-Unstop · 7x Hackathon National Finalist · E-Summit&apos;26 IIT Roorkee Finalist · Ex Intern @Vaishnav Technologies · 4x Delegate (IITK) · 1st Runner-Up 🥈 HackerRank. Built HACKtoLEARN from scratch as a 100% volunteer-run community.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://linktr.ee/I_amit1" target="_blank" rel="noopener noreferrer"
                className="bg-[#ffe135] text-black font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-85 transition-opacity">
                Connect 🔗
              </a>
              <a href="https://www.linkedin.com/company/hacktolearn/" target="_blank" rel="noopener noreferrer"
                className="bg-[#0077b5] text-white font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-85 transition-opacity flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                HTL on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
