import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ProcessReengineeringControlOptimisation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      title: "Process Mapping",
      description:
        "Deep-tissue analysis of existing workflows to identify latent inefficiencies and structural redundancies in complex global operations.",
    },
    {
      title: "Control Rationalisation",
      description:
        "A lean approach to risk management, auditing and eliminating non-critical controls while strengthening essential protective layers.",
    },
    {
      title: "Automation Identification",
      description:
        "Deploying intelligence to pinpoint high-volume, repetitive tasks suitable for algorithmic replacement and process automation.",
    },
  ];

  const audiences = [
    {
      icon: "account_balance",
      title: "Chief Financial Officers",
      description:
        "Strategic alignment of finance functions with institutional growth objectives.",
    },
    {
      icon: "settings_suggest",
      title: "Chief Operating Officers",
      description:
        "Streamlining enterprise-wide operations for maximum throughput and accuracy.",
    },
    {
      icon: "fact_check",
      title: "Internal Audit Functions",
      description:
        "Developing rigorous control environments that resist external volatility.",
    },
  ];

  const insights = [
    {
      type: "RESEARCH PAPER",
      title:
        "Lean Controls: Eliminating Unnecessary Controls Without Increasing Risk",
    },
    {
      type: "GLOBAL RISK",
      title:
        "Algorithmic Auditing: The New Frontier of Internal Control",
    },
    {
      type: "WHITE PAPER",
      title:
        "COSO Framework Adaptation for Distributed Finance Teams",
    },
    {
      type: "TREND REPORT",
      title:
        "Hyper-automation: Identifying High-ROI Process Candidates",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Process Re-engineering & Control Optimisation | Northrop Management
        </title>

     
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
              <img
                src="/riskadvisoryimg/process-reengineering.jpeg"
                alt="Hero"
                className="w-full h-full object-cover "
              />
<div className="absolute inset-0 bg-black/40"></div>
       
            </div>

            <div className="relative z-10 w-full px-8 max-w-[1280px] mx-auto">
              <div className="max-w-4xl">
                <span className="inline-block mb-4 text-[11px] uppercase tracking-[0.3em] text-white opacity-90">
                  Institutional Advisory
                </span>

                <h1 className="font-['Newsreader'] text-[64px] md:text-[72px] text-white leading-[1.05] mb-6">
                  Process Re-engineering & Control Optimisation
                </h1>

                <p className="text-[20px] text-white/95 max-w-2xl leading-relaxed mb-10">
                  Precision-engineered frameworks for global financial
                  operations and risk management. Enhancing structural integrity
                  through mathematical rigour.
                </p>

                <div className="flex flex-wrap gap-6">
                  <button className="bg-white text-black px-10 py-5 text-[11px] uppercase tracking-[0.1em] hover:bg-[#eeeeee] transition-all duration-300 shadow-xl">
                    Request Consultation
                  </button>

                  <button className="border border-white/50 text-white px-10 py-5 text-[11px] uppercase tracking-[0.1em] hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                    Our Methodology
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Capabilities + Audience */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8">
              {/* Left */}
              <div className="col-span-12 md:col-span-7">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-4 block">
                  CORE CAPABILITIES
                </span>

                <h2 className="font-['Newsreader'] text-[32px] mb-16">
                  Architecting Operational Efficiency
                </h2>

                <div className="space-y-12">
                  {capabilities.map((item, index) => (
                    <div
                      key={index}
                      className="pb-6 border-b border-[#c4c7c7]"
                    >
                      <h3 className="font-['Newsreader'] text-[24px] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-[#444748] max-w-xl leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="col-span-12 md:col-span-4 md:col-start-9 bg-[#f3f3f4] p-10 border border-[#c4c7c7] h-fit">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-6 block">
                  TARGET AUDIENCE
                </span>

                <ul className="space-y-6">
                  {audiences.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <span className="material-symbols-outlined text-black mt-1">
                        {item.icon}
                      </span>

                      <div>
                        <p className="font-bold">{item.title}</p>

                        <p className="text-sm text-[#444748] leading-[1.6]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-12 border-t border-[#c4c7c7]">
                  <p className="font-['Newsreader'] text-[18px] italic text-[#5e5e5e] mb-6 leading-[1.6]">
                    "Northrop's methodology transformed our close cycle from a
                    manual burden into a strategic asset."
                  </p>

                  <p className="text-[11px] uppercase tracking-[0.1em]">
                    — MANAGING DIRECTOR, GLOBAL EQUITY
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="bg-[#e2e2e2] py-[120px]">
            <div className="px-8 max-w-[1280px] mx-auto">
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left */}
                <div className="col-span-12 md:col-span-5 mb-6 md:mb-0">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-4 block">
                    SELECTED INTERVENTION
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mb-6">
                    40% Reduction in Financial Close Time
                  </h2>

                  <p className="text-[18px] text-[#444748] mb-6 leading-[1.6]">
                    Through systematic process re-engineering, we identified and
                    neutralized 12 operational bottlenecks, freeing over 200
                    finance hours per month for a Tier-1 investment firm.
                  </p>

                  <div className="flex gap-8">
                    <div>
                      <p className="text-3xl font-['Newsreader']">40%</p>

                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#747878]">
                        TIME SAVING
                      </p>
                    </div>

                    <div>
                      <p className="text-3xl font-['Newsreader']">2.4k</p>

                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#747878]">
                        ANNUAL HOURS
                      </p>
                    </div>
                  </div>

                  <button className="mt-12 border border-black px-8 py-3 text-[11px] uppercase tracking-[0.1em] hover:bg-black hover:text-white transition-all duration-300">
                    Read Full Case Study
                  </button>
                </div>

                {/* Right */}
                <div className="col-span-12 md:col-span-7 aspect-video bg-[#2f3131] overflow-hidden">
                  <img
                    src="/riskadvisoryimg/process-reengineering1.jpeg"
                    alt="Case Study"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Insights */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-4 block">
                  INSIGHTS
                </span>

                <h2 className="font-['Newsreader'] text-[32px]">
                  Latest Intelligence
                </h2>
              </div>

              <a
                href="#"
                className="text-[11px] uppercase tracking-[0.1em] border-b border-black pb-1"
              >
                View All Analysis
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {insights.map((item, index) => (
                <div
                  key={index}
                  className="group border border-[#c4c7c7] p-8 flex flex-col h-full bg-white hover:border-black transition-colors duration-300"
                >
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-4">
                    {item.type}
                  </span>

                  <h3 className="font-['Newsreader'] text-[24px] mb-6 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-auto pt-6">
                    <span className="material-symbols-outlined text-[#747878] group-hover:text-black group-hover:translate-x-2 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-[120px] px-8 bg-black text-white">
            <div className="max-w-[1280px] mx-auto text-center">
              <h2 className="font-['Newsreader'] text-[32px] mb-6">
                Optimise Your Institutional Framework
              </h2>

              <p className="text-[18px] text-[#c8c6c5] max-w-2xl mx-auto mb-12 leading-[1.6]">
                Consult with our advisors to audit your current process
                landscape and identify structural optimisations.
              </p>

              <button className="bg-white text-black px-12 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-[#e2e2e2] transition-colors">
                Connect with the Advisory Team
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProcessReengineeringControlOptimisation;