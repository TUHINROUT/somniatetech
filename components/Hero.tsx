import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import Icon from "./Icon";
import { strip } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative bg-white">
      {/* Hero Banner Wrapper */}
      <div className="relative w-full overflow-hidden lg:h-[510px] xl:h-[550px]">
        {/* Background Image - Anchored right so AI highway, GNSS rover, surveyor & drone all stay visible */}
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9] lg:absolute lg:inset-0 lg:aspect-auto">
          <Image
            src="/images/hero2.png"
            alt="Somniate Solutions surveyor with GNSS receiver, AI traffic analytics and drone"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_center] lg:object-right"
          />
          {/* Subtle mobile bottom blend */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent lg:hidden" />
        </div>

        {/* Desktop Left White Fade & Decorative Subtle Wave Accent */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[64%] lg:block"
          style={{
            background:
              "linear-gradient(90deg, #ffffff 0%, #ffffff 42%, rgba(255,255,255,0.92) 62%, rgba(255,255,255,0.45) 82%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Subtle Top/Bottom Edge Blending for Seamless Finish */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-12 bg-gradient-to-t from-black/10 to-transparent lg:block" />

        {/* Hero Foreground Content */}
        <div className="container-x relative z-10 pb-20 pt-6 lg:flex lg:h-full lg:items-center lg:pb-24 lg:pt-6">
          <div className="hero-rise max-w-[560px]">
            {/* Eyebrow Tag */}
            <div className="mb-3.5 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0f172a] sm:gap-x-2 sm:text-[11px] sm:tracking-[0.14em] [&>span]:whitespace-nowrap">
              <span>Geospatial</span>
              <span className="hidden text-gray-300 sm:inline">|</span>
              <span>Traffic</span>
              <span className="hidden text-gray-300 sm:inline">|</span>
              <span>Engineering</span>
              <span className="hidden text-gray-300 sm:inline">|</span>
              <span>Digital Solutions</span>
            </div>

            {/* Main Headline - Locked to 2 clean lines on desktop */}
            <h1 className="text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#0f172a] sm:text-[42px] xl:text-[48px]">
              Data-Driven Solutions
              <span className="block text-[#156c2c]">
                for Smarter &amp; Safer Cities
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-[465px] text-[14px] leading-[1.65] text-slate-600 sm:text-[15px]">
              Advanced traffic surveys, geospatial intelligence, engineering and
              data analytics for urban, infrastructure and mobility development.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
              <a
                href="#services"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#156c2c] px-5 py-3.5 sm:w-auto sm:py-3 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_-4px_rgba(21,108,44,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#115823] hover:shadow-[0_12px_24px_-4px_rgba(21,108,44,0.55)]"
              >
                Explore Our Services
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-slate-200/80 bg-white/95 px-4 py-3 sm:w-auto sm:py-2.5 text-[13.5px] font-semibold text-[#0f172a] shadow-[0_6px_20px_rgba(15,23,42,0.07)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#156c2c]/30 hover:bg-white hover:shadow-[0_10px_25px_rgba(15,23,42,0.1)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f172a] text-white transition-colors duration-200 group-hover:bg-[#156c2c]">
                  <Play size={10} fill="currentColor" className="ml-0.5" />
                </span>
                Watch Company Video
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Feature Strip */}
      <div className="container-x relative z-20 -mt-11 lg:-mt-12">
        <div className="scroll-row rounded-2xl border border-slate-100 bg-white/95 px-2 py-3.5 shadow-[0_18px_45px_-10px_rgba(15,23,42,0.12)] backdrop-blur-md lg:grid lg:grid-cols-6 lg:gap-0 lg:py-4">
          {strip.map((s, i) => (
            <div
              key={s.title}
              className={`group flex min-w-[200px] shrink-0 snap-start items-center gap-3 px-4 py-1.5 transition-colors lg:min-w-0 ${
                i ? "lg:border-l lg:border-slate-200/80" : ""
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#156c2c]/[0.06] text-[#156c2c] transition-all duration-200 group-hover:scale-105 group-hover:bg-[#156c2c] group-hover:text-white">
                <Icon name={s.icon} size={22} strokeWidth={1.8} />
              </div>
              <span className="whitespace-nowrap text-[12px] font-bold leading-[1.3] text-[#0f172a]">
                {s.title}
                <br />
                <span className="font-semibold text-slate-700">{s.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
