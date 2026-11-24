import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

function ServiceGlyph({ title }: { title: string }) {
  switch (title) {
    case "Turning Movement Survey":
      return (
        <svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 4v20M4 14h20" />
          <path d="M11 7l3-3 3 3M21 11l3 3-3 3M17 21l-3 3-3-3" />
        </svg>
      );
    case "Pedestrian Survey":
      return (
        <svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="15" cy="5.5" r="2.2" fill="currentColor" stroke="none" />
          <path d="M14 9.5l-2.5 5.5 4.5 2.5 1.5 6.5M14 9.5l4 3.5-2.5 2M11.5 15l-3.5 8.5" />
        </svg>
      );
    case "Bus Occupancy Survey":
      return (
        <svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="5" y="5" width="18" height="15" rx="3" />
          <path d="M5 14h18M9 10h2M13 10h2M17 10h2M8 20v3M20 20v3" />
          <circle
            cx="9.5"
            cy="17.5"
            r="1.2"
            fill="currentColor"
            stroke="none"
          />
          <circle
            cx="18.5"
            cy="17.5"
            r="1.2"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
    case "Vehicle Occupancy Survey":
      return (
        <svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6.5 15l2-5.5A2.5 2.5 0 0 1 10.9 8h6.2a2.5 2.5 0 0 1 2.4 1.5L21.5 15" />
          <rect x="4.5" y="14.5" width="19" height="6.5" rx="2" />
          <circle cx="8.5" cy="18" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="19.5" cy="18" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "ANPR Survey":
      return (
        <svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12.5L20.5 7l2.5 6.5-16.5 5.5z" />
          <path d="M16 15.5l1.5 6.5h4.5M23.5 9.5a5 5 0 0 1 1.5 3.5" />
        </svg>
      );
    case "Cycle Movement Survey":
      return (
        <svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="7.5" cy="19.5" r="3.5" />
          <circle cx="20.5" cy="19.5" r="3.5" />
          <path d="M7.5 19.5l5-6.5h5l3 6.5M12.5 13l-1.5-4h3" />
          <circle
            cx="16.5"
            cy="6.5"
            r="1.5"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
    case "Parking Surveys":
      return (
        <svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="5" y="4.5" width="18" height="19" rx="3.5" />
          <path
            d="M11.5 19V9.5h3.5a2.75 2.75 0 0 1 0 5.5h-3.5"
            strokeWidth="2.3"
          />
        </svg>
      );
    case "Link Count Survey":
      return (
        <svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9.5 22V6M9.5 6l-3 3M9.5 6l3 3" />
          <path d="M18.5 6v16M18.5 22l-3-3M18.5 22l3-3" />
        </svg>
      );
    case "Roundabout Survey":
      return (
        <svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="14" cy="14" r="5" />
          <path d="M14 4v5M14 19v5M4 14h5M19 14h5" />
          <path d="M11.5 6.5L14 4l2.5 2.5" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="5" y="6" width="18" height="12" rx="2" />
          <path d="M3.5 21h21M10 11h8M10 14.5h5" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-slate-200/75 bg-gradient-to-br from-[#e9f5ed] via-[#f5fbf7] to-[#eaf4ee] py-12 lg:py-12"
    >
      {/* Translucent Glass Ambient Orbs Behind Frosted Cards */}
      <div className="pointer-events-none absolute -left-24 top-6 h-64 w-64 rounded-full bg-[#156c2c]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-2 right-10 h-72 w-72 rounded-full bg-[#9be82c]/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-6 lg:grid-cols-[0.82fr_2.18fr] lg:gap-7">
          {/* Left Column: Frosted Glass Heading & Forest Green CTA */}
          <div className="rounded-2xl border border-white/80 bg-white/65 p-4 shadow-[0_12px_32px_-12px_rgba(15,23,42,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-md sm:p-5 lg:max-w-[330px] lg:p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[3px] w-5 rounded-full bg-gradient-to-r from-[#156c2c] to-[#84cc16]" />
              <span className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#156c2c]">
                Our Services
              </span>
            </div>

            <h2 className="text-[23px] font-extrabold leading-[1.16] tracking-tight text-[#0f172a] sm:text-[27px]">
              Comprehensive Services for{" "}
              <span className="text-[#156c2c]">Modern Infrastructure</span>
            </h2>

            <p className="mt-2.5 text-[12px] leading-[1.55] text-slate-600">
              End-to-end traffic, spatial, engineering and data solutions for
              smarter, safer and more sustainable infrastructure development.
            </p>

            <div className="mt-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#156c2c] px-4 py-2 text-[12px] font-bold text-white shadow-[0_8px_20px_-5px_rgba(21,108,44,0.45)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#115823] hover:shadow-[0_14px_26px_-5px_rgba(21,108,44,0.55)] active:translate-y-0"
              >
                View All Services
                <ArrowRight
                  size={14}
                  strokeWidth={2.3}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right Column: 10 Frosted Glass Service Cards (5x2 on Desktop) */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:grid-cols-5">
            {services.map((s) => (
              <a
                key={s.title}
                href="#contact"
                className="group/card relative flex min-h-[112px] flex-col items-start justify-end gap-2.5 overflow-hidden rounded-xl border border-white/85 bg-white/75 px-3 py-3 sm:min-h-0 sm:flex-row sm:items-center sm:justify-between sm:py-2.5 shadow-[0_10px_28px_-12px_rgba(15,23,42,0.12),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-md will-change-transform transition-[transform,border-color,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#156c2c]/40 hover:bg-white/95 hover:shadow-[0_18px_34px_-12px_rgba(21,108,44,0.22),inset_0_1px_0_0_rgba(255,255,255,1)] active:scale-[0.985]"
              >
                {/* Glass Reflection Sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/75 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:translate-x-full" />

                {/* Top Glass Rim Highlight */}
                <span className="pointer-events-none absolute inset-x-3 top-0 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-[#156c2c]/35 to-transparent opacity-70 transition-opacity duration-500 group-hover/card:opacity-100" />

                {/* Left Glass Mint Icon Tile */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/90 bg-[#e6f6ec]/85 text-[#15803d] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),0_4px_12px_-4px_rgba(21,108,44,0.18)] backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105 group-hover/card:border-[#156c2c] group-hover/card:bg-[#156c2c]/95 group-hover/card:text-white group-hover/card:shadow-[0_8px_18px_-4px_rgba(21,108,44,0.45)]">
                  <ServiceGlyph title={s.title} />
                </div>

                {/* Center Service Title */}
                <span className="relative z-10 min-w-0 flex-1 text-[12.5px] font-extrabold sm:text-[12px] leading-[1.25] tracking-tight text-[#0f172a] transition-colors duration-300 group-hover/card:text-[#156c2c]">
                  {s.title}
                </span>

                {/* Right Glass Arrow Badge */}
                <span className="absolute right-2.5 top-2.5 z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/90 bg-[#dcf4e2]/85 sm:static text-[#15803d] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:border-[#156c2c] group-hover/card:bg-[#156c2c] group-hover/card:text-white">
                  <ArrowRight
                    size={12}
                    strokeWidth={2.4}
                    className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:translate-x-0.5"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
