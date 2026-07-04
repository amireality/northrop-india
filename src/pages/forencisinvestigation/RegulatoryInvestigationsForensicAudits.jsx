import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const RegulatoryInvestigationsForensicAudits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: "account_balance",
      title: "RBI-Directed Audits",
      description:
        "Specialized forensic engagements mandated by the Reserve Bank of India to investigate NPAs and systemic fraud.",
    },
    {
      icon: "gavel",
      title: "SEBI Support",
      description:
        "Investigative support for insider trading, market manipulation, and disclosure violations under SEBI purview.",
    },
    {
      icon: "search_insights",
      title: "Forensic Accounting",
      description:
        "Deep-dive financial reconstruction and asset tracing to identify hidden liabilities and fund siphoning.",
    },
    {
      icon: "shield_person",
      title: "Investigation Defense",
      description:
        "Counter-investigative analysis and documentation preparation for organizations facing regulatory scrutiny.",
    },
  ];

  const audience = [
    {
      icon: "corporate_fare",
      title: "Lending Institutions",
      description:
        "Public and private sector banks managing stressed assets.",
    },
    {
      icon: "balance",
      title: "Legal Counsel",
      description:
        "Law firms requiring forensic backing for NCLT and litigation.",
    },
    {
      icon: "apartment",
      title: "Board Committees",
      description:
        "Audit committees addressing internal whistleblower complaints.",
    },
    {
      icon: "public",
      title: "Global Corporations",
      description:
        "MNCs navigating Indian regulatory compliance landscapes.",
    },
  ];

  const publications = [
    {
      type: "Whitepaper // Regulatory",
      title: "India's RBI Forensic Audit Framework",
      description:
        "A comprehensive analysis of the evolving expectations from the central bank regarding forensic scrutiny.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6uO3AlRDCGTTuowhuEsHenFEWkmjpdzUoVdsVGWc65Gc2pBIe0YGoYIwpEmHzDJ6Sjv5nMJJkHRJoMD-ieTXMyWkvsecsT4K7Hfri6TaL1c_ge5eNa426317277Yg-qUumR5aDIOOdHGvhPJw-4M-pievdXcttOdde49otE9T0mc9ZJIYQ22vnL1e7cOS3c4u2T3Bl5uQqiF-613DLm848HaB4HnfadDAMZ1jBNZMEC_cTqcHuSCjk5WGy_lL-WkDHfmZo-SeFR0",
    },
    {
      type: "Intelligence // Asset Tracing",
      title: "Digital Footprints in Fund Siphoning",
      description:
        "How sophisticated AI tools are revolutionizing the identification of related-party transactions.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAgcCv_uzTtRGr4KAxurhbikDftzCOGSECn9zTDmDcxIoe8XKWxFrI9po3hg-Xdcim-Ste2NDykYevT6W0euD47yVA3cK-xGdquPUWNEDc7J0QnrZSfuTUWGt9E-U8e4dT4dXUL2DCzYsqh30z8-2WvZUwur0ZSuCbY-jk1aczhiYlRYdVJ0rmpIEGC6dIpC_q0x_2gNF5edBjIabaVfVwUFc_tAz9N2Y-9ONUveFcqHZuE4Q3VHmIwCS_5wFUqlBM9wfPsMIO3hac",
    },
    {
      type: "Briefing // SEBI",
      title: "Market Manipulation Post-2023",
      description:
        "Critical defense strategies for listed companies facing SEBI algorithmic trading investigations.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-CnaDq2RZdeE4QFWw86DxEJ2lBXOh_2mVVF2YIzg-byE-aG9dEpaJkSHTASt2FIG-iX5NmEL5iKkLVJ4Bux0TrWR2d__rKJlbexCvjWy_YR77ZRHSN5rgItmmbEotH9tM83u59GHxsZWCU2_Se-TtzPZKtpclq5Ivcl7adM-mfMpAnbzK8OIQ5HJy1tTwD8IR21gnoaZTVVsAmnWhUd-euoSgX4C0jjCjDhevZmUplaIpNo2kHRXqs-sZsWDkU1rXrbTeF6Ri9G4",
    },
    {
      type: "Report // Governance",
      title: "The Board’s Role in Investigations",
      description:
        "Navigating the ethical and fiduciary responsibilities during active forensic audits.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAmVAFTZ966vmj_kzfA6NRh4PlRm4ct1LjNozC7gIWsg6EfaCGpJnSapFPKfBJ9D4yKhaEZO3zKZjE8qpV3LiAylIRIzQz4VzPf_qC1CWbAMVSH6BLoZJeeg52AcOOIxD5j1hkv8LMuJuVi-vgpyZTcTyEceXvQZhcuJPX3VHqZbvdNQ_6CDh6Qh2Uz23d2L17vmZZUbnpZUC8tfMSZ7xdLMfmvxdmDBlm_oiR9DgStYJ32UTn0jpjrTEloTYWajKG1YyPKnL3u2Jg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Regulatory Investigations & Forensic Audits | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <style>
          {`
            body {
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

      <div className="bg-[#f9f9f9] text-[#1a1c1c] overflow-x-hidden">
        {/* Navbar */}
       

        <main className="mt-[4px]">
          {/* Hero */}
          <section className="relative w-full h-[85vh] overflow-hidden flex items-end">
            <div className="absolute inset-0">
              <img
                src="/regulatory-investigations-rbi-forensic-audits.jpeg"
                alt="Hero"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20"></div>

            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto w-full px-8 pb-[120px]">
              <div className="max-w-4xl">
                <span className="block text-[11px] uppercase tracking-[0.2em] font-bold mb-4 text-[#ffff]">
                  Regulatory Investigations & Audit
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-none mb-6  text-[#ffff]">
                  Supporting organisations through India's most complex
                  regulatory mandates.
                </h1>

                <div className="w-24 h-1.5 bg-[#ffff]"></div>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 border-t border-black pt-4">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  What We Do
                </h2>

                <p className="text-[15px] leading-[1.6] text-[#444748]">
                  We provide critical evidence-based intelligence and forensic
                  technicalities required for high-stakes regulatory compliance
                  and defense.
                </p>

                <div className="mt-16 hidden md:block">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJmXe66eQ7KqqH2ed-Ijy_DQOaBOfi7KnwFMDcN0DUkYBt0L-a1AYJLRCrd7UFI_LEQQPfLSUBwbM7wG4I0zumVzZE378ZbVQ3wzt9qDvd5swSEY8WAa64HDf7CnAOFeCtGv91CFZZBmkP6ir-YDibIMjhZC2qs2X9lK4ypvuEeH0vywe4-1-6rKwZ5FJ6yYHCa671-Po5Y3FE_qBRqwXlJbV5sL9uADEKVcKN9cKO2fD1LDa8Ou94kPW58ubQp1FP00DaS3YQhrc"
                    alt="Texture"
                    className="w-full aspect-[4/5] object-cover grayscale border border-[#c4c7c7]"
                  />
                </div>
              </div>

              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="p-8 border border-[#c4c7c7] hover:bg-[#f3f3f4] transition-colors"
                  >
                    <span className="material-symbols-outlined mb-4 text-black">
                      {service.icon}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-2">
                      {service.title}
                    </h3>

                    <p className="text-[15px] leading-[1.6] text-[#444748]">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="bg-[#f3f3f4] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 md:pr-12">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] block mb-4">
                    Case Study // No. 442
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] leading-tight mb-6">
                    Managing a Multi-Bank Forensic Audit (Rs. 1,400 Cr NPA)
                  </h2>

                  <div className="space-y-6 mb-16">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] mb-2">
                        The Challenge
                      </h4>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        A consortium of 12 banks required an immediate forensic
                        audit of a large infrastructure player following a
                        default of ₹1,400 Crores.
                      </p>
                    </div>

                    <div className="border-l-2 border-black pl-6">
                      <h4 className="text-[11px] uppercase tracking-[0.1em] mb-2">
                        The Intervention
                      </h4>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        Northrop deployed a 40-person forensic team to
                        reconstruct 5 years of transactions across 128 bank
                        accounts.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] mb-2">
                        The Outcome
                      </h4>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        Identified ₹320 Cr in diverted assets and provided the
                        terminal evidence for recovery proceedings.
                      </p>
                    </div>
                  </div>

                  <button className="border border-black px-8 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-black hover:text-white transition-colors">
                    Read Full Report
                  </button>
                </div>

                <div className="md:col-span-6">
                  <div className="aspect-square border border-[#c4c7c7] bg-white p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk0S5poj4Ddz2DeD-p239i7If27nQ4_mEYJvdpUWrv8JLFuAjgZWJMeAI6xtiqdjx5giyKwOzcCMo1lz1b5GBTHC_SzTB8OPm1BjnZv3jVlmJzaOwFUEohS2dGBPL3_Oar_z_pAqAVQkhw0adMwhDsa8xitmyND33awTVeT2aZQ3d33XQEioumvu33KapbgYyUqIrUGRdmvjV8U2bZ_jZa_8kRBIS_gU8dYXBzP-xGlDtXnXxb1vabNIhboPfW7SiHV305ZS4c9aA"
                      alt="Background"
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-10"
                    />

                    <div className="relative z-10 w-full">
                      <div className="font-['Newsreader'] text-[48px] mb-2">
                        ₹14.0Bn
                      </div>

                      <div className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                        Total NPA Under Review
                      </div>

                      <div className="w-full h-px bg-[#c4c7c7] my-8"></div>

                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <div className="font-['Newsreader'] text-[32px]">
                            128
                          </div>

                          <div className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                            Accounts Audited
                          </div>
                        </div>

                        <div>
                          <div className="font-['Newsreader'] text-[32px]">
                            200+
                          </div>

                          <div className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                            Shell Entities Mapped
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto border-b border-[#c4c7c7]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Who It's For
                </h2>

                <p className="text-[18px] leading-[1.6] mb-16">
                  Northrop Management serves institutional stakeholders where
                  the cost of failure is absolute.
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {audience.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-black">
                        {item.icon}
                      </span>

                      <div>
                        <span className="block font-bold text-[15px]">
                          {item.title}
                        </span>

                        <span className="text-[15px] text-[#444748]">
                          {item.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 pt-12 lg:pt-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcLV8UVPWPHbiLIU_2VjTpOEgUIPum5pi9bfQ2Mn3kn9IvXkWNT3eZkgPfl_YPUA1srbiQFv6ztxHxzxSIFElYb3H-ybldH3VxNXyljYJk5fpB_SnP659xUs0ynJDe6OZf_BAHjfatLOyeI5ZxIZOodpuZvB2EKGnDlRIIHh0JJEB1ikSlEevZGido0_vqdVyI2JLqlSqFYK60r3Z_j-mEcC2Pd7a4Y5oiFkYb7-ocbSBH-N6LOiT87UitBw3XrxQWwB8AZYU7rHQ"
                  alt="Architecture"
                  className="w-full aspect-square object-cover grayscale border border-[#c4c7c7]"
                />
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-['Newsreader'] text-[32px]">
                  Latest Intelligence
                </h2>

                <p className="text-[15px] text-[#444748]">
                  Institutional perspectives on regulatory shifts.
                </p>
              </div>

              <Link to="/insights"
                className="text-[11px] uppercase tracking-[0.1em] border-b border-black pb-1"
              >
                View All Publications
              </Link>
              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {publications.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden border border-[#c4c7c7] bg-[#e2e2e2] mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <span className="block text-[11px] uppercase tracking-[0.1em] text-[#464747] mb-2">
                    {item.type}
                  </span>

                  <h3 className="font-['Newsreader'] text-[24px] mb-2 group-hover:text-black">
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

export default RegulatoryInvestigationsForensicAudits;