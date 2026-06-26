import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TextilesConsumer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter'] antialiased selection:bg-[#fed488] selection:text-[#785a1a]">
      {/* Hero Section */}
      <section className="py-12 px-10 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-24">
          <div>
            <h1 className="font-['Newsreader'] text-[48px] font-semibold text-[#000d22] mb-6 leading-[1.1] tracking-[-0.02em]">
              Fix Margin Leakage Across High-Volume Operations
            </h1>
            <p className="text-[18px] text-[#43474e] mb-8 max-w-2xl leading-[1.6]">
              Textiles and consumer goods supply chains are complex. We identify and seal hidden profit leaks, turning operational friction into measurable margin improvement.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-[#000d22] text-white text-[16px] font-medium hover:opacity-90 transition-opacity rounded-none"
              >
                Discuss your situation
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-transparent border border-[#000d22] text-[#000d22] text-[16px] font-medium hover:bg-[#f0eded] transition-colors rounded-none"
              >
                30-min diagnostic
              </button>
            </div>
          </div>
          <div className="relative h-[500px] w-full bg-[#f6f3f2] rounded-none overflow-hidden border border-[#c4c6cf]/30">
            <img 
              alt="Textile manufacturing facility" 
              className="w-full h-full  rounded-none" 
              src="/industryimg/textiles-consumer.jpeg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-12 px-10 bg-[#f6f3f2]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Outcome 1 */}
            <div className="p-8 bg-white border-l-2 border-[#775a19] h-full shadow-[0_20px_40px_rgba(0,0,0,0.03)] group hover:border-[#000d22] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-[#775a19] group-hover:text-[#000d22] transition-colors">trending_up</span>
                <span className="text-[12px] font-bold text-[#000d22] tracking-widest uppercase">Margin Gain</span>
              </div>
              <h3 className="font-['Newsreader'] text-[32px] font-medium text-[#000d22] mb-2">4–10%</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Increase in gross margin through pricing optimization and cost control.</p>
            </div>
            {/* Outcome 2 */}
            <div className="p-8 bg-white border-l-2 border-[#775a19] h-full shadow-[0_20px_40px_rgba(0,0,0,0.03)] group hover:border-[#000d22] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-[#775a19] group-hover:text-[#000d22] transition-colors">trending_down</span>
                <span className="text-[12px] font-bold text-[#000d22] tracking-widest uppercase">Loss Reduction</span>
              </div>
              <h3 className="font-['Newsreader'] text-[32px] font-medium text-[#000d22] mb-2">↓ Inventory</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Significant reduction in inventory losses and shrinkage across channels.</p>
            </div>
            {/* Outcome 3 */}
            <div className="p-8 bg-white border-l-2 border-[#775a19] h-full shadow-[0_20px_40px_rgba(0,0,0,0.03)] group hover:border-[#000d22] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-[#775a19] group-hover:text-[#000d22] transition-colors">visibility</span>
                <span className="text-[12px] font-bold text-[#000d22] tracking-widest uppercase">Visibility</span>
              </div>
              <h3 className="font-['Newsreader'] text-[32px] font-medium text-[#000d22] mb-2">Clarity</h3>
              <p className="text-[16px] text-[#43474e] leading-[1.5]">Enhanced pricing clarity and unified cross-channel strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaks & Solve Section */}
      <section className="py-12 px-10 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Leaks */}
          <div>
            <h2 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-8 border-b border-[#c4c6cf]/30 pb-4">Common Margin Leaks</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#ba1a1a] mt-1">warning</span>
                <div>
                  <h4 className="text-[16px] font-bold text-[#000d22]">Inventory mismanagement</h4>
                  <p className="text-[16px] text-[#43474e] leading-[1.5]">Excess stock, stockouts, and poor allocation driving up carrying costs.</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#c4c6cf]/30"></div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#ba1a1a] mt-1">warning</span>
                <div>
                  <h4 className="text-[16px] font-bold text-[#000d22]">Unstructured Discounting</h4>
                  <p className="text-[16px] text-[#43474e] leading-[1.5]">Unstructured promotional strategies eroding baseline profitability.</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#c4c6cf]/30"></div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#ba1a1a] mt-1">warning</span>
                <div>
                  <h4 className="text-[16px] font-bold text-[#000d22]">Channel inefficiency</h4>
                  <p className="text-[16px] text-[#43474e] leading-[1.5]">Misaligned omni-channel fulfillment models increasing cost-to-serve.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Solve */}
          <div className="bg-[#f0eded] p-8 border border-[#c4c6cf]/20 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#000d22]"></div>
            <h2 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-8">Our Methodology</h2>
            <div className="space-y-8">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-[#775a19] bg-white"></div>
                <div className="absolute left-[7px] top-5 w-[2px] h-[calc(100%+16px)] bg-[#c4c6cf]/50"></div>
                <h4 className="text-[12px] font-bold text-[#000d22] mb-2 uppercase tracking-widest">Phase 1</h4>
                <h5 className="text-[16px] font-bold text-[#000d22] mb-1">Diagnose</h5>
                <p className="text-[16px] text-[#43474e] leading-[1.5]">Deep-dive analytics to identify specific leakage points across the value chain.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-[#775a19] bg-white"></div>
                <div className="absolute left-[7px] top-5 w-[2px] h-[calc(100%+16px)] bg-[#c4c6cf]/50"></div>
                <h4 className="text-[12px] font-bold text-[#000d22] mb-2 uppercase tracking-widest">Phase 2</h4>
                <h5 className="text-[16px] font-bold text-[#000d22] mb-1">Design</h5>
                <p className="text-[16px] text-[#43474e] leading-[1.5]">Develop robust, scalable operational frameworks to seal identified leaks.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-[#775a19] bg-[#775a19]"></div>
                <h4 className="text-[12px] font-bold text-[#000d22] mb-2 uppercase tracking-widest">Phase 3</h4>
                <h5 className="text-[16px] font-bold text-[#000d22] mb-1">Execute</h5>
                <p className="text-[16px] text-[#43474e] leading-[1.5]">Implementation oversight and change management for sustained results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Intelligence Section */}
      <section className="py-12 px-10 bg-[#f6f3f2] border-t border-[#c4c6cf]/20">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-10 text-center">
            <h2 className="font-['Newsreader'] text-[48px] font-semibold text-[#000d22] leading-[1.1] tracking-[-0.02em]">Strategic Reports</h2>
            <p className="text-[16px] text-[#43474e] mt-4">Actionable insights for high-volume operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] border-t-2 border-[#000d22] hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
              <div className="h-48 bg-[#eae7e7] overflow-hidden">
                <img 
                  alt="Market Outlook" 
                  className="w-full h-full object-cover " 
                  src="/industryimg/textiles-consumer1.jpeg" 
                />
              </div>
              <div className="p-8">
                <div className="text-[12px] font-bold text-[#775a19] tracking-widest uppercase mb-3">Oct 15, 2024</div>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4 leading-tight">2024 Market Outlook: Textiles & Consumer Goods</h3>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 text-[16px] font-bold text-[#000d22] hover:text-[#775a19] transition-colors"
                >
                  Read Report <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] border-t-2 border-[#000d22] hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
              <div className="h-48 bg-[#eae7e7] overflow-hidden">
                <img 
                  alt="Supply Chain Resilience" 
                  className="w-full h-full object-cover" 
                  src="/industryimg/textiles-consumer3.jpeg" 
                />
              </div>
              <div className="p-8">
                <div className="text-[12px] font-bold text-[#775a19] tracking-widest uppercase mb-3">Sep 28, 2024</div>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4 leading-tight">Supply Chain Resilience Strategies</h3>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 text-[16px] font-bold text-[#000d22] hover:text-[#775a19] transition-colors"
                >
                  Read Report <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] border-t-2 border-[#000d22] hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
              <div className="h-48 bg-[#eae7e7] overflow-hidden">
                <img 
                  alt="Pricing Optimization" 
                  className="w-full h-full object-cover grayscale " 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAadiJNJcS1v0X_RuIdqAXtFy6BBkOey-8niLnw3OcOdotOH2cCPyUE5cdNJOLEUeHVPKJTtUcsMjU8owcnfHEVjhb-YAJU3MuGiMdf2DEe4T_nx1iclTI7xqEh5XzbRA03OstgR7W3qm0Q5_VssmnT0JRB5q36bEgnVO-Vdys1YLyC-qb-CnhvRKwvSggEgk9IQZIpyXKEvDRazEb04jkjejH5qPI6yX2CHZtU-YIYi26bAXSAWswtmHDc9MsFQr2z7h7MXV13SAw" 
                />
              </div>
              <div className="p-8">
                <div className="text-[12px] font-bold text-[#775a19] tracking-widest uppercase mb-3">Aug 12, 2024</div>
                <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4 leading-tight">Pricing Optimization Models</h3>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 text-[16px] font-bold text-[#000d22] hover:text-[#775a19] transition-colors"
                >
                  Read Report <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextilesConsumer;