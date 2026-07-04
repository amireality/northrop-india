import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const TaxControversyDisputeResolution = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tax Controversy & Dispute Resolution | Northrop Management</title>
        <meta name="description" content="Our tax controversy and dispute resolution practice provides strategic counsel and robust defense for clients facing tax audits, assessments, and litigation. We navigate complex regulatory frameworks to protect our clients' interests and achieve favorable outcomes." />
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] text-[15px] leading-[1.6] antialiased">
        <main>
          {/* Hero Section */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="grid grid-cols-12 gap-[32px] items-end">
              <div className="col-span-12 md:col-span-7">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] uppercase mb-[16px] block">Service Expertise — 3E</span>
                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[24px]">Tax Controversy &amp; Dispute Resolution.</h1>
                <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-2xl">
                  Navigating the complexities of multi-jurisdictional tax litigation requires more than legal knowledge; it demands institutional intelligence. We provide a robust defense framework for corporations facing high-stakes tax challenges in India and emerging markets.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 h-[400px] overflow-hidden">
                <img alt="Architectural Brutalist Building" className="w-full h-full object-cover" 
                src="/taxationimg/transfer-pricing.jpeg" />
              </div>
            </div>
            <div className="border-b border-[#747878] mt-[24px]"></div>
          </section>

          {/* What We Do: Grid of Services */}
          <section className="bg-[#f3f3f4] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="mb-[64px]">
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal border-l-4 border-[#000000] pl-[16px]">What We Do.</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                <div className="p-8 border border-[#c4c7c7] bg-[#f9f9f9] h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-[16px]">balance</span>
                    <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Appellate Representation</h3>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Strategic litigation before the ITAT, High Courts, and the Supreme Court of India.</p>
                  </div>
                </div>
                <div className="p-8 border border-[#c4c7c7] bg-[#f9f9f9] h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-[16px]">security</span>
                    <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Search &amp; Seizure Defense</h3>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Crisis management and forensic tax defense for investigative proceedings.</p>
                  </div>
                </div>
                <div className="p-8 border border-[#c4c7c7] bg-[#f9f9f9] h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-[16px]">account_balance</span>
                    <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Transfer Pricing Disputes</h3>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Defense of arm’s length pricing in complex intra-group global transactions.</p>
                  </div>
                </div>
                <div className="p-8 border border-[#c4c7c7] bg-[#f9f9f9] h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-[16px]">policy</span>
                    <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">MAP &amp; APA Advocacy</h3>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Engaging with competent authorities for Mutual Agreement Procedures and Advance Pricing Agreements.</p>
                  </div>
                </div>
                <div className="p-8 border border-[#c4c7c7] bg-[#f9f9f9] h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-[16px]">gavel</span>
                    <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Settlement Commission</h3>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Advising on the viability and execution of settlements to avoid prolonged litigation.</p>
                  </div>
                </div>
                <div className="p-8 border border-[#c4c7c7] bg-[#f9f9f9] h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-[16px]">visibility</span>
                    <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Faceless Assessment Strategy</h3>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Managing the digital transition of tax audits through data-driven advocacy.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For & Case Study */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="grid grid-cols-12 gap-[32px]">
              {/* Who It's For */}
              <div className="col-span-12 md:col-span-4 border-r border-[#c4c7c7] pr-8">
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px]">Who It's For.</h2>
                <ul className="space-y-[16px]">
                  <li className="flex items-start gap-[8px] border-b border-[#c4c7c7] pb-[8px]">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748]">01</span>
                    <span className="font-['Inter'] text-[15px] leading-[1.6] font-bold">Fortune 500 Multinationals</span>
                  </li>
                  <li className="flex items-start gap-[8px] border-b border-[#c4c7c7] pb-[8px]">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748]">02</span>
                    <span className="font-['Inter'] text-[15px] leading-[1.6] font-bold">Institutional Investors</span>
                  </li>
                  <li className="flex items-start gap-[8px] border-b border-[#c4c7c7] pb-[8px]">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748]">03</span>
                    <span className="font-['Inter'] text-[15px] leading-[1.6] font-bold">Ultra-High-Net-Worth Individuals</span>
                  </li>
                  <li className="flex items-start gap-[8px] border-b border-[#c4c7c7] pb-[8px]">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748]">04</span>
                    <span className="font-['Inter'] text-[15px] leading-[1.6] font-bold">Global Private Equity Funds</span>
                  </li>
                </ul>
              </div>
              {/* Case Study */}
              <div className="col-span-12 md:col-span-8 bg-[#eeeeee] p-12">
                <div className="flex justify-between items-start mb-[24px]">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] uppercase">Case Study 2026</span>
                  <span className="bg-[#000000] text-[#ffffff] px-3 py-1 font-['Inter'] text-[10px] leading-[1.2] tracking-[0.1em] font-semibold uppercase">Outcome: Successful</span>
                </div>
                <h2 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[16px]">Rs.220 Cr Demand Dropped.</h2>
                <div className="grid grid-cols-3 gap-[24px] mb-[24px] border-y border-[#c4c7c7] py-[16px]">
                  <div>
                    <p className="font-['Inter'] text-[10px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] uppercase">The Challenge</p>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal">Transfer pricing adjustment on intangible asset valuation.</p>
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[10px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] uppercase">The Intervention</p>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal">Comparative analysis using global benchmarking databases.</p>
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[10px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] uppercase">The Outcome</p>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal">Full deletion of demand by the Tribunal within 14 months.</p>
                  </div>
                </div>
                <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal mb-[24px]">
                  The firm secured a definitive victory for a European tech conglomerate against a substantial tax demand, establishing a precedent for brand-royalty payments in the digital economy.
                </p>
                <Link className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold border-b border-[#000000] pb-1 uppercase inline-flex items-center gap-2" to="/insights">Read Full Report <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="bg-[#1c1b1b] text-[#ffffff] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="flex justify-between items-end mb-[64px]">
                <h2 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#ffffff]">Latest Intelligence.</h2>
                <Link className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#858383] hover:text-[#ffffff] transition-colors uppercase" to="/insights">View All Publications</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px]">
                {/* Card 1 */}
                <div className="group cursor-pointer">
                  <div className="h-64 mb-[16px] overflow-hidden bg-[#000000]">
                    <img alt="Law Court Interior" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" src="/taxationimg/tax-controversy1.png" />
                  </div>
                  <span className="font-['Inter'] text-[10px] leading-[1.2] tracking-[0.1em] font-semibold text-[#858383] uppercase block mb-1">Litigation Guide</span>
                  <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px] text-[#ffffff]">Winning in Indian Tax Courts</h4>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#858383]">Strategic insights into procedural nuances and judicial temperaments in high-stakes tax appeals.</p>
                </div>
                {/* Card 2 */}
                <div className="group cursor-pointer">
                  <div className="h-64 mb-[16px] overflow-hidden bg-[#000000]">
                    <img alt="Digital Grid Data" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" src="/taxationimg/tax-controversy2.png" />
                  </div>
                  <span className="font-['Inter'] text-[10px] leading-[1.2] tracking-[0.1em] font-semibold text-[#858383] uppercase block mb-1">Policy Review</span>
                  <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px] text-[#ffffff]">Faceless Assessment: The First 1000 Days</h4>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#858383]">An empirical analysis of the efficiency and challenges of India's digital-first audit framework.</p>
                </div>
                {/* Card 3 */}
                <div className="group cursor-pointer">
                  <div className="h-64 mb-[16px] overflow-hidden bg-[#000000]">
                    <img alt="Geometric Lab" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" src="/taxationimg/tax-controversy3.png" />
                  </div>
                  <span className="font-['Inter'] text-[10px] leading-[1.2] tracking-[0.1em] font-semibold text-[#858383] uppercase block mb-1">Legal Precedents</span>
                  <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px] text-[#ffffff]">Supreme Court Tax Precedents</h4>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#858383]">Annual compendium of landmark judgments shaping tax liability and corporate compliance.</p>
                </div>
                {/* Card 4 */}
                <div className="group cursor-pointer">
                  <div className="h-64 mb-[16px] overflow-hidden bg-[#000000]">
                    <img alt="Spiral Concrete Stairs" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" src="/taxationimg/tax-controversy4.png" />
                  </div>
                  <span className="font-['Inter'] text-[10px] leading-[1.2] tracking-[0.1em] font-semibold text-[#858383] uppercase block mb-1">Strategy Note</span>
                  <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px] text-[#ffffff]">The Settlement Path: When to Compromise</h4>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#858383]">Risk-benefit analysis framework for opting for settlement vs. litigation in multi-year disputes.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TaxControversyDisputeResolution;