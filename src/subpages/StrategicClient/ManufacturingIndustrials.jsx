import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ManufacturingIndustrials = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter'] antialiased selection:bg-[#fed488] selection:text-[#785a1a]">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-10 pt-24 pb-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 pr-8">
          <p className="text-[12px] font-bold text-[#775a19] uppercase tracking-widest">Manufacturing & Industrials</p>
          <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] font-semibold text-[#000d22] tracking-[-0.02em]">
            Unlock Cash Trapped in Operations and Convert It into Growth.
          </h1>
          <p className="text-[18px] text-[#43474e] max-w-xl leading-[1.6]">
            For industrial firms, the balance sheet tells the truth. Inefficient operations silently consume capital that should be deployed for expansion, M&A, or shareholder return.
          </p>
          <div className="flex gap-4 pt-4">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#000d22] text-white text-[12px] font-bold uppercase tracking-widest px-6 py-4 hover:bg-[#455f88] transition-colors rounded-none"
            >
              Discuss your situation
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border border-[#c4c6cf] text-[#1c1b1b] text-[12px] font-bold uppercase tracking-widest px-6 py-4 hover:bg-[#f6f3f2] transition-colors rounded-none"
            >
              30-min diagnostic
            </button>
          </div>
        </div>
        <div className="relative h-[600px] bg-[#f0eded]">
          <img 
            alt="Industrial Operations" 
            className="absolute inset-0 w-full h-full" 
            // src="/industryimg/indstry.jpeg" 
            src="/industryimg/indstry1.jpeg" 
          />
        </div>
      </section>

      {/* Outcomes Banner */}
      <section className="bg-[#000d22] text-white border-t border-b border-[#c4c6cf]">
        <div className="max-w-[1280px] mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#c4c6cf]/30">
          <div className="p-4 flex flex-col justify-center text-center">
            <span className="font-['Newsreader'] text-[32px] font-medium text-[#e9c176] mb-2">↓ 20–35%</span>
            <span className="text-[12px] font-bold uppercase tracking-widest text-white/80">Working Capital Cycle</span>
          </div>
          <div className="p-4 flex flex-col justify-center text-center">
            <span className="font-['Newsreader'] text-[32px] font-medium text-[#e9c176] mb-2">↑ 3–8%</span>
            <span className="text-[12px] font-bold uppercase tracking-widest text-white/80">EBITDA Uplift</span>
          </div>
          <div className="p-4 flex flex-col justify-center text-center">
            <span className="font-['Newsreader'] text-[32px] font-medium text-[#e9c176] mb-2">↑ High</span>
            <span className="text-[12px] font-bold uppercase tracking-widest text-white/80">Cash Flow Predictability</span>
          </div>
        </div>
      </section>

      {/* Reality Section */}
      <section className="py-12 px-10 bg-[#f6f3f2] border-b border-[#c4c6cf]/50">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#000d22] mb-6 border-l-2 border-[#775a19] pl-4">
              The Reality: Growth hides inefficiency.
            </h2>
          </div>
          <div className="md:col-span-7 pl-0 md:pl-12 border-t md:border-t-0 md:border-l border-[#c4c6cf]/50 pt-8 md:pt-0">
            <p className="text-[18px] text-[#43474e] leading-[1.6]">
              Top-line expansion often masks fundamental operational degradation. As industrial complexity scales, working capital disciplines erode. Inventory buffers swell, receivables age, and unit economics become opaque. The result is a structural drag on valuation and an inability to self-fund strategic initiatives during market volatility.
            </p>
          </div>
        </div>
      </section>

      {/* Leaks Section (Bento Grid) */}
      <section className="py-12 px-10 bg-[#fcf9f8]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16">
            <p className="text-[12px] font-bold text-[#775a19] uppercase tracking-widest mb-4">Diagnostic Areas</p>
            <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#000d22]">Where Capital Leaks Occur</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="border border-[#c4c6cf] p-8 bg-white flex flex-col relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#775a19] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="material-symbols-outlined text-[#775a19] mb-6" style={{ fontSize: '32px' }}>inventory_2</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Inventory Bloat</h3>
              <p className="text-[16px] text-[#43474e] flex-grow leading-[1.5]">
                Misaligned demand planning leading to excessive safety stock, obsolete components, and trapped liquidity in warehouses.
              </p>
            </div>
            {/* Card 2 */}
            <div className="border border-[#c4c6cf] p-8 bg-white flex flex-col relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#775a19] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="material-symbols-outlined text-[#775a19] mb-6" style={{ fontSize: '32px' }}>visibility_off</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Cost Visibility</h3>
              <p className="text-[16px] text-[#43474e] flex-grow leading-[1.5]">
                Opaque overhead allocation and fragmented supply chain data preventing accurate real-time margin analysis.
              </p>
            </div>
            {/* Card 3 */}
            <div className="border border-[#c4c6cf] p-8 bg-white flex flex-col relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#775a19] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="material-symbols-outlined text-[#775a19] mb-6" style={{ fontSize: '32px' }}>cycle</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Receivable Cycles</h3>
              <p className="text-[16px] text-[#43474e] flex-grow leading-[1.5]">
                Lax commercial terms and inefficient collection processes extending DSO (Days Sales Outstanding) unnecessarily.
              </p>
            </div>
            {/* Card 4 */}
            <div className="border border-[#c4c6cf] p-8 bg-white flex flex-col relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#775a19] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="material-symbols-outlined text-[#775a19] mb-6" style={{ fontSize: '32px' }}>analytics</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Unit Economics</h3>
              <p className="text-[16px] text-[#43474e] flex-grow leading-[1.5]">
                Failure to isolate and address unprofitable SKUs, production lines, or client relationships dragging down aggregate performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solve Section */}
      <section className="py-12 px-10 bg-[#f0eded]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 border-l-2 border-[#775a19] pl-4">
            <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#000d22]">The Methodology: Solve.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#c4c6cf] bg-white">
            <div className="p-10 border-b md:border-b-0 md:border-r border-[#c4c6cf]">
              <p className="text-[12px] font-bold text-[#775a19] uppercase mb-2">Phase 01</p>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Diagnose</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Rapid quantitative assessment of working capital components. Identify specific points of leakage and baseline current performance against industry deciles.</p>
            </div>
            <div className="p-10 border-b md:border-b-0 md:border-r border-[#c4c6cf]">
              <p className="text-[12px] font-bold text-[#775a19] uppercase mb-2">Phase 02</p>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Design</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Architect precise, MECE structural interventions. Recalibrate inventory policies, renegotiate commercial terms, and establish stringent cost controls.</p>
            </div>
            <div className="p-10">
              <p className="text-[12px] font-bold text-[#775a19] uppercase mb-2">Phase 03</p>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Execute</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Deploy operational teams alongside management to drive change management, ensure policy adherence, and lock in cash release.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Intelligence Section */}
      <section className="py-12 px-10 bg-[#f6f3f2] border-b border-[#c4c6cf]/50">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16">
            <p className="text-[12px] font-bold text-[#775a19] uppercase tracking-widest mb-4">Strategic Reports</p>
            <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#000d22]">Industry Intelligence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-[#c4c6cf] bg-white flex flex-col group overflow-hidden">
              <div className="h-48 bg-[#c4c6cf] relative overflow-hidden">
                <img 
                  alt="Data Analytics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 mix-blend-luminosity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuClL-lyLVp-Mg6Z06PcYkP6FroZ5R6zmbQLMvFMWAlpuGapCYSY-16FWoSCZgnLF0rlN-z2FKFf5rY6WfehCEPhkp4NpnNbBNIAht_u0dKQ9C9c-kOwWyJZXcz-LfczfmXmpAamnl5n-HEUOgwURcQLmG8tNe8kJ0dO-kmQs2F_yfDu1cOsdLWyl2Nm3q6cIYjQuz2Mg5M5v14RqUPzGMZ7ETlEvv5vPXbp5qJUDQ46JJDY-Qj3P1179PvbnIUuP1Mip62UpZAngaA" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-[12px] font-bold text-[#775a19] uppercase tracking-widest mb-3">Q3 2026</p>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">2026 Industrial Market Outlook</h3>
                <p className="text-[16px] text-[#43474e] flex-grow mb-6 leading-[1.5]">An analysis of macroeconomic headwinds and their impact on global supply chains and capital allocation.</p>
                <button onClick={() => navigate('/contact')} className="inline-flex items-center text-[#775a19] text-[12px] font-bold uppercase hover:text-[#000d22] transition-colors mt-auto">
                  Read Report <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="border border-[#c4c6cf] bg-white flex flex-col group overflow-hidden">
              <div className="h-48 bg-[#c4c6cf] relative overflow-hidden">
                <img 
                  alt="Factory Floor" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 mix-blend-luminosity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYoKyA1I9XfOnv7q0Bh849IDijDN7vSw3IdSfAospyHcEUk4RfQO3BLuwTQZOeqbXRZKr-lAHeBQ6MpQNsVC2AuEnhhY6KXbV2KUyQH0O9Dq238RYIOMtwYiUKLsCHsQuGwWQnniMd5vFLfSkP6SJMPHfI5SBbXTXKkf_hoaabSvzx78rzI1PmFtouAHxRUFkZtXOwDedUrnrv61jtDpOeACiyXMLJEF9nJ4p3WU1mSpne9yqtqRVnomAPcjRgUtuS5nNBbSagnY8" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-[12px] font-bold text-[#775a19] uppercase tracking-widest mb-3">August 2026</p>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Automation & Capital Efficiency</h3>
                <p className="text-[16px] text-[#43474e] flex-grow mb-6 leading-[1.5]">Evaluating ROI timelines for next-generation robotics deployment in mid-market manufacturing.</p>
                <button onClick={() => navigate('/contact')} className="inline-flex items-center text-[#775a19] text-[12px] font-bold uppercase hover:text-[#000d22] transition-colors mt-auto">
                  Read Report <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="border border-[#c4c6cf] bg-white flex flex-col group overflow-hidden">
              <div className="h-48 bg-[#c4c6cf] relative overflow-hidden">
                <img 
                  alt="Strategic Planning" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 mix-blend-luminosity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfRjIjYb_5roLEFY7p7bgaWxVaTpjm6fC_zRMWP8yb6OYMGhJKmDTA1h9W64bNh-kkCNP_Cy5-6ZaBsNL3Ne9td32Inpo0rQ75_6PoxtiE1NzGqzFQnrFVCKJUS5RkmuNBDGg2xiOwASGRdZ1ogEUGMKkwDE6lwVeJkM4i1St3_Iev3YmUQANn9TS5WydXguGexhRBdht8iOEqAE57A0IxBRBExoQ8GvWoRywoPjBdY7YeyrvEX7Ix8d4L2g1BJAqJQgeeZoVfBt8" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-[12px] font-bold text-[#775a19] uppercase tracking-widest mb-3">July 2026</p>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Supply Chain Resilience</h3>
                <p className="text-[16px] text-[#43474e] flex-grow mb-6 leading-[1.5]">Strategic decoupling and the hidden costs of nearshoring for Tier 1 automotive suppliers.</p>
                <button onClick={() => navigate('/contact')} className="inline-flex items-center text-[#775a19] text-[12px] font-bold uppercase hover:text-[#000d22] transition-colors mt-auto">
                  Read Report <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 px-10 bg-[#fcf9f8]">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-0 border border-[#c4c6cf]">
          <div className="p-12 md:p-16 flex flex-col justify-center bg-[#000d22] text-white">
            <p className="text-[12px] font-bold text-[#e9c176] uppercase tracking-widest mb-6">Manufacturer Case Study</p>
            <h2 className="font-['Newsreader'] text-[32px] font-medium mb-8">Heavy Machinery OEM Liquidity Release</h2>
            <ul className="space-y-6 mb-12 border-t border-[#c4c6cf]/30 pt-8">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[#e9c176] mr-4">check</span>
                <span className="text-[16px] text-white/90 leading-[1.5]">Identified $45M trapped in obsolete inventory across 3 global distribution centers.</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[#e9c176] mr-4">check</span>
                <span className="text-[16px] text-white/90 leading-[1.5]">Reduced Cash Conversion Cycle by 28 days within a 6-month execution window.</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[#e9c176] mr-4">check</span>
                <span className="text-[16px] text-white/90 leading-[1.5]">Funded critical strategic acquisition entirely from internal cash generation.</span>
              </li>
            </ul>
            <button 
              onClick={() => navigate('/contact')}
              className="inline-flex items-center text-[#e9c176] text-[12px] font-bold uppercase hover:text-white transition-colors"
            >
              Read Full Institutional Case Study <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
            </button>
          </div>
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img 
              alt="Heavy Machinery Operations" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB75MThGCcx3Nbg9Ur4CmzWb7IS1O1zPf9f_yZ-dLVJ0RlyjNYteUDkq0dOZ-8ISl_qtWxqi-hxO02NgyDI99GXbBPHVct0eh4URyWZfRzeZuiNLdGGXc19uG6b1BNuieKciPSQTDzCxZL0s4JJdOVHLAl6t6Wuf8VKIi5azL27a5emrCGBjeHe-cEVgJ6rzFbQRCAPZmzZ11iZ5teKOBczJeBTJNlEPyJuTalPXEKJCPM6PszgBzDP6ohKr6msyH612TugLxQJ_Z8" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingIndustrials;