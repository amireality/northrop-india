import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SustainableSupplyChain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] font-inter font-normal text-[15px] leading-[1.6] antialiased">
      <Helmet>
        <title>Sustainable Supply Chain Due Diligence | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;500;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex items-end pb-[120px] overflow-hidden border-b border-[#c4c7c7]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img alt="A brutalist, high-contrast black and white photograph of a massive raw concrete structure featuring sharp geometric angles and deep, stark shadows."
              className="w-full h-full object-cover "
              src="/grandesgimg/sustainable-supply-chain-due-diligence1.jpeg" />

          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full pt-[120px]">
            <div className="max-w-3xl">
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#e2e2e2] block mb-4">Service 1G</span>
              <h1 className="font-newsreader font-normal text-[48px] md:text-[56px] leading-[1.1] tracking-[-0.02em] text-white mb-8">Sustainable Supply Chain Due Diligence.</h1>
              <p className="font-newsreader font-normal text-[28px] leading-[1.4] text-[#d1d1d1] max-w-2xl">
                Your ESG credibility is only as strong as your weakest supplier.
              </p>
            </div>
          </div>
        </section>

        {/* Service Capabilities */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] bg-[#f3f3f4]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 lg:col-span-4 border-l border-[#c4c7c7] pl-[24px]">
              <span className="material-symbols-outlined text-[#000000] mb-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", display: 'inline-block', lineHeight: 1 }}>account_tree</span>
              <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Supply chain risk mapping</h3>
              <p className="text-[#444748] font-inter font-normal text-[15px] leading-[1.6]">Detailed visualization of multi-tier supplier networks to identify hidden geopolitical and environmental vulnerabilities before they escalate.</p>
            </div>
            <div className="col-span-12 lg:col-span-4 border-l border-[#c4c7c7] pl-[24px]">
              <span className="material-symbols-outlined text-[#000000] mb-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", display: 'inline-block', lineHeight: 1 }}>fact_check</span>
              <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Supplier ESG audits</h3>
              <p className="text-[#444748] font-inter font-normal text-[15px] leading-[1.6]">Rigorous on-site and remote assessments measuring environmental performance, governance structures, and ethical labor standards across global jurisdictions.</p>
            </div>
            <div className="col-span-12 lg:col-span-4 border-l border-[#c4c7c7] pl-[24px]">
              <span className="material-symbols-outlined text-[#000000] mb-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", display: 'inline-block', lineHeight: 1 }}>gavel</span>
              <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Human rights risk assessment</h3>
              <p className="text-[#444748] font-inter font-normal text-[15px] leading-[1.6]">Formal investigative protocols to detect forced labor and modern slavery, ensuring full compliance with evolving global transparency mandates.</p>
            </div>
          </div>
        </section>

        {/* Case Study Block */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="bg-[#f9f9f9] border border-[#c4c7c7] grid grid-cols-12 overflow-hidden">
            <div className="col-span-12 lg:col-span-6 p-12 flex flex-col justify-center">
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-4">CASE STUDY // MANUFACTURING</span>
              <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-6">'EU Market Access Preserved: How an Indian Garment Exporter Achieved EUDR Compliance'</h2>
              <div className="space-y-6 mb-8">
                <div>
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] block text-[#1a1c1c] mb-1">THE CHALLENGE</span>
                  <p className="text-[#444748]">Impending EU Deforestation Regulation (EUDR) threatened the primary export revenue of a Tier-1 textile manufacturer due to lack of traceability in fiber sourcing.</p>
                </div>
                <div>
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] block text-[#1a1c1c] mb-1">THE INTERVENTION</span>
                  <p className="text-[#444748]">Northrop Management deployed field auditors across three states to map the supply chain to the plot-of-land level using satellite data verification.</p>
                </div>
                <div>
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] block text-[#1a1c1c] mb-1">THE OUTCOME</span>
                  <p className="text-[#444748]">Full certification achieved 6 months ahead of schedule, securing $400M in European contracts and establishing an industry-leading traceability framework.</p>
                </div>
              </div>
              <a className="inline-flex items-center font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] hover:gap-2 transition-all" href="#">
                VIEW FULL REPORT <span className="material-symbols-outlined ml-2 text-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", display: 'inline-block', lineHeight: 1 }}>arrow_forward</span>
              </a>
            </div>
            <div className="col-span-12 lg:col-span-6 relative min-h-[400px]">
              <img
                alt="A stark, desaturated architectural shot of a brutalist concrete monolith. Sharp diagonal shadows cut across the raw industrial surface, emphasizing the heavy, institutional weight of the structure. The composition is geometric and bold, perfectly mirroring the concept of uncompromising traceability and authoritative oversight."
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-150"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWV6JIVXjx37sg0dx0sAYZRYCWK4efGamAk3YnWFAO_7Xq32LahvO_26EBz1iD1vNhcaWy1DiR1_Rv9LyMogW-9cigTPthMmWIRNCABubBFhoSX0oAyh1aUxu-iVuVYXIsuvNSoIxUU1hqiuoPUwcunyoGNUwpPI3Aa6dCjQxedHN-F7qw9Cawf5SJhAE6eETJMcHSnAl6RFg2WmwDawwSBywxMfEusUlZQnx2vmwKyrZmfPF7tfUVohBx5DMMx87zwQI6Z3K0boU"
              />
              <div className="absolute inset-0 bg-[#000000]/40 mix-blend-multiply"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-[#ffffff] p-12 text-center">
                <div className="text-6xl font-newsreader font-normal text-[48px] leading-[1.1] mb-2">100%</div>
                <div className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] opacity-80 tracking-widest text-[#ffffff]">TRACEABILITY VERIFIED</div>
                <div className="w-16 h-[1px] bg-[#ffffff] my-8"></div>
                <p className="font-newsreader font-normal text-[18px] leading-[1.6] italic">"A benchmark for ethical manufacturing in the Indo-Pacific corridor."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Publication & Data Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-t border-[#c4c7c7]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 lg:col-span-4">
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] block mb-6">INTELLIGENCE BRIEF</span>
              <div className="border-t border-[#000000] pt-6">
                <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-4">'The Hidden ESG Risk in India's Supply Chains'</h3>
                <p className="text-[#444748] font-inter font-normal text-[15px] leading-[1.6] mb-8">An institutional analysis of regulatory gaps and emerging enforcement trends affecting the global manufacturing sector in 2026.</p>
                <button className="border border-[#000000] px-[24px] py-3 font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] hover:bg-[#000000] hover:text-[#ffffff] transition-colors duration-200">DOWNLOAD WHITE PAPER</button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-[#f3f3f4] p-8 h-full">
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] block mb-8">SUPPLIER RISK DISTRIBUTION (REGIONAL)</span>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] mb-2">
                      <span>LABOR STANDARDS RISK</span>
                      <span className="text-blue-600">68%</span>
                    </div>
                    <div className="w-full h-1 bg-[#e2e2e2]">
                      <div className="h-full bg-[#000000]" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] mb-2">
                      <span>GOVERNANCE OPAQUENESS</span>
                      <span className="text-blue-600">42%</span>
                    </div>
                    <div className="w-full h-1 bg-[#e2e2e2]">
                      <div className="h-full bg-[#000000]" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] mb-2">
                      <span>ENVIRONMENTAL COMPLIANCE</span>
                      <span className="text-blue-600">81%</span>
                    </div>
                    <div className="w-full h-1 bg-[#e2e2e2]">
                      <div className="h-full bg-[#000000]" style={{ width: '81%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-[12px] font-inter font-semibold uppercase tracking-[0.1em] text-[#444748] tracking-tighter">Source: Northrop Management Internal Audit Database 2026-27</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#000000] text-[#ffffff] py-[120px] relative overflow-hidden">
          <img
            alt="A brutalist architectural detail of repeating raw concrete pillars and sharp, rhythmic shadows. The image provides an authoritative and heavy backdrop for the final call to action."
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 contrast-125"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2lx7PosSOw1gHCYegg2kOTBcADiTrdAknE3WKY7jttZZTdeiBca4Jct9ipvMO6O01mduXuBxyk1cMAKBCu0hF9uCbPs2fsOe074IgStulFJdS-dMDWM5shysIy0Va0Ew_Nszpo-maCu8HUUvR022zt1I2JSWfIQLKDxhJZG9qvtzQejZHWiHjd3V8Ay-ACH9hWQSpz65FaRiS1yJ5Dxzzqf4fafDVltofWn7LsTVsVhwkMiu8Pl6Bo8OPJmMX3WvfjLYHbX1lvgQ"
          />
          <div className="max-w-[1280px] mx-auto px-8 text-center relative z-10">
            <h2 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] mb-[24px]">Secure Your Value Chain.</h2>
            <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#858383] max-w-xl mx-auto mb-[64px]">Institutional-grade due diligence for firms operating in high-complexity global markets.</p>
            <div className="flex flex-col md:flex-row justify-center gap-[16px]">
              <button className="bg-[#ffffff] text-[#000000] px-12 py-4 font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2]">SCHEDULE AUDIT</button>
              <button className="border border-[#ffffff] text-[#ffffff] px-12 py-4 font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2]">VIEW METHODOLOGY</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SustainableSupplyChain;
