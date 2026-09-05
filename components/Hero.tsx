import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#f5f0e8] border-b-2 border-black relative overflow-hidden flex flex-col">
      {/* Top bar */}
      <div className="bg-[#ff3c6e] border-b-2 border-black py-2 text-center text-white font-bold text-sm tracking-wide mt-16">
        🔥 Applications Open — Join the HTL Community Today!
      </div>

      {/* Main hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 relative">

        {/* Floating deco elements */}
        <div className="absolute top-10 left-8 text-5xl animate-float hidden md:block">⚡</div>
        <div className="absolute top-20 right-12 text-4xl animate-float hidden md:block" style={{animationDelay:"1s"}}>🛠️</div>
        <div className="absolute bottom-16 left-16 text-4xl animate-float hidden md:block" style={{animationDelay:"2s"}}>🚀</div>
        <div className="absolute bottom-10 right-10 text-5xl animate-float hidden md:block" style={{animationDelay:"0.5s"}}>💻</div>

        {/* Spinning badge */}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
              <text fontSize="11" fontWeight="bold" fill="#ff3c6e">
                <textPath href="#circle">HACK • LEARN • BUILD • GROW • </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/logo.png" alt="HTL" width={48} height={48} className="rounded-xl border-2 border-black" />
          </div>
        </div>

        <p className="font-semibold text-sm tracking-widest uppercase text-[#ff3c6e] mb-4">Community · Hackathons · Learning</p>

        <h1 className="font-[family-name:var(--font-display)] font-extrabold leading-[0.88] mb-6 text-[clamp(3.5rem,11vw,8.5rem)] text-black">
          <span className="block">Hack.</span>
          <span className="block"><span className="highlight">Learn.</span></span>
          <span className="block">Repeat.</span>
        </h1>

        <p className="text-black/60 text-lg max-w-xl mx-auto leading-relaxed mb-10">
          HTL is where curious minds come to build, break things, and grow together.
          No gatekeeping. Just good vibes and great code.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#join" className="bg-black text-white font-extrabold text-base px-8 py-4 rounded-full border-2 border-black hover:bg-[#ff3c6e] transition-colors">
            Join the Community 🚀
          </a>
          <a href="#about" className="bg-[#ffe135] text-black font-extrabold text-base px-8 py-4 rounded-full border-2 border-black hover:bg-[#ffd000] transition-colors">
            Learn More ↓
          </a>
        </div>
      </div>
    </section>
  );
}
