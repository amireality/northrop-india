import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ITCyberSystemIntegrityAssurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      number: "01",
      title: "ITGC Assessment",
      description:
        "Comprehensive evaluation of Information Technology General Controls to ensure robust operational governance.",
    },
    {
      number: "02",
      title: "Cyber Maturity",
      description:
        "Deep-dive benchmarking of organizational resilience against evolving global threat vectors.",
    },
    {
      number: "03",
      title: "Data Integrity",
      description:
        "Validating the accuracy, consistency, and contextual reliability of critical enterprise data streams.",
    },
    {
      number: "04",
      title: "Cloud Security",
      description:
        "Architectural verification and governance for decentralized infrastructure and SaaS ecosystems.",
    },
  ];

  const stakeholders = [
    {
      icon: "corporate_fare",
      title: "Boards of Directors",
      description:
        "Strategic risk oversight and fiduciary responsibility for system integrity.",
    },
    {
      icon: "account_balance_wallet",
      title: "Audit Committees",
      description:
        "Rigorous validation of internal controls and compliance frameworks.",
    },
    {
      icon: "analytics",
      title: "CFOs",
      description:
        "Safeguarding financial data pipelines and ERP system reliability.",
    },
  ];

  const publications = [
    {
      type: "WHITE PAPER",
      title: "From IT Audit to Cyber Assurance",
      description:
        "Moving beyond compliance to proactive resilience in the modern firm.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBaXcoON2W3gceaYIpKQWXnGydLDu8OP_5XoKN02RHNnwsnkdanyC6i4wJ7XriNpZ9fWMU_F_zGNVgpUSG3VxdjxU2alO20RsU5YAXlaB3sj4SKqUwS4vxmyL7R8NESb95b7Q5WMYcEbn7i_kNMRHL42hh4brHq5fWJmXxMj5XlxUdDBLja8SRTfIMHATosJKmWc9WUq7S3ZbaslOvYtIGhCoH45j6PhY15uheS-MH626-qdpv-3Wk4JZiHwEVpX0mxVm3_XqScO0M",
    },
    {
      type: "RESEARCH",
      title: "The Cloud Governance Gap",
      description:
        "Analyzing systemic weaknesses in hybrid cloud architectures for 2024.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBc-sEfDrii6ngPcMWA6Whq8ZPhp3Qq-cAWf4na9WS2kxN8_hUUfgqCV2yL8UC9UP356oYSWcnep_ZIwtmXg8JmDyMhZ-lHnh4qkArdnXs3_flldecj9aW0-5LcBfD5XYUGhNXuHuR8__oR--xnyfIYI74oSZ5U13xrfWIooQVqB1Ls8o5sQPboxQs3ysWx-L9AEj-QXuE-2Id3YT4yLJ-zZ8BfRaYrDxlUQWz3_MDQGVQoEbG_mJWnK1fgSWfXwoCaW8O6IHB04CU",
    },
    {
      type: "BRIEFING",
      title: "Quantum Risks in 2025",
      description:
        "Evaluating the timeline for post-quantum cryptographic transformation.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdcc7LeQLbRIBnTbWz_vKyEL8D-lOYUmsvOpFU0tp7pZMbACe_vsFreSQhZvxbQQKq_g2ZVojjOSEMqWFRluiwQuG_lV-zKwY9YSx7hmcjDK-Yol3k_ci9N4PjTS5mG_TRTO51266tH4n5fhcg6V2iF3wg8QIjspqUHT73LV9D1dUB-M7O2KeFIiIthre2dIwDm5ZgfP4EP-_GX7gkn0ynsqqew68k1aKht6bEkrw3LIikBYIgmhieMOuuI09-FAfdr0y5DRADEt4",
    },
    {
      type: "FIRM VIEW",
      title: "The Integrity of Trust",
      description:
        "A foundational essay on why system reliability is the ultimate brand asset.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBnH6AmNUoSpw3uW_c-2MDfNJiBtS6Mvrfam9P8g1I31bdgcTWZYz2XD65564p9fcRtMNsDEoLdfeWyQ_mgucPlXjgEooyzY2wf4Wpn2zWdxcdpXjrZv0gJOFcSsJhbr52anacKcsIAL_Ne0CeIeDDVSvkdPZLWbKScb_6K2h8C11AEEn_YwpEEfcHCVMNMUs7eBP05c4Ht1A_5RJeaNgT43Yw9ydM0xNFQxOn_b-3duXFywjLmwnvMZC3pWnkdH_knyyZm6US5WGI",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          IT, Cyber & System Integrity Assurance | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:opsz,wght@6..72,400;600;700&display=swap"
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

            .hero-gradient-overlay {
              background: linear-gradient(
                to bottom,
                rgba(0,0,0,0.85) 0%,
                rgba(0,0,0,0.4) 40%,
                rgba(0,0,0,0.4) 60%,
                rgba(0,0,0,0.85) 100%
              );
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 grayscale contrast-[1.1] brightness-[0.8]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgdffX6C-3KwK874OE6t5nch4Vl4M__pZCf_c0i8WdPveX1zR6tFM8O5AAzQIdTn2yKk9UGbwX-MNY7E5VnIrrpqSqNRcQavkohMtVYS3Q_fzdiK6fjq2Hk4jo610Df8ptmTkiVoQf4AxKNJ4aHvT3MvpLgTR7MNbByUJhp9NKvjD-uZm292bM559Oho_bnFC5ThRLlET6AB2sMJ80bZHByC0y6zn0FIPWuHKlfSiBb2ZhSlyIkXnaab84HT9KoLYoaggq9vEwj7E"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 hero-gradient-overlay z-10"></div>

            <div className="relative z-20 max-w-[1280px] px-8 w-full text-center">
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-4">
                SERVICE SHEET 6F
              </div>

              <h1 className="font-['Newsreader'] text-[48px] md:text-[64px] text-white max-w-4xl mx-auto leading-tight">
                IT, Cyber & System Integrity Assurance
              </h1>

              <div className="mt-6 w-20 h-[1px] bg-white/40 mx-auto"></div>

              <p className="mt-6 text-[18px] text-white/90 max-w-2xl mx-auto leading-relaxed">
                Ensuring institutional stability through rigorous digital
                infrastructure oversight.
              </p>

              <div className="mt-16">
                <button className="border border-white/40 text-white text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300">
                  Explore Methodology
                </button>
              </div>
            </div>
          </section>

          {/* Capabilities + Stakeholders */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-b border-[#c4c7c7]">
            <div className="grid grid-cols-12 gap-8">
              {/* Left */}
              <div className="col-span-12 md:col-span-7 md:pr-12">
                <div className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-4">
                  Core Capabilities
                </div>

                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Integrated Integrity Assurance
                </h2>

                <p className="text-[18px] text-[#444748] mb-16 leading-[1.6]">
                  We provide rigorous oversight across the digital
                  infrastructure, ensuring that system integrity is not merely a
                  technical checkbox but a pillar of institutional stability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {capabilities.map((item, index) => (
                    <div
                      key={index}
                      className="space-y-2 border-t border-[#c4c7c7] pt-4"
                    >
                      <span className="text-[11px] uppercase tracking-[0.1em] text-black">
                        {item.number}
                      </span>

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

              {/* Right */}
              <div className="col-span-12 md:col-span-5 bg-white p-12 border border-[#c4c7c7] h-fit">
                <div className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-4">
                  Stakeholders
                </div>

                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Who We Advise
                </h2>

                <ul className="space-y-6">
                  {stakeholders.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <span className="material-symbols-outlined text-black mt-1">
                        {item.icon}
                      </span>

                      <div>
                        <h4 className="font-['Newsreader'] text-[24px]">
                          {item.title}
                        </h4>

                        <p className="text-[#444748] leading-[1.6]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-16 pt-6 border-t border-[#c4c7c7]">
                  <p className="font-['Newsreader'] text-[28px] italic leading-[1.4]">
                    "In the modern firm, the integrity of the system is the
                    integrity of the balance sheet."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="bg-[#f9f9f9] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="bg-white border border-[#c4c7c7] grid grid-cols-12 overflow-hidden">
                {/* Left */}
                <div className="col-span-12 md:col-span-4 bg-[#1c1b1b] p-12 text-white">
                  <div className="text-[11px] uppercase tracking-[0.1em] text-[#c8c6c5] mb-4">
                    THE INTERVENTION
                  </div>

                  <h3 className="font-['Newsreader'] text-[32px] mb-6">
                    Cyber Assurance for the Board
                  </h3>

                  <p className="opacity-80 mb-6 leading-[1.6]">
                    Delivering a Non-Technical Cybersecurity Assessment That
                    Changed a Board's Risk Posture.
                  </p>

                  <button className="border border-white/30 px-6 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300">
                    Read Report
                  </button>
                </div>

                {/* Right */}
                <div className="col-span-12 md:col-span-8 p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-2">
                        CLIENT TYPE
                      </div>

                      <div className="font-['Newsreader'] text-[24px]">
                        Global Logistics
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-2">
                        CHALLENGE
                      </div>

                      <div className="font-['Newsreader'] text-[24px]">
                        Information Gap
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-2">
                        OUTCOME
                      </div>

                      <div className="font-['Newsreader'] text-[24px]">
                        15% Risk Reduction
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#c4c7c7] pt-6">
                    <p className="text-[18px] text-[#444748] mb-4 leading-[1.6]">
                      Northrop Management was engaged to bridge the gap between
                      technical security findings and executive decision-making.
                      By translating packet-level vulnerabilities into
                      institutional risk profiles, we empowered the Board to
                      authorize a strategic 3-year transformation roadmap.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#f9f9f9] p-6">
                        <div className="text-4xl font-['Newsreader'] mb-2">
                          40+
                        </div>

                        <div className="text-[11px] uppercase tracking-[0.1em]">
                          Vulnerabilities Mapped
                        </div>
                      </div>

                      <div className="bg-[#f9f9f9] p-6">
                        <div className="text-4xl font-['Newsreader'] mb-2">
                          $12M
                        </div>

                        <div className="text-[11px] uppercase tracking-[0.1em]">
                          Risk Value Quantified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="flex justify-between items-end mb-16 border-b-2 border-black pb-2">
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {publications.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] bg-[#e2e2e2] mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-[11px] uppercase tracking-[0.1em] text-[#747878] mb-2">
                    {item.type}
                  </div>

                  <h4 className="font-['Newsreader'] text-[24px] group-hover:underline decoration-1">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-[#444748] line-clamp-2 leading-[1.6]">
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

export default ITCyberSystemIntegrityAssurance;