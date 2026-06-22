import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CapitalStructureDebtArchitecture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full h-[85vh] relative overflow-hidden border-b-4 border-[#000000]">
          <div className="absolute inset-0 z-0">
            <img
              alt="Atmospheric low-angle shot of a glass and steel skyscraper reaching into a dramatic sky."
              className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              src="/financialadvisory/capital-structure0.jpeg"
            />
            
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-[32px] md:px-[64px] h-full flex flex-col justify-center">
            <div className="max-w-4xl">
              <span className="font-sans text-[12px] text-[#ffff] uppercase tracking-widest mb-6 block font-bold">FA-01: Service Profile</span>
              <h1 className="font-serif text-[48px] md:text-[88px] leading-[1.05] text-[#ffff] mb-12 tracking-tighter font-extrabold">
                Capital Structure <br/>& Debt Architecture.
              </h1>
              <div className="flex gap-8 items-start">
                <div className="w-2 h-24 bg-[#ffff] shrink-0"></div>
                <h2 className="font-serif text-[24px] md:text-[28px] text-[#ffff] max-w-2xl font-medium italic">
                  Your debt was raised one tranche at a time. It now constrains every strategic decision you take.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Overview */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="h-1 w-10 bg-[#000000] mb-8"></div>
              <h3 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-8 font-bold leading-tight">The Operating Envelope</h3>
              <p className="font-sans text-[18px] text-[#444748] mb-8 leading-relaxed">
                Capital structure is not merely a financial byproduct; it is the operating envelope of the business. An unoptimized debt architecture restricts agility, inflates cost, and dictates strategic limitations rather than enabling growth.
              </p>
              <button className="flex items-center gap-4 group font-sans text-[12px] tracking-widest uppercase font-bold text-[#000000]">
                <span>Our Strategic Methodology</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
              </button>
            </div>
            <div className="md:col-span-6 md:col-start-7 aspect-[4/5] bg-[#eae8e3] relative shadow-2xl border border-[#c4c7c7]">
              <img
                alt="Minimalist architectural void showing deep shadows and clean edges."
                className="w-full h-full object-cover grayscale mix-blend-multiply"
                src="/financialadvisory/capital-structure1.png"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#000000] p-12 hidden md:block shadow-xl">
                <p className="text-[#ffffff] font-serif italic text-[20px] max-w-[200px] leading-snug">"Structure follows strategy. Always."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Failures */}
        <section className="w-full bg-[#f5f3ee] py-[20px] border-y border-[#c4c7c7]/30">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px]">
            <div className="mb-20 md:w-6/12">
              <h3 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-6 font-bold leading-tight">Sector-Specific Vulnerabilities</h3>
              <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                Systemic misalignments across key sectors requiring immediate structural intervention to preserve enterprise value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {[
                { icon: "domain", title: "Real Estate", desc: "Mismatched duration risk and inflexible covenant structures restricting asset rotation and development pipelines." },
                { icon: "factory", title: "Manufacturing", desc: "Over-reliance on short-term facilities funding long-term capacity expansion, creating liquidity cliffs." },
                { icon: "account_balance", title: "NBFCs", desc: "Acute Asset-Liability Mismatch (ALM) leading to systemic liquidity shocks during market volatility.", span: "md:col-span-4" },
                { icon: "show_chart", title: "Mid-Cap Listed Entities", desc: "Sub-optimal rating narratives and fragmented lender pools increasing aggregate cost of capital and diluting management focus.", span: "md:col-span-8" }
              ].map((card, idx) => (
                <div key={idx} className={`${card.span || "md:col-span-6"} bg-[#ffffff] p-12 flex flex-col shadow-sm border-t-2 border-[#000000] hover:shadow-2xl transition-all duration-500`}>
                  <div className="mb-8">
                    <span className="material-symbols-outlined text-4xl text-[#000000]">{card.icon}</span>
                  </div>
                  <h4 className="font-serif text-[24px] md:text-[28px] text-[#000000] mb-6 font-bold">{card.title}</h4>
                  <p className="font-sans text-[16px] text-[#444748] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[20px]">
          <div className="flex flex-col md:flex-row gap-16 items-stretch">
            <div className="md:w-1/2">
              <div className="h-1 w-10 bg-[#000000] mb-8"></div>
              <span className="font-sans text-[12px] text-[#444748] uppercase tracking-widest mb-4 block font-bold">Case Study // Industrials</span>
              <h3 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-8 leading-tight font-bold">Deconstructing the Multi-Tranche Debt Stack</h3>
              <p className="font-sans text-[18px] text-[#444748] mb-10 leading-relaxed">
                An in-depth analysis of how fragmented capital structures paralyze operational agility. This engagement involved a $2.4B industrial conglomerate facing a complex web of 14 different lending facilities with conflicting covenants.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="border-l-2 border-[#000000]/20 pl-6">
                  <div className="text-[32px] font-serif text-[#000000] mb-1 font-bold">240 bps</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#444748] font-bold">Cost Reduction</div>
                </div>
                <div className="border-l-2 border-[#000000]/20 pl-6">
                  <div className="text-[32px] font-serif text-[#000000] mb-1 font-bold">Absolute</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#444748] font-bold">Refinancing Certainty</div>
                </div>
              </div>
              <Link to="/contact" className="bg-[#000000] text-[#ffffff] font-sans text-[12px] px-10 py-5 hover:bg-[#30312e] transition-all uppercase tracking-[0.2em] font-bold shadow-xl">
                Download Detailed Case Study
              </Link>
            </div>
            <div className="md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
              <img
                alt="Detailed architectural drawing of a complex structure overlaid on a modern building facade."
                className="w-full h-full object-cover grayscale brightness-90 shadow-2xl border border-[#c4c7c7]"
                src="/financialadvisory/capital-structure2.png"
              />
              <div className="absolute inset-0 border-[16px] md:border-[24px] border-[#fbf9f4]/20 pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="w-full bg-[#000000] py-[20px] text-[#ffffff]">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
              <div className="md:col-span-4">
                <h3 className="font-serif text-[32px] md:text-[40px] mb-12 font-bold leading-tight">Core Deliverables</h3>
                <p className="font-sans text-[18px] text-white/70 mb-12 leading-relaxed">
                  We provide the technical precision and institutional weight required to reshape your financial foundation.
                </p>
              </div>
              <div className="md:col-span-8 space-y-px bg-white/10 shadow-2xl">
                {[
                  { num: "01", title: "Capital Structure Diagnostic", desc: "Comprehensive teardown of existing debt tranches, identifying duration gaps and pricing inefficiencies." },
                  { num: "02", title: "Debt Re-architecture Plan", desc: "Design of a consolidated, strategic debt stack prioritizing optimal cost and maximum operational flexibility." },
                  { num: "03", title: "Lender Negotiation & Syndication", desc: "Direct engagement with bank syndicates to restructure restricting clauses and optimize terms." },
                  { num: "04", title: "Rating Narrative Optimization", desc: "Crafting the definitive narrative to secure rating upgrades and restore confidence among debt holders." }
                ].map((item) => (
                  <div key={item.num} className="bg-[#000000] p-10 hover:bg-[#30312e] transition-colors border-b border-white/5">
                    <div className="flex gap-8">
                      <span className="font-serif text-[32px] opacity-30 font-bold">{item.num}</span>
                      <div>
                        <h4 className="font-serif text-[24px] mb-4 font-bold">{item.title}</h4>
                        <p className="font-sans text-[16px] text-white/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[20px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-xl">
              <div className="h-1 w-10 bg-[#000000] mb-8"></div>
              <h3 className="font-serif text-[32px] md:text-[40px] text-[#000000] font-bold leading-tight">Strategic Insights</h3>
              <p className="font-sans text-[16px] text-[#444748] mt-4">Exploring the evolving intersections of global debt markets and corporate strategy.</p>
            </div>
            <Link to="/insights" className="font-sans text-[12px] text-[#000000] border-b-2 border-[#000000] pb-1 uppercase tracking-widest font-bold">View All Insights</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "Capital Markets", title: "The End of Cheap Debt: Navigating High-Rate Regimes", desc: "How CFOs are pivoting their hedging strategies as the decade of low interest rates firmly closes.", img: "/financialadvisory/capital-structure3.png" },
              { category: "Governance", title: "Covenant Intelligence: The New Strategic Advantage", desc: "Why covenant flexibility is becoming more valuable than nominal interest rate spreads in M&A cycles.", img: "/financialadvisory/capital-structure4.png" },
              { category: "Restructuring", title: "Preventative Recapitalization in Emerging Markets", desc: "Managing cross-border currency risks through sophisticated local-currency debt architecture.", img: "/financialadvisory/capital-structure5.png" },
              { category: "Institutional", title: "The Evolution of the Private Credit Landscape", desc: "Mapping the shift of institutional capital from public markets to bespoke private debt structures.", img: "/financialadvisory/capital-structure6.png" }
            ].map((insight, idx) => (
              <Link key={idx} to="/insights" className="group block cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6 border border-[#c4c7c7]">
                  <img
                    alt={insight.title}
                    className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110"
                    src={insight.img}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#444748] block mb-3">{insight.category}</span>
                <h4 className="font-serif text-[20px] text-[#000000] leading-tight group-hover:underline mb-4 font-bold">{insight.title}</h4>
                <p className="text-[14px] text-[#444748] line-clamp-3 leading-relaxed">{insight.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quantifiable Impact */}
        <section className="w-full bg-[#e4e2dd] py-[20px]">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] text-center">
            <h3 className="font-serif text-[32px] md:text-[48px] text-[#000000] mb-20 font-bold leading-tight">Quantifiable Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12">
              {[
                { val: "100-300", label: "BPS Cost-of-Debt Cut" },
                { val: "Zero", label: "Near-Term Refinancing Risk" },
                { val: "Restored", label: "Covenant Headroom" },
                { val: "Aligned", label: "ALM Structure" },
                { val: "Upgraded", label: "Rating Narrative" },
                { val: "Absolute", label: "Capital Flexibility" }
              ].map((impact, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="font-serif text-[48px] md:text-[72px] text-[#000000] mb-4 leading-none tabular-nums font-black group-hover:scale-110 transition-transform duration-300">{impact.val}</div>
                  <div className="font-sans text-[12px] text-[#444748] uppercase tracking-widest font-bold">{impact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Call */}
        <section className="w-full relative overflow-hidden h-[80vh] bg-[#000000]">
          <div className="absolute inset-0">
            <img
              alt="Aerial view of a city grid at dusk, looking like a circuit board."
              className="w-full h-full object-cover grayscale brightness-[0.3] contrast-150 opacity-60"
              src="/financialadvisory/capital-structure7.png"
            />
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] w-full">
              <div className="max-w-[1000px]">
                <h4 className="font-serif text-[56px] md:text-[96px] text-[#ffffff] mb-4 leading-[1] font-black tracking-tighter">
                  Your capital structure is a strategy.
                </h4>
                <p className="font-serif text-[56px] md:text-[96px] text-[#ffffff]/40 mb-20 leading-[1] font-black tracking-tighter">
                  The question is whose strategy it is.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-[#ffffff] text-[#000000] font-sans text-[13px] px-12 py-6 hover:bg-[#eae8e3] transition-colors uppercase tracking-[0.2em] font-bold text-center min-w-[280px]"
                  >
                    Initiate Diagnostic
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-[#ffffff] border border-[#ffffff]/40 px-12 py-6 hover:bg-[#ffffff]/10 transition-colors uppercase tracking-[0.2em] font-bold font-sans text-[13px] text-center min-w-[280px]"
                  >
                    Speak with a Partner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CapitalStructureDebtArchitecture;