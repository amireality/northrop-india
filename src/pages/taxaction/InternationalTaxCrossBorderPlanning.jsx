import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const InternationalTaxCrossBorderPlanning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>International Tax & Cross-Border Planning | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:opsz,wght@6..72,400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>
          {`
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] text-[15px] leading-[1.6] antialiased pt-[90px]">
        {/* Hero Section */}
        <header className="max-w-[1280px] mx-auto px-8 py-[120px] grid grid-cols-12 gap-[32px] items-end">
          <div className="col-span-12 md:col-span-7">
            <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[8px] block">3C. ADVISORY SERVICES</span>
            <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[24px]">International Tax &amp; Cross-Border Planning</h1>
            <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal max-w-xl text-[#444748]">
              Navigating the complexities of global tax regimes requires institutional precision. We provide sovereign-grade tax planning and structural optimization for entities operating across multi-jurisdictional boundaries.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 h-[400px] overflow-hidden">
            <img alt="Brutalist corporate architecture" className="w-full h-full object-cover grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4l_9wLCYruZPZXJaRYlOaVHKW38L4WGSJWRFOktTtilnZ33_AvxWoElC2_hnyYpRDZePE0d6BRE8imrMSZB5P5e-UdvfA7JFb310tXHxoUAXRGd1ZyOsPbb89hEBsF7PaHzFLdnmEYVMzI10aXJ4GcTP3AdPu68f7_9is13p4sOPdL98_2zSM-8I2SgqFSEa41W18-cU3hndA4bAfutrtES8ini5y3mDEeC6G3qsH5nPox67i7rdTfd3tS3VP7aWHdpzPX1nBegs" />
          </div>
        </header>

        <div className="max-w-[1280px] mx-auto px-8">
          <div className="h-[1px] bg-[#E0E0E0] w-full"></div>
        </div>

        {/* What We Do Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="mb-[64px] flex justify-between items-baseline">
            <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal">What We Do</h2>
            <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#747878]">SERVICE SCOPE 01—06</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-[32px]">
            {/* Service 01 */}
            <div className="border-l border-[#000000] pl-[24px]">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2 block">01</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Treaty Optimization</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Leveraging bilateral investment treaties to mitigate double taxation and optimize capital flows for institutional investors.</p>
            </div>
            {/* Service 02 */}
            <div className="border-l border-[#000000] pl-[24px]">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2 block">02</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Transfer Pricing</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Developing robust documentation and pricing strategies that align with OECD guidelines and local regulatory requirements.</p>
            </div>
            {/* Service 03 */}
            <div className="border-l border-[#000000] pl-[24px]">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2 block">03</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Pillar Two Compliance</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Strategic readiness for the Global Minimum Tax framework, assessing impact on effective tax rates across global entities.</p>
            </div>
            {/* Service 04 */}
            <div className="border-l border-[#000000] pl-[24px]">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2 block">04</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Holding Co Analysis</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Evaluation of regional headquarters and holding jurisdictions based on substance, treaty networks, and tax stability.</p>
            </div>
            {/* Service 05 */}
            <div className="border-l border-[#000000] pl-[24px]">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2 block">05</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">BEPS 2.0 Mapping</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Comprehensive risk mapping against Base Erosion and Profit Shifting directives to ensure long-term structural resilience.</p>
            </div>
            {/* Service 06 */}
            <div className="border-l border-[#000000] pl-[24px]">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2 block">06</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[16px]">Permanent Establishment</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Mitigating PE risks in the era of digital business and mobile workforces through rigorous nexus analysis.</p>
            </div>
          </div>
        </section>

        {/* Who It's For (Asymmetric Layout) */}
        <section className="bg-[#f3f3f4] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-12 gap-[32px] items-center">
            <div className="col-span-12 md:col-span-5 mb-[24px] md:mb-0">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[16px]">Who It's For</h2>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">We partner with organizations that view tax as a strategic pillar of global operations, not merely a compliance burden.</p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <ul className="space-y-6">
                <li className="flex items-start gap-4 pb-6 border-b border-[#c4c7c7]">
                  <span className="material-symbols-outlined text-[#000000]">corporate_fare</span>
                  <div>
                    <h4 className="font-['Inter'] text-[18px] leading-[1.6] font-semibold">Multinational Conglomerates</h4>
                    <p className="text-[#444748]">Complex entities requiring unified cross-border tax logic.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 pb-6 border-b border-[#c4c7c7]">
                  <span className="material-symbols-outlined text-[#000000]">account_balance</span>
                  <div>
                    <h4 className="font-['Inter'] text-[18px] leading-[1.6] font-semibold">Private Equity &amp; VC</h4>
                    <p className="text-[#444748]">Fund managers optimizing entry and exit structures for global assets.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 pb-6">
                  <span className="material-symbols-outlined text-[#000000]">public</span>
                  <div>
                    <h4 className="font-['Inter'] text-[18px] leading-[1.6] font-semibold">Sovereign Wealth Funds</h4>
                    <p className="text-[#444748]">Ensuring jurisdictional neutrality and long-term capital preservation.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="bg-[#f9f9f9] border border-[#000000] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="p-12 flex flex-col justify-center">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[8px] block">CASE STUDY 014</span>
              <h2 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal mb-[24px] leading-none">Restructuring for Global Scale</h2>
              <div className="space-y-8 mb-[24px]">
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold block text-[#747878] mb-1">THE CHALLENGE</span>
                  <p className="font-['Inter'] text-[15px] leading-[1.6]">A Tier-1 technology firm faced fragmented IP ownership across 14 jurisdictions, resulting in significant tax leakages and compliance overlaps.</p>
                </div>
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold block text-[#747878] mb-1">THE INTERVENTION</span>
                  <p className="font-['Inter'] text-[15px] leading-[1.6]">Centralized IP management within a high-substance European hub while implementing a robust master-file/local-file transfer pricing structure.</p>
                </div>
                <div>
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold block text-[#747878] mb-1">THE OUTCOME</span>
                  <p className="font-['Inter'] text-[15px] leading-[1.6]">Achieved a 22% reduction in effective global tax rate and a streamlined reporting process that met all BEPS 2.0 standards.</p>
                </div>
              </div>
              <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold flex items-center gap-2 hover:underline" href="#">
                VIEW FULL REPORT
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
            <div className="relative h-[400px] md:h-auto bg-[#1c1b1b]">
              <img alt="Abstract geometric architecture" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEdatdvKHKM8jVKGQh10nM2HEBfyYMShtouy4IA5vP7GHazc0EUKxMQIH0l3aXp8hZJzpWu27at7CeTQ1VoYzxDSCViLEvz5KJLxJ2U-GVsosjGNrhjfW8f4_6vh3JkucMjDVqVk8sFVfLII165wyA53XJv6W8hm7wno4afqqmohhD1euIxhRdabaSsYZGYmvgUn-EaxcXaj0-pnYS8dQShVawSQb3wHgVMyB3YU85vPz_FsQWhCaDgwDVKb2PgufD7CGwEhKoNHI" />
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] gap-[24px]">
            <div className="max-w-xl">
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-4">Latest Intelligence</h2>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Mandatory reading for the institutional tax officer. Rigorous analysis on the evolving global regulatory landscape.</p>
            </div>
            <button className="border border-[#000000] px-8 py-3 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold hover:bg-[#000000] hover:text-[#ffffff] transition-all">ALL PUBLICATIONS</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px]">
            {/* Publication 1 */}
            <article className="flex flex-col h-full group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-[16px] bg-[#e8e8e8] border border-[#c4c7c7]">
                <img alt="India BEPS Report" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9lEueQuFqkgzWZlz7wAbhv62bmAy4_E54iM7ftlyjTfSP19nveMgc-JY-ZiGb5WI6TCuvbSSzl1NNOmbGxUJAk6TNdOI2F6lmp_fZ-4wLct-q6iuMtNSi7WbQRR7FWAiapT-aQC82XaKO2l3yQ0nSxaTS9l-R-MDZfyx0pIEkfSZeSTJrF7XGexBxn97Aw7u-_N0j2vHdBYPBBFJFADT0khzojzOd3F0dmeFkF-Zz2QjDaFImrZkZej4HGqFGFiHbuFOXRx2mveM" />
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2">INTELLIGENCE / ASIA-PACIFIC</span>
              <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2 group-hover:underline">India's BEPS Journey</h4>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] line-clamp-3">A deep dive into the Ministry of Finance's adoption of Pillar Two and its impact on inbound investment structures.</p>
            </article>
            {/* Publication 2 */}
            <article className="flex flex-col h-full group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-[16px] bg-[#e8e8e8] border border-[#c4c7c7]">
                <img alt="Treaty Shopping" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZDceiLqjHEbDDzWo_3K8Rwamppb4ucJd0lxPGpjJ3zrwglL-RFZ-UxuP_aUhh5WtCsoOhrrtN9B-MYnSagpiCnvS08vwt6bpZurzTvrJYNXlcYfUI5ImdwrWl1rKlYjGlhaAd7V_Pm8e9IehgtmWbkGRMHlqhS27Zw4UkBV9WYfXrT93-oMo6W7fICSbf79e4hL8-Y-t2tL0OERB8zMhNT9fcCaQnQ-ZW548CFlwUy68Z6XEd8OSgSenb4IyX7cJ7-kSJR9LDMfg" />
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2">ADVISORY / POLICY</span>
              <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2 group-hover:underline">Treaty Shopping vs. Substance</h4>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] line-clamp-3">Analyzing the 'Principal Purpose Test' (PPT) and why economic substance is now the only currency in tax planning.</p>
            </article>
            {/* Publication 3 */}
            <article className="flex flex-col h-full group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-[16px] bg-[#e8e8e8] border border-[#c4c7c7]">
                <img alt="Pillar Two Implications" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-AWhp-MoEMQEQ-ET-oja1bkMorojmXV2auObNQr5yZNN4Q2S26DcDEj_52KUYnvbB6As4aGdVsanSeARbSN4Fxuodu_LtuW_-2wgzpOgu88dvVb6KFZ3bgBmKZ_1Jl-Csi_XfgSKkaFHDGEhjpnJiiID0384abzidv4ff9A_lkvLEOMxlUiB_aVd4f04kK7X6Fb83bmfjhjWE_LErFkb215WhS3gC61aQvgviwHrxiKf5zm6EgSGVyw0bA5S2QbhQgaJt2PBNV_o" />
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2">GLOBAL RISK / MNCs</span>
              <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2 group-hover:underline">Pillar Two: Implications for Indian MNCs</h4>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] line-clamp-3">How the 15% global minimum tax will reshape the tax landscape for India's largest outward-investing entities.</p>
            </article>
            {/* Publication 4 */}
            <article className="flex flex-col h-full group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-[16px] bg-[#e8e8e8] border border-[#c4c7c7]">
                <img alt="Jurisdictions Comparison" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_NiV4-7xSqpafyRODBTfxxxb6BwHnuJUfmzyNhy0caS3rZ9nYjsSrV31uPWlbZc1NAIT4iwVAPiyGMs4sBVlhw1_LdwefUMM15n3HmKAmpFNeSw5fFBsQQYwPfUGazeVlVmBvjKrpLckyJeiMxEGSUkAm9c9AnQeFShIi2aRY4MjL7P5vwpghzCGOpi-ciuYfqSKWSC2dvNTQa-joFDLi62DubnXXKrez-yXmUr8r71Sg24MCmKU3KsTykZeKc7nfHB23PySLi7o" />
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-2">INTELLIGENCE / ANALYSIS</span>
              <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-2 group-hover:underline">Holding Company Jurisdictions: A 2026 Comparison</h4>
              <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748] line-clamp-3">A comparative benchmark of the UAE, Singapore, Netherlands, and Mauritius in the post-BEPS era.</p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default InternationalTaxCrossBorderPlanning;