import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const CorporateRestructuringTurnaroundAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Corporate Restructuring & Turnaround Advisory - Northrop Management</title>
        <meta name="description" content="Corporate Restructuring & Turnaround Advisory" />
        
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#e5e2e1] selection:text-[#000000]">
        {/* Hero Section */}
        <section className="relative w-full px-8 pt-[120px] pb-[20px] bg-[#f9f9f9]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-[32px] items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-[16px] block">Service Portfolio — 2C</span>
              <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#1a1c1c] mb-[24px] leading-none">
                Corporate Restructuring &amp; <br />Turnaround Advisory
              </h1>
              <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-2xl">
                Design and execute solutions that preserve value, restore confidence, and create a sustainable path to recovery for businesses in distress.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex justify-end">
              <div className="border-l-4 border-[#000000] pl-6 py-2">
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] uppercase leading-tight">Institutional<br />Integrity</p>
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto mt-[4px] h-[500px] overflow-hidden">
            <img className="w-full h-full object-cover filter grayscale contrast-125 brightness-90" 
            alt="Institutional Integrity" src="/transactionadvisoryimg/corporate-restructuring.jpeg" />
          </div>
        </section>

        {/* Section: What We Do */}
        <section className="w-full px-8 py-[120px] bg-[#f9f9f9]">
          <div className="max-w-[1280px] mx-auto">
            <div className="border-t border-[#000000] pt-[24px] mb-[64px]">
              <h2 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] uppercase">Core Competencies &amp; Mandates</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] border-b border-[#c4c7c7] pb-[120px]">
              {/* Column 1 */}
              <div className="space-y-[24px]">
                <div className="border-l border-[#747878] pl-6 h-full">
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Financial &amp; Capital</h3>
                  <ul className="space-y-4 font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">
                    <li>Debt renegotiation &amp; haircut advisory</li>
                    <li>Lender negotiations &amp; consensus building</li>
                    <li>Cash flow stabilisation</li>
                    <li>Liquidity management &amp; forecasting</li>
                  </ul>
                </div>
              </div>
              {/* Column 2 */}
              <div className="space-y-[24px]">
                <div className="border-l border-[#747878] pl-6 h-full">
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Operational Recovery</h3>
                  <ul className="space-y-4 font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">
                    <li>Cost rationalisation &amp; reduction</li>
                    <li>Working capital optimisation</li>
                    <li>Business unit rightsizing</li>
                    <li>Performance monitoring protocols</li>
                  </ul>
                </div>
              </div>
              {/* Column 3 */}
              <div className="space-y-[24px]">
                <div className="border-l border-[#747878] pl-6 h-full">
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Statutory Advisory</h3>
                  <ul className="space-y-4 font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">
                    <li>Insolvency and IBC advisory</li>
                    <li>Pre-pack insolvency strategies</li>
                    <li>Resolution plan preparation</li>
                    <li>NCLT process management</li>
                  </ul>
                </div>
              </div>
              {/* Column 4 */}
              <div className="space-y-[24px]">
                <div className="border-l border-[#747878] pl-6 h-full">
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Strategic Governance</h3>
                  <ul className="space-y-4 font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">
                    <li>Stakeholder management</li>
                    <li>CoC representation</li>
                    <li>Strategic options assessment</li>
                    <li>Resolution Professional support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Block */}
        <section className="w-full px-8 py-[120px] bg-[#f3f3f4]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 lg:col-span-5">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] uppercase mb-[16px] block">Case Study // Intervention</span>
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px] italic leading-tight">Saving 2,000 Jobs: How Northrop's Turnaround Plan Rescued a Mid-Size Textile Manufacturer from IBC</h2>
                <div className="space-y-[24px]">
                  <div className="flex items-start gap-4">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#1a1c1c] bg-[#c4c7c7] px-2 py-1">01</span>
                    <div>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] font-bold mb-1">The Challenge</p>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Impending IBC filing due to systemic liquidity crunch and mismatched debt profile.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#1a1c1c] bg-[#c4c7c7] px-2 py-1">02</span>
                    <div>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] font-bold mb-1">The Intervention</p>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Execution of a 12-month operational rightsizing combined with a structured lender renegotiation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#1a1c1c] bg-[#c4c7c7] px-2 py-1">03</span>
                    <div>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] font-bold mb-1">The Outcome</p>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Secured resolution outside of court, preserving 2,000 industrial jobs and 85% debt recovery for lenders.</p>
                    </div>
                  </div>
                </div>

                <Link to={"/contact"}>
                  <button className="mt-[64px] border border-[#000000] px-8 py-4 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase hover:bg-[#000000] hover:text-[#ffffff] transition-all">Download Full Report</button>
                </Link>

              </div>
              <div className="col-span-12 lg:col-span-7 h-full min-h-[500px]">
                <img className="w-full h-full object-cover grayscale" alt="Case Study Image" src="/transactionadvisoryimg/corporate-restructuring1.png" />
              </div>
            </div>
          </div>
        </section>

        {/* Publication & Intelligence */}
        <section className="w-full px-8 py-[120px] bg-[#f9f9f9]">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex justify-between items-center mb-[64px]">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal uppercase tracking-tighter">Publication</h2>
              <Link className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] underline" to="/insights">View All Briefings</Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border border-[#c4c7c7] p-8 bg-[#ffffff]">
              <div className="flex flex-col justify-center">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] mb-[16px] block">Intelligence Briefing — Vol 14</span>
                <h3 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[24px] leading-tight italic font-medium">'Beyond IBC: When Operational Turnaround Beats Insolvency'</h3>
                <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] mb-[24px]">
                  An analysis of current insolvency trends and why structural business repair offers superior long-term yield compared to liquidation or legal-only resolutions.
                </p>
                <div className="flex gap-4">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold border border-[#747878] px-3 py-1">IBC Strategy</span>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold border border-[#747878] px-3 py-1">Asset Recovery</span>
                </div>
              </div>
              <div className="bg-[#000000] p-12 flex flex-col justify-between aspect-video">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#ffffff] opacity-60">Northrop Intelligence Agency</span>
                <div className="text-[#ffffff]">
                  <span className="material-symbols-outlined text-6xl">analytics</span>
                </div>
                <p className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal text-[#ffffff] leading-tight">Quantifying the 'Turnaround Premium' in Emerging Markets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory CTA */}
        <section className="w-full px-8 py-[120px] bg-[#000000]">
          <div className="max-w-[1280px] mx-auto text-center">
            <h2 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#ffffff] mb-[24px]">Engage the Turnaround Team.</h2>
            <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#ffffff] opacity-70 mb-[64px] max-w-2xl mx-auto">
              We provide discreet, high-stakes advisory for Promoters, Lenders, and Resolution Professionals facing critical distress scenarios.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-[32px]">

              <Link to={"/contact"}>
                <button className="bg-[#ffffff] text-[#000000] px-10 py-5 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase font-bold tracking-widest hover:opacity-90 transition-opacity">Submit Mandate Inquiry</button>

              </Link>
             
             <Link to={"/contact"}>
            
              <button className="border border-[#ffffff] text-[#ffffff] px-10 py-5 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase hover:bg-[#ffffff] hover:text-[#000000] transition-all">Direct Office Line</button>
            
             </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CorporateRestructuringTurnaroundAdvisory;