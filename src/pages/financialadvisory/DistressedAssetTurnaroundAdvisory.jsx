import  { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DistressedAssetTurnaroundAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full px-[32px] md:px-[64px] py-[96px] bg-[#fbf9f4]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-12 gap-[24px] items-end">
              <div className="col-span-12 lg:col-span-7">
                <span className="font-sans text-[12px] text-[#444748] block mb-10 uppercase tracking-[0.4em] font-bold">Service Overview • FA-08</span>
                <h1 className="font-serif text-[48px] md:text-[64px] text-[#1b1c19] mb-10 leading-[1.1] max-w-3xl font-bold tracking-tighter">
                  By the time the lender calls a meeting, you have lost the option of choosing the meeting.
                </h1>
                <p className="font-sans text-[18px] md:text-[20px] text-[#444748] max-w-2xl mb-12 leading-relaxed border-l-2 border-[#000000] pl-8">
                  Distress is sequential. The window to act on your terms is short and closes silently. We engineer turnaround architectures that stabilize posture, extend liquidity, and preserve value before external stakeholders dictate terms.
                </p>
                <div className="flex gap-8 border-t border-[#747878]/10 pt-8">
                  <div>
                    <span className="block font-serif text-[28px] md:text-[32px] text-[#000000] font-bold">14+</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#444748] font-bold">Core Industries</span>
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] md:text-[32px] text-[#000000] font-bold">$4B+</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#444748] font-bold">Restructured Assets</span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 hidden lg:block">
                <div className="border-l border-[#747878]/20 pl-12 pb-4">
                  <p className="italic font-serif text-[20px] md:text-[24px] text-[#444748] leading-relaxed">
                    "In structural distress, speed is a secondary metric. Precision of posture is what dictates survival."
                  </p>
                  <cite className="block mt-6 not-italic font-sans text-[12px] tracking-widest uppercase text-[#000000] font-bold">— Senior Managing Partner</cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Large Scale Strategic Image 1 */}
        <section className="w-full">
          <div className="max-w-[1440px] mx-auto px-[32px] md:px-[64px]">
            <div className="relative overflow-hidden border border-[#c4c7c7] shadow-2xl">
              <img
                alt="Strategic high-angle view of a complex urban grid"
                className="w-full h-[700px] object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                src="/financialadvisory/distressed-asset.png"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-widest text-[#444748] font-bold">Fig. 1.0 — Structural Complexity Diagnostic</span>
              <span className="text-[10px] uppercase tracking-widest text-[#444748] font-bold">Institutional Perspective</span>
            </div>
          </div>
        </section>

        {/* Industry Specific Distress Failures */}
        <section className="w-full px-[32px] md:px-[64px] py-[128px] bg-[#ffffff] border-y border-[#c4c7c7]/30">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-12 gap-[24px] mb-20">
              <div className="col-span-12 md:col-span-5">
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] leading-tight font-bold tracking-tight">Industry-Specific Distress Failures</h2>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="font-sans text-[18px] md:text-[20px] text-[#444748] border-l border-[#000000] pl-8 py-2 leading-relaxed italic">
                  Failure modes are distinct across sectors. Our diagnostic framework isolates systemic stress points before they trigger covenant breaches, ensuring a defensible recovery posture.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
              {[
                { sector: "SECTOR 01", title: "Mid-Cap Manufacturers", desc: "Working capital compression masking fundamental operational inefficiencies and supply chain fragility." },
                { sector: "SECTOR 02", title: "Real Estate & Infra", desc: "Liquidity mismatch and execution delays triggering aggressive default spirals across portfolios." },
                { sector: "SECTOR 03", title: "NBFCs", desc: "Asset-liability mismatches compounded by sudden credit rating downgrades and funding freezes." },
                { sector: "SECTOR 04", title: "Founder-Led Entities", desc: "Governance deficits and aggressive expansion over-leveraging balance sheets beyond core capability." }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="mb-6 h-[1px] w-full bg-[#747878]/20 group-hover:bg-[#000000] transition-colors"></div>
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#444748] mb-4 block font-bold">{item.sector}</span>
                  <h3 className="font-serif text-[24px] md:text-[28px] mb-4 text-[#1b1c19] font-bold leading-tight">{item.title}</h3>
                  <p className="font-sans text-[16px] text-[#444748] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="w-full bg-[#141414] text-[#ffffff] py-[128px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px]">
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-span-12 lg:col-span-6 z-10">
                <span className="font-sans text-[12px] tracking-[0.4em] uppercase text-[#747878] mb-8 block font-bold">Featured Case Study</span>
                <h2 className="font-serif text-[48px] md:text-[56px] mb-8 leading-tight font-extrabold tracking-tighter">Architecting Stability in High-Velocity Distress</h2>
                <p className="text-[#dbdad5] text-[18px] md:text-[20px] mb-12 max-w-xl leading-relaxed italic">
                  A systemic failure scenario involving a multi-billion dollar manufacturing conglomerate. We redefined the recovery trajectory by stabilizing lender posture and securing a 36-month liquidity extension within 45 days.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="border-l border-[#30312e] pl-6">
                    <span className="block text-[32px] md:text-[40px] font-serif text-[#ffffff] font-bold">$1.2B</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#747878] font-bold">Debt Restructured</span>
                  </div>
                  <div className="border-l border-[#30312e] pl-6">
                    <span className="block text-[32px] md:text-[40px] font-serif text-[#ffffff] font-bold">45 Days</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#747878] font-bold">Execution Timeline</span>
                  </div>
                </div>
                <Link to="/insights" className="inline-flex items-center gap-4 font-sans text-[12px] tracking-[0.2em] uppercase border-b border-[#ffffff] pb-2 hover:gap-6 transition-all font-bold">
                  Explore Full Resolution <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                </Link>
              </div>
              <div className="col-span-12 lg:col-span-6 relative mt-16 lg:mt-0 group">
                <div className="aspect-[4/5] relative overflow-hidden border border-[#30312e] shadow-2xl">
                  <img
                    alt="Strategic imagery - industrial abstract"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-110 transition-transform duration-[3000ms]"
                    src="/financialadvisory/distressed-asset.png"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-[#ffffff] p-12 text-[#141414] hidden md:block shadow-2xl border border-[#c4c7c7]">
                  <p className="font-serif italic text-[20px] leading-relaxed font-bold">
                    "Northrop's intervention was the turning point. They didn't just advise; they architected the exit."
                  </p>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-widest">— CEO, Global Industrial Group</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Architecture Section */}
        <section className="w-full px-[32px] md:px-[64px] py-[128px] bg-[#f5f3ee] border-y border-[#c4c7c7]/30">
          <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 md:col-span-4">
              <div className="sticky top-32">
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] mb-8 font-bold tracking-tight">Service Architecture</h2>
                <p className="text-[#444748] font-sans text-[16px] md:text-[18px] mb-12 leading-relaxed italic">Our methodology is binary. We either preserve the core or architect an orderly transition. There is no middle ground in structural failure.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-8">
              {[
                { id: "01 / DIAGNOSTIC", icon: "analytics", title: "Distress Diagnostic", desc: "Immediate, unvarnished assessment of cash runway, covenant headroom, and viable recovery options. We strip away optimism to reveal the mathematical reality of the balance sheet." },
                { id: "02 / ARCHITECTURE", icon: "architecture", title: "Turnaround Engineering", desc: "Design of radical operational and financial restructuring plans. We architect the blueprint required to halt bleeding and establish a defensible corporate core." },
                { id: "03 / NEGOTIATION", icon: "gavel", title: "Lender Posture Management", desc: "We stand between management and creditors, negotiating from a posture of structural logic rather than desperation. Our presence buys the mandate required for change." },
                { id: "04 / RESOLUTION", icon: "account_balance", title: "Insolvency & IBC Strategy", desc: "When insolvency is unavoidable, we navigate formal resolution frameworks to protect promoter interests and maximize residual value within statutory constraints." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#ffffff] p-12 border border-[#747878]/10 hover:border-[#000000]/20 transition-all group shadow-sm hover:shadow-xl">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-bold tracking-[0.4em] text-[#747878] uppercase">{item.id}</span>
                    <span className="material-symbols-outlined text-[#747878] group-hover:text-[#000000] transition-colors text-[24px]">{item.icon}</span>
                  </div>
                  <h4 className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] mb-6 font-bold">{item.title}</h4>
                  <p className="font-sans text-[18px] text-[#444748] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Large Scale Strategic Image 2 */}
        <section className="w-full">
          <div className="max-w-[1440px] mx-auto px-[32px] md:px-[64px]">
            <div className="relative overflow-hidden border border-[#c4c7c7] shadow-2xl">
              <img
                alt="Strategic high-end architectural symmetry"
                className="w-full h-[600px] object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-[4000ms]"
                src="/financialadvisory/distressed-asset2.png"
              />
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="w-full px-[32px] md:px-[64px] py-[128px] bg-[#ffffff]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="font-sans text-[12px] tracking-[0.4em] uppercase text-[#444748] mb-4 block font-bold">Intelligence</span>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] font-bold tracking-tight">Industry Insights</h2>
              </div>
              <Link to="/insights" className="font-sans text-[12px] tracking-[0.2em] uppercase border-b-2 border-[#000000] pb-2 hover:text-[#444748] transition-colors font-bold">View All Publications</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {[
                { cat: "REPORT", title: "The Liquidity Paradox: Navigating 2024 Debt Markets", date: "May 12, 2024 • 8 min read", img: "/financialadvisory/distressed-asset3.png" },
                { cat: "ANALYSIS", title: "Structural Vulnerabilities in Mid-Cap Manufacturing", date: "Apr 28, 2024 • 12 min read", img: "/financialadvisory/distressed-asset4.png" },
                { cat: "WHITE PAPER", title: "Lender Psychology: The Art of the Workout", date: "Mar 15, 2024 • 15 min read", img: "/financialadvisory/distressed-asset5.png" },
                { cat: "PERSPECTIVE", title: "Governance as a De-risking Mechanism", date: "Feb 04, 2024 • 6 min read", img: "/financialadvisory/distressed-asset6.png" }
              ].map((article, idx) => (
                <Link key={idx} to="/insights" className="group block cursor-pointer">
                  <div className="aspect-square mb-8 overflow-hidden bg-[#f0eee9] border border-[#c4c7c7] shadow-sm">
                    <img
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      src={article.img}
                    />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#000000] mb-3 block">{article.cat}</span>
                  <h3 className="font-serif text-[18px] md:text-[20px] mb-4 group-hover:underline underline-offset-4 font-bold leading-tight">{article.title}</h3>
                  <p className="text-[10px] text-[#444748] uppercase tracking-widest font-bold">{article.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="w-full px-[32px] md:px-[64px] py-[40px] bg-[#141414] text-[#ffffff] text-center mb-[20px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-[48px] md:text-[64px] mb-16 leading-tight font-extrabold tracking-tighter">
              Distress respects timelines you set early. It dictates them once you don't.
            </h2>
            <Link to="/contact" className="bg-[#ffffff] text-[#141414] font-sans text-[12px] px-16 py-6 uppercase tracking-[0.3em] font-bold hover:bg-[#dbdad5] transition-colors duration-300 shadow-2xl">
              Initiate Confidential Dialogue
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DistressedAssetTurnaroundAdvisory;