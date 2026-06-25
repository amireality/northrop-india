import  { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ClimateRiskAsMaterialRisk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans antialiased overflow-x-hidden">
      <Helmet>
        <title>Climate Risk as Material Risk | Northrop India</title>
      </Helmet>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
            style={{ backgroundImage: "url('/insightpage/climaterisk.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/80 via-[#001F3F]/40 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1200px] px-[20px] md:px-[64px] text-center">
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              <span className="bg-white/10 backdrop-blur-sm text-white font-mono text-[10px] px-3 py-1 border border-white/20 transition-colors hover:border-[#7c5800]/40">STRATEGY LEDGER VOL. 21</span>
              <span className="bg-white/10 backdrop-blur-sm text-white font-mono text-[10px] px-3 py-1 border border-white/20 transition-colors hover:border-[#7c5800]/40">DOC_ID: 2026.CLIM.RISK</span>
              <span className="bg-[#7c5800]/20 backdrop-blur-sm text-white font-mono text-[10px] px-3 py-1 border border-[#7c5800]/30 transition-colors hover:border-[#7c5800]/40">STATUS: MANDATORY</span>
            </div>
            <h1 className="text-white font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold mb-6 max-w-4xl mx-auto uppercase">
              CLIMATE RISK AS MATERIAL RISK
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-[28px] max-w-2xl mx-auto italic">
              Linking Philanthropic and CSR Deployment to Long-Term Asset Resilience in 2026
            </p>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/50 text-[10px] font-bold tracking-[0.05em] uppercase">SCROLL TO ANALYZE</span>
            <span className="material-symbols-outlined text-white/50">expand_more</span>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-[1200px] mx-auto px-[20px] md:px-[64px] py-24 flex flex-col gap-32">
          
          {/* Section 01: Context */}
          <section className="max-w-3xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[#7c5800] text-[14px] leading-[20px]">[ SECTION: 01 CONTEXT ]</span>
              <div className="h-px flex-grow bg-[#c5c6cd]/50"></div>
            </div>
            <h2 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold text-[#001F3F] mb-8 uppercase">THE INTEGRATION GAP</h2>
            <div className="space-y-6 text-[#4A5568] text-[16px] leading-[24px]">
              <p>
                In the 2026 fiscal landscape, we observe a critical structural failure: the continued treatment of climate risk and Corporate Social Responsibility (CSR) as divergent operational workstreams. This siloing results in missed opportunities for high-impact capital deployment and leaves critical assets exposed to evolving environmental hazards.
              </p>
              <div className="bg-[#001F3F] p-10 text-white border border-white/10 relative overflow-hidden group transition-colors hover:border-[#7c5800]/40">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c5800]/20 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
                <h3 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800] mb-4">THE CHALLENGE</h3>
                <p className="text-[16px] md:text-[18px] leading-[28px] italic">
                  "Treating CSR as a compliance checkbox while climate risk remains an insurance oversight creates a valuation vacuum. True resilience requires the technical alignment of philanthropic capital with forensic asset protection."
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#7c5800] rounded-full"></span>
                  <span className="text-[10px] font-mono uppercase opacity-60">Forensic Brief 2026-04</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 02: Framework */}
          <section className="w-full">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-[#7c5800] text-[14px] leading-[20px]">[ SECTION: 02 FRAMEWORK ]</span>
              <div className="h-px flex-grow bg-[#c5c6cd]/50"></div>
            </div>
            <div className="text-center mb-16">
              <h2 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold text-[#001F3F] mb-4 uppercase">AN INTEGRATED CLIMATE MATERIALITY FRAMEWORK</h2>
              <p className="text-[#4A5568] text-[16px] leading-[24px] max-w-2xl mx-auto">Strategic alignment across four technical pillars of forensic resilience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c5c6cd]/50 border border-[#c5c6cd]/50 overflow-hidden transition-colors hover:border-[#7c5800]/40">
              {/* Pillar 01 */}
              <div className="bg-[#f8f9fa] p-12 hover:bg-[#f3f4f5] transition-colors group">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[12px] text-[#7c5800]">FRMW_01</span>
                  <span className="material-symbols-outlined text-[#001F3F] group-hover:scale-110 transition-transform">analytics</span>
                </div>
                <h3 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-4 uppercase">Assessment</h3>
                <p className="text-[#4A5568] text-[14px] leading-[20px]">
                  Continuous data-driven evaluation of localized climate stressors. Utilizing hyper-local sensors and predictive modeling to identify latent physical risks before they manifest in P&amp;L statements.
                </p>
              </div>
              {/* Pillar 02 */}
              <div className="bg-[#f8f9fa] p-12 hover:bg-[#f3f4f5] transition-colors group">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[12px] text-[#7c5800]">FRMW_02</span>
                  <span className="material-symbols-outlined text-[#001F3F] group-hover:scale-110 transition-transform">view_in_ar</span>
                </div>
                <h3 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-4 uppercase">Scenario Analysis</h3>
                <p className="text-[#4A5568] text-[14px] leading-[20px]">
                  Rigorous modeling of 1.5°C to 3°C pathways. Forensic examination of supply chain vulnerabilities under extreme weather volatility, mapping community impacts to workforce stability.
                </p>
              </div>
              {/* Pillar 03 */}
              <div className="bg-[#f8f9fa] p-12 hover:bg-[#f3f4f5] transition-colors group">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[12px] text-[#7c5800]">FRMW_03</span>
                  <span className="material-symbols-outlined text-[#001F3F] group-hover:scale-110 transition-transform">hub</span>
                </div>
                <h3 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-4 uppercase">Integration</h3>
                <p className="text-[#4A5568] text-[14px] leading-[20px]">
                  Embedding climate metrics into core investment committee protocols. Ensuring that CSR deployment directly mitigates identified technical hazards in asset clusters.
                </p>
              </div>
              {/* Pillar 04 */}
              <div className="bg-[#f8f9fa] p-12 hover:bg-[#f3f4f5] transition-colors group">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[12px] text-[#7c5800]">FRMW_04</span>
                  <span className="material-symbols-outlined text-[#001F3F] group-hover:scale-110 transition-transform">monitoring</span>
                </div>
                <h3 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-4 uppercase">Stress Testing</h3>
                <p className="text-[#4A5568] text-[14px] leading-[20px]">
                  Quarterly forensic audits of resilience measures. Simulating operational shutdowns to test the effectiveness of philanthropic-funded community infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Section 03 & 04: Impact & Regulatory */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-[24px] items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[#7c5800] text-[14px] leading-[20px]">[ SECTION: 03 IMPACT ]</span>
              </div>
              <h2 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-6 uppercase">WHY CLIMATE-ALIGNED CSR MATTERS</h2>
              <p className="text-[#4A5568] text-[16px] leading-[24px] mb-6">
                CSR is no longer just a "good to have." It is a strategic tool for local resilience. By funding community water-harvesting or renewable micro-grids, a corporation secures its own operational continuity while fulfilling its social mandate.
              </p>
              <ul className="space-y-4 text-[#191c1d]">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#7c5800] text-[20px] mt-1">check_circle</span>
                  <span className="text-[14px] leading-[20px] font-medium">Reduced insurance premiums through community-level flood mitigation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#7c5800] text-[20px] mt-1">check_circle</span>
                  <span className="text-[14px] leading-[20px] font-medium">Enhanced brand equity in "Green-Conscious" capital markets.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#f3f4f5] p-10 border-l-4 border-[#001F3F]">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[#7c5800] text-[14px] leading-[20px]">[ SECTION: 04 REGULATORY ]</span>
              </div>
              <h2 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#001F3F] mb-6 uppercase">THE 2026 MANDATE</h2>
              <p className="text-[#4A5568] text-[14px] leading-[20px] mb-6 font-mono">
                COMPLIANCE_STATUS: ACTIVE<br/>
                FRAMEWORKS: BRSR / TCFD / ISSB
              </p>
              <p className="text-[#4A5568] text-[14px] leading-[20px]">
                Regulatory bodies in India have moved beyond voluntary disclosures. The 2026 mandates require forensic proof of how CSR spends are mitigating physical climate risks as detailed in the BRSR Core requirements.
              </p>
              <div className="mt-8 pt-6 border-t border-[#c5c6cd]/50 flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-[0.05em] uppercase text-[#4A5568]/50">Regulatory Integrity</span>
                <span className="text-[10px] font-bold tracking-[0.05em] uppercase text-[#001F3F]">100% AUDITABLE</span>
              </div>
            </div>
          </section>

          {/* Section 05: Implementation */}
          <section className="max-w-3xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-[#7c5800] text-[14px] leading-[20px]">[ SECTION: 05 IMPLEMENTATION ]</span>
              <div className="h-px flex-grow bg-[#c5c6cd]/50"></div>
            </div>
            <h2 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold text-[#001F3F] mb-12 text-center uppercase">SEQUENCING FOR SUCCESS</h2>
            <div className="space-y-0 relative">
              <div className="absolute left-[15px] top-4 bottom-4 w-px bg-[#c5c6cd]/50"></div>
              
              {/* Step 01 */}
              <div className="relative pl-12 pb-12 group">
                <div className="absolute left-0 top-1 w-8 h-8 bg-[#f8f9fa] border-2 border-[#001F3F] flex items-center justify-center z-10">
                  <span className="font-mono text-[10px] font-bold text-[#001F3F]">01</span>
                </div>
                <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold mb-2 text-[#001F3F] group-hover:text-[#7c5800] transition-colors uppercase">MODELING</h4>
                <p className="text-[#4A5568] text-[14px] leading-[20px]">Deep-dive technical assessment of asset vulnerabilities across geographic heat-zones.</p>
              </div>
              
              {/* Step 02 */}
              <div className="relative pl-12 pb-12 group">
                <div className="absolute left-0 top-1 w-8 h-8 bg-[#f8f9fa] border-2 border-[#c5c6cd] flex items-center justify-center z-10 group-hover:border-[#001F3F] transition-colors">
                  <span className="font-mono text-[10px] font-bold text-[#191c1d]">02</span>
                </div>
                <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold mb-2 text-[#001F3F] group-hover:text-[#7c5800] transition-colors uppercase">ANALYSIS</h4>
                <p className="text-[#4A5568] text-[14px] leading-[20px]">Gap analysis between current CSR focus and identified climate-risk heatmaps.</p>
              </div>
              
              {/* Step 03 */}
              <div className="relative pl-12 pb-12 group">
                <div className="absolute left-0 top-1 w-8 h-8 bg-[#f8f9fa] border-2 border-[#c5c6cd] flex items-center justify-center z-10 group-hover:border-[#001F3F] transition-colors">
                  <span className="font-mono text-[10px] font-bold text-[#191c1d]">03</span>
                </div>
                <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold mb-2 text-[#001F3F] group-hover:text-[#7c5800] transition-colors uppercase">ENGAGEMENT</h4>
                <p className="text-[#4A5568] text-[14px] leading-[20px]">Stakeholder alignment and community partnership formulation for long-term project viability.</p>
              </div>
              
              {/* Step 04 */}
              <div className="relative pl-12 group">
                <div className="absolute left-0 top-1 w-8 h-8 bg-[#f8f9fa] border-2 border-[#c5c6cd] flex items-center justify-center z-10 group-hover:border-[#001F3F] transition-colors">
                  <span className="font-mono text-[10px] font-bold text-[#191c1d]">04</span>
                </div>
                <h4 className="font-serif text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold mb-2 text-[#001F3F] group-hover:text-[#7c5800] transition-colors uppercase">ATTRIBUTION</h4>
                <p className="text-[#4A5568] text-[14px] leading-[20px]">Setting forensic benchmarks for resilience ROI and climate impact reporting.</p>
              </div>
            </div>
          </section>

          {/* Key Takeaways Box */}
          <section className="max-w-4xl mx-auto w-full">
            <div className="bg-white border border-[#001F3F]/10 p-12 relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#001F3F]"></div>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-[#001F3F]">shield</span>
                <h3 className="text-[12px] leading-[16px] font-bold tracking-[0.2em] uppercase text-[#001F3F]">STRATEGIC KEY TAKEAWAYS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex gap-4">
                  <span className="font-mono text-[#7c5800] font-bold">01.</span>
                  <p className="text-[#191c1d] text-[14px] leading-[20px]">Climate risk is no longer a peripheral ESG metric but a core operational material risk.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-[#7c5800] font-bold">02.</span>
                  <p className="text-[#191c1d] text-[14px] leading-[20px]">CSR capital must be repurposed as technical resilience investment for critical assets.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-[#7c5800] font-bold">03.</span>
                  <p className="text-[#191c1d] text-[14px] leading-[20px]">2026 Regulatory mandates (BRSR/TCFD) require auditable links between risk and deployment.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-[#7c5800] font-bold">04.</span>
                  <p className="text-[#191c1d] text-[14px] leading-[20px]">Forensic precision in impact modeling is the only safeguard against greenwashing litigation.</p>
                </div>
              </div>
              <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-[#c5c6cd]/50">
                <p className="text-[11px] font-bold tracking-[0.05em] uppercase text-[#4A5568]">SECURE ACCESS TO FULL FORENSIC DATASET</p>
                <Link to="/contact" className="bg-[#001F3F] text-white px-8 py-4 text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase flex items-center gap-3 hover:bg-black transition-all">
                  DOWNLOAD FULL ADVISORY (PDF)
                  <span className="material-symbols-outlined text-[18px]">download</span>
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default ClimateRiskAsMaterialRisk;