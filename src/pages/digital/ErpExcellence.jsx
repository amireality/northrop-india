import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const ErpExcellence = () => {
  return (
    <>
      <Helmet>
        <title>ERP Excellence & Enterprise Strategy | Northrop Management</title>
        <meta name="description" content="Navigating the complexities of global enterprise orchestration with precision-engineered ERP solutions. SAP, Oracle, and Microsoft Dynamics integration." />
      </Helmet>

      <main className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter',sans-serif]">
        {/* Section 1: Hero */}
        <section className="relative bg-[#fcf9f8] py-[20px] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 z-10 animate-fade-in-up">
              <span className="font-semibold text-[12px] text-[#002b5c] tracking-[0.05em] uppercase mb-8 block">Enterprise Strategy</span>
              <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] text-[#002b5c] mb-[64px] max-w-2xl font-bold leading-[1.2]">
                Digital Transformation & ERP Integration
              </h1>
              <p className="text-[18px] text-[#43474f] mb-[64px] max-w-xl leading-[1.6]">
                Navigating the complexities of global enterprise orchestration with precision-engineered ERP solutions. We harmonize your technological landscape to drive unprecedented operational clarity and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <Link to="/contact">
                  <button className="bg-[#002b5c] text-white px-8 py-4 text-[12px] font-bold uppercase tracking-widest hover:shadow-lg transition-all w-full sm:w-auto cursor-pointer">
                    Speak to a Transformation Expert
                  </button>
                </Link>

                  <Link to="/contact">
                <button className="border border-[#002b5c] text-[#002b5c] px-8 py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-[#002b5c] hover:text-white transition-all cursor-pointer">
                  View Case Studies
                </button>

                </Link>
              </div>
            </div>
            <div className="md:col-span-5 relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-[#002b5c] opacity-10 transform translate-x-4 translate-y-4"></div>
              <img 
                alt="Strategic data visualization" 
                className="w-full h-full object-cover relative z-10 shadow-[0px_4px_20px_rgba(0,43,92,0.08)]" 
                src="/digitalimg/erp.png" 
              />
            </div>
          </div>
        </section>

        {/* Section 2: Our Framework */}
        <section className="bg-[#f6f3f2] py-[20px]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="border-t-2 border-[#002b5c] pt-8 mb-[64px]">
              <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#002b5c] font-semibold leading-[1.3]">Our Framework</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Stage 1 */}
              <div className="group cursor-pointer">
                <div className="text-[#002b5c] opacity-20 text-[40px] font-light mb-4 leading-none">01</div>
                <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#002b5c] mb-4 font-semibold leading-[1.4]">Assessment</h3>
                <p className="text-[14px] text-[#43474f] leading-[1.5]">Comprehensive audit of current infrastructure, data silos, and operational bottlenecks.</p>
                <div className="mt-8 h-0.5 bg-[#002b5c] w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
              {/* Stage 2 */}
              <div className="group cursor-pointer">
                <div className="text-[#002b5c] opacity-20 text-[40px] font-light mb-4 leading-none">02</div>
                <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#002b5c] mb-4 font-semibold leading-[1.4]">Strategy</h3>
                <p className="text-[14px] text-[#43474f] leading-[1.5]">Defining the digital roadmap, vendor selection, and long-term scalability milestones.</p>
                <div className="mt-8 h-0.5 bg-[#002b5c] w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
              {/* Stage 3 */}
              <div className="group cursor-pointer">
                <div className="text-[#002b5c] opacity-20 text-[40px] font-light mb-4 leading-none">03</div>
                <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#002b5c] mb-4 font-semibold leading-[1.4]">Implementation</h3>
                <p className="text-[14px] text-[#43474f] leading-[1.5]">Agile deployment of core modules with rigorous UAT and data migration protocols.</p>
                <div className="mt-8 h-0.5 bg-[#002b5c] w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
              {/* Stage 4 */}
              <div className="group cursor-pointer">
                <div className="text-[#002b5c] opacity-20 text-[40px] font-light mb-4 leading-none">04</div>
                <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#002b5c] mb-4 font-semibold leading-[1.4]">Optimization</h3>
                <p className="text-[14px] text-[#43474f] leading-[1.5]">Continuous refinement through AI-driven insights and process automation scaling.</p>
                <div className="mt-8 h-0.5 bg-[#002b5c] w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Enterprise Solutions */}
        <section className="bg-[#fcf9f8] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] gap-8">
              <div className="max-w-xl">
                <div className="border-t-2 border-[#002b5c] pt-8">
                  <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#002b5c] font-semibold leading-[1.3]">Enterprise Solutions</h2>
                </div>
                <p className="text-[16px] text-[#43474f] mt-4 leading-[1.6]">Platform-agnostic expertise ensuring your organization leverages the world's most powerful ERP ecosystems.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* SAP */}
              <div className="bg-white p-8 md:p-10 border-t-2 border-[#002b5c] shadow-[0px_4px_20px_rgba(0,43,92,0.08)] flex flex-col h-full cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-[#002b5c] mb-8 text-4xl">hub</span>
                <h4 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#002b5c] mb-4 font-semibold">SAP S/4HANA</h4>
                <p className="text-[14px] text-[#43474f] mb-8 flex-grow leading-[1.5]">Advanced implementation and migration services for the world's leading intelligent ERP suite.</p>
                <ul className="space-y-3 mb-10">
                  <li className="text-[14px] text-[#1c1b1b] flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#002b5c] before:mr-3">Finance & Controlling</li>
                  <li className="text-[14px] text-[#1c1b1b] flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#002b5c] before:mr-3">Supply Chain Management</li>
                  <li className="text-[14px] text-[#1c1b1b] flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#002b5c] before:mr-3">Ariba Network Integration</li>
                </ul>
                <button className="text-[12px] font-bold text-[#002b5c] border-b border-[#002b5c] self-start hover:opacity-70 transition-opacity uppercase tracking-widest">Explore SAP Services</button>
              </div>
              {/* Oracle */}
              <div className="bg-white p-8 md:p-10 border-t-2 border-[#002b5c] shadow-[0px_4px_20px_rgba(0,43,92,0.08)] flex flex-col h-full cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-[#002b5c] mb-8 text-4xl">database</span>
                <h4 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#002b5c] mb-4 font-semibold">Oracle Cloud ERP</h4>
                <p className="text-[14px] text-[#43474f] mb-8 flex-grow leading-[1.5]">Scalable cloud solutions designed for agile performance and global financial compliance.</p>
                <ul className="space-y-3 mb-10">
                  <li className="text-[14px] text-[#1c1b1b] flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#002b5c] before:mr-3">Risk Management Cloud</li>
                  <li className="text-[14px] text-[#1c1b1b] flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#002b5c] before:mr-3">EPM & Financial Reporting</li>
                  <li className="text-[14px] text-[#1c1b1b] flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#002b5c] before:mr-3">HCM Cloud Integration</li>
                </ul>
                <button className="text-[12px] font-bold text-[#002b5c] border-b border-[#002b5c] self-start hover:opacity-70 transition-opacity uppercase tracking-widest">Explore Oracle Services</button>
              </div>
              {/* MS Dynamics */}
              <div className="bg-white p-8 md:p-10 border-t-2 border-[#002b5c] shadow-[0px_4px_20px_rgba(0,43,92,0.08)] flex flex-col h-full cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-[#002b5c] mb-8 text-4xl">cloud_sync</span>
                <h4 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#002b5c] mb-4 font-semibold">Microsoft Dynamics 365</h4>
                <p className="text-[14px] text-[#43474f] mb-8 flex-grow leading-[1.5]">Seamlessly connecting your business data with the familiarity of the Microsoft ecosystem.</p>
                <ul className="space-y-3 mb-10">
                  <li className="text-[14px] text-[#1c1b1b] flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#002b5c] before:mr-3">Business Central Integration</li>
                  <li className="text-[14px] text-[#1c1b1b] flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#002b5c] before:mr-3">Power BI Visualizations</li>
                  <li className="text-[14px] text-[#1c1b1b] flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#002b5c] before:mr-3">Azure Cloud Migration</li>
                </ul>
                <button className="text-[12px] font-bold text-[#002b5c] border-b border-[#002b5c] self-start hover:opacity-70 transition-opacity uppercase tracking-widest">Explore MS Services</button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: ROI & Metrics */}
        <section className="bg-[#002b5c] text-white py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid md:grid-cols-2 gap-[64px] lg:gap-[120px] items-center">
            <div className="animate-fade-in">
              <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-white mb-8 font-semibold">Quantifiable Impact</h2>
              <p className="text-[18px] text-white/80 mb-[64px] leading-[1.6]">
                Our transformations aren't just about software; they are about measurable economic value. We focus on the KPIs that matter most to your board.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <div className="text-[32px] md:text-[40px] font-light text-white mb-2 leading-none">35%</div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-white/70">Efficiency Gain</p>
                </div>
                <div>
                  <div className="text-[32px] md:text-[40px] font-light text-white mb-2 leading-none">22%</div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-white/70">Cost Reduction</p>
                </div>
                <div>
                  <div className="text-[32px] md:text-[40px] font-light text-white mb-2 leading-none">60%</div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-white/70">Faster Reporting</p>
                </div>
                <div>
                  <div className="text-[32px] md:text-[40px] font-light text-white mb-2 leading-none">15M+</div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-white/70">Annual Savings</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 md:p-10 shadow-[0px_4px_20px_rgba(0,43,92,0.08)] border-l-4 border-[#002b5c] cursor-pointer group">
              <h5 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#002b5c] mb-8 font-semibold">Strategic High-Point</h5>
              <div className="h-64 flex items-end gap-4 border-b border-[#c4c6d0] pb-4 mb-8 relative">
                {/* Chart visualization */}
                <div className="bg-[#5c5f60] opacity-40 h-20 w-full" title="Baseline"></div>
                <div className="bg-[#264779] h-40 w-full" title="Phase 1"></div>
                <div className="bg-[#002b5c] h-56 w-full relative group-hover:scale-y-105 transition-transform origin-bottom" title="Optimized">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#002b5c] font-bold text-lg">PEAK</div>
                </div>
                <div className="bg-[#002b5c] h-60 w-full opacity-90" title="Future State"></div>
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                  <div className="border-t border-[#002b5c] w-full"></div>
                  <div className="border-t border-[#002b5c] w-full"></div>
                  <div className="border-t border-[#002b5c] w-full"></div>
                </div>
              </div>
              <p className="text-[14px] text-[#43474f] italic leading-relaxed">
                Real-time visualization of process latency reduction post-ERP integration across global supply nodes.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#fcf9f8] py-[20px] text-center">
          <div className="max-w-3xl mx-auto px-8">
            <h2 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] text-[#002b5c] mb-8 font-bold leading-[1.2]">Ready to redefine your enterprise landscape?</h2>
            <p className="text-[18px] text-[#43474f] mb-[64px] leading-[1.6]">
              Join the ranks of Fortune 500 leaders who have scaled their operations through Transformation Strategic.
            </p>
            <Link to="/contact">
              <button className="bg-[#002b5c] text-white px-12 py-5 text-[12px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl w-full sm:w-auto cursor-pointer">
                Speak to a Transformation Expert
              </button>
            </Link>
          </div>
        </section>
      </main>

    </>
  )
}

export default ErpExcellence