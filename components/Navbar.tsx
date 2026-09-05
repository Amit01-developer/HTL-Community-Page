"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${scrolled ? "bg-[#f5f0e8]/95 backdrop-blur-sm border-b-2 border-black" : ""}`}>
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="HTL" width={38} height={38} className="rounded-xl border-2 border-black" />
        <span className="font-[family-name:var(--font-display)] font-extrabold text-base tracking-tight hidden sm:block">HACKtoLEARN</span>
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {["#about", "#events", "#team", "#faq"].map((href, i) => (
          <a key={href} href={href} className="font-semibold text-sm hover:text-[#ff3c6e] transition-colors">
            {["About", "Events", "Team", "FAQ"][i]}
          </a>
        ))}
        <a href="#join" className="bg-black text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#ff3c6e] transition-colors">
          Join Community 🚀
        </a>
      </div>

      <button className="md:hidden font-bold text-xl" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#f5f0e8] border-b-2 border-black flex flex-col gap-4 p-6 md:hidden">
          {["About", "Events", "Team", "FAQ"].map((l, i) => (
            <a key={l} href={["#about","#events","#team","#faq"][i]} onClick={() => setOpen(false)} className="font-bold text-lg">{l}</a>
          ))}
          <a href="#join" onClick={() => setOpen(false)} className="bg-black text-white font-bold px-5 py-3 rounded-full text-center">Join Community 🚀</a>
        </div>
      )}
    </nav>
  );
}
