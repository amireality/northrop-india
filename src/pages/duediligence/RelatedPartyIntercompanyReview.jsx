import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const RelatedPartyIntercompanyReview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: "account_tree",
      title: "Related-party mapping",
      description:
        "Tracing beneficial ownership and transaction flows across opaque holding structures to identify shadow liabilities.",
    },
    {
      icon: "analytics",
      title: "Commercial benchmarking",
      description:
        "Rigorous comparative analysis ensuring all intercompany dealings meet strict arm's-length commercial standards.",
    },
    {
      icon: "layers",
      title: "Group structure simplification",
      description:
        "Rationalizing subsidiary networks to eliminate redundant cost centers and enhance transparency for stakeholders.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCIAiUJeFWufGKdMWA6eQhW9U6BJxUMtH_17FgkWoAa_C7zVXwBRlRC7ueXyXZ7aBL9ahGCMpGUEald4MVyUJ6bFYni5uthVJfTqGHQtpe_F3fwzdf1zMXR9cAp_JzarohTwrRTuE9bS7FDirdbRzyYSl7mRebi2WVe8JPgk80JrvLkHdBhF4DbKFEClcu8bFRnrLpCrkmZ7RBbBgPeR9eQyEiQZcylTEwVKvVY61WR22xxLR3nOaG83HYtNFs6DUChPtiVp9bfLJc",
    },
  ];

  const audience = [
    {
      title: "Acquirers of family businesses",
      description:
        "Identifying personal expenses masked as business costs and clarifying the true operational EBITDA.",
    },
    {
      title: "Minority shareholders",
      description:
        "Protecting against value siphoning through unfair intercompany pricing or preferential asset transfers.",
    },
  ];

  const publications = [
    {
      type: "M&A Report",
      title:
        "The Related-Party Problem in Indian Family Business M&A",
      description:
        "Navigating the cultural and structural complexities of intercompany pricing in emerging markets.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlWaOaKqpeiPttcdVGlZNME4KKWR6G4juFCPNYvjcP54XAOw-3BXKj6uQCcWNR7AvCYKiHVG2E2VYIYDNQeed4Gq3NAp2OhO1r0EYfi5OaUujZkTjz2ZsLPWoL9S4GMKK4E5_V111RSnN6Aq6eqFq80dpQ-HL3HqK7RP3ZW4Co_FlWqjRLqIAaOd-X5NpkIemp-1yl1Li2KzDOThjcZY258Abi89VVB_PNXjXXFNFky8S42PKM44qRtcneAKsClXuYYpvhpJhftjc",
    },
    {
      type: "Regulatory Update",
      title: "SEBI Disclosure Mandates: A 2026 Readiness Guide",
      description:
        "How new reporting standards for related-party transactions will impact listed entity valuations.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB3kiC1V2r_08Wh4b8wiADeRE03jJkJaDC2z0WhjZImIwEgyfD-xdR7p4YVI6kXgZrAlp0Bj3sAaw1j5YrREZEX6YVIHTQQgdifjlTURJtVjP2Oy5GpogghnPiv8K1dYkrZ_1FXbS61xuuDt_4ItSaT8OzIKfE_Ipzv5jr33b2peM7QNnL4Ri-GdeJVjHQ30ctxRUr9GFAfY63SsgcwOiIVoIt6LayKg6PBdnf6VdjZd7rZSvuyKXXMSAde8w0Wxu8NRkzM4DFCID4",
    },
    {
      type: "Risk Advisory",
      title: "Tracing Shadow Entities: Advanced Methodology",
      description:
        "Utilizing forensic accounting to uncover beneficial ownership in cross-border holding chains.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB1x8nIHQ7ChbzCLmEpkqO4GsQ4Bwef0TVt-vLNAvSaGGaR9l7ZqDr9Snn9MSPwztl9cp3ewUJWxVmDifT3WsKpdhqsUI81O70lRgI7UOrMKJwOrg9MHG_967C6fXxB2atNLKj8HqC7SuXjreJGYdeCRAQ3pmfvdSOAmNtBAwpcea7wRmEEFSHFRso_4t7ebuYQyyfTw8Z-Vtl6-kHhf0CUbcoNwJbiuIbhGCXJdKups-4UMj10LC8czY3c3DWO7n_I8ucsNToHnT0",
    },
    {
      type: "Strategic Paper",
      title: "Arm's Length Reality: Beyond the Spreadsheet",
      description:
        "Defending intercompany pricing structures during high-stakes litigation and tax disputes.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCeMxM01SA6lSHQadq9QpxOXNVUU1P_w3L7scyJA-dIeYbPCHO8cYOSG_W3r15zpZpAFLeHikCHRCLt-Ggt5qcXuWvXiZUqvnf5Q9Wex7k4tyLH5n9MGBG1hQP0fW7LsLhh3qKFFU062KtrO8ikSRvHrIkbMe36Opi2vpNGBSdh8JuIj3JGdbrBlVSHI1Cd1hUJ2icScYzSOVmNvDIJZwlploSmjxM6noO-MODWmyV0hSrmGtBvLSCb-r8P7y8jDAU8llXiqxcv3wc",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Related Party & Intercompany Review | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:ital,wght@0,400;0,700;1,400&display=swap"
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
          <section className="relative h-[819px] flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-black z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATjJVc8Lv3ahul1SMkuMBOl-zkJd7D2hfpFd3lQvWPTo7qEeELuImHpO4Xv1FBSKIGnbXab9_EC1JaPFVml1ja9k-SXz1VegXr4VcQADtI4N4i-bKYwQmEwdfKIxs0_MNfFGlbICgvxoNd10NHREld9w6zHms9uhLYKF9kHKPsdWQrpoQm_mqe2Lf2Nr8IIb2cVjswPvoIBXErHLG4qEE13Tzvyg8UoM2mLRJfzPEKxXQJPAtSPgNkyr-iXiISa71Z1G4CBp5yXS0"
                alt="Hero"
                className="w-full h-full object-cover opacity-60 grayscale"
              />
            </div>

            <div className="relative z-10 w-full px-8 max-w-[1280px] mx-auto">
              <div className="max-w-2xl">
                <span className="text-[11px] uppercase tracking-[0.1em] text-white mb-4 block">
                  Intelligence & Strategy
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] text-white mb-6">
                  Related Party & Intercompany Review
                </h1>

                <p className="text-[18px] leading-[1.6] text-white/90">
                  Mapping complex intercompany webs to identify value leakage
                  and ensure arm's-length reality.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8 mb-16">
              <div className="col-span-12 md:col-span-4">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  What We Do
                </h2>

                <div className="h-px bg-[#e0e0e0] w-full mb-6"></div>

                <p className="text-[#444748]">
                  Precision auditing of internal transactions to reveal
                  structural inefficiencies and compliance risks.
                </p>
              </div>

              <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#eeeeee] p-6 border border-[#c4c7c7]"
                  >
                    <span className="material-symbols-outlined text-black mb-4">
                      {item.icon}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[#444748]">
                      {item.description}
                    </p>
                  </div>
                ))}

                <div className="col-span-1 md:col-span-2 bg-[#eeeeee] p-6 border border-[#c4c7c7] flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <span className="material-symbols-outlined text-black mb-4">
                      {services[2].icon}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-2">
                      {services[2].title}
                    </h3>

                    <p className="text-[#444748]">
                      {services[2].description}
                    </p>
                  </div>

                  <div className="md:w-1/2 w-full h-32 bg-[#c4c7c7] overflow-hidden">
                    <img
                      src={services[2].image}
                      alt={services[2].title}
                      className="w-full h-full object-cover grayscale opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="bg-[#f3f3f4] py-[120px]">
            <div className="px-8 max-w-[1280px] mx-auto grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Who It's For
                </h2>

                <p className="text-[18px] leading-[1.6] text-[#444748] mb-6">
                  Our reviews provide the empirical basis for high-stakes
                  negotiation and institutional oversight.
                </p>

                <div className="space-y-6">
                  {audience.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-start"
                    >
                      <span
                        className="material-symbols-outlined text-black"
                        style={{
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        check_circle
                      </span>

                      <div>
                        <h4 className="font-bold mb-1">
                          {item.title}
                        </h4>

                        <p className="text-[#444748]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-6">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf2LaTIWL6cZD0jtXOYfi4sldpl4OVTruUo0-gAmBhlASXH_w7jMGel5fU6DwmtpOtD4YL46ZwI04IcTnlH07zRPoRw7L2_ImA2wcZjnaj2YTZn8gfvmiZ2zgSfmNHChc9Ew3a4HQ7KZaG-idp1FF6HIUtJPSqJw9gmKF5JB6I32tIRR96AWLRJ8iyMl-w4WSZEIh0xVia56vkSIEManOExpvIUaV9E_DQNvJydpgS5l6lhDhyRkinFiZzKvrXbvV2o7E3WS5xfTM"
                  alt="Boardroom"
                  className="w-full aspect-[4/3] object-cover grayscale border border-[#c4c7c7]"
                />
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="bg-white border border-[#c4c7c7] overflow-hidden">
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-4 bg-black p-6 text-white">
                  <span className="text-[11px] uppercase tracking-[0.1em] opacity-70 mb-4 block">
                    Intelligence Case Study
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] leading-tight">
                    Rs.75 Cr of Hidden Related-Party Value Leakage
                  </h2>
                </div>

                <div className="col-span-12 md:col-span-8 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748] mb-2 block">
                      The Challenge
                    </span>

                    <p className="text-[15px] leading-[1.6]">
                      A private equity firm acquiring a 70% stake in a
                      diversified logistics group suspected inflated procurement
                      costs through promoter-controlled shell companies.
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748] mb-2 block">
                      The Intervention
                    </span>

                    <p className="text-[15px] leading-[1.6]">
                      Northrop mapped 42 entities, identifying 14 undisclosed
                      related parties. Benchmarking revealed pricing 22% above
                      market rates for standard fuel and maintenance contracts.
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748] mb-2 block">
                      The Outcome
                    </span>

                    <p className="text-[15px] leading-[1.6]">
                      Negotiated a{" "}
                      <span className="font-bold">
                        Rs.75 Cr price adjustment
                      </span>{" "}
                      and established a comprehensive indemnity provision for
                      historical non-compliance risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="py-[120px] bg-[#f9f9f9]">
            <div className="px-8 max-w-[1280px] mx-auto">
              <div className="flex justify-between items-end mb-6">
                <h2 className="font-['Newsreader'] text-[32px]">
                  Latest Intelligence
                </h2>

                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.1em] border-b border-black pb-1 hover:text-[#5e5e5e] transition-colors"
                >
                  View All Insights
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {publications.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col border border-[#c4c7c7] p-6 bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-video object-cover grayscale mb-4"
                    />

                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748] mb-2">
                      {item.type}
                    </span>

                    <h3 className="font-['Newsreader'] text-[20px] leading-tight mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[15px] leading-[1.6] text-[#444748] line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-black text-white py-[120px] px-8">
            <div className="max-w-[1280px] mx-auto text-center">
              <h2 className="font-['Newsreader'] text-[48px] mb-6">
                Ensure Institutional Integrity.
              </h2>

              <p className="text-[18px] leading-[1.6] opacity-80 mb-16 max-w-xl mx-auto">
                Contact our advisory team for a confidential audit of your
                related-party landscape.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button className="bg-white text-black px-6 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-[#f3f3f4] transition-colors">
                  Book a Consultation
                </button>

                <button className="border border-white text-white px-6 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-colors">
                  Download Methodology
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default RelatedPartyIntercompanyReview;