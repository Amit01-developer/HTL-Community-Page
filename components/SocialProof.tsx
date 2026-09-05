const badges = [
  { text: "Hosted on Unstop", icon: "🏆" },
  { text: "500+ Community Members", icon: "👥" },
  { text: "7x National Finalist Founder", icon: "🎯" },
  { text: "CA-Unstop Certified", icon: "✅" },
  { text: "AKTU University Community", icon: "🎓" },
  { text: "100% Volunteer Run", icon: "❤️" },
  { text: "Hosted on Unstop", icon: "🏆" },
  { text: "500+ Community Members", icon: "👥" },
  { text: "7x National Finalist Founder", icon: "🎯" },
  { text: "CA-Unstop Certified", icon: "✅" },
  { text: "AKTU University Community", icon: "🎓" },
  { text: "100% Volunteer Run", icon: "❤️" },
];

export default function SocialProof() {
  return (
    <div className="overflow-hidden bg-black border-b-2 border-black py-3">
      <div className="flex gap-10 whitespace-nowrap animate-marquee">
        {badges.map((b, i) => (
          <span key={i} className="flex items-center gap-2 text-white/50 text-xs font-semibold tracking-wide flex-shrink-0">
            <span>{b.icon}</span>
            <span>{b.text}</span>
            <span className="text-white/20 ml-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
