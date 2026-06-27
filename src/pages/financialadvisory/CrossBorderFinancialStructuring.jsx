import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CrossBorderFinancialStructuring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#1c1b1b] selection:text-[#ffffff]">
      <main className="max-w-[1440px] mx-auto px-[32px] md:px-[64px]">
        {/* Hero Section */}
        <header className="pt-[64px] pb-[64px] grid grid-cols-12 gap-[24px]">
          <div className="col-span-12 lg:col-span-10">
            <p className="font-sans text-[12px] text-[#444748] mb-8 uppercase tracking-[0.2em] flex items-center gap-4 font-bold">
              <span className="w-8 h-px bg-[#000000]"></span> Service: FA-07
            </p>
            <h1 className="font-serif text-[48px] md:text-[72px] text-[#000000] mb-12 font-bold leading-[1.05] tracking-tighter">
              Your structure was built for yesterday's tax regime, yesterday's investors, and yesterday's regulator.
            </h1>
            <p className="font-sans text-[20px] text-[#444748] max-w-2xl border-l border-[#000000]/30 pl-8 py-2 leading-relaxed">
              The structure that protected you yesterday is the one that exposes you today. Institutional-grade reconfiguration for a new era of global compliance.
            </p>
          </div>
        </header>

        {/* High-End Hero Image */}
        <div className="w-full h-[70vh] mb-[20px] overflow-hidden border border-[#c4c7c7] shadow-2xl">
          <img
            alt="Strategic architectural perspective"
            className="w-full h-full object-cover grayscale brightness-90 hover:scale-105 transition-transform duration-[2000ms]"
            src="/financialadvisory/cross-border.png"
          />
        </div>

        {/* Industry Failures Section */}
        <section className="py-[20px] border-t border-[#747878]/20">
          <div className="grid grid-cols-12 gap-[24px] mb-20">
            <div className="col-span-12 md:col-span-6">
              <h2 className="font-serif text-[32px] md:text-[44px] text-[#000000] font-bold tracking-tight">Industry-Specific Structure Failures</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#000000]/10">
            {[
              { icon: "account_balance", title: "Indian Promoter Holdcos Abroad", desc: "Addressing the vulnerability of legacy offshore holding structures." },
              { icon: "business", title: "Foreign-Invested Subsidiaries", desc: "Mitigating PE risk and management-and-control challenges." },
              { icon: "public", title: "Diaspora Founders", desc: "Optimizing personal and corporate tax residency across jurisdictions." },
              { icon: "language", title: "ODI / FDI Heavy Groups", desc: "Navigating the complexities of round-tripping and capital flows." }
            ].map((item, idx) => (
              <div key={idx} className="border-b border-r border-[#000000]/10 p-12 hover:bg-[#f5f3ee] transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-inner">
                <span className="material-symbols-outlined text-[32px] mb-8 text-[#000000] group-hover:translate-x-2 transition-transform">{item.icon}</span>
                <h3 className="font-serif text-[24px] md:text-[28px] mb-4 font-bold leading-tight">{item.title}</h3>
                <p className="font-sans text-[14px] text-[#444748] opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-[20px] bg-[#ffffff] -mx-[32px] md:-mx-[64px] px-[32px] md:px-[64px] border-y border-[#c4c7c7]/30 shadow-inner">
          <div className="grid grid-cols-12 gap-[24px] items-center">
            <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0">
              <div className="aspect-[4/5] overflow-hidden shadow-2xl border border-[#c4c7c7]">
                <img
                  alt="Corporate boardroom detail"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-[3000ms]"
                  src="/financialadvisory/cross-border1.png"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <span className="font-sans text-[12px] text-[#444748] mb-6 uppercase tracking-[0.2em] block font-bold">Case Study</span>
              <h2 className="font-serif text-[32px] md:text-[44px] text-[#000000] mb-8 font-bold leading-tight">Restructuring a $4B Tech Conglomerate for Public Listing</h2>
              <p className="font-sans text-[18px] md:text-[20px] text-[#444748] mb-10 leading-relaxed italic">
                We led the cross-border re-architecture of a major Southeast Asian group, unifying 14 disparate entities into a single, audit-ready structure that secured a successful Nasdaq debut within 18 months.
              </p>
              <div className="space-y-8 border-l-2 border-[#000000] pl-8 mb-12">
                <div>
                  <span className="font-sans text-[10px] text-[#444748] uppercase tracking-widest block mb-1 font-bold">Impact</span>
                  <p className="font-serif text-[24px] md:text-[28px] text-[#000000] font-bold">$120M annual tax efficiency gain</p>
                </div>
                <div>
                  <span className="font-sans text-[10px] text-[#444748] uppercase tracking-widest block mb-1 font-bold">Compliance</span>
                  <p className="font-serif text-[24px] md:text-[28px] text-[#000000] font-bold">Zero findings in Big 4 due diligence</p>
                </div>
              </div>
              <Link to="/insights" className="inline-flex items-center gap-4 font-sans text-[12px] uppercase tracking-widest group font-bold border-b-2 border-[#000000] pb-2 hover:text-[#444748] hover:border-[#444748] transition-all">
                View Full Transformation <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform text-[18px]">arrow_right_alt</span>
              </Link>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-[20px] border-b border-[#000000]/10">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-serif text-[32px] md:text-[44px] text-[#000000] sticky top-32 leading-tight font-bold tracking-tight">Expert Delivery</h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="space-y-0 border-l border-[#000000]/10">
                {[
                  { title: "Cross-Border Structure Diagnostic", desc: "Rigorous assessment of existing international frameworks to identify exposure points against current regulatory landscapes including Pillar Two and local GAAR rules." },
                  { title: "Structure Re-architecture", desc: "Designing resilient, optimized entity structures that align with contemporary global compliance standards while maximizing operational agility." },
                  { title: "Inter-Company & TP Architecture", desc: "Establishing defensible transfer pricing methodologies and robust inter-company agreements that withstand intense regulatory scrutiny." },
                  { title: "Migration & Transition Plan", desc: "Phased, risk-mitigated execution roadmaps for transitioning from legacy structures to optimal configurations without operational disruption." }
                ].map((item, idx) => (
                  <div key={idx} className="p-12 border-b border-[#000000]/10 hover:bg-[#f5f3ee] transition-all duration-300 group shadow-sm last:border-b-0">
                    <h3 className="font-serif text-[#000000] mb-6 text-[24px] md:text-[28px] font-bold tracking-tight">{item.title}</h3>
                    <p className="font-sans text-[16px] md:text-[18px] text-[#444748] max-w-2xl leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Insights Grid */}
        <section className="py-[20px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h2 className="font-serif text-[32px] md:text-[44px] text-[#000000] font-bold tracking-tight">Global Insights</h2>
            <Link to="/insights" className="font-sans text-[12px] uppercase tracking-widest text-[#000000] border-b-2 border-[#000000] pb-1 hover:text-[#444748] hover:border-[#444748] transition-all font-bold">View All Research</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              { cat: "Regulatory Briefing", title: "Navigating the Global Minimum Tax: Restructuring for Pillar Two", desc: "How shifting OECD frameworks are forcing MNEs to evaluate substance over form.", img: "/financialadvisory/cross-border2.png" },
              { cat: "Strategy", title: "The Rise of the Virtual HQ: Substance Challenges in 2026", desc: "Redefining corporate residency in an age of distributed executive leadership.", img: "/financialadvisory/cross-border3.png" },
              { cat: "M&A Outlook", title: "Pre-IPO Structuring: Cleaning the Legacy for Public Markets", desc: "Critical steps for private equity backed firms prior to exit liquidity events.", img: "/financialadvisory/cross-border4.png" },
              { cat: "Regional Focus", title: "The Singapore-India Corridor: Evolving Treaty Protections", desc: "A deep dive into the latest protocols and LOB clause interpretations.", img: "/financialadvisory/cross-border5.png" }
            ].map((article, idx) => (
              <Link key={idx} to="/insights" className="group block cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-6 border border-[#c4c7c7] shadow-sm">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                    src={article.img}
                  />
                </div>
                <span className="font-sans text-[10px] text-[#444748] uppercase tracking-widest block mb-3 font-bold">{article.cat}</span>
                <h3 className="font-serif text-[20px] md:text-[22px] mb-4 group-hover:text-[#000000]/70 transition-colors font-bold leading-tight">{article.title}</h3>
                <p className="font-sans text-[14px] text-[#444748] line-clamp-3 leading-relaxed">{article.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Secondary Large Imagery */}
        <div className="w-full h-[50vh] mb-[20px] overflow-hidden grayscale border-y border-[#c4c7c7] shadow-2xl">
          <img
            alt="Institutional architectural detail"
            className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-[4000ms]"
            src="/financialadvisory/cross-border6.png"
          />
        </div>

        {/* Closing CTA Section */}
        <section className="py-[20px] text-center border-t border-[#000000]/10 mb-[20px] shadow-sm">
          <h2 className="font-serif text-[48px] md:text-[72px] text-[#000000] mb-8 font-bold tracking-tighter leading-[1.05] max-w-5xl mx-auto">
            Yesterday's structure is today's contingency. Eventually, tomorrow's settlement.
          </h2>
          <p className="font-sans text-[18px] md:text-[20px] text-[#444748] mb-12 max-w-xl mx-auto italic">Start a confidential structural audit to identify your global exposure points.</p>
          <Link to="/contact" className="bg-[#000000] text-[#ffffff] px-12 py-6 hover:bg-[#1c1b1b] transition-all font-sans text-[13px] font-bold uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-2xl">
            Request Structure Review <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default CrossBorderFinancialStructuring;