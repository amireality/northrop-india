import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const BuySideFinancialDueDiligence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: "analytics",
      title: "QofE Analysis",
      description:
        "Adjusting EBITDA for non-recurring items, normalization of management fees, and revenue recognition integrity.",
    },
    {
      icon: "account_balance",
      title: "Net Debt Analysis",
      description:
        "Identifying debt-like items including unfunded pension liabilities, deferred maintenance, and tax contingencies.",
    },
    {
      icon: "balance",
      title: "WC Normalization",
      description:
        "Determining the target working capital through seasonal trend analysis to prevent cash leakages at closing.",
    },
    {
      icon: "payments",
      title: "Cash Flow Assessment",
      description:
        "Mapping the bridge from EBITDA to FCF to assess the true liquidity and debt-servicing capability of the target.",
    },
  ];

  const clients = [
    {
      number: "01",
      title: "Strategic Acquirers",
      description:
        "Multinational corporations seeking synergistic expansion into emerging markets with high regulatory complexity.",
    },
    {
      number: "02",
      title: "PE/VC Investors",
      description:
        "General partners requiring deep-dive technical due diligence to validate investment theses and entry multiples.",
    },
    {
      number: "03",
      title: "Infrastructure Funds",
      description:
        "Asset managers evaluating long-term concessions and complex utility structures where financial integrity is paramount.",
    },
  ];

  const interventions = [
    {
      number: "01",
      title: "Forensic Sampling",
      description:
        "Randomized ledger audit across 14 regional offices revealed inconsistent capitalization policies.",
    },
    {
      number: "02",
      title: "Working Capital Catch-Up",
      description:
        "Identification of significant trade payable stretching, requiring a Rs. 30 Cr adjustment to the closing mechanism.",
    },
    {
      number: "03",
      title: "The Outcome",
      description:
        "The client executed the deal at a revised valuation that protected internal IRR targets and mitigated post-closing cash infusion needs.",
    },
  ];

  const publications = [
    {
      type: "MARKET REPORT",
      title:
        "Buy-Side Due Diligence in India: The 10 Earnings Quality Issues That Most Acquirers Miss",
      description:
        "An exhaustive analysis of the unique accounting hurdles in the Indian mid-market segment.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuASnQB6JZ6qQ43vjauSNz9HjN8x9_AQMVbOavHmE-bUmrpVuZBozILAQhL7i1Y25a3YXrCBWDjZPtKOX3uCuiSYTn3zEuQjEXfvvaf80wWWvhyUPlhH7RXZ5M5J7AqpffjYVTp-gCrDLD69wlq9N2YsY9fH-IVST8jG1ChR4kfZ979DNq73AGtTv357vtrZXNKDRvUJsXt8jcvd4M1KnLirIVAzKCVsbqRlMZIxMmwsXHzkN3spu1akAToSZ7CYhiCmNUluNpE5efM",
    },
    {
      type: "TECHNICAL BRIEF",
      title: "Normalizing EBITDA in Volatile Markets",
      description:
        "Mathematical frameworks for adjusting earnings during hyper-inflationary cycles.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAs4gnrJdyt34Om9YbBlqDyzklCubd1y2h99Pg4tspkpQ2fVozZWqo4X9s515dlJHwo3Qjqm7qf8tdRhdPbXCaNvl8l3d1msi7R00d6IDcf27FBIDlshEikgjNiTsxJlthuuA0aIFqu2YNkyAgIFeQ4-jmr_totWllUcDgWvkhdWljl0OtmDmPYjY2gmAQdzbEkOotHPdkdma-4yeAY_FuESAQB3M-gqSfoqSiKERL3KD2bi-EIj8LnM36FiqNYj8SDTXQQ-ETfTzA",
    },
    {
      type: "FIRM NEWS",
      title: "Expansion of Global Risk Practice",
      description:
        "Northrop Management welcomes three new partners to the New York advisory desk.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDCCJccPB6eYZMsqpVcvtC-Myp2e40iyslhegmsvBT9GBX4SEPfRm-SoKCcadRsf7o3mdeNKdpbay3K1JHtxAdrao9AuxfPBIh7i_2Gtfamzw8ZIIFHQvNwu5ZQYyWf_XVeMoJz61WsDFVRzDtcodE9nSLKWx07umZYGrHU64B6Yr4_U5uYJBpDBhMvK00qJMpO67ROYwMB-dlHQaKV6f5e65GF77zAlrrR9a6nfNqn307x2HnwOZ6jsJ75Yp3nH3iJXoUQwRkXzKo",
    },
    {
      type: "PERSPECTIVE",
      title: "The Future of Deal-Making: AI in FDD",
      description:
        "How machine learning is accelerating the identification of data outliers in massive ledgers.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC7ziS8TiYGKFs3ghW1V116V44e-nU3XnfK7jKxO8sLSPdlQTi0vXzL7sDifeOxs_TJrj-H8WQhRL4A9YBbZ8uNfm8lYzuoOMe170cBSjSPlE6c14JyxXPIUNZxdzo-eMv5pWMLdjKHFN1NOVlO2F-joB3dNzNnvfmW4oZ-3GAIItCQi6nbkBnWGh61Oveii8ZxvP4th-bzgtVhexlrKYMcRTcRIiE0gMOFc41VDQ4P-EZachb0NkYfud3Tes4R-K6h_1S33D5yXQ0",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Buy-Side Financial Due Diligence (FDD) | Northrop Management
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
              color: #1a1c1c;
              font-family: 'Inter', sans-serif;
              -webkit-font-smoothing: antialiased;
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
          <section className="relative h-[819px] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0 opacity-40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRISJI8E43T_yi_9rn_CP_vsLlN5hcIS1yzasqcVF3NvqX5namx-3gikPQFCj5MGyGCg-nCJfxdtWgPk8yYITidxrQdjNhjRPv5niTKSzn_obLzOM0IFinalHqBWMB0WCcLkWn-HmguXjqmnjJKdsbligy9DDuT4TZdM3N-_1WlipxME8u8oXQN1VXsfUVqSuPqfdxjU4z7jZXyP7kVTrs-CrG0A4WvCCzFdkLDBqPdxAGjTYfx-GKYxQEEMNMJbxBojExf8961h8"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 w-full px-8 max-w-[1280px] mx-auto text-white">
              <div className="w-full md:w-2/3">
                <span className="text-[11px] uppercase tracking-[0.1em] mb-4 block">
                  ADVISORY • FINANCIAL DUE DILIGENCE
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-tight mb-6">
                  Buy-Side Financial Due Diligence (FDD)
                </h1>

                <p className="text-[18px] leading-[1.6] text-[#e5e2e1] max-w-xl">
                  Dissecting financial narratives to uncover underlying
                  earnings quality and structural liabilities.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8 mb-16">
              <div className="col-span-12 md:col-span-4">
                <h2 className="font-['Newsreader'] text-[32px] mb-4">
                  What We Do
                </h2>

                <div className="w-16 h-px bg-black"></div>
              </div>

              <div className="col-span-12 md:col-span-8">
                <p className="text-[18px] leading-[1.6] text-[#444748]">
                  Our methodology goes beyond checklist-based auditing. We
                  employ forensic-level rigor to validate the economic reality
                  behind reported figures, ensuring capital is deployed with
                  absolute clarity.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="p-8 border border-[#c4c7c7] bg-white hover:bg-[#f3f3f4] transition-colors duration-300"
                >
                  <span className="material-symbols-outlined text-black mb-6 text-4xl">
                    {item.icon}
                  </span>

                  <h3 className="font-['Newsreader'] text-[24px] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-[#444748]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Institutional Partners */}
          <section className="bg-[#f3f3f4] py-[120px] px-8">
            <div className="max-w-[1280px] mx-auto">
              <div className="text-center mb-16">
                <span className="text-[11px] uppercase tracking-[0.1em] text-black">
                  CLIENT PROFILE
                </span>

                <h2 className="font-['Newsreader'] text-[32px] mt-4">
                  Institutional Partners
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {clients.map((item, index) => (
                  <div
                    key={index}
                    className="text-center"
                  >
                    <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4">
                      {item.number}
                    </h4>

                    <h3 className="font-['Newsreader'] text-[24px] mb-4">
                      {item.title}
                    </h3>

                    <p className="text-[15px] leading-[1.6] text-[#444748] max-w-xs mx-auto">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="bg-white border border-[#c4c7c7] grid grid-cols-1 md:grid-cols-12 overflow-hidden">
              <div className="md:col-span-5 bg-black p-12 text-white flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.1em] opacity-60">
                    CASE STUDY NO. 482
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mt-8 mb-6">
                    The QofE That Changed the Deal
                  </h2>

                  <p className="text-[15px] leading-[1.6] text-[#858383]">
                    During the acquisition of a Tier-1 Logistics operator, our
                    forensic FDD uncovered systematic misclassification of
                    capital expenditures as operational maintenance.
                  </p>
                </div>

                <div className="mt-12 space-y-8">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.1em] block text-[#858383] mb-2">
                      EBITDA OVERSTATEMENT
                    </span>

                    <span className="font-['Newsreader'] text-[48px]">
                      Rs. 60 Cr
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-[0.1em] block text-[#858383] mb-2">
                      PRICE REDUCTION
                    </span>

                    <span className="font-['Newsreader'] text-[48px]">
                      Rs. 90 Cr
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 p-12 bg-white">
                <h4 className="text-[11px] uppercase tracking-[0.1em] mb-8">
                  THE INTERVENTION
                </h4>

                <div className="space-y-8">
                  {interventions.map((item, index) => (
                    <div
                      key={index}
                      className={`flex gap-6 ${
                        index !== interventions.length - 1
                          ? "border-b border-[#c4c7c7] pb-8"
                          : ""
                      }`}
                    >
                      <span className="font-['Newsreader'] text-[32px] text-black/20">
                        {item.number}
                      </span>

                      <div>
                        <h5 className="text-[11px] uppercase tracking-[0.1em] mb-2">
                          {item.title}
                        </h5>

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

          {/* Latest Intelligence */}
          <section className="py-[120px] px-8 bg-[#eeeeee]">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                    INSIGHTS
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mt-4">
                    Latest Intelligence
                  </h2>
                </div>

                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.1em] border-b border-black pb-1 mb-1"
                >
                  View All Reports
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {publications.map((item, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[4/3] mb-6 overflow-hidden bg-[#e2e2e2]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-3 block">
                      {item.type}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] leading-tight group-hover:text-black transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[15px] leading-[1.6] text-[#444748] mt-4 line-clamp-2">
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

export default BuySideFinancialDueDiligence;
