import React from 'react';
import { Link } from 'react-router-dom';

const Agecorporate = () => {
  return (
    <div className="font-['Inter'] text-[#1b1c1c] bg-[#fbf9f9] min-h-screen">
      
      <main className="">
        {/* Hero Section: The Command Center */}
        <section className="grid grid-cols-1 md:grid-cols-12 min-h-[85vh] bg-white border-b-2 border-[#00113a]">
          <div className="md:col-span-7 flex flex-col justify-center p-[24px] md:p-[64px] relative">
            <div className="absolute inset-0 brutalist-line-art pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="text-[12px] leading-none tracking-[0.1em] font-semibold text-[#00113a] uppercase mb-4 block border-l-4 border-[#00113a] pl-4">
                Institutional Core
              </span>
              
              <h1 className="text-[32px] md:text-[72px] leading-[1.05] font-bold tracking-tight text-[#00113a] mb-8">
                New Age Corporate Finance: <span className="text-[#595f67] opacity-60 italic">Deployment & Value.</span>
              </h1>
              
              <p className="text-[20px] leading-[1.6] tracking-[0.01em] font-normal text-[#444650] max-w-2xl mb-12">
                Redefining the financial function as the <strong className="text-[#00113a] font-bold">Command Center</strong> of the modern enterprise. Navigate complex capital stacks, algorithmic valuation, and the digital treasury frontier.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-[#00113a] text-white px-10 py-5 text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-[#595f67] transition-all text-center"
                >
                  Apply for Cohort
                </Link>
                <Link 
                  to="/contact" 
                  className="border border-[#00113a] text-[#00113a] px-10 py-5 text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-[#00113a] hover:text-white transition-all text-center"
                >
                  Download Prospectus
                </Link>
              </div>

              {/* Brutalist Diagram: Debt vs Equity */}
              <div className="mt-16 pt-8 border-t border-[#00113a]/10 max-w-md">
                <div className="flex justify-between items-end h-24 mb-2">
                  <div className="w-1/2 border-r border-[#00113a] h-full flex flex-col justify-end items-center pb-2">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#595f67] uppercase font-bold">Debt</span>
                    <div className="w-8 bg-[#00113a] h-[80%]"></div>
                  </div>
                  <div className="w-1/2 h-full flex flex-col justify-end items-center pb-2">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#595f67] uppercase font-bold">Equity</span>
                    <div className="w-8 border border-[#00113a] h-[40%]"></div>
                  </div>
                </div>
                <div className="text-center">
                  <code className="font-['JetBrains_Mono'] text-xs font-bold bg-[#f5f3f3] px-2 py-1">
                    WACC = (E/V * Re) + (D/V * Rd * (1-T))
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative bg-[#efeded] overflow-hidden min-h-[400px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Professional high-key office environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDuVkB7pbSp78lSMVZVtaTVe4jAJ5DDu6ffcBmtN0F9dloFUO6xYBoo5HMaE-Tufn2ZFMMz-tBPDg-Am83Dgk-BmN4SOYrP-9eAGbaSdRTXpvdxSsjKnluK3MS6wz3C1l7P87VU0izygvJG32YtEWt3pTR-aBQCUdxy3vIcaUlupGOLTxV87_OLmiCn0xvZW2m_uF1g5a4TaqaUGUmj70_K_BHMNkwrGbUZ6-q3C3-b_MQFoJJV13lE0dwuklRjoRF4gACdbgAEA"
            />
            <div className="absolute bottom-0 left-0 bg-[#00113a] text-white p-8 w-full md:w-auto">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] mb-1">Global Standard</p>
              <p className="text-[32px] font-semibold leading-tight">Tier 01 Institutional</p>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-[128px] px-[24px] md:px-[64px] bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-[12px] font-semibold text-[#595f67] uppercase tracking-widest block mb-4">
                  The Curriculum
                </span>
                <h2 className="text-[32px] md:text-[48px] font-bold text-[#00113a] uppercase leading-none">
                  Modular Strategy.
                </h2>
              </div>
              <div className="text-right">
                <p className="font-['JetBrains_Mono'] text-[#00113a] font-bold text-lg">ROIC &gt; WACC</p>
                <p className="text-[#444650] text-sm">The Fundamental Law of Value Creation</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#00113a]">
              {/* Module 01 */}
              <div className="p-12 border-b md:border-r border-[#00113a] hover:bg-white transition-all group">
                <span className="font-['JetBrains_Mono'] text-[#00113a] font-bold mb-4 block">01 // RAISING</span>
                <h3 className="text-[32px] font-semibold text-[#00113a] mb-6 uppercase">The Capital Stack</h3>
                <p className="text-[16px] leading-[1.6] text-[#444650] mb-8">
                  Optimization of funding sources for high-velocity growth. Mastering the interplay between permanent capital and flexible leverage.
                </p>
                <ul className="space-y-3 text-[12px] font-semibold text-[#00113a] uppercase tracking-[0.1em]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> Equity vs. Debt (WACC optimization)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> Venture Debt &amp; Private Credit</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> IPO / SPAC / M&amp;A Exits</li>
                </ul>
              </div>

              {/* Module 02 */}
              <div className="p-12 border-b border-[#00113a] hover:bg-white transition-all group">
                <span className="font-['JetBrains_Mono'] text-[#00113a] font-bold mb-4 block">02 // DEPLOYMENT</span>
                <h3 className="text-[32px] font-semibold text-[#00113a] mb-6 uppercase">The Investment Engine</h3>
                <p className="text-[16px] leading-[1.6] text-[#444650] mb-8">
                  Quantitative frameworks for capital allocation. Identifying and capturing alpha through disciplined valuation and strategic M&amp;A.
                </p>
                <div className="mb-8">
                  <code className="font-['JetBrains_Mono'] text-sm font-bold bg-[#00113a] text-white px-3 py-2">
                    NPV = Σ [CFt / (1+r)^t] - C0
                  </code>
                </div>
                <ul className="space-y-3 text-[12px] font-semibold text-[#00113a] uppercase tracking-[0.1em]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> Capital Budgeting (IRR, NPV)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> Advanced Valuation (DCF, LBO)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> M&amp;A Dynamics &amp; Deal Structuring</li>
                </ul>
              </div>

              {/* Module 03 */}
              <div className="p-12 border-b md:border-b-0 md:border-r border-[#00113a] hover:bg-white transition-all group">
                <span className="font-['JetBrains_Mono'] text-[#00113a] font-bold mb-4 block">03 // OPERATIONS</span>
                <h3 className="text-[32px] font-semibold text-[#00113a] mb-6 uppercase">The Treasury Command</h3>
                <p className="text-[16px] leading-[1.6] text-[#444650] mb-8">
                  Managing the lifeblood of the organization. Real-time liquidity management and sophisticated working capital strategies.
                </p>
                <ul className="space-y-3 text-[12px] font-semibold text-[#00113a] uppercase tracking-[0.1em]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> Working Capital Management (CCC)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> Optimized Dividend Policy</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> Fintech &amp; Digital Asset Integration</li>
                </ul>
              </div>

              {/* Module 04 */}
              <div className="p-12 hover:bg-white transition-all group">
                <span className="font-['JetBrains_Mono'] text-[#00113a] font-bold mb-4 block">04 // EVOLUTION</span>
                <h3 className="text-[32px] font-semibold text-[#00113a] mb-6 uppercase">The New Frontier</h3>
                <p className="text-[16px] leading-[1.6] text-[#444650] mb-8">
                  The convergence of traditional finance and decentralized technology. Preparing for the era of the autonomous, AI-driven CFO.
                </p>
                <ul className="space-y-3 text-[12px] font-semibold text-[#00113a] uppercase tracking-[0.1em]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> Tokenomics &amp; Programmable Money</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> DeFi / Fintech Disruption</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00113a]"></span> The AI CFO &amp; Predictive Treasury</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ticker Tape Section */}
        <section className="bg-[#00113a] overflow-hidden py-4 border-y border-[#00113a]">
          <div className="ticker-animate">
            <div className="flex gap-12 items-center px-6">
              {[
                { label: "D/E Ratio", value: "0.45", icon: "▲" },
                { label: "WACC", value: "8.2%", icon: "▼", isError: true },
                { label: "FCF Yield", value: "12.4%", icon: "▲" },
                { label: "Enterprise Value", value: "$4.2B", icon: "▲" },
                { label: "ROIC", value: "24.5%", icon: "▲" },
                { label: "Net Margin", value: "18%", icon: "▲" },
              ].map((item, idx) => (
                <span key={idx} className="text-white font-['JetBrains_Mono'] text-sm uppercase flex items-center whitespace-nowrap">
                  {item.label}: {item.value} 
                  <span className={`ml-2 ${item.isError ? 'text-[#ba1a1a]' : 'text-[#595f67] opacity-50'}`}>
                    {item.icon}
                  </span>
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { label: "D/E Ratio", value: "0.45", icon: "▲" },
                { label: "WACC", value: "8.2%", icon: "▼", isError: true },
                { label: "FCF Yield", value: "12.4%", icon: "▲" },
                { label: "Enterprise Value", value: "$4.2B", icon: "▲" },
                { label: "ROIC", value: "24.5%", icon: "▲" },
                { label: "Net Margin", value: "18%", icon: "▲" },
              ].map((item, idx) => (
                <span key={`dup-${idx}`} className="text-white font-['JetBrains_Mono'] text-sm uppercase flex items-center whitespace-nowrap">
                  {item.label}: {item.value} 
                  <span className={`ml-2 ${item.isError ? 'text-[#ba1a1a]' : 'text-[#595f67] opacity-50'}`}>
                    {item.icon}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Divider Imagery */}
        <section className="h-[600px] relative overflow-hidden">
          <img 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
            alt="High-stakes meeting in a sun-drenched office"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm0OnEcq66AFLsEDlonlNVrWSg-0ruWFRIwf2ONUnD5Z38U17IPC3hkjtAnFnT5H8KHYwuixA_Qt-Jqx876KD7aGpUJ4eQWe9FJttRjT65Sdl4ds-KEgQuqR8oKD6ON59ST3-Mc1cN1mIHt2WfCpl6r3ruGVLspPYv-iZwEyiatNrsHfqPByKuRALjgk0V_0oA7Mc3Mr6uGYIm_D-OC9VKzMURGz8KmSYfo0TrRm5kS2noLgKQrPaY8JFJ4vwvXJ97MZcQ56YtHg"
          />
          <div className="absolute inset-0 bg-[#00113a]/10 flex items-center justify-center pointer-events-none p-6">
            <div className="bg-white p-8 md:p-12 border-2 border-[#00113a] max-w-xl text-center">
              <h2 className="text-[32px] md:text-[48px] font-bold text-[#00113a] uppercase mb-4">Commanding Capital.</h2>
              <p className="text-[#444650]">Northrop Institute graduates manage more than $400B in aggregate global liquidity.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-[128px] px-[24px] text-center relative overflow-hidden">
          <div className="absolute inset-0 brutalist-line-art pointer-events-none opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-[32px] md:text-[72px] font-bold text-[#00113a] mb-8 leading-tight uppercase">
              Master the Mechanism.
            </h2>
            <p className="text-[20px] leading-[1.6] text-[#444650] mb-12 max-w-2xl mx-auto font-normal">
              Applications for the Autumn Cohort are now open. Limited to 40 institutional seats globally. Secure your seat in the command center.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-[#00113a] text-white px-12 py-6 text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-[#595f67] transition-all text-center"
              >
                Apply for Cohort
              </Link>
              <Link 
                to="/contact" 
                className="border border-[#00113a] text-[#00113a] px-12 py-6 text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-[#00113a] hover:text-white transition-all text-center"
              >
                Download Prospectus
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Agecorporate;