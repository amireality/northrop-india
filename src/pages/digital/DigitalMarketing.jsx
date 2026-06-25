import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const DigitalMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Data-Driven Digital Marketing | Northrop Management</title>
        <meta name="description" content="Engineering growth for technical products. Our MarTech solutions combine technical SEO, data-driven SEM, and performance-tuned funnel optimization." />
       
      </Helmet>

      <main className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative py-[64px] md:py-[96px] bg-[#f6f3f2] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center">
            <div className="lg:col-span-7 animate-fade-in-up">
              <span className="font-semibold text-[12px] text-[#7594cb] uppercase mb-4 block tracking-[0.05em]">Precision Marketing</span>
              <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] text-[#001736] mb-6 font-bold leading-[1.2]">Engineering Growth for Technical Products.</h1>
              <p className="text-[16px] md:text-[18px] text-[#5c5f60] max-w-2xl mb-8 leading-relaxed">
                We bridge the gap between complex engineering and market dominance. Our MarTech solutions combine technical SEO, data-driven SEM, and performance-tuned funnel optimization for the next generation of SaaS and technical platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="bg-[#001736] text-white px-8 py-4 rounded-sm text-[15px] font-medium uppercase tracking-widest hover:bg-[#002b5c] transition-colors shadow-lg w-full sm:w-auto">Start Scaling</button>
                </Link>
                <button className="border border-[#001736] text-[#001736] px-8 py-4 rounded-sm text-[15px] font-medium uppercase tracking-widest hover:bg-white/50 transition-colors">Our Methodology</button>
              </div>
            </div>
            <div className="lg:col-span-5 relative group">
              <div className="aspect-square bg-white border border-[#c4c6d0] p-2 relative z-10 shadow-xl overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Professional data visualization dashboard" 
                  src="/digitalimg/digitalmarket.png" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#aac7ff] -z-0"></div>
            </div>
          </div>
        </section>

        {/* MarTech Integration (Bento Style) */}
        <section className="py-[64px] md:py-[96px] bg-white">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="text-center mb-[64px]">
              <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] mb-4 font-semibold">The MarTech Advantage</h2>
              <div className="w-16 h-1 bg-[#7594cb] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bento Card 1: Data Strategy */}
              <div className="md:col-span-2 bg-[#f6f3f2] border border-[#c4c6d0] p-8 md:p-10 flex flex-col justify-between hover:border-[#001736] transition-colors group cursor-pointer">
                <div>
                  <span className="material-symbols-outlined text-[#001736] mb-4 text-4xl group-hover:scale-110 transition-transform">database</span>
                  <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#001736] mb-4 font-semibold">Technical SEO & Architecture</h3>
                  <p className="text-[16px] text-[#5c5f60] max-w-xl leading-relaxed">We don't just optimize keywords; we optimize infrastructure. From SSR implementation for SPA applications to semantic schema injections that Google's crawlers prioritize.</p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#7594cb] pl-4">
                    <p className="text-[12px] font-semibold text-[#454748] tracking-widest uppercase">CRAWL BUDGET</p>
                    <p className="text-[28px] md:text-[36px] font-['Noto_Serif',serif] text-[#001736] font-bold">99.9%</p>
                  </div>
                  <div className="border-l-2 border-[#7594cb] pl-4">
                    <p className="text-[12px] font-semibold text-[#454748] tracking-widest uppercase">INDEX EFFICIENCY</p>
                    <p className="text-[28px] md:text-[36px] font-['Noto_Serif',serif] text-[#001736] font-bold">+45%</p>
                  </div>
                </div>
              </div>
              {/* Bento Card 2: SEM */}
              <div className="bg-[#001736] text-white p-8 md:p-10 flex flex-col border border-[#001736] shadow-xl hover:bg-[#002b5c] transition-colors group cursor-pointer">
                <span className="material-symbols-outlined text-[#d6e3ff] mb-4 text-4xl group-hover:rotate-12 transition-transform">ads_click</span>
                <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] mb-4 font-semibold">Algorithmic SEM</h3>
                <p className="text-[16px] text-white/80 mb-8 leading-relaxed">Leveraging machine learning models to predict bid outcomes and maximize ROAS across LinkedIn, Google Ads, and technical niche networks.</p>
                <div className="mt-auto">
                  <ul className="space-y-2 text-[14px]">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Intent-Based Funnels</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Automated Bid Management</li>
                  </ul>
                </div>
              </div>
              {/* Bento Card 3: Analytics */}
              <div className="bg-white border border-[#c4c6d0] p-8 md:p-10 flex flex-col hover:border-[#001736] transition-colors group cursor-pointer">
                <span className="material-symbols-outlined text-[#001736] mb-4 text-4xl group-hover:scale-110 transition-transform">insights</span>
                <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#001736] mb-4 font-semibold">Precision Analytics</h3>
                <p className="text-[16px] text-[#5c5f60] leading-relaxed">Advanced tracking implementations using GTM, Segment, and custom event pipelines to ensure every dollar is accounted for.</p>
              </div>
              {/* Bento Card 4: Growth Engineering */}
              <div className="md:col-span-2 relative group overflow-hidden border border-[#c4c6d0] min-h-[300px] cursor-pointer">
                <div className="absolute inset-0 bg-[#001736]/40 group-hover:bg-[#001736]/20 transition-all z-10"></div>
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 transition-transform duration-[2000ms] group-hover:scale-110" 
                  alt="High-tech server infrastructure background" 
                  src="/digitalimg/digitalmarket1.png" 
                />
                <div className="relative z-20 p-8 md:p-10 h-full flex flex-col justify-end">
                  <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-white mb-2 font-semibold">Growth Product Engineering</h3>
                  <p className="text-[16px] text-white/90 max-w-lg leading-relaxed">Building viral loops and referral engines directly into your product's codebase for organic, exponential scaling.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Metrics Section */}
        <section className="py-[64px] md:py-[96px] bg-[#f0eded]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] gap-8">
              <div className="max-w-xl">
                <span className="font-semibold text-[12px] text-[#7594cb] uppercase block mb-2 tracking-[0.05em]">The Proof of Engineering</span>
                <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] font-bold">Growth Metrics & Performance Impact</h2>
              </div>
              <p className="text-[16px] text-[#5c5f60] max-w-sm">Aggregated results from our  technical marketing partnerships across B2B SaaS and Enterprise FinTech.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-8 border border-[#c4c6d0] shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                <p className="font-['Noto_Serif',serif] text-[40px] md:text-[48px] text-[#001736] mb-2 font-bold leading-none">312%</p>
                <p className="text-[12px] font-semibold text-[#454748] uppercase tracking-widest">Average ROI</p>
                <p className="text-[14px] text-[#5c5f60] mt-4">Within first 6 months</p>
              </div>
              <div className="bg-white p-8 border border-[#c4c6d0] shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                <p className="font-['Noto_Serif',serif] text-[40px] md:text-[48px] text-[#001736] mb-2 font-bold leading-none">14x</p>
                <p className="text-[12px] font-semibold text-[#454748] uppercase tracking-widest">Lead Gen Scale</p>
                <p className="text-[14px] text-[#5c5f60] mt-4">Qualified enterprise prospects</p>
              </div>
              <div className="bg-white p-8 border border-[#c4c6d0] shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                <p className="font-['Noto_Serif',serif] text-[40px] md:text-[48px] text-[#001736] mb-2 font-bold leading-none">-35%</p>
                <p className="text-[12px] font-semibold text-[#454748] uppercase tracking-widest">CAC Reduction</p>
                <p className="text-[14px] text-[#5c5f60] mt-4">Efficiency through automation</p>
              </div>
              <div className="bg-white p-8 border border-[#c4c6d0] shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                <p className="font-['Noto_Serif',serif] text-[40px] md:text-[48px] text-[#001736] mb-2 font-bold leading-none">88%</p>
                <p className="text-[12px] font-semibold text-[#454748] uppercase tracking-widest">Conv. Lift</p>
                <p className="text-[14px] text-[#5c5f60] mt-4">Technical funnel optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* MarTech Stack Integration */}
        <section className="py-[64px] md:py-[96px] bg-white">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-[#f6f3f2] border border-[#c4c6d0] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
                    <span className="text-[12px] font-bold text-[#001736] tracking-[0.1em] group-hover:scale-110 transition-transform">HUBSPOT</span>
                  </div>
                  <div className="aspect-video bg-[#f6f3f2] border border-[#c4c6d0] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
                    <span className="text-[12px] font-bold text-[#001736] tracking-[0.1em] group-hover:scale-110 transition-transform">SEGMENT</span>
                  </div>
                  <div className="aspect-video bg-[#f6f3f2] border border-[#c4c6d0] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
                    <span className="text-[12px] font-bold text-[#001736] tracking-[0.1em] group-hover:scale-110 transition-transform">MIXPANEL</span>
                  </div>
                  <div className="aspect-video bg-[#f6f3f2] border border-[#c4c6d0] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
                    <span className="text-[12px] font-bold text-[#001736] tracking-[0.1em] group-hover:scale-110 transition-transform">GOOGLE CLOUD</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] mb-8 font-semibold">Seamless MarTech Orchestration</h2>
                <p className="text-[18px] text-[#5c5f60] mb-[32px] leading-relaxed">
                  We don't just use tools; we build ecosystems. Our team specializes in the deep integration of marketing stacks with your existing engineering infrastructure, ensuring data integrity and real-time reporting.
                </p>
                <ul className="space-y-[16px]">
                  <li className="flex items-start gap-4 group">
                    <span className="material-symbols-outlined text-[#001736] group-hover:scale-110 transition-transform">link</span>
                    <div>
                      <p className="text-[15px] font-semibold text-[#001736]">Custom API Middleware</p>
                      <p className="text-[14px] text-[#5c5f60]">Syncing CRM data with proprietary product analytics.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="material-symbols-outlined text-[#001736] group-hover:scale-110 transition-transform">security</span>
                    <div>
                      <p className="text-[15px] font-semibold text-[#001736]">GDPR/CCPA Technical Compliance</p>
                      <p className="text-[14px] text-[#5c5f60]">Automated privacy governance within the data stream.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[64px] md:py-[96px] bg-[#001736] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d6e3ff] rounded-full filter blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5493f0] rounded-full filter blur-[120px]"></div>
          </div>
          <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
            <h2 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] text-white mb-6 font-bold leading-tight">Ready for Technical Scale?</h2>
            <p className="text-[18px] text-white/80 mb-10 leading-relaxed">Connect with our engineering and marketing directors to discuss a data-driven growth audit for your product.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <button className="bg-white text-[#001736] px-10 py-5 rounded-sm text-[15px] font-medium uppercase tracking-widest hover:bg-[#d6e3ff] transition-colors shadow-xl hover:scale-105 transition-all w-full sm:w-auto">Request Growth Audit</button>
              </Link>
              <button className="border border-white/30 text-white px-10 py-5 rounded-sm text-[15px] font-medium uppercase tracking-widest hover:bg-white/10 transition-colors">View Case Studies</button>
            </div>
          </div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}} />
    </>
  )
}

export default DigitalMarketing