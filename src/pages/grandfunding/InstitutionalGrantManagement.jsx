import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const InstitutionalGrantManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#faf9f5] text-[#1a1c1a] selection:bg-[#000000] selection:text-[#ffffff]">
      <Helmet>
        <title>Institutional Grant Management | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,300;6..72,400&family=Manrope:wght@300;400;600;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="px-[80px] pt-48 pb-[160px] relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#f4f4f0] via-[#faf9f5] to-[#faf9f5]">
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkm_PxO4x7YzYmn8gtMFXbm9rGYQEB_Fhz7Uu8T2zXcTu9RTFQBG33h0VOmeR7vCiK25GoPgeM6ZEqqCSpMXIo30RKPEkQlA67JAy4X7oE2zd2waC2vDr3K-f_iOaN26Vcnc60FI0CzdOJ0DiQPEnLo6GtrUapwXOW1_vdg0UdGDxhyP0_Cndb0O0r1vbPzXX0iFAi9UfbOnvjU8_xxyxpXc7YCTpJO_hzS6WtM01i8gEBUqV-xWvzOht_m-92j56yEUyQE7Q_jQ')", backgroundSize: 'cover' }}
          ></div>
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 lg:col-span-7 relative z-10">
              <h1 className="font-newsreader font-light text-[100px] leading-[0.95] tracking-tight mb-20 max-w-5xl">
                Institutional <br />
                <span className="text-[#747878]/40">Grant</span> Management
              </h1>
              <div className="grid grid-cols-12 gap-[32px] items-end">
                <div className="col-span-1">
                  <div className="w-px h-32 bg-[#000000]"></div>
                </div>
                <div className="col-span-11 lg:col-span-9">
                  <p className="font-manrope font-normal text-[18px] leading-[1.6] text-[#444748] leading-relaxed">
                    At Northrop, we transform grant administration from a clerical necessity into a strategic engine. By applying institutional financial discipline to philanthropic capital, we ensure every deployment advances measurable ESG alpha and long-term stakeholder value.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Updated Hero Image Component */}
            <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="aspect-[4/5] bg-[#eeeeea] overflow-hidden">
                <img 
                  alt="Institutional architecture" 
                  className="w-full h-full object-cover grayscale brightness-75 contrast-125 hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA92Y58hWlX3045sdr7JquddBpZAo2re8NOqdsSs_znNf0faM8gPqnpHLIPFWbFGMpprDvqhYI4gZifEap1ueDJ0BHy1EvChDzD7aHE0h-R0ax074wMFfEKLTa_jfVrjzu_0ijqk_dNnpwN29cBo-aQ68uG0t9_gRJyz8yQfSQUwvXIOPPmpqhqykkxDo-MGsTgqx8igheLhb__oegQ_2RwTsSU5xnBr6Ri_BOkoyAfVyedeyr76W5ACSzj5DR4OPmt-yLPJFWw1A" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden lg:block bg-[#faf9f5] p-8 border border-[#747878]/10">
                <div className="flex flex-col gap-4">
                  <span className="font-manrope font-semibold text-[10px] uppercase tracking-[0.1em] text-[#5d5f5d]">Strategic Mandate</span>
                  <span className="font-newsreader font-normal leading-[1.3] text-xl italic max-w-[200px]">"A shift from passive distribution to active value creation."</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grant Lifecycle Section */}
        <section className="px-[80px] border-t border-[#747878]/10 pt-40">
          <div className="mb-[48px]">
            <span className="font-manrope font-semibold text-[12px] leading-[1.2] uppercase tracking-[0.1em] text-[#5d5f5d]">The Grant Lifecycle</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {/* Lifecycle 01 */}
            <div className="pt-8 border-t border-[#000000]">
              <span className="font-manrope font-light text-[24px] leading-[1] tracking-[-0.02em] block mb-[24px]">01</span>
              <h3 className="font-newsreader font-normal text-[32px] leading-[1.3] mb-[8px]">Strategic Alignment</h3>
              <p className="font-manrope font-normal text-[16px] leading-[1.6] text-[#444748]">
                Ensuring all grant vehicles map directly to institutional ESG goals through rigorous materiality assessment and thematic screening.
              </p>
            </div>
            {/* Lifecycle 02 */}
            <div className="pt-8 border-t border-[#747878]/30">
              <span className="font-manrope font-light text-[24px] leading-[1] tracking-[-0.02em] block mb-[24px] text-[#5d5f5d]">02</span>
              <h3 className="font-newsreader font-normal text-[32px] leading-[1.3] mb-[8px]">Deployment & Governance</h3>
              <p className="font-manrope font-normal text-[16px] leading-[1.6] text-[#444748]">
                Institutional-grade oversight featuring multi-tier risk management, fiduciary checks, and real-time capital flow monitoring.
              </p>
            </div>
            {/* Lifecycle 03 */}
            <div className="pt-8 border-t border-[#747878]/30">
              <span className="font-manrope font-light text-[24px] leading-[1] tracking-[-0.02em] block mb-[24px] text-[#5d5f5d]">03</span>
              <h3 className="font-newsreader font-normal text-[32px] leading-[1.3] mb-[8px]">Performance Analytics</h3>
              <p className="font-manrope font-normal text-[16px] leading-[1.6] text-[#444748]">
                Advanced quantification of social and financial alpha, utilizing proprietary data models to measure ultimate real-world impact.
              </p>
            </div>
          </div>
        </section>

        {/* Materiality Section */}
        <section className="px-[80px] py-[160px]">
          <div className="grid grid-cols-12 gap-[32px] items-center">
            <div className="col-span-12 lg:col-span-5 h-[600px] overflow-hidden bg-[#eeeeea]">
              <img 
                alt="Architectural detail" 
                className="w-full h-full object-cover grayscale brightness-90 contrast-125" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmeNmCA2MgfyVKbZBgOxFnDIh90xTXnDVaW1RHnouo2sJvZzbuNW8R0PAhMIOZ7BL96EjmXLVI-Tbl8r8InkGwFoart7G4yW6nTbsjkbB5BI-sSAV8h6GHxPLg4g9HRRjizys9CbqHT6Wx3P3KNIUUBrHgi-0qK1TPiyOS8LPAmwYFuG3hDHMPFiGcT-6njS1No-BxvB554N5yg8sWUCGl5a_l0ydniypg1nuxqa9pw2qG1Lro6JTRX7B2_4A7HB5WEUyy_C-_YA" 
              />
            </div>
            <div className="col-span-12 lg:col-start-7 lg:col-span-5">
              <h2 className="font-newsreader font-normal text-[48px] leading-[1.2] tracking-[-0.01em] mb-[48px]">Materiality-driven deployment strategy.</h2>
              <p className="font-manrope font-normal text-[18px] leading-[1.6] text-[#444748] mb-[24px]">
                We move beyond generic philanthropy by identifying specific ESG levers where institutional capital creates the most profound systemic change.
              </p>
              <div className="h-[1px] bg-[#747878] opacity-15 my-[48px]"></div>
              <ul className="space-y-[24px]">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#000000] mt-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                  <span className="font-manrope font-normal text-[16px] leading-[1.6]">Cross-sector risk correlation mapping</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#000000] mt-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                  <span className="font-manrope font-normal text-[16px] leading-[1.6]">Dynamic materiality weightings for regional mandates</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#000000] mt-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                  <span className="font-manrope font-normal text-[16px] leading-[1.6]">Institutional fiduciary reporting protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact Case Study */}
        <section className="px-[80px] py-[160px]">
          <div className="bg-[#f4f4f0] p-24 md:p-32 border border-[#747878]/5 relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-manrope font-semibold text-[12px] leading-[1.2] uppercase tracking-[0.1em] text-[#5d5f5d] mb-[48px] block">Case Study / Institutional Grant Portfolio</span>
              <h2 className="font-newsreader font-normal text-[48px] leading-[1.2] tracking-[-0.01em] mb-16 max-w-3xl">Optimizing Social Capital: How an Institutional Grant Program Reshaped Regional Sustainability.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div>
                  <h4 className="font-manrope font-semibold text-[12px] leading-[1.2] uppercase tracking-[0.1em] text-[#000000] mb-4">The Challenge</h4>
                  <p className="font-manrope font-normal text-[16px] leading-[1.6] text-[#444748]">A global sovereign fund faced fragmented grant distribution across its portfolio companies, leading to diluted impact and lack of measurable social alpha.</p>
                </div>
                <div>
                  <h4 className="font-manrope font-semibold text-[12px] leading-[1.2] uppercase tracking-[0.1em] text-[#000000] mb-4">The Intervention</h4>
                  <p className="font-manrope font-normal text-[16px] leading-[1.6] text-[#444748]">Northrop centralized the lifecycle management, implementing a unified governance framework and performance metrics tied to regional sustainability KPIs.</p>
                </div>
                <div>
                  <h4 className="font-manrope font-semibold text-[12px] leading-[1.2] uppercase tracking-[0.1em] text-[#000000] mb-4">The Outcome</h4>
                  <p className="font-manrope font-normal text-[16px] leading-[1.6] text-[#444748]">A 42% increase in deployment efficiency and the creation of a proprietary 'Impact Dashboard' now utilized for annual ESG stakeholder reporting.</p>
                </div>
              </div>
            </div>
            {/* Subtle Texture Layer */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkm_PxO4x7YzYmn8gtMFXbm9rGYQEB_Fhz7Uu8T2zXcTu9RTFQBG33h0VOmeR7vCiK25GoPgeM6ZEqqCSpMXIo30RKPEkQlA67JAy4X7oE2zd2waC2vDr3K-f_iOaN26Vcnc60FI0CzdOJ0DiQPEnLo6GtrUapwXOW1_vdg0UdGDxhyP0_Cndb0O0r1vbPzXX0iFAi9UfbOnvjU8_xxyxpXc7YCTpJO_hzS6WtM01i8gEBUqV-xWvzOht_m-92j56yEUyQE7Q_jQ')" }}
            ></div>
          </div>
        </section>

        {/* Recent Intelligence Section (New) */}
        <section className="px-[80px] py-[160px] bg-[#faf9f5]">
          <div className="mb-16 flex justify-between items-end border-b border-[#747878]/20 pb-8">
            <div>
              <span className="font-manrope font-semibold text-[12px] leading-[1.2] uppercase tracking-[0.1em] text-[#5d5f5d] block mb-4">Intelligence</span>
              <h2 className="font-newsreader font-light leading-[1.1] tracking-[-0.02em] text-5xl">Publications & Insights</h2>
            </div>
            <a className="font-manrope font-semibold text-[12px] leading-[1.2] uppercase tracking-[0.1em] text-[#000000] border-b border-[#000000] pb-1 hover:opacity-70 transition-all duration-200" href="#">View all intelligence</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            {/* Article 01 */}
            <article className="group cursor-pointer">
              <div className="font-manrope font-light leading-[1] tracking-[-0.02em] text-sm text-[#5d5f5d] mb-4">VOL. 24 / 01</div>
              <h3 className="font-newsreader font-normal leading-[1.3] text-2xl mb-4 group-hover:text-[#000000] transition-colors">The Future of ESG Data</h3>
              <p className="font-manrope font-normal text-[#444748] text-sm leading-relaxed mb-6">Quantifying the intangible: How predictive modeling is redefining materiality in global grant-making frameworks.</p>
              <div className="w-8 h-px bg-[#747878] group-hover:w-full transition-all duration-500"></div>
            </article>
            {/* Article 02 */}
            <article className="group cursor-pointer">
              <div className="font-manrope font-light leading-[1] tracking-[-0.02em] text-sm text-[#5d5f5d] mb-4">VOL. 24 / 02</div>
              <h3 className="font-newsreader font-normal leading-[1.3] text-2xl mb-4 group-hover:text-[#000000] transition-colors">Impact Portfolio Optimization</h3>
              <p className="font-manrope font-normal text-[#444748] text-sm leading-relaxed mb-6">A fiduciary approach to social capital deployment across diverse regional jurisdictional mandates.</p>
              <div className="w-8 h-px bg-[#747878] group-hover:w-full transition-all duration-500"></div>
            </article>
            {/* Article 03 */}
            <article className="group cursor-pointer">
              <div className="font-manrope font-light leading-[1] tracking-[-0.02em] text-sm text-[#5d5f5d] mb-4">VOL. 23 / 09</div>
              <h3 className="font-newsreader font-normal leading-[1.3] text-2xl mb-4 group-hover:text-[#000000] transition-colors">Climate Risk Materiality</h3>
              <p className="font-manrope font-normal text-[#444748] text-sm leading-relaxed mb-6">Assessing the correlation between philanthropic deployment and long-term asset resilience in high-risk zones.</p>
              <div className="w-8 h-px bg-[#747878] group-hover:w-full transition-all duration-500"></div>
            </article>
            {/* Article 04 */}
            <article className="group cursor-pointer">
              <div className="font-manrope font-light leading-[1] tracking-[-0.02em] text-sm text-[#5d5f5d] mb-4">VOL. 23 / 08</div>
              <h3 className="font-newsreader font-normal leading-[1.3] text-2xl mb-4 group-hover:text-[#000000] transition-colors">Digital Governance Protocols</h3>
              <p className="font-manrope font-normal text-[#444748] text-sm leading-relaxed mb-6">Modernizing the grant lifecycle through blockchain-based transparency and automated reporting audits.</p>
              <div className="w-8 h-px bg-[#747878] group-hover:w-full transition-all duration-500"></div>
            </article>
          </div>
        </section>

        {/* Recent Intelligence Section (Quote) */}
        <section className="px-[80px] py-[160px]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
              <span className="material-symbols-outlined text-[#000000] text-5xl mb-[48px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>format_quote</span>
              <blockquote className="font-newsreader font-normal text-[32px] leading-[1.3] italic mb-[48px]">
                "Climate risk is no longer a peripheral concern for grant-makers; it is the primary lens through which institutional capital must be evaluated and deployed."
              </blockquote>
              <p className="font-manrope font-semibold text-[12px] leading-[1.2] uppercase tracking-[0.1em] text-[#5d5f5d]">
                — Northrop Intelligence Report: Q4 2024 Social Mandates
              </p>
              <div className="mt-12">
                <a className="font-manrope font-semibold text-[12px] leading-[1.2] uppercase tracking-[0.1em] text-[#000000] border-b border-[#000000] pb-1 hover:opacity-70 transition-all duration-200 inline-block" href="#">
                  Download the mandate report
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InstitutionalGrantManagement;
