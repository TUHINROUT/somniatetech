import Image from "next/image";
import { ArrowRight } from "lucide-react";

type GroupCompany = {
  name: string;
  desc: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  logoSrc: string;
  logoAlt: string;
  logoW: number;
  logoH: number;
  pillBg: string;
  pillText: string;
  pillHoverBg: string;
  pillHoverShadow: string;
};

const groupCompanies: GroupCompany[] = [
  {
    name: "Somniate Solutions",
    desc: "Spatial & Engineering Digital Solutions",
    url: "https://somniatesolutions.com/",
    imageSrc: "/images/somniate-solutions.png",
    imageAlt: "Somniate Solutions modern corporate building",
    logoSrc: "/images/somniate-solutions-logo.png",
    logoAlt: "Somniate Solutions logo",
    logoW: 2172,
    logoH: 724,
    pillBg: "#dbeafe",
    pillText: "#1d4ed8",
    pillHoverBg: "#1d5fa7",
    pillHoverShadow: "rgba(29, 95, 167, 0.45)",
  },
  {
    name: "SomniateTech",
    desc: "IT Services, Cloud & Business Automation",
    url: "https://somniatetech.com/",
    imageSrc: "/images/somniatetech.png",
    imageAlt: "SomniateTech cloud and enterprise server infrastructure",
    logoSrc: "/images/Somniate-Tech-logo.png",
    logoAlt: "SomniateTech logo",
    logoW: 6000,
    logoH: 1633,
    pillBg: "#e0f2fe",
    pillText: "#0369a1",
    pillHoverBg: "#0284c7",
    pillHoverShadow: "rgba(2, 132, 199, 0.45)",
  },
  {
    name: "Somniatetech Traffic",
    desc: "Intelligent Traffic & Mobility Solutions",
    url: "https://somniatetraffic.com/",
    imageSrc: "/images/somniate-traffic.png",
    imageAlt: "Somniatetech Traffic highway and mobility corridor",
    logoSrc: "/images/somniatetech-traffic-logo.png",
    logoAlt: "Somniatetech Traffic logo",
    logoW: 1698,
    logoH: 349,
    pillBg: "#dcfce7",
    pillText: "#15803d",
    pillHoverBg: "#16a34a",
    pillHoverShadow: "rgba(22, 163, 74, 0.45)",
  },
  {
    name: "Sidhi Engicon",
    desc: "Engineering, Infrastructure & Project Consulting",
    url: "https://www.sidhiengicon.com/",
    imageSrc: "/images/sidhi-engicon.png",
    imageAlt: "Sidhi Engicon infrastructure construction and crane",
    logoSrc: "/images/sidhi_engicon_logo.png",
    logoAlt: "Sidhi Engicon logo",
    logoW: 921,
    logoH: 420,
    pillBg: "#fef3c7",
    pillText: "#b45309",
    pillHoverBg: "#d97706",
    pillHoverShadow: "rgba(217, 119, 6, 0.45)",
  },
  {
    name: "Sidhi Trading",
    desc: "Industrial & Civil Trading Solutions",
    url: "https://www.sidhitrading.com/",
    imageSrc: "/images/sidhi-trading.png",
    imageAlt: "Sidhi Trading industrial logistics and civil materials",
    logoSrc: "/images/sidhi-tradding-logo.png",
    logoAlt: "Sidhi Trading logo",
    logoW: 160,
    logoH: 72,
    pillBg: "#ffedd5",
    pillText: "#c2410c",
    pillHoverBg: "#ea580c",
    pillHoverShadow: "rgba(234, 88, 12, 0.45)",
  },
];

