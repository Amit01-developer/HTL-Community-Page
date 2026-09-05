const items1 = ["HACK", "·", "LEARN", "·", "BUILD", "·", "GROW", "·", "CONNECT", "·", "CREATE", "·",
                "HACK", "·", "LEARN", "·", "BUILD", "·", "GROW", "·", "CONNECT", "·", "CREATE", "·"];

const items2 = ["COMMUNITY", "·", "OPEN SOURCE", "·", "HACKATHON", "·", "WORKSHOPS", "·", "MENTORSHIP", "·",
                "COMMUNITY", "·", "OPEN SOURCE", "·", "HACKATHON", "·", "WORKSHOPS", "·", "MENTORSHIP", "·"];

export default function Marquee() {
  return (
    <div className="border-b-2 border-black">
      {/* Row 1 — black bg */}
      <div className="overflow-hidden bg-black py-3 border-b-2 border-black">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {items1.map((item, i) => (
            <span key={i} className="font-[family-name:var(--font-display)] font-extrabold text-[#ffe135] text-sm tracking-widest">{item}</span>
          ))}
        </div>
      </div>
      {/* Row 2 — pink bg */}
      <div className="overflow-hidden bg-[#ff3c6e] py-3">
        <div className="flex gap-8 whitespace-nowrap animate-marquee-reverse">
          {items2.map((item, i) => (
            <span key={i} className="font-[family-name:var(--font-display)] font-extrabold text-white text-sm tracking-widest">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
