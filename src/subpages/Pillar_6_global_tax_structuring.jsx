import { Link } from 'react-router-dom';

function Pillar_6_global_tax_structuring() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col font-['Inter',sans-serif]">
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-[38px] py-[18px]">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-[32px] mb-[18px]">
          <div className="md:col-span-8 md:col-start-3 text-center mb-[18px]">
            <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000a1e] mb-8">Global Tax Structuring</h1>
            <p className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#44474e] max-w-3xl mx-auto">
              Efficient, compliant, and built to survive scrutiny.
            </p>
          </div>
          <div className="md:col-span-12 h-[300px] md:h-[400px] w-full bg-[#eeeeee] border border-[#c4c6cf] relative overflow-hidden flex items-center justify-center">
            <img 
              alt="Minimalist corporate architecture" 
              className="absolute  w-full h-full object-cover " 
              src="/eightpillar/globaltax.jpeg"
            />
           <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </section>

        {/* Intro */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-[32px] mb-[18px]">
          <div className="md:col-span-8 md:col-start-3">
            <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#44474e]">
              Tax is a balance-sheet-shaping decision, not a back-office task. We design international holding company architectures and cross-border transfer pricing models that match your global commercial footprint. Our approach ensures structural integrity across multiple jurisdictions, anticipating regulatory shifts before they impact your operational margin.
            </p>
          </div>
        </section>

        {/* Sub-tiles (Bento Grid) */}
        <section className="mb-[18px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c4c6cf] border border-[#c4c6cf]">
            {/* Tile 1 */}
            <div className="bg-[#ffffff] p-8 md:p-12 hover:bg-[#f9f9f9] transition-colors duration-300">
              <div className="mb-6 text-[#000a1e]">
                <span className="material-symbols-outlined text-[32px] font-light">account_balance</span>
              </div>
              <h3 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#775a19] uppercase mb-4">Holding Structures</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">
                Optimizing the jurisdictional mix for capital efficiency and asset protection.
              </p>
            </div>
            {/* Tile 2 */}
            <div className="bg-[#ffffff] p-8 md:p-12 hover:bg-[#f9f9f9] transition-colors duration-300">
              <div className="mb-6 text-[#000a1e]">
                <span className="material-symbols-outlined text-[32px] font-light">swap_horiz</span>
              </div>
              <h3 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#775a19] uppercase mb-4">Transfer Pricing</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">
                Ensuring global defensibility and alignment with value creation.
              </p>
            </div>
            {/* Tile 3 */}
            <div className="bg-[#ffffff] p-8 md:p-12 hover:bg-[#f9f9f9] transition-colors duration-300">
              <div className="mb-6 text-[#000a1e]">
                <span className="material-symbols-outlined text-[32px] font-light">gavel</span>
              </div>
              <h3 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#775a19] uppercase mb-4">Cross-Border Compliance</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">
                Managing trans-jurisdictional risk and regulatory adherence.
              </p>
            </div>
            {/* Tile 4 */}
            <div className="bg-[#ffffff] p-8 md:p-12 hover:bg-[#f9f9f9] transition-colors duration-300">
              <div className="mb-6 text-[#000a1e]">
                <span className="material-symbols-outlined text-[32px] font-light">flight_takeoff</span>
              </div>
              <h3 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#775a19] uppercase mb-4">NRI / Inbound Tax</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">
                Facilitating global investment flow and repatriation efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Proof Element & Jurisdiction Strip */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-[32px] mb-[18px] border-y border-[#c4c6cf] py-[18px]">
          <div className="md:col-span-8 md:col-start-3 text-center">
            <blockquote className="font-['Noto_Serif',serif] text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.01em] font-normal text-[#000a1e] mb-8">
              "200–400 bps of operating margin can be unlocked through legitimate, defensible tax structuring."
              <footer className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#44474e] mt-4 uppercase">— Industry Insight (EY)</footer>
            </blockquote>
            <div className="mt-8 pt-8 border-t border-[#c4c6cf]/50">
              <p className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.2em] font-semibold text-[#775a19] uppercase">
                UAE &nbsp;&middot;&nbsp; Singapore &nbsp;&middot;&nbsp; US &nbsp;&middot;&nbsp; UK &nbsp;&middot;&nbsp; Mauritius
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-[18px]">
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center bg-[#000a1e] text-[#ffffff] font-['Inter',sans-serif] text-[12px] leading-none font-semibold uppercase tracking-[0.1em] px-8 py-4 border border-transparent hover:border-[#775a19] hover:text-[#775a19] hover:bg-transparent transition-all duration-300 group"
          >
            Speak to a tax structuring lead
            <span className="material-symbols-outlined ml-2 text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Pillar_6_global_tax_structuring;
