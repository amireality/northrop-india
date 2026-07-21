import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ArticleSidebar from '../../components/insights/ArticleSidebar';

const HearingAllVoices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans antialiased overflow-x-hidden selection:bg-[#001F3F] selection:text-white">
      <Helmet>
        <title>Hearing All Voices | Northrop India</title>
      </Helmet>

      {/* Hero Section */}
      <header className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Cinematic map of India with data points" 
            className="w-full h-full object-cover brightness-50" 
            src="/insightpage/hereallvoice.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/80 via-transparent to-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-[20px] md:px-[64px]  mx-auto">
          <div className="mb-6 inline-block">
            {/* <span className="font-mono text-white/60 text-[12px] leading-[16px] tracking-[0.4em] uppercase">Special Report 2024-2026</span> */}
          </div>
          <h1 className="font-serif text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold text-white uppercase tracking-tight mb-8 text-left">
            Hearing All Voices: A Framework for Comprehensive Stakeholder Materiality Assessment in Indian Infrastructure
          </h1>
          <p className="font-serif text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-white/90 italic font-light text-left ">
            Strategic Engagement and Forensic-Grade Materiality in 2026
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <div className="h-16 w-[1px] bg-white/30"></div>
          </div>
        </div>
      </header>

      <main className="py-24 space-y-32 w-full">
        {/* SECTION 1: THE GROWING CHALLENGE */}
        <section className="max-w-[1200px] mx-auto px-[20px] md:px-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
            <div className="md:col-span-4 border-l-4 border-[#001F3F] pl-6 py-2">
              <h2 className="font-serif text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold text-[#001F3F] uppercase mb-4">The Growing Challenge</h2>
              <span className="font-mono text-[10px] text-[#4A5568] uppercase tracking-widest">Protocol Evolution</span>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="text-[16px] md:text-[18px] leading-[28px] text-[#4A5568]">
                The shift from surface-level compliance to strategic clarity marks a new era for Indian infrastructure. In a landscape defined by rapid urbanization and stringent ESG mandates, understanding the nuanced voices of all stakeholders is no longer optional—it is the foundation of institutional trust.
              </div>
              <div className="bg-white p-8 border border-[#c5c6cd]/50 relative">
                <div className="absolute -top-4 -right-4 bg-[#001F3F] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Forensic Insight</div>
                <h4 className="font-serif text-[24px] leading-[32px] font-semibold mb-3 text-[#001F3F]">SEBI BRSR Expansion</h4>
                <p className="text-[14px] leading-[20px] text-[#191c1d]">The 2026-27 mandate expands BRSR Core requirements to India's top 1,000 entities. Materiality assessments must now withstand forensic-grade scrutiny for external assurance readiness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: HYBRID METHODOLOGY */}
        <section className="bg-[#001F3F] text-white py-24">
          <div className="max-w-[1200px] mx-auto px-[20px] md:px-[64px]">
            <div className="mb-16 text-center">
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold uppercase mb-4 tracking-wider">Northrop's Hybrid Methodology</h2>
              <div className="w-24 h-[1px] bg-white mx-auto opacity-50 mb-4"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {/* Item 1 */}
              <div className="border-t border-white/10 pt-8 group hover:border-white/40 transition-all">
                <span className="font-mono text-[12px] text-white/40 block mb-4">01</span>
                <div className="mb-6">
                  <span className="material-symbols-outlined text-4xl text-white/80">public</span>
                </div>
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold mb-3">Pan-Jurisdiction</h3>
                <p className="text-white/60 text-[14px] leading-[20px]">Unified assessment protocols across diverse Indian states and regulatory environments.</p>
              </div>
              {/* Item 2 */}
              <div className="border-t border-white/10 pt-8 group hover:border-white/40 transition-all">
                <span className="font-mono text-[12px] text-white/40 block mb-4">02</span>
                <div className="mb-6">
                  <span className="material-symbols-outlined text-4xl text-white/80">record_voice_over</span>
                </div>
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold mb-3">Direct Engagement</h3>
                <p className="text-white/60 text-[14px] leading-[20px]">Senior-led interviews and on-ground audits ensuring unfiltered stakeholder feedback.</p>
              </div>
              {/* Item 3 */}
              <div className="border-t border-white/10 pt-8 group hover:border-white/40 transition-all">
                <span className="font-mono text-[12px] text-white/40 block mb-4">03</span>
                <div className="mb-6">
                  <span className="material-symbols-outlined text-4xl text-white/80">analytics</span>
                </div>
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold mb-3">Multi-Modal Data</h3>
                <p className="text-white/60 text-[14px] leading-[20px]">Integration of qualitative sentiment analysis with quantitative risk modeling.</p>
              </div>
              {/* Item 4 */}
              <div className="border-t border-white/10 pt-8 group hover:border-white/40 transition-all">
                <span className="font-mono text-[12px] text-white/40 block mb-4">04</span>
                <div className="mb-6">
                  <span className="material-symbols-outlined text-4xl text-white/80">balance</span>
                </div>
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold mb-3">Double Materiality</h3>
                <p className="text-white/60 text-[14px] leading-[20px]">Assessing both financial impact on the firm and outward impact on society.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: STRATEGIC OUTPUTS */}
        <section className="max-w-[1200px] mx-auto px-[20px] md:px-[64px]">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square bg-white flex items-center justify-center overflow-hidden border border-[#c5c6cd]/50">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Matrix Visualization" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYPEnza_yBLj8eq9ehSgCY0aDKZgYHH5o4-mlQrFKILv49XEiWvpZ2f2wKeSXkDnVHtfTGuE98LRmJcc29LRmRTHaOArs84Ge4BQ6MoFV3ohSmeZgo60xsVh5YcHoTxp7-TGyOuc-MeqVfv6pRgDEPm4NHyrVGFC12nne_GkLuiFa5htNJcXZx_DbRbEQRVgLFH3-nCg9AqGbbNmPGU8MRPVYbFMU_MxNOb4G9ImmigvlILzPsDLyGGogs_qidq6au-zJ9XEcj-i-9"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 p-4 backdrop-blur-sm border border-[#c5c6cd]/50">
                  <p className="text-[10px] font-bold text-[#001F3F] uppercase tracking-[0.05em]">Visualization: Verified Matrix Output</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] uppercase">Strategic Outputs</h2>
              <p className="text-[16px] md:text-[18px] leading-[28px] text-[#4A5568]">
                Our validated materiality matrix doesn't just rank issues; it provides a roadmap for resource allocation and risk mitigation.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#7c5800] mt-1">verified</span>
                  <div>
                    <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#191c1d]">Assurance Benefits</h4>
                    <p className="text-[14px] leading-[20px] text-[#4A5568]">Ready for Tier-1 auditing, meeting the 'Reasonable Assurance' standards required by investors.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#7c5800] mt-1">policy</span>
                  <div>
                    <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#191c1d]">Diligence Protection</h4>
                    <p className="text-[14px] leading-[20px] text-[#4A5568]">Defensible methodology in the event of legal or regulatory inquiry.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: IMPLEMENTATION ROADMAP */}
        <section className="bg-white py-24">
          <div className="max-w-[1200px] mx-auto px-[20px] md:px-[64px]">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] uppercase mb-16 text-center">Technical Implementation Timeline</h2>
            <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-[#001F3F]/10 z-0"></div>
              {/* Steps */}
              <div className="relative z-10 w-full text-center">
                <div className="w-24 h-24 rounded-full bg-[#001F3F] text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">search</span>
                </div>
                <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F] mb-2">Phase 01</h4>
                <p className="font-serif text-[24px] leading-[32px] font-semibold text-[#191c1d]">Scoping</p>
              </div>
              <div className="relative z-10 w-full text-center">
                <div className="w-24 h-24 rounded-full bg-[#001F3F] text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">architecture</span>
                </div>
                <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F] mb-2">Phase 02</h4>
                <p className="font-serif text-[24px] leading-[32px] font-semibold text-[#191c1d]">Design</p>
              </div>
              <div className="relative z-10 w-full text-center">
                <div className="w-24 h-24 rounded-full bg-[#001F3F] text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F] mb-2">Phase 03</h4>
                <p className="font-serif text-[24px] leading-[32px] font-semibold text-[#191c1d]">Fieldwork</p>
              </div>
              <div className="relative z-10 w-full text-center">
                <div className="w-24 h-24 rounded-full bg-[#001F3F] text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">join_inner</span>
                </div>
                <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F] mb-2">Phase 04</h4>
                <p className="font-serif text-[24px] leading-[32px] font-semibold text-[#191c1d]">Synthesis</p>
              </div>
              <div className="relative z-10 w-full text-center">
                <div className="w-24 h-24 rounded-full bg-[#7c5800] text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800] mb-2">Phase 05</h4>
                <p className="font-serif text-[24px] leading-[32px] font-semibold text-[#191c1d]">Validation</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: KEY TAKEAWAYS */}
        <section className="max-w-[1000px] mx-auto px-[20px] md:px-[64px]">
          <div className="bg-[#001F3F] p-12 md:p-24 relative overflow-hidden">
            {/* Background texture simulation */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="grid grid-cols-12 h-full">
                <div className="border-r border-white h-full"></div><div className="border-r border-white h-full"></div><div className="border-r border-white h-full"></div><div className="border-r border-white h-full"></div><div className="border-r border-white h-full"></div><div className="border-r border-white h-full"></div><div className="border-r border-white h-full"></div><div className="border-r border-white h-full"></div><div className="border-r border-white h-full"></div><div className="border-r border-white h-full"></div><div className="border-r border-white h-full"></div>
              </div>
            </div>
            <div className="relative z-10">
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-white uppercase mb-12 tracking-widest text-center">Key Takeaways</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex gap-6 items-start">
                  <div className="w-2 h-2 bg-[#7c5800] mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] text-[#7c5800] uppercase mb-2">Depth Reduces Risk</h5>
                    <p className="text-white/80 text-[14px] leading-[20px]">Forensic-level inquiry identifies latent operational risks before they manifest as ESG crises.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-2 h-2 bg-[#7c5800] mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] text-[#7c5800] uppercase mb-2">Stakeholder Voice</h5>
                    <p className="text-white/80 text-[14px] leading-[20px]">Direct engagement builds institutional capital and reduces project delays.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-2 h-2 bg-[#7c5800] mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] text-[#7c5800] uppercase mb-2">Process Credibility</h5>
                    <p className="text-white/80 text-[14px] leading-[20px]">Systematic methodology provides the defensibility required for public listing and FDI.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-2 h-2 bg-[#7c5800] mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] text-[#7c5800] uppercase mb-2">Forensic Rigour</h5>
                    <p className="text-white/80 text-[14px] leading-[20px]">Moving beyond check-the-box exercises to deep evidentiary materiality.</p>
                  </div>
                </div>
              </div>
              <div className="mt-20 text-center flex flex-col items-center">
                <Link to="/contact" className="inline-flex bg-white text-[#001F3F] px-12 py-5 text-[12px] leading-[16px] font-bold tracking-[0.2em] uppercase hover:bg-gray-100 transition-all items-center gap-3">
                  <span>Download Full Protocol</span>
                  <span className="material-symbols-outlined">download</span>
                </Link>
                <p className="mt-6 font-mono text-white/40 text-[10px] uppercase">Confidential Advisor Copy • Rev 2026</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HearingAllVoices;