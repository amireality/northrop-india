import React, { useState } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────

const competencies = [
  {
    icon: "📄",
    title: "Financial Reporting & Global Standards",
    body: (
      <>
        Extensive exposure to{" "}
        <strong className="text-[#e59e0e]">US GAAP, IFRS, and Ind AS</strong>{" "}
        frameworks. Managed reporting for entities with{" "}
        <strong className="text-[#e59e0e]">$1B+ NASDAQ turnover</strong>,
        rigorous SOX compliance, and executed{" "}
        <strong className="text-[#e59e0e]">₹8,000+ crore due diligence</strong>{" "}
        mandates.
      </>
    ),
  },
  {
    icon: "🔍",
    title: "Forensic Audits & Investigations",
    body: (
      <>
        Led <strong className="text-[#e59e0e]">8+ specialized mandates</strong>{" "}
        across public and private banking sectors. Deep expertise in tracking
        fund diversion, unraveling shell entities, and structuring comprehensive
        reports for high-level lender committees.
      </>
    ),
  },
  {
    icon: "🏦",
    title: "Audit, Risk & Large-Scale Exposure",
    body: (
      <>
        Directed audits for massive balance sheets up to{" "}
        <strong className="text-[#e59e0e]">₹60,000 Cr</strong>. Executed
        continuous monitoring protocols for{" "}
        <strong className="text-[#e59e0e]">₹250 Cr – ₹1,000 Cr exposures</strong>
        , ensuring strict adherence to evolving Ind AS compliance.
      </>
    ),
  },
  {
    icon: "⚖️",
    title: "Insolvency & Transaction Audits (IBC)",
    body: (
      <>
        Navigated complex Corporate Insolvency Resolution Processes (CIRP).
        Focused experience evaluating distressed hospitality assets, dissecting
        PUFE transactions, and facilitating robust NCLT filings.
      </>
    ),
  },
  {
    icon: "🏛️",
    title: "Banking & SRA Audits",
    body: (
      <>
        Conducted{" "}
        <strong className="text-[#e59e0e]">
          15+ stringent Stock & Receivables Audits
        </strong>
        . Specialized in accurate DP (Drawing Power) calculations and meticulous
        account scrutiny to safeguard institutional capital.
      </>
    ),
  },
  {
    icon: "🤝",
    title: "Non-Profit & CSR Experience",
    body: (
      <>
        Provided structural and compliance guidance for Section 8 entities and
        NGOs. Managed critical 12A/80G compliance filings and developed
        verifiable impact documentation for corporate sponsors.
      </>
    ),
  },
];

const metrics = [
  { value: "  ₹60,000 Cr+", label: "Balance Sheet Exposure" },
  { value: "₹8,000 Cr+", label: "Due Diligence Executed" },
  { value: "₹1,200 Cr", label: "Loan Exposure Monitoring" },
  { value: "100+", label: "Audits Completed" },
  { value: "8+", label: "Forensic Mandates" },
  { value: "15+", label: "SRA Audits" },
];

// ── CARD COMPONENT ─────────────────────────────────────────────────────────────

function CompetencyCard({ icon, title, body }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative flex flex-col gap-4 p-7 border
        bg-white overflow-hidden
        transition-all duration-300 cursor-default
        ${hovered ? "border-[#e59e0e]/70 shadow-[0_0_24px_rgba(196,151,59,0.12)]" : "border-[#E8E4DC]"}
      `}
    >
      {/* gold top accent line */}
      <div
        className={`absolute top-0 left-0 h-[2px] bg-[#e59e0e] transition-all duration-500 ${
          hovered ? "w-full" : "w-0"
        }`}
      />

      {/* icon + title */}
      <div className="flex items-start gap-4">
        <span className="text-2xl mt-0.5 flex-shrink-0">{icon}</span>
        <h2 className="text-[17px] leading-snug text-[#0E0E0E] tracking-tight">
          {title}
        </h2>
      </div>

      {/* body */}
      <p className="text-[14px] leading-[1.75] text-[#0E0E0E] font-light">
        {body}
      </p>
    </article>
  );
}

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────────

export default function TrackRecord() {
  return (
    <section className="bg-[#FAF8F3] relative overflow-hidden">
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,151,59,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(196,151,59,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-16 py-24 lg:py-32">

        {/* ── SECTION HEADER ── */}
        <div className="mb-16 max-w-2xl">
          <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.22em] uppercase text-[#e59e0e] mb-6">
            <span className="w-6 h-px bg-[#e59e0e]" />
            Selected Team Experience
          </p>
          <h1 className=" text-[36px] lg:text-[52px] leading-[1.1] text-[#0E0E0E] tracking-tight mb-6">
            Transaction{" "}
            <em className="text-[#e59e0e] italic not-italic">Credentials</em>
          </h1>
          <div className="border-l-2 border-[#e59e0e]/40 pl-5">
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
              Deep execution experience across financial reporting, forensic
              investigations, audit, and high-stakes transaction environments.
            </p>
          </div>
        </div>

        {/* ── ASYMMETRIC LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── COMPETENCY GRID (8 cols) ── */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {competencies.map((item) => (
              <CompetencyCard key={item.title} {...item} />
            ))}
          </div>

          {/* ── METRICS SIDEBAR (4 cols) ── */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 bg-[#0E1C2F] border border-[#e59e0e]/20 p-8 flex flex-col gap-8">
            {/* header */}
            <div className="border-b border-[#e59e0e]/20 pb-5">
              <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#e59e0e]">
                Key Transaction Metrics
              </p>
            </div>

            {/* metric list */}
            <ul className="flex flex-col gap-7">
              {metrics.map(({ value, label }, i) => (
                <li key={i} className="flex flex-col gap-1 group">
                  <span className=" text-[28px] leading-none text-[#e59e0e] tracking-tight group-hover:text-white transition-colors duration-200">
                   Upto -{value}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-white/40 font-medium">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="border-t border-[#e59e0e]/20 pt-6 mt-2">
              <a
                href="mailto:Business@NorthropIndia.com"
                className="block w-full text-center bg-[#e59e0e] text-white text-[10.5px] font-medium tracking-[0.14em] uppercase px-6 py-4 hover:bg-[#e59e0e] transition-colors duration-200"
              >
                Discuss a Mandate
              </a>
            </div>
          </aside>
        </div>

        {/* ── BOTTOM QUOTE STRIP ── */}
        <div className="mt-16 border border-[#e59e0e]/30 bg-white p-8 lg:p-10 text-center relative overflow-hidden">
          {/* decorative corners */}
          <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#e59e0e]/40" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#e59e0e]/40" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#e59e0e]/40" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#e59e0e]/40" />

          <p className=" text-[20px] lg:text-[24px] leading-[1.5] text-[#1A1A1A] italic tracking-tight max-w-3xl mx-auto">
            "Experience built on execution across complex, high-value, and
            regulator-facing assignments —{" "}
            <em className="text-[#e59e0e] not-italic">
              not theoretical advisory.
            </em>
            "
          </p>
        </div>
      </div>
    </section>
  );
}