import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const TransferPricingDocumentation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Transfer Pricing & Documentation | Northrop Management</title>
        <meta name="description" content="Developing robust documentation and pricing strategies that align with OECD guidelines and local regulatory requirements." />
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] text-[15px] leading-[1.6] antialiased">
        <main>
          {/* Hero Section */}
          <header className="max-w-[1280px] mx-auto px-8 pt-[120px] pb-[64px] grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-7">
              <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-[16px]">Specialized Advisory</p>
              <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[24px]">3D. Transfer Pricing &amp; Documentation</h1>
              <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-2xl">
                Navigating the complex architecture of international tax requires a synthesis of economic rigor and forensic precision. Our Transfer Pricing practice provides the structural integrity necessary for global value chains to withstand scrutiny.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 flex items-end">
              <div className="w-full aspect-square bg-[#eeeeee] border border-[#c4c7c7] overflow-hidden">
                <img alt="Architectural Building" className="w-full h-full object-cover grayscale" 
                src="/taxationimg/transfer-pricing1.jpeg" />
              </div>
            </div>
          </header>

          {/* Rule Divider */}
          <div className="max-w-[1280px] mx-auto px-8">
            <hr className="border-[#c4c7c7]" />
          </div>

          {/* What We Do: Bento Grid */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="mb-[64px]">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[8px]">The Intervention Portfolio</h2>
              <div className="w-24 h-1 bg-[#000000]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-[#c4c7c7]">
              <div className="p-[24px] border-b border-r border-[#c4c7c7] bg-white flex flex-col justify-between aspect-square md:aspect-auto md:h-80">
                <span className="material-symbols-outlined text-4xl mb-[24px]">account_balance</span>
                <div>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Global Strategy</h3>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Designing tax-efficient intellectual property and operational structures across jurisdictions.</p>
                </div>
              </div>
              <div className="p-[24px] border-b border-r border-[#c4c7c7] bg-[#f3f3f4] flex flex-col justify-between aspect-square md:aspect-auto md:h-80">
                <span className="material-symbols-outlined text-4xl mb-[24px]">description</span>
                <div>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Master File &amp; Local File</h3>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Three-tiered documentation compliance adhering to OECD BEPS Action 13 standards.</p>
                </div>
              </div>
              <div className="p-[24px] border-b border-r border-[#c4c7c7] bg-white flex flex-col justify-between aspect-square md:aspect-auto md:h-80">
                <span className="material-symbols-outlined text-4xl mb-[24px]">monitoring</span>
                <div>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Benchmarking</h3>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Sophisticated economic analysis using global databases for transactional net margin methods.</p>
                </div>
              </div>
              <div className="p-[24px] border-b border-r border-[#c4c7c7] bg-[#f3f3f4] flex flex-col justify-between aspect-square md:aspect-auto md:h-80">
                <span className="material-symbols-outlined text-4xl mb-[24px]">gavel</span>
                <div>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Dispute Resolution</h3>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Defending complex pricing models during audits and high-stakes litigation processes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study: Split Screen */}
          <section className="bg-[#eeeeee] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-12 gap-[32px] items-center">
              <div className="col-span-12 md:col-span-6">
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-[16px]">The Case Report 04-24</p>
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px] leading-tight">Defending a Rs.380 Cr TP Adjustment</h2>
                <div className="space-y-[24px] border-l border-[#000000] pl-[24px]">
                  <div>
                    <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#1a1c1c] mb-1">THE CHALLENGE</p>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">A Fortune 500 manufacturing conglomerate faced a significant tax demand based on rejected intangible asset valuations.</p>
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#1a1c1c] mb-1">THE INTERVENTION</p>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Developed a DEMPE (Development, Enhancement, Maintenance, Protection, Exploitation) framework to prove economic substance.</p>
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#1a1c1c] mb-1">THE OUTCOME</p>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Full retraction of the adjustment at the ITAT level, setting a precedent for industry-specific asset valuation.</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="relative bg-[#000000] p-12 aspect-[4/3] flex items-center justify-center">
                  <div className="text-white text-center z-10 relative">
                    <div className="text-[80px] font-['Newsreader'] leading-none mb-4">100%</div>
                    <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase opacity-80">Adjustment Retraction</p>
                  </div>
                  {/* Abstract Grid Background for Data Visual */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For & Target Audience */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px] grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[16px] leading-tight">Institutional Architecture</h2>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Our mandates are designed for entities operating at the threshold of global scale.</p>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="border-b border-[#c4c7c7] pb-[24px]">
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] mb-2">01</p>
                <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2">Multinational Enterprises</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#5e5e5e]">Coordination of cross-border intra-group pricing strategies and local compliance.</p>
              </div>
              <div className="border-b border-[#c4c7c7] pb-[24px]">
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] mb-2">02</p>
                <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2">Private Equity Funds</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#5e5e5e]">Portfolio company benchmarking and exit strategy tax optimization.</p>
              </div>
              <div className="border-b border-[#c4c7c7] pb-[24px]">
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] mb-2">03</p>
                <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2">High-Growth Tech</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#5e5e5e]">Structuring IP migration and R&amp;D cost-sharing arrangements for global scale.</p>
              </div>
              <div className="border-b border-[#c4c7c7] pb-[24px]">
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] mb-2">04</p>
                <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2">Sovereign Wealth</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#5e5e5e]">Compliance for complex infrastructure and global energy investments.</p>
              </div>
            </div>
          </section>

          {/* Publications: Institutional Insights */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-t border-[#c4c7c7]">
            <div className="flex justify-between items-end mb-[64px]">
              <div>
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal">Institutional Intelligence</h2>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Quarterly briefs on the evolving landscape of global transfer pricing.</p>
              </div>
              <Link to={"/insights"} className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] border-b border-[#000000] uppercase tracking-wider pb-1" >View Library</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px]">
              {/* Pub 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[24px] overflow-hidden relative">
                  <img alt="Publication 1" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110" src="/taxationimg/transfer-pricing1.png" />
                </div>
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-2">Report 2026</p>
                <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px] leading-tight">Transfer Pricing in India 2026</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-2">A comprehensive forecast of regulatory shifts and the integration of AI in auditing.</p>
              </div>
              {/* Pub 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[24px] overflow-hidden relative">
                  <img alt="Publication 2" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110" src="/taxationimg/transfer-pricing2.png" />
                </div>
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-2">Technical Guide</p>
                <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px] leading-tight">Benchmarking Intangibles</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-2">Quantifying brand value and intellectual property in non-routine transactions.</p>
              </div>
              {/* Pub 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[24px] overflow-hidden relative">
                  <img alt="Publication 3" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110" src="/taxationimg/transfer-pricing3.png" />
                </div>
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-2">Playbook</p>
                <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px] leading-tight">APA Negotiation Playbook</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-2">Tactical strategies for unilateral and bilateral Advance Pricing Agreements.</p>
              </div>
              {/* Pub 4 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#eeeeee] mb-[24px] overflow-hidden relative">
                  <img alt="Publication 4" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110" src="/taxationimg/transfer-pricing4.png" />
                </div>
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-2">Analysis</p>
                <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px] leading-tight">Financial Transactions &amp; TP</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-2">Navigating the complexities of intra-group loans and cash-pooling arrangements.</p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default TransferPricingDocumentation;