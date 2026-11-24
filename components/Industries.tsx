"use client";

import Icon from "./Icon";
import { industries } from "@/lib/data";

export default function IndustriesBlock() {
  const loopItems = [...industries, ...industries];

  return (
    <section
      id="industries"
      className="relative overflow-hidden border-y border-slate-200/60 bg-gradient-to-b from-[#f6faf7] via-[#f9fcf9] to-[#f2f8f4] py-9 lg:py-11"
    >
      {/* Subtle Ambient Brand Tint */}
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 h-56 w-[620px] rounded-full opacity-75 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(21,108,44,0.08) 0%, rgba(21,108,44,0.015) 60%, transparent 80%)",
        }}
      />

      <style jsx>{`
        @keyframes somniateSlowScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .somniate-marquee-track {
          display: flex;
          width: max-content;
          animation: somniateSlowScroll 28s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .somniate-marquee-track {
            animation: none;
          }
          .somniate-marquee-viewport {
            overflow-x: auto;
          }
        }

        .somniate-marquee-viewport:hover .somniate-marquee-track,
        .somniate-marquee-viewport:focus-within .somniate-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-5 lg:grid-cols-[0.58fr_1.42fr] lg:gap-7">
          {/* Left Column: Heading */}
          <div>
            <div className="mb-2 inline-flex items-center gap-2">
              <span className="h-[2.5px] w-5 rounded-full bg-[#156c2c]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#156c2c]">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-[22px] font-extrabold leading-[1.18] tracking-tight text-[#0f172a] sm:text-[26px] lg:text-[28px]">
              Delivering Impact Across{" "}
              <span className="text-[#156c2c]">Key Sectors</span>
            </h2>
          </div>

          {/* Right Column: Slow-Motion Marquee Strip (Pauses on Hover) */}
          <div className="somniate-marquee-viewport relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 py-3.5 shadow-[0_10px_28px_-12px_rgba(15,23,42,0.1)] backdrop-blur-sm">
            {/* Soft Left & Right Edge Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent" />

            <div className="somniate-marquee-track">
              {loopItems.map((s, i) => (
                <div
                  key={`${s.label}-${i}`}
                  className="group flex w-[132px] shrink-0 flex-col items-center justify-center gap-2 border-r border-slate-200/75 px-3 py-1 text-center transition-colors duration-300 hover:bg-[#156c2c]/[0.03] sm:w-[146px]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#156c2c]/[0.07] text-[#156c2c] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:bg-[#156c2c] group-hover:text-white">
                    <Icon name={s.icon} size={22} strokeWidth={1.7} />
                  </div>
                  <span className="line-clamp-2 text-[11.5px] font-bold leading-[1.25] text-[#0f172a] transition-colors duration-300 group-hover:text-[#156c2c]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
