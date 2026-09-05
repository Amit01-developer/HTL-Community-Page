const sponsors = [
  { name: "Unstop", role: "Powered By", img: "https://hacktolearn.netlify.app/image%20copy%202.png", link: "https://unstop.com" },
  { name: "AceInt", role: "AI Partner", img: "https://hacktolearn.netlify.app/Blue%20bg%20name.png", link: "#" },
  { name: "AITD Events", role: "Community Partner", img: "https://hacktolearn.netlify.app/AITD.jpg", link: "#" },
  { name: "TrueScholar", role: "Credential Partner", img: "https://hacktolearn.netlify.app/Screenshot%202025-11-24%20230914.png", link: "#" },
];

export default function Sponsors() {
  return (
    <section className="bg-[#ffe135] border-b-2 border-black py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-bold text-xs tracking-widest uppercase text-black/40 mb-3 text-center">Backed By</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl text-center mb-12">
          Our Partners & Sponsors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {sponsors.map((s) => (
            <a key={s.name} href={s.link} target="_blank" rel="noopener noreferrer"
              className="bg-white rounded-2xl border-2 border-black p-5 flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-200">
              <img src={s.img} alt={s.name} className="h-10 object-contain" />
              <div className="text-center">
                <p className="font-bold text-sm text-black">{s.name}</p>
                <p className="text-black/40 text-xs">{s.role}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="mailto:hacktolearn001@gmail.com"
            className="inline-block bg-black text-white font-bold px-6 py-3 rounded-full border-2 border-black hover:bg-[#ff3c6e] transition-colors text-sm">
            Become a Sponsor ✉️
          </a>
        </div>
      </div>
    </section>
  );
}
