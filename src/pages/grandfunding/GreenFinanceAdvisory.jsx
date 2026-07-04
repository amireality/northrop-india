import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const GreenFinanceAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Green Finance & Investment Advisory</title>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,200..800&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] antialiased [font-family:'Inter']">
        <main>
          {/* Hero Section */}
          <section className="max-w-[1280px] mx-auto px-8 pt-[120px] pb-[64px]">
            <div className="grid grid-cols-12 gap-[32px] items-end">
              <div className="col-span-12 md:col-span-8">
                <span className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#747878] uppercase mb-[16px] block">
                  Green Finance & Investment Advisory
                </span>
                <h1 className="font-[Newsreader] text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#1a1c1c] mt-[8px]">
                  Capital markets are increasingly directing funds toward sustainable assets.
                </h1>
              </div>
              <div className="col-span-12 md:col-span-4 pb-4">
                <p className="font-[Inter] text-[18px] font-normal leading-[1.6] text-[#444748]">
                  We provide the structural expertise and strategic intelligence required to navigate the transition to a low-carbon economy through rigorous financial instruments.
                </p>
              </div>
            </div>
            <hr className="mt-[24px] border-t border-[#E0E0E0] border-0" />
          </section>

          {/* Main Content (Services Bento) */}
          <section className="max-w-[1280px] mx-auto px-8 pb-[120px]">
            <div className="grid grid-cols-12 gap-[32px]">
              {/* Image Side */}
              <div className="col-span-12 md:col-span-6 relative h-[600px] overflow-hidden">
                <img
                  alt="Brutalist Architecture"
                  className="w-full h-full object-cover "
                  src="/grandesgimg/green-finance-investment-advisory.jpeg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-[#ffffff]">
                  <span className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] uppercase opacity-80">
                    Market Intelligence
                  </span>
                  <h3 className="font-[Newsreader] text-[24px] font-normal leading-[1.3] mt-2">
                    Strategic Asset Positioning
                  </h3>
                </div>
              </div>
              {/* Service List */}
              <div className="col-span-12 md:col-span-6 flex flex-col justify-between">
                <div className="space-y-[24px]">
                  <div className="group border-b border-[#c4c7c7] pb-[24px]">
                    <div className="flex justify-between items-center mb-[16px]">
                      <h3 className="font-[Newsreader] text-[32px] font-normal leading-[1.2] text-[#1a1c1c]">
                        Green Bond framework design
                      </h3>
                      <span className="material-symbols-outlined text-[#747878] group-hover:text-[#000000] transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                        arrow_outward
                      </span>
                    </div>
                    <p className="font-[Inter] text-[15px] font-normal leading-[1.6] text-[#444748] max-w-lg">
                      Developing comprehensive frameworks that align with ICMA Green Bond Principles, ensuring transparency and investor confidence for sovereign and corporate issuers.
                    </p>
                  </div>
                  <div className="group border-b border-[#c4c7c7] pb-[24px]">
                    <div className="flex justify-between items-center mb-[16px]">
                      <h3 className="font-[Newsreader] text-[32px] font-normal leading-[1.2] text-[#1a1c1c]">
                        ESG due diligence
                      </h3>
                      <span className="material-symbols-outlined text-[#747878] group-hover:text-[#000000] transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                        arrow_outward
                      </span>
                    </div>
                    <p className="font-[Inter] text-[15px] font-normal leading-[1.6] text-[#444748] max-w-lg">
                      Rigorous analysis of environmental, social, and governance factors to mitigate risk and identify long-term value creation in complex investment portfolios.
                    </p>
                  </div>
                  <div className="group border-b border-[#c4c7c7] pb-[24px]">
                    <div className="flex justify-between items-center mb-[16px]">
                      <h3 className="font-[Newsreader] text-[32px] font-normal leading-[1.2] text-[#1a1c1c]">
                        SLL structuring
                      </h3>
                      <span className="material-symbols-outlined text-[#747878] group-hover:text-[#000000] transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                        arrow_outward
                      </span>
                    </div>
                    <p className="font-[Inter] text-[15px] font-normal leading-[1.6] text-[#444748] max-w-lg">
                      Sustainability-Linked Loan (SLL) structuring with precisely defined KPIs and ambitious sustainability performance targets to lower the cost of capital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study Block */}
          <section className="bg-[#f3f3f4] py-[120px]">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-12 gap-[32px] items-center">
                <div className="col-span-12 md:col-span-5">
                  <span className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#000000] uppercase block mb-[16px]">
                    Case Study: Landmark Issuance
                  </span>
                  <h2 className="font-[Newsreader] text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#1a1c1c] mb-[24px] italic">
                    'India's First SLB by a Mid-Cap Renewable Developer: A ₹750 Cr Issuance'
                  </h2>
                  <div className="grid grid-cols-2 gap-[24px] pt-[24px] border-t border-[#c4c7c7]">
                    <div>
                      <span className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#444748] uppercase">
                        Value
                      </span>
                      <p className="font-[Newsreader] text-[24px] font-normal leading-[1.3] text-[#1a1c1c]">
                        ₹750 Crores
                      </p>
                    </div>
                    <div>
                      <span className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#444748] uppercase">
                        Instrument
                      </span>
                      <p className="font-[Newsreader] text-[24px] font-normal leading-[1.3] text-[#1a1c1c]">
                        SLB Framework
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-8">
                  <div className="bg-[#f9f9f9] p-[24px] border border-[#c4c7c7]">
                    <div className="mb-[24px]">
                      <span className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#747878] uppercase block mb-2">
                        The Intervention
                      </span>
                      <p className="font-[Inter] text-[18px] font-normal leading-[1.6] text-[#1a1c1c] italic">
                        "Northrop Management designed a robust Sustainability-Linked Bond (SLB) framework that integrated aggressive capacity expansion targets with carbon intensity reduction, securing oversubscription in a volatile market."
                      </p>
                    </div>

                     <Link to={"/contact"}>
                    <button className="flex items-center font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#000000] hover:text-[#5e5e5e] transition-colors uppercase border-b border-[#000000] pb-1">
                      Download Full Report
                      <span className="material-symbols-outlined ml-2 text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                        download
                      </span>
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publication Section */}
          <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-[64px]">
              <div className="max-w-xl">
                <span className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#747878] uppercase block mb-[8px]">
                  Latest Publication
                </span>
                <h2 className="font-[Newsreader] text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#1a1c1c]">
                  Intellectual Depth in Green Markets
                </h2>
              </div>
              <div className="mt-[16px] md:mt-0">


               <Link to="/insights"  className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#000000] uppercase border-b border-[#000000] pb-1"
                >
                  View All Insights
                
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 md:col-span-8 lg:col-span-6 bg-[#f9f9f9] border border-[#c4c7c7] flex flex-col group cursor-pointer hover:bg-[#f3f3f4] transition-colors duration-300">
                <div className="h-64 bg-[#e2e2e2] overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-150 mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
                </div>
                <div className="p-[24px] flex flex-col flex-grow">
                  <span className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#747878] uppercase mb-[8px]">
                    Research Paper
                  </span>
                  <h3 className="font-[Newsreader] text-[32px] font-normal leading-[1.2] text-[#1a1c1c] mb-[16px]">
                    'India's Green Finance Revolution'
                  </h3>
                  <p className="font-[Inter] text-[15px] font-normal leading-[1.6] text-[#444748] mb-[64px]">
                    A comprehensive analysis of the regulatory shifts and capital flows defining the next decade of sustainable investment in emerging markets.
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#444748]">
                      12 MIN READ
                    </span>
                    <span className="material-symbols-outlined text-[#1a1c1c]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-6 flex items-center justify-center p-[32px] bg-[#f3f3f4] border border-[#c4c7c7]">
                <div className="max-w-md text-center">
                  <img
                    alt="Geometric Concrete Detail"
                    className="w-full h-48 object-cover "
                    src="/grandesgimg/green-finance-investment-advisory1.jpeg"
                  />
                  <h4 className="font-[Newsreader] text-[24px] font-normal leading-[1.3] mb-[8px]">
                    Institutional Frameworks
                  </h4>
                  <p className="font-[Inter] text-[15px] font-normal leading-[1.6] text-[#444748]">
                    Exploring the foundational structures of sustainable finance through a lens of permanence and scale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA (Inverted Style) */}
          <section className="bg-[#1c1b1b] text-[#858383] py-[120px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 grayscale mix-blend-overlay">
              <img
                alt="Brutalist Texture"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9ft5puKjUaVtWQsd68bsgdSleynlhTPP-04O7Qrwv-xLmsM6YJVH4s4tMYyrWTcx0gFC8Z5pasiY6ZSNSfD5Z6Hie1_YvfNUgFuTFLF3mPdG1H0b8nTz4j-XcbkOJTE2bLDbbdfp9DWbOpicz8XORXG526kilgOBmI_ss0T9IjV6iSj848zLDKq-9ueo_2EsL0IAGaJK0WaIfoBiph02a_YXKXDEdWg9Psnfxzjth627Dq-WYMvQeI4LLWZFk-ANwaOLcZMp4GY0"
              />
            </div>
            <div className="max-w-[1280px] mx-auto px-8 text-center relative z-10">
              <span className="font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] text-[#858383]/60 uppercase block mb-[16px]">
                Strategic Alignment
              </span>
              <h2 className="font-[Newsreader] text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#ffffff] mb-[64px] max-w-3xl mx-auto">
                Elevate your capital strategy to meet the demands of a sustainable future.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-[24px]">
                <button className="bg-[#ffffff] text-[#000000] px-10 py-5 font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] uppercase hover:bg-[#e3e2e2] transition-colors">
                  Partner with us
                </button>
                <button className="border border-[#858383] text-[#ffffff] px-10 py-5 font-[Inter] text-[11px] font-semibold leading-[1.2] tracking-[0.1em] uppercase hover:bg-[#ffffff]/10 transition-colors">
                  Our Advisory Team
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GreenFinanceAdvisory;
