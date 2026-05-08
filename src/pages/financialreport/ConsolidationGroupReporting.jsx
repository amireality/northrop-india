import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ConsolidationGroupReporting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const audiences = [
    {
      icon: "account_balance",
      title: "Group CFOs",
      description:
        "Ensuring absolute transparency across reporting lines and maintaining rigorous compliance with international standards.",
    },
    {
      icon: "domain",
      title: "MNCs",
      description:
        "Multi-national corporations requiring streamlined intercompany elimination and foreign subsidiary alignment.",
    },
  ];

  const timeline = [
    {
      number: "01",
      title: "Diagnostic",
      description:
        "Mapping the global chart of accounts and identifying reconciliation gaps.",
    },
    {
      number: "02",
      title: "Integration",
      description:
        "Deploying the Northrop Translation Layer for real-time data sync.",
    },
    {
      number: "03",
      title: "Validation",
      description:
        "Final eliminations and minority interest auditing via automated protocols.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Consolidation & Group Reporting | Northrop Management
        </title>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative min-h-[819px] flex items-center overflow-hidden bg-[#1c1b1b]">
            <div className="absolute inset-0 z-0">
              <img
                src="/financialreportingimg/consolidation-group.png"
                alt="Hero"
                className="w-full h-full object-cover opacity-60 grayscale"
              />
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
              <div className="max-w-2xl bg-[#f9f9f9] p-12 brutalist-border">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#5e5e5e] block mb-4">
                  Strategic Intelligence 07D
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] mb-6">
                  Consolidation & Group Reporting
                </h1>

                <p className="text-[18px] text-[#444748] mb-8 leading-[1.6]">
                  Structural precision for global multi-nationals. Navigating
                  the complexities of intercompany dynamics with institutional
                  rigor.
                </p>

                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-black">
                      account_tree
                    </span>

                    <span className="text-[11px] uppercase tracking-[0.1em] font-semibold">
                      Hierarchy Integrity
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-black">
                      analytics
                    </span>

                    <span className="text-[11px] uppercase tracking-[0.1em] font-semibold">
                      Data Precision
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Audience */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8">
              {/* Left */}
              <div className="col-span-12 md:col-span-4">
                <h2 className="font-['Newsreader'] text-[32px] mb-4">
                  Who It's For
                </h2>

                <div className="horizontal-rule mb-6"></div>

                <p className="text-[#444748] leading-[1.6]">
                  Our frameworks are engineered specifically for institutional
                  leadership overseeing diverse global footprints.
                </p>
              </div>

              {/* Right */}
              <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {audiences.map((item, index) => (
                  <div
                    key={index}
                    className="p-8 brutalist-border bg-[#f3f3f4]"
                  >
                    <span className="material-symbols-outlined text-black text-4xl mb-4 block">
                      {item.icon}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-2">
                      {item.title}
                    </h3>

                    <p className="leading-[1.6]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Protocols */}
          <section className="bg-[#eeeeee] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="mb-12">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] block mb-2">
                  Technical Framework
                </span>

                <h2 className="font-['Newsreader'] text-[32px]">
                  Consolidation Protocols
                </h2>
              </div>

              <div className="grid grid-cols-12 gap-8">
                {/* Protocol 1 */}
                <div className="col-span-12 md:col-span-8 p-12 bg-[#f9f9f9] brutalist-border flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Newsreader'] text-[24px] mb-4">
                      Intercompany Elimination
                    </h3>

                    <p className="text-[18px] text-[#444748] mb-8 leading-[1.6]">
                      Our proprietary logic engines automate the removal of
                      internal transactions, ensuring that group-level
                      statements reflect only external economic activity with
                      100% mathematical certainty.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t border-[#c4c7c7] pt-8">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                        Accuracy
                      </span>

                      <div className="font-['Newsreader'] text-[24px]">
                        99.9%
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                        Latency
                      </span>

                      <div className="font-['Newsreader'] text-[24px]">
                        &lt;2ms
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                        Protocol
                      </span>

                      <div className="font-['Newsreader'] text-[24px]">
                        IEC-X
                      </div>
                    </div>
                  </div>
                </div>

                {/* Protocol 2 */}
                <div className="col-span-12 md:col-span-4 p-8 bg-black text-white flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-6xl mb-6">
                    language
                  </span>

                  <h3 className="font-['Newsreader'] text-[24px] mb-4">
                    Foreign Subsidiaries
                  </h3>

                  <p className="leading-[1.6]">
                    Dynamic currency translation and local GAAP reconciliation
                    protocols for global reach.
                  </p>
                </div>

                {/* Protocol 3 */}
                <div className="col-span-12 md:col-span-6 p-12 bg-[#e2e2e2] brutalist-border">
                  <h3 className="font-['Newsreader'] text-[24px] mb-4">
                    Minority Interest
                  </h3>

                  <p className="mb-6 leading-[1.6]">
                    Precise calculation of non-controlling interests, ensuring
                    equity distribution and liability reporting align with legal
                    mandates.
                  </p>

                  <a
                    href="#"
                    className="text-[11px] uppercase tracking-[0.1em] underline flex items-center gap-2"
                  >
                    View Calculation Logic

                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>

                {/* Protocol 4 */}
                <div className="col-span-12 md:col-span-6 overflow-hidden brutalist-border">
                  <img
                    src="/financialreportingimg/consolidation-group1.png"
                    alt="Architecture"
                    className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
            <div className="bg-[#f3f3f4] p-16 brutalist-border">
              <div className="grid grid-cols-12 gap-8">
                {/* Left */}
                <div className="col-span-12 lg:col-span-4">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] block mb-4">
                    Case Study #402
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mb-8">
                    Consolidating 42 Entities in 14 Days
                  </h2>

                  <div className="space-y-4">
                    <div className="p-4 bg-[#f9f9f9] brutalist-border">
                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                        The Challenge
                      </span>

                      <p className="mt-1 leading-[1.6]">
                        Disparate ERP systems across 12 jurisdictions with no
                        unified reporting ledger.
                      </p>
                    </div>

                    <div className="p-4 bg-[#f9f9f9] brutalist-border">
                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                        The Outcome
                      </span>

                      <p className="mt-1 leading-[1.6]">
                        Audited statements produced 75% faster than the previous
                        fiscal year.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="col-span-12 lg:col-span-8">
                  <div className="h-full brutalist-border bg-[#f9f9f9] p-8">
                    <h3 className="text-[11px] uppercase tracking-[0.1em] mb-8 text-center">
                      Intervention Timeline
                    </h3>

                    <div className="flex flex-col gap-6">
                      {timeline.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-6 items-start"
                        >
                          <div className="font-['Newsreader'] text-[24px] text-[#5e5e5e]">
                            {item.number}
                          </div>

                          <div
                            className={`flex-1 ${
                              index !== timeline.length - 1
                                ? "border-b border-[#c4c7c7] pb-4"
                                : ""
                            }`}
                          >
                            <h4 className="text-[11px] uppercase tracking-[0.1em] mb-1">
                              {item.title}
                            </h4>

                            <p className="text-[#444748] leading-[1.6]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publication */}
          <section className="bg-[#1c1b1b] text-white py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left */}
                <div className="col-span-12 md:col-span-6">
                  <img
                    src="/financialreportingimg/consolidation-group3.png"
                    alt="Publication"
                    className="brutalist-border grayscale shadow-2xl"
                  />
                </div>

                {/* Right */}
                <div className="col-span-12 md:col-span-6 lg:pl-16">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#858383] block mb-4">
                    Latest Publication
                  </span>

                  <h2 className="font-['Newsreader'] text-[48px] mb-6">
                    Group Consolidation in India
                  </h2>

                  <p className="text-[18px] mb-8 opacity-80 leading-[1.6]">
                    A deep-dive analysis of the regulatory shifts in the Indian
                    subcontinent and their impact on global reporting
                    structures for multi-national conglomerates.
                  </p>

                  <button className="bg-white text-black px-8 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-[#c7c6c6] transition-colors">
                    Download Intelligence Brief
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ConsolidationGroupReporting;