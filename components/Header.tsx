"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      {/* Top bar (desktop only) */}
      <div className="hidden bg-topbar text-[11px] text-white lg:block">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2"><MapPin size={13} className="text-brand-accent" />Bhubaneswar, Odisha, India</span>
            <a href="tel:+919876543210" className="flex items-center gap-2"><Phone size={13} className="text-brand-accent" />+91 98765 43210</a>
            <a href="mailto:info@somniatesolutions.com" className="flex items-center gap-2"><Mail size={13} className="text-brand-accent" />info@somniatesolutions.com</a>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us:</span>
            <a href="#" aria-label="LinkedIn"><Linkedin size={14} /></a>
            <a href="#" aria-label="X"><Twitter size={14} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={14} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={14} /></a>
            <span className="flex items-center gap-1 border-l border-white/20 pl-4"><Globe size={13} />EN <ChevronDown size={12} /></span>
          </div>
        </div>
      </div>

      {/* Main bar: desktop nav, or compact app bar on phones/tablets */}
      <div className={`pt-safe bg-white/95 backdrop-blur transition-shadow ${scrolled ? "shadow-card" : "shadow-soft"}`}>
        <div className="container-x flex h-14 items-center justify-between lg:h-[68px]">
          <Logo />
          <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Main">
            {nav.map((n, i) => (
              <a key={n.label} href={n.href} className={`flex items-center gap-1 whitespace-nowrap py-1 text-[13px] font-semibold ${i === 0 ? "border-b-2 border-brand text-brand" : "text-ink hover:text-brand"}`}>
                {n.label}
                {n.dropdown && <ChevronDown size={12} />}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-primary hidden lg:inline-flex">Request a Consultation <ArrowRight size={14} /></a>
          <div className="flex items-center gap-2 lg:hidden">
            <a href="mailto:info@somniatesolutions.com" aria-label="Email us" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-brand active:scale-90"><Mail size={17} /></a>
            <a href="tel:+919876543210" aria-label="Call us" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white active:scale-90"><Phone size={17} /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
