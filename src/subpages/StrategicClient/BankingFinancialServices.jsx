import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BankingFinancialServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter'] antialiased">
      {/* Hero Section */}
      <header className="relative bg-[#000d22] pt-24 pb-12 px-10 overflow-hidden">
        {/* Abstract architectural/data background overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkV3BelWgJQ29r2gwzFXBlHfVA2pTCUrvhJkpdjAIgKjFAFZDfdjn7QfnB3MX2Znzg9pDDruKRANI9EPjazVMLpIPX0z_MQSGGqgmQBY3S3RSh_RpdLAZMOhlbMXSIiyP3rqWPG-j8RrUkB15m4UNI_Pyllq_QyhdX6OVY8uqAZc4lgknnDR6fTWFGGR4gJF62Al3A9HeU4p0DKof3rDNIP6OSx_1mWCFWLzg4P-Zzh_ty2XREKfvHfPKCUlpScRm7gNTLuEkWhQY')" }}
        ></div>
        
        <div className="relative max-w-[1280px] mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 lg:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-[#adc8f6]"></span>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#adc8f6]">Banking & Financial Services</span>
            </div>
            <h1 className="font-['Newsreader'] text-[48px] font-semibold text-white mb-8 leading-[1.1] tracking-[-0.02em]">
              Fix Capital Inefficiency and Risk Blind Spots Before They Cost You Growth
            </h1>
            <p className="text-[18px] text-[#adc8f6] mb-12 max-w-2xl leading-[1.6]">
              In a landscape defined by tightening margins and regulatory scrutiny, operational friction is a systemic risk. We architect precision models to eliminate value leakage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-[#e9c176] text-[#261900] text-[16px] font-medium px-8 py-4 rounded-none border border-[#e9c176] hover:bg-transparent hover:text-[#e9c176] transition-all"
              >
                Discuss your situation
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-transparent text-white text-[16px] font-medium px-8 py-4 rounded-none border border-[#adc8f6]/30 hover:border-[#adc8f6] transition-all flex items-center gap-2 group"
              >
                30-min diagnostic
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Hero Outcomes Data Box */}
          <div className="md:col-span-4 lg:col-span-4 lg:col-start-9 mt-12 md:mt-0">
            <div className="bg-white/5 backdrop-blur-sm border border-[#455f88]/20 p-8 relative">
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#e9c176]"></div>
              <h3 className="text-[12px] font-bold text-white/60 mb-8 uppercase tracking-widest border-b border-[#455f88]/20 pb-4">Projected Outcomes</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="material-symbols-outlined text-[#e9c176]">arrow_upward</span>
                    <span className="font-['Newsreader'] text-[32px] font-medium text-white">15–30%</span>
                  </div>
                  <p className="text-[16px] text-[#adc8f6]/80">Capital Efficiency Gain</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="material-symbols-outlined text-[#e9c176]">arrow_downward</span>
                    <span className="font-['Newsreader'] text-[32px] font-medium text-white">20–40%</span>
                  </div>
                  <p className="text-[16px] text-[#adc8f6]/80">Reduction in Reporting Delays</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="material-symbols-outlined text-[#e9c176]">arrow_upward</span>
                    <span className="font-['Newsreader'] text-[24px] font-medium text-white leading-none">Confidence</span>
                  </div>
                  <p className="text-[16px] text-[#adc8f6]/80">Investor & Regulator Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Industry Reality & Value Leakage */}
      <section className="py-12 px-10 bg-[#fcf9f8]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-8 bg-[#775a19]"></span>
                <span className="text-[12px] font-bold text-[#775a19] uppercase tracking-[0.2em]">The Industry Reality</span>
              </div>
              <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#1c1b1b] mb-6">Complexity obscures operational truth.</h2>
            </div>
            <div className="lg:col-span-7 lg:pl-12 border-l border-[#c4c6cf]/30 flex items-center">
              <p className="text-[18px] text-[#43474e] leading-[1.6]">
                Financial institutions are navigating a paradox: unprecedented access to data alongside opaque, fragmented operations. Legacy systems and siloed decision-making frameworks create an environment where capital is trapped, and risk is identified reactively rather than proactively.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[12px] font-bold text-[#1c1b1b] uppercase tracking-widest mb-8 border-b border-[#c4c6cf] pb-4 flex items-center justify-between">
              <span>Diagnostic Focus: Where Value Leaks</span>
              <span className="material-symbols-outlined text-[#74777f]">tune</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-[#c4c6cf]/50 p-8 hover:border-[#775a19]/50 transition-colors group relative">
              <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[#775a19] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 mb-6 border border-[#c4c6cf] flex items-center justify-center rounded-sm group-hover:border-[#775a19] group-hover:text-[#775a19] transition-colors">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <h4 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-4">Capital Allocation</h4>
              <p className="text-[16px] text-[#43474e] mb-6">Inefficient deployment of tier-1 capital due to fragmented risk scoring.</p>
              <div className="mt-auto pt-4 border-t border-[#c4c6cf]/30">
                <span className="text-[12px] font-bold text-[#775a19] tracking-widest uppercase">Est. Leakage: 8-15%</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#c4c6cf]/50 p-8 hover:border-[#775a19]/50 transition-colors group relative">
              <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[#775a19] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 mb-6 border border-[#c4c6cf] flex items-center justify-center rounded-sm group-hover:border-[#775a19] group-hover:text-[#775a19] transition-colors">
                <span className="material-symbols-outlined">policy</span>
              </div>
              <h4 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-4">Compliance Friction</h4>
              <p className="text-[16px] text-[#43474e] mb-6">Manual regulatory reporting leading to delays and potential audit flags.</p>
              <div className="mt-auto pt-4 border-t border-[#c4c6cf]/30">
                <span className="text-[12px] font-bold text-[#ba1a1a] tracking-widest uppercase">Est. Delay: 20-40%</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#c4c6cf]/50 p-8 hover:border-[#775a19]/50 transition-colors group relative">
              <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[#775a19] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 mb-6 border border-[#c4c6cf] flex items-center justify-center rounded-sm group-hover:border-[#775a19] group-hover:text-[#775a19] transition-colors">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <h4 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-4">Data Latency</h4>
              <p className="text-[16px] text-[#43474e] mb-6">Decisions made on T-2 data, missing intraday market movements.</p>
              <div className="mt-auto pt-4 border-t border-[#c4c6cf]/30">
                <span className="text-[12px] font-bold text-[#775a19] tracking-widest uppercase">Risk Delta: High</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#000d22] border border-[#c4c6cf]/50 p-8 hover:border-[#e9c176]/50 transition-colors group relative">
              <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[#e9c176] opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 mb-6 border border-[#e9c176] text-[#e9c176] flex items-center justify-center rounded-sm">
                <span className="material-symbols-outlined">account_tree</span>
              </div>
              <h4 className="font-['Newsreader'] text-[24px] font-medium text-white mb-4">Process Bloat</h4>
              <p className="text-[16px] text-[#adc8f6] mb-6">Redundant operational layers executing non-value-add reconciliation.</p>
              <div className="mt-auto pt-4 border-t border-[#455f88]/30">
                <span className="text-[12px] font-bold text-[#e9c176] tracking-widest uppercase">Opex Drag: 12-18%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Execution */}
      <section className="py-12 px-10 bg-[#f6f3f2]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px w-8 bg-[#775a19]"></span>
            <span className="text-[12px] font-bold text-[#775a19] uppercase tracking-[0.2em]">How We Solve</span>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 relative">
            <div className="hidden lg:block absolute left-[27px] top-12 bottom-12 w-px bg-[#c4c6cf]"></div>
            
            {/* Step 1 */}
            <div className="lg:col-span-12 grid lg:grid-cols-12 gap-8 items-start relative z-10">
              <div className="lg:col-span-3 flex items-center gap-6 lg:gap-0 lg:flex-col lg:items-start">
                <div className="w-14 h-14 bg-white border-2 border-[#000d22] text-[#000d22] flex items-center justify-center font-['Newsreader'] text-[24px] font-semibold mb-6 shadow-[0_0_40px_rgba(0,0,0,0.03)] z-10">01</div>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b]">Diagnose</h3>
              </div>
              <div className="lg:col-span-9 bg-white p-8 border border-[#c4c6cf]/30 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-[16px] text-[#43474e] mb-6 leading-[1.5]">
                    We map your current operational architecture against institutional benchmarks. This is not a superficial health check; it is a forensic analysis of process flow, capital allocation matrices, and data latency.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#775a19] text-sm">check</span>
                      <span className="text-[16px] text-[#1c1b1b]">Capital flow topology mapping</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#775a19] text-sm">check</span>
                      <span className="text-[16px] text-[#1c1b1b]">Risk parameter auditing</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 h-48 bg-[#f0eded] border border-[#c4c6cf]/20 flex items-center justify-center overflow-hidden">
                  <div 
                    className="w-full h-full opacity-30 bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnJDuKhQBsl_un_SQ2LY1OMyOLZucYWxAR_hu_7gkQc_PnLzqlHYRBDpS2SbAEsYaii8BcEFdP0rHypFNjGvkVgPn0Cx-J24Ai78Gq6qwapSS3zKLlOrvtohGEQo69a8kC2N4quFbzQlaLIh6aDtkVDoi-UmWjPvgNyUbVM7YwItMTnByqxnVIa3leAafdBlQ6yGThk1hfqNaqBmZ2FbgdaDgI6f97EK6B80nA68ZxJ7-Fg3qHQNus4DKaH7QBZxssmZ5O7VxZs2g')" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="lg:col-span-12 grid lg:grid-cols-12 gap-8 items-start mt-12 relative z-10">
              <div className="lg:col-span-3 flex items-center gap-6 lg:gap-0 lg:flex-col lg:items-start">
                <div className="w-14 h-14 bg-white border border-[#74777f] text-[#74777f] flex items-center justify-center font-['Newsreader'] text-[24px] font-semibold mb-6 shadow-[0_0_40px_rgba(0,0,0,0.03)] z-10">02</div>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b]">Design</h3>
              </div>
              <div className="lg:col-span-9 bg-white p-8 border border-[#c4c6cf]/30">
                <p className="text-[16px] text-[#43474e] mb-6 leading-[1.5]">
                  Based on diagnostic findings, we engineer a target operating model. This involves redesigning governance structures, streamlining reporting pipelines, and establishing proactive risk mitigation protocols.
                </p>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[12px] font-bold text-[#1c1b1b] uppercase tracking-widest">Process Consolidation Target</span>
                      <span className="text-[12px] font-bold text-[#775a19] uppercase tracking-widest">35%</span>
                    </div>
                    <div className="h-1 w-full bg-[#f0eded]">
                      <div className="h-full bg-[#775a19] w-[35%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[12px] font-bold text-[#1c1b1b] uppercase tracking-widest">Automated Compliance Coverage</span>
                      <span className="text-[12px] font-bold text-[#775a19] uppercase tracking-widest">80%</span>
                    </div>
                    <div className="h-1 w-full bg-[#f0eded]">
                      <div className="h-full bg-[#775a19] w-[80%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="lg:col-span-12 grid lg:grid-cols-12 gap-8 items-start mt-12 relative z-10">
              <div className="lg:col-span-3 flex items-center gap-6 lg:gap-0 lg:flex-col lg:items-start">
                <div className="w-14 h-14 bg-white border border-[#74777f] text-[#74777f] flex items-center justify-center font-['Newsreader'] text-[24px] font-semibold mb-6 shadow-[0_0_40px_rgba(0,0,0,0.03)] z-10">03</div>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b]">Execute</h3>
              </div>
              <div className="lg:col-span-9 bg-[#000d22] p-8 border border-[#adc8f6]/20">
                <p className="text-[16px] text-[#adc8f6] mb-6 leading-[1.5]">
                  Strategy without execution is merely theory. We deploy embedded teams to drive implementation, manage stakeholder transition, and ensure the new models are operationalized without disrupting ongoing business functions.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 text-[12px] font-bold text-[#e9c176] uppercase tracking-widest border-b-2 border-[#e9c176] pb-1 hover:text-white hover:border-white transition-colors"
                >
                  View Implementation Framework
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-12 px-10 bg-[#fcf9f8]">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 relative aspect-square">
            <div 
              className="absolute inset-0 bg-cover bg-center border border-[#c4c6cf]/30 grayscale contrast-125" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAB4YusbkjB7twdXdHjMQzLC3GUpqRrdnWtHU_KxkE5FozY15GBq8nkV4j_0EnYqUjgZqOhgvonYKN1fmOlDbnrJfOM2v0yo4cfhQ9QwANjCaGa8SnUxm0uP5JaKBeWe6iMHGWnnpmLnQSde8nSehD7Dwamx32PXOdgQObOtVObv_uXpiQjcjPTma7Jia0Yi5g6VWJ_5KahX1KEUQ3UBIHOSN5u8sZfEOyCEQk58xxOLVwuwU4X6hdhVkQAqbmNNJWV07RkgYsLyA')" }}
            ></div>
            {/* Glass overlay stat box */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md border border-[#c4c6cf]/30 p-6 flex justify-between items-center">
              <div>
                <p className="text-[12px] font-bold text-[#43474e] uppercase tracking-widest mb-1">Capital Freed</p>
                <p className="font-['Newsreader'] text-[32px] text-[#1c1b1b]">$140M+</p>
              </div>
              <div className="h-12 w-px bg-[#c4c6cf]/50"></div>
              <div>
                <p className="text-[12px] font-bold text-[#43474e] uppercase tracking-widest mb-1">Timeline</p>
                <p className="font-['Newsreader'] text-[32px] text-[#1c1b1b]">6 Mos</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:pl-12 mb-12 lg:mb-0">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-[#775a19]"></span>
              <span className="text-[12px] font-bold text-[#775a19] uppercase tracking-[0.2em]">Featured Case Study</span>
            </div>
            <h2 className="font-['Newsreader'] text-[48px] font-semibold text-[#1c1b1b] mb-6 leading-tight">Restructuring Operational Risk for a Tier-1 NBFC.</h2>
            <p className="text-[18px] text-[#43474e] mb-8 leading-[1.6]">
              A leading Non-Banking Financial Company was constrained by legacy risk assessment models, resulting in over-capitalization of safe assets and under-pricing of risky portfolios. Strategos Elite deployed a forensic team to unbundle their risk architecture.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#775a19] shrink-0"></div>
                <p className="text-[16px] text-[#1c1b1b] leading-[1.5]"><strong className="font-bold">Challenge:</strong> Trapped capital and 45-day reporting lag causing regulatory friction.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#775a19] shrink-0"></div>
                <p className="text-[16px] text-[#1c1b1b] leading-[1.5]"><strong className="font-bold">Action:</strong> Redesigned dynamic risk-weighting protocols and automated compliance pipelines.</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#000d22] text-white text-[16px] font-medium px-8 py-4 rounded-none hover:bg-[#455f88] transition-colors"
            >
              Read Full Case Study
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankingFinancialServices;