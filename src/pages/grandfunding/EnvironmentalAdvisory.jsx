import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const EnvironmentalAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] font-inter font-normal text-[15px] leading-[1.6] antialiased">
      <Helmet>
        <title>Environmental Advisory | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:opsz,ital,wght@6-72,0,400;6-72,0,600;6-72,0,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="grid grid-cols-12 gap-[32px] items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-4">SERVICE 1F / ENVIRONMENTAL ADVISORY</span>
              <h1 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] text-[#1a1c1c] mb-8">The path to net zero begins with knowing exactly where you stand.</h1>
            </div>
            <div className="col-span-12 lg:col-span-4 pb-2">
              <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#444748] leading-relaxed">
                Precision-engineered carbon accounting and strategic net-zero pathways for global industrial leaders.
              </p>
            </div>
          </div>
          <div className="mt-[64px] h-[1px] bg-[#c4c7c7] w-full"></div>
        </section>

        {/* Core Service Pillars */}
        <section className="max-w-[1280px] mx-auto px-8 mb-[120px]">
          <div className="grid grid-cols-12 gap-[32px]">
            {/* Pillar 1 */}
            <div className="col-span-12 md:col-span-4 p-8 border border-[#e2e2e2] bg-[#ffffff]">
              <span className="material-symbols-outlined text-4xl mb-6 block text-[#000000]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>analytics</span>
              <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-4">Scope 1, 2, and 3 Inventory</h3>
              <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Comprehensive greenhouse gas accounting across your entire value chain, utilizing Tier 1 emission factors for institutional-grade reporting accuracy.</p>
            </div>
            {/* Pillar 2 */}
            <div className="col-span-12 md:col-span-4 p-8 border border-[#e2e2e2] bg-[#ffffff]">
              <span className="material-symbols-outlined text-4xl mb-6 block text-[#000000]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>rule</span>
              <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-4">SBTi Alignment</h3>
              <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Validation of short-term and long-term targets against Science-Based Targets initiative standards to ensure climate credibility and risk mitigation.</p>
            </div>
            {/* Pillar 3 */}
            <div className="col-span-12 md:col-span-4 p-8 border border-[#e2e2e2] bg-[#ffffff]">
              <span className="material-symbols-outlined text-4xl mb-6 block text-[#000000]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>route</span>
              <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-4">Decarbonisation Roadmap</h3>
              <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Strategic deployment of marginal abatement cost curves to prioritize interventions that maximize impact while optimizing capital allocation.</p>
            </div>
          </div>
        </section>

        {/* Case Study: Cement Producer */}
        <section className="bg-[#f3f3f4] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-12 gap-[32px] items-stretch">
              <div className="col-span-12 lg:col-span-6 bg-white p-12 border border-[#e2e2e2] flex flex-col justify-between">
                <div>
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-6">CASE STUDY / INDUSTRIAL SECTOR</span>
                  <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-8">'From Footprint to Roadmap: How a ₹5,000 Cr Cement Producer Set Its Science-Based Net Zero Target'</h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-2">THE CHALLENGE</h4>
                      <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">A leading hard-to-abate industrial player faced increasing investor pressure for a verifiable net-zero commitment without a clear baseline for Scope 3 emissions.</p>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-2">THE INTERVENTION</h4>
                      <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Implementation of Northrop’s proprietary carbon engine to map 14 Scope 3 categories and identify fuel-switching opportunities in thermal energy operations.</p>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-2">THE OUTCOME</h4>
                      <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Official SBTi validation within 9 months and a 20% reduction in thermal intensity forecasted over a 5-year CAPEX cycle.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <button className="border border-[#000000] text-[#000000] px-8 py-4 font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] hover:bg-[#000000] hover:text-[#ffffff] transition-colors duration-200">
                    DOWNLOAD FULL REPORT
                  </button>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 min-h-[500px] relative overflow-hidden">
                <img 
                  alt="A high-contrast, black and white photograph of a massive, brutalist concrete structure. The architecture features sharp geometric angles and deep, stark shadows cast by a low-hanging sun. The raw, textured concrete surface is highly detailed, emphasizing its heavy, institutional presence. The composition is authoritative and stable, capturing a monolithic industrial landmark against a clear sky." 
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQXQH3Ni1ASkrlWgpVB7D4yFMBWc_sQWNhZzS8E-uONtGBky_9ZtyPq9nkDVdrZMowW2mEIH7nPPEydhNHEF0v4h0ZwalK0BRyeySSvbgQd9MHNnhw511ThECpLKJTV6Iyo09ph8GJjqIOpkVA1G9_usXJ7Hvmjw9FeFJGM6owjAbA-qxsHlhvLNTI1EIswxAkzFRiT5Z4X285gpsOF04Ym0r5Bg6KVTcaVnfiB9xqo1LhV86p_JrOy4M6oDfMjd4zgju-ckE062s"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Publication Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#e2e2e2] pb-6">
            <h2 className="font-newsreader font-normal text-[32px] leading-[1.2]">Institutional Intelligence</h2>
            <a className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] flex items-center gap-2 group" href="#">
              VIEW ARCHIVE <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer">
              <div className="aspect-video bg-[#eeeeee] mb-6 overflow-hidden relative">
                <img 
                  alt="Brutalist skyscraper facade with repetitive geometric windows and deep shadows" 
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-150 brightness-50 group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLob8bKfrQSiW6dZ-PaSJyDRbW1pc1Wmy7tCbOyADNYIV9EZoz6X89VOsC4mcc5MFmkhP8fGbg3yr9UkgdtPZ59dKZ2hHh_jgsWjfU24HZ-t8vMS4ANVDFjoQgb_4qQBNzpzK9i0m89GT6T2I3hTTfacMq5lh0LWTmlpytXe8d4vLZQIU_8_sqvQTb4TPiYWl9MdvEQwHZtTBG60E5jyeS0Ag6n3TPEYGZXMML9l2If76lZK-DQHxJgwgdWd_dTc7Ktq58qcl2RSc"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center p-12 text-center">
                  <h3 className="font-newsreader font-normal text-[32px] leading-[1.2] text-white italic relative z-10">Net Zero or Net Noise?</h3>
                </div>
              </div>
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-2">PUBLICATION / Q4 2024</span>
              <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-3 group-hover:underline underline-offset-4 decoration-1">The Critical Distinction Between Offsetting and Real-World Decarbonisation</h3>
              <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">An interrogation of current corporate carbon strategies and the rising regulatory risk of greenwashing in institutional reporting.</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8 flex flex-col justify-center bg-[#f9f9f9] p-12 border border-[#e2e2e2] relative overflow-hidden">
              {/* Background decorative brutalist texture */}
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
                <img 
                  alt="" 
                  className="w-full h-full object-cover grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIrJHeCTWCMMb0r-_Comd3wwXm66osnyAzEb_NRPMOmX2NKkBr4pxqErmOv1ilxqDl3oXc6xMZSJjHR3t009e1NcOIs_8ETVxi8fBRQu82jtMT2Z4rKnh4yObQDc7LbgTVsgviicwIoL11u9qeAC9ZjHwOurGGOBaKZJxfZ0qi48XJxx2r7OoHBUo1QRl2kQ9Wp_jgLxB_5zIFOkHTgzgVMJFW4OfkY4ektCWfAvqE9pryMigVL2LnOKfZrQu7CQgAosCEHp1pdsk"
                />
              </div>
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] mb-4 relative z-10">DATA MODULE / GLOBAL RISK INDEX</span>
              <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-6 relative z-10">Industrial Carbon Exposure (2025 Forecast)</h3>
              <div className="space-y-8 relative z-10">
                <div className="space-y-2">
                  <div className="flex justify-between font-inter font-semibold uppercase tracking-[0.1em] text-[10px]">
                    <span>CEMENT & STEEL</span>
                    <span>HIGH RISK</span>
                  </div>
                  <div className="h-1 bg-[#e2e2e2] w-full">
                    <div className="h-1 bg-[#000000] w-[92%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-inter font-semibold uppercase tracking-[0.1em] text-[10px]">
                    <span>CHEMICALS & REFINING</span>
                    <span>MODERATE-HIGH RISK</span>
                  </div>
                  <div className="h-1 bg-[#e2e2e2] w-full">
                    <div className="h-1 bg-[#000000] w-[74%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-inter font-semibold uppercase tracking-[0.1em] text-[10px]">
                    <span>LOGISTICS & AVIATION</span>
                    <span>TRANSITION RISK</span>
                  </div>
                  <div className="h-1 bg-[#e2e2e2] w-full">
                    <div className="h-1 bg-[#000000] w-[58%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1c1b1b] py-[120px] relative overflow-hidden">
          <img 
            alt="Abstract concrete architectural detail" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale brightness-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa28zcH1yIJXTs0sqOrKZMxkzp1SJfDfpJAIP0OdFDlA0L8RERmyl8z2UtL5gEnRr5PJ4oPOyOXNcIg6PebhzK8Em99TkUnnqsRArM8_6qMvtbFMAjffForQ8yCgvQLc0DYF4cF_j3LVxREHquBu2A91aNkGG4DswTcTBVEYt2wbr6PHlsR1RnbY0WayLqAPQUnI8MZmmIVt_uIgkN0qa7Xa_xZtOhHmonL8crwZ-ASv78tjaQFBohZvZTz5cyl6KYl-CmWlqAEIA"
          />
          <div className="max-w-[800px] mx-auto px-8 text-center relative z-10">
            <h2 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] text-white mb-8">Ready to formalize your climate transition?</h2>
            <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#858383] mb-12">
              Our advisors specialize in bridging the gap between climate science and industrial operations.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-[16px]">
              <button className="bg-white text-[#000000] px-12 py-5 font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] hover:bg-[#e2e2e2] transition-colors duration-200">
                SCHEDULE A BRIEFING
              </button>
              <button className="border border-[#858383] text-white px-12 py-5 font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] hover:bg-white/10 transition-colors duration-200">
                VIEW METHODOLOGY
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EnvironmentalAdvisory;
