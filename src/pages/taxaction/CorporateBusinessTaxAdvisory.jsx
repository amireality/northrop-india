import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const CorporateBusinessTaxAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Corporate & Business Tax Advisory | Northrop Management</title>
        
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] text-[15px] leading-[1.6] overflow-x-hidden pt-[90px]">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-8 pt-[120px] pb-[64px]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 mb-[24px] lg:mb-[64px]">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[16px] block uppercase">Service Code: 3A</span>
              <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[24px] max-w-3xl">Corporate &amp; Business Tax Advisory</h1>
              <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#444748] max-w-2xl">
                We navigate the complexities of domestic and international tax frameworks to preserve capital and ensure institutional compliance. Our advisory is built on the intersection of legislative intelligence and structural optimization.
              </p>
            </div>
            <div className="col-span-12 aspect-[21/9] bg-[#eeeeee] relative overflow-hidden border border-[#E0E0E0]">
              <img className="w-full h-full object-cover grayscale" alt="A brutalist architectural shot of a massive concrete structure" src="/corporate-business-tax-advisory.jpeg" />
            </div>
          </div>
        </section>

        {/* What We Do: Grid of Services */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-t border-[#1a1c1c]">
          <div className="mb-[64px] flex justify-between items-baseline">
            <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal">What We Do</h2>
            <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase">Operational Frameworks</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            <div className="p-[24px] border border-[#E0E0E0] flex flex-col h-full bg-white">
              <span className="material-symbols-outlined text-[#000000] mb-[24px]">account_balance</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Structural Tax Planning</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Defining optimal legal structures for new ventures and existing entities to minimize multi-jurisdictional leakage.</p>
            </div>
            <div className="p-[24px] border border-[#E0E0E0] flex flex-col h-full bg-white">
              <span className="material-symbols-outlined text-[#000000] mb-[24px]">query_stats</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Transfer Pricing Intelligence</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Arm's length documentation and global strategy to manage cross-border value chains within regulatory limits.</p>
            </div>
            <div className="p-[24px] border border-[#E0E0E0] flex flex-col h-full bg-white">
              <span className="material-symbols-outlined text-[#000000] mb-[24px]">policy</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Incentive Optimization</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Strategic application for R&amp;D tax credits, SEZ benefits, and sector-specific government subsidies.</p>
            </div>
          </div>
        </section>

        {/* Who It's For: Target Audience */}
        <section className="bg-[#f3f3f4]">
          <div className="max-w-[1280px] mx-auto px-8 py-[120px] grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px]">Target Portfolios</h2>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Our advisory is tailored for organizations facing significant regulatory scrutiny and capital complexity.</p>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="flex items-start gap-[16px] py-[24px] border-b border-[#747878]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold bg-[#000000] text-[#ffffff] px-2 py-1">01</span>
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold block mb-1 uppercase">Large Industrials</span>
                  <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6]">Manufacturing entities with heavy CapEx and intricate depreciation cycles.</p>
                </div>
              </div>
              <div className="flex items-start gap-[16px] py-[24px] border-b border-[#747878]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold bg-[#000000] text-[#ffffff] px-2 py-1">02</span>
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold block mb-1 uppercase">Institutional Investors</span>
                  <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6]">Private equity and venture funds managing complex exit taxation and dividend paths.</p>
                </div>
              </div>
              <div className="flex items-start gap-[16px] py-[24px] border-b border-[#747878]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold bg-[#000000] text-[#ffffff] px-2 py-1">03</span>
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold block mb-1 uppercase">Global Enterprises</span>
                  <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6]">MNCs navigating the evolving BEPS framework and digital services tax mandates.</p>
                </div>
              </div>
              <div className="flex items-start gap-[16px] py-[24px] border-b border-[#747878]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold bg-[#000000] text-[#ffffff] px-2 py-1">04</span>
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold block mb-1 uppercase">High-Growth Tech</span>
                  <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6]">Firms with intangible assets and complex cross-border licensing requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study: Distinct Module */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-t border-[#1a1c1c]">
          <div className="bg-[#ffffff] border border-[#E0E0E0] grid grid-cols-12 overflow-hidden">
            <div className="col-span-12 md:col-span-6 p-12 flex flex-col justify-center">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[16px] uppercase">Selected Case Study</span>
              <h2 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[24px]">Rs.42 Cr Tax Saving Through Business Restructuring</h2>
              <div className="space-y-[24px] mb-[24px]">
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] block border-b border-[#747878] mb-2 uppercase">The Challenge</span>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">A multi-state logistics conglomerate faced redundant tax exposure due to an outdated holding structure following recent regulatory shifts.</p>
                </div>
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] block border-b border-[#747878] mb-2 uppercase">The Intervention</span>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Northrop engineered a vertical merger of four entities, leveraging tax-neutral transfer mechanisms and MAT credit carry-forwards.</p>
                </div>
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] block border-b border-[#747878] mb-2 uppercase">The Outcome</span>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-bold text-[#1a1c1c]">Verified tax savings of ₹420,000,000 over 24 months with zero regulatory objections during subsequent audits.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 bg-[#eeeeee] relative min-h-[400px]">
              <img className="absolute inset-0 w-full h-full object-cover grayscale" alt="macro photograph of raw, industrial concrete textures" src="/taxationimg/corporate-business1.png" />
            </div>
          </div>
        </section>

        {/* Publications: 4 Cards */}
        <section className="bg-[#f9f9f9] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between items-baseline mb-[64px]">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal">Institutional Intelligence</h2>
              <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold border-b border-[#000000] uppercase" href="#">Archive</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px]">
              {/* Publication 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[16px] overflow-hidden border border-[#E0E0E0]">
                  <img className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" alt="A low-angle shot of a skyscraper's facade" src="/taxationimg/corporate-business2.png" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-2 block">White Paper / 2026</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight group-hover:underline">India's New Tax Landscape</h3>
              </div>
              {/* Publication 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[16px] overflow-hidden border border-[#E0E0E0]">
                  <img className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" alt="An abstract brutalist perspective of a concrete ceiling" src="/taxationimg/corporate-business3.png" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-2 block">Policy Brief</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight group-hover:underline">Navigating Section 35 Deductions</h3>
              </div>
              {/* Publication 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[16px] overflow-hidden border border-[#E0E0E0]">
                  <img className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" alt="A stark architectural photograph of a spiral concrete staircase" src="/taxationimg/corporate-business4.png" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-2 block">Technical Analysis</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight group-hover:underline">MAT/AMT Optimization for Industrials</h3>
              </div>
              {/* Publication 4 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[16px] overflow-hidden border border-[#E0E0E0]">
                  <img className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" alt="A view through a minimalist concrete hallway" src="/taxationimg/corporate-business5.png" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-2 block">Global Report</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight group-hover:underline">Tax-Efficient Cross-Border JVs</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CorporateBusinessTaxAdvisory;