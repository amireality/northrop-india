import{ useEffect } from 'react';
import { Link } from 'react-router-dom';

const EBITDANormalizationValuationAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#ffdea5] selection:text-[#1b1c19]">
      <main className="max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden border-b-2 border-[#000000]">
          <div className="absolute inset-0 z-0">
            <img
              alt="Atmospheric boardroom"
              className="w-full h-full object-cover grayscale brightness-50"
              src="/financialadvisory/ebitda-valuation.png"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f4] via-[#fbf9f4]/80 to-transparent z-10"></div>
          <div className="container mx-auto px-[32px] md:px-[64px] relative z-20 grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-8">
              <div className="font-sans text-[12px] text-[#444748] mb-6 flex items-center gap-3 tracking-[0.3em] uppercase font-bold">
                <span className="w-12 h-[1px] bg-[#000000]"></span>
                FA-06: EBITDA NORMALIZATION
              </div>
              <h1 className="font-serif text-[48px] md:text-[64px] text-[#000000] mb-10 tracking-tighter max-w-4xl font-extrabold leading-[1.1]">
                You have an EBITDA number. <br />
                <span className="text-[#444748] italic font-medium">The market has another.</span>
              </h1>
              <p className="font-sans text-[18px] md:text-[20px] text-[#444748] max-w-2xl mb-12 border-l-4 border-[#000000] pl-8 leading-relaxed">
                Generic reporting creates value leakage. We architect the definitive narrative of your financial performance to ensure you capture every basis point of enterprise value.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <Link to="/contact" className="bg-[#000000] text-[#ffffff] px-10 py-5 font-sans tracking-widest text-[12px] font-bold uppercase shadow-2xl text-center">
                  VIEW ADVISORY SCOPE
                </Link>
                <Link to="/contact" className="border-2 border-[#000000] text-[#000000] px-10 py-5 font-sans tracking-widest text-[12px] font-bold uppercase hover:bg-[#eae8e3] transition-colors text-center">
                  THE METHODOLOGY
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-[32px] md:px-[24px]">
          {/* Industry Specific Valuation Failures */}
          <section className="py-[128px] border-b border-[#000000]/10">
            <div className="grid grid-cols-12 gap-[24px] mb-20">
              <div className="col-span-12 md:col-span-6">
                <h2 className="font-serif text-[28px] md:text-[32px] text-[#000000] tracking-tight mb-4 font-bold">The Cost of Ambiguity</h2>
                <p className="font-sans text-[16px] md:text-[18px] text-[#444748] leading-relaxed max-w-xl">
                  Value leakage occurs when specific industry nuances are misunderstood during diligence. Generic accounting fails to defend the "pro-forma" reality.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { id: "01 / FOUNDER-LED", title: "Expense Commingling", desc: "Untangling personal expenditures and market-rate adjustments to reveal core operational margins.", icon: "corporate_fare" },
                { id: "02 / REAL ESTATE", title: "Yield Distortions", desc: "Normalization of capitalization vs. expense treatments and non-recurring project costs.", icon: "domain" },
                { id: "03 / SAAS & TECH", title: "CAC Complexity", desc: "Rigorous treatment of customer acquisition cost capitalization and deferred revenue flows.", icon: "cloud_sync" },
                { id: "04 / CONGLOMERATES", title: "Intercompany", desc: "Pricing audit and shared service allocations across complex, misaligned reporting segments.", icon: "hub" }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#ffffff] p-8 border border-[#000000]/10 hover:border-[#000000] transition-all duration-300 flex flex-col justify-between min-h-[320px] shadow-sm hover:shadow-xl">
                  <div>
                    <h3 className="font-sans text-[10px] text-[#444748] mb-8 tracking-[0.2em] font-bold uppercase">{item.id}</h3>
                    <h4 className="font-serif text-[24px] text-[#000000] mb-4 font-bold">{item.title}</h4>
                    <p className="font-sans text-[14px] text-[#444748] leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="material-symbols-outlined text-[#000000]/20 text-[40px]">{item.icon}</span>
                </div>
              ))}
            </div>
          </section>

          {/* What Northrop Delivers */}
          <section className="py-[20px]">
            <div className="grid grid-cols-12 gap-[24px] mb-20 items-end">
              <div className="col-span-12 lg:col-span-8">
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] tracking-tight font-bold">The Advisory Framework</h2>
              </div>
              <div className="col-span-12 lg:col-span-4 text-left lg:text-right">
                <span className="font-sans text-[12px] tracking-widest text-[#444748] uppercase font-bold">Institutional Excellence</span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-[24px]">
              <div className="col-span-12 lg:col-span-7 flex flex-col gap-0">
                {[
                  { num: "01", title: "Quality of Earnings Diagnostic", desc: "Pre-emptive identification of diligence risks before counterparties uncover them. We define the baseline with absolute clarity." },
                  { num: "02", title: "Valuation Bridge & Defensibility", desc: "A rigorous, step-by-step reconciliation from reported earnings to adjusted EBITDA, fully supported by data architecture." },
                  { num: "03", title: "Valuation Methodology", desc: "Application of institutional-grade valuation frameworks tailored to your specific market position and growth trajectory." },
                  { num: "04", title: "Negotiation Architecture", desc: "Strategic positioning of the normalized number to control the narrative and anchor negotiations from a position of strength." }
                ].map((item, idx) => (
                  <div key={idx} className="border-y first:border-t-2 border-[#000000]/10 py-12 group hover:bg-[#f5f3ee] transition-colors px-6 -mx-6 border-b last:border-b-2">
                    <div className="flex gap-12">
                      <span className="font-sans text-[14px] text-[#000000]/30 font-bold">{item.num}</span>
                      <div>
                        <h3 className="font-serif text-[24px] md:text-[28px] text-[#000000] mb-4 font-bold">{item.title}</h3>
                        <p className="font-sans text-[16px] md:text-[18px] text-[#444748] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-12 lg:col-span-5 relative min-h-[500px]">
                <img
                  alt="Mechanical watch movement"
                  className="w-full h-full object-cover grayscale brightness-90 border-2 border-[#000000] shadow-2xl"
                  src="/financialadvisory/ebitda-valuation1.png"
                />
              </div>
            </div>
          </section>

          {/* Case Study Section */}
          <section className="py-[20px] border-y-2 border-[#000000] bg-[#ffffff] -mx-[32px] md:-mx-[64px] px-[32px] md:px-[64px]">
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                <div className="p-0 lg:p-16 lg:border-r-2 border-[#000000] h-full mt-12 lg:mt-0">
                  <h2 className="font-sans text-[12px] tracking-[0.4em] text-[#000000] mb-12 uppercase font-bold">Featured Engagement</h2>
                  <h3 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-8 leading-tight font-extrabold">The EBITDA Illusion: Restoring 15% Enterprise Value</h3>
                  <p className="font-sans text-[18px] text-[#444748] mb-12 leading-relaxed">
                    A mid-market manufacturing firm faced significant valuation headwinds due to misaligned normalization strategies. We re-architected their entire financial narrative, leading to an institutional-grade defense of $14M in add-backs.
                  </p>
                  <div className="grid grid-cols-2 gap-12 mb-12">
                    <div>
                      <div className="text-[32px] md:text-[40px] font-serif font-extrabold text-[#000000] mb-2">15%</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#444748] font-bold">Valuation Uplift</div>
                    </div>
                    <div>
                      <div className="text-[32px] md:text-[40px] font-serif font-extrabold text-[#000000] mb-2">$14M</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#444748] font-bold">Defended Add-backs</div>
                    </div>
                  </div>
                  <Link to="/insights" className="inline-flex items-center gap-4 font-sans text-[12px] tracking-widest text-[#000000] border-b-2 border-[#000000] pb-2 hover:text-[#444748] hover:border-[#444748] transition-all font-bold uppercase">
                    READ CASE STUDY
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 h-full min-h-[600px]">
                <img
                  alt="Architectural stairway"
                  className="w-full h-full object-cover grayscale brightness-90 shadow-2xl"
                  src="/financialadvisory/ebitda-valuation2.png"
                />
              </div>
            </div>
          </section>

          {/* Outcomes & Strategic Mandates */}
          <section className="py-[20px] grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-6 pr-0 lg:pr-12">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#000000] mb-16 tracking-tight font-bold">Institutional Outcomes</h2>
              <ul className="space-y-12">
                {[
                  { num: "01", label: "EBITDA Defended", desc: "Absolute certainty in the normalized number under rigorous counterparty audit." },
                  { num: "02", label: "Buyer Retrade Prevented", desc: "Eliminating valuation surprises and ensuring price integrity throughout diligence." },
                  { num: "03", label: "Lender Confidence", desc: "Enhanced debt-serviceability narratives for aggressive refinancing or acquisition financing." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-8">
                    <span className="font-serif italic text-[24px] md:text-[28px] text-[#000000]/40 pt-1 font-bold">{item.num}</span>
                    <div>
                      <h4 className="font-sans text-[12px] text-[#000000] mb-2 tracking-widest uppercase font-bold">{item.label}</h4>
                      <p className="font-sans text-[14px] text-[#444748] leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6 mt-16 lg:mt-0 bg-[#000000] text-[#ffffff] p-12 md:p-20 flex flex-col justify-between shadow-2xl">
              <div>
                <h2 className="font-serif text-[28px] md:text-[32px] text-[#ffffff] mb-16 tracking-tight font-bold">Strategic Mandates</h2>
                <div className="grid grid-cols-1 gap-12">
                  {[
                    { icon: "analytics", label: "Companies Pre-Sale" },
                    { icon: "groups", label: "PE Portfolio Strategy" },
                    { icon: "account_balance", label: "CFO Refinancing Preparation" }
                  ].map((mandate, idx) => (
                    <div key={idx} className="flex items-center gap-10 group">
                      <span className="material-symbols-outlined text-[#ffffff]/40 text-[40px] group-hover:text-[#ffffff] transition-colors">{mandate.icon}</span>
                      <h4 className="font-sans text-[13px] md:text-[14px] text-[#ffffff] tracking-widest uppercase font-bold">{mandate.label}</h4>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-20 pt-12 border-t border-[#ffffff]/20">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-[#ffffff]/60">Target: $50M - $500M Enterprise Value</p>
              </div>
            </div>
          </section>

          {/* Critical Insights */}
          <section className="py-[20px] border-t border-[#000000]/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#000000] font-bold tracking-tight">Critical Insights</h2>
              <Link to="/insights" className="font-sans text-[12px] tracking-widest border-b-2 border-[#000000] pb-1 hover:opacity-70 transition-opacity uppercase font-bold">All Publications</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { cat: "White Paper", title: "The 2026 EBITDA Multiplier Report: Sector Shifts", desc: "How market conditions are redefining what counts as 'sustainable' earnings.", img: "/financialadvisory/ebitda-valuation3.png" },
                { cat: "Strategic Brief", title: "Navigating QofE for Mid-Market Manufacturing", desc: "Key pitfalls in inventory valuation and labor cost capitalization during exit prep.", img: "/financialadvisory/ebitda-valuation4.png" },
                { cat: "Market Intelligence", title: "Post-COVID Normalization: The Final Wave", desc: "Defining non-recurring impacts in the current low-inflation environment.", img: "/financialadvisory/ebitda-valuation5.png" },
                { cat: "Executive Summary", title: "Defending the Premium: Tech Valuation Anchoring", desc: "Structuring deferred revenue narratives to protect SaaS valuation multiples.", img: "/financialadvisory/ebitda-valuation6.png" }
              ].map((article, idx) => (
                <Link key={idx} to="/insights" className="group block cursor-pointer">
                  <div className="aspect-[4/3] mb-6 overflow-hidden bg-[#f0eee9] border border-[#c4c7c7]">
                    <img
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                      src={article.img}
                    />
                  </div>
                  <div className="font-sans text-[10px] tracking-widest text-[#444748] mb-3 uppercase font-bold">{article.cat}</div>
                  <h4 className="font-serif text-[18px] md:text-[20px] leading-snug mb-4 group-hover:text-[#000000]/70 transition-colors font-bold">{article.title}</h4>
                  <p className="font-sans text-[14px] text-[#444748] line-clamp-2 leading-relaxed">{article.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Final Image / Large Scale CTA */}
        <section className="relative h-[600px] overflow-hidden border-t-2 border-[#000000] mb-5">
          <div className="absolute inset-0 z-0">
            <img
              alt="Corporate monolith"
              className="w-full h-full object-cover grayscale brightness-[0.4]"
              src="/financialadvisory/ebitda-valuation7.png"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <h2 className="font-serif text-[48px] md:text-[64px] text-[#ffffff] max-w-5xl mb-16 tracking-tighter font-extrabold leading-tight">
              EBITDA is a story. Make sure <span className="italic">you</span> are telling it. Not the buyer.
            </h2>
            <Link to="/contact" className="font-sans text-[14px] text-[#000000] bg-[#ffffff] px-16 py-7 rounded-none hover:bg-[#eae8e3] transition-all tracking-[0.3em] font-bold shadow-2xl">
              ENGAGE ADVISORY
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EBITDANormalizationValuationAdvisory;