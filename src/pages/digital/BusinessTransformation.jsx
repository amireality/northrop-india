import { Helmet } from 'react-helmet-async'

export default function BusinessTransformation() {
  return (
    <>
      <Helmet>
        <title>Business Transformation | Northrop Management</title>
        <meta name="description" content="Strategic realignment of organizational structures through digital transformation." />
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
              <span className="text-[12px] font-semibold text-[#002B5C] tracking-widest uppercase mb-6 block">Enterprise Strategy</span>
              <h1 className="font-headline-display text-[#002B5C] mb-8 max-w-2xl">
                Business Transformation & Digital Orchestration
              </h1>
              <p className="text-[18px] text-[#43474f] mb-8 max-w-xl leading-relaxed">
                Navigating the complexities of global enterprise transformation with precision-engineered solutions. We harmonize your organizational landscape to drive operational clarity and sustainable growth.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#002B5C] text-white px-8 py-4 text-[12px] font-semibold tracking-widest hover:shadow-lg transition-all uppercase">
                  Speak to an Expert
                </button>
                <button className="border border-[#002B5C] text-[#002B5C] px-8 py-4 text-[12px] font-semibold tracking-widest hover:bg-[#002B5C] hover:text-white transition-all uppercase">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative h-[500px]">
              <div className="absolute inset-0 bg-[#002B5C] opacity-10 transform translate-x-4 translate-y-4"></div>
              <img 
                alt="Strategic data visualization" 
                className="w-full h-full object-cover relative z-10 strategic-shadow" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5A1FgGZWqugZkO51p08lypckb1iofz1DoZmQsysEThWMiOaHxF529fYjm0R2c1uXXN-h6MMynmV_FQ7b33F60ZF6HdbC4no2qa9BbfS4D0r3T-MbuP_gHwQXMxPbiTpxwqPqCwnKstPv0cQDbMSyOSquVqtERWDYss8qzAQPvcMr6u1TicIEa9jhdZ8ZqqrbUUaMnmvzVRXAyl0l1AlD8ZnKHseQoCXK2-8bV9tuCauNeBb1IPkRN-je4UX4T97MIJomyeSQBWGs" 
              />
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section className="bg-[#f6f3f2] py-24">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="border-t-2 border-[#002B5C] pt-8 mb-12">
              <h2 className="font-headline-lg text-[#002B5C]">Our Transformation Framework</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                { id: "01", title: "Assessment", desc: "Comprehensive audit of current infrastructure, data silos, and operational bottlenecks." },
                { id: "02", title: "Strategy", desc: "Defining the digital roadmap, target operating model, and long-term scalability milestones." },
                { id: "03", title: "Execution", desc: "Agile deployment of strategic initiatives with rigorous change management and data integrity." },
                { id: "04", title: "Optimization", desc: "Continuous refinement through AI-driven insights and process automation scaling." }
              ].map((stage, idx) => (
                <div key={idx} className="group">
                  <div className="text-[#002B5C] opacity-20 text-[40px] font-light mb-4">{stage.id}</div>
                  <h3 className="font-headline-md text-[#002B5C] mb-4">{stage.title}</h3>
                  <p className="text-[14px] text-[#43474f] leading-relaxed">{stage.desc}</p>
                  <div className="mt-8 h-0.5 bg-[#002B5C] w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="bg-[#002B5C] text-white py-24">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-white mb-8">Quantifiable Impact</h2>
              <p className="text-[18px] opacity-80 mb-12">
                Our transformations deliver measurable economic value. We focus on the KPIs that matter most to your organizational success.
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
              <h5 className="font-headline-md text-[#002B5C] mb-8">Process Optimization</h5>
              <div className="h-64 flex items-end gap-6 border-b border-[#c4c6d0] pb-4 mb-8 relative text-[#002B5C]">
                <div className="bg-[#5c5f60] opacity-40 h-20 w-full" title="Baseline"></div>
                <div className="bg-[#264779] h-40 w-full" title="Phase 1"></div>
                <div className="bg-[#002B5C] h-56 w-full relative" title="Optimized">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-bold text-[14px]">PEAK</div>
                </div>
                <div className="bg-[#002B5C] h-60 w-full opacity-90" title="Future State"></div>
              </div>
              <p className="text-[14px] text-[#43474f] italic">
                Real-time visualization of process latency reduction post-transformation across global nodes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-24 text-center">
          <div className="max-w-3xl mx-auto px-8 lg:px-16">
            <h2 className="font-headline-display text-[#002B5C] mb-8">Ready to redefine your enterprise?</h2>
            <p className="text-[18px] text-[#43474f] mb-12 leading-relaxed">
              Join the leaders who have scaled their operations through Northrop's strategic digital transformation.
            </p>
            <button className="bg-[#002B5C] text-white px-12 py-5 text-[12px] font-semibold tracking-widest hover:scale-105 transition-all uppercase">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
