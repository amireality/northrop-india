import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CorporateGovernanceBoardAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen flex flex-col antialiased selection:bg-[#f0bf5f] selection:text-[#a77d22]">
      <main className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden bg-[#000000] text-[#ffffff]">
          <div className="absolute inset-0 z-0">
            <img
              alt="Premium Abstract Architecture"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
              src="/managmentcounsaltingimg/corporate-governance.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-[64px] py-[20px] flex flex-col md:flex-row gap-[24px] items-center">
            <div className="w-full md:w-3/5">
              <span className="font-sans text-[12px] text-[#f0bf5f] block mb-8 uppercase tracking-[0.3em] font-semibold">Practice Area: Corporate Governance</span>
              <h1 className="font-serif text-[48px] md:text-[64px] mb-8 leading-[1.05] font-semibold">
                Institutional Capital Demands Transparent Governance.
              </h1>
              <p className="font-sans text-[18px] text-[#e4e2dd] max-w-xl leading-relaxed mb-12">
                Governance is the operating system through which capital decides if you are investable. We architect board structures and compliance frameworks that withstand institutional scrutiny and regulatory pressure.
              </p>
              <div className="flex gap-6">
                <button className="bg-[#fbf9f4] text-[#000000] px-8 py-4 font-sans text-[12px] uppercase tracking-widest font-semibold hover:bg-[#e4e2dd] transition-all">
                  Download Framework
                </button>
              </div>
            </div>
            <div className="hidden md:block w-full md:w-2/5">
              <div className="aspect-[3/4] border border-white/20 p-4">
                <img
                  alt="Modern Boardroom Architecture"
                  className="w-full h-full object-cover grayscale contrast-125"
                  src="/managmentcounsaltingimg/corporate-governance1.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industry Failures Section */}
        <section className="w-full bg-[#f5f3ee] py-[128px] border-b border-[#747878]/10">
          <div className="max-w-[1200px] mx-auto px-[64px]">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] max-w-2xl font-semibold">
                Where Governance Fails at Scale
              </h2>
              <div className="h-[1px] flex-grow bg-[#747878]/20 mx-8 hidden md:block"></div>
              <span className="font-sans text-[12px] text-[#000000] uppercase tracking-[0.2em] whitespace-nowrap font-semibold">Structural Risk Vectors</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Failure 1 */}
              <div className="bg-[#fbf9f4] p-10 border border-[#747878]/10 hover:border-[#000000] transition-all duration-500 group">
                <span className="material-symbols-outlined text-3xl text-[#000000] mb-8">account_balance</span>
                <h3 className="font-serif text-[24px] md:text-[28px] mb-4 font-medium">Family-Owned Businesses</h3>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                  Informal decision-making structures that alienate outside capital and complicate generational succession planning.
                </p>
              </div>
              {/* Failure 2 */}
              <div className="bg-[#fbf9f4] p-10 border border-[#747878]/10 hover:border-[#000000] transition-all duration-500 group">
                <span className="material-symbols-outlined text-3xl text-[#000000] mb-8">rocket_launch</span>
                <h3 className="font-serif text-[24px] md:text-[28px] mb-4 font-medium">Founder-Led Startups</h3>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                  Lack of independent oversight post-Series C, leading to misaligned incentives between visionary founders and institutional investors.
                </p>
              </div>
              {/* Failure 3 */}
              <div className="bg-[#fbf9f4] p-10 border border-[#747878]/10 hover:border-[#000000] transition-all duration-500 group">
                <span className="material-symbols-outlined text-3xl text-[#000000] mb-8">gavel</span>
                <h3 className="font-serif text-[24px] md:text-[28px] mb-4 font-medium">NBFCs & Fintech</h3>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                  Inadequate risk architecture and regulatory non-compliance, inviting severe penalties and loss of market trust.
                </p>
              </div>
              {/* Failure 4 */}
              <div className="bg-[#fbf9f4] p-10 border border-[#747878]/10 hover:border-[#000000] transition-all duration-500 group">
                <span className="material-symbols-outlined text-3xl text-[#000000] mb-8">domain</span>
                <h3 className="font-serif text-[24px] md:text-[28px] mb-4 font-medium">Listed Mid-Caps</h3>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                  Stale board composition and opaque RPT practices that drag down valuation multiples and investor confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="w-full bg-white py-[128px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-[64px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden border border-[#000000]/10">
                  <img
                    alt="Strategic Collaboration"
                    className="w-full h-full "
                    src="/managmentcounsaltingimg/corporate-governance2.jpeg"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-[#000000] text-[#ffffff] p-12 max-w-xs hidden md:block">
                  <p className="font-serif text-[28px] mb-4 italic">"Turning Governance into Competitive Advantage."</p>
                  <p className="font-sans text-[12px] tracking-widest opacity-70 uppercase font-semibold">CEO, DIRECTOR, PRATHAM SHARMA</p>
                </div>
              </div>
              <div>
                <span className="font-sans text-[12px] text-[#000000] block mb-6 uppercase tracking-[0.3em] font-semibold">Selected Impact</span>
                <h2 className="font-serif text-[32px] md:text-[40px] mb-8 font-semibold">Restructuring for a $1.2B IPO</h2>
                <p className="font-sans text-[18px] text-[#444748] mb-8 leading-relaxed">
                  A family-led infrastructure giant required a complete governance overhaul to meet international listing standards and attract Tier-1 institutional investors.
                </p>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start border-l-2 border-[#000000] pl-6">
                    <div>
                      <h4 className="font-serif text-[18px] mb-1 font-medium">Board Curation</h4>
                      <p className="font-sans text-[16px] text-[#444748]">Replaced 4 internal directors with domain-expert independent chairs.</p>
                    </div>
                  </div>
                  <div className="flex items-start border-l-2 border-[#000000] pl-6">
                    <div>
                      <h4 className="font-serif text-[18px] mb-1 font-medium">Risk Protocols</h4>
                      <p className="font-sans text-[16px] text-[#444748]">Automated RPT tracking system across 12 subsidiary entities.</p>
                    </div>
                  </div>
                </div>
                <a className="inline-flex items-center text-[#000000] font-sans text-[12px] uppercase tracking-widest border-b border-[#000000] pb-2 hover:opacity-70 transition-all font-semibold" href="#">
                  Read Full Case Study
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Demographics */}
        <section className="w-full bg-[#f0eee9] py-[128px]">
          <div className="max-w-[1200px] mx-auto px-[64px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h3 className="font-serif text-[32px] md:text-[40px] mb-8 leading-tight font-semibold">Quantifiable Excellence</h3>
                <p className="font-sans text-[16px] text-[#444748] mb-8 leading-relaxed">
                  We don't just advise; we install the frameworks that protect enterprise value.
                </p>
                <div className="aspect-square border border-[#000000]/20 overflow-hidden">
                  <img
                    alt="Abstract Structure"
                    className="w-full h-full object-cover grayscale brightness-75"
                    src="/managmentcounsaltingimg/corporate-governance3.png"
                  />
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-8">
                <div className="bg-[#fbf9f4] p-12 border border-[#747878]/10">
                  <h3 className="font-serif text-[24px] text-[#1b1c19] mb-8 border-b border-[#747878]/10 pb-6 uppercase tracking-wider font-medium">Targeted Outcomes</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-[#000000] mr-4"></span>
                      <span className="font-sans text-[16px] text-[#444748] font-medium">Institutional-Grade Board Matrix</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-[#000000] mr-4"></span>
                      <span className="font-sans text-[16px] text-[#444748] font-medium">Elimination of RPT Conflict Risk</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-[#000000] mr-4"></span>
                      <span className="font-sans text-[16px] text-[#444748] font-medium">Audit-Ready Disclosure Frameworks</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-[#000000] mr-4"></span>
                      <span className="font-sans text-[16px] text-[#444748] font-medium">Investor Voting Rights Compliance</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-[#000000] mr-4"></span>
                      <span className="font-sans text-[16px] text-[#444748] font-medium">Regulatory Defensibility Shield</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-[#000000] mr-4"></span>
                      <span className="font-sans text-[16px] text-[#444748] font-medium">Founder-Board Executive Separation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#000000] text-[#ffffff] p-12">
                  <h3 className="font-serif text-[24px] text-[#ffffff] mb-8 border-b border-white/20 pb-6 uppercase tracking-wider font-medium">Consulting Fit</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-6 py-3 border border-white/30 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold">Pre-IPO Organizations</span>
                    <span className="px-6 py-3 border border-white/30 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold">Post-Series C Founders</span>
                    <span className="px-6 py-3 border border-white/30 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold">Family Offices</span>
                    <span className="px-6 py-3 border border-white/30 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold">Public Boards in Crisis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="w-full bg-[#fbf9f4] py-[128px]">
          <div className="max-w-[1200px] mx-auto px-[64px]">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="font-sans text-[12px] text-[#000000] block mb-4 uppercase tracking-[0.3em] font-semibold">Knowledge Hub</span>
                <h2 className="font-serif text-[32px] md:text-[40px] font-semibold">Strategic Insights</h2>
              </div>
              <a className="hidden md:flex items-center text-[#000000] font-sans text-[12px] uppercase tracking-widest border-b border-[#000000] pb-1 hover:opacity-70 font-semibold" href="#">
                View All Insights
                <span className="material-symbols-outlined ml-2 text-sm">east</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Insight Card 1 */}
              <article className="group cursor-pointer">
                <div className="aspect-video overflow-hidden mb-6 bg-[#eae8e3] border border-[#747878]/10">
                  <img
                    alt="Strategic insight"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    src="/managmentcounsaltingimg/corporate-governance4.png"
                  />
                </div>
                <p className="font-sans text-[10px] text-[#000000] mb-3 uppercase tracking-widest font-semibold">Board Governance • 8 Min Read</p>
                <h3 className="font-serif text-[18px] leading-snug group-hover:text-[#000000] transition-colors font-medium">The Efficacy Illusion: Why Independent Directors Fail to Protect Capital</h3>
              </article>
              {/* Insight Card 2 */}
              <article className="group cursor-pointer">
                <div className="aspect-video overflow-hidden mb-6 bg-[#eae8e3] border border-[#747878]/10">
                  <img
                    alt="Capital markets"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    src="/managmentcounsaltingimg/corporate-governance5.png"
                  />
                </div>
                <p className="font-sans text-[10px] text-[#000000] mb-3 uppercase tracking-widest font-semibold">Public Markets • 12 Min Read</p>
                <h3 className="font-serif text-[18px] leading-snug group-hover:text-[#000000] transition-colors font-medium">Governance as Valuation Alpha: A Multi-Market Study</h3>
              </article>
              {/* Insight Card 3 */}
              <article className="group cursor-pointer">
                <div className="aspect-video overflow-hidden mb-6 bg-[#eae8e3] border border-[#747878]/10">
                  <img
                    alt="Regulation"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    src="/managmentcounsaltingimg/corporate-governance6.png"
                  />
                </div>
                <p className="font-sans text-[10px] text-[#000000] mb-3 uppercase tracking-widest font-semibold">Compliance • 6 Min Read</p>
                <h3 className="font-serif text-[18px] leading-snug group-hover:text-[#000000] transition-colors font-medium">Navigating SEBI/LODR: A Framework for Emerging Corporates</h3>
              </article>
              {/* Insight Card 4 */}
              <article className="group cursor-pointer">
                <div className="aspect-video overflow-hidden mb-6 bg-[#eae8e3] border border-[#747878]/10">
                  <img
                    alt="Succession"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    src="/managmentcounsaltingimg/corporate-governance7.png"
                  />
                </div>
                <p className="font-sans text-[10px] text-[#000000] mb-3 uppercase tracking-widest font-semibold">Family Office • 15 Min Read</p>
                <h3 className="font-serif text-[18px] leading-snug group-hover:text-[#000000] transition-colors font-medium">The Succession Dilemma: Balancing Bloodline and Merit</h3>
              </article>
            </div>
          </div>
        </section>

        {/* Closing Conversation */}
        <section className="w-full bg-[#000000] text-[#ffffff] py-[40px] text-center px-[64px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              alt="Abstract Pattern"
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI86g_ocQlDPNYwUBcsVxp1_tBAaB8IDJzsH3q-t44dB4cX1RqUWT_5QoH_NzPAY7YhlWMp68TYu_A4UBy80p-zXcTjUOfr1nijheFEzuTeYEDFUXtKhB-jEgXiHHUHqBj_LkWNwHUDzKLZNJJhORz6Xq4LyLP8mdzo6HV875MalS7zpd-rj2jQvBMj2f_YMHIIAjgppfHdXGVdI9noSWCiOmeML29ahcPl9xSPxRnOb6xSg1w-093NvmWJjTmaCQ_fKWquJ2ljg"
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-serif text-[32px] md:text-[64px] mb-16 leading-tight italic font-semibold">
              "Governance is what investors price when they cannot price the future."
            </h2>
            <Link
              to="/contact"
              className="bg-[#fbf9f4] text-[#000000] px-12 py-6 font-sans text-[14px] md:text-[18px] uppercase tracking-widest font-bold hover:bg-[#e4e2dd] transition-all inline-flex items-center mx-auto"
            >
              Initiate Advisory Conversation
              <span className="material-symbols-outlined ml-4">arrow_right_alt</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CorporateGovernanceBoardAdvisory;