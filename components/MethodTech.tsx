import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import { method, tech } from "@/lib/data";

export default function MethodTech() {
  return (
    <section id="solutions" className="relative bg-white py-9 lg:py-12">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-[1.06fr_1fr] lg:gap-6">
          {/* Left Panel: Our Methodology (Deep Brand Emerald Showcase) */}
          <div
            className="relative overflow-hidden rounded-2xl border border-[#1d6e36]/40 p-5 text-white shadow-[0_20px_45px_-15px_rgba(12,59,27,0.38)] sm:p-6"
            style={{
              background:
                "linear-gradient(135deg, #0c3b1b 0%, #145829 52%, #092b14 100%)",
            }}
          >
            {/* Subtle Ambient Highlights */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-lime-300/10 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="h-[3px] w-5 rounded-full bg-[#8be34a]" />
                <span className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#b7f286]">
                  Our Methodology
                </span>
              </div>

              <h2 className="text-[20px] font-extrabold leading-[1.22] tracking-tight text-white sm:text-[23px]">
                A Structured, Result-Oriented Approach
              </h2>

              <ol className="scroll-row mt-6 !gap-0 lg:grid lg:grid-cols-5">
                {method.map((m, i) => (
                  <li
                    key={m.title}
                    className="group relative flex min-w-[126px] shrink-0 snap-start flex-col items-center px-2 text-center lg:min-w-0"
                  >
                    {/* Step Icon Circle */}
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.35)] ring-2 ring-[#8be34a]/85 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#8be34a] group-hover:text-[#092b14] group-hover:ring-white">
                      <Icon name={m.icon} size={21} strokeWidth={1.8} />
                    </span>

                    {/* Connector Arrow Between Steps on Desktop */}
                    {i < method.length - 1 && (
                      <ArrowRight
                        size={14}
                        className="pointer-events-none absolute -right-2 top-4 hidden text-white/55 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 lg:block"
                      />
                    )}

                    <span className="mt-3 text-[12.5px] font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#c7f79f]">
                      {m.title}
                    </span>
                    <span className="mt-1 line-clamp-2 text-[10.5px] leading-[1.35] text-white/75 transition-colors duration-300 group-hover:text-white/95">
                      {m.sub}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right Panel: Our Technology (Clean Mint-Slate Showcase) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#156c2c]/15 bg-gradient-to-br from-[#f3f9f5] via-[#f8fcf9] to-[#edf6f0] p-5 shadow-[0_14px_35px_-15px_rgba(15,23,42,0.12)] sm:p-6">
            {/* Subtle Corner Glow */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-[#156c2c]/[0.07] blur-2xl" />

            <div className="relative z-10">
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="h-[2.5px] w-5 rounded-full bg-[#156c2c]" />
                <span className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#156c2c]">
                  Our Technology
                </span>
              </div>

              <h2 className="text-[20px] font-extrabold leading-[1.22] tracking-tight text-[#0f172a] sm:text-[23px]">
                Powered by{" "}
                <span className="text-[#156c2c]">
                  Advanced Tools &amp; Platforms
                </span>
              </h2>
            </div>

            <ul className="scroll-row relative z-10 mt-6 !gap-0 lg:grid lg:grid-cols-5">
              {tech.map((t, i) => (
                <li
                  key={t.title}
                  className={`group flex min-w-[112px] shrink-0 snap-start flex-col items-center justify-start gap-2.5 px-2 text-center lg:min-w-0 ${
                    i ? "lg:border-l lg:border-[#156c2c]/15" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#156c2c]/15 bg-white text-[#156c2c] shadow-[0_6px_16px_-6px_rgba(21,108,44,0.16)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-[#156c2c] group-hover:bg-[#156c2c] group-hover:text-white group-hover:shadow-[0_12px_22px_-6px_rgba(21,108,44,0.35)]">
                    <Icon name={t.icon} size={22} strokeWidth={1.75} />
                  </div>

                  <span className="line-clamp-2 text-[11px] font-bold leading-[1.3] text-[#0f172a] transition-colors duration-300 group-hover:text-[#156c2c]">
                    {t.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
