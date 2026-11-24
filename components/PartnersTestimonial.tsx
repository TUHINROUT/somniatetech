"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type PartnerItem = {
  name: string;
  role: string;
  renderLogo: () => React.ReactNode;
};

const partnerShowcase: PartnerItem[] = [
  {
    name: "Esri",
    role: "ArcGIS & Spatial Analytics",
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0079c1] text-white shadow-sm">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
            <circle
              cx="12"
              cy="12"
              r="8.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
            />
            <path
              d="M8.5 12.5c2-3 5-3 7 0M9.5 15c1.8-1.8 3.2-1.8 5 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-[20px] font-black tracking-tight text-[#0f172a]">
          esri
        </span>
      </div>
    ),
  },
  {
    name: "Trimble",
    role: "GNSS & Surveying Systems",
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 28 24" className="h-5 w-6 fill-[#0063a3]">
          <path d="M14 2L26 21H20.5L14 10.2L7.5 21H2L14 2Z" />
        </svg>
        <span className="text-[16px] font-extrabold tracking-tight text-[#005f9e]">
          Trimble
        </span>
      </div>
    ),
  },
  {
    name: "Autodesk",
    role: "Civil 3D & Infrastructure CAD",
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#0f172a] text-[12px] font-black text-white">
          A
        </span>
        <span className="text-[13.5px] font-black uppercase tracking-wider text-[#0f172a]">
          AUTODESK
        </span>
      </div>
    ),
  },
  {
    name: "Hexagon",
    role: "Geospatial & Reality Capture",
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 26 24" className="h-5 w-5">
          <polygon
            points="13,1 24,6.5 24,17.5 13,23 2,17.5 2,6.5"
            fill="#15803d"
          />
          <polygon
            points="13,5.5 19.5,9 19.5,15 13,18.5 6.5,15 6.5,9"
            fill="#ffffff"
          />
          <circle cx="13" cy="12" r="2.8" fill="#0079c1" />
        </svg>
        <span className="text-[13.5px] font-extrabold tracking-wider text-[#0f172a]">
          HEXAGON
        </span>
      </div>
    ),
  },
  {
    name: "DJI",
    role: "Aerial UAV & Photogrammetry",
    renderLogo: () => (
      <div className="flex items-center gap-1">
        <span className="rounded bg-[#0f172a] px-2 py-0.5 text-[14px] font-black italic tracking-widest text-white">
          DJI
        </span>
      </div>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Somniate Solutions delivered high-quality traffic data and insights that greatly supported our project planning. A dependable and professional team.",
    author: "Rakesh Sahoo",
    role: "Project Director, Infrastructure Development",
    avatar: "/images/avatar.jpg",
  },
  {
    quote:
      "Their geospatial mapping and turning-movement analytics gave our urban mobility corridor team crisp, actionable field intelligence ahead of schedule.",
    author: "Ananya Mohanty",
    role: "Lead Transport Planner, Smart City Initiative",
    avatar: "/images/avatar.jpg",
  },
  {
    quote:
      "Accurate survey deliverables, responsive engineering support, and clear reporting across multi-site highway and environmental assessments.",
    author: "Debashis Patnaik",
    role: "Senior Manager, Civil & Highway Consultancy",
    avatar: "/images/avatar.jpg",
  },
];

