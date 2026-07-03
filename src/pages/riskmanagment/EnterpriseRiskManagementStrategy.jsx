import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const EnterpriseRiskManagementStrategy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      number: "01",
      title: "ERM Framework Design",
      description:
        "Architecture of bespoke risk management systems aligned with COSO and ISO 31000 standards, integrated into core operational workflows.",
    },
    {
      number: "02",
      title: "Risk Appetite Development",
      description:
        "Quantifying organizational tolerance thresholds to provide clear guardrails for executive decision-making and capital allocation.",
    },
    {
      number: "03",
      title: "Emerging Risk Identification",
      description:
        "Utilizing proprietary signals to detect horizon threats before they materialize, ensuring institutional continuity in volatile markets.",
    },
  ];

  const stakeholders = [
    {
      icon: "corporate_fare",
      title: "Boards",
    },
    {
      icon: "account_balance",
      title: "Audit Committees",
    },
    {
      icon: "account_balance_wallet",
      title: "Financial Institutions",
    },
  ];

  const intelligence = [
    {
      type: "RISK REPORT",
      title: "ERM in India 2026: The New Regulatory Frontier",
      description:
        "Navigating the complexities of sovereign risk and institutional compliance in the sub-continent.",
      image:
        "/riskadvisoryimg/enterprise-risk2.png",
    },
    {
      type: "QUARTERLY BRIEF",
      title: "The Interconnectivity of Geopolitical Shocks",
      description:
        "How minor regional disruptions propagate through global supply chains in the 2020s.",
      image:
        "/riskadvisoryimg/enterprise-risk3.png",
    },
    {
      type: "WHITE PAPER",
      title: "Quantifying Governance: The ROI of ERM",
      description:
        "Moving beyond compliance to measure the financial value of strategic risk management.",
      image:
        "/riskadvisoryimg/enterprise-risk4.png",
    },
    {
      type: "FIRM PERSPECTIVE",
      title: "Risk as a Competitive Advantage",
      description:
        "Why the world’s most resilient firms are doubling down on sophisticated risk cultures.",
      image:
        "/riskadvisoryimg/enterprise-risk5.png",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Enterprise Risk Management (ERM) Strategy | Northrop Management
        </title>

      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <header className="relative h-[85vh] min-h-[700px] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
              <img
                src="/riskadvisoryimg/enterprise-risk.jpeg"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>

              

            </div>

            <div className="relative z-10 w-full px-8 max-w-[1280px] mx-auto">
              <div className="max-w-3xl">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white font-bold mb-6 block opacity-90">
                  ADVISORY SERVICES / 6E
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] text-white mb-8 tracking-tight">
                  Enterprise Risk Management (ERM) Strategy
                </h1>

                <p className="text-[18px] leading-relaxed text-white/95 max-w-2xl">
                  Establishing authoritative governance frameworks to transform
                  risk from a defensive burden into a strategic instrument for
                  global institutional resilience.
                </p>

                <div className="mt-12 flex items-center gap-6">
                  <button className="bg-white text-black px-10 py-5 text-[11px] uppercase tracking-[0.1em] hover:bg-[#e2e2e2] transition-all duration-300 shadow-xl">
                    Explore Framework
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-white/20"></div>
          </header>

          {/* Service Overview */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8">
              {/* What We Do */}
              <div className="col-span-12 md:col-span-7">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  What We Do
                </h2>

                <div className="space-y-6 border-t border-[#c4c7c7] pt-6">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >
                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#747878]">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="font-['Newsreader'] text-[24px] mb-2">
                          {item.title}
                        </h3>

                        <p className="text-[#444748] leading-[1.6]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stakeholders */}
              <div className="col-span-12 md:col-span-4 md:col-start-9 bg-[#f3f3f4] p-6 border border-[#c4c7c7]">
                <h2 className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-6">
                  STAKEHOLDERS
                </h2>

                <ul className="space-y-4">
                  {stakeholders.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 border-b border-[#c4c7c7] pb-2"
                    >
                      <span className="material-symbols-outlined text-black">
                        {item.icon}
                      </span>

                      <span className="font-['Newsreader'] text-[24px]">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-16">
                  <p className="italic text-[#444748] leading-[1.6]">
                    "Northrop Management provides the intellectual rigor
                    required for the highest levels of governance."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="bg-[#eeeeee] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-4 block">
                    CASE STUDY
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mb-6">
                    Board Risk Confidence
                  </h2>

                  <h3 className="font-['Newsreader'] text-[28px] italic leading-[1.4] mb-6">
                    Designing an ERM Framework That Turned the Risk Committee
                    into a Strategic Governance Body.
                  </h3>

                  <div className="grid grid-cols-3 gap-4 border-t border-[#c4c7c7] pt-6 mb-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#747878]">
                        CHALLENGE
                      </p>

                      <p className="mt-2">
                        Fragmented reporting.
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#747878]">
                        INTERVENTION
                      </p>

                      <p className="mt-2">
                        Unified taxonomy.
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#747878]">
                        OUTCOME
                      </p>

                      <p className="mt-2">
                        Strategic alignment.
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] border-b border-black py-1 hover:gap-4 transition-all">
                    READ FULL REPORT

                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>

                <div className="col-span-12 md:col-span-6 order-1 md:order-2">
                  <div className="aspect-video bg-[#2f3131] flex items-center justify-center overflow-hidden">
                    <img
                      src="/riskadvisoryimg/enterprise-risk1.png"
                      alt="Case Study"
                      className="w-full h-full object-cover grayscale brightness-75"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="flex justify-between items-end mb-16 border-b-2 border-black pb-2">
              <h2 className="font-['Newsreader'] text-[32px]">
                Latest Intelligence
              </h2>

              <a
                href="#"
                className="text-[11px] uppercase tracking-[0.1em] hover:underline"
              >
                VIEW ALL INSIGHTS
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {intelligence.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square bg-[#e2e2e2] mb-4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-2">
                    {item.type}
                  </p>

                  <h3 className="font-['Newsreader'] text-[24px] group-hover:text-[#5e5e5e] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#444748] mt-2 leading-[1.6]">
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

export default EnterpriseRiskManagementStrategy;