import { useEffect } from 'react';

const CsrImpactEvidence = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#f7fafd] font-['Inter'] text-[#181c1e] text-[16px] antialiased overflow-x-hidden selection:bg-[#d2e4ff] selection:text-[#001c37]">
            <main>
                {/* Hero Section */}
                <section className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden bg-[#000f22]">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Hero Image"
                            className="w-full h-full object-cover "
                            src="/insightpage/csr2.jpeg"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                   
                    <div className="relative z-10 max-w-[1280px] mx-auto px-[16px] md:px-[40px] pb-[80px] w-full">
                        <div className="max-w-4xl">
                            <h1 className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#ffffff] mb-6 leading-tight tracking-[-0.02em]">
                                CSR 2.0: MCA Demands Impact Evidence — Not Just Expenditure Proof
                            </h1>
                            <p className="font-['Inter'] text-[18px] text-[#ffffff]/80 max-w-2xl">
                                The Ministry of Corporate Affairs is refining CSR rules to shift the narrative from statutory compliance to measurable, long-term societal outcomes.
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-[#B09E6D] to-transparent"></div>
                </section>

                {/* Executive Summary & Dashboard */}
                <section className="csr-forensic-grid bg-[#ffffff] py-[80px] border-b border-[#c4c6ce]">
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                        <div className="grid lg:grid-cols-12 gap-[24px] items-start">
                            {/* Text Content */}
                            <div className="lg:col-span-7">
                                <div className="flex items-center gap-2 text-[#000f22] font-bold mb-4">
                                    <span className="w-8 h-px bg-[#000f22]"></span>
                                    <span className="uppercase tracking-[0.05em] text-[14px]">Executive Summary</span>
                                </div>
                                <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] mb-6">Transitioning to Forensic Accountability</h2>
                                <div className="space-y-6 text-[#43474d] font-['Inter'] text-[16px] leading-relaxed text-justify">
                                    <p>
                                        Indian corporate philanthropy is undergoing its most radical transformation since the 2013 mandate. The Ministry of Corporate Affairs (MCA) has signaled a clear departure from "check-box compliance" toward a forensic, impact-first framework.
                                    </p>
                                    <p>
                                        Central to this shift is the formalization of <strong>Impact Assessments</strong> and the integration of the <strong>Social Stock Exchange (SSE)</strong>, introducing Zero Coupon Zero Principal (ZCZP) instruments. For boards, the mandate is no longer just how much was spent, but what verifiable change was bought.
                                    </p>
                                </div>
                            </div>
                            {/* Impact Dashboard Module */}
                            <div className="lg:col-span-5 mt-[32px] lg:mt-0">
                                <div className="csr-glass-panel p-[32px] rounded shadow-md border border-[#c4c6ce] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 text-[10px] font-['Inter'] font-medium text-[#74777e]">SYSTEM_DASHBOARD_LIVE</div>
                                    <h3 className="font-['Inter'] text-[14px] font-bold tracking-[0.05em] text-[#000f22] uppercase mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">analytics</span>
                                        Impact Metrics Dashboard
                                    </h3>
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="font-['Inter'] text-[14px] text-[#4e6073]">Mandatory Assessment Threshold</span>
                                                <span className="font-['Montserrat'] text-[24px] font-bold text-[#000f22]">₹1 Crore+</span>
                                            </div>
                                            <div className="w-full h-1 bg-[#ebeef1] rounded-full overflow-hidden">
                                                <div className="w-3/4 h-full bg-[#000f22]"></div>
                                            </div>
                                            <p className="text-[11px] font-['Inter'] mt-2 text-[#74777e]">Threshold for projects requiring independent external audits.</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-[16px]">
                                            <div className="p-[16px] border border-[#c4c6ce] rounded bg-[#ffffff]">
                                                <div className="text-[10px] font-['Inter'] uppercase text-[#74777e] mb-1">SROI Gauge</div>
                                                <div className="font-['Montserrat'] text-[24px] font-bold text-[#B09E6D]">4.2x</div>
                                                <div className="text-[11px] font-['Inter'] text-[#4e6073]">Avg. Social ROI in Tier-1</div>
                                            </div>
                                            <div className="p-[16px] border border-[#c4c6ce] rounded bg-[#ffffff]">
                                                <div className="text-[10px] font-['Inter'] uppercase text-[#74777e] mb-1">SSE Readiness</div>
                                                <div className="font-['Montserrat'] text-[24px] font-bold text-[#000f22]">High</div>
                                                <div className="text-[11px] font-['Inter'] text-[#4e6073]">Institutional Compliance</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Developments (Bento Grid) */}
                <section className="bg-[#ffffff] py-[80px]">
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                        <div className="text-center mb-16">
                            <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] mb-4">Core Regulatory Pillars</h2>
                            <p className="text-[#43474d] font-['Inter'] text-[16px] max-w-2xl mx-auto">The MCA 2026 amendments focus on four critical areas of structural reform.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Development 1 */}
                            <div className="group bg-[#ffffff] p-[32px] border border-[#c4c6ce] hover:border-[#000f22] transition-all duration-300 relative">
                                <div className="text-[#000f22]/10 font-bold text-[60px] absolute top-4 right-4 leading-none select-none">01</div>
                                <span className="material-symbols-outlined text-[#B09E6D] text-[32px] mb-4">assignment_turned_in</span>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-3">Mandatory Impact Assessments</h3>
                                <p className="font-['Inter'] text-[14px] text-[#4e6073] leading-relaxed">External audits are now mandatory for large-scale projects, requiring verified evidence of socio-economic uplift.</p>
                            </div>
                            {/* Development 2 */}
                            <div className="group bg-[#ffffff] p-[32px] border border-[#c4c6ce] hover:border-[#000f22] transition-all duration-300 relative">
                                <div className="text-[#000f22]/10 font-bold text-[60px] absolute top-4 right-4 leading-none select-none">02</div>
                                <span className="material-symbols-outlined text-[#B09E6D] text-[32px] mb-4">account_balance_wallet</span>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-3">SSE/ZCZP Subscriptions</h3>
                                <p className="font-['Inter'] text-[14px] text-[#4e6073] leading-relaxed">Unlocking CSR through Social Stock Exchanges using Zero Coupon Zero Principal instruments for non-profits.</p>
                            </div>
                            {/* Development 3 */}
                            <div className="group bg-[#ffffff] p-[32px] border border-[#c4c6ce] hover:border-[#000f22] transition-all duration-300 relative">
                                <div className="text-[#000f22]/10 font-bold text-[60px] absolute top-4 right-4 leading-none select-none">03</div>
                                <span className="material-symbols-outlined text-[#B09E6D] text-[32px] mb-4">verified_user</span>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-3">Tighter Agency Norms</h3>
                                <p className="font-['Inter'] text-[14px] text-[#4e6073] leading-relaxed">Strict KYC and registration protocols for implementing agencies to prevent fund diversion and shell entities.</p>
                            </div>
                            {/* Development 4 */}
                            <div className="group bg-[#ffffff] p-[32px] border border-[#c4c6ce] hover:border-[#000f22] transition-all duration-300 relative">
                                <div className="text-[#000f22]/10 font-bold text-[60px] absolute top-4 right-4 leading-none select-none">04</div>
                                <span className="material-symbols-outlined text-[#B09E6D] text-[32px] mb-4">tune</span>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-3">Threshold Adjustments</h3>
                                <p className="font-['Inter'] text-[14px] text-[#4e6073] leading-relaxed">Dynamic indexing of CSR spend requirements based on audited PAT (Profit After Tax) fluctuations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Business & NGO Implications */}
                <section className="bg-[#000f22] py-[80px] text-[#ffffff]">
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                        <div className="grid lg:grid-cols-2 gap-[32px] items-center">
                            <div>
                                <h2 className="font-['Montserrat'] text-[32px] font-bold mb-8 border-l-4 border-[#B09E6D] pl-6">Strategic CSR vs. Mere Compliance</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-[16px]">
                                        <div className="bg-[#ffffff]/10 p-2 h-fit rounded">
                                            <span className="material-symbols-outlined text-[#B09E6D]">security</span>
                                        </div>
                                        <div>
                                            <h4 className="font-['Inter'] text-[14px] font-bold text-[#B09E6D] mb-2 uppercase tracking-[0.05em]">Compliance Mindset</h4>
                                            <p className="font-['Inter'] text-[16px] text-[#ffffff]/70">Focuses on meeting the 2% spend, treating it as a tax rather than an investment. Risks regulatory scrutiny if impact is negligible.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[16px]">
                                        <div className="bg-[#ffffff]/10 p-2 h-fit rounded">
                                            <span className="material-symbols-outlined text-[#B09E6D]">rocket_launch</span>
                                        </div>
                                        <div>
                                            <h4 className="font-['Inter'] text-[14px] font-bold text-[#B09E6D] mb-2 uppercase tracking-[0.05em]">Strategic Mindset</h4>
                                            <p className="font-['Inter'] text-[16px] text-[#ffffff]/70">Views CSR as long-term community capital. Utilizes data dashboards to track real-time KPIs and social return on investment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#ffffff] p-[32px] rounded-xl shadow-2xl relative overflow-hidden text-[#000f22] mt-[32px] lg:mt-0">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#B09E6D]/10 -mr-12 -mt-12 rounded-full"></div>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold mb-6">Value Proposition: Strategy Ledger</h3>
                                <p className="font-['Inter'] text-[16px] text-[#4e6073] mb-8">We bridge the gap between regulatory mandates and on-ground impact through forensic-level oversight.</p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 font-['Inter'] text-[14px] font-semibold">
                                        <span className="material-symbols-outlined text-[#000f22]">done_all</span>
                                        Integrated CSR Advisory & Strategy
                                    </li>
                                    <li className="flex items-center gap-3 font-['Inter'] text-[14px] font-semibold">
                                        <span className="material-symbols-outlined text-[#000f22]">done_all</span>
                                        SSE Readiness & ZCZP Documentation
                                    </li>
                                    <li className="flex items-center gap-3 font-['Inter'] text-[14px] font-semibold">
                                        <span className="material-symbols-outlined text-[#000f22]">done_all</span>
                                        Independent Forensic Impact Reviews
                                    </li>
                                </ul>
                                <button className="mt-10 w-full py-4 border border-[#000f22] font-bold uppercase tracking-[0.05em] text-[14px] hover:bg-[#000f22] hover:text-[#ffffff] transition-all duration-300">Download Framework</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategic Roadmap */}
                <section className="py-[80px] bg-[#f7fafd]">
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                        <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] mb-12 text-center">Implementation Roadmap</h2>
                        <div className="relative">
                            {/* Central Line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#c4c6ce] -translate-x-1/2"></div>
                            <div className="space-y-[32px]">
                                {/* Step 1 */}
                                <div className="relative flex flex-col md:flex-row items-center gap-[32px] group">
                                    <div className="flex-1 md:text-right">
                                        <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">01 Align Policy</h3>
                                        <p className="text-[#4e6073] font-['Inter'] text-[14px]">Redesigning board-level CSR policies to incorporate impact assessment mandates from the inception stage.</p>
                                    </div>
                                    <div className="z-10 w-10 h-10 bg-[#000f22] text-[#ffffff] flex items-center justify-center rounded-full border-4 border-[#f7fafd] ring-4 ring-[#000f22]/10 font-bold">1</div>
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                                {/* Step 2 */}
                                <div className="relative flex flex-col md:flex-row items-center gap-[32px] group">
                                    <div className="flex-1 hidden md:block"></div>
                                    <div className="z-10 w-10 h-10 bg-[#000f22] text-[#ffffff] flex items-center justify-center rounded-full border-4 border-[#f7fafd] ring-4 ring-[#000f22]/10 font-bold">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">02 Build Dashboards</h3>
                                        <p className="text-[#4e6073] font-['Inter'] text-[14px]">Deploying real-time monitoring tools to track fund utilization and beneficiary progress across all geo-locations.</p>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="relative flex flex-col md:flex-row items-center gap-[32px] group">
                                    <div className="flex-1 md:text-right">
                                        <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">03 Explore SSE</h3>
                                        <p className="text-[#4e6073] font-['Inter'] text-[14px]">Vetting non-profit partners for SSE listing eligibility and structuring CSR spend through regulated exchange platforms.</p>
                                    </div>
                                    <div className="z-10 w-10 h-10 bg-[#000f22] text-[#ffffff] flex items-center justify-center rounded-full border-4 border-[#f7fafd] ring-4 ring-[#000f22]/10 font-bold">3</div>
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                                {/* Step 4 */}
                                <div className="relative flex flex-col md:flex-row items-center gap-[32px] group">
                                    <div className="flex-1 hidden md:block"></div>
                                    <div className="z-10 w-10 h-10 bg-[#000f22] text-[#ffffff] flex items-center justify-center rounded-full border-4 border-[#f7fafd] ring-4 ring-[#000f22]/10 font-bold">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">04 Governance Audits</h3>
                                        <p className="text-[#4e6073] font-['Inter'] text-[14px]">Conducting semi-annual forensic reviews of project implementation to ensure zero leakage and maximum impact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="bg-[#ebeef1] py-[80px] border-y border-[#c4c6ce]">
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] flex flex-col md:flex-row items-center justify-between gap-[32px]">
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] mb-2">Intelligence to Lead.</h2>
                            <p className="text-[#4e6073] font-['Inter'] text-[16px]">Join 15,000+ board members receiving our bi-weekly forensic analysis on Indian corporate governance.</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-2">
                            <input className="flex-1 md:w-80 border-[#c4c6ce] focus:ring-[#000f22] focus:border-[#000f22] bg-[#ffffff] px-4 py-3 rounded-none outline-none" placeholder="Professional Email" type="email" />
                            <button className="bg-[#000f22] text-[#ffffff] font-bold px-8 py-3 uppercase tracking-tighter hover:bg-[#000c30] transition-all">Subscribe</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CsrImpactEvidence;
