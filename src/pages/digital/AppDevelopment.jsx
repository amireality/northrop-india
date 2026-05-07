import { Helmet } from 'react-helmet-async'

export default function AppDevelopment() {
  return (
    <>
      <Helmet>
        <title>App Development | Northrop Management</title>
        <meta name="description" content="High-performance mobile and web architectures engineered for global enterprises." />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: `
        .digital-subpage {
          --primary: #002B5C;
          --background: #fcf9f8;
          --on-surface: #1c1b1b;
          --section-gap: 120px;
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }
        .font-h1 { font-family: 'Noto Serif', serif; font-size: 48px; line-height: 1.2; font-weight: 700; }
        .font-h2 { font-family: 'Noto Serif', serif; font-size: 36px; line-height: 1.3; font-weight: 600; }
        .font-h3 { font-family: 'Noto Serif', serif; font-size: 28px; line-height: 1.4; font-weight: 600; }
      `}} />

      <main className="digital-subpage pt-20 bg-[#fcf9f8] text-[#1c1b1b] font-sans">
        {/* Hero Section */}
        <section className="relative bg-[#002B5C] text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              className="w-full h-full object-cover" 
              alt="Engineering workspace" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd79dbxDzQQZBNMN__Wq7GoomQZ6rTC2QbK6zMLY8Pz7OCoYFHhJH7ECnVaF28VOrUAS-CSE4f8BvthvvmjMJ8hzSpWw1meQj7MQHakt1iSvAil1VEtFHPDkeiuyIDbUvU6WZzLugjrElNkH2DKNX0cR_bCnN-WB-gRRjIg_O4JT6DGFSQYwM3WjQcAd9K2YXaBWJJU0ColSe2ZvpyY6FJOoCphCozZsQmmLGbtbLqWgvVEhaIZi1yT9ZDmmFY5LAFs7Rm8-x2n9g" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[12px] font-semibold text-white/70 mb-4 block uppercase tracking-widest">Custom Solutions</span>
              <h1 className="font-h1 text-white mb-6">High-Performance Mobile Architectures</h1>
              <p className="text-[18px] text-white/80 mb-12 max-w-xl leading-relaxed">
                We engineer mission-critical applications for global enterprises. From low-latency mobile interfaces to scalable cloud-native backends.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-[#002B5C] px-8 py-4 text-[12px] font-semibold uppercase tracking-widest hover:bg-gray-100 transition-all">Start Consultation</button>
                <button className="border border-white text-white px-8 py-4 text-[12px] font-semibold uppercase tracking-widest hover:bg-white/10 transition-all">View Portfolio</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                <div className="bg-[#002B5C] p-10 rounded-lg">
                  <div className="flex justify-between items-start mb-8">
                    <span className="material-symbols-outlined text-4xl text-[#7594cb]">terminal</span>
                    <div className="text-right">
                      <div className="text-[12px] font-semibold text-[#7594cb]">RUNTIME STATUS</div>
                      <div className="text-[28px] font-bold text-white">99.99%</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-white/10 w-full rounded-full overflow-hidden">
                      <div className="h-full bg-[#7594cb] w-[85%]"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-white/5 rounded border border-white/5"></div>
                      <div className="h-12 bg-white/5 rounded border border-white/5"></div>
                      <div className="h-12 bg-[#7594cb]/20 rounded border border-[#7594cb]/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Capabilities */}
        <section className="py-24 max-w-[1280px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <h2 className="font-h2 text-[#002B5C]">Core Engineering Capabilities</h2>
            <div className="w-16 h-1 bg-[#002B5C] mt-4"></div>
          </div>
          <div className="bento-grid">
            <div className="col-span-12 md:col-span-8 bg-white border border-gray-200 p-10 hover:border-[#002B5C] transition-all duration-300">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-[#002B5C] text-3xl">phone_iphone</span>
                    <span className="material-symbols-outlined text-[#002B5C] text-3xl">robot_2</span>
                  </div>
                  <h3 className="font-h3 text-[#002B5C] mb-4">Native Mobile Excellence</h3>
                  <p className="text-[16px] text-[#5c5f60] max-w-2xl leading-relaxed">
                    Harness the full power of the hardware with Swift (iOS) and Kotlin (Android). We build platform-compliant applications that leverage native APIs for biometric security and on-device ML.
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-100 flex gap-12">
                  <div><span className="text-[12px] font-semibold text-[#002B5C] uppercase">01. Performance</span><p className="text-[14px]">60FPS standard</p></div>
                  <div><span className="text-[12px] font-semibold text-[#002B5C] uppercase">02. Security</span><p className="text-[14px]">Bank-grade encryption</p></div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-[#002B5C] text-white p-10 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl mb-6 text-[#d6e3ff]">layers</span>
                <h3 className="font-h3 text-white mb-4">Cross-Platform</h3>
                <p className="text-[14px] text-white/70 leading-relaxed">
                  Scalable solutions using React Native and Flutter. Optimize time-to-market without compromising user experience.
                </p>
              </div>
              <button className="mt-8 flex items-center text-[#d6e3ff] text-[15px] font-semibold uppercase tracking-widest group">
                Explore Frameworks <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-all">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* Lifecycle Section */}
        <section className="py-24 bg-white border-y border-gray-200">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <span className="text-[12px] font-semibold text-[#002B5C] mb-2 block uppercase tracking-widest">Our Methodology</span>
              <h2 className="font-h2 text-[#002B5C]">The Development Lifecycle</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: "lightbulb", title: "Ideation", desc: "Requirement gathering and strategic architecture planning." },
                { icon: "architecture", title: "Design", desc: "High-fidelity UI design and exhaustive user journey mapping." },
                { icon: "code", title: "Build", desc: "Agile engineering sprints with continuous integration and QA." },
                { icon: "rocket_launch", title: "Launch", desc: "App Store optimization and post-launch maintenance." }
              ].map((step, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <div className="w-20 h-20 bg-[#002B5C] text-white flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                  </div>
                  <h4 className="font-h3 text-xl text-[#002B5C] mb-4">{step.title}</h4>
                  <p className="text-[14px] text-[#5c5f60] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#fcf9f8] py-24">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="bg-[#002B5C] p-16 md:p-24 relative overflow-hidden text-center md:text-left text-white">
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-h1 text-white mb-8">Ready to Engineer Your Next Innovation?</h2>
                <p className="text-[18px] text-white/70 mb-12">
                  Schedule a technical briefing with our lead architects to discuss your infrastructure and application requirements.
                </p>
                <button className="bg-white text-[#002B5C] px-10 py-5 text-[12px] font-semibold uppercase tracking-widest flex items-center gap-3 mx-auto md:mx-0 hover:scale-105 transition-all">
                  Book a Briefing <span className="material-symbols-outlined">calendar_today</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
