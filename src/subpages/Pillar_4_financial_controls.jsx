import { Link } from 'react-router-dom';

function Pillar_4_financial_controls() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col font-['Inter',sans-serif]">
      <main className="flex-grow w-full flex flex-col pt-[64px] md:pt-[58px]">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto w-full px-6 md:px-[50px] pb-16 md:pb-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] items-start">
            {/* Typography */}
            <div className="md:col-span-8 flex flex-col gap-6">
              <p className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#775a19] uppercase">Financial Controls Pillar</p>
              <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000a1e] max-w-4xl">
                Numbers you can defend in front of any auditor or investor.
              </h1>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end h-full mt-8 md:mt-0">
              <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#44474e] max-w-md pt-4 border-t-[0.5px] border-[#c4c6cf]">
                Numbers are no longer just a record of the past they are the product the company sells to its board and investors. We engineer finance functions whose data is accurate, timely, and defensible under any level of scrutiny.
              </p>
            </div>
          </div>
        </section>

        {/* Large Architectural Image */}
        <section className="max-w-[1280px] mx-auto w-full px-6 md:px-[50px] pb-[64px] md:pb-[18px]">
          <div className="w-full h-[400px]  bg-[#eeeeee] relative overflow-hidden border-[0.5px] border-[#c4c6cf]">
            <img 
              alt="Modern office architecture" 
              className="w-full h-full" 
              src="/eightpillar/financial-controls.jpeg"
            />
          </div>
        </section>

        {/* Solutions Bento Grid */}
        <section className="bg-[#f3f3f3] border-y-[0.5px] border-[#c4c6cf] py-[18px] md:py-[18px]">
          <div className="max-w-[1280px] mx-auto w-full px-6 md:px-[38px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c4c6cf] border-[0.5px] border-[#c4c6cf]">
              {/* Item 1 */}
              <div className="bg-[#ffffff] p-8 md:p-12 flex flex-col justify-between h-[280px] md:h-[320px] hover:bg-[#f9f9f9] transition-colors">
                <span aria-hidden="true" className="material-symbols-outlined text-[#775a19]" style={{ fontSize: '32px' }}>timer</span>
                <div>
                  <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-2">Close Acceleration</h3>
                  <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Best-in-class monthly reporting cycles.</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="bg-[#ffffff] p-8 md:p-12 flex flex-col justify-between h-[280px] md:h-[320px] hover:bg-[#f9f9f9] transition-colors">
                <span aria-hidden="true" className="material-symbols-outlined text-[#775a19]" style={{ fontSize: '32px' }}>security</span>
                <div>
                  <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-2">Internal Controls (IFC)</h3>
                  <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Remediating control environments.</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="bg-[#ffffff] p-8 md:p-12 flex flex-col justify-between h-[280px] md:h-[320px] hover:bg-[#f9f9f9] transition-colors">
                <span aria-hidden="true" className="material-symbols-outlined text-[#775a19]" style={{ fontSize: '32px' }}>dashboard</span>
                <div>
                  <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-2">MIS & Dashboards</h3>
                  <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Real-time decision support.</p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="bg-[#ffffff] p-8 md:p-12 flex flex-col justify-between h-[280px] md:h-[320px] hover:bg-[#f9f9f9] transition-colors">
                <span aria-hidden="true" className="material-symbols-outlined text-[#775a19]" style={{ fontSize: '32px' }}>fact_check</span>
                <div>
                  <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#000a1e] mb-2">Audit Readiness</h3>
                  <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Certifying numbers for the public market.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Element & CTA */}
        <section className="max-w-[1280px] mx-auto w-full px-6 md:px-[18px] py-[20px] md:py-[18px] text-center flex flex-col items-center justify-center gap-12">
          <h2 className="font-['Noto_Serif',serif] text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.01em] font-normal text-[#000a1e] max-w-2xl mx-auto">
            "3–5 days is the best-in-class monthly close cycle (APQC)."
          </h2>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#000a1e] text-[#ffffff] font-['Inter',sans-serif] text-[12px] leading-none font-semibold uppercase tracking-[0.1em] hover:text-[#ffdea5] transition-colors border-[0.5px] border-[#000a1e] hover:border-[#ffdea5] rounded-none"
          >
            Book a controls health-check
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Pillar_4_financial_controls;
