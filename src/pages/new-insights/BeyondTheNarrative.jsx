import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const BeyondTheNarrative = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-[16px] leading-[24px] text-[#191c1d] antialiased bg-[#f8f9fa] selection:bg-[#7c5800] selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Beyond The Narrative | Northrop India</title>
      </Helmet>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: "url('/insightpage/beyond.png')" }}
            ></div>
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-[#001F3F]/60 to-transparent mix-blend-multiply"></div> */}
          </div>
          <div className="relative z-10 text-center text-white max-w-[1200px] px-[20px] md:px-[64px]">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="font-mono text-[10px] tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 border border-white/20 uppercase font-bold">
                [ STRATEGY LEDGER VOL. 26 ]
              </span>
              <span className="font-mono text-[10px] tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 border border-white/20 uppercase font-bold">
                [ 2026 REGULATORY MANDATE ]
              </span>
            </div>
            <h1 className="font-serif text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold uppercase tracking-tight mb-6">
              Beyond the Narrative
            </h1>
            <p className="text-[16px] md:text-[18px] leading-[28px] text-white/80 max-w-2xl mx-auto italic mb-10 font-light">
              Dissecting the architecture of modern accountability through forensic SROI and strategic audit frameworks.
            </p>
            <div className="w-px h-24 bg-gradient-to-b from-white to-transparent mx-auto"></div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-24 px-[20px] md:px-[64px] bg-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#4A5568] mb-4 font-mono">01 / EXECUTIVE SUMMARY</div>
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] mb-8">
              The Shifting Paradigm
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[28px] text-[#4A5568]">
              The era of anecdotal CSR reporting is over. In 2026, Indian M&amp;A and regulatory environments demand more than intent; they demand <span className="text-[#001F3F] font-semibold underline decoration-[#7c5800]">forensic proof of impact</span>. As value moves from tangible assets to social legitimacy, the ability to quantify stakeholder returns determines the longevity of the corporate mandate.
            </p>
          </div>
        </section>

        {/* High-Impact Metrics Section */}
        <section className="py-24 px-[20px] md:px-[64px] bg-[#f8f9fa]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#4A5568] mb-2 font-mono">02 / AUDIT INTENSITY METRICS</div>
              <h2 className="font-serif text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#001F3F]">
                2026 Forensic Benchmarks
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="bg-white p-10 border border-[#c5c6cd]/50 border-t-4 border-t-[#001F3F] flex flex-col items-center text-center shadow-sm">
                <span className="material-symbols-outlined text-4xl text-[#001F3F] mb-4">flag</span>
                <div className="text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-serif font-bold text-[#001F3F] mb-2">85%</div>
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#4A5568] mb-4">Audit Flags</div>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Percentage of self-reported ESG scores challenged during forensic due diligence in 2026.</p>
              </div>
              <div className="bg-white p-10 border border-[#c5c6cd]/50 border-t-4 border-t-[#7c5800] flex flex-col items-center text-center shadow-sm">
                <span className="material-symbols-outlined text-4xl text-[#7c5800] mb-4">cancel</span>
                <div className="text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-serif font-bold text-[#7c5800] mb-2">3.2x</div>
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#4A5568] mb-4">Grant Rejections</div>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">The increase in rejected CSR project funding due to non-verifiable stakeholder impact data.</p>
              </div>
              <div className="bg-white p-10 border border-[#c5c6cd]/50 border-t-4 border-t-[#001F3F] flex flex-col items-center text-center shadow-sm">
                <span className="material-symbols-outlined text-4xl text-[#001F3F] mb-4">insights</span>
                <div className="text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-serif font-bold text-[#001F3F] mb-2">1:4.2</div>
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#4A5568] mb-4">Avg. Social Value</div>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Ratio of investment to audited social return required for tier-1 institutional investment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SROI Technical Framework */}
        <section className="py-32 px-[20px] md:px-[64px] bg-[#001F3F] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <span className="material-symbols-outlined text-[400px]">shield</span>
          </div>
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800] mb-4 font-mono">03 / SROI TECHNICAL FRAMEWORK</div>
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold uppercase tracking-tight">
                The Four Pillars of Verification
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              <div className="group bg-white/5 p-8 border border-white/10 hover:border-[#7c5800] transition-colors">
                <div className="font-mono text-[12px] text-[#7c5800] mb-4 border-b border-white/20 pb-2">SROI_01</div>
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold mb-4 group-hover:text-[#7c5800] transition-colors">Stakeholder Outcomes</h3>
                <p className="text-[14px] leading-[20px] text-white/70">Rigorous identification of unintended and intended changes through deep-field ethnographic surveys.</p>
              </div>
              <div className="group bg-white/5 p-8 border border-white/10 hover:border-[#7c5800] transition-colors">
                <div className="font-mono text-[12px] text-[#7c5800] mb-4 border-b border-white/20 pb-2">SROI_02</div>
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold mb-4 group-hover:text-[#7c5800] transition-colors">Defensible Proxies</h3>
                <p className="text-[14px] leading-[20px] text-white/70">Monetary valuations derived from market substitutes with institutional-grade justification.</p>
              </div>
              <div className="group bg-white/5 p-8 border border-white/10 hover:border-[#7c5800] transition-colors">
                <div className="font-mono text-[12px] text-[#7c5800] mb-4 border-b border-white/20 pb-2">SROI_03</div>
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold mb-4 group-hover:text-[#7c5800] transition-colors">Attribution Analysis</h3>
                <p className="text-[14px] leading-[20px] text-white/70">Forensic stripping of external factors to isolate the true net impact of the specific intervention.</p>
              </div>
              <div className="group bg-white/5 p-8 border border-white/10 hover:border-[#7c5800] transition-colors">
                <div className="font-mono text-[12px] text-[#7c5800] mb-4 border-b border-white/20 pb-2">SROI_04</div>
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold mb-4 group-hover:text-[#7c5800] transition-colors">Sensitivity Analysis</h3>
                <p className="text-[14px] leading-[20px] text-white/70">Stress-testing the model against varying assumptions to ensure non-fragile reporting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Toolkit / Comparison Grid */}
        <section className="py-24 px-[20px] md:px-[64px] bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#4A5568] mb-2 font-mono">04 / STRATEGIC TOOLKIT</div>
              <h2 className="font-serif text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#001F3F]">
                Methodological Comparison
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-[#c5c6cd]/50 border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#4A5568] text-white text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase">
                    <th className="p-4 text-left border-r border-[#c5c6cd]/50">Feature</th>
                    <th className="p-4 text-left border-r border-[#c5c6cd]/50">Standard Contribution</th>
                    <th className="p-4 text-left border-r border-[#c5c6cd]/50">SROI Analysis</th>
                    <th className="p-4 text-left">Forensic Verification</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] leading-[20px]">
                  <tr className="border-b border-[#c5c6cd]/50">
                    <td className="p-4 font-bold bg-[#f3f4f5]">Primary Metric</td>
                    <td className="p-4">Operational Output</td>
                    <td className="p-4">Social Value Ratio</td>
                    <td className="p-4 font-bold text-[#001F3F]">Defensible Factum</td>
                  </tr>
                  <tr className="border-b border-[#c5c6cd]/50">
                    <td className="p-4 font-bold bg-[#f3f4f5]">Verification Depth</td>
                    <td className="p-4">Internal Report</td>
                    <td className="p-4">Third-party Audit</td>
                    <td className="p-4 font-bold text-[#001F3F]">Investigative Grade</td>
                  </tr>
                  <tr className="border-b border-[#c5c6cd]/50">
                    <td className="p-4 font-bold bg-[#f3f4f5]">Stakeholder Bias</td>
                    <td className="p-4">High (Optimistic)</td>
                    <td className="p-4">Adjusted (Defensive)</td>
                    <td className="p-4 font-bold text-[#001F3F]">Zero-Based Assumption</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold bg-[#f3f4f5]">Investor Use-Case</td>
                    <td className="p-4">Marketing Collateral</td>
                    <td className="p-4">Valuation Adjuster</td>
                    <td className="p-4 font-bold text-[#001F3F]">Liability Mitigation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-24 px-[20px] md:px-[64px] bg-[#f8f9fa]">
          <div className="max-w-[1000px] mx-auto">
            <div className="bg-white border-2 border-[#7c5800] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 text-[#7c5800]/10">
                <span className="material-symbols-outlined text-[120px]">fact_check</span>
              </div>
              <div className="relative z-10">
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800] mb-6 font-mono">05 / KEY TAKEAWAYS</div>
                <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] mb-8">
                  Strategic Mandates for 2026
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#7c5800] font-bold mt-1">arrow_forward</span>
                    <span className="text-[16px] leading-[24px]">Transition from output-based reporting to monetary social value quantification to survive institutional ESG audits.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#7c5800] font-bold mt-1">arrow_forward</span>
                    <span className="text-[16px] leading-[24px]">Implement 'Shadow Audits' at the project design phase to ensure attribution is built into the strategic architecture.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#7c5800] font-bold mt-1">arrow_forward</span>
                    <span className="text-[16px] leading-[24px]">Leverage forensic SROI as a negotiation lever in M&amp;A valuations to justify premium social-equity positioning.</span>
                  </li>
                </ul>
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#001F3F] text-white px-8 py-4 text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download Protocol PDF
                  </button>
                  <button className="border border-[#001F3F] text-[#001F3F] px-8 py-4 text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase hover:bg-[#001F3F] hover:text-white transition-all">
                    Request Briefing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BeyondTheNarrative;