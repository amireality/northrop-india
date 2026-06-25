import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const FcraCompliancePmla = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fcra-bento-card').forEach(card => {
            card.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700', 'ease-out');
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#f7fafd] text-[#181c1e] font-['Inter'] font-normal text-[16px] overflow-x-hidden min-h-screen">
            <main className="">
                {/* Hero Section */}
                <section className="relative min-h-[870px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 fcra-hero-gradient z-10"></div>
                        <img className="w-full h-full object-cover" alt="A cinematic architectural shot of a modern institutional glass building during twilight" src="/insightpage/fcracomplamce.png" />
                    </div>
                    <div className="relative z-20 w-full px-[16px] md:px-[40px] max-w-[1280px] mx-auto text-[#ffffff]">
                        <div className="flex items-center gap-4 mb-[16px]">
                            <span className="font-['Inter'] text-[12px] font-medium bg-[#003ea8] px-3 py-1 rounded-[4px]">VOL. 16</span>
                            <span className="font-['Inter'] text-[12px] font-medium opacity-80 tracking-[0.1em] uppercase">October 2024 • Strategy Ledger</span>
                        </div>
                        <h1 className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold max-w-4xl leading-tight mb-[32px] tracking-[-0.02em]">
                            FCRA Compliance and PMLA Obligations — Why Financial Governance Is Core to NGO Survival
                        </h1>
                        <p className="font-['Inter'] text-[18px] max-w-2xl text-[#d2e4ff] opacity-90 leading-relaxed mb-12">
                            In an era of unprecedented regulatory scrutiny, the intersection of Foreign Contribution (Regulation) Act and Prevention of Money Laundering Act has become the definitive survival frontier for non-profits.
                        </p>
                        <div className="flex gap-[16px]">
                            <Link to="/contact" className="bg-[#f7fafd] text-[#000f22] px-8 py-4 rounded-[4px] font-['Inter'] text-[14px] font-semibold uppercase tracking-[0.05em] border border-[#74777e] hover:bg-opacity-90 transition-all inline-block">
                                Download Intelligence Report
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Strategic Dashboard (Bento Grid) */}
                <section className="py-[80px] px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-[32px] gap-[24px]">
                        <div className="max-w-xl">
                            <h2 className="font-['Montserrat'] text-[32px] font-semibold text-[#000f22] mb-2 leading-[40px]">NGO Risk &amp; Governance Dashboard</h2>
                            <p className="text-[#4e6073] font-['Inter'] text-[16px]">Forensic snapshot of the current regulatory environment for civil society organizations.</p>
                        </div>
                        <div className="flex gap-[8px] text-[#43474d] font-['Inter'] text-[12px] font-medium uppercase tracking-[0.1em]">
                            <span>Last Updated:</span>
                            <span className="text-[#000f22] font-bold">24 HRS AGO</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] h-auto md:h-[420px]">
                        {/* Main Gauge */}
                        <div className="md:col-span-2 bg-[#ffffff] border border-[#c4c6ce] p-[32px] rounded-[8px] flex flex-col justify-between fcra-bento-card">
                            <div>
                                <div className="flex justify-between items-start mb-[32px]">
                                    <span className="font-['Inter'] text-[14px] font-semibold text-[#43474d] uppercase tracking-[0.05em]">Compliance Health Index</span>
                                    <span className="material-symbols-outlined text-[#000f22]" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                                </div>
                                <h3 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] leading-[32px]">FCRA/PMLA Alignment</h3>
                            </div>
                            <div className="flex flex-col items-center py-[16px]">
                                <div className="relative w-48 h-48 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle className="text-[#e0e3e6]" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                                        <circle className="text-[#003ea8]" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.9" strokeDashoffset="138" strokeWidth="12"></circle>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] tracking-[-0.01em]">75%</span>
                                        <span className="font-['Inter'] text-[12px] font-medium text-[#4e6073]">Optimal</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-[16px] border-t border-[#c4c6ce] pt-[16px]">
                                <div>
                                    <p className="text-[#4e6073] font-['Inter'] text-[14px]">Audit Readiness</p>
                                    <p className="text-[#000f22] font-bold">CRITICAL</p>
                                </div>
                                <div>
                                    <p className="text-[#4e6073] font-['Inter'] text-[14px]">Reporting Lag</p>
                                    <p className="text-[#000f22] font-bold">0.04%</p>
                                </div>
                            </div>
                        </div>
                        {/* Admin Cap Card */}
                        <div className="md:col-span-1 bg-[#000f22] text-[#ffffff] p-[32px] rounded-[8px] flex flex-col justify-between fcra-bento-card">
                            <div>
                                <span className="material-symbols-outlined text-[#dbe1ff] mb-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                                <h3 className="font-['Inter'] text-[14px] font-semibold uppercase tracking-[0.05em] opacity-80 mb-1">Administrative Cap</h3>
                                <p className="font-['Montserrat'] text-[32px] font-bold tracking-[-0.01em]">20%</p>
                            </div>
                            <div className="bg-[#0a2540] p-4 rounded-[4px]">
                                <p className="font-['Inter'] text-[14px] text-[#d2e4ff] opacity-90 italic">Current regulatory ceiling for admin expenditure under FCRA Amendment.</p>
                            </div>
                        </div>
                        {/* Risk Status Card */}
                        <div className="md:col-span-1 bg-[#e5e8eb] border border-[#c4c6ce] p-[32px] rounded-[8px] flex flex-col gap-[32px] fcra-bento-card">
                            <div className="flex-1">
                                <span className="font-['Inter'] text-[14px] font-semibold text-[#4e6073] uppercase tracking-[0.05em] block mb-[8px]">Compliance Scrutiny</span>
                                <div className="flex items-center gap-2 mb-[16px]">
                                    <span className="w-3 h-3 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                                    <span className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22]">HIGH</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-full bg-[#ebeef1] h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-[#ba1a1a] w-[92%] h-full"></div>
                                    </div>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Regulatory oversight intensification: 92% YoY increase in inspection notices.</p>
                                </div>
                            </div>
                            <div className="pt-[16px] border-t border-[#c4c6ce]">
                                <p className="font-['Inter'] text-[14px] font-semibold text-[#000f22] mb-1">Risk Factor</p>
                                <p className="text-[#ba1a1a] font-bold uppercase tracking-tighter font-['Montserrat'] text-[24px]">Existential</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Matrix: Regulatory Pillars */}
                <section className="bg-[#0a2540] py-[80px]">
                    <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-['Montserrat'] text-[32px] font-semibold text-[#ffffff] mb-4">Critical Regulatory Pillars</h2>
                            <div className="w-24 h-1 bg-[#5884ff] mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px]">
                            {/* Card 1 */}
                            <div className="bg-[#000f22] border border-[#768dad]/20 p-[32px] rounded-[8px] hover:border-[#5884ff] transition-colors group">
                                <div className="text-[#5884ff] mb-[16px] font-['Inter'] text-[12px] font-medium">01</div>
                                <h4 className="font-['Montserrat'] text-[24px] font-semibold text-[#ffffff] mb-[16px] leading-[32px]">FCRA Structural Mandates</h4>
                                <ul className="space-y-3 font-['Inter'] text-[14px] text-[#768dad]">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-[18px] mt-0.5">check_circle</span>
                                        SBI New Delhi Main Branch integration requirement.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-[18px] mt-0.5">check_circle</span>
                                        Strict adherence to the 20% Administrative expense cap.
                                    </li>
                                </ul>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-[#000f22] border border-[#768dad]/20 p-[32px] rounded-[8px] hover:border-[#5884ff] transition-colors group">
                                <div className="text-[#5884ff] mb-[16px] font-['Inter'] text-[12px] font-medium">02</div>
                                <h4 className="font-['Montserrat'] text-[24px] font-semibold text-[#ffffff] mb-[16px] leading-[32px]">Reporting &amp; AML</h4>
                                <ul className="space-y-3 font-['Inter'] text-[14px] text-[#768dad]">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-[18px] mt-0.5">check_circle</span>
                                        Precise filing of Form FC-4 (Annual Returns).
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-[18px] mt-0.5">check_circle</span>
                                        Mandatory NGO-DARPAN portal synchronization.
                                    </li>
                                </ul>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-[#000f22] border border-[#768dad]/20 p-[32px] rounded-[8px] hover:border-[#5884ff] transition-colors group">
                                <div className="text-[#5884ff] mb-[16px] font-['Inter'] text-[12px] font-medium">03</div>
                                <h4 className="font-['Montserrat'] text-[24px] font-semibold text-[#ffffff] mb-[16px] leading-[32px]">Governance Discipline</h4>
                                <ul className="space-y-3 font-['Inter'] text-[14px] text-[#768dad]">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-[18px] mt-0.5">check_circle</span>
                                        Proactive 5-year renewal cycle management.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-[18px] mt-0.5">check_circle</span>
                                        absolute prohibition on intra-NGO foreign fund transfers.
                                    </li>
                                </ul>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-[#000f22] border border-[#768dad]/20 p-[32px] rounded-[8px] hover:border-[#5884ff] transition-colors group">
                                <div className="text-[#5884ff] mb-[16px] font-['Inter'] text-[12px] font-medium">04</div>
                                <h4 className="font-['Montserrat'] text-[24px] font-semibold text-[#ffffff] mb-[16px] leading-[32px]">PMLA Convergence</h4>
                                <ul className="space-y-3 font-['Inter'] text-[14px] text-[#768dad]">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-[18px] mt-0.5">check_circle</span>
                                        Identification of Beneficial Ownership (UBO).
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-[18px] mt-0.5">check_circle</span>
                                        Monitoring of high-value and structured transactions.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Analysis Section */}
                <section className="py-[80px]">
                    <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[32px] items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="font-['Montserrat'] text-[32px] font-semibold text-[#000f22] mb-[16px] uppercase tracking-tighter">The Anatomy of Vulnerability</h2>
                            <p className="font-['Inter'] text-[18px] text-[#4e6073] mb-[32px] leading-relaxed">
                                NGOs often fall into the trap of "Checkbox Compliance"—viewing regulatory requirements as annual hurdles rather than strategic foundations. Renewal rejections are rarely the result of overt malice; they are the consequence of systemic poor documentation and the absence of forensic-grade internal oversight.
                            </p>
                            <div className="space-y-[24px]">
                                <div className="flex gap-[16px]">
                                    <div className="w-12 h-12 rounded-full bg-[#d1e4fb] flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-[#000f22]">priority_high</span>
                                    </div>
                                    <div>
                                        <h4 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mb-1">Strategic vs. Checkbox</h4>
                                        <p className="text-[#43474d] font-['Inter'] text-[16px]">Moving from passive reporting to active governance reduces operational friction and secures multi-year funding runways.</p>
                                    </div>
                                </div>
                                <div className="flex gap-[16px]">
                                    <div className="w-12 h-12 rounded-full bg-[#d1e4fb] flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-[#000f22]">gavel</span>
                                    </div>
                                    <div>
                                        <h4 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mb-1">Enhanced PMLA Enforcement</h4>
                                        <p className="text-[#43474d] font-['Inter'] text-[16px]">New enforcement mechanisms mean any accounting oversight can be interpreted as money laundering, regardless of NGO intent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 rounded-[12px] overflow-hidden border border-[#74777e] shadow-xl relative aspect-square lg:aspect-video">
                            <img className="w-full h-full object-cover" alt="A macro close-up of a high-end luxury mechanical clockwork mechanism" src="/insightpage/fcracomplamce2.png" />
                            <div className="absolute inset-0 bg-[#000f22]/20 flex items-center justify-center">
                                <div className="bg-[#f7fafd]/90 backdrop-blur p-[32px] border border-[#000f22] max-w-xs text-center">
                                    <span className="font-['Inter'] text-[12px] font-medium text-[#003ea8] uppercase">Case Analysis</span>
                                    <p className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mt-2">"Documentation is the only defense in a forensic audit."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operational Roadmap */}
                <section className="bg-[#f1f4f7] py-[80px]">
                    <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-[16px]">
                            <h2 className="font-['Montserrat'] text-[32px] font-semibold text-[#000f22]">Operational Roadmap</h2>
                            <p className="text-[#4e6073] font-['Inter'] text-[12px] font-medium uppercase tracking-[0.1em]">Phase 1 Implementation</p>
                        </div>
                        <div className="relative">
                            {/* Decorative Line */}
                            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-[#c4c6ce] z-0"></div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] relative z-10">
                                {/* Step 1 */}
                                <div className="flex flex-col">
                                    <div className="w-12 h-12 rounded-full bg-[#000f22] text-[#ffffff] flex items-center justify-center font-bold mb-[32px] border-4 border-[#f1f4f7]">1</div>
                                    <h4 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mb-2">Governance Strengthening</h4>
                                    <p className="text-[#43474d] font-['Inter'] text-[14px]">Restructure Board oversight with fiduciary committees focused exclusively on compliance reporting.</p>
                                </div>
                                {/* Step 2 */}
                                <div className="flex flex-col">
                                    <div className="w-12 h-12 rounded-full bg-[#000f22] text-[#ffffff] flex items-center justify-center font-bold mb-[32px] border-4 border-[#f1f4f7]">2</div>
                                    <h4 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mb-2">KYC/AML Systems</h4>
                                    <p className="text-[#43474d] font-['Inter'] text-[14px]">Implement automated donor verification and screening protocols to prevent PMLA 'high-risk' flagging.</p>
                                </div>
                                {/* Step 3 */}
                                <div className="flex flex-col">
                                    <div className="w-12 h-12 rounded-full bg-[#000f22] text-[#ffffff] flex items-center justify-center font-bold mb-[32px] border-4 border-[#f1f4f7]">3</div>
                                    <h4 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mb-2">Internal Audits</h4>
                                    <p className="text-[#43474d] font-['Inter'] text-[14px]">Conduct quarterly "mock audits" to simulate regulator inspections and identify evidentiary gaps.</p>
                                </div>
                                {/* Step 4 */}
                                <div className="flex flex-col">
                                    <div className="w-12 h-12 rounded-full bg-[#000f22] text-[#ffffff] flex items-center justify-center font-bold mb-[32px] border-4 border-[#f1f4f7]">4</div>
                                    <h4 className="font-['Montserrat'] text-[24px] font-semibold text-[#000f22] mb-2">Inspection Readiness</h4>
                                    <p className="text-[#43474d] font-['Inter'] text-[14px]">Develop a "Response Vault" of digitized, indexed governance documents ready for immediate inquiry response.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-[80px] px-[16px] md:px-[40px] max-w-[1280px] mx-auto text-center">
                    <div className="bg-[#000f22] p-[32px] md:p-24 rounded-[8px] relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#ffffff] mb-[16px] leading-tight">Secure Your NGO's Global Mission Future</h2>
                            <p className="text-[#d2e4ff] opacity-90 font-['Inter'] text-[18px] mb-12">Connect with Northrop's forensic accounting team to evaluate your FCRA standing and PMLA alignment before your next renewal cycle.</p>
                            <div className="flex flex-col md:flex-row gap-[16px] justify-center">
                                <Link to="/contact" className="bg-[#f7fafd] text-[#000f22] px-8 py-4 rounded-[4px] font-['Inter'] text-[14px] font-semibold uppercase tracking-[0.05em] inline-block">
                                    Request Strategic Audit
                                </Link>
                                <button className="border border-[#ffffff] text-[#ffffff] px-8 py-4 rounded-[4px] font-['Inter'] text-[14px] font-semibold uppercase tracking-[0.05em] hover:bg-[#ffffff] hover:text-[#000f22] transition-all">
                                    Review methodology
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FcraCompliancePmla;
