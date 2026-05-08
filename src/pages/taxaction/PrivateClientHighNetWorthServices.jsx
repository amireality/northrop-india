import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivateClientHighNetWorthServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Private Client & High Net-Worth Services | Northrop Management</title>
        
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] text-[15px] leading-[1.6] antialiased selection:bg-[#e5e2e1] selection:text-[#000000]">
        <main>
          {/* Hero Section */}
          <section className="max-w-[1280px] mx-auto px-8 pt-[120px]">
            <div className="grid grid-cols-12 gap-[32px] border-b border-[#c4c7c7] pb-[120px]">
              <div className="col-span-12 lg:col-span-8">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[16px] block">SERVICE SUB-PAGE 3F</span>
                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000000] max-w-3xl mb-[24px]">Private Client &amp; High Net-Worth Services</h1>
                <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-2xl">
                  At Northrop Management, we provide institutional-grade intelligence and tactical execution for the world's most complex private wealth structures. Our multidisciplinary approach ensures that generational legacies are preserved through rigorous risk management, cross-border tax optimization, and strategic governance.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 self-end">
                <div className="bg-[#eeeeee] p-[24px] border border-[#c4c7c7]">
                  <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold mb-2">PRACTICE LEAD</p>
                  <p className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-1">Marcus Northrop</p>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Global Managing Partner</p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Do: Bento Grid */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <h2 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold mb-[64px] border-b border-[#c4c7c7] pb-2">WHAT WE DO / SERVICES</h2>
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-[#c4c7c7] p-[24px] hover:bg-[#eeeeee] transition-colors duration-300">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]">account_balance</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Multi-Jurisdictional Tax Planning</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Optimizing asset distribution across tax regimes to minimize friction and ensure total compliance with global transparency standards.</p>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-[#c4c7c7] p-[24px] hover:bg-[#eeeeee] transition-colors duration-300">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]">diversity_3</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Family Office Governance</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Drafting family constitutions and operational frameworks that bridge generational divides and institutionalize wealth management.</p>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-[#c4c7c7] p-[24px] hover:bg-[#eeeeee] transition-colors duration-300">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]">security</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Asset Protection &amp; Trust Law</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Developing ironclad legal shields through discretionary trusts, foundations, and robust corporate holding structures.</p>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-[#c4c7c7] p-[24px] hover:bg-[#eeeeee] transition-colors duration-300">
                <span className="material-symbols-outlined mb-[16px] text-[#000000]">real_estate_agent</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Luxury Asset Management</h3>
                <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">Acquisition, financing, and risk-mitigation for high-value collectibles, real estate, and private aviation portfolios.</p>
              </div>
              <div className="col-span-12 lg:col-span-8 border border-[#c4c7c7] p-0 overflow-hidden group">
                <img alt="Architectural Minimalism" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700" src="/taxationimg/private-client.png" />
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="bg-[#f3f3f4] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-[32px] items-center">
                <div className="col-span-12 lg:col-span-5">
                  <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px]">Who We Partner With</h2>
                  <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] mb-[24px]">Our clients are global citizens whose wealth requires a defensive and proactive institutional posture.</p>
                </div>
                <div className="col-span-12 lg:col-span-7">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                    <li className="flex items-center gap-[8px] p-4 bg-[#f9f9f9] border border-[#c4c7c7]">
                      <span className="material-symbols-outlined text-[#000000]">check_circle</span>
                      <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold">Promoter &amp; Founder Groups</span>
                    </li>
                    <li className="flex items-center gap-[8px] p-4 bg-[#f9f9f9] border border-[#c4c7c7]">
                      <span className="material-symbols-outlined text-[#000000]">check_circle</span>
                      <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold">Single Family Offices</span>
                    </li>
                    <li className="flex items-center gap-[8px] p-4 bg-[#f9f9f9] border border-[#c4c7c7]">
                      <span className="material-symbols-outlined text-[#000000]">check_circle</span>
                      <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold">Institutional Inheritors</span>
                    </li>
                    <li className="flex items-center gap-[8px] p-4 bg-[#f9f9f9] border border-[#c4c7c7]">
                      <span className="material-symbols-outlined text-[#000000]">check_circle</span>
                      <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold">UHNW Cross-Border Professionals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study: The Report Style */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="border border-[#c4c7c7] bg-[#ffffff] overflow-hidden">
              <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 p-12 border-b lg:border-b-0 lg:border-r border-[#c4c7c7]">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[8px] block">CASE STUDY // 042</span>
                  <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px]">Restructuring a Rs.500 Cr Family Wealth Portfolio</h2>
                  <div className="space-y-[24px]">
                    <div>
                      <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold mb-2 text-[#000000]">THE CHALLENGE</h4>
                      <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">A multi-generational promoter family faced liquidity constraints and increasing tax leakage across their domestic and offshore holdings. Conflict over succession was stalling critical investment decisions.</p>
                    </div>
                    <div>
                      <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold mb-2 text-[#000000]">THE INTERVENTION</h4>
                      <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-normal">We implemented a central holding company structure in a neutral jurisdiction, drafted a binding family charter, and diversified 40% of the corpus into inflation-hedged institutional real estate.</p>
                    </div>
                    <div>
                      <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold mb-2 text-[#000000]">THE OUTCOME</h4>
                      <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6] font-bold">18% annual tax savings, formalized succession roadmap, and a 22% increase in net portfolio liquidity within 14 months.</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 bg-[#f9f9f9] p-12 flex flex-col justify-center">
                  <div className="space-y-[24px]">
                    <div className="flex justify-between items-end border-b border-[#c4c7c7] pb-2">
                      <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold">PRE-RESTRUCTURE LEAKAGE</span>
                      <span className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal text-[#ba1a1a]">32%</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-[#c4c7c7] pb-2">
                      <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold">POST-RESTRUCTURE LEAKAGE</span>
                      <span className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal text-[#000000]">14%</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-[#c4c7c7] pb-2">
                      <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold">GENERATIONAL ALIGNMENT</span>
                      <span className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal text-[#000000]">100%</span>
                    </div>
                    <div className="pt-[24px]">
                      <button className="w-full border border-[#000000] text-[#000000] py-4 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold hover:bg-[#000000] hover:text-[#ffffff] transition-colors">DOWNLOAD FULL ANALYSIS (PDF)</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <h2 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold mb-[64px] border-b border-[#c4c7c7] pb-2">INTELLECTUAL CAPITAL / PUBLICATIONS</h2>
            <div className="grid grid-cols-12 gap-[32px]">
              {/* Card 1 */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[16px] overflow-hidden">
                  <img alt="Handbook cover" className="w-full h-full object-cover grayscale" src="/taxationimg/private-client1.png" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">REPORT</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-1 mb-2 leading-tight">The HNW Tax Handbook 2026</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] mb-4">A definitive guide to the evolving landscape of global wealth taxes and reporting standards.</p>
                <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] underline underline-offset-4" href="#">READ MORE</a>
              </div>
              {/* Card 2 */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[16px] overflow-hidden">
                  <img alt="Succession guide" className="w-full h-full object-cover grayscale" src="/taxationimg/private-client2.png" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">ADVISORY</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-1 mb-2 leading-tight">Succession vs. Inheritance: A Global Guide</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] mb-4">Navigating the legal and emotional complexities of transfering control vs. assets.</p>
                <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] underline underline-offset-4" href="#">READ MORE</a>
              </div>
              {/* Card 3 */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[16px] overflow-hidden">
                  <img alt="Trust protection" className="w-full h-full object-cover grayscale" src="/taxationimg/private-client3.png" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">WHITE PAPER</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-1 mb-2 leading-tight">Family Trusts &amp; Asset Protection</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] mb-4">Advanced strategies for shielding generational wealth from unforeseen systemic risks.</p>
                <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] underline underline-offset-4" href="#">READ MORE</a>
              </div>
              {/* Card 4 */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[16px] overflow-hidden">
                  <img alt="Philanthropy" className="w-full h-full object-cover grayscale" src="/taxationimg/private-client4.png" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e]">PHILANTHROPY</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mt-1 mb-2 leading-tight">Tax-Efficient Philanthropy for Promoters</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] mb-4">How to structure high-impact giving while maintaining capital efficiency and tax benefits.</p>
                <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] underline underline-offset-4" href="#">READ MORE</a>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-[#1c1b1b] text-[#ffffff] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8 text-center">
              <h2 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[24px] text-white">Secure your legacy today.</h2>
              <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#858383] max-w-2xl mx-auto mb-[64px]">Engage with our private client team for a confidential assessment of your cross-border wealth architecture.</p>
              <div className="flex flex-col md:flex-row gap-[16px] justify-center">
                <button className="bg-white text-[#000000] px-12 py-5 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold hover:bg-[#e8e8e8] transition-colors">BOOK A CONSULTATION</button>
                <button className="border border-white text-white px-12 py-5 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold hover:bg-white hover:text-[#000000] transition-colors">VIEW ALL SERVICES</button>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default PrivateClientHighNetWorthServices;