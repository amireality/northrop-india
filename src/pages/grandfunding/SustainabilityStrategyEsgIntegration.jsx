import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SustainabilityStrategyEsgIntegration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] font-inter font-normal text-[15px] leading-[1.6] overflow-x-hidden">
      <Helmet>
        <title>Sustainability Strategy & ESG Integration | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:opsz,wght@6..72,400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-8 pt-[120px] pb-[64px] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-[32px] items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-[16px] block">Service 1C</span>
              <h1 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] mb-[24px]">Sustainability is not a reporting exercise — it is a strategic imperative.</h1>
              <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#444748] max-w-2xl">Northrop Management provides institutional-grade ESG integration, transforming sustainability from a compliance burden into a fundamental driver of long-term alpha and enterprise value.</p>
            </div>
            <div className="col-span-12 md:col-span-4 flex justify-end">
              <div className="h-1 w-full bg-[#000000] mb-2"></div>
            </div>
          </div>
        </section>

        {/* Asymmetric Strategy Visual & Introduction */}
        <section className="px-8 py-[64px] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-7">
              <div className="aspect-video bg-[#eeeeee] overflow-hidden">
                <img 
                  alt="A brutalist architectural masterwork of raw, cast-in-place concrete. Sharp geometric planes intersect, casting deep, high-contrast shadows. The image captures the imposing, institutional weight of the structure against a stark white sky, emphasizing monolithic authority and industrial permanence." 
                  className="w-full h-full object-cover " 
                  src="/grandesgimg/sustainability-strategy-esg-integration.jpeg"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-[24px]">Materiality-driven strategy.</h2>
              <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748] mb-[24px]">
                We move beyond generic sustainability frameworks to identify the specific environmental, social, and governance factors that directly impact your financial performance and risk profile. Our approach is rigorous, data-led, and aligned with institutional investor expectations.
              </p>
              <div className="border-t border-[#c4c7c7] pt-[16px]">
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000]">Focus Areas</span>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 font-inter font-normal text-[15px] leading-[1.6]">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span> Competitive Positioning
                  </li>
                  <li className="flex items-center gap-2 font-inter font-normal text-[15px] leading-[1.6]">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span> Capital Allocation Efficiency
                  </li>
                  <li className="flex items-center gap-2 font-inter font-normal text-[15px] leading-[1.6]">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span> Stakeholder Resilience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The ESG Integration Framework (Bento Grid Style) */}
        <section className="px-8 py-[120px] bg-[#f3f3f4] border-y border-[#c4c7c7]">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-[64px]">
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-[8px] block">Methodology</span>
              <h2 className="font-newsreader font-normal text-[32px] leading-[1.2]">Institutional Integration Framework</h2>
            </div>
            <div className="grid grid-cols-12 gap-8">
              {/* Framework Card 1 */}
              <div className="col-span-12 md:col-span-4 bg-[#f9f9f9] p-10 border border-[#c4c7c7] flex flex-col justify-between">
                <div>
                  <span className="font-newsreader font-normal text-[32px] leading-[1.2] text-[#dadada] block mb-6">01</span>
                  <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Board-level governance</h3>
                  <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Embedding sustainability oversight into the highest levels of corporate decision-making and accountability structures.</p>
                </div>
              </div>
              {/* Framework Card 2 */}
              <div className="col-span-12 md:col-span-4 bg-[#000000] text-[#ffffff] p-10 border border-[#000000] flex flex-col justify-between">
                <div>
                  <span className="font-newsreader font-normal text-[32px] leading-[1.2] text-[#858383] block mb-6">02</span>
                  <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">ESG KPI framework</h3>
                  <p className="font-inter font-normal text-[15px] leading-[1.6] opacity-80">Developing bespoke, measurable, and auditable metrics that bridge the gap between operational reality and investor reporting requirements.</p>
                </div>
              </div>
              {/* Framework Card 3 */}
              <div className="col-span-12 md:col-span-4 bg-[#f9f9f9] p-10 border border-[#c4c7c7] flex flex-col justify-between">
                <div>
                  <span className="font-newsreader font-normal text-[32px] leading-[1.2] text-[#dadada] block mb-6">03</span>
                  <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Climate Risk Intelligence</h3>
                  <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Sophisticated scenario modeling to quantify the financial impact of physical and transition risks across the entire asset portfolio.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Block */}
        <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
          <div className="bg-[#eeeeee] p-12 md:p-20 border border-[#c4c7c7] relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 grayscale">
              <img 
                alt="A stark, high-contrast close-up of textured industrial concrete with sharp shadows." 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrO1DaoovHUTbUYYk2ywI-9dbns4e3hUhtyvC4abfopoq1lLdG4ERA-mg-2sSz6pLKPKR_WmSo-6WP_m_9Tr8XRB1zpWq7jokd4Urup5wBqYOrpSEzGdo8wMI5aID254o5GCSIK-9igUsrnzbx80-Pb6bdJsUNmpDPho4Ak7emgIN3eG0fDWW7S6dPKWTDqmcASr-WfXAUSAvv5FuOlg-TL0ZuRDkjNlox9IgHrPL3nHy-wM94AxW4S30W6IZzMWI4kDBodvChuPM"
              />
            </div>
            <div className="grid grid-cols-12 gap-[32px] items-center relative z-10">
              <div className="col-span-12 md:col-span-6">
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-[16px] block">Case Study</span>
                <h2 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] mb-[24px] leading-tight">Building an ESG-First Enterprise: How a Family-Owned Conglomerate Repositioned for Institutional Investment</h2>
                <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#444748] mb-[24px] italic">"Northrop's materiality assessment redefined how we perceive risk, unlocking capital we previously couldn't access." — CEO</p>
                <button className="border border-[#000000] text-[#000000] font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] px-8 py-4 hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-300 bg-[#f9f9f9]/50 backdrop-blur-sm">Read Case Study</button>
              </div>
              <div className="col-span-12 md:col-span-6 border-l border-[#c4c7c7] md:pl-20 mt-12 md:mt-0">
                <div className="space-y-12">
                  <div>
                    <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-2">The Challenge</h4>
                    <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">A legacy industrial conglomerate faced exclusion from major European pension funds due to opaque governance and high carbon exposure.</p>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-2">The Intervention</h4>
                    <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Northrop redesigned the governance structure, implemented TCFD-aligned reporting, and identified a $200M cost-saving through energy efficiency.</p>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-2">The Outcome</h4>
                    <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Secured $1.2B in institutional financing at preferential rates and achieved a Top-Decile ESG rating within 18 months.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Section */}
        <section className="px-8 py-[64px] max-w-[1280px] mx-auto border-t border-[#c4c7c7]">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-[64px] pt-[24px]">
            <h2 className="font-newsreader font-normal text-[32px] leading-[1.2]">Recent Intelligence</h2>
            <Link className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] hover:text-[#000000] transition-colors border-b border-[#5e5e5e]" to="/insights">View Publication Archive</Link>
          </div>
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-4 group cursor-pointer">
              <div className="aspect-[3/4] bg-[#eeeeee] overflow-hidden mb-[16px] border border-[#c4c7c7]">
                <div className="w-full h-full relative overflow-hidden transition-transform duration-700 group-hover:scale-105">
                  <img 
                    alt="A monolithic concrete tower rising into a desaturated sky, embodying institutional strength and geometric precision." 
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnV-Mf_0qU9QAQtqAhsvvzqcInSLpf8g0A96iEv3yEjq17vOvAMpy18T24cA67AUv7dj6SkIvthBs4WCov287vY8qZzxwXh5XgrViK6xzqMkNcQmu8bM-VFOGmJVLkDXcmLTv4t-Aedsew_Fsys5Z-57wyOoC_4CK1_e4x6i-54YvcdEkrs_A54HTGN0Wi1pxS_5GT3-eE4NNuvOxwLi2DPOkXR1dHwLM9Wod-jsSiCOsONXdRKAI3OFfbvgjiAjbpqEDUuiA0h_U"
                  />
                  <div className="relative w-full h-full p-12 flex flex-col justify-end">
                    <h3 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] text-[#ffffff] mb-4">'ESG as Alpha'</h3>
                    <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#858383]">Quarterly Intelligence Report</p>
                  </div>
                </div>
              </div>
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-2 block">Volume 24.03</span>
              <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[8px]">The decoupling of ESG sentiment and material financial performance.</h3>
              <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">An analysis of why institutional investors are doubling down on core ESG data despite political headwinds.</p>
            </div>
            <div className="col-span-12 md:col-span-8 flex flex-col justify-between py-[24px] border-l border-[#c4c7c7] pl-12 hidden md:flex">
              <blockquote className="font-newsreader font-normal text-[28px] leading-[1.4] text-[#1a1c1c]  max-w-3xl">
                "Tomorrow’s market leaders will not be defined by revenue alone, but by the strength of their governance, sustainability strategy, and ability to manage emerging risks."

              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#000000]"></div>
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000]"> Ashish Chaudhary , Managing Director</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SustainabilityStrategyEsgIntegration;
