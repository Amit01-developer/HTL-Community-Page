"use client";
import { useState } from "react";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { sendWelcomeEmail } from "@/lib/email";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      // Check if already subscribed
      const q = query(collection(db, "newsletter"), where("email", "==", email));
      const existing = await getDocs(q);
      if (!existing.empty) {
        setSubmitted(true);
        return;
      }
      await addDoc(collection(db, "newsletter"), {
        email,
        subscribedAt: serverTimestamp(),
        source: "newsletter_section",
      });
      // Send welcome email
      await sendWelcomeEmail("Hacker", email);
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#ff3c6e] border-b-2 border-black py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-bold text-xs tracking-widest uppercase text-white/60 mb-3">Never Miss an Event</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-white mb-4">
          Stay in the Loop 📬
        </h2>
        <p className="text-white/70 mb-10 text-base leading-relaxed">
          Get notified about upcoming hackathons, workshops, and community events. No spam, just the good stuff.
        </p>

        {submitted ? (
          <div className="bg-white rounded-2xl border-2 border-black p-8">
            <p className="text-4xl mb-3">🎉</p>
            <p className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-black">You&apos;re in!</p>
            <p className="text-black/50 text-sm mt-2">We&apos;ll hit you up when something exciting drops.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-white text-black font-semibold px-5 py-4 rounded-full border-2 border-black outline-none focus:ring-2 focus:ring-black text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white font-extrabold px-7 py-4 rounded-full border-2 border-black hover:bg-[#ffe135] hover:text-black transition-colors text-sm flex-shrink-0 disabled:opacity-60"
            >
              {loading ? "Saving..." : "Notify Me 🚀"}
            </button>
          </form>
        )}

        {error && <p className="text-white/80 text-sm mt-3">{error}</p>}
        <p className="text-white/40 text-xs mt-5">Join 500+ community members · Unsubscribe anytime</p>
      </div>
    </section>
  );
}
