import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const RiskBasedInternalAudit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stakeholders = [
    {
      icon: "corporate_fare",
      text: "Listed companies navigating complex regulatory mandates.",
    },
    {
      icon: "account_balance",
      text: "PE portfolio companies preparing for exit or expansion.",
    },
    {
      icon: "domain",
      text: "Large private businesses institutionalizing governance.",
    },
  ];

  const services = [
    {
      title: "01. Risk Universe Development",
      description:
        "Defining the complete landscape of auditable entities and strategic risks specific to your industry and operational footprint.",
    },
    {
      title: "02. Annual Audit Planning",
      description:
        "Dynamic scheduling that prioritizes high-impact areas, ensuring resource allocation follows the risk curve rather than a fixed cycle.",
    },
    {
      title: "03. Execution & Assurance",
      description:
        "Rigorous testing methodologies that evaluate the design and operating effectiveness of controls in real-world scenarios.",
    },
    {
      title: "04. Root Cause Analysis",
      description:
        "Going beyond the 'finding' to identify systemic weaknesses, providing management with actionable intelligence for long-term remediation.",
    },
  ];

  const insights = [
    {
      type: "Regional Focus",
      title: "The Future of Internal Audit in India",
      description:
        "Navigating the evolving regulatory landscape of SEBI and the growing demand for tech-enabled assurance in the subcontinent.",
      image:
        "/riskadvisoryimg/risk-based2.png",
    },
    {
      type: "Risk Report",
      title: "Cybersecurity as an Audit Mandate",
      description:
        "Why the audit plan must integrate deep technical vulnerability assessments to protect shareholder value in 2024.",
      image:
        "/riskadvisoryimg/risk-based3.png",
    },
    {
      type: "Governance",
      title: "ESG Assurance Strategies",
      description:
        "Moving beyond reporting to auditing the actual environmental and social impact controls within the supply chain.",
      image:
        "/riskadvisoryimg/risk-based4.png",
    },
    {
      type: "Whitepaper",
      title: "Continuous Monitoring Frameworks",
      description:
        "Leveraging AI to transition from periodic audit cycles to always-on assurance and risk detection.",
      image:
        "/riskadvisoryimg/risk-based5.png",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Risk-Based Internal Audit (RBIA) | Northrop Management
        </title>

        
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-[90vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="/riskadvisoryimg/risk-based.png"
                alt="Hero"
                className="w-full h-full object-cover grayscale contrast-125 brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
              <div className="max-w-3xl">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white mb-4 block opacity-90 text-shadow-strong">
                  Advisory Services | 6A
                </span>

                <h1 className="font-['Newsreader'] text-[48px] text-white mb-8 leading-[1.05] text-shadow-strong">
                  Risk-Based Internal Audit (RBIA)
                </h1>

                <p className="text-[18px] text-white/95 max-w-2xl leading-relaxed text-shadow-strong">
                  Elevating internal audit from a compliance function to a
                  strategic asset. We align organizational assurance with the
                  board's most critical risk priorities.
                </p>

                <div className="mt-12 flex gap-4">
                  <button className="bg-white text-black text-[11px] uppercase tracking-[0.1em] px-10 py-5 hover:bg-[#dadada] transition-all duration-300 hover:-translate-y-0.5">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stakeholders + Services */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="grid grid-cols-12 gap-8">
              {/* Left */}
              <div className="col-span-12 md:col-span-4 border-r border-[#c4c7c7] pr-8">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Target Stakeholders
                </h2>

                <p className="text-[#444748] mb-8 leading-[1.6]">
                  Our RBIA framework is engineered for entities requiring
                  sophisticated risk oversight and institutional transparency.
                </p>

                <ul className="space-y-4 pt-4">
                  {stakeholders.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-black">
                        {item.icon}
                      </span>

                      <span className="leading-[1.6]">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div className="col-span-12 md:col-span-8">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Service Portfolio
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                  {services.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-[11px] uppercase tracking-[0.1em] mb-4 text-black font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-[#444748] leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="bg-[#f3f3f4] py-[120px] border-y border-[#c4c7c7]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left */}
                <div className="col-span-12 md:col-span-6">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4 block">
                    Case Study
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mb-6">
                    From Compliance Audit to Strategic Assurance
                  </h2>

                  <p className="font-['Newsreader'] text-[28px] italic text-[#444748] mb-8 leading-[1.4]">
                    "Transforming a global manufacturer's audit program from a
                    check-the-box exercise into a board-level value driver."
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-2 border-black pl-6">
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-black">
                        The Challenge
                      </h4>

                      <p className="mt-2 leading-[1.6]">
                        A legacy audit function focused on historical spend
                        rather than emerging supply chain risks.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#747878] pl-6">
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-black">
                        The Intervention
                      </h4>

                      <p className="mt-2 leading-[1.6]">
                        Implementation of a real-time Risk-Based Internal Audit
                        framework targeting ESG and logistics vulnerabilities.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#747878] pl-6">
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-black">
                        The Outcome
                      </h4>

                      <p className="mt-2 leading-[1.6]">
                        35% reduction in operational disruption events and
                        direct commendation from the Audit Committee chair.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="col-span-12 md:col-span-6">
                  <div className="aspect-square bg-white border border-[#c4c7c7] p-8">
                    <img
                      src="/riskadvisoryimg/risk-based1.png"
                      alt="Case Study"
                      className="w-full h-full object-cover grayscale brightness-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2 block">
                  Insights
                </span>

                <h2 className="font-['Newsreader'] text-[32px]">
                  Latest Intelligence
                </h2>
              </div>

              <a
                href="#"
                className="text-[11px] uppercase tracking-[0.1em] text-black border-b border-black pb-1"
              >
                View All Reports
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {insights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col group cursor-pointer"
                >
                  <div className="aspect-[4/3] bg-[#e2e2e2] mb-4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                    {item.type}
                  </span>

                  <h3 className="font-['Newsreader'] text-[24px] mb-3 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#444748] line-clamp-3 leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default RiskBasedInternalAudit;