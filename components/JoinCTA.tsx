"use client";
import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase";
import { useAuth } from "@/lib/AuthContext";
import { sendWelcomeEmail } from "@/lib/email";

export default function JoinCTA() {
  const { user, loading } = useAuth();
  const [joining, setJoining] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleJoin = async () => {
    setJoining(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const u = result.user;
      // Save to Firestore members collection
      await setDoc(doc(db, "members", u.uid), {
        uid: u.uid,
        name: u.displayName,
        email: u.email,
        photo: u.photoURL,
        joinedAt: serverTimestamp(),
        source: "join_cta",
      }, { merge: true });
      // Send welcome email
      if (u.email) {
        await sendWelcomeEmail(u.displayName || "Hacker", u.email);
      }
      setJoined(true);
    } catch (err: unknown) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setJoining(false);
    }
  };

  const handleSignOut = () => signOut(auth);

  return (
    <section id="join" className="bg-[#ff3c6e] border-b-2 border-black py-28 px-6 relative overflow-hidden">
      <div className="absolute top-8 left-8 text-6xl opacity-10 font-extrabold rotate-12 select-none">HTL</div>
      <div className="absolute bottom-8 right-8 text-6xl opacity-10 font-extrabold -rotate-12 select-none">HTL</div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl text-white leading-tight mb-6">
          Get Your Spot in the Community of the Year
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Join with Google in one click. Your profile gets saved to our community database — no forms, no hassle.
        </p>

        {loading ? null : user ? (
          <div className="bg-white rounded-2xl border-2 border-black p-8 max-w-sm mx-auto">
            <img src={user.photoURL || ""} alt={user.displayName || ""} className="w-16 h-16 rounded-full border-2 border-black mx-auto mb-3 object-cover" />
            <p className="font-[family-name:var(--font-display)] font-extrabold text-xl text-black">{user.displayName}</p>
            <p className="text-black/40 text-sm mb-1">{user.email}</p>
            <p className="text-[#ff3c6e] font-bold text-sm mb-5">✅ You&apos;re in the HTL Community!</p>
            <button onClick={handleSignOut} className="text-black/30 text-xs hover:text-black transition-colors underline">
              Sign out
            </button>
          </div>
        ) : joined ? (
          <div className="bg-white rounded-2xl border-2 border-black p-8">
            <p className="text-4xl mb-3">🎉</p>
            <p className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-black">Welcome to HTL!</p>
            <p className="text-black/50 text-sm mt-2">You&apos;re now part of the community. See you at the next event!</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleGoogleJoin}
              disabled={joining}
              className="bg-white text-black font-extrabold text-base px-8 py-4 rounded-full border-2 border-black hover:bg-[#ffe135] transition-colors flex items-center gap-3 disabled:opacity-60"
            >
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              {joining ? "Joining..." : "Join with Google 🚀"}
            </button>
            {error && <p className="text-white/80 text-sm">{error}</p>}
            <p className="text-white/50 text-xs">Free forever · No spam · Just community</p>
          </div>
        )}
      </div>
    </section>
  );
}
