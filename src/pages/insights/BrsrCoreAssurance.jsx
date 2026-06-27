import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrsrCoreAssurance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#ffffff] text-[#181c1e] font-['Inter'] font-normal text-[16px] overflow-x-hidden min-h-screen">
            <main className="pt-[64px]">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#000f22]">
                    <div className="absolute inset-0 z-0">
                        {/* Placeholder image for hero bg matching the dark corporate feel */}
                        <img className="w-full h-full object-cover opacity-30" alt="Corporate office interior" src="/insightpage/bsrcore.png" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#000f22] via-[#000f22]/80 to-transparent"></div>
                    </div>
                    <div className="relative z-20 w-full px-[16px] md:px-[40px] max-w-[1280px] mx-auto text-[#ffffff]">
                        <div className="flex flex-col lg:flex-row gap-[48px] items-center">
                            <div className="lg:w-2/3">
                                <div className="flex items-center gap-4 mb-[24px]">
                                    <div className="w-12 h-px bg-[#c89f50]"></div>
                                    <span className="font-['Inter'] text-[12px] font-medium text-[#c89f50] tracking-[0.2em] uppercase">INSTITUTIONAL STRATEGY LEDGER</span>
                                </div>
                                <span className="font-['Inter'] text-[14px] font-semibold text-[#768dad] uppercase tracking-[0.1em] mb-[8px] block">STRATEGIC DIRECTIVE</span>
                                <h1 className="font-['Montserrat'] text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] mb-[32px] tracking-[-0.02em]">
                                    BRSR Core Assurance:<br />
                                    <span className="text-[#c89f50]">The New ESG Mandate</span>
                                </h1>
                                <p className="font-['Inter'] text-[16px] md:text-[20px] max-w-2xl text-[#d2e4ff] opacity-90 leading-relaxed mb-[48px]">
                                    SEBI's enhanced scrutiny introduces rigorous independent assurance requirements for ESG disclosures. For India's top corporates, sustainability reporting moves from voluntary narrative to forensic accountability.
                                </p>

                                {/* Timeline Boxes */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
                                    {[
                                        { year: "FY 2023-24", entities: "Top 150" },
                                        { year: "FY 2024-25", entities: "Top 250" },
                                        { year: "FY 2025-26", entities: "Top 500" },
                                        { year: "FY 2026-27", entities: "Top 1,000" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="border border-[#768dad]/30 bg-[#ffffff]/5 p-[16px] backdrop-blur-sm">
                                            <div className="font-['Inter'] text-[12px] text-[#768dad] mb-[4px]">{item.year}</div>
                                            <div className="font-['Inter'] text-[16px] font-bold text-[#ffffff]">{item.entities}</div>
                                            <div className="font-['Inter'] text-[12px] text-[#768dad] mt-[2px]">Listed Entities</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Right side floating card */}
                            <div className="lg:w-1/3 w-full max-w-sm ml-auto">
                                <div className="border border-[#c89f50]/30 bg-[#000f22]/60 backdrop-blur-md p-[32px] shadow-2xl relative">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#c89f50]"></div>
                                    <div className="flex items-start gap-[16px] mb-[24px]">
                                        <span className="material-symbols-outlined text-[#c89f50] text-[32px]">verified_user</span>
                                        <div>
                                            <div className="font-['Inter'] text-[12px] font-bold text-[#ffffff] tracking-[0.1em]">SEBI 2026</div>
                                            <div className="font-['Inter'] text-[12px] font-bold text-[#c89f50] tracking-[0.1em]">COMPLIANCE SEAL</div>
                                        </div>
                                    </div>
                                    <p className="font-['Inter'] text-[16px] text-[#d2e4ff] italic leading-relaxed">
                                        "Forensic-grade assurance for institutional trust."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Framework Taxonomy & Critical Milestones */}
                <section className="py-[80px] px-[16px] md:px-[40px] max-w-[1280px] mx-auto bg-[#ffffff]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[48px] gap-[24px] border-b border-[#e0e3e6] pb-[24px]">
                        <h2 className="font-['Montserrat'] text-[24px] md:text-[32px] font-semibold text-[#000f22] max-w-sm leading-[1.2]">Framework Taxonomy &amp; Critical Milestones</h2>
                        <div className="font-['Inter'] text-[12px] font-semibold text-[#74777e] tracking-[0.1em] uppercase">
                            DOCUMENT REF: BRSR-CR-2026
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                        {/* Card 1 */}
                        <div className="border-l border-[#e0e3e6] pl-[24px]">
                            <div className="text-[#c4c6ce] font-['Inter'] text-[14px] mb-[16px]">01</div>
                            <h3 className="font-['Montserrat'] text-[18px] font-bold text-[#000f22] mb-[16px]">Phased Rollout Strategy</h3>
                            <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed mb-[24px] min-h-[100px]">
                                Mandatory assurance is being introduced in a structured tiering system, starting with the top 150 listed entities (by market cap). This allows the ecosystem to build necessary capacity and standardize data protocols.
                            </p>
                            <ul className="space-y-[12px]">
                                <li className="flex items-center gap-[8px] font-['Inter'] text-[14px] text-[#74777e]">
                                    <span className="w-1.5 h-1.5 rounded-full border border-[#c89f50]"></span>
                                    Market Cap Tiers (150-1000)
                                </li>
                                <li className="flex items-center gap-[8px] font-['Inter'] text-[14px] text-[#74777e]">
                                    <span className="w-1.5 h-1.5 rounded-full border border-[#c89f50]"></span>
                                    Incremental Scope Inclusion
                                </li>
                            </ul>
                        </div>
                        {/* Card 2 */}
                        <div className="border-l border-[#e0e3e6] pl-[24px]">
                            <div className="text-[#c4c6ce] font-['Inter'] text-[14px] mb-[16px]">02</div>
                            <h3 className="font-['Montserrat'] text-[18px] font-bold text-[#000f22] mb-[16px]">Assurance Expertise (ISAE 3000)</h3>
                            <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed mb-[24px] min-h-[100px]">
                                Assurance must be conducted by professionals with requisite expertise in sustainability and forensic auditing, adhering strictly to ISAE 3000 (Revised) standards for non-financial information.
                            </p>
                            <ul className="space-y-[12px]">
                                <li className="flex items-center gap-[8px] font-['Inter'] text-[14px] text-[#74777e]">
                                    <span className="w-1.5 h-1.5 rounded-full border border-[#c89f50]"></span>
                                    Independent Third-Party Review
                                </li>
                                <li className="flex items-center gap-[8px] font-['Inter'] text-[14px] text-[#74777e]">
                                    <span className="w-1.5 h-1.5 rounded-full border border-[#c89f50]"></span>
                                    Limited to Reasonable Assurance Fleet
                                </li>
                            </ul>
                        </div>
                        {/* Card 3 */}
                        <div className="border-l border-[#e0e3e6] pl-[24px]">
                            <div className="text-[#c4c6ce] font-['Inter'] text-[14px] mb-[16px]">03</div>
                            <h3 className="font-['Montserrat'] text-[18px] font-bold text-[#000f22] mb-[16px]">Value Chain Disclosures</h3>
                            <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed mb-[24px] min-h-[100px]">
                                The mandate extends beyond corporate boundaries to include the 'Value Chain' — requiring top companies to report ESG metrics for their significant partners, upstream and downstream.
                            </p>
                            <ul className="space-y-[12px]">
                                <li className="flex items-center gap-[8px] font-['Inter'] text-[14px] text-[#74777e]">
                                    <span className="w-1.5 h-1.5 rounded-full border border-[#c89f50]"></span>
                                    Scope 3 Emissions Depth
                                </li>
                                <li className="flex items-center gap-[8px] font-['Inter'] text-[14px] text-[#74777e]">
                                    <span className="w-1.5 h-1.5 rounded-full border border-[#c89f50]"></span>
                                    Partner Data Integrity Audits
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 3: Strategic Business Implications */}
                <section className="bg-[#000f22] py-[80px]">
                    <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
                        <div className="mb-[64px]">
                            <h2 className="font-['Montserrat'] text-[24px] md:text-[32px] font-semibold text-[#ffffff] mb-[16px]">Strategic Business Implications</h2>
                            <p className="font-['Inter'] text-[16px] text-[#d2e4ff] max-w-2xl leading-relaxed">
                                The shift toward mandatory assurance represents both a defensive compliance requirement and an offensive strategic advantage.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
                            {/* Left Column */}
                            <div className="border border-[#768dad]/20 p-[32px] bg-[#0a2540]/30 rounded-[4px] relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c89f50] to-[#000f22]"></div>
                                <div className="flex items-center gap-[12px] mb-[24px]">
                                    <span className="material-symbols-outlined text-[#c89f50]">shield</span>
                                    <h3 className="font-['Montserrat'] text-[20px] font-bold text-[#ffffff]">Brand &amp; Investor Credibility</h3>
                                </div>
                                <p className="font-['Inter'] text-[18px] text-[#d2e4ff] italic leading-relaxed mb-[32px]">
                                    "Assured data is the new currency of trust in global capital markets. Boards that embrace forensic-level ESG scrutiny gain a lower cost of capital and enhanced long-term resilience."
                                </p>
                                <div className="flex items-center gap-[16px]">
                                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Vikram Malhotra" className="w-12 h-12 rounded-full grayscale border border-[#768dad]" />
                                    <div>
                                        <div className="font-['Inter'] text-[14px] font-bold text-[#ffffff]">Vikram Malhotra</div>
                                        <div className="font-['Inter'] text-[12px] text-[#768dad]">Managing Partner, Northrop Strategic</div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column */}
                            <div className="border border-[#768dad]/20 p-[32px] bg-[#0a2540]/30 rounded-[4px] relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ba1a1a] to-[#000f22]"></div>
                                <div className="flex items-center gap-[12px] mb-[32px]">
                                    <span className="material-symbols-outlined text-[#ba1a1a]">warning</span>
                                    <h3 className="font-['Montserrat'] text-[20px] font-bold text-[#ffffff]">Operational Hurdles</h3>
                                </div>
                                <div className="space-y-[24px]">
                                    <div className="flex items-start gap-[16px]">
                                        <div className="font-['Inter'] text-[14px] font-bold text-[#c89f50] mt-1">A.</div>
                                        <div>
                                            <div className="font-['Inter'] text-[16px] font-bold text-[#ffffff] mb-[4px]">Data Granularity &amp; Silos</div>
                                            <p className="font-['Inter'] text-[14px] text-[#768dad] leading-relaxed">Aggregating verifiable ESG data across decentralized business units often reveals critical gaps in internal control systems.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-[16px]">
                                        <div className="font-['Inter'] text-[14px] font-bold text-[#c89f50] mt-1">B.</div>
                                        <div>
                                            <div className="font-['Inter'] text-[16px] font-bold text-[#ffffff] mb-[4px]">Internal Control for ESG (IC-ESG)</div>
                                            <p className="font-['Inter'] text-[14px] text-[#768dad] leading-relaxed">Requirement to establish SOX-style controls for environmental and social metrics, necessitating cross-functional integration.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-[16px]">
                                        <div className="font-['Inter'] text-[14px] font-bold text-[#c89f50] mt-1">C.</div>
                                        <div>
                                            <div className="font-['Inter'] text-[16px] font-bold text-[#ffffff] mb-[4px]">Assurance Readiness Gap</div>
                                            <p className="font-['Inter'] text-[14px] text-[#768dad] leading-relaxed">Most firms lack the "audit-ready" documentation required for ISAE 3000 assurance, leading to qualified opinions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Why Northrop? */}
                <section className="py-[80px] bg-[#f7fafd] relative" style={{ backgroundImage: 'linear-gradient(rgba(0, 15, 34, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 15, 34, 0.03) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                    <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
                        <div className="bg-[#ffffff] border border-[#e0e3e6] shadow-xl p-[32px] md:p-[64px] flex flex-col md:flex-row gap-[48px] items-center">
                            <div className="md:w-1/2">
                                <h2 className="font-['Inter'] text-[14px] font-bold text-[#c89f50] uppercase tracking-[0.1em] mb-[16px]">WHY NORTHROP?</h2>
                                <h3 className="font-['Montserrat'] text-[28px] md:text-[36px] font-bold text-[#000f22] mb-[24px] leading-tight">Forensic Rigour in an ESG World</h3>
                                <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed mb-[32px]">
                                    As a firm rooted in forensic accounting and insolvency, we don't just "check boxes." We interrogate the data. Our senior-led approach ensures that your BRSR Core disclosures stand up to the highest levels of SEBI scrutiny and institutional investor due diligence.
                                </p>
                                <div className="flex flex-wrap gap-[12px]">
                                    <div className="border border-[#e0e3e6] px-[16px] py-[8px] flex items-center gap-[8px] bg-[#f7fafd] rounded-[4px]">
                                        <span className="material-symbols-outlined text-[#000f22] text-[18px]">gavel</span>
                                        <span className="font-['Inter'] text-[12px] font-medium text-[#000f22]">Audit Integrity</span>
                                    </div>
                                    <div className="border border-[#e0e3e6] px-[16px] py-[8px] flex items-center gap-[8px] bg-[#f7fafd] rounded-[4px]">
                                        <span className="material-symbols-outlined text-[#000f22] text-[18px]">verified</span>
                                        <span className="font-['Inter'] text-[12px] font-medium text-[#000f22]">Regulatory Precision</span>
                                    </div>
                                    <div className="border border-[#e0e3e6] px-[16px] py-[8px] flex items-center gap-[8px] bg-[#f7fafd] rounded-[4px]">
                                        <span className="material-symbols-outlined text-[#000f22] text-[18px]">insights</span>
                                        <span className="font-['Inter'] text-[12px] font-medium text-[#000f22]">Strategic Clarity</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full">
                                <div className="bg-[#000f22] p-[48px] text-center flex flex-col justify-center items-center h-full rounded-[4px] border-b-4 border-[#c89f50]">
                                    <div className="font-['Montserrat'] text-[24px] font-bold text-[#c89f50] mb-[8px]">100%</div>
                                    <div className="font-['Montserrat'] text-[18px] font-bold text-[#ffffff] uppercase tracking-[0.1em] mb-[24px]">COMPLIANCE ASSURANCE FOCUS</div>
                                    <div className="font-['Inter'] text-[16px] text-[#d2e4ff] italic">"Precision is our only standard."</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: ESG Readiness Protocol */}
                <section className="py-[80px] bg-[#ffffff]">
                    <div className="px-[16px] md:px-[40px] max-w-4xl mx-auto text-center">
                        <h2 className="font-['Montserrat'] text-[28px] md:text-[36px] font-semibold text-[#000f22] mb-[16px]">ESG Readiness Protocol</h2>
                        <p className="font-['Inter'] text-[16px] text-[#43474d] mb-[64px]">
                            A formal roadmap for Indian corporates to transition from disclosure to mandatory assurance.
                        </p>
                        
                        <div className="space-y-[16px] text-left">
                            {/* Step 1 */}
                            <div className="border border-[#e0e3e6] p-[24px] flex flex-col md:flex-row gap-[24px] items-center hover:border-[#c89f50] transition-colors bg-[#ffffff] rounded-[4px]">
                                <div className="font-['Inter'] text-[14px] text-[#74777e] border border-[#e0e3e6] w-12 h-12 flex items-center justify-center shrink-0">01</div>
                                <div className="flex-1">
                                    <div className="font-['Montserrat'] text-[16px] font-bold text-[#000f22] mb-[4px]">Map Core KPIs</div>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Identify specific SEBI BRSR Core indicators (9 key attributes) currently active in your reporting scope.</p>
                                </div>
                                <span className="material-symbols-outlined text-[#c4c6ce]">chevron_right</span>
                            </div>
                            {/* Step 2 */}
                            <div className="border border-[#e0e3e6] p-[24px] flex flex-col md:flex-row gap-[24px] items-center hover:border-[#c89f50] transition-colors bg-[#ffffff] rounded-[4px]">
                                <div className="font-['Inter'] text-[14px] text-[#74777e] border border-[#e0e3e6] w-12 h-12 flex items-center justify-center shrink-0">02</div>
                                <div className="flex-1">
                                    <div className="font-['Montserrat'] text-[16px] font-bold text-[#000f22] mb-[4px]">Early Assurance Engagement</div>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Initiate a 'dry run' assurance exercise to identify gaps in data documentation before formal SEBI filing.</p>
                                </div>
                                <span className="material-symbols-outlined text-[#c4c6ce]">chevron_right</span>
                            </div>
                            {/* Step 3 */}
                            <div className="border border-[#e0e3e6] p-[24px] flex flex-col md:flex-row gap-[24px] items-center hover:border-[#c89f50] transition-colors bg-[#ffffff] rounded-[4px]">
                                <div className="font-['Inter'] text-[14px] text-[#74777e] border border-[#e0e3e6] w-12 h-12 flex items-center justify-center shrink-0">03</div>
                                <div className="flex-1">
                                    <div className="font-['Montserrat'] text-[16px] font-bold text-[#000f22] mb-[4px]">ICSR Integration</div>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Embed ESG risks into the Enterprise Risk Management (ERM) framework for board-level oversight.</p>
                                </div>
                                <span className="material-symbols-outlined text-[#c4c6ce]">chevron_right</span>
                            </div>
                            {/* Step 4 */}
                            <div className="border border-[#e0e3e6] p-[24px] flex flex-col md:flex-row gap-[24px] items-center hover:border-[#c89f50] transition-colors bg-[#ffffff] rounded-[4px]">
                                <div className="font-['Inter'] text-[14px] text-[#74777e] border border-[#e0e3e6] w-12 h-12 flex items-center justify-center shrink-0">04</div>
                                <div className="flex-1">
                                    <div className="font-['Montserrat'] text-[16px] font-bold text-[#000f22] mb-[4px]">Value Chain Preparation</div>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Standardize ESG data collection templates for top suppliers to ensure upstream data integrity.</p>
                                </div>
                                <span className="material-symbols-outlined text-[#c4c6ce]">chevron_right</span>
                            </div>
                        </div>

                        <div className="mt-[48px]">
                            <Link to="/contact" className="bg-[#000f22] text-[#ffffff] px-[32px] py-[16px] font-['Inter'] text-[14px] font-bold uppercase tracking-[0.05em] inline-flex items-center gap-[8px] hover:bg-[#c89f50] transition-colors rounded-[4px]">
                                Request Advisory Consultation
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BrsrCoreAssurance;
