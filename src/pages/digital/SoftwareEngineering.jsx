import { Helmet } from 'react-helmet-async'

export default function SoftwareEngineering() {
  return (
    <>
      <Helmet>
        <title>Software Engineering | Northrop Management</title>
        <meta name="description" content="Enterprise-grade architecture and high-availability software ecosystems." />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: `
        .digital-subpage {
          --primary: #002B5C;
          --background: #fcf9f8;
          --on-surface: #1c1b1b;
          --section-gap: 120px;
        }
        .technical-grid {
          background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .font-h1 { font-family: 'Noto Serif', serif; font-size: 48px; line-height: 1.2; font-weight: 700; }
        .font-h2 { font-family: 'Noto Serif', serif; font-size: 36px; line-height: 1.3; font-weight: 600; }
        .font-h3 { font-family: 'Noto Serif', serif; font-size: 28px; line-height: 1.4; font-weight: 600; }
      `}} />

      <main className="digital-subpage pt-20 bg-[#fcf9f8] text-[#1c1b1b] font-sans">
        {/* Hero Section */}
        <section className="relative bg-[#002B5C] text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10 technical-grid"></div>
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-8">
              <span className="text-[12px] font-semibold uppercase tracking-widest text-white/70">Enterprise-Grade Architecture</span>
              <h1 className="font-h1 text-white">Engineering Systems for Absolute Reliability.</h1>
              <p className="text-[18px] text-white/80 max-w-xl leading-relaxed">
                We build high-availability software ecosystems designed to withstand the rigors of modern enterprise demands. From legacy modernization to cloud-native scalability.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-[#002B5C] py-4 px-8 rounded-lg font-bold text-[15px] uppercase tracking-wider hover:bg-gray-100 transition-all">Consult an Architect</button>
                <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-bold text-[15px] uppercase tracking-wider hover:bg-white/10 transition-all">View Frameworks</button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                <img 
                  className="w-full h-full object-cover grayscale-[20%] contrast-125" 
                  alt="Engineering team collaboration" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuNm7b-zhPxPUp9tULm_-Dnefshz6fnJWctR-D6rsQV-88U37Yst9mB1RVxPwSXITZ2KrEGTJ4SXffNW4ZPyUJGlkHX-7VK_roHLaU4AWElNSI8gNouJzFi4Hmdx-HSfLQAV2V0F3bBxPrpv2LwzSEV6Rz64fIPgmKWdUMVC9QA3TTDgh51zucsKLabPpyohw2ROZmCM9aptO2VP3ON1lCBv0qwZqqjghq5cHTiHlKwlt2HczaAAjC926zKcz43XXYvneGTiF8LHY" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stack Mastery */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="font-h2 text-[#002B5C]">Mastery Across the Enterprise Stack</h2>
              <div className="h-1 w-24 bg-[#002B5C] mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "terminal", title: "Java Enterprise", desc: "Specializing in Spring Boot and microservices for mission-critical financial infrastructures.", tags: ["SPRING BOOT 3.x", "QUARKUS NATIVE", "HIBERNATE ORM"] },
                { icon: "data_object", title: "Python & ML", desc: "High-performance data pipelines and AI integration using Django, FastAPI, and asynchronous architectures.", tags: ["FASTAPI ECOSYSTEM", "PYTORCH DEPLOYMENT", "PANDAS PIPELINES"] },
                { icon: "settings_system_daydream", title: ".NET Core", desc: "Modern C# development focused on Azure cloud-native solutions and cross-platform APIs.", tags: ["C# 12 / .NET 8", "AZURE FUNCTIONS", "ENTITY FRAMEWORK"] }
              ].map((stack, idx) => (
                <div key={idx} className="bg-[#fcf9f8] p-10 border border-gray-100 rounded-xl flex flex-col justify-between hover:shadow-lg transition-all">
                  <div className="space-y-6">
                    <span className="material-symbols-outlined text-[#002B5C] text-[48px]">{stack.icon}</span>
                    <h3 className="font-h3 text-[#002B5C]">{stack.title}</h3>
                    <p className="text-[16px] text-[#5c5f60] leading-relaxed">{stack.desc}</p>
                    <ul className="space-y-3 pt-4">
                      {stack.tags.map((tag, tidx) => (
                        <li key={tidx} className="flex items-center text-[12px] font-bold tracking-widest text-[#002B5C] uppercase">
                          <span className="material-symbols-outlined text-[18px] mr-2">check_circle</span>{tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benchmarks Section */}
        <section className="py-24 bg-[#f6f3f2] border-y border-gray-200">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[12px] font-semibold text-[#002B5C] uppercase tracking-widest">Performance Metrics</span>
                <h2 className="font-h2 mt-4 mb-6 text-[#002B5C]">Quantifiable Scalability Benchmarks</h2>
                <p className="text-[16px] text-[#5c5f60] mb-12 leading-relaxed">Our framework ensures that every line of code contributes to a leaner, more resilient system. We measure success through rigorous latency testing.</p>
                <div className="space-y-8">
                  {[
                    { label: "LOAD BALANCING EFFICIENCY", val: "99.99%", desc: "Zero-downtime deployment during peak traffic." },
                    { label: "API LATENCY (P99)", val: "<45ms", desc: "Optimized request handling for global services." }
                  ].map((bench, idx) => (
                    <div key={idx} className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
                      <div className="flex justify-between items-end mb-4">
                        <span className="text-[12px] font-bold text-[#002B5C] uppercase tracking-wider">{bench.label}</span>
                        <span className="text-[28px] font-bold text-[#002B5C]">{bench.val}</span>
                      </div>
                      <div className="w-full bg-[#f0eded] h-2 rounded-full overflow-hidden">
                        <div className={`bg-[#002B5C] h-full ${idx === 0 ? "w-full" : "w-[85%]"}`}></div>
                      </div>
                      <p className="text-[14px] text-[#5c5f60] mt-4">{bench.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative p-12 bg-[#002B5C] rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-20 technical-grid"></div>
                <div className="relative z-10 border border-white/10 p-8 rounded-lg bg-white/5 backdrop-blur-md">
                  <div className="flex justify-between items-center mb-12">
                    <h4 className="font-h3 text-white text-2xl">System Throughput</h4>
                    <span className="bg-[#7594cb] text-[#002B5C] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">Live Benchmark</span>
                  </div>
                  <div className="aspect-square flex items-end justify-between gap-3 h-64">
                    {[40, 55, 48, 88, 62, 75, 50].map((h, i) => (
                      <div key={i} className={`w-full ${i === 3 ? "bg-[#7594cb]" : "bg-white/20"} rounded-t-sm transition-all`} style={{height: `${h}%`}}></div>
                    ))}
                  </div>
                  <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                    {[
                      { label: "REQUESTS/SEC", val: "1.2M" },
                      { label: "CONCURRENCY", val: "500K" },
                      { label: "DATA FLOW", val: "4.2GB/s" }
                    ].map((stat, idx) => (
                      <div key={idx}>
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                        <p className="text-white text-2xl font-bold">{stat.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <h2 className="font-h1 text-[#002B5C] mb-8">Ready for Enterprise Excellence?</h2>
            <p className="text-[18px] text-[#5c5f60] max-w-2xl mx-auto mb-12 leading-relaxed">Connect with our Lead Architects for a technical deep-dive into your system’s requirements.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-[#002B5C] text-white px-12 py-5 rounded-lg font-bold text-[15px] uppercase tracking-widest shadow-xl hover:scale-105 transition-all">Schedule Assessment</button>
              <button className="bg-white border border-gray-200 text-[#002B5C] px-12 py-5 rounded-lg font-bold text-[15px] uppercase tracking-widest hover:bg-gray-50 transition-all">Technical Whitepapers</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
