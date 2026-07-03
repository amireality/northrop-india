import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const RedFlagForensicRiskAssessment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      number: "01.01",
      title: "Desktop review",
      description:
        "Comprehensive analysis of public records, litigation history, and regulatory filings to establish a baseline risk profile across jurisdictions.",
    },
    {
      number: "01.02",
      title: "Bank statement analysis",
      description:
        "Forensic examination of cash flows and transaction patterns to detect anomalies, hidden liabilities, or round-tripping activities.",
    },
    {
      number: "01.03",
      title: "Promoter background checks",
      description:
        "Deep-dive reputational intelligence into key principals to identify undisclosed conflicts of interest or prior integrity failures.",
    },
  ];

  const audience = [
    {
      icon: "account_balance",
      title: "PE/VC investors",
      description:
        "Critical pre-investment due diligence to protect portfolios from reputational and financial contagion.",
    },
    {
      icon: "payments",
      title: "Lenders",
      description:
        "Independent risk verification for asset-based lending and complex structural financing transactions.",
    },
  ];

  const publications = [
    {
      type: "Risk Report",
      title: "The Red Flag Playbook: 25 Warning Signs",
      description:
        "A definitive guide for investment committees on identifying subtle forensic anomalies.",
      image:
        "/duediligence/duediligence.jpeg",
    },
    {
      type: "Analysis",
      title: "Forensic Trends in Emerging Markets",
      description:
        "Examining the evolution of corporate governance failures in growth economies.",
      image:
        "/duediligence/duediligence1.jpeg",
    },
    {
      type: "Global Risk",
      title: "Cross-Border Litigation Landscapes",
      description:
        "Strategic implications of recent legal shifts on asset recovery efforts.",
      image:
        "/duediligence/duediligence2.jpeg",
    },
    {
      type: "Whitepaper",
      title: "Integrity in Private Equity",
      description:
        "Building a framework for rapid ethics-based due diligence in competitive bids.",
        image:
        "/duediligence/duediligence3.jpeg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Red Flag & Forensic Risk Assessment | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,700;1,6..72,400&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <style>
          {`
            body {
              background-color: #f9f9f9;
              color: #1a1c1c;
              font-family: 'Inter', sans-serif;
              -webkit-font-smoothing: antialiased;
            }

            .material-symbols-outlined {
              font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' 24;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative min-h-[819px] flex items-center overflow-hidden bg-black text-white">
            <div className="absolute inset-0">
              <img
                src="/red-flag-forensic-risk-assessment.jpeg"
                alt="Hero"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-8">
                <span className="text-[11px] uppercase tracking-[0.1em] mb-4 block text-[#c7c6c6]">
                  Institutional Risk Intelligence
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-none mb-6 max-w-3xl">
                  Red Flag & Forensic Risk Assessment
                </h1>

                <p className="text-[18px] leading-[1.6] max-w-2xl text-[#e2e2e2]">
                  Rapid, targeted intelligence to identify deal-breaking risks
                  before signing.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-[120px] bg-[#f9f9f9]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="flex items-baseline gap-4 mb-16 border-b border-[#c4c7c7] pb-4">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                  Section 01
                </span>

                <h2 className="font-['Newsreader'] text-[32px] uppercase">
                  What We Do
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="border-t border-black pt-4">
                      <span className="text-[11px] uppercase tracking-[0.1em] text-black block mb-2">
                        {service.number}
                      </span>

                      <h3 className="font-['Newsreader'] text-[24px] mb-4">
                        {service.title}
                      </h3>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-[120px] bg-[#f3f3f4]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 md:col-span-5">
                  <div className="flex items-baseline gap-4 mb-6 border-b border-[#c4c7c7] pb-4">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                      Section 02
                    </span>

                    <h2 className="font-['Newsreader'] text-[32px] uppercase">
                      Who It's For
                    </h2>
                  </div>

                  <p className="text-[18px] leading-[1.6] text-[#444748] mb-6">
                    Designed for capital allocators who require
                    institutional-grade speed and precision in high-stakes
                    environments.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-6 md:col-start-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {audience.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#c4c7c7] p-8 aspect-square flex flex-col justify-between"
                    >
                      <span className="material-symbols-outlined text-black text-4xl">
                        {item.icon}
                      </span>

                      <div>
                        <h4 className="font-['Newsreader'] text-[24px] mb-2">
                          {item.title}
                        </h4>

                        <p className="text-[15px] leading-[1.6] text-[#444748]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="flex items-baseline gap-4 mb-16 border-b border-[#c4c7c7] pb-4">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                  Section 03
                </span>

                <h2 className="font-['Newsreader'] text-[32px] uppercase">
                  Case Study
                </h2>
              </div>

              <div className="bg-[#eeeeee] border border-[#c4c7c7] grid grid-cols-1 md:grid-cols-12 overflow-hidden">
                <div className="md:col-span-6 p-12 flex flex-col justify-center">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-black block mb-4">
                    The Outcome
                  </span>

                  <h3 className="font-['Newsreader'] text-[32px] italic mb-6">
                    "Saved from a Rs.300 Cr Fraud"
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h5 className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                        The Intervention
                      </h5>

                      <p className="text-[15px] leading-[1.6] text-black">
                        Northrop was engaged 48 hours before signing. Our
                        forensic team identified sophisticated revenue
                        manipulation indicators through bank statement
                        reconciliation that standard audit procedures had
                        missed.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#c4c7c7]">
                      <div>
                        <p className="font-['Newsreader'] text-[24px]">
                          300 Cr
                        </p>

                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                          Capital Preserved
                        </p>
                      </div>

                      <div>
                        <p className="font-['Newsreader'] text-[24px]">
                          48 Hrs
                        </p>

                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                          Turnaround Time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6 relative min-h-[400px] bg-black">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAKfXMF0p8WZk98KLv60x22t6RKv2Bnr1URGY8tkRVYus8u690vvGVJlPXhlJpCFb4qt9TyycycoBEIis1r6a6ZkzP6GQ09QdpR69qBJLQD3gE9jo1lYKLxteNMkzoM_gYx5mWgeeWh-u5vEyUxW3i4O_xhhIre5WSbFMstprvZhSAVQ1pZVW8MeAl02foXRuSK5DEqu6oK61xwotR1oqPDv4bPh2lyeit0EHGryf-SGIRljY27hwYpF2proGDlCw4M6q_juOWrUg"
                    alt="Case Study"
                    className="w-full h-full object-cover grayscale opacity-60"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#eeeeee] to-transparent hidden md:block"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="py-[120px] bg-[#f9f9f9] border-t border-[#c4c7c7]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="flex justify-between items-end mb-16">
                <div className="flex items-baseline gap-4">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                    Section 04
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] uppercase">
                    Latest Intelligence
                  </h2>
                </div>

                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.1em] underline"
                >
                  View All Publications
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {publications.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col border-r border-[#c4c7c7] pr-8 last:border-0"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-[4/5] object-cover grayscale mb-6"
                      />
                    ) : (
                      <div className="w-full aspect-[4/5] bg-[#eeeeee] flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-6xl text-[#c4c7c7]">
                          {item.icon}
                        </span>
                      </div>
                    )}

                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                      {item.type}
                    </span>

                    <h4 className="font-['Newsreader'] text-[24px] mb-3 leading-tight">
                      {item.title}
                    </h4>

                    <p className="text-[15px] leading-[1.6] text-[#444748] line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default RedFlagForensicRiskAssessment;