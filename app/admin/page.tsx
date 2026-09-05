"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const INVITE_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_BROADCAST_TEMPLATE_ID!;

interface Member {
  uid: string;
  name: string;
  email: string;
  photo?: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [loadingMembers, setLoadingMembers] = useState(false);
  const [sending, setSending] = useState<string | null>(null);
  const [sentMap, setSentMap] = useState<Record<string, boolean>>({});
  const [selectedUids, setSelectedUids] = useState<Set<string>>(new Set());
  const [sendingAll, setSendingAll] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "htl@admin2026";

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) setAuthed(true);
    else alert("Wrong password");
  };

  useEffect(() => {
    if (!authed) return;
    setLoadingMembers(true);
    getDocs(collection(db, "members"))
      .then((snap) => {
        const list: Member[] = [];
        snap.forEach((d) => list.push(d.data() as Member));
        setMembers(list);
      })
      .finally(() => setLoadingMembers(false));
  }, [authed]);

  const toggleSelect = (uid: string) => {
    setSelectedUids((prev) => {
      const next = new Set(prev);
      next.has(uid) ? next.delete(uid) : next.add(uid);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedUids.size === members.length) setSelectedUids(new Set());
    else setSelectedUids(new Set(members.map((m) => m.uid)));
  };

  const sendInvite = async (member: Member) => {
    if (!subject || !message) { alert("Subject aur message bharo pehle."); return; }
    setSending(member.uid);
    try {
      await emailjs.send(SERVICE_ID, INVITE_TEMPLATE, {
        to_name: member.name, to_email: member.email, subject, message,
      }, PUBLIC_KEY);
      setSentMap((prev) => ({ ...prev, [member.uid]: true }));
    } catch {
      alert(`Failed to send to ${member.email}`);
    } finally {
      setSending(null);
    }
  };

  const sendToSelected = async () => {
    if (!subject || !message) { alert("Subject aur message bharo pehle."); return; }
    if (selectedUids.size === 0) { alert("Koi member select nahi kiya."); return; }
    setSendingAll(true);
    for (const m of members.filter((m) => selectedUids.has(m.uid))) {
      try {
        await emailjs.send(SERVICE_ID, INVITE_TEMPLATE, {
          to_name: m.name, to_email: m.email, subject, message,
        }, PUBLIC_KEY);
        setSentMap((prev) => ({ ...prev, [m.uid]: true }));
      } catch { /* skip */ }
      await new Promise((r) => setTimeout(r, 300));
    }
    setSendingAll(false);
    setSelectedUids(new Set());
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#08080f] flex items-center justify-center px-6">
        <form onSubmit={handleAuth} className="bg-[#0f0f1a] border border-white/10 rounded-2xl p-10 w-full max-w-sm flex flex-col gap-4">
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-white text-center">HTL Admin</h1>
          <p className="text-white/40 text-sm text-center">Enter admin password to continue</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-[#ffe135] text-sm"
          />
          <button type="submit" className="bg-[#ffe135] text-black font-extrabold py-3 rounded-xl hover:opacity-85 transition-opacity">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08080f] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-display)] font-extrabold text-3xl text-white mb-2">📨 Send Invitation</h1>
        <p className="text-white/40 text-sm mb-8">Compose your message, then send to any member.</p>

        {/* Compose */}
        <div className="bg-[#0f0f1a] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 mb-10">
          <div>
            <label className="text-white/50 text-xs font-bold uppercase tracking-widest block mb-2">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. You're invited to HTL Hackathon 2.0 🚀"
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-[#ffe135] text-sm"
            />
          </div>
          <div>
            <label className="text-white/50 text-xs font-bold uppercase tracking-widest block mb-2">Message</label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your invitation message here..."
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-[#ffe135] text-sm resize-none"
            />
          </div>
        </div>

        {/* Members List */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white/60 text-xs font-bold uppercase tracking-widest">
            Members ({members.length})
          </h2>
          {members.length > 0 && (
            <div className="flex items-center gap-3">
              <button onClick={toggleSelectAll} className="text-white/50 text-xs hover:text-white transition-colors underline">
                {selectedUids.size === members.length ? "Deselect All" : "Select All"}
              </button>
              {selectedUids.size > 0 && (
                <button
                  onClick={sendToSelected}
                  disabled={sendingAll}
                  className="bg-[#ffe135] text-black font-extrabold text-xs px-4 py-2 rounded-lg hover:opacity-85 transition-opacity disabled:opacity-50"
                >
                  {sendingAll ? "Sending..." : `Send to ${selectedUids.size} selected`}
                </button>
              )}
            </div>
          )}
        </div>

        {loadingMembers ? (
          <p className="text-white/30 text-sm">Loading members...</p>
        ) : members.length === 0 ? (
          <p className="text-white/30 text-sm">No members found.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {members.map((m) => (
              <div key={m.uid} className="bg-[#0f0f1a] border border-white/10 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedUids.has(m.uid)}
                    onChange={() => toggleSelect(m.uid)}
                    className="w-4 h-4 accent-[#ffe135] cursor-pointer"
                  />
                  {m.photo && <img src={m.photo} alt={m.name} className="w-9 h-9 rounded-full border border-white/10 object-cover" />}
                  <div>
                    <p className="text-white font-bold text-sm">{m.name}</p>
                    <p className="text-white/40 text-xs">{m.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => sendInvite(m)}
                  disabled={sending === m.uid || sentMap[m.uid]}
                  className="bg-[#ffe135] text-black font-extrabold text-xs px-4 py-2 rounded-lg hover:opacity-85 transition-opacity disabled:opacity-50 whitespace-nowrap"
                >
                  {sending === m.uid ? "Sending..." : sentMap[m.uid] ? "✅ Sent" : "Send Invite"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
