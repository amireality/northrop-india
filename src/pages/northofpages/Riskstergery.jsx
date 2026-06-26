import React from 'react';
import { Link } from 'react-router-dom';

const Riskstergery = () => {
  return (
    <div className="font-['Inter'] text-[#1b1c1c] bg-[#fbf9f9] min-h-screen">
      
      <main className="">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center bg-[#ffffff] overflow-hidden border-b-2 border-[#00113a]">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover " 
              alt="Modern university library architecture"
              src="/insituted/managmentassurance.jpeg"
            />
          </div>
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[64px] relative z-10 w-full">
            <div className="max-w-4xl">
              <span className="text-[12px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-6 block">
                PROGRAM DETAIL: RMIA-40
              </span>
              <h1 className="text-[48px] md:text-[72px] text-[#D4AF37] font-bold mb-8 leading-none">
                RISK MANAGEMENT & <br/>INSTITUTIONAL ASSURANCE
              </h1>
              <p className="text-[24px] md:text-[32px] font-semibold text-[#D4AF37] max-w-2xl mb-12 border-l-4 border-[#D4AF37] pl-8 italic font-light leading-[1.3]">
                The Architecture of Financial Resilience
              </p>
              <div className="flex flex-wrap gap-6">
                <Link 
                  to="/contact" 
                  className="bg-[#00113a] text-white px-10 py-5 text-[12px] font-semibold uppercase tracking-widest border-[3px] border-[#00113a] hover:bg-white hover:text-[#00113a] transition-all text-center"
                >
                  APPLY FOR COHORT
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent text-[#D4AF37] px-10 py-5 text-[12px] font-semibold uppercase tracking-widest border-[3px] border-[#00113a] hover:bg-[#00113a] hover:text-white transition-all text-center"
                >
                  DOWNLOAD SYLLABUS
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-[128px] bg-white">
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[64px]">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h2 className="text-[12px] font-semibold uppercase tracking-widest text-[#D4AF37] mb-8">The Northrop Standard</h2>
                <blockquote className="text-[32px] md:text-[48px] font-black text-[#00113a] leading-tight">
                  "Risk management is not about 'saying no' to opportunities. It is about building the structural integrity that allows a firm to say <span className="text-[#D4AF37]">'yes'</span> to bigger bets."
                </blockquote>
              </div>
              <div className="md:col-span-5 h-full flex flex-col justify-end">
                <p className="text-[20px] font-normal text-[#444650] border-t-[3px] border-[#00113a] pt-8 leading-[1.6]">
                  We train leaders to view risk as a design challenge. Our curriculum moves beyond compliance into the realm of strategic architecture, where institutional assurance becomes a competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Risk Matrix (Visual) */}
        <section className="py-[128px] bg-[#fbf9f9]">
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[64px]">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
              <div>
                <h2 className="text-[32px] md:text-[48px] font-bold text-[#00113a] mb-4">Strategic Heat Map</h2>
                <p className="text-[16px] text-[#444650] font-normal uppercase tracking-widest">CURRICULUM IMPACT VS. LIKELIHOOD ANALYSIS</p>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#00113a]"></div> <span className="text-[10px] uppercase font-bold">High Impact</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#D4AF37]"></div> <span className="text-[10px] uppercase font-bold">Strategic Focus</span></div>
              </div>
            </div>
            
            <div className="grid grid-cols-5 grid-rows-5 h-[400px] md:h-[600px] border-[3px] border-[#00113a] bg-white relative overflow-x-auto min-w-[300px]">
              {/* Labels */}
              <div className="absolute -left-12 top-1/2 -rotate-90 text-[12px] font-semibold uppercase tracking-widest text-[#00113a] hidden md:block">Impact</div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[12px] font-semibold uppercase tracking-widest text-[#00113a] hidden md:block">Likelihood</div>
              
              {/* Grid Cells (simplified representation) */}
              {[...Array(25)].map((_, idx) => {
                const cellContent = {
                  2: { label: "IFC FRAMEWORKS", color: "bg-[#00113a] text-white" },
                  8: { label: "CYBER RISK", color: "bg-white text-[#00113a]" },
                  10: { label: "HEDGING", color: "bg-[#00113a] text-white" },
                  18: { label: "SOX COMPLIANCE", color: "bg-[#D4AF37] text-white" },
                  22: { label: "DERIVATIVES", color: "bg-white text-[#00113a]" },
                }[idx];

                const specialBg = [0, 4, 6, 12, 24].includes(idx) ? (idx === 0 || idx === 10 ? 'bg-[#00113a]/5' : (idx === 4 || idx === 6 || idx === 12 ? 'bg-[#D4AF37]/10' : '')) : '';

                return (
                  <div key={idx} className={`border-r border-b border-[#e3e2e2] flex items-center justify-center p-2 ${specialBg}`}>
                    {cellContent && (
                      <div className={`${cellContent.color} p-2 md:p-4 text-[10px] md:text-[12px] font-semibold text-center border-2 border-[#00113a] w-full max-w-[120px] shadow-md`}>
                        {cellContent.label}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-[128px] bg-white">
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[64px]">
            <h2 className="text-[32px] md:text-[48px] font-bold text-[#00113a] mb-20">Program Curriculum</h2>
            <div className="space-y-8">
              {[
                { 
                  id: "01", 
                  title: "The Defensive Architecture", 
                  subtitle: "[INTERNAL CONTROLS & ASSURANCE]", 
                  desc: "Master the rigid frameworks that safeguard institutional value through process re-engineering and robust RBIA methods.",
                  tags: ["IFC / ICFR", "SOX COMPLIANCE", "PROCESS RE-ENGINEERING"]
                },
                { 
                  id: "02", 
                  title: "Strategic Survival", 
                  subtitle: "[ERM & STRESS TESTING]", 
                  desc: "Implement enterprise-wide risk management strategies that utilize stress testing and scenario analysis for predictive resilience.",
                  tags: ["ERM FRAMEWORKS", "SCENARIO ANALYSIS", "RCSA PROTOCOLS"]
                },
                { 
                  id: "03", 
                  title: "The Digital Fortress", 
                  subtitle: "[CYBER, IT & SYSTEM INTEGRITY]", 
                  desc: "Securing the modern enterprise requires an integrated approach to IT assurance and the management of AI-driven automation risks.",
                  tags: ["IT ASSURANCE", "SYSTEM INTEGRITY", "AI RISK MITIGATION"]
                },
                { 
                  id: "04", 
                  title: "Hedging & Capital", 
                  subtitle: "[DERIVATIVES & REGULATORY CAPITAL]", 
                  desc: "Advanced strategies for capital preservation, derivative instrument hedging, and the transformation of the modern audit.",
                  tags: ["SWAPS & FUTURES", "REGULATORY CAPITAL", "AUDIT TRANSFORMATION"]
                }
              ].map((module) => (
                <div key={module.id} className="grid grid-cols-1 md:grid-cols-12 border-[3px] border-[#00113a] group hover:bg-[#002366] transition-colors duration-300">
                  <div className="md:col-span-4 p-8 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#00113a] group-hover:border-white/20">
                    <span className="text-[32px] font-semibold text-[#D4AF37] block mb-4">{module.id}</span>
                    <h3 className="text-[24px] md:text-[32px] font-semibold text-[#00113a] group-hover:text-white uppercase leading-tight">{module.title}</h3>
                    <p className="text-[12px] font-semibold text-[#595f67] group-hover:text-[#758dd5] mt-2 uppercase tracking-widest">{module.subtitle}</p>
                  </div>
                  <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-[18px] md:text-[20px] text-[#00113a] group-hover:text-white mb-6 leading-relaxed">{module.desc}</p>
                    <div className="flex flex-wrap gap-4">
                      {module.tags.map((tag) => (
                        <span key={tag} className="px-4 py-1 border border-[#00113a] group-hover:border-white text-[#00113a] group-hover:text-white text-[12px] font-semibold tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Callouts */}
        <section className="py-[128px] bg-[#fbf9f9]">
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[64px]">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 md:p-12 border-[3px] border-[#D4AF37] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 font-black text-[#D4AF37] opacity-10 text-8xl pointer-events-none group-hover:scale-110 transition-transform">01</div>
                <h4 className="text-[12px] font-semibold text-[#D4AF37] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                  Practitioner’s Insight
                </h4>
                <h5 className="text-[24px] md:text-[32px] font-semibold text-[#00113a] mb-6">Implementation: ERM for Mid-Cap Infra</h5>
                <p className="text-[16px] text-[#444650] mb-8 leading-relaxed">
                  Learn the tactical sequence used to deploy an Enterprise Risk Management framework for a $2B infrastructure firm, moving from fragmented silos to a unified reporting terminal in 18 months.
                </p>
                <Link to="/contact" className="text-[12px] text-[#00113a] underline underline-offset-4 font-bold tracking-widest hover:text-[#D4AF37] transition-colors">
                  VIEW CASE STUDY
                </Link>
              </div>
              <div className="bg-[#00113a] p-8 md:p-12 border-[3px] border-[#00113a] relative overflow-hidden">
                <h4 className="text-[12px] font-semibold text-[#D4AF37] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  Technical Bulletin
                </h4>
                <h5 className="text-[24px] md:text-[32px] font-semibold text-white mb-6">The Audit Transformation</h5>
                <p className="text-[16px] text-[#758dd5] mb-8 leading-relaxed">
                  A deep dive into how continuous monitoring tools and AI-assisted assurance are replacing traditional sample-based auditing, providing 100% data coverage for institutional security.
                </p>
                <Link to="/contact" className="text-[12px] text-white underline underline-offset-4 font-bold tracking-widest hover:text-[#D4AF37] transition-colors">
                  DOWNLOAD WHITE PAPER
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery / Visual Spacer */}
        <section className="h-[400px] md:h-[600px] w-full overflow-hidden border-y-2 border-[#00113a]">
          <img 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
            alt="Minimalist corporate headquarters"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGimZDQlVge1fiKy7LzhuvDTiBmNqk8TjO8dSirAhwD55sgIJsHeTnnnLQdXkhxuHbfDzJx67RveLmoMw26asyUDQfb8qSkkk6X0uK5DBMavcRtsTYavHWGsQzxozSmpbKrIshXpc4pD9jI4XAESYMGxer6XdcktgRuxFL5LHh7zIkcUug_FAp5P9mQdkQizaggTpUwT_Z039NX8o15S680DmS3_Ud7bmtc9Ybtld02RucRRRdeRkf2g3yw0sYFcUcjyIS-w_LeQ"
          />
        </section>

        {/* Closing CTA Section */}
        <section className="py-[128px] bg-white text-center px-[24px]">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-[32px] md:text-[48px] font-bold text-[#00113a] mb-8 uppercase tracking-tighter">Secure the Future.</h2>
             <p className="text-[20px] text-[#444650] mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
               Join the next cohort of institutional leaders. Master the mechanics of global assurance and tactical risk management.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-[#00113a] text-white px-12 py-6 text-[12px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all brutalist-shadow text-center">
                  APPLY FOR COHORT
                </Link>
                <Link to="/contact" className="border-4 border-[#00113a] text-[#00113a] px-12 py-6 text-[12px] font-bold uppercase tracking-widest hover:bg-[#00113a] hover:text-white transition-all text-center">
                  DOWNLOAD SYLLABUS
                </Link>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Riskstergery;