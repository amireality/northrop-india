import { Link } from 'react-router-dom';

function Pillar_5_ma_integration() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col font-['Inter',sans-serif]">
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-[38px] pb-[18px]">
        {/* Hero Section */}
        <section className="pt-[18px] pb-[18px] grid grid-cols-12 gap-[32px] items-end border-b border-[#c4c6cf]/50">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000a1e] mb-4">
              Most deals fail in integration.<br/>We make sure yours doesn't.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 pb-4">
            <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#44474e]">
              Acquisitions are the highest-variance bet a CEO makes. We focus on the post-deal phase—integrating people, systems, and culture so that synergy targets are actually captured rather than just promised.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-[18px]">
          <div className="w-full h-[300px] md:h-[400px] bg-[#dadada] relative border border-[#c4c6cf]/30 overflow-hidden group">
            <img 
              alt="Architectural integration" 
              className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply" 
              src="/eightpillar/ma-interagate.png"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#775a19] uppercase">
              70–90% of M&A deals fail to deliver expected shareholder value (HBR).
            </span>
          </div>
        </section>

        {/* Sub-tiles Grid */}
        <section className="py-[18px]">
          <h2 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-8 border-b border-[#c4c6cf]/50 pb-4 inline-block">
            Integration Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#c4c6cf]/30">
            {/* Tile 1 */}
            <div className="p-8 border-r border-b lg:border-b-0 border-[#c4c6cf]/30 hover:bg-[#f3f3f3] transition-colors duration-300">
              <span className="material-symbols-outlined text-[#775a19] mb-6 text-[32px]">flag</span>
              <h3 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] mb-4 uppercase">Day-1 Readiness</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Ensuring a seamless transition.</p>
            </div>
            {/* Tile 2 */}
            <div className="p-8 border-r border-b lg:border-b-0 border-[#c4c6cf]/30 hover:bg-[#f3f3f3] transition-colors duration-300">
              <span className="material-symbols-outlined text-[#775a19] mb-6 text-[32px]">account_balance</span>
              <h3 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] mb-4 uppercase">Finance & Systems</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Unifying the institutional core.</p>
            </div>
            {/* Tile 3 */}
            <div className="p-8 border-r border-b md:border-b-0 border-[#c4c6cf]/30 hover:bg-[#f3f3f3] transition-colors duration-300">
              <span className="material-symbols-outlined text-[#775a19] mb-6 text-[32px]">groups</span>
              <h3 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] mb-4 uppercase">Org & Culture</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Managing the human dimension of scale.</p>
            </div>
            {/* Tile 4 */}
            <div className="p-8 hover:bg-[#f3f3f3] transition-colors duration-300">
              <span className="material-symbols-outlined text-[#775a19] mb-6 text-[32px]">monitoring</span>
              <h3 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] mb-4 uppercase">Synergy Tracking</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Measuring value capture in real-time.</p>
            </div>
          </div>
        </section>

        {/* Timeline / Visual */}
        <section className="py-[18px]">
          <h2 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-8">
            100-Day Integration Roadmap
          </h2>
          <div className="relative w-full pt-8">
            {/* Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#c4c6cf]/50 -translate-y-1/2"></div>
            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] relative z-10">
              <div className="bg-[#f9f9f9] pt-4 text-center">
                <div className="w-3 h-3 bg-[#775a19] mx-auto mb-4 border border-[#f9f9f9]"></div>
                <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] block mb-2 uppercase">Day 0</span>
                <span className="font-['Inter',sans-serif] text-[14px] leading-[1.6] font-normal text-[#44474e]">Pre-Close Alignment</span>
              </div>
              <div className="bg-[#f9f9f9] pt-4 text-center">
                <div className="w-3 h-3 bg-[#c4c6cf] mx-auto mb-4 border border-[#f9f9f9]"></div>
                <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] block mb-2 uppercase">Day 1</span>
                <span className="font-['Inter',sans-serif] text-[14px] leading-[1.6] font-normal text-[#44474e]">Operational Readiness</span>
              </div>
              <div className="bg-[#f9f9f9] pt-4 text-center">
                <div className="w-3 h-3 bg-[#c4c6cf] mx-auto mb-4 border border-[#f9f9f9]"></div>
                <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] block mb-2 uppercase">Day 30</span>
                <span className="font-['Inter',sans-serif] text-[14px] leading-[1.6] font-normal text-[#44474e]">System Unification</span>
              </div>
              <div className="bg-[#f9f9f9] pt-4 text-center">
                <div className="w-3 h-3 bg-[#c4c6cf] mx-auto mb-4 border border-[#f9f9f9]"></div>
                <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] block mb-2 uppercase">Day 100</span>
                <span className="font-['Inter',sans-serif] text-[14px] leading-[1.6] font-normal text-[#44474e]">Synergy Realization</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[18px] text-center border-t border-[#c4c6cf]/30 mt-8 pt-[18px]">
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#000a1e] text-[#ffffff] font-['Inter',sans-serif] text-[12px] leading-none font-semibold uppercase tracking-[0.1em] hover:text-[#775a19] border-b-2 border-transparent hover:border-[#775a19] transition-all duration-300"
          >
            Plan your integration
            <span className="material-symbols-outlined ml-3 text-[16px]">arrow_forward</span>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Pillar_5_ma_integration;
