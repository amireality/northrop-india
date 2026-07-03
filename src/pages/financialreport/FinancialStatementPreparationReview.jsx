import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const FinancialStatementPreparationReview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const protocols = [
    {
      icon: "layers",
      title: "Complex Consolidation",
      description:
        "Harmonizing multi-entity financial data across disparate accounting frameworks (IFRS, GAAP) and currencies with automated reconciliation audits.",
      points: [
        "Intra-group elimination",
        "Minority interest valuation",
      ],
    },
    {
      icon: "verified",
      title: "Quality Review",
      description:
        "Independent validation of accounting treatments and disclosure completeness before board submission or external audit engagement.",
      points: [
        "Technical compliance gap analysis",
        "Impairment testing review",
      ],
    },
    {
      icon: "schedule",
      title: "Interim Reporting",
      description:
        "Streamlined preparation of quarterly and semi-annual results, ensuring continuous market transparency and regulatory readiness.",
      points: [
        "Accelerated closing workflows",
        "MD&A commentary support",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Financial Statement Preparation & Review | Northrop Management
        </title>
      
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-[819px] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0 opacity-40">
              <img
                src="/financialreportingimg/financial-statement.png"
                alt="Hero"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="relative z-10 w-full px-8 max-w-[1280px] mx-auto">
              <div className="max-w-3xl">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white mb-4 block">
                  CORE SERVICES
                </span>

                <h1 className="font-['Newsreader'] text-[64px] text-white leading-tight mb-6">
                  Financial Statement Preparation & Review.
                </h1>

                <p className="text-[18px] text-white/80 max-w-xl leading-[1.6]">
                  Precision-engineered reporting protocols for institutional
                  transparency and regulatory compliance across global
                  jurisdictions.
                </p>
              </div>
            </div>
          </section>

          {/* Protocols */}
          <section className="py-[120px] bg-[#f9f9f9]">
            <div className="px-8 max-w-[1280px] mx-auto">
              <div className="flex flex-col md:flex-row gap-8 border-b border-[#c4c7c7] pb-6 mb-16">
                <div className="md:w-1/3">
                  <h2 className="font-['Newsreader'] text-[32px] text-black">
                    Preparation and Review Protocols
                  </h2>
                </div>

                <div className="md:w-2/3">
                  <p className="text-[18px] text-[#444748] leading-[1.6]">
                    Our methodology is rooted in the rigorous standards of
                    archival precision. We deploy multi-layered verification
                    cycles to ensure that every interim report and annual
                    consolidation reflects an absolute fidelity to financial
                    truth.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {protocols.map((item, index) => (
                  <div
                    key={index}
                    className="p-8 border border-[#c4c7c7] bg-white flex flex-col gap-4 h-full"
                  >
                    <span className="material-symbols-outlined text-black">
                      {item.icon}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px]">
                      {item.title}
                    </h3>

                    <p className="text-[#444748] leading-[1.6]">
                      {item.description}
                    </p>

                    <ul className="mt-auto pt-4 border-t border-[#c4c7c7] space-y-2">
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.1em]"
                        >
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>

                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-[120px] bg-[#1c1b1b]">
            <div className="px-8 max-w-[1280px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left */}
                <div className="md:col-span-5">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#858383] mb-4 block">
                    CLIENT SEGMENT
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] text-white mb-6">
                    Designed for Resource-Constrained Finance Teams.
                  </h2>

                  <p className="text-[#858383] mb-6 leading-[1.6]">
                    We serve as a technical extension for listed entities and
                    private institutions facing surge-capacity requirements,
                    complex structural shifts, or talent gaps during critical
                    reporting windows.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 border border-white/20">
                        <span className="material-symbols-outlined text-white">
                          trending_up
                        </span>
                      </div>

                      <div>
                        <h4 className="text-[11px] uppercase tracking-[0.1em] text-white mb-1">
                          Scaling Listed Entities
                        </h4>

                        <p className="text-[#858383] leading-[1.6]">
                          Navigating the transition from private to public
                          reporting standards.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 border border-white/20">
                        <span className="material-symbols-outlined text-white">
                          corporate_fare
                        </span>
                      </div>

                      <div>
                        <h4 className="text-[11px] uppercase tracking-[0.1em] text-white mb-1">
                          Multi-National Conglomerates
                        </h4>

                        <p className="text-[#858383] leading-[1.6]">
                          Coordinating fragmented subsidiary reporting into a
                          cohesive narrative.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="md:col-span-6 md:col-start-7">
                  <img
                    src="/financialreportingimg/financial-statement1.jpeg"
                    alt="Corporate"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="py-[120px] bg-[#f3f3f4]">
            <div className="px-8 max-w-[1280px] mx-auto">
              <div className="border-b border-[#c4c7c7] mb-6 pb-2 flex justify-between items-end flex-wrap gap-4">
                <span className="text-[11px] uppercase tracking-[0.1em] text-black">
                  CASE STUDY 04/24
                </span>

                <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                  LONDON OFFICE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left */}
                <div className="md:col-span-8">
                  <h2 className="font-['Newsreader'] text-[40px] text-black mb-6 leading-tight">
                    Financial Reporting Recovery for a Listed Global
                    Manufacturer.
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-[#c4c7c7]">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#444748] mb-2">
                        THE CHALLENGE
                      </p>

                      <p className="leading-[1.6]">
                        A Tier-1 manufacturer faced a 60-day delay in year-end
                        closing following a failed ERP implementation and
                        departure of key finance personnel.
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#444748] mb-2">
                        THE INTERVENTION
                      </p>

                      <p className="leading-[1.6]">
                        Northrop deployed a task force of 4 senior controllers
                        to reconstruct accounts, manage auditor liaison, and
                        draft the full annual report.
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#444748] mb-2">
                        THE OUTCOME
                      </p>

                      <p className="leading-[1.6]">
                        Report submitted 48 hours before the regulatory
                        deadline. Audit qualifications were avoided.
                        Restructured the closing process for future cycles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="md:col-span-4 bg-black p-8 flex flex-col justify-center text-center">
                  <span className="font-['Newsreader'] text-[64px] text-white">
                    100%
                  </span>

                  <p className="text-[11px] uppercase tracking-[0.1em] text-white/60">
                    COMPLIANCE FILING RATE
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="py-[120px] bg-[#f9f9f9]">
            <div className="px-8 max-w-[1280px] mx-auto">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <h2 className="font-['Newsreader'] text-[32px]">
                  Intelligence & Publications
                </h2>

                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.1em] text-black border-b border-black hover:text-[#5e5e5e] transition-colors"
                >
                  View Library
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Publication Card */}
                <div className="group border border-[#c4c7c7] hover:border-black transition-colors cursor-pointer bg-white">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="/financialreportingimg/financial-statement2.png"
                      alt="Publication"
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748] mb-2 block">
                      QUARTERLY INSIGHT
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-4">
                      Financial Reporting Under Pressure.
                    </h3>

                    <p className="text-[#444748] mb-6 leading-[1.6]">
                      A briefing on maintaining statement integrity during rapid
                      restructuring and high-volatility market cycles.
                    </p>

                    <span className="text-[11px] uppercase tracking-[0.1em] text-black flex items-center gap-2">
                      READ PUBLICATION

                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col justify-center p-8 bg-[#e8e8e8] border border-[#c4c7c7]">
                  <div className="max-w-sm">
                    <span className="material-symbols-outlined text-black text-[48px] mb-4 block">
                      mail
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-4">
                      The Northrop Intelligence Brief
                    </h3>

                    <p className="text-[#444748] mb-6 leading-[1.6]">
                      Direct technical updates on evolving regulatory reporting
                      standards, delivered monthly to your office.
                    </p>

                    <form className="flex flex-col gap-4">
                      <input
                        type="email"
                        placeholder="OFFICE EMAIL ADDRESS"
                        className="bg-transparent border-0 border-b border-black text-[11px] uppercase tracking-[0.1em] focus:ring-0 px-0 py-2 placeholder:text-[#444748]/50 outline-none"
                      />

                      <button
                        type="submit"
                        className="bg-black text-white px-6 py-4 text-[11px] uppercase tracking-[0.1em] self-start hover:opacity-90 transition-opacity"
                      >
                        SUBSCRIBE
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default FinancialStatementPreparationReview;