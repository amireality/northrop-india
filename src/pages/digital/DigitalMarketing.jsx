import { Helmet } from 'react-helmet-async'

export default function DigitalMarketing() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing | Northrop Management</title>
        <meta name="description" content="Performance-oriented growth strategies fueled by technical SEO and data-driven marketing." />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: `
        .digital-subpage {
          --primary: #002B5C;
          --background: #fcf9f8;
          --on-surface: #1c1b1b;
          --section-gap: 120px;
        }
        .font-h1 { font-family: 'Noto Serif', serif; font-size: 48px; line-height: 1.2; font-weight: 700; }
        .font-h2 { font-family: 'Noto Serif', serif; font-size: 36px; line-height: 1.3; font-weight: 600; }
        .font-h3 { font-family: 'Noto Serif', serif; font-size: 28px; line-height: 1.4; font-weight: 600; }
      `}} />

      <main className="digital-subpage pt-20 bg-[#fcf9f8] text-[#1c1b1b] font-sans">
        {/* Hero Section */}
        <section className="relative py-24 bg-[#f6f3f2] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-[12px] font-semibold text-[#002B5C] uppercase mb-4 block tracking-widest">Precision Marketing</span>
              <h1 className="font-h1 text-[#002B5C] mb-8">Engineering Growth for Technical Products.</h1>
              <p className="text-[18px] text-[#5c5f60] max-w-2xl mb-12 leading-relaxed">
                We bridge the gap between complex engineering and market dominance. Our MarTech solutions combine technical SEO, data-driven SEM, and performance-tuned funnel optimization for the next generation of technical platforms.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#002B5C] text-white px-8 py-4 rounded font-bold text-[12px] uppercase tracking-widest hover:opacity-90 transition-all">Start Scaling</button>
                <button className="border border-[#002B5C] text-[#002B5C] px-8 py-4 rounded font-bold text-[12px] uppercase tracking-widest hover:bg-white transition-all">Our Methodology</button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-square bg-white border border-gray-200 p-2 relative z-10">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Data visualization dashboard" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU5ZfLCjDBKQBUAyQo2HGVDKtBaZNlwc1Itz8EA56RRHL1IzuMCMoEquBn5omN51A-Sh2e4w5c_Bpg5CpJEl-pAkuYNQsA9WlsBFZpeaCZRgF43WtX2hUM1ier73M9Hv4LD247q672oVcv7m1DtpTYf_OjAmVZtUJ4hjF5-e4hhfZK628QJDnc_ygjEsTyXHDmXyEZSaYQYf1Ib8VlWiH4PZocH4Di4xIwhp9j_mqaRj4sDXCC9srfo_XCsbonw1osRlQ8PrnZpi4" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#002B5C]/10 -z-0"></div>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="font-h2 text-[#002B5C]">The MarTech Advantage</h2>
              <div className="w-16 h-1 bg-[#002B5C] mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-[#f6f3f2] border border-gray-200 p-10 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-[#002B5C] mb-6 text-4xl">database</span>
                  <h3 className="font-h3 text-[#002B5C] mb-4">Technical SEO & Architecture</h3>
                  <p className="text-[16px] text-[#5c5f60] max-w-xl leading-relaxed">We don't just optimize keywords; we optimize infrastructure. From SSR implementation for SPA applications to semantic schema injections that search engines prioritize.</p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#002B5C] pl-4">
                    <p className="text-[10px] font-bold text-[#5c5f60] uppercase tracking-widest">CRAWL BUDGET</p>
                    <p className="text-[36px] font-bold text-[#002B5C]">99.9%</p>
                  </div>
                  <div className="border-l-2 border-[#002B5C] pl-4">
                    <p className="text-[10px] font-bold text-[#5c5f60] uppercase tracking-widest">INDEX EFFICIENCY</p>
                    <p className="text-[36px] font-bold text-[#002B5C]">+45%</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#002B5C] text-white p-10 flex flex-col">
                <span className="material-symbols-outlined text-white/70 mb-6 text-4xl">ads_click</span>
                <h3 className="font-h3 text-white mb-4">Algorithmic SEM</h3>
                <p className="text-[16px] text-white/80 mb-8 leading-relaxed">Leveraging machine learning models to predict bid outcomes and maximize ROAS across LinkedIn, Google Ads, and technical networks.</p>
                <div className="mt-auto">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-[14px]"><span className="material-symbols-outlined text-sm">check_circle</span> Intent-Based Funnels</li>
                    <li className="flex items-center gap-2 text-[14px]"><span className="material-symbols-outlined text-sm">check_circle</span> Automated Bid Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Metrics */}
        <section className="py-24 bg-[#f0eded]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <span className="text-[12px] font-semibold text-[#002B5C] uppercase block mb-2 tracking-widest">The Proof of Engineering</span>
                <h2 className="font-h2 text-[#002B5C]">Growth Metrics & Impact</h2>
              </div>
              <p className="text-[16px] text-[#5c5f60] max-w-sm">Aggregated results from our 2023 technical marketing partnerships across B2B SaaS and Enterprise FinTech.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { val: "312%", label: "Average ROI", sub: "Within first 6 months" },
                { val: "14x", label: "Lead Gen Scale", sub: "Qualified prospects" },
                { val: "-35%", label: "CAC Reduction", sub: "Via automation" },
                { val: "88%", label: "Conv. Lift", sub: "Funnel optimization" }
              ].map((metric, idx) => (
                <div key={idx} className="bg-white p-10 border border-gray-100 shadow-sm text-center">
                  <p className="text-[48px] font-bold text-[#002B5C] mb-2">{metric.val}</p>
                  <p className="text-[10px] font-bold text-[#43474f] uppercase tracking-widest">{metric.label}</p>
                  <p className="text-[12px] text-[#5c5f60] mt-4">{metric.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#002B5C] py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-[120px]"></div>
          </div>
          <div className="max-w-4xl mx-auto px-8 lg:px-16 relative z-10">
            <h2 className="font-h1 text-white mb-8">Ready for Technical Scale?</h2>
            <p className="text-white/80 text-[18px] mb-12 leading-relaxed">Connect with our engineering and marketing directors to discuss a data-driven growth audit for your product.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-[#002B5C] px-10 py-5 rounded font-bold text-[12px] uppercase tracking-widest hover:scale-105 transition-all">Request Growth Audit</button>
              <button className="border border-white/30 text-white px-10 py-5 rounded font-bold text-[12px] uppercase tracking-widest hover:bg-white/10 transition-all">View Case Studies</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
