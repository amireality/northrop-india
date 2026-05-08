import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const InternalAuditTransformationQualityAssessment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      number: "01",
      title: "IAQA & Quality Management",
      description:
        "Comprehensive Internal Audit Quality Assessments (IAQA) aligned with Global Internal Audit Standards, providing independent validation and performance benchmarking.",
    },
    {
      number: "02",
      title: "Capability Maturity",
      description:
        "Mapping the current internal audit lifecycle against institutional excellence models to identify gaps in talent, process, and reporting agility.",
    },
    {
      number: "03",
      title: "Methodology Redesign",
      description:
        "Modernizing audit workflows through risk-based planning, agile execution frameworks, and dynamic reporting structures tailored for C-suite consumption.",
    },
    {
      number: "04",
      title: "Technology Enablement",
      description:
        "Implementation of continuous auditing tools, AI-driven data analytics, and integrated GRC platforms to reduce manual friction and increase insight precision.",
    },
  ];

  const stakeholders = [
    {
      icon: "account_balance_wallet",
      title: "Audit Committees",
      description:
        "Seeking independent assurance on the effectiveness and strategic alignment of their internal controls.",
    },
    {
      icon: "groups",
      title: "Chief Audit Executives",
      description:
        "Pivoting from traditional compliance to high-impact advisory while managing evolving global standards.",
    },
    {
      icon: "corporate_fare",
      title: "Institutional Boards",
      description:
        "Requiring clear, data-backed intelligence to govern complex global risk landscapes and ESG mandates.",
    },
  ];

  const publications = [
    {
      type: "Market Report",
      title: "India's Internal Audit Maturity Report 2026",
      description:
        "A decadal analysis of governance structures across the subcontinent's largest financial entities.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkFpPo8LLL0Or-ns6u1k7zNadA8zuEaBmvlkoVFm4zIkRUG3ezRqlKKo1IjgA6hg4630kCBp4JtZo2nYd6seump-MVd111XqWYPeaN3WwRulpU2Os92qO1ESKWitkLDeqvJUmxwqbUnr05CznH8htErYrGVIQKIQWLmSnJvccbcUyGBTHujrodQUxAE1CBxOLND1u0ZxH7Yotxj_8sfzT4aR9A5qSbRZ0I-y_iUB8gKiI0pv8GeVORTGa7M35NCF5HOdeETwthLX4",
    },
    {
      type: "Global Briefing",
      title: "The AI Audit Paradox",
      description:
        "Navigating the risks of generative systems within established control environments.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCYsAxQPjY1403iha6jqyi2pYPU9aVnuqffAEhpGpXFpoaiGjHhwzqmyzFn1mFa15fbHxswxOWtL-WwSVSYYDDm3VzSuE1Fot9aof6-kcJdHSyr-Cwl0ABUBU4Z_cMWupbC4Y7nnKx3fdYcbAj5cUvQmEqMdZqq0fpR-tw6jkM7zlsrPI0oXwtAEuvpBWlDx088tEyzZooRlTK_qIOpHdck_mg3LBzRNz0trdZ8bpri2i2-WIWpitXQWA0BYqTKmQEYV5YfY5i3w6c",
    },
    {
      type: "Methodology",
      title: "Agile Frameworks for GRC",
      description:
        "How to implement rapid-cycle auditing without sacrificing institutional rigor.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuANDPZgsYLPYfSxqeh1ax4oJKicGD4yOGYZJtFOAmkYFSfolTsimtjf9FMKORN0qnHM5LAENwdCdgE-74DpIiTfkpIrtc0CMrIRP3o8K16AxL6f-HnUTbRf8ZHfwfJyhc_DUwKbbhDeyMH7m0IP6EJQKnTHu1equO5FGSf4PT_GWC1j96vRlEz7QuHGBH9f9pNng-2EGRok6TfHY0thvPEegABdH2-aUTXqr2xLnfzzBDKyak-tDxV_s72seefpEhEWYwFoGihH-BQ",
    },
    {
      type: "Executive Series",
      title: "Stakeholder Communication",
      description:
        "Translating complex audit findings into board-level strategic narratives.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDPWcF_ibehSiweHo4CJ3Mk6Al4EcPAE_IANbAJOGIvHWLxK56VqXPZYk1JkmAfxlDpp8VZOp67b34684g2zoVgkmHEvLMXe92wVmMyxJ5yJj-DCCv2NE1T6HCiAOUh5BokrOGxiYFflz-o84owVdiJtRh09u9381X1pvtJGgFeVkI4pm60-_eVAFTP7EHU-7FtgSrswbVseZsGNdJCJuNQS4LdwjS-r6YFT6Hy1eINuBdcWV69EeeyE9GcbLDijLMElgjpVxGfpgk",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Internal Audit Transformation & Quality Assessment | Northrop
          Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:opsz,wght@6..72,400;500;700&display=swap"
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

            .hero-gradient {
              background: linear-gradient(
                to right,
                rgba(0,0,0,0.9) 0%,
                rgba(0,0,0,0.6) 40%,
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
            <div className="absolute inset-0 z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCotqeHxHgjVfyrLa3S4Dzz5QxrufvDNNYCVzQBmZwFRRUMknnKVrZ_O97lCGahzOIr8OssKyjHFzqubkvvwGBjSuQiF8QXuGhwempQbpmRzPBnqZaqqG417p572Qp9Rhp5-xaW949AhyT28az3bfqLtj58nO4m_e_iGwIzcFUH480BiJHm_0sDq8hCa6KU8OdSUJz5cxlOlPuDP0pP71jfokl5JxHdyjc2qDhx2EEKmwNqd70PF2A8y68REWz_YDM8Ek9r9j6T-o"
                alt="Hero"
                className="w-full h-full object-cover grayscale brightness-90 contrast-125"
              />

              <div className="absolute inset-0 hero-gradient"></div>

              <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8">
              <div className="max-w-3xl">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-2 block">
                  Service Sheet 6B
                </span>

                <h1 className="font-['Newsreader'] text-[64px] leading-[1.05] text-white mt-2">
                  Internal Audit Transformation & Quality Assessment
                </h1>

                <div className="w-32 h-[2px] bg-white/40 my-6"></div>

                <p className="text-[18px] text-white/90 mt-4 max-w-2xl font-light leading-relaxed">
                  Reimagining the audit function from a defensive compliance
                  unit into a strategic asset for global boards and risk
                  committees.
                </p>

                <div className="mt-16 flex flex-wrap items-center gap-6">
                  <button className="bg-white text-black px-10 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-[#eeeeee] transition-all duration-300 hover:-translate-y-0.5 shadow-xl">
                    Request Briefing
                  </button>

                  <button className="text-white border border-white/40 px-10 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-white/10 transition-all duration-300 hover:border-white">
                    Methodology
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="max-w-[1280px] mx-auto px-8">
            <hr className="border-[#c4c7c7]" />
          </div>

          {/* What We Do */}
          <section className="py-[120px] max-w-[1280px] mx-auto px-8 grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-['Newsreader'] text-[32px] sticky top-32">
                What We Do
              </h2>
            </div>

            <div className="col-span-12 md:col-span-8 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="space-y-2"
                  >
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
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
          </section>

          {/* Stakeholders */}
          <section className="bg-[#f3f3f4] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-4">
                <h2 className="font-['Newsreader'] text-[32px]">
                  Target Stakeholders
                </h2>
              </div>

              <div className="col-span-12 md:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {stakeholders.map((item, index) => (
                    <div
                      key={index}
                      className="border border-[#c4c7c7] p-6 bg-white"
                    >
                      <span className="material-symbols-outlined text-black mb-4">
                        {item.icon}
                      </span>

                      <h4 className="text-[11px] uppercase tracking-[0.1em] mb-2">
                        {item.title}
                      </h4>

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
          <section className="py-[120px] max-w-[1280px] mx-auto px-8">
            <div className="bg-[#1c1b1b] p-12 md:p-20 text-white">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 md:col-span-7">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#858383] border border-[#858383] px-3 py-1 mb-6 inline-block">
                    Case Study
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mb-4">
                    From Tick-Box to Top-Quartile: Transforming an Internal
                    Audit Function
                  </h2>

                  <p className="text-[18px] text-[#858383] mb-6 italic leading-[1.6]">
                    "A journey from compliance exercise to Audit Committee
                    cornerstone."
                  </p>

                  <div className="flex gap-8">
                    <div>
                      <div className="font-['Newsreader'] text-[24px]">
                        40%
                      </div>

                      <div className="text-[11px] uppercase tracking-[0.1em] text-[#858383]">
                        Efficiency Gain
                      </div>
                    </div>

                    <div className="border-l border-[#858383] pl-8">
                      <div className="font-['Newsreader'] text-[24px]">
                        A+
                      </div>

                      <div className="text-[11px] uppercase tracking-[0.1em] text-[#858383]">
                        Quality Rating
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-5 space-y-4">
                  <div className="bg-[#e2e2e2] p-6 text-[#1a1c1c]">
                    <h5 className="text-[11px] uppercase tracking-[0.1em] mb-2">
                      The Intervention
                    </h5>

                    <p className="leading-[1.6]">
                      We deployed a multi-stage transformation program:
                      identifying methodology bottlenecks, upgrading digital
                      infrastructure, and retraining the core team in
                      risk-intelligent reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="py-[120px] max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between items-end mb-16 border-b border-[#c4c7c7] pb-4">
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
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] bg-[#e2e2e2] mb-4 overflow-hidden border border-[#c4c7c7]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-2 block">
                    {item.type}
                  </span>

                  <h3 className="font-['Newsreader'] text-[20px] leading-tight mb-2 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#444748] line-clamp-2 leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-black py-[120px] text-white text-center">
            <div className="max-w-2xl mx-auto px-8">
              <h2 className="font-['Newsreader'] text-[32px] mb-4">
                Secure Your Governance Foundation
              </h2>

              <p className="text-[18px] mb-6 opacity-80 leading-[1.6]">
                Contact our Global Advisory team to discuss your internal audit
                maturity assessment.
              </p>

              <button className="bg-white text-black px-10 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-[#5e5e5e] hover:text-white transition-colors">
                Request Consultation
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default InternalAuditTransformationQualityAssessment;