import { useEffect } from 'react';

const Tier2Cities = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#f7fafd] font-['Inter'] text-[#181c1e] text-[16px] antialiased overflow-x-hidden selection:bg-[#d2e4ff] selection:text-[#001c37]">
            {/* Hero Section */}
            <header className="relative w-full h-[90vh] flex items-end overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Aerial view of a futuristic smart city in India with warm sunset lighting and complex architectural patterns"
                        className="w-full h-full object-cover "
                        src="/insightpage/tier-2-cities.jpeg"
                    />
                   <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[16px] md:px-[40px] pb-[80px]">
                    <div className="flex flex-col gap-[16px] max-w-4xl">
                        {/* <div className="flex items-center gap-4">
                            <span className="inline-block bg-[#B09E6D] text-[#000f22] font-['Inter'] text-[10px] px-3 py-1 rounded-sm uppercase tracking-[0.05em] font-bold">Strategic Directive</span>
                            <span className="font-['Inter'] text-[#ffffff]/60 text-[10px] tracking-[0.1em] uppercase font-medium">STRATEGY LEDGER VOL. 13</span>
                        </div> */}
                        <h1 className="font-['Montserrat'] text-[48px] font-bold text-[#ffffff] leading-[1.1] mb-[8px] tracking-[-0.02em]">
                            India’s Three Strategic Growth Vectors: Tier-2 Cities, GCCs, and Supply Chain Resilience
                        </h1>
                        <div className="flex items-center gap-6 border-t border-[#ffffff]/20 pt-[16px] mt-[16px]">
                           
                            <div className="flex flex-col">
                                <span className="font-['Inter'] text-[10px] text-[#ffffff]/50 uppercase tracking-tighter font-medium">Publication</span>
                                <span className="font-['Inter'] text-[#ffffff]/90 text-[14px]">MAY 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Executive Summary */}
            <section className="bg-[#ffffff] py-[80px] t2-fine-grid">
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-start">
                        <div className="md:col-span-4">
                            <h2 className="font-['Inter'] text-[14px] font-bold text-[#000f22] border-l-4 border-[#B09E6D] pl-4 uppercase tracking-[0.05em] mb-[32px]">Executive Summary</h2>
                            <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">
                                The structural realignment of global capital is gravitating towards the Indian subcontinent. Our forensic analysis confirms a fundamental pivot from traditional Tier-1 saturation to high-velocity emerging hubs.
                            </p>
                        </div>
                        <div className="md:col-span-8">
                            <p className="font-['Inter'] text-[18px] text-[#000f22] leading-snug mb-[16px]">
                                Global Capability Centers (GCCs) are no longer mere back-office operations; they have evolved into the strategic nerve centers of the modern multinational. By 2030, revenue from Indian GCCs is projected to scale to <span className="font-bold text-[#B09E6D]">$105 Billion</span>.
                            </p>
                            <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">
                                This transformation is fueled by the simultaneous maturation of Tier-2 infrastructure and a radical strengthening of domestic supply chain resilience. This ledger deconstructs the multi-dimensional vectors driving IRR and operational alpha in this new frontier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Metrics Dashboard */}
            <section className="bg-[#ebeef1] py-[80px]">
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                    <div className="flex justify-between items-end mb-[32px] border-b border-[#c4c6ce]/30 pb-4">
                        <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22]">Strategic Growth Metrics</h2>
                        <span className="font-['Inter'] text-[11px] text-[#4e6073] tracking-[0.1em] uppercase font-medium">System Check: Optimal</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                        {/* GCC Revenue Growth Card */}
                        <div className="bg-[#ffffff] p-[32px] border border-[#c4c6ce]/40 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 font-['Inter'] text-[10px] font-medium text-[#B09E6D]/40">METRIC_01</div>
                            <h3 className="font-['Inter'] text-[14px] font-bold text-[#000f22] mb-[32px] tracking-[0.05em]">GCC REVENUE GROWTH</h3>
                            <div className="flex flex-col items-center justify-center py-[32px]">
                                <div className="relative w-48 h-48 flex items-center justify-center">
                                    {/* SVG Radial Chart */}
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle className="text-[#e5e8eb]" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="8"></circle>
                                        <circle className="text-[#0a2540] group-hover:text-[#B09E6D] transition-colors duration-500" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502.6" strokeDashoffset="150" strokeWidth="8"></circle>
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="font-['Montserrat'] text-[32px] font-bold text-[#000f22]">$105B</span>
                                        <span className="font-['Inter'] text-[10px] font-medium text-[#4e6073]">PROJECTED 2030</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center font-['Inter'] text-[14px] text-[#37485a] mt-4">Current state: $65B (2026)</p>
                        </div>
                        {/* Tier-2 Momentum */}
                        <div className="bg-[#ffffff] p-[32px] border border-[#c4c6ce]/40 shadow-sm relative group">
                            <div className="absolute top-0 right-0 p-4 font-['Inter'] text-[10px] font-medium text-[#B09E6D]/40">METRIC_02</div>
                            <h3 className="font-['Inter'] text-[14px] font-bold text-[#000f22] mb-[32px] tracking-[0.05em]">TIER-2 MOMENTUM MAP</h3>
                            <div className="flex flex-col gap-3 mt-4">
                                <div className="flex justify-between items-center p-3 bg-[#f1f4f7] border-l-2 border-[#B09E6D]">
                                    <span className="font-semibold text-[#000f22]">Ahmedabad</span>
                                    <span className="font-['Inter'] text-[#B09E6D] text-[14px]">High Intensity</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-[#f7fafd] border-l-2 border-[#0a2540]/20">
                                    <span className="font-semibold text-[#000f22]">Coimbatore</span>
                                    <span className="font-['Inter'] text-[#0a2540] text-[14px]">Rising Center</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-[#f7fafd] border-l-2 border-[#0a2540]/20">
                                    <span className="font-semibold text-[#000f22]">Indore</span>
                                    <span className="font-['Inter'] text-[#0a2540] text-[14px]">Industrial Hub</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-[#f7fafd] border-l-2 border-[#0a2540]/20">
                                    <span className="font-semibold text-[#000f22]">Jaipur</span>
                                    <span className="font-['Inter'] text-[#0a2540] text-[14px]">Tech Cluster</span>
                                </div>
                            </div>
                        </div>
                        {/* Resilience Index */}
                        <div className="bg-[#ffffff] p-[32px] border border-[#c4c6ce]/40 shadow-sm relative group">
                            <div className="absolute top-0 right-0 p-4 font-['Inter'] text-[10px] font-medium text-[#B09E6D]/40">METRIC_03</div>
                            <h3 className="font-['Inter'] text-[14px] font-bold text-[#000f22] mb-[32px] tracking-[0.05em]">RESILIENCE INDEX (TIER-2 VS TIER-1)</h3>
                            <div className="flex flex-col gap-[32px] mt-8">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-['Inter'] text-[14px] font-bold tracking-[0.05em] text-[#000f22]">Operational Costs</span>
                                        <span className="font-['Inter'] text-[16px] text-[#ba1a1a]">-25%</span>
                                    </div>
                                    <div className="w-full h-1 bg-[#e5e8eb] rounded-full">
                                        <div className="h-full bg-[#0a2540] rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-['Inter'] text-[14px] font-bold tracking-[0.05em] text-[#000f22]">Attrition Rates</span>
                                        <span className="font-['Inter'] text-[16px] text-[#ba1a1a]">-30%</span>
                                    </div>
                                    <div className="w-full h-1 bg-[#e5e8eb] rounded-full">
                                        <div className="h-full bg-[#0a2540] rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-['Inter'] text-[14px] font-bold tracking-[0.05em] text-[#000f22]">Talent Supply Chain</span>
                                        <span className="font-['Inter'] text-[16px] text-[#B09E6D]">+45%</span>
                                    </div>
                                    <div className="w-full h-1 bg-[#e5e8eb] rounded-full">
                                        <div className="h-full bg-[#B09E6D] rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Implications */}
            <section className="bg-[#0a2540] text-[#ffffff] py-[80px] t2-fine-grid-dark relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                        <div>
                            <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#B09E6D] mb-[32px] border-b border-[#B09E6D]/30 pb-4">Strategic Gains</h2>
                            <div className="space-y-[32px]">
                                <div className="group border-b border-[#ffffff]/10 pb-6 hover:border-[#B09E6D] transition-colors duration-300">
                                    <h4 className="font-['Montserrat'] text-[24px] font-bold text-[#ffffff] mb-2">Cost Optimization</h4>
                                    <p className="text-[#768dad] font-['Inter'] text-[16px]">Leveraging the structural cost arbitrage of Tier-2 hubs without sacrificing technical caliber.</p>
                                </div>
                                <div className="group border-b border-[#ffffff]/10 pb-6 hover:border-[#B09E6D] transition-colors duration-300">
                                    <h4 className="font-['Montserrat'] text-[24px] font-bold text-[#ffffff] mb-2">Talent Access</h4>
                                    <p className="text-[#768dad] font-['Inter'] text-[16px]">Securing first-mover advantage in high-density engineering clusters currently overlooked by major players.</p>
                                </div>
                                <div className="group border-b border-[#ffffff]/10 pb-6 hover:border-[#B09E6D] transition-colors duration-300">
                                    <h4 className="font-['Montserrat'] text-[24px] font-bold text-[#ffffff] mb-2">Operational Resilience</h4>
                                    <p className="text-[#768dad] font-['Inter'] text-[16px]">Diversifying geographical footprints to mitigate systemic risks associated with mega-city congestion.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#768dad] mb-[32px] border-b border-[#ffffff]/10 pb-4">Execution Hurdles</h2>
                            <div className="space-y-[32px] opacity-70">
                                <div className="flex gap-6 items-start">
                                    <span className="font-['Inter'] text-[#B09E6D]/50 text-[24px]">01</span>
                                    <div>
                                        <h4 className="font-['Inter'] text-[14px] font-bold text-[#ffffff] uppercase tracking-[0.05em] mb-1">Infrastructure Gaps</h4>
                                        <p className="text-[#768dad] font-['Inter'] text-[14px]">Variability in power-grid stability and last-mile logistics in early-stage Tier-2 zones.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <span className="font-['Inter'] text-[#B09E6D]/50 text-[24px]">02</span>
                                    <div>
                                        <h4 className="font-['Inter'] text-[14px] font-bold text-[#ffffff] uppercase tracking-[0.05em] mb-1">Ecosystem Maturity</h4>
                                        <p className="text-[#768dad] font-['Inter'] text-[14px]">Necessity of creating localized vendor networks rather than relying on centralized Tier-1 services.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <span className="font-['Inter'] text-[#B09E6D]/50 text-[24px]">03</span>
                                    <div>
                                        <h4 className="font-['Inter'] text-[14px] font-bold text-[#ffffff] uppercase tracking-[0.05em] mb-1">Talent Skilling</h4>
                                        <p className="text-[#768dad] font-['Inter'] text-[14px]">Managing the delta between fundamental education and specific enterprise technological stacks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Northrop’s Edge */}
            <section className="py-[80px] bg-[#f7fafd] relative">
                <div className="absolute inset-0 opacity-[0.03] select-none flex items-center justify-center pointer-events-none">
                    <span className="text-[20rem] font-bold text-[#000f22] leading-none uppercase">NORTHROP</span>
                </div>
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] relative z-10">
                    <div className="text-center mb-[32px] max-w-2xl mx-auto">
                        <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] mb-4">Forensic Capability Stack</h2>
                        <p className="font-['Inter'] text-[16px] text-[#43474d]">Precision diagnostic tools developed specifically for the Indian regulatory and industrial landscape.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                        <div className="bg-[#e0e3e6] p-[32px] border border-[#c4c6ce]/30 group hover:shadow-xl transition-all duration-500">
                            <span className="material-symbols-outlined text-[#000f22] text-4xl mb-6">pin_drop</span>
                            <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-4">Site Selection</h3>
                            <p className="font-['Inter'] text-[14px] text-[#43474d]">Granular analysis of connectivity, power stability, and state-level policy incentives at the municipal level.</p>
                            <div className="mt-8 pt-8 border-t border-[#c4c6ce]/50">
                                <span className="font-['Inter'] text-[10px] text-[#B09E6D] uppercase tracking-[0.1em] font-bold">Protocol N-224</span>
                            </div>
                        </div>
                        <div className="bg-[#e0e3e6] p-[32px] border border-[#c4c6ce]/30 group hover:shadow-xl transition-all duration-500">
                            <span className="material-symbols-outlined text-[#000f22] text-4xl mb-6">troubleshoot</span>
                            <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-4">Supply Chain Diagnostics</h3>
                            <p className="font-['Inter'] text-[14px] text-[#43474d]">Stress-testing logistics networks against seasonal disruptions and geopolitical regulatory shifts.</p>
                            <div className="mt-8 pt-8 border-t border-[#c4c6ce]/50">
                                <span className="font-['Inter'] text-[10px] text-[#B09E6D] uppercase tracking-[0.1em] font-bold">Protocol N-509</span>
                            </div>
                        </div>
                        <div className="bg-[#e0e3e6] p-[32px] border border-[#c4c6ce]/30 group hover:shadow-xl transition-all duration-500">
                            <span className="material-symbols-outlined text-[#000f22] text-4xl mb-6">shield_with_heart</span>
                            <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-4">Resilience Frameworks</h3>
                            <p className="font-['Inter'] text-[14px] text-[#43474d]">Bespoke operational governance models designed to maintain enterprise-grade continuity in developing hubs.</p>
                            <div className="mt-8 pt-8 border-t border-[#c4c6ce]/50">
                                <span className="font-['Inter'] text-[10px] text-[#B09E6D] uppercase tracking-[0.1em] font-bold">Protocol N-112</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Roadmap */}
            <section className="bg-[#ffffff] py-[80px] border-t border-[#c4c6ce]/20">
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                    <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] mb-[32px] text-center">Operational Roadmap</h2>
                    <div className="relative mt-20">
                        {/* Center Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#c4c6ce]/30 hidden md:block"></div>
                        <div className="space-y-24">
                            {/* Step 01 */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 pr-0 md:pr-16 text-right order-2 md:order-1 mt-6 md:mt-0">
                                    <span className="font-['Inter'] text-[#B09E6D] text-[14px] font-bold tracking-[0.05em] mb-2 block">STEP_01</span>
                                    <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">Location Readiness Assessment</h3>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Comprehensive audits of infrastructure integrity and talent pool depth across potential Tier-2 candidate cities.</p>
                                </div>
                                <div className="relative z-10 w-12 h-12 rounded-full bg-[#0a2540] border-4 border-[#f7fafd] flex items-center justify-center order-1 md:order-2">
                                    <span className="font-['Inter'] text-[#ffffff] text-[12px] font-medium">01</span>
                                </div>
                                <div className="md:w-1/2 pl-0 md:pl-16 order-3"></div>
                            </div>
                            {/* Step 02 */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 pr-0 md:pr-16 order-1"></div>
                                <div className="relative z-10 w-12 h-12 rounded-full bg-[#0a2540] border-4 border-[#f7fafd] flex items-center justify-center order-1 md:order-2">
                                    <span className="font-['Inter'] text-[#ffffff] text-[12px] font-medium">02</span>
                                </div>
                                <div className="md:w-1/2 pl-0 md:pl-16 order-3 mt-6 md:mt-0">
                                    <span className="font-['Inter'] text-[#B09E6D] text-[14px] font-bold tracking-[0.05em] mb-2 block">STEP_02</span>
                                    <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">Hybrid GCC-Supply Chain Models</h3>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Architecting integrated service hubs that unify technological management with physical supply chain oversight.</p>
                                </div>
                            </div>
                            {/* Step 03 */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 pr-0 md:pr-16 text-right order-2 md:order-1 mt-6 md:mt-0">
                                    <span className="font-['Inter'] text-[#B09E6D] text-[14px] font-bold tracking-[0.05em] mb-2 block">STEP_03</span>
                                    <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">State Incentive Partnerships</h3>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Navigating and securing bilateral agreements with state governments for taxation reliefs and land-use grants.</p>
                                </div>
                                <div className="relative z-10 w-12 h-12 rounded-full bg-[#0a2540] border-4 border-[#f7fafd] flex items-center justify-center order-1 md:order-2">
                                    <span className="font-['Inter'] text-[#ffffff] text-[12px] font-medium">03</span>
                                </div>
                                <div className="md:w-1/2 pl-0 md:pl-16 order-3"></div>
                            </div>
                            {/* Step 04 */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 pr-0 md:pr-16 order-1"></div>
                                <div className="relative z-10 w-12 h-12 rounded-full bg-[#0a2540] border-4 border-[#f7fafd] flex items-center justify-center order-1 md:order-2">
                                    <span className="font-['Inter'] text-[#ffffff] text-[12px] font-medium">04</span>
                                </div>
                                <div className="md:w-1/2 pl-0 md:pl-16 order-3 mt-6 md:mt-0">
                                    <span className="font-['Inter'] text-[#B09E6D] text-[14px] font-bold tracking-[0.05em] mb-2 block">STEP_04</span>
                                    <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">Policy Monitoring</h3>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d]">Continuous forensic scanning of Indian industrial policy and labor law updates to ensure perpetual compliance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tier2Cities;
