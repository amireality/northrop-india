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

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap"
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
              -webkit-font-smoothing: antialiased;
              font-family: 'Inter', sans-serif;
            }

            .material-symbols-outlined {
              font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' 24;
              vertical-align: middle;
            }

            .brutalist-border {
              border: 1px solid #e0e0e0;
            }

            .horizontal-rule {
              height: 1px;
              background-color: #1a1c1c;
              width: 100%;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-[819px] flex items-end bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc2ClvK8KTWFW13AOybcJQRbs7xu-5z_SL9yFGjAXfZQtQqOdpsbuG6CIdJMCncnJ65iQQpeYH0u2SVHQ2u9Lx4wbxblSoEAKfBvrmRBbpYFDiP2ED93hg8ryokmWqG6A6kOZ5NCSYkCjiv6XwfpJVIjrvg1V1IzlqlXH6rJ8JevZ-ziwnfils__mbzM14RLPLbBLXBJHcPWOIXhnOdWUtH_zgDnQXmBsIgVX3SVzC1JmbeGQEML66tX28fwPmNhG51Wf3YzGhQp4"
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpEHY5nud3QkICOteY5F1XfnV_ARVygENPvpc0tVi4wvKqZh0iiLXmwrmsAe2cuBo-kXKUYUqc4pgH-bNMyoRfQvUQ44lkcL6L9sDzFUUHtTYAExEVjWnCCFOLFt2zwuCrT7HBXb4lmfFglpbM-JVhrzxlHXF7A2v7667hR1heGW91zOwsv-3-qHRlbiCVjNvpUXhbYMXdD13Ig-gHijBWxuZ1aJGrxwz8S98B9QDM6b4jGMXHhof5j0kMCFBPLCDYGhHCE5yBS_A"
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

                <button className="mt-6 md:mt-0 border border-black px-6 py-4 text-[11px] tracking-[0.1em] uppercase hover:bg-black hover:text-white transition-all">
                  Download Full Report
                </button>
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbIAZ6JjO0kwCwfHrdZJ0_SwOllg1bXIqT7PvgycJZrfcQgoGIRHV5psZ3OLGrhiVeQOVRNnL8vo_WEX-3cyTntSMQjznMZDcNT5IMgb3wwn2tzcNFvHFyywRVlYPAnUTX0rsPB2bU1EaeqJrOhvdiNSN7yTtV7eflcDCfI30mqh6lmHvwZvniMoDEAM1aNCV7jOSa3zMZtdlN0hLE4eZYtf6JvYd3qu5-BeYso62rcz7EI9Km3Ww6zcSWXYH1z2g4KibKDIEgF7c"
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
                  <a
                    href="#"
                    className="text-[11px] tracking-[0.1em] uppercase flex items-center gap-2 hover:underline"
                  >
                    Read Article

                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </a>

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