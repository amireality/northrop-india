import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ImpactAssessmentMateriality = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] font-inter font-normal text-[15px] leading-[1.6] antialiased">
      <Helmet>
        <title>Impact Assessment & Materiality Analysis | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>

      <main className="pt-32">
        {/* Hero Section */}
        <header className="max-w-[1280px] mx-auto px-8 mb-[64px]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-8">
              <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-[16px] block">SERVICE 1E</span>
              <h1 className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] mb-[24px]">Knowing what matters most — to your business and to society — is the foundation of credible ESG.</h1>
              <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#444748] max-w-2xl">Impact Assessment and Materiality Analysis form the intellectual backbone of sustainable strategy, aligning corporate performance with stakeholder expectations and regulatory rigor.</p>
            </div>
          </div>
        </header>

        {/* Main Content & Services */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px] border-t border-[#e2e2e2]">
          <div className="grid grid-cols-12 gap-[32px]">
            {/* Service Cards */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-[24px]">
              <div className="p-8 bg-[#f3f3f4] border border-[#e2e2e2]">
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-[16px] block">ANALYSIS 01</span>
                <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Double Materiality Assessment</h3>
                <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">An exhaustive rigorous analysis evaluating both financial materiality (outside-in) and impact materiality (inside-out) to ensure full compliance with CSRD and global standards.</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 flex flex-col gap-[24px]">
              <div className="p-8 bg-[#f3f3f4] border border-[#e2e2e2]">
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-[16px] block">ENGAGEMENT 02</span>
                <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Stakeholder mapping</h3>
                <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Identification and prioritization of internal and external influence groups, utilizing proprietary qualitative frameworks to capture nuanced institutional perspectives.</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 flex flex-col gap-[24px]">
              <div className="p-8 bg-[#f3f3f4] border border-[#e2e2e2]">
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-[16px] block">STRATEGY 03</span>
                <h3 className="font-newsreader font-normal text-[24px] leading-[1.3] mb-[16px]">Materiality matrix development</h3>
                <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748]">Visualization of strategic priorities through multi-axial matrices, providing leadership with a clear roadmap for resource allocation and disclosure focus.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Abstract Graphics Visual Split */}
        <section className="w-full bg-[#1c1b1b] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-12 gap-[32px] items-center">
              <div className="col-span-12 md:col-span-5 text-[#ffffff]">
                <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-[24px]">Analytical Precision in a Complex Global Landscape.</h2>
                <p className="font-inter font-normal text-[18px] leading-[1.6] text-[#858383]">We transform qualitative sentiment into quantitative data points, allowing firms to navigate the intersection of social impact and enterprise value with mathematical certainty.</p>
              </div>
              <div className="col-span-12 md:col-span-7 h-[450px] relative overflow-hidden">
                <img 
                  alt="Brutalist architectural form" 
                  className="w-full h-full object-cover grayscale brightness-75" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHbc4MU5zzLO_HOxyPJlvAdSRrww137G_hzCp8SkiShYuSLRAwxFn-HV4qb00iqTiuNVlfnOFYuSTYlCnsJhmghQPwK07NnUH3PwwnSzyZnCZI9jV76ReweaKBdADmd-j-7hZj66ILtEcCutNEvEHOeXv12KbQCjyS-WdFe_r5wdWE5ySCd0lmvT3FmHgrbAr7YO4w27eI9_6rj1RkUmRYu486Fv_zN9nOmyni4GWlmHM6vunT3jzvCBekWgPLjFnHq8JtuB72hH4" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="grid grid-cols-12 gap-[32px] border border-[#e2e2e2] bg-white overflow-hidden">
            <div className="col-span-12 md:col-span-4 h-full min-h-[400px]">
              <img 
                alt="Stark industrial texture" 
                className="w-full h-full object-cover grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq1rM9H4atSE364waqFU1qpwhnTcKK0Ea8KvJhrpBLMJNbfmb1sAaixzCmNbu5oppjR2m4ibt-5M0ylXmIGtFM7HXVt1mDftDjjDABp8Ul1924oQPtj7UEtG9TbSYC_TI5HJlBeCbBexni7KT8J_lYWTcCgDRG6DEHvTfr7hQ2aUawkk2EZWxDt2ppsqNMOESHw6GFMNWiD1ogdbQuo1Caybj-KLK8uLQ1ARohX5aDgJD7f6YGcuXZvKTc6oa7tdlLbVUuYtqcNI4" 
              />
            </div>
            <div className="col-span-12 md:col-span-8 flex flex-col justify-between p-12 border-l border-[#c4c7c7]">
              <div>
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-[16px] block">CASE STUDY</span>
                <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-[24px] italic">'Hearing All Voices'</h2>
                <p className="font-inter font-normal text-[15px] leading-[1.6] text-[#444748] italic mb-8">How a Diversified Infrastructure Group Ran India's Most Comprehensive Stakeholder Materiality Process.</p>
                <h3 className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#000000] mb-[16px]">THE INTERVENTION</h3>
                <p className="font-inter font-normal text-[18px] leading-[1.6] mb-[24px]">Northrop Management deployed a hybrid engagement model across 14 states, interviewing 5,000+ stakeholders—from local community leaders to institutional investors—to redefine the group's material priorities for the next decade.</p>
              </div>
              <div className="grid grid-cols-3 gap-[24px] border-t border-[#c4c7c7] pt-8">
                <div>
                  <div className="font-newsreader font-normal text-[24px] leading-[1.3]">14</div>
                  <div className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748]">Regional Jurisdictions</div>
                </div>
                <div>
                  <div className="font-newsreader font-normal text-[24px] leading-[1.3]">5k+</div>
                  <div className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748]">Stakeholders Engaged</div>
                </div>
                <div>
                  <div className="font-newsreader font-normal text-[24px] leading-[1.3]">100%</div>
                  <div className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#444748]">CSRD Alignment</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Section */}
        <section className="bg-[#f3f3f4] py-[120px] border-t border-[#e2e2e2]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-[64px]">
              <div>
                <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] mb-[16px] block">LATEST PUBLICATION</span>
                <h2 className="font-newsreader font-normal text-[32px] leading-[1.2]">'Double Materiality in Practice'</h2>
              </div>
              <a className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] border-b border-[#000000] pb-1 hover:text-[#5e5e5e] transition-colors" href="#">Download Report</a>
            </div>
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 md:col-span-6 bg-white p-1 border border-[#e2e2e2]">
                <div className="bg-[#eeeeee] h-80 w-full flex items-center justify-center overflow-hidden relative group">
                  <img 
                    alt="Abstract brutalist geometry" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-multiply" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbsDVT6AOKDd3OPdmbqC0kM6auAzf7eJDAlqhD98TKeET1qwPcysy4L-s4D6SkEIhtTNgNpvCzXuLsuxcNWgmIITrK06CiNzJclLtRXHvMZa-yqFCmRM8TGbPtcYQhNNR_FpBGs0QT8JfW7uN1xVwlF-Rx8aFvt4S2ghM4HzKc0KfI965PF481eQbCIK3ixZy1aGaWpC4VTD_1Bem08xkPtNi_0mWGUdgeXhmOfDoN80JpLaY_MK5t9KsPdjnbQrMsMX7MIKtyzls" 
                  />
                  <div className="p-12 text-center relative z-10">
                    <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] text-[#5e5e5e] block mb-[16px]">NORTHROP INTELLIGENCE</span>
                    <div className="font-newsreader font-normal text-[48px] leading-[1.1] tracking-[-0.02em] border-y border-[#c4c7c7] py-4 bg-white/80 backdrop-blur-sm">DOUBLE MATERIALITY</div>
                    <span className="font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] mt-[16px] block">VOLUME IV / 2026</span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center gap-[24px]">
                <p className="font-inter font-normal text-[18px] leading-[1.6]">Our latest intelligence report provides a definitive guide for Chief Sustainability Officers navigating the transition to ESRS reporting standards.</p>
                <ul className="space-y-[16px]">
                  <li className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#000000]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24", verticalAlign: "middle" }}>check_circle</span>
                    <span className="font-inter font-normal text-[15px] leading-[1.6]">Framework for quantitative impact scoring</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#000000]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24", verticalAlign: "middle" }}>check_circle</span>
                    <span className="font-inter font-normal text-[15px] leading-[1.6]">Legal interpretation of financial materiality thresholds</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#000000]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24", verticalAlign: "middle" }}>check_circle</span>
                    <span className="font-inter font-normal text-[15px] leading-[1.6]">Best practices for auditor-ready documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="border border-[#e2e2e2] p-[120px] text-center bg-white relative overflow-hidden group">
            {/* Abstract brutalist background image */}
            <img 
              alt="Brutalist stairs" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-5 group-hover:opacity-10 transition-opacity duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC38kHvnkv5KBZva_d4ScHb2RuWuAcl6Er67AMZgzn3VU-FkS46yUK7po_nqpV3UcSx_WJl77bvDCn1Abm643YqmHoA8EX6ck4OW-Rv79d5rBU-RGiiq0F0kgi_a3K7ftPedtuGDuMaEvKhXf7Zx3mxx4HqMpsd9Rv9jqBlKS3hhFZCwKC82WwyqnVi2EQxrKKqZPOH3HCJyfNyfzTop3syfgVihpE2QsqzegaSJNmPuo-OUodPLNtFpB3b5Jmj6Dub0rPKJpEy8qM" 
            />
            <div className="relative z-10">
              <h2 className="font-newsreader font-normal text-[32px] leading-[1.2] mb-[24px]">Define Your Institutional Materiality.</h2>
              <button className="bg-[#000000] text-[#ffffff] font-inter font-semibold uppercase tracking-[0.1em] text-[11px] leading-[1.2] px-12 py-4 hover:opacity-90 transition-opacity">Schedule a Workshop</button>
            </div>
            {/* Abstract visual element */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <line stroke="currentColor" strokeWidth="0.1" x1="0" x2="100" y1="50" y2="50"></line>
                <line stroke="currentColor" strokeWidth="0.1" x1="50" x2="50" y1="0" y2="100"></line>
                <circle cx="50" cy="50" fill="none" r="20" stroke="currentColor" strokeWidth="0.1"></circle>
              </svg>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ImpactAssessmentMateriality;
