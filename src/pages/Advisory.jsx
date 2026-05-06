
import { Helmet } from 'react-helmet-async';

const Advisory = () => {
  return (
    <main className=" bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      <Helmet>
        <title>Integrated Advisory Excellence | The Northrop Mandate</title>
        <meta name="description" content="Explore Northrop's multidisciplinary advisory mastery. We provide strategic blueprints, capital advisory, and financial controls for institutional growth." />
      </Helmet>
            {/* Hero Section */}
            <header className="relative min-h-[600px] md:min-h-[870px] flex items-center px-6 md:px-12 py-20 overflow-hidden bg-primary">
                <div className="absolute inset-0 opacity-40">
                    <img 
                        className="w-full h-full object-cover grayscale" 
                        src="./stich.png"
                        alt="Northrop Management advisory — architectural glass facade representing institutional precision"
                        loading="eager"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent md:to-transparent/50"></div>
                <div className="relative z-10 mt-10 md:mt-0">
                    <span className="inline-block px-4 py-1.5 mb-6 border border-secondary/30 text-secondary-fixed font-label text-[10px] sm:text-xs tracking-[0.2em] uppercase">The Northrop Mandate</span>
                    <h1 className="font-headline italic text-5xl sm:text-6xl md:text-8xl text-white mb-6 md:mb-8 leading-[1.1]">
                        Integrated <br className="hidden sm:block"/> Advisory Excellence.
                    </h1>
                    <p className="font-headline text-xl sm:text-2xl md:text-3xl text-surface-dim max-w-2xl leading-relaxed">
                        The Architecture of Institutional Growth. We navigate the intricacies of global markets with surgical precision and multidisciplinary mastery.
                    </p>
                    <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <button className="w-full sm:w-auto px-6 sm:px-10 py-4 bg-secondary text-primary font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-secondary-fixed transition-colors">
                            Explore Pillars
                        </button>
                        <button className="w-full sm:w-auto px-6 sm:px-10 py-4 bg-transparent border border-white/20 text-white font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-white/10 transition-colors">
                            Institutional Profile
                        </button>
                    </div>
                </div>
            </header>

            {/* Track Record Strip */}
            <section className="bg-surface-container-low py-12 px-6 md:px-12">
                <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-[1px] bg-secondary"></div>
                        <span className="font-label text-xs font-semibold tracking-widest uppercase text-on-surface-variant">Proven Authority</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 flex-1 w-full pl-0 md:pl-12">
                        <div>
                            <div className="text-xl sm:text-2xl font-headline italic mb-1">3 leading banks</div>
                            <div className="text-[10px] sm:text-xs font-label text-on-surface-variant uppercase tracking-wider">Forensic Audits Executed</div>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-headline italic mb-1">IBC &amp; NCLT</div>
                            <div className="text-[10px] sm:text-xs font-label text-on-surface-variant uppercase tracking-wider">Complex Resolutions</div>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-headline italic mb-1">SME &amp; Main Board</div>
                            <div className="text-[10px] sm:text-xs font-label text-on-surface-variant uppercase tracking-wider">IPO Advisory Track</div>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-headline italic mb-1">Global 500</div>
                            <div className="text-[10px] sm:text-xs font-label text-on-surface-variant uppercase tracking-wider">Regulatory Compliance</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars Section (Bento Grid) */}
            <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
                        <div className="max-w-2xl">
                            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4 md:mb-6">Multidisciplinary Mastery</h2>
                            <p className="text-on-surface-variant text-base md:text-lg max-w-xl">
                                Our eight core pillars form the foundation of sustainable institutional growth, reflecting the integrated vision of our founder, Ashish Chaudhary.
                            </p>
                        </div>
                        <div className="font-headline italic text-7xl md:text-9xl text-surface-container-high select-none self-end md:self-auto">08</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* 1. Strategy */}
                        <div className="md:col-span-4 bg-surface-container-low p-8 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[350px] group hover:bg-primary transition-all duration-500">
                            <div>
                                <span className="material-symbols-outlined text-secondary mb-6 md:mb-8 group-hover:text-secondary-fixed">account_tree</span>
                                <h3 className="font-headline text-2xl md:text-3xl mb-4 group-hover:text-white">Strategy</h3>
                                <p className="text-on-surface-variant group-hover:text-surface-dim leading-relaxed text-sm md:text-base">
                                    Market-entry advisory, scaling blueprints, and navigating complex regulatory landscapes across global territories.
                                </p>
                            </div>
                            <div className="pt-8 flex items-center gap-2 text-secondary group-hover:text-secondary-fixed font-bold text-[10px] md:text-xs tracking-widest uppercase">
                                View Capability <span className="material-symbols-outlined text-sm">north_east</span>
                            </div>
                        </div>
                        {/* 2. Capital Advisory */}
                        <div className="md:col-span-8 relative overflow-hidden group min-h-[300px] md:min-h-[350px]">
                            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="stich1.png" alt="Capital advisory — modern glass building facade representing structured institutional growth" loading="lazy" />
                            <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px] p-8 md:p-10 flex flex-col justify-end">
                                <h3 className="font-headline text-3xl md:text-4xl text-white mb-4">Capital Advisory</h3>
                                <p className="text-surface-dim max-w-xl leading-relaxed mb-6 text-sm md:text-base">
                                    Sophisticated debt syndication and equity structuring tailored for institutional expansion and structural optimization.
                                </p>
                                <div className="h-[2px] w-24 bg-secondary"></div>
                            </div>
                        </div>
                        {/* 3. Financial Controls */}
                        <div className="md:col-span-6 bg-surface-container-low p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-8 group">
                            <div className="p-4 bg-white/50 shrink-0">
                                <span className="material-symbols-outlined text-primary group-hover:text-secondary">fact_check</span>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl md:text-2xl mb-3">Financial Controls</h3>
                                <p className="text-on-surface-variant text-sm md:text-base">Internal audit rigor and robust oversight systems to safeguard institutional integrity.</p>
                            </div>
                        </div>
                        {/* 4. Risk & Governance */}
                        <div className="md:col-span-6 bg-surface-container-low p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-8 group">
                            <div className="p-4 bg-white/50 shrink-0">
                                <span className="material-symbols-outlined text-primary group-hover:text-secondary">gavel</span>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl md:text-2xl mb-3">Risk &amp; Governance</h3>
                                <p className="text-on-surface-variant text-sm md:text-base">Transformation of compliance frameworks into strategic growth-enabling risk entities.</p>
                            </div>
                        </div>
                        {/* 5. M&A */}
                        <div className="md:col-span-6 lg:col-span-3 bg-white p-8 md:p-10 border border-outline-variant/10 shadow-sm flex flex-col justify-between">
                            <h3 className="font-headline text-xl md:text-2xl">M&amp;A Advisory</h3>
                            <p className="text-sm text-on-surface-variant py-6">End-to-end deal execution from valuation to post-merger integration.</p>
                            <div className="text-secondary font-bold text-[10px] tracking-widest uppercase">Transaction Services</div>
                        </div>
                        {/* 6. Tax Structuring */}
                        <div className="md:col-span-6 lg:col-span-3 bg-white p-8 md:p-10 border border-outline-variant/10 shadow-sm flex flex-col justify-between">
                            <h3 className="font-headline text-xl md:text-2xl">Tax Structuring</h3>
                            <p className="text-sm text-on-surface-variant py-6">Optimization of direct and indirect tax burdens within statutory compliance.</p>
                            <div className="text-secondary font-bold text-[10px] tracking-widest uppercase">Fiscal Policy</div>
                        </div>
                        {/* 7. Digital Transformation */}
                        <div className="md:col-span-6 lg:col-span-3 bg-white p-8 md:p-10 border border-outline-variant/10 shadow-sm flex flex-col justify-between">
                            <h3 className="font-headline text-xl md:text-2xl">Digital Transformation</h3>
                            <p className="text-sm text-on-surface-variant py-6">Leveraging advanced data analytics and decisioning automation for the modern firm.</p>
                            <div className="text-secondary font-bold text-[10px] tracking-widest uppercase">Intelligence</div>
                        </div>
                        {/* 8. IPO Readiness */}
                        <div className="md:col-span-6 lg:col-span-3 bg-secondary text-primary p-8 md:p-10 flex flex-col justify-between">
                            <h3 className="font-headline text-xl md:text-2xl font-bold">IPO Readiness</h3>
                            <p className="text-sm text-primary/80 py-6">Comprehensive preparation for SME and Main Board listing, ensuring market compliance.</p>
                            <div className="text-primary font-black text-[10px] tracking-widest uppercase">Market Entry</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Business Lifecycle Section */}
            <section className="py-20 md:py-32 px-6 md:px-12 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGfRdH2iiz2yLUHb6f2ayVt6tILw-ozA9Hefnm17uGnxqzdR67kcmPS6lKkZP2lsqfdnjtjeUxUF7QT1jHT7Tkbepis--kJIXUQV22xwwEr3bTjOP75mi-EqldPtI6Ja7toeo1G2l0x_R1A1hxW43TZPo2hIvWlwG_MVUYmwRsfDAtfo7fh7lSANrmuFwNfCqhWZWL3k5qnx-t9D_BDzlXuU8m1HAKA3I8JrOlCZbjmd9RLG0yegEWrgrleUDwXBjd5Y2w79KA8x8" alt="Abstract digital pattern representing AI-assisted financial analysis" loading="lazy" />
                </div>
                <div className="max-w-screen-2xl mx-auto relative z-10">
                    <div className="max-w-3xl mb-16 md:mb-24 text-center md:text-left">
                        <h2 className="font-headline text-4xl md:text-5xl mb-6 md:mb-8">The Full Business Lifecycle</h2>
                        <p className="text-surface-dim text-lg md:text-xl leading-relaxed">
                            Northrop Management serves as an integrated partner throughout your firm's journey—from initial incorporation to the pinnacle of public listing.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 hidden lg:block"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pl-4 md:pl-0 border-l-2 md:border-l-0 border-white/10 lg:border-none">
                            {/* Phase 1 */}
                            <div className="relative bg-primary-container p-6 md:p-8 md:border-l-2 md:border-secondary">
                                <span className="block text-secondary font-headline italic text-3xl md:text-4xl mb-3 md:mb-4">01</span>
                                <h4 className="text-lg md:text-xl font-headline mb-3 md:mb-4">Incubation &amp; Incorporation</h4>
                                <p className="text-sm text-surface-dim leading-relaxed">Structural setup, regulatory filings, and foundational governance protocols for emerging enterprises.</p>
                            </div>
                            {/* Phase 2 */}
                            <div className="relative bg-primary-container p-6 md:p-8 md:border-l-2 md:border-secondary mt-0">
                                <span className="block text-secondary font-headline italic text-3xl md:text-4xl mb-3 md:mb-4">02</span>
                                <h4 className="text-lg md:text-xl font-headline mb-3 md:mb-4">Operational Scaling</h4>
                                <p className="text-sm text-surface-dim leading-relaxed">Deployment of financial controls, tax optimization, and growth strategy for sustainable expansion.</p>
                            </div>
                            {/* Phase 3 */}
                            <div className="relative bg-primary-container p-6 md:p-8 md:border-l-2 md:border-secondary mt-0">
                                <span className="block text-secondary font-headline italic text-3xl md:text-4xl mb-3 md:mb-4">03</span>
                                <h4 className="text-lg md:text-xl font-headline mb-3 md:mb-4">M&amp;A and Resilience</h4>
                                <p className="text-sm text-surface-dim leading-relaxed">Capital restructuring, risk management, and strategic acquisitions to fortify market positioning.</p>
                            </div>
                            {/* Phase 4 */}
                            <div className="relative bg-primary-container p-6 md:p-8 md:border-l-2 md:border-secondary mt-0">
                                <span className="block text-secondary font-headline italic text-3xl md:text-4xl mb-3 md:mb-4">04</span>
                                <h4 className="text-lg md:text-xl font-headline mb-3 md:mb-4">Public Market Exit</h4>
                                <p className="text-sm text-surface-dim leading-relaxed">Comprehensive IPO preparation, listing compliance, and transition to institutional governance standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 md:mt-24 p-8 md:p-12 bg-surface-container-low/10 border border-white/10 backdrop-blur-md">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div className="flex-1">
                                <h3 className="font-headline text-2xl md:text-3xl mb-4">The Architecture of Growth</h3>
                                <p className="text-surface-dim max-w-xl mx-auto md:mx-0">Every stage of your business journey requires a different lens. We provide the clarity and expertise needed to evolve at every milestone.</p>
                            </div>
                            <button className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-white text-primary font-bold text-xs tracking-widest uppercase hover:bg-secondary transition-colors duration-300">
                                Download Methodology
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary mb-6 md:mb-8 block">Inquire</span>
                    <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary mb-8 md:mb-10">Secure Your <br className="block sm:hidden" /><span className="italic">Institutional Future.</span></h2>
                    <p className="text-on-surface-variant text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                        Connect with our advisory board to discuss bespoke solutions for your organization's complex financial and strategic challenges.
                    </p>
                    <form className="max-w-lg mx-auto space-y-6 md:space-y-8">
                        <div className="relative">
                            <label className="block text-left text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 text-on-surface-variant">Organization Name</label>
                            <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-3 md:py-4 transition-all" type="text" />
                        </div>
                        <div className="relative">
                            <label className="block text-left text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 text-on-surface-variant">Professional Email</label>
                            <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-3 md:py-4 transition-all" type="email" />
                        </div>
                        <button className="w-full py-4 md:py-5 mt-8 md:mt-10 bg-primary text-white font-bold text-[10px] md:text-sm tracking-widest uppercase transition-all hover:bg-primary-container">
                            Request Advisory Consultation
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Advisory;
