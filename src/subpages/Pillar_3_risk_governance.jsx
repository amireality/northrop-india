import { Link } from 'react-router-dom';

function Pillar_3_risk_governance() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col font-['Inter',sans-serif]">
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-[50px] py-[64px] md:py-[58px]">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] mb-[64px] md:mb-[128px]">
          <div className="lg:col-span-12  md:h-[614px] w-full mb-12 bg-[#eeeeee] overflow-hidden">
            <img 
              alt="Architectural structure" 
              className="w-full h-full object-cover filter grayscale opacity-90 mix-blend-multiply" 
              src="/eightpillar/riskgovernance.png"
            />
          </div>
          <div className="lg:col-span-8 lg:col-start-3 text-center">
            <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000a1e] mb-8 max-w-4xl mx-auto">
              Build the controls that let the business grow without breaking.
            </h1>
            <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#44474e] max-w-3xl mx-auto">
              In every cycle, the businesses that survive are those that price and govern risk best. We architect board-grade risk operating models that allow for aggressive growth without institutional fragility.
            </p>
          </div>
        </section>

        {/* Sub-tiles / Capabilities */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mb-[64px] md:mb-[128px]">
          <div className="p-8 border-[0.5px] border-[#c4c6cf] bg-[#ffffff] group hover:border-[#775a19] transition-colors duration-300 min-h-[320px]">
            <span className="material-symbols-outlined text-[36px] text-[#000a1e] mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>radar</span>
            <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-4">Enterprise Risk</h3>
            <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Mapping and pricing strategic threats before they materialize.</p>
          </div>
          
          <div className="p-8 border-[0.5px] border-[#c4c6cf] bg-[#ffffff] group hover:border-[#775a19] transition-colors duration-300 min-h-[320px]">
            <span className="material-symbols-outlined text-[36px] text-[#000a1e] mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
            <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-4">Board Governance</h3>
            <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Establishing institutional discipline and oversight frameworks.</p>
          </div>
          
          <div className="p-8 border-[0.5px] border-[#c4c6cf] bg-[#ffffff] group hover:border-[#775a19] transition-colors duration-300 min-h-[320px]">
            <span className="material-symbols-outlined text-[36px] text-[#000a1e] mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-4">Reputational Risk</h3>
            <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Defending the brand under pressure and crisis management.</p>
          </div>
        </section>

        {/* Process Diagram */}
        <section className="mb-[64px] md:mb-[128px]">
          <div className="border-[0.5px] border-[#c4c6cf] p-8 md:p-16 bg-[#f3f3f3]">
            <h2 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#000a1e]/60 mb-12 text-center">
              The Governance Framework
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center relative z-0">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[0.5px] bg-[#c4c6cf] -z-10"></div>
              
              <div className="bg-[#ffffff] px-6 py-4 border-[0.5px] border-[#c4c6cf] text-center min-w-[200px] mb-8 md:mb-0">
                <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#775a19] block mb-2">01</span>
                <span className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#000a1e]">Identify</span>
              </div>
              
              <div className="bg-[#ffffff] px-6 py-4 border-[0.5px] border-[#c4c6cf] text-center min-w-[200px] mb-8 md:mb-0">
                <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#775a19] block mb-2">02</span>
                <span className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#000a1e]">Measure</span>
              </div>
              
              <div className="bg-[#ffffff] px-6 py-4 border-[0.5px] border-[#c4c6cf] text-center min-w-[200px] mb-8 md:mb-0">
                <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#775a19] block mb-2">03</span>
                <span className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#000a1e]">Mitigate</span>
              </div>
              
              <div className="bg-[#ffffff] px-6 py-4 border-[0.5px] border-[#c4c6cf] text-center min-w-[200px]">
                <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#775a19] block mb-2">04</span>
                <span className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#000a1e]">Report</span>
              </div>
            </div>
          </div>
        </section>

        {/* Proof & CTA */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-[32px] items-center border-[0.5px] border-[#c4c6cf] p-8 md:p-16 bg-[#ffffff]">
          <div>
            <blockquote className="font-['Noto_Serif',serif] text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.01em] font-normal text-[#000a1e] mb-6">
              "20–25% valuation premium for firms with mature enterprise risk management."
            </blockquote>
            <cite className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#44474e] not-italic">— Deloitte–Aon</cite>
          </div>
          <div className="md:text-right mt-8 md:mt-0">
            <Link 
              to="/contact"
              className="inline-block bg-[#000a1e] text-[#ffffff] px-8 py-4 font-['Inter',sans-serif] text-[12px] leading-none font-semibold uppercase tracking-[0.1em] hover:bg-[#775a19] transition-colors duration-300"
            >
              Request a governance diagnostic
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Pillar_3_risk_governance;
