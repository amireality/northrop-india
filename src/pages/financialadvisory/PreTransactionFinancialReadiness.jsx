import  { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PreTransactionFinancialReadiness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-[32px] md:px-[64px] pt-[96px] pb-[128px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-9">
              <span className="font-sans text-[12px] text-[#000000] mb-6 block uppercase tracking-[0.3em] font-bold">Service / FA-03</span>
              <h1 className="font-serif text-[48px] md:text-[64px] text-[#1b1c19] mb-12 font-bold leading-[1.1] tracking-tighter">
                The deal you are about to enter will scrutinise three years you have already lived.
              </h1>
              <p className="font-sans text-[18px] md:text-[20px] text-[#444748] max-w-2xl border-l-4 border-[#000000] pl-8 py-2 leading-relaxed">
                Pre-transaction readiness is the difference between negotiating from a position of evidence and explanation. Prepare the architecture before the diligence begins.
              </p>
            </div>
          </div>
        </section>

        {/* Large Scale Imagery 1 */}
        <section className="w-full overflow-hidden bg-[#000000]">
          <div className="h-[70vh] w-full relative">
            <img
              alt="Strategic high-rise perspective"
              className="w-full h-full object-cover opacity-90 grayscale brightness-75 mix-blend-luminosity"
              src="/financialadvisory/pre-transaction.png"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000]/40"></div>
            <div className="absolute bottom-16 left-0 w-full px-[32px] md:px-[64px]">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-[#ffffff] max-w-lg">
                  <h2 className="font-serif text-[32px] md:text-[40px] mb-4 font-bold">Precision in Architecture</h2>
                  <p className="font-sans text-[16px] opacity-80 leading-relaxed">Institutional value is built on the transparency of historical data. We ensure your foundation is impenetrable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Failures */}
        <section className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-[24px] mb-24">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] leading-tight sticky top-32 font-bold">Industry-Specific Readiness Failures</h2>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-16 lg:pl-12">
              {[
                { title: "Pre Series C/D Startups", desc: "Rapid scaling often leaves financial infrastructure lagging. Lack of strict revenue recognition protocols and ad-hoc expense tracking create massive diligence hurdles." },
                { title: "Family Businesses", desc: "Commingled personal and business expenses, informal supplier agreements, and non-standard accounting practices erode perceived institutional value." },
                { title: "PE Exits", desc: "Failure to maintain a continuous state of readiness. Complex capital structures and unaddressed add-on integration issues stall processes." },
                { title: "Pre-IPO Issuers", desc: "Inadequate internal controls, lack of PCAOB-compliant audits, and immature forecasting capabilities invite immediate regulatory and underwriter scrutiny." }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="h-[2px] bg-[#000000] w-12 group-hover:w-full transition-all duration-500 mb-6"></div>
                  <h3 className="font-sans text-[12px] text-[#1b1c19] mb-4 uppercase tracking-[0.2em] font-bold">{item.title}</h3>
                  <p className="font-sans text-[16px] text-[#444748] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="bg-[#eae8e3] py-[128px] border-y border-[#000000]/10">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px]">
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-span-12 lg:col-span-7">
                <div className="aspect-[16/9] bg-[#000000] relative overflow-hidden group shadow-2xl border border-[#c4c7c7]">
                  <img
                    alt="Premium boardroom architectural detail"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700"
                    src="/financialadvisory/pre-transaction1.png"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:pl-16">
                <span className="font-sans text-[10px] text-[#000000] mb-6 block uppercase tracking-[0.4em] font-bold">Featured Case Study</span>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] mb-8 font-bold leading-tight">Restructuring the Narrative: A €200M Exit</h2>
                <p className="font-sans text-[18px] text-[#444748] mb-10 leading-relaxed italic">"How proactive financial realignment and defensive data room architecture secured a premium multiple and prevented a multi-million euro buyer retrade."</p>
                <Link to="/insights" className="flex items-center gap-4 group">
                  <span className="w-12 h-[1px] bg-[#000000] group-hover:w-20 transition-all duration-300"></span>
                  <span className="font-sans text-[12px] uppercase tracking-[0.2em] font-bold text-[#000000]">Read Case Study</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What Northrop Delivers */}
        <section className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] leading-tight font-bold">What Northrop Delivers</h2>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:pl-12">
              <div className="divide-y divide-[#000000]/20">
                {[
                  { num: "01 Diagnostic", label: "Diligence Readiness", desc: "A pre-emptive, highly critical review mirroring buy-side scrutiny to identify and quantify structural weaknesses before market exposure." },
                  { num: "02 Realignment", label: "Financial Restatement", desc: "Rigorous realignment of historical financials to comply strictly with target accounting standards, eliminating presentation discrepancies." },
                  { num: "03 Curation", label: "Data Room Architecture", desc: "Strategic curation and structuring of the virtual data room to tell a coherent, defensively sound financial narrative." },
                  { num: "04 Defense", label: "Negotiability Pack", desc: "Comprehensive, data-backed documentation designed specifically to rebuff buyer retrades and defend EBITDA adjustments." }
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 py-10 items-start group">
                    <div className="md:col-span-4">
                      <h3 className="font-sans text-[12px] text-[#000000] uppercase tracking-[0.2em] mb-2 font-bold">{item.num}</h3>
                      <p className="font-sans font-bold text-[#1b1c19] uppercase text-[13px]">{item.label}</p>
                    </div>
                    <div className="md:col-span-8 font-sans text-[16px] text-[#444748] leading-relaxed mt-4 md:mt-0">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Large Scale Imagery 2 */}
        <section className="w-full py-0">
          <div className="h-[60vh] w-full relative overflow-hidden">
            <img
              alt="Strategic documentation focus"
              className="w-full h-full object-cover grayscale contrast-125 brightness-90 border-y border-[#000000]/10"
              src="/financialadvisory/pre-transaction2.png"
            />
            <div className="absolute inset-0 bg-[#000000]/10"></div>
          </div>
        </section>

        {/* Quantifiable Outcomes Data Grid */}
        <section className="bg-[#000000] text-[#ffffff] py-[128px] px-[32px] md:px-[64px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#fbf9f4] font-bold">Quantifiable Outcomes</h2>
              <div className="w-full md:w-1/3 h-[1px] bg-[#fbf9f4]/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
              {[
                { val: "Eliminated", label: "Diligence Surprises" },
                { val: "Defended", label: "EBITDA Quality" },
                { val: "Normalised", label: "Working Capital" },
                { val: "Closed", label: "Restatement Risk" },
                { val: "Prevented", label: "Buyer Retrade" },
                { val: "Improved", label: "Deal Certainty" }
              ].map((outcome, idx) => (
                <div key={idx} className="group">
                  <div className="text-[48px] md:text-[56px] font-serif text-[#fbf9f4] mb-4 leading-none italic font-semibold group-hover:translate-x-2 transition-transform duration-300">{outcome.val}</div>
                  <div className="font-sans text-[12px] uppercase tracking-[0.3em] text-[#fbf9f4]/60 border-t border-[#fbf9f4]/20 pt-4 font-bold">{outcome.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Insights */}
        <section className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] font-bold">Related Insights</h2>
            <Link to="/insights" className="font-sans text-[12px] uppercase tracking-widest text-[#000000] border-b-2 border-[#000000] hover:text-[#444748] transition-colors font-bold pb-1">Explore All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              { category: "Strategy", title: "The 100-Day Pre-Diligence Countdown", img: "/financialadvisory/pre-transaction3.png" },
              { category: "Finance", title: "Navigating Complex EBITDA Adjustments", img: "/financialadvisory/pre-transaction4.png" },
              { category: "Market Exit", title: "Institutional Readiness in Mid-Cap Markets", img: "/financialadvisory/pre-transaction5.png" },
              { category: "Operations", title: "Building a Defensible Virtual Data Room", img: "/financialadvisory/pre-transaction6.png" }
            ].map((article, idx) => (
              <Link key={idx} to="/insights" className="group block cursor-pointer">
                <div className="aspect-[3/4] bg-[#f0eee9] mb-6 overflow-hidden border border-[#c4c7c7]">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-500"
                    src={article.img}
                  />
                </div>
                <span className="font-sans text-[10px] text-[#444748] mb-2 block uppercase tracking-[0.2em] font-bold">{article.category}</span>
                <h3 className="font-serif text-[18px] md:text-[20px] text-[#1b1c19] group-hover:text-[#000000] transition-colors leading-snug font-bold">{article.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto border-t border-[#000000]/20">
          <div className="grid grid-cols-12 gap-[24px] items-center">
            <div className="col-span-12 lg:col-span-6 pr-12">
              <h2 className="font-sans text-[12px] text-[#000000] mb-8 uppercase tracking-[0.3em] font-bold">Institutional Grade Advisory</h2>
              <h3 className="font-serif text-[28px] md:text-[32px] text-[#1b1c19] mb-8 leading-tight font-bold">
                The diligence you don't run on yourself, the buyer will run on you. With less generous adjustments.
              </h3>
            </div>
            <div className="col-span-12 lg:col-span-6 flex justify-end">
              <Link to="/contact" className="bg-[#000000] text-[#ffffff] border-2 border-[#000000] px-12 py-5 font-sans text-[12px] uppercase hover:bg-transparent hover:text-[#000000] transition-all duration-300 tracking-[0.2em] font-bold shadow-xl hover:shadow-none text-center min-w-[280px]">
                Schedule Diagnostic
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PreTransactionFinancialReadiness;