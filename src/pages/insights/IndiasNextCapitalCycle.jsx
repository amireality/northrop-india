import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const IndiasNextCapitalCycle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen font-sans antialiased selection:bg-[#aec7f6] selection:text-[#001b3d]">
      <Helmet>
        <title>India’s Next Capital Cycle: Emerging Structural Shifts | AlphaInsights</title>
        
      </Helmet>

      <main className="pt-[2px]">
        {/* Hero Section */}
        <section className="relative h-[640px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern Indian Infrastructure"
              className="w-full h-full object-cover"
              src="/insight/unnamed1.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000a1e]/95 to-[#000a1e]/40"></div>
          </div>
          <div className="relative z-10 px-[32px] md:px-[64px] max-w-[1280px] mx-auto w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#fed488] text-[#785a1a] px-3 py-1 text-[12px] font-bold uppercase tracking-widest">Global Macro</span>
                <span className="text-[#d6e3ff] text-[12px] font-bold uppercase tracking-widest">May 6, 2026</span>
              </div>
              <h1 className="font-serif text-[48px] text-white mb-6 leading-[1.1] font-semibold tracking-[-0.02em]">India’s Next Capital Cycle: Emerging Structural Shifts</h1>
              <p className="font-serif text-[24px] text-[#708ab5] italic font-medium leading-[1.3]">An Analysis of the Infrastructure-Led Growth Phase and Global Equity Mandates</p>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="bg-white py-[80px]">
          <div className="max-w-[800px] mx-auto px-6 border-l-4 border-[#e9c176] pl-12">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#775a19] mb-4">Executive Summary</h2>
            <h3 className="font-serif text-[32px] mb-6 font-medium text-[#191c1d] leading-[1.2]">The Viksit Inflection Point</h3>
            <p className="text-[18px] text-[#44474e] leading-[1.6] font-sans font-normal">
              India is entering a decisive infrastructure-led growth phase, characterized by a fundamental pivot in the capital expenditure (CAPEX) cycle. This shift marks a transition from purely consumption-driven growth to a robust investment-led framework, supported by fiscal discipline and strategic global equity mandates. As the nation targets its 'Viksit Bharat' (Developed India) vision, institutional investors are witnessing a rare structural re-rating of Indian macro-assets.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-[80px] bg-[#f8f9fa]">
          <div className="max-w-[800px] mx-auto px-6 space-y-16">
            {/* Section I */}
            <div>
              <h2 className="font-serif text-[32px] border-b border-[#c4c6cf] pb-4 mb-8 font-bold text-[#191c1d]">I. The Structural Pillars of Growth</h2>
              <p className="mb-6 text-[16px] text-[#191c1d]">The current capital cycle is anchored by three critical pillars that distinguish it from previous expansionary periods:</p>
              <ul className="space-y-4 list-none pl-0">
                {[
                  { title: "Digital Infrastructure:", text: "The seamless integration of the 'India Stack' has reduced transaction costs and enabled real-time credit flows to MSMEs." },
                  { title: "Energy Transition:", text: "Massive state-led investments in green hydrogen and solar ecosystems are positioning India as a global manufacturing alternative." },
                  { title: "Urban-Rural Nexus:", text: "Connectivity improvements via the PM Gati Shakti framework are unlocking land value and productivity in tier-2 and tier-3 cities." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#775a19] mt-1">check_circle</span>
                    <span className="text-[#44474e] text-[16px]"><strong>{item.title}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section II */}
            <div>
              <h2 className="font-serif text-[32px] border-b border-[#c4c6cf] pb-4 mb-8 font-bold text-[#191c1d]">II. The CER Model: Credit, Efficiency, Resilience</h2>
              <p className="mb-6 text-[16px] text-[#191c1d]">Our proprietary CER model indicates that the current cycle is more sustainable than the 2003-2008 boom due to improved banking health and manufacturing efficiency.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-8">
                {[
                  { title: "Credit Quality", text: "Lowest NPA levels in a decade, supporting a strong private CAPEX takeoff." },
                  { title: "Efficiency", text: "Logistics costs reduced by 140bps through multi-modal connectivity projects." },
                  { title: "Resilience", text: "Forex reserves and diversified trade routes buffer against external shocks." }
                ].map((item, idx) => (
                  <div key={idx} className="border border-[#c4c6cf] p-6 bg-white shadow-sm">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#000a1e] mb-2">{item.title}</h4>
                    <p className="text-[16px] text-[#44474e] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section III: Data Table */}
            <div>
              <h2 className="font-serif text-[32px] border-b border-[#c4c6cf] pb-4 mb-8 font-bold text-[#191c1d]">III. Implications for Global Equity Mandates</h2>
              <div className="overflow-x-auto shadow-sm">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#edeeef] border-b border-[#000a1e]">
                      <th className="py-4 px-6 text-[12px] font-bold uppercase tracking-widest text-[#000a1e]">Theme</th>
                      <th className="py-4 px-6 text-[12px] font-bold uppercase tracking-widest text-[#000a1e]">Rationale</th>
                      <th className="py-4 px-6 text-[12px] font-bold uppercase tracking-widest text-[#000a1e]">Target Sectors</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#c4c6cf]/30">
                    {[
                      { theme: "Localization", rationale: "Supply chain de-risking from China (China+1 strategy)", sectors: "Electronics, Chemicals" },
                      { theme: "Urbanization 2.0", rationale: "Massive housing and transit infrastructure upgrade", sectors: "Real Estate, Cement, Steel" },
                      { theme: "Asset Monetization", rationale: "Public sector divestment and InvIT listings", sectors: "Utilities, Railways" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#f8f9fa] transition-colors">
                        <td className="py-4 px-6 font-bold text-[#000a1e] text-[16px]">{row.theme}</td>
                        <td className="py-4 px-6 text-[#44474e] text-[16px]">{row.rationale}</td>
                        <td className="py-4 px-6 text-[#775a19] font-medium text-[16px]">{row.sectors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section IV */}
            <div>
              <h2 className="font-serif text-[32px] border-b border-[#c4c6cf] pb-4 mb-8 font-bold text-[#191c1d]">IV. The Private Sector Pivot</h2>
              <p className="mb-6 text-[16px] text-[#191c1d]">While state spending led the charge, the private sector is now exhibiting signs of a multi-year investment breakout:</p>
              <ul className="space-y-4">
                {[
                  { title: "Debt Deleveraging", text: "Corporate balance sheets are at their strongest levels since 2011, allowing for capacity expansion without distress." },
                  { title: "PLI Scheme Adoption", text: "The Production Linked Incentive schemes have seen over $12B in committed investment across 14 champion sectors." }
                ].map((item, idx) => (
                  <li key={idx} className="pl-6 border-l-2 border-[#775a19]">
                    <span className="block font-bold text-[#000a1e] mb-1 text-[18px]">{item.title}</span>
                    <p className="text-[#44474e] text-[16px] leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="bg-[#000a1e] text-white p-12 text-center flex flex-col items-center shadow-xl">
              <h3 className="font-serif text-[32px] mb-4 font-bold">Access the Comprehensive Analysis</h3>
              <p className="text-[#708ab5] mb-8 max-w-md text-[16px]">Our full 84-page report includes detailed sub-sector breakdowns, proprietary data models, and analyst price targets.</p>
              <button className="bg-[#ffdea5] text-[#261900] px-10 py-4 text-[12px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#e9c176] transition-all active:scale-95 shadow-lg">
                <span className="material-symbols-outlined">download</span>
                Download Full Report (PDF)
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndiasNextCapitalCycle;
