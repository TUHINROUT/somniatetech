import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import Photo from "./Photo";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-12 lg:py-16">
      <div className="container-x">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.22fr_0.64fr] lg:gap-9 xl:gap-11">
          {/* Left Column: Heading, Copy & CTA */}
          <div className="max-w-[430px]">
            <div className="mb-2.5 inline-flex items-center gap-2">
              <span className="h-[2.5px] w-5 rounded-full bg-[#156c2c]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#156c2c]">
                About Somniate Solutions
              </span>
            </div>

            <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[34px] xl:text-[36px]">
              A Trusted Partner for Spatial, Traffic &amp;{" "}
              <span className="text-[#156c2c]">Engineering Solutions</span>
            </h2>

            <p className="mt-3.5 text-[13.5px] leading-[1.68] text-slate-600 sm:text-[14px]">
              Somniate Solutions delivers technology-driven, accurate and
              reliable data, surveys and consulting services for infrastructure,
              transportation, urban planning and environmental projects.
            </p>

            <div className="mt-5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#156c2c] px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_-4px_rgba(21,108,44,0.42)] transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#115823] hover:shadow-[0_14px_26px_-4px_rgba(21,108,44,0.5)] active:translate-y-0"
              >
                More About Us
                <ArrowRight
                  size={15}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                />
              </a>
            </div>
          </div>

          {/* Center Column: Exact Mockup Curved Silhouette */}
          <div className="group relative flex items-center justify-center">
            <svg width="0" height="0" className="absolute" aria-hidden="true">
              <defs>
                <clipPath
                  id="somniate-office-shape"
                  clipPathUnits="objectBoundingBox"
                >
                  <path d="M 0.21,0.02 C 0.25,0.00 0.30,0.00 0.35,0.00 L 0.96,0.00 C 0.985,0.00 1.00,0.025 1.00,0.06 L 1.00,0.94 C 1.00,0.975 0.985,1.00 0.96,1.00 L 0.03,1.00 C 0.008,1.00 -0.005,0.975 0.003,0.945 L 0.115,0.22 C 0.13,0.11 0.165,0.045 0.21,0.02 Z" />
                </clipPath>
              </defs>
            </svg>

            <div
              className="w-full overflow-hidden drop-shadow-[0_14px_28px_rgba(15,23,42,0.16)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
              style={{ clipPath: "url(#somniate-office-shape)" }}
            >
              <Photo
                img="group-company.webp"
                g={["#2a6fb5", "#f2b27a"]}
                className="aspect-[16/8.5] w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                label="Somniate Solutions office building"
              />
            </div>
          </div>

          {/* Right Column: Ultra-Smooth Hover Stats Cards */}
          <ul className="grid grid-cols-2 gap-3 sm:gap-3.5 lg:grid-cols-1 lg:gap-2.5">
            {stats.map((s) => (
              <li
                key={s.label}
                className="group relative flex flex-col items-start gap-2.5 overflow-hidden rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-[0_6px_18px_-8px_rgba(15,23,42,0.08)] will-change-transform transition-[transform,border-color,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#156c2c]/35 hover:bg-[#156c2c]/[0.02] hover:shadow-[0_14px_28px_-10px_rgba(21,108,44,0.18)] sm:flex-row sm:items-center sm:gap-3.5 sm:px-4 sm:py-2.5"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#156c2c]/[0.05] to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full" />

                <span className="pointer-events-none absolute inset-y-2 left-0 w-[3px] origin-center scale-y-0 rounded-r-full bg-[#156c2c] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#156c2c]/[0.07] text-[#156c2c] transition-[transform,background-color,color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:bg-[#156c2c] group-hover:text-white group-hover:shadow-[0_6px_14px_-3px_rgba(21,108,44,0.4)]">
                  <Icon
                    name={s.icon}
                    size={21}
                    strokeWidth={1.75}
                    className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>

                <div className="relative z-10 min-w-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                  <div className="text-[19px] font-extrabold leading-tight tracking-tight text-[#0f172a] tabular-nums transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#156c2c] sm:text-[21px]">
                    {s.value}
                  </div>
                  <div className="text-[11.5px] font-medium leading-snug lg:truncate text-slate-500 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-slate-700">
                    {s.label}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
