import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ArticleSidebar from '../../components/insights/ArticleSidebar';

const FromIsae3000 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans antialiased overflow-x-hidden">
      <Helmet>
        <title>From ISAE 3000 to ISSA 5000 | Northrop India</title>
      </Helmet>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/insightpage/isae3000.png')" }}
          >
            {/* <div className="absolute inset-0 bg-[#001F3F]/80 backdrop-blur-[2px]"></div> */}
          </div>
          <div className="relative w-full max-w-[1200px] mx-auto px-[20px] md:px-[64px]">
            <div className="flex flex-col gap-4 max-w-4xl">
              {/* <div className="flex items-center gap-4 text-[#7c5800] font-mono text-[11px] tracking-[0.2em] uppercase">
                <span className="w-12 h-[1px] bg-[#7c5800]"></span>
                <span>DATE: Q1 2026</span>
              </div> */}
              <h1 className="font-serif text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] text-white uppercase tracking-tight font-bold">
                From ISAE 3000 to ISSA 5000: Preparing Internal Controls for the Next Generation of Sustainability Assurance in 2026
              </h1>
              <div className="mt-8 flex gap-4">
                <div className="px-4 py-1 border border-[#c5c6cd]/50 text-white text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase">Forensic Priority</div>
                <div className="px-4 py-1 border border-[#c5c6cd]/50 text-white text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase">ESG Advisory</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-[800px] mx-auto py-24 px-[20px] md:px-0">
          
          {/* Introduction */}
          <section className="mb-20">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] mb-8">
              The Challenge: Moving Toward More Rigorous Sustainability Assurance in 2026
            </h2>
            <div className="text-[16px] md:text-[18px] leading-[28px] text-[#4A5568] space-y-6">
              <p>
                The shift from ISAE 3000 to the newly ratified ISSA 5000 represents more than just a regulatory update; it is a fundamental transformation in how corporate performance is verified. As we approach the 2026 mandates, Indian organizations must recognize that the "light-touch" limited assurance models of the past are no longer sufficient to meet investor expectations or regulatory scrutiny.
              </p>
              <p>
                Current internal control frameworks often lack the granular precision required for double-materiality reporting. Forensic excellence is now the minimum viable standard. Companies must transition from a retrospective reporting mindset to a real-time, audit-ready data governance model that withstands the scrutiny of global institutional capital.
              </p>
            </div>
          </section>

          {/* Framework Module */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between border-b border-[#c5c6cd]/50 pb-4 mb-12 gap-4">
              <h2 className="font-serif text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#001F3F]">
                A Forensic-Grade Readiness Programme for ISSA 5000
              </h2>
              <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#c5c6cd]">Module_Ref_5000</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Point 01 */}
              <div className="bg-white p-8 border border-[#c5c6cd]/30 flex flex-col gap-4 hover:border-[#001F3F] transition-colors">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-[#001F3F] text-[32px]">shield</span>
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#c5c6cd]">CTRL_01</span>
                </div>
                <h3 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F]">Gap Assessment</h3>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">
                  Detailed structural analysis of current reporting architectures against the 12 primary pillars of ISSA 5000 verification protocols.
                </p>
              </div>
              {/* Point 02 */}
              <div className="bg-white p-8 border border-[#c5c6cd]/30 flex flex-col gap-4 hover:border-[#001F3F] transition-colors">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-[#001F3F] text-[32px]">database</span>
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#c5c6cd]">CTRL_02</span>
                </div>
                <h3 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F]">Data Governance</h3>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">
                  Implementation of immutable ledger systems and automated ETL pipelines to ensure the integrity of non-financial metrics.
                </p>
              </div>
              {/* Point 03 */}
              <div className="bg-white p-8 border border-[#c5c6cd]/30 flex flex-col gap-4 hover:border-[#001F3F] transition-colors">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-[#001F3F] text-[32px]">magnify_docked</span>
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#c5c6cd]">CTRL_03</span>
                </div>
                <h3 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F]">Forensic Verification</h3>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">
                  Third-party independent stress-testing of sustainability claims using senior-led forensic accounting methodologies.
                </p>
              </div>
              {/* Point 04 */}
              <div className="bg-white p-8 border border-[#c5c6cd]/30 flex flex-col gap-4 hover:border-[#001F3F] transition-colors">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-[#001F3F] text-[32px]">simulation</span>
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#c5c6cd]">CTRL_04</span>
                </div>
                <h3 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F]">Mock Simulations</h3>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">
                  End-to-end dry runs of the assurance process to identify systemic friction points before the final 2026 audit cycle.
                </p>
              </div>
            </div>
          </section>

          {/* Strategic Insight Box */}
          <section className="mb-20 bg-[#001F3F] p-12 text-white border-l-[8px] border-[#7c5800]">
            <div className="max-w-2xl">
              <h2 className="font-serif text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold mb-6">
                Why the ISSA 5000 Transition Matters for Indian Companies in 2026
              </h2>
              <div className="space-y-4 text-[16px] leading-[24px] text-white/90">
                <p>
                  India's top listed entities face a dual transition risk: domestic SEBI BRSR Core evolution and global alignment with ISSA 5000. Failure to synchronize these internal controls can lead to material disclosure gaps.
                </p>
                <p>
                  By 2026, the cost of capital will be directly indexed to the "Assurance Quotient" of an organization. Transparent, forensic-grade reporting is no longer a corporate social responsibility—it is a financial imperative.
                </p>
              </div>
            </div>
          </section>

          {/* Implementation Timeline */}
          <section className="mb-20">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] mb-12">
              Sequencing for Success: Phased Readiness Timeline
            </h2>
            <div className="space-y-0 relative">
              <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[#c5c6cd]/50"></div>
              
              {/* Phase 1 */}
              <div className="relative pl-12 pb-12">
                <div className="absolute left-0 top-1 w-6 h-6 bg-[#001F3F] rounded-full border-4 border-[#f8f9fa] ring-2 ring-[#001F3F]"></div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800]">PHASE 01: Q2-Q3 2026</span>
                  <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F]">Structural Diagnostic &amp; Control Mapping</h4>
                  <p className="text-[14px] leading-[20px] text-[#4A5568]">Mapping existing internal controls over financial reporting (ICFR) to non-financial data streams.</p>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="relative pl-12 pb-12">
                <div className="absolute left-0 top-1 w-6 h-6 bg-[#001F3F] rounded-full border-4 border-[#f8f9fa] ring-2 ring-[#001F3F]"></div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800]">PHASE 02: Q4 2026 - Q2 2025</span>
                  <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F]">Systems Integration &amp; Ledger Deployment</h4>
                  <p className="text-[14px] leading-[20px] text-[#4A5568]">Deploying centralized ESG data hubs with cryptographic audit trails for automated verification.</p>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="relative pl-12 pb-12">
                <div className="absolute left-0 top-1 w-6 h-6 bg-[#001F3F] rounded-full border-4 border-[#f8f9fa] ring-2 ring-[#001F3F]"></div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800]">PHASE 03: Q3 2025 - Q1 2026</span>
                  <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F]">Pre-Assurance Testing &amp; Simulation</h4>
                  <p className="text-[14px] leading-[20px] text-[#4A5568]">Conducting full-scale mock audits to ensure zero-variance between reported data and source evidence.</p>
                </div>
              </div>
              
              {/* Phase 4 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-6 h-6 bg-[#7c5800] rounded-full border-4 border-[#f8f9fa] ring-2 ring-[#7c5800]"></div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800]">PHASE 04: Q2 2026</span>
                  <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F]">ISSA 5000 Official Mandate Engagement</h4>
                  <p className="text-[14px] leading-[20px] text-[#4A5568]">Execution of final assurance engagement with global institutional verification partners.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="p-10 border-4 border-[#001F3F] bg-white">
            <h3 className="text-[12px] leading-[16px] font-bold tracking-[0.2em] uppercase text-[#001F3F] mb-8 border-b border-[#c5c6cd]/50 pb-4">
              EXECUTIVE SUMMARY &amp; KEY TAKEAWAYS
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <li className="flex gap-4">
                <span className="text-[#7c5800] font-bold font-mono">01</span>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Transition from limited to reasonable assurance requires fundamentally different data controls.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#7c5800] font-bold font-mono">02</span>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Internal audit teams must be upskilled in forensic-grade non-financial verification techniques.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#7c5800] font-bold font-mono">03</span>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Digital traceability is the cornerstone of passing an ISSA 5000 assurance engagement.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#7c5800] font-bold font-mono">04</span>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Early readiness (24 months lead time) significantly reduces compliance-induced business friction.</p>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
};

export default FromIsae3000;