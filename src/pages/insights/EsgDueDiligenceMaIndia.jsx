
import { Link } from 'react-router-dom';

const EsgDueDiligenceMaIndia = () => {
  

    return (
        <div className="bg-esg-background text-esg-on-surface font-esg-body-md overflow-x-hidden min-h-screen">
            <main >
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-start overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div 
                            className="esg-hero-bg w-full h-full bg-cover bg-center" 
                            style={{ backgroundImage: "url('/reportimg/2ND .png')" }}
                        >
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-esg-primary/80 to-transparent"></div> */}
                        </div>
                    </div>
                    <div className="relative z-10 px-[16px] md:px-[40px] w-full max-w-[1280px] mx-auto">
                        <div className="max-w-4xl space-y-[16px]">
                            <div className="flex items-center gap-[8px] text-esg-surface-variant font-esg-mono-label text-[12px] tracking-widest uppercase mb-4">
                                <span className="bg-esg-primary px-2 py-0.5 border border-esg-outline-variant text-white">Strategy Ledger Vol. 17</span>
                                <span className="text-white">28.6139° N, 77.2090° E</span>
                            </div>
                            <h1 className="font-esg-display-lg text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] md:tracking-[-0.02em] font-bold text-white uppercase">
                                ESG IS NOW A <span className="text-esg-secondary-fixed">DEAL ESSENTIAL</span> IN EVERY M&A REVIEW
                            </h1>
                            <p className="font-esg-body-lg text-[16px] md:text-[18px] text-esg-surface-container text-white max-w-2xl">
                                ESG Due Diligence in M&A India 2026: Why ESG Is Now a Deal Essential — Not a Post-Signing Consideration.
                            </p>
                            <div className="pt-[32px]">
                                <Link to="/contact" className="group inline-flex items-center gap-[8px] text-white font-sans text-[14px] tracking-[0.05em] font-semibold border-b border-white pb-2 hover:gap-[16px] transition-all">
                                    READ EXECUTIVE PROTOCOL
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Executive Summary */}
                <section className="py-[80px] esg-forensic-grid">
                    <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px]">
                        <div className="md:col-span-4 border-l-4 border-esg-primary pl-[16px]">
                            <p className="font-esg-label-md text-[14px] text-esg-outline uppercase tracking-[0.05em] font-semibold mb-2">Executive Summary</p>
                            <h2 className="font-esg-headline-lg text-[24px] md:text-[32px] text-esg-primary uppercase font-bold">The Shifting Paradigm</h2>
                        </div>
                        <div className="md:col-span-8">
                            <p className="font-esg-body-lg text-[16px] md:text-[18px] text-esg-on-surface leading-relaxed">
                                In the 2026 Indian M&A landscape, Environmental, Social, and Governance (ESG) factors have transitioned from secondary checkboxes to fundamental pillars of forensic valuation. Regulatory shifts and investor pressures now dictate that deals without rigorous ESG scrutiny carry inherent liabilities that can erode shareholder value instantly post-acquisition.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ESG Deal Metrics Dashboard */}
                <section className="py-[80px] bg-esg-surface-container">
                    <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
                        <h3 className="font-esg-label-md text-[14px] text-esg-primary uppercase tracking-[0.05em] font-semibold text-center mb-[32px]">Deal Scrutiny Metrics 2026</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                            {/* Metric 1 */}
                            <div className="bg-white p-[32px] border border-esg-outline-variant rounded shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-[16px]">
                                    <span className="material-symbols-outlined text-esg-primary text-[36px]">verified</span>
                                    <span className="text-esg-error font-esg-mono-label text-[12px] bg-esg-error/10 px-2 py-1 rounded font-medium">High Scrutiny</span>
                                </div>
                                <h4 className="font-esg-headline-md text-[20px] md:text-[24px] text-esg-primary mb-2 uppercase font-semibold">BRSR CORE</h4>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary mb-4">SEBI-mandated compliance benchmarks for the top 1,000 listed entities.</p>
                                <div className="h-2 w-full bg-esg-surface-container-high rounded overflow-hidden">
                                    <div className="h-full bg-esg-primary w-[92%]"></div>
                                </div>
                                <div className="flex justify-between mt-2 font-esg-mono-label text-[12px] text-esg-primary font-medium">
                                    <span>Compliance Level</span>
                                    <span>92% Scrutiny</span>
                                </div>
                            </div>
                            
                            {/* Metric 2 */}
                            <div className="bg-white p-[32px] border border-esg-outline-variant rounded shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-[16px]">
                                    <span className="material-symbols-outlined text-esg-error text-[36px]">trending_down</span>
                                </div>
                                <h4 className="font-esg-headline-md text-[20px] md:text-[24px] text-esg-primary mb-2 uppercase font-semibold">VALUATION IMPACT</h4>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary mb-4">Estimated downside risk for non-compliant ESG targets in industrial sectors.</p>
                                <div className="flex items-end gap-2">
                                    <span className="font-esg-display-lg text-[40px] md:text-[48px] font-bold text-esg-error leading-none">10-20%</span>
                                    <span className="font-esg-label-md text-[14px] font-semibold text-esg-error mb-1 uppercase tracking-[0.05em]">Erosion Risk</span>
                                </div>
                            </div>
                            
                            {/* Metric 3 */}
                            <div className="bg-white p-[32px] border border-esg-outline-variant rounded shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-[16px]">
                                    <span className="material-symbols-outlined text-esg-on-tertiary-container text-[36px]">upgrade</span>
                                </div>
                                <h4 className="font-esg-headline-md text-[20px] md:text-[24px] text-esg-primary mb-2 uppercase font-semibold">EXIT PREMIUM</h4>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary mb-4">Market advantage observed for assets with mature ESG integration frameworks.</p>
                                <div className="p-4 bg-esg-primary-container text-white rounded mt-4">
                                    <span className="block text-esg-secondary-fixed font-esg-label-md text-[12px] font-semibold uppercase tracking-widest mb-1">Impact Result</span>
                                    <span className="text-[20px] md:text-[24px] font-bold uppercase">ESG-driven Multiples</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Strategic Drivers */}
                <section className="py-[80px] bg-white">
                    <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
                        <div className="mb-[32px] text-center max-w-2xl mx-auto">
                            <h2 className="font-esg-headline-lg text-[24px] md:text-[32px] font-semibold text-esg-primary uppercase mb-[8px]">Core Strategic Drivers</h2>
                            <p className="text-esg-secondary font-esg-body-md text-[16px]">The catalysts transforming Indian M&A into an ESG-first ecosystem.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[24px]">
                            <div className="p-[16px] text-center group">
                                <div className="w-16 h-16 bg-esg-surface-container flex items-center justify-center mx-auto mb-[16px] group-hover:bg-esg-primary-container group-hover:text-white transition-all rounded">
                                    <span className="material-symbols-outlined text-[32px]">account_balance</span>
                                </div>
                                <h5 className="font-esg-headline-md text-[18px] font-semibold text-esg-primary mb-2 uppercase">SEBI BRSR Framework</h5>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary">The gold standard for reporting transparency in the Indian capital markets.</p>
                            </div>
                            <div className="p-[16px] text-center group">
                                <div className="w-16 h-16 bg-esg-surface-container flex items-center justify-center mx-auto mb-[16px] group-hover:bg-esg-primary-container group-hover:text-white transition-all rounded">
                                    <span className="material-symbols-outlined text-[32px]">public</span>
                                </div>
                                <h5 className="font-esg-headline-md text-[18px] font-semibold text-esg-primary mb-2 uppercase">Global Alignment</h5>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary">Alignment with EU CSDDD and global supply chain transparency protocols.</p>
                            </div>
                            <div className="p-[16px] text-center group">
                                <div className="w-16 h-16 bg-esg-surface-container flex items-center justify-center mx-auto mb-[16px] group-hover:bg-esg-primary-container group-hover:text-white transition-all rounded">
                                    <span className="material-symbols-outlined text-[32px]">gavel</span>
                                </div>
                                <h5 className="font-esg-headline-md text-[18px] font-semibold text-esg-primary mb-2 uppercase">Regulatory Enforcement</h5>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary">Rigorous post-close auditing by statutory bodies on sustainability claims.</p>
                            </div>
                            <div className="p-[16px] text-center group">
                                <div className="w-16 h-16 bg-esg-surface-container flex items-center justify-center mx-auto mb-[16px] group-hover:bg-esg-primary-container group-hover:text-white transition-all rounded">
                                    <span className="material-symbols-outlined text-[32px]">insights</span>
                                </div>
                                <h5 className="font-esg-headline-md text-[18px] font-semibold text-esg-primary mb-2 uppercase">Value Creation</h5>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary">Identifying operational efficiencies through resource-light manufacturing.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Post-Close Risk Matrix */}
                <section className="py-[80px] bg-esg-primary-container text-black">
                    <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
                            <div>
                                <span className="font-esg-label-md text-[14px] text-esg-secondary-fixed uppercase tracking-[0.05em] font-semibold block mb-[8px]">Forensic Exposure Analysis</span>
                                <h2 className="font-esg-display-lg text-[32px] md:text-[40px] font-bold text-black mb-[16px] uppercase leading-tight">Post-Close Risk Matrix</h2>
                                <p className="font-esg-body-lg text-[16px] md:text-[18px] text-esg-surface-container-high mb-[32px]">Hidden liabilities in the 'Three Pillars' often manifest as significant fiscal penalties post-signing.</p>
                                <div className="space-y-[16px]">
                                    <div className="flex gap-[16px] items-start p-[16px] border border-esg-on-primary-container bg-esg-primary/20 hover:bg-esg-primary/40 transition-all">
                                        <span className="material-symbols-outlined text-esg-secondary-fixed text-[32px]">eco</span>
                                        <div>
                                            <h6 className="font-bold text-[16px] uppercase mb-1">Environmental Liabilities</h6>
                                            <ul className="text-esg-body-sm text-[14px] text-esg-surface-variant list-disc ml-4 space-y-1">
                                                <li>Legacy contamination and remediation costs</li>
                                                <li>Carbon tax exposure and Scope 3 reporting gaps</li>
                                                <li>Water resource depletion and usage rights</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-[16px] items-start p-[16px] border border-esg-on-primary-container bg-esg-primary/20 hover:bg-esg-primary/40 transition-all">
                                        <span className="material-symbols-outlined text-esg-secondary-fixed text-[32px]">group</span>
                                        <div>
                                            <h6 className="font-bold text-[16px] uppercase mb-1">Social Capital Risks</h6>
                                            <ul className="text-esg-body-sm text-[14px] text-esg-surface-variant list-disc ml-4 space-y-1">
                                                <li>Labor practice audits and ethical supply chains</li>
                                                <li>Community displacement and relocation compliance</li>
                                                <li>Data privacy and cyber-security governance</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-[16px] items-start p-[16px] border border-esg-on-primary-container bg-esg-primary/20 hover:bg-esg-primary/40 transition-all">
                                        <span className="material-symbols-outlined text-esg-secondary-fixed text-[32px]">policy</span>
                                        <div>
                                            <h6 className="font-bold text-[16px] uppercase mb-1">Governance Integrity</h6>
                                            <ul className="text-esg-body-sm text-[14px] text-esg-surface-variant list-disc ml-4 space-y-1">
                                                <li>Board diversity and transparency protocols</li>
                                                <li>Anti-corruption and bribery (ABAC) forensic review</li>
                                                <li>Executive compensation vs ESG goal alignment</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-esg-primary p-[24px] border border-esg-on-primary-container relative z-10">
                                    <h4 className="font-esg-mono-label text-[14px] text-esg-secondary-fixed mb-[16px] uppercase font-semibold">Risk Distribution Heatmap</h4>
                                    <div className="space-y-[16px]">
                                        <div className="flex items-center justify-between text-esg-body-sm text-[14px]">
                                            <span>Industrial Sector Exposure</span>
                                            <span className="text-esg-secondary-fixed">CRITICAL</span>
                                        </div>
                                        <div className="w-full h-4 bg-esg-primary-container rounded-full relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-esg-secondary-fixed to-esg-error w-[88%] rounded-full"></div>
                                        </div>
                                        <div className="flex items-center justify-between text-esg-body-sm text-[14px]">
                                            <span>Tech-Driven ESG Risks</span>
                                            <span className="text-esg-secondary-fixed">MODERATE</span>
                                        </div>
                                        <div className="w-full h-4 bg-esg-primary-container rounded-full relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-esg-secondary-fixed to-esg-secondary-fixed-dim w-[45%] rounded-full"></div>
                                        </div>
                                        <div className="mt-[32px] p-[16px] bg-esg-on-primary-fixed-variant rounded">
                                            <p className="font-esg-body-sm text-[14px] italic text-esg-surface-container">"Ignoring Governance protocols in the pre-signing phase has resulted in a 35% increase in deal abandonment in 2025-26."</p>
                                            <p className="text-right text-esg-label-md text-[12px] font-bold mt-2 uppercase">— Strategic Intelligence Report</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-10 -right-10 w-40 h-40 border border-esg-secondary-fixed/20 z-0"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-esg-secondary-fixed/20 z-0"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operational Roadmap */}
                <section className="py-[80px] bg-esg-background relative overflow-hidden">
                    <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto relative z-10">
                        <div className="text-center mb-[80px]">
                            <h2 className="font-esg-display-lg text-[24px] md:text-[32px] font-semibold text-esg-primary uppercase">Operational Roadmap</h2>
                            <p className="text-esg-secondary max-w-xl mx-auto mt-[8px] text-[16px]">A formal 4-step execution path for integrating ESG into the deal lifecycle.</p>
                        </div>
                        <div className="relative hidden md:block esg-node-line mb-20">
                            {/* Progress Line CSS handled by .esg-node-line */}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] relative">
                            <div className="relative bg-white p-[16px] border border-esg-outline shadow-sm hover:-translate-y-2 transition-transform mt-[32px] md:mt-0">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-esg-primary text-white rounded-full flex items-center justify-center font-bold z-20">1</div>
                                <h4 className="font-esg-headline-md text-[16px] font-semibold text-esg-primary mb-2 uppercase text-center md:text-left mt-4 md:mt-0">Embed ESG Early</h4>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary text-center md:text-left">Initiate ESG scoping at the LOI stage to avoid late-stage valuation shocks.</p>
                            </div>
                            <div className="relative bg-white p-[16px] border border-esg-outline shadow-sm hover:-translate-y-2 transition-transform mt-[32px] md:mt-0">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-esg-primary text-white rounded-full flex items-center justify-center font-bold z-20">2</div>
                                <h4 className="font-esg-headline-md text-[16px] font-semibold text-esg-primary mb-2 uppercase text-center md:text-left mt-4 md:mt-0">Tailor Checklists</h4>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary text-center md:text-left">Avoid generic templates; customize audits based on sector-specific materiality.</p>
                            </div>
                            <div className="relative bg-white p-[16px] border border-esg-outline shadow-sm hover:-translate-y-2 transition-transform mt-[32px] md:mt-0">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-esg-primary text-white rounded-full flex items-center justify-center font-bold z-20">3</div>
                                <h4 className="font-esg-headline-md text-[16px] font-semibold text-esg-primary mb-2 uppercase text-center md:text-left mt-4 md:mt-0">Secure Protections</h4>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary text-center md:text-left">Embed ESG-specific Indemnities and Warranties into the Sale & Purchase Agreement.</p>
                            </div>
                            <div className="relative bg-white p-[16px] border border-esg-outline shadow-sm hover:-translate-y-2 transition-transform mt-[32px] md:mt-0">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-esg-primary text-white rounded-full flex items-center justify-center font-bold z-20">4</div>
                                <h4 className="font-esg-headline-md text-[16px] font-semibold text-esg-primary mb-2 uppercase text-center md:text-left mt-4 md:mt-0">Plan Integration</h4>
                                <p className="font-esg-body-sm text-[12px] md:text-[14px] text-esg-secondary text-center md:text-left">Define a 100-day post-close roadmap to bridge identified ESG gaps immediately.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Northrop Advantage CTA */}
                <section className="py-[80px] px-[16px] md:px-[40px]">
                    <div className="max-w-[1280px] mx-auto bg-esg-surface-container rounded-lg p-[24px] md:p-[80px] flex flex-col md:flex-row gap-[24px] items-center justify-between border border-esg-outline-variant">
                        <div className="max-w-2xl">
                            <h2 className="font-esg-display-lg text-[24px] md:text-[32px] font-bold text-esg-primary mb-[16px] uppercase">The Northrop Advantage</h2>
                            <p className="font-esg-body-lg text-[16px] md:text-[18px] text-esg-secondary mb-[32px]">
                                We deliver Big 4 quality with an agile, forensic focus. Our advisors don't just identify risks—they engineer strategic clarity to protect your deal's valuation.
                            </p>
                            <div className="flex flex-wrap gap-[16px]">
                                <Link to="/contact" className="bg-[#0a2540] text-white px-[32px] py-4 font-sans text-[14px] font-semibold uppercase tracking-[0.15em] hover:bg-[#000f22] transition-all">Secure Advisory Access</Link>
                                <Link to="/contact"><button className="border border-[#74777e] px-[32px] py-4 font-sans text-[14px] font-semibold uppercase tracking-[0.15em] text-[#000f22] hover:bg-[#f7fafd] transition-all  cursor-pointer">Download Report PDF</button></Link>
                            </div>
                        </div>
                        <div className="hidden lg:block w-full max-w-xs">
                            <div className="aspect-square bg-esg-primary-container flex items-center justify-center p-[32px] text-white">
                                <div className="border border-white/20 p-[16px] text-center">
                                    <span className="material-symbols-outlined text-5xl mb-2">military_tech</span>
                                    <p className="font-esg-display-lg text-[24px] font-semibold leading-none">FORENSIC PRECISION</p>
                                    <p className="font-esg-mono-label text-[12px] font-medium text-esg-secondary-fixed mt-2">STRATEGIC CLARITY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default EsgDueDiligenceMaIndia;
