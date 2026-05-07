
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const StrategicInsights = () => {
  return (
    <>
      <Helmet>
        <title>Strategic Insights & Case Studies | Northrop Management</title>
        <meta name="description" content="Explore our comprehensive 2024 analysis on AI-driven transformation, global ERP overhauls, and cybersecurity resilience for the modern enterprise." />
    
      </Helmet>

      <main className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter',sans-serif]">
        {/* Featured Report Hero */}
        <section className="relative w-full min-h-[500px] flex items-center overflow-hidden bg-[#001736] py-[120px]">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              className="w-full h-full object-cover grayscale contrast-125" 
              alt="Sophisticated abstract AI neural network visualization" 
              src="/digitalimg/digitalinsight.png" 
            />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 lg:px-16 w-full grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 flex flex-col items-start space-y-8 animate-fade-in-up">
              <span className="bg-[#d6e3ff] text-[#001b3e] px-3 py-1 font-semibold text-[12px] tracking-[0.05em] uppercase">Featured Report</span>
              <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] text-white max-w-4xl font-bold leading-[1.2]">
                AI-Driven Transformation: Navigating the Next Frontier of Enterprise Growth.
              </h1>
              <p className="text-[18px] text-white/90 max-w-2xl leading-[1.6]">
                Explore our comprehensive 2024 analysis on how global enterprises are leveraging generative AI to restructure legacy operations and secure a sustainable competitive advantage in a volatile market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <button className="bg-white text-[#001736] px-8 py-4 text-[15px] font-medium tracking-widest flex items-center gap-2 border border-white hover:bg-[#eae7e7] transition-colors w-full sm:w-auto uppercase cursor-pointer">
                    DOWNLOAD WHITEPAPER
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </Link>
                <button className="border border-white text-white px-8 py-4 text-[15px] font-medium tracking-widest hover:bg-white/10 transition-colors uppercase cursor-pointer">
                  VIEW SUMMARY
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Gallery Section */}
        <section className="max-w-[1280px] mx-auto px-8 lg:px-16 py-[120px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b-2 border-[#001736] pb-4">
            <div className="max-w-2xl">
              <span className="text-[12px] font-semibold text-[#001736] tracking-[0.05em] mb-2 block uppercase">Case Studies</span>
              <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] font-bold leading-[1.3]">Global Success Stories</h2>
            </div>
            <div className="mt-8 md:mt-0 flex flex-wrap gap-4 text-[12px] font-semibold text-[#43474f] uppercase tracking-[0.05em]">
              <button className="text-[#001736] border-b-2 border-[#001736] pb-1 cursor-pointer">All</button>
              <button className="hover:text-[#001736] transition-colors pb-1 cursor-pointer">Retail</button>
              <button className="hover:text-[#001736] transition-colors pb-1 cursor-pointer">Finance</button>
              <button className="hover:text-[#001736] transition-colors pb-1 cursor-pointer">Public Sector</button>
              <button className="hover:text-[#001736] transition-colors pb-1 cursor-pointer">Digital</button>
            </div>
          </div>

          {/* Bento-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Case Study */}
            <div className="md:col-span-8 bg-white border-t-4 border-[#001736] shadow-[0px_4px_20px_rgba(0,43,92,0.05)] group flex flex-col cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  alt="Futuristic retail logistics hub" 
                  src="/digitalimg/digitalinsight1.png" 
                />
              </div>
              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#001736] mb-4 font-semibold leading-[1.4]">Global Retailer ERP Overhaul</h3>
                  <p className="text-[16px] text-[#43474f] mb-8 leading-[1.6]">
                    Replacing a fragmented legacy architecture with a unified SAP S/4HANA environment across 45 countries. We addressed the challenge of data siloization by implementing a centralized intelligence layer that harmonized inventory, sales, and logistics in real-time.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 border-t border-[#c4c6d0]/30 pt-8">
                  <div>
                    <span className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] text-[#001736] block leading-none font-bold">40%</span>
                    <span className="text-[12px] font-semibold text-[#43474f] uppercase tracking-[0.05em]">Efficiency Increase</span>
                  </div>
                  <div>
                    <span className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] text-[#001736] block leading-none font-bold">$1.2B</span>
                    <span className="text-[12px] font-semibold text-[#43474f] uppercase tracking-[0.05em]">Cost Reduction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Case Study 1 */}
            <div className="md:col-span-4 bg-white border-t-4 border-[#001736] shadow-[0px_4px_20px_rgba(0,43,92,0.05)] group flex flex-col cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  alt="High-performance servers in a data center" 
                  src="/digitalimg/digitalinsight2.png" 
                />
              </div>
              <div className="p-8 md:p-10 flex-grow">
                <h3 className="font-['Noto_Serif',serif] text-[24px] text-[#001736] mb-4 font-semibold">Financial Institution Cyber Defense</h3>
                <p className="text-[14px] text-[#43474f] mb-6 leading-[1.5]">
                  Developing a Zero-Trust architecture for a leading investment bank to mitigate sophisticated phishing and ransomware threats.
                </p>
                <div className="pt-6 border-t border-[#c4c6d0]/30">
                  <span className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] block leading-none font-bold">Zero</span>
                  <span className="text-[12px] font-semibold text-[#43474f] uppercase tracking-[0.05em]">Security Breaches</span>
                </div>
              </div>
            </div>

            {/* Secondary Case Study 2 */}
            <div className="md:col-span-4 bg-white border-t-4 border-[#001736] shadow-[0px_4px_20px_rgba(0,43,92,0.05)] group flex flex-col cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  alt="Modern public sector building architectural lines" 
                  src="/digitalimg/digitalinsight3.png" 
                />
              </div>
              <div className="p-8 md:p-10 flex-grow">
                <h3 className="font-['Noto_Serif',serif] text-[24px] text-[#001736] mb-4 font-semibold">Public Sector Digital Transformation</h3>
                <p className="text-[14px] text-[#43474f] mb-6 leading-[1.5]">
                  Migrating municipal services to a cloud-native citizen portal, enhancing accessibility and service delivery speed.
                </p>
                <div className="pt-6 border-t border-[#c4c6d0]/30">
                  <span className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] block leading-none font-bold">65%</span>
                  <span className="text-[12px] font-semibold text-[#43474f] uppercase tracking-[0.05em]">Citizen Engagement</span>
                </div>
              </div>
            </div>

            {/* Strategic Insight Card */}
            <div className="md:col-span-8 bg-[#002b5b] text-white p-8 md:p-[64px] flex flex-col justify-center border-t-4 border-[#001736] group cursor-pointer hover:bg-[#003a7a] transition-colors">
              <span className="text-[12px] font-semibold text-white/90 tracking-[0.05em] mb-4 uppercase">Strategic Insight</span>
              <h3 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-white mb-6 font-semibold leading-[1.3]">The Resilience Paradox: Why Leading Firms Invest in Complexity During Downturns.</h3>
              <p className="text-[18px] mb-8 max-w-2xl opacity-90 leading-[1.6]">
                Our research indicates that organizations that maintain strategic transformation budgets through economic volatility outperform peers by 3x during the recovery phase.
              </p>
              <button className="flex items-center gap-2 text-[15px] font-medium tracking-widest hover:translate-x-2 transition-transform uppercase">
                Read Full Analysis <span className="material-symbols-outlined">trending_flat</span>
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter / Contact CTA */}
        <section className="bg-[#f6f3f2] py-[120px] border-t border-[#c4c6d0]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
            <div className="md:col-span-6 animate-fade-in">
              <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] mb-4 font-bold leading-[1.3]">Subscribe to Intelligence</h2>
              <p className="text-[16px] text-[#43474f] leading-[1.6]">Stay ahead of global trends with our monthly executive briefing on transformation and strategy.</p>
            </div>
            <div className="md:col-span-6">
              <form className="flex flex-col sm:flex-row gap-8 items-end" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-grow w-full">
                  <label className="text-[12px] font-semibold text-[#43474f] mb-2 block uppercase tracking-[0.05em]">Work Email</label>
                  <input 
                    className="w-full bg-transparent border-b-2 border-[#c4c6d0] focus:border-[#001736] outline-none py-2 text-[16px] transition-colors" 
                    placeholder="executive@enterprise.com" 
                    type="email" 
                  />
                </div>
                <Link to="/contact">
                  <button className="bg-[#001736] text-white px-8 py-3 text-[15px] font-medium tracking-widest uppercase hover:bg-[#002b5b] transition-colors whitespace-nowrap cursor-pointer">Join Briefing</button>
                </Link>
              </form>
            </div>
          </div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      `}} />
    </>
  )
}

export default StrategicInsights