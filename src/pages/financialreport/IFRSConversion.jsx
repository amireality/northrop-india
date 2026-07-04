import { Link } from 'react-router-dom';
import React from "react";
import { Helmet } from "react-helmet-async";

const IFRSConversion = () => {
  return (
    <>
      <Helmet>
        <title>
          Northrop Management | IFRS, Ind AS & US GAAP Conversion
        </title>

      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter']">
        <main>
          {/* Hero Section */}
          <section className="relative h-[819px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="/financialreportingimg/ifrs-conversion.jpeg"
                alt="Hero"
                className="w-full h-full object-cover"
              />


              <div className="absolute inset-0 bg-black/40"></div>

            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
              <div className="max-w-2xl">
                <span className="text-[11px] tracking-[0.1em] uppercase text-[#ffff] mb-4 block font-semibold">
                  GLOBAL ACCOUNTING ADVISORY
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] text-white mb-6">
                  IFRS, Ind AS & US GAAP Conversion
                </h1>

                <p className="text-[18px] leading-[1.6] text-[#c8c6c5] max-w-lg">
                  Authoritative frameworks for global financial alignment. We
                  navigate the complexities of cross-border reporting with
                  mathematical precision.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Protocols */}
          <section className="py-[120px] max-w-[1280px] mx-auto px-8">
            <div className="border-b border-[#c4c7c7] pb-6 mb-16">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2]">
                Technical Protocols
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  phase: "PHASE 01",
                  title: "Impact Assessment",
                  desc: "Identification of accounting gaps, data requirements, and tax implications across jurisdictional boundaries. A comprehensive diagnostic of the current reporting ecosystem.",
                },
                {
                  phase: "PHASE 02",
                  title: "Policy Design",
                  desc: "Development of standardized accounting policies and internal control frameworks. Drafting of technical memorandums to support key management judgments.",
                },
                {
                  phase: "PHASE 03",
                  title: "Dual Reporting",
                  desc: "Execution of comparative financial statements and transitional disclosures. Ensuring absolute fidelity between local compliance and global mandates.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-l border-[#c4c7c7] pl-6 pt-4"
                >
                  <div className="text-[11px] tracking-[0.1em] uppercase text-[#5e5e5e] mb-4 font-semibold">
                    {item.phase}
                  </div>

                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#444748] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Who It's For */}
          <section className="bg-[#f3f3f4] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 md:col-span-5">
                  <span className="text-[11px] tracking-[0.1em] uppercase text-[#5e5e5e] mb-4 block font-semibold">
                    TARGET SEGMENTS
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] mb-8">
                    Strategic Mandates for Conversion
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <span className="material-symbols-outlined text-black mt-1">
                        account_balance
                      </span>

                      <div>
                        <h4 className="font-bold text-black mb-1">
                          IPO Candidates
                        </h4>

                        <p className="text-[#444748] text-[15px] leading-[1.6]">
                          Ensuring financial records meet the rigorous standards
                          of global exchanges and sophisticated institutional
                          investors.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <span className="material-symbols-outlined text-black mt-1">
                        public
                      </span>

                      <div>
                        <h4 className="font-bold text-black mb-1">
                          MNC Subsidiaries
                        </h4>

                        <p className="text-[#444748] text-[15px] leading-[1.6]">
                          Aligning local books with parent-entity reporting
                          requirements under US GAAP or IFRS frameworks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-7">
                  <div className="aspect-video bg-white relative overflow-hidden border border-[#c4c7c7]">
                    <img
                      src="/financialreportingimg/ifrs-conversion2.png"
                      alt="Building"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="py-[120px] max-w-[1280px] mx-auto px-8">
            <div className="bg-white border border-[#c4c7c7] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 border-b md:border-b-0 md:border-r border-[#c4c7c7]">
                  <span className="text-[11px] tracking-[0.1em] uppercase text-[#5e5e5e] mb-4 block font-semibold">
                    CASE STUDY : 044
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] mb-6">
                    Ind AS Transition for Rs.2,000 Cr Diversified Group
                  </h2>

                  <p className="text-[18px] italic leading-[1.6] text-[#444748] mb-8">
                    "A paradigm shift in institutional reporting, moving from
                    traditional local GAAP to a fair-value oriented framework."
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-[11px] tracking-[0.1em] uppercase text-black font-semibold">
                        SCALE
                      </div>

                      <div className="font-['Newsreader'] text-[24px]">
                        2,000 Cr
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] tracking-[0.1em] uppercase text-black font-semibold">
                        TIMELINE
                      </div>

                      <div className="font-['Newsreader'] text-[24px]">
                        8 Months
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-12 bg-[#eeeeee]">
                  <div className="space-y-8">
                    <div>
                      <h5 className="text-[11px] tracking-[0.1em] uppercase mb-2 font-semibold">
                        THE CHALLENGE
                      </h5>

                      <p className="text-[15px] leading-[1.6]">
                        Complex cross-holdings and legacy asset valuations
                        required a fundamental re-engineering of the balance
                        sheet structure under Ind AS 101.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[11px] tracking-[0.1em] uppercase mb-2 font-semibold">
                        THE INTERVENTION
                      </h5>

                      <p className="text-[15px] leading-[1.6]">
                        Deployed automated reconciliation engines to handle
                        high-volume data transition while providing technical
                        advisory on financial instrument fair valuation.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[11px] tracking-[0.1em] uppercase mb-2 font-semibold">
                        THE OUTCOME
                      </h5>

                      <p className="text-[15px] leading-[1.6]">
                        Seamless first-time adoption with zero material findings
                        during subsequent statutory audits. Enhanced
                        transparency for international creditors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publication Section */}
          <section className="py-[120px] bg-[#f3f3f4]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-4 bg-black text-white p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] tracking-[0.1em] uppercase text-[#858383] mb-4 block font-semibold">
                      LATEST PUBLICATION
                    </span>

                    <h2 className="font-['Newsreader'] text-[32px] leading-tight">
                      Ind AS at Scale: A Global Perspective
                    </h2>
                  </div>

                  <Link to={"/contact"}>
                    <button className="border border-white text-white text-[11px] tracking-[0.1em] uppercase py-4 mt-8 hover:bg-white hover:text-black transition-colors">
                      Download Report
                    </button>
                  </Link>
                </div>

                <div className="col-span-12 md:col-span-8">
                  <div className="h-full bg-white border border-[#c4c7c7] p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-['Newsreader'] text-[24px] mb-4">
                        Insight Summary
                      </h3>

                      <p className="text-[#444748] mb-6 leading-[1.6]">
                        Our research explores the convergence between Ind AS and
                        IFRS, focusing on high-impact areas like Leases (Ind AS
                        116) and Financial Instruments (Ind AS 109).
                      </p>

                      <ul className="space-y-2">
                        {[
                          "Valuation Methodologies",
                          "Control Assessments",
                          "Disclosure Optimization",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2 text-[11px] tracking-[0.1em] uppercase font-semibold"
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              arrow_forward
                            </span>

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative aspect-[3/4] border border-[#c4c7c7] bg-[#eeeeee] p-8">
                      <div className="h-full border border-[#747878] flex flex-col justify-center items-center text-center p-4 relative">
                        <div className="font-['Newsreader'] text-[24px] mb-2">
                          Ind AS
                        </div>

                        <div className="w-12 h-[1px] bg-black mb-2"></div>

                        <div className="text-[11px] tracking-[0.1em] uppercase font-semibold">
                          AT SCALE
                        </div>

                        <div className="absolute bottom-4 right-4 opacity-10">
                          <span className="material-symbols-outlined text-[64px]">
                            menu_book
                          </span>
                        </div>
                      </div>
                    </div>
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

export default IFRSConversion;