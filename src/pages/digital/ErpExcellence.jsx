import { Helmet } from 'react-helmet-async'

export default function ErpExcellence() {
  return (
    <>
      <Helmet>
        <title>ERP Excellence | Northrop Management</title>
        <meta name="description" content="Precision-engineered ERP implementation and optimization for global enterprises." />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: `
        .digital-subpage {
          --primary: #002B5C;
          --background: #fcf9f8;
          --on-surface: #1c1b1b;
          --surface-container-low: #f6f3f2;
          --section-gap: 120px;
        }
        .strategic-shadow {
          box-shadow: 0px 4px 20px rgba(0, 43, 92, 0.08);
        }
        .custom-bullet::before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #002b5c;
          margin-right: 12px;
        }
        .font-headline-display { font-family: 'Noto Serif', serif; font-size: 48px; line-height: 1.2; font-weight: 700; }
        .font-headline-lg { font-family: 'Noto Serif', serif; font-size: 36px; line-height: 1.3; font-weight: 600; }
        .font-headline-md { font-family: 'Noto Serif', serif; font-size: 28px; line-height: 1.4; font-weight: 600; }
      `}} />

      <main className="digital-subpage pt-20 bg-[#fcf9f8] text-[#1c1b1b] font-sans">
        {/* Hero Section */}
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 z-10">
              <span className="text-[12px] font-semibold text-[#002B5C] tracking-widest uppercase mb-6 block">Enterprise Solutions</span>
              <h1 className="font-headline-display text-[#002B5C] mb-8 max-w-2xl">
                ERP Excellence & System Integration
              </h1>
              <p className="text-[18px] text-[#43474f] mb-8 max-w-xl leading-relaxed">
                Precision-engineered ERP implementation and optimization. We harmonize your technological landscape to drive unprecedented operational clarity and global growth.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#002B5C] text-white px-8 py-4 text-[12px] font-semibold tracking-widest hover:shadow-lg transition-all uppercase">
                  Consult an Expert
                </button>
                <button className="border border-[#002B5C] text-[#002B5C] px-8 py-4 text-[12px] font-semibold tracking-widest hover:bg-[#002B5C] hover:text-white transition-all uppercase">
                  Technical Specs
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative h-[500px]">
              <div className="absolute inset-0 bg-[#002B5C] opacity-10 transform translate-x-4 translate-y-4"></div>
              <img 
                alt="ERP data visualization" 
                className="w-full h-full object-cover relative z-10 strategic-shadow" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5A1FgGZWqugZkO51p08lypckb1iofz1DoZmQsysEThWMiOaHxF529fYjm0R2c1uXXN-h6MMynmV_FQ7b33F60ZF6HdbC4no2qa9BbfS4D0r3T-MbuP_gHwQXMxPbiTpxwqPqCwnKstPv0cQDbMSyOSquVqtERWDYss8qzAQPvcMr6u1TicIEa9jhdZ8ZqqrbUUaMnmvzVRXAyl0l1AlD8ZnKHseQoCXK2-8bV9tuCauNeBb1IPkRN-je4UX4T97MIJomyeSQBWGs" 
              />
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="bg-white py-24">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="max-w-xl">
                <div className="border-t-2 border-[#002B5C] pt-8">
                  <h2 className="font-headline-lg text-[#002B5C]">Enterprise Platforms</h2>
                </div>
                <p className="text-[16px] text-[#43474f] mt-4">Platform-agnostic expertise ensuring your organization leverages the world's most powerful ERP ecosystems.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "hub", title: "SAP S/4HANA", desc: "Advanced implementation and migration services for the world's leading intelligent ERP suite.", bullets: ["Finance & Controlling", "Supply Chain Management", "Ariba Network Integration"] },
                { icon: "database", title: "Oracle Cloud ERP", desc: "Scalable cloud solutions designed for agile performance and global financial compliance.", bullets: ["Risk Management Cloud", "EPM & Financial Reporting", "HCM Cloud Integration"] },
                { icon: "cloud_sync", title: "MS Dynamics 365", desc: "Seamlessly connecting your business data with the familiarity of the Microsoft ecosystem.", bullets: ["Business Central Integration", "Power BI Visualizations", "Azure Cloud Migration"] }
              ].map((plat, idx) => (
                <div key={idx} className="bg-white p-12 border-t-2 border-[#002B5C] strategic-shadow flex flex-col h-full">
                  <span className="material-symbols-outlined text-[#002B5C] mb-6 text-4xl">{plat.icon}</span>
                  <h4 className="font-headline-md text-[#002B5C] mb-4">{plat.title}</h4>
                  <p className="text-[14px] text-[#43474f] mb-6 flex-grow">{plat.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {plat.bullets.map((b, bidx) => (
                      <li key={bidx} className="text-[14px] flex items-center custom-bullet">{b}</li>
                    ))}
                  </ul>
                  <button className="text-[12px] font-semibold text-[#002B5C] border-b border-[#002B5C] self-start hover:opacity-70 transition-opacity uppercase">
                    Explore Services
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="bg-[#002B5C] text-white py-24">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-white mb-8">Measurable ROI</h2>
              <p className="text-[18px] opacity-80 mb-12">
                We focus on the KPIs that matter most to your board. Our ERP implementations are designed for maximum economic impact.
              </p>
              <div className="grid grid-cols-2 gap-12">
                {[
                  { val: "35%", label: "Efficiency Gain" },
                  { val: "22%", label: "Cost Reduction" },
                  { val: "60%", label: "Faster Reporting" },
                  { val: "15M+", label: "Annual Savings" }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-[40px] font-light mb-2">{stat.val}</div>
                    <p className="text-[12px] font-semibold uppercase tracking-wider opacity-70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 strategic-shadow border-l-4 border-[#002B5C]">
              <h5 className="font-headline-md text-[#002B5C] mb-8">Optimization Metrics</h5>
              <div className="h-64 flex items-end gap-6 border-b border-[#c4c6d0] pb-4 mb-8 relative text-[#002B5C]">
                <div className="bg-[#5c5f60] opacity-40 h-20 w-full"></div>
                <div className="bg-[#264779] h-40 w-full"></div>
                <div className="bg-[#002B5C] h-56 w-full relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-bold text-[14px]">PEAK</div>
                </div>
                <div className="bg-[#002B5C] h-60 w-full opacity-90"></div>
              </div>
              <p className="text-[14px] text-[#43474f] italic">
                Visualization of process latency reduction post-ERP integration.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-24 text-center">
          <div className="max-w-3xl mx-auto px-8 lg:px-16">
            <h2 className="font-headline-display text-[#002B5C] mb-8">Ready to integrate excellence?</h2>
            <p className="text-[18px] text-[#43474f] mb-12 leading-relaxed">
              Scale your operations with Northrop's precision-engineered ERP solutions.
            </p>
            <button className="bg-[#002B5C] text-white px-12 py-5 text-[12px] font-semibold tracking-widest hover:scale-105 transition-all uppercase">
              Initiate Briefing
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
