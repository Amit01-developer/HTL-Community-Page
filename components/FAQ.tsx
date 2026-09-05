"use client";
import { useState } from "react";

const faqs = [
  { q: "Is HTL free to join?", a: "Yes, joining the HTL community is completely free. Some events may have a small fee to cover costs, but we always try to keep things as affordable as possible." },
  { q: "Do I need to be an expert?", a: "Not at all. HTL welcomes everyone from complete beginners to seasoned developers. The only requirement is curiosity and a willingness to learn." },
  { q: "Are events online or in-person?", a: "We host both! Most workshops and talks are online so anyone can join. Hackathons often have both an online and in-person component." },
  { q: "How do I find a team for hackathons?", a: "We have a dedicated team-finding channel in our community. Just post your skills and what you're looking for — the community is super welcoming." },
  { q: "Will there be prizes?", a: "Yes! Hackathons come with prizes for top teams. But honestly, the connections and projects you build are the real prize." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#f5f0e8] border-b-2 border-black py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-bold text-xs tracking-widest uppercase text-[#ff3c6e] mb-3 text-center">Got Questions?</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl text-center mb-14">
          Frequently Asked <span className="highlight-yellow">Questions</span>
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-2xl border-2 border-black overflow-hidden transition-all ${open === i ? "bg-black text-white" : "bg-white"}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-[family-name:var(--font-display)] font-bold text-lg"
              >
                <span>{faq.q}</span>
                <span className={`text-2xl transition-transform duration-200 flex-shrink-0 ml-4 ${open === i ? "rotate-45 text-[#ff3c6e]" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
