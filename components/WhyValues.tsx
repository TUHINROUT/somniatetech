import Icon from "./Icon";
import { values, why } from "@/lib/data";

export default function WhyValues() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/70 bg-gradient-to-b from-[#f6faf7] via-white to-[#f3f8f5] py-10 lg:py-12">
      {/* Subtle Ambient Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(21,108,44,0.07) 0%, rgba(21,108,44,0.015) 60%, transparent 80%)",
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:gap-6">
          {/* Left Panel: Why Choose Us? */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/85 bg-white p-5 shadow-[0_12px_32px_-14px_rgba(15,23,42,0.1)] sm:p-6">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-[2.5px] w-5 rounded-full bg-[#156c2c]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#156c2c]">
                Why Choose Us?
              </span>
            </div>

            <ul className="scroll-row !gap-0 lg:grid lg:grid-cols-5">
              {why.map((w, i) => (
                <li
                  key={w.label}
                  className={`group flex min-w-[108px] shrink-0 snap-start flex-col items-center justify-start gap-2.5 px-2 py-2 text-center lg:min-w-0 ${
                    i ? "lg:border-l lg:border-slate-200/80" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#156c2c]/[0.07] text-[#156c2c] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#156c2c] group-hover:text-white group-hover:shadow-[0_10px_20px_-5px_rgba(21,108,44,0.4)]">
                    <Icon name={w.icon} size={22} strokeWidth={1.75} />
                  </div>
                  <span className="line-clamp-2 text-[11.5px] font-bold leading-[1.3] text-[#0f172a] transition-colors duration-300 group-hover:text-[#156c2c]">
                    {w.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel: Our Values */}
          <div className="relative overflow-hidden rounded-2xl border border-[#156c2c]/15 bg-gradient-to-br from-[#edf7f0] via-[#f4fbf6] to-[#e6f3ea] p-5 shadow-[0_12px_32px_-14px_rgba(21,108,44,0.14)] sm:p-6">
            {/* Soft Corner Accent */}
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-[#156c2c]/[0.08] blur-2xl" />

            <div className="relative z-10 mb-4 inline-flex items-center gap-2">
              <span className="h-[2.5px] w-5 rounded-full bg-[#156c2c]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#156c2c]">
                Our Values
              </span>
            </div>

            <ul className="scroll-row relative z-10 !gap-0 lg:grid lg:grid-cols-5">
              {values.map((v, i) => (
                <li
                  key={v.label}
                  className={`group flex min-w-[104px] shrink-0 snap-start flex-col items-center justify-start gap-2.5 px-2 py-2 text-center lg:min-w-0 ${
                    i ? "lg:border-l lg:border-[#156c2c]/15" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#156c2c]/15 bg-white text-[#156c2c] shadow-[0_6px_14px_-6px_rgba(21,108,44,0.18)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-[#156c2c] group-hover:bg-[#156c2c] group-hover:text-white group-hover:shadow-[0_10px_20px_-5px_rgba(21,108,44,0.4)]">
                    <Icon name={v.icon} size={22} strokeWidth={1.75} />
                  </div>
                  <span className="line-clamp-2 text-[11.5px] font-bold leading-[1.3] text-[#0f172a] transition-colors duration-300 group-hover:text-[#156c2c]">
                    {v.label}
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
