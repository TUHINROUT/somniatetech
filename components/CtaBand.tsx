import { ArrowRight, Users } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="relative bg-white pb-12 pt-5 lg:pb-16 lg:pt-6">
      <div className="container-x">
        <div className="grid items-stretch gap-5 lg:grid-cols-[0.94fr_1.52fr] lg:gap-6">
          {/* Left Card: Careers at Somniate */}
          <div
            id="careers"
            className="group/careers relative flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-2xl border border-[#156c2c]/20 bg-gradient-to-br from-[#eef7f0] via-[#f5fbf7] to-[#e6f3ea] p-4 shadow-[0_12px_30px_-14px_rgba(21,108,44,0.18)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#156c2c]/35 hover:shadow-[0_18px_36px_-14px_rgba(21,108,44,0.24)] sm:p-5"
          >
            {/* Subtle Corner Sheen */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#156c2c]/[0.07] blur-2xl transition-opacity duration-500 group-hover/careers:opacity-100" />

            <div className="relative z-10 flex min-w-[220px] flex-1 items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#156c2c]/20 bg-white text-[#156c2c] shadow-[0_6px_16px_-6px_rgba(21,108,44,0.2)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/careers:scale-105 group-hover/careers:bg-[#156c2c] group-hover/careers:text-white">
                <Users size={22} strokeWidth={1.75} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[12.5px] font-extrabold uppercase tracking-[0.06em] text-[#0e3f1c]">
                  Careers at Somniate
                </h3>
                <p className="mt-1 text-[12px] leading-[1.45] text-slate-600">
                  Be part of a team that is shaping smarter, safer and more
                  sustainable infrastructure.
                </p>
              </div>
            </div>

            <a
              href="#careers"
              className="group/btn relative z-10 inline-flex w-full shrink-0 items-center justify-center gap-1.5 sm:w-auto rounded-lg border border-[#156c2c]/30 bg-white px-4 py-2.5 text-[12.5px] font-bold text-[#156c2c] shadow-[0_6px_16px_-6px_rgba(15,23,42,0.12)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#156c2c] hover:bg-[#156c2c] hover:text-white hover:shadow-[0_10px_22px_-6px_rgba(21,108,44,0.42)]"
            >
              View Openings
              <ArrowRight
                size={14}
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1"
              />
            </a>
          </div>

          {/* Right Banner: Primary Consultation CTA */}
          <div
            id="contact"
            className="group/cta relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl border border-[#1d7a36]/40 p-5 text-white shadow-[0_18px_40px_-14px_rgba(13,63,29,0.42)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-14px_rgba(13,63,29,0.5)] sm:flex-row sm:items-center sm:px-7 sm:py-6"
            style={{
              background:
                "linear-gradient(115deg, #0d3f1d 0%, #156c2c 55%, #1d8238 100%)",
            }}
          >
            {/* Subtle Ambient Light Accents */}
            <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-emerald-300/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-lime-200/10 blur-2xl" />

            <h2 className="relative z-10 text-[20px] font-extrabold leading-[1.2] tracking-tight text-white sm:text-[23px] lg:text-[24px]">
              Let’s Build Smarter, More
              <br className="hidden sm:block" /> Connected Communities Together.
            </h2>

            <a
              href="mailto:info@somniatesolutions.com?subject=Consultation%20Request"
              className="group/mainbtn relative z-10 inline-flex w-full shrink-0 items-center justify-center gap-2 sm:w-auto rounded-lg bg-white px-5 py-3 text-[13px] font-extrabold text-[#0f172a] shadow-[0_10px_24px_-6px_rgba(0,0,0,0.28)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#f2fbf4] hover:text-[#125824] hover:shadow-[0_14px_28px_-6px_rgba(0,0,0,0.35)] active:translate-y-0 sm:px-6"
            >
              Request a Consultation
              <ArrowRight
                size={15}
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/mainbtn:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
