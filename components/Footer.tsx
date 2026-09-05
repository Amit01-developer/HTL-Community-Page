import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="HTL Logo" width={36} height={36} className="rounded-xl border-2 border-white/20" />
              <span className="font-[family-name:var(--font-display)] font-extrabold text-lg">HACKtoLEARN</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              A 100% volunteer-run community for developers, designers, and builders who learn by doing.
            </p>
          </div>

          {/* Founder contact */}
          <div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">Founded by</p>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://hacktolearn.netlify.app/passport-min.jpg"
                alt="Amit Chaurasiya"
                className="w-12 h-12 rounded-xl border-2 border-white/20 object-cover"
              />
              <div>
                <p className="font-[family-name:var(--font-display)] font-bold text-base">Amit Chaurasiya</p>
                <p className="text-white/40 text-xs">Student · Web Developer · Founder, HACKtoLEARN</p>
                <p className="text-white/25 text-xs">Kanpur, Uttar Pradesh, India</p>
              </div>
            </div>
            <p className="text-white/30 text-xs leading-relaxed mb-3 max-w-xs">
              CA-Unstop · 1x Hackathon Organized · 7x Hackathon National Finalist · E-Summit&apos;26 IIT Roorkee Finalist · Ex Intern @Vaishnav Technologies · 4x Delegate (IITK) · 1st Runner-Up 🥈 HackerRank
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:mr.amit16chaurasiya@gmail.com" className="text-white/50 hover:text-[#ffe135] text-sm transition-colors flex items-center gap-2">
                <span>✉️</span> mr.amit16chaurasiya@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/iamitchaurasiya/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#0077b5] text-sm transition-colors flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                linkedin.com/in/iamitchaurasiya
              </a>
              <a href="https://linktr.ee/I_amit1" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#ffe135] text-sm transition-colors flex items-center gap-2">
                <span>🔗</span> linktr.ee/I_amit1
              </a>
            </div>
          </div>

          {/* Community links */}
          <div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">Community</p>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/company/hacktolearn/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition-colors">LinkedIn</a>
              <a href="https://chat.whatsapp.com/CLp4RQPwFz1AxztxrULVrk" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition-colors">WhatsApp Channel</a>
              <a href="https://hacktolearn.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition-colors">Official Site</a>
              <a href="mailto:hacktolearn001@gmail.com" className="text-white/50 hover:text-white text-sm transition-colors">Become a Sponsor</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© 2026 HACKtoLEARN. All rights reserved. Developed by Team-HTL.</p>
          <p className="text-white/20 text-xs">Made with ❤️ by the HTL Community</p>
        </div>

      </div>
    </footer>
  );
}
