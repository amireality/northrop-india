import { useEffect } from 'react';

const IncomeTaxAct2025 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const gridBg = { backgroundImage: 'linear-gradient(to right, rgba(0, 15, 34, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 15, 34, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' };
    const gridBgDark = { backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' };

    const Crosshair = ({ className }) => (
        <div className={`absolute w-4 h-4 text-[#ffffff]/30 ${className}`}>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-current"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-current"></div>
        </div>
    );

    return (
        <div className="bg-[#f7fafd] font-['Inter'] text-[#181c1e] text-[16px] antialiased overflow-x-hidden selection:bg-[#5884ff] selection:text-[#ffffff]">
            {/* Main Content */}
            <main className="w-full relative">
                {/* Hero Section */}
                <header className="relative min-h-[85vh] flex flex-col justify-center pt-[140px] pb-[80px] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Income Tax Act 2025 Hero Background"
                            className="w-full h-full object-cover"
                            src="/reportimg/5TH .png"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000f22] via-[#000f22]/60 to-transparent z-10"></div>
                    </div>
                    <div className="relative z-20 w-full max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                        <div className="max-w-3xl mb-[48px]">
                            <div className="flex items-center gap-[16px] mb-[16px]">
                                <span className="bg-[#F0E6D2] text-[#8B6532] px-3 py-1 rounded-sm font-['Inter'] text-[12px] font-medium uppercase tracking-[0.05em] border border-[#D4C3A3]">Strategy Ledger</span>
                                <span className="text-[#ffffff]/80 font-['Inter'] text-[12px] font-medium tracking-[0.05em] uppercase">REF: IT-25/26</span>
                                {/* <span className="text-[#ffffff]/80 font-['Inter'] text-[12px] font-medium tracking-[0.05em] uppercase ml-auto">Oct 24, 2024</span> */}
                            </div>
                            <h1 className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#ffffff] mb-[8px] tracking-tight leading-[1.1]">Income Tax Act 2026: Ushering in the "Tax Year" Era</h1>
                            <p className="font-['Inter'] text-[18px] text-[#ffffff]/90 italic pl-[16px] border-l-2 border-[#c6a87c] leading-relaxed">
                                Deconstructing the shift from a dual assessment framework to a unified chronological ledger.
                            </p>
                        </div>
                    </div>
                </header>

                <div className="pt-[80px] pb-[32px] px-[16px] md:px-[40px] relative" style={gridBg}>
                    {/* Dynamic Hero Visualization */}
                    <div className="w-full max-w-4xl mx-auto h-[480px] bg-[#000f22] relative overflow-hidden flex flex-col md:flex-row border border-[#c4c6ce] shadow-lg">
                        <div className="absolute inset-0 opacity-30 pointer-events-none z-10" style={gridBgDark}></div>
                      
                        <div className="w-full md:w-1/2 h-full border-b md:border-b-0 md:border-r border-[#ffffff]/20 relative p-8 flex flex-col justify-center bg-[#0a2540] z-20">
                            <Crosshair className="top-4 left-4" />
                            <Crosshair className="bottom-4 right-4" />
                            <div className="absolute top-8 left-8 text-[#ffffff]/50 font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase">Legacy Framework</div>
                            <div className="space-y-6 opacity-60">
                                <div>
                                    <div className="flex justify-between font-['Inter'] text-[12px] font-medium text-[#ffffff]/70 mb-2 border-b border-[#ffffff]/20 pb-1">
                                        <span>PREVIOUS YEAR (PY)</span>
                                        <span>T-1</span>
                                    </div>
                                    <div className="h-8 bg-[#ffffff]/5 w-full border border-[#ffffff]/10 flex items-center px-4">
                                        <span className="text-[10px] text-[#ffffff]/50 tracking-[0.05em]">EARNING CYCLE</span>
                                    </div>
                                </div>
                                <div className="w-[1px] h-8 bg-[#ffffff]/20 mx-auto"></div>
                                <div>
                                    <div className="flex justify-between font-['Inter'] text-[12px] font-medium text-[#ffffff]/70 mb-2 border-b border-[#ffffff]/20 pb-1">
                                        <span>ASSESSMENT YEAR (AY)</span>
                                        <span>T0</span>
                                    </div>
                                    <div className="h-8 bg-[#ffffff]/10 w-full border border-[#ffffff]/20 flex items-center px-4">
                                        <span className="text-[10px] text-[#ffffff]/70 tracking-[0.05em]">TAXATION CYCLE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div className="w-full md:w-1/2 h-full relative p-8 flex flex-col justify-center bg-[#000f22] z-20">
                            <Crosshair className="top-4 right-4" />
                            <Crosshair className="bottom-4 left-4" />
                            <div className="absolute top-8 right-8 text-[#c6a87c] font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase text-right">FIO // STRUCTURAL REALIGNMENT</div>
                            <div className="space-y-6">
                                <div className="border border-[#c6a87c]/30 bg-[#c6a87c]/5 p-6 relative">
                                    <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-[#c6a87c]"></div>
                                    <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-[#c6a87c]"></div>
                                    <div className="flex justify-between font-['Inter'] text-[12px] font-medium text-[#c6a87c] mb-4 border-b border-[#c6a87c]/20 pb-2">
                                        <span>2026 TAX YEAR</span>
                                        <span>SYNCHRONOUS</span>
                                    </div>
                                    <div className="h-20 bg-[#c6a87c]/10 w-full border border-[#c6a87c]/40 flex flex-col justify-center items-center relative overflow-hidden">
                                        <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(198, 168, 124, 0.05) 10px, rgba(198, 168, 124, 0.05) 20px)' }}></div>
                                        <span className="text-[#c6a87c] font-['Inter'] text-[14px] font-bold tracking-[0.05em] z-10 relative">UNIFIED LEDGER</span>
                                        <span className="text-[10px] text-[#c6a87c]/70 tracking-[0.05em] mt-1 z-10 relative">EARNING + TAXATION</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Body */}
                <article className="px-[16px] md:px-[40px] pb-[80px] max-w-3xl mx-auto pt-[32px]">
                    {/* 1. Introduction */}
                    <section className="mb-[80px] border-b border-[#c4c6ce] pb-[32px]">
                        <div className="flex items-start gap-[8px] mb-[8px]">
                            <span className="text-[#c6a87c] font-['Inter'] text-[12px] font-medium mt-1">01</span>
                            <h2 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] tracking-tight">The 1961 Regime Sunset</h2>
                        </div>
                        <p className="font-['Inter'] text-[16px] text-[#43474d] mb-[16px] leading-relaxed">
                            For over six decades, the Income-tax Act, 1961, stood as the complex, heavily-patched backbone of Indian corporate finance. Its foundational architecture—predicated on the distinct concepts of 'Previous Year' (the period of earning) and 'Assessment Year' (the period of taxation)—created an inherent temporal lag that complicated forensic modeling and compliance cycles.
                        </p>
                        <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">
                            The introduction of the Income Tax Act 2025 marks a structural demolition of this legacy framework. It is not merely a revision of rates, but a fundamental rewiring of the temporal logic governing financial reporting. This transition demands a recalibration of institutional accounting practices.
                        </p>
                    </section>

                    {/* 2. Core Change */}
                    <section className="mb-[80px]">
                        <div className="bg-[#f7fafd] border border-[#c4c6ce] p-[32px] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d1e4fb] rounded-bl-full opacity-20 pointer-events-none"></div>
                            <div className="relative z-10">
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-[8px]">Core Change: The Unified “Tax Year” Concept</h3>
                                <p className="font-['Inter'] text-[16px] text-[#43474d] mb-[32px] leading-relaxed">
                                    The most profound architectural shift in the 2025 Act is the conceptual collapse of the Previous Year (PY) and Assessment Year (AY) duality into a singular, unified construct: the <strong className="text-[#000f22]">"Tax Year"</strong>.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[32px] relative">
                                    <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#c4c6ce] hidden md:block"></div>
                                    <div className="space-y-[16px]">
                                        <div className="flex items-center gap-[8px]">
                                            <span className="w-2 h-2 bg-[#74777e] rounded-full"></span>
                                            <span className="font-['Inter'] text-[12px] font-medium text-[#43474d] uppercase tracking-[0.05em]">Legacy Architecture</span>
                                        </div>
                                        <h4 className="font-['Inter'] text-[14px] font-bold text-[#000f22] mb-2 tracking-[0.05em]">Dual Timeline (PY/AY)</h4>
                                        <div className="bg-[#ebeef1] p-[16px] border border-[#c4c6ce] rounded-sm">
                                            <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">
                                                Income earned in <span className="font-bold">PY 2023-24</span> was assessed and taxed in <span className="font-bold">AY 2024-25</span>, necessitating dual-period tracking and reporting logic.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-[16px]">
                                        <div className="flex items-center gap-[8px]">
                                            <span className="w-2 h-2 bg-[#c6a87c] rounded-full"></span>
                                            <span className="font-['Inter'] text-[12px] font-medium text-[#c6a87c] uppercase tracking-[0.05em]">2025 Architecture</span>
                                        </div>
                                        <h4 className="font-['Inter'] text-[14px] font-bold text-[#000f22] mb-2 tracking-[0.05em]">Unified Synchronous Ledger</h4>
                                        <div className="bg-[#ffffff] border border-[#c6a87c] p-[16px] rounded-sm shadow-sm">
                                            <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">
                                                The period beginning on the 1st day of April and ending on the 31st day of March is now exclusively defined as the <span className="font-bold text-[#000f22]">Tax Year</span>. Income is earned and assessed synchronously within this definitive bound.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <div className="w-full h-px bg-[#c4c6ce] my-[80px]"></div>
                    
                    {/* 3. Key Features */}
                    <section className="mb-[80px]">
                        <div className="flex items-start gap-[8px] mb-[32px]">
                            <span className="text-[#c6a87c] font-['Inter'] text-[12px] font-medium mt-1">02</span>
                            <h2 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] tracking-tight">Key Features & Transition Provisions</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-[16px]">
                            {/* Module 1 */}
                            <div className="border border-[#c4c6ce] bg-[#f7fafd] p-[32px] relative group hover:border-[#000f22] transition-colors overflow-hidden">
                                <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-[#c4c6ce] group-hover:border-[#000f22] transition-colors"></div>
                                <div className="flex gap-[16px] items-start">
                                    <div className="font-['Inter'] text-[12px] font-medium text-[#c6a87c] text-xl shrink-0 leading-none">01</div>
                                    <div>
                                        <h4 className="font-['Inter'] text-[14px] font-bold text-[#000f22] uppercase tracking-[0.05em] mb-2 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[16px]">account_tree</span>
                                            Simplified Structure
                                        </h4>
                                        <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">The Act consolidates dispersed sections, creating a linear, more predictable code structure aimed at reducing interpretative litigation and streamlining algorithmic compliance.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Module 2 */}
                            <div className="border border-[#c4c6ce] bg-[#f7fafd] p-[32px] relative group hover:border-[#000f22] transition-colors overflow-hidden">
                                <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-[#c4c6ce] group-hover:border-[#000f22] transition-colors"></div>
                                <div className="flex gap-[16px] items-start">
                                    <div className="font-['Inter'] text-[12px] font-medium text-[#c6a87c] text-xl shrink-0 leading-none">02</div>
                                    <div>
                                        <h4 className="font-['Inter'] text-[14px] font-bold text-[#000f22] uppercase tracking-[0.05em] mb-2 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[16px]">transform</span>
                                            Transition Mechanics
                                        </h4>
                                        <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">Specific grandfathering clauses and bridge provisions are mandated for ongoing assessments initiated under the 1961 Act, preventing retrospective friction during the rollover period.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Module 3 */}
                            <div className="border border-[#c4c6ce] bg-[#f7fafd] p-[32px] relative group hover:border-[#000f22] transition-colors overflow-hidden">
                                <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-[#c4c6ce] group-hover:border-[#000f22] transition-colors"></div>
                                <div className="flex gap-[16px] items-start">
                                    <div className="font-['Inter'] text-[12px] font-medium text-[#c6a87c] text-xl shrink-0 leading-none">03</div>
                                    <div>
                                        <h4 className="font-['Inter'] text-[14px] font-bold text-[#000f22] uppercase tracking-[0.05em] mb-2 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[16px]">update</span>
                                            Notable Changes
                                        </h4>
                                        <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">Digital-first reporting mandates, accelerated assessment timelines, and real-time data integration with broader financial registries are codified as standard operating procedure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <div className="w-full h-px bg-[#c4c6ce] my-[80px]"></div>
                    
                    {/* 4. Strategic Implications */}
                    <section className="mb-[80px] p-[32px] border border-[#c4c6ce] relative" style={gridBg}>
                        <div className="absolute top-4 right-4 text-[#c4c6ce] font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase">Matrix // Strategic Overlay</div>
                        <div className="flex items-start gap-[8px] mb-[32px] relative z-10">
                            <span className="text-[#c6a87c] font-['Inter'] text-[12px] font-medium mt-1 bg-[#ffffff] px-1">03</span>
                            <h2 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] tracking-tight bg-[#ffffff] px-2">Strategic Implications for Corporates</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c4c6ce] relative z-10 border border-[#c4c6ce] shadow-sm">
                            <div className="bg-[#f7fafd] p-[32px] flex flex-col h-full group hover:bg-[#f7fafd] transition-colors">
                                <div className="flex items-center gap-[8px] mb-4 pb-4 border-b border-[#c4c6ce]">
                                    <span className="font-['Inter'] text-[10px] font-medium text-[#000f22] bg-[#000f22]/10 px-2 py-1">[STRAT-01]</span>
                                    <h3 className="font-['Inter'] text-[14px] font-bold text-[#000f22] uppercase tracking-[0.05em]">Enterprise Review</h3>
                                </div>
                                <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">Treasury and tax departments must conduct immediate, forensic reviews of ERP systems. The hardcoded logic distinguishing PY and AY must be deprecated. Financial forecasting models relying on lagged tax cash outflows require immediate recalibration to reflect synchronous Tax Year liabilities.</p>
                            </div>
                            <div className="bg-[#ffffff] p-[32px] flex flex-col h-full border-t-[3px] border-[#ffdad6] group hover:bg-[#f7fafd] transition-colors">
                                <div className="flex items-center gap-[8px] mb-4 pb-4 border-b border-[#c4c6ce]">
                                    <span className="font-['Inter'] text-[10px] font-medium text-[#ba1a1a] bg-[#ba1a1a]/10 px-2 py-1">[STRAT-02]</span>
                                    <h3 className="font-['Inter'] text-[14px] font-bold text-[#000f22] uppercase tracking-[0.05em]">Transition Risks</h3>
                                </div>
                                <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">The critical vulnerability lies in the crossover period. Asymmetric interpretation of carry-forward losses, unabsorbed depreciation, and MAT credit alignments between the retiring 1961 Act and the nascent 2025 Act will be primary vectors for compliance failure and margin erosion.</p>
                            </div>
                        </div>
                    </section>
                </article>

                {/* 5. Northrop's Edge */}
                <section className="bg-[#0a2540] text-[#ffffff] py-[80px] px-[16px] md:px-[40px] mb-[80px] relative overflow-hidden border-y border-[#000f22]">
                    {/* Architectural Background Depth */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none" style={gridBgDark}></div>
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#001c37] to-transparent z-0"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#c6a87c]/50"></div>
                    <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row gap-[32px] items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-[8px]">
                                <span className="font-['Inter'] text-[12px] font-medium text-[#c6a87c] tracking-[0.05em] uppercase block">Forensic Audit Protocol</span>
                                <div className="h-px bg-[#c6a87c]/30 flex-1"></div>
                                <span className="font-['Inter'] text-[10px] font-medium text-[#ffffff]/40 tracking-[0.05em]">EXEC-MKR-001</span>
                            </div>
                            <h2 className="font-['Montserrat'] text-[32px] text-[#ffffff] font-bold mb-[16px] tracking-tight">Forensic Tax Health Audits</h2>
                            <p className="font-['Inter'] text-[18px] text-[#768dad] mb-[32px] max-w-2xl leading-relaxed">
                                Navigating structural legislative overhauls requires more than statutory reading; it demands technical stress-testing. Our forensic methodologies deconstruct your current tax architecture to preemptively identify friction points against the 2025 Act provisions.
                            </p>
                            <button className="bg-[#c6a87c]/10 border border-[#c6a87c] text-[#c6a87c] px-8 py-4 font-['Inter'] text-[14px] font-bold uppercase tracking-[0.05em] hover:bg-[#c6a87c] hover:text-[#000f22] transition-all duration-300 flex items-center gap-3 group">
                                <span className="material-symbols-outlined text-[18px] group-hover:rotate-45 transition-transform">target</span>
                                Initiate Structural Audit
                            </button>
                        </div>
                    </div>
                </section>

                {/* 6. Strategic Checklist */}
                <section className="px-[16px] md:px-[40px] pb-[80px] max-w-3xl mx-auto">
                    <div className="bg-[#f7fafd] border-2 border-[#c4c6ce] p-[32px] shadow-sm relative">
                        <div className="absolute -top-3 left-8 bg-[#f7fafd] px-2 font-['Inter'] text-[10px] font-medium text-[#43474d] tracking-[0.05em] uppercase">Protocol Document</div>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#e5e8eb]/50 flex items-start justify-end p-2 border-l border-b border-[#c4c6ce]/30">
                            <span className="material-symbols-outlined text-[#c6a87c]/50">fact_check</span>
                        </div>
                        <div className="border-b-2 border-[#000f22] pb-[8px] mb-[16px] pt-2">
                            <h3 className="font-['Inter'] text-[14px] font-bold text-[#000f22] uppercase tracking-[0.05em] text-lg">Strategic Checklist for Practitioners</h3>
                        </div>
                        <ul className="space-y-[16px]">
                            <li className="flex items-start gap-[16px] p-3 hover:bg-[#f7fafd] transition-colors border-l-2 border-transparent hover:border-[#c6a87c]">
                                <div className="w-5 h-5 rounded-sm border border-[#000f22] flex items-center justify-center shrink-0 mt-0.5 bg-[#ffffff]">
                                    <span className="material-symbols-outlined text-[14px] text-[#000f22]">check</span>
                                </div>
                                <span className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">Audit ERP and accounting software for hardcoded PY/AY dependencies.</span>
                            </li>
                            <li className="flex items-start gap-[16px] p-3 hover:bg-[#f7fafd] transition-colors border-l-2 border-transparent hover:border-[#c6a87c]">
                                <div className="w-5 h-5 rounded-sm border border-[#000f22] flex items-center justify-center shrink-0 mt-0.5 bg-[#ffffff]">
                                    <span className="material-symbols-outlined text-[14px] text-[#000f22]">check</span>
                                </div>
                                <span className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">Recalibrate advance tax computation models for synchronous 'Tax Year' cash flows.</span>
                            </li>
                            <li className="flex items-start gap-[16px] p-3 hover:bg-[#f7fafd] transition-colors border-l-2 border-transparent hover:border-[#c6a87c]">
                                <div className="w-5 h-5 rounded-sm border border-[#000f22] flex items-center justify-center shrink-0 mt-0.5 bg-[#ffffff]">
                                    <span className="material-symbols-outlined text-[14px] text-[#000f22]">check</span>
                                </div>
                                <span className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">Map transition protocols for existing litigation and ongoing assessments under the 1961 Act.</span>
                            </li>
                            <li className="flex items-start gap-[16px] p-3 hover:bg-[#f7fafd] transition-colors border-l-2 border-transparent hover:border-[#c6a87c]">
                                <div className="w-5 h-5 rounded-sm border border-[#000f22] flex items-center justify-center shrink-0 mt-0.5 bg-[#ffffff]">
                                    <span className="material-symbols-outlined text-[14px] text-[#000f22]">check</span>
                                </div>
                                <span className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">Review contract clauses containing specific tax period references for renegotiation.</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default IncomeTaxAct2025;
