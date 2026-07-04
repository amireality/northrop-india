import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const LenderFinancialInstitutionDD = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      number: "01",
      title: "Independent Business Review (IBR)",
      description:
        "Deep-dive assessment of a borrower's operational viability and financial forecasts to validate debt service capacity.",
    },
    {
      number: "02",
      title: "Project finance DD",
      description:
        "Rigorous technical and economic modeling for large-scale infrastructure and capital projects to mitigate delivery risks.",
    },
    {
      number: "03",
      title: "Collateral review",
      description:
        "Asset-level verification and market valuation analysis to ensure security coverage remains within prescribed thresholds.",
    },
    {
      number: "04",
      title: "Covenant compliance",
      description:
        "Ongoing monitoring and stress-testing of financial covenants to provide early warning of potential credit breaches.",
    },
  ];

  const audience = [
    {
      icon: "account_balance",
      title: "Banks",
      description:
        "Tier-1 commercial and investment banks requiring rigorous third-party validation for large-ticket exposures.",
    },
    {
      icon: "business_center",
      title: "NBFCs",
      description:
        "Non-Banking Financial Companies seeking sophisticated risk assessment frameworks for specialized credit markets.",
    },
    {
      icon: "monitoring",
      title: "Alternative credit funds",
      description:
        "Private debt and credit opportunity funds demanding speed, agility, and uncompromising analytical depth.",
    },
  ];

  const publications = [
    {
      type: "QUARTERLY REPORT",
      title: "Lender Due Diligence Beyond the Financials",
      description:
        "Examining the non-financial indicators of corporate distress in emerging market portfolios.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuADTyyRHuS2N8sKDeq4gy60KGdllxnVuCmx4fQLN_hrF-r_1TC_X0UAhMfwaSC8CE7P_4guQwCkUM1j9MmJkSCXEWrK7zBbwprRREPaUQv2tEOtZXqns3NdLfZbOYW00EXDqZsRg_NQ580Bsocls5Ax7dnLJgUMfj8N595aD4nhg54POQvLnbD6Xlp8J8dpgeT3bwNoDP9WsZl1V41ajsG9pcjH47IXmHcnFRZCizGDMneniHOWVTatBB4DeVb1ZRDp5kldeanuWSk",
    },
    {
      type: "RISK BRIEF",
      title: "Navigating Covenant Restructuring",
      description:
        "A tactical guide for banks managing stressed assets in the manufacturing sector.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBo-CjumAd54NMOeej4A0CiEvs79dol3j5XwgUdQe2js7VzRbv5BTd2bgyok04fJsZdZjxL74Z4aIl25_0Elw5mqmMcXTAu4YIM9mew0GPpzn0JCK-sSgQBzuYLGG8NfG6qVGi-Qwc09t5mG6VCFV3xl03Aqb0djt0faJlhiDI3ocvkPYx9dHGQUkBEtoBF4ANMnOiRTX3aewdxrd5nYUKiHPvi3aCsFXQMcAUiERJloR33eoN8ZT8c7LviY1nEkyB3KRggHBWk5gI",
    },
    {
      type: "GLOBAL ADVISORY",
      title: "Alternative Credit Trends 2026",
      description:
        "Analysis of private debt flows and the increasing demand for specialized third-party DD.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOjWQ329ycL8nsL5OORjb8pfn7ij7h8kO9yx1Mtbwem7UNuibVJAV083V9JPcm9qTetacZKvCgnAoIuArgYf7jMDWBR08M0uISrP7YxeRPX2zjf4W18084O_R33eAT9WBlE3ZCFOwL-hxOKm8oQKZtEJKgxxIS0YcATc7sbQsY2BrvXjRO744hE3WVazF3LuuWdjjDvzzfoQmAfbMxpxvH37rRnntCF4jRPmPcARH16CRj-sMkaef5WbmFcbKhaaag49SM_vCYtCE",
    },
    {
      type: "WHITE PAPER",
      title: "Forensic Collateral Valuation",
      description:
        "Best practices for real-time asset monitoring in highly volatile market environments.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBg-YZQZfjoumB8Z-3Q6wgqwmNCWnBclfRbovuqEl0DK6iN-o35INx2VD3mcTDXnAndzZq0zR4qsxhEgyIKip3TlJfwwJdMlllbHPHfbvP23Qu97aTjD_i-C5fuwVbgvONcQPM4wSAwqDC-OyOSSi96FAfYCb4sEmFj4Dg7s-Ay1h9Uzmv4tLhrq-xEIytovREXThx6WrGndVsmn4-0fy0w61geqHWv0DOmLul0BSGECC1yOpm2joaOEiKJ60Px6EZwE2KqcgP9vRs",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Lender & Financial Institution DD | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;600;700&family=Inter:wght@400;600;700&display=swap"
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
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <header className="relative w-full h-[819px] flex items-center overflow-hidden bg-[#1c1b1b]">
            <div className="absolute inset-0 z-0">
              <img
                src="/lender-financial-institution-dd.jpeg"
                alt="Lender & Financial Institution DD"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
              <div className="max-w-3xl">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#858383] mb-4 block">
                  GLOBAL ADVISORY • 5D STRATEGY
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-none text-white mb-6">
                  Lender & Financial Institution DD
                </h1>

                <p className="text-[18px] leading-[1.6] text-[#858383] max-w-xl">
                  Independent assurance for banks and credit funds to lend with
                  confidence.
                </p>
              </div>
            </div>
          </header>

          {/* What We Do */}
          <section className="py-[120px] bg-white">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 items-start">
                <div className="col-span-12 md:col-span-4 mb-6 md:mb-0">
                  <h2 className="font-['Newsreader'] text-[32px] mb-4">
                    What We Do
                  </h2>

                  <div className="w-12 h-1 bg-black"></div>
                </div>

                <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
                  {services.map((item, index) => (
                    <div key={index}>
                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2 block">
                        {item.number}
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
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-[120px] bg-[#f3f3f4]">
            <div className="max-w-[1280px] mx-auto px-8 text-center mb-16">
              <h2 className="font-['Newsreader'] text-[32px] mb-4">
                Who It's For
              </h2>

              <p className="text-[#444748] max-w-2xl mx-auto leading-[1.6]">
                We serve the world's most sophisticated capital providers,
                delivering the institutional intelligence required for complex
                lending decisions.
              </p>
            </div>

            <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {audience.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-[#c4c7c7] bg-white"
                >
                  <span className="material-symbols-outlined text-4xl mb-4 text-black">
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
          </section>

          {/* Case Study */}
          <section className="py-[120px] bg-white">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="flex flex-col md:flex-row bg-white border border-[#c4c7c7] overflow-hidden">
                <div className="w-full md:w-1/2 min-h-[400px]">
                  <img
                    src="/lender-financial-institution-dd1.jpeg"
                    alt="Case Study"
                    className="w-full h-full  "
                  />
                </div>

                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-black mb-4">
                    CASE STUDY
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mb-6">
                    Protecting a Rs.750 Cr Credit Facility
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-1">
                        THE INTERVENTION
                      </h4>

                      <p className="text-black leading-[1.6]">
                        5D was commissioned by a lead lender to perform a
                        forensic independent business review following reports
                        of minor operational delays.
                      </p>
                    </div>

                    <div className="py-4 border-t border-b border-[#c4c7c7]">
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-1">
                        THE OUTCOME
                      </h4>

                      <p className="font-bold text-black leading-[1.6]">
                        Identified hidden borrower stress including
                        off-balance-sheet liabilities and diverted cash flows.
                        Prevented a total default by restructuring covenants in
                        favor of the lender.
                      </p>
                    </div>
                  </div>

                  <button className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-black hover:underline group">
                    VIEW FULL REPORT

                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="py-[120px] bg-white">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="flex justify-between items-end mb-12">
                <h2 className="font-['Newsreader'] text-[32px]">
                  Latest Intelligence
                </h2>

                <a
                
                  href="#"
                  className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] border-b border-[#5e5e5e] pb-1"
                >
                  VIEW ALL PUBLICATIONS
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {publications.map((item, index) => (
                  <article
                    key={index}
                    className="flex flex-col group cursor-pointer"
                  >
                    <div className="mb-4 overflow-hidden aspect-[3/4] bg-[#e2e2e2]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                      {item.type}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] leading-tight group-hover:underline">
                      {item.title}
                    </h3>

                    <p className="text-[#444748] mt-4 leading-[1.6] line-clamp-3">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default LenderFinancialInstitutionDD;