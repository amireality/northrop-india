import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const McaAccountingStandards = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Micro-interactions for protocol checklist
        const listItems = document.querySelectorAll('.mca-protocol-item');
        listItems.forEach(item => {
            const icon = item.querySelector('.material-symbols-outlined');
            item.addEventListener('mouseenter', () => {
                if(icon) icon.style.transform = 'scale(1.1)';
            });
            item.addEventListener('mouseleave', () => {
                if(icon) icon.style.transform = 'scale(1)';
            });
        });
    }, []);

    return (
        <div className="bg-[#f7fafd] text-[#181c1e] font-['Inter'] font-normal text-[16px]">
            <main>
                {/* Hero Header */}
                <section className="relative pt-[120px] pb-[120px] overflow-hidden border-b border-[#c4c6ce]">
                    <div className="absolute inset-0 z-0">
                        <img src="/reportimg/mca-accounting.avif" alt="MCA Background" className="w-full h-full object-cover" />
                       
                    </div>
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] grid grid-cols-1 md:grid-cols-12 gap-[24px] relative z-10">
                        <div className="md:col-span-7 space-y-[16px]">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e0e3e6]/50 backdrop-blur-sm text-[#000f22] rounded-sm border border-[#74777e]/30">
                                <span className="material-symbols-outlined text-[14px]">verified</span>
                                <span className="font-['Inter'] text-[12px] uppercase tracking-widest font-bold">PREMIUM EDITION // VOL. 2026.01</span>
                            </div>
                            <h1 className="font-['Montserrat'] text-[32px] md:text-[48px] text-[#ffff] leading-tight font-bold">
                                MCA’s Accounting Standards<br />
                                <span className="text-[#ffff]">Amendment Rules 2026</span>
                            </h1>
                            <p className="font-['Inter'] text-[18px] text-[#ffff] max-w-2xl leading-relaxed">
                                A rigorous forensic breakdown of Pillar Two alignment and Global Minimum Tax (GMT) implications for Large Multi-National Enterprises.
                            </p>
                            <div className="pt-[16px] flex gap-4">
                                <div className="border-l-2 border-[#ffff] pl-4">
                                    <span className="block font-['Inter'] text-[14px] text-[#ffff] uppercase font-bold">Forensic Unit</span>
                                    <span className="block font-['Inter'] text-[14px] text-[#ffff]">Strategic Tax &amp; Insolvency Division</span>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Data Visualization */}
                        <div className="md:col-span-5">
                            <div className="bg-[#ffffff] border border-[#c4c6ce] p-6 mca-shadow-forensic relative group overflow-hidden">
                                {/* Tech background */}
                                <div className="absolute top-0 right-0 w-32 h-32 mca-forensic-grid-dense opacity-20"></div>
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#000f22]"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <span className="font-['Inter'] text-[10px] text-[#4e6073] uppercase block mb-1 font-medium">Threshold Matrix</span>
                                            <h3 className="font-['Montserrat'] text-[24px] text-[#000f22] uppercase tracking-tighter font-bold">Pillar Two Impact</h3>
                                        </div>
                                        <div className="text-right">
                                            <span className="font-['Montserrat'] text-5xl text-[#000f22] font-bold">15%</span>
                                            <span className="block font-['Inter'] text-[10px] text-[#4e6073] uppercase font-medium">Effective GMT Rate</span>
                                        </div>
                                    </div>

                                    {/* Technical Chart Simulation */}
                                    <div className="space-y-6">
                                        <div className="relative">
                                            <div className="flex justify-between text-[10px] font-['Inter'] text-[#43474d] mb-1 uppercase font-medium">
                                                <span>Pre-Amendment ETR</span>
                                                <span>22.5% avg</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-[#ebeef1] rounded-full overflow-hidden">
                                                <div className="h-full bg-[#74777e] opacity-30" style={{ width: '75%' }}></div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="flex justify-between text-[10px] font-['Inter'] text-[#000f22] mb-1 uppercase font-bold">
                                                <span>Global Minimum Threshold</span>
                                                <span className="text-[#D4AF37]">15.0% Floor</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-[#ebeef1] rounded-full overflow-hidden">
                                                <div className="h-full bg-[#000f22]" style={{ width: '50%' }}></div>
                                            </div>
                                            <div className="absolute top-2.5 left-[50%] h-4 w-px bg-[#D4AF37] shadow-sm"></div>
                                        </div>
                                    </div>

                                    <div className="mt-10 grid grid-cols-2 gap-4 pt-6 border-t border-[#c4c6ce]">
                                        <div>
                                            <span className="block font-['Inter'] text-[10px] text-[#4e6073] uppercase font-medium">Coverage</span>
                                            <span className="block font-['Inter'] text-[14px] text-[#000f22] font-bold">AS 22 Compliant</span>
                                        </div>
                                        <div>
                                            <span className="block font-['Inter'] text-[10px] text-[#4e6073] uppercase font-medium">Status</span>
                                            <span className="block font-['Inter'] text-[14px] text-[#000f22] font-bold">Statutory Force</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="mt-4 flex justify-between items-center px-2">
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-[#000f22]"></div>
                                    <div className="w-1 h-1 bg-[#000f22] opacity-50"></div>
                                    <div className="w-1 h-1 bg-[#000f22] opacity-20"></div>
                                </div>
                                <span className="font-['Inter'] text-[9px] text-[#43474d]/50 tracking-widest uppercase font-medium">Northrop forensic system // build 4.2.0</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Changes Module */}
                <section className="py-[80px] bg-[#f7fafd] border-b border-[#c4c6ce]">
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                        <div className="mb-12 border-l-[6px] border-[#000f22] pl-6">
                            <span className="font-['Inter'] text-[12px] text-[#4e6073] uppercase tracking-widest block mb-2 font-medium">Legislative Framework</span>
                            <h2 className="font-['Montserrat'] text-[32px] text-[#000f22] uppercase tracking-tight font-bold">Key Statutory Amendments</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                            {/* Card 01 */}
                            <div className="group relative bg-[#ffffff] border border-[#c4c6ce] p-[32px] transition-all duration-300 hover:mca-shadow-forensic hover:-translate-y-1">
                                <div className="absolute top-0 right-0 w-12 h-12 mca-forensic-grid-dense opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="text-4xl font-['Montserrat'] text-[#000f22]/10 group-hover:text-[#000f22]/20 transition-colors mb-4 font-bold">01</div>
                                <h3 className="font-['Montserrat'] text-xl text-[#000f22] mb-4 font-bold border-b border-[#c4c6ce] pb-4">Paragraph 2A &amp; Pillar Two</h3>
                                <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed min-h-[100px]">
                                    Explicit introduction of Paragraph 2A within AS 22, formalizing the scope of Pillar Two legislation for domestic entities within an MNE group.
                                </p>
                                <div className="mt-8 pt-4 border-t border-[#c4c6ce] flex justify-between items-center">
                                    <span className="font-['Inter'] text-[10px] text-[#000f22] font-bold uppercase tracking-widest">Mandatory</span>
                                    <span className="material-symbols-outlined text-[#000f22] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </div>

                            {/* Card 02 */}
                            <div className="group relative bg-[#ffffff] border border-[#c4c6ce] p-[32px] transition-all duration-300 hover:mca-shadow-forensic hover:-translate-y-1">
                                <div className="absolute top-0 right-0 w-12 h-12 mca-forensic-grid-dense opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="text-4xl font-['Montserrat'] text-[#000f22]/10 group-hover:text-[#000f22]/20 transition-colors mb-4 font-bold">02</div>
                                <h3 className="font-['Montserrat'] text-xl text-[#000f22] mb-4 font-bold border-b border-[#c4c6ce] pb-4">Deferred Tax Exceptions</h3>
                                <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed min-h-[100px]">
                                    Mandatory temporary exception to the recognition and disclosure of deferred tax assets specifically arising from GMT top-up taxes.
                                </p>
                                <div className="mt-8 pt-4 border-t border-[#c4c6ce] flex justify-between items-center">
                                    <span className="font-['Inter'] text-[10px] text-[#000f22] font-bold uppercase tracking-widest">AS 22 Amendment</span>
                                    <span className="material-symbols-outlined text-[#000f22] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </div>

                            {/* Card 03 */}
                            <div className="group relative bg-[#ffffff] border border-[#c4c6ce] p-[32px] transition-all duration-300 hover:mca-shadow-forensic hover:-translate-y-1">
                                <div className="absolute top-0 right-0 w-12 h-12 mca-forensic-grid-dense opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="text-4xl font-['Montserrat'] text-[#000f22]/10 group-hover:text-[#000f22]/20 transition-colors mb-4 font-bold">03</div>
                                <h3 className="font-['Montserrat'] text-xl text-[#000f22] mb-4 font-bold border-b border-[#c4c6ce] pb-4">Transition Relief</h3>
                                <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed min-h-[100px]">
                                    Immediate application requirement for reporting periods commencing on or after April 1, 2026, with specific retrospective disclosures.
                                </p>
                                <div className="mt-8 pt-4 border-t border-[#c4c6ce] flex justify-between items-center">
                                    <span className="font-['Inter'] text-[10px] text-[#000f22] font-bold uppercase tracking-widest">Apr 01, 2026</span>
                                    <span className="material-symbols-outlined text-[#000f22] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategic Implications: Command Center Feel */}
                <section className="bg-[#000814] text-[#ffffff] py-24 relative overflow-hidden border-y border-[#c4c6ce]">
                    {/* Forensic background layers */}
                    <div className="absolute inset-0 mca-forensic-grid opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full mca-forensic-grid-dense opacity-5"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#ffffff]/5"></div>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-[#ffffff]/5"></div>

                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div>
                                    <span className="text-[#D4AF37] font-['Inter'] text-[12px] tracking-widest uppercase mb-4 block font-medium">Strategic Analysis</span>
                                    <h2 className="font-['Montserrat'] text-[32px] md:text-[48px] text-[#ffffff] mb-6 font-bold leading-tight">Board-Level<br /><span className="text-[#D4AF37]">Implications</span></h2>
                                    <p className="text-[#e0e3e6] font-['Inter'] text-[18px] max-w-xl leading-relaxed">
                                        CFOs must navigate a paradigm shift in jurisdictional reporting. The 'Command Center' approach requires real-time data integrity.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-6 border-l-4 border-[#D4AF37] bg-[#ffffff]/5 backdrop-blur-sm group hover:bg-[#ffffff]/10 transition-colors">
                                        <h4 className="font-['Inter'] text-[14px] text-[#D4AF37] uppercase mb-2 tracking-widest font-bold">01. Enterprise Risk</h4>
                                        <p className="font-['Inter'] text-[16px] text-[#e0e3e6]">Total re-evaluation of global effective tax rates (ETR) under the new threshold paradigms.</p>
                                    </div>
                                    <div className="p-6 border-l-4 border-[#ffffff]/30 bg-[#ffffff]/5 backdrop-blur-sm group hover:bg-[#ffffff]/10 transition-colors">
                                        <h4 className="font-['Inter'] text-[14px] text-[#ffffff] uppercase mb-2 tracking-widest font-bold">02. Infrastructure</h4>
                                        <p className="font-['Inter'] text-[16px] text-[#e0e3e6]">Immediate requirement for ERP reconfiguration to capture jurisdictional data points for Pillar Two.</p>
                                    </div>
                                    <div className="p-6 border-l-4 border-[#ffffff]/30 bg-[#ffffff]/5 backdrop-blur-sm group hover:bg-[#ffffff]/10 transition-colors">
                                        <h4 className="font-['Inter'] text-[14px] text-[#ffffff] uppercase mb-2 tracking-widest font-bold">03. Readiness</h4>
                                        <p className="font-['Inter'] text-[16px] text-[#e0e3e6]">Board-level reporting mandates for estimated impacts of top-up taxes on consolidated earnings.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Technical HUD Stats */}
                            <div className="grid grid-cols-2 gap-6 relative">
                                {/* Crosshair corners */}
                                <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[#D4AF37]/50"></div>
                                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-[#D4AF37]/50"></div>
                                <div className="aspect-square bg-[#ffffff]/5 border border-[#ffffff]/10 flex flex-col items-center justify-center p-6 text-center group hover:border-[#D4AF37] transition-colors">
                                    <span className="material-symbols-outlined text-4xl mb-4 text-[#D4AF37]">hub</span>
                                    <span className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#ffffff] tracking-tighter">750M€</span>
                                    <span className="font-['Inter'] text-[10px] text-[#e0e3e6] uppercase mt-2 tracking-widest font-medium">Revenue Floor</span>
                                </div>
                                <div className="aspect-square bg-[#ffffff]/5 border border-[#ffffff]/10 flex flex-col items-center justify-center p-6 text-center group hover:border-[#D4AF37] transition-colors">
                                    <span className="material-symbols-outlined text-4xl mb-4 text-[#D4AF37]">monitoring</span>
                                    <span className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#ffffff] tracking-tighter">150+</span>
                                    <span className="font-['Inter'] text-[10px] text-[#e0e3e6] uppercase mt-2 tracking-widest font-medium">Data Vectors</span>
                                </div>
                                <div className="aspect-square bg-[#ffffff]/5 border border-[#ffffff]/10 flex flex-col items-center justify-center p-6 text-center group hover:border-[#D4AF37] transition-colors">
                                    <span className="material-symbols-outlined text-4xl mb-4 text-[#D4AF37]">gavel</span>
                                    <span className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#ffffff] tracking-tighter">AUDIT</span>
                                    <span className="font-['Inter'] text-[10px] text-[#e0e3e6] uppercase mt-2 tracking-widest font-medium">Full Trail Req.</span>
                                </div>
                                <div className="aspect-square bg-[#ffffff]/5 border border-[#ffffff]/10 flex flex-col items-center justify-center p-6 text-center group hover:border-[#D4AF37] transition-colors">
                                    <span className="material-symbols-outlined text-4xl mb-4 text-[#D4AF37]">update</span>
                                    <span className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#ffffff] tracking-tighter">Q1-26</span>
                                    <span className="font-['Inter'] text-[10px] text-[#e0e3e6] uppercase mt-2 tracking-widest font-medium">Compliance Lock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Northrop's Differentiated Support */}
                <section className="py-[80px] bg-[#f7fafd]">
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                            <div className="relative order-2 md:order-1">
                                <div className="w-full h-[500px] bg-[#000f22] border border-[#c4c6ce] relative overflow-hidden group mca-shadow-forensic">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAM0MEHp-ttXmChAtMEOBOdH93uBxUFsmdK6H92Ui6KfHBDFmJKr577nHosPfnSiyMC2PD3xS6PMasWDtR3M33c8FUnTyWhdMajd4xgo4gA0qzLT82XY-0P3DY2eDNIXiYXycpJWyEsNsr3FNfOWU3jMLlRm9kU-hOq_ewI3w-Y2w58bl2gX-0akvkFyKYDl-w7DiogB3i9u1x8BdMjE_u2BRw7baf1ZyeIFUuRknBo40Mw0LR0n2i-I7mvo8RqRZC5HK_Up2TF_-M')" }}></div>
                                    <div className="absolute inset-0 bg-[#000f22]/30 mix-blend-multiply"></div>
                                    {/* Premium branding overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#000f22] to-transparent">
                                        <div className="flex items-center gap-4 text-[#ffffff]">
                                            <div className="w-12 h-[1px] bg-[#ffffff]"></div>
                                            <span className="font-['Inter'] text-[10px] tracking-[0.3em] uppercase font-medium">Northrop Advisory // High-Integrity Support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 space-y-8">
                                <div className="inline-block border-b-4 border-[#000f22] pb-2">
                                    <h2 className="font-['Montserrat'] text-[32px] text-[#000f22] uppercase font-bold leading-tight">Differentiated<br />Support</h2>
                                </div>
                                <p className="font-['Inter'] text-[18px] text-[#43474d] leading-relaxed">
                                    Northrop’s forensic tax unit provides hands-on implementation roadmaps that go beyond mere advisory. We ensure technical excellence at every junction.
                                </p>
                                <ul className="space-y-8">
                                    <li className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#000f22] text-[#ffffff]">
                                            <span className="material-symbols-outlined">developer_board</span>
                                        </div>
                                        <div>
                                            <span className="font-['Inter'] text-[14px] text-[#000f22] block font-bold uppercase mb-1">Customized Implementation Matrix</span>
                                            <span className="font-['Inter'] text-[16px] text-[#43474d]">Tailored ETR impact analysis across all operational jurisdictions.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#000f22] text-[#ffffff]">
                                            <span className="material-symbols-outlined">receipt_long</span>
                                        </div>
                                        <div>
                                            <span className="font-['Inter'] text-[14px] text-[#000f22] block font-bold uppercase mb-1">Forensic Data Cleansing</span>
                                            <span className="font-['Inter'] text-[16px] text-[#43474d]">Ensuring tax data integrity from ledger to Pillar Two reports.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#000f22] text-[#ffffff]">
                                            <span className="material-symbols-outlined">account_balance</span>
                                        </div>
                                        <div>
                                            <span className="font-['Inter'] text-[14px] text-[#000f22] block font-bold uppercase mb-1">M&amp;A Strategy Review</span>
                                            <span className="font-['Inter'] text-[16px] text-[#43474d]">Evaluating future acquisitions through the lens of compliance.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Actionable Steps Checklist: Interactive Protocol */}
                <section className="py-[80px] bg-[#ffffff] border-t border-[#c4c6ce] relative">
                    <div className="absolute inset-0 mca-forensic-grid opacity-20 pointer-events-none"></div>
                    <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] relative z-10">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <span className="font-['Inter'] text-[12px] text-[#4e6073] uppercase tracking-widest mb-4 block font-medium">Operational Directives</span>
                            <h2 className="font-['Montserrat'] text-[32px] md:text-[48px] text-[#000f22] mb-4 font-bold leading-tight">Forensic Checklist for CFOs</h2>
                            <p className="font-['Inter'] text-[16px] text-[#43474d]">Protocol requirements for the immediate 24-month compliance cycle.</p>
                        </div>

                        <div className="max-w-4xl mx-auto bg-[#f1f4f7]/50 border border-[#c4c6ce] p-1 relative">
                            {/* Corner details */}
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#000f22]"></div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#000f22]"></div>

                            <div className="bg-[#ffffff] border border-[#c4c6ce] overflow-hidden">
                                {/* Protocol Header */}
                                <div className="bg-[#000f22] text-[#ffffff] px-8 py-4 flex justify-between items-center">
                                    <span className="font-['Inter'] text-[10px] tracking-widest uppercase font-medium">Compliance Protocol // Ref: MCA-2026-01</span>
                                    <div className="flex gap-2 items-center">
                                        <div className="w-2 h-2 bg-[#ffffff] rounded-full animate-pulse"></div>
                                        <span className="font-['Inter'] text-[10px] uppercase font-medium">System Active</span>
                                    </div>
                                </div>
                                <div className="divide-y divide-[#c4c6ce]">
                                    {/* Protocol Items */}
                                    <div className="mca-protocol-item group flex items-center gap-8 p-8 hover:bg-[#ffffff] transition-all cursor-pointer border-l-4 border-transparent hover:border-[#000f22]">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 border-2 border-[#000f22] flex items-center justify-center bg-[#000f22] text-[#ffffff]">
                                                <span className="material-symbols-outlined font-bold transition-transform">check</span>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="font-['Inter'] text-[14px] text-[#000f22] font-bold uppercase md:text-lg">Pillar Two Gap Analysis</h4>
                                                <span className="text-[10px] font-['Inter'] bg-[#000f22]/10 text-[#000f22] px-2 py-0.5 rounded font-medium uppercase">HIGH PRIORITY</span>
                                            </div>
                                            <p className="font-['Inter'] text-[14px] text-[#43474d]">Identify jurisdictional data gaps in current financial reporting systems.</p>
                                        </div>
                                        <div className="text-right hidden sm:block">
                                            <span className="font-['Inter'] text-[10px] text-[#4e6073] block uppercase font-medium">Directive</span>
                                            <span className="font-['Inter'] text-[14px] text-[#000f22] font-bold">P-01</span>
                                        </div>
                                    </div>

                                    <div className="mca-protocol-item group flex items-center gap-8 p-8 hover:bg-[#ffffff] transition-all cursor-pointer border-l-4 border-transparent hover:border-[#000f22]">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 border-2 border-[#c4c6ce] flex items-center justify-center text-[#c4c6ce] group-hover:border-[#000f22] group-hover:text-[#000f22] transition-colors">
                                                <span className="material-symbols-outlined transition-transform">circle</span>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="font-['Inter'] text-[14px] text-[#000f22] font-bold uppercase md:text-lg">ERP Architecture Update</h4>
                                                <span className="text-[10px] font-['Inter'] bg-[#4e6073]/10 text-[#4e6073] px-2 py-0.5 rounded font-medium uppercase">STRUCTURAL</span>
                                            </div>
                                            <p className="font-['Inter'] text-[14px] text-[#43474d]">Upgrade ledger structures to capture GMT-specific attributes by FY 2025.</p>
                                        </div>
                                        <div className="text-right hidden sm:block">
                                            <span className="font-['Inter'] text-[10px] text-[#4e6073] block uppercase font-medium">Directive</span>
                                            <span className="font-['Inter'] text-[14px] text-[#000f22] font-bold">P-02</span>
                                        </div>
                                    </div>

                                    <div className="mca-protocol-item group flex items-center gap-8 p-8 hover:bg-[#ffffff] transition-all cursor-pointer border-l-4 border-transparent hover:border-[#000f22]">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 border-2 border-[#c4c6ce] flex items-center justify-center text-[#c4c6ce] group-hover:border-[#000f22] group-hover:text-[#000f22] transition-colors">
                                                <span className="material-symbols-outlined transition-transform">circle</span>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="font-['Inter'] text-[14px] text-[#000f22] font-bold uppercase md:text-lg">Internal Training Program</h4>
                                                <span className="text-[10px] font-['Inter'] bg-[#4e6073]/10 text-[#4e6073] px-2 py-0.5 rounded font-medium uppercase">PERSONNEL</span>
                                            </div>
                                            <p className="font-['Inter'] text-[14px] text-[#43474d]">Onboard tax and accounting teams on the specifics of the 2026 Amendment Rules.</p>
                                        </div>
                                        <div className="text-right hidden sm:block">
                                            <span className="font-['Inter'] text-[10px] text-[#4e6073] block uppercase font-medium">Directive</span>
                                            <span className="font-['Inter'] text-[14px] text-[#000f22] font-bold">P-03</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <Link to="/contact">
                                <button className="bg-[#000f22] text-[#ffffff] px-10 py-5 font-['Inter'] text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[#0a2540] transition-all mca-shadow-forensic relative group overflow-hidden border border-[#000f22]">
                                    <span className="relative z-10">Download Technical Briefing (PDF)</span>
                                    <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>
                            </Link>
                            <p className="mt-4 font-['Inter'] text-[10px] text-[#43474d] uppercase tracking-widest font-medium">
                                Authorized access only // Northrop Forensic Series 2026
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default McaAccountingStandards;
