import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ValuationFinancialBusinessModelling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Valuation & Financial Business Modelling | Northrop Management</title>
        
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] antialiased font-['Inter'] text-[15px] leading-[1.6] font-normal pt-[90px]">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-8 pt-[120px] pb-[64px] grid grid-cols-12 gap-[32px] items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[8px]">SERVICE SUB-PAGE / ADVISORY</p>
            <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[24px]">2B. Valuation &amp; Financial Business Modelling</h1>
            <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-2xl">
              Credible, defensible valuations and robust financial models that hold up under regulatory scrutiny, investor diligence, and boardroom debate.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-end">
            <div className="border-l border-[#c4c7c7] pl-[32px]">
              <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] mb-2">TARGET AUDIENCE</p>
              <ul className="space-y-1 font-['Inter'] text-[15px] leading-[1.6] font-normal">
                <li>Companies raising capital</li>
                <li>Completing transactions</li>
                <li>Resolving disputes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Image Break 1 */}
        <section className="max-w-[1280px] mx-auto px-8">
          <div className="w-full h-[600px] overflow-hidden grayscale contrast-125">
            <img className="w-full h-full object-cover" alt="Brutalist concrete architecture" 
            src="/transactionadvisoryimg/valuation-financial.jpeg" />
          </div>
        </section>

        {/* What We Do - Bento Grid Style */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="flex items-baseline justify-between border-b border-[#000000] mb-[64px] pb-4">
            <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal uppercase tracking-tighter">What We Do</h2>
            <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#1a1c1c]">INTERNAL AUDIT &amp; VALUATION PROTOCOLS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {/* Column 1 */}
            <div className="space-y-[64px]">
              <div className="group border-l border-[#747878] pl-[16px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">01</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-2 mb-[8px]">Core Methodology</h3>
                <p className="text-[#444748]">Business valuation using DCF, comparable company analysis, precedent transactions, and asset-based approaches.</p>
              </div>
              <div className="group border-l border-[#747878] pl-[16px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">02</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-2 mb-[8px]">Compliance &amp; Regulatory</h3>
                <p className="text-[#444748]">Valuation for M&amp;A, ESOP, restructuring, dispute resolution, and FEMA/RBI compliance mandates.</p>
              </div>
              <div className="group border-l border-[#747878] pl-[16px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">03</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-2 mb-[8px]">Capital Structure</h3>
                <p className="text-[#444748]">Three-statement financial model development encompassing P&amp;L, Balance Sheet, and Cash Flow dynamics.</p>
              </div>
            </div>
            {/* Column 2 */}
            <div className="space-y-[64px]">
              <div className="group border-l border-[#747878] pl-[16px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">04</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-2 mb-[8px]">Strategic Modelling</h3>
                <p className="text-[#444748]">LBO, merger, and complex scenario analysis models designed for private equity and corporate development.</p>
              </div>
              <div className="group border-l border-[#747878] pl-[16px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">05</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-2 mb-[8px]">Venture Ecosystem</h3>
                <p className="text-[#444748]">Startup and early-stage valuation utilizing venture capital and Berkus methods for nascent enterprises.</p>
              </div>
              <div className="group border-l border-[#747878] pl-[16px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">06</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-2 mb-[8px]">Governance Support</h3>
                <p className="text-[#444748]">Fairness opinion on related-party transactions and board-level decisions to mitigate fiduciary risk.</p>
              </div>
            </div>
            {/* Column 3 */}
            <div className="space-y-[64px]">
              <div className="bg-[#eeeeee] p-[32px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">SPECIALIZED</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-2 mb-[8px]">Asset Intelligence</h3>
                <ul className="space-y-4 text-[#444748]">
                  <li className="flex gap-2">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    <span>Purchase Price Allocation (PPA) for acquisition accounting.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    <span>Valuation of intangible assets, brands, IP, and customer relationships.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Block */}
        <section className="bg-[#f3f3f4] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-12 gap-[32px] items-center">
            <div className="col-span-12 md:col-span-5 mb-[24px] md:mb-0">
              <div className="w-full aspect-square overflow-hidden grayscale contrast-150">
                <img className="w-full h-full object-cover" alt="Minimalist concrete wall" 
                src="/transactionadvisoryimg/valuation-financial1.jpeg" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pl-[32px]">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] bg-[#c4c7c7]/30 px-2 py-1">CASE STUDY</span>
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mt-[16px] mb-[24px] leading-tight">Protecting a Promoter's Stake: Independent Valuation That Reversed a Disputed Rs.850 Cr Transaction</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] border-t border-[#c4c7c7] pt-[24px]">
                <div>
                  <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold mb-2">THE INTERVENTION</p>
                  <p className="text-[#444748]">Northrop was engaged to provide an independent, defensible valuation amid a hostile boardroom dispute over equity dilution.</p>
                </div>
                <div>
                  <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold mb-2">THE OUTCOME</p>
                  <p className="text-[#444748]">Our rigorous DCF and asset-based analysis provided the technical leverage needed to reverse the transaction, preserving the promoter's majority interest.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="border border-[#747878] p-12 flex flex-col md:flex-row justify-between items-center gap-[32px]">
            <div className="max-w-xl">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">PUBLICATION</span>
              <h3 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mt-2 mb-[16px] italic">'The Art and Science of Business Valuation in India'</h3>
              <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748]">An institutional deep-dive into the regulatory complexities and methodological nuances of the Indian market.</p>
            </div>
            <div>
              <button className="border border-[#000000] px-10 py-4 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-300">Download Research Paper</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ValuationFinancialBusinessModelling;