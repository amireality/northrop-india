import  { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PortfolioRationalizationBusinessExits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="max-w-[1440px] mx-auto px-8 md:px-[64px]">
        {/* Hero Section */}
        <header className="pt-[128px] pb-24 grid grid-cols-12 gap-[24px] items-end border-b border-[#c4c7c7]">
          <div className="col-span-12 md:col-span-10 pb-16">
            <span className="font-sans text-[14px] text-[#444748] block mb-8 uppercase tracking-widest font-semibold">Portfolio Rationalization & Business Exits</span>
            <h1 className="font-serif text-[48px] md:text-[72px] text-[#000000] max-w-5xl leading-[1.05] tracking-tight font-bold">Every business in your portfolio earned its place. Most are no longer paying rent.</h1>
          </div>
          <div className="col-span-12 md:col-span-2 pb-16 flex md:justify-end">
            <p className="font-sans text-[16px] text-[#444748] max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#000000] pl-6 md:pl-0 md:pr-6">Portfolios accrete. Each underperforming unit drains attention, capital, and multiple.</p>
          </div>
        </header>

        {/* Large Strategic Image 1 */}
        <section className="py-12">
          <div className="w-full aspect-[21/9] bg-[#eae8e3] relative overflow-hidden">
            <img
              alt="Minimalist architectural void"
              className="w-full h-full object-cover grayscale brightness-90"
              src="/managmentcounsaltingimg/portfolio-rationalization1.jpeg"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-12 left-12">
              <p className="font-sans text-[12px] text-white uppercase tracking-[0.4em] font-semibold">Structural Integrity / Strategic Focus</p>
            </div>
          </div>
        </section>

        {/* Industry Specific Failures */}
        <section className="py-[128px] border-b border-[#c4c7c7]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
              <h2 className="font-serif text-[40px] md:text-[48px] text-[#000000] mb-8 font-bold">The Conglomerate Discount</h2>
              <p className="font-sans text-[18px] text-[#444748] max-w-sm leading-relaxed">The symptoms of portfolio bloat manifest differently across capital structures, but the drag on valuation remains a constant.</p>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Card 1 */}
              <div className="group border-t border-[#c4c7c7] pt-10">
                <span className="font-sans text-[10px] text-[#444748] mb-6 block uppercase tracking-widest font-semibold">Case Type 01</span>
                <h3 className="font-serif text-[28px] md:text-[32px] mb-6 font-semibold">Diversified Groups</h3>
                <p className="font-sans text-[16px] text-[#444748] mb-8 leading-relaxed">Capital allocation becomes political rather than returns-driven. Strong core businesses subsidize perpetual turnaround efforts.</p>
                <div className="w-8 h-[2px] bg-[#000000] group-hover:w-full transition-all duration-500"></div>
              </div>
              {/* Card 2 */}
              <div className="group border-t border-[#c4c7c7] pt-10">
                <span className="font-sans text-[10px] text-[#444748] mb-6 block uppercase tracking-widest font-semibold">Case Type 02</span>
                <h3 className="font-serif text-[28px] md:text-[32px] mb-6 font-semibold">Manufacturing</h3>
                <p className="font-sans text-[16px] text-[#444748] mb-8 leading-relaxed">Trapped in legacy asset footprints. Shared services create impenetrable allocations that mask the true unprofitability.</p>
                <div className="w-8 h-[2px] bg-[#000000] group-hover:w-full transition-all duration-500"></div>
              </div>
              {/* Card 3 */}
              <div className="group border-t border-[#c4c7c7] pt-10">
                <span className="font-sans text-[10px] text-[#444748] mb-6 block uppercase tracking-widest font-semibold">Case Type 03</span>
                <h3 className="font-serif text-[28px] md:text-[32px] mb-6 font-semibold">Listed Holdcos</h3>
                <p className="font-sans text-[16px] text-[#444748] mb-8 leading-relaxed">Suffer from severe conglomerate discounts. Public markets struggle to value disparate assets, applying holding company penalties.</p>
                <div className="w-8 h-[2px] bg-[#000000] group-hover:w-full transition-all duration-500"></div>
              </div>
              {/* Card 4 */}
              <div className="group border-t border-[#c4c7c7] pt-10">
                <span className="font-sans text-[10px] text-[#444748] mb-6 block uppercase tracking-widest font-semibold">Case Type 04</span>
                <h3 className="font-serif text-[28px] md:text-[32px] mb-6 font-semibold">PE-Backed Platforms</h3>
                <p className="font-sans text-[16px] text-[#444748] mb-8 leading-relaxed">Bolt-on acquisitions that never truly integrated. Orphaned geographies that now complicate the exit narrative.</p>
                <div className="w-8 h-[2px] bg-[#000000] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Large Strategic Image 2 */}
        <section className="py-24">
          <div className="grid grid-cols-12 gap-[24px] items-center">
            <div className="col-span-12 md:col-span-7">
              <div className="w-full aspect-square bg-[#eae8e3] overflow-hidden">
                <img
                  alt="Aerial view of complex infrastructure"
                  className="w-full h-full object-cover grayscale brightness-75"
                  src="/managmentcounsaltingimg/portfolio-rationalization.jpeg"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:pl-16">
              <h2 className="font-serif text-[32px] md:text-[48px] text-[#000000] mb-8 leading-tight font-bold">Clarity through Deconvolution</h2>
              <p className="font-sans text-[18px] text-[#444748] mb-12 leading-relaxed">Separating high-performing core assets from legacy liabilities requires more than accounting—it requires a vision of the standalone future.</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[2px] bg-[#000000]"></div>
                <span className="font-sans text-[#000000] text-[12px] uppercase tracking-widest font-bold">The Separation Blueprint</span>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-[128px] bg-[#ffffff] -mx-8 md:-mx-[64px] px-8 md:px-[64px] border-y border-[#c4c7c7]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-12 gap-[24px]">
              <div className="col-span-12 md:col-span-4">
                <span className="font-sans text-[#444748] block mb-4 uppercase tracking-widest text-[11px] font-semibold">Success Narratives</span>
                <h2 className="font-serif text-[40px] md:text-[48px] text-[#000000] mb-12 font-bold leading-tight">Case Study: The Divestiture Premium</h2>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="bg-white border border-[#c4c7c7] p-8 md:p-16">
                  <div className="flex flex-col md:flex-row justify-between mb-16 gap-12">
                    <div className="flex-1">
                      <h4 className="font-sans text-[#444748] mb-4 uppercase text-[10px] tracking-widest font-bold">Situation</h4>
                      <p className="font-sans text-[16px] text-[#000000] leading-relaxed">A Fortune 500 industrial conglomerate with 14 business units suffering from a 35% valuation discount compared to pure-play peers.</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-sans text-[#444748] mb-4 uppercase text-[10px] tracking-widest font-bold">Action</h4>
                      <p className="font-sans text-[16px] text-[#000000] leading-relaxed">Systematic portfolio rationalization, carving out 4 non-core units and liquidating $1.2B in underperforming assets.</p>
                    </div>
                  </div>
                  <div className="border-t border-[#c4c7c7] pt-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                      <div>
                        <span className="font-serif text-[32px] md:text-[40px] block text-[#000000] font-bold">+22%</span>
                        <span className="font-sans text-[#444748] text-[10px] uppercase tracking-widest font-bold">Multiple Expansion</span>
                      </div>
                      <div>
                        <span className="font-serif text-[32px] md:text-[40px] block text-[#000000] font-bold">$1.8B</span>
                        <span className="font-sans text-[#444748] text-[10px] uppercase tracking-widest font-bold">Capital Recycled</span>
                      </div>
                      <div className="hidden md:block">
                        <span className="font-serif text-[32px] md:text-[40px] block text-[#000000] font-bold">12mo</span>
                        <span className="font-sans text-[#444748] text-[10px] uppercase tracking-widest font-bold">To Pure-Play Target</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Delivery */}
        <section className="py-[128px]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 md:col-span-5">
              <h2 className="font-serif text-[40px] md:text-[48px] text-[#000000] mb-12 font-bold">Our Delivery Framework</h2>
              <div className="space-y-16">
                <div className="border-l border-[#c4c7c7] pl-8 relative">
                  <div className="absolute top-0 left-[-1px] w-1 h-12 bg-[#000000]"></div>
                  <span className="font-sans text-[#444748] block mb-4 text-[10px] uppercase tracking-widest font-bold">Phase 01</span>
                  <h4 className="font-serif text-[24px] md:text-[28px] text-[#000000] mb-4 font-semibold">Economic-Profit Map</h4>
                  <p className="font-sans text-[16px] text-[#444748] leading-relaxed">Stripping away shared service allocations to reveal true standalone cash generation by unit.</p>
                </div>
                <div className="border-l border-[#c4c7c7] pl-8 relative">
                  <div className="absolute top-0 left-[-1px] w-1 h-12 bg-[#000000]"></div>
                  <span className="font-sans text-[#444748] block mb-4 text-[10px] uppercase tracking-widest font-bold">Phase 02</span>
                  <h4 className="font-serif text-[24px] md:text-[28px] text-[#000000] mb-4 font-semibold">Hold / Fix / Exit</h4>
                  <p className="font-sans text-[16px] text-[#444748] leading-relaxed">Objective categorization of the portfolio. Removing emotional attachment to legacy businesses.</p>
                </div>
                <div className="border-l border-[#c4c7c7] pl-8 relative">
                  <div className="absolute top-0 left-[-1px] w-1 h-12 bg-[#000000]"></div>
                  <span className="font-sans text-[#444748] block mb-4 text-[10px] uppercase tracking-widest font-bold">Phase 03</span>
                  <h4 className="font-serif text-[24px] md:text-[28px] text-[#000000] mb-4 font-semibold">Carve-Out Architecture</h4>
                  <p className="font-sans text-[16px] text-[#444748] leading-relaxed">Designing the separation blueprint. Managing stranded costs and untangling systems.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:ml-auto flex flex-col justify-end pt-24 md:pt-0">
              <div className="aspect-[4/5] bg-[#eae8e3] overflow-hidden shadow-2xl">
                <img
                  alt="Modernist stairwell geometry"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                  src="/managmentcounsaltingimg/portfolio-rationalization2.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-[128px] border-t border-[#c4c7c7]">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-sans text-[#444748] block mb-4 uppercase tracking-widest text-[11px] font-bold">Knowledge Base</span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] font-bold">Recent Insights</h2>
            </div>

            <Link to={"/insights"} className="font-sans text-[#000000] border-b-2 border-[#000000] pb-1 text-[12px] uppercase tracking-widest font-bold hover:opacity-70 transition-opacity cursor-pointer">
              View All Insights
              <span className="material-symbols-outlined ml-2 text-[18px]">north_east</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <a className="group block" href="#">
              <div className="aspect-video bg-[#eae8e3] mb-6 overflow-hidden">  
                <img
                  alt="Insight 1"
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  src="/managmentcounsaltingimg/portfolio-rationalization3.png"
                />
              </div>
              <h4 className="font-serif text-[18px] md:text-[20px] mb-3 leading-tight group-hover:text-[#444748] transition-colors font-semibold">The 2024 Divestiture Report: Unlocking Liquidity</h4>
              <p className="font-sans text-[14px] text-[#444748] leading-relaxed">Examining the rise of spin-offs in a high-interest environment.</p>
            </a>
            <a className="group block" href="#">
              <div className="aspect-video bg-[#eae8e3] mb-6 overflow-hidden">
                <img
                  alt="Insight 2"
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  src="/managmentcounsaltingimg/portfolio-rationalization4.png"
                />
              </div>
              <h4 className="font-serif text-[18px] md:text-[20px] mb-3 leading-tight group-hover:text-[#444748] transition-colors font-semibold">Operational Stranded Costs in Carve-Outs</h4>
              <p className="font-sans text-[14px] text-[#444748] leading-relaxed">Mitigating the margin drag during corporate separation.</p>
            </a>
            <a className="group block" href="#">
              <div className="aspect-video bg-[#eae8e3] mb-6 overflow-hidden">
                <img
                  alt="Insight 3"
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  src="/managmentcounsaltingimg/portfolio-rationalization5.png"
                />
              </div>
              <h4 className="font-serif text-[18px] md:text-[20px] mb-3 leading-tight group-hover:text-[#444748] transition-colors font-semibold">Private Equity Exit Strategy Refinement</h4>
              <p className="font-sans text-[14px] text-[#444748] leading-relaxed">Preparing 'orphan' assets for high-multiple trade sales.</p>
            </a>
            <a className="group block" href="#">
              <div className="aspect-video bg-[#eae8e3] mb-6 overflow-hidden">
                <img
                  alt="Insight 4"
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  src="/managmentcounsaltingimg/portfolio-rationalization6.png"
                />
              </div>
              <h4 className="font-serif text-[18px] md:text-[20px] mb-3 leading-tight group-hover:text-[#444748] transition-colors font-semibold">Digital Decoupling: IT Separation Hazards</h4>
              <p className="font-sans text-[14px] text-[#444748] leading-relaxed">A technical framework for complex business exits.</p>
            </a>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-32 md:py-48 text-center px-8 bg-[#000000] text-white mx-8 md:-mx-[64px] mb-10">
          <div className="max-w-4xl mx-auto">
            <span className="material-symbols-outlined text-white/40 text-[64px] mb-12 block font-extralight">account_balance</span>
            <p className="font-serif text-[32px] md:text-[56px] lg:text-[72px] leading-tight mb-16 tracking-tight font-bold">
              Holding a business is a decision.<br />
              <span className="opacity-50">Pretending it isn't is a more expensive one.</span>
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-[#fbf9f4] text-[#000000] font-sans px-12 py-5 border border-white hover:bg-transparent hover:text-white transition-all duration-300 uppercase tracking-widest text-[12px] font-bold"
            >
              Initiate Portfolio Review
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioRationalizationBusinessExits;