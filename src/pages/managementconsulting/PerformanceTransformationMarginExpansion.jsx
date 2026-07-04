import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PerformanceTransformationMarginExpansion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="flex-grow">
        {/* Premium Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern Corporate Architecture"
              className="w-full h-full object-cover grayscale"
              src="/managmentcounsaltingimg/performance-transformation.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f4] via-[#fbf9f4]/80 to-transparent"></div>
          </div>
          <div className="relative z-10 px-[32px] md:px-[64px] w-full max-w-[1200px] mx-auto">
            <div className="max-w-3xl">
              <span className="block font-sans text-[12px] text-[#000000] mb-6 uppercase tracking-widest font-semibold">Performance Transformation · MC-06</span>
              <h1 className="font-serif text-[48px] md:text-[64px] text-[#1b1c19] mb-8 leading-tight font-bold">
                Cost programmes save what is visible. <br />
                <span className="italic font-normal">Margin lives where no one is looking.</span>
              </h1>
              <p className="font-sans text-[18px] text-[#444748] max-w-xl mb-10 leading-relaxed">
                We help global leaders move beyond tactical cost-cutting to engineer structural margin superiority through architectural redesign of value capture.
              </p>
              <div className="flex gap-6">
                <Link to="/contact" className="bg-[#000000] text-[#ffffff] px-8 py-4 font-sans text-[12px] uppercase tracking-widest font-bold hover:opacity-90 transition-opacity">
                  Our Methodology
                </Link>
                <Link to="/insights" className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-widest text-[#000000] border-b border-[#000000]/20 hover:border-[#000000] transition-all py-4 font-bold">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Philosophy */}
        <section className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 md:col-span-4">
              <div className="sticky top-32">
                <span className="block font-sans text-[12px] text-[#000000] mb-4 uppercase tracking-tighter font-bold">01 / PERSPECTIVE</span>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] font-bold">Structural Expansion</h2>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <p className="font-sans text-[18px] text-[#444748] leading-relaxed mb-12">
                Margin expansion is structural. It is not merely a reduction of discretionary spend, but an architectural redesign of how a company creates and captures value. True expansion resides in the complex interplay of pricing mechanics, product mix, operational complexity, and streamlined processes.
              </p>
              <div className="aspect-[16/9] w-full bg-[#f0eee9] overflow-hidden group">
                <img
                  alt="Strategic Abstract Architecture"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-1000"
                  src="/managmentcounsaltingimg/performance-transformation1.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Methodology / Deliverables */}
        <section className="bg-[#f5f3ee] border-y border-[#c4c7c7]/30">
          <div className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="block font-sans text-[12px] text-[#000000] mb-4 uppercase tracking-widest font-bold">The Transformation Framework</span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] font-bold">Architecting Sustainable Returns</h2>
            </div>
            <div className="grid grid-cols-12 gap-[24px]">
              <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#fbf9f4] p-10 border border-[#c4c7c7]/30 flex flex-col min-h-[360px] hover:shadow-xl transition-shadow">
                <span className="material-symbols-outlined text-[#000000] mb-8 text-4xl font-light">query_stats</span>
                <h3 className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] mb-6 font-semibold">Margin Diagnostic</h3>
                <p className="font-sans text-[16px] text-[#444748] mb-auto leading-relaxed">Deep-dive analysis of P&L leakage, identifying invisible cost sinks hidden within complex operational layers.</p>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#fbf9f4] p-10 border border-[#c4c7c7]/30 flex flex-col min-h-[360px] hover:shadow-xl transition-shadow">
                <span className="material-symbols-outlined text-[#000000] mb-8 text-4xl font-light">payments</span>
                <h3 className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] mb-6 font-semibold">Pricing Architecture</h3>
                <p className="font-sans text-[16px] text-[#444748] mb-auto leading-relaxed">Restructuring commercial terms and value-based pricing models to capture maximum market value.</p>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#fbf9f4] p-10 border border-[#c4c7c7]/30 flex flex-col min-h-[360px] hover:shadow-xl transition-shadow">
                <span className="material-symbols-outlined text-[#000000] mb-8 text-4xl font-light">account_tree</span>
                <h3 className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] mb-6 font-semibold">Complexity Reduction</h3>
                <p className="font-sans text-[16px] text-[#444748] mb-auto leading-relaxed">Rationalising SKU portfolios and optimising physical footprint to eliminate non-value-adding overhead.</p>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#000000] p-10 flex flex-col min-h-[360px] shadow-2xl">
                <span className="material-symbols-outlined text-[#ffffff] mb-8 text-4xl font-light">layers</span>
                <h3 className="font-serif text-[24px] md:text-[28px] text-[#ffffff] mb-6 font-semibold">Org Lean 2.0</h3>
                <p className="font-sans text-[16px] text-[#c8c6c5] mb-auto leading-relaxed">Architecting streamlined workflows that structurally embed lower operating costs into the DNA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-[24px] items-center">
            <div className="col-span-12 md:col-span-6">
              <div className="relative group cursor-pointer overflow-hidden shadow-2xl">
                <img
                  alt="Consulting Case Study"
                  className="w-full h-[500px] md:h-[600px] object-cover grayscale brightness-90 hover:scale-105 transition-transform duration-1000"
                  src="/managmentcounsaltingimg/performance-transformation2.png"
                />
                <div className="absolute inset-0 bg-[#000000]/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:ml-auto lg:col-span-4">
              <span className="block font-sans text-[12px] text-[#000000] mb-6 uppercase tracking-widest font-bold">Case Study / Heavy Industry</span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] mb-8 font-bold leading-tight">The Illusion of Cost Cutting</h2>
              <p className="font-sans text-[18px] text-[#444748] mb-8 leading-relaxed">
                How a fundamental restructuring of pricing architecture and operational complexity resulted in a sustainable 15% margin expansion for a global Fortune 500 client.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 border-b border-[#c4c7c7]/30 pb-4">
                  <span className="font-serif text-[#000000] text-[32px] md:text-[40px] font-bold">15%</span>
                  <span className="font-sans text-[10px] text-[#444748] uppercase tracking-widest font-bold">EBITDA Improvement</span>
                </div>
                <div className="flex items-center gap-4 border-b border-[#c4c7c7]/30 pb-4">
                  <span className="font-serif text-[#000000] text-[32px] md:text-[40px] font-bold">240bps</span>
                  <span className="font-sans text-[10px] text-[#444748] uppercase tracking-widest font-bold">Margin Expansion</span>
                </div>
              </div>

              <Link to={"/contact"} className="font-sans text-[#000000] border-b-2 border-[#000000] pb-1 text-[12px] uppercase tracking-widest font-bold hover:opacity-70 transition-opacity cursor-pointer">
                Download Full Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              
            </div>
          </div>
        </section>

        {/* Insights Grid Section */}
        <section className="bg-[#000000] text-[#ffffff]">
          <div className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
              <div>
                <span className="block font-sans text-[#c8c6c5] mb-4 uppercase tracking-widest font-bold">Strategic Insights</span>
                <h2 className="font-serif text-[32px] md:text-[40px] font-bold">Industry Perspectives</h2>
              </div>
              <Link to={"/insights"} className="font-sans text-[12px] text-[#ffffff] border-b border-[#ffffff] uppercase mb-2 tracking-widest font-bold hover:opacity-70 transition-all">View Library</Link>
            </div>
            <div className="grid grid-cols-12 gap-[24px]">
              {/* Insight 1 */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 group cursor-pointer">
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-white/5">
                  <img
                    alt="Data Analytics"
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    src="/managmentcounsaltingimg/performance-transformation3.png"
                  />
                </div>
                <span className="font-sans text-[10px] text-[#c8c6c5] uppercase tracking-widest mb-3 block font-bold">Digital Strategy</span>
                <h4 className="font-serif text-[18px] md:text-[20px] mb-4 group-hover:text-[#c8c6c5] transition-colors font-semibold leading-tight">The Algorithmic Margin: AI in Pricing</h4>
                <p className="text-[#c8c6c5]/70 text-[14px] line-clamp-2">Leveraging machine learning to identify micro-segments of untapped value in B2B markets.</p>
              </div>
              {/* Insight 2 */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 group cursor-pointer">
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-white/5">
                  <img
                    alt="Global Supply Chain"
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    src="/managmentcounsaltingimg/performance-transformation4.png"
                  />
                </div>
                <span className="font-sans text-[10px] text-[#c8c6c5] uppercase tracking-widest mb-3 block font-bold">Operations</span>
                <h4 className="font-serif text-[18px] md:text-[20px] mb-4 group-hover:text-[#c8c6c5] transition-colors font-semibold leading-tight">Supply Chain Resilience as a Moat</h4>
                <p className="text-[#c8c6c5]/70 text-[14px] line-clamp-2">Why structural supply chain redesign outperforms traditional procurement negotiation.</p>
              </div>
              {/* Insight 3 */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 group cursor-pointer">
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-white/5">
                  <img
                    alt="Legal Strategy"
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    src="/managmentcounsaltingimg/performance-transformation5.png"
                  />
                </div>
                <span className="font-sans text-[10px] text-[#c8c6c5] uppercase tracking-widest mb-3 block font-bold">Organization</span>
                <h4 className="font-serif text-[18px] md:text-[20px] mb-4 group-hover:text-[#c8c6c5] transition-colors font-semibold leading-tight">Beyond Lean: The Agile Enterprise</h4>
                <p className="text-[#c8c6c5]/70 text-[14px] line-clamp-2">Reimagining organizational structures for the era of permanent volatility.</p>
              </div>
              {/* Insight 4 */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 group cursor-pointer">
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-white/5">
                  <img
                    alt="Financial Charts"
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    src="/managmentcounsaltingimg/performance-transformation6.png"
                  />
                </div>
                <span className="font-sans text-[10px] text-[#c8c6c5] uppercase tracking-widest mb-3 block font-bold">Corporate Finance</span>
                <h4 className="font-serif text-[18px] md:text-[20px] mb-4 group-hover:text-[#c8c6c5] transition-colors font-semibold leading-tight">The Valuation Premium of Efficiency</h4>
                <p className="text-[#c8c6c5]/70 text-[14px] line-clamp-2">How public markets reward companies with structural cost advantages over cycles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Conversation */}
        <section className="px-[32px] md:px-[64px] py-[20px] max-w-[1200px] mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] mb-8 font-bold leading-tight">
              Cost cuts return next quarter. <br />
              <span className="italic font-normal">Margin architecture compounds.</span>
            </h2>
            <p className="font-sans text-[18px] text-[#444748] mb-12">
              Engage with our senior partners to discuss your transformation objectives.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#000000] text-[#ffffff] px-12 py-5 font-sans text-[14px] md:text-[18px] uppercase tracking-[0.2em] transition-all hover:pr-16 font-bold"
            >
              Initiate Dialogue
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PerformanceTransformationMarginExpansion;