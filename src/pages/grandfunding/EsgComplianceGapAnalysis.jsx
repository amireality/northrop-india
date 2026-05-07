import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const EsgComplianceGapAnalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] font-inter font-normal text-[15px] leading-[1.6]">
      <Helmet>
        <title>ESG Compliance & Gap Analysis | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>

      <main className="pt-32">
        {/* Hero Section */}
        <header className="max-w-[1280px] mx-auto px-8 mb-[64px]">
          <div className="grid grid-cols-12 gap-[32px] items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] mb-[16px] block">
                SERVICE 1D / SUSTAINABILITY ADVISORY
              </span>
              <h1 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] mb-[24px]">
                ESG Compliance & Gap Analysis.
              </h1>
              <p className="font-inter font-normal text-[18px] leading-[1.6] max-w-2xl text-[#444748]">
                Regulatory ESG obligations are expanding rapidly across India and globally. We provide institutional-grade diagnostic frameworks to navigate evolving SEBI and BRSR mandates.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex justify-end">
              <div className="text-right border-l border-[#c4c7c7] pl-[24px]">
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] block text-[#444748] mb-1">
                  GLOBAL REACH
                </span>
                <span className="font-newsreader font-normal text-[24px] leading-[1.3] text-[#1a1c1c]">65+ Jurisdictions</span>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#E0E0E0] w-full mt-[24px]"></div>
        </header>

        {/* Main Content & Diagnostics */}
        <section className="max-w-[1280px] mx-auto px-8 mb-[120px]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-4">
              <div className="p-8 bg-[#f3f3f4] border border-[#c4c7c7] h-full">
                <span className="material-symbols-outlined text-[#000000] mb-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>analytics</span>
                <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Current-state diagnostics</h3>
                <p className="text-[#444748]">
                  A forensic review of internal data structures, ESG governance, and reporting readiness relative to international peer benchmarks.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="p-8 bg-[#f3f3f4] border border-[#c4c7c7] h-full">
                <span className="material-symbols-outlined text-[#000000] mb-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>rule</span>
                <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Gap assessment (BRSR, SEBI)</h3>
                <p className="text-[#444748]">
                  Detailed mapping against SEBI's Business Responsibility and Sustainability Report requirements and BRSR Core assurance targets.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="p-8 bg-[#f3f3f4] border border-[#c4c7c7] h-full">
                <span className="material-symbols-outlined text-[#000000] mb-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>trending_up</span>
                <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Remediation roadmaps</h3>
                <p className="text-[#444748]">
                  Multi-year strategy development to close compliance deficits and integrate ESG metrics into core financial reporting workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vertical Visual Break */}
        <section className="w-full mb-[120px]">
          <div className="h-[600px] w-full overflow-hidden relative">
            <img 
              alt="A stark, brutalist architectural photograph of raw concrete pillars and heavy geometric forms. Deep shadows cast sharp diagonal lines across industrial textures. The composition is monolithic and authoritative, capturing the weight and permanence of institutional structures in high-contrast black and white." 
              className="w-full h-full object-cover grayscale contrast-125" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3pIrSGrZZhKPiOwUAgDLQ6Ui21J0gPcuTiAC-oYRyh3Co4hjHZnytWEm_JGKBBCdOieWVByb4reKg8DxLrhUypkniNS_il9RsA481QD90l-OdB4XNqG7nzSVmUwRvgyxUw99ABKdQskP-UZLCOscksIQW9zlP0ZT-Ha3gljRsaS2o5U2B3uV4bmMyRWCjL2xxr5Ic1_TBNINq7bljkF3j9hJXdw9CUAH3ol0eDu29VUjGTBMMhAZZpQ4LEapUVnVidTxiJjz616g"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9f9f9]/80 to-transparent flex items-center">
              <div className="max-w-[1280px] mx-auto px-8 w-full">
                <div className="max-w-lg bg-[#f9f9f9] p-12 border border-[#c4c7c7]">
                  <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-[16px]">Precision in Disclosure.</h2>
                  <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">
                    We treat sustainability data with the same rigor as quarterly financial statements. In an era of increasing scrutiny, ambiguity is a liability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Block */}
        <section className="max-w-[1280px] mx-auto px-8 mb-[120px]">
          <div className="bg-[#f3f3f4] border border-[#c4c7c7] overflow-hidden">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-4 p-12 flex flex-col justify-between">
                <div>
                  <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-[16px] block">
                    CASE STUDY / CSRD
                  </span>
                  <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] leading-tight">
                    EU CSRD Ready: Helping an Indian Subsidiary Avoid Penalties.
                  </h2>
                </div>
                <div className="mt-8">
                  <a className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] border-b border-[#000000] py-1 hover:text-[#5e5e5e] hover:border-[#5e5e5e] transition-colors" href="#">
                    READ REPORT
                  </a>
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 border-t md:border-t-0 md:border-l border-[#c4c7c7] flex flex-col justify-between">
                  <div className="space-y-[24px]">
                    <div>
                      <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] mb-2">CHALLENGE</h4>
                      <p className="text-[#1a1c1c]">
                        An Indian manufacturing subsidiary of a DAX-40 firm faced immediate EU Corporate Sustainability Reporting Directive (CSRD) supply chain disclosure requirements.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] mb-2">INTERVENTION</h4>
                      <p className="text-[#1a1c1c]">
                        Northrop implemented a data-harvesting protocol aligned with EFRAG standards, ensuring vertical alignment between Mumbai and Frankfurt reporting offices.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748] mb-2">OUTCOME</h4>
                    <p className="font-newsreader font-normal text-[24px] leading-[1.3] text-[#1a1c1c]">100% Disclosure Accuracy</p>
                  </div>
                </div>
                <div className="h-64 md:h-full border-t md:border-t-0 md:border-l border-[#c4c7c7] relative overflow-hidden">
                  <img 
                    alt="Close-up of brutalist concrete textures featuring formwork marks and stark shadows. A geometric composition suggesting strength and structural integrity." 
                    className="w-full h-full object-cover grayscale contrast-150" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABLmuVNmhwoy24Ppb30lF27DCyvD3yc7Ysfx5MsF9GvQfbGlU9t3XVb_ye67dkvxt6k7zga2JLZ-BTkQ2mjavmdXhwMRojROoa3sEaeDUMPLmO9m2lEwf144SSI_j52GqYCWvXUhiDwhZZeSjUUIN-3di2RyiD3MjbaKgpsOnOGTikHJ7Kfj-srToeQM1G-wzxLU_csCoOaleJB_Es31Wo5SYoOQM_JXqZJODMC57gYofODskLzkgw2ESkCKZ7vJMpQXdX4AArlw0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Section */}
        <section className="max-w-[1280px] mx-auto px-8 mb-[120px]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-6">
              <div className="border-t-2 border-[#000000] pt-[24px]">
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-[8px] block">
                  INTELLIGENCE PUBLICATION
                </span>
                <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-[16px] italic">'India Meets Europe'</h2>
                <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#444748] mb-[24px]">
                  An analysis of cross-border ESG regulatory friction and the convergence of BRSR and CSRD frameworks.
                </p>
                <button className="border border-[#000000] px-[24px] py-[16px] font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] hover:bg-[#000000] hover:text-[#ffffff] transition-all">
                  DOWNLOAD PDF
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="bg-[#e2e2e2] h-full flex flex-col justify-center border border-[#c4c7c7] text-center relative overflow-hidden">
                <img 
                  alt="Atmospheric brutalist staircase with sharp geometric angles and heavy concrete steps, creating a sense of depth and hierarchy." 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 contrast-125" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSc898OV9zvN38UK_yWJ1go6pldQ7PBPFhjIfnUQ3fVTXWcpVlnuOy61oUzxpKHwd81PFaHBUsgiNuyiCLSRP551OkPB0XuIoh-HZy1H7x2ohOU6vb2XaTee8F4jGH2FmkIOOAepiArX3DymPuAkvmrIcm8XKRE6TED27vM4umFs2BsU49FLejcSfOZphOFpXNByCkE5RsDPQlYuXF-4Za-ynq2K6hKafQt5xqgXg4ysBsCmcvT5Dj2Yrw_uHtehwDg7jMBQ70zHE"
                />
                <div className="relative z-10 p-12">
                  <span className="material-symbols-outlined text-4xl text-[#000000] mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>description</span>
                  <p className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2]">
                    Restricted Access / Global Advisory Clients Only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default EsgComplianceGapAnalysis;
