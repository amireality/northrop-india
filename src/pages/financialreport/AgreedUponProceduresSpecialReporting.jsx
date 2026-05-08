import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const AgreedUponProceduresSpecialReporting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const protocols = [
    {
      icon: "verified",
      title: "Regulatory Certifications",
      description:
        "Assurance services tailored for government bodies and sector-specific regulators to confirm operational adherence.",
    },
    {
      icon: "account_balance",
      title: "Net Worth Certificates",
      description:
        "Formal validation of asset value and net worth for high-level contractual engagements and immigration requirements.",
    },
    {
      icon: "assignment_turned_in",
      title: "Grant Utilization",
      description:
        "Detailed procedures to verify the appropriate allocation and expenditure of institutional and private grants.",
    },
    {
      icon: "description",
      title: "Custom AUP",
      description:
        "Bespoke investigative procedures agreed upon with clients to report on specific financial or operational data points.",
    },
  ];

  const clients = [
    {
      icon: "corporate_fare",
      title: "Multinational Corporations",
      description:
        "Requiring specific verification for joint ventures or subsidiary oversight.",
    },
    {
      icon: "gavel",
      title: "Legal & Compliance Officers",
      description:
        "Seeking evidentiary-standard documentation for regulatory filings.",
    },
    {
      icon: "account_tree",
      title: "Institutional Investors",
      description:
        "Validating specific asset classes or performance data outside standard audit scopes.",
    },
  ];

  const intelligence = [
    {
      type: "REPORT / WHITE PAPER",
      title: "AUP and Special Purpose Reporting.",
      description:
        "An executive guide to navigating the complexities of non-standard audit procedures for institutional reporting.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBsKmou5UZk25tZ4NiHdRw0w3Mah0UFRYOcd-z5Eh1C8ChH4Scz1GBG19kRDQPzmuMcUATUvrwht6pEix8oG6Np_zyNzGc0YqKXXyAR6TLy_hUnWtRRmXw0c5xA9-7pJ8VipvKRj83aHz4-A2Gs2S9XEGJytnknM6JGCW_R2ywESv_ho6Et3mCuUAghvkQdVpck3Fhs2yyjRLsLL9qLymDR5jm9P4NwER4MgewcZM1_G-9vUbSMeeu6E74T9WFe-165peRyi3x7GbQ",
    },
    {
      type: "REGULATORY / UPDATE",
      title: "Global Certification Evolution.",
      description:
        "Analyzing the shift in cross-border certification requirements following the latest Basel compliance updates.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCxbk7Tc50ScarIYC0NKyGz8foD1mit_nygixRK4bFClqze9fI0O5XoiPhwUxmZ3z03uDZRYyqhSuQqKab87N6PPE9a--7LEQvoTluzU_yMh3YqQonPh7QnM4nRE-0NIPIIBvd5qWbUspSWMyTOStIOXEIIe2tyx0QCrwlSwTvVuZYyLvnNGQk94zhpaCGWehj3xVCrFsFq-AaKA3o54Jp6vnIv4EbdqvTRyJkUZLGd1Kp4A7oBnBWXr4vDgghKSf5ok5BNjzILKdI",
    },
    {
      type: "FIRM / PERSPECTIVE",
      title: "The Interplay of AUP and Audit.",
      description:
        "How institutional stakeholders use special reporting to augment annual financial disclosures.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCh0-XBs75p65Zy7pIqtEzYYsaNfzAr1qRPk0lIL__sovnxMJr0s2Pq_y_vRwXZ9ws7z76sGJA_H_-DkGj4NaV18YlpDnMjEno6IhFw9bP6HbB9Gi0KXguBFvSHk7DA0AW2z3HLtrwAUr5HXSIty4eRnokFtf-bAhu9Sm67_A_XVWIgpnxHZmKnyUu0z1VZdtuEPWkqgtoV82NXUaXRjg1H63KCUYRbJqe2kxHcZzpj4w19x0Kb_pFh_uI9RkJI4lCi-lva3eERpyM",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Agreed-Upon Procedures & Special Reporting | Northrop Management
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
                'wght' 300,
                'GRAD' 0,
                'opsz' 24;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative bg-[#f9f9f9] overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-8 py-[120px] grid grid-cols-12 gap-8 items-center">
              {/* Left */}
              <div className="col-span-12 md:col-span-6 z-10">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4 block">
                  ADVISORY / SPECIAL REPORTING
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-none text-black mb-6">
                  Agreed-Upon Procedures & Special Reporting.
                </h1>

                <p className="text-[18px] text-[#444748] max-w-xl mb-16 leading-[1.6]">
                  Precision reporting and institutional validation for specific
                  regulatory, contractual, and operational requirements.
                </p>

                <div className="h-px w-32 bg-black mb-6"></div>
              </div>

              {/* Right */}
              <div className="col-span-12 md:col-span-6 relative h-[600px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Obm0DOaqbq3db_Qh3H3yXaR7wn5lIPpEDr_rYSOJtGkrKFLysxDvWFYWzGspZxsqEm4mVF2XqdQWjSpZYW3ckQzR-MjSzconRGtSPxv9AXKgxNbNTZ-4t27TlYtV4Itjtter-ZeEo_DC0Os7veL1HhyE4ibyzzNJqkBzvtVSUTMmL7N0yBqVSSxmDOtzpJWVtlPUUscMk-VLZifb8L-zxnSaOBPMxsrWm9q44tdYVaj6RhvwMeY1dBcp1m5SHEysTZSLienA7EU"
                  alt="Architecture"
                  className="w-full h-full object-cover grayscale brightness-90 border border-[#c4c7c7]"
                />
              </div>
            </div>
          </section>

          {/* Protocols */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-t border-[#c4c7c7]">
            <div className="grid grid-cols-12 gap-8">
              {/* Left */}
              <div className="col-span-12 md:col-span-4">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Certification Protocols
                </h2>

                <p className="text-[#444748] leading-[1.6]">
                  Our rigorous methodology ensures compliance with international
                  standards for special-purpose reporting, providing the
                  absolute clarity required by stakeholders.
                </p>
              </div>

              {/* Right */}
              <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {protocols.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 border border-[#c4c7c7] hover:bg-[#f3f3f4] transition-colors"
                  >
                    <span className="material-symbols-outlined text-black mb-4 block">
                      {item.icon}
                    </span>

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
          </section>

          {/* Who It's For */}
          <section className="bg-[#f3f3f4] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left */}
                <div className="col-span-12 md:col-span-6 bg-black text-white p-12">
                  <span className="text-[11px] uppercase tracking-[0.1em] opacity-70 mb-4 block">
                    CLIENT PROFILE
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mb-6">
                    Who It's For
                  </h2>

                  <ul className="space-y-4">
                    {clients.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                      >
                        <span className="material-symbols-outlined mr-4 pt-1">
                          {item.icon}
                        </span>

                        <div>
                          <p className="text-[18px] leading-[1.6]">
                            {item.title}
                          </p>

                          <p className="text-[15px] opacity-70 leading-[1.6]">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className="col-span-12 md:col-span-6 px-12">
                  <h3 className="font-['Newsreader'] text-[28px] italic mb-6 text-[#444748] leading-[1.4]">
                    "In a landscape of shifting compliance, our special
                    reporting provides the bedrock of certainty required for
                    complex cross-border transactions."
                  </h3>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-[#e2e2e2] rounded-full overflow-hidden">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCimN7L_PoI1dT4-dB8tmJtzDEMeOxIAUzsts0VcxCuFlN8I6k8Z0Tw9YFIsXMvbEcn8a37U2nqV4Wa7OjzBDGk9IULWYKFQM5W-o9IU_gomTzeVcDOfOr-EKwszzt7oCOWxWbPJR0XWgDN3lHIPaoeFqqdxOWFsPw5sMtPBLW7dBbqLFx_dPwvJr1atSI1eqMmIIYeqmyNB_FGE1YBoCnZW8tHTKc5pFM8he8nh0hkeCRDkmUVNAEr0bb9HGVOmd8WwYaq_XWrbN4"
                        alt="Partner"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] font-semibold">
                        DR. MARCUS NORTHROP
                      </p>

                      <p className="text-[12px] text-[#444748]">
                        Senior Managing Partner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="border border-[#c4c7c7] bg-white">
              <div className="grid grid-cols-12">
                {/* Left */}
                <div className="col-span-12 md:col-span-6 p-12 border-b md:border-b-0 md:border-r border-[#c4c7c7]">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4 block">
                    CASE STUDY / 042
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mb-6">
                    12 Regulatory Certifications, Zero Delays.
                  </h2>

                  <p className="text-[#444748] mb-6 leading-[1.6]">
                    A global financial infrastructure provider faced an
                    unprecedented 30-day deadline to submit complex operational
                    certifications across 12 different jurisdictions to maintain
                    its licensure.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-black border-b border-[#c4c7c7] pb-1 mb-2 w-max">
                        THE CHALLENGE
                      </p>

                      <p className="italic text-[#444748] leading-[1.6]">
                        Inconsistent reporting standards across multiple regions
                        threatened to stall market entry.
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-black border-b border-[#c4c7c7] pb-1 mb-2 w-max">
                        THE INTERVENTION
                      </p>

                      <p className="italic text-[#444748] leading-[1.6]">
                        Northrop deployed a unified AUP framework that satisfied
                        all 12 regulators simultaneously.
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-black border-b border-[#c4c7c7] pb-1 mb-2 w-max">
                        THE OUTCOME
                      </p>

                      <p className="italic text-[#444748] leading-[1.6]">
                        Full compliance achieved 5 days ahead of schedule,
                        enabling immediate operational commencement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="col-span-12 md:col-span-6 p-12 bg-[#f3f3f4] flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div className="border-b border-[#c4c7c7] pb-6">
                      <p className="font-['Newsreader'] text-[48px] text-black">
                        100%
                      </p>

                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                        PASS RATE
                      </p>
                    </div>

                    <div className="border-b border-[#c4c7c7] pb-6">
                      <p className="font-['Newsreader'] text-[48px] text-black">
                        0
                      </p>

                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                        REPORTING ERRORS
                      </p>
                    </div>

                    <div className="pt-6">
                      <p className="font-['Newsreader'] text-[48px] text-black">
                        12
                      </p>

                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                        JURISDICTIONS
                      </p>
                    </div>

                    <div className="pt-6">
                      <p className="font-['Newsreader'] text-[48px] text-black">
                        5D
                      </p>

                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                        EARLY DELIVERY
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intelligence */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-t border-[#c4c7c7]">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
              <h2 className="font-['Newsreader'] text-[32px]">
                Recent Intelligence
              </h2>

              <a
                href="#"
                className="text-[11px] uppercase tracking-[0.1em] text-black border-b border-black hover:text-[#5e5e5e] hover:border-[#5e5e5e] transition-colors mt-4 md:mt-0"
              >
                VIEW ALL PUBLICATIONS
              </a>
            </div>

            <div className="grid grid-cols-12 gap-8">
              {intelligence.map((item, index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-4 group"
                >
                  <div className="aspect-[16/10] bg-[#e2e2e2] mb-6 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2 block">
                    {item.type}
                  </span>

                  <h3 className="font-['Newsreader'] text-[24px] mb-2 group-hover:text-[#5e5e5e] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#444748] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-[1280px] mx-auto px-8 pb-[120px]">
            <div className="bg-[#1c1b1b] p-16 text-center">
              <h2 className="font-['Newsreader'] text-[48px] text-white mb-6 leading-tight">
                Secure your reporting framework.
              </h2>

              <p className="text-[18px] text-[#858383] max-w-2xl mx-auto mb-16 leading-[1.6]">
                Consult with our global risk and advisory experts to define
                precision procedures tailored to your specific certification
                requirements.
              </p>

              <div className="flex flex-wrap justify-center gap-8">
                <button className="bg-white text-black px-10 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-[#e2e2e2] transition-colors">
                  SCHEDULE BRIEFING
                </button>

                <button className="border border-white text-white px-10 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-colors">
                  DOWNLOAD CAPABILITIES
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AgreedUponProceduresSpecialReporting;