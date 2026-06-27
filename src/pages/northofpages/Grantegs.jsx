import { Link } from 'react-router-dom';

const Grantegs = () => {
  return (
    <div className="font-sans text-[#1b1c1c] bg-[#fbf9f9] min-h-screen">
    
      <main className="">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] md:h-[800px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover " 
              alt="Modern high-tech greenhouse architecture"
              src="/insituted/grant-funding-esg.jpeg"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-[#166534] text-white px-3 py-1 font-black text-[10px] uppercase tracking-widest">PROFESSIONAL PROGRAM</span>
                <span className="text-[12px] uppercase text-[#ffff] font-bold">Executive Cohort 2026</span>
              </div>
              <h1 className="text-[48px] md:text-[72px] text-[#ffff] mb-6 font-black leading-[0.95] tracking-tighter">GRANT FUNDING, ESG & SUSTAINABLE FINANCE</h1>
              <h2 className="text-[24px] md:text-[32px] text-[#ffff] mb-8 italic font-bold">Mastering the Impact Machine: The Mechanics of Impact Capital</h2>
              <p className="text-[18px] md:text-[20px] text-[#ffff] max-w-2xl border-l-4 border-[#22C55E] pl-8 mb-12">
                Designed for <span className="font-bold text-[#ffff]">Section 8 Leaders</span> and <span className="font-bold text-[#ffff]">Social Architects</span>. Engineering systemic change through rigorous capital redirection and the architectural mastery of blended finance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="gradient-accent text-white px-12 py-5 text-[14px] font-bold uppercase brutalist-shadow-green hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all block w-fit mx-auto md:mx-0 text-center">
                  Apply for the Cohort
                </Link>
                <Link to="/contact" className="bg-white text-[#00113a] px-10 py-5 text-[14px] font-bold uppercase brutalist-border hover:bg-[#00113a] hover:text-white transition-all block text-center">
                  Download Prospectus
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Mix Visualization */}
        <section className="py-24 md:py-32 container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-5">
              <h2 className="text-[12px] uppercase text-[#166534] font-bold mb-4 tracking-widest">Phase 01 / Financial Engineering</h2>
              <h3 className="text-[36px] md:text-[48px] text-[#00113a] mb-8 font-black leading-none">THE BLENDED FINANCE MIX</h3>
              <p className="text-[16px] text-[#444650] mb-12 leading-relaxed">Sustainable finance requires a radical rethinking of the capital stack. We deconstruct the "Iron Wall" between philanthropic grants and institutional liquidity for Section 8 owners seeking high-stakes growth.</p>
              
              {/* Brutalist Chart */}
              <div className="relative w-full aspect-video flex items-end gap-2 p-6 bg-[#f5f3f3] brutalist-border overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#166534 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }}></div>
                <div className="flex-1 bg-[#00113a] relative h-[70%] group transition-all hover:brightness-125 cursor-help">
                  <div className="absolute -top-12 left-0 w-full text-center text-[10px] font-black uppercase text-[#00113a] leading-tight">Commercial<br/>Capital</div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-black text-2xl">70%</div>
                </div>
                <div className="flex-1 gradient-accent relative h-[40%] group transition-all hover:scale-105 cursor-help">
                  <div className="absolute -top-12 left-0 w-full text-center text-[10px] font-black uppercase text-[#166534] leading-tight">Impact<br/>Equity</div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-black text-2xl">20%</div>
                </div>
                <div className="flex-1 bg-[#22C55E] relative h-[15%] group transition-all hover:scale-110 cursor-help">
                  <div className="absolute -top-12 left-0 w-full text-center text-[10px] font-black uppercase text-[#22C55E] leading-tight">Grants &<br/>Concessional</div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-black text-2xl">10%</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#00113a]"></div>
              </div>
              <p className="mt-12 text-[11px] font-bold uppercase text-[#757682] flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#757682]"></span> Fig 1.1: Optimized Blended Capital Structure for Scale
              </p>
            </div>
            
            <div className="md:col-span-1"></div>
            
            <div className="md:col-span-6 space-y-12">
              <div className="border-t-8 border-[#22C55E] pt-8">
                <h4 className="text-[28px] md:text-[32px] text-[#00113a] mb-6 font-black uppercase">Financial Engineering of Social Change</h4>
                <p className="text-[16px] text-[#444650] mb-6 leading-relaxed">At Northrop, we don't view impact as charity; we view it as a scalable business unit. This module provides the technical protocols to transition from isolated projects to global institutional asset classes.</p>
                <div className="p-8 gradient-accent text-white brutalist-shadow-green">
                  <p className="font-black text-[12px] uppercase tracking-tighter mb-2">Architect's Insight:</p>
                  <p className="text-[20px] md:text-[24px] leading-tight font-bold italic">"Liquidity is the oxygen of impact. We teach you how to build the lungs."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Core Modules */}
        <section className="bg-[#f5f3f3] py-24 md:py-32 border-y-2 border-[#00113a]">
          <div className="container mx-auto px-6 md:px-16">
            <div className="mb-16">
              <h2 className="text-[12px] uppercase text-[#166534] font-bold mb-4 tracking-widest">01 / Program Curriculum</h2>
              <h3 className="text-[36px] md:text-[48px] text-[#00113a] font-black uppercase tracking-tighter">Mastering the Impact Machine</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Module 01 */}
              <div className="bg-white p-8 md:p-12 brutalist-border-green hover:brutalist-shadow-green transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#22C55E]/10 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-[12px] text-[#166534] font-black mb-4 block tracking-widest">MODULE 01</span>
                <h4 className="text-[24px] md:text-[28px] text-[#00113a] mb-6 font-black uppercase">THE IMPACT MACHINE [STRUCTURE & SCALING]</h4>
                <p className="text-[#444650] mb-8 font-medium">Treating social impact as a scalable business unit through rigorous structural engineering for Section 8 entities.</p>
                <ul className="space-y-4">
                  {['Section 8 & Non-Profit Architecture', 'The Scaling Protocol', 'Organizational Hierarchy'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[16px] font-bold text-[#00113a]">
                      <span className="material-symbols-outlined text-[#22C55E] font-black">arrow_forward</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Module 02 */}
              <div className="bg-white p-8 md:p-12 brutalist-border-green hover:brutalist-shadow-green transition-all group">
                <span className="text-[12px] text-[#166534] font-black mb-4 block tracking-widest">MODULE 02</span>
                <h4 className="text-[24px] md:text-[28px] text-[#00113a] mb-6 font-black uppercase">GLOBAL CAPITAL FLOWS [BLENDED FINANCE & ESG]</h4>
                <p className="text-[#444650] mb-8 font-medium">Harnessing trillion-dollar ESG mandates and institutional liquidity for global transition.</p>
                <div className="bg-[#22C55E]/20 border-2 border-[#166534] p-6 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-1 bg-[#166534] text-white text-[8px] font-black uppercase">Technical Mechanism</div>
                  <ul className="space-y-3">
                    {['Capital Redirection Strategy', 'Blended Finance Mastery', 'Sustainable Debt Markets'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[12px] font-black text-[#166534] uppercase tracking-widest">
                        <span className="material-symbols-outlined text-[#166534] font-black text-sm">bolt</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Module 03 */}
              <div className="bg-white p-8 md:p-12 brutalist-border-green hover:brutalist-shadow-green transition-all group relative">
                <div className="absolute -top-4 right-4 gradient-accent text-white px-4 py-2 font-black text-[10px] uppercase tracking-widest brutalist-shadow-green">Technical Intensive</div>
                <span className="text-[12px] text-[#166534] font-black mb-4 block tracking-widest">MODULE 03</span>
                <h4 className="text-[24px] md:text-[28px] text-[#00113a] mb-6 font-black uppercase">THE REGULATORY FORTRESS [FCRA, TAX & GOVERNANCE]</h4>
                <p className="text-[#444650] mb-8 font-medium">Navigating the "Iron Wall" of compliance and cross-border financial governance with surgical precision.</p>
                <div className="space-y-6">
                  {[
                    { label: 'COMPLIANCE CHECK: FCRA', icon: 'verified_user', desc: 'Deep dive into Foreign Inflow management and cross-border transparency protocols for Social Architects.' },
                    { label: 'COMPLIANCE CHECK: TAX', icon: 'account_balance_wallet', desc: 'Optimization strategies within the "Iron Wall" of Section 12A and 80G regulatory frameworks.' }
                  ].map((check, i) => (
                    <div key={i} className="p-5 bg-[#22C55E]/10 border-l-8 border-[#166534] high-key-glow transition-all hover:bg-[#22C55E]/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-black text-[11px] text-[#166534] uppercase tracking-widest">[{check.label}]</span>
                        <span className="material-symbols-outlined text-[#166534]">{check.icon}</span>
                      </div>
                      <p className="text-[13px] leading-relaxed font-bold text-[#00113a]">{check.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module 04 */}
              <div className="bg-white p-8 md:p-12 brutalist-border-green hover:brutalist-shadow-green transition-all group">
                <span className="text-[12px] text-[#166534] font-black mb-4 block tracking-widest">MODULE 04</span>
                <h4 className="text-[24px] md:text-[28px] text-[#00113a] mb-6 font-black uppercase">THE PUBLIC EXIT [LISTING & ASSESSMENT]</h4>
                <p className="text-[#444650] mb-8 font-medium">The ultimate goal: Standardizing impact for public listing on Social Stock Exchanges (SSE).</p>
                <ul className="space-y-4">
                  {[
                    { label: 'SSE Listing Protocols', icon: 'lan' },
                    { label: 'Impact Assessment Frameworks', icon: 'analytics' },
                    { label: 'The Growth Roadmap & Public Exit', icon: 'rocket_launch' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[16px] font-bold text-[#00113a] group-hover:translate-x-2 transition-transform">
                      <div className="w-10 h-10 gradient-accent rounded-full flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-sm">{item.icon}</span>
                      </div>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive Imagery Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                className="w-full h-[500px] object-cover brutalist-border-green brutalist-shadow-green brightness-105" 
                alt="Urban social project integrated with vertical forests"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfffz-zI9GfFTQs59Q3yQ6m7BVUeR21EHFdjHRZthgLzYO2kM_rjQcNzyKiYhz8XIn2quS06Y9lnI_-Eel73X249ohVEjFElhctZUaRDbT8XRXQTLBbyC4E1TbdORFC9PaSazehPjLYn4HiO3td4ZVMrrk_AgESgKaqQe6bD2Ja3yQeXte7A0Z_BJv-YnwpeWC15YnOSmCiZuMorAxXSIX1dk1mWofUTwB2hj2XjRXv5a312J4YLzSn1EGjIlMVRss4ToS-Er6dg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#00113a] text-white p-6 brutalist-border max-w-xs">
                <p className="font-black text-[10px] uppercase mb-2 tracking-widest text-[#22C55E]">Contextual Impact</p>
                <p className="text-[14px] font-bold leading-tight">Visualizing the scale of engineering social change through capital redirection.</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[12px] uppercase text-[#166534] font-black mb-6 tracking-[0.2em]">02 / Technical Deep Dive</h2>
              <h3 className="text-[36px] md:text-[48px] text-[#00113a] font-black mb-8 leading-none uppercase tracking-tighter">Architectural Rigor</h3>
              <div className="space-y-6">
                {[
                  { 
                    title: 'Phase 1: Institutional Architecture', 
                    desc: 'Deconstructing the legal vehicles required for large-scale capital absorption by social entrepreneurs.',
                    items: ['Hybrid non-profit/for-profit holding structures', 'Asset-backed impact securities (ABIS)', 'Risk-sharing mechanisms for first-loss capital']
                  },
                  { 
                    title: 'Phase 2: The Regulatory Iron Wall', 
                    desc: 'Mastering the technical compliance of foreign inflows and tax-exempt status for global operations.',
                    items: ['FCRA Renewals & Reporting Discipline', 'Section 135 (CSR) Mandate Navigation', 'Standardized Impact Reporting (SIR) for SSE']
                  }
                ].map((phase, i) => (
                  <details key={i} className="group brutalist-border-green overflow-hidden">
                    <summary className="flex justify-between items-center p-6 list-none hover:bg-gradient-to-br hover:from-[#22c55e] hover:to-[#166534] hover:text-white transition-all">
                      <h4 className="text-[20px] md:text-[24px] font-black uppercase">{phase.title}</h4>
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180 font-black">expand_more</span>
                    </summary>
                    <div className="p-8 bg-[#f5f3f3] border-t-2 border-[#166534]">
                      <p className="text-[#444650] mb-6 font-medium">{phase.desc}</p>
                      <ul className="space-y-3 list-none text-[#00113a] font-bold">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Open CTA */}
        <section className="bg-[#00113a] text-white py-24 md:py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 h-full w-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white/20 h-full"></div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-6 md:px-16 max-w-4xl relative z-10">
            <h2 className="text-[12px] uppercase mb-8 text-[#22C55E] font-black tracking-[0.3em]">03 / Inquiry Open</h2>
            <h3 className="text-[48px] md:text-[72px] mb-12 font-black leading-none tracking-tighter uppercase">Finance the transition.</h3>
            <p className="text-[18px] md:text-[20px] mb-16 opacity-90 max-w-2xl mx-auto font-medium leading-relaxed">
              Applications for the <span className="text-[#22C55E] font-black">Autumn Cohort</span> are now being accepted. We invite Section 8 leaders, institutional portfolio managers, and social architects to join our discourse on the financial engineering of social change.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Link to="/contact" className="gradient-accent text-white px-16 py-6 text-[14px] font-black uppercase hover:scale-105 transition-all brutalist-shadow-green block w-fit mx-auto text-center">
                Apply for the Cohort
              </Link>
              <Link to="/contact" className="border-4 border-white text-white px-12 md:px-16 py-6 text-[14px] font-black uppercase hover:bg-white hover:text-[#00113a] transition-all block text-center">
                Download Prospectus
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Grantegs;