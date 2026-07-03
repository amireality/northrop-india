import { useEffect } from 'react';

const IbcNineYears = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#f7fafd] text-[#181c1e] font-['Inter'] font-normal text-[16px] antialiased min-h-screen flex flex-col leading-relaxed">
            <div className="flex flex-1 w-full max-w-[1280px] mx-auto relative">
                {/* Main Content Area */}
                <main className="flex-1 px-[16px] lg:px-[0px] py-[32px] lg:py-[80px] min-w-0 w-full ">
                    <article className="max-w-[800px] mx-auto">
                        {/* Hero Header */}
                        <header className="mb-[32px] ]">
                            <div className="flex items-center gap-[8px] mb-[16px]">
                                <span className="inline-block w-12 h-[1px] bg-[#000f22] opacity-70"></span>
                                <span className="font-['Inter'] text-[12px] font-medium text-[#000f22] uppercase tracking-[0.05em]">Editorial Series 2026</span>
                            </div>
                            <h1 className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#000f22] mb-[16px] leading-tight tracking-[-0.02em]">
                                IBC at Nine Years: Stronger Credit Discipline and the 2025/2026 Amendments
                            </h1>
                            <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[8px] py-[16px] border-y border-[#c4c6ce] mb-[32px] font-['Inter'] text-[12px] font-medium text-[#43474d]">
                                <div className="flex items-center gap-[4px]">
                                    <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                                    October 15, 2026
                                </div>
                                <div className="flex items-center gap-[4px]">
                                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                                    12 Min Read
                                </div>
                                <div className="flex items-center gap-[4px] border-l border-[#c4c6ce] pl-[24px]">
                                    By Strategy &amp; Restructuring Practice
                                </div>
                            </div>
                            <div className="w-full aspect-[16/9] mb-[32px] bg-[#ebeef1] border border-[#c4c6ce] relative overflow-hidden rounded-[4px]">
                                <img className="object-cover w-full h-full absolute inset-0" 
                                alt="Editorial illustration depicting structural financial order and credit discipline" 
                                src="/insightpage/ibcnine.png" />
                            </div>
                        </header>
                        
                        {/* Introduction */}
                        <section className="mb-[32px]">
                            <p className="font-['Inter'] text-[18px] text-[#43474d] mb-[16px] leading-relaxed tracking-tight">
                                Approaching a decade since its inception, the Insolvency and Bankruptcy Code (IBC) has fundamentally re-engineered India’s distressed asset ecosystem. The narrative has shifted from protracted, unstructured litigation to a disciplined, time-bound resolution framework. 
                            </p>
                            <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">
                                However, the operational reality of maximizing value while balancing varied stakeholder interests requires constant legislative calibration. The proposed 2025/2026 amendments represent a critical inflection point, introducing stringent mandatory timelines and nuanced clarifications on statutory dues priorities aimed at accelerating resolutions and enhancing the predictability of outcomes for global institutional investors and domestic creditors alike.
                            </p>
                        </section>
                        
                        {/* Key Reforms (Bento Grid) */}
                        <section className="mb-[32px]">
                            <h2 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mb-[16px] border-b border-[#c4c6ce] pb-[4px] inline-block">Core Legislative Reforms</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[16px]">
                                {/* Reform Card 1 */}
                                <div className="bg-[#ffffff] border border-[#c4c6ce] p-[16px] rounded-[4px] shadow-[0_4px_20px_rgba(10,37,64,0.03)] hover:shadow-[0_4px_20px_rgba(10,37,64,0.08)] transition-shadow">
                                    <div className="bg-[#f1f4f7] w-10 h-10 flex items-center justify-center rounded-[4px] mb-[8px] border border-[#c4c6ce]">
                                        <span className="material-symbols-outlined text-[#000f22]">timer</span>
                                    </div>
                                    <h3 className="font-['Inter'] text-[14px] font-semibold text-[#000f22] mb-[4px] tracking-[0.05em]">Mandatory 14-Day Rule</h3>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Adjudicating Authorities are now strictly mandated to admit or reject applications within 14 days, severely curtailing pre-admission delays that historically eroded asset value.</p>
                                </div>
                                {/* Reform Card 2 */}
                                <div className="bg-[#ffffff] border border-[#c4c6ce] p-[16px] rounded-[4px] shadow-[0_4px_20px_rgba(10,37,64,0.03)] hover:shadow-[0_4px_20px_rgba(10,37,64,0.08)] transition-shadow">
                                    <div className="bg-[#f1f4f7] w-10 h-10 flex items-center justify-center rounded-[4px] mb-[8px] border border-[#c4c6ce]">
                                        <span className="material-symbols-outlined text-[#000f22]">gavel</span>
                                    </div>
                                    <h3 className="font-['Inter'] text-[14px] font-semibold text-[#000f22] mb-[4px] tracking-[0.05em]">Creditor-Initiated Agility</h3>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Enhanced frameworks empower financial creditors to initiate specific structural interventions earlier in the default cycle, reinforcing preemptive credit discipline.</p>
                                </div>
                                {/* Reform Card 3 */}
                                <div className="bg-[#ffffff] border border-[#c4c6ce] p-[16px] rounded-[4px] shadow-[0_4px_20px_rgba(10,37,64,0.03)] hover:shadow-[0_4px_20px_rgba(10,37,64,0.08)] transition-shadow md:col-span-2">
                                    <div className="bg-[#f1f4f7] w-10 h-10 flex items-center justify-center rounded-[4px] mb-[8px] border border-[#c4c6ce]">
                                        <span className="material-symbols-outlined text-[#000f22]">account_balance</span>
                                    </div>
                                    <h3 className="font-['Inter'] text-[14px] font-semibold text-[#000f22] mb-[4px] tracking-[0.05em]">Clarity on Statutory Dues Priority</h3>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">The amendments codify the treatment of government dues, subordinating them effectively beneath secured financial creditors under Section 53, providing much-needed certainty for resolution applicants calculating contingent liabilities.</p>
                                </div>
                            </div>
                        </section>
                        
                        {/* Minimalist Stat Frame */}
                        <div className="mb-[80px] bg-[#000f22] border border-[#000f22] text-[#ffffff] p-[32px] rounded-[8px] flex flex-col md:flex-row items-center gap-[24px] shadow-[0_10px_30px_rgba(10,37,64,0.15)]">
                            <div className="font-['Montserrat'] text-[72px] leading-none font-bold tracking-tighter shrink-0 text-[#d1e4fb]">
                                14
                            </div>
                            <div className="border-l-2 border-[#314865] pl-[24px]">
                                <div className="font-['Montserrat'] text-[24px] font-semibold mb-[4px] text-[#ffffff]">Day Admission Mandate</div>
                                <div className="font-['Inter'] text-[14px] text-[#b0c8eb]">The operational cornerstone of the 2026 amendments, designed to halt asset degradation by forcing immediate judicial decisioning on insolvency commencement.</div>
                            </div>
                        </div>
                        
                        {/* Business & Economic Implications (Dual Column) */}
                        <section className="mb-[32px] border-t border-[#c4c6ce] pt-[80px]">
                            <h2 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mb-[32px]">Economic Implications &amp; Market Dynamics</h2>
                            <div className="grid md:grid-cols-2 gap-[24px]">
                                {/* Column 1 */}
                                <div>
                                    <h3 className="font-['Inter'] text-[14px] font-semibold text-[#000f22] mb-[8px] flex items-center gap-[4px] tracking-[0.05em]">
                                        <span className="material-symbols-outlined text-[16px] text-[#5884ff]">trending_up</span>
                                        Distressed M&amp;A Opportunities
                                    </h3>
                                    <p className="font-['Inter'] text-[16px] text-[#43474d] mb-[16px]">
                                        The clarity introduced regarding statutory dues fundamentally alters the risk calculus for distressed asset acquirers. We anticipate a surge in specialized fund activity, as the "clean slate" principle is reinforced legislatively, allowing for more aggressive, yet mathematically sound, bidding strategies.
                                    </p>
                                    <p className="font-['Inter'] text-[16px] text-[#43474d]">
                                        Structural credit discipline is now institutionalized. Promoters can no longer rely on admission delays to negotiate asymmetric settlements.
                                    </p>
                                </div>
                                {/* Column 2 */}
                                <div className="bg-[#f1f4f7] p-[16px] rounded-[4px] border border-[#c4c6ce]">
                                    <h3 className="font-['Inter'] text-[14px] font-semibold text-[#000f22] mb-[8px] flex items-center gap-[4px] tracking-[0.05em]">
                                        <span className="material-symbols-outlined text-[16px] text-[#ba1a1a]">warning</span>
                                        Challenges &amp; Promoter Scrutiny
                                    </h3>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d] mb-[8px]">
                                        The accelerated timelines demand immediate data readiness from Resolution Professionals (RPs). The risk of procedural missteps during the initial 30 days is exponentially higher.
                                    </p>
                                    <ul className="space-y-[8px] mt-[16px]">
                                        <li className="flex gap-[4px] items-start font-['Inter'] text-[14px] text-[#43474d]">
                                            <span className="material-symbols-outlined text-[16px] text-[#000f22] mt-1">remove</span>
                                            Intensified scrutiny on preferential transactions.
                                        </li>
                                        <li className="flex gap-[4px] items-start font-['Inter'] text-[14px] text-[#43474d]">
                                            <span className="material-symbols-outlined text-[16px] text-[#000f22] mt-1">remove</span>
                                            Higher evidentiary burdens on suspended boards.
                                        </li>
                                        <li className="flex gap-[4px] items-start font-['Inter'] text-[14px] text-[#43474d]">
                                            <span className="material-symbols-outlined text-[16px] text-[#000f22] mt-1">remove</span>
                                            Mandatory forensic audits triggered automatically at lower thresholds.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        
                        {/* Northrop's Approach */}
                        <section className="mb-[32px] bg-[#f1f4f7] border-l-4 border-[#000f22] p-[32px] relative overflow-hidden shadow-[inset_1px_0_0_rgba(228,232,238,1)]">
                            <div className="absolute top-0 right-0 p-[16px] opacity-5">
                                <span className="material-symbols-outlined text-[120px]">account_balance</span>
                            </div>
                            <div className="relative z-10">
                                <span className="font-['Inter'] text-[12px] font-medium text-[#43474d] uppercase tracking-[0.1em] mb-[8px] block">Forensic Insight</span>
                                <h2 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mb-[16px]">The Northrop Methodology</h2>
                                <p className="font-['Inter'] text-[16px] text-[#43474d] max-w-2xl">
                                    Navigating the condensed 14-day window requires infrastructure that bridges Big 4 scale with boutique analytical agility. Our proprietary data ingestion protocols deploy immediately upon CIRP admission, structurally analyzing ledger anomalies and preferential transaction flags within 72 hours. This forensic velocity ensures Committees of Creditors (CoC) operate on factual certainty, not estimations, during critical initial voting phases.
                                </p>
                            </div>
                        </section>
                        
                        {/* Strategic Actions */}
                        <section className="mb-[32px]">
                            <h2 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mb-[16px]">Strategic Checklist for Practitioners</h2>
                            <div className="border border-[#c4c6ce] rounded-[4px] bg-[#ffffff] shadow-[0_4px_20px_rgba(10,37,64,0.03)]">
                                <div className="flex items-start gap-[8px] p-[16px] border-b border-[#c4c6ce]">
                                    <span className="material-symbols-outlined text-[#5884ff]">check_circle</span>
                                    <div>
                                        <h4 className="font-['Inter'] text-[14px] font-semibold text-[#000f22] tracking-[0.05em]">Pre-Admission Readiness</h4>
                                        <p className="font-['Inter'] text-[14px] text-[#43474d] mt-[4px]">Financial creditors must compile exhaustive, digitally verified default documentation prior to filing to survive the 14-day scrutiny window.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-[8px] p-[16px] border-b border-[#c4c6ce]">
                                    <span className="material-symbols-outlined text-[#5884ff]">check_circle</span>
                                    <div>
                                        <h4 className="font-['Inter'] text-[14px] font-semibold text-[#000f22] tracking-[0.05em]">Contingent Liability Mapping</h4>
                                        <p className="font-['Inter'] text-[14px] text-[#43474d] mt-[4px]">Resolution applicants must remodel bid economics utilizing the clarified Section 53 hierarchy for statutory dues.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-[8px] p-[16px]">
                                    <span className="material-symbols-outlined text-[#5884ff]">check_circle</span>
                                    <div>
                                        <h4 className="font-['Inter'] text-[14px] font-semibold text-[#000f22] tracking-[0.05em]">Immediate Forensic Deployment</h4>
                                        <p className="font-['Inter'] text-[14px] text-[#43474d] mt-[4px]">RPs must engage forensic auditors concurrently with assumption of office to meet accelerated transaction review deadlines.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </main>
            </div>
        </div>
    );
};

export default IbcNineYears;
