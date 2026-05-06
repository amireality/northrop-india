import { Link } from 'react-router-dom';

function Pillar_8_ipo_readiness() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col font-['Inter',sans-serif]">
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-[38px] py-[18px] flex flex-col gap-[32px] md:gap-[50px]">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-[32px] items-center">
          <div className="md:col-span-5 flex flex-col gap-8 order-2 md:order-1">
            <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000a1e]">
              Be the company investors want to underwrite.
            </h1>
            <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#44474e] max-w-lg">
              An IPO is not a fundraising event—it is the public certification of an institution. We prepare businesses for the public markets, covering governance, financial reporting, and the articulation of a defensible equity story.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 border-b-2 border-[#775a19] pb-2 font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#000a1e] hover:text-[#775a19] transition-colors group"
              >
                Start your readiness assessment
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">east</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-7 h-[300px] md:h-[400px] w-full order-1 md:order-2 bg-[#f3f3f3] border border-[#c4c6cf] overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale-[20%] mix-blend-multiply opacity-90" 
              src="/eightpillar/ipo.png"
              alt="Institutional stock exchange architecture"
            />
          </div>
        </section>

        {/* Sub-tiles / Pillars Grid */}
        <section className="flex flex-col gap-[32px] border-t border-[#c4c6cf] pt-[18px]">
          <div className="flex items-center justify-between">
            <h2 className="font-['Noto_Serif',serif] text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.01em] font-normal text-[#000a1e]">Pillars of Preparation</h2>
            <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#74777f]">Phase 01</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#c4c6cf] bg-[#ffffff]">
            {/* Tile 1 */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-[#c4c6cf] flex flex-col gap-6 hover:bg-[#f9f9f9] transition-colors">
              <div className="text-[#775a19]">
                <span className="material-symbols-outlined text-[32px]">account_balance</span>
              </div>
              <div>
                <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-2">Governance & Board</h3>
                <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Building institutional credibility through structured oversight and independent leadership.</p>
              </div>
            </div>
            {/* Tile 2 */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#c4c6cf] flex flex-col gap-6 hover:bg-[#f9f9f9] transition-colors">
              <div className="text-[#775a19]">
                <span className="material-symbols-outlined text-[32px]">query_stats</span>
              </div>
              <div>
                <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-2">Financial Reporting</h3>
                <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Meeting exacting public market standards with rigorous audit readiness and control frameworks.</p>
              </div>
            </div>
            {/* Tile 3 */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-[#c4c6cf] flex flex-col gap-6 hover:bg-[#f9f9f9] transition-colors">
              <div className="text-[#775a19]">
                <span className="material-symbols-outlined text-[32px]">gavel</span>
              </div>
              <div>
                <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-2">Disclosure & Compliance</h3>
                <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Ensuring strict regulatory defensibility across all internal and external communications.</p>
              </div>
            </div>
            {/* Tile 4 */}
            <div className="p-8 flex flex-col gap-6 hover:bg-[#f9f9f9] transition-colors">
              <div className="text-[#775a19]">
                <span className="material-symbols-outlined text-[32px]">psychology</span>
              </div>
              <div>
                <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-2">Equity Story</h3>
                <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Articulating a compelling, data-backed value proposition that resonates with institutional capital.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Readiness Scorecard & Proof */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] items-start border-t border-[#c4c6cf] pt-[18px]">
          {/* Proof Element */}
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1 lg:pr-16">
            <span className="material-symbols-outlined text-[#775a19] text-[48px] opacity-50">format_quote</span>
            <p className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000a1e] leading-tight">
              30% higher post-listing TSR in companies that begin formal readiness 24+ months ahead.
            </p>
            <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#74777f] uppercase pt-4 border-t border-[#c4c6cf] w-1/3">
              Ernst & Young Global
            </span>
          </div>
          
          {/* Scorecard Visual */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#c4c6cf] p-6 md:p-8 order-1 lg:order-2 w-full">
            <div className="flex justify-between items-end border-b border-[#000a1e] pb-4 mb-8">
              <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e]">5-Dimension Readiness</h3>
              <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#74777f] uppercase">Diagnostic Benchmark</span>
            </div>
            
            <div className="flex flex-col gap-0">
              {/* Dimension Row 1 */}
              <div className="flex justify-between items-center py-5 border-b border-[#c4c6cf]/50 group">
                <span className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#000a1e]">Corporate Governance Structure</span>
                <div className="flex gap-2">
                  <div className="w-8 md:w-12 h-1 bg-[#c4c6cf]"></div>
                  <div className="w-8 md:w-12 h-1 bg-[#c4c6cf]"></div>
                  <div className="w-8 md:w-12 h-1 bg-[#775a19]"></div>
                </div>
              </div>
              
              {/* Dimension Row 2 */}
              <div className="flex justify-between items-center py-5 border-b border-[#c4c6cf]/50 group">
                <span className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#000a1e]">Historical Financial Audits</span>
                <div className="flex gap-2">
                  <div className="w-8 md:w-12 h-1 bg-[#c4c6cf]"></div>
                  <div className="w-8 md:w-12 h-1 bg-[#775a19]"></div>
                  <div className="w-8 md:w-12 h-1 bg-[#775a19]"></div>
                </div>
              </div>
              
              {/* Dimension Row 3 */}
              <div className="flex justify-between items-center py-5 border-b border-[#c4c6cf]/50 group">
                <span className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#000a1e]">Internal Controls (SOX equivalent)</span>
                <div className="flex gap-2">
                  <div className="w-8 md:w-12 h-1 bg-[#775a19]"></div>
                  <div className="w-8 md:w-12 h-1 bg-[#c4c6cf]"></div>
                  <div className="w-8 md:w-12 h-1 bg-[#c4c6cf]"></div>
                </div>
              </div>
              
              {/* Dimension Row 4 */}
              <div className="flex justify-between items-center py-5 border-b border-[#c4c6cf]/50 group">
                <span className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#000a1e]">Investor Relations Framework</span>
                <div className="flex gap-2">
                  <div className="w-8 md:w-12 h-1 bg-[#c4c6cf]"></div>
                  <div className="w-8 md:w-12 h-1 bg-[#c4c6cf]"></div>
                  <div className="w-8 md:w-12 h-1 bg-[#775a19]"></div>
                </div>
              </div>
              
              {/* Dimension Row 5 */}
              <div className="flex justify-between items-center py-5 group">
                <span className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#000a1e]">ESG Data & Disclosures</span>
                <div className="flex gap-2">
                  <div className="w-8 md:w-12 h-1 bg-[#775a19]"></div>
                  <div className="w-8 md:w-12 h-1 bg-[#c4c6cf]"></div>
                  <div className="w-8 md:w-12 h-1 bg-[#c4c6cf]"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end gap-6 font-['Inter',sans-serif] text-[10px] leading-none font-semibold text-[#74777f] uppercase">
              <div className="flex items-center gap-2"><div className="w-3 h-1 bg-[#c4c6cf]"></div> Deficient</div>
              <div className="flex items-center gap-2"><div className="w-3 h-1 bg-[#775a19]"></div> Institutional Grade</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[18px] md:py-[32px] border-t border-b border-[#c4c6cf] flex flex-col items-center text-center gap-8 bg-[#ffffff]" id="assessment">
          <h2 className="font-['Noto_Serif',serif] text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.01em] font-normal text-[#000a1e] max-w-2xl">
            The window for preparation is closing. Ensure your institution is ready for public scrutiny.
          </h2>
          <Link 
            to="/contact" 
            className="bg-[#000a1e] text-[#ffffff] px-10 py-5 font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.15em] font-semibold uppercase hover:text-[#775a19] transition-colors duration-300 inline-block"
          >
            Start your readiness assessment
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Pillar_8_ipo_readiness;
