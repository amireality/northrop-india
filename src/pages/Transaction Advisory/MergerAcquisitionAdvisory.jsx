import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const MergerAcquisitionAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Merger & Acquisition Advisory | Northrop Management</title>
       
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] text-[15px] leading-[1.6] font-normal antialiased overflow-x-hidden pt-[90px]">
        {/* Hero Section */}
        <header className="max-w-[1280px] mx-auto px-8 pt-24 pb-[120px] grid grid-cols-12 gap-[32px] border-b border-[#c4c7c7]">
          <div className="col-span-12 md:col-span-8 flex flex-col justify-end">
            <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] mb-[16px]">SERVICE OVERVIEW 2A</span>
            <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000000] mb-[24px] max-w-3xl">
              Merger &amp; Acquisition Advisory
            </h1>
            <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-2xl">
              End-to-end M&amp;A advisory for acquirers, targets, and investors navigating complex deal environments in India's dynamic markets. We bring strategic clarity, financial rigour, and negotiation expertise to every mandate.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 mt-[24px] md:mt-0 flex flex-col justify-end">
            <div className="p-8 bg-[#e2e2e2] border border-[#c4c7c7]">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] block mb-4">TARGET AUDIENCE</span>
              <ul className="space-y-2 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000]">
                <li>PROMOTERS</li>
                <li>PE/VC FUNDS</li>
                <li>LISTED COMPANIES</li>
                <li>FAMILY BUSINESSES</li>
                <li>MULTINATIONAL CORPORATIONS</li>
              </ul>
            </div>
          </div>
        </header>

        {/* Image Break 1 */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="h-[600px] w-full overflow-hidden bg-[#eeeeee] relative">
            <img alt="Brutalist Architecture" className="w-full h-full object-cover grayscale contrast-125 brightness-90" src="/transactionadvisoryimg/merger-acquisition.png" />
            <div className="absolute bottom-0 right-0 bg-[#000000] text-[#ffffff] p-8 md:w-1/3">
              <p className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal italic">"Complexity is not a barrier; it is the landscape in which we find the greatest arbitrage for our clients."</p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-t border-[#c4c7c7]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal text-[#000000] sticky top-32">What We Do</h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-16">
                {/* Service Item 1 */}
                <div className="border-t border-[#000000] pt-6">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">01 / STRATEGY</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Buy-side and sell-side M&amp;A strategy and target/buyer identification</h3>
                  <p className="text-[#444748]">Deep market mapping and rigorous assessment of strategic fit to ensure long-term value alignment.</p>
                </div>
                {/* Service Item 2 */}
                <div className="border-t border-[#000000] pt-6">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">02 / EXECUTION</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Deal structuring, negotiation support, and term sheet advisory</h3>
                  <p className="text-[#444748]">Optimizing transaction economics through intelligent structuring and sophisticated negotiation tactics.</p>
                </div>
                {/* Service Item 3 */}
                <div className="border-t border-[#000000] pt-6">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">03 / COMPLIANCE</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Regulatory approval navigation — CCI, FEMA, RBI, SEBI</h3>
                  <p className="text-[#444748]">Seamless management of multi-agency regulatory landscapes to ensure deal certainty and timing.</p>
                </div>
                {/* Service Item 4 */}
                <div className="border-t border-[#000000] pt-6">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">04 / GLOBAL</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Cross-border deal advisory including inbound and outbound acquisitions</h3>
                  <p className="text-[#444748]">Bridging jurisdictions with specialized expertise in cross-border capital flows and legal frameworks.</p>
                </div>
                {/* Service Item 5 */}
                <div className="border-t border-[#000000] pt-6">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">05 / INDEPENDENCE</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Fairness opinion and independent financial advice to boards</h3>
                  <p className="text-[#444748]">Objective, high-integrity valuation and fairness assessments for fiduciary decision-making.</p>
                </div>
                {/* Service Item 6 */}
                <div className="border-t border-[#000000] pt-6">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">06 / MATERIALS</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Confidential Information Memorandum (CIM) and Investor Memoranda</h3>
                  <p className="text-[#444748]">Crafting institutional-grade narratives and financial models that command attention from premium investors.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Block */}
        <section className="bg-[#f3f3f4] py-[120px] border-y border-[#c4c7c7]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-12 gap-[32px] items-center">
              <div className="col-span-12 md:col-span-6">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] mb-[16px] block">LATEST CASE STUDY</span>
                <h2 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000000] mb-[24px]">Navigating a Rs.1,200 Cr Cross-Border Acquisition</h2>
                <div className="grid grid-cols-2 gap-[24px] border-y border-[#c4c7c7] py-8 my-8">
                  <div>
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] block">TIMELINE</span>
                    <span className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#000000] font-bold">6 Months</span>
                  </div>
                  <div>
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] block">VALUE</span>
                    <span className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#000000] font-bold">Rs. 1,200 Crores</span>
                  </div>
                </div>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] mb-[24px]">From Term Sheet to CCI Clearance. Our intervention involved complex cross-border structuring and intense regulatory coordination to meet a compressed transaction window.</p>
                <a className="inline-flex items-center gap-2 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] border-b border-[#000000] pb-1 hover:text-[#5e5e5e] transition-colors" href="#">
                  READ FULL REPORT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="col-span-12 md:col-span-6 mt-12 md:mt-0">
                <div className="bg-[#000000] p-12 text-[#ffffff]">
                  <h3 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold opacity-60 mb-8">THE INTERVENTION</h3>
                  <p className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-8">"Northrop's ability to navigate the interplay between FDI policy and antitrust regulations was the critical factor in closing this deal on schedule."</p>
                  <div className="border-t border-white/20 pt-4 flex justify-between items-center">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-white">CHAIRMAN, LEADING INFRASTRUCTURE FUND</span>
                    <span className="material-symbols-outlined">corporate_fare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Break 2 & Publication */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] grid grid-cols-12 gap-[32px]">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <div className="h-full bg-[#eeeeee] relative">
              <img alt="Institutional Architecture" className="w-full h-full object-cover grayscale contrast-125 brightness-75" src="/transactionadvisoryimg/merger-acquisition1.png" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 md:order-2 flex flex-col justify-center">
            <div className="border-l-4 border-[#000000] pl-12 py-8">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] mb-4 block">QUARTERLY INTELLIGENCE REPORT</span>
              <h2 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000000] mb-6">M&amp;A in India 2026: Deal Structuring, Regulatory Hurdles, and Value Creation Strategies</h2>
              <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] mb-8 max-w-xl">
                An exhaustive analysis of the evolving deal-making environment, examining the impact of new SEBI amendments and the shift towards platform-driven acquisitions.
              </p>
              <button className="bg-[#000000] text-[#ffffff] px-10 py-4 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold hover:bg-[#444748] transition-colors flex items-center gap-4">
                DOWNLOAD PUBLICATION
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#000000] text-[#ffffff] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px] text-white">Discuss your strategic mandate with our advisory team.</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-[24px]">
              <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold border border-[#ffffff] px-8 py-4 hover:bg-[#ffffff] hover:text-[#000000] transition-all" href="mailto:london@northrop.com">LONDON OFFICE</a>
              <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold border border-[#ffffff] px-8 py-4 hover:bg-[#ffffff] hover:text-[#000000] transition-all" href="mailto:mumbai@northrop.com">MUMBAI OFFICE</a>
              <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold border border-[#ffffff] px-8 py-4 hover:bg-[#ffffff] hover:text-[#000000] transition-all" href="mailto:newyork@northrop.com">NEW YORK OFFICE</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MergerAcquisitionAdvisory;