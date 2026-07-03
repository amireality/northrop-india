import { useEffect, useRef } from 'react';

const AiIntegrationFailures = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-reveal');
        elements.forEach(el => {
            observerRef.current.observe(el);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="bg-[#f7fafd] font-['Inter'] text-[#181c1e] text-[16px] antialiased overflow-x-hidden selection:bg-[#5884ff] selection:text-[#ffffff]">
            {/* Hero Section */}
            <header className="relative min-h-[85vh] flex items-center pt-[96px] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-[#000f22] via-[#000f22]/60 to-transparent z-10"></div> */}
                    <img
                        alt="Strategy Ledger Vol. 14 Hero Image"
                        className="w-full h-full object-cover"
                        src="/insightpage/aiintelegent.jpeg"
                    />

                    <div className="absolute inset-0 bg-black/40"></div> 
                </div>
                <div className="relative z-20 w-full max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                  
                    <h1 className="font-['Montserrat'] text-[48px] font-bold text-[#ffffff] max-w-4xl mb-[8px] text-shadow-sm leading-[1.1] tracking-[-0.02em]">
                        AI Governance Design: The Hidden Architect of Integration Success
                    </h1>
                    <p className="font-['Montserrat'] text-[24px] text-[#e0e2e6] max-w-2xl font-light leading-snug">
                        Why AI Failures Trace Back to Governance — Not Technology Selection
                    </p>
                </div>
            </header>

            {/* Executive Summary */}
            <section className="bg-[#ffffff] py-[80px] ai-forensic-grid">
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
                    <div className="flex flex-col md:flex-row gap-[24px] items-center">
                        <div className="md:w-1/2 border-l-4 border-[#000f22] pl-[24px]">
                            <h2 className="font-['Inter'] text-[14px] font-bold text-[#5884ff] uppercase tracking-[0.05em] mb-[8px]">Executive Summary</h2>
                            <p className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] leading-tight tracking-[-0.01em]">
                                While 59% of enterprises have aggressively moved into AI adoption, the vast majority of initiatives underdeliver. The core friction is not compute or code—it is the absence of a forensic-grade governance framework.
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-[#ebeef1] p-[32px] border border-[#c4c6ce]">
                            <div className="flex items-start gap-[16px]">
                                <span className="material-symbols-outlined text-[#000f22] text-[36px]">warning</span>
                                <div>
                                    <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-[8px]">The Governance Gap</h3>
                                    <p className="text-[#4e6073] font-['Inter'] text-[16px] leading-relaxed">
                                        Organizations are optimizing for speed of deployment while ignoring the liability vectors inherent in unstructured data processing and black-box decisioning models. Success requires a transition from "AI Exploration" to "AI Stewardship."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Forensic Dashboard */}
            <section className="bg-[#0a2540] text-[#ffffff] py-[80px] relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] relative z-10 animate-reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="mb-[32px]">
                        <h2 className="font-['Inter'] text-[14px] font-bold text-[#5884ff] bg-[#ffffff] w-fit px-2 py-1 mb-[8px] uppercase tracking-[0.05em]">Forensic Performance Dashboard</h2>
                        <div className="w-16 h-1 bg-[#5884ff]"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                        {/* Radial Gauge 1 */}
                        <div className="bg-[#000f22] p-[32px] border border-[#74777e]/30 rounded-lg flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 flex items-center justify-center mb-[16px]">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle className="text-[#74777e]/20" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="8"></circle>
                                    <circle className="text-[#ffffff]" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502" strokeDashoffset="206" strokeWidth="8"></circle>
                                </svg>
                                <span className="absolute font-['Montserrat'] text-[48px] font-bold">59%</span>
                            </div>
                            <h4 className="font-['Inter'] text-[14px] font-bold uppercase tracking-[0.05em]">Active Adoption Rate</h4>
                            <p className="text-[#c6c6c8] font-['Inter'] text-[14px] mt-[8px]">Enterprises with live AI use cases</p>
                        </div>
                        {/* Risk Matrix */}
                        <div className="md:col-span-2 bg-[#000f22] p-[32px] border border-[#74777e]/30 rounded-lg">
                            <div className="flex justify-between items-end mb-[16px]">
                                <h4 className="font-['Montserrat'] text-[24px] font-bold uppercase tracking-tight">Risk Maturity Matrix</h4>
                                <span className="font-['Inter'] text-[12px] font-medium text-[#c6c6c8] tracking-[0.05em]">Confidence: 98.4%</span>
                            </div>
                            <div className="grid grid-cols-5 grid-rows-5 gap-1 h-64 border-l border-b border-[#74777e]/50 relative">
                                {/* Simulated Matrix Dots */}
                                <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 pointer-events-none">
                                    <div className="flex items-center justify-center opacity-20"><div className="w-2 h-2 rounded-full bg-[#ffffff]"></div></div>
                                    <div className="flex items-center justify-center opacity-40"><div className="w-2 h-2 rounded-full bg-[#ffffff]"></div></div>
                                    <div className="flex items-center justify-center col-start-4 row-start-2"><div className="w-4 h-4 rounded-full bg-[#ba1a1a] ring-4 ring-[#ba1a1a]/30 animate-pulse"></div></div>
                                    <div className="flex items-center justify-center col-start-2 row-start-4"><div className="w-3 h-3 rounded-full bg-[#5884ff]"></div></div>
                                </div>
                                {/* Matrix Labels */}
                                <div className="absolute -left-[45px] top-1/2 -rotate-90 font-['Inter'] text-[10px] uppercase text-[#74777e] tracking-[0.05em]">Probability</div>
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-['Inter'] text-[10px] uppercase text-[#74777e] tracking-[0.05em]">Impact Severity</div>
                            </div>
                            <div className="mt-[16px] flex justify-between">
                                <div className="flex items-center gap-[8px]">
                                    <div className="w-3 h-3 rounded-full bg-[#ba1a1a]"></div>
                                    <span className="font-['Inter'] text-[14px] text-[#e0e2e6]">Strategic Risk (19%)</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <div className="w-3 h-3 rounded-full bg-[#5884ff]"></div>
                                    <span className="font-['Inter'] text-[14px] text-[#e0e2e6]">Assessment Coverage</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Issues Matrix */}
            <section className="py-[80px] bg-[#f1f4f7]">
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] animate-reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="text-center mb-[32px]">
                        <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] mb-[8px]">Anatomy of Failure: The Core Issues Matrix</h2>
                        <p className="text-[#4e6073] max-w-2xl mx-auto font-['Inter'] text-[16px]">Forensic mapping of institutional barriers preventing AI realization.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c4c6ce] border border-[#c4c6ce]">
                        {/* Cell 1 */}
                        <div className="bg-[#ffffff] p-10 hover:bg-[#f7fafd] transition-colors group">
                            <div className="flex items-center gap-[16px] mb-[16px]">
                                <span className="material-symbols-outlined text-[#000f22] text-[36px] group-hover:scale-110 transition-transform">schedule</span>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22]">Governance Lag</h3>
                            </div>
                            <p className="text-[#4e6073] font-['Inter'] text-[16px] mb-[16px] leading-relaxed">Innovation cycles outpace corporate policy revision. Rules designed for static databases fail against dynamic, generative agents.</p>
                            <ul className="space-y-2 font-['Inter'] text-[12px] font-medium text-[#003ea8] tracking-[0.05em] uppercase">
                                <li>[01] INERTIA: SLOW BOARD APPROVAL</li>
                                <li>[02] FRICTION: SILOED COMPLIANCE</li>
                            </ul>
                        </div>
                        {/* Cell 2 */}
                        <div className="bg-[#ffffff] p-10 hover:bg-[#f7fafd] transition-colors group">
                            <div className="flex items-center gap-[16px] mb-[16px]">
                                <span className="material-symbols-outlined text-[#000f22] text-[36px] group-hover:scale-110 transition-transform">gavel</span>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22]">Regulatory Response</h3>
                            </div>
                            <p className="text-[#4e6073] font-['Inter'] text-[16px] mb-[16px] leading-relaxed">Firms are caught between regional regulation divergence (EU AI Act vs. US Sectoral approach), creating compliance paralysis.</p>
                            <ul className="space-y-2 font-['Inter'] text-[12px] font-medium text-[#003ea8] tracking-[0.05em] uppercase">
                                <li>[01] EXPOSURE: MULTI-JURISDICTIONAL GAP</li>
                                <li>[02] FINES: GDPR/AI INTERSECTION</li>
                            </ul>
                        </div>
                        {/* Cell 3 */}
                        <div className="bg-[#ffffff] p-10 hover:bg-[#f7fafd] transition-colors group">
                            <div className="flex items-center gap-[16px] mb-[16px]">
                                <span className="material-symbols-outlined text-[#000f22] text-[36px] group-hover:scale-110 transition-transform">groups</span>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22]">Unclear Roles</h3>
                            </div>
                            <p className="text-[#4e6073] font-['Inter'] text-[16px] mb-[16px] leading-relaxed">Conflict between IT, Legal, and Business units regarding "ownership" of the model output and data provenance.</p>
                            <ul className="space-y-2 font-['Inter'] text-[12px] font-medium text-[#003ea8] tracking-[0.05em] uppercase">
                                <li>[01] AMBIGUITY: THE "WHO OWNS LOSS" DILEMMA</li>
                                <li>[02] FATIGUE: DECISION GRIDLOCK</li>
                            </ul>
                        </div>
                        {/* Cell 4 */}
                        <div className="bg-[#ffffff] p-10 hover:bg-[#f7fafd] transition-colors group">
                            <div className="flex items-center gap-[16px] mb-[16px]">
                                <span className="material-symbols-outlined text-[#000f22] text-[36px] group-hover:scale-110 transition-transform">database</span>
                                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22]">Data Quality</h3>
                            </div>
                            <p className="text-[#4e6073] font-['Inter'] text-[16px] mb-[16px] leading-relaxed">Feeding sophisticated LLMs with biased, unstructured, or "toxic" enterprise data leads to hallucinated business logic.</p>
                            <ul className="space-y-2 font-['Inter'] text-[12px] font-medium text-[#003ea8] tracking-[0.05em] uppercase">
                                <li>[01] POISONING: UNVERIFIED SOURCE DATA</li>
                                <li>[02] BIAS: HISTORICAL SKEW REINFORCEMENT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Failure Implications */}
            <section className="bg-[#000f22] py-[80px]">
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] animate-reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] items-center">
                        <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                            <div
                                aria-label="A high-contrast cinematic photograph of a dark, futuristic server room at night."
                                className="w-full h-[400px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('/insightpage/aifailure2.png')" }}
                            ></div>
                        </div>
                        <div className="text-[#ffffff]">
                            <h2 className="font-['Montserrat'] text-[32px] font-bold mb-[16px] leading-tight tracking-[-0.01em]">Strategic Failure Implications</h2>
                            <p className="text-[#e0e2e6] font-['Inter'] text-[18px] mb-[32px] leading-relaxed">
                                Unchecked AI deployment is a liability trap. We have observed three primary catastrophic failure modes:
                            </p>
                            <div className="space-y-[16px]">
                                <div className="flex gap-[16px] items-start">
                                    <span className="text-[#5884ff] font-['Montserrat'] text-[24px] font-bold">01</span>
                                    <div>
                                        <h4 className="font-['Montserrat'] text-[24px] font-bold mb-1">Financial Attrition</h4>
                                        <p className="text-[#c6c6c8] font-['Inter'] text-[14px]">Uncontrolled API costs and compute mismanagement leading to project abandonment mid-cycle.</p>
                                    </div>
                                </div>
                                <div className="flex gap-[16px] items-start">
                                    <span className="text-[#5884ff] font-['Montserrat'] text-[24px] font-bold">02</span>
                                    <div>
                                        <h4 className="font-['Montserrat'] text-[24px] font-bold mb-1">Compliance Violations</h4>
                                        <p className="text-[#c6c6c8] font-['Inter'] text-[14px]">PII leakage through model training, resulting in multi-million dollar regulatory penalties.</p>
                                    </div>
                                </div>
                                <div className="flex gap-[16px] items-start">
                                    <span className="text-[#5884ff] font-['Montserrat'] text-[24px] font-bold">03</span>
                                    <div>
                                        <h4 className="font-['Montserrat'] text-[24px] font-bold mb-1">Reputational Decay</h4>
                                        <p className="text-[#c6c6c8] font-['Inter'] text-[14px]">Brand dilution through inaccurate, customer-facing AI interactions that erode trust.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Northrop Advantage */}
            <section className="py-[80px] bg-[#ffffff]">
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] animate-reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="flex flex-col md:flex-row gap-[24px]">
                        <div className="md:w-1/3">
                            <div className="sticky top-24">
                                <h2 className="font-['Inter'] text-[14px] font-bold text-[#000f22] uppercase tracking-[0.05em] mb-[8px]">The Northrop Advantage</h2>
                                <h3 className="font-['Montserrat'] text-[32px] font-bold text-[#000f22] mb-[16px] leading-tight">Forensic Precision in AI Strategy</h3>
                                <p className="text-[#4e6073] font-['Inter'] text-[16px] mb-[32px] leading-relaxed">We don't just advise; we engineer the governance structures that protect your strategic future.</p>
                                <button className="border border-[#000f22] text-[#000f22] px-8 py-3 font-['Inter'] text-[14px] font-bold hover:bg-[#000f22] hover:text-[#ffffff] transition-colors uppercase tracking-[0.05em]">
                                    Request Advisory
                                </button>
                            </div>
                        </div>
                        <div className="md:w-2/3 space-y-[32px]">
                            <div className="p-[32px] border border-[#c4c6ce] hover:shadow-xl transition-shadow bg-[#f7fafd] group">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-[#000f22] text-[#ffffff] flex items-center justify-center rounded-lg mb-[16px]">
                                        <span className="material-symbols-outlined">assignment_turned_in</span>
                                    </div>
                                    <span className="font-['Inter'] text-[12px] font-medium text-[#74777e] uppercase tracking-[0.05em]">Phase_01</span>
                                </div>
                                <h4 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-[8px]">Maturity Assessments</h4>
                                <p className="text-[#4e6073] font-['Inter'] text-[16px] leading-relaxed">A comprehensive audit of existing technical stack, data readiness, and organizational competency against global AI standards.</p>
                            </div>
                            <div className="p-[32px] border border-[#c4c6ce] hover:shadow-xl transition-shadow bg-[#f7fafd] group">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-[#000f22] text-[#ffffff] flex items-center justify-center rounded-lg mb-[16px]">
                                        <span className="material-symbols-outlined">policy</span>
                                    </div>
                                    <span className="font-['Inter'] text-[12px] font-medium text-[#74777e] uppercase tracking-[0.05em]">Phase_02</span>
                                </div>
                                <h4 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-[8px]">Policy Design</h4>
                                <p className="text-[#4e6073] font-['Inter'] text-[16px] leading-relaxed">Drafting forensic-grade ethical guidelines, usage policies, and liability frameworks tailored to specific insolvency or accounting domains.</p>
                            </div>
                            <div className="p-[32px] border border-[#c4c6ce] hover:shadow-xl transition-shadow bg-[#f7fafd] group">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-[#000f22] text-[#ffffff] flex items-center justify-center rounded-lg mb-[16px]">
                                        <span className="material-symbols-outlined">precision_manufacturing</span>
                                    </div>
                                    <span className="font-['Inter'] text-[12px] font-medium text-[#74777e] uppercase tracking-[0.05em]">Phase_03</span>
                                </div>
                                <h4 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-[8px]">Sector-Specific Implementation</h4>
                                <p className="text-[#4e6073] font-['Inter'] text-[16px] leading-relaxed">Deploying AI agents into live forensic workflows with embedded monitoring and automated compliance reporting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Roadmap */}
            <section className="py-[80px] bg-[#ebeef1] relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] relative z-10 animate-reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="text-center mb-[32px]">
                        <h2 className="font-['Inter'] text-[14px] font-bold text-[#5884ff] uppercase tracking-[0.05em] mb-[8px]">The 4-Step Strategic Roadmap</h2>
                        <div className="w-24 h-1 bg-[#000f22] mx-auto"></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-[24px] relative">
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-[#c4c6ce] z-0"></div>
                        {/* Node 1 */}
                        <div className="relative z-10 text-center w-full max-w-[240px]">
                            <div className="w-24 h-24 rounded-full bg-[#ffffff] border-2 border-[#000f22] flex items-center justify-center mx-auto mb-[16px] group hover:bg-[#000f22] transition-colors cursor-default shadow-lg">
                                <span className="material-symbols-outlined text-[#000f22] group-hover:text-[#ffffff] text-[36px]">corporate_fare</span>
                            </div>
                            <h5 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-[8px]">Establish Committees</h5>
                            <p className="font-['Inter'] text-[14px] text-[#4e6073]">Cross-functional steering for ethical oversight.</p>
                        </div>
                        {/* Node 2 */}
                        <div className="relative z-10 text-center w-full max-w-[240px]">
                            <div className="w-24 h-24 rounded-full bg-[#ffffff] border-2 border-[#000f22] flex items-center justify-center mx-auto mb-[16px] group hover:bg-[#000f22] transition-colors cursor-default shadow-lg">
                                <span className="material-symbols-outlined text-[#000f22] group-hover:text-[#ffffff] text-[36px]">account_tree</span>
                            </div>
                            <h5 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-[8px]">Risk Classification</h5>
                            <p className="font-['Inter'] text-[14px] text-[#4e6073]">Categorizing AI agents by impact severity.</p>
                        </div>
                        {/* Node 3 */}
                        <div className="relative z-10 text-center w-full max-w-[240px]">
                            <div className="w-24 h-24 rounded-full bg-[#ffffff] border-2 border-[#000f22] flex items-center justify-center mx-auto mb-[16px] group hover:bg-[#000f22] transition-colors cursor-default shadow-lg">
                                <span className="material-symbols-outlined text-[#000f22] group-hover:text-[#ffffff] text-[36px]">hub</span>
                            </div>
                            <h5 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-[8px]">ERM Integration</h5>
                            <p className="font-['Inter'] text-[14px] text-[#4e6073]">Mapping AI into Enterprise Risk Management.</p>
                        </div>
                        {/* Node 4 */}
                        <div className="relative z-10 text-center w-full max-w-[240px]">
                            <div className="w-24 h-24 rounded-full bg-[#ffffff] border-2 border-[#000f22] flex items-center justify-center mx-auto mb-[16px] group hover:bg-[#000f22] transition-colors cursor-default shadow-lg">
                                <span className="material-symbols-outlined text-[#000f22] group-hover:text-[#ffffff] text-[36px]">model_training</span>
                            </div>
                            <h5 className="font-['Montserrat'] text-[24px] font-bold text-[#000f22] mb-[8px]">Leadership Upskilling</h5>
                            <p className="font-['Inter'] text-[14px] text-[#4e6073]">Forensic-literacy training for executive teams.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiIntegrationFailures;
