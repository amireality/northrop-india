import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Brsr = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans antialiased overflow-x-hidden">
      <Helmet>
        <title>BRSR Core vs. GRI | Northrop India</title>
      </Helmet>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 w-full h-full">
            <img 
              className="w-full h-full object-cover" 
              src="/insightpage/brsr.png" 
              alt="BRSR Hero"
            />
          </div>
          <div className="relative z-20 text-center max-w-4xl px-[20px] md:px-[64px]">
            {/* <div className="mb-6 inline-block bg-[#f3f4f5] px-4 py-1">
              <span className="font-bold text-[12px] leading-[16px] tracking-[0.05em] uppercase text-[#001F3F]">
                STRATEGIC FORENSICS | MAY 2026
              </span>
            </div> */}
            <h1 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-white uppercase mb-8 tracking-[-0.02em]">
              BRSR Core vs. GRI: Navigating India's Dual ESG Reporting Reality in 2026
            </h1>
            <p className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-white/90 italic font-light">
              An Analysis of the Convergence between SEBI Mandates and Global Standards for India's Market Leaders.
            </p>
            <div className="mt-12 flex justify-center">
              <span className="material-symbols-outlined text-white text-[36px] animate-bounce">expand_more</span>
            </div>
          </div>
        </section>

        {/* Centered Article Content */}
        <article className="max-w-[900px] mx-auto px-[20px] md:px-0 py-20 space-y-24">
          
          {/* SECTION 1: THE REGULATORY REALITY */}
          <section className="scroll-mt-24" id="regulatory-reality">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[#7c5800]"></div>
              <h2 className="text-[12px] leading-[16px] font-bold text-[#7c5800] tracking-[0.05em] uppercase">Section I</h2>
            </div>
            <h3 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold text-[#001F3F] mb-8 uppercase">
              THE REGULATORY REALITY (2026 Mandate)
            </h3>
            <div className="text-[16px] md:text-[18px] leading-[28px] text-[#4A5568] mb-10">
              As we navigate the fiscal year 2026, the SEBI (Securities and Exchange Board of India) mandate has reached its definitive peak. The expansion of the Business Responsibility and Sustainability Report (BRSR) Core framework to the <strong>top 1,000 listed entities</strong> marks a shift from voluntary transparency to forensic accountability. This systemic broadening ensures that ESG (Environmental, Social, and Governance) data is no longer peripheral but central to market valuation and institutional risk assessment.
            </div>
            <div className="bg-[#f3f4f5] p-8 border-l-4 border-[#001F3F]">
              <p className="text-[14px] leading-[20px] font-bold text-[#001F3F] uppercase mb-2 tracking-[0.05em]">Forensic Insight</p>
              <p className="text-[16px] leading-[24px] italic text-[#191c1d]">
                "The 2026 mandate requires reasonable assurance on BRSR Core parameters, effectively bringing ESG auditing into parity with statutory financial audits for India's tier-1 corporate ecosystem."
              </p>
            </div>
          </section>

          {/* SECTION 2: DUAL REPORTING ARCHITECTURE (Bento Grid Style) */}
          <section className="scroll-mt-24" id="dual-reporting">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[#7c5800]"></div>
              <h2 className="text-[12px] leading-[16px] font-bold text-[#7c5800] tracking-[0.05em] uppercase">Section II</h2>
            </div>
            <h3 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold text-[#001F3F] mb-12 uppercase">
              DUAL REPORTING ARCHITECTURE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {/* Pillar 1 */}
              <div className="bg-white border border-[#c5c6cd] p-8 hover:border-[#001F3F] transition-colors group">
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-[#001F3F] text-[32px]">hub</span>
                  <span className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#c5c6cd] group-hover:text-[#001F3F] transition-colors">PILLAR 01</span>
                </div>
                <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-4">Materiality Integration</h4>
                <p className="text-[16px] leading-[24px] text-[#4A5568]">The alignment of financial materiality with environmental impact metrics, ensuring that reporting reflects true stakeholder risk.</p>
              </div>
              {/* Pillar 2 */}
              <div className="bg-white border border-[#c5c6cd] p-8 hover:border-[#001F3F] transition-colors group">
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-[#001F3F] text-[32px]">visibility</span>
                  <span className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#c5c6cd] group-hover:text-[#001F3F] transition-colors">PILLAR 02</span>
                </div>
                <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-4">Dual-Purpose Disclosures</h4>
                <p className="text-[16px] leading-[24px] text-[#4A5568]">Synthesizing data points that satisfy both the prescriptive BRSR Core KPIs and the broader stakeholder requirements of the GRI standards.</p>
              </div>
              {/* Pillar 3 */}
              <div className="bg-white border border-[#c5c6cd] p-8 hover:border-[#001F3F] transition-colors group">
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-[#001F3F] text-[32px]">verified</span>
                  <span className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#c5c6cd] group-hover:text-[#001F3F] transition-colors">PILLAR 03</span>
                </div>
                <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-4">Data Governance</h4>
                <p className="text-[16px] leading-[24px] text-[#4A5568]">Implementing forensic-grade data capture systems to withstand rigorous third-party reasonable assurance audits mandated by SEBI.</p>
              </div>
              {/* Pillar 4 */}
              <div className="bg-white border border-[#c5c6cd] p-8 hover:border-[#001F3F] transition-colors group">
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-[#001F3F] text-[32px]">sync_alt</span>
                  <span className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#c5c6cd] group-hover:text-[#001F3F] transition-colors">PILLAR 04</span>
                </div>
                <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-4">Double Materiality</h4>
                <p className="text-[16px] leading-[24px] text-[#4A5568]">Assessing how the organization is impacted by ESG issues and how the organization impacts society and the environment simultaneously.</p>
              </div>
            </div>
          </section>

          {/* SECTION 3: COMPARATIVE ANALYSIS GRID */}
          <section className="scroll-mt-24" id="comparative-analysis">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[#7c5800]"></div>
              <h2 className="text-[12px] leading-[16px] font-bold text-[#7c5800] tracking-[0.05em] uppercase">Section III</h2>
            </div>
            <h3 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold text-[#001F3F] mb-8 uppercase">
              COMPARATIVE ANALYSIS GRID
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#4A5568] text-white text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase">
                    <th className="p-6 text-left border-b border-[#c5c6cd]">FEATURE</th>
                    <th className="p-6 text-left border-b border-[#c5c6cd]">BRSR CORE (PRESCRIPTIVE/INDIA)</th>
                    <th className="p-6 text-left border-b border-[#c5c6cd]">GRI (FLEXIBLE/GLOBAL)</th>
                  </tr>
                </thead>
                <tbody className="text-[16px] leading-[24px] text-[#191c1d]">
                  <tr className="hover:bg-[#f3f4f5] transition-colors border-b border-[#c5c6cd]">
                    <td className="p-6 font-bold text-[#001F3F]">Scope of Mandate</td>
                    <td className="p-6">Mandatory for top 1,000 listed Indian entities by market cap.</td>
                    <td className="p-6">Voluntary global standard adopted by 70%+ of Fortune 500.</td>
                  </tr>
                  <tr className="hover:bg-[#f3f4f5] transition-colors border-b border-[#c5c6cd]">
                    <td className="p-6 font-bold text-[#001F3F]">Assurance Rigor</td>
                    <td className="p-6">Mandatory 'Reasonable Assurance' for 9 specific ESG attributes.</td>
                    <td className="p-6">Recommended external assurance; depth determined by entity.</td>
                  </tr>
                  <tr className="hover:bg-[#f3f4f5] transition-colors border-b border-[#c5c6cd]">
                    <td className="p-6 font-bold text-[#001F3F]">Data Specificity</td>
                    <td className="p-6">Highly prescriptive KPIs with specific units and calculation methods.</td>
                    <td className="p-6">Principle-based; allows for contextual reporting on material topics.</td>
                  </tr>
                  <tr className="hover:bg-[#f3f4f5] transition-colors border-b border-[#c5c6cd]">
                    <td className="p-6 font-bold text-[#001F3F]">Global Convergence</td>
                    <td className="p-6">India-specific lens aligned with ISSB (S1 &amp; S2) benchmarks.</td>
                    <td className="p-6">The universal language for multi-stakeholder impact reporting.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 4: STRATEGIC MANDATES */}
          <section className="scroll-mt-24" id="strategic-mandates">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[#7c5800]"></div>
              <h2 className="text-[12px] leading-[16px] font-bold text-[#7c5800] tracking-[0.05em] uppercase">Section IV</h2>
            </div>
            <h3 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold text-[#001F3F] mb-8 uppercase">
              STRATEGIC MANDATES FOR 2026
            </h3>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#001F3F] flex items-center justify-center text-white rounded-none">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div>
                  <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-2">Audit Readiness is No Longer Optional</h4>
                  <p className="text-[16px] leading-[24px] text-[#4A5568]">Leaders must transition from manual spreadsheets to auditable SaaS platforms. Every BRSR Core metric will be scrutinized by forensic auditors with the same intensity as financial P&amp;L statements.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#001F3F] flex items-center justify-center text-white rounded-none">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                  <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-2">Bridge the GRI-BRSR Gap</h4>
                  <p className="text-[16px] leading-[24px] text-[#4A5568]">For entities with global operations or foreign institutional investors (FIIs), maintaining dual compliance is essential. Use GRI to tell the narrative story and BRSR Core to provide the data anchor.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#001F3F] flex items-center justify-center text-white rounded-none">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-2">Forensic ESG Governance</h4>
                  <p className="text-[16px] leading-[24px] text-[#4A5568]">Establish an ESG Board Committee with forensic oversight powers. Transparency in 2026 is not about perfect metrics, but about accurate, unmanipulated data provenance.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 bg-[#001F3F] p-12 text-white text-center shadow-xl relative overflow-hidden">
              {/* Subtle pattern background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
              <h3 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold mb-4 relative z-10">Access the Full 2026 Forensic Review</h3>
              <p className="text-[16px] md:text-[18px] leading-[28px] text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
                Our full 112-page report provides the sector-by-sector roadmap for dual ESG reporting compliance and forensic audit protocols.
              </p>
              <Link to="/contact" className="bg-[#f3f4f5] text-[#001F3F] px-10 py-4 text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase hover:bg-white transition-all flex items-center justify-center gap-3 mx-auto relative z-10">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                DOWNLOAD FULL REPORT (PDF)
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Brsr;