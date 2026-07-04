import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const InsolvencyTransactionAudits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Sections 43-51 Transaction Audits",
      description:
        "Identification and quantification of Preferential, Undervalued, Extortionate, and Fraudulent transactions to maximize recovery for the committee of creditors.",
    },
    {
      title: "Expert Witness Testimony",
      description:
        "Formal representation before NCLT and appellate bodies, providing mathematically rigorous evidence and defensible forensic methodologies.",
    },
    {
      title: "Asset Tracing & Identification",
      description:
        "Deep-dive analysis of complex corporate layers to unearth hidden assets and diverted funds across international jurisdictions.",
    },
  ];

  const audience = [
    {
      icon: "account_balance",
      title: "Financial Creditors",
      description:
        "Institutional lenders seeking to maximize liquidation value and asset recovery.",
    },
    {
      icon: "gavel",
      title: "Resolution Professionals",
      description:
        "Compliance-driven support for Section 66 filings and corporate governance audits.",
    },
    {
      icon: "business_center",
      title: "Legal Counsel",
      description:
        "Strategic forensic collaboration for litigation support and evidence building.",
    },
  ];

  const publications = [
    {
      category: "PUBLICATION",
      type: "QUARTERLY REPORT",
      icon: "description",
      title: "IBC Forensics in Practice: A Practical Guide",
      description:
        "Navigating the nuances of Section 43 within complex insolvency frameworks.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZti7FdN6wO83osjChp-fJGVo_vceQvjUxeJJ3SNZGz8FDauDClbjUdNLxyXcCTYQAsaYRsfTYYeEBola0ozsaJ2tioIJBQ9DW2AVQpozCcyOI4_AURtxgmpWlO1vtBPSOwJG0mhKOKmMJND1j92QcFS8QSGi8WbhgyDwkCLj8YXn-TIZjfYIjUqVoht9XXb9DnZoDiPJ4I3HT0GtxlfgTUPZgDSCtMZMqBG9-wNWsLZE6QvmUDEPAS6gcNhquwi5EULtVp3T8mQA",
    },
    {
      category: "DATA ANALYSIS",
      type: "WHITE PAPER",
      icon: "monitoring",
      title: "Quantifying Undervalued Transactions",
      description:
        "A mathematical framework for assessing market-value disparities in IBC cases.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDvDcFF1y8pAL2XqZHVVGx4PU3pHZMcB0Vo5ON-t2BfvJq6CDosQXpcf-eMnwJYMdNYwnOVxTH6qow9gi6yWRGAwvZAbuD0vAvBQ1ZJyEJJBm5srrgv5UtM9LjR_1XihjU0qagn0sDxyVkhFfLgxXH8NEOP3QWSGvnqx8CH5Pu3vi4pkDXZfx7SbNIKtQWhkM1-vgOcTbV1m2-gFdxegpDMGc56X3Dr_6mBD80AHNmK3CWmChvg_qb22prKBJWmR9-_ssx_Ys3zCU8",
    },
    {
      category: "RISK ADVISORY",
      type: "BRIEFING",
      icon: "security",
      title: "Shadow Corporate Networks",
      description:
        "Understanding common tactics for asset diversion in the manufacturing sector.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCYIY6WhphQJdIBrtmLT8WH8v5kk2bkjaQZi3QFKadIMCb4LD7xukxNw-Lq7qifTAaAHZc1iqd7Os-ghRdExxsJ5aXY72HqF_SshTq0bYc5NlKytmujAq1XwSZVEVCEImCD0nu_-tPnWmkCfdRtdJjN2ckqEZOyAgaht25oSv0fX3WvvRKtV4TCl_wz4qjr9q6THvP_NVDxaQXH-rlbqMrNkR5wrsvhsVvikiUQ8RcQip2GAfi0wvd36EuPTxd3sWhDaH6cuxi_GPA",
    },
    {
      category: "MARKET WATCH",
      type: "GLOBAL INTELLIGENCE",
      icon: "language",
      title: "Global Recovery Benchmarks 2026",
      description:
        "Comparative analysis of insolvency recovery rates across emerging markets.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA0XsvGRy5rlpBe8vkq0Nt9L8isqR82mIz8xRS4yECAMWlifCoLPH4hObwCm8ywUSjTcqa_i2QQ7nQPvo8nJK4folm5eV0VUpatuhFFbg97MCAMXOHR16xFbPMGp_ousII9bxi_p86n5KWmTKAdzcT09PgOm7NCP9boRY7opGUnc4JbOBuqZbWirXrfzEorHiqxU_793W6bjwhmo-hXqNSw6YoaxtgFJkms6qfIBZySVlQSqT8m1fr8-BXVtUPHbrLOQJmU5riGLes",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Insolvency & Transaction Audits | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Newsreader:ital,wght@0,400;0,600;0,700;1,400&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <style>
          {`
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] overflow-x-hidden antialiased">
      

        <main>
          {/* Hero */}
          <section className="relative h-[90vh] flex items-end overflow-hidden">
            <img
              src="/insolvency-transaction-audits-ibc.jpeg"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover "
            />

            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 pb-24">
              <div className="md:w-2/3 bg-[#f9f9f9] p-12 border-l-8 border-black">
                <span className="block mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5e5e5e]">
                  Insolvency & Transaction Audits (IBC)
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] mb-8 max-w-2xl">
                  Specialist forensic expertise across every stage of IBC
                  proceedings.
                </h1>

                <div className="h-1 w-24 bg-black"></div>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-7 pr-12">
                <h2 className="font-['Newsreader'] text-[32px] uppercase border-b border-[#c4c7c7] pb-4 mb-12">
                  What We Do
                </h2>

                <div className="space-y-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="border-b border-[#c4c7c7] pb-8"
                    >
                      <h3 className="font-['Newsreader'] text-[24px] mb-4">
                        {service.title}
                      </h3>

                      <p className="text-[18px] leading-[1.6] text-[#444748]">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audience */}
              <div className="col-span-12 md:col-span-5 flex flex-col">
                <div className="bg-[#eeeeee] p-12 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="font-['Newsreader'] text-[32px] uppercase border-b border-black pb-4 mb-12">
                      Who It's For
                    </h2>

                    <ul className="space-y-8">
                      {audience.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <span className="material-symbols-outlined text-black pt-1">
                            {item.icon}
                          </span>

                          <div>
                            <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] mb-1">
                              {item.title}
                            </span>

                            <p className="text-[15px] leading-[1.6]">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full mt-12 bg-black text-white py-5 px-8 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.1em] group">
                    Engage Our Services

                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="flex justify-between items-end mb-12 border-b-2 border-black pb-4">
              <h2 className="font-['Newsreader'] text-[32px] uppercase">
                Latest Intelligence
              </h2>

              <Link to="/insights"
                className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]"
              >
                View All Publications
                <span className="material-symbols-outlined">
                  north_east
                </span>
              </Link>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {publications.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="aspect-[3/4] mb-6 border border-[#c4c7c7] flex items-center justify-center p-8 group relative overflow-hidden bg-[#eeeeee]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    />

                    <div className="text-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                      <span className="material-symbols-outlined text-4xl mb-2 text-[#444748]">
                        {item.icon}
                      </span>

                      <div className="text-[10px] uppercase tracking-[0.1em] border-t border-[#c4c7c7] mt-2 pt-2">
                        {item.type}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                    {item.category}
                  </span>

                  <h3 className="font-['Newsreader'] text-[20px] leading-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-[#444748]">
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

export default InsolvencyTransactionAudits;