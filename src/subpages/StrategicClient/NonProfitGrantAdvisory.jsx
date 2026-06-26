import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NonProfitGrantAdvisory = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter'] antialiased selection:bg-[#fed488] selection:text-[#785a1a]">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-10 py-12 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[12px] font-bold text-[#775a19] mb-4 block uppercase tracking-widest">Non-Profit & Grant Advisory</span>
            <h1 className="font-['Newsreader'] text-[48px] font-semibold text-[#000d22] mb-6 leading-[1.1] tracking-[-0.02em]">
              Ensure Every Rupee is Accountable, Traceable, and Fundable.
            </h1>
            <p className="text-[18px] text-[#43474e] mb-8 max-w-xl leading-[1.6]">
              Institutional trust is built on radical transparency. We engineer governance and reporting frameworks that secure long-term funding and eliminate compliance risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-[#000d22] text-white text-[16px] font-medium px-8 py-3 rounded-none hover:opacity-90 transition-opacity text-center"
              >
                Discuss your situation
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border border-[#000d22] text-[#000d22] text-[16px] font-medium px-8 py-3 rounded-none hover:bg-[#f6f3f2] transition-colors text-center"
              >
                30-min diagnostic
              </button>
            </div>
          </div>
          <div className="relative h-[500px] bg-[#e5e2e1] rounded-none overflow-hidden border border-[#c4c6cf]/30">
            <img 
              alt="Corporate advisory" 
              className="w-full h-full object-cover grayscale opacity-80" 
              src="/industryimg/non-profi.jpeg" 
            />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-4">
                <div>
                  <span className="text-[10px] font-bold text-[#e9c176] uppercase block mb-1">Outcome</span>
                  <span className="text-[14px] text-white font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-sm">arrow_upward</span> Donor Trust</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#e9c176] uppercase block mb-1">Outcome</span>
                  <span className="text-[14px] text-white font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-sm">arrow_downward</span> Compliance Risk</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#e9c176] uppercase block mb-1">Outcome</span>
                  <span className="text-[14px] text-white font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-sm">arrow_upward</span> Funding Continuity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Leaks (Reality) */}
      <section className="bg-[#f6f3f2] py-12 border-y border-[#c4c6cf]/30">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#000d22] mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-[#775a19] inline-block"></span>
              The Reality of Value Leaks
            </h2>
            <p className="text-[16px] text-[#43474e] leading-[1.6]">
              Without rigorous oversight, non-profits face existential threats from regulatory scrutiny and donor fatigue. We identify and seal critical vulnerabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Leak 1 */}
            <div className="bg-white p-6 border border-[#c4c6cf]/30 hover:border-[#000d22]/20 transition-colors group">
              <div className="w-12 h-12 bg-[#ffdad6] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#ba1a1a]">policy</span>
              </div>
              <h3 className="font-['Newsreader'] text-[20px] font-medium text-[#000d22] mb-2 border-l-2 border-[#775a19] pl-3">Governance Failures</h3>
              <p className="text-[14px] text-[#43474e] leading-[1.5]">FCRA and registration risks leading to immediate operational suspension.</p>
            </div>
            {/* Leak 2 */}
            <div className="bg-white p-6 border border-[#c4c6cf]/30 hover:border-[#000d22]/20 transition-colors group">
              <div className="w-12 h-12 bg-[#e5e2e1] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#000d22]">cancel</span>
              </div>
              <h3 className="font-['Newsreader'] text-[20px] font-medium text-[#000d22] mb-2 border-l-2 border-[#775a19] pl-3">Funding Rejection</h3>
              <p className="text-[14px] text-[#43474e] leading-[1.5]">Weak reporting structures resulting in denied grant renewals or scale-up capital.</p>
            </div>
            {/* Leak 3 */}
            <div className="bg-white p-6 border border-[#c4c6cf]/30 hover:border-[#000d22]/20 transition-colors group">
              <div className="w-12 h-12 bg-[#e5e2e1] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#000d22]">account_tree</span>
              </div>
              <h3 className="font-['Newsreader'] text-[20px] font-medium text-[#000d22] mb-2 border-l-2 border-[#775a19] pl-3">Poor Fund Tracking</h3>
              <p className="text-[14px] text-[#43474e] leading-[1.5]">Inability to trace specific rupee utilization against donor-mandated KPIs.</p>
            </div>
            {/* Leak 4 */}
            <div className="bg-white p-6 border border-[#c4c6cf]/30 hover:border-[#000d22]/20 transition-colors group">
              <div className="w-12 h-12 bg-[#ffdad6] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#ba1a1a]">warning</span>
              </div>
              <h3 className="font-['Newsreader'] text-[20px] font-medium text-[#000d22] mb-2 border-l-2 border-[#775a19] pl-3">Audit Flags</h3>
              <p className="text-[14px] text-[#43474e] leading-[1.5]">Systemic accounting errors triggering institutional audits and reputational damage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Intelligence Bento */}
      <section className="max-w-[1280px] mx-auto px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Methodology */}
          <div className="lg:col-span-7 bg-white border border-[#c4c6cf]/30 p-8 flex flex-col justify-between">
            <div>
              <span className="text-[12px] font-bold text-[#775a19] mb-4 block uppercase tracking-widest">Methodology</span>
              <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#000d22] mb-6">Fund Flow to Reporting Framework</h2>
              <p className="text-[16px] text-[#43474e] mb-8 leading-[1.6]">
                Our MECE approach ensures comprehensive coverage from capital receipt to final impact report.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#f6f3f2] border border-[#c4c6cf]/20">
                <span className="text-[12px] font-bold text-[#775a19] w-8 pt-1">01</span>
                <div>
                  <h4 className="text-[16px] font-bold text-[#000d22]">Intake & Allocation Matrix</h4>
                  <p className="text-[14px] text-[#43474e] leading-[1.5]">Rigorous tagging of incoming funds to specific project codes and compliance requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#f6f3f2] border border-[#c4c6cf]/20">
                <span className="text-[12px] font-bold text-[#775a19] w-8 pt-1">02</span>
                <div>
                  <h4 className="text-[16px] font-bold text-[#000d22]">Utilization Tracking</h4>
                  <p className="text-[14px] text-[#43474e] leading-[1.5]">Real-time expenditure monitoring against approved budgetary thresholds.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#f6f3f2] border border-[#c4c6cf]/20">
                <span className="text-[12px] font-bold text-[#775a19] w-8 pt-1">03</span>
                <div>
                  <h4 className="text-[16px] font-bold text-[#000d22]">Audit-Ready Reporting</h4>
                  <p className="text-[14px] text-[#43474e] leading-[1.5]">Automated generation of donor-specific and regulatory compliance documents.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Industry Intelligence Grid */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[#000d22] p-8 flex-1 text-white">
              <span className="text-[12px] font-bold text-[#e9c176] mb-4 block uppercase tracking-widest">Case Snapshot</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium mb-4">$50M Grant Stabilization</h3>
              <p className="text-[14px] text-[#adc8f6] mb-6 leading-[1.6]">
                Restructured the financial reporting framework for a global health NGO, reversing a critical funding freeze and securing multi-year renewals.
              </p>
              <button onClick={() => navigate('/contact')} className="text-[14px] font-bold text-[#e9c176] hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest">
                View Full Case <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="bg-white border border-[#c4c6cf]/30 p-8 flex-1">
              <span className="text-[12px] font-bold text-[#775a19] mb-4 block uppercase tracking-widest">Industry Intelligence</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Future Reports & Insights</h3>
              <ul className="space-y-4">
                <li className="border-b border-[#c4c6cf]/20 pb-4">
                  <button onClick={() => navigate('/contact')} className="group block text-left">
                    <span className="text-[16px] text-[#43474e] block mb-1 group-hover:text-[#000d22] transition-colors">The FCRA Compliance Landscape 2025</span>
                    <span className="text-[12px] font-bold text-[#74777f] uppercase tracking-widest">Q3 Publication</span>
                  </button>
                </li>
                <li className="pt-2">
                  <button onClick={() => navigate('/contact')} className="group block text-left">
                    <span className="text-[16px] text-[#43474e] block mb-1 group-hover:text-[#000d22] transition-colors">Optimizing Overhead Ratios in Mega-Grants</span>
                    <span className="text-[12px] font-bold text-[#74777f] uppercase tracking-widest">Q4 Publication</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NonProfitGrantAdvisory;