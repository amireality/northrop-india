import React from 'react';
import { Link } from 'react-router-dom';

function Pillar_1_corporate_strategy() {
  return (
    <>
      <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col font-['Inter',sans-serif]">
        <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-[50px] py-[64px] md:py-[50px]">
          <header className="grid grid-cols-12 gap-[32px] mb-16">
            <div className="col-span-12 md:col-span-8 flex flex-col gap-8">
              <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000a1e]">
                Most strategies fail in execution. Ours are built backwards from it.
              </h1>
              <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#44474e] max-w-2xl">
                Strategy is the single largest determinant of long-term shareholder value. We help clients bridge the gap between planning and execution, framing strategy as a pattern of irreversible decisions on where to play and how to win.
              </p>
            </div>
          </header>
          
          <section className="w-full  md:h-[614px] mb-[64px] md:mb-[58px] overflow-hidden border border-[#c4c6cf]">
            <img 
              alt="Architectural pillar" 
              className="w-full h-full " 
              src="/corporate-strategy.jpeg"
            />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mb-[64px] md:mb-[128px]">
            <div className="border border-[#c4c6cf] p-8 flex flex-col gap-4 bg-[#f9f9f9] hover:bg-white transition-colors duration-500 min-h-[320px]">
              <div className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] border-b border-[#c4c6cf] pb-4 mb-4 flex justify-between items-center uppercase">
                <span>01. Market Positioning</span>
                <span className="material-symbols-outlined text-[#74777f]">architecture</span>
              </div>
              <h3 className="font-['Noto_Serif',serif] text-[24px] leading-[1.3] font-normal text-[#1a1c1c]">
                Defining the competitive arena.
              </h3>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[1.6] font-normal text-[#44474e] mt-auto">
                Isolating distinct value pools and systematically discarding unviable avenues to focus institutional mass where absolute advantage exists.
              </p>
            </div>

            <div className="border border-[#c4c6cf] p-8 flex flex-col gap-4 bg-[#f9f9f9] hover:bg-white transition-colors duration-500 min-h-[320px]">
              <div className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] border-b border-[#c4c6cf] pb-4 mb-4 flex justify-between items-center uppercase">
                <span>02. Growth Architecture</span>
                <span className="material-symbols-outlined text-[#74777f]">trending_up</span>
              </div>
              <h3 className="font-['Noto_Serif',serif] text-[24px] leading-[1.3] font-normal text-[#1a1c1c]">
                Designing the path to scale.
              </h3>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[1.6] font-normal text-[#44474e] mt-auto">
                Engineering organic and inorganic vectors to compound capital, sequencing initiatives to manage risk while aggressively capturing market share.
              </p>
            </div>

            <div className="border border-[#c4c6cf] p-8 flex flex-col gap-4 bg-[#f9f9f9] hover:bg-white transition-colors duration-500 min-h-[320px]">
              <div className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] border-b border-[#c4c6cf] pb-4 mb-4 flex justify-between items-center uppercase">
                <span>03. Capital Allocation</span>
                <span className="material-symbols-outlined text-[#74777f]">account_balance</span>
              </div>
              <h3 className="font-['Noto_Serif',serif] text-[24px] leading-[1.3] font-normal text-[#1a1c1c]">
                Optimizing finite resources for maximum TSR.
              </h3>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[1.6] font-normal text-[#44474e] mt-auto">
                Establishing rigorous return thresholds and deploying capital with surgical precision to assets and initiatives yielding the highest risk-adjusted returns.
              </p>
            </div>
          </section>

          <section className="border-t border-b border-[#000a1e] py-16 grid grid-cols-1 md:grid-cols-12 gap-[32px] items-center bg-[#f9f9f9]">
            <div className="md:col-span-8 flex flex-col gap-6 pl-8 border-l-4 border-[#000a1e]">
              <p className="font-['Noto_Serif',serif] text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.01em] font-normal text-[#000a1e]">
                "67% of well-formulated strategies fail because of poor execution."
              </p>
              <p className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#74777f] uppercase">
                Harvard Business Review
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end mt-8 md:mt-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-[#000a1e] text-[#ffffff] font-['Inter',sans-serif] text-[12px] leading-none font-semibold px-8 py-5 uppercase tracking-[0.1em] hover:text-[#775a19] hover:border-b-2 hover:border-[#775a19] transition-all duration-300"
              >
                Book a strategy review
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Pillar_1_corporate_strategy;