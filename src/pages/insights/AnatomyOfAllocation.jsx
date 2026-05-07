import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const AnatomyOfAllocation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f6f9ff] text-[#001736] min-h-screen font-sans antialiased">
      <Helmet>
        <title>The Flight to Quality: The Anatomy of Allocation | VC Insights</title>
     
      </Helmet>

      <main className="max-w-[1200px] mx-auto px-[24px] pt-[80px]">
        {/* Hero Section */}
        <section className="py-[64px] mt-[40px] flex flex-col items-center text-center">
          <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] mb-[24px] block uppercase tracking-[0.2em]">Quarterly Report · 2026</span>
          <h1 className="font-serif text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#001736] max-w-4xl mb-[16px]">
            The Flight to Quality: <span className="block">The Anatomy of Allocation</span>
          </h1>
          <p className="font-sans text-[18px] font-normal leading-[1.6] text-[#5d5f5f] max-w-2xl leading-relaxed mt-[24px]">
            As macroeconomic volatility stabilizes, global venture capital is undergoing a fundamental migration. Liquid assets are no longer chasing growth at any cost; instead, they are converging on the most disciplined allocators and leanest operators.
          </p>
        </section>

        {/* Executive Summary */}
        <section className="py-[40px] border-y border-[#c4c6d0] mb-[64px]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] mb-[16px] uppercase tracking-widest">Executive Summary</h2>
            <p className="font-sans text-[18px] font-normal leading-[1.6] text-[#001736] leading-relaxed italic">
              "The 2026 economic landscape is defined not by the scarcity of capital, but by the extreme selectivity of its deployment. After the post-2023 correction, the industry has pivoted toward a 'Capital Efficiency' mandate, prioritizing structural resilience over temporary market dominance."
            </p>
          </div>
        </section>

        {/* Section 1: The Global Framework */}
        <section className="py-[64px]">
          <div className="grid lg:grid-cols-12 gap-[64px]">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] leading-tight sticky top-24">The Global Framework:<br/><span className="text-[#5d5f5f]">Six Patterns of Failure</span></h2>
            </div>
            <div className="lg:col-span-8 space-y-[40px]">
              <div className="border-l-2 border-[#001736] pl-[40px] py-[16px]">
                <h3 className="font-serif text-[24px] font-medium leading-[1.3] text-[#001736] mb-[16px]">The "False Start" Trap</h3>
                <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#5d5f5f] leading-relaxed">
                  Our data indicates that 74% of failed ventures in the current cycle were victims of premature scaling. Startups often mistake early market curiosity for genuine product-market fit. In the 2026 high-rate environment, these errors lead to immediate liquidity crises as burn rates outpace fundamental unit economics.
                </p>
              </div>
              <div className="border-l-2 border-[#001736] pl-[40px] py-[16px]">
                <h3 className="font-serif text-[24px] font-medium leading-[1.3] text-[#001736] mb-[16px]">The "Barbell" Effect</h3>
                <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#5d5f5f] leading-relaxed">
                  Capital is concentrating at the extreme ends of the risk spectrum. Seed-stage "moonshots" and late-stage "profitable titans" are securing record funding, while the Series B and C "mid-market" faces a profound squeeze. This structural gap requires founders to bridge the efficiency chasm earlier than ever before.
                </p>
              </div>
              <div className="relative aspect-[16/7] w-full overflow-hidden bg-[#eaeef4] mt-[24px]">
                <img alt="Modern Architecture Detail" className="w-full h-full object-cover grayscale brightness-75" src="/insight/unnamed3.png"/>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial HR translated to standard element */}
        <hr className="border-0 h-px my-16 bg-gradient-to-r from-transparent via-[#747780]/40 to-transparent" />

        {/* Section 2: The Indian Lens */}
        <section className="py-[64px]">
          <div className="grid lg:grid-cols-12 gap-[64px]">
            <div className="lg:col-span-4 lg:order-2">
              <h2 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] leading-tight sticky top-24 text-right">The Indian Lens:<br/><span className="text-[#5d5f5f]">Resilience vs. Reckoning</span></h2>
            </div>
            <div className="lg:col-span-8 lg:order-1 space-y-[40px]">
              <div className="bg-[#ffffff] p-[40px] border border-[#c4c6d0]">
                <h3 className="font-serif text-[24px] font-medium leading-[1.3] text-[#001736] mb-[16px]">The Bengaluru vs. Delhi-NCR Dynamic</h3>
                <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#5d5f5f] leading-relaxed mb-[24px]">
                  A clear divergence has emerged between the two primary hubs. Bengaluru's ecosystem has pivoted toward deep-tech and SaaS with an average 18% lower burn-to-revenue ratio compared to 2024. Conversely, the Delhi-NCR consumer-tech corridor is facing a reckoning, with several legacy hyper-growth platforms forced into drastic restructuring to achieve positive EBITDA.
                </p>
                <div className="grid grid-cols-2 gap-[24px] pt-[24px] border-t border-[#c4c6d0]">
                  <div>
                    <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736]">BENGALURU SAAS</span>
                    <div className="font-serif text-[24px] font-medium leading-[1.3] text-[#001736] mt-1">1.4x</div>
                    <span className="text-[10px] text-[#5d5f5f]">AVERAGE EFFICIENCY MULTIPLE</span>
                  </div>
                  <div>
                    <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736]">DELHI-NCR D2C</span>
                    <div className="font-serif text-[24px] font-medium leading-[1.3] text-[#001736] mt-1">0.8x</div>
                    <span className="text-[10px] text-[#5d5f5f]">AVERAGE EFFICIENCY MULTIPLE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The 11 Pillars of Misallocation */}
        <section className="py-[64px] bg-[#002b5b] text-[#ffffff] px-[40px] -mx-[24px] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
            </svg>
          </div>
          <div className="max-w-[1200px] mx-auto relative z-10">
            <h2 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] mb-[64px]">The Pillars of Misallocation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              <div className="space-y-[16px]">
                <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#a9c7ff] text-lg">01</span>
                <h4 className="font-serif text-[24px] font-medium leading-[1.3]">Wrong Ticket Size</h4>
                <p className="font-sans text-[16px] font-normal leading-[1.5] opacity-80">Deploying capital in amounts that exceed the operational bandwidth or market depth of the current stage.</p>
              </div>
              <div className="space-y-[16px]">
                <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#a9c7ff] text-lg">02</span>
                <h4 className="font-serif text-[24px] font-medium leading-[1.3]">Over-Optimistic Projections</h4>
                <p className="font-sans text-[16px] font-normal leading-[1.5] opacity-80">Relying on "infinite market" growth models that ignore the inevitable saturation points of digital acquisition.</p>
              </div>
              <div className="space-y-[16px]">
                <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#a9c7ff] text-lg">03</span>
                <h4 className="font-serif text-[24px] font-medium leading-[1.3]">Broken Cap Tables</h4>
                <p className="font-sans text-[16px] font-normal leading-[1.5] opacity-80">Heavy early-stage dilution that disincentivizes key talent during critical Series B-D scaling phases.</p>
              </div>
              <div className="space-y-[16px]">
                <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#a9c7ff] text-lg">04</span>
                <h4 className="font-serif text-[24px] font-medium leading-[1.3]">Ignoring Benchmarks</h4>
                <p className="font-sans text-[16px] font-normal leading-[1.5] opacity-80">Developing proprietary "vanity metrics" that fail to correlate with standard GAAP profitability measures.</p>
              </div>
              <div className="space-y-[16px]">
                <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#a9c7ff] text-lg">05</span>
                <h4 className="font-serif text-[24px] font-medium leading-[1.3]">Burn Rate vs Value</h4>
                <p className="font-sans text-[16px] font-normal leading-[1.5] opacity-80">Treating burn as a competitive moat rather than a temporary bridge to self-sustainability.</p>
              </div>
              <div className="flex items-center justify-center border border-dashed border-[#a9c7ff] opacity-40 p-[24px]">
                <span className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em]">6-11 Detailed in Full Report</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The Harvard Strategic Solution */}
        <section className="py-[64px]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-[64px]">
              <h2 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] mb-[16px]">The Harvard Strategic Solution</h2>
              <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#5d5f5f]">A framework for restoring operational integrity in high-growth environments.</p>
            </div>
            <div className="space-y-[40px]">
              <div className="flex flex-col md:flex-row gap-[40px] items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-[#001736] flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <h3 className="font-serif text-[24px] font-medium leading-[1.3] text-[#001736] mb-[8px]">Lean Validation</h3>
                  <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#5d5f5f] leading-relaxed">Moving beyond MVP to "Minimum Viable Unit Economics." Validating not just the product's function, but its capacity to generate a contribution margin from the very first transaction.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[40px] items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-[#001736] flex items-center justify-center text-white font-bold">B</div>
                <div>
                  <h3 className="font-serif text-[24px] font-medium leading-[1.3] text-[#001736] mb-[8px]">Strategic Partnerships</h3>
                  <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#5d5f5f] leading-relaxed">Prioritizing distribution channels over direct-to-consumer acquisition costs. Utilizing existing networks to achieve scale without the linear increase in marketing spend.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[40px] items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-[#001736] flex items-center justify-center text-white font-bold">C</div>
                <div>
                  <h3 className="font-serif text-[24px] font-medium leading-[1.3] text-[#001736] mb-[8px]">Margin Discipline</h3>
                  <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#5d5f5f] leading-relaxed">Enforcing a strict 30% gross margin floor for all experimental product lines. Entities unable to clear this hurdle within 120 days face immediate decommissioning.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Table: Global vs. India */}
        <section className="py-[64px] bg-[#ffffff] border border-[#c4c6d0] my-[64px]">
          <div className="px-[40px] py-[24px] border-b border-[#c4c6d0] flex justify-between items-center">
            <h3 className="font-sans text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] tracking-widest">GLOBAL VS. INDIA: DATA SET COMPARISON</h3>
            <span className="text-[10px] text-[#5d5f5f]">Q1 2026 BENCHMARKS</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-[14px] font-medium leading-[1.4] tracking-[0.02em]">
              <thead>
                <tr className="bg-[#f0f4fa]">
                  <th className="px-[40px] py-[16px] border-b border-[#c4c6d0] font-semibold">Metric</th>
                  <th className="px-[40px] py-[16px] border-b border-[#c4c6d0] font-semibold">Global (Tier-1)</th>
                  <th className="px-[40px] py-[16px] border-b border-[#c4c6d0] font-semibold">India (Growth)</th>
                  <th className="px-[40px] py-[16px] border-b border-[#c4c6d0] font-semibold text-[#001736]">Variance</th>
                </tr>
              </thead>
              <tbody className="font-sans text-[16px] font-normal leading-[1.5]">
                <tr className="border-b border-[#c4c6d0] hover:bg-[#ffffff]">
                  <td className="px-[40px] py-[24px]">Burn Multiple (Avg)</td>
                  <td className="px-[40px] py-[24px]">1.2x</td>
                  <td className="px-[40px] py-[24px]">1.8x</td>
                  <td className="px-[40px] py-[24px] text-[#ba1a1a] font-bold">+50%</td>
                </tr>
                <tr className="border-b border-[#c4c6d0] hover:bg-[#ffffff]">
                  <td className="px-[40px] py-[24px]">LTV / CAC Ratio</td>
                  <td className="px-[40px] py-[24px]">4.5:1</td>
                  <td className="px-[40px] py-[24px]">3.2:1</td>
                  <td className="px-[40px] py-[24px] text-[#ba1a1a] font-bold">-29%</td>
                </tr>
                <tr className="border-b border-[#c4c6d0] hover:bg-[#ffffff]">
                  <td className="px-[40px] py-[24px]">Revenue per Employee</td>
                  <td className="px-[40px] py-[24px]">$240k</td>
                  <td className="px-[40px] py-[24px]">$115k</td>
                  <td className="px-[40px] py-[24px] text-[#ba1a1a] font-bold">-52%</td>
                </tr>
                <tr className="hover:bg-[#ffffff]">
                  <td className="px-[40px] py-[24px]">Cash Runway (Months)</td>
                  <td className="px-[40px] py-[24px]">28</td>
                  <td className="px-[40px] py-[24px]">16</td>
                  <td className="px-[40px] py-[24px] text-[#ba1a1a] font-bold">-43%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-[64px] mb-[64px]">
          <div className="bg-[#001736] text-[#ffffff] p-[64px] flex flex-col md:flex-row justify-between items-center gap-[40px]">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="font-serif text-[24px] font-medium leading-[1.3] mb-[8px]">Access the Complete 84-Page Dataset</h3>
              <p className="font-sans text-[16px] font-normal leading-[1.5] opacity-80">Our full report details capital efficiency metrics across 12 sectors, featuring proprietary interviews with 50+ leading Global Partners.</p>
            </div>
            <button className="bg-[#ffffff] text-[#001736] px-[40px] py-[24px] font-sans text-[12px] font-semibold leading-[1] tracking-[0.2em] uppercase whitespace-nowrap hover:bg-[#d6e3ff] transition-colors">
              Download Full Report
            </button>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AnatomyOfAllocation;