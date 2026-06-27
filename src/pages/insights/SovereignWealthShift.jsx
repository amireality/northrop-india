import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SovereignWealthShift = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Analysis Report: The Sovereign Wealth Shift</title>
       
      </Helmet>

      <div className="bg-[#f6f9ff] text-[#171c20] antialiased [font-family:'Inter']">
        <main className="max-w-[1200px] mx-auto px-[24px] mt-[64px]">
          {/* Header Section */}
          <section className="mb-[64px]">
            <div className="flex flex-col md:flex-row justify-between items-end gap-[24px] pb-[24px] border-b border-[#c4c6d0]">
              <div className="max-w-3xl">
                <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] uppercase block mb-[8px]">
                  Q1 2026 STRATEGIC INTELLIGENCE
                </span>
                <h1 className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#001736]">
                  Analysis Report: The Sovereign Wealth Shift (2026–2026)
                </h1>
              </div>
              {/* <div className="text-right">
                <p className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#5d5f5f]">
                  REPORT NO. 882-X
                </p>
                <p className="font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em] text-[#001736]">
                  PUBLISHED: OCT 2023
                </p>
              </div> */}
            </div>
          </section>

          {/* Executive Summary Bento */}
          <section className="mb-[64px] grid grid-cols-1 md:grid-cols-12 gap-[24px]">
            <div className="md:col-span-8 flex flex-col justify-between">
              <div>
                <h2 className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] mb-[24px]">
                  Executive Summary
                </h2>
                <p className="font-[Inter] text-[18px] font-normal leading-[1.6] text-[#43474f] mb-[24px]">
                  We are witnessing a profound structural realignment in global capital. For the first time in the modern era, central bank allocations to gold have reached a critical tipping point, effectively challenging the dominance of US Treasuries in sovereign portfolios. This shift represents more than a move to safety; it is a strategic migration toward tangible autonomy.
                </p>
                <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                  Total gold reserves among major central banks now stand at <span className="font-bold text-[#001736]">$4.0T</span>, marginally surpassing the <span className="font-bold text-[#001736]">$3.9T</span> held in US Treasuries. This &quot;Crossover&quot; marks the end of the passive bond-proxy era and the beginning of a cycle defined by &quot;Active Asset Ownership&quot;—specifically targeting digital infrastructure, AI-driven real estate, and energy security.
                </p>
              </div>
              <div className="mt-[40px] p-[24px] bg-[#f0f4fa] border border-[#c4c6d0] flex items-center gap-[24px]">
                <span className="material-symbols-outlined text-[#001736] text-4xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                  analytics
                </span>
                <div>
                  <p className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#001736]">
                    CORE THESIS
                  </p>
                  <p className="font-[Inter] text-[16px] font-normal italic leading-[1.5] text-[#43474f]">
                    &quot;The transition from fiat-heavy reserves to physical and technological assets is the primary driver of market volatility through 2026.&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 h-full min-h-[400px] relative overflow-hidden group border border-[#c4c6d0]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Asset Class Trends Cover"
                src="/insight/unnamed4.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001736]/80 to-transparent"></div>
              <div className="absolute bottom-[24px] left-[24px] right-[24px]">
                <p className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-white/80 mb-[8px]">
                  ASSET CLASS TRENDS
                </p>
                <p className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#ffffff]">
                  The Physical Re-Orientation of Global Reserves
                </p>
              </div>
            </div>
          </section>

          {/* The Statistical Pivot */}
          <section className="mb-[64px]">
            <h2 className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] mb-[40px]">
              The Statistical Pivot: The Crossover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px]">
              {/* Chart Placeholder UI */}
              <div className="p-[24px] border border-[#c4c6d0] bg-[#ffffff]">
                <div className="flex justify-between items-center mb-[24px]">
                  <p className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#001736]">
                    PORTFOLIO CONCENTRATION (%)
                  </p>
                  <div className="flex gap-[16px]">
                    <span className="flex items-center gap-[8px] font-[Inter] text-[10px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#5d5f5f]">
                      <span className="w-2 h-2 bg-[#001736]"></span> US TREASURIES
                    </span>
                    <span className="flex items-center gap-[8px] font-[Inter] text-[10px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#cd805d]">
                      <span className="w-2 h-2 bg-[#cd805d]"></span> GOLD
                    </span>
                  </div>
                </div>
                <div className="h-[240px] flex items-end justify-between gap-[64px] px-[24px] border-b border-[#c4c6d0] pb-[8px]">
                  {/* 2015 */}
                  <div className="flex-1 flex flex-col items-center gap-[8px]">
                    <div className="w-full flex items-end gap-[8px] h-[180px]">
                      <div className="flex-1 bg-[#001736]" style={{ height: '33%' }}></div>
                      <div className="flex-1 bg-[#cd805d]" style={{ height: '5%' }}></div>
                    </div>
                    <span className="font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em] text-[#5d5f5f]">
                      2015
                    </span>
                  </div>
                  {/* 2026 */}
                  <div className="flex-1 flex flex-col items-center gap-[8px]">
                    <div className="w-full flex items-end gap-[8px] h-[180px]">
                      <div className="flex-1 bg-[#001736]" style={{ height: '24%' }}></div>
                      <div className="flex-1 bg-[#cd805d]" style={{ height: '20%' }}></div>
                    </div>
                    <span className="font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em] text-[#5d5f5f]">
                      2026 (EST)
                    </span>
                  </div>
                  {/* 2026 */}
                  <div className="flex-1 flex flex-col items-center gap-[8px]">
                    <div className="w-full flex items-end gap-[8px] h-[180px]">
                      <div className="flex-1 bg-[#001736]" style={{ height: '21%' }}></div>
                      <div className="flex-1 bg-[#cd805d]" style={{ height: '24%' }}></div>
                    </div>
                    <span className="font-[Inter] text-[14px] font-bold leading-[1.4] tracking-[0.02em] text-[#001736]">
                      2026 (PROJ)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-[24px]">
                  <div className="flex items-baseline gap-[16px] mb-[8px]">
                    <span className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#001736]">
                      33%{' '}
                      <span className="material-symbols-outlined align-middle text-[#ba1a1a]">
                        trending_down
                      </span>
                    </span>
                    <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#5d5f5f]">
                      US TREASURIES (2015)
                    </span>
                  </div>
                  <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                    Significant erosion of dominance in sovereign reserves as institutional liquidity shifts toward inflation-protected commodities.
                  </p>
                </div>
                <div className="pt-[24px] border-t border-[#c4c6d0]">
                  <div className="flex items-baseline gap-[16px] mb-[8px]">
                    <span className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#cd805d]">
                      24%{' '}
                      <span className="material-symbols-outlined align-middle text-[#001736]">
                        trending_up
                      </span>
                    </span>
                    <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#5d5f5f]">
                      GOLD RESERVES (2026)
                    </span>
                  </div>
                  <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                    Gold projected to become the anchor asset for the &quot;Resilient Bloc&quot; economies seeking de-risking from dollar-denominated debt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Drivers of the Shift */}
          <section className="mb-[64px]">
            <h2 className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] mb-[40px]">
              Structural Drivers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="p-[24px] border border-[#c4c6d0] bg-[#ffffff]">
                <span className="material-symbols-outlined text-[#001736] mb-[16px]">public</span>
                <h3 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] mb-[16px]">
                  Geopolitical Resilience
                </h3>
                <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                  The weaponization of financial systems has catalyzed a race for &quot;sanction-proof&quot; assets. Sovereigns are prioritizing local physical custody over digital ledger entries in foreign jurisdictions.
                </p>
              </div>
              <div className="p-[24px] border border-[#c4c6d0] bg-[#ffffff]">
                <span className="material-symbols-outlined text-[#001736] mb-[16px]">memory</span>
                <h3 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] mb-[16px]">
                  AI Capex Wave
                </h3>
                <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                  The unprecedented demand for Data Centers and Energy infrastructure requires massive liquid capital. Wealth is shifting into equity stakes in the physical layer of the AI economy.
                </p>
              </div>
              <div className="p-[24px] border border-[#c4c6d0] bg-[#ffffff]">
                <span className="material-symbols-outlined text-[#001736] mb-[16px]">account_balance</span>
                <h3 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] mb-[16px]">
                  Debt Sustainability
                </h3>
                <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                  Persistent inflationary pressures and rising debt-to-GDP ratios in the West are forcing a re-evaluation of the 'Risk-Free Rate' concept in global macro models.
                </p>
              </div>
            </div>
          </section>

          {/* Impact on Global Businesses (Table) */}
          <section className="mb-[64px]">
            <h2 className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] mb-[40px]">
              Impact on Global Ecosystems
            </h2>
            <div className="overflow-hidden border border-[#c4c6d0]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#eaeef4] text-[#001736] border-b border-[#c4c6d0]">
                    <th className="p-[24px] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">
                      SECTOR FOCUS
                    </th>
                    <th className="p-[24px] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">
                      KEY DYNAMICS (2026–2027)
                    </th>
                    <th className="p-[24px] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">
                      QUANTITATIVE IMPACT
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#ffffff]">
                  <tr className="border-b border-[#c4c6d0] hover:bg-[#f0f4fa] transition-colors">
                    <td className="p-[24px] font-[Inter] text-[16px] leading-[1.5] text-[#001736] font-semibold">
                      Capital Markets
                    </td>
                    <td className="p-[24px] font-[Inter] text-[16px] leading-[1.5] text-[#43474f]">
                      Increased volatility in bond markets; higher sustained yields as traditional buyers exit.
                    </td>
                    <td className="p-[24px] font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em] text-[#001736]">
                      +120bps Yield Floor
                    </td>
                  </tr>
                  <tr className="border-b border-[#c4c6d0] hover:bg-[#f0f4fa] transition-colors">
                    <td className="p-[24px] font-[Inter] text-[16px] leading-[1.5] text-[#001736] font-semibold">
                      Tech &amp; Infrastructure
                    </td>
                    <td className="p-[24px] font-[Inter] text-[16px] leading-[1.5] text-[#43474f]">
                      Golden age for AI compute, regional data centers, and dedicated green energy grids.
                    </td>
                    <td className="p-[24px] font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em] text-[#001736]">
                      $450B Annual Capex
                    </td>
                  </tr>
                  <tr className="border-b border-[#c4c6d0] hover:bg-[#f0f4fa] transition-colors">
                    <td className="p-[24px] font-[Inter] text-[16px] leading-[1.5] text-[#001736] font-semibold">
                      Real Estate &amp; Industry
                    </td>
                    <td className="p-[24px] font-[Inter] text-[16px] leading-[1.5] text-[#43474f]">
                      Shift to industrial real estate and specialized facilities for domestic manufacturing.
                    </td>
                    <td className="p-[24px] font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em] text-[#001736]">
                      $180B Deal Volume (2025)
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f0f4fa] transition-colors">
                    <td className="p-[24px] font-[Inter] text-[16px] leading-[1.5] text-[#001736] font-semibold">
                      Supply Chain
                    </td>
                    <td className="p-[24px] font-[Inter] text-[16px] leading-[1.5] text-[#43474f]">
                      Accelerated &quot;Friend-shoring&quot; and vertical integration of critical minerals.
                    </td>
                    <td className="p-[24px] font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em] text-[#001736]">
                      35% Increase in Reshoring
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Strategic Outlook 2026 */}
          <section className="mb-[64px] p-[64px] bg-[#001736] text-[#ffffff]">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase text-[#7594ca] mb-[16px] block">
                CONCLUDING THOUGHTS
              </span>
              <h2 className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] mb-[24px] italic">
                The Strategic Outlook for 2026: Toward Active Asset Ownership
              </h2>
              <p className="font-[Inter] text-[18px] font-normal leading-[1.6] opacity-90 mb-[40px]">
                The era of passive, &quot;set-and-forget&quot; sovereign allocation is over. By 2026, we anticipate a landscape where wealth is defined by direct ownership of productivity. The shift from treasuries to gold and physical infrastructure is not an exit from the system, but a fundamental redesign of it. Institutional investors must adapt to a world where &quot;intrinsic value&quot; is no longer a metric of the past, but the primary requirement for the future.
              </p>
              <div className="inline-flex items-center gap-[8px] border border-[#7594ca] px-[24px] py-[16px]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">
                  OFFICIAL ANALYSIS APPROVED
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SovereignWealthShift;