export default function GroupCompanies() {
  return (
    <section
      aria-label="Our Group Companies"
      className="relative overflow-hidden py-10 text-white lg:py-12"
      style={{
        background:
          "radial-gradient(circle at 62% 15%, rgba(132, 204, 22, 0.24) 0%, rgba(21, 128, 61, 0.16) 36%, transparent 68%), linear-gradient(115deg, #052210 0%, #0a381a 48%, #072913 100%)",
      }}
    >
      {/* Decorative Subtle Wave Accent Lines Matching Figma */}
      <svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
      >
        <path
          d="M-60 220 C 260 110, 560 250, 920 120 C 1150 40, 1320 90, 1500 35"
          fill="none"
          stroke="#9be82c"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <path
          d="M-60 245 C 290 145, 590 265, 960 145 C 1180 75, 1340 120, 1500 70"
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.2"
          opacity="0.65"
        />
      </svg>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-6 lg:grid-cols-[0.82fr_1.68fr] lg:gap-7">
          {/* Left Column: Heading, Copy & Deep Forest Green CTA Button */}
          <div className="lg:max-w-[330px]">
            <div className="mb-2.5 flex items-center gap-2">
              <span className="h-[3px] w-5 rounded-full bg-[#9be82c]" />
              <span className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#b7f266]">
                Our Group Companies
              </span>
            </div>

            <h2 className="text-[24px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[28px]">
              A Diversified Ecosystem of Specialized{" "}
              <span className="text-[#9be82c]">Companies</span>
            </h2>

            <p className="mt-3 text-[12px] leading-[1.55] text-white/80">
              Five synergized companies delivering end-to-end solutions across
              spatial technology, traffic, engineering, infrastructure and
              industrial trading.
            </p>

            <div className="mt-5">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-lg border border-emerald-400/25 bg-[#156c2c] px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_10px_22px_-6px_rgba(21,108,44,0.55)] transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#197d34] hover:shadow-[0_14px_28px_-6px_rgba(21,108,44,0.7)] active:translate-y-0"
              >
                Explore Our Companies
                <ArrowRight
                  size={14}
                  strokeWidth={2.3}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right Column: 5 Image-Top Company Cards */}
          <div className="scroll-row -mx-4 scroll-px-4 !gap-3.5 px-4 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-3 lg:grid-cols-5 lg:!gap-2.5">
            {groupCompanies.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                style={
                  {
                    "--pill-bg": company.pillBg,
                    "--pill-text": company.pillText,
                    "--pill-hover-bg": company.pillHoverBg,
                    "--pill-hover-shadow": company.pillHoverShadow,
                  } as React.CSSProperties
                }
                className="group/card relative flex w-[76%] max-w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-white/20 bg-white sm:w-auto sm:max-w-none text-[#0f172a] shadow-[0_14px_30px_-10px_rgba(0,0,0,0.45)] will-change-transform transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#9be82c] hover:shadow-[0_22px_40px_-10px_rgba(0,0,0,0.6),0_0_0_1px_rgba(155,232,44,0.45)] active:scale-[0.985]"
              >
                {/* Smooth Light Sheen Sweep on Hover */}
                <span className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:translate-x-full" />

                {/* Top Photo Banner with Crisp Clarity */}
                <div className="relative h-36 w-full overflow-hidden bg-slate-100 sm:h-28">
                  <Image
                    src={company.imageSrc}
                    alt={company.imageAlt}
                    fill
                    sizes="(max-width: 640px) 76vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover contrast-[1.03] saturate-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-3">
                  <div>
                    {/* Uploaded Company Logo */}
                    <div className="flex h-7 items-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:translate-x-0.5">
                      <Image
                        src={company.logoSrc}
                        alt={company.logoAlt}
                        width={company.logoW}
                        height={company.logoH}
                        sizes="115px"
                        className="max-h-6 w-auto max-w-[115px] object-contain object-left"
                      />
                    </div>

                    <h3 className="mt-1.5 text-[13px] font-extrabold leading-tight sm:text-[12px] tracking-tight text-[#0f172a] transition-colors duration-300 group-hover/card:text-[#156c2c]">
                      {company.name}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-[11px] leading-[1.4] text-slate-600 sm:text-[10px] sm:leading-[1.35]">
                      {company.desc}
                    </p>
                  </div>

                  {/* Bottom Right Image-Matched Arrow Pill */}
                  <div className="mt-2.5 flex items-center justify-end">
                    <span
                      style={{
                        backgroundColor: "var(--pill-bg)",
                        color: "var(--pill-text)",
                      }}
                      className="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105 group-hover/card:!bg-[var(--pill-hover-bg)] group-hover/card:!text-white group-hover/card:shadow-[0_6px_14px_-3px_var(--pill-hover-shadow)]"
                    >
                      <ArrowRight
                        size={12}
                        strokeWidth={2.4}
                        className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
