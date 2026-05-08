import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const IndirectTaxGstAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Indirect Tax & GST Advisory | Northrop Management</title>
       
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] text-[15px] leading-[1.6] selection:bg-[#000000] selection:text-[#ffffff] pt-[90px]">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-8 pt-24 pb-[120px] border-b border-[#c4c7c7]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-8">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase block mb-6">Service Line 3B</span>
              <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-10 max-w-3xl">Indirect Tax &amp; GST Advisory: Navigating the Global Frontier of Fiscal Complexity.</h1>
              <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-2xl">
                At Northrop Management, we provide institutional-grade intelligence to resolve the structural inefficiencies of Goods and Services Tax. Our advisory model combines technical precision with strategic foresight to safeguard liquidity and ensure absolute compliance in a shifting regulatory landscape.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex items-end justify-end">
              <img alt="Institutional Architecture" className="w-full h-80 object-cover grayscale brightness-90 contrast-125" src="/taxationimg/indirect-tax.png" />
            </div>
          </div>
        </section>

        {/* What We Do: Grid of GST services */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-b border-[#c4c7c7]">
          <div className="flex items-baseline justify-between mb-[64px] border-b border-[#000000] pb-4">
            <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal uppercase">What We Do</h2>
            <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">MODULAR SOLUTIONS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c4c7c7] border border-[#c4c7c7]">
            {/* Service Item 1 */}
            <div className="bg-[#f9f9f9] p-10 group hover:bg-[#f3f3f4] transition-colors duration-300">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">01</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Litigation Management</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] mb-8">Defending complex positions before judicial and quasi-judicial authorities with rigorous statutory interpretation.</p>
              <span className="material-symbols-outlined text-[#000000] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </div>
            {/* Service Item 2 */}
            <div className="bg-[#f9f9f9] p-10 group hover:bg-[#f3f3f4] transition-colors duration-300">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">02</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Refund Optimization</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] mb-8">Systematic identification and recovery of blocked Input Tax Credits (ITC) and unutilized tax surpluses.</p>
              <span className="material-symbols-outlined text-[#000000] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </div>
            {/* Service Item 3 */}
            <div className="bg-[#f9f9f9] p-10 group hover:bg-[#f3f3f4] transition-colors duration-300">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">03</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Cross-Border Strategy</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] mb-8">Architecting tax-efficient supply chains for global entities navigating Indian and International tax jurisdictions.</p>
              <span className="material-symbols-outlined text-[#000000] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </div>
            {/* Service Item 4 */}
            <div className="bg-[#f9f9f9] p-10 group hover:bg-[#f3f3f4] transition-colors duration-300">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">04</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">E-Invoicing &amp; Compliance</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] mb-8">Digital transformation of tax workflows to meet real-time reporting requirements and technological mandates.</p>
              <span className="material-symbols-outlined text-[#000000] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </div>
            {/* Service Item 5 */}
            <div className="bg-[#f9f9f9] p-10 group hover:bg-[#f3f3f4] transition-colors duration-300">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">05</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Transactional Structuring</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] mb-8">Pre-emptive advisory on mergers, acquisitions, and high-value contracts to minimize indirect tax leakage.</p>
              <span className="material-symbols-outlined text-[#000000] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </div>
            {/* Service Item 6 */}
            <div className="bg-[#f9f9f9] p-10 group hover:bg-[#f3f3f4] transition-colors duration-300">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-4 block">06</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4">Audit Readiness</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] mb-8">Stress-testing internal controls and documentation to ensure resilience during statutory departmental audits.</p>
              <span className="material-symbols-outlined text-[#000000] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </div>
          </div>
        </section>

        {/* Case Study: Rs. 18 Cr ITC Recovered */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="bg-[#f3f3f4] p-12 md:p-20 border border-[#c4c7c7]">
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 md:col-span-5">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] border border-[#000000] px-3 py-1 inline-block mb-8">CASE STUDY 402</span>
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-6">Rs. 18 Cr ITC Recovered for Global Logistics Major</h2>
                <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] mb-8">
                  We identified a systematic error in credit attribution across 14 state jurisdictions, successfully litigating for the restoration of historical credits previously deemed ineligible.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-[#747878] pb-2">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase">Intervention</span>
                    <span className="font-['Inter'] text-[15px] leading-[1.6]">Statutory Audit &amp; Judicial Appeal</span>
                  </div>
                  <div className="flex justify-between border-b border-[#747878] pb-2">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase">Duration</span>
                    <span className="font-['Inter'] text-[15px] leading-[1.6]">7 Months</span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-8 pl-0 md:pl-20 mt-12 md:mt-0">
                  <div className="border-l-4 border-[#000000] pl-6">
                    <div className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal">18Cr+</div>
                    <div className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">CAPITAL RECOVERED</div>
                  </div>
                  <div className="border-l-4 border-[#000000] pl-6">
                    <div className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal">0%</div>
                    <div className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">PENALTY INCURRED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-t border-[#c4c7c7] bg-white">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal">The Target Audience</h2>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] mt-4">We advise entities where the stakes of non-compliance represent a systemic risk to operations.</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <ul className="divide-y divide-[#c4c7c7]">
                <li className="py-6 flex items-center justify-between group cursor-default">
                  <span className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal group-hover:pl-4 transition-all duration-300">Fortune 500 Multinational Corporations</span>
                  <span className="material-symbols-outlined text-[#5e5e5e]">corporate_fare</span>
                </li>
                <li className="py-6 flex items-center justify-between group cursor-default">
                  <span className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal group-hover:pl-4 transition-all duration-300">Institutional Private Equity Funds</span>
                  <span className="material-symbols-outlined text-[#5e5e5e]">account_balance</span>
                </li>
                <li className="py-6 flex items-center justify-between group cursor-default">
                  <span className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal group-hover:pl-4 transition-all duration-300">Global E-commerce Aggregators</span>
                  <span className="material-symbols-outlined text-[#5e5e5e]">hub</span>
                </li>
                <li className="py-6 flex items-center justify-between group cursor-default">
                  <span className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal group-hover:pl-4 transition-all duration-300">Large-Scale Manufacturing Groups</span>
                  <span className="material-symbols-outlined text-[#5e5e5e]">factory</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] bg-[#f3f3f4]">
          <div className="mb-[64px] flex items-center gap-4">
            <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal">Intelligence &amp; Publications</h2>
            <div className="flex-grow h-px bg-[#747878]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Pub Card 1 */}
            <div className="flex flex-col">
              <div className="aspect-[3/4] bg-[#000000] mb-6 relative overflow-hidden">
                <img alt="GST Report" className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-500" src="/taxationimg/indirect-tax1.png" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="bg-[#ffffff] text-[#000000] px-2 py-1 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold w-fit">QUARTERLY REPORT</span>
                </div>
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2 uppercase">Policy Analysis</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-3 leading-tight">GST at Eight</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">A retrospective analysis of the landmark tax reform's impact on liquidity.</p>
            </div>
            {/* Pub Card 2 */}

            <div className="flex flex-col">
              <div className="aspect-[3/4] bg-[#000000] mb-6 relative overflow-hidden">
                <img alt="ITC Guide" className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-500" src="/taxationimg/indirect-tax2.png" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="bg-[#ffffff] text-[#000000] px-2 py-1 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold w-fit">WHITE PAPER</span>
                </div>
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2 uppercase">Technical Guide</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-3 leading-tight">ITC Reconciliation Masterclass</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Advanced strategies for automating credit matching and discrepancy resolution.</p>
            </div>


            {/* Pub Card 3 */}
            <div className="flex flex-col">
              <div className="aspect-[3/4] bg-[#000000] mb-6 relative overflow-hidden">
                <img alt="E-Invoicing Report" className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-500" src="/taxationimg/indirect-tax3.png" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="bg-[#ffffff] text-[#000000] px-2 py-1 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold w-fit">TECH BRIEF</span>
                </div>
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2 uppercase">Global Standards</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-3 leading-tight">E-Invoicing for Global Entities</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Integrating ERP systems with real-time tax reporting mandates.</p>
            </div>
            {/* Pub Card 4 */}
            <div className="flex flex-col">
              <div className="aspect-[3/4] bg-[#000000] mb-6 relative overflow-hidden">
                <img alt="Litigation Outlook" className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-500" src="/taxationimg/indirect-tax4.png" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="bg-[#ffffff] text-[#000000] px-2 py-1 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold w-fit">OUTLOOK 2026</span>
                </div>
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2 uppercase">Strategic Review</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-3 leading-tight">GST Litigation Strategy 2026</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Predicting judicial trends and preparing for high-stakes departmental notices.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IndirectTaxGstAdvisory;