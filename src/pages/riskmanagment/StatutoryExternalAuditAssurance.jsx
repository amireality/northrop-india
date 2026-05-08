import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const StatutoryExternalAuditAssurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stakeholders = [
    {
      icon: "account_balance",
      title: "CFOs of Listed Corporations",
    },
    {
      icon: "corporate_fare",
      title: "Financial Controllers",
    },
    {
      icon: "gavel",
      title: "Audit Committees",
    },
    {
      icon: "domain",
      title: "Large Private Entities",
    },
  ];

  const services = [
    {
      title: "Statutory Audit Support",
      description:
        "Streamlining the interface with external auditors and preparing comprehensive audit-ready schedules.",
    },
    {
      title: "Accounting Policy Advisory",
      description:
        "Strategic guidance on the formulation and implementation of global accounting policies.",
    },
    {
      title: "Ind AS / IFRS Resolution",
      description:
        "Technical interpretation and resolution of complex international accounting standard requirements.",
    },
    {
      title: "Financial Close Support",
      description:
        "Accelerating month-end and year-end close processes while enhancing data integrity.",
    },
  ];

  const intelligence = [
    {
      type: "REPORT",
      title: "The CFO's Guide to Audit Readiness",
      description:
        "Navigating the internal controls landscape for the upcoming fiscal year.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDNmAOwCCPQ1UIcin8zoLbdUmD1qmfQYG2DOXtIkk5c2enja8XEmdEi4tn8PAVqsWPq0mFRxcyIIbiR9Lr9IbBqf4DQO2Iaf_tvKoY_NDQ7GEZ45rQK8U75UK3rrJR2FL65iA8X8SHli5edDlDFlyctYMvDF325anHAxlrIqj_nyiTRHenfY0W7L9e_ES--iOJ9WjhtMokv1ccM3dglu9Cif1h1pcheJL5sJOMZT5xAkDcxoFYNh2Q11PZh5kwhzah5JZUh6w5e_BE",
    },
    {
      type: "BRIEFING",
      title: "Global IFRS Convergence Update",
      description:
        "Key changes in disclosure requirements for multi-national operations.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEGFef9nf6xJ4vyMVEFplWbGlYxSbyWzlffTDpc0QZ2NOF4_NNJ1fVzpiHutkDAWZKBfeqOhwNrTpTaAhD3gfAbxCN-ev08RPg98lwE1euAIOgxqBPWZ7qK0lixZH7FwLD6FNgg7fpt9WIHrf-dl730xh2JQuK6eqIOcuV2bc4EQxzx-ty22XDjWeV61yzCsnYsBRvA_gydXr4GLEi0SFhoAVBI1bfd-fIsGvVaHmX72OQGiFcH86CQl-m-FJthgzJ7T4rydhWQfc",
    },
    {
      type: "ANALYSIS",
      title: "Managing Materiality in 2024",
      description:
        "Redefining risk thresholds in an era of heightened institutional scrutiny.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCVh41HfzYRwm7xLnoTBJnWtdH8lNxLXbLAy2WMRCAogecqNY2mWMRk_K4WP6-UJJ0ZY-OebL5e-r9j9SME4qjSAqmNXd4OY5A8iiODOpqqOv7an3f6j_ONWKfWUH25etSkdYR-Iv-om3nWwmhkjfESHsM_oJD42oVbFvqPX5rorqzzrn8WPxuGJTqLnl5ddERRHjulfSr38u5G2i3b7wjfHRVRU5dVbb8gvDnlwk-ExXvMWwNkDHVC9UcKiLIQ21-p1Oq0npc65BQ",
    },
    {
      type: "TECHNICAL",
      title: "Automation in the Financial Close",
      description:
        "How robotic process automation is reshaping audit documentation.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCTFlEOKwOtC8PPn02xFfKyx2xV1vx68GdCGVTh5udjUIHju90bmcl6UUujCf6vMuyKUmAzOgv6iNaXUz-SV_8uLb1QMBM55erpMV9U_H0OiJcMf3m0NOsUAk3bhDkSwVS0PNS6CCOXp6Y3y_5CgRznTq_IhA7WpjApbn9noQ9S3hHR1MW0xFFMncY4tD_8ZEkoJj-YUGGE4JQmwDH1N2H6Zgm9eU3prATIO2UVtngOfZjSf3htC_Z62AJMbr-0_FcMROltlH5pCCQ",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Statutory & External Audit Assurance | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap"
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

            .hero-gradient {
              background: linear-gradient(
                to right,
                rgba(0,0,0,0.85) 0%,
                rgba(0,0,0,0.6) 50%,
                rgba(0,0,0,0.2) 100%
              );
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeLf4TzN9xREnmNu6wPeka3ZWHjsCjR9WOjg615SLXEhHvr_avKepla2r7ShJarWmXRCiC0D2nDZIQkfZbrg_ReOPWtcMN12NdAG0nTD060CytSJRvRPyL5dI7xQiY9iudPnhv4MCG2IOd0Zj8ooBYeRw6PkeNLu2py5P_tQAUEVYIvVD7KOnQEGYYt2lhpwnElIltLVSsAnhbqE4_nRiYeRhvjuLUspuoygI5iHGcjcPnvo7FSIJL3BjAEYaEysk1MRyaK74oox4"
                alt="Hero"
                className="w-full h-full object-cover grayscale contrast-125 brightness-75 scale-105"
              />

              <div className="absolute inset-0 hero-gradient"></div>
            </div>

            <div className="relative w-full max-w-[1280px] mx-auto px-8 z-10">
              <div className="max-w-2xl">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-6 block">
                  Advisory / 6C
                </span>

                <h1 className="font-['Newsreader'] text-[64px] leading-[1.05] text-white mb-8 drop-shadow-2xl">
                  Statutory & External Audit Assurance
                </h1>

                <div className="w-24 h-0.5 bg-white mb-10"></div>

                <p className="text-[18px] text-white/95 max-w-xl leading-relaxed drop-shadow-md">
                  Precision-driven audit support and accounting resolution for
                  complex global entities. We provide the institutional rigor
                  required to navigate stringent regulatory landscapes with
                  absolute certainty.
                </p>

                <div className="mt-12 flex flex-wrap gap-6">
                  <button className="bg-white text-black px-10 py-5 text-[11px] uppercase tracking-[0.1em] hover:bg-[#e2e2e2] transition-all duration-300 shadow-xl">
                    Request Consultation
                  </button>

                  <button className="border border-white/50 text-white px-10 py-5 text-[11px] uppercase tracking-[0.1em] hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                    Our Methodology
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Identity & Intent */}
          <section className="py-[120px] border-b border-[#c4c7c7] bg-[#f9f9f9]">
            <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-12 gap-8">
              {/* Left */}
              <div className="col-span-12 md:col-span-5 border-r border-[#c4c7c7] pr-8">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Who It's For
                </h2>

                <p className="text-[#444748] mb-6 leading-[1.6]">
                  Our assurance services are engineered for those charged with
                  the highest level of financial governance in major
                  institutions.
                </p>

                <ul className="space-y-4">
                  {stakeholders.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <span className="material-symbols-outlined text-black">
                        {item.icon}
                      </span>

                      <span className="text-[11px] uppercase tracking-[0.1em] font-semibold">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div className="col-span-12 md:col-span-7 md:pl-8">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  What We Do
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-['Newsreader'] text-[24px] mb-2">
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

          {/* Case Study */}
          <section className="py-[120px] bg-[#f3f3f4]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="border border-[#c4c7c7] bg-white p-12">
                <div className="grid grid-cols-12 gap-8 items-center">
                  {/* Left */}
                  <div className="col-span-12 md:col-span-4">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdfBEQcwoMncb7O3WlzeE9_Ag8M0YaIfH7BGFBc3voz2ol2gcFmnGyIhHZlC0-QDbmuG1KWtKwmaDLC9iocaedAXPEjNvBAb_Slon2BJNGaidGKRygK51AJbRc2GIXX3gyBcjllmHI2yk_KjzAHSqeXlGWdzFxyQzJAmBcRMNPwxJP6WPv7M89Rsngzz4Z-NXlEhiFCkh5r0sGiLE0OttYcHR3kU7LGwxg56AKBdqJ8X7HSAWZlB2jHt7vAXgtnjB7p7OwKOc-vxo"
                      alt="Case Study"
                      className="w-full aspect-[3/4] object-cover grayscale"
                    />
                  </div>

                  {/* Right */}
                  <div className="col-span-12 md:col-span-8">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-[#5e5e5e] mb-4 block">
                      Case Study // Rapid Recovery
                    </span>

                    <h2 className="font-['Newsreader'] text-[32px] mb-6">
                      Clearing 18 Months of Audit Backlog in 60 Days: Financial
                      Close Support That Got a Listed Company Back on Track
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-y border-[#c4c7c7] py-8">
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.1em] block mb-2 font-semibold">
                          The Challenge
                        </span>

                        <p className="leading-[1.6]">
                          A major listed entity faced potential delisting due to
                          severe financial reporting delays.
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] uppercase tracking-[0.1em] block mb-2 font-semibold">
                          Intervention
                        </span>

                        <p className="leading-[1.6]">
                          Northrop deployed a 12-person rapid response team to
                          reconstruct general ledgers and automate schedules.
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] uppercase tracking-[0.1em] block mb-2 font-semibold">
                          Outcome
                        </span>

                        <p className="leading-[1.6]">
                          Audit opinion signed 14 days ahead of the emergency
                          regulatory deadline.
                        </p>
                      </div>
                    </div>

                    <button className="text-[11px] uppercase tracking-[0.1em] border-b border-black pb-1 hover:text-[#5e5e5e] hover:border-[#5e5e5e] transition-colors">
                      Read Full Intervention Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intelligence */}
          <section className="py-[120px] bg-white">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="flex justify-between items-end mb-16 border-b border-black pb-4">
                <h2 className="font-['Newsreader'] text-[32px]">
                  Latest Intelligence
                </h2>

                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.1em] mb-1"
                >
                  View Archive
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {intelligence.map((item, index) => (
                  <article
                    key={index}
                    className="flex flex-col group cursor-pointer"
                  >
                    <div className="aspect-video bg-[#f9f9f9] mb-6 overflow-hidden border border-[#c4c7c7]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748] mb-2">
                      {item.type}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-4 group-hover:underline">
                      {item.title}
                    </h3>

                    <p className="text-[#444748] leading-[1.6]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default StatutoryExternalAuditAssurance;