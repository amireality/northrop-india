import { Link } from 'react-router-dom';

function Pillar_7_digital_sovereignty() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col font-['Inter',sans-serif]">
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col justify-end pt-[100px] md:pt-[200px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-[#eeeeee]">
            <img 
              className="w-full h-full object-cover opacity-90" 
              src="/eightpillar/digital.png"
              alt="Digital infrastructure"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#f9f9f9] via-[#f9f9f9]/80 to-transparent"></div>
          </div>
          
          {/* Content Canvas */}
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-[38px] pb-[18px]">
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 md:col-span-8 lg:col-span-6">
                <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#775a19] mb-4 block uppercase">Digital Sovereignty</span>
                <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#1a1c1c] mb-8">
                  Own your data.<br/>Run on a modern stack.<br/>Decide in real time.
                </h1>
                <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.6] font-normal text-[#44474e] max-w-lg mb-12">
                  Every modern company is now a data company. We modernize legacy ERPs, build secure data platforms, and embed AI into core finance and operations so the business can decide in real time, on data it owns.
                </p>
                <Link 
                  to="/contact"
                  className="bg-[#000a1e] text-[#ffffff] font-['Inter',sans-serif] text-[12px] leading-none font-semibold px-8 py-4 uppercase tracking-[0.1em] hover:text-[#ffdea5] transition-colors border border-transparent hover:border-b-[#ffdea5] inline-flex items-center gap-2"
                >
                  Assess your digital readiness
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section (Bento Grid) */}
        <section className="w-full max-w-[1280px] mx-auto px-6 md:px-[38px] py-[18px]">
          <div className="mb-[18px] border-b border-[#c4c6cf] pb-4">
            <h2 className="font-['Noto_Serif',serif] text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.01em] font-normal text-[#1a1c1c]">Core Competencies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            {/* Tile 1 */}
            <div className="col-span-1 md:col-span-6 border border-[#c4c6cf] p-8 bg-[#ffffff] flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-[32px] text-[#000a1e] mb-6">dns</span>
                <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#1a1c1c] mb-4">ERP Modernization</h3>
                <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Moving beyond legacy systems. Re-architecting foundational platforms for agility and scale without disrupting ongoing operations.</p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] border-b border-[#000a1e] hover:text-[#775a19] hover:border-[#775a19] transition-colors inline-block uppercase pb-1">Explore Architecture</Link>
              </div>
            </div>
            
            {/* Tile 2 */}
            <div className="col-span-1 md:col-span-6 border border-[#c4c6cf] p-8 bg-[#f3f3f3] flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-[32px] text-[#000a1e] mb-6">database</span>
                <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#1a1c1c] mb-4">Data Platform & Analytics</h3>
                <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Building the intelligent core. Creating unified, governed environments where institutional data becomes an accessible, actionable asset.</p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] border-b border-[#000a1e] hover:text-[#775a19] hover:border-[#775a19] transition-colors inline-block uppercase pb-1">View Frameworks</Link>
              </div>
            </div>
            
            {/* Tile 3 */}
            <div className="col-span-1 md:col-span-4 border border-[#c4c6cf] p-8 bg-[#f3f3f3] flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-[32px] text-[#000a1e] mb-6">shield_lock</span>
                <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#1a1c1c] mb-4">Cybersecurity</h3>
                <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Securing the institutional data asset through zero-trust architectures.</p>
              </div>
            </div>
            
            {/* Tile 4 */}
            <div className="col-span-1 md:col-span-8 border border-[#c4c6cf] p-8 bg-[#ffffff] flex flex-col justify-between min-h-[300px] relative overflow-hidden">
              <div className="relative z-10 w-full md:w-2/3">
                <span className="material-symbols-outlined text-[32px] text-[#000a1e] mb-6">memory</span>
                <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal text-[#1a1c1c] mb-4">AI Enablement</h3>
                <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e]">Driving real-time decision making. Embedding predictive models directly into operational workflows.</p>
              </div>
              {/* Abstract Background Pattern */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[#eeeeee] to-transparent opacity-50 z-0"></div>
            </div>
          </div>
        </section>

        {/* Maturity Curve Section (Asymmetric Layout) */}
        <section className="w-full bg-[#f3f3f3] py-[18px] border-y border-[#c4c6cf]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[38px]">
            <div className="grid grid-cols-12 gap-[32px] items-center">
              <div className="col-span-12 md:col-span-5 order-2 md:order-1">
                <div className="border-l border-[#000a1e] pl-8 py-4">
                  <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#775a19] mb-4 block uppercase">Evolution Paradigm</span>
                  <h2 className="font-['Noto_Serif',serif] text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.01em] font-normal text-[#1a1c1c] mb-6">The Maturity Curve</h2>
                  <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#44474e] mb-12">
                    Institutional transition is sequential. Organizations must stabilize the core before attempting to weaponize intelligence.
                  </p>
                  
                  {/* Curve Steps */}
                  <div className="space-y-8">
                    <div className="flex gap-4 opacity-50">
                      <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] w-8">01</span>
                      <div>
                        <h4 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#1a1c1c] mb-1">Legacy Core</h4>
                        <p className="font-['Inter',sans-serif] text-[14px] leading-[1.6] font-normal text-[#44474e]">Siloed data, batch processing.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#000a1e] w-8">02</span>
                      <div>
                        <h4 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#1a1c1c] mb-1 border-b border-[#c4c6cf] pb-1 inline-block">Integrated Fabric</h4>
                        <p className="font-['Inter',sans-serif] text-[14px] leading-[1.6] font-normal text-[#44474e] mt-2">Unified taxonomy, cloud-native.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <span className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#775a19] w-8">03</span>
                      <div>
                        <h4 className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold uppercase text-[#775a19] mb-1">Intelligent Enterprise</h4>
                        <p className="font-['Inter',sans-serif] text-[14px] leading-[1.6] font-normal text-[#44474e]">Real-time inference, automated action.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2 mb-12 md:mb-0">
                <div className="bg-[#000a1e] text-[#ffffff] p-12 border-t-2 border-[#775a19] flex flex-col justify-center h-full min-h-[400px]">
                  <span className="material-symbols-outlined text-4xl text-[#775a19] mb-8">monitoring</span>
                  <blockquote className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] leading-[1.3] font-normal mb-6">
                    "2× revenue growth observed in firms with mature digital cores."
                  </blockquote>
                  <cite className="font-['Inter',sans-serif] text-[12px] leading-none tracking-[0.1em] font-semibold text-[#708ab5] not-italic uppercase">— BCG Analysis</cite>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Pillar_7_digital_sovereignty;
