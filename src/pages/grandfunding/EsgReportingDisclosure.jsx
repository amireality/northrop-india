import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const EsgReportingDisclosure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] font-inter">
      <Helmet>
        <title>ESG Reporting & Disclosure | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <header className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="grid grid-cols-12 gap-[32px] items-start">
            <div className="col-span-12 md:col-span-8">
              <p className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-[16px]">SERVICE 1B</p>
              <h1 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] mb-[24px] max-w-3xl">ESG Reporting & Disclosure</h1>
              <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#444748] max-w-2xl leading-relaxed">
                Investors, regulators, and boards are demanding ESG transparency at an unprecedented level. We provide the institutional rigor required to transform raw sustainability data into audited, value-driving disclosures.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 self-center">
              <div className="h-[1px] w-full bg-[#c4c7c7] mb-[24px]"></div>
              <div className="flex flex-col gap-[8px]">
                <div className="flex justify-between items-center border-b border-[#c4c7c7] pb-2">
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[10px] text-[#444748]">SECTOR FOCUS</span>
                  <span className="font-inter font-normal text-[15px] leading-[1.6] text-[#1a1c1c]">Global Markets</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#c4c7c7] pb-2">
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[10px] text-[#444748]">COMPLIANCE</span>
                  <span className="font-inter font-normal text-[15px] leading-[1.6] text-[#1a1c1c]">Assurance Ready</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Image Break */}
        <section className="w-full">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="w-full h-[500px] overflow-hidden relative border border-[#c4c7c7]">
              <img alt="Low-angle shot of a monolithic concrete structure with sharp geometric edges against a stark sky. The brutalist architecture features raw textures and heavy shadows, projecting institutional power and permanence." className="w-full h-full object-cover " src="/grandesgimg/esg-reporting-disclosure.jpeg"/>
              <div className="absolute bottom-8 left-8 bg-[#f9f9f9] px-6 py-4 border border-[#c4c7c7]">
                <p className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2]">PORTFOLIO ASSURANCE</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services (Report Style) */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-[24px]">Reporting Frameworks</h2>
              <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Our methodology integrates local mandates with global standards to ensure seamless transnational reporting.</p>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="p-[24px] bg-[#f3f3f4] border border-[#c4c7c7]">
                <span className="material-symbols-outlined text-[#000000] mb-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>analytics</span>
                <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] mb-[8px]">BRSR PREPARATION</h4>
                <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Comprehensive Business Responsibility and Sustainability Reporting for Indian listed entities.</p>
              </div>
              <div className="p-[24px] bg-[#f3f3f4] border border-[#c4c7c7]">
                <span className="material-symbols-outlined text-[#000000] mb-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>public</span>
                <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] mb-[8px]">GRI STANDARDS</h4>
                <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Modular sustainability reporting following the Global Reporting Initiative's universal requirements.</p>
              </div>
              <div className="p-[24px] bg-[#f3f3f4] border border-[#c4c7c7]">
                <span className="material-symbols-outlined text-[#000000] mb-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>assessment</span>
                <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] mb-[8px]">TCFD DISCLOSURES</h4>
                <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Climate-related financial risk assessment aligned with the Task Force on Climate-related Financial Disclosures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Module */}
        <section className="bg-[#f3f3f4] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 md:col-span-6">
                <p className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-[16px]">CASE STUDY: MANUFACTURING</p>
                <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-[24px]">First-Time BRSR Core Compliance: How a Listed Manufacturer Achieved Assured Disclosure in 90 Days</h2>
                <p className="font-inter font-normal text-[18px] leading-[1.6] mb-[24px]">A Tier-1 industrial firm faced immediate pressure from institutional investors to provide BRSR Core indicators with external assurance. We streamlined their disparate data silos into a singular reporting engine.</p>
                <div className="grid grid-cols-2 gap-[24px] border-t border-[#c4c7c7] pt-[24px]">
                  <div>
                    <h5 className="font-inter font-semibold uppercase tracking-[0.1em] text-[10px] text-[#5e5e5e] mb-1">CHALLENGE</h5>
                    <p className="font-inter font-normal text-[15px] leading-[1.6]">Fragmented supply chain data and lack of historical emissions tracking across 14 locations.</p>
                  </div>
                  <div>
                    <h5 className="font-inter font-semibold uppercase tracking-[0.1em] text-[10px] text-[#5e5e5e] mb-1">OUTCOME</h5>
                    <p className="font-inter font-normal text-[15px] leading-[1.6]">100% compliance achieved; assured by a Big Four firm with zero material misstatements.</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                {/* Brutalist Image instead of Mock */}
                <div className="relative w-full h-[400px] border border-[#c4c7c7] overflow-hidden group">
                  <img alt="A high-contrast black and white photograph of an industrial facility with repeating geometric windows and raw concrete pillars."
                   className="w-full h-full object-cover grayscale contrast-150 brightness-75"
                   
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtSg66Hqey7e5ZlWDT13TtJEVgN6fW1LOcS_bhRFQnCEo4_lGfwfq8ndQzZmmxB_yVQUw1OVhZg4BxWI250KkwGYtiMvJhpTEiMbYsm89LIcBmZ9mSsYnXxO3TteTNIJLwQOCvM3Qy4GX0tfzYttfb5W29Nd6RbZWHv4u6N_p8wqYsaohOXJ6SN2pzhVUXBwqtzgY0m_StBUrqQnf6nrokPFV9vhmAcRwnLzXmX-Jyheg3urIyuR9IQoRjtq-RvFEitsgURcwDra8"/>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-12 border border-[#c4c7c7] shadow-xl w-3/4">
                      <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] mb-8 text-center">90-DAY COMPLIANCE VELOCITY</h4>
                      <div className="space-y-6">
                        <div className="relative h-2 bg-[#e2e2e2] w-full">
                          <div className="absolute h-full bg-[#000000]" style={{ width: '33%' }}></div>
                          <div className="absolute -top-6 left-0 font-inter font-semibold uppercase tracking-[0.1em] text-[9px]">WEEKS 1-4: GAP ANALYSIS</div>
                        </div>
                        <div className="relative h-2 bg-[#e2e2e2] w-full">
                          <div className="absolute h-full bg-[#000000]" style={{ width: '66%' }}></div>
                          <div className="absolute -top-6 left-0 font-inter font-semibold uppercase tracking-[0.1em] text-[9px]">WEEKS 5-8: DATA AGGREGATION</div>
                        </div>
                        <div className="relative h-2 bg-[#e2e2e2] w-full">
                          <div className="absolute h-full bg-[#000000]" style={{ width: '100%' }}></div>
                          <div className="absolute -top-6 left-0 font-inter font-semibold uppercase tracking-[0.1em] text-[9px]">WEEK 12: ASSURANCE & FILING</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="border-t border-[#000000] pt-[24px] mb-[64px] flex justify-between items-end">
            <h3 className="font-newsreader font-normal text-[32px] leading-[1.2]">Research & Intelligence</h3>
            <a className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] underline hover:text-[#5e5e5e] transition-colors" href="#">View All Publications</a>
          </div>
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-4 group cursor-pointer">
              <div className="h-64 bg-[#e8e8e8] border border-[#c4c7c7] mb-[16px] overflow-hidden">
                <img alt="Sharp geometric shadows cast across a corrugated concrete wall." className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIUd87uoeFi_Grgb53-mE4lTD-O4AureKqKiFuZYX6Pu2Epjr1aA8v4bCA770266NrS_sxIp8tlTdCeq0F0T7oIXLQWT0aU_38Vb3Xr2ZuAewZmjwHZspQ_1t7DYJ7apPhq_zbvWSrnler_HdPui31pyDEzXWC7DSe--ZVbqQlcQmDstgMTvBMIxQ-QMf4-GU9wtPgnUXmeKm6M0p8C5jKf1GlUSO1gjddIxMuTosCZxwbvroCl-j2q1kg0atL8qEgBgWk3MmMFNg"/>
              </div>
              <p className="font-inter font-semibold uppercase tracking-[0.1em] text-[10px] text-[#5e5e5e] mb-2">QUARTERLY ANALYSIS</p>
              <h4 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-2 group-hover:text-[#000000] transition-colors">BRSR Core vs. GRI: Understanding India's Dual ESG Reporting Reality</h4>
              <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">A technical whitepaper exploring the divergence and synergy between SEBI's mandate and global voluntary standards.</p>
            </div>
            <div className="col-span-12 md:col-span-4 group cursor-pointer">
              <div className="h-64 bg-[#e8e8e8] border border-[#c4c7c7] mb-[16px] overflow-hidden">
                <img alt="Underside of a massive concrete bridge showing complex structural geometry and industrial textures." className="w-full h-full object-cover grayscale contrast-150 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClab1vXk3_98lYdqk56DmaFDuyptiFBTRDbVcg9eclJuBI34XhZwyPF2ynbsVC464BRwRh0QKClpQD8FJ6zQNrPlnbPKtUEC68Ga3BKiz03-eyvVyvCCGsmZJooJ59KqTNYO26dz49qAwF4DqPOVcyLHhe4ZJp0sL3k14O3rXtX-ENc5fxNPWqNwb_IpZ7bNeeX7XtZC44mfmpETCWoNFj_n_N0PuQdf2huoDf9vO9_K6tehwg_ihmkGyjyADlCvLkggYSeEkwTrk"/>
              </div>
              <p className="font-inter font-semibold uppercase tracking-[0.1em] text-[10px] text-[#5e5e5e] mb-2">REGULATORY ALERT</p>
              <h4 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-2 group-hover:text-[#000000] transition-colors">Global Assurance Standards: ISAE 3000 Readiness</h4>
              <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Preparing internal controls for the next evolution of sustainability audit requirements.</p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="bg-[#000000] p-[24px] h-full text-[#ffffff] flex flex-col justify-between relative overflow-hidden">
                <img alt="Institutional background texture." className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPqSY4KA0VTQ4RxPk-A_I_hQNOtP1avb02sj-AZ7spqXus4SkIglBrgOyp52Ovgrd7-VTB0k9g_bfB8vQMVVf2J4wsyfoclDNQP1ZLHZdZcTLlsERRglz5JVXywJBdmgPz0VjLTA2-FtoTefcWSpw5tB-BMqjbJfYGqww872Kw3Pm16rmKWb9jZH247clZRbb730vZ6yDDzaix1flS29MTPlXqceBMMQwVdGOsJTNveTK_VscsYjpg8hN2BAsm9aSCp-QIk_ZWbR8"/>
                <div className="relative z-10">
                  <h4 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Secure Your Compliance Roadmap</h4>
                  <p className="font-inter font-normal text-[15px] leading-[1.6] opacity-80 mb-[24px]">Our experts are ready to audit your current ESG infrastructure and define a 12-month disclosure strategy.</p>
                </div>
                <button className="relative z-10 w-full border border-[#ffffff] py-4 font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] hover:bg-white hover:text-[#000000] transition-colors">Contact Advisory Team</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EsgReportingDisclosure;
