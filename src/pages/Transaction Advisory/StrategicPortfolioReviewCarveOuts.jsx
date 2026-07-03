import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const StrategicPortfolioReviewCarveOuts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Strategic Portfolio Review & Carve-Outs | Northrop Management</title>
        
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] text-[15px] leading-[1.6] font-normal antialiased pt-24">
        {/* Hero Section */}
        <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-8">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[16px] uppercase block">ADVISORY / 2F</span>
              <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[24px] leading-tight">Strategic Portfolio Review &amp; Carve-Outs</h1>
              <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-2xl">
                Identify, analyse, and execute strategic portfolio optimisation — from non-core divestiture to legal separation. We provide the intellectual rigour required for complex institutional transformations.
              </p>
            </div>
          </div>
          <div className="mt-[64px] w-full  overflow-hidden ">
            <img alt="Brutalist Architecture" className="w-full h-full "
             src="/transactionadvisoryimg/strategic-portfolio.jpeg" />
          </div>
        </section>

        {/* What We Do - Brutalist Grid */}
        <section className="px-8 py-[120px] bg-[#f3f3f4]">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-baseline justify-between mb-[64px]">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal">What We Do</h2>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#747878]">CORE COMPETENCIES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#747878]">
              {/* Service Card 1 */}
              <div className="p-8 border-r border-b border-[#747878] bg-[#f9f9f9] hover:bg-[#f9f9f9] transition-colors">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]" data-icon="analytics">analytics</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Portfolio diagnostic</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Business unit performance analysis and strategic fit assessment for multi-asset groups.</p>
              </div>
              {/* Service Card 2 */}
              <div className="p-8 border-r border-b border-[#747878] bg-[#f9f9f9] hover:bg-[#f9f9f9] transition-colors">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]" data-icon="account_tree">account_tree</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Divestiture advisory</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Non-core asset identification, preparation, and sale execution for maximum value recovery.</p>
              </div>
              {/* Service Card 3 */}
              <div className="p-8 border-r border-b border-[#747878] bg-[#f9f9f9] hover:bg-[#f9f9f9] transition-colors">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]" data-icon="content_cut">content_cut</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Carve-out execution</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Developing standalone financials, TSA design, and complex legal separation frameworks.</p>
              </div>
              {/* Service Card 4 */}
              <div className="p-8 border-r border-b border-[#747878] bg-[#f9f9f9] hover:bg-[#f9f9f9] transition-colors">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]" data-icon="swap_horiz">swap_horiz</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Reverse mergers</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Advisory for complex business transfers and reverse merger integration strategies.</p>
              </div>
              {/* Service Card 5 */}
              <div className="p-8 border-r border-b border-[#747878] bg-[#f9f9f9] hover:bg-[#f9f9f9] transition-colors">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]" data-icon="gavel">gavel</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">NCLT schemes</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Preparation for court-monitored demergers, amalgamations, and restructuring schemes.</p>
              </div>
              {/* Service Card 6 */}
              <div className="p-8 border-r border-b border-[#747878] bg-[#f9f9f9] hover:bg-[#f9f9f9] transition-colors">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]" data-icon="inventory">inventory</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Sell-side data room</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Vendor due diligence and comprehensive management of digital transaction data rooms.</p>
              </div>
              {/* Service Card 7 */}
              <div className="p-8 border-r border-b border-[#747878] bg-[#f9f9f9] hover:bg-[#f9f9f9] transition-colors">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]" data-icon="trending_up">trending_up</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Value enhancement</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Strategic 3-6 month pre-sale optimisation to improve multiples and buyer interest.</p>
              </div>
              {/* Service Card 8 */}
              <div className="p-8 border-r border-b border-[#747878] bg-[#f9f9f9] hover:bg-[#f9f9f9] transition-colors">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]" data-icon="group_work">group_work</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Minority advisory</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Specialised advisory for minority buyouts and shareholder squeeze-out protocols.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Block */}
        <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 border border-[#747878]">
            <div className="col-span-12 md:col-span-6 bg-[#e8e8e8] p-12 flex flex-col justify-between">
              <div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#5e5e5e] block mb-[16px]">CASE STUDY: INDUSTRIAL DISPOSAL</span>
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px]">Strategic Clarity at Scale</h2>
                <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#1a1c1c] mb-[24px]">Helping a Listed Conglomerate Carve Out and Sell Its Non-Core FMCG Division for Rs.680 Cr.</p>
                <div className="space-y-[16px] border-t border-[#747878] pt-[16px]">
                  <div>
                    <p className="font-['Inter'] text-[10px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#747878] mb-1">THE INTERVENTION</p>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#1a1c1c]">Full carve-out preparation including standalone audit-ready financials and a 4-month operational separation plan.</p>
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[10px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#747878] mb-1">THE OUTCOME</p>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#1a1c1c]">Successful sale to a global PE-backed strategic buyer at a 14.5x EBITDA multiple, exceeding board expectations by 20%.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 overflow-hidden grayscale-filter">
              <img alt="Structural Geometry" className="w-full h-full object-cover" src="/transactionadvisoryimg/strategic-portfolio1.png" />
            </div>
          </div>
        </section>

        {/* Target Audience & Publication */}
        <section className="px-8 py-[120px] bg-[#000000] text-[#ffffff]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-5">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#838484] uppercase mb-[16px] block">STAKEHOLDER ENGAGEMENT</span>
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px]">Target Audience</h2>
              <ul className="space-y-[16px] font-['Inter'] text-[18px] leading-[1.6] font-normal">
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#ffffff]"></span> Listed Conglomerates</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#ffffff]"></span> Private Equity Funds</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#ffffff]"></span> Large Family Groups</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#ffffff]"></span> Institutional Boards</li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-7 bg-[#1a1c1c] p-12 border border-[#838484]/30">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#838484] uppercase mb-[8px] block">LATEST PUBLICATION</span>
                  <h3 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[16px] italic">"The Art of Letting Go: How India's Leading Conglomerates Are Unlocking Value"</h3>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#838484] max-w-md">An in-depth analysis of the divestiture trends shaping the Indian corporate landscape in the current regulatory environment.</p>
                </div>
                <div className="mt-[24px]">
                  <a className="inline-flex items-center gap-2 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase hover:underline text-[#ffffff]" href="#">
                    READ THE WHITE PAPER 
                    <span className="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StrategicPortfolioReviewCarveOuts;