import  { useEffect } from 'react';

const Enterprisestrategyvaluearchitecture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen font-body-md selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-[64px] pb-[20px]">
        {/* Hero Section */}
        <header className="pt-[20px] pb-32">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-10">
              <span className="font-sans text-[12px] text-[#747878] block mb-8 uppercase tracking-[0.3em]">MC-01 / ENTERPRISE STRATEGY</span>
              <h1 className="font-serif text-[40px] md:text-[40px] text-[#000000] mb-12  font-extrabold  uppercase max-w-5xl">
                Designing Architectural Value.
              </h1>
              <p className="font-serif text-[20px] md:text-[20px] text-[#444748] max-w-4xl border-l-2 border-[#000000] pl-8 mt-16 font-medium italic">
                "You have a strategy deck. The market still treats you like a transaction."
              </p>
            </div>
          </div>
        </header>

        {/* Large Scale Visual 1 */}
        <section className="mb-[20px]">
          <div className="relative w-full aspect-[21/9] overflow-hidden   border border-[#c4c7c7]">
            <img
              alt="Abstract glass facade of a modern skyscraper"
              className="w-full h-full object-cover"
              src="/managmentcounsaltingimg/enterprises.png"
            />
  
          </div>
        </section>

        {/* Introduction */}
        <section className="py-32 border-t border-[#c4c7c7]">
          <div className="grid grid-cols-12 gap-[24px] items-start">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-primary mb-12 tracking-tight">Strategy as Architecture.</h2>
              <p className="font-body-lg text-[18px] md:text-body-lg text-on-surface mb-8 font-medium leading-relaxed">
                True strategy is not a collection of initiatives; it is the deliberate architecture of capital, talent, and time. It requires ruthlessly aligning an organization's resources against its highest-value opportunities while divesting from structural inefficiencies.
              </p>
              <p className="font-body-md text-[16px] md:text-body-md text-on-surface-variant mb-12">
                We design institutional-grade frameworks that shift corporate valuation from a multiple of revenue to a multiple of long-term strategic advantage.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="bg-[#f0eee9] p-12 border border-[#c4c7c7]">
                <span className="font-label-caps text-[12px] text-[#747878] block mb-6 uppercase tracking-widest">THE THESIS</span>
                <blockquote className="font-headline-md text-[20px] md:text-[20px] text-[#000000] italic mb-8">
                  "In an era of hyper-liquidity, differentiation is no longer found in access to capital, but in the rigor of its allocation."
                </blockquote>
                <div className="h-px bg-[#c4c7c7] w-24 mb-6"></div>
                <p className="font-body-md text-[#444748]">Northrop Strategic Advisory, 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Specific Failures (Bento Grid) */}
        <section className="py-32 border-y border-[#c4c7c7]">
          <div className="mb-24 flex justify-between items-end">
            <div>
              <span className="font-label-caps text-[12px] text-[#747878] block mb-6 uppercase tracking-widest">THE DIAGNOSTIC</span>
              <h2 className="font-headline-lg text-[32px] md:text-[40px] text-[#000000] tracking-tight">Industry-Specific Strategic Failures.</h2>
            </div>
            <div className="hidden lg:block h-px bg-[#c4c7c7] flex-grow ml-12 mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#c4c7c7] border border-[#c4c7c7]">
            {/* Card 1 */}
            <div className="bg-[#fbf9f4] p-12 hover:bg-[#000000] hover:text-[#ffffff] group transition-all duration-500">
              <span className="material-symbols-outlined text-4xl mb-12 text-[#000000] group-hover:text-[#ffffff] block">domain</span>
              <h3 className="font-headline-md text-[24px] md:text-[28px] text-[#000000] group-hover:text-[#ffffff] mb-6 tracking-tight">Real Estate</h3>
              <p className="font-body-md text-[16px] md:text-[16px] text-[#444748] group-hover:text-[#ffffff]/80">
                Trapped in asset accumulation without a coherent portfolio theory, leading to capital lock-in and systemic yield compression.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#fbf9f4] p-12 hover:bg-[#000000] hover:text-[#ffffff] group transition-all duration-500">
              <span className="material-symbols-outlined text-4xl mb-12 text-[#000000] group-hover:text-[#ffffff] block">cloud</span>
              <h3 className="font-headline-md text-[24px] md:text-[28px] text-[#000000] group-hover:text-[#ffffff] mb-6 tracking-tight">SaaS</h3>
              <p className="font-body-md text-[16px] md:text-[16px] text-[#444748] group-hover:text-[#ffffff]/80">
                Prioritizing vanity top-line growth over fundamental unit economics, resulting in structural unprofitability masked by cheap capital.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#fbf9f4] p-12 hover:bg-[#000000] hover:text-[#ffffff] group transition-all duration-500">
              <span className="material-symbols-outlined text-4xl mb-12 text-[#000000] group-hover:text-[#ffffff] block">factory</span>
              <h3 className="font-headline-md text-[24px] md:text-[28px] text-[#000000] group-hover:text-[#ffffff] mb-6 tracking-tight">Manufacturing</h3>
              <p className="font-body-md text-[16px] md:text-[16px] text-[#444748] group-hover:text-[#ffffff]/80">
                Operational excellence disconnected from strategic positioning. Optimizing for products the market views as commodities.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#fbf9f4] p-12 hover:bg-[#000000] hover:text-[#ffffff] group transition-all duration-500">
              <span className="material-symbols-outlined text-4xl mb-12 text-[#000000] group-hover:text-[#ffffff] block">account_tree</span>
              <h3 className="font-headline-md text-[24px] md:text-[28px] text-[#000000] group-hover:text-[#ffffff] mb-6 tracking-tight">Conglomerates</h3>
              <p className="font-body-md text-[16px] md:text-[16px] text-[#444748] group-hover:text-[#ffffff]/80">
                Complexity discounts applied due to cross-subsidization, opaque capital allocation, and lack of a central value thesis.
              </p>
            </div>
          </div>
        </section>

        {/* Large Scale Visual 2 */}
        <section className="py-32">
          <div className="relative w-full aspect-[21/9] overflow-hidden  border-[#c4c7c7]">
            <img
              alt="High-end corporate boardroom with minimalist aesthetic"
              className="w-full h-full object-cover"
              src="/managmentcounsaltingimg/enterprises1.png"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-12 left-12 max-w-xl bg-[#000000] text-[#ffffff] p-8">
              <span className="font-label-caps text-[12px] tracking-widest mb-4 block opacity-60 uppercase">METHODOLOGY</span>
              <h3 className="font-headline-lg text-[24px] md:text-3xl mb-0">Structural Rigor over Creative Ambiguity.</h3>
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-32">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-40">
                <span className="font-label-caps text-[12px] text-[#747878] block mb-6 uppercase tracking-widest">THE PHASES</span>
                <h2 className="font-headline-lg text-[32px] md:text-[40px] text-[#000000] mb-12 tracking-tight">The Delivery Architecture.</h2>
                <div className="aspect-square w-full border border-[#c4c7c7] overflow-hidden grayscale contrast-125 mb-8">
                  <img
                    alt="Brutalist architectural detail"
                    className="w-full h-full object-cover"
                    src="/managmentcounsaltingimg/enterprises2.png"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-24">
              <div className="pb-16 border-b border-[#c4c7c7]">
                <span className="font-label-caps text-[#000000] font-bold text-sm tracking-widest mb-6 block uppercase">01 / DIAGNOSTIC</span>
                <h3 className="font-headline-lg text-[24px] md:text-[28px] text-[#000000] mb-6">Strategic Diagnostic</h3>
                <p className="font-body-lg text-[18px] md:text-[18px] text-[#444748] leading-relaxed">
                  A rigorous, unvarnished assessment of current market positioning, operational friction, and latent structural vulnerabilities across the enterprise.
                </p>
              </div>
              <div className="pb-16 border-b border-[#c4c7c7]">
                <span className="font-label-caps text-[#000000] font-bold text-sm tracking-widest mb-6 block uppercase">02 / ALLOCATION</span>
                <h3 className="font-headline-lg text-[24px] md:text-[28px] text-[#000000] mb-6">Capital Allocation Framework</h3>
                <p className="font-body-lg text-[18px] md:text-[18px] text-[#444748] leading-relaxed">
                  Designing strict, metrics-driven protocols for deploying capital across core, adjacent, and exploratory business units to maximize return on invested capital.
                </p>
              </div>
              <div className="pb-16 border-b border-[#c4c7c7]">
                <span className="font-label-caps text-[#000000] font-bold text-sm tracking-widest mb-6 block uppercase">03 / POSITIONING</span>
                <h3 className="font-headline-lg text-[24px] md:text-[28px] text-[#000000] mb-6">Market Position Re-architecture</h3>
                <p className="font-body-lg text-[18px] md:text-[18px] text-[#444748] leading-relaxed">
                  Shifting the competitive narrative from feature-based comparison to category leadership, ensuring pricing power and market insulation.
                </p>
              </div>
              <div className="pb-16">
                <span className="font-label-caps text-[#000000] font-bold text-sm tracking-widest mb-6 block uppercase">04 / EQUITY STORY</span>
                <h3 className="font-headline-lg text-[24px] md:text-[28px] text-[#000000] mb-6">Investor-Grade Narrative</h3>
                <p className="font-body-lg text-[18px] md:text-[18px] text-[#444748] leading-relaxed">
                  Translating strategic intent into a defensible, mathematically sound narrative that commands a premium multiple from institutional markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-32 bg-[#000000] text-[#ffffff] -mx-[64px] px-[64px]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
              <span className="font-label-caps text-[#ffffff]/60 block mb-6 uppercase tracking-[0.3em]">STRATEGIC INTERVENTION</span>
              <h2 className="font-headline-lg text-[32px] md:text-[40px] text-[#ffffff] mb-8 tracking-tight">The Portfolio Reset.</h2>
              <p className="font-body-lg text-[18px] md:text-[18px] text-[#ffffff]/70 mb-12">
                How a $4B diversified holding company restructured its core to unlock $800M in hidden equity value through ruthless divestment and capital redirection.
              </p>
              <a className="inline-flex items-center gap-4 text-[#ffffff] font-label-caps tracking-widest border-b border-[#ffffff] pb-2 hover:opacity-70 transition-opacity" href="#">
                VIEW FULL CASE STUDY <span className="material-symbols-outlined">arrow_outward</span>
              </a>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-2 gap-12">
                <div className="border-l border-white/20 pl-8">
                  <span className="font-headline-xl text-[36px] md:text-[48px] lg:text-[64px] block mb-4">22%</span>
                  <p className="font-label-caps text-[12px] tracking-widest text-[#ffffff]/60 uppercase">EBITDA Margin Improvement</p>
                </div>
                <div className="border-l border-white/20 pl-8">
                  <span className="font-headline-xl text-[36px] md:text-[48px] lg:text-[64px] block mb-4">1.4x</span>
                  <p className="font-label-caps text-[12px] tracking-widest text-[#ffffff]/60 uppercase">Multiple Expansion</p>
                </div>
                <div className="col-span-2 mt-8 p-12 bg-white/5 border border-white/10">
                  <h4 className="font-headline-md text-[20px] md:text-[24px] mb-4 italic">"The intervention didn't just fix our balance sheet; it fixed our purpose."</h4>
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Who This Is For */}
        <section className="py-32 border-b border-[#c4c7c7]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-5">
              <span className="font-label-caps text-[12px] text-[#747878] block mb-6 uppercase tracking-widest">THE RESULT</span>
              <h2 className="font-headline-lg text-[32px] md:text-[40px] text-[#000000] mb-16 tracking-tight">Systemic Outcomes.</h2>
              <ul className="space-y-12">
                <li className="group">
                  <span className="font-label-caps text-[#000000] font-bold text-[12px] tracking-widest block mb-4 uppercase">01 / CAPITAL DISCIPLINE</span>
                  <p className="font-headline-md text-[24px] group-hover:pl-4 transition-all duration-300">Rigorous alignment of resources to highest-yield opportunities.</p>
                </li>
                <li className="group">
                  <span className="font-label-caps text-[#000000] font-bold text-[12px] tracking-widest block mb-4 uppercase">02 / EQUITY STORY</span>
                  <p className="font-headline-md text-[24px] group-hover:pl-4 transition-all duration-300">A coherent narrative driving institutional valuation multiples.</p>
                </li>
                <li className="group">
                  <span className="font-label-caps text-[#000000] font-bold text-[12px] tracking-widest block mb-4 uppercase">03 / EVA VISIBILITY</span>
                  <p className="font-headline-md text-[24px] group-hover:pl-4 transition-all duration-300">Clear line of sight into Economic Value Added (EVA) drivers.</p>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-24 lg:mt-0 bg-[#f0eee9] border border-[#c4c7c7] p-16">
              <span className="font-label-caps text-[#747878] block mb-6 uppercase tracking-widest text-[12px]">THE MANDATE</span>
              <h2 className="font-headline-lg text-[32px] md:text-[40px] text-[#000000] mb-12 tracking-tight">Who This Is For.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                <div className="space-y-4">
                  <h4 className="font-headline-md text-[20px] border-b border-[#c4c7c7] pb-2">Institutional Boards</h4>
                  <p className="font-body-md text-[16px] text-[#444748]">Inheriting strategic drift and demanding a reset of capital priorities.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-headline-md text-[20px] border-b border-[#c4c7c7] pb-2">Family Offices</h4>
                  <p className="font-body-md text-[16px] text-[#444748]">Seeking to professionalize governance and asset allocation frameworks.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-headline-md text-[20px] border-b border-[#c4c7c7] pb-2">Diversified Groups</h4>
                  <p className="font-body-md text-[16px] text-[#444748]">Operating across high-friction markets requiring structural simplification.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-headline-md text-[20px] border-b border-[#c4c7c7] pb-2">PE-Backed CEOs</h4>
                  <p className="font-body-md text-[16px] text-[#444748]">Focused on accelerated value creation and exit readiness.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Grid Section */}
        <section className="py-32 border-b border-[#c4c7c7]">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <span className="font-label-caps text-[12px] text-[#747878] block mb-4 uppercase tracking-widest">INTELLIGENCE</span>
              <h2 className="font-headline-lg text-[32px] md:text-[40px] text-[#000000] tracking-tight">Strategic Insights.</h2>
            </div>
            <a className="font-label-caps text-[12px] tracking-widest border border-[#000000] px-6 py-3 hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-300 uppercase" href="#">VIEW ALL PUBLICATIONS</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Article 1 */}
            <article className="flex flex-col h-full">
              <div className="aspect-[4/3] w-full border border-[#c4c7c7] mb-6 duration-500 overflow-hidden">
                <img
                  alt="Digital data visualization"
                  className="w-full h-full object-cover"
                  src="/managmentcounsaltingimg/enterprises3.png"
                />
              </div>
              <span className="font-label-caps text-[10px] text-[#747878] uppercase tracking-widest mb-2">Capital Allocation / 01</span>
              <h3 className="font-headline-md text-[20px] text-[#000000] mb-4 leading-snug">The End of Cheap Capital: A Survival Guide.</h3>
              <p className="font-body-md text-[14px] text-[#444748] mb-6 flex-grow">How the shift in ZIRP regimes is forcing a structural re-evaluation of holding company leverage.</p>
              <a className="text-[12px] font-bold font-label-caps tracking-widest flex items-center gap-2 hover:gap-4 transition-all uppercase" href="#">READ ARTICLE <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
            </article>
            {/* Article 2 */}
            <article className="flex flex-col h-full">
              <div className="aspect-[4/3] w-full border border-[#c4c7c7] mb-6  duration-500 overflow-hidden">
                <img
                  alt="Minimalist light fixture"
                  className="w-full h-full object-cover"
                  src="/managmentcounsaltingimg/enterprises4.png"
                />
              </div>
              <span className="font-label-caps text-[10px] text-[#747878] uppercase tracking-widest mb-2">Governance / 02</span>
              <h3 className="font-headline-md text-[20px] text-[#000000] mb-4 leading-snug">The Architectural Board: Beyond Compliance.</h3>
              <p className="font-body-md text-[14px] text-[#444748] mb-6 flex-grow">Shifting the board narrative from reactive oversight to proactive strategic architecture.</p>
              <a className="text-[12px] font-bold font-label-caps tracking-widest flex items-center gap-2 hover:gap-4 transition-all uppercase" href="#">READ ARTICLE <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
            </article>
            {/* Article 3 */}
            <article className="flex flex-col h-full">
              <div className="aspect-[4/3] w-full border border-[#c4c7c7] mb-6  duration-500 overflow-hidden">
                <img
                  alt="Office building facade"
                  className="w-full h-full object-cover"
                  src="/managmentcounsaltingimg/enterprises5.png"
                />
              </div>
              <span className="font-label-caps text-[10px] text-[#747878] uppercase tracking-widest mb-2">Mergers & Acquisitions / 03</span>
              <h3 className="font-headline-md text-[20px] text-[#000000] mb-4 leading-snug">The Complexity Discount: A Quantification.</h3>
              <p className="font-body-md text-[14px] text-[#444748] mb-6 flex-grow">Measuring the tangible market penalty for opaque conglomerate structures and cross-subsidies.</p>
              <a className="text-[12px] font-bold font-label-caps tracking-widest flex items-center gap-2 hover:gap-4 transition-all uppercase" href="#">READ ARTICLE <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
            </article>
            {/* Article 4 */}
            <article className="flex flex-col h-full">
              <div className="aspect-[4/3] w-full border border-[#c4c7c7] mb-6  duration-500 overflow-hidden">
                <img
                  alt="Professional in business attire"
                  className="w-full h-full object-cover"
                  src="/managmentcounsaltingimg/enterprises6.png"
                />
              </div>
              <span className="font-label-caps text-[10px] text-[#747878] uppercase tracking-widest mb-2">Leadership / 04</span>
              <h3 className="font-headline-md text-[20px] text-[#000000] mb-4 leading-snug">Strategy in the Age of Volatility.</h3>
              <p className="font-body-md text-[14px] text-[#444748] mb-6 flex-grow">Building resilient frameworks that prioritize optionality without sacrificing operational focus.</p>
              <a className="text-[12px] font-bold font-label-caps tracking-widest flex items-center gap-2 hover:gap-4 transition-all uppercase" href="#">READ ARTICLE <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
            </article>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-10 text-center bg-[#fbf9f4]">
          <h2 className="font-headline-xl text-[32px] md:text-[48px] lg:text-[64px] text-[#000000] max-w-5xl mx-auto mb-16 tracking-tighter uppercase leading-tight">
            "Strategy that doesn't survive scrutiny isn't strategy.<br />It's vocabulary."
          </h2>
          <div className="flex flex-col items-center gap-8">
            <a className="inline-block bg-[#000000] text-[#ffffff] font-label-caps text-[14px] px-16 py-6 border border-[#000000] hover:bg-transparent hover:text-[#000000] transition-all duration-500 tracking-[0.2em] uppercase" href="#">
              INITIATE CONSULTATION
            </a>
            <p className="font-label-caps text-[10px] text-[#747878] tracking-widest uppercase">STRICT CONFIDENTIALITY MAINTAINED</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Enterprisestrategyvaluearchitecture;