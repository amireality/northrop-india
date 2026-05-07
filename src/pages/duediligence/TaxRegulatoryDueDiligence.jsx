import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const TaxRegulatoryDueDiligence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Direct/Indirect Tax Review",
      description:
        "Comprehensive audits of historical tax filings and identification of latent liabilities across multiple tax jurisdictions.",
    },
    {
      title: "Transfer Pricing Assessment",
      description:
        "Rigorous evaluation of intra-group transaction pricing to ensure compliance with global arm’s length standards.",
    },
    {
      title: "Tax Indemnity Negotiation",
      description:
        "Structural design of escrow mechanisms and indemnity clauses to mitigate risks identified during the DD phase.",
    },
  ];

  const stakeholders = [
    {
      icon: "corporate_fare",
      title: "Strategic Acquirers",
      description:
        "Corporations looking to integrate cross-border operations without inheriting historical tax baggage.",
    },
    {
      icon: "account_balance",
      title: "PE Firms",
      description:
        "Institutional investors requiring precise quantification of regulatory exposure before capital deployment.",
    },
  ];

  const publications = [
    {
      type: "REGULATORY REPORT",
      title:
        "Tax Due Diligence in India: A Regulatory Roadmap for 2024",
      description:
        "An analysis of upcoming changes in direct tax assessments and digital reporting mandates.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ9sZhhydfik8ytPVRlqmEgsKgd8IjJtq-QAGTXs3BrLjS53L1_q_OzmChLTiqOCPBDRpzyHegRFIt0ZFxvmYudwIIdXpJZf-drMiiL4UF2w_h8a2-fqULOI_Y3jQ6qR7CiJ5CCcsoAcj9SAgvj_Ku2wXp_OxCEJ4h1y7PgGBFxR4VDT0zJ1MNXg1fAMscHLO9KJNku1yax5QV0MRWRn9GNWA5qWRb4obR_uNdn_hOzYbTR8AfQ4Jr5EPm_RHyAmWGBnEReLSJ7LU",
    },
    {
      type: "CROSS-BORDER",
      title: "BEPS 2.0 and the Global Minimum Tax",
      description:
        "How multi-jurisdictional corporations are restructuring to meet Pillar Two requirements.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBRNP16xjPbzbDsjaR6gjn7W3TfyBwpPISEWN2JZzkaf9WpUwI7M1iR4ggXWRfPOnEUoUSRNUvFUSO8TpvjScN6VkfePV3FGOHCvleVp5ndVvxP893PV27eTTUD4O0-g5A4wJLjIWfPKZsJVJcjwKicbYob7EfFbGdmHOLNcILevYDqQmmbst2AVpiq2HbH91CkAW4snvbFxZ8nFGApkSl9ozeZ4ZBmSpqsRCuq3BaTJxYrj_lDSMvvQKAhz2wXLSvS85ra9qAcpQA",
    },
    {
      type: "ADVISORY BRIEF",
      title: "Transfer Pricing in Tech Buyouts",
      description:
        "Critical valuation metrics for intellectual property in high-growth technology acquisitions.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBGKshIUjMHRadT-QqKTmDB1Lw8nkwhYmCGPc6sdWm92dTgQ8UVIOSqHJ8nVARiHk9w1NgiH0WYgeY6sDK-PzYxLZwS7hGYgSn4gHt-d2i33rZ7H-6lflgGOrEutbLadpJSSlYDwpxlzXi3m9upob1wOwioKyRTCBArkk3ZUteN0TFauw83n4TBtZq-6VfwbeeZ-nWj-dckfjplXkdyWXkbujmJaF0RaDQ3z2zHmq1FcpntqH7L1fLDeXV9GkTvi8gQqeQb3JABpng",
    },
    {
      type: "FIRM INTELLIGENCE",
      title: "Post-Merger Regulatory Integration",
      description:
        "A checklist for harmonizing compliance frameworks across newly merged global entities.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuClXKWpfJtt-PeibJXu8v1trOrIEfP1_T9BaT21h2QubmxwEChKKUh71bOo0XWKLXbQiXlGwdaVg_xQuMRUOhNFTSEuWjQJsLEycqnaUYq9eKinhjZHs8o0FMKXRKvCibtquvdXrrNitQyIROvfK8btzVzulkJqUVirHgjiXLTLySE2mF0XdsWwHk84oWnCOAgqPbUbvHozt8puefMUJo50LXrr_brXaIuMs_Foj-9EV6ltJObTI02hF8AybWeYVKNrxTsmWcYzN-o",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Tax & Regulatory Due Diligence | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:opsz,wght@6..72,400;700&display=swap"
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
          <header className="relative w-full h-[819px] flex items-end overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaT5E1_sjASgNEFi3GY6VykDz4zlxeaDIIaeUjeBCOt878KhiDLpG2T0wu_G7dbzcVdWx0FFrQ_siMQwAWiVuostcJRy_Lm_RkqI6owGomoUn3MwPIuGFt9XaG18s1HLx9tosk0AXeFTVgMJpXaHQjpYHZTexCrA5FODaAdwbKvfPLf0yFtomcFJmQk1C-A0nmRSeMqEURCfPIMq1WQyGbNIXcSCDaEt_KGncMid0sVXHhiNt9Hzq3hJGk8CLGHqYk039H7jrDf-M"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
            />

            <div className="relative z-20 max-w-[1280px] mx-auto w-full px-8 pb-[120px]">
              <div className="max-w-4xl">
                <span className="text-[11px] uppercase tracking-[0.1em] text-white/80 mb-4 block">
                  ADVISORY / TAX & REGULATORY
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] text-white mb-6">
                  Tax & Regulatory Due Diligence
                </h1>

                <p className="text-[18px] leading-[1.6] text-white max-w-2xl">
                  Navigating cross-border tax complexities and
                  multi-jurisdictional regulatory frameworks.
                </p>
              </div>
            </div>
          </header>

          {/* What We Do & Who It's For */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="grid grid-cols-12 gap-8">
              {/* What We Do */}
              <div className="col-span-12 md:col-span-8">
                <h2 className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-6">
                  WHAT WE DO
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#c4c7c7] pt-6">
                  {services.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-['Newsreader'] text-[24px] mb-4">
                        {item.title}
                      </h3>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who It's For */}
              <div className="col-span-12 md:col-span-4 bg-[#f3f3f4] p-8">
                <h2 className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-6">
                  WHO IT'S FOR
                </h2>

                <ul className="space-y-4">
                  {stakeholders.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <span className="material-symbols-outlined text-black mt-1">
                        {item.icon}
                      </span>

                      <div>
                        <h4 className="font-['Newsreader'] text-[18px] mb-1">
                          {item.title}
                        </h4>

                        <p className="text-[15px] leading-[1.6] text-[#444748]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="bg-[#eeeeee] border-y border-[#c4c7c7]">
            <div className="max-w-[1280px] mx-auto px-8 py-[120px]">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 md:col-span-6 space-y-6">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-black">
                    CASE STUDY
                  </span>

                  <h2 className="font-['Newsreader'] text-[48px] leading-[1.1]">
                    Rs.120 Cr Tax Indemnity
                  </h2>

                  <div className="border-l-2 border-black pl-6">
                    <p className="text-[18px] leading-[1.6]">
                      Unrecognised contingent liabilities found in a
                      manufacturing buyout.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-2">
                        THE CHALLENGE
                      </h4>

                      <p className="text-[15px] leading-[1.6]">
                        Target firm operating in multiple SEZs with
                        inconsistent indirect tax documentation over a 5-year
                        cycle.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-2">
                        THE OUTCOME
                      </h4>

                      <p className="text-[15px] leading-[1.6]">
                        Secured a Rs.120 Cr indemnity backed by a structural
                        escrow, protecting the acquirer from historical
                        misfilings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfwd-y2b44JrjLzrJHfINa5eDkWOVUTK8guDxywRelx-a6FAzLglBg8o4JNxIx7kGxmiv4-xu9WWtoyWtWpHruy_Ct6KHhNT_WKNcNUO17rL8lGBBO0FYxrSh8OrNoZVNo5H87iVOjBFnRBXpd8LhO1vWey_IC8trOC0rHYiud9FIAWdw8G4iz7EtpU8weEU0eYOqcBwf9Yv2foiJWVwCloRe-QnfSmiem2cRFG-WJqxjTvJkorSVWv6IpC_wLbhU9yLy6OtNYM5g"
                    alt="Case Study"
                    className="w-full aspect-video object-cover grayscale border border-[#c4c7c7]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="flex justify-between items-baseline mb-16 border-b border-[#c4c7c7] pb-4">
              <h2 className="font-['Newsreader'] text-[32px]">
                Latest Intelligence
              </h2>

              <a
                href="#"
                className="text-[11px] uppercase tracking-[0.1em] text-black hover:underline"
              >
                View All Research
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {publications.map((item, index) => (
                <article
                  key={index}
                  className="group"
                >
                  <div className="mb-4 overflow-hidden bg-[#eeeeee]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-2 block">
                    {item.type}
                  </span>

                  <h3 className="font-['Newsreader'] text-[24px] group-hover:underline cursor-pointer">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-[#444748] mt-4">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TaxRegulatoryDueDiligence;