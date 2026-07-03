import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DpdpRules2025 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const handleMouseMove = (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            
            const nodes = document.querySelectorAll('.dpdp-golden-accent-node');
            nodes.forEach(node => {
                node.style.transform = `translate(${x}px, ${y}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="bg-[#f7fafd] text-[#181c1e] font-['Inter'] min-h-screen">
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a2540]">
                    <div className="absolute inset-0 z-0">
                        <img alt="Security Operations Center" className="w-full h-full object-cover opacity-50 scale-105" 
                        src="/insightpage/dpdp.jpeg" />
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/40 to-transparent"></div> */}
                    </div>
                    {/* Subtle Coordinate Grid Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 dpdp-forensic-grid"></div>
                    <div className="relative z-10 max-w-[1280px] mx-auto px-[16px] md:px-[40px] w-full">
                        <div className="dpdp-glass-shield max-w-5xl p-[32px] md:p-[64px] relative overflow-hidden">
                           
                            
                           
                            <h1 className="font-['Montserrat'] text-[36px] md:text-[72px] text-white mb-8 leading-[1.05] tracking-tight font-bold">
                                DPDP Rules 2025: <br />
                                <span className="text-[#ffff] font-light italic">Data Privacy as a</span><br />
                                Board-Level Compliance Imperative
                            </h1>
                            <p className="font-['Inter'] text-[18px] md:text-[20px] text-[#e0e3e6] max-w-2xl leading-relaxed mb-12 border-l-2 border-[#b0c8eb] pl-6">
                                Notified on 14 November 2025, this framework establishes clear obligations for Data Fiduciaries with significant implications for governance.
                            </p>
                            <div className="flex flex-wrap gap-16 pt-8 border-t border-white/10">
                                <div className="flex flex-col">
                                    <span className="dpdp-technical-coordinate text-white/50 mb-1">SECTOR</span>
                                    <span className="font-['Inter'] text-[14px] font-semibold text-white tracking-[0.05em] uppercase">Regulatory Governance</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="dpdp-technical-coordinate text-white/50 mb-1">RELEASE_DATE</span>
                                    <span className="font-['Inter'] text-[14px] font-semibold text-white tracking-[0.05em]">14.11.2025</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="dpdp-technical-coordinate text-white/50 mb-1">LATENCY</span>
                                    <span className="font-['Inter'] text-[14px] font-semibold text-white tracking-[0.05em] uppercase text-[#ba1a1a]">Immediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 1: Core Elements */}
                <section className="py-[80px] dpdp-forensic-grid bg-[#f7fafd]">
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                        <div className="flex flex-col items-center text-center mb-16">
                            <span className="dpdp-technical-coordinate mb-2">CHAPTER_01 // STATUTORY_FOUNDATIONS</span>
                            <h2 className="font-['Montserrat'] font-semibold text-[24px] md:text-[32px] text-[#000f22] uppercase tracking-tight">Core Elements of the Mandate</h2>
                            <div className="w-16 h-1 bg-[#000f22] mt-4"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                            {/* Grid Item 1 */}
                            <div className="bg-[#ffffff] border border-[#c4c6ce] p-[40px] relative group hover:shadow-xl hover:border-[#000f22] transition-all duration-300">
                                <div className="absolute top-4 right-4 dpdp-technical-coordinate">REF: DPDP_A</div>
                                <div className="w-12 h-12 flex items-center justify-center bg-[#0a2540] text-white rounded-full mb-8 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                                </div>
                                <h3 className="font-['Montserrat'] text-[18px] text-[#000f22] mb-4 uppercase font-bold tracking-wide">Consent Management</h3>
                                <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">Mandatory granular and verifiable consent mechanisms for all personal data processing activities.</p>
                            </div>
                            {/* Grid Item 2 */}
                            <div className="bg-[#ffffff] border border-[#c4c6ce] p-[40px] relative group hover:shadow-xl hover:border-[#000f22] transition-all duration-300">
                                <div className="absolute top-4 right-4 dpdp-technical-coordinate">REF: DPDP_B</div>
                                <div className="w-12 h-12 flex items-center justify-center bg-[#0a2540] text-white rounded-full mb-8 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>corporate_fare</span>
                                </div>
                                <h3 className="font-['Montserrat'] text-[18px] text-[#000f22] mb-4 uppercase font-bold tracking-wide">Significant Fiduciaries</h3>
                                <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">Enhanced obligations for entities managing high-volume data, requiring DPO appointments and audits.</p>
                            </div>
                            {/* Grid Item 3 */}
                            <div className="bg-[#000f22]/5 border border-[#000f22]/30 p-[40px] relative group hover:shadow-xl transition-all duration-300 shadow-sm">
                                <div className="absolute top-4 right-4 dpdp-technical-coordinate font-bold text-[#ba1a1a]">CRITICAL_NODE</div>
                                <div className="w-12 h-12 flex items-center justify-center bg-[#ba1a1a] text-white rounded-full mb-8">
                                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                                </div>
                                <h3 className="font-['Montserrat'] text-[18px] text-[#000f22] mb-4 uppercase font-bold tracking-wide">Board Accountability</h3>
                                <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">Non-compliance penalties capped at <span className="font-bold text-[#ba1a1a]">₹250 crore</span>, placing legal onus directly on the board.</p>
                            </div>
                            {/* Grid Item 4 */}
                            <div className="bg-[#ffffff] border border-[#c4c6ce] p-[40px] relative group hover:shadow-xl hover:border-[#000f22] transition-all duration-300">
                                <div className="absolute top-4 right-4 dpdp-technical-coordinate">REF: DPDP_D</div>
                                <div className="w-12 h-12 flex items-center justify-center bg-[#0a2540] text-white rounded-full mb-8 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                                </div>
                                <h3 className="font-['Montserrat'] text-[18px] text-[#000f22] mb-4 uppercase font-bold tracking-wide">The DPBI</h3>
                                <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">The Data Protection Board of India established as the central adjudicatory body for grievance redressal.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Risk vs. Readiness Dashboard */}
                <section className="py-[80px] bg-[#0a2540] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 dpdp-forensic-grid"></div>
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
                    </div>
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] relative z-10">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-4">
                                <span className="dpdp-technical-coordinate text-white/50 mb-4 block">ANALYSIS_MATRIX // RISK_V_READY</span>
                                <h2 className="font-['Montserrat'] font-semibold text-[24px] md:text-[32px] mb-6 uppercase leading-tight tracking-tight">Strategic Implications</h2>
                                <p className="text-white/70 font-['Inter'] text-[18px] mb-8 leading-relaxed">Evaluating the friction between regulatory strictness and operational scalability in the new privacy era.</p>
                                <div className="space-y-6">
                                    <div className="p-6 bg-white/5 border-l-4 border-[#b0c8eb]">
                                        <h4 className="font-['Inter'] text-[14px] font-semibold text-[#b0c8eb] mb-2 uppercase tracking-[0.05em]">Privacy-by-Design</h4>
                                        <p className="text-[14px] text-white/60 leading-relaxed">Integration of data protection into system architecture from the ground up, reducing long-term liability.</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-[#b0c8eb] border border-white/10 p-4">
                                        <span className="material-symbols-outlined">verified</span>
                                        <span className="font-['Inter'] text-[12px] font-medium uppercase tracking-[0.1em]">Forensic Grade Quality Assured</span>
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Visualizations */}
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Gauge 1: Risk */}
                                <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm relative group">
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <h5 className="font-['Inter'] text-[14px] font-semibold text-white uppercase tracking-[0.05em] mb-1">Penalty Risk Exposure</h5>
                                            <span className="dpdp-technical-coordinate text-white/40 italic">MAX_CAP: ₹250 Cr</span>
                                        </div>
                                        <span className="text-[#ba1a1a] material-symbols-outlined">dangerous</span>
                                    </div>
                                    <div className="flex justify-center items-center py-4">
                                        <div className="relative w-48 h-48">
                                            <svg className="dpdp-gauge-svg w-full h-full" viewBox="0 0 36 36">
                                                <path className="dpdp-gauge-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="75, 100"></path>
                                                <path className="dpdp-gauge-fill-red" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="70, 100"></path>
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-[32px] font-bold text-white">CRITICAL</span>
                                                <span className="text-[10px] text-white/40 uppercase tracking-widest">Risk Index</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 border-t border-white/10 pt-4 flex justify-between text-[10px] text-white/40 font-mono">
                                        <span>OPERATIONAL_THREAT: HIGH</span>
                                        <span>FIDUCIARY_STATUS: SDF</span>
                                    </div>
                                </div>
                                {/* Gauge 2: Maturity */}
                                <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm relative group">
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <h5 className="font-['Inter'] text-[14px] font-semibold text-white uppercase tracking-[0.05em] mb-1">Compliance Maturity</h5>
                                            <span className="dpdp-technical-coordinate text-white/40 italic">SECTOR_AVG: 32%</span>
                                        </div>
                                        <span className="text-[#b0c8eb] material-symbols-outlined">insights</span>
                                    </div>
                                    <div className="flex justify-center items-center py-4">
                                        <div className="relative w-48 h-48">
                                            <svg className="dpdp-gauge-svg w-full h-full" viewBox="0 0 36 36">
                                                <path className="dpdp-gauge-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="75, 100"></path>
                                                <path className="dpdp-gauge-fill-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="45, 100"></path>
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-[32px] font-bold text-white">45%</span>
                                                <span className="text-[10px] text-white/40 uppercase tracking-widest">Ready Index</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 border-t border-white/10 pt-4">
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 font-['Inter'] text-[10px] font-medium text-white/40"><span className="w-1.5 h-1.5 bg-[#b0c8eb] rounded-full"></span> CROSS-BORDER DATA FLOWS</li>
                                            <li className="flex items-center gap-2 font-['Inter'] text-[10px] font-medium text-white/40"><span className="w-1.5 h-1.5 bg-[#b0c8eb] rounded-full"></span> CHILDREN'S DATA PROCESSING</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Analysis Detail */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                            <div className="p-8 border-l border-white/20 bg-white/5">
                                <h4 className="font-['Montserrat'] font-semibold text-[24px] text-[#b0c8eb] uppercase mb-4">Operational Complexity</h4>
                                <p className="font-['Inter'] text-[16px] text-white/70 leading-relaxed">
                                    Managing data subject requests (DSRs) within defined statutory timelines will require massive investments in automation and governance software.
                                </p>
                            </div>
                            <div className="p-8 border-l border-white/20 bg-white/5 flex flex-col justify-center">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-['Inter'] text-[12px] font-medium text-white/40 uppercase tracking-[0.1em]">Complexity Projection</span>
                                    <span className="text-[#ba1a1a] font-bold">EXPONENTIAL</span>
                                </div>
                                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-[#ba1a1a] h-full w-[85%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Northrop's Edge */}
                <section className="py-[80px] bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
                        <span className="text-[120px] md:text-[200px] font-bold leading-none select-none">NORTHROP</span>
                    </div>
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
                            <div className="md:w-1/2 order-2 md:order-1">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-square bg-[#f1f4f7] border border-[#c4c6ce] flex flex-col justify-center items-center p-8 text-center group hover:bg-[#000f22] transition-all duration-500 shadow-sm">
                                        <span className="material-symbols-outlined text-[#000f22] group-hover:text-white text-5xl mb-4 transition-colors">analytics</span>
                                        <span className="font-['Inter'] text-[14px] font-semibold text-[#000f22] group-hover:text-white uppercase tracking-[0.05em] transition-colors">Gap Assessments</span>
                                    </div>
                                    <div className="aspect-square bg-[#f1f4f7] border border-[#c4c6ce] flex flex-col justify-center items-center p-8 text-center group hover:bg-[#000f22] transition-all duration-500 shadow-sm mt-8">
                                        <span className="material-symbols-outlined text-[#000f22] group-hover:text-white text-5xl mb-4 transition-colors">support_agent</span>
                                        <span className="font-['Inter'] text-[14px] font-semibold text-[#000f22] group-hover:text-white uppercase tracking-[0.05em] transition-colors">DPO Support</span>
                                    </div>
                                    <div className="aspect-square bg-[#f1f4f7] border border-[#c4c6ce] flex flex-col justify-center items-center p-8 text-center group hover:bg-[#000f22] transition-all duration-500 shadow-sm">
                                        <span className="material-symbols-outlined text-[#000f22] group-hover:text-white text-5xl mb-4 transition-colors">rule</span>
                                        <span className="font-['Inter'] text-[14px] font-semibold text-[#000f22] group-hover:text-white uppercase tracking-[0.05em] transition-colors">Readiness Audits</span>
                                    </div>
                                    <div className="aspect-square bg-[#f1f4f7] border border-[#c4c6ce] flex flex-col justify-center items-center p-8 text-center group hover:bg-[#000f22] transition-all duration-500 shadow-sm mt-8">
                                        <span className="material-symbols-outlined text-[#000f22] group-hover:text-white text-5xl mb-4 transition-colors">verified_user</span>
                                        <span className="font-['Inter'] text-[14px] font-semibold text-[#000f22] group-hover:text-white uppercase tracking-[0.05em] transition-colors">Compliance Protocol</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 order-1 md:order-2">
                                <span className="dpdp-technical-coordinate mb-2 block">ADVISORY_MODEL // FORENSIC_ENGINEERING</span>
                                <h2 className="font-['Montserrat'] font-semibold text-[24px] md:text-[48px] text-[#000f22] uppercase mb-8 tracking-tight">Northrop’s Edge</h2>
                                <p className="font-['Inter'] text-[18px] text-[#43474d] mb-12 leading-relaxed text-balance">
                                    Our boutique advisory model is specifically engineered for the complexities of the 2025 landscape. We don't just provide legal interpretation; we deliver <span className="text-[#000f22] font-bold">operational blueprints</span> for board-level execution.
                                </p>
                                <button className="flex items-center gap-4 font-['Inter'] text-[18px] font-semibold text-[#000f22] uppercase border-b-4 border-[#000f22] pb-2 group transition-all">
                                    Explore Forensic Methodology
                                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: The Compliance Protocol Roadmap */}
                <section className="py-[80px] bg-[#f1f4f7] dpdp-forensic-grid relative">
                    <div className="dpdp-roadmap-line opacity-20 md:block hidden"></div>
                    <div className="max-w-5xl mx-auto px-[16px] md:px-[40px]">
                        <div className="text-center mb-24 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 dpdp-golden-accent-node -mt-4"></div>
                            <span className="dpdp-technical-coordinate block mb-4 uppercase">PROTOCOL_V.01 // EXECUTION_FLOW</span>
                            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[48px] text-[#000f22] uppercase tracking-tighter">Strategic Roadmap</h2>
                            <p className="mt-4 font-['Inter'] text-[12px] font-medium text-[#43474d] opacity-60 tracking-[0.1em]">ESTABLISHED: 14.11.25 // Northrop Security Standard</p>
                        </div>
                        <div className="space-y-12 relative">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="md:w-1/2 md:text-right">
                                    <div className="bg-white border border-[#c4c6ce] p-8 shadow-sm hover:shadow-xl hover:border-[#000f22] transition-all group relative">
                                        <div className="absolute -top-3 -right-3 md:-right-3 md:-left-3 dpdp-technical-coordinate bg-[#f1f4f7] px-2 py-1">COORD: 01.A</div>
                                        <h4 className="font-['Montserrat'] font-semibold text-[20px] text-[#000f22] uppercase mb-2">Classify Fiduciary Status</h4>
                                        <p className="font-['Inter'] text-[14px] text-[#43474d]">Determine if your organization qualifies as a 'Significant Data Fiduciary' based on data volume, sensitivity, and risk potential.</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-12 h-12 bg-[#000f22] text-white rounded-full flex items-center justify-center font-['Montserrat'] font-bold text-[20px] z-10 border-4 border-white shadow-lg">01</div>
                                <div className="md:w-1/2 hidden md:block"></div>
                            </div>
                            {/* Step 2 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="md:w-1/2 hidden md:block"></div>
                                <div className="flex-shrink-0 w-12 h-12 bg-[#000f22] text-white rounded-full flex items-center justify-center font-['Montserrat'] font-bold text-[20px] z-10 border-4 border-white shadow-lg">02</div>
                                <div className="md:w-1/2">
                                    <div className="bg-white border border-[#c4c6ce] p-8 shadow-sm hover:shadow-xl hover:border-[#000f22] transition-all group relative">
                                        <div className="absolute -top-3 -left-3 dpdp-technical-coordinate bg-[#f1f4f7] px-2 py-1">COORD: 02.B</div>
                                        <h4 className="font-['Montserrat'] font-semibold text-[20px] text-[#000f22] uppercase mb-2">Update Policies &amp; Consent</h4>
                                        <p className="font-['Inter'] text-[14px] text-[#43474d]">Re-engineer privacy notices to ensure they are itemized, granular, and available in multiple languages as per DPDP mandates.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="md:w-1/2 md:text-right">
                                    <div className="bg-white border border-[#c4c6ce] p-8 shadow-sm hover:shadow-xl hover:border-[#000f22] transition-all group relative">
                                        <div className="absolute -top-3 -right-3 dpdp-technical-coordinate bg-[#f1f4f7] px-2 py-1">COORD: 03.C</div>
                                        <h4 className="font-['Montserrat'] font-semibold text-[20px] text-[#000f22] uppercase mb-2">Establish Board Oversight</h4>
                                        <p className="font-['Inter'] text-[14px] text-[#43474d]">Appoint a Data Protection Officer (DPO) and integrate regular compliance reporting into monthly board agendas.</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-12 h-12 bg-[#000f22] text-white rounded-full flex items-center justify-center font-['Montserrat'] font-bold text-[20px] z-10 border-4 border-white shadow-lg">03</div>
                                <div className="md:w-1/2 hidden md:block"></div>
                            </div>
                            {/* Step 4 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="md:w-1/2 hidden md:block"></div>
                                <div className="flex-shrink-0 w-12 h-12 bg-[#000f22] text-white rounded-full flex items-center justify-center font-['Montserrat'] font-bold text-[20px] z-10 border-4 border-white shadow-lg">04</div>
                                <div className="md:w-1/2">
                                    <div className="bg-white border border-[#c4c6ce] p-8 shadow-sm hover:shadow-xl hover:border-[#000f22] transition-all group relative">
                                        <div className="absolute -top-3 -left-3 dpdp-technical-coordinate bg-[#f1f4f7] px-2 py-1">COORD: 04.D</div>
                                        <h4 className="font-['Montserrat'] font-semibold text-[20px] text-[#000f22] uppercase mb-2">Conduct PIAs</h4>
                                        <p className="font-['Inter'] text-[14px] text-[#43474d]">Implement routine Personal Impact Assessments (PIAs) for all high-risk data processing activities and new tech rollouts.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Step 5 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="md:w-1/2 md:text-right">
                                    <div className="bg-[#000f22] border border-[#000f22] p-8 shadow-xl relative overflow-hidden group">
                                        <div className="absolute top-2 left-2 dpdp-golden-accent-node scale-50 opacity-30"></div>
                                        <div className="absolute -top-3 -right-3 dpdp-technical-coordinate bg-[#000f22] px-2 py-1 text-white/50">COORD: 05.E</div>
                                        <h4 className="font-['Montserrat'] font-semibold text-[20px] text-white uppercase mb-2">Monitor DPBI Guidance</h4>
                                        <p className="font-['Inter'] text-[14px] text-white/80">Establish a real-time monitoring framework for latest notifications and adjudicatory precedents from the Data Protection Board.</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-12 h-12 bg-[#b0c8eb] text-[#000f22] rounded-full flex items-center justify-center font-['Montserrat'] font-bold text-[20px] z-10 border-4 border-white shadow-lg ring-4 ring-[#b0c8eb]/20">05</div>
                                <div className="md:w-1/2 hidden md:block"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-[96px] bg-[#000f22] relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full dpdp-forensic-grid"></div>
                        <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-[#b0c8eb]/20 rounded-full blur-[120px]"></div>
                    </div>
                    <div className="relative z-10 text-center max-w-4xl mx-auto px-[16px] md:px-[40px]">
                        <span className="dpdp-technical-coordinate text-white/40 mb-4 block uppercase tracking-[0.3em]">Institutional Readiness Audit</span>
                        <h3 className="font-['Montserrat'] font-semibold text-[24px] md:text-[48px] text-white mb-8 uppercase tracking-tight">Request a Forensic Readiness Audit</h3>
                        <p className="font-['Inter'] text-[#b0c8eb] mb-12 text-[20px] max-w-2xl mx-auto leading-relaxed">
                            Ensure your board is shielded from maximum penalties through our proprietary assessment framework.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                            <Link to="/contact" className="px-12 py-5 bg-white text-[#000f22] font-['Inter'] font-semibold text-[18px] uppercase tracking-[0.05em] hover:bg-[#b0c8eb] transition-all shadow-xl inline-block">
                                Consult an Expert
                            </Link>
                            <button className="px-12 py-5 border-2 border-white/30 text-white font-['Inter'] font-semibold text-[18px] uppercase tracking-[0.05em] hover:bg-white/10 hover:border-white transition-all">
                                Download Rulebook Summary
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DpdpRules2025;
