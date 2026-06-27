import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EnergyUtilities = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter'] antialiased selection:bg-[#fed488] selection:text-[#785a1a]">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center bg-[#000d22] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Energy infrastructure" 
            className="w-full h-full " 
            src="/energy-utilities11.jpeg" 

            // src='/industryimg/energy-utilities.jpeg'
          />
           <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <span className="text-[12px] font-bold text-[#e9c176] mb-6 block uppercase tracking-[0.15em]">Energy & Utilities Practice</span>
              <h1 className="font-['Newsreader'] text-[48px] font-semibold text-white mb-8 leading-[1.1] tracking-[-0.02em]">
                Maximize Returns on <br/>Capital-Intensive Projects
              </h1>
              <p className="text-[18px] text-[#adc8f6] mb-12 max-w-2xl leading-[1.6]">
                In an era of volatile energy markets and rigorous regulatory scrutiny, we engineer financial resilience and operational precision for utility-scale investments.
              </p>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-[#e9c176] text-[#261900] text-[16px] font-medium rounded-none hover:bg-[#fed488] transition-colors border border-transparent"
                >
                  Discuss your situation
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-transparent text-white text-[16px] font-medium rounded-none border border-[#adc8f6] hover:bg-white/10 transition-colors"
                >
                  30-min diagnostic
                </button>
              </div>
            </div>
          </div>
          {/* Outcomes Bar */}
          <div className="mt-20 border-t border-[#adc8f6]/30 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#e9c176] text-[32px]">trending_up</span>
                <div>
                  <h3 className="font-['Newsreader'] text-[24px] font-medium text-white mb-2">↑ Project IRR</h3>
                  <p className="text-[16px] text-[#adc8f6]">Optimized capital allocation across the asset lifecycle.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#e9c176] text-[32px]">trending_down</span>
                <div>
                  <h3 className="font-['Newsreader'] text-[24px] font-medium text-white mb-2">↓ Capital Inefficiency</h3>
                  <p className="text-[16px] text-[#adc8f6]">Eradication of bloated CAPEX and OPEX structures.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#e9c176] text-[32px]">visibility</span>
                <div>
                  <h3 className="font-['Newsreader'] text-[24px] font-medium text-white mb-2">↑ Funding Clarity</h3>
                  <p className="text-[16px] text-[#adc8f6]">Rigorous justification frameworks for board approval.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaks & Solve Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-12">
            <span className="text-[12px] font-bold text-[#775a19] mb-4 block uppercase tracking-widest">Value Erosion</span>
            <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#1c1b1b]">Systemic Capital Leaks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            {/* Leak Cards */}
            <div className="md:col-span-4 bg-[#fcf9f8] p-8 border border-[#c4c6cf]/30 rounded-none relative overflow-hidden group hover:border-[#775a19]/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#ba1a1a]"></div>
              <span className="material-symbols-outlined text-[#74777f] mb-6 block text-[32px]">warning</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-4">Overcapitalization</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Asset redundancy and inefficient procurement strategies leading to diluted returns.</p>
            </div>
            <div className="md:col-span-4 bg-[#fcf9f8] p-8 border border-[#c4c6cf]/30 rounded-none relative overflow-hidden group hover:border-[#775a19]/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#ba1a1a]"></div>
              <span className="material-symbols-outlined text-[#74777f] mb-6 block text-[32px]">policy</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-4">Regulatory Shocks</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Failure to anticipate policy shifts, resulting in stranded assets and compliance penalties.</p>
            </div>
            <div className="md:col-span-4 bg-[#fcf9f8] p-8 border border-[#c4c6cf]/30 rounded-none relative overflow-hidden group hover:border-[#775a19]/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#ba1a1a]"></div>
              <span className="material-symbols-outlined text-[#74777f] mb-6 block text-[32px]">timeline</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-4">Poor Planning</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Misaligned timelines and resource bottlenecks causing severe project cost overruns.</p>
            </div>
          </div>

          <div className="mb-12 pt-8 border-t border-[#c4c6cf]/30">
            <span className="text-[12px] font-bold text-[#775a19] mb-4 block uppercase tracking-widest">Our Methodology</span>
            <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#1c1b1b]">The Solution Matrix</h2>
          </div>
          {/* Solve Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative pt-8 group border-t border-[#c4c6cf]/50">
              <div className="absolute top-[-5px] left-0 w-2.5 h-2.5 rounded-full bg-[#775a19]"></div>
              <span className="text-[12px] font-bold text-[#74777f] mb-4 block uppercase tracking-widest">Phase 01</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Diagnose</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Deep-dive forensic analysis of current capital allocation, identifying precise points of value leakage.</p>
            </div>
            <div className="relative pt-8 group border-t border-[#c4c6cf]/50">
              <div className="absolute top-[-5px] left-0 w-2.5 h-2.5 rounded-full bg-[#775a19]"></div>
              <span className="text-[12px] font-bold text-[#74777f] mb-4 block uppercase tracking-widest">Phase 02</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Design</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Engineering robust, MECE-aligned restructuring frameworks tailored to regulatory constraints and market dynamics.</p>
            </div>
            <div className="relative pt-8 group border-t border-[#c4c6cf]/50">
              <div className="absolute top-[-5px] left-0 w-2.5 h-2.5 rounded-full bg-[#775a19]"></div>
              <span className="text-[12px] font-bold text-[#74777f] mb-4 block uppercase tracking-widest">Phase 03</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Execute</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Tactical implementation with rigorous PMO oversight, ensuring timeline adherence and cost control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Snapshot */}
      <section className="py-12 bg-[#f6f3f2] border-y border-[#c4c6cf]/20">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-8 bg-[#775a19]"></div>
                <span className="text-[12px] font-bold text-[#775a19] uppercase tracking-widest">Case Snapshot</span>
              </div>
              <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#000d22] mb-6">Grid Modernization Turnaround</h2>
              <p className="text-[16px] text-[#43474e] mb-8 leading-[1.6]">
                A tier-1 utility faced a 40% cost overrun on a multi-year grid modernization initiative. Through our rigorous diagnostic and redesign methodology, we recalibrated the project scope, renegotiated supplier contracts, and implemented strict governance protocols.
              </p>
              <div className="space-y-6 mb-8 border-t border-[#c4c6cf]/30 pt-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[12px] font-bold text-[#000d22] uppercase tracking-widest">CAPEX Reduction</span>
                    <span className="text-[12px] font-bold text-[#775a19] uppercase">22%</span>
                  </div>
                  <div className="w-full h-1 bg-[#e5e2e1]">
                    <div className="w-[22%] h-full bg-[#775a19]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[12px] font-bold text-[#000d22] uppercase tracking-widest">Timeline Acceleration</span>
                    <span className="text-[12px] font-bold text-[#775a19] uppercase">14 Mos</span>
                  </div>
                  <div className="w-full h-1 bg-[#e5e2e1]">
                    <div className="w-[45%] h-full bg-[#775a19]"></div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center text-[#775a19] text-[16px] font-medium border-b border-[#775a19] pb-1 hover:text-[#000d22] hover:border-[#000d22] transition-colors"
              >
                Read full case study <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="relative h-[500px]">
              <img 
                alt="Grid infrastructure" 
                className='w-full h-full  ' 

                src="/industryimg/energy-utilities1.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Intelligence */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-12">
            <span className="text-[12px] font-bold text-[#775a19] mb-4 block uppercase tracking-widest">Insights</span>
            <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#1c1b1b]">Industry Intelligence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group border border-[#c4c6cf]/30 rounded-none overflow-hidden bg-[#fcf9f8] hover:border-[#775a19]/50 transition-colors">
              <div className="h-48 overflow-hidden bg-[#e5e2e1] relative">
                <img 
                  alt="Global Energy Market" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhX1Nerivfow7p1vNTVaC8LMdtcu-b8ZxlwPztMiJ9bBiY8WFgLQ8D_OmOawLWBIvtH96nmN799qKyGk6EUI0R2Y6ZVvjPvYFxgWWW4LejBUObIYTGcCkGiv_XwtmpHSngvi_fFi7M2U54ZRchYQQYyJoVwBqOVSnbiPAVAYv0g4jI9ZToRtt4spnMs1h3A9E3mlWpm4BKEXQzxA0ocs7rtgnZXotYUVe10O8kn9TcAzSv2qnZtlx28p9eLjUr8NfmNXubIpf9F6M" 
                />
              </div>
              <div className="p-8">
                <span className="text-[12px] font-bold text-[#74777f] mb-4 block tracking-widest">Oct 15, 2026</span>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-6 group-hover:text-[#775a19] transition-colors">2026 Global Energy Market Outlook</h3>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center text-[#775a19] text-[16px] font-medium border-b border-[#775a19] pb-1 hover:text-[#000d22] hover:border-[#000d22] transition-colors"
                >
                  Read Report <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group border border-[#c4c6cf]/30 rounded-none overflow-hidden bg-[#fcf9f8] hover:border-[#775a19]/50 transition-colors">
              <div className="h-48 overflow-hidden bg-[#e5e2e1] relative">
                <img 
                  alt="Decarbonization Pathways" 
                  className="w-full h-full object-cover " 
                  src="/industryimg/energy-utilities.jpeg" 
                />
              </div>
              <div className="p-8">
                <span className="text-[12px] font-bold text-[#74777f] mb-4 block tracking-widest">Sep 28, 2026</span>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-6 group-hover:text-[#775a19] transition-colors">Decarbonization Pathways for Utilities</h3>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center text-[#775a19] text-[16px] font-medium border-b border-[#775a19] pb-1 hover:text-[#000d22] hover:border-[#000d22] transition-colors"
                >
                  Read Report <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group border border-[#c4c6cf]/30 rounded-none overflow-hidden bg-[#fcf9f8] hover:border-[#775a19]/50 transition-colors">
              <div className="h-48 overflow-hidden bg-[#e5e2e1] relative">
                <img 
                  alt="Capital Efficiency" 
                  className="w-full h-full object-cover" 
                  src="/industryimg/energy-utilities1.jpeg" 
                />
              </div>
              <div className="p-8">
                <span className="text-[12px] font-bold text-[#74777f] mb-4 block tracking-widest">Aug 12, 2026</span>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-6 group-hover:text-[#775a19] transition-colors">Capital Efficiency in Grid Modernization</h3>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center text-[#775a19] text-[16px] font-medium border-b border-[#775a19] pb-1 hover:text-[#000d22] hover:border-[#000d22] transition-colors"
                >
                  Read Report <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyUtilities;