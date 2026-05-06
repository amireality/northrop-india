import  { useEffect } from 'react';
import { Link } from 'react-router-dom';

const InvestorRelationsEquityPositioning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="flex-grow">
        {/* Header Section */}
        <header className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] pt-[160px] pb-[80px] relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#000000]/[0.03] -z-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-11">
              <p className="font-sans text-[12px] text-[#444748] mb-8 uppercase tracking-[0.3em] font-bold">FA-02 — INVESTOR RELATIONS & EQUITY POSITIONING</p>
              <h1 className="font-serif text-[48px] md:text-[72px] text-[#1b1c19] mb-10 max-w-[1000px] leading-[1.05] tracking-tighter font-bold">
                Bridge the gap between institutional intrinsic value and market price.
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-12">
                <p className="font-sans text-[18px] md:text-[20px] text-[#444748] max-w-[540px] leading-relaxed">
                  Investor relations is not a function of reporting; it is the strategic architecture by which a company's equity story is built, defended, and re-priced in the global capital markets.
                </p>
                <div className="h-px md:h-20 w-20 md:w-px bg-[#747878]/20"></div>
                <div className="flex items-center gap-4">
                  <span className="text-[32px] md:text-[40px] font-serif italic text-[#000000]/10">01</span>
                  <span className="font-sans text-[10px] tracking-widest text-[#444748] uppercase font-bold">Strategic Advisory<br/>Framework v4.2</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Primary Large Image Section */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 mb-[20px]">
          <div className="w-full aspect-[21/9] relative overflow-hidden group shadow-2xl border border-[#c4c7c7]">
            <img
              alt="Strategic Corporate Perspective"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHO_uNzx-Oa5DNmazSY2MJH4tSFSHwOyhsV60XWmjlY0Jw0WJdWbWSvfAHacBDJU3t1OoxlLI82N91tQRuAQtPWt-1d4OWT-jrauTV2480fG17Y7PylE7F_f8bcxBQy3HECfWCvMCtYCCGqYZJfnBk9OGiinMHdEVsg8d11Oist_URystMkppF0meJluBMBZk7Jw88lE6NsMRHYlsfns4LfPsWNFp7W5Fle6jjIuX2s943hUJuIvVP756cD2ehwGWOkH0P2lHTLQ"
            />
            <div className="absolute inset-0 bg-[#000000]/10"></div>
            <div className="absolute bottom-12 left-12 bg-[#ffffff] p-8 max-w-md hidden lg:block border border-[#747878]/10 shadow-xl">
              <p className="font-sans text-[10px] tracking-widest text-[#444748] mb-2 font-bold uppercase">OPERATIONAL INSIGHT</p>
              <p className="font-serif text-[18px] leading-snug font-medium italic">"The most effective IR strategies don't just communicate value—they create the structural conditions for it to be recognized."</p>
            </div>
          </div>
        </section>

        {/* Industry-Specific IR Failures */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] mb-[20px]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 md:col-span-4 sticky top-32 h-fit">
              <h2 className="font-serif text-[28px] text-[#1b1c19] mb-4 font-bold">Structural Challenges</h2>
              <p className="font-sans text-[16px] text-[#444748] mb-8 max-w-[280px] leading-relaxed">Identifying the specific friction points that prevent full market valuation across distinct corporate profiles.</p>
              <div className="w-12 h-0.5 bg-[#000000]"></div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 lg:pl-12">
                {[
                  { title: "Mid-Cap Momentum", desc: "Struggling to maintain post-IPO narrative custody as original anchor investors seek liquidity without a clear secondary story for institutional long-only funds." },
                  { title: "Family Governance", desc: "Institutional skepticism regarding informal communication. We formalize disclosure architecture to systematically close the \"governance discount.\"" },
                  { title: "Pre-IPO Readiness", desc: "Establishing the rigorous disclosure standards required to support premium valuation from Tier-1 institutional buyers prior to market debut." },
                  { title: "Sponsor Transitions", desc: "Decoupling the equity story from the PE sponsor exit timeline to articulate a sustainable, independent long-term growth narrative." }
                ].map((item, idx) => (
                  <div key={idx} className="border-l border-[#000000]/10 pl-8">
                    <h3 className="font-sans text-[12px] text-[#1b1c19] mb-4 uppercase tracking-widest font-bold">{item.title}</h3>
                    <p className="font-sans text-[16px] text-[#444748] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="bg-[#eae8e3] py-[128px] mb-[20px] overflow-hidden border-y border-[#c4c7c7]/30">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px]">
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
                <p className="font-sans text-[12px] text-[#444748] mb-6 uppercase tracking-widest font-bold">SELECTED ENGAGEMENT</p>
                <h2 className="font-serif text-[40px] md:text-[48px] text-[#1b1c19] mb-8 leading-tight font-bold">Closing the 35% Valuation Gap for a Global Tech Leader.</h2>
                <div className="space-y-8 mb-12">
                  <div className="flex gap-12">
                    <div>
                      <p className="text-[32px] md:text-[40px] font-serif text-[#000000] font-bold">35%</p>
                      <p className="text-[10px] font-sans uppercase tracking-widest text-[#444748] font-bold">Valuation Re-rating</p>
                    </div>
                    <div>
                      <p className="text-[32px] md:text-[40px] font-serif text-[#000000] font-bold">14</p>
                      <p className="text-[10px] font-sans uppercase tracking-widest text-[#444748] font-bold">New Tier-1 Funds</p>
                    </div>
                  </div>
                  <p className="text-[#444748] font-sans text-[17px] leading-relaxed">By restructuring their quarterly narrative and pre-empting analyst friction points, we helped a multi-billion dollar enterprise transition from a 'value trap' to a 'growth' re-rating within 18 months.</p>
                </div>
                <Link to="/contact" className="inline-block border-b-2 border-[#000000] pb-1 font-sans text-[11px] tracking-widest uppercase font-bold hover:text-[#000000]/70 transition-colors">EXPLORE CASE STUDY →</Link>
              </div>
              <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                <div className="relative group shadow-2xl">
                  <div className="absolute -inset-4 border border-[#000000]/10 -z-10 group-hover:inset-0 transition-all duration-700"></div>
                  <img
                    alt="Executive Meeting"
                    className="w-full grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000 border border-[#c4c7c7]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBujC9dNFj8kXYgkyiCD5Cqx0MlJ3cdHtTFfj2xeeV6Uu1jeTjeTeX15LKFz6I64nd9zHB-lAEpjgPDWV6vwJewX95rVTP2iKgSYsHOk5ymxSnKdtAlzUQMGX930Tl1x5QJzsQghMFhuBvWoQ4jvMPHLaQNrVQEX0Mw5XC7erFJNRnQ_WPUSD8fprs2dVVZWofojMQKjWlceyYDc_CWUBOK9O0BeNTRaUbWRLitZC2rphDXrnqN82oln72hzAis4pfgSVSsXwRDoQ"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Deliverables */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] mb-[20px]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-10">
              <h2 className="font-serif text-[32px] md:text-[48px] text-[#1b1c19] mb-20 max-w-3xl font-bold">Strategic Deliverables</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 lg:pr-12">
                {[
                  { icon: "architecture", title: "Equity Story Architecture", desc: "We construct the definitive, defensible narrative that anchors institutional understanding and establishes the relevant peer-group valuation metrics." },
                  { icon: "analytics", title: "Disclosure Optimization", desc: "Designing rigorous reporting frameworks that proactively guide analyst consensus and reduce market volatility through transparency." },
                  { icon: "track_changes", title: "Institutional Targeting", desc: "Precision identification of long-only capital alignment. We don't just find investors; we find the right partners for your specific capital structure." },
                  { icon: "gavel", title: "Governance Advocacy", desc: "Institutional-grade governance advisory to build long-term trust and ensure the board's strategic vision is accurately priced." }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="w-full h-px bg-[#747878]/20 mb-8 group-hover:bg-[#000000] transition-colors duration-500"></div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-sans text-[12px] text-[#1b1c19] uppercase tracking-widest font-bold">{item.title}</h3>
                      <span className="material-symbols-outlined text-[#747878]/30 group-hover:text-[#000000] transition-colors text-[24px]">{item.icon}</span>
                    </div>
                    <p className="font-sans text-[16px] text-[#444748] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Insights */}
        <section className="bg-[#fbf9f4] py-[128px] border-t border-[#747878]/10">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                <p className="font-sans text-[10px] text-[#444748] mb-4 uppercase tracking-[0.2em] font-bold">KNOWLEDGE CENTER</p>
                <h2 className="font-serif text-[28px] text-[#1b1c19] font-bold">Related Insights</h2>
              </div>
              <Link to="/insights" className="hidden md:block border-2 border-[#000000] px-8 py-3 font-sans text-[10px] tracking-widest uppercase hover:bg-[#000000] hover:text-[#ffffff] transition-all font-bold">VIEW ALL ARTICLES</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { category: "White Paper • 12 Min Read", title: "The Illiquidity Discount: Why Mid-Caps Underperform in Volatile Markets.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV45zrZMPTu0Sa1e5QdSe688FSyiCKg1oSg2b1vpwYUwzwpBa0-AsCOgh2RoMqTDEgjeTZ1jDpSy-50q7X-u4pshZ0CSem56hX3w30H4kzIhROt94PsSXHhvVqaq6503M_31ED9cNgm2R2kndqsdgRdpafMZPNx2-Vyk7ag4fH3I6DxEYAH6x0e_aAX-EX6Lr9DKF3YT1PrZpPFPvTzBRsUPRLpWaYTV950rdd7-aDceyk7YIzkTyoF5gqn7Hjx5GDzbvmSzr2kg" },
                { category: "Market Analysis • 8 Min Read", title: "Navigating ESG Disclosures: Beyond Compliance to Valuation Alpha.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgS8TvlQhknsZ3pYtShlMqnXc32H9w23b9RBBN3DzDJrEV3IQNHLzrFC5Zb3uOuifCegLskrJLBhXMMmaApn57uYE4KhnbpR6me2UfA_QwOF3UbE5kwy6K01r7YRha1AQZmbb25HsAT26ATbN0DyHZ-G4dK5aTAP0pFgFmWgwLL_FZFr8rkmkXjBdB8YAdbBqqi7KCN4atZTLqAQ8JjQWpto8x6XJb8omjjDcOXrxXqxPfVgHGrZIlsfqIV2xGbhanlO7XKpe6zw" },
                { category: "Strategy • 15 Min Read", title: "The Board's Role in Investor Relations: Bridging the Governance Gap.", img: "/financialadvisory/boardroleinverster.png" },
                { category: "Global Outlook • 10 Min Read", title: "Capital Allocation Frameworks: Communicating Long-Term Value.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNCNoHsuEzdtazaPo55ytotVMq-EnqMMSD9xvpQO0moyjXSth9uRNDjChSrL5zdAHgvW5Mgdxu0KNPwdS8sR8Zi014XVHAP3auk2NEZ3hkYTcdlcx7254Q_7sM2PPQMA7Izr_KwJkOlpRV5cnwgGs4Za4TSgu4dUGBofeVbXCZ_FZ8SRwUZ2uGsz7SU1kfYOTst8rCkXynUz7QbVCnX6SioPttnYlknFU5JA9nzEgzB1NxVXV9HbAtmDdm9DU7YblX-zehbYPZKw" }
              ].map((article, idx) => (
                <Link key={idx} to="/insights" className="group block cursor-pointer">
                  <div className="aspect-square mb-6 overflow-hidden bg-[#f0eee9] border border-[#c4c7c7]">
                    <img
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      src={article.img}
                    />
                  </div>
                  <p className="text-[10px] font-sans text-[#444748] uppercase tracking-widest mb-3 font-bold">{article.category}</p>
                  <h4 className="font-serif text-[18px] leading-snug group-hover:text-[#000000] transition-colors mb-4 font-bold">{article.title}</h4>
                  <div className="flex items-center gap-2 text-[#000000] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold uppercase tracking-widest">READ</span>
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#000000] text-[#ffffff] py-[128px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] relative z-10 text-center">
            <h2 className="font-serif text-[32px] md:text-[48px] mb-12 max-w-4xl mx-auto leading-tight font-bold">Elevate your equity positioning to match your intrinsic performance.</h2>
            <Link to="/contact" className="inline-block bg-[#ffffff] text-[#000000] px-12 py-5 font-sans text-[12px] tracking-[0.25em] uppercase hover:bg-[#eae8e3] transition-colors font-bold shadow-2xl">INITIATE CONSULTATION</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InvestorRelationsEquityPositioning;