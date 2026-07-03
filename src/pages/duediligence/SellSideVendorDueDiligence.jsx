import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SellSideVendorDueDiligence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: "analytics",
      title: "QofE preparation",
      description:
        "Rigorous quality of earnings analysis to normalize EBITDA and eliminate surprises during the buyer's deep dive.",
    },
    {
      icon: "description",
      title: "VDD report distribution",
      description:
        "Authoritative vendor reports that provide a single source of truth for all potential bidders, accelerating the timeline.",
    },
    {
      icon: "lan",
      title: "Data room management",
      description:
        "Strategic organization and curation of disclosure materials to maintain momentum and protect sensitive data.",
    },
    {
      icon: "gavel",
      title: "SPA advisory",
      description:
        "Technical support for the Sale and Purchase Agreement, ensuring financial representations align with the VDD findings.",
    },
  ];

  const stakeholders = [
    {
      number: "01",
      title: "PE funds exiting investments",
      description:
        "Ensuring full realization of the value bridge while minimizing the risk of price chips during exclusivity.",
    },
    {
      number: "02",
      title: "Promoters selling businesses",
      description:
        "Bridging the gap between institutional buyer expectations and founder-led reporting structures.",
    },
  ];

  const publications = [
    {
      type: "TRANSACTION STRATEGY",
      title:
        "The Seller's Advantage: How Vendor Due Diligence Changes the Power Dynamics",
      description:
        "An analysis of how upfront disclosure prevents price erosion and maintains competitive tension throughout the auction process.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBpKeaZ4PaMnUX8RFpPl-YiZOoPDx5t6GHnUoVqG_fAgli0bH-7PfESoMqEn5s2MxqajwpKCzU2j1jjSLlwbV1x5fxzXwqk6nb-mlEzXXLHLTmBGmLBgzQdHVOd1VnVvkk0YhXM7_s82rkOVNl_y7RdTwEWG1-bqDGhjCxSGMgp32hSw_RqXCg2QT7-6NkHCbCtbJdflu-59Sb_n0YW52DCKWoQjUaEep9wc0G6iuJGSmheouj342oLJPDmIq9P0ZtayuwUYCla4ok",
    },
    {
      type: "RISK MITIGATION",
      title:
        "Navigating Contingent Liabilities in Secondary Buyouts",
      description:
        "Understanding the increasing complexity of indemnity structures and warranty insurance in the current PE landscape.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDXR3HVdvKASolEo22SLUux3PpIfZS3rgcR6BuHFP-AKJGcK6YzhPZfCWi2nd9u9yDZPSfDHzSv06wa1eK9MDIEiIvkNmzjwb8jeQ7miliVkDyg52omkfKI4h7v42IHtc0O0JOf6Ikg_B3yQtHNu8An5e1sj3TSmKfSMXzMq7GTYegz5nAS8Fip1Tqj40sMTgJ6MdIFyG_r6E1U3YnnEB4wFs7GIraoq0xvE9etCwG2gX7IDbt-1JfYCp6DtLwQSGGj086oQka4nSI",
    },
    {
      type: "DATA GOVERNANCE",
      title:
        "The VDR Architecture: Structuring Disclosure for Velocity",
      description:
        "Best practices for virtual data room management that balance transparency with extreme operational security.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4BZJIKd-aekF_YNGxpXm_V40sD4PUShNOQ9QkDlvwL65gkxBmoc3lWshbUx6BFXBYqRztFZOI8uWGICSFuDzhZfF_daeMrbA5aEVT5DWdtZM5DVK1F_3KWPH4gogiNnWreX2sPH9fL1pAHD_rlapv51SZTZn5uIGnY7dVrAmtGSV65mnZ-xmsvCkeqNleqS6ksLUnQtqg6feH82V0r8977vX6IgbZhSlhmUUwoPxWToRZpX6Z1HNU55PSyfE1udtslwgxqPPohc",
    },
    {
      type: "VALUATION BRIDGE",
      title: "EBITDA Normalization in Volatile Markets",
      description:
        "Technical guidance on justifying pro-forma adjustments in a high-interest-rate environment.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBUoTh-EXDTy8nY1NNn13chHv7C7fUxLcH2KvaUHWZlDAsNtR-rSLFUYiCraBlAQ6dWTq3R9me-vLy3cU7Gq0MBlOYDb4WhFyd-cy3rRK0By492_gVpqSoJ1edeZK8h0xp2CkgobkXLP3dTqOIa5IDrMKtP01owLBpZ1dHWR_joqpO6-6Yzqj6udQ6R_5ny9wQ4650qbv9uQDnZ8RaOZrWQgbFmuzaIXEHeHtec5r_DrcArY1ZxX3yvdyoLOE1QqdQ7KEqHtxwfmdE",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Sell-Side & Vendor Due Diligence (VDD) | Northrop Management
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
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-[819px] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0">
              <img
                src="/sell-side-financial-due-diligence.jpeg"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full grid grid-cols-12">
              <div className="col-span-12 md:col-span-8 lg:col-span-7">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#ffff] mb-4 block">
                  ADVISORY / M&A SERVICES
                </span>

                <h1 className="font-['Newsreader'] text-[48px] leading-none text-white mb-6">
                  Sell-Side & Vendor Due Diligence (VDD)
                </h1>

                <p className="text-[18px] leading-[1.6] text-[#ffff] max-w-xl">
                  Maximizing transaction velocity and exit value through
                  rigorous preparation and narrative control.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8 border-t border-[#c4c7c7] pt-6">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="font-['Newsreader'] text-[32px] mb-4">
                  What We Do
                </h2>

                <p className="text-[15px] leading-[1.6] text-[#444748]">
                  We provide institutional-grade preparation to ensure the
                  seller dictates the pace and terms of the transaction.
                </p>
              </div>

              <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 border border-[#c4c7c7] bg-white"
                  >
                    <span
                      className="material-symbols-outlined text-black mb-4"
                      style={{
                        fontVariationSettings: "'opsz' 40",
                      }}
                    >
                      {item.icon}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[15px] leading-[1.6] text-[#444748]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Strategic Alignment */}
          <section className="bg-black text-white py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
                <h2 className="font-['Newsreader'] text-[32px] mb-6">
                  Strategic Alignment
                </h2>

                <p className="text-[18px] leading-[1.6] opacity-80">
                  Our VDD services are engineered for sophisticated actors who
                  understand that deal certainty is a product of preparation.
                </p>
              </div>

              <div className="col-span-12 lg:col-span-7 space-y-6">
                {stakeholders.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 border-l-2 border-[#858383] bg-[#1a1c1c]"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#858383]">
                      <span className="font-['Newsreader'] text-[24px]">
                        {item.number}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-['Newsreader'] text-[24px] mb-2">
                        {item.title}
                      </h4>

                      <p className="text-[15px] leading-[1.6] text-[#858383]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="py-[120px] px-8 bg-[#f3f3f4]">
            <div className="max-w-[1280px] mx-auto border border-[#c4c7c7] bg-white">
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 p-12 lg:p-16 border-b md:border-b-0 md:border-r border-[#c4c7c7]">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4 block">
                    SELECTED INTERVENTION
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mb-6">
                    Rs.900 Cr PE Exit: Accelerating Close to 90 Days
                  </h2>

                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-black mb-2">
                        THE CHALLENGE
                      </h4>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        A complex industrial portfolio required an immediate
                        exit to meet fund cycle requirements. Historical
                        reporting was fragmented and inconsistent.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.1em] text-black mb-2">
                        THE INTERVENTION
                      </h4>

                      <p className="text-[15px] leading-[1.6] text-[#444748]">
                        Northrop deployed a 24/7 task force to reconstruct 3
                        years of financial data, producing a defensible VDD
                        report within 21 days.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#c4c7c7] flex gap-6">
                    <div>
                      <span className="font-['Newsreader'] text-[32px] block">
                        90
                      </span>

                      <span className="text-[11px] uppercase tracking-[0.1em]">
                        DAYS TO CLOSE
                      </span>
                    </div>

                    <div className="border-l border-[#c4c7c7] pl-6">
                      <span className="font-['Newsreader'] text-[32px] block">
                        21
                      </span>

                      <span className="text-[11px] uppercase tracking-[0.1em]">
                        REPORT DELIVERY
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 min-h-[400px]">
                  <img
                    src="/sell-side-financial-due-diligence1.jpeg"
                    alt="Case Study"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="flex justify-between items-end mb-6 border-b border-[#747878] pb-2">
              <h2 className="font-['Newsreader'] text-[32px]">
                Latest Intelligence
              </h2>

              <a
                href="#"
                className="text-[11px] uppercase tracking-[0.1em] text-black hover:underline"
              >
                View Archive
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {publications.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video mb-4 bg-[#eeeeee] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2 block">
                    {item.type}
                  </span>

                  <h3 className="font-['Newsreader'] text-[24px] mb-2 group-hover:underline">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-[#444748] line-clamp-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-[120px] bg-[#1a1c1c] text-white">
            <div className="max-w-[1280px] mx-auto px-8 text-center">
              <h2 className="font-['Newsreader'] text-[32px] mb-6">
                Secure Your Exit Narrative
              </h2>

              <p className="text-[18px] leading-[1.6] text-[#858383] max-w-2xl mx-auto mb-16">
                Institutional-grade due diligence for high-stakes divestitures.
                Contact our London or New York offices for a confidential
                brief.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-10 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-[#c7c6c6] transition-colors">
                  Request Consultation
                </button>

                <button className="border border-[#858383] text-white px-10 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-[#474646] transition-colors">
                  Download Service Profile
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SellSideVendorDueDiligence;