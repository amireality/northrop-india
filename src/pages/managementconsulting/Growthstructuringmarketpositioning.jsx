import  { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Growthstructuringmarketpositioning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#dbdad5] selection:text-[#1b1c19]">
      <main className="w-full">
        {/* Premium Hero Section */}
        <header className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Corporate architectural detail symbolizing strength and structure"
              className="w-full h-full object-cover grayscale brightness-50"
              src="/managmentcounsaltingimg/growth-structuring.jpeg"
            />
          </div>
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[64px]">
            <div className="max-w-4xl">
              <p className="font-sans text-[12px] font-semibold text-white mb-8 uppercase tracking-[0.3em] border-l-4 border-white pl-4">
                MC-02: Growth Structuring & Market Positioning
              </p>
              <h1 className="font-serif text-white text-[48px] md:text-[72px] lg:text-[88px] mb-10 leading-[1.1] font-black tracking-[-0.03em]">
                You have growth. Investors aren't paying for it.
              </h1>
              <p className="font-sans text-[18px] md:text-[22px] text-white/80 max-w-xl">
                Growth and value are not the same number. Defensible, capital-light growth compounds.
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-[1200px] mx-auto px-[10px] py-[10px]">
          {/* Industry Failures (Bento Grid) */}
          <section className="mb-[20px] border-t-4 border-[#000000] pt-24">
            <div className="mb-20">
              <h2 className="font-serif text-[40px] md:text-[48px] text-[#000000] font-bold leading-[1.1] tracking-[-0.02em]">
                Industry-Specific<br />Growth Failures
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {/* Consumer Brands */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 border-2 border-[#000000] p-10 hover:bg-[#f5f3ee] transition-colors duration-300 rounded-none bg-[#ffffff]">
                <div className="mb-8 border-b-2 border-[#000000] pb-4">
                  <span className="material-symbols-outlined text-4xl text-[#000000]">shopping_bag</span>
                </div>
                <h3 className="font-serif text-[28px] md:text-[32px] text-[#000000] mb-4 font-bold">Consumer Brands</h3>
                <p className="font-sans text-[16px] text-[#444748]">Eroding margins hidden behind top-line vanity metrics.</p>
              </div>
              {/* B2B SaaS */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 border-2 border-[#000000] p-10 hover:bg-[#f5f3ee] transition-colors duration-300 rounded-none bg-[#ffffff]">
                <div className="mb-8 border-b-2 border-[#000000] pb-4">
                  <span className="material-symbols-outlined text-4xl text-[#000000]">cloud</span>
                </div>
                <h3 className="font-serif text-[28px] md:text-[32px] text-[#000000] mb-4 font-bold">B2B SaaS</h3>
                <p className="font-sans text-[16px] text-[#444748]">Inefficient customer acquisition cost (CAC) masking poor retention.</p>
              </div>
              {/* Manufacturing */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 border-2 border-[#000000] p-10 hover:bg-[#f5f3ee] transition-colors duration-300 rounded-none bg-[#ffffff]">
                <div className="mb-8 border-b-2 border-[#000000] pb-4">
                  <span className="material-symbols-outlined text-4xl text-[#000000]">factory</span>
                </div>
                <h3 className="font-serif text-[28px] md:text-[32px] text-[#000000] mb-4 font-bold">Manufacturing</h3>
                <p className="font-sans text-[16px] text-[#444748]">Capital-intensive expansion lacking pricing power leverage.</p>
              </div>
              {/* Healthcare */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 border-2 border-[#000000] p-10 hover:bg-[#f5f3ee] transition-colors duration-300 rounded-none bg-[#ffffff]">
                <div className="mb-8 border-b-2 border-[#000000] pb-4">
                  <span className="material-symbols-outlined text-4xl text-[#000000]">medical_services</span>
                </div>
                <h3 className="font-serif text-[28px] md:text-[32px] text-[#000000] mb-4 font-bold">Healthcare</h3>
                <p className="font-sans text-[16px] text-[#444748]">Regulatory headwinds stalling scalable service models.</p>
              </div>
            </div>
          </section>

          {/* Case Study Section */}
          <section className="mb-[20px] border-t-4 border-[#000000] pt-24">
            <div className="grid grid-cols-12 gap-[32px] items-center">
              <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0">
                <img
                  alt="Strategic analytical meeting in a modern setting"
                  className="w-full h-[400px] md:h-[600px] object-cover grayscale border-4 border-[#000000] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
                  src="/managmentcounsaltingimg/growth-structuring-market-positioning.jpeg"
                />
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <p className="font-sans text-[12px] text-[#444748] mb-6 uppercase tracking-widest font-semibold">Featured Case Study</p>
                <h2 className="font-serif text-[40px] md:text-[48px] text-[#000000] mb-8 font-bold leading-[1.1]">Unlocking Enterprise Value in Post-Series B B2B SaaS</h2>
                <p className="font-sans text-[18px] text-[#444748] mb-10 leading-relaxed">
                  We partnered with a leading SaaS provider to restructure their cohort economics, resulting in a 40% increase in LTV and a significant expansion in their terminal valuation multiple ahead of strategic exit.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <p className="text-[40px] md:text-[48px] font-serif text-[#000000] font-bold">14x</p>
                    <p className="font-sans text-[12px] text-[#444748] uppercase mt-2 tracking-widest font-semibold">Multiple Expansion</p>
                  </div>
                  <div>
                    <p className="text-[40px] md:text-[48px] font-serif text-[#000000] font-bold">32%</p>
                    <p className="font-sans text-[12px] text-[#444748] uppercase mt-2 tracking-widest font-semibold">Margin Improvement</p>
                  </div>
                </div>
                <a className="inline-flex items-center font-sans text-[12px] font-semibold border-b-2 border-[#000000] pb-2 hover:border-[#dbdad5] transition-colors tracking-widest uppercase" href="#">
                  View Methodology <span className="material-symbols-outlined ml-2 text-[18px]">north_east</span>
                </a>
              </div>
            </div>
          </section>

          {/* What Northrop Delivers */}
          <section className="mb-[20px] grid grid-cols-12 gap-[32px] items-center border-t-4 border-[#000000] pt-24">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="font-serif text-[40px] md:text-[48px] text-[#000000] mb-12 font-bold leading-[1.1]">What Northrop Delivers</h2>
              <div className="space-y-8">
                <div className="border-b-2 border-[#000000] pb-6">
                  <h4 className="font-sans text-[16px] md:text-[18px] font-bold text-[#000000] mb-3 uppercase tracking-widest">01. Growth Architecture Diagnostic</h4>
                  <p className="font-sans text-[16px] text-[#444748]">Identifying structural inefficiencies in current expansion models.</p>
                </div>
                <div className="border-b-2 border-[#000000] pb-6">
                  <h4 className="font-sans text-[16px] md:text-[18px] font-bold text-[#000000] mb-3 uppercase tracking-widest">02. Cohort & Unit Economics Build</h4>
                  <p className="font-sans text-[16px] text-[#444748]">Establishing defensible, granular financial modeling.</p>
                </div>
                <div className="border-b-2 border-[#000000] pb-6">
                  <h4 className="font-sans text-[16px] md:text-[18px] font-bold text-[#000000] mb-3 uppercase tracking-widest">03. Positioning & Pricing Power</h4>
                  <p className="font-sans text-[16px] text-[#444748]">Aligning market perception with premium value capture.</p>
                </div>
                <div className="border-b-2 border-[#000000] pb-6">
                  <h4 className="font-sans text-[16px] md:text-[18px] font-bold text-[#000000] mb-3 uppercase tracking-widest">04. Growth Investment Case</h4>
                  <p className="font-sans text-[16px] text-[#444748]">Articulating clear pathways to multiple expansion for stakeholders.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-16 lg:mt-0">
              <img
                alt="Executive strategist analyzing complex data visualizations"
                className="w-full h-[500px] md:h-[700px] grayscale border-4 border-[#000000] rounded-none shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]"
                src="/managmentcounsaltingimg/growth-structuring2.jpeg"
              />
            </div>
          </section>

          {/* Outcomes & Who This Is For */}
          <section className="mb-[40px] grid grid-cols-12 gap-[32px] border-t-4 border-[#000000] pt-24">
            {/* Outcomes */}
            <div className="col-span-12 md:col-span-5 pr-0 md:pr-12 border-r-0 md:border-r-4 border-[#000000]">
              <h2 className="font-serif text-[32px] text-[#000000] mb-12 font-bold">Outcomes</h2>
              <ul className="space-y-6 font-sans text-[18px] md:text-[20px] text-[#000000] font-semibold">
                <li className="flex items-center"><span className="material-symbols-outlined mr-4 text-[24px]">arrow_forward</span> Cohort Economics</li>
                <li className="flex items-center"><span className="material-symbols-outlined mr-4 text-[24px]">arrow_forward</span> Valuation Multiple</li>
                <li className="flex items-center"><span className="material-symbols-outlined mr-4 text-[24px]">arrow_forward</span> Pricing Power</li>
                <li className="flex items-center"><span className="material-symbols-outlined mr-4 text-[24px]">arrow_forward</span> Channel ROI</li>
                <li className="flex items-center"><span className="material-symbols-outlined mr-4 text-[24px]">arrow_forward</span> Growth-to-Value</li>
                <li className="flex items-center"><span className="material-symbols-outlined mr-4 text-[24px]">arrow_forward</span> Diligence Survivable</li>
              </ul>
            </div>
            {/* Who This Is For */}
            <div className="col-span-12 md:col-span-7 pl-0 md:pl-16 mt-16 md:mt-0">
              <h2 className="font-serif text-[32px] text-[#000000] mb-12 font-bold">Who This Is For</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="border-2 border-[#000000] p-8 bg-[#ffffff] group hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-300 cursor-default">
                  <p className="font-sans text-[18px] font-bold uppercase tracking-widest">Founders Pre Series B/C</p>
                </div>
                <div className="border-2 border-[#000000] p-8 bg-[#ffffff] group hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-300 cursor-default">
                  <p className="font-sans text-[18px] font-bold uppercase tracking-widest">Operating CEOs Scaling</p>
                </div>
                <div className="border-2 border-[#000000] p-8 bg-[#ffffff] group hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-300 cursor-default">
                  <p className="font-sans text-[18px] font-bold uppercase tracking-widest">Boards Pre Strategic Sale</p>
                </div>
                <div className="border-2 border-[#000000] p-8 bg-[#ffffff] group hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-300 cursor-default">
                  <p className="font-sans text-[18px] font-bold uppercase tracking-widest">PE-Backed Companies Pre-Exit</p>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Insights Grid */}
          <section className="mb-[20px] border-t-4 border-[#000000] pt-24">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-serif text-[40px] md:text-[48px] text-[#000000] font-bold leading-[1.1]">Strategic<br />Insights</h2>
              <a className="font-sans text-[12px] font-bold text-[#000000] border-b-2 border-[#000000] pb-1 uppercase tracking-widest" href="#">View All Research</a>
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <img
                  alt="Analysis context"
                  className="w-full h-48 object-cover mb-6"
                  src="/managmentcounsaltingimg/growth-structuring3.png"
                />
                <p className="font-sans text-[10px] text-[#444748] uppercase tracking-widest mb-3 font-semibold">SaaS / Unit Economics</p>
                <h4 className="font-serif text-[20px] md:text-[22px] text-[#000000] mb-4 font-bold">The False Positives of LTV:CAC</h4>
                <p className="font-sans text-[14px] text-[#444748]">Why traditional ratios mask structural decay in subscription models.</p>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <img
                  alt="Data visualization"
                  className="w-full h-48 object-cover mb-6"
                  src="/managmentcounsaltingimg/growth-structuring4.png"
                />
                <p className="font-sans text-[10px] text-[#444748] uppercase tracking-widest mb-3 font-semibold">Market Position</p>
                <h4 className="font-serif text-[20px] md:text-[22px] text-[#000000] mb-4 font-bold">Pricing Power as Defensive Moat</h4>
                <p className="font-sans text-[14px] text-[#444748]">The correlation between pricing autonomy and exit multiples.</p>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <img
                  alt="Strategic planning"
                  className="w-full h-48 object-cover  mb-6"
                  src="/managmentcounsaltingimg/growth-structuring5.png"
                />
                <p className="font-sans text-[10px] text-[#444748] uppercase tracking-widest mb-3 font-semibold">Capital Markets</p>
                <h4 className="font-serif text-[20px] md:text-[22px] text-[#000000] mb-4 font-bold">Structuring for Multiple Expansion</h4>
                <p className="font-sans text-[14px] text-[#444748]">How growth architecture dictates terminal value at strategic sale.</p>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <img
                  alt="Team strategy"
                  className="w-full h-48 object-cover mb-6"
                  src="/managmentcounsaltingimg/growth-structuring6.png"
                />
                <p className="font-sans text-[10px] text-[#444748] uppercase tracking-widest mb-3 font-semibold">Consumer Tech</p>
                <h4 className="font-serif text-[20px] md:text-[22px] text-[#000000] mb-4 font-bold">The Margin Compression Trap</h4>
                <p className="font-sans text-[14px] text-[#444748]">Navigating top-line growth amidst eroding contribution margins.</p>
              </div>
            </div>
          </section>

          {/* Closing Conversation */}
          <section className="border-t-8 border-[#000000] pt-10 pb-10 text-center">
            <h2 className="font-serif text-[32px] md:text-[48px] lg:text-[72px] text-[#000000] max-w-5xl mx-auto mb-16 leading-tight font-black tracking-tighter uppercase">
              "Growth that doesn't translate to multiple is dilution wearing a slide deck."
            </h2>

            <Link to={"/contact"} className="inline-block font-sans text-[14px] md:text-[18px] font-bold bg-[#000000] text-[#ffffff] px-12 py-6 border-4 border-[#000000] hover:bg-white hover:text-[#000000] transition-colors duration-200 rounded-none uppercase tracking-widest">
              Initiate Conversation
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Growthstructuringmarketpositioning;