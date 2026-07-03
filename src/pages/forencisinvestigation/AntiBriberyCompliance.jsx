import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const AntiBriberyCompliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Anti-Bribery Compliance | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:opsz,wght@6-72,400;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>
          {`
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] text-[15px] leading-[1.6] overflow-x-hidden antialiased">
        <main>
          {/* Hero Section: Brutalist Columns */}
          <section className="relative w-full h-[90vh] overflow-hidden bg-[#1c1b1b]">
            <img alt="Monolithic brutalist concrete structure" className="w-full h-full object-cover" src="/anti-bribery-corruption-integrity-services.jpeg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-[120px]">
              <div className="max-w-[1280px] mx-auto w-full">
                <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold text-white/70 mb-[16px] block tracking-[0.2em] uppercase">ADVISORY SERVICES</span>
                <h1 className="font-['Newsreader'] text-[56px] text-white max-w-[900px] mb-[24px] leading-[1.05] tracking-[-0.03em]">
                  Anti-bribery compliance is a board-level priority.
                </h1>
                <div className="w-32 h-1 bg-white"></div>
              </div>
            </div>
          </section>

          {/* Intro Text */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto grid grid-cols-12 gap-[32px] items-start">
            <div className="col-span-12 md:col-span-7">
              <p className="font-['Inter'] text-[18px] leading-relaxed text-[#1a1c1c] mb-[24px]">
                In an increasingly complex regulatory environment, integrity is no longer a policy, it is a strategic business imperative. Northrop Management helps organizations design, assess, and strengthen anti-bribery and anti-corruption frameworks that withstand regulatory scrutiny while reinforcing stakeholder confidence. From governance structures and third-party due diligence to internal controls, investigations, and compliance monitoring, we build practical integrity programs aligned with global standards and business realities.
              </p>
              <div className="h-px w-full bg-[#c4c7c7]"></div>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <img alt="Brutalist concrete staircase" 
              className="w-full aspect-square object-cover grayscale border border-[#c4c7c7]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClE7AlnlYZmCz7PbHlKc2LCiLMjj-a9wfmsasiGaa2U2HRIriHfE64TNybz8v7DH8VLSS9sCp_rO1PhurGCFfr6TzGI9saFwf3UF3ppaoD-dvkB3iwx0UE1KwU5l5DBIs_rarvIToTyq9dNpKE1U-mJX88G3nif_gFTx2W6WN7z69vO8SiT_4vUi7itRB3IxAGQ1Wa-AgoP1wwXnRlw8UMtormuGxojzIzX8P_JGBquAbZXzY2SgGZBNw_Ogxgno4RG-iXDKw1mj0" />
            </div>
          </section>

          {/* What We Do */}
          <section className="py-[120px] bg-[#f3f3f4] px-8 border-y border-[#c4c7c7]">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex justify-between items-end mb-[64px]">
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] uppercase tracking-[0.15em] border-l-4 border-[#0F0F0F] pl-[16px]">What We Do</h2>
                <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#444748] uppercase">SERVICE CAPABILITIES</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#c4c7c7]">
                <div className="p-[24px] border-r border-b border-[#c4c7c7] bg-[#ffffff]">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#5e5e5e] block mb-[8px]">01</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[16px]">ABC risk assessment</h3>
                  <p className="text-[#444748]">Identification and quantification of jurisdictional and operational corruption vectors.</p>
                </div>
                <div className="p-[24px] border-r border-b border-[#c4c7c7] bg-[#ffffff]">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#5e5e5e] block mb-[8px]">02</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[16px]">Third-party due diligence</h3>
                  <p className="text-[#444748]">Exhaustive intelligence gathering on intermediaries, partners, and supply chains.</p>
                </div>
                <div className="p-[24px] border-r border-b border-[#c4c7c7] bg-[#ffffff]">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#5e5e5e] block mb-[8px]">03</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[16px]">Compliance program design</h3>
                  <p className="text-[#444748]">Architectural development of internal controls and reporting structures.</p>
                </div>
                <div className="p-[24px] border-r border-b border-[#c4c7c7] bg-[#ffffff]">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#5e5e5e] block mb-[8px]">04</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[16px]">Internal investigations</h3>
                  <p className="text-[#444748]">Forensic response to whistleblowing and suspected regulatory breaches.</p>
                </div>
                <div className="p-[24px] border-r border-b border-[#c4c7c7] bg-[#ffffff]">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#5e5e5e] block mb-[8px]">05</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[16px]">M&amp;A due diligence</h3>
                  <p className="text-[#444748]">Pre-acquisition assessment of target integrity and liability legacy.</p>
                </div>
                <div className="p-[24px] border-r border-b border-[#c4c7c7] bg-[#ffffff]">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#5e5e5e] block mb-[8px]">06</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[16px]">Regulatory remediation</h3>
                  <p className="text-[#444748]">Strategic response following enforcement actions and structural rebuilding.</p>
                </div>
                <div className="p-[24px] border-r border-b border-[#c4c7c7] bg-[#ffffff]">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#5e5e5e] block mb-[8px]">07</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[16px]">Whistleblower protocols</h3>
                  <p className="text-[#444748]">Designing anonymous, high-integrity reporting and response channels.</p>
                </div>
                <div className="p-[24px] border-r border-b border-[#c4c7c7] bg-[#ffffff]">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#5e5e5e] block mb-[8px]">08</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[16px]">Board-level advisory</h3>
                  <p className="text-[#444748]">Direct strategic counsel to General Counsel and Audit Committees.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-[32px] items-center">
              <div className="col-span-12 md:col-span-5">
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] mb-[24px]">Who It's For</h2>
                <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#444748] mb-[24px]">
                  Our services are tailored for multinational organizations operating in high-risk jurisdictions where regulatory clarity is often elusive.
                </p>
                <img alt="Angular concrete structure" className="w-full aspect-[4/3] " src="/anti-bribery-corruption-integrity-services1.jpeg" />
              </div>
              <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[24px] md:pl-[32px]">
                <div className="border-l border-[#0F0F0F] pl-[16px] py-4">
                  <h4 className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] mb-[8px] text-[#0F0F0F] uppercase">PUBLIC CORPORATIONS</h4>
                  <p className="text-[15px] text-[#1a1c1c]">Fortune 500 entities facing rigorous SEC and DOJ oversight.</p>
                </div>
                <div className="border-l border-[#0F0F0F] pl-[16px] py-4">
                  <h4 className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] mb-[8px] text-[#0F0F0F] uppercase">INSTITUTIONAL INVESTORS</h4>
                  <p className="text-[15px] text-[#1a1c1c]">Private equity and pension funds managing ESG and compliance risks.</p>
                </div>
                <div className="border-l border-[#0F0F0F] pl-[16px] py-4">
                  <h4 className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] mb-[8px] text-[#0F0F0F] uppercase">GOVERNMENT BODIES</h4>
                  <p className="text-[15px] text-[#1a1c1c]">Sovereign entities seeking to modernize anti-corruption frameworks.</p>
                </div>
                <div className="border-l border-[#0F0F0F] pl-[16px] py-4">
                  <h4 className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] mb-[8px] text-[#0F0F0F] uppercase">LEGAL COUNSEL</h4>
                  <p className="text-[15px] text-[#1a1c1c]">International law firms requiring investigative and data support.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="bg-[#0F0F0F] text-[#ffffff] py-[120px] px-8">
            <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-12 gap-[32px] border border-white/20">
                <div className="col-span-12 md:col-span-6 p-[24px] border-r border-white/20">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-white/60 mb-[16px] block uppercase">CASE STUDY / 014</span>
                  <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] mb-[24px]">FCPA-ready pharma company: Global Remediation</h2>
                  <div className="space-y-[16px]">
                    <div>
                      <h4 className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#c8c6c5] uppercase">THE CHALLENGE</h4>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] opacity-80">A global pharmaceutical leader faced potential enforcement across four continents due to decentralized distributor relationships.</p>
                    </div>
                    <div>
                      <h4 className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#c8c6c5] uppercase">THE INTERVENTION</h4>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] opacity-80">Northrop implemented a centralized third-party monitoring platform and restructured the global compliance team, conducting 200+ on-site audits within 6 months.</p>
                    </div>
                    <div>
                      <h4 className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#c8c6c5] uppercase">THE OUTCOME</h4>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] opacity-80">Successful resolution with regulatory bodies with zero new findings in the follow-up monitor's report. Compliance is now a competitive advantage.</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center p-[24px] bg-white/5">
                  <div className="grid grid-cols-2 gap-[24px] text-center">
                    <div>
                      <div className="font-['Newsreader'] text-[56px] leading-[1.05]">200+</div>
                      <div className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#c8c6c5]">AUDITS CONDUCTED</div>
                    </div>
                    <div>
                      <div className="font-['Newsreader'] text-[56px] leading-[1.05]">0</div>
                      <div className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#c8c6c5]">REGULATORY FINES</div>
                    </div>
                    <div className="col-span-2 pt-[24px] border-t border-white/20">
                      <p className="font-['Newsreader'] text-[28px] leading-[1.4] italic">
                        "Northrop built a compliance framework that protects our business, reputation, and future. "</p>
                      <p className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] mt-[16px] text-[#c8c6c5] uppercase"> — MD, Ashish Chaudhary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="flex items-center justify-between mb-[64px] border-b border-[#c4c7c7] pb-[8px]">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] uppercase tracking-[0.15em]">Latest Intelligence</h2>
              <a className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] border-b border-[#0F0F0F] hover:text-[#0F0F0F] transition-colors uppercase" href="#">VIEW ALL PUBLICATIONS</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
              {/* Publication 1 */}
              <article className="flex flex-col group cursor-pointer">
                <div className="bg-[#e8e8e8] aspect-[3/4] mb-[16px] overflow-hidden relative border border-[#c4c7c7]">
                  <img alt="Intelligence report cover" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0ItjkxQG-ay_V4gPyX7ABnJGEOu9vT7unQIYZbi22HQmH6lmkQS-sh9gYA9zTTRg92IB6fojl137YPcnjxVZwBi9xLdmErAaexTkyOF08fCtku-O1_rqHqcneJBa638fkiKlm7qXugtOF8OKXzZuGuDSJtZRzlgFp2MR6mD1prmKPTz4LvqoiZAOb1hZfABpXcNbqGLv9zMBe4Li-O8nyfX2ggDsq5QNZMCFB58P66JIi0n61Yhq-3DziF-efvo9MylgK9vt-WK0" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200"></div>
                  <div className="absolute bottom-4 left-4 font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#1a1c1c] bg-[#f9f9f9] px-2 py-1">Q4 REPORT</div>
                </div>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] group-hover:text-[#0F0F0F] transition-colors">The Compliance Imperative</h3>
                <p className="text-[#444748] text-[15px] mb-[16px]">Strategic shifts in cross-border enforcement for the 2025 fiscal year.</p>
                <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] flex items-center gap-1 group-hover:underline uppercase">READ ARTICLE <span className="material-symbols-outlined text-[12px]">arrow_forward</span></span>
              </article>
              {/* Publication 2 */}
              <article className="flex flex-col group cursor-pointer">
                <div className="bg-[#e8e8e8] aspect-[3/4] mb-[16px] overflow-hidden relative border border-[#c4c7c7]">
                  <img alt="White paper cover" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwBYiMsHUUFxOMUr2SN2F-chnvrbW2KZAsaXn2evEiQW3JDmd_FvS4m8yLdMNrXfQSulfjC3izcM6tfDwq1Wt0HXdRyvaMMf7bMHgqBqL70Aq0-P9K8eBNHajf7LwpOuBpZxC0xjwu1--kmuuX7uYaOBtBUSRTHqkNTSTzkVCh_WqlkBdigTnVUOJDTXVXstqpll6iyQu3l57q--PmBgf3EVQrqLw_Ua_iSJK954-YzbKOZL24ko9q4HhUUDpqgA7tRyzPGfsPIPg" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200"></div>
                  <div className="absolute bottom-4 left-4 font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#1a1c1c] bg-[#f9f9f9] px-2 py-1">WHITE PAPER</div>
                </div>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] group-hover:text-[#0F0F0F] transition-colors">Forensic AI in ABC</h3>
                <p className="text-[#444748] text-[15px] mb-[16px]">How machine learning is identifying bribery patterns in real-time transactions.</p>
                <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] flex items-center gap-1 group-hover:underline uppercase">READ ARTICLE <span className="material-symbols-outlined text-[12px]">arrow_forward</span></span>
              </article>
              {/* Publication 3 */}
              <article className="flex flex-col group cursor-pointer">
                <div className="bg-[#e8e8e8] aspect-[3/4] mb-[16px] overflow-hidden relative border border-[#c4c7c7]">
                  <img alt="Briefing cover" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCstR0QkJ8DkEhTaxTK98zNP3jRc2JN2CdlqydcPO8eS9a6RYo7vQoUCuaK4DIKJX_rScXj17WNVHotZQTM0FroSa9npatzL1pOOo6zYXXoY-hTwLXzjRaLBHQ5wYaIyKNC6MotyO0f-9ovNqC4kvNubzs-Z0J0ZtdhDi0IG48PszGI5WiNBwMvJ5-r6OIQ68JKj94iCpUeEDAh_vi5AWqu9RXBR1JuKTqGQFBTUeTWuBcb6I45q6_ak6fr6nrAsYuYKXWcMepIUVw" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200"></div>
                  <div className="absolute bottom-4 left-4 font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#1a1c1c] bg-[#f9f9f9] px-2 py-1">BRIEFING</div>
                </div>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] group-hover:text-[#0F0F0F] transition-colors">The Cost of Integrity</h3>
                <p className="text-[#444748] text-[15px] mb-[16px]">Analyzing the ROI of robust anti-corruption programs in emerging markets.</p>
                <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] flex items-center gap-1 group-hover:underline uppercase">READ ARTICLE <span className="material-symbols-outlined text-[12px]">arrow_forward</span></span>
              </article>
              {/* Publication 4 */}
              <article className="flex flex-col group cursor-pointer">
                <div className="bg-[#e8e8e8] aspect-[3/4] mb-[16px] overflow-hidden relative border border-[#c4c7c7]">
                  <img alt="Analysis cover" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRaKeesmeTbnAit8aeE6-45lsNwuiXss-SPRaON4dWT-rEc0p3DaWFIhz90-pCIyn7DOpLWMiDYLH86jaXkgPUnKPr18oTicHinzatFrRj0-cuD12BMJyN4TVHIEuGSQN0dRms8AcY_QeHQxzLP1kRROA95ema0NOEAs-TAUu9m0BVlA8f-JSCwJzyXTtkjcO1YLWm9TzfawoMyE7MO78fQUo1O5UB_ltNNieWj5o6ANP488zBmqbXr9vrRB6ZjOHnJdqQQVZ3uMQ" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200"></div>
                  <div className="absolute bottom-4 left-4 font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] text-[#1a1c1c] bg-[#f9f9f9] px-2 py-1">ANALYSIS</div>
                </div>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] group-hover:text-[#0F0F0F] transition-colors">Supply Chain Sanctions</h3>
                <p className="text-[#444748] text-[15px] mb-[16px]">Navigating the intersection of ABC and international sanctions compliance.</p>
                <span className="font-['Inter'] text-[11px] leading-[1.2] font-semibold tracking-[0.15em] flex items-center gap-1 group-hover:underline uppercase">READ ARTICLE <span className="material-symbols-outlined text-[12px]">arrow_forward</span></span>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AntiBriberyCompliance;