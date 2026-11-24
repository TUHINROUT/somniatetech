import { ChevronRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import { footerCols } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#051b21] pb-24 text-white lg:pb-0">
      <div className="container-x grid grid-cols-2 gap-x-4 gap-y-8 py-10 lg:grid-cols-[1.3fr_0.8fr_1.2fr_1.1fr_1.1fr_1.2fr]">
        <div className="col-span-2 sm:col-span-1">
          <Logo light />
          <p className="mt-3 max-w-[220px] text-[12px] leading-snug text-white/80">Technology-driven solutions for traffic, engineering, environment and infrastructure.</p>
          <div className="mt-4 flex gap-2.5 text-white">
            {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 active:bg-white/20"><I size={18} /></a>
            ))}
          </div>
        </div>
        {footerCols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-3 text-[13px] font-extrabold">{c.title}</h4>
            <ul className="space-y-0.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="flex items-center gap-1 py-1 text-[12px] text-white/80 hover:text-white"><ChevronRight size={10} />{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-2 sm:col-span-1">
          <h4 className="text-[13px] font-extrabold">Stay Updated</h4>
          <p className="mt-2 text-[11.5px] leading-snug text-white/80">Subscribe to receive our latest updates, insights and project highlights.</p>
          <Newsletter />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-4 text-[11px] text-white/80 sm:flex-row">
          <p>© 2025 Somniate Solutions. All Rights Reserved.</p>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {["Terms of Use", "Privacy Policy", "Cookies", "Sitemap"].map((l) => (
              <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
