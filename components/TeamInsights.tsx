import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import Photo from "./Photo";
import { insights } from "@/lib/data";

export default function TeamInsights() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden border-t border-slate-200/70 bg-gradient-to-b from-white via-[#f7fbf8] to-[#f1f8f3] py-10 lg:py-[52px]"
    >
      {/* Subtle Ambient Brand Glow */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-60 w-[680px] rounded-full opacity-75 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(21,108,44,0.075) 0%, rgba(21,108,44,0.015) 60%, transparent 80%)",
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.96fr_1.28fr] lg:gap-7">
          {/* Left Column: Our Expert Team */}
          <div className="group/team flex flex-col justify-between rounded-2xl border border-slate-200/85 bg-white p-4 shadow-[0_12px_32px_-14px_rgba(15,23,42,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#156c2c]/30 hover:shadow-[0_18px_38px_-14px_rgba(21,108,44,0.16)] sm:p-5">
            <div>
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="h-[2.5px] w-5 rounded-full bg-[#156c2c]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#156c2c]">
                  Our Expert Team
                </span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 shadow-[0_8px_20px_-8px_rgba(15,23,42,0.18)] sm:w-[50%]">
                  <Image
                    src="/images/somniatetech_team.png"
                    alt="Somniate Solutions team on site"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                    className="rounded-xl object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/team:scale-105"
                  />
                </div>

                <div className="sm:flex-1">
                  <p className="text-[12.5px] leading-[1.6] text-slate-600 sm:text-[13px]">
                    A multidisciplinary team of surveyors, GIS specialists,
                    engineers and data analysts committed to delivering accurate
                    and reliable solutions.
                  </p>

                  <a
                    href="#about"
                    className="group/btn mt-3.5 inline-flex items-center gap-1.5 rounded-lg border border-[#156c2c]/30 bg-[#156c2c]/[0.04] px-3.5 py-2 text-[12.5px] font-bold text-[#156c2c] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#156c2c] hover:bg-[#156c2c] hover:text-white hover:shadow-[0_8px_18px_-5px_rgba(21,108,44,0.4)]"
                  >
                    Meet Our Team
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Insights & News */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/85 bg-white p-4 shadow-[0_12px_32px_-14px_rgba(15,23,42,0.1)] sm:p-5">
            <div className="mb-3.5 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2.5px] w-5 rounded-full bg-[#156c2c]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#156c2c]">
                  Insights &amp; News
                </span>
              </div>

              <a
                href="#insights"
                className="group/all inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[12px] font-bold text-[#156c2c] transition-colors duration-300 hover:bg-[#156c2c]/[0.06]"
              >
                View All Insights
                <ArrowRight
                  size={13}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/all:translate-x-1"
                />
              </a>
            </div>

            <div className="scroll-row !gap-3 lg:grid lg:grid-cols-3">
              {insights.map((n) => (
                <article
                  key={n.title}
                  className="group/card flex w-[265px] shrink-0 snap-start items-start gap-3 rounded-xl border border-slate-200/75 bg-[#fafdfb] p-2.5 shadow-[0_6px_16px_-10px_rgba(15,23,42,0.12)] will-change-transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#156c2c]/35 hover:bg-white hover:shadow-[0_14px_26px_-10px_rgba(21,108,44,0.16)] lg:w-auto"
                >
                  <div className="relative h-[82px] w-[82px] shrink-0 overflow-hidden rounded-lg bg-slate-100">
                    <Photo
                      img={n.img}
                      g={n.g}
                      className="h-full w-full rounded-lg transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-110"
                      label={n.title}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-md bg-[#156c2c] px-2 py-0.5 text-[10px] font-bold tracking-wide text-white shadow-sm">
                      {n.tag}
                    </span>

                    <h3 className="mt-1.5 line-clamp-2 text-[12px] font-extrabold leading-[1.32] text-[#0f172a] transition-colors duration-300 group-hover/card:text-[#156c2c]">
                      {n.title}
                    </h3>

                    <p className="mt-1.5 flex items-center gap-1 text-[10.5px] font-medium text-slate-500">
                      <Calendar size={11} className="shrink-0 text-[#156c2c]" />
                      <span className="truncate">{n.date}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
