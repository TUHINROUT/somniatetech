"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (/^\S+@\S+\.\S+$/.test(email)) setDone(true);
      }}
      className="mt-3 flex overflow-hidden rounded-md bg-white"
    >
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input id="nl-email" type="email" required value={email} onChange={(e) => { setEmail(e.target.value); setDone(false); }} placeholder="Enter your email address" className="min-w-0 flex-1 px-3 py-2.5 text-[12px] text-ink outline-none" />
      <button type="submit" aria-label="Subscribe" className="flex w-11 items-center justify-center bg-brand-accent text-white">
        {done ? <Check size={16} /> : <ArrowRight size={16} />}
      </button>
    </form>
  );
}
