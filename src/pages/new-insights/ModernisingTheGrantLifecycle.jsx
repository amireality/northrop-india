import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ModernisingTheGrantLifecycle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans antialiased overflow-x-hidden selection:bg-[#7c5800] selection:text-white">
      <Helmet>
        <title>Modernising the Grant Lifecycle | Northrop India</title>
      </Helmet>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Forensic audit of documents"
              className="w-full h-full object-cover"
              src="/insightpage/modernising.jpg" 
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/80 via-[#001F3F]/40 to-transparent"></div> */}
          </div>
          <div className="relative z-10 w-full max-w-[1200px] px-[20px] md:px-[64px] text-center text-white">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center items-center gap-4">
                <span className="text-[12px] leading-[16px] font-bold border border-white/40 px-3 py-1 tracking-widest bg-white/10 backdrop-blur-sm uppercase">
                  [ STRATEGY LEDGER VOL. 31 ]
                </span>
                <span className="text-[12px] leading-[16px] font-bold border border-white/40 px-3 py-1 tracking-widest bg-white/10 backdrop-blur-sm uppercase">
                  [ 2026 COMPLIANCE MANDATE ]
                </span>
              </div>
              <h1 className="font-serif text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] max-w-4xl tracking-tight font-bold uppercase drop-shadow-lg">
                MODERNISING THE GRANT LIFECYCLE
              </h1>
              <p className="font-serif text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] max-w-2xl opacity-90 font-light italic">
                Digital Governance and Auditable Transparency in CSR and Philanthropic Deployment in 2026
              </p>
              <div className="mt-12">
                <span className="material-symbols-outlined text-4xl animate-bounce">expand_more</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <article className="max-w-[1000px] mx-auto px-[20px] md:px-[64px] py-24">
          
          {/* Executive Summary */}
          <section className="mb-24">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] mb-8 border-l-4 border-[#7c5800] pl-6">
              The Challenge: Legacy Processes in a Tightening Regulatory Era (2026)
            </h2>
            <div className="space-y-6 text-[#4A5568] text-[16px] md:text-[18px] leading-[28px]">
              <p>
                As we navigate the complexities of 2026, the landscape of corporate social responsibility and philanthropic deployment has undergone a seismic shift. No longer is manual tracking or retrospective reporting sufficient. The convergence of tightening global ESG frameworks and localized regulatory rigor demands a forensic approach to fund management.
              </p>
              <p>
                Legacy systems, often siloed and reliant on manual reconciliation, create significant vulnerabilities. In an era where every rupee must be accounted for from disbursement to impact, the "governance gap" has become a liability that forward-thinking organizations can no longer ignore.
              </p>
            </div>

            {/* Forensic Risk Callout */}
            <div className="mt-12 bg-white border border-[#c5c6cd]/50 p-8 relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rotate-45 transform translate-x-12 -translate-y-12"></div>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-red-600 p-3 text-white shrink-0 rounded-sm">
                  <span className="material-symbols-outlined text-2xl">priority_high</span>
                </div>
                <div>
                  <h3 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-red-600 mb-2">FORENSIC RISK ASSESSMENT</h3>
                  <p className="font-serif text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#001F3F] mb-4">FCRA Enforcement &amp; PMLA Scrutiny</p>
                  <p className="text-[16px] leading-[24px] text-[#4A5568]">
                    2026 mandates a shift toward pre-emptive compliance. The Prevention of Money Laundering Act (PMLA) and revised Foreign Contribution Regulation Act (FCRA) norms now require real-time visibility into secondary and tertiary fund utilization. Failure to maintain "forensic-grade" trails results in immediate operational suspension.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Framework */}
          <section className="mb-24">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] mb-12 text-center uppercase tracking-tight">
              A Practical Digital Governance Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {/* Pillar 1 */}
              <div className="p-8 border border-[#c5c6cd]/50 bg-white hover:border-[#001F3F] transition-colors group">
                <span className="material-symbols-outlined text-4xl text-[#7c5800] mb-6 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
                <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-4">End-to-End Workflow</h4>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Unified digital orchestration of the entire grant lifecycle, from initial application and vetting to final impact reporting.</p>
              </div>
              {/* Pillar 2 */}
              <div className="p-8 border border-[#c5c6cd]/50 bg-white hover:border-[#001F3F] transition-colors group">
                <span className="material-symbols-outlined text-4xl text-[#7c5800] mb-6 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>rebase_edit</span>
                <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-4">Automated Reconciliation</h4>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Instantaneous matching of bank disbursements with field-level utilization records, eliminating the lag inherent in manual audits.</p>
              </div>
              {/* Pillar 3 */}
              <div className="p-8 border border-[#c5c6cd]/50 bg-white hover:border-[#001F3F] transition-colors group">
                <span className="material-symbols-outlined text-4xl text-[#7c5800] mb-6 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>rule_folder</span>
                <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-4">Forensic-Grade Audit Trails</h4>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Immutable logs of every transaction and approval step, designed to withstand the highest levels of regulatory inquiry.</p>
              </div>
              {/* Pillar 4 */}
              <div className="p-8 border border-[#c5c6cd]/50 bg-white hover:border-[#001F3F] transition-colors group">
                <span className="material-symbols-outlined text-4xl text-[#7c5800] mb-6 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-4">Selective DLT</h4>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Leveraging private Distributed Ledger Technology for high-stakes fund paths to ensure absolute data integrity and stakeholder trust.</p>
              </div>
            </div>
          </section>

          {/* Comparative Table */}
          <section className="mb-24">
            <div className="mb-8">
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F]">Compliance Readiness Grid</h2>
              <p className="text-[#4A5568] text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase mt-2">TECHNICAL COMPARISON MATRIX v4.0 (2026)</p>
            </div>
            <div className="overflow-x-auto border-t-4 border-[#001F3F]">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#4A5568] text-white text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase">
                    <th className="p-5 border-b border-[#c5c6cd]/50">Parameters</th>
                    <th className="p-5 border-b border-[#c5c6cd]/50">Legacy Manual Processes</th>
                    <th className="p-5 border-b border-[#c5c6cd]/50 bg-[#001F3F]">Modern Digital Governance</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] leading-[20px] divide-y divide-[#c5c6cd]/50">
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="p-5 font-bold text-[#001F3F]">Audit Trail</td>
                    <td className="p-5 text-[#4A5568]">Retrospective / Document-based</td>
                    <td className="p-5 font-semibold text-[#7c5800]">Real-time / Immutable</td>
                  </tr>
                  <tr className="bg-[#f8f9fa] hover:bg-gray-50 transition-colors">
                    <td className="p-5 font-bold text-[#001F3F]">Reconciliation Speed</td>
                    <td className="p-5 text-[#4A5568]">15-30 Days Post-Event</td>
                    <td className="p-5 font-semibold text-[#7c5800]">&lt; 24 Hours / Instant</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="p-5 font-bold text-[#001F3F]">Regulatory Confidence</td>
                    <td className="p-5 text-red-600 font-medium">Reactive / Vulnerable</td>
                    <td className="p-5 font-semibold text-[#7c5800]">Proactive / High-Grade</td>
                  </tr>
                  <tr className="bg-[#f8f9fa] hover:bg-gray-50 transition-colors">
                    <td className="p-5 font-bold text-[#001F3F]">Data Granularity</td>
                    <td className="p-5 text-[#4A5568]">High-Level Summaries</td>
                    <td className="p-5 font-semibold text-[#7c5800]">Forensic-Level Detail</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Strategic Mandates */}
          <section className="mb-12">
            <div className="bg-[#001F3F] p-8 md:p-12 text-white border-t-8 border-[#7c5800]">
              <h2 className="font-serif text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold mb-8 uppercase tracking-widest border-b border-white/20 pb-6">
                Key Takeaways for Forward-Thinking Leaders in 2026
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 bg-[#7c5800] p-1 text-white shrink-0 rounded-sm">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                  <span className="text-[16px] md:text-[18px] leading-[28px]">Prioritize tech-readiness over project volume; a poorly governed project is a corporate risk.</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 bg-[#7c5800] p-1 text-white shrink-0 rounded-sm">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                  <span className="text-[16px] md:text-[18px] leading-[28px]">Integrate forensic accountants into the CSR design phase, not just the audit phase.</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 bg-[#7c5800] p-1 text-white shrink-0 rounded-sm">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                  <span className="text-[16px] md:text-[18px] leading-[28px]">Invest in interoperable systems that can speak directly to regulatory compliance portals.</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 bg-[#7c5800] p-1 text-white shrink-0 rounded-sm">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                  <span className="text-[16px] md:text-[18px] leading-[28px]">Establish a "Transparency Index" to benchmark partner performance and funding eligibility.</span>
                </li>
              </ul>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
};

export default ModernisingTheGrantLifecycle;