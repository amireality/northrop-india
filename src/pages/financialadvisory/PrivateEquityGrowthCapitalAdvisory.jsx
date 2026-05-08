import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivateEquityGrowthCapitalAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#141414] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="max-w-[1440px] mx-auto px-[32px] md:px-[64px] pt-[80px]">
        {/* Hero Section */}
        <section className="grid grid-cols-12 gap-[24px] mb-[20px] items-center">
          <div className="col-span-12 lg:col-span-6 pr-8">
            <span className="font-sans text-[12px] text-[#747878] uppercase block mb-4 font-bold tracking-widest">FA-04 : Private Equity & Growth Capital Advisory</span>
            <h1 className="font-serif text-[48px] md:text-[64px] text-[#1b1c19] mb-8 font-bold leading-[1.1] tracking-tighter">
              You can raise capital. What you can't reverse is the terms you raise it on.
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-[#444748] max-w-2xl border-l-2 border-[#141414] pl-6 py-2 mb-8 leading-relaxed">
              Capital is a contract. Asymmetry compounds — unless you bring your own. We structure terms that protect optionality, defend valuation, and optimize investor fit.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-[#141414] text-[#ffffff] px-8 py-4 hover:bg-[#1c1b1b] transition-all font-sans text-[12px] font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-xl">
                Get the Whitepaper <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0">
            <div className="w-full aspect-[4/5] bg-[#f0eee9] relative overflow-hidden group border border-[#c4c7c7] shadow-2xl">
              <img
                alt="Modern high-end corporate skyscraper reflecting the morning sun."
                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700"
                src="/financialadvisory/private-equity.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Industry Failures Section */}
        <section className="mb-[20px] border-t border-[#141414]/10 pt-16">
          <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] mb-12 font-bold tracking-tight">Industry-Specific Fundraise Failures</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-y border-[#141414]/10 divide-y md:divide-y-0 md:divide-x divide-[#141414]/10">
            {[
              { title: "First-Time Fundraisers", desc: "Conceding critical control thresholds early, permanently altering governance." },
              { title: "Growth-Stage Founders", desc: "Over-optimizing for headline valuation at the expense of punishing liquidation preferences." },
              { title: "Family Businesses", desc: "Failing to ring-fence legacy assets when structuring external equity injections." },
              { title: "Buy-and-Build Platforms", desc: "Misaligned capital structures that choke subsequent bolt-on acquisition capacity." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 hover:bg-[#fbf9f4] hover:shadow-inner transition-all cursor-default group">
                <h3 className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] mb-4 font-bold leading-tight group-hover:text-[#000000]">{item.title}</h3>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Large Scale Strategic Imagery 1 */}
        <section className="mb-[20px]">
          <div className="w-full aspect-[21/9] bg-stone-200 overflow-hidden relative shadow-2xl border border-[#c4c7c7]">
            <img
              alt="Aerial view of a sprawling metropolitan business district."
              className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              src="/financialadvisory/private-equity1.png"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#000000]/10">
              <div className="max-w-2xl text-center px-8">
                <h2 className="text-[#ffffff] font-serif text-[32px] md:text-[40px] mb-4 font-bold tracking-tight">Capital is not an end. It is a catalyst for the next era of scale.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* What Northrop Delivers Section */}
        <section className="mb-[20px]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] sticky top-32 font-bold tracking-tight">What Northrop Delivers</h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-16 lg:pl-12">
              {[
                { num: "01", title: "Capital Strategy & Investor Mapping", desc: "Identifying not just capital, but the right capital. We map investor mandates against your specific strategic objectives, ensuring alignment beyond the balance sheet." },
                { num: "02", title: "Term Sheet Architecture", desc: "Proactive structuring of terms before engagement. We define the acceptable parameters for governance, economics, and exit rights to establish control early." },
                { num: "03", title: "Process Management", desc: "Orchestrating competitive tension through meticulously timed disclosures and parallel negotiations, maximizing leverage at crucial inflection points." },
                { num: "04", title: "Post-Close Operating Architecture", desc: "Translating the term sheet into functional board mechanics and reporting structures, ensuring operational sovereignty remains intact post-investment." }
              ].map((item, idx) => (
                <div key={idx} className="border-t-2 border-[#141414] pt-8 group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-sans text-[12px] text-[#747878] font-bold tracking-widest">{item.num}</span>
                    <h3 className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] font-bold group-hover:text-[#000000] transition-colors">{item.title}</h3>
                  </div>
                  <p className="font-sans text-[18px] md:text-[20px] text-[#444748] max-w-2xl leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="mb-[20px] bg-[#1c1b1b] text-[#ffffff] p-[64px] md:p-[80px] shadow-2xl">
          <h2 className="font-sans text-[12px] text-[#ffffff] mb-16 border-b border-[#ffffff]/20 pb-8 uppercase tracking-[0.3em] font-bold">Definitive Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {[
              { icon: "shield", label: "Valuation Defended" },
              { icon: "account_balance", label: "Control Preserved" },
              { icon: "gavel", label: "Term Sheet Discipline" },
              { icon: "handshake", label: "Investor Fit Optimised" },
              { icon: "trending_up", label: "Competitive Tension" },
              { icon: "exit_to_app", label: "Exit Optionality Protected" }
            ].map((outcome, idx) => (
              <div key={idx} className="group cursor-default">
                <span className="material-symbols-outlined text-[40px] mb-4 block text-[#c4c7c7] group-hover:text-[#ffffff] transition-colors">{outcome.icon}</span>
                <h4 className="font-serif text-[24px] md:text-[28px] mb-2 font-bold group-hover:translate-x-2 transition-transform duration-300">{outcome.label}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study Section */}
        <section className="mb-[20px]">
          <div className="grid grid-cols-12 gap-0 items-stretch shadow-2xl border border-[#c4c7c7]">
            <div className="col-span-12 lg:col-span-7 bg-[#141414] p-[48px] md:p-[80px] text-[#ffffff] flex flex-col justify-center">
              <span className="font-sans text-[12px] text-[#747878] uppercase block mb-4 font-bold tracking-widest">Strategic Transformation</span>
              <h2 className="font-serif text-[32px] md:text-[40px] mb-8 font-bold leading-tight">Defending Sovereignty for a Global FinTech Unicorn</h2>
              <p className="font-sans text-[18px] text-[#dbdad5] mb-10 max-w-xl leading-relaxed">
                A Series D fundraise threatened by aggressive liquidation preferences. We restructured the capital pool, introduced three parallel tier-1 investors, and maintained founder control while achieving a 40% valuation premium.
              </p>
              <div className="flex flex-wrap gap-12 border-t border-[#30312e] pt-8">
                <div>
                  <div className="text-[32px] font-serif mb-1 font-bold">$450M</div>
                  <div className="text-[10px] font-sans text-[#747878] font-bold uppercase tracking-widest">CAPITAL RAISED</div>
                </div>
                <div>
                  <div className="text-[32px] font-serif mb-1 font-bold">2.4x</div>
                  <div className="text-[10px] font-sans text-[#747878] font-bold uppercase tracking-widest">VALUE INCREASE</div>
                </div>
                <div>
                  <div className="text-[32px] font-serif mb-1 font-bold">0%</div>
                  <div className="text-[10px] font-sans text-[#747878] font-bold uppercase tracking-widest">CONTROL LOSS</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 h-full relative overflow-hidden group">
              <img
                alt="Sleek corporate board room with minimalist design."
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-[2000ms]"
                src="/financialadvisory/private-equity2.png"
              />
              <div className="absolute inset-0 bg-[#000000]/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
        </section>

        {/* Insights Grid Section */}
        <section className="mb-[20px] border-t border-[#141414]/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <div>
              <span className="font-sans text-[12px] text-[#747878] uppercase block mb-2 font-bold tracking-widest">Knowledge Capital</span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] font-bold tracking-tight">Strategic Insights</h2>
            </div>
            <Link to="/insights" className="text-[12px] font-sans border-b-2 border-[#141414] pb-1 hover:text-[#747878] transition-colors font-bold tracking-widest uppercase">VIEW ALL PUBLICATIONS</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              { category: "Market Analysis", title: "The Shift in LBO Debt Structures for 2024", desc: "Navigating the rising cost of capital in mid-market transactions and its impact on exit multiples.", img: "/financialadvisory/private-equity3.png" },
              { category: "Governance", title: "Redefining Minority Rights in Growth Capital", desc: "How founders are reclaiming board sovereignty through creative secondary market instruments.", img: "/financialadvisory/private-equity4.png" },
              { category: "Deal Flow", title: "Cross-Border PE Strategy in Emerging Markets", desc: "A structural analysis of currency risk mitigation in high-yield secondary equity offerings.", img: "/financialadvisory/private-equity5.png" },
              { category: "Whitepaper", title: "The Anatomy of a Term Sheet Restructuring", desc: "Detailed teardown of a successful pivot from predatory terms to institutional-grade equity.", img: "/financialadvisory/private-equity6.png" }
            ].map((insight, idx) => (
              <Link key={idx} to="/insights" className="group block cursor-pointer">
                <div className="aspect-[4/5] bg-[#f0eee9] mb-6 overflow-hidden border border-[#c4c7c7]">
                  <img
                    alt={insight.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    src={insight.img}
                  />
                </div>
                <span className="text-[10px] font-sans text-[#747878] tracking-[0.2em] uppercase mb-3 block font-bold">{insight.category}</span>
                <h3 className="font-serif text-[20px] md:text-[22px] mb-4 leading-tight group-hover:text-[#000000] transition-colors font-bold">{insight.title}</h3>
                <p className="text-[14px] text-[#444748] line-clamp-3 leading-relaxed">{insight.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="text-center py-[16px] border-y border-[#141414]/10 bg-[#fbf9f4] shadow-inner mb-[28px]">
          <h2 className="font-serif text-[48px] md:text-[64px] text-[#1b1c19] mb-8 max-w-4xl mx-auto font-bold leading-[1.1] tracking-tighter">Capital is a contract. Read it like one.</h2>
          <p className="font-sans text-[18px] md:text-[20px] text-[#444748] mb-12 max-w-xl mx-auto leading-relaxed italic">Start a confidential inquiry regarding your capital structure and strategic mandates.</p>
          <Link to="/contact" className="bg-[#141414] text-[#ffffff] px-12 py-6 hover:bg-[#1c1b1b] transition-colors border-2 border-[#141414] font-sans text-[13px] font-bold uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-2xl">
            Initiate Conversation <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default PrivateEquityGrowthCapitalAdvisory;