import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AFiduciaryApproachToSocialCapital = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans antialiased overflow-x-hidden">
      <Helmet>
        <title>A Fiduciary Approach to Social Capital | Northrop India</title>
      </Helmet>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden border-b border-[#001F3F]">
          <div className="absolute inset-0 z-0">
            <img 
              alt="India Map Connection Graphic" 
              className="w-full h-full object-cover" 
              src="/insightpage/fiduciary.png" 
            />
          </div>
          <div className="relative z-20 max-w-[1200px] mx-auto px-[20px] md:px-[64px] w-full text-white">
            <div className="flex flex-col gap-4 max-w-4xl">
              {/* <div className="flex flex-wrap gap-4 items-center mb-4">
                <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-white/80">
                  [ STRATEGY LEDGER VOL. 20 ]
                </span>
                <span className="w-8 h-[1px] bg-[#7c5800]"></span>
                <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-white/80">
                  DOC_ID: 2026.SOC_CAP
                </span>
                <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800]">
                  STATUS: MANDATORY
                </span>
              </div> */}


              <h1 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold tracking-[-0.02em] uppercase mb-4">
                A FIDUCIARY APPROACH TO SOCIAL CAPITAL
              </h1>
              <p className="font-mono text-[16px] md:text-[18px] uppercase tracking-tight text-[#ffff]">
                Optimising Impact Portfolios Across India's Regional Complexity
              </p>
            </div>
          </div>
          <div className="absolute bottom-8 right-[20px] md:right-[64px] z-20">
            <div className="flex flex-col items-end">
              <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-white/60">DATE RELEASED</span>
              <span className="font-mono text-white text-[16px] md:text-[18px] font-bold">Q1 2026</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="bg-[#f8f9fa] py-24 px-[20px] md:px-[64px] max-w-[1200px] mx-auto">
          <div className="w-full">
            
            {/* Section 1: The Fiduciary Shift */}
            <section className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F]">
                  [ SECTION: 01 CONTEXT ]
                </span>
                <div className="h-px flex-grow bg-[#c5c6cd]"></div>
              </div>
              <h2 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold uppercase mb-8 text-[#001F3F]">
                THE FIDUCIARY SHIFT
              </h2>
              <div className="space-y-6 max-w-4xl">
                <p className="text-[16px] md:text-[18px] leading-[28px] text-[#4A5568]">
                  <span className="text-[48px] leading-[48px] font-serif float-left mr-3 text-[#001F3F]">A</span>
                  s the strategic landscape of India matures toward 2026, social capital deployment can no longer rely on anecdotal success or philanthropic sentiment. The transition toward a "forensic-grade" fiduciary approach is not merely a preference but a survival mandate for large-scale institutional players.
                </p>
                <p className="text-[16px] md:text-[18px] leading-[28px] text-[#4A5568]">
                  Analytical rigour must replace intuitive giving. In the current ecosystem, the distinction between persuasive pitches and disciplined capital allocation has blurred. A true fiduciary mindset demands that every unit of capital deployed toward social outcomes undergoes the same scrutiny as a commercial private equity investment. We are moving from "spending" to "portfolio management."
                </p>
              </div>
            </section>

            {/* Section 2: The Challenge */}
            <section className="mb-24">
              <div className="p-12 bg-[#f3f4f5] border-2 border-[#c5c6cd]">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F]">
                    [ SECTION: 02 ANALYSIS ]
                  </span>
                </div>
                <h2 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold uppercase mb-6 text-[#001F3F]">
                  THE CHALLENGE: PRECISION IN 2026
                </h2>
                <p className="text-[16px] leading-[24px] mb-8 text-[#4A5568]">
                  Strategic deployment faces structural headwinds that require forensic identification:
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#7c5800]">warning</span>
                    <div>
                      <strong className="block uppercase font-bold text-[#001F3F]">Fragmented Deployment</strong>
                      <span className="text-[14px] text-[#4A5568]">Isolated projects failing to achieve regional critical mass.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#7c5800]">analytics</span>
                    <div>
                      <strong className="block uppercase font-bold text-[#001F3F]">Inconsistent Measurement</strong>
                      <span className="text-[14px] text-[#4A5568]">Lack of standardized KPIs across diverse socio-economic sectors.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#7c5800]">location_on</span>
                    <div>
                      <strong className="block uppercase font-bold text-[#001F3F]">Regional Complexity</strong>
                      <span className="text-[14px] text-[#4A5568]">India's vast diversity requires hyperlocal intelligence and adaptive monitoring frameworks.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: A Fiduciary-First Model */}
            <section className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F]">
                  [ SECTION: 03 STRATEGY ]
                </span>
                <div className="h-px flex-grow bg-[#c5c6cd]"></div>
              </div>
              <h2 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold uppercase mb-12 text-[#001F3F]">
                A FIDUCIARY-FIRST MODEL
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c5c6cd] border border-[#c5c6cd]">
                {/* Card 01 */}
                <div className="bg-white p-8 group hover:bg-[#001F3F] hover:text-white transition-all duration-300">
                  <span className="font-mono text-[24px] font-bold text-[#7c5800] group-hover:text-white mb-4 block">01</span>
                  <h3 className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase mb-4">Multi-Dimensional Scoring</h3>
                  <p className="text-[14px] leading-[20px] opacity-80">Integrated evaluation of Impact Potential, Execution Risk, Absorptive Capacity, and Governance Transparency.</p>
                </div>
                {/* Card 02 */}
                <div className="bg-white p-8 group hover:bg-[#001F3F] hover:text-white transition-all duration-300">
                  <span className="font-mono text-[24px] font-bold text-[#7c5800] group-hover:text-white mb-4 block">02</span>
                  <h3 className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase mb-4">Regional Tailoring</h3>
                  <p className="text-[14px] leading-[20px] opacity-80">State-specific regulatory alignment and granular mapping of local socio-economic drivers.</p>
                </div>
                {/* Card 03 */}
                <div className="bg-white p-8 group hover:bg-[#001F3F] hover:text-white transition-all duration-300">
                  <span className="font-mono text-[24px] font-bold text-[#7c5800] group-hover:text-white mb-4 block">03</span>
                  <h3 className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase mb-4">Continuous Monitoring</h3>
                  <p className="text-[14px] leading-[20px] opacity-80">Dynamic portfolio rebalancing based on real-time field data and outcome-linked milestones.</p>
                </div>
                {/* Card 04 */}
                <div className="bg-white p-8 group hover:bg-[#001F3F] hover:text-white transition-all duration-300">
                  <span className="font-mono text-[24px] font-bold text-[#7c5800] group-hover:text-white mb-4 block">04</span>
                  <h3 className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase mb-4">Forensic Verification</h3>
                  <p className="text-[14px] leading-[20px] opacity-80">Independent third-party audits of social outcomes to ensure absolute fiduciary integrity.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Compliance */}
            <section className="mb-24 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F]">
                    [ SECTION: 04 GOVERNANCE ]
                  </span>
                </div>
                <h2 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold uppercase mb-6 text-[#001F3F]">
                  COMPLIANCE AS A BYPRODUCT
                </h2>
                <p className="text-[16px] leading-[24px] text-[#4A5568]">
                  When a portfolio is designed with forensic rigour, external regulatory compliance ceases to be an administrative burden. Our model ensures that adherence to <span className="font-bold border-b border-[#001F3F]">FCRA</span>, <span className="font-bold border-b border-[#001F3F]">CSR-1</span>, and <span className="font-bold border-b border-[#001F3F]">PMLA</span> requirements becomes a natural outcome of strong operational integrity.
                </p>
              </div>
              <div className="md:w-1/2 w-full aspect-square bg-[#e2e8f0] border-2 border-[#001F3F] p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "20px 20px" }}></div>
                </div>
                <div className="text-center z-10">
                  <div className="material-symbols-outlined text-6xl text-[#001F3F] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</div>
                  <div className="font-mono text-[12px] uppercase tracking-widest text-[#4A5568]">Audit Protocol Active</div>
                  <div className="font-serif text-[48px] leading-[56px] mt-2 font-bold text-[#001F3F]">100%</div>
                  <div className="font-mono text-[10px] mt-2 text-[#4A5568]">COMPLIANCE ASSURANCE</div>
                </div>
              </div>
            </section>

            {/* Section 5: Sequencing */}
            <section className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F]">
                  [ SECTION: 05 EXECUTION ]
                </span>
                <div className="h-px flex-grow bg-[#c5c6cd]"></div>
              </div>
              <h2 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold uppercase mb-12 text-[#001F3F]">
                SEQUENCING FOR SUCCESS
              </h2>
              <div className="relative space-y-12">
                <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-[#c5c6cd]"></div>
                
                {/* Step 1 */}
                <div className="flex gap-8 relative items-start">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F] flex items-center justify-center z-10 flex-shrink-0">
                    <span className="font-mono text-white text-[14px] font-bold">P1</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase mb-2 text-[#001F3F]">Scoping</h4>
                    <p className="text-[14px] text-[#4A5568]">Identification of strategic alignment and geography-specific problem statements.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex gap-8 relative items-start">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F] flex items-center justify-center z-10 flex-shrink-0">
                    <span className="font-mono text-white text-[14px] font-bold">P2</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase mb-2 text-[#001F3F]">Scoring</h4>
                    <p className="text-[14px] text-[#4A5568]">Forensic assessment of implementing partners and impact models.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex gap-8 relative items-start">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F] flex items-center justify-center z-10 flex-shrink-0">
                    <span className="font-mono text-white text-[14px] font-bold">P3</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase mb-2 text-[#001F3F]">Tailoring</h4>
                    <p className="text-[14px] text-[#4A5568]">Customization of interventions to match regional socio-economic nuances.</p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex gap-8 relative items-start">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F] flex items-center justify-center z-10 flex-shrink-0">
                    <span className="font-mono text-white text-[14px] font-bold">P4</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase mb-2 text-[#001F3F]">Monitoring</h4>
                    <p className="text-[14px] text-[#4A5568]">Data-driven oversight and dynamic portfolio adjustment cycles.</p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex gap-8 relative items-start">
                  <div className="w-12 h-12 rounded-full bg-[#7c5800] flex items-center justify-center z-10 flex-shrink-0">
                    <span className="font-mono text-white text-[14px] font-bold">P5</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase mb-2 text-[#001F3F]">Verification</h4>
                    <p className="text-[14px] text-[#4A5568]">Independent validation of outcomes for final fiduciary sign-off.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Key Takeaways */}
            <section className="mb-12">
              <div className="bg-[#001F3F] text-white p-8 md:p-12 border-t-8 border-[#7c5800]">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800]">
                    [ EXECUTIVE SUMMARY ]
                  </span>
                </div>
                <h2 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold uppercase mb-8">
                  KEY TAKEAWAYS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex gap-4">
                    <span className="text-[#7c5800] font-mono text-[18px]">01</span>
                    <p className="text-[14px] leading-[20px] font-medium tracking-tight">Fiduciary oversight is no longer optional for social capital portfolios in 2026.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#7c5800] font-mono text-[18px]">02</span>
                    <p className="text-[14px] leading-[20px] font-medium tracking-tight">Standardized scoring must replace anecdotal impact evidence.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#7c5800] font-mono text-[18px]">03</span>
                    <p className="text-[14px] leading-[20px] font-medium tracking-tight">Regional diversity requires a tailored rather than a monolithic deployment strategy.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#7c5800] font-mono text-[18px]">04</span>
                    <p className="text-[14px] leading-[20px] font-medium tracking-tight">Forensic verification is the ultimate insurance for institutional reputation.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sharing/Actions */}
            <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-[#c5c6cd] gap-6">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 border border-[#001F3F] px-4 py-2 text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F] hover:bg-[#e2e8f0] transition-colors">
                  <span className="material-symbols-outlined text-[14px]">download</span> PDF Version
                </button>
                <button className="flex items-center gap-2 border border-[#001F3F] px-4 py-2 text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F] hover:bg-[#e2e8f0] transition-colors">
                  <span className="material-symbols-outlined text-[14px]">share</span> Share Report
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F]">
                  VERIFIED BY STRATEGY CORE
                </span>
                <div className="w-4 h-4 rounded-full bg-[#7c5800]"></div>
              </div>
            </div>

          </div>
        </article>
      </main>
    </div>
  );
};

export default AFiduciaryApproachToSocialCapital;