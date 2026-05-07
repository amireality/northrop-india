import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const OpportunityCostOfCapital = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f6f9ff] text-[#171c20] font-sans antialiased min-h-screen">
      <Helmet>
        <title>Executive Report: The Opportunity Cost of Capital | Financial Intelligence</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,wght@0,500;0,600;1,500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>

      <main className="pt-[80px] pb-[64px] max-w-[1200px] mx-auto px-[32px] space-y-[64px]">
        {/* Hero Section */}
        <section className="mt-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-end border-b border-[#c4c6d0] pb-[40px]">
            <div className="md:col-span-8">
              <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#001736] mb-[8px] block">EXECUTIVE REPORT | SERIES 2026</span>
              <h1 className="font-serif text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#001736]">The Opportunity Cost of Capital</h1>
              <p className="font-sans text-[18px] font-normal leading-[1.6] text-[#43474f] mt-[16px] italic">"The true cost of capital is not what you pay, but what you forgo."</p>
            </div>
            <div className="md:col-span-4 text-right">
              <p className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#43474f]">PUBLISHED APRIL 2026</p>
              <p className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#43474f]">RESTRICTED ACCESS</p>
            </div>
          </div>
        </section>

        {/* Intro Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-[64px]">
          {/* Text Content */}
          <div className="md:col-span-5 space-y-[16px]">
            <h2 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736]">Introduction</h2>
            <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#43474f]">The allocation of capital is the most critical decision an executive faces. While explicit costs represent the quantifiable outflows, the implicit costs—those related to the next best alternative—often dictate the long-term trajectory of the firm. Opportunity cost defines the boundary between growth and stagnation in modern corporate finance.</p>
            <div className="p-[24px] bg-[#f0f4fa] border border-[#c4c6d0] flex flex-col justify-center mt-[24px]">
              <div className="flex items-center gap-[8px] text-[#001736] mb-[8px]">
                <span className="material-symbols-outlined">analytics</span>
                <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">Definition Profile</span>
              </div>
              <p className="font-sans text-[16px] font-medium leading-[1.5] text-[#171c20]">Opportunity Cost represents the potential benefit an individual, investor, or business misses out on when choosing one alternative over another.</p>
            </div>
          </div>
          {/* Hero Image */}
          <div className="md:col-span-7 h-full min-h-[400px] overflow-hidden rounded-sm relative">
            <img alt="Modern Corporate Finance Infrastructure April 2026" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://placeholder.pics/svg/300" />
            <div className="absolute bottom-0 left-0 bg-[#001736]/90 text-[#ffffff] px-[16px] py-1 font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">
              STRATEGIC OUTLOOK | APRIL 2026
            </div>
          </div>
        </section>

        {/* Section 1: Analysis of the Principle */}
        <section className="space-y-[24px]">
          <div className="border-l-4 border-[#001736] pl-[16px]">
            <h2 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736]">01. Analysis of the Principle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            <div className="md:col-span-2 space-y-[16px]">
              <p className="font-sans text-[16px] font-normal leading-[1.5]">In strategic financial modeling, we must distinguish between two primary layers of cost structure:</p>
              <ul className="space-y-[8px] list-none pl-0">
                <li className="flex gap-[8px] items-start">
                  <span className="text-[#001736] font-bold">Explicit Costs:</span>
                  <span className="text-[#43474f]">Direct, out-of-pocket payments for factors of production such as wages, rent, and materials.</span>
                </li>
                <li className="flex gap-[8px] items-start border-t border-[#c4c6d0] pt-[8px]">
                  <span className="text-[#001736] font-bold">Implicit Costs:</span>
                  <span className="text-[#43474f]">Non-monetary opportunity costs that represent the value of resources already owned by the firm used for one purpose instead of another.</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#002b5b] p-[24px] flex flex-col justify-center text-[#ffffff]">
              <p className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase mb-[16px] opacity-80 tracking-widest">Decision-Making Formula</p>
              <div className="font-serif text-[24px] font-medium leading-[1.3] leading-tight italic">
                Economic Profit = <br/>Total Revenue - (Explicit Costs + Implicit Costs)
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Impact on Indian Businesses */}
        <section className="space-y-[24px]">
          <div className="border-l-4 border-[#001736] pl-[16px]">
            <h2 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736]">02. Impact on Indian Businesses (April 2026)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
            <div className="md:col-span-5 bg-[#ffffff] border border-[#c4c6d0] p-[24px]">
              <h3 className="font-serif text-[24px] font-medium leading-[1.3] text-[#001736] border-b border-[#c4c6d0] pb-[8px] mb-[16px]">SME/MSME Struggle</h3>
              <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#43474f]">The SME sector is currently navigating significant credit stress. Forced foraging for expensive capital has created an environment where the opportunity cost of maintaining operations exceeds the potential for innovation.</p>
            </div>
            <div className="md:col-span-7 space-y-[16px]">
              <h3 className="font-serif text-[24px] font-medium leading-[1.3] text-[#001736]">Corporate CAPEX Trends</h3>
              <div className="w-full h-48 mb-[16px] overflow-hidden rounded-sm">
                <img alt="Modern Indian Infrastructure" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaGlORBrVjJR8kWHQ1__4GlACTFQ3EuxtiTJalstnNm9jfyjlk3vkPq_4JvJjAV1f0DmjES4piwCWcPmQYmWbXG_TwgG5gwpN-zqS9i_MzaLT-F32rFjnynGuIFyQZ-deWHlGbE3nDtiwe_UCpjoexIQddsrHev6jYS1ByMgoSY5I1NioeW0zNEctoMr6W8MjZUV8FRR8vhVS22eubC3LUN7DaOGe1pnWKeMf-g-_KJcsViymxSyYHSPcGXJTz5TcBVkJEV7MVWuI" />
              </div>
              <div className="flex items-center gap-[24px]">
                <div className="text-[64px] font-semibold text-[#001736] leading-none">25%</div>
                <div className="font-sans text-[16px] font-normal leading-[1.5] text-[#43474f]">Decrease in strategic capital expenditure spending as firms re-allocate funds toward debt reduction and cash preservation.</div>
              </div>
              <div className="h-[1px] bg-[#c4c6d0] w-full my-[16px]"></div>
              <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#43474f]">Strategic re-allocation is no longer optional. Large-cap Indian firms are shifting from expansionary models to efficiency-first paradigms, prioritizing high-yield domestic projects over speculative international ventures.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Macroeconomic Impact */}
        <section className="space-y-[24px]">
          <div className="border-l-4 border-[#001736] pl-[16px]">
            <h2 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736]">03. Macroeconomic Impact on India</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
            {/* Data Callout 1 */}
            <div className="md:col-span-3 p-[24px] bg-[#e4e8ee] border border-[#c4c6d0] flex flex-col justify-center">
              <div className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#43474f] mb-[8px]">PUBLIC INVESTMENT</div>
              <div className="text-[40px] font-serif font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] leading-tight">10.4%</div>
              <p className="font-sans text-[16px] font-normal leading-[1.5] mt-[8px]">Aggregate public investment rate required to sustain target GDP growth.</p>
            </div>
            {/* Visual Context Image */}
            <div className="md:col-span-6 h-[300px] overflow-hidden">
              <img alt="Indian Business Hub" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr87Z4F2-owLVzPZse7Hkzv45G-r06DWjz7JuaZOeXEALpHyyQF1ytgaeVXlQVa3Icw__-Ahd-3GJoM_MrHUEIYNgdg_NAEoY2n40Me5OxsoTrBvoOM5EXCx1qwoiwyvqyYwwy2FkISQN_pBy1yajX9tSQoAHY6VztBH125cHT6drRDteaxRnR6aqoY_dDc8G7QxJe9xqrmEl-6pes6mYsovDrTF5BXT9wOHcma3ZmqiMcjJZWD3evL5QYWMV_uSlrGhiOCkRLhsQ" />
            </div>
            {/* Data Callout 2 */}
            <div className="md:col-span-3 border border-[#c4c6d0] p-[24px] bg-[#ffffff] flex flex-col justify-center">
              <h3 className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#001736] mb-[16px] tracking-wider">The Banking Sector Shift</h3>
              <div className="space-y-[24px]">
                <div className="pb-[16px] border-b border-[#c4c6d0]">
                  <span className="text-[10px] font-sans font-semibold leading-[1] tracking-[0.08em] uppercase text-[#43474f] block mb-1">FROM: CORPORATE LENDING</span>
                  <p className="text-[14px] leading-snug text-[#43474f] italic">Traditional infrastructure financing has cooled.</p>
                </div>
                <div>
                  <span className="text-[10px] font-sans font-semibold leading-[1] tracking-[0.08em] uppercase text-[#001736] block mb-1">TO: RETAIL LENDING</span>
                  <p className="text-[14px] leading-snug text-[#43474f] italic">Pivot toward consumer credit for liquidity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Key Takeaways */}
        <section className="bg-[#001736] text-[#ffffff] p-[64px]">
          <div className="max-w-3xl mx-auto space-y-[24px]">
            <h2 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#ffffff] text-center italic">Key Takeaways for Managers</h2>
            <div className="grid grid-cols-1 gap-[24px]">
              <div className="flex gap-[24px] items-start">
                <span className="bg-[#002b5b] text-[#ffffff] px-3 py-1 font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">01</span>
                <p className="font-sans text-[18px] font-normal leading-[1.6]">Look beyond Weighted Average Cost of Capital (WACC). Traditional metrics fail to capture the shadow cost of talent and operational focus.</p>
              </div>
              <div className="flex gap-[24px] items-start">
                <span className="bg-[#002b5b] text-[#ffffff] px-3 py-1 font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">02</span>
                <p className="font-sans text-[18px] font-normal leading-[1.6]">Factor in intangibles like brand equity erosion and market positioning when evaluating "safe" investments.</p>
              </div>
              <div className="flex gap-[24px] items-start">
                <span className="bg-[#002b5b] text-[#ffffff] px-3 py-1 font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">03</span>
                <p className="font-sans text-[18px] font-normal leading-[1.6]">Target a minimum risk-adjusted return of <span className="font-bold underline decoration-[#002b5b] underline-offset-4 text-[#7594ca]">12.2%</span> for all new capital allocations to stay ahead of domestic inflation benchmarks.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default OpportunityCostOfCapital;