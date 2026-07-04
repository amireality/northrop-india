import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const CybersecurityResilience = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity & Risk Management | Northrop Management</title>
        <meta name="description" content="Securing the resilient enterprise through rigorous architecture, cognitive intelligence, and elite response strategies to protect global institutional capital." />
       
      </Helmet>

      <main className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:h-[819px] flex items-center bg-[#002b5c] overflow-hidden">
          <div className="absolute inset-0 ">
            <img 

              className="w-full h-full object-cover" 
              alt="Advanced digital security network visualization" 
              src="/digitalimg/cyberimg.jpeg" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 relative z-10 w-full py-20 md:py-0">
            <div className="max-w-3xl animate-fade-in-up">
              <span className="text-[#ffff] font-semibold text-[12px] tracking-[0.05em] mb-4 block uppercase">Strategic Resilience</span>
              <h1 className="text-white font-['Noto_Serif',serif] text-[36px] md:text-[48px] leading-[1.1] font-bold mb-8 tracking-[-0.02em]">Securing the Resilient Enterprise</h1>
              <p className="text-white text-[16px] md:text-[18px] mb-[64px] max-w-2xl opacity-90 leading-[1.6]">
                We navigate the complexity of modern threats through rigorous architecture, cognitive intelligence, and elite response strategies to protect global institutional capital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#002b5c] px-8 py-4 text-[12px] font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all">View Strategy</button>
                <Link to="/contact">
                  <button className="border-2 border-white text-white px-8 py-4 text-[12px] font-bold uppercase tracking-wider hover:bg-white hover:text-[#002b5c] transition-all w-full sm:w-auto">Risk Assessment</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Threat Landscape */}
        <section className="py-[120px] px-8 md:px-12 lg:px-16 max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 border-l-4 border-[#002b5c] pl-4">
              <h2 className="font-['Noto_Serif',serif] text-[28px] md:text-[32px] font-semibold text-[#002b5c] leading-[1.2]">Threat Landscape</h2>
              <p className="mt-[32px] text-[16px] text-[#43474f] leading-[1.6]">
                The modern attack surface is borderless. We define risk not by the presence of threats, but by the maturity of the response.
              </p>
            </div>
            <div className="md:col-span-8 grid md:grid-cols-2 gap-[64px]">
              <div className="p-[32px] bg-[#f6f3f2] border-b-4 border-[#002b5c] hover:shadow-lg transition-shadow cursor-pointer">
                <span className="material-symbols-outlined text-[#002b5c] mb-4 text-4xl">policy</span>
                <h3 className="font-['Noto_Serif',serif] text-[24px] font-semibold text-[#002b5c] mb-2">Systemic Complexity</h3>
                <p className="text-[14px] text-[#5c5f60] leading-[1.5]">
                  Interconnected supply chains and legacy integration points represent the highest vulnerability for global operations.
                </p>
              </div>
              <div className="p-[32px] bg-[#f6f3f2] border-b-4 border-[#002b5c] hover:shadow-lg transition-shadow cursor-pointer">
                <span className="material-symbols-outlined text-[#002b5c] mb-4 text-4xl">security_update_good</span>
                <h3 className="font-['Noto_Serif',serif] text-[24px] font-semibold text-[#002b5c] mb-2">Automated Adversaries</h3>
                <p className="text-[14px] text-[#5c5f60] leading-[1.5]">
                  AI-driven orchestration requires a cognitive-first defense strategy that anticipates vectors before they manifest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Solutions */}
        <section className="py-[120px] bg-[#7594cb]/10">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="mb-[64px]">
              <h2 className="font-['Noto_Serif',serif] text-[28px] md:text-[32px] font-semibold text-[#002b5c] text-center">Engineered Security Solutions</h2>
              <div className="h-1 w-24 bg-[#002b5c] mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
              {/* Cloud Security */}
              <div className="bg-white p-[32px] shadow-[0px_4px_20px_rgba(0,43,92,0.05)] border-t-4 border-[#002b5c] group hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <div className="font-bold text-[12px] text-[#002b5c]/60 mb-4 tracking-[0.05em]">01</div>
                <h4 className="font-['Noto_Serif',serif] text-[24px] font-semibold text-[#002b5c] mb-[32px]">Cloud Security</h4>
                <p className="text-[14px] text-[#43474f] mb-[64px] leading-[1.5]">Multi-cloud governance and runtime protection for elastic infrastructures.</p>
                <span className="material-symbols-outlined text-[#002b5c] text-3xl">cloud_done</span>
              </div>
              {/* Zero Trust */}
              <div className="bg-white p-[32px] shadow-[0px_4px_20px_rgba(0,43,92,0.05)] border-t-4 border-[#002b5c] group hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <div className="font-bold text-[12px] text-[#002b5c]/60 mb-4 tracking-[0.05em]">02</div>
                <h4 className="font-['Noto_Serif',serif] text-[24px] font-semibold text-[#002b5c] mb-[32px]">Zero Trust</h4>
                <p className="text-[14px] text-[#43474f] mb-[64px] leading-[1.5]">Context-aware identity and access management for the decentralized workforce.</p>
                <span className="material-symbols-outlined text-[#002b5c] text-3xl">admin_panel_settings</span>
              </div>
              {/* Incident Response */}
              <div className="bg-white p-[32px] shadow-[0px_4px_20px_rgba(0,43,92,0.05)] border-t-4 border-[#002b5c] group hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <div className="font-bold text-[12px] text-[#002b5c]/60 mb-4 tracking-[0.05em]">03</div>
                <h4 className="font-['Noto_Serif',serif] text-[24px] font-semibold text-[#002b5c] mb-[32px]">Incident Response</h4>
                <p className="text-[14px] text-[#43474f] mb-[64px] leading-[1.5]">Rapid containment and forensic analysis led by elite cyber analysts.</p>
                <span className="material-symbols-outlined text-[#002b5c] text-3xl">running_with_errors</span>
              </div>
              {/* Compliance */}
              <div className="bg-white p-[32px] shadow-[0px_4px_20px_rgba(0,43,92,0.05)] border-t-4 border-[#002b5c] group hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <div className="font-bold text-[12px] text-[#002b5c]/60 mb-4 tracking-[0.05em]">04</div>
                <h4 className="font-['Noto_Serif',serif] text-[24px] font-semibold text-[#002b5c] mb-[32px]">Compliance</h4>
                <p className="text-[14px] text-[#43474f] mb-[64px] leading-[1.5]">Rigorous auditing for SOC2, GDPR, and global regulatory frameworks.</p>
                <span className="material-symbols-outlined text-[#002b5c] text-3xl">fact_check</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: SOC */}
        <section className="py-[120px] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="grid md:grid-cols-2 gap-[64px] lg:gap-[120px] items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#d6e3ff] opacity-20 -z-10"></div>
                <img 
                  className="w-full aspect-square object-cover " 
                  alt="Futuristic Security Operations Center (SOC)" 
                  src="/digitalimg/cyberimg1.jpeg" 
                />
                <div className="absolute bottom-8 right-8 bg-[#002b5c] text-white p-6 md:p-8 max-w-[200px] md:max-w-xs animate-pulse-subtle">
                  <div className="text-[32px] md:text-[40px] leading-none mb-2 font-light tracking-[-0.01em]">24/7</div>
                  <p className="font-semibold text-[10px] md:text-[12px] uppercase tracking-wider">Uninterrupted Global Vigilance</p>
                </div>
              </div>
              <div className="animate-fade-in">
                <span className="text-[#002b5c] font-bold text-[12px] tracking-[0.05em] mb-4 block uppercase">The Nerve Center</span>
                <h2 className="font-['Noto_Serif',serif] text-[28px] md:text-[32px] font-semibold text-[#002b5c] mb-[32px]">Security Operations Center (SOC)</h2>
                <p className="text-[16px] md:text-[18px] text-[#43474f] mb-[64px] leading-[1.6]">
                  Our Global SOC acts as the central intelligence hub for your digital estate. We combine human intuition with machine-speed response to neutralize threats in milliseconds.
                </p>
                <ul className="space-y-[16px] mb-[64px]">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#002b5c]"></div>
                    <span className="text-[16px] font-medium text-[#1c1b1b]">MDR (Managed Detection & Response)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#002b5c]"></div>
                    <span className="text-[16px] font-medium text-[#1c1b1b]">Threat Hunting & Intelligence Enrichment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#002b5c]"></div>
                    <span className="text-[16px] font-medium text-[#1c1b1b]">Vulnerability Management as a Service</span>
                  </li>
                </ul>
                <button className="border-b-2 border-[#002b5c] pb-2 text-[12px] font-bold uppercase tracking-widest text-[#002b5c] hover:opacity-70 transition-all flex items-center gap-2">
                 <Link to="/contact"> Explore SOC Capabilities <span className="material-symbols-outlined text-sm">arrow_forward</span> </Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Strategic Partners */}
        {/* <section className="py-[120px] border-t border-[#c4c6d0]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <p className="text-center font-bold text-[12px] text-[#43474f] uppercase tracking-widest mb-[64px]">Global Ecosystem Partners</p>
            <div className="flex flex-wrap justify-center gap-x-24 gap-y-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <img className="h-10 w-auto" alt="Corporate partner logo" src="/digitalimg/cyberimglogo.png" />
              <img className="h-10 w-auto" alt="Corporate partner logo" src="/digitalimg/cyberimglogo1.png" />
              <img className="h-10 w-auto" alt="Corporate partner logo" src="/digitalimg/cyberimglogo2.png" />
              <img className="h-10 w-auto" alt="Corporate partner logo" src="/digitalimg/cyberimglogo3.png" />
            </div>
          </div>
        </section> */}

        {/* Final CTA */}
        <section className="bg-[#002b5c] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-white font-['Noto_Serif',serif] text-[28px] md:text-[32px] font-semibold mb-[64px]">Is your enterprise resilient?</h2>
            <p className="text-white text-[18px] max-w-2xl mx-auto mb-[64px] opacity-90 leading-[1.6]">Engage with our principal consultants for a comprehensive threat maturity assessment.</p>
            <Link to="/contact">
              <button className="bg-white text-[#002b5c] px-10 py-5 text-[12px] font-bold uppercase tracking-widest hover:scale-95 transition-transform shadow-lg w-full md:w-auto">Schedule Consultation</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default CybersecurityResilience