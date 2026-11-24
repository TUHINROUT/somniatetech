"use client";

import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Photo from "./Photo";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: number) =>
    ref.current?.scrollBy({ left: d * 260, behavior: "smooth" });

  return (
    <section id="projects" className="container-x py-10 lg:py-8">
      <p className="eyebrow">Featured Projects</p>
      <h2 className="h2 mb-4">Real-World Solutions That Make an Impact</h2>
      <div className="grid items-center gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative flex items-center">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous project"
            className="absolute -left-3 z-10 hidden h-9 w-9 items-center justify-center rounded-full bg-white shadow-card lg:flex"
          >
            <ChevronLeft size={18} />
          </button>
          <div
            ref={ref}
            className="-mx-4 flex w-auto scroll-px-4 snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:w-full sm:px-0"
            style={{ scrollbarWidth: "none" }}
          >
            {projects.map((p) => (
              <article
                key={p.title}
                className="card w-[72%] max-w-[250px] shrink-0 snap-start overflow-hidden sm:w-[210px]"
              >
                <Photo img={p.img} g={p.g} className="h-28" label={p.title} />
                <div className="p-3">
                  <h3 className="text-[13px] font-extrabold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-ink-soft">
                    {p.sub}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <button
            onClick={() => scroll(1)}
            aria-label="Next project"
            className="absolute -right-3 z-10 hidden h-9 w-9 items-center justify-center rounded-full bg-white shadow-card lg:flex"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div
          className="relative min-h-[200px] overflow-hidden rounded-2xl p-6 text-ink shadow-card"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#eaf7e4 0%,#dff2d5 58%,rgba(223,242,213,0) 88%), url(/images/case-study.jpg), linear-gradient(120deg,#e6f5e0,#5aa860)",
            backgroundSize: "100% 100%, auto 100%, 100% 100%",
            backgroundPosition: "0 0, right center, 0 0",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className="inline-block rounded-md bg-brand-dark px-3 py-1 text-[11px] font-bold text-white">
            CASE STUDY
          </span>
          <h3 className="mt-3 max-w-[62%] text-[19px] sm:max-w-[260px] font-extrabold leading-tight text-brand-dark">
            Improving Urban Mobility with Data Intelligence
          </h3>
          <p className="mt-2 max-w-[62%] text-[12px] sm:max-w-[260px] leading-snug">
            How our traffic survey and analysis helped reduce congestion by 32%
            in a major city.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-dark"
          >
            Read Case Study <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
