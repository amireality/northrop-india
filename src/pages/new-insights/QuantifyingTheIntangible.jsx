import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ArticleSidebar from '../../components/insights/ArticleSidebar';

const QuantifyingTheIntangible = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-[#191c1d] font-sans antialiased overflow-x-hidden selection:bg-[#7c5800] selection:text-white">
      <Helmet>
        <title>Quantifying The Intangible | Northrop India</title>
      </Helmet>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[700px] w-full overflow-hidden flex items-end">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
              style={{ backgroundImage: "url('/insightpage/quantifying.jpeg')" }}
            ></div>
           <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[20px] md:px-[64px] pb-16 md:pb-24">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* <div className="flex flex-wrap items-center gap-4 text-[#7c5800] text-[12px] leading-[16px] font-bold uppercase tracking-[0.2em]">
                <span>[ STRATEGY LEDGER VOL. 19 ]</span>
                <span className="hidden md:block w-12 h-[1px] bg-[#7c5800]"></span>
                <span>[ 2026 PREDICTIVE MANDATE ]</span>
              </div> */}
              <h1 className="font-serif text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold text-white max-w-4xl tracking-tight uppercase">
                QUANTIFYING THE INTANGIBLE: PREDICTIVE MODELING AND THE FUTURE OF ESG MATERIALITY ASSESSMENT
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[28px] text-white/80 max-w-2xl font-light">
                An Analysis of the Shift from Reactive Reporting to Forensic Forward-Looking Mandates for India's Market Leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Summary & Context */}
        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-[20px] md:px-[64px]">
            <div className="flex items-center text-[#4A5568] text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase mb-8">
              <span className="mr-4">SECT_01</span>
              <span className="flex-grow h-px bg-[#c5c6cd]/50"></span>
            </div>
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] mb-8 uppercase tracking-tight">
              THE ESG INFLECTION POINT
            </h2>
            <div className="space-y-6">
              <p className="text-[16px] md:text-[18px] leading-[28px] text-[#191c1d]">
                As the Indian strategic landscape undergoes a "Viksit Bharat" transformation, the definition of materiality is evolving. We are moving beyond the static, historic disclosure frameworks into a high-stakes era of <span className="font-bold border-b-2 border-[#7c5800]">Predictive Materiality</span>. For the top 1,000 listed entities, the transition to <span className="font-bold">2026-27 BRSR Core</span> compliance is not merely a regulatory hurdle—it is a forensic valuation mandate.
              </p>
              <p className="text-[16px] leading-[24px] text-[#4A5568]">
                Traditional ESG assessments have long suffered from "Retrospective Bias," documenting what has already occurred. Northrop India’s proprietary approach leverages forensic precision to model how non-financial risks will crystallize into financial impact over the 3-5 year strategic horizon.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology Grid */}
        <section className="py-24 bg-[#f8f9fa] border-y border-[#c5c6cd]/50">
          <div className="max-w-[1200px] mx-auto px-[20px] md:px-[64px]">
            <div className="text-center mb-16">
              <div className="text-[#7c5800] text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase mb-4">[ MODEL_A ]</div>
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] uppercase tracking-widest">
                PRACTITIONER’S FRAMEWORK
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {/* Point 1 */}
              <div className="bg-white border border-[#c5c6cd]/50 p-8 flex flex-col space-y-6 transition-all hover:border-[#7c5800] group">
                <span className="material-symbols-outlined text-4xl text-[#001F3F] group-hover:text-[#7c5800] transition-colors">analytics</span>
                <h3 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#191c1d]">SCENARIO MODELING</h3>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">
                  Simulating the impact of dynamic regulatory shifts and climate volatility on cash-flow projections using Bayesian probability distributions.
                </p>
              </div>
              {/* Point 2 */}
              <div className="bg-white border border-[#c5c6cd]/50 p-8 flex flex-col space-y-6 transition-all hover:border-[#7c5800] group">
                <span className="material-symbols-outlined text-4xl text-[#001F3F] group-hover:text-[#7c5800] transition-colors">dataset_linked</span>
                <h3 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#191c1d]">ALTERNATIVE DATA</h3>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">
                  Integrating satellite imagery and social sentiment analysis to validate reported supply chain resilience metrics with forensic accuracy.
                </p>
              </div>
              {/* Point 3 */}
              <div className="bg-white border border-[#c5c6cd]/50 p-8 flex flex-col space-y-6 transition-all hover:border-[#7c5800] group">
                <span className="material-symbols-outlined text-4xl text-[#001F3F] group-hover:text-[#7c5800] transition-colors">query_stats</span>
                <h3 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#191c1d]">PROSPECTIVE MATERIALITY</h3>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">
                  Evaluating how systemic externalities will impact long-term enterprise value, specifically aligning with SEBI's 'Reasonable Assurance' standards.
                </p>
              </div>
              {/* Point 4 */}
              <div className="bg-white border border-[#c5c6cd]/50 p-8 flex flex-col space-y-6 transition-all hover:border-[#7c5800] group">
                <span className="material-symbols-outlined text-4xl text-[#001F3F] group-hover:text-[#7c5800] transition-colors">verified_user</span>
                <h3 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#191c1d]">SENIOR-LED VALIDATION</h3>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">
                  Critical qualitative oversight by industry veterans to ensure that algorithmic outputs align with real-world strategic complexities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-24 bg-white">
          <div className="max-w-[900px] mx-auto px-[20px] md:px-[64px]">
            <div className="text-center mb-16">
              <div className="text-[#4A5568] text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase mb-4">SECT_02</div>
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-[#001F3F] uppercase tracking-widest">
                SEQUENCING FOR SUCCESS
              </h2>
            </div>
            <div className="relative space-y-12">
              {/* Vertical Line */}
              <div className="absolute left-[31px] top-0 bottom-0 w-px bg-[#c5c6cd]/50"></div>
              
              {/* Phase 1 */}
              <div className="relative flex items-start space-x-8 group">
                <div className="w-16 h-16 rounded-full bg-[#001F3F] text-white flex items-center justify-center shrink-0 z-10 ring-4 ring-white">
                  <span className="font-bold text-[18px]">Q1</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-[24px] leading-[32px] font-bold text-[#001F3F] uppercase mb-2">DIAGNOSTIC BASELINING</h3>
                  <p className="text-[#4A5568] text-[16px] leading-[24px]">Mapping current BRSR disclosures against the 'Core' 9 parameters to identify forensic gaps in data lineage.</p>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="relative flex items-start space-x-8 group">
                <div className="w-16 h-16 rounded-full bg-[#7c5800] text-white flex items-center justify-center shrink-0 z-10 ring-4 ring-white">
                  <span className="font-bold text-[18px]">Q2</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-[24px] leading-[32px] font-bold text-[#001F3F] uppercase mb-2">PREDICTIVE STRESS TESTING</h3>
                  <p className="text-[#4A5568] text-[16px] leading-[24px]">Deploying the CER model to simulate ESG-related financial shock across different geopolitical and economic scenarios.</p>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="relative flex items-start space-x-8 group">
                <div className="w-16 h-16 rounded-full bg-[#001F3F] text-white flex items-center justify-center shrink-0 z-10 ring-4 ring-white">
                  <span className="font-bold text-[18px]">Q3</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-[24px] leading-[32px] font-bold text-[#001F3F] uppercase mb-2">STRATEGIC ALIGNMENT</h3>
                  <p className="text-[#4A5568] text-[16px] leading-[24px]">Integration of materiality findings into the Corporate CAPEX cycle and investor relations mandates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Focus */}
        <section className="py-24 bg-[#001F3F] text-white">
          <div className="max-w-[1200px] mx-auto px-[20px] md:px-[64px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-[#7c5800] text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase">[ COMPLIANCE_CORE ]</div>
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold uppercase">
                BRSR CORE 2026-27:<br/>THE NEW MANDATE
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[28px] opacity-80">
                The shift toward 'Reasonable Assurance' for the top 1,000 entities represents a tectonic shift in the Indian regulatory landscape. Compliance is no longer a checklist—it is an audit-ready forensic exercise.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-[#7c5800]">check_circle</span>
                  <span className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase">MANDATORY THIRD-PARTY ASSURANCE</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-[#7c5800]">check_circle</span>
                  <span className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase">SUPPLY CHAIN INTENSITY DISCLOSURE</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-[#7c5800]">check_circle</span>
                  <span className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase">VALUATION-ALIGNED REPORTING</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-12 border border-white/20 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#7c5800]">NORTHROP ADVANTAGE</h4>
                <p className="font-serif text-[24px] leading-[32px] font-semibold">Leverage our proprietary forensic models to secure institutional trust.</p>
                <Link to="/contact" className="inline-block bg-[#7c5800] text-white px-8 py-4 text-[12px] leading-[16px] font-bold hover:bg-white hover:text-[#001F3F] transition-all duration-300 uppercase tracking-[0.15em] w-full md:w-auto">
                  Request Consult
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuantifyingTheIntangible;