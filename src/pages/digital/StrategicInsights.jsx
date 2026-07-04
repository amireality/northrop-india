import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const StrategicInsights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>The Strategy Ledger | Northrop India</title>
      </Helmet>
      <main className=" text-white">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Cinematic architectural glass facade with technical data overlays." 
              className="w-full h-full object-cover" 
              src="/digitalimg/digitalinsight.jpeg"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-5xl mx-auto">
            {/* <div className="inline-block py-1 px-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-80">// STRATEGIC_ASSET_CLASS</span>
            </div> */}
            <h1 className="font-['Noto_Serif',serif] text-5xl md:text-7xl lg:text-8xl italic font-bold mb-8 leading-[0.9] uppercase tracking-tighter drop-shadow-lg">
              THE STRATEGY LEDGER
            </h1>
            <p className="text-lg md:text-xl opacity-70 max-w-xl mx-auto uppercase tracking-widest font-light">
              Forensic Intelligence &amp; Predictive Governance
            </p>
            <div className="mt-16 flex justify-center">
              <div className="w-px h-16 bg-gradient-to-b from-white to-transparent opacity-30"></div>
            </div>
          </div>
        </section>

        {/* The Mandate */}
        <section className="py-32 bg-[#fcf9f8] text-[#1c1b1b]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="font-mono text-[11px] text-[#43474f] block mb-6 uppercase tracking-[0.2em]">Mandate_Index_01</span>
                <h2 className="font-['Noto_Serif',serif] text-[36px] md:text-[40px] text-[#001736] mb-8 leading-tight font-bold">
                  Institutional Shift Toward Forensic-Grade Decisioning
                </h2>
              </div>
              <div className="space-y-6 pt-2">
                <p className="text-[18px] text-[#43474f] leading-relaxed">
                  In an era of unprecedented volatility, traditional risk assessment is insufficient. Northrop India's 2026 mandate shifts the paradigm from retrospective reporting to <span className="text-[#001736] font-semibold">active forensic oversight</span>.
                </p>
                <p className="text-[18px] text-[#43474f] leading-relaxed opacity-90">
                  We provide the institutional weight required to navigate the convergence of local compliance and international rigor, ensuring capital remains resilient against structural shifts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="py-32 bg-white border-y border-[#c4c6d0]/30 text-[#1c1b1b]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-20">
              <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] font-bold">Strategic Pillars</h2>
              <span className="font-mono text-[10px] text-[#43474f] tracking-widest uppercase mt-2 md:mt-0">CORE_STRUCTURAL_RESILIENCE_V.4.0</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Pillar 1 */}
              <div className="group">
                <div className="mb-8 w-12 h-12 flex items-center justify-center bg-[#001736] text-white rounded-sm group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-2xl">security</span>
                </div>
                <h3 className="font-['Noto_Serif',serif] text-[24px] text-[#001736] mb-6 font-semibold">Forensic Intelligence</h3>
                <p className="text-[16px] text-[#43474f] leading-relaxed mb-8 opacity-90">
                  Deep-dive data validation and risk mitigation through proprietary investigative protocols and high-integrity data streams.
                </p>
                <div className="pt-6 border-t border-[#c4c6d0]/40 space-y-3">
                  <div className="flex items-center text-[11px] font-mono text-[#43474f] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#5493f0] rounded-full mr-3"></span> Data Lineage Verification
                  </div>
                  <div className="flex items-center text-[11px] font-mono text-[#43474f] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#5493f0] rounded-full mr-3"></span> Exposure Audits
                  </div>
                </div>
              </div>
              {/* Pillar 2 */}
              <div className="group">
                <div className="mb-8 w-12 h-12 flex items-center justify-center bg-[#001736] text-white rounded-sm group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-2xl">query_stats</span>
                </div>
                <h3 className="font-['Noto_Serif',serif] text-[24px] text-[#001736] mb-6 font-semibold">Predictive Modeling</h3>
                <p className="text-[16px] text-[#43474f] leading-relaxed mb-8 opacity-90">
                  Anticipating regulatory shifts and market volatility using macro-econometric analysis tailored for Indian capital markets.
                </p>
                <div className="pt-6 border-t border-[#c4c6d0]/40 space-y-3">
                  <div className="flex items-center text-[11px] font-mono text-[#43474f] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#5493f0] rounded-full mr-3"></span> Policy Impact Simulation
                  </div>
                  <div className="flex items-center text-[11px] font-mono text-[#43474f] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#5493f0] rounded-full mr-3"></span> Stress Testing
                  </div>
                </div>
              </div>
              {/* Pillar 3 */}
              <div className="group">
                <div className="mb-8 w-12 h-12 flex items-center justify-center bg-[#001736] text-white rounded-sm group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-2xl">gavel</span>
                </div>
                <h3 className="font-['Noto_Serif',serif] text-[24px] text-[#001736] mb-6 font-semibold">Regulatory Alignment</h3>
                <p className="text-[16px] text-[#43474f] leading-relaxed mb-8 opacity-90">
                  Navigating the convergence of domestic SEBI/RBI mandates with global ESG and forensic standards (FATF/SEC).
                </p>
                <div className="pt-6 border-t border-[#c4c6d0]/40 space-y-3">
                  <div className="flex items-center text-[11px] font-mono text-[#43474f] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#5493f0] rounded-full mr-3"></span> Cross-Border Compliance
                  </div>
                  <div className="flex items-center text-[11px] font-mono text-[#43474f] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#5493f0] rounded-full mr-3"></span> Governance Audits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insight Stream */}
        <section className="py-32 bg-[#fcf9f8] text-[#1c1b1b]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="font-mono text-[11px] text-[#5493f0] block mb-4 uppercase tracking-[0.3em]">Protocol_Execution_Feed</span>
                <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] mb-4 font-bold">The Insight Stream</h2>
                <p className="text-[#43474f] font-light text-[18px]">Authenticated forensic reports and predictive modeling ledger.</p>
              </div>
              <div className="flex items-center space-x-6 border-b border-[#c4c6d0] pb-2">
                <span className="font-mono text-[10px] text-[#43474f] uppercase tracking-widest">Filter_Vault:</span>
                <select className="bg-transparent border-none text-[12px] font-mono font-bold focus:ring-0 cursor-pointer uppercase py-0 pr-8 outline-none">
                  <option>ALL_REPORTS</option>
                  <option>FORENSIC_GRADE</option>
                  <option>ESG_ALPHA</option>
                  <option>REGULATORY_DELTA</option>
                </select>
              </div>
            </div>
            
            <div className="divide-y divide-[#c4c6d0]/50">
              {/* Report Item 1 */}
              <Link to="/contact" className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between group hover:bg-white transition-all px-6 -mx-6 rounded-lg cursor-pointer block">
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 w-full">
                  <div className="font-mono text-[10px] text-[#43474f] w-16 shrink-0">091/26</div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#001736] text-white px-2 py-0.5 text-[10px] font-mono uppercase tracking-tighter">Forensic Grade</span>
                      <span className="border border-[#c4c6d0] text-[#43474f] px-2 py-0.5 text-[10px] font-mono uppercase tracking-tighter">Protocol v.2026</span>
                    </div>
                    <h4 className="font-['Noto_Serif',serif] text-[24px] text-[#001736] mb-2 font-semibold group-hover:translate-x-2 transition-transform duration-300">Beyond the Narrative</h4>
                    <p className="text-[16px] text-[#43474f] max-w-xl">Deep auditing of anomalies in emerging tech equity pools.</p>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 shrink-0">
                  <button className="font-mono text-[10px] uppercase tracking-widest py-3 px-6 border border-[#001736] text-[#001736] group-hover:bg-[#001736] group-hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer">
                    Execute Protocol <span className="material-symbols-outlined text-[14px]">arrow_forward_ios</span>
                  </button>
                </div>
              </Link>

              {/* Report Item 2 */}
              <Link to="/contact" className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between group hover:bg-white transition-all px-6 -mx-6 rounded-lg cursor-pointer block">
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 w-full">
                  <div className="font-mono text-[10px] text-[#43474f] w-16 shrink-0">114/26</div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#001736] text-white px-2 py-0.5 text-[10px] font-mono uppercase tracking-tighter">Alpha Intel</span>
                      <span className="border border-[#c4c6d0] text-[#43474f] px-2 py-0.5 text-[10px] font-mono uppercase tracking-tighter">Q3 Assessment</span>
                    </div>
                    <h4 className="font-['Noto_Serif',serif] text-[24px] text-[#001736] mb-2 font-semibold group-hover:translate-x-2 transition-transform duration-300">ESG as Alpha</h4>
                    <p className="text-[16px] text-[#43474f] max-w-xl">Quantifying sustainable governance as a primary capital growth driver.</p>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 shrink-0">
                  <button className="font-mono text-[10px] uppercase tracking-widest py-3 px-6 border border-[#001736] text-[#001736] group-hover:bg-[#001736] group-hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer">
                    Execute Protocol <span className="material-symbols-outlined text-[14px]">arrow_forward_ios</span>
                  </button>
                </div>
              </Link>

              {/* Report Item 3 */}
              <Link to="/contact" className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between group hover:bg-white transition-all px-6 -mx-6 rounded-lg cursor-pointer block">
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 w-full">
                  <div className="font-mono text-[10px] text-[#43474f] w-16 shrink-0">078/26</div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#001736] text-white px-2 py-0.5 text-[10px] font-mono uppercase tracking-tighter">Regulatory</span>
                      <span className="border border-[#c4c6d0] text-[#43474f] px-2 py-0.5 text-[10px] font-mono uppercase tracking-tighter">FCRA Master</span>
                    </div>
                    <h4 className="font-['Noto_Serif',serif] text-[24px] text-[#001736] mb-2 font-semibold group-hover:translate-x-2 transition-transform duration-300">FCRA Compliance Mastery</h4>
                    <p className="text-[16px] text-[#43474f] max-w-xl">Navigating foreign contribution regulations with institutional precision.</p>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 shrink-0">
                  <button className="font-mono text-[10px] uppercase tracking-widest py-3 px-6 border border-[#001736] text-[#001736] group-hover:bg-[#001736] group-hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer">
                    Execute Protocol <span className="material-symbols-outlined text-[14px]">arrow_forward_ios</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Executive CTA */}
        <section className="py-40 bg-[#001736] relative overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Background pattern" 
              className="w-full h-full object-cover opacity-20 grayscale brightness-50" 
              src="/digitalimg/digitalinsight.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001736] via-[#001736]/80 to-[#001736]"></div>
          </div>
          <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center relative z-10">
            <span className="font-mono text-[10px] text-white/50 block mb-8 uppercase tracking-[0.5em]">SECURE_ACCESS_GATEWAY</span>
            <h2 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] lg:text-[64px] text-white mb-8 uppercase italic font-bold tracking-tight leading-tight">
              Accessing the Ledger
            </h2>
            <p className="text-white/80 text-[18px] mb-16 max-w-2xl mx-auto leading-relaxed">
              Registration required for detailed forensic appendices, high-resolution predictive models, and quarterly stress-test results.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full md:w-auto">
                <button className="w-full bg-white text-[#001736] px-12 py-5 font-mono text-[12px] font-bold uppercase tracking-widest hover:bg-[#d6e3ff] transition-all transform hover:-translate-y-1 cursor-pointer">
                  Download Protocol
                </button>
              </Link>
              <Link to="/contact" className="w-full md:w-auto">
                <button className="w-full border border-white/30 text-white px-12 py-5 font-mono text-[12px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all transform hover:-translate-y-1 cursor-pointer">
                  Request Briefing
                </button>
              </Link>
            </div>
            <div className="mt-20 font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] flex flex-col md:flex-row justify-center gap-4 md:gap-12">
              <span>ENCRYPTION: AES-256 SECURED</span>
              <span className="hidden md:inline">|</span>
              <span>AUTHORIZATION: NORTHROP_INDIA_DELHI</span>
              <span className="hidden md:inline">|</span>
              <span>SESSION_STATUS: ENCRYPTED</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default StrategicInsights;