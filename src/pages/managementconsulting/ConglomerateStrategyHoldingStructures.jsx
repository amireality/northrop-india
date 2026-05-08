import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ConglomerateStrategyHoldingStructures = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="flex-grow">
        {/* Premium Hero Section */}
        <section className="relative bg-[#000000] overflow-hidden h-[80vh] flex items-center">
          <img
            alt="Strategic Abstract"
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale brightness-[0.4]"
            src="/managmentcounsaltingimg/conglomerate-strategy.png"
          />
          <div className="relative z-10 max-w-[1200px] mx-auto px-[32px] md:px-[64px] w-full text-[#ffffff]">
            <div className="flex items-center space-x-4 mb-8">
              <span className="h-[1px] w-12 bg-white/50"></span>
              <h5 className="font-sans text-[12px] tracking-[0.3em] text-white/80 uppercase font-bold">Service MC-08</h5>
            </div>
            <h1 className="font-serif text-[48px] md:text-[80px] mb-12 leading-[1.05] max-w-4xl font-bold tracking-tight">Conglomerate Strategy & Holding Structures.</h1>
            <p className="font-serif text-[24px] md:text-[32px] text-white/70 max-w-2xl leading-snug italic font-normal">
              "The market sees a holding company. It cannot see the businesses inside it."
            </p>
          </div>
          <div className="absolute bottom-16 right-16 z-10 flex flex-col items-end">
            <span className="text-white/40 font-sans text-[10px] tracking-widest uppercase mb-4 font-bold">Scroll to Explore</span>
            <div className="h-24 w-[1px] bg-white/20 relative">
              <div className="absolute top-0 left-0 w-full bg-white h-1/2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Context & Strategy */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[128px] grid grid-cols-12 gap-[24px] items-start">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-sans text-[12px] tracking-[0.4em] text-[#000000]/40 uppercase mb-8 font-bold">Strategic Mandate</h2>
            <p className="font-serif text-[24px] md:text-[28px] text-[#000000] leading-relaxed mb-8 font-semibold">
              Today, the strategy question is no longer what to own, but how to be valued for owning them. Complexity obscures value, creating structural discounts that penalize diverse holdings.
            </p>
            <p className="font-sans text-[16px] text-[#444748] leading-relaxed mb-12">
              We architect holding structures that align with modern capital allocation logic, maximizing transparency and investor visibility. Our approach deconstructs historical inertia to reveal the underlying intrinsic value of the enterprise.
            </p>
            <div className="flex space-x-12">
              <div>
                <div className="text-[32px] md:text-[40px] font-serif text-[#000000] mb-2 font-bold">15-30%</div>
                <div className="text-[10px] font-sans tracking-widest uppercase text-[#444748] font-bold">Avg. Holdco Discount</div>
              </div>
              <div>
                <div className="text-[32px] md:text-[40px] font-serif text-[#000000] mb-2 font-bold">40+</div>
                <div className="text-[10px] font-sans tracking-widest uppercase text-[#444748] font-bold">Global Restructures</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="aspect-[4/5] relative overflow-hidden group shadow-2xl border border-[#c4c7c7]">
              <img
                alt="Corporate Architecture"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-1000"
                src="/managmentcounsaltingimg/conglomerate-strategy1.png"
              />
              <div className="absolute inset-0 border border-white/10 m-6 pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Industry Challenges Grid */}
        <section className="bg-[#f5f3ee] py-[128px] border-y border-[#c4c7c7]/30">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] max-w-lg font-bold leading-tight">Structural Inefficiencies Across the Ecosystem</h2>
              <span className="text-[#000000]/30 font-sans text-[12px] tracking-widest uppercase mb-2 font-bold">Sector Focus</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Listed Holdcos", desc: "Trapped value due to persistent Sum-of-the-Parts (SOTP) discounts and opaque capital flows." },
                { title: "Family Groups", desc: "Entangled ownership structures complicating succession, liquidity, and governance across generations." },
                { title: "Promoter Groups", desc: "Capital allocation inefficiencies across unrelated business lines causing significant market confusion." },
                { title: "Cross-Border", desc: "Regulatory friction, tax inefficiencies, and complex repatriation challenges across jurisdictions." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#ffffff] p-12 border-t-4 border-[#000000] hover:shadow-2xl transition-all duration-500 shadow-sm">
                  <h3 className="font-serif text-[24px] mb-6 font-semibold">{item.title}</h3>
                  <p className="font-sans text-[14px] text-[#444748] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities / What We Deliver */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[128px]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-40">
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-8 font-bold">Strategic Deliverables</h2>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed mb-10">
                  We provide an end-to-end framework for institutional grade transformation, from diagnostic to implementation.
                </p>
                <div className="p-8 bg-[#000000] text-[#ffffff] shadow-2xl">
                  <h4 className="font-sans text-[10px] tracking-widest uppercase text-white/50 mb-6 font-bold">Target Audience</h4>
                  <ul className="space-y-4 font-sans text-[14px] font-semibold">
                    <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-[#ffffff] rounded-full"></span> <span>Listed Conglomerates</span></li>
                    <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-[#ffffff] rounded-full"></span> <span>Promoter Families</span></li>
                    <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-[#ffffff] rounded-full"></span> <span>Group CFOs & Boards</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-1 lg:pl-12">
              {[
                { num: "01", title: "Holding Structure Diagnostic", desc: "Comprehensive analysis of current architecture to identify trapped value and structural inefficiencies using proprietary benchmarking." },
                { num: "02", title: "Group Architecture Redesign", desc: "Strategic realignment of legal, tax, and operational structures to enhance agility, capital mobility, and terminal valuation." },
                { num: "03", title: "Listing & Demerger Pathway", desc: "Step-by-step roadmap for unlocking value through targeted spin-offs, demergers, or initial public offerings of subsidiaries." },
                { num: "04", title: "Capital Allocation Framework", desc: "Designing rigorous internal capital markets and performance governance frameworks for holding company entities." }
              ].map((item) => (
                <div key={item.num} className="group py-12 border-b border-[#000000]/10 hover:bg-[#ffffff] transition-colors px-8 -mx-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-[24px] md:text-[28px] group-hover:translate-x-2 transition-transform duration-300 font-semibold">{item.title}</h3>
                    <span className="text-[#000000]/20 text-[48px] font-serif font-bold">{item.num}</span>
                  </div>
                  <p className="font-sans text-[16px] text-[#444748] max-w-xl leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dedicated Case Study Section */}
        <section className="bg-gradient-to-br from-[#fbf9f4] via-[#f5f3ee] to-[#fbf9f4] py-[128px] border-y border-[#c4c7c7]/30">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px]">
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-span-12 lg:col-span-7">
                <div className="relative overflow-hidden aspect-[16/10] shadow-2xl border-4 border-[#000000]">
                  <img
                    alt="Case Study Hero"
                    className="w-full h-full object-cover grayscale brightness-75"
                    src="/managmentcounsaltingimg/conglomerate-strategy2.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <span className="font-sans text-[11px] tracking-[0.3em] text-white/70 uppercase mb-4 block font-bold">Major Industrial Group</span>
                    <h3 className="text-white text-[24px] md:text-[32px] font-serif leading-tight mb-4 font-bold">Unlocking $4.2B in Trapped Capital via Structural Separation.</h3>
                    <Link to="/insights" className="flex items-center text-white font-sans text-[12px] tracking-widest uppercase group font-bold">
                      Read Full Case Study 
                      <span className="material-symbols-outlined ml-3 text-lg group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:pl-12">
                <h2 className="font-sans text-[12px] tracking-[0.4em] text-[#000000]/40 uppercase mb-8 font-bold">Featured Case Study</h2>
                <h3 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-8 leading-tight font-bold">Dismantling the Conglomerate Discount</h3>
                <p className="font-sans text-[16px] text-[#444748] mb-10 leading-relaxed">
                  An analysis of how three major industrial groups restructured their holdings to eliminate SOTP discounts, focusing on tax-neutral demergers and specialized capital allocation frameworks.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <div className="text-[32px] md:text-[40px] font-serif text-[#000000] mb-1 font-bold">22%</div>
                    <div className="text-[10px] font-sans tracking-widest uppercase text-[#444748] font-bold">Value Uplift</div>
                  </div>
                  <div>
                    <div className="text-[32px] md:text-[40px] font-serif text-[#000000] mb-1 font-bold">18 Mo.</div>
                    <div className="text-[10px] font-sans tracking-widest uppercase text-[#444748] font-bold">Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Insights */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[128px]">
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] font-bold">Strategic Insights</h2>
            <Link to="/insights" className="text-[#000000] font-sans text-[12px] tracking-widest uppercase border-b-2 border-[#000000] pb-1 font-bold">View Library</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { category: "Capital Allocation", title: "The New Logic of Holding Company Value.", img: "/managmentcounsaltingimg/conglomerate-strategy3.png" },
              { category: "Corporate Finance", title: "Tax-Neutral Demergers: A Practitioner's Guide.", img: "/managmentcounsaltingimg/conglomerate-strategy4.png" },
              { category: "Governance", title: "Governance Models for Multi-Industry Groups.", img: "/managmentcounsaltingimg/conglomerate-strategy5.png" },
              { category: "Strategy", title: "Beyond the Conglomerate Discount.", img: "/managmentcounsaltingimg/conglomerate-strategy6.png" }
            ].map((article, idx) => (
              <Link key={idx} to="/insights" className="group block">
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#f0eee9] border border-[#c4c7c7]">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700"
                    src={article.img}
                  />
                </div>
                <span className="text-[10px] font-sans tracking-widest text-[#000000]/50 uppercase mb-3 block font-bold">{article.category}</span>
                <h4 className="font-serif text-[18px] md:text-[20px] leading-tight group-hover:text-[#000000] transition-colors font-bold">{article.title}</h4>
              </Link>
            ))}
          </div>
        </section>

        {/* Institutional Impact */}
        <section className="bg-[#000000] text-[#ffffff] py-[128px]">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px]">
            <h2 className="font-sans text-[12px] tracking-[0.4em] text-white/40 uppercase mb-20 text-center font-bold">Institutional Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-20">
              {[
                { label: "Metric 01", title: "SOTP Discount Closed" },
                { label: "Metric 02", title: "Listing Pathway Defined" },
                { label: "Metric 03", title: "Tax & FEMA Compliant" },
                { label: "Metric 04", title: "RPT Architecture Reset" },
                { label: "Metric 05", title: "Family Settlement Aligned" },
                { label: "Metric 06", title: "Investor Visibility Restored" }
              ].map((metric, idx) => (
                <div key={idx} className="border-l border-white/20 pl-8">
                  <div className="text-[10px] font-sans text-white/40 uppercase mb-4 tracking-widest font-bold">{metric.label}</div>
                  <h4 className="font-serif text-[20px] md:text-[24px] font-semibold">{metric.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-48 text-center">
          <h3 className="font-serif text-[32px] md:text-[64px] text-[#000000] max-w-4xl mx-auto mb-16 leading-tight font-bold">
            "The market does not pay for complexity. It charges for it."
          </h3>
          <Link
            to="/contact"
            className="bg-[#000000] text-[#ffffff] px-12 py-5 font-sans text-[12px] uppercase tracking-[0.3em] hover:bg-[#30312e] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 font-bold inline-block"
          >
            Initiate Consultation
          </Link>
        </section>
      </main>
    </div>
  );
};

export default ConglomerateStrategyHoldingStructures;