import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const CapitalDebtAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] font-inter font-normal text-[15px] leading-[1.6] selection:bg-[#000000] selection:text-[#ffffff] antialiased">
      <Helmet>
        <title>Capital & Debt Advisory | Northrop Management</title>
       
      </Helmet>

      <main >
        {/* Hero Section */}
        <section className="px-8 py-[20px] border-b border-[#c4c7c7]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-[32px] items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-[16px] block">02. CAPITAL & DEBT ADVISORY</span>
              <h1 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] mb-[24px] leading-none">Capital & Debt Advisory</h1>
              <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#444748] max-w-2xl">Optimise your capital stack with deep market knowledge, lender relationships, and structuring expertise.</p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex justify-end">
              <div className="text-right border-l border-[#747878] pl-[24px] py-[8px]">
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">Expertise focus</span>
                <p className="font-inter font-semibold text-[15px] leading-[1.6]">Mid-market Expansion<br />Growth Equity<br />Structured Credit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brutalist Imagery Row */}
        <section className="px-8">
          <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-[32px] ">
            <div className="col-span-7 aspect-[16/9] overflow-hidden grayscale contrast-125 border border-[#747878]">
              <img 
                alt="A high-contrast black and white photograph of a brutalist concrete building with sharp diagonal lines and heavy geometric shadows." 
                className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105" 
                src="/transactionadvisoryimg/capital-debt.jpeg" 
              />
            </div>
            <div className="col-span-5 aspect-[4/5] overflow-hidden grayscale contrast-150 border border-[#747878] mt-12">
              <img 
                alt="A dramatic low-angle shot of a massive concrete monolith against a clear, high-contrast sky. " 
                className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105" 
                src="/transactionadvisoryimg/capital-debt11.jpeg" 
              />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="px-8 py-[120px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] sticky top-32">What We Do</h2>
                <div className="h-px bg-[#000000] w-12 mt-[16px]"></div>
              </div>
              <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-12">
                <div className="border-t border-[#c4c7c7] pt-[16px]">
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">01. EQUITY</span>
                  <p className="font-inter font-normal text-[15px] leading-[1.6]">Equity fundraising advisory — PE, VC, strategic investors, family offices</p>
                </div>
                <div className="border-t border-[#c4c7c7] pt-[16px]">
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">02. DEBT</span>
                  <p className="font-inter font-normal text-[15px] leading-[1.6]">Debt fundraising — term loans, working capital, ECBs, NCDs, structured credit</p>
                </div>
                <div className="border-t border-[#c4c7c7] pt-[16px]">
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">03. OPTIMISATION</span>
                  <p className="font-inter font-normal text-[15px] leading-[1.6]">Capital structure review and optimisation</p>
                </div>
                <div className="border-t border-[#c4c7c7] pt-[16px]">
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">04. DOCUMENTATION</span>
                  <p className="font-inter font-normal text-[15px] leading-[1.6]">Investor-ready information memoranda, pitch decks, and financial model preparation</p>
                </div>
                <div className="border-t border-[#c4c7c7] pt-[16px]">
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">05. OUTREACH</span>
                  <p className="font-inter font-normal text-[15px] leading-[1.6]">Investor identification, outreach, and mandate management</p>
                </div>
                <div className="border-t border-[#c4c7c7] pt-[16px]">
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">06. NEGOTIATION</span>
                  <p className="font-inter font-normal text-[15px] leading-[1.6]">Term negotiation support — valuation, governance rights, covenants</p>
                </div>
                <div className="border-t border-[#c4c7c7] pt-[16px]">
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">07. RESTRUCTURING</span>
                  <p className="font-inter font-normal text-[15px] leading-[1.6]">Refinancing and debt restructuring advisory</p>
                </div>
                <div className="border-t border-[#c4c7c7] pt-[16px]">
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">08. SOLUTIONS</span>
                  <p className="font-inter font-normal text-[15px] leading-[1.6]">NBFC, bank, and AIF financing solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Block */}
        <section className="px-8 py-[120px] bg-[#eeeeee]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-[32px] items-center">
              <div className="col-span-12 lg:col-span-6 bg-[#000000] text-[#ffffff] p-12">
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#858383] block mb-[16px]">Representative Engagement</span>
                <h3 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-[24px]">Rs.400 Cr in 90 Days: Structuring a Blended Debt-Equity Solution for a Fast-Growing Healthcare Chain</h3>
                <p className="font-inter font-normal text-[15px] leading-[1.6] mb-[24px] opacity-80">Our intervention focused on rapid identification of a consortium of institutional lenders and strategic equity partners to fund a national expansion mandate under aggressive timelines.</p>
                <div className="flex gap-8">
                  <div>
                    <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] block">TIMELINE</span>
                    <span className="font-newsreader font-normal text-[24px] leading-[1.3]">90 Days</span>
                  </div>
                  <div>
                    <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] block">VALUE</span>
                    <span className="font-newsreader font-normal text-[24px] leading-[1.3]">400 Cr</span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="p-12 border border-[#c4c7c7] bg-[#f9f9f9]">
                  <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] mb-[16px]">THE OUTCOME</h4>
                  <p className="font-newsreader font-normal text-[28px] leading-[1.4] italic mb-[16px] leading-snug">"The structural integrity of the deal allowed for immediate liquidity without compromising long-term equity control for the promoters."</p>
                  <Link className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] border-b border-[#000000] hover:text-[#5e5e5e] transition-colors inline-block" to="/insights">Read the Report</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Section */}
        <section className="px-8 ">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end border-b border-[#c4c7c7] ">
              <div>
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">INTELLIGENCE</span>
                <h2 className="font-newsreader font-normal text-[32px] leading-[1.2]">Recent Publication</h2>
              </div>
              <Link to="/insights"className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] hover:text-[#5e5e5e] transition-colors mb-2" 
              >View All Publications</Link>
            </div>
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 lg:col-span-4 group cursor-pointer">
                <div className="aspect-[3/4] bg-[#1a1c1c] mb-[16px] overflow-hidden flex items-center justify-center p-12">
                  <div className="border border-[#ffffff]/20 w-full h-full flex flex-col justify-between p-6 bg-[#000000] text-[#ffffff]">
                    <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2]">NORTHROP INTEL</span>
                    <div className="font-newsreader font-normal text-[32px] leading-[1.2] leading-none">The Indian Capital Markets Playbook 2026</div>
                    <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] opacity-50">ANNUAL REVIEW</span>
                  </div>
                </div>
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748]">JANUARY 2026</span>
                <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mt-2 group-hover:underline">The Indian Capital Markets Playbook 2026</h3>
              </div>
              <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
                <div className="max-w-xl">
                  <p className="font-newsreader font-normal text-[28px] leading-[1.4] mb-[24px]">A definitive guide to navigating the evolving regulatory landscape and liquidity trends in the world's fastest-growing major economy.</p>
                  <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748] mb-[24px]">This publication dissects the shift from traditional banking to private credit and the rising prominence of family offices in late-stage growth rounds.</p>
                 

                 <Link to={"/insights"}>
               
                  <button className="border border-[#000000] px-8 py-4 font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] hover:bg-[#000000] hover:text-[#ffffff] transition-colors">Download Full Playbook</button>
                  </Link>
                
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-[120px] border-t border-[#c4c7c7]">
          <div className="max-w-[1280px] mx-auto text-center">
            <h2 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] mb-[24px]">Structured for Growth</h2>
            <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#444748] mb-[24px] max-w-2xl mx-auto">Engage our advisory team to conduct a complimentary capital structure review for your enterprise.</p>
            <div className="flex justify-center gap-[16px]">
<Link to={"/contact"}>
              <button className="bg-[#000000] text-[#ffffff] px-12 py-5 font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] tracking-widest hover:bg-[#5e5e5e] transition-colors">Schedule Mandate Call</button>
          
          </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CapitalDebtAdvisory;
