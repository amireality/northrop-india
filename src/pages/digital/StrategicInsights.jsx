import { Helmet } from 'react-helmet-async'

export default function StrategicInsights() {
  return (
    <>
      <Helmet>
        <title>Strategic Insights | Northrop Management</title>
        <meta name="description" content="Data-driven analysis and global success stories for high-stakes decision making." />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: `
        .digital-subpage {
          --primary: #002B5C;
          --background: #fcf9f8;
          --on-surface: #1c1b1b;
          --section-gap: 120px;
        }
        .strategic-shadow {
          box-shadow: 0px 4px 20px rgba(0, 43, 92, 0.05);
        }
        .font-h1 { font-family: 'Noto Serif', serif; font-size: 48px; line-height: 1.2; font-weight: 700; }
        .font-h2 { font-family: 'Noto Serif', serif; font-size: 36px; line-height: 1.3; font-weight: 600; }
        .font-h3 { font-family: 'Noto Serif', serif; font-size: 28px; line-height: 1.4; font-weight: 600; }
      `}} />

      <main className="digital-subpage pt-20 bg-[#fcf9f8] text-[#1c1b1b] font-sans">
        {/* Featured Report Hero */}
        <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-[#002B5C] py-24">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              className="w-full h-full object-cover grayscale contrast-125" 
              alt="Neural networks visualization" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPV0Pk_xHV6k_Z3cu1wEWd27aRYw8DQI1FE-FGPwzpmsBjaVx5FeS44emeYM_S6cLWzZVDP2cXp4474HCg8pAH9O7Lq8CRUi9FGCyWBEVL4YLXAm5jwT9yzh8zVHOCsafabRSvQTNUnBC5i_9fqeKVJskQw_RsNdwcjGn5NMUjm8hAfkifb6bUProoGfatTlQSjjKv_eGokdcz4S6xpWuC_MOndbTxy1LLePP_RDQoTr-yELYSJNoSva4L8RGfqu8WXER7z2DxEnU" 
            />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 lg:px-16 w-full">
            <div className="max-w-4xl">
              <span className="bg-white text-[#002B5C] px-3 py-1 text-[12px] font-semibold tracking-widest uppercase mb-6 block w-fit">Featured Report</span>
              <h1 className="font-h1 text-white mb-8">AI-Driven Transformation: Navigating the Next Frontier of Enterprise Growth.</h1>
              <p className="text-[18px] text-white opacity-90 max-w-2xl leading-relaxed mb-12">
                Explore our comprehensive analysis on how global enterprises are leveraging generative AI to restructure legacy operations and secure a sustainable competitive advantage.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-[#002B5C] px-8 py-4 text-[12px] font-semibold tracking-widest flex items-center gap-2 hover:bg-gray-100 transition-all uppercase">
                  Download Whitepaper
                  <span className="material-symbols-outlined">download</span>
                </button>
                <button className="border border-white text-white px-8 py-4 text-[12px] font-semibold tracking-widest hover:bg-white/10 transition-all uppercase">
                  View Summary
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Gallery */}
        <section className="max-w-[1280px] mx-auto px-8 lg:px-16 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-[#002B5C] pb-4">
            <div className="max-w-2xl">
              <span className="text-[12px] font-semibold text-[#002B5C] tracking-widest mb-2 block uppercase">Case Studies</span>
              <h2 className="font-h2 text-[#002B5C]">Global Success Stories</h2>
            </div>
            <div className="mt-8 md:mt-0 flex gap-6 text-[12px] font-semibold text-[#43474f] uppercase tracking-widest">
              {["All", "Retail", "Finance", "Public Sector", "Digital"].map((cat, idx) => (
                <button key={idx} className={idx === 0 ? "text-[#002B5C] border-b-2 border-[#002B5C] pb-1" : "hover:text-[#002B5C] transition-all pb-1"}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-white border-t-4 border-[#002B5C] strategic-shadow group flex flex-col">
              <div className="aspect-[16/9] overflow-hidden">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="Logistics hub" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnORNOyURUh_txgYOxBax9uQid24FkKP0L9ETWbrkBVok4ZxnhTO3h8M42FByqonPZPSYUzKgc0yg2wr2A-hXSRY7Tslve_8KlrNJ63SLcmngVy5p65Vhuk53Lb94uLi5bgF0vcOK7uyonpPSgARSwJuA-3KzO7XT4yOF0bJmNnUn9kj1A4m2t0-QjO_zRHbFzZEKQlBd1RFojR-JeVKEkicIF-RIMLnIYC9rpgOda2NbMfQGtRYQUhKtISoiKYHQvCIcl7vDQmrw" />
              </div>
              <div className="p-10 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-h3 text-[#002B5C] mb-4">Global Retailer ERP Overhaul</h3>
                  <p className="text-[16px] text-[#43474f] mb-8 leading-relaxed">
                    Replacing a fragmented legacy architecture with a unified SAP S/4HANA environment across 45 countries. We implemented a centralized intelligence layer that harmonized inventory and logistics in real-time.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                  <div>
                    <span className="text-[48px] font-bold text-[#002B5C] block leading-none">40%</span>
                    <span className="text-[12px] font-semibold text-[#43474f] uppercase">Efficiency Increase</span>
                  </div>
                  <div>
                    <span className="text-[48px] font-bold text-[#002B5C] block leading-none">$1.2B</span>
                    <span className="text-[12px] font-semibold text-[#43474f] uppercase">Cost Reduction</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-white border-t-4 border-[#002B5C] strategic-shadow group flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="Data center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8Oc6yTxOUG4usYx0dgWH_GhETa6epFJA471dZQqqf5Nn-1mrf5i-tHUqw-HPI-lj80INuouKax1b9eDarR_QjnKdZVVQouIe2x916GmL_aFPtyAgyRO8X1CQE-BN6S__mjEdB_jFk8xPC-BUmNjdZfYWiNMnzuox42REd8nNY7Z1opfuVkr95jeAAdAbRfy5YrgP5pcXO-i4c11vuyc0RaWij23Acx4B9I2MNZSu4oY1kgL7ca6FSYA-zrnooWMR5D6q-UwI9BUs" />
              </div>
              <div className="p-8 flex-grow">
                <h3 className="font-h3 text-2xl text-[#002B5C] mb-4">Financial Cyber Defense</h3>
                <p className="text-[14px] text-[#43474f] mb-6 leading-relaxed">Developing a Zero-Trust architecture for a leading investment bank to mitigate sophisticated ransomware threats.</p>
                <div className="pt-6 border-t border-gray-100">
                  <span className="text-[36px] font-bold text-[#002B5C] block leading-none">Zero</span>
                  <span className="text-[12px] font-semibold text-[#43474f] uppercase">Security Breaches</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insight Section */}
        <section className="bg-[#002B5C] text-white py-24">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <span className="text-[12px] font-semibold text-white/70 tracking-widest mb-4 uppercase block">Strategic Insight</span>
              <h3 className="font-h2 text-white mb-8">The Resilience Paradox: Why Leading Firms Invest During Downturns.</h3>
              <p className="text-[18px] opacity-90 max-w-2xl mb-12 leading-relaxed">
                Organizations that maintain strategic transformation budgets through economic volatility outperform peers by 3x during the recovery phase.
              </p>
              <button className="flex items-center gap-2 text-[12px] font-semibold tracking-widest hover:translate-x-2 transition-all uppercase">
                Read Full Analysis <span className="material-symbols-outlined">trending_flat</span>
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-[#f6f3f2] py-24 border-t border-gray-200">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-12 items-center gap-12">
            <div className="md:col-span-6">
              <h2 className="font-h2 text-[#002B5C] mb-4">Subscribe to Intelligence</h2>
              <p className="text-[16px] text-[#43474f]">Stay ahead of global trends with our monthly executive briefing on transformation and strategy.</p>
            </div>
            <div className="md:col-span-6">
              <form className="flex flex-col sm:flex-row gap-6 items-end">
                <div className="flex-grow w-full">
                  <label className="text-[12px] font-semibold text-[#43474f] mb-2 block uppercase">Work Email</label>
                  <input className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#002B5C] outline-none py-2 text-[16px] transition-all" placeholder="executive@enterprise.com" type="email" />
                </div>
                <button className="bg-[#002B5C] text-white px-8 py-3 text-[12px] font-semibold tracking-widest uppercase hover:bg-opacity-90 transition-all whitespace-nowrap">Join Briefing</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
