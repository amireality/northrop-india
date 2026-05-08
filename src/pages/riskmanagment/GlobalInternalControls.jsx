import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const GlobalInternalControls = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const methodology = [
    {
      title: "IFC/ICFR Design",
      description:
        "Design and implementation of Internal Financial Controls frameworks tailored to specific operational risks and regulatory mandates.",
    },
    {
      title: "RAMP Preparation",
      description:
        "Strategic Risk Assessment and Management Planning (RAMP) to identify vulnerabilities before they manifest as systemic failures.",
    },
    {
      title: "Testing & Validation",
      description:
        "Independent testing of operating effectiveness (ToE) using rigorous statistical sampling and data-driven audit methodologies.",
    },
    {
      title: "SOX Support",
      description:
        "Comprehensive Sarbanes-Oxley compliance support, from documentation of narratives to remediation of identified control gaps.",
    },
  ];

  const targetEntities = [
    {
      icon: "corporate_fare",
      title: "Listed Indian Companies",
      description:
        "Ensuring adherence to Section 134(5)(e) and the Companies Act mandates.",
    },
    {
      icon: "account_balance",
      title: "US-Listed Entities",
      description:
        "Full lifecycle SOX 404 compliance and PCAOB standard alignment.",
    },
    {
      icon: "public",
      title: "MNC Subsidiaries",
      description:
        "Harmonizing local statutory requirements with global group control frameworks.",
    },
  ];

  const publications = [
    {
      type: "WHITE PAPER",
      title:
        "IFC vs. SOX: Understanding India's Internal Controls Landscape",
      description:
        "A comparative analysis of the regulatory requirements between Indian ICFR and US SOX frameworks for dual-listed entities.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAEfGhyTVB5qjCjhAkO0cEr9kyJmyzLOb-0gV5ugW803UfJhyvdoph4Ugx1Y4DRPC_Rn-gD4aNrUjWk5zU1Nlb2IXmToJh_rtkuJRq8sL6XmHChVT2r5Z8ny49SXnjKrHRalpa6efiHJhZ1x0_wdYU0RCGorka4YQ2kMmhF3QqUjc0QfV8bBF-xUlDi6wou7YBJrbBw3j6bq_CnuF_WsQapx5fnj1LaiDSE0XIOG9ocLMnlw_Dlnq7wZlQ05PfL3MrMZmRo-8NBhGs",
    },
    {
      type: "EXECUTIVE BRIEF",
      title: "The Cost of Non-Compliance: A Multi-Year Impact Study",
      description:
        "Quantifying the financial and reputational damage resulting from material weaknesses in internal controls.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDyO5U2lI17oB8DF0djfutK1um0L4oHt0YX19ODoPRt_rt8HUa1abdgNa_2wv-98SHefVA9dtVZF5QHCUkie92auXGSYoEZ5gceFi1ff66vYVW34n4EBJwkvvRYsPSuy3OpkXLpbfziJTrQ4uGA7C7UHmy3-FvHB2SJiJSjkwNXQHmEt5PoqU6h9-ezyrMaz2hW90kxYGbkiDM-VJ_ROeCyfVyBWNp82e76tduyJBqglDpi_EV7gGk4EhM74mLzn0Gacvvegb1pTwI",
    },
    {
      type: "TREND REPORT",
      title: "AI in Audit: Automating Continuous Control Monitoring",
      description:
        "How machine learning is transforming the testing of internal controls from periodic checks to real-time oversight.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBGOKi1QfdGNZ-qI9WxFWVAq3GNrR2TOQoMHwbK58R-e3EiAANjoCj9oTkLolfeelL2909xAVx9L4PeEhH_Xu71UqKWIfX8Kacac0LA98OfcDaA6h7YyGNeCg_acpAcasSsKKHyxX_jPkF0hrd6Nu3ldINUt0Np8RNy4AzJUUm9E_vT3JoAz9qvu9LztACKVAsbtSqI9Jtk90nnYqNWS9V-Kmrm-Dwz1hkh9oU3gLDnBvwd3SBu52beXWLnyS0l4CNoAsj5xCHT1cI",
    },
    {
      type: "RESEARCH",
      title:
        "Governance in the Post-Pandemic Distributed Workplace",
      description:
        "Addressing the challenges of maintaining effective internal controls within a hybrid and remote work environment.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDScL_tQWpsY8pBgbrdoYAMAAX64wQZ_Cmw9B4w8HI0MOIu-puWhN76iFsKZogwgRpL9K_b4_xPTi7qrphOFSltwZ1NYW-Vt9j2wecLDDaxvS4F0-Vdub-IlLzbByqMxYwclw-mtbe8KRH3CXkNVBQpw_ZbNWUEldJOMKPd-mhROLP3_xKYlr9Mw9CzJErUAlQOKqxp3vdzLLnQaqYEmK84RjptYRdQ2v1FfX4jhcKhqAwslu5Kjd4LRDO-3Dk7y71EVwcAgyCxdEM",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Global Internal Controls (IFC / ICFR / SOX) | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:opsz,wght@6..72,400;500;700&display=swap"
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
                'wght' 300,
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
          <section className="relative h-[85vh] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9vjfHhgouMqiDPrwiK0pQ4UIAW2lIbE-QjxH6qrRr-dDBOFfyDY8Mi3O4xcunqgsU2pycX1w9VXQ3McbtDvO8XjPnNMc07oEWHV0pmH4i8dtA976Ykt3ujE2o_BVtl40Uivq7VFS9PtGRHMHVfSZ4qqJSRP4SyfKvBLcjsWFwmv9fMHrmXjH8VDaZKPgaL_sCUzaBXNH7Dbjf9as_7d9gpUs3xpV1A40xGQGo1Ou6NS7uuhworPg7ENXlmG20H1Mh7tJNtQ1ivEk"
                alt="Hero"
                className="w-full h-full object-cover grayscale brightness-50 contrast-125"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
              <div className="max-w-3xl">
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-white/90 block mb-2">
                  6D ADVISORY SERVICES
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-[1.05] text-white mb-6">
                  Global Internal Controls
                  <br />
                  (IFC / ICFR / SOX)
                </h1>

                <div className="h-[2px] w-24 bg-white mb-6 opacity-80"></div>

                <p className="text-[18px] leading-relaxed text-white/90 max-w-xl font-medium">
                  A rigorous architectural approach to institutional governance,
                  ensuring compliance across global regulatory frameworks
                  through mathematical precision and uncompromising structural
                  integrity.
                </p>

                <div className="mt-16 flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-white text-black text-[11px] uppercase tracking-[0.1em] font-bold hover:bg-[#e2e2e2] transition-all duration-300">
                    Our Expertise
                  </button>

                  <button className="px-8 py-4 border border-white/60 text-white text-[11px] uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300">
                    Download Framework
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8">
              {/* Left */}
              <div className="col-span-12 md:col-span-7">
                <h2 className="font-['Newsreader'] text-[32px] mb-16 border-b border-[#c4c7c7] pb-4">
                  Our Methodology
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
                  {methodology.map((item, index) => (
                    <div
                      key={index}
                      className="border-l border-[#c4c7c7] pl-6"
                    >
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

              {/* Divider */}
              <div className="hidden md:flex col-span-1 justify-center">
                <div className="w-px h-full bg-[#c4c7c7]"></div>
              </div>

              {/* Right */}
              <div className="col-span-12 md:col-span-4 mt-16 md:mt-0">
                <h2 className="font-['Newsreader'] text-[32px] mb-16 border-b border-[#c4c7c7] pb-4">
                  Target Entities
                </h2>

                <ul className="space-y-6">
                  {targetEntities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <span className="material-symbols-outlined text-black mt-1">
                        {item.icon}
                      </span>

                      <div>
                        <h4 className="text-[11px] uppercase tracking-[0.1em] mb-1">
                          {item.title}
                        </h4>

                        <p className="text-sm text-[#444748] leading-[1.6]">
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
          <section className="bg-[#f3f3f4] py-[120px] border-y border-[#c4c7c7]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 md:col-span-6 border-r border-[#c4c7c7] pr-8">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] block mb-2">
                    REPORT 24-08
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mb-6">
                    SOX-Ready in 9 Months: Building a Control Framework for an
                    Indian Company's NYSE Listing
                  </h2>

                  <p className="text-[18px] leading-[1.6] mb-6 text-[#444748]">
                    How a multi-billion dollar technology firm restructured its
                    entire financial ecosystem to meet the rigorous demands of
                    US public markets under an accelerated timeline.
                  </p>

                  <button className="px-8 py-3 border border-black text-black text-[11px] uppercase tracking-[0.1em] hover:bg-black hover:text-white transition-all duration-300">
                    Read Case Study
                  </button>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      {
                        label: "Duration",
                        value: "9 Months",
                      },
                      {
                        label: "Controls Mapped",
                        value: "450+",
                      },
                      {
                        label: "Efficiency Gain",
                        value: "24%",
                      },
                      {
                        label: "Status",
                        value: "Certified",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-8 border border-[#c4c7c7]"
                      >
                        <span className="text-[11px] uppercase tracking-[0.1em] block mb-2">
                          {item.label}
                        </span>

                        <div className="font-['Newsreader'] text-[24px] text-black">
                          {item.value}
                        </div>

                        <div className="h-px w-8 bg-black mt-4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intelligence */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] block mb-2">
                  KNOWLEDGE HUB
                </span>

                <h2 className="font-['Newsreader'] text-[32px]">
                  Latest Intelligence
                </h2>
              </div>

              <a
                href="#"
                className="text-[11px] uppercase tracking-[0.1em] text-black border-b border-black hover:text-[#5e5e5e] hover:border-[#5e5e5e] transition-all"
              >
                View All Publications
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {publications.map((item, index) => (
                <article
                  key={index}
                  className="group"
                >
                  <div className="aspect-square bg-[#e2e2e2] mb-4 overflow-hidden border border-[#c4c7c7]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                    {item.type}
                  </span>

                  <h4 className="font-['Newsreader'] text-[20px] leading-snug mt-2 mb-3 group-hover:underline cursor-pointer">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#444748] leading-[1.6] line-clamp-3">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-black text-white py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8 text-center">
              <h2 className="font-['Newsreader'] text-[32px] mb-6">
                Secure Your Governance Framework
              </h2>

              <p className="text-[18px] leading-[1.6] mb-16 opacity-80 max-w-2xl mx-auto">
                Northrop Management provides the intellectual rigor and
                technical precision required to navigate complex global
                compliance landscapes.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-black text-[11px] uppercase tracking-[0.1em] hover:bg-opacity-90 transition-all">
                  Schedule an Assessment
                </button>

                <button className="px-10 py-4 border border-white text-white text-[11px] uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all">
                  Download Service Brief
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GlobalInternalControls;