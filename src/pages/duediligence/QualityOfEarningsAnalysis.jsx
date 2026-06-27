import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const QualityOfEarningsAnalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: "waterfall_chart",
      title: "EBITDA Bridge",
      description:
        "A rigorous bridge from reported net income to adjusted EBITDA, isolating non-recurring, one-time, and pro-forma adjustments.",
    },
    {
      icon: "verified_user",
      title: "Revenue Quality",
      description:
        "Analyzing customer concentration, recurring revenue churn, and the sustainability of pricing power across market cycles.",
    },
    {
      icon: "groups",
      title: "Related-party Normalization",
      description:
        "Identifying and adjusting for transactions with affiliates that deviate from market rates or arm's-length standards.",
    },
    {
      icon: "currency_exchange",
      title: "EBITDA-to-cash Conversion",
      description:
        "Validating that earnings are translating into actual liquid cash flow, adjusted for working capital and CapEx requirements.",
    },
  ];

  const clientProfiles = [
    {
      title: "PE Investors",
      description:
        "Mitigating buy-side risk through uncompromising verification of the target’s financial health and projected exit value.",
    },
    {
      title: "Lenders",
      description:
        "Ensuring debt-service coverage ratios are based on normalized, sustainable cash flows rather than creative accounting.",
    },
    {
      title: "Strategic Acquirers",
      description:
        "Evaluating synergy potential against a clean baseline of the target’s stand-alone operational performance.",
    },
  ];

  const publications = [
    {
      type: "Report // Deep Dive",
      title:
        "EBITDA Is a Lie Sometimes: A Guide to QofE in Indian PE",
      description:
        "Examining the nuance of earnings quality within the Indian regulatory framework and private equity ecosystem.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCLQYHpCWw7cWCjbO0eMuw0mouFbkRBu4TBrsbwQAkh_1pQLIl95BJewy5zijS4CfuQuhZy9vZzN6oNbt_N08-GJEvAWq5lu1YsCHlL5P7Y5R44J6gPNq3fHfLupTYGqXXDABbPX2LPzdgECclQ7lZNUQMdujJP1DDJjoJ1D8RkMKrc7iAx9lQZk4mg0O6PKmjf3fgwv3CSEDelD6_RyKkPRfboNoc4opLFWzEhYvmSOwZxN8uuV4HWQiBDXrK_ZHvvmd8EcoswqXE",
    },
    {
      type: "Article // Taxonomy",
      title: "Normalization in Volatile Markets",
      description:
        "How to adjust for outlier years without losing the trendline of core operational efficiency.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5hn8XStB2YE-Ab3HEV06fv42rR1Gwg7wikMIjelz7mn-BZ22slMuJ_RP0eDjBRW5RzK50Jh2nukVHqlNMH56y7dXRKyCTfVXKhtDdiGzEnGABOvaa8qBvptGVgKxQYW_WoqxqL8R5uCYgFoUOugNUYp6nQ-C3aRcnldaT0mVODrW6bKJigv8onjM2xb9t63YKAOnIjrmnV-PVQTen3wtp3SJxnaPfMoR8JRu-B4ApCuWQAsAcBg0Gmgo_wKJFq4tenQgkO5gtAZc",
    },
    {
      type: "Case Study // Tech",
      title: "SaaS Revenue: Recurring vs. Re-occurring",
      description:
        "The critical difference between contract-based ARR and high-churn transactional revenue streams.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAHPBvangzxfyQoKJ8DNsWebGboOAmlNQ5PIdfzsbkip6I2GYKFFZAUrRn_t-Tfgm0rP_BaOT5W10leZvIFzmb29Hqe57shdoeRG4mAstnRy0lCFLpMJSUev_UvFp6PsNN-cStGnfzIyVIz0lGxqDCzPGWw2n1sxfkRxXlJS8-DZULQPrhI0QJQBQSX_GoTRwTcW6ac9DyFEx_ykOVcGA1yc5JtvMQfZ3BeY20a7LfdY9HKsjSed2gqGeavSy3Itk5dXu5GzjZ5x3U",
    },
    {
      type: "White Paper // Q1 2026",
      title: "The 2026 Valuation Handbook",
      description:
        "A comprehensive guide for analysts on bridging the gap between audit financials and investment-ready data.",
      icon: "auto_stories",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Quality of Earnings (QofE) Analysis | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:opsz,wght@6..72,400;700&display=swap"
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
              font-family: 'Inter', sans-serif;
              color: #1a1c1c;
            }

            .material-symbols-outlined {
              font-variation-settings:
                'FILL' 0,
                'wght' 300,
                'GRAD' 0,
                'opsz' 24;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative w-full h-[819px] flex items-center bg-black overflow-hidden">
            <div className="absolute inset-0 opacity-40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaPsJfsd52xYV9U9vLdViZjjMggtIjo9cOBE38KJmEEWO5yhCcyyfBG_245MprX4VAZFDrcHHEsflkAcfkVKdobGcmFmljDaFPoSUMpfCl6mbQ6KzK9tERJG1E2hiu-ZvctA_A63YJ6b2XTuts0uvpy_zkqhsw4GebxsJbZR4uiViSw0YV0Kc1jrKfBM7MR9FmLMGw0YUPYkGOj2PkiQ8Kp7VXFA9bvK_Gzp8C5kDRETeqxow32c5q__ptcFUPo3M62lR31iQ9eWQ"
                alt="Hero"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
              <div className="max-w-3xl">
                <span className="text-[11px] uppercase tracking-[0.1em] text-white mb-4 block">
                  Service Line 04 — QofE
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] text-white mb-6">
                  Quality of Earnings (QofE) Analysis.
                </h1>

                <p className="text-[18px] leading-[1.6] text-white/80 border-l border-white/30 pl-6 max-w-xl">
                  Identifying true, sustainable earnings power beyond the
                  headline numbers.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-[120px] bg-[#f9f9f9]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 items-end mb-16">
                <div className="col-span-12 md:col-span-6">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4 block">
                    Core Capabilities
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] text-black">
                    What We Do.
                  </h2>
                </div>

                <div className="col-span-12 md:col-span-6 border-l border-[#c4c7c7] pl-8">
                  <p className="text-[15px] leading-[1.6] text-[#444748]">
                    Our analysis moves beyond audit-compliance to
                    institutional-grade intelligence. We peel back layers of
                    accounting noise to reveal the operational reality of the
                    target.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-8">
                {capabilities.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-12 md:col-span-3"
                  >
                    <div className="bg-[#eeeeee] border border-[#c4c7c7] p-6 flex flex-col h-full">
                      <span className="material-symbols-outlined text-black text-4xl mb-6">
                        {item.icon}
                      </span>

                      <h3 className="font-['Newsreader'] text-[24px] mb-4">
                        {item.title}
                      </h3>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-[120px] bg-[#1c1b1b] text-white">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="mb-16">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#858383] mb-4 block">
                  Client Profiles
                </span>

                <h2 className="font-['Newsreader'] text-[32px]">
                  Who It's For.
                </h2>
              </div>

              <div className="grid grid-cols-12 gap-8">
                {clientProfiles.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-12 md:col-span-4 border-t border-white/20 pt-6"
                  >
                    <h3 className="font-['Newsreader'] text-[24px] text-white mb-4">
                      {item.title}
                    </h3>

                    <p className="text-[15px] leading-[1.6] text-[#858383]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="py-[120px] bg-[#f9f9f9]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="bg-white border border-[#c4c7c7] overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6 md:p-16">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4 block">
                    Case Study // 2023-04
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] text-black mb-6">
                    From Rs.142 Cr to Rs.89 Cr EBITDA.
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-black mb-2">
                        The Intervention
                      </h4>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        During a buy-side mandate for a mid-market manufacturing
                        firm, our team identified that 30% of the reported
                        EBITDA was driven by non-recurring government pandemic
                        subsidies disguised as operational grants.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-black mb-2">
                        The Discovery
                      </h4>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        Further normalization revealed substantial related-party
                        charges for 'technical consultancy' that were
                        significantly below market value.
                      </p>
                    </div>

                    <div className="pt-4">
                      <a
                        href="#"
                        className="text-[11px] uppercase tracking-[0.1em] underline hover:text-[#5e5e5e]"
                      >
                        Read Full Report
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 bg-[#eeeeee] flex items-center justify-center p-6 border-l border-[#c4c7c7]">
                  <div className="w-full max-w-sm space-y-4">
                    <div className="flex justify-between items-end border-b border-[#747878] pb-2">
                      <span className="text-[11px] uppercase tracking-[0.1em]">
                        Reported EBITDA
                      </span>

                      <span className="font-['Newsreader'] text-[24px]">
                        Rs. 142 Cr
                      </span>
                    </div>

                    <div className="flex justify-between items-end border-b border-[#747878] pb-2 text-red-700">
                      <span className="text-[11px] uppercase tracking-[0.1em]">
                        Gov Subsidy Adj.
                      </span>

                      <span className="font-['Newsreader'] text-[24px]">
                        - Rs. 41 Cr
                      </span>
                    </div>

                    <div className="flex justify-between items-end border-b border-[#747878] pb-2 text-red-700">
                      <span className="text-[11px] uppercase tracking-[0.1em]">
                        Related Party Adj.
                      </span>

                      <span className="font-['Newsreader'] text-[24px]">
                        - Rs. 12 Cr
                      </span>
                    </div>

                    <div className="flex justify-between items-end bg-black text-white p-4">
                      <span className="text-[11px] uppercase tracking-[0.1em]">
                        Normalized EBITDA
                      </span>

                      <span className="font-['Newsreader'] text-[24px]">
                        Rs. 89 Cr
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="py-[120px] bg-[#f9f9f9]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="flex justify-between items-center mb-16">
                <h2 className="font-['Newsreader'] text-[32px]">
                  Latest Intelligence.
                </h2>

                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.1em] border-b border-black pb-1"
                >
                  View All Publications
                </a>
              </div>

              <div className="grid grid-cols-12 gap-8">
                {publications.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-12 md:col-span-3"
                  >
                    <div className="flex flex-col h-full border-t border-[#c4c7c7] pt-4">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full aspect-[4/3] object-cover grayscale mb-4"
                        />
                      ) : (
                        <div className="w-full aspect-[4/3] bg-[#eeeeee] flex items-center justify-center mb-4 border border-[#c4c7c7]">
                          <span className="material-symbols-outlined text-4xl text-[#c4c7c7]">
                            {item.icon}
                          </span>
                        </div>
                      )}

                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                        {item.type}
                      </span>

                      <h3 className="font-['Newsreader'] text-[24px] mb-4 leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        {item.description}
                      </p>
                    </div>
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

export default QualityOfEarningsAnalysis;