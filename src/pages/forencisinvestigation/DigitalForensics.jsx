import React from 'react';
import { Helmet } from 'react-helmet-async';

const DigitalForensics = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>
          {`
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
            body {
              background-color: #f9f9f9;
              color: #1a1c1c;
              -webkit-font-smoothing: antialiased;
            }
            .brutalist-grid {
              background-image: linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px);
              background-size: 40px 40px;
            }
          `}
        </style>
      </Helmet>

      <main className="font-['Inter'] text-[15px] leading-[1.6] text-[#1a1c1c]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex flex-col justify-end">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img alt="Monolithic brutalist concrete structure with deep geometric shadows" className="w-full h-full object-cover grayscale brightness-90 contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGPbdqJNa315X3xf8ympVjtCar4Ew8boJznha08Z-aOHpKl7qgFGxcj0zgDZH_QozF0LNDtart2wAFBHbRUnX2qAnS9TvHesSwx7EEgnjIXV9e3c2GDFSfC6MceVDRXMncwajACz9zdv1IFdC194dEKdsNRRxa2Wl8g9UpX6OM5ji7FV9rOeWNvnT6ATZM_icQPjbLuoq0BOS0vXbAe3FnoMfs9a1HbY10jdsyeq4BEO_RUzu1qZPm4BX2Niz3NTbRdL2BGv1NXlQ" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto w-full px-8 pb-[120px]">
            <div className="bg-white/95 backdrop-blur-md p-[24px] max-w-3xl border border-[#c4c7c7] shadow-2xl">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] mb-[8px] block uppercase">4G. DIGITAL FORENSICS &amp; CYBER INVESTIGATIONS</span>
              <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[16px] text-[#1a1c1c]">Legally admissible and technically unimpeachable digital evidence.</h1>
              <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-2xl">Providing institutional intelligence and forensic expertise to global law firms, corporations, and government entities.</p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-b border-[#c4c7c7]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[16px]">What We Do</h2>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] mb-[24px]">Uncovering the truth through rigorous technical analysis and a deep understanding of the digital threat landscape.</p>
              <div className="aspect-square w-full overflow-hidden border border-[#c4c7c7] grayscale brightness-75 hover:grayscale-0 transition-all duration-700">
                <img alt="Geometric concrete patterns" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV3yAotGqU5CwLFM1_2N-O7VaSNgAyq67DkX9gw9aRk81KdJz4kVmRC4sehTv-ftpMa1coOpov_5RxftCMjGsYrJdsHBMlVr8AAPdw7wLM-WBH3rnJ2fEOu9Su1QmpJaH3QPakpMwWJwTzLhAqwpH1ejJxqbh-TTXjJFRmrMwI9qET_enhTSY07dfBIMHGlhmOT7s8SLGYcLsz1JC9Jlio8QeXmI82fINLSiSe0oz-aV2yno4BxmbxQsqmg6Ho2wKsUjY8_SJml1Y" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="border-t border-[#c4c7c7] pt-[16px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] mb-2 block uppercase">01</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2">Computer Forensics</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Comprehensive analysis of workstations, servers, and storage media to recover deleted data and reconstruct timelines.</p>
              </div>
              <div className="border-t border-[#c4c7c7] pt-[16px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] mb-2 block uppercase">02</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2">Cloud Forensics</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Navigating complex cloud environments to identify data exfiltration and unauthorized access across AWS, Azure, and Google Cloud.</p>
              </div>
              <div className="border-t border-[#c4c7c7] pt-[16px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] mb-2 block uppercase">03</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2">eDiscovery</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Managing the end-to-end electronic discovery process, ensuring legal compliance and data integrity throughout the litigation lifecycle.</p>
              </div>
              <div className="border-t border-[#c4c7c7] pt-[16px]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] mb-2 block uppercase">04</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2">Incident Response</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Rapid deployment to contain breaches, identify root causes, and provide expert testimony on technical findings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-[#f3f3f4] py-[120px] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-12 gap-[32px] items-center">
              <div className="col-span-12 md:col-span-6">
                <div className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] mb-[16px] uppercase uppercase">Core Clientele</div>
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px]">Specialized intelligence for the highest levels of global operation.</h2>
                <ul className="space-y-[16px]">
                  <li className="flex items-start gap-4 border-b border-[#c4c7c7] pb-[8px]">
                    <span className="material-symbols-outlined text-[#000000]" data-icon="account_balance">account_balance</span>
                    <span className="font-['Inter'] text-[18px] leading-[1.6] font-normal">International Law Firms requiring expert witness testimony.</span>
                  </li>
                  <li className="flex items-start gap-4 border-b border-[#c4c7c7] pb-[8px]">
                    <span className="material-symbols-outlined text-[#000000]" data-icon="corporate_fare">corporate_fare</span>
                    <span className="font-['Inter'] text-[18px] leading-[1.6] font-normal">Fortune 500 Boards mitigating internal and external risks.</span>
                  </li>
                  <li className="flex items-start gap-4 border-b border-[#c4c7c7] pb-[8px]">
                    <span className="material-symbols-outlined text-[#000000]" data-icon="gavel">gavel</span>
                    <span className="font-['Inter'] text-[18px] leading-[1.6] font-normal">Regulatory Agencies overseeing complex financial compliance.</span>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end">
                <div className="relative w-full max-w-md aspect-[4/5] bg-[#000000] overflow-hidden">
                  <img alt="Aggressive brutalist architecture lines" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2JaN-Q1K3f-YiRWbyMIaBevzvlbJyp7cpoQIStP7dfk0ymAd9tsvmcYrsBjSSFXT6cR1GDa555tOqktzdmjgwVMmca6S3r1djCK1E-hQz7M0RWpyOYJ-smrPi_LiUFFtN2owl3WJ5vHy7U8cJtLpeE4IqsiZ8a6BXQyexjuoyNwLJIjU69THTTH8kfm8CCfeimu0iR9_MsUdwHeWSFd_99hpgySUU_U4cUOAV5YMV2JPUhxkBmTMHLVKnHu2SwcnJdPHfX4_EohY" />
                  <div className="relative z-10 p-12 flex flex-col justify-center h-full text-[#ffffff]">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase mb-4 opacity-70">CONFIDENTIALITY RATIO</span>
                    <div className="text-[80px] font-['Newsreader'] leading-none mb-4 tracking-[-0.02em]">98%</div>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal">of our engagements are covered by strict non-disclosure agreements, reflecting our position as the silent partner in global risk management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="bg-[#eeeeee] p-12 border border-[#c4c7c7] relative">
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 md:col-span-4">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] uppercase border border-[#000000] px-3 py-1 inline-block mb-[24px]">CASE STUDY: INTELLECTUAL PROPERTY</span>
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[16px]">Proving Data Theft in a Rs. 60 Cr Litigation</h2>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] mb-[24px]">A landmark investigation involving the clandestine exfiltration of proprietary engineering blueprints prior to a major acquisition.</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#000000] pl-4">
                    <div className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#444748]">VALUATION</div>
                    <div className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal">Rs. 600,000,000</div>
                  </div>
                  <div className="border-l-4 border-[#000000] pl-4">
                    <div className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#444748]">OUTCOME</div>
                    <div className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal">Unanimous Verdict</div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 flex flex-col gap-[24px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                  <div className="p-6 bg-white border border-[#c4c7c7]">
                    <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#000000] mb-2">THE CHALLENGE</h4>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal">A departing senior executive wiped all local machines and cloud logs, leaving no apparent trail of a massive data transfer.</p>
                  </div>
                  <div className="p-6 bg-white border border-[#c4c7c7]">
                    <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#000000] mb-2">THE INTERVENTION</h4>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal">4G deployed proprietary artifacts analysis to recover shadow volume copies and registry fragments indicating external drive usage.</p>
                  </div>
                  <div className="p-6 bg-white border border-[#c4c7c7]">
                    <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#000000] mb-2">THE RESULT</h4>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal">Identification of the specific serial number of the drive used, leading to a legal seizure and recovery of the stolen IP.</p>
                  </div>
                </div>
                <div className="h-[350px] w-full bg-[#1c1b1b] relative overflow-hidden">
                  <img alt="Abstract concrete shadows" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5ePmbdHOzhKckxUTaTIwr1Lnjw8jbvzltD61murT4LzYyvTdzL85rAnHHDQAH0AwaJwLDmYgnXPehAVSWaxJPf2BsARQE6h5mb6BHlRsHCgH9GLESkNsoXyZ-qFHyC5fPHfxD8w5rCzlbM447iTeCRPhGXrgkisDhgis2SvGNoH-xn_xCTJjxG9THNo3x1pw3jFma5ZEeN2AlpACYFuUk9CJQOZpq-cc8OXjZSqsEvz-UuWsJ6Xd9P_hD-8BGCXsbcTEjupprYSU" />
                  <div className="absolute inset-0 brutalist-grid opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#858383] tracking-widest px-8 text-center uppercase bg-[#1c1b1b]/80 py-4 backdrop-blur-sm border border-[#c4c7c7]/30">Digital Evidence Reconstruction Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Intelligence */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-t border-[#c4c7c7]">
          <div className="flex justify-between items-end mb-[64px]">
            <div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#000000] mb-2 block">QUARTERLY BRIEFING</span>
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal">Latest Intelligence</h2>
            </div>
            <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#444748] hover:text-[#000000] border-b border-[#747878] hover:border-[#000000] pb-1 transition-all" href="#">View All Publications</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px]">
            {/* Pub 1 */}
            <article className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#e2e2e2] mb-[16px] overflow-hidden border border-[#c4c7c7]">
                <img alt="Industrial server infrastructure" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHIgAPyfrljlPDoYwwaE5AWQaHI1y22oY4BcTIVElxYD4te9zqt2iN91ueVqY0LY0v6ZdlbUKXhXVZ4vHOko95JvO5XMa_sX66AEvWpp_E4FwOdYUIrjNJPsUqY6elyrdEb0fu_0GTZwQbmlbCkGTHS8KTwd0K1mQ0TRG0vWqZxXVNFZHk1goqcvLFXHlRZGXNr49kT9hyBMQm7EcwwR_nY1laandasFTEKoUA0Sm94mBP_XW5DEZc8i-6NV08VtOuhrAdd0_jn3o" />
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#000000] mb-2 block">CYBERSECURITY</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight mb-2 group-hover:underline">The Digital Crime Wave</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">An analysis of the increasing sophistication of ransomware-as-a-service (RaaS).</p>
            </article>
            {/* Pub 2 */}
            <article className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#e2e2e2] mb-[16px] overflow-hidden border border-[#c4c7c7]">
                <img alt="Abstract architectural grid" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYQUGtQSsTQMdwbyqkGZKNo_N2D3eJNnta0rwslrtheKiNljpp8Kygh1AZ5MoPJR4k2LLNGnYdCX5G-3P7rPtQCJ1NkDMQKOlE_VDnLWBLIZWt9KzJhf7tEEtbToIi3flYtHnqEXoSjE-HwT4JYAJcbh_Ymj4q7KVjcf7UcmWhTbFdEPdZULwDP_D7P_EdfuupY7s2kkyMkWi4lPSNLAOsBy_xhrEDtwzrPH6iF0wPSSSFeXg71NDR2AdTqoIDWjwZ2whP720Ap8E" />
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#000000] mb-2 block">LEGAL TECH</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight mb-2 group-hover:underline">AI in eDiscovery</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">The ethical implications and technical limits of large language models in legal review.</p>
            </article>
            {/* Pub 3 */}
            <article className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#e2e2e2] mb-[16px] overflow-hidden border border-[#c4c7c7]">
                <img alt="Stark concrete monolithic tower" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJEdqpQaC5RITK6TIq30Ijnv93p-PvRvKWxwfO-Uqk2cHdro40YHMSz-nQMqmXovepaTdRv-Y6CqKf8TYOrQQyYH_lhOhl_eqK_2xJPepbJbRjvCjlBUwSbWm3A4naYP4FoO0RF_c8GaOzrWCEG-iFXGSsE4gGb_SW3AJk9AMk-rqOQGWVmmcfxiOcfOiZgRQkkEyWQ_JsmAbqnNVASG8xdhQ0ACVwyr4ISXrh9P0Zf75nnX8PG8HshXXda_dOlvUqOrttHEdWHo0" />
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#000000] mb-2 block">FORENSICS</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight mb-2 group-hover:underline">Mobile Artifact Evolution</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Tracking encrypted communication metadata across modern mobile operating systems.</p>
            </article>
            {/* Pub 4 */}
            <article className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#e2e2e2] mb-[16px] overflow-hidden border border-[#c4c7c7]">
                <div className="w-full h-full flex flex-col justify-between p-8 bg-[#1a1c1c] text-[#f9f9f9] group-hover:bg-[#000000] transition-colors">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase opacity-50">ANNUAL REPORT</span>
                  <div className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal">2026 Risk Outlook</div>
                  <span className="material-symbols-outlined text-4xl" data-icon="arrow_forward">arrow_forward</span>
                </div>
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#000000] mb-2 block">ADVISORY</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight mb-2 group-hover:underline">Global Risk Inventory</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Preparing for the next decade of decentralized digital threats.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default DigitalForensics;
