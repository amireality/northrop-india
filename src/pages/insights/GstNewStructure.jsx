import { useEffect } from 'react';

const GstNewStructure = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#f7fafd] text-[#181c1e] font-['Inter'] font-normal text-[16px] antialiased selection:bg-[#d2e4ff] selection:text-[#001c37]">
            <main className="w-full mx-auto pb-[80px]">
                {/* Institutional Header */}
                <header className="w-full bg-[#ffffff] border-b border-[#c4c6ce] relative overflow-hidden pt-16 pb-12 px-[16px] md:px-[40px] mb-12">
                    <div className="absolute inset-0 gst-grid-bg-light z-0"></div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="flex flex-wrap items-center gap-4 mb-8">
                            <span className="font-['Inter'] text-[12px] font-bold tracking-[0.1em] text-[#0a2540] uppercase border border-[#0a2540]/20 px-3 py-1 rounded bg-[#f7fafd]">STRATEGY LEDGER</span>
                            <span className="font-['Inter'] text-[12px] font-bold tracking-[0.1em] text-[#43474d]">REF: GST-25/26</span>
                        </div>
                        <h1 className="font-['Montserrat'] text-[36px] md:text-[48px] font-bold text-[#0a2540] mb-8 leading-tight tracking-[-0.02em]">
                            Simplified Slab Structure Driving Efficiency and Cash Flow Improvements
                        </h1>
                        <div className="border-t border-b border-[#c4c6ce] py-4 flex flex-wrap gap-x-12 gap-y-4">
                            <div>
                                <div className="font-['Inter'] text-[10px] font-bold tracking-[0.1em] text-[#43474d] uppercase mb-1">Date</div>
                                <div className="font-['Inter'] text-[14px] font-bold tracking-[0.05em] text-[#0a2540]">OCTOBER 2024</div>
                            </div>
                            <div>
                                <div className="font-['Inter'] text-[10px] font-bold tracking-[0.1em] text-[#43474d] uppercase mb-1">Read Time</div>
                                <div className="font-['Inter'] text-[14px] font-bold tracking-[0.05em] text-[#0a2540]">8 MIN READ</div>
                            </div>
                            <div>
                                <div className="font-['Inter'] text-[10px] font-bold tracking-[0.1em] text-[#43474d] uppercase mb-1">Practice Area</div>
                                <div className="font-['Inter'] text-[14px] font-bold tracking-[0.05em] text-[#0a2540]">TAX FORENSICS</div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="max-w-3xl mx-auto px-[16px] md:px-0">
                    <p className="font-['Inter'] text-[18px] text-[#0a2540] font-medium mb-12 leading-relaxed">
                        Landmark reforms effective September 22, 2025, signal a decisive shift from multi-slab complexity to streamlined tax mechanics.
                    </p>
                    {/* Hero Image */}
                    <div className="mb-16 relative group">
                        <div className="absolute -inset-1 border border-[#c4c6ce] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img
                            className="w-full h-[400px] object-cover rounded shadow-md border border-[#c4c6ce] relative z-10"
                            alt="A macro, top-down professional photograph of a pristine, modern ledger book overlaid with subtle, glowing golden geometric lines indicating upward financial growth."
                            src="/insightpage/gst2.0.png"
                        />
                    </div>
                    {/* Article Content */}
                    <article className="prose prose-slate max-w-none">
                        <p className="font-['Inter'] text-[18px] mb-12 leading-relaxed text-[#43474d]">
                            The GST Council’s recent overhaul marks the most significant structural adjustment to the Goods and Services Tax framework since its inception. By collapsing the cumbersome multi-tier system into two primary operational slabs, the regulatory environment pivots aggressively towards compliance simplicity and working capital optimization.
                        </p>
                        <div className="border-t-2 border-[#0a2540] w-full mb-8"></div>
                        <h2 className="font-['Montserrat'] text-[24px] text-[#0a2540] mb-6 font-bold tracking-tight">Major Rate Rationalisations</h2>
                        <p className="mb-10 text-[#43474d] text-[18px]">
                            The structural shift effectively categorizes goods and services into highly delineated zones, reducing classification ambiguities that have historically plagued supply chains.
                        </p>

                        {/* Slab Migration (Forensic Module) */}
                        <div className="border border-[#c4c6ce] bg-[#ffffff] mb-16 relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#0a2540]"></div>
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c4c6ce]">
                                {/* 5% Tier */}
                                <div className="p-6 relative hover:bg-[#f7fafd] transition-colors group">
                                    <div className="font-['Inter'] text-[#0a2540]/40 text-[12px] font-bold tracking-[0.1em] mb-4">SLAB.01</div>
                                    <div className="flex items-baseline gap-2 mb-3">
                                        <span className="font-['Montserrat'] text-[48px] font-bold text-[#0a2540] tracking-[-0.02em]">5%</span>
                                        <span className="font-['Inter'] text-[14px] font-bold text-[#0a2540] tracking-[0.05em] uppercase">Essentials</span>
                                    </div>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d] m-0">Broadened to encompass critical raw materials and essential consumer goods, stabilizing base inflation metrics and easing initial input costs.</p>
                                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-[#0a2540]">arrow_outward</span>
                                    </div>
                                </div>
                                {/* 18% Tier */}
                                <div className="p-6 relative hover:bg-[#f7fafd] transition-colors group">
                                    <div className="font-['Inter'] text-[#0a2540]/40 text-[12px] font-bold tracking-[0.1em] mb-4">SLAB.02</div>
                                    <div className="flex items-baseline gap-2 mb-3">
                                        <span className="font-['Montserrat'] text-[48px] font-bold text-[#0a2540] tracking-[-0.02em]">18%</span>
                                        <span className="font-['Inter'] text-[14px] font-bold text-[#0a2540] tracking-[0.05em] uppercase">Standard</span>
                                    </div>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d] m-0">Acts as the universal median for most manufactured goods and services, drastically reducing instances of inverted duty structures.</p>
                                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-[#0a2540]">arrow_outward</span>
                                    </div>
                                </div>
                                {/* 40% Tier */}
                                <div className="p-6 relative hover:bg-[#f7fafd] transition-colors group">
                                    <div className="font-['Inter'] text-[#D4AF37]/60 text-[12px] font-bold tracking-[0.1em] mb-4">SLAB.03 (CAP)</div>
                                    <div className="flex items-baseline gap-2 mb-3">
                                        <span className="font-['Montserrat'] text-[48px] font-bold text-[#0a2540] tracking-[-0.02em]">40%</span>
                                        <span className="font-['Inter'] text-[14px] font-bold text-[#D4AF37] tracking-[0.05em] uppercase">Luxury/Sin</span>
                                    </div>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d] m-0">Maintained as an outlier category, ring-fenced to ensure revenue neutrality for the exchequer without encumbering standard industrial supply chains.</p>
                                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-[#D4AF37]">arrow_outward</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t-2 border-[#0a2540] w-full mb-8"></div>
                        <h2 className="font-['Montserrat'] text-[24px] text-[#0a2540] mb-6 font-bold tracking-tight">Business Impact: Cash Flow Mechanics</h2>
                        <p className="mb-10 text-[#43474d] text-[18px]">
                            For mid-to-large enterprises, the compression of rates directly translates to working capital liberation. Our initial modeling indicates significant liquidity gains.
                        </p>

                        {/* Cash Flow SOP Block */}
                        <div className="bg-[#ffffff] border-2 border-[#0a2540] p-8 md:p-10 mb-16 relative gst-crosshair gst-crosshair-tl gst-crosshair-tr gst-crosshair-bl gst-crosshair-br shadow-sm">
                            <div className="absolute top-0 right-0 p-4 font-['Inter'] text-[#0a2540]/30 text-[14px] font-bold tracking-[0.1em]">SOP-IMPACT-ANALYSIS</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <div className="font-['Montserrat'] text-[48px] font-bold text-[#0a2540] mb-2 flex items-baseline gap-2 tracking-[-0.02em]">
                                        <span>10-20%</span>
                                        <span className="material-symbols-outlined text-[#D4AF37] text-3xl">trending_up</span>
                                    </div>
                                    <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#0a2540] mb-3">Working Capital Gain</h3>
                                    <p className="font-['Inter'] text-[16px] text-[#43474d] m-0">Accelerated Input Tax Credit (ITC) realization due to reduced matching disputes and streamlined documentation.</p>
                                </div>
                                <div className="border-t md:border-t-0 md:border-l border-[#c4c6ce] pt-6 md:pt-0 md:pl-10">
                                    <div className="mb-4">
                                        <span className="material-symbols-outlined text-[#0a2540] text-4xl mb-2">gavel</span>
                                    </div>
                                    <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#0a2540] mb-3">Reduced Litigation</h3>
                                    <p className="font-['Inter'] text-[16px] text-[#43474d] m-0">Clearer slab demarcations eliminate historical 'classification friction' with authorities.</p>
                                </div>
                            </div>
                        </div>

                        {/* Northrop Methodology (Forensic Insight Block) */}
                        <div className="bg-[#0a2540] text-[#ffffff] p-8 md:p-12 mb-16 relative overflow-hidden shadow-xl border border-[#0a2540]">
                            <div className="absolute inset-0 gst-architectural-pattern opacity-10"></div>
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#ffffff]/20">
                                    <div className="w-12 h-12 rounded border border-[#D4AF37]/50 flex items-center justify-center bg-[#0a2540]/50">
                                        <span className="material-symbols-outlined text-[#D4AF37] text-2xl">architecture</span>
                                    </div>
                                    <div>
                                        <div className="font-['Inter'] text-[12px] text-[#D4AF37] font-bold tracking-widest mb-1">FORENSIC INSIGHT</div>
                                        <h3 className="font-['Montserrat'] text-[32px] font-bold text-[#ffffff] m-0">The Northrop Methodology</h3>
                                    </div>
                                </div>
                                <p className="font-['Inter'] text-[18px] mb-0 text-[#ffffff]/90 leading-relaxed max-w-2xl">
                                    We approach the GST 2.0 transition not merely as a compliance exercise, but as a strategic inflection point. Our forensic models dissect existing supply chains to identify immediate restructuring opportunities, ensuring our clients capitalize on the new rate arbitrage and automated refund mechanisms from Day 1.
                                </p>
                            </div>
                        </div>

                        <div className="border-t-2 border-[#0a2540] w-full mb-8"></div>
                        <h2 className="font-['Montserrat'] text-[24px] text-[#0a2540] mb-6 font-bold tracking-tight">Strategic Recommendations</h2>
                        <p className="mb-10 text-[#43474d] text-[18px]">
                            Immediate tactical realignment is required prior to the September effective date.
                        </p>

                        {/* Execution Protocol */}
                        <div className="space-y-6 mb-16">
                            <div className="flex items-stretch bg-[#ffffff] border border-[#c4c6ce] group hover:border-[#0a2540] transition-colors">
                                <div className="bg-[#f7fafd] px-6 py-5 border-r border-[#c4c6ce] flex items-center justify-center min-w-[100px] group-hover:bg-[#0a2540]/5 transition-colors">
                                    <span className="font-['Inter'] text-[18px] text-[#0a2540] font-bold tracking-[0.1em]">[ 01 ]</span>
                                </div>
                                <div className="p-6 flex-1 flex items-center">
                                    <span className="font-['Inter'] text-[16px] font-bold text-[#0a2540] uppercase tracking-wide">Execute a comprehensive Slab-Impact Audit across all SKUs.</span>
                                </div>
                            </div>
                            <div className="flex items-stretch bg-[#ffffff] border border-[#c4c6ce] group hover:border-[#0a2540] transition-colors">
                                <div className="bg-[#f7fafd] px-6 py-5 border-r border-[#c4c6ce] flex items-center justify-center min-w-[100px] group-hover:bg-[#0a2540]/5 transition-colors">
                                    <span className="font-['Inter'] text-[18px] text-[#0a2540] font-bold tracking-[0.1em]">[ 02 ]</span>
                                </div>
                                <div className="p-6 flex-1 flex items-center">
                                    <span className="font-['Inter'] text-[16px] font-bold text-[#0a2540] uppercase tracking-wide">Deploy automated reconciliation tools for seamless ITC transition.</span>
                                </div>
                            </div>
                            <div className="flex items-stretch bg-[#ffffff] border border-[#c4c6ce] group hover:border-[#0a2540] transition-colors">
                                <div className="bg-[#f7fafd] px-6 py-5 border-r border-[#c4c6ce] flex items-center justify-center min-w-[100px] group-hover:bg-[#0a2540]/5 transition-colors">
                                    <span className="font-['Inter'] text-[18px] text-[#0a2540] font-bold tracking-[0.1em]">[ 03 ]</span>
                                </div>
                                <div className="p-6 flex-1 flex items-center">
                                    <span className="font-['Inter'] text-[16px] font-bold text-[#0a2540] uppercase tracking-wide">Mandate core ERP tax-engine updates and vendor communication protocols.</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default GstNewStructure;
