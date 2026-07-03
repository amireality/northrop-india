import  { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WorkingCapitalLiquidityOptimization = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full pt-[20px] pb-[20px] px-[32px] md:px-[64px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 md:col-span-10">
              <p className="font-sans text-[12px] text-[#444748] mb-6 uppercase tracking-[0.2em] font-bold">FA-05 • Working Capital</p>
              <h1 className="font-serif text-[48px] md:text-[64px] text-[#000000] mb-12 leading-[1.1] font-bold tracking-tighter">
                Your P&L looks healthy.<br/>Your cash conversion cycle disagrees.
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[24px] items-start">
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="border-t-2 border-[#000000] pt-8">
                <p className="font-sans text-[18px] md:text-[20px] text-[#000000] font-bold mb-6 italic leading-relaxed">
                  Profit is opinion. Cash is fact. Working capital is the trigger for failure.
                </p>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                  A business can show robust profitability on paper while slowly suffocating from an inefficient cash conversion cycle. When cash is trapped in inventory, delayed receivables, or misaligned payables, the operational foundation becomes brittle. We optimize the physical flow of cash to ensure liquidity matches operational ambition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Large Scale Strategic Imagery 1 */}
        <section className="w-full mb-[20px]">
          <div className="w-full h-[700px] relative overflow-hidden shadow-2xl border-y border-[#c4c7c7]">
            <img
              alt="High-end corporate architectural landscape"
              className="w-full h-full "
              src="/financialadvisory/working-capital0.jpeg"
            />
     
            <div className="absolute bottom-16 left-[32px] md:left-[64px] z-10 text-[#ffffff] max-w-xl">
              <p className="font-sans text-[12px] uppercase tracking-widest mb-4 opacity-80 font-bold">Institutional Perspective</p>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold tracking-tight">Structural efficiency is the prerequisite for sustained liquidity.</h2>
            </div>
          </div>
        </section>

        {/* Industry Failures */}
        <section className="w-full py-[20px] px-[32px] md:px-[64px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-[24px] mb-16">
            <div className="col-span-12 md:col-span-6">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] border-l-4 border-[#000000] pl-8 font-bold leading-tight">Industry-Specific<br/>Working Capital Failures</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              { industry: "Manufacturing", desc: "Trapped capital in slow-moving inventory and misaligned procurement terms that drain operational cash reserves." },
              { industry: "Real Estate", desc: "Liquidity bottlenecks caused by delayed milestone payments, extended project lifecycles, and rigid debt servicing requirements." },
              { industry: "B2B Services", desc: "Bloated Days Sales Outstanding (DSO) and lack of stringent receivables enforcement leading to artificial cash constraints." },
              { industry: "Consumer & Retail", desc: "Supply chain financing inefficiencies and erratic inventory forecasting that tie up critical working capital during peak seasons." }
            ].map((item, idx) => (
              <div key={idx} className="border border-[#c4c7c7]/30 p-10 hover:shadow-2xl hover:border-[#000000]/50 transition-all duration-300 bg-[#ffffff] group shadow-sm">
                <h3 className="font-sans text-[12px] text-[#000000] uppercase mb-6 border-b border-[#c4c7c7]/30 pb-4 group-hover:border-[#000000] transition-colors font-bold tracking-widest">{item.industry}</h3>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dedicated Case Study Section */}
        <section className="w-full py-[20px] px-[32px] md:px-[64px] bg-[#000000] text-[#ffffff] border-y border-[#30312e]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-[24px] items-center">
            <div className="col-span-12 md:col-span-5">
              <p className="font-sans text-[12px] text-[#ffdea5] mb-6 uppercase tracking-widest font-bold">Global Case Study</p>
              <h2 className="font-serif text-[32px] md:text-[40px] mb-8 leading-tight font-bold">Unlocking $145M in Trapped Liquidity</h2>
              <p className="font-sans text-[18px] md:text-[20px] text-[#c8c6c5] mb-8 leading-relaxed">
                How a Tier-1 industrial manufacturer re-engineered its global receivables process to achieve a 22-day reduction in DSO within two fiscal quarters.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-[32px] md:text-[40px] font-serif mb-1 font-bold">22 Days</p>
                  <p className="font-sans text-[10px] opacity-70 font-bold tracking-widest">DSO REDUCTION</p>
                </div>
                <div>
                  <p className="text-[32px] md:text-[40px] font-serif mb-1 font-bold">18%</p>
                  <p className="font-sans text-[10px] opacity-70 font-bold tracking-widest">OPEX IMPROVEMENT</p>
                </div>
              </div>
              <Link to="/insights" className="inline-flex items-center group font-sans text-[12px] uppercase tracking-wider border-b border-[#ffffff] pb-2 hover:text-[#ffdea5] hover:border-[#ffdea5] transition-all font-bold">
                View Transformation Narrative
                <span className="material-symbols-outlined ml-2 text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="aspect-[4/3] relative overflow-hidden shadow-2xl ">
                <img
                  alt="Strategic analysis visualization"
                  className="w-full h-full object-cover "
                  src="/financialadvisory/working-capital1.jpeg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables & Outcomes */}
        <section className="w-full py-[20px] px-[32px] md:px-[64px] bg-[#f5f3ee] border-y border-[#c4c7c7]/30">
          <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 md:col-span-5">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-12 font-bold tracking-tight">Service Delivery Framework</h2>
              <ul className="space-y-8 lg:pr-12">
                {[
                  { title: "Cash Conversion Diagnostic", desc: "Rigorous analysis of the entire cash lifecycle to identify trapped liquidity through proprietary benchmarking." },
                  { title: "Working Capital Optimisation", desc: "Strategic recalibration of payables, receivables, and inventory management tailored to industry cycles." },
                  { title: "Liquidity & Treasury Architecture", desc: "Structuring robust treasury frameworks for resilient cash positioning and optimized capital allocation." },
                  { title: "Cash Flow Forecasting", desc: "High-fidelity predictive modeling to ensure future operational liquidity under varied stress scenarios." }
                ].map((item, idx) => (
                  <li key={idx} className="border-b border-[#c4c7c7]/30 pb-6 group">
                    <h4 className="font-sans text-[12px] text-[#000000] uppercase mb-2 group-hover:text-[#000000] transition-colors font-bold tracking-widest">{item.title}</h4>
                    <p className="font-sans text-[16px] text-[#444748] leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 mt-16 md:mt-0">
              <div className="bg-[#ffffff] border border-[#c4c7c7]/30 p-16 shadow-2xl">
                <h2 className="font-serif text-[28px] text-[#000000] mb-10 border-b-2 border-[#000000] pb-4 font-bold tracking-tight">Performance Benchmarks</h2>
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <span className="font-serif text-[32px] md:text-[40px] text-[#000000] block mb-2 font-bold">15–30%</span>
                    <span className="font-sans text-[11px] text-[#444748] uppercase tracking-widest font-bold">Released Capital</span>
                  </div>
                  <div>
                    <span className="font-serif text-[32px] md:text-[40px] text-[#000000] block mb-2 font-bold">&gt;90%</span>
                    <span className="font-sans text-[11px] text-[#444748] uppercase tracking-widest font-bold">Forecast Accuracy</span>
                  </div>
                  <div className="col-span-2 mt-6 space-y-5">
                    {[
                      "Optimized Cash Conversion",
                      "Institutional Treasury Scale",
                      "Maximized Liquidity Resilience",
                      "Enhanced Stakeholder Confidence"
                    ].map((point, idx) => (
                      <p key={idx} className="font-sans text-[12px] text-[#000000] uppercase border-l-2 border-[#000000] pl-6 py-1 font-bold tracking-widest">{point}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="w-full py-[20px] px-[32px] md:px-[64px] bg-[#fbf9f4]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] font-bold tracking-tight">Strategic Insights</h2>
              <Link to="/insights" className="font-sans text-[12px] uppercase tracking-widest border-b-2 border-[#000000] pb-1 hover:text-[#444748] transition-colors font-bold pb-1">View All Perspectives</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {[
                { category: "Finance • Q4 2026", title: "The Future of Liquidity in a High-Rate Environment", img: "/financialadvisory/working-capital2.png" },
                { category: "Governance • Q3 2026", title: "Boardroom Priorities: Beyond the Balance Sheet", img: "/financialadvisory/working-capital3.png" },
                { category: "Operations • Q3 2026", title: "Supply Chain Resilience as a Financial Lever", img: "/financialadvisory/working-capital4.png" },
                { category: "Technology • Q2 2026", title: "AI-Driven Cash Forecasting: The New Standard", img: "/financialadvisory/working-capital5.png" }
              ].map((article, idx) => (
                <Link key={idx} to="/insights" className="group block cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden mb-6 bg-[#f0eee9] border border-[#c4c7c7] shadow-sm">
                    <img
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                      src={article.img}
                    />
                  </div>
                  <p className="font-sans text-[10px] text-[#444748] uppercase tracking-widest mb-3 font-bold">{article.category}</p>
                  <h3 className="font-serif text-[18px] md:text-[20px] text-[#000000] group-hover:underline transition-all font-bold leading-tight">{article.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Large Scale Strategic Imagery 2 */}
        <section className="w-full mb-[20px]">
          <div className="w-full h-[600px] relative overflow-hidden consulting-img-overlay shadow-2xl ">
            <img
              alt="Abstract business strategy visualization"
              className="w-full h-full object-cover"
              src="/financialadvisory/working-capital6.jpeg"
            />
          </div>
        </section>

        {/* Closing Conversation & Target */}
        <section className="w-full py-[20px] px-[32px] md:px-[64px] max-w-[1200px] mx-auto mb-[20px]">
          <div className="grid grid-cols-12 gap-[24px] items-center">
            <div className="col-span-12 md:col-span-6">
              <div className="w-full aspect-[4/5] relative overflow-hidden shadow-2xl border border-[#c4c7c7]">
                <img
                  alt="Consulting engagement in session"
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 transition-transform duration-700"
                  src="/financialadvisory/working-capital7.png"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 mt-12 md:mt-0 lg:pl-12">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-8 border-b-2 border-[#000000] pb-4 font-bold tracking-tight">Target Engagements</h2>
              <ul className="space-y-6 mb-16">
                {[
                  "Global Scale-Up Ventures",
                  "Complex Manufacturing & Distribution",
                  "Institutional Real Estate & Infrastructure",
                  "CFO-Led Liquidity Restructuring"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center group">
                    <span className="material-symbols-outlined text-[#000000] mr-4 text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    <span className="font-sans text-[16px] md:text-[18px] text-[#000000] font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#000000] text-[#ffffff] p-12 relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#ffdea5]"></div>
                <p className="font-serif text-[24px] md:text-[28px] mb-8 leading-snug italic font-medium">
                  "A profitable company that cannot pay its suppliers is in distress. The market just hasn't read the footnotes yet."
                </p>
                <Link to="/contact" className="inline-flex items-center text-[#ffffff] font-sans text-[12px] uppercase tracking-[0.2em] border-b border-[#ffffff] pb-1 hover:text-[#ffdea5] hover:border-[#ffdea5] transition-colors font-bold">
                  Initiate Diagnostic
                  <span className="material-symbols-outlined ml-3 text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorkingCapitalLiquidityOptimization;