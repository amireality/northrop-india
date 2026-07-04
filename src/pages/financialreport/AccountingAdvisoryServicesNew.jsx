import React from "react";
import { Helmet } from "react-helmet-async";

const AccountingAdvisoryServicesNew = () => {
  const protocols = [
    {
      icon: "corporate_fare",
      title: "M&A Strategy",
      description:
        "Complex purchase price allocations, carve-out financials, and post-merger integration of reporting frameworks.",
    },
    {
      icon: "rule",
      title: "New Standards",
      description:
        "Implementation roadmaps for Ind AS, IFRS, and US GAAP shifts, ensuring compliance and operational continuity.",
    },
    {
      icon: "account_balance_wallet",
      title: "Revenue Recognition",
      description:
        "Technical evaluation of complex contract structures under IFRS 15 and ASC 606 standards.",
    },
    {
      icon: "analytics",
      title: "Financial Instruments",
      description:
        "Valuation and reporting for debt-equity hybrids, derivatives, and structured finance instruments.",
    },
  ];

  const stakeholders = [
    {
      title: "CHIEF FINANCIAL OFFICERS",
      text: "Seeking to mitigate reporting risks during organizational expansion or public listings.",
    },
    {
      title: "AUDIT COMMITTEES",
      text: "Requiring independent technical perspectives on high-judgment accounting areas.",
    },
    {
      title: "INVESTMENT TEAMS",
      text: "Evaluating target financial quality through the lens of rigorous accounting scrutiny.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Accounting Advisory Services (AAS) | Northrop Management
        </title>

      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-[819px] flex items-end bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="/financialreportingimg/accounting-advisory.png"
                alt="Brutalist Architecture"
                className="w-full h-full object-cover grayscale opacity-50 contrast-125"
              />
            </div>

            <div className="relative z-10 w-full px-8 py-[120px] max-w-[1280px] mx-auto">
              <div className="max-w-3xl">
                <span className="text-[11px] uppercase tracking-[0.1em] text-white mb-4 block font-semibold">
                  ADVISORY SERVICES
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-tight text-white mb-6">
                  Accounting Advisory Services (AAS)
                </h1>

                <p className="text-[18px] leading-[1.6] text-white/80 max-w-xl">
                  Strategic technical accounting frameworks designed for global
                  organizations navigating complex regulatory shifts and
                  structural transformations.
                </p>
              </div>
            </div>
          </section>

          {/* Advisory Protocols */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 md:col-span-4">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Advisory Protocols
                </h2>

                <div className="horizontal-rule mb-6"></div>

                <p className="text-[#444748] leading-[1.6]">
                  Precision-engineered solutions for high-stakes financial
                  reporting environments.
                </p>
              </div>

              <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {protocols.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-[#f3f3f4] brutalist-border"
                  >
                    <span className="material-symbols-outlined text-black mb-4 block">
                      {item.icon}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[#444748] leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stakeholders */}
          <section className="bg-black text-white py-[120px]">
            <div className="px-8 max-w-[1280px] mx-auto">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 md:col-span-6">
                  <img
                    src="/financialreportingimg/accounting-advisory1.png"
                    alt="Institutional Context"
                    className="w-full aspect-[4/3] object-cover grayscale opacity-80"
                  />
                </div>

                <div className="col-span-12 md:col-span-5 md:ml-auto">
                  <h2 className="font-['Newsreader'] text-[32px] mb-6">
                    Strategic Stakeholders
                  </h2>

                  <div className="space-y-6">
                    {stakeholders.map((item, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-white pl-6"
                      >
                        <h4 className="text-[11px] tracking-[0.1em] uppercase opacity-60 mb-2 font-semibold">
                          {item.title}
                        </h4>

                        <p className="text-[18px] leading-[1.6]">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
            <div className="bg-[#f3f3f4] p-12 brutalist-border">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                <div>
                  <span className="text-[11px] tracking-[0.1em] uppercase text-[#5e5e5e] font-semibold">
                    Case Study
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mt-2">
                    Rs.400 Cr Revenue Recognition Dilemma
                  </h2>
                </div>

                <Link to={"/contact"}>
                  <button className="mt-6 md:mt-0 border border-black px-6 py-4 text-[11px] tracking-[0.1em] uppercase hover:bg-black hover:text-white transition-all">
                    Download Full Report
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-[11px] tracking-[0.1em] uppercase mb-4 text-[#5e5e5e] font-semibold">
                    THE CHALLENGE
                  </h4>

                  <p className="leading-[1.6]">
                    A multi-national conglomerate faced conflicting
                    interpretations of Ind AS 115 regarding performance
                    obligations in high-value, long-term construction contracts
                    totaling Rs.400 Crore.
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] tracking-[0.1em] uppercase mb-4 text-[#5e5e5e] font-semibold">
                    THE INTERVENTION
                  </h4>

                  <p className="leading-[1.6]">
                    Northrop AAS deployed a specialized technical task force to
                    re-examine contract architecture, identifying distinct
                    performance obligations and establishing a granular
                    transaction price allocation model.
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] tracking-[0.1em] uppercase mb-4 text-[#5e5e5e] font-semibold">
                    THE OUTCOME
                  </h4>

                  <p className="leading-[1.6]">
                    Seamless audit clearance, zero restatements, and a
                    standardized reporting protocol now used across the group's
                    infrastructure division, enhancing earnings predictability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Publication */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto bg-white">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/financialreportingimg/accounting-advisory3.png"
                  alt="Publication Cover"
                  className="w-full aspect-[3/4] object-cover grayscale brutalist-border"
                />
              </div>

              <div className="col-span-12 md:col-span-7 md:ml-auto flex flex-col justify-center">
                <span className="text-[11px] tracking-[0.1em] uppercase text-[#5e5e5e] mb-4 font-semibold">
                  LATEST PUBLICATION
                </span>

                <h2 className="font-['Newsreader'] text-[48px] mb-6 leading-tight">
                  Top 10 Ind AS Questions: A Guide for Boards
                </h2>

                <p className="text-[18px] leading-[1.6] mb-6">
                  An essential brief for board members and executive leadership
                  on the critical areas of Ind AS implementation and oversight
                  in the current fiscal year.
                </p>

                <div className="flex items-center gap-6 flex-wrap">
                  <Link to={"/insights"}
                    className="text-[11px] tracking-[0.1em] uppercase flex items-center gap-2 hover:underline"
                  >
                    Read Article

                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </Link>

                  <span className="text-[#c4c7c7]">|</span>

                  <span className="text-[11px] tracking-[0.1em] uppercase text-[#5e5e5e]">
                    12 Min Read
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AccountingAdvisoryServicesNew;