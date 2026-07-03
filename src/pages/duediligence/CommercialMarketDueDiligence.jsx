import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const CommercialMarketDueDiligence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Market growth analysis",
      description:
        "Deconstructing top-down market projections with bottom-up primary data and historical growth patterns.",
    },
    {
      title: "Competitive share assessment",
      description:
        "Mapping true market positioning beyond reported figures through proprietary supply-chain intelligence.",
    },
    {
      title: "Revenue forecast validation",
      description:
        "Stress-testing financial models against real-world customer churn, acquisition costs, and pricing power.",
    },
  ];

  const publications = [
    {
      type: "Regional Risk",
      title:
        "Commercial Due Diligence in India: Why Financial Analysis Is Never Enough",
      description:
        "Navigating the complexities of local regulatory shifts and fragmented supply chains.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAXmGguYPdwesfc2ZnTlryVBXi7lPtFKDeyhyrTIiP9Y8mSnXEkccGnnUp_XnLvztE-zVyLe2OEcNtWKi5GJKiUg3zfC0yU09u-T6ZwohyLe7rT8YVTMLJopn4mxrXURo-KjbYvjtmr-WNk9wb5cIQ7c5C_7HwzGT5cGnBlYS9Hpv0ZwwH_2851RVMpVJVqSSvMhQ54K-xjG5fCbvLNzpL2sGki0YsNNv-rVpK-JGUmY8lCXYBqRmFCzOd4DY8rE9fReiuhpQMbStw",
    },
    {
      type: "Technology",
      title: "The Algorithmic Arbitrage in PE Sourcing",
      description:
        "How automated market mapping is changing the speed of mid-market due diligence.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2JhLHxw5wUS-l0OUDBhb7c-je6mLuqCMHlJEPJOIRIZsyvgZ_YLB5A1hdV6fKvl4fyh53NILgEpQ7-6bSyx1DIYGwL9NZrkiJlW1n6S-Sy17CLsXbQ2LclPsCNydfKZqWfcjpCQyLUI18vxsMH9bKOO30MBnzoFW-Zx9BpcAvQi933v54inYwOqH0PF-DNtyeZFdMN24eLEDlfcQK3GDsQVEvlrWWZoSs1wgLT6YUBD1-evOWGFSoihR1K6qcuAG82F1PPMVeTyg",
    },
    {
      type: "Strategy",
      title: "Post-Merger Realities vs. Pre-Deal Models",
      description:
        "A retrospective study on why commercial synergies often fail to materialize.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDf_IWQJE93sR8RrAPIUA8cw9R2tLqjMkNwG1NpQBQUSeE-xGfsFypbpjWmWVcMcbGt-n1k8scRZUNCaDvNuf58z39FK4IJfJibtbY5DV4WGSzYoSE4FGuhCpsRllDwiNeoTNe1CD52JZfBJVXOn1F8InMy3rLXpc3XYFZD0hJwAKTTfOIvdx2z6KKvsXvYuYT8SuUbl2XR7IvElqlD2MKYoAznuPiPozC4HDl_EnJiCQbcA8UJcuBAaRLe4UCaQNGcj4NTFwtpjn8",
    },
    {
      type: "Intelligence",
      title: "The Ethics of Competitive Intelligence",
      description:
        "Defining the boundaries of data collection in an increasingly transparent world.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCSD9_S50GIoPqqcSrJ17MKQ5lyaa3F3MtpLxFm7KghChULmzJBv58YyrGtiRRN_HbthNkymzS-QBwQeFWMTNKyzXm6JmKFyyOlDwZei_Bne5zoDBHLCHkhpzXHycjG9m7CheQI-eQNDqdUd-U3TY2iKLmmarbsXs8LlD6gnQHHr8_xHx7NLY0XKzQia3pFt3Z3Kp0sMW2Nw0ngFATgpK_NHZC-I5cMH23BFcfBXvFOh1ul0FWm_qTQsqZ4QJHDPg1MVamSLRm8M9g",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Commercial & Market Due Diligence | Northrop Management
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
              -webkit-font-smoothing: antialiased;
              font-family: 'Inter', sans-serif;
            }

            .material-symbols-outlined {
              font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' 24;
              font-size: 20px;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-[819px] flex flex-col justify-end bg-black overflow-hidden">
            <div className="absolute inset-0 opacity-40">
              <img
                src="/commercial-market-due-diligence.jpeg"
                alt="Hero"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full pb-[120px]">
              <div className="max-w-3xl">
                <span className="text-[11px] uppercase tracking-[0.1em] text-white mb-4 block">
                  Institutional Advisory / 05I
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] text-white mb-6">
                  Commercial & Market Due Diligence
                </h1>

                <p className="text-[18px] leading-[1.6] text-[#858383] max-w-xl">
                  Validating market claims through independent intelligence and
                  customer-centric analysis.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-4 border-t border-black pt-4">
                <h2 className="text-[11px] uppercase tracking-[0.1em] mb-6">
                  What We Do
                </h2>
              </div>

              <div className="col-span-12 md:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className="space-y-4"
                    >
                      <h3 className="font-['Newsreader'] text-[24px]">
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
          <section className="bg-[#eeeeee] py-[120px] px-8">
            <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-6">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Engineered for high-stakes capital allocation.
                </h2>

                <p className="text-[18px] leading-[1.6] text-[#444748] mb-6">
                  Our due diligence process removes the emotional bias from
                  acquisition strategies, providing a mathematical basis for
                  valuation.
                </p>

                <div className="flex gap-8">
                  <div className="flex flex-col border-l-2 border-black pl-4">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-black">
                      Target Audience
                    </span>

                    <span className="font-['Newsreader'] text-[24px]">
                      PE investors
                    </span>
                  </div>

                  <div className="flex flex-col border-l-2 border-black pl-4">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-black">
                      Target Audience
                    </span>

                    <span className="font-['Newsreader'] text-[24px]">
                      Strategic acquirers
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6">
                <div className="aspect-video bg-[#e2e2e2] border border-[#c4c7c7] overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Pz3CGeQpupjEfCzJMXgnpq0SQZUu8-kjAiOv9YuQ1vY6Oa3t6Z6JW1m4MErgtptBCa-FhrbLd5dyOeZ6i0tQY53A4RzqZcthpxGbF4Qt1hKLq7AofSe02udMCO86BKg7EruKyGs8b4egwyE1uBVPjdrck2okl8fNhhlDdCy67-sBgc2PgS3IO74J4kt8okSg2Pf3GijnYVeTlK0tB9C-JH7My2ww9vm9MJAFCseBelqTXvSksfxrjq6mpWt-342L2uzii8_OTrI"
                    alt="Commercial Due Diligence"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="border border-[#c4c7c7] grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 bg-white flex flex-col justify-center">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                  Case Study / Intelligence Intervention
                </span>

                <h2 className="font-['Newsreader'] text-[32px] mb-4">
                  The Growth Story That Was Not
                </h2>

                <p className="text-[#444748] leading-[1.6] mb-6">
                  A mid-market healthcare provider claimed a 15% CAGR based on
                  regional expansion. Our independent customer-centric analysis
                  revealed that 40% of the growth was driven by temporary
                  pandemic subsidies rather than structural demand.
                </p>

                <div className="pt-6 border-t border-[#c4c7c7]">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[11px] uppercase tracking-[0.1em]">
                      Outcome
                    </span>

                    <span className="font-['Newsreader'] text-[48px] text-[#ba1a1a]">
                      -20%
                    </span>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.1em] text-right">
                    Price reduction post-discovery
                  </p>
                </div>
              </div>

              <div className="bg-black p-12 flex items-center justify-center">
                <div className="w-full space-y-6">
                  <div className="h-1 bg-[#f3f3f4] w-full relative">
                    <div className="absolute top-0 left-0 h-full bg-[#ba1a1a] w-[80%]"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#858383] mb-2">
                        The Challenge
                      </h4>

                      <p className="text-white">
                        Validating hyper-growth claims in a saturated market
                        segment.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#858383] mb-2">
                        The Intervention
                      </h4>

                      <p className="text-white">
                        Primary interview series with 200+ churned customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="py-[120px] px-8 bg-white">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex justify-between items-end mb-[120px] border-b border-black pb-4">
                <h2 className="font-['Newsreader'] text-[32px]">
                  Latest Intelligence
                </h2>

                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.1em] underline flex items-center gap-2"
                >
                  View Archive
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {publications.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col"
                  >
                    <div className="aspect-[3/4] bg-[#e2e2e2] mb-4 border border-[#c4c7c7] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>

                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                      {item.type}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] leading-tight mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[#444748] leading-[1.6] line-clamp-3">
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

export default CommercialMarketDueDiligence;