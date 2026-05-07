import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const OperationalManagementScrutiny = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: "groups",
      title: "Management team assessment",
      description:
        "Evaluating leadership integrity, bench strength, and the alignment of executive incentives with long-term institutional goals.",
    },
    {
      icon: "terminal",
      title: "Technology infrastructure audit",
      description:
        "Stress-testing digital backbones for scalability, security vulnerabilities, and technical debt that may impede growth post-acquisition.",
    },
    {
      icon: "precision_manufacturing",
      title: "Site inspections",
      description:
        "Unannounced physical verifications of assets, supply chain nodes, and operational workflows to identify hidden inefficiencies.",
    },
  ];

  const audience = [
    {
      icon: "account_balance",
      title: "PE INVESTORS",
      description:
        "Private Equity firms conducting pre-acquisition due diligence or portfolio optimization.",
    },
    {
      icon: "trending_up",
      title: "GROWTH EQUITY",
      description:
        "Funds scaling mid-market enterprises where operational bottlenecks represent major risks.",
    },
  ];

  const intelligenceCards = [
    {
      type: "BRIEFING",
      title: "Supply Chain Fragility",
      description:
        "The hidden costs of lean logistics in geopolitical flashpoints.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAupuK8MN5zFfNShYxYIXBG7gPCuIB2NzHHW9GQX7n9CJccv8HtLCNoAzbtWC41Cm9HQC-0Gcq3v0LQ7PXHOSn-6NwktfZtk0W_ZtNPtM9Xa971261A3vLOI2iOIfKb_s1L1jqlaiOdE8sbZmzyGQswBmLM02c7qJHPiKVvZlwmODc5QUFsYnPA_bUMgZD13ViCK8c0zFSVhDkVZpT1jKaWWR0hSC5SIemlxWREMnuQSz6wJPoBTN1iprEWKi-RWUjB4jg3bxxw5hE",
    },
    {
      type: "INSIGHT",
      title: "The Cost of Tech Debt",
      description:
        "How legacy systems drain 12% of annual EBITDA in manufacturing.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2rGmFcFkrR8gbuftmR12INUiySaFP0hy3AQ-wFAHQNU81F0-eM9d5mLd3Y7Z7PycSMpDzMUXgpCCA9eAXfuCz05YXFu2kCOsN9NUtFviEWg_wjJLZ_xernEK7YoNRM90ZSXMM5bryKD5imD0s_VYKPxHhlisDJ48eYH-hRtgXrlYaN3UYJIvpmJ1qAY5a4OL0bq5hRmq1cf74iKqtVd7HgJvecWPDRIXSCRqH6BCabIOw6061uHZ9m00bdHfQOH_vAmjFQk2f8oE",
    },
    {
      type: "EXECUTIVE PAPER",
      title: "Integrity in the C-Suite",
      description:
        "Forensic behavioral analysis as a tool for PE firms.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDaGZjR1c4u0KyegkU2bhSQ_oMLpE76dL0J6N2ROOOkoHavQ5vHvuwRH9AOShDhaj3AOWkEu6X9RcfD9J910Z9EiApu7H06t7bTKzJ-OHheWH8wPUyNmwv7g3hdvpyNZKGOT30mN8yVScZPif3zwHITUkUURfPqm8pS6KvKOfoadA3kVNwiIsxm3coei69xrPQaBNavC4CV8_4YS9oR_93XuQDzeYGviblQhHBC5m-M4H4KTk7yabQceRrizMZbV3rWt6CpMXgo-c4",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Operational & Management Scrutiny | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:ital,wght@0,400;0,700;1,400&display=swap"
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
              display: inline-block;
              vertical-align: middle;
            }

            .brutalist-bg {
              background-color: #f9f9f9;
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3C%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
              background-blend-mode: overlay;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <header className="relative overflow-hidden border-b border-[#c4c7c7] brutalist-bg">
            <div className="max-w-[1280px] mx-auto px-8 py-[120px] grid grid-cols-12 gap-8 relative z-10">
              <div className="col-span-12 md:col-span-8 flex flex-col justify-end">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4 block">
                  ADVISORY / INTELLIGENCE 5E
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] mb-6 max-w-3xl">
                  Operational & Management Scrutiny
                </h1>

                <p className="text-[18px] leading-[1.6] text-[#444748] max-w-2xl">
                  Assessing management caliber and operational resilience to
                  validate financial performance.
                </p>
              </div>

              <div className="col-span-12 md:col-span-4 flex items-end justify-end">
                <div
                  className="w-full h-[400px] grayscale opacity-20 contrast-125 bg-cover bg-center border border-[#c4c7c7]"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDw6G729mUOjjL0LHLjZcn6YRR0sSY_E7mdfpk2EapRkxkoJY4JVZj48H7edBNRLTwfyDnA0QYZz3LskjosffI5Ayxs5BwePEMm6JzWkcWDTPpo7hqrVj2pc8XCgRVFVM3ksaT0cBI6aTovetocWjzgXwqLH32GOcZoT0jPRq_N0DFDCN2QNTYdFue37HW-9uRoKYPQaXLbPXcjgsb-8TxFjDdPcjtc0FXvfe4orPNI0AnpsOq4WtNKy52i7J6BP0ZvB77ROqNvJhQ')",
                  }}
                ></div>
              </div>
            </div>
          </header>

          {/* What We Do */}
          <section className="bg-white py-[120px] border-b border-[#c4c7c7]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 border-b border-[#c4c7c7] pb-6 mb-16">
                <div className="col-span-12 md:col-span-4">
                  <h2 className="font-['Newsreader'] text-[32px]">
                    What We Do
                  </h2>
                </div>

                <div className="col-span-12 md:col-span-8">
                  <p className="text-[18px] leading-[1.6] text-[#444748]">
                    We bridge the gap between financial statements and ground
                    reality through deep-dive operational forensic techniques.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-8">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-12 md:col-span-4 p-6 border border-[#c4c7c7]"
                  >
                    <span className="material-symbols-outlined text-black mb-4">
                      {item.icon}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-4">
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

          {/* Who It's For */}
          <section className="bg-[#f9f9f9] py-[120px] border-b border-[#c4c7c7]">
            <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-6">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Who It's For
                </h2>

                <div className="space-y-4">
                  {audience.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 border-b border-[#c4c7c7]"
                    >
                      <span className="material-symbols-outlined text-black mt-1">
                        {item.icon}
                      </span>

                      <div>
                        <h4 className="text-[11px] uppercase tracking-[0.1em] mb-1">
                          {item.title}
                        </h4>

                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-6">
                <div className="aspect-square bg-[#eeeeee] border border-[#c4c7c7] overflow-hidden relative grayscale">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlXIw_bj2-ujfEXqOmLHuENwSr9PJK2P3pUBRP0eaHNEe7zQ43SjyOlZ3OGSFL_c6TukNgCAfSk4lytkT4kJU-GW-YoHyPzMLfxMogcRYVfNr81W8NTbjtooAfcSGDp-5T1_BZapnZ1Y7gVOYGJVgeFopsEg0J4jZ4b8nQjdX1kK5mkRtOm9pdpAI8cgyjWxWlUzn0yOQZWS4F4o6z8cbteriQCeupEAV3oA-edPMWvk5jlVoCM4LxGhhf-ZGgnw5Gg2el4OaT6R4"
                    alt="Who It's For"
                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="bg-white py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="bg-[#f3f3f4] border border-[#c4c7c7]">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-6 p-12 flex flex-col justify-between border-r border-[#c4c7c7]">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.1em] text-black border border-black px-2 py-1 mb-6 inline-block">
                        CASE STUDY
                      </span>

                      <h2 className="font-['Newsreader'] text-[32px] mb-6">
                        The Management Gap in a Rs.500 Cr Deal
                      </h2>

                      <p className="text-[18px] italic leading-[1.6] mb-6 text-[#444748]">
                        "Intelligence revealed that 80% of critical operational
                        knowledge resided with a single executive who had one
                        foot out the door."
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#c4c7c7]">
                      <div>
                        <h5 className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                          CHALLENGE
                        </h5>

                        <p>
                          Assessing a high-growth tech-logistics firm with
                          opaque leadership structures.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2">
                          OUTCOME
                        </h5>

                        <p>
                          Discovery of severe key-man risk leading to a 15% deal
                          restructuring and retention lock-ins.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-6 p-12 bg-[#f9f9f9]">
                    <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4">
                      The Intervention
                    </h4>

                    <div className="space-y-6 text-[#444748] leading-[1.6]">
                      <p>
                        Northrop's Intelligence unit performed a "Human Asset
                        Scrutiny" on the target company's C-suite. Through a
                        series of discreet site inspections and technology
                        infrastructure audits, we identified that the primary
                        revenue engine was entirely dependent on proprietary
                        undocumented workflows managed by the COO.
                      </p>

                      <p>
                        Our audit revealed that the COO had already begun
                        negotiations with a direct competitor. This critical
                        intelligence allowed the PE fund to withdraw the initial
                        offer and renegotiate terms that included a mandatory
                        two-year transition period and heavy equity vesting for
                        the remaining senior management.
                      </p>

                      <button className="text-[11px] uppercase tracking-[0.1em] text-black border-b border-black pb-1 hover:text-[#5e5e5e] transition-colors">
                        READ FULL REPORT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="bg-[#f9f9f9] py-[120px] border-t border-[#c4c7c7]">
            <div className="max-w-[1280px] mx-auto px-8">
              <h2 className="font-['Newsreader'] text-[32px] mb-16">
                Latest Intelligence
              </h2>

              <div className="grid grid-cols-12 gap-8">
                {/* Primary Card */}
                <div className="col-span-12 md:col-span-6 flex flex-col border border-[#c4c7c7] bg-white group cursor-pointer overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFfSj0gYztd1uBjstKwwz6PFS1v_8k4hJ-CDvwtY9-D71eZ8rmrcgZU9j3Bpxd5FrNA_-giXst59CfrImoTw39J3l6jF4mx5tRaKEyuLeX4MBLtx_w0fvn_3JnJs-EqXGLY3WvuledxcNg9UBi3zBNs9JNaVFCs-bN2zBKmEoVnv3p_Pv0cEzoj2WYc9jHTnLW52bktw-pwYySGtACxjAVt9GLzinZ0_DOS7aNye0yS7TXgkIOxlirrzo53GHKNnWJujORV6tCSQ8"
                      alt="Research Report"
                      className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2 block">
                      RESEARCH REPORT
                    </span>

                    <h3 className="font-['Newsreader'] text-[32px] mb-4">
                      Operational Due Diligence in Indian Private Equity
                    </h3>

                    <p className="text-[#444748] mb-6 leading-[1.6]">
                      An analysis of why traditional financial audits fail to
                      capture 40% of post-acquisition operational failures in
                      emerging markets.
                    </p>

                    <span className="material-symbols-outlined text-black">
                      arrow_right_alt
                    </span>
                  </div>
                </div>

                {/* Secondary Cards */}
                <div className="col-span-12 md:col-span-6 grid grid-cols-1 gap-8">
                  {intelligenceCards.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-6 p-6 border border-[#c4c7c7] bg-white group cursor-pointer"
                    >
                      <div className="w-1/3 aspect-square bg-[#eeeeee] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>

                      <div className="w-2/3">
                        <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-1 block">
                          {item.type}
                        </span>

                        <h4 className="font-['Newsreader'] text-[24px] mb-2">
                          {item.title}
                        </h4>

                        <p className="text-[#444748] line-clamp-2 leading-[1.6]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default OperationalManagementScrutiny;