export default function PartnersTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const loopedPartners = [...partnerShowcase, ...partnerShowcase];
  const currentTestimonial = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden border-t border-slate-200/70 bg-gradient-to-b from-[#f2f8f4] via-[#f8fcf9] to-white py-10 lg:py-12">
      {/* Subtle Ambient Brand Glow */}
      <div
        className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-[640px] rounded-full opacity-75 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(21,108,44,0.075) 0%, rgba(21,108,44,0.015) 60%, transparent 80%)",
        }}
      />

      <style jsx>{`
        @keyframes partnerSlowScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .partner-marquee-track {
          display: flex;
          width: max-content;
          animation: partnerSlowScroll 26s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-marquee-track {
            animation: none;
          }
          .partner-marquee-box {
            overflow-x: auto;
          }
        }

        .partner-marquee-box:hover .partner-marquee-track,
        .partner-marquee-box:focus-within .partner-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container-x relative z-10">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.12fr_1fr] lg:gap-7">
          {/* Left Side: Our Partners (Slow-Motion Scroll + Logo Blur Effect) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/85 bg-white p-4 shadow-[0_12px_32px_-14px_rgba(15,23,42,0.1)] sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2.5px] w-5 rounded-full bg-[#156c2c]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#156c2c]">
                  Our Partners
                </span>
              </div>
              <span className="hidden text-[10.5px] font-medium text-slate-400 lg:inline">
                Hover card to focus logo
              </span>
            </div>

            <div className="partner-marquee-box relative overflow-hidden rounded-xl border border-slate-200/75 bg-gradient-to-r from-[#f4faf6] via-[#fafdfb] to-[#f4faf6] py-3">
              {/* Left & Right Smooth Edge Blur + Gradient Fade Masks */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 backdrop-blur-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(244,250,246,0.96) 0%, rgba(244,250,246,0.65) 55%, rgba(244,250,246,0) 100%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 backdrop-blur-[3px]"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(244,250,246,0.96) 0%, rgba(244,250,246,0.65) 55%, rgba(244,250,246,0) 100%)",
                }}
              />

              <div className="partner-marquee-track">
                {loopedPartners.map((partner, idx) => (
                  <div
                    key={`${partner.name}-${idx}`}
                    className="group/p mx-2 flex w-[166px] shrink-0 flex-col items-center justify-center rounded-xl border border-slate-200/75 bg-white px-3.5 py-3 text-center shadow-[0_6px_16px_-8px_rgba(15,23,42,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#156c2c]/35 hover:shadow-[0_12px_24px_-8px_rgba(21,108,44,0.18)]"
                  >
                    {/* Logo with Soft Blur -> Sharp Focus on Hover */}
                    <div className="flex h-9 w-full items-center justify-center [@media(hover:hover)]:blur-[1.5px] [@media(hover:hover)]:opacity-80 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/p:scale-105 group-hover/p:blur-none group-hover/p:opacity-100">
                      {partner.renderLogo()}
                    </div>

                    <span className="mt-1.5 text-[11px] font-extrabold text-[#0f172a] transition-colors duration-300 group-hover/p:text-[#156c2c]">
                      {partner.name}
                    </span>
                    <span className="line-clamp-1 text-[9.5px] font-medium text-slate-500">
                      {partner.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: What Our Clients Say (Manual Slider) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/85 bg-white p-4 shadow-[0_12px_32px_-14px_rgba(15,23,42,0.1)] sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2.5px] w-5 rounded-full bg-[#156c2c]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f172a]">
                  What Our Clients Say
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white text-[#0f172a] shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:border-[#156c2c] hover:bg-[#156c2c] hover:text-white active:scale-95 sm:h-8 sm:w-8"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white text-[#0f172a] shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:border-[#156c2c] hover:bg-[#156c2c] hover:text-white active:scale-95 sm:h-8 sm:w-8"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            <figure
              key={currentTestimonial.author}
              className="flex flex-col gap-3 rounded-xl bg-[#fafdfb] p-3.5 sm:flex-row sm:items-start sm:gap-3.5 sm:p-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="flex items-center gap-3 sm:items-start">
              <Quote
                size={28}
                className="mt-0.5 shrink-0 text-[#8be34a]"
                fill="currentColor"
              />
              <Image
                src={currentTestimonial.avatar}
                alt={currentTestimonial.author}
                width={240}
                height={204}
                className="h-12 w-12 shrink-0 rounded-full border-2 border-[#156c2c]/20 object-cover shadow-sm"
              />
              </div>
              <blockquote className="min-w-0 flex-1 text-[12px] leading-[1.55] text-slate-700">
                “{currentTestimonial.quote}”
                <footer className="mt-2 flex items-center justify-between gap-2">
                  <div>
                    <span className="block text-[12.5px] font-extrabold text-[#0f172a]">
                      {currentTestimonial.author}
                    </span>
                    <span className="block text-[11px] font-medium text-slate-500">
                      {currentTestimonial.role}
                    </span>
                  </div>
                  <span className="text-[10.5px] font-bold text-[#156c2c] tabular-nums">
                    {activeIndex + 1}/{testimonials.length}
                  </span>
                </footer>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
