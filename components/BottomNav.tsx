"use client";

import { useEffect, useState } from "react";
import { Briefcase, FolderOpen, Grid2x2, Home, Info, Layers, Mail, Newspaper, Phone, Wrench, X } from "lucide-react";

const tabs = [
  { id: "home", label: "Home", Icon: Home },
  { id: "services", label: "Services", Icon: Wrench },
  { id: "projects", label: "Projects", Icon: FolderOpen },
  { id: "insights", label: "Insights", Icon: Newspaper },
];

const more = [
  { id: "about", label: "About Us", Icon: Info },
  { id: "industries", label: "Industries", Icon: Layers },
  { id: "solutions", label: "Solutions", Icon: Grid2x2 },
  { id: "careers", label: "Careers", Icon: Briefcase },
  { id: "contact", label: "Contact", Icon: Mail },
];

/** Phone/tablet app-style bottom tab bar with a "More" sheet (replaces a hamburger menu). */
export default function BottomNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = [...tabs, ...more].map((t) => t.id);
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inMore = more.some((m) => m.id === active);

  return (
    <>
      <div className={`fixed inset-0 z-[45] transition-[visibility] lg:hidden ${open ? "visible" : "pointer-events-none invisible delay-300"}`} aria-hidden={!open}>
        <div className={`absolute inset-0 bg-black/45 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
        <div className={`absolute inset-x-0 bottom-0 rounded-t-3xl bg-white px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] pt-3 shadow-2xl transition-transform duration-300 ${open ? "translate-y-0" : "translate-y-full"}`}>
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-gray-300" />
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[15px] font-extrabold text-ink">Explore</h2>
            <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-full p-1.5 active:bg-brand-light"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {more.map(({ id, label, Icon }) => (
              <a key={id} href={`#${id}`} onClick={() => { setOpen(false); setActive(id); }} className="flex flex-col items-center gap-2 rounded-2xl bg-brand-light/70 px-2 py-4 text-[12px] font-bold text-ink active:scale-95">
                <Icon size={24} className="text-brand" />
                {label}
              </a>
            ))}
            <a href="tel:+919876543210" className="flex flex-col items-center gap-2 rounded-2xl bg-brand px-2 py-4 text-[12px] font-bold text-white active:scale-95">
              <Phone size={24} />
              Call Us
            </a>
          </div>
          <a href="mailto:info@somniatesolutions.com?subject=Consultation%20Request" className="btn-primary mt-4 w-full py-3">Request a Consultation</a>
        </div>
      </div>

      <nav aria-label="App navigation" className="pb-safe fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/95 backdrop-blur lg:hidden">
        <ul className="mx-auto flex max-w-lg items-stretch justify-around px-1 pt-1.5">
          {tabs.map(({ id, label, Icon }) => {
            const on = !open && active === id;
            return (
              <li key={id} className="flex-1">
                <a href={`#${id}`} onClick={() => { setActive(id); setOpen(false); }} className={`flex flex-col items-center gap-0.5 rounded-xl py-1.5 text-[10.5px] font-semibold transition active:scale-95 ${on ? "text-brand" : "text-ink-soft"}`}>
                  <span className={`flex h-7 w-12 items-center justify-center rounded-full transition ${on ? "bg-brand-light" : ""}`}>
                    <Icon size={20} strokeWidth={on ? 2.4 : 1.9} />
                  </span>
                  {label}
                </a>
              </li>
            );
          })}
          <li className="flex-1">
            <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className={`flex w-full flex-col items-center gap-0.5 rounded-xl py-1.5 text-[10.5px] font-semibold transition active:scale-95 ${open || inMore ? "text-brand" : "text-ink-soft"}`}>
              <span className={`flex h-7 w-12 items-center justify-center rounded-full transition ${open || inMore ? "bg-brand-light" : ""}`}>
                <Grid2x2 size={20} strokeWidth={open || inMore ? 2.4 : 1.9} />
              </span>
              More
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
