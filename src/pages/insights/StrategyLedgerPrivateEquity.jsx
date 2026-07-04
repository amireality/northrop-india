import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const StrategyLedgerPrivateEquity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-sans antialiased selection:bg-[#ffdea5] selection:text-[#261900]">
      <Helmet>
        <title>STRATEGY LEDGER: How Private Equity Actually Makes Money | AlphaInsights</title>
     
      </Helmet>

      <main className="max-w-[1280px] mx-auto">
        {/* Hero Section */}
        <section className="relative  flex flex-col justify-end py-[48px] border-b border-[#c5c6cd]">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img className="w-full h-full object-cover opacity-20 grayscale brightness-75" alt="Hero landscape" src="/insight/unnamed5.png" />
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-[12px]">
              <span className="text-[12px] font-sans font-semibold tracking-[0.02em] bg-[#ffdea5] text-[#261900] px-3 py-1">PRIVATE EQUITY</span>
              <span className="text-[13px] font-sans font-medium tracking-[0.05em] text-[#44474d]">MAY 12, 2026</span>
            </div>
            <h1 className="font-serif text-[48px] font-semibold tracking-[-0.02em] text-[#000000] mb-[12px] leading-tight">STRATEGY LEDGER: How Private Equity Actually Makes Money</h1>
            <p className="font-serif text-[24px] font-medium text-[#44474d] italic max-w-2xl">Deconstructing the shift from Financial Engineering to Operational Alpha</p>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-[48px] grid grid-cols-1 md:grid-cols-12 gap-[32px] border-b border-[#c5c6cd]">
          <div className="md:col-span-4">
            <h3 className="font-sans text-[18px] font-semibold tracking-[0.01em] text-[#000000] uppercase border-l-4 border-[#e9c176] pl-4">Executive Summary</h3>
          </div>
          <div className="md:col-span-8">
            <div className="bg-[#f2f4f6] p-[24px] border border-[#c5c6cd]">
              <p className="font-sans text-[18px] font-normal text-[#191c1e] italic leading-relaxed">
                The era of easy returns through high leverage and low interest rates has concluded. We are witnessing a fundamental transition into the "Value Creation" era, where operational excellence and structural transformations are the primary drivers of IRR. This ledger deconstructs the mechanics of modern alpha in a world of persistent inflation and higher-for-longer cost of capital.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The Trinity of Returns */}
        <section className="py-[48px] border-b border-[#c5c6cd]">
          <h2 className="font-serif text-[32px] font-semibold text-[#000000] mb-[48px]">The Trinity of Returns: Deconstructing the Myth</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            <div className="p-[24px] border border-[#c5c6cd] flex flex-col items-start gap-[12px] hover:border-[#e9c176] transition-colors">
              <span className="material-symbols-outlined text-[#775a19] text-3xl">check_circle</span>
              <h3 className="font-sans text-[18px] font-semibold tracking-[0.01em]">Leverage</h3>
              <p className="font-sans text-[16px] text-[#44474d]">The historical fuel for PE returns, now pivoting toward specialized debt structures as cheap credit disappears.</p>
            </div>
            <div className="p-[24px] border border-[#c5c6cd] flex flex-col items-start gap-[12px] hover:border-[#e9c176] transition-colors">
              <span className="material-symbols-outlined text-[#775a19] text-3xl">check_circle</span>
              <h3 className="font-sans text-[18px] font-semibold tracking-[0.01em]">Multiple Expansion</h3>
              <p className="font-sans text-[16px] text-[#44474d]">The "buy low, sell high" arbitrage that powered the last decade, now facing pressure from historic entry multiples.</p>
            </div>
            <div className="p-[24px] border border-[#ffdea5] flex flex-col items-start gap-[12px] bg-[#e6e8ea]">
              <span className="material-symbols-outlined text-[#775a19] text-3xl">check_circle</span>
              <h3 className="font-sans text-[18px] font-semibold tracking-[0.01em]">Operational Alpha</h3>
              <p className="font-sans text-[16px] text-[#191c1e]">The new frontier: margin expansion, digital ecosystems, and management optimization. The only true sustainable moat.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Global Data Trends */}
        <section className="py-[48px] border-b border-[#c5c6cd]">
          <h2 className="font-serif text-[32px] font-semibold text-[#000000] mb-[48px]">Global Data Trends (2025–2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#191c1e]">
                  <th className="py-4 font-sans text-[12px] font-semibold tracking-[0.02em] uppercase text-[#44474d]">Metric Class</th>
                  <th className="py-4 font-sans text-[12px] font-semibold tracking-[0.02em] uppercase text-[#44474d] text-right">Observation</th>
                  <th className="py-4 font-sans text-[12px] font-semibold tracking-[0.02em] uppercase text-[#44474d] text-right">Trend vs. PY</th>
                </tr>
              </thead>
              <tbody className="font-sans text-[16px]">
                <tr className="border-b border-[#c5c6cd] hover:bg-[#eceef0] transition-colors">
                  <td className="py-6 font-semibold">Global Deal Value</td>
                  <td className="py-6 text-right">$2.6 Trillion</td>
                  <td className="py-6 text-right text-[#e9c176] font-bold">Up 19%</td>
                </tr>
                <tr className="border-b border-[#c5c6cd] hover:bg-[#eceef0] transition-colors">
                  <td className="py-6 font-semibold">Unsold Inventory</td>
                  <td className="py-6 text-right">32,000 Companies ($3.8T)</td>
                  <td className="py-6 text-right">Record High</td>
                </tr>
                <tr className="border-b border-[#c5c6cd] hover:bg-[#eceef0] transition-colors">
                  <td className="py-6 font-semibold">Median Entry Multiple</td>
                  <td className="py-6 text-right">11.8x EBITDA</td>
                  <td className="py-6 text-right">All-time high</td>
                </tr>
                <tr className="border-b border-[#c5c6cd] hover:bg-[#eceef0] transition-colors">
                  <td className="py-6 font-semibold">Average Holding Period</td>
                  <td className="py-6 text-right">6.5 Years</td>
                  <td className="py-6 text-right">+1.2 Years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-[24px] flex items-center gap-4 bg-[#ffdea5]/10 p-[12px] border-l-4 border-[#ffdea5]">
            <span className="material-symbols-outlined text-[#775a19]">trending_up</span>
            <p className="font-sans text-[16px] text-[#785a19]">
              <strong>Insight:</strong> The "Rise of Secondaries" has surged to <strong>$240 billion</strong> as LPs seek liquidity in a sluggish exit environment.
            </p>
          </div>
        </section>

        {/* Section 3: The Indian Landscape */}
        <section className="py-[48px] border-b border-[#c5c6cd] bg-[#f2f4f6] -mx-[64px] px-[64px]">
          <h2 className="font-serif text-[32px] font-semibold text-[#000000] mb-[48px]">The Indian Landscape: A Different Engine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            <div className="space-y-[12px]">
              <h4 className="font-sans text-[18px] font-semibold tracking-[0.01em] text-[#775a19]">Financial Services</h4>
              <p className="font-sans text-[16px] text-[#44474d]">Robust credit growth and digital penetration making the NBFC sector a primary target for institutional dry powder.</p>
            </div>
            <div className="space-y-[12px]">
              <h4 className="font-sans text-[18px] font-semibold tracking-[0.01em] text-[#775a19]">Real Assets</h4>
              <p className="font-sans text-[16px] text-[#44474d]">The warehouse and logistics boom fueled by 'China Plus One' supply chain shifts across the subcontinent.</p>
            </div>
            <div className="space-y-[12px]">
              <h4 className="font-sans text-[18px] font-semibold tracking-[0.01em] text-[#775a19]">Manufacturing & Defense</h4>
              <p className="font-sans text-[16px] text-[#44474d]">Government indigenization mandates creating high-margin Moats for specialized components manufacturers.</p>
            </div>
          </div>
          <div className="mt-[48px] p-[24px] bg-white border border-[#c5c6cd] text-center">
            <span className="font-serif text-[48px] font-semibold tracking-[-0.02em] text-[#000000] leading-none">211%</span>
            <p className="font-sans text-[12px] font-semibold tracking-[0.02em] uppercase tracking-widest text-[#44474d] mt-2">Strategic Exit Surge Stat</p>
          </div>
        </section>

        {/* Section 4: The Mid-Market Reality */}
        <section className="py-[48px] border-b border-[#c5c6cd]">
          <h2 className="font-serif text-[32px] font-semibold text-[#000000] mb-[48px]">The Mid-Market Reality</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] items-center">
            <div className="md:col-span-7">
              <p className="font-sans text-[18px] text-[#191c1e] mb-[24px]">Operational Alpha survival tactics have moved from "nice-to-have" to "mandatory" for survival in the middle market.</p>
              <ul className="space-y-[12px]">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#75777d] mt-1">arrow_forward</span>
                  <span className="font-sans text-[16px]"><strong>Pricing Discipline:</strong> Moving beyond cost-plus models to value-based dynamic pricing.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#75777d] mt-1">arrow_forward</span>
                  <span className="font-sans text-[16px]"><strong>Management Upgrades:</strong> Importing C-suite talent from Fortune 500s into $200M revenue companies.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#75777d] mt-1">arrow_forward</span>
                  <span className="font-sans text-[16px]"><strong>Digital Transformation:</strong> Integrating AI for demand forecasting and predictive churn analysis.</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-square border border-[#c5c6cd] overflow-hidden">
                <img className="w-full h-full object-cover" alt="Data Visualization" src="/insight/unnamed6.png" />
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-[48px] text-center">
          <h2 className="font-serif text-[48px] font-semibold tracking-[-0.02em] text-[#000000] mb-4 italic">The Death of the Generalist</h2>
          <p className="font-sans text-[18px] text-[#44474d] max-w-2xl mx-auto mb-[48px]">
            The future belongs to the specialist—the GP who can walk into a factory floor or a software hub and improve EBITDA through direct intervention, not just spreadsheet manipulation.
          </p>
          {/* CTA Card */}
          <div className="mb-[48px] flex justify-center">

             <Link to={"/contact"}>
            <button className="bg-[#775a19] text-[#ffffff] px-8 py-4 font-sans text-[12px] font-semibold tracking-[0.02em] uppercase hover:brightness-110 transition-all flex items-center gap-2 rounded-none shadow-lg">
              Download Full Report (PDF) <span className="material-symbols-outlined">download</span>
            </button>

            </Link>

          </div>
          <div className="bg-[#0f1c30] text-[#78849d] p-[48px] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-[24px]">
            <div className="text-left">
              <h3 className="font-serif text-[24px] font-medium text-[#ffffff] mb-2">Access the Full Strategy Ledger</h3>
              <p className="font-sans text-[16px] text-[#78849d] opacity-80">Full 142-page institutional analysis including sector-specific heatmaps.</p>
            </div>

               <Link to="/insights">
            <button className="bg-[#ffdea5] text-[#261900] px-8 py-4 font-sans text-[12px] font-semibold tracking-[0.02em] uppercase hover:brightness-110 transition-all flex items-center gap-2">
              Download PDF <span className="material-symbols-outlined">download</span>
            </button>
               </Link>
          </div>
        </section>

        {/* References */}
        <section className="py-[48px] border-t border-[#c5c6cd]">
          <h4 className="font-sans text-[12px] font-semibold tracking-[0.02em] text-[#44474d] uppercase mb-4 tracking-tighter">Cited Reports & Sources</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] font-sans text-[13px] font-medium text-[#75777d]">
            <p>[1] AlphaInsights Global PE Census 2025</p>
            <p>[2] Secondary Market Liquidity Index (SMLI) Q1 2026</p>
            <p>[3] Industrial Transformation Survey - APAC Division</p>
            <p>[4] EBITDA Margin Expansion Analysis: Mid-Market (2020-2026)</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StrategyLedgerPrivateEquity;