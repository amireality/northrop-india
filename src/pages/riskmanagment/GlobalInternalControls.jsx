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
        "/riskadvisoryimg/global-internal1.png",
    },
    {
      type: "EXECUTIVE BRIEF",
      title: "The Cost of Non-Compliance: A Multi-Year Impact Study",
      description:
        "Quantifying the financial and reputational damage resulting from material weaknesses in internal controls.",
      image:
        "/riskadvisoryimg/global-internal2.png",
    },
    {
      type: "TREND REPORT",
      title: "AI in Audit: Automating Continuous Control Monitoring",
      description:
        "How machine learning is transforming the testing of internal controls from periodic checks to real-time oversight.",
      image:
        "/riskadvisoryimg/global-internal3.png",
    },
    {
      type: "RESEARCH",
      title:
        "Governance in the Post-Pandemic Distributed Workplace",
      description:
        "Addressing the challenges of maintaining effective internal controls within a hybrid and remote work environment.",
      image:
        "/riskadvisoryimg/global-internal4.png",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Global Internal Controls (IFC / ICFR / SOX) | Northrop Management
        </title>
       
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-[85vh] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
              <img
                src="/riskadvisoryimg/global-internal.jpeg"
                alt="Hero"
                className="w-full h-full object-cover "
              />

            
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