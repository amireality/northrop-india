import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const AlgorithmDrivenLiquidity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Algorithm-Driven Liquidity: The Invisible Hand</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600;1,6..72,500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="bg-[#f6f9ff] text-[#171c20] min-h-screen antialiased [font-family:'Inter']">
        <div className="flex max-w-[1400px] mx-auto">
          {/* Main Content */}
          <main className="flex-1 px-[32px] lg:px-[64px] py-[64px] max-w-[1100px] mx-auto">
            {/* Hero Section */}
            <section className="mb-[64px]">
              <div className="mb-[16px]">
                <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] border-b border-[#001736] pb-1">
                  April 2026 | Strategic Brief
                </span>
              </div>
              <h1 className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#002b5b] max-w-3xl mb-[24px]">
                Algorithm-Driven Liquidity: The Invisible Hand Reshaping Market Volatility
              </h1>
              <p className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#43474f] max-w-2xl mb-[40px] italic">
                Exploring the systemic transition from human-intermediated depth to high-frequency algorithmic market-making.
              </p>
              <div className="relative w-full h-[450px] overflow-hidden border border-[#c4c6d0]">
                <img
                  alt="Digital Market Infrastructure"
                  className="w-full h-full object-cover grayscale brightness-50"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuAECT_1S3vuxp3eFWxrHRs_9xn5yMDtmFya5YL5gz-rVCRzqL0sKeEkujt-_DEyIOmQj-LRMSVhZxwbUNt6a2KaV9jJjy1dw9Auq63HKchy7kVKXZF-D6TNhIcPlQa99My4j_wvKcIIACtOTeToHj1hwWPWAj7-q7krGRiahOTrHY6wY1Wp4RJ7bT_C96WZq3TgODKoKr0hYZsnjx04DS29mgs7jUpKx_gWEDtB0B2R-4b-8nujwUQCWCZfL3cNXNLaJjQl8JDPI"
                />
                <div className="absolute inset-0 bg-[#001736]/20 mix-blend-multiply"></div>
              </div>
            </section>

            {/* Introduction */}
            <section className="mb-[64px] grid grid-cols-1 md:grid-cols-12 gap-[24px]">
              <div className="md:col-span-4 border-t border-[#001736] pt-[16px]">
                <h3 className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] uppercase">
                  Executive Summary
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-[Inter] text-[18px] font-normal leading-[1.6] text-[#171c20] mb-[24px]">
                  In the current market landscape, High-Frequency Trading (HFT) and algorithmic market-making now account for an estimated <span className="font-bold text-[#001736]">60-70% of total equity volume</span>. This fundamental shift has transitioned liquidity from a human-mediated buffer to a code-driven stream. While this evolution has drastically reduced bid-ask spreads for the average trade, it has simultaneously introduced a new form of fragility: algorithmic withdrawal.
                </p>
                <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                  The &quot;Invisible Hand&quot; of 2026 is no longer a psychological abstraction but a mathematical certainty. By prioritizing sub-millisecond execution over long-term value discovery, these systems have created a market that is exceptionally deep in peace-time, yet prone to evaporation during exogenous shocks.
                </p>
              </div>
            </section>

            {/* Section 01: Dual Personality */}
            <section className="mb-[64px]">
              <div className="mb-[40px]">
                <h2 className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] border-b border-[#c4c6d0] pb-[4px]">
                  The Dual Personality of Automation
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                {/* The Stabilizer */}
                <div className="border border-[#c4c6d0] p-[24px] bg-[#ffffff] flex flex-col justify-between">
                  <div>
                    <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] mb-[16px] block">
                      Condition: Normal
                    </span>
                    <h3 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] mb-[24px]">
                      The Stabilizer
                    </h3>
                    <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                      In stable conditions, algorithms provide continuous, tight liquidity. They compress spreads, arb out inefficiencies across global exchanges, and facilitate high-volume turnover with minimal slippage.
                    </p>
                  </div>
                  <div className="mt-[64px] pt-[16px] border-t border-[#c4c6d0] flex justify-between items-center">
                    <span className="font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em]">
                      Spread Compression: -40% vs 2020
                    </span>
                    <span className="material-symbols-outlined text-[#001736]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                      trending_down
                    </span>
                  </div>
                </div>

                {/* The Accelerant */}
                <div className="border border-[#002b5b] p-[24px] bg-[#002b5b] text-[#ffffff] flex flex-col justify-between">
                  <div>
                    <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#d6e3ff] mb-[16px] block">
                      Condition: Stress
                    </span>
                    <h3 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] mb-[24px]">
                      The Accelerant
                    </h3>
                    <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#d6e3ff]">
                      During stress events, algorithmic risk-parity thresholds are breached simultaneously. Orders are canceled within milliseconds, causing depth to vanish and creating &quot;air pockets&quot; where price discovery accelerates violently.
                    </p>
                  </div>
                  <div className="mt-[64px] pt-[16px] border-t border-[#7594ca] flex justify-between items-center">
                    <span className="font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em]">
                      Volatility Gaps: +250% Growth
                    </span>
                    <span className="material-symbols-outlined text-[#d6e3ff]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                      warning
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 02: Compressed Spring */}
            <section className="mb-[64px] p-[64px] bg-[#f0f4fa] border border-[#c4c6d0] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] mb-[24px]">
                  The &quot;Compressed Spring&quot; Effect
                </h3>
                <p className="font-[Inter] text-[18px] font-normal leading-[1.6] text-[#171c20] max-w-2xl italic border-l-4 border-[#001736] pl-[24px] py-[4px] mb-[40px]">
                  &quot;Market depth today is an illusion of safety. We are trading in a pool that is a mile wide but only an inch deep. When the tide goes out, it goes out at the speed of light.&quot;
                </p>
                <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f] mb-[24px]">
                  The flash crash phenomenon is no longer an anomaly; it is a structural byproduct of the compressed spring. When algorithms retreat, the absence of human &quot;market makers of last resort&quot; creates vacuum-like movements in asset prices.
                </p>
                <button className="bg-[#001736] text-[#ffffff] px-[24px] py-[16px] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] hover:bg-[#002b5b] transition-colors">
                  View Flash Crash Case Study
                </button>
              </div>
            </section>

            {/* Section 03: Global Impact */}
            <section className="mb-[64px]">
              <div className="mb-[40px]">
                <h2 className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] border-b border-[#c4c6d0] pb-[4px]">
                  Global Impact Metrics
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-[#001736]">
                      <th className="py-[16px] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736]">
                        Key Vector
                      </th>
                      <th className="py-[16px] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736]">
                        Structural Change
                      </th>
                      <th className="py-[16px] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736]">
                        Corporate Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#c4c6d0]">
                    <tr className="hover:bg-[#ffffff] transition-colors">
                      <td className="py-[24px] font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736]">
                        Market Depth
                      </td>
                      <td className="py-[24px] font-[Inter] text-[16px] font-normal leading-[1.5]">
                        High in nominal volume, critically thin in duration.
                      </td>
                      <td className="py-[24px] font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em]">
                        Requires multi-day execution for large buy-backs.
                      </td>
                    </tr>
                    <tr className="hover:bg-[#ffffff] transition-colors">
                      <td className="py-[24px] font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736]">
                        Price Discovery
                      </td>
                      <td className="py-[24px] font-[Inter] text-[16px] font-normal leading-[1.5]">
                        Sub-second adjustment to macroeconomic data.
                      </td>
                      <td className="py-[24px] font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em]">
                        Reduced window for IR response to narratives.
                      </td>
                    </tr>
                    <tr className="hover:bg-[#ffffff] transition-colors">
                      <td className="py-[24px] font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736]">
                        Systemic Risk
                      </td>
                      <td className="py-[24px] font-[Inter] text-[16px] font-normal leading-[1.5]">
                        Cross-market contagion via automated arbitrage.
                      </td>
                      <td className="py-[24px] font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em]">
                        Increased correlation between unrelated assets.
                      </td>
                    </tr>
                    <tr className="hover:bg-[#ffffff] transition-colors">
                      <td className="py-[24px] font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736]">
                        Access
                      </td>
                      <td className="py-[24px] font-[Inter] text-[16px] font-normal leading-[1.5]">
                        Two-tier market dominated by co-location edge.
                      </td>
                      <td className="py-[24px] font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em]">
                        Higher &quot;hidden&quot; costs for traditional players.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 04: Strategic Insights */}
            <section className="mb-[64px] grid grid-cols-1 md:grid-cols-12 gap-[24px]">
              <div className="md:col-span-4">
                <h2 className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] sticky top-24">
                  Strategic Insights for the Modern Enterprise
                </h2>
              </div>
              <div className="md:col-span-8 space-y-[24px]">
                <div className="flex space-x-[24px]">
                  <span className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#c4c6d0] opacity-50">
                    01
                  </span>
                  <div>
                    <h4 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] mb-[4px]">
                      Rethink Execution Parameters
                    </h4>
                    <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                      Treasury departments must move away from VWAP (Volume Weighted Average Price) benchmarks and adopt liquidity-sensitive execution paths to avoid signaling to predatory algorithms.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-[24px]">
                  <span className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#c4c6d0] opacity-50">
                    02
                  </span>
                  <div>
                    <h4 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] mb-[4px]">
                      Volatility as a Constant
                    </h4>
                    <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                      Intra-day swings of 2-3% are the new baseline. Financial planning must account for &quot;fat-tail&quot; events occurring with higher frequency than traditional Gaussian models suggest.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-[24px]">
                  <span className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#c4c6d0] opacity-50">
                    03
                  </span>
                  <div>
                    <h4 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] mb-[4px]">
                      The Value of Patience
                    </h4>
                    <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                      In a market that moves at light speed, the ultimate competitive advantage for the modern enterprise is the ability to wait. Strategic capital deployment should focus on 'liquidity drought' periods for entry.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom Line */}
            <footer className="border-t-2 border-[#001736] pt-[40px] mt-[64px] mb-[64px]">
              <div className="max-w-3xl">
                <h3 className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] mb-[24px] uppercase">
                  The Bottom Line
                </h3>
                <p className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] leading-tight italic">
                  The algorithm-driven market is more efficient in theory but more fragile in practice. Leaders who master the nuances of this &quot;Invisible Hand&quot; will navigate volatility not as a risk to be managed, but as a structural opportunity to be exploited.
                </p>
              </div>
              <div className="mt-[64px] flex flex-col md:flex-row justify-between items-start md:items-center text-[#c6c6c7]">
                <p className="font-[Inter] text-[10px] font-semibold leading-[1] tracking-[0.08em]">
                  © 2026 Financial Intelligence Research Group. All Rights Reserved.
                </p>
                <div className="flex space-x-[24px] mt-[24px] md:mt-0">
                  <span className="material-symbols-outlined text-[#7594ca]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                    verified_user
                  </span>
                  <span className="material-symbols-outlined text-[#7594ca]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                    lock
                  </span>
                  <span className="material-symbols-outlined text-[#7594ca]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                    analytics
                  </span>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default AlgorithmDrivenLiquidity;
