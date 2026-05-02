
import { Link } from 'react-router-dom';

function Pillar_2_capital_advisory() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col font-['Inter',sans-serif]">
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-[50px] pb-[64px] md:pb-[50px]">
        {/* Hero Section */}
        <section className="pt-16 pb-[64px] md:pb-[128px] border-b border-[#c4c6cf]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] items-center">
            <div className="lg:col-span-6 space-y-8">
              <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000a1e]">
                The right capital, on the right terms, from the right partner.
              </h1>
              <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#44474e] max-w-xl">
                A well-engineered capital stack is a competitive weapon. We help Indian mid-market firms optimize their debt-equity mix and prepare to be underwritten by sophisticated institutional investors.
              </p>
              <div className="pt-4">
                <Link 
                  to="/contact"
                  className="bg-[#000a1e] text-[#ffffff] font-['Inter',sans-serif] text-[12px] leading-none font-semibold px-8 py-4 border border-[#000a1e] hover:border-b-[#ffdea5] hover:text-[#ffdea5] transition-all duration-300 rounded-none inline-flex items-center gap-2 uppercase tracking-[0.1em]"
                >
                  Discuss your capital plan
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative h-[400px] md:h-[600px]">
              <img 
                alt="Modern financial district" 
                className="w-full h-full object-cover grayscale-[20%]" 
                src="/eightpillar/capitaladvisory.png"
              />
            </div>
          </div>
        </section>

        {/* Sub-tiles (Bento Grid) */}
        <section className="py-[64px] md:py-[128px]">
          <h2 className="font-['Noto_Serif',serif] text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.01em] font-normal text-[#000a1e] mb-16 text-center">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            <div className="border border-[#c4c6cf] p-8 bg-[#ffffff] hover:bg-[#f3f3f3] transition-colors duration-300 group">
              <span className="material-symbols-outlined text-[32px] leading-[1.2] text-[#000a1e] mb-6 group-hover:text-[#775a19] transition-colors">account_balance</span>
              <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-4">Debt Structuring</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Optimizing cost of capital through tailored debt instruments and strategic lender relationships.</p>
            </div>
            
            <div className="border border-[#c4c6cf] p-8 bg-[#ffffff] hover:bg-[#f3f3f3] transition-colors duration-300 group">
              <span className="material-symbols-outlined text-[32px] leading-[1.2] text-[#000a1e] mb-6 group-hover:text-[#775a19] transition-colors">trending_up</span>
              <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-4">Equity Raising</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Connecting high-growth firms with private equity and growth capital aligned with long-term vision.</p>
            </div>
            
            <div className="border border-[#c4c6cf] p-8 bg-[#ffffff] hover:bg-[#f3f3f3] transition-colors duration-300 group">
              <span className="material-symbols-outlined text-[32px] leading-[1.2] text-[#000a1e] mb-6 group-hover:text-[#775a19] transition-colors">fact_check</span>
              <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-4">Investor Readiness</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Preparing financial models, pitch materials, and management narratives for institutional scrutiny.</p>
            </div>
            
            <div className="border border-[#c4c6cf] p-8 bg-[#ffffff] hover:bg-[#f3f3f3] transition-colors duration-300 group">
              <span className="material-symbols-outlined text-[32px] leading-[1.2] text-[#000a1e] mb-6 group-hover:text-[#775a19] transition-colors">handshake</span>
              <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-4">Term-Sheet Negotiation</h3>
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Protecting founder interests and ensuring favorable terms throughout the transaction lifecycle.</p>
            </div>
          </div>
        </section>

        {/* Trust Signal & Proof */}
        <section className="py-[64px] md:py-[128px] border-t border-[#c4c6cf]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] items-center">
            <div className="border border-[#c4c6cf] p-8 md:p-12 bg-[#f9f9f9]">
              <h3 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] uppercase mb-4">Network</h3>
              <p className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e]">Engagement across Private Equity, Family Offices, and Global Lenders.</p>
            </div>
            
            <div className="border border-[#c4c6cf] p-8 md:p-12 bg-[#000a1e] text-[#ffffff]">
              <h3 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#ffdea5] uppercase mb-4">Impact</h3>
              <p className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal">100–300 bps of WACC reduction is achievable through optimized capital structure (PwC).</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Pillar_2_capital_advisory;
