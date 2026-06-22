import React, { useEffect, useState } from 'react';

const TraditionalToAgile = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden font-sans text-[14px] md:text-[16px]">
      {/* Hero Section */}
      <header className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#000f22]/60 z-10"></div>
          <img
            alt="Hero Background"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLuCS4b_VHyElK8pqB9Kc3TR94WQJyV9mG1e0qEsMbIQh9ot8KX8YC_ScOfR4Bx9AN_2WZqwVHZwGoYMOyKjcQzCiJ3j1t9wEY8r6i4CO5aRsWP_oQ7smgp2BmtsDkh2Gwuk41jDRDo1koYbmNtU-4x_loD2LU-txbxEaEO_toN1NeT0BO_bQUEtpQqHTBGTpH1zvjh9hJ8hEUM-kgc0a9KF79u8vdqJbKfBK_hJ5RmRokRzE3HOGQTG6w"
          />
        </div>
        <div className="relative z-20 px-6 md:px-12 lg:px-24 pb-16 md:pb-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-4 text-[#000f22]">
            <span className="font-mono text-[10px] md:text-[12px] tracking-[0.2em] uppercase">Volume 19</span>
            <span className="w-8 h-px bg-[#000f22]"></span>
            <span className="font-mono text-[10px] md:text-[12px] tracking-[0.2em]">28.6139° N, 77.2090° E</span>
          </div>
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-white max-w-4xl mb-6 md:mb-8 leading-tight">
            <strong>From Traditional to Agile:</strong> Internal Audit’s New Mandate
          </h1>
          <p className="text-[16px] md:text-[20px] lg:text-[24px] text-[#000f22] max-w-2xl font-light">
            Risk-Based Internal Audit (RBIA) as the new foundation of corporate governance in the Indian regulatory landscape.
          </p>
        </div>
        <div className="absolute bottom-10 right-6 md:right-12 lg:right-24 z-20">
          <div className="flex flex-col items-end gap-1 text-white/50">
            <span className="font-mono text-[10px] md:text-[12px]">STRATEGIC LEDGER</span>
            <span className="font-mono text-[10px] md:text-[12px]">Q4 FY24 REPORT</span>
          </div>
        </div>
      </header>

      <main className="relative z-10" role="main">
        {/* Editorial Content: Introduction */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-8 space-y-8 md:space-y-12">
              <div className="border-l-4 border-[#000f22] pl-6 md:pl-8">
                <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#000f22] mb-4">The Paradigm Shift</h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-700 leading-relaxed">
                  India’s corporate ecosystem is undergoing a tectonic shift. As the Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), and the Ministry of Corporate Affairs (MCA) tighten their oversight, the internal audit function is being repositioned. No longer a mere compliance checklist, it is now an agile, forward-looking strategic asset designed to detect systemic fragility before it crystallizes into crisis.
                </p>
              </div>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 leading-relaxed">
                The recent mandates emphasize that Internal Audit must move beyond historical reporting. The focus has pivoted toward <strong>Risk-Based Internal Audit (RBIA)</strong>, necessitating a structural overhaul of how boards interact with their assurance teams. With the integration of the Digital Personal Data Protection Act and evolving ESG norms, the auditor's scope now encompasses technological resilience and ethical governance alongside financial integrity.
              </p>
            </div>
            
            {/* Sidebar: Governance Gauge */}
            <div className="lg:col-span-4">
              <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl shadow-sm">
                <h3 className="text-[12px] md:text-[14px] font-semibold text-[#000f22] uppercase tracking-widest mb-6">Governance Mandate Gauge</h3>
                <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
                  <div className="absolute top-0 left-0 h-full bg-[#000f22]" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between font-mono text-[10px] md:text-[12px] text-gray-600">
                  <span>Assurance (60-75%)</span>
                  <span>Advisory (25-40%)</span>
                </div>
                <div className="mt-8 space-y-6">
                  <div className="p-4 border-l-2 border-[#000f22] bg-blue-50/50">
                    <p className="text-[12px] md:text-[14px] italic text-gray-700">"Critical for Banks, NBFCs, and Listed Entities to meet 2025 RBIA mandates."</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-mono text-[10px] md:text-[12px] uppercase text-[#000f22] mb-2">Key Risk Vectors</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-800">FRAUD</span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-800">CYBER</span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-800">ESG</span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-800">PRIVACY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emerging Mandates: 4-Module Grid */}
        <section className="py-16 md:py-24 bg-[#000f22] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold mb-12 md:mb-16 text-center">Emerging Mandates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl flex flex-col h-full hover:border-[#000f22] transition-colors border border-transparent">
                <span className="material-symbols-outlined text-[#000f22] mb-4 text-[36px] md:text-[40px]">cycle</span>
                <h3 className="text-[20px] md:text-[24px] font-semibold mb-4">Agile Cycles</h3>
                <p className="text-[14px] md:text-[16px] text-[#ffff]">Quarterly re-assessments and independent reporting lines to the Audit Committee.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl flex flex-col h-full hover:border-[#000f22] transition-colors border border-transparent">
                <span className="material-symbols-outlined text-[#000f22] mb-4 text-[36px] md:text-[40px]">psychology</span>
                <h3 className="text-[20px] md:text-[24px] font-semibold mb-4">AI &amp; Continuous</h3>
                <p className="text-[14px] md:text-[16px] text-[#ffff]">Deploying AI for 100% population testing and real-time control monitoring.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl flex flex-col h-full hover:border-[#000f22] transition-colors border border-transparent">
                <span className="material-symbols-outlined text-[#000f22] mb-4 text-[36px] md:text-[40px]">history_edu</span>
                <h3 className="text-[20px] md:text-[24px] font-semibold mb-4">Tenure Norms</h3>
                <p className="text-[14px] md:text-[16px] text-[#ffff]">Strict 3-year rotation and coverage norms to ensure forensic objectivity.</p>
              </div>
              {/* Card 4 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl flex flex-col h-full hover:border-[#000f22] transition-colors border border-transparent">
                <span className="material-symbols-outlined text-[#000f22] mb-4 text-[36px] md:text-[40px]">verified_user</span>
                <h3 className="text-[20px] md:text-[24px] font-semibold mb-4">RBIA Focus</h3>
                <p className="text-[14px] md:text-[16px] text-[#ffff]">Risk-Based Internal Audit (RBIA) as the mandatory foundation for governance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Implications: High-Contrast Panel */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row border border-gray-200">
              <div className="md:w-1/2 p-8 md:p-12 lg:p-16 bg-[#000f22] text-white flex flex-col justify-center">
                <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold mb-6">Strategic Implications</h2>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] opacity-80 leading-relaxed">
                  The shift from checklist-based auditing to strategic oversight requires a fundamental change in the "Auditor-Management" relationship. Boards must empower auditors to challenge strategic assumptions, not just verify operational outputs.
                </p>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 lg:p-16 grid grid-cols-1 gap-8 md:gap-12">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-[#000f22] font-bold text-[24px] md:text-[32px]">01</span>
                  <div>
                    <h4 className="text-[18px] md:text-[20px] font-bold text-[#000f22] mb-2">From Rearview to Radar</h4>
                    <p className="text-[14px] md:text-[16px] text-gray-600">Transitioning from post-mortem analysis to predictive risk signaling and early warning systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-[#000f22] font-bold text-[24px] md:text-[32px]">02</span>
                  <div>
                    <h4 className="text-[18px] md:text-[20px] font-bold text-[#000f22] mb-2">Governance Cohesion</h4>
                    <p className="text-[14px] md:text-[16px] text-gray-600">Aligning Internal Audit closely with the Risk Management Committee for a unified defense posture.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-[#000f22] font-bold text-[24px] md:text-[32px]">03</span>
                  <div>
                    <h4 className="text-[18px] md:text-[20px] font-bold text-[#000f22] mb-2">Value-Add Assurance</h4>
                    <p className="text-[14px] md:text-[16px] text-gray-600">Moving beyond 'negative assurance' to providing actionable strategic insights for business optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Northrop's Value Proposition */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#000f22]">Northrop's Forensic Edge</h2>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-700">
                Our RBIA framework is rooted in decades of forensic precision. We don't just audit; we apply a tactical lens to your governance structure, identifying the invisible fault lines that traditional methodologies miss.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#000f22] font-semibold text-[14px] md:text-[16px]">
                  <span className="material-symbols-outlined text-green-600" data-icon="check_circle">check_circle</span>
                  Proprietary Agile-Audit Framework
                </li>
                <li className="flex items-center gap-3 text-[#000f22] font-semibold text-[14px] md:text-[16px]">
                  <span className="material-symbols-outlined text-green-600" data-icon="check_circle">check_circle</span>
                  Real-time Forensic Monitoring Tools
                </li>
                <li className="flex items-center gap-3 text-[#000f22] font-semibold text-[14px] md:text-[16px]">
                  <span className="material-symbols-outlined text-green-600" data-icon="check_circle">check_circle</span>
                  Regulatory Liaison Expertise (RBI/SEBI)
                </li>
              </ul>
            </div>
            <div className="bg-[#000f22] p-8 md:p-12 rounded-xl border-l-8 border-[#000f22] shadow-2xl">
              <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-8">The Northrop Advantage</h3>
              <div className="space-y-6 text-[#000f22]">
                <div className="flex justify-between items-end border-b border-white/20 pb-3">
                  <span className="text-[12px] md:text-[14px] uppercase tracking-wider">Forensic Precision</span>
                  <span className="text-[18px] md:text-[24px] font-bold text-white">100% Digital</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/20 pb-3">
                  <span className="text-[12px] md:text-[14px] uppercase tracking-wider">Regulatory Liaison</span>
                  <span className="text-[18px] md:text-[24px] font-bold text-white">RBI/SEBI/MCA</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/20 pb-3">
                  <span className="text-[12px] md:text-[14px] uppercase tracking-wider">Risk Alignment</span>
                  <span className="text-[18px] md:text-[24px] font-bold text-white">GST/IBC/DPDP</span>
                </div>
              </div>
              <button className="mt-8 md:mt-12 w-full py-4 bg-white text-[#000f22] font-bold rounded-lg hover:bg-gray-100 transition-colors text-[14px] md:text-[16px]">
                Download Methodology Whitepaper
              </button>
            </div>
          </div>
        </section>

        {/* Operational Roadmap */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#000f22] mb-4">Operational Roadmap</h2>
              <p className="text-gray-600 text-[14px] md:text-[16px] lg:text-[18px] max-w-2xl mx-auto">
                A 4-step execution path for Indian enterprises to align with the new regulatory mandate.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gray-300 z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#000f22] flex items-center justify-center text-white font-bold text-[24px] md:text-[32px] mb-6 shadow-lg border-4 border-gray-50">01</div>
                <h4 className="text-[18px] md:text-[20px] font-bold text-[#000f22] mb-3">Charter Revision</h4>
                <p className="text-[14px] md:text-[16px] text-gray-600">Updating IA charters to reflect dynamic, risk-based scoping and frequency.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#000f22] flex items-center justify-center text-white font-bold text-[24px] md:text-[32px] mb-6 shadow-lg border-4 border-gray-50">02</div>
                <h4 className="text-[18px] md:text-[20px] font-bold text-[#000f22] mb-3">Team Upskilling</h4>
                <p className="text-[14px] md:text-[16px] text-gray-600">Bridging the gap in data analytics, forensic accounting, and ESG reporting.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#000f22] flex items-center justify-center text-white font-bold text-[24px] md:text-[32px] mb-6 shadow-lg border-4 border-gray-50">03</div>
                <h4 className="text-[18px] md:text-[20px] font-bold text-[#000f22] mb-3">Strategic Sync</h4>
                <p className="text-[14px] md:text-[16px] text-gray-600">Aligning audit plans with tax, GST, IBC, and privacy risk frameworks.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#000f22] flex items-center justify-center text-white font-bold text-[24px] md:text-[32px] mb-6 shadow-lg border-4 border-gray-50">04</div>
                <h4 className="text-[18px] md:text-[20px] font-bold text-[#000f22] mb-3">Quality Assessment</h4>
                <p className="text-[14px] md:text-[16px] text-gray-600">External Quality Assessments (EQA) to validate institutional independence.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Micro-interaction: Scroll indicator */}
      <div 
        className="fixed top-0 md:top-20 left-0 h-1 bg-[#000f22] z-50 transition-all duration-300" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default TraditionalToAgile;
