import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const GovernanceComplianceRCSA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const frameworkItems = [
    {
      title: "RCSA Framework Design",
      description:
        "Custom protocols for internal risk identification and control mapping.",
    },
    {
      title: "Independent Board Reviews",
      description:
        "Objective assessments of board performance and committee efficacy.",
    },
    {
      title: "Corporate Governance Health Checks",
      description:
        "Audits of compliance culture and structural governance gaps.",
    },
  ];

  const stakeholders = [
    {
      icon: "corporate_fare",
      title: "Listed Company Boards",
    },
    {
      icon: "account_balance",
      title: "Financial Institutions",
    },
    {
      icon: "family_history",
      title: "Global Family Businesses",
    },
  ];

  const publications = [
    {
      type: "Whitepaper",
      title: "Board Governance in India 2026",
      description:
        "A projection of regulatory shifts and the rising accountability of independent directors.",
    },
    {
      type: "Report",
      title: "The RCSA Implementation Manual",
      description:
        "Technical guidelines for internal compliance heads on mapping organizational risk.",
    },
    {
      type: "Briefing",
      title: "Family Office Compliance Gaps",
      description:
        "Identifying structural vulnerabilities in multi-generational wealth vehicles.",
    },
    {
      type: "Journal",
      title: "Digital Governance & Ethics",
      description:
        "Navigating board-level oversight in the age of algorithmic decision making.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Governance & Compliance Self-Assessment (RCSA) | Northrop Management
        </title>
       
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0">
              <img
                src="/riskadvisoryimg/governance-compliance.png"
                alt="Hero"
                className="w-full h-full object-cover grayscale contrast-125 brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>

              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl">
              <p className="text-[11px] uppercase tracking-[0.6em] text-white mb-8 opacity-90">
                Service Sheet 6H
              </p>

              <h1 className="font-['Newsreader'] text-[48px] md:text-7xl text-white mb-10 leading-[1.05] max-w-4xl mx-auto">
                Governance & Compliance Self-Assessment (RCSA)
              </h1>

              <div className="w-24 h-[2px] bg-white mx-auto mb-10 opacity-80"></div>

              <p className="text-[18px] text-white max-w-2xl mx-auto leading-relaxed">
                Systematic identification and evaluation of institutional risk
                controls for global enterprises.
              </p>
            </div>
          </section>

          {/* Framework + Stakeholders */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px] grid grid-cols-12 gap-8">
            {/* Left */}
            <div className="col-span-12 md:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4">
                The Framework
              </p>

              <h2 className="font-['Newsreader'] text-[32px] mb-6">
                Institutional Oversight.
              </h2>

              <div className="space-y-4">
                <div className="border-t border-[#c4c7c7] pt-4">
                  <p className="text-[18px] leading-[1.6] text-[#444748]">
                    We implement comprehensive Risk Control Self-Assessment
                    (RCSA) frameworks designed for high-stakes environments
                    where compliance is a strategic advantage rather than a
                    regulatory burden.
                  </p>
                </div>

                <ul className="space-y-4 pt-6">
                  {frameworkItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-black mt-1">
                        check_circle
                      </span>

                      <div>
                        <span className="font-semibold block">
                          {item.title}
                        </span>

                        <span className="text-[#444748] leading-[1.6]">
                          {item.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 bg-[#f3f3f4] p-10 border border-[#c4c7c7] flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4">
                Stakeholders
              </p>

              <h3 className="font-['Newsreader'] text-[24px] mb-6">
                Designed for high-complexity entities requiring formal
                governance protocols.
              </h3>

              <ul className="space-y-6">
                {stakeholders.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full border border-[#747878] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#1a1c1c] text-lg">
                        {item.icon}
                      </span>
                    </div>

                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Case Study */}
          <section className="bg-[#eeeeee] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left */}
                <div className="col-span-12 md:col-span-5 order-2 md:order-1">
                  <p className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4">
                    Case Study: Capital Markets Transition
                  </p>

                  <h2 className="font-['Newsreader'] text-[32px] mb-6">
                    Governance Transformation Ahead of IPO
                  </h2>

                  <p className="text-[18px] italic leading-[1.6] text-[#444748] mb-8">
                    "Building Board-Ready Governance for a Rs.1,500 Cr Pre-IPO
                    Company."
                  </p>

                  <div className="grid grid-cols-2 gap-6 border-t border-[#c4c7c7] pt-8">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                        The Challenge
                      </p>

                      <p>
                        Legacy informal structures incompatible with public
                        market regulatory requirements and investor scrutiny.
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                        The Intervention
                      </p>

                      <p>
                        Implemented a modular RCSA framework and restructured
                        the board to include Tier-1 independent directors.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <button className="text-[11px] uppercase tracking-[0.1em] border-b border-black pb-1 hover:text-[#5e5e5e] transition-colors">
                      Read Full Intervention
                    </button>
                  </div>
                </div>

                {/* Right */}
                <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2">
                  <div className="aspect-square bg-[#1c1b1b] p-1 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-[#e2e2e2] border border-[#c4c7c7] flex items-center justify-center">
                      <div className="w-4/5 space-y-4">
                        <div className="flex justify-between items-end h-32 gap-2">
                          <div className="bg-[#747878] w-full h-1/4"></div>
                          <div className="bg-[#747878] w-full h-2/4"></div>
                          <div className="bg-[#747878] w-full h-3/4"></div>
                          <div className="bg-black w-full h-full"></div>
                        </div>

                        <div className="h-px bg-[#c4c7c7] w-full"></div>

                        <div className="flex justify-between text-[11px] uppercase tracking-[0.1em]">
                          <span>Q1 Pre-IPO</span>
                          <span>Q4 Compliance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4">
                  Intellectual Capital
                </p>

                <h2 className="font-['Newsreader'] text-[32px]">
                  Latest Intelligence
                </h2>
              </div>

              <button className="text-[11px] uppercase tracking-[0.1em] text-black border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
                View All Research
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {publications.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col border-t border-[#c4c7c7] pt-6 group"
                >
                  <p className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-3">
                    {item.type}
                  </p>

                  <h3 className="font-['Newsreader'] text-[24px] mb-4 group-hover:text-[#5e5e5e] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#444748] flex-grow mb-6 leading-[1.6]">
                    {item.description}
                  </p>

                  <span className="material-symbols-outlined text-black text-3xl group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-[1280px] mx-auto px-8 pb-[120px]">
            <div className="bg-black text-white p-20 text-center flex flex-col items-center">
              <h2 className="font-['Newsreader'] text-[32px] mb-6 max-w-2xl">
                Refine your institutional oversight with a professional
                assessment.
              </h2>

              <button className="bg-white text-black px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#e3e2e2] transition-colors">
                Consult an Advisor
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GovernanceComplianceRCSA;