import { useEffect } from 'react';

const IndiaMa2025 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#f7fafd] text-[#181c1e] font-['Inter'] font-normal text-[16px] antialiased selection:bg-[#d2e4ff] selection:text-[#001c37]">
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[85vh] flex items-center pt-[96px] pb-[80px] px-[16px] md:px-[40px] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="India M&A 2025 Hero Background"
                            className="w-full h-full object-cover"
                            src="/reportimg/8TH .png"
                        />
                        {/* <div className="absolute inset-0 bg-[#000f22]/70 z-10"></div> */}
                    </div>
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[24px] relative z-20 w-full">
                        <div className="lg:col-span-7 flex flex-col justify-center">
                            <div className="font-['Inter'] text-[14px] font-bold text-[#c6a87c] uppercase tracking-[0.05em] mb-[16px] flex items-center">
                                <span className="w-8 h-px bg-[#c6a87c] mr-3"></span> Strategy Ledger
                            </div>
                            <h1 className="font-['Montserrat'] text-[48px] font-bold text-[#ffffff] mb-[32px] leading-tight tracking-[-0.02em]">
                                India M&A 2025: <br />Quality Over Quantity
                            </h1>
                            <p className="font-['Inter'] text-[18px] text-[#ffffff]/90 max-w-2xl leading-relaxed">
                                A rigorous forensic analysis of the shifting landscape in Indian Mergers & Acquisitions, highlighting a definitive pivot towards high-conviction, strategically aligned assets over speculative volume.
                            </p>
                        </div>
                        {/* Data Visualization Module */}
                        <div className="lg:col-span-5 mt-[32px] lg:mt-0 relative">
                            <div className="bg-[#ffffff]/95 backdrop-blur-sm border border-[#ffffff]/20 rounded p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.2)] h-full flex flex-col justify-center">
                                <div className="font-['Inter'] text-[14px] font-bold text-[#43474d] mb-6 border-b border-[#e0e3e6] pb-2 uppercase tracking-[0.05em]">Core Metrics (FY24/25)</div>
                                <div className="mb-8">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="font-['Inter'] text-[16px] text-[#4e6073]">Total Deal Value</span>
                                        <span className="font-['Inter'] text-[12px] text-[#0061FF] font-bold tracking-[0.1em]">+18% YoY</span>
                                    </div>
                                    <div className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] tracking-[-0.01em]">US$123.8bn</div>
                                    <div className="w-full bg-[#e0e3e6] h-1 mt-3">
                                        <div className="bg-[#000f22] h-1 w-[85%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="font-['Inter'] text-[16px] text-[#4e6073]">Deal Volume</span>
                                        <span className="font-['Inter'] text-[12px] text-[#ba1a1a] font-bold tracking-[0.1em]">-3% Moderation</span>
                                    </div>
                                    <div className="font-['Montserrat'] text-[32px] font-bold text-[#43474d]">2,415 Transactions</div>
                                    <div className="w-full bg-[#e0e3e6] h-1 mt-3">
                                        <div className="bg-[#74777e] h-1 w-[60%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Executive Summary & Strategic Implications */}
                <section className="py-[80px] px-[16px] md:px-[40px] bg-[#ffffff] border-t border-[#c4c6ce]">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
                        <div className="lg:col-span-4 lg:pr-8">
                            <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] mb-[16px]">Executive Summary</h2>
                            <div className="w-12 h-1 bg-[#000f22] mb-[16px]"></div>
                            <p className="font-['Inter'] text-[16px] text-[#43474d] mb-[16px] leading-relaxed">
                                The Indian M&A ecosystem is experiencing a structural maturation. Following years of frenetic activity, 2025 marks a definitive transition toward a "fewer but larger" paradigm. Investors and corporate boards are demanding higher certainty, deploying capital selectively toward assets with demonstrable paths to profitability and dominant market positions.
                            </p>
                            <p className="font-['Inter'] text-[16px] text-[#43474d] leading-relaxed">
                                This environment prioritizes deep, forensic-level due diligence over speed, as the margin for error in valuations compresses against a backdrop of global macroeconomic recalibration.
                            </p>
                        </div>
                        <div className="lg:col-span-8 lg:border-l border-[#c4c6ce] lg:pl-12 mt-[32px] lg:mt-0">
                            <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-[16px]">Strategic Implications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                                <div>
                                    <h4 className="font-['Inter'] text-[14px] font-bold text-[#000f22] uppercase tracking-[0.05em] mb-2 flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-[#4e6073] text-sm">account_balance</span> Fertility for Consolidation
                                    </h4>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">
                                        Fragmented sectors, particularly in mid-market manufacturing and specialized technology services, are ripe for consolidation. Well-capitalized incumbents are utilizing M&A to acquire capabilities rather than just scale, driving targeted roll-up strategies.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-['Inter'] text-[14px] font-bold text-[#000f22] uppercase tracking-[0.05em] mb-2 flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-[#4e6073] text-sm">shield</span> The Balance Sheet Imperative
                                    </h4>
                                    <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">
                                        In an environment of elevated capital costs, strong corporate balance sheets are the primary currency for deal-making. Leverage is deployed judiciously, with a marked preference for equity or structured financing solutions to mitigate downside risk.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Trends Module */}
                <section className="py-[80px] px-[16px] md:px-[40px] bg-[#f7fafd] ind-tech-grid border-t border-[#c4c6ce]">
                    <div className="max-w-[1280px] mx-auto">
                        <div className="text-center mb-[32px]">
                            <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] mb-2">Key Market Dynamics</h2>
                            <p className="font-['Inter'] text-[16px] text-[#4e6073]">The structural pillars defining the 2025 M&A landscape.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                            {/* Trend 1 */}
                            <div className="bg-[#ffffff] border border-[#c4c6ce] p-6 hover:shadow-[0px_4px_20px_rgba(10,37,64,0.08)] transition-shadow duration-300 relative group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#e0e3e6] group-hover:bg-[#0061FF] transition-colors"></div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="material-symbols-outlined text-[#000f22] text-3xl">schema</span>
                                    <span className="font-['Inter'] text-[12px] font-bold text-[#4e6073] tracking-[0.1em]">IDX-01</span>
                                </div>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">Strategic Deals Dominate</h3>
                                <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">
                                    Corporate buyers account for over 65% of deal value, driven by imperatives to secure supply chains, acquire niche technologies, and expand geographic footprint amidst global trade realignments.
                                </p>
                            </div>
                            {/* Trend 2 */}
                            <div className="bg-[#ffffff] border border-[#c4c6ce] p-6 hover:shadow-[0px_4px_20px_rgba(10,37,64,0.08)] transition-shadow duration-300 relative group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#e0e3e6] group-hover:bg-[#0061FF] transition-colors"></div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="material-symbols-outlined text-[#000f22] text-3xl">analytics</span>
                                    <span className="font-['Inter'] text-[12px] font-bold text-[#4e6073] tracking-[0.1em]">IDX-02</span>
                                </div>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">PE Discipline</h3>
                                <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">
                                    Private Equity firms are exhibiting extended hold periods and focusing intensely on operational value creation rather than multiple expansion. Exits are meticulously timed, favoring secondary buyouts.
                                </p>
                            </div>
                            {/* Trend 3 */}
                            <div className="bg-[#ffffff] border border-[#c4c6ce] p-6 hover:shadow-[0px_4px_20px_rgba(10,37,64,0.08)] transition-shadow duration-300 relative group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#e0e3e6] group-hover:bg-[#0061FF] transition-colors"></div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="material-symbols-outlined text-[#000f22] text-3xl">monitoring</span>
                                    <span className="font-['Inter'] text-[12px] font-bold text-[#4e6073] tracking-[0.1em]">IDX-03</span>
                                </div>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-2">Valuation Dynamics</h3>
                                <p className="font-['Inter'] text-[14px] text-[#43474d] leading-relaxed">
                                    Bid-ask spreads are narrowing as seller expectations align with macro realities. Earn-outs and structured equity mechanisms are increasingly deployed to bridge residual valuation gaps in complex transactions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Northrop Advantage (Dark Mode) */}
                <section className="py-[80px] px-[16px] md:px-[40px] bg-[#000f22] text-[#ffffff] ind-dark-tech-grid border-y border-[#43474d]">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[24px] items-center">
                        <div>
                            <div className="font-['Inter'] text-[14px] font-bold text-[#b6c8de] uppercase tracking-[0.05em] mb-[16px] flex items-center">
                                <span className="w-8 h-px bg-[#b6c8de] mr-3"></span> Strategic Edge
                            </div>
                            <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#ffffff] mb-[32px]">How Northrop Competes and Wins</h2>
                            <p className="font-['Inter'] text-[16px] text-[#b6c8de] mb-[32px] max-w-lg leading-relaxed">
                                In a market demanding unprecedented precision, our forensic approach uncovers hidden liabilities and structural weaknesses that conventional advisory misses.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {/* Advantage Item */}
                            <div className="flex items-start p-4 border border-[#43474d] rounded bg-[#0A1A2F]">
                                <div className="mr-4 mt-1">
                                    <span className="material-symbols-outlined text-[#0061FF]">group</span>
                                </div>
                                <div>
                                    <h4 className="font-['Montserrat'] text-[24px] font-bold text-[#ffffff] text-lg mb-1">Senior-Led Due Diligence</h4>
                                    <p className="font-['Inter'] text-[14px] text-[#b6c8de] leading-relaxed">Every engagement is actively managed by partners with decades of specialized forensic accounting experience.</p>
                                </div>
                            </div>
                            {/* Advantage Item */}
                            <div className="flex items-start p-4 border border-[#43474d] rounded bg-[#0A1A2F]">
                                <div className="mr-4 mt-1">
                                    <span className="material-symbols-outlined text-[#0061FF]">gavel</span>
                                </div>
                                <div>
                                    <h4 className="font-['Montserrat'] text-[24px] font-bold text-[#ffffff] text-lg mb-1">Uncompromised Independence</h4>
                                    <p className="font-['Inter'] text-[14px] text-[#b6c8de] leading-relaxed">Conflict-free advisory ensuring objective, unvarnished risk assessments essential for high-stakes decision making.</p>
                                </div>
                            </div>
                            {/* Advantage Item */}
                            <div className="flex items-start p-4 border border-[#43474d] rounded bg-[#0A1A2F]">
                                <div className="mr-4 mt-1">
                                    <span className="material-symbols-outlined text-[#0061FF]">timer</span>
                                </div>
                                <div>
                                    <h4 className="font-['Montserrat'] text-[24px] font-bold text-[#ffffff] text-lg mb-1">Responsive Timelines</h4>
                                    <p className="font-['Inter'] text-[14px] text-[#b6c8de] leading-relaxed">Agile execution models designed to meet compressed deal windows without sacrificing forensic depth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recommendations Checklist */}
                <section className="py-[80px] px-[16px] md:px-[40px] bg-[#ffffff]">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-[32px] border-b border-[#c4c6ce] pb-[8px] flex items-center justify-between">
                            <h2 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22]">Strategic Directives for 2025</h2>
                            <span className="font-['Inter'] text-[12px] font-bold text-[#4e6073] bg-[#e0e3e6] px-2 py-1 rounded tracking-[0.1em]">ACTION REQUIRED</span>
                        </div>
                        <div className="space-y-4 font-['Inter'] text-[16px]">
                            <label className="flex items-start p-4 border border-[#c4c6ce] rounded hover:bg-[#f7fafd] transition-colors cursor-pointer group">
                                <input className="form-checkbox h-5 w-5 text-[#0061FF] border-[#74777e] rounded mt-0.5 focus:ring-[#0061FF]" type="checkbox" />
                                <span className="ml-4 text-[#181c1e] group-hover:text-[#000f22] font-medium transition-colors">
                                    Strengthen due diligence with forensic depth to uncover obfuscated liabilities.
                                </span>
                            </label>
                            <label className="flex items-start p-4 border border-[#c4c6ce] rounded hover:bg-[#f7fafd] transition-colors cursor-pointer group">
                                <input className="form-checkbox h-5 w-5 text-[#0061FF] border-[#74777e] rounded mt-0.5 focus:ring-[#0061FF]" type="checkbox" />
                                <span className="ml-4 text-[#181c1e] group-hover:text-[#000f22] font-medium transition-colors">
                                    Focus on regulatory preparedness amid heightened antitrust and compliance scrutiny.
                                </span>
                            </label>
                            <label className="flex items-start p-4 border border-[#c4c6ce] rounded hover:bg-[#f7fafd] transition-colors cursor-pointer group">
                                <input className="form-checkbox h-5 w-5 text-[#0061FF] border-[#74777e] rounded mt-0.5 focus:ring-[#0061FF]" type="checkbox" />
                                <span className="ml-4 text-[#181c1e] group-hover:text-[#000f22] font-medium transition-colors">
                                    Build robust, day-one integration playbooks to accelerate synergy realization.
                                </span>
                            </label>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default IndiaMa2025;
