import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const SoftwareEngineering = () => {
  return (
    <>
      <Helmet>
        <title>Software Engineering | Northrop Management</title>
        <meta name="description" content="Engineering high-availability software ecosystems for absolute reliability. Specializing in Java Enterprise, Python & ML, and .NET Core for modern enterprise demands." />
       
      </Helmet>

      <main className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter',sans-serif]">
        {/* Hero Section: Enterprise Architecture */}
        <section className="relative bg-[#001736] text-white py-[120px] overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 relative z-10 flex flex-col md:flex-row items-center gap-16 animate-fade-in-up">
            <div className="md:w-1/2 space-y-8">
              <span className="text-[12px] font-semibold uppercase tracking-widest text-[#d6e3ff]">Enterprise-Grade Architecture</span>
              <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] font-bold leading-[1.2]">Engineering Systems for Absolute Reliability.</h1>
              <p className="text-[18px] text-[#c5c7c8] max-w-xl leading-[1.6]">
                We build high-availability software ecosystems designed to withstand the rigors of modern enterprise demands. From legacy modernization to cloud-native scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="bg-[#5493f0] text-[#001736] text-[15px] py-4 px-8 rounded-sm font-bold uppercase tracking-widest hover:bg-[#d6e3ff] transition-all w-full sm:w-auto cursor-pointer">Consult an Architect</button>
                </Link>
                <button className="border border-[#c4c6d0] text-white text-[15px] py-4 px-8 rounded-sm hover:bg-white/10 transition-colors uppercase tracking-widest">View Frameworks</button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-video bg-[#e5e2e1] rounded-sm overflow-hidden border border-white/20 shadow-2xl">
                <img 
                  className="w-full h-full object-cover grayscale-[20%] contrast-125" 
                  alt="Professional engineering team collaborating" 
                  src="/digitalimg/software.png" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Stack Section */}
        <section className="py-[120px] bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="text-center mb-[64px]">
              <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] font-bold">Mastery Across the Enterprise Stack</h2>
              <div className="h-1 w-24 bg-[#001736] mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Java Card */}
              <div className="bg-white p-8 border border-[#c4c6d0] rounded-sm flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-[#001736] text-[48px] group-hover:scale-110 transition-transform">terminal</span>
                  <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] font-semibold text-[#001736]">Java Enterprise</h3>
                  <p className="text-[16px] text-[#5c5f60] leading-[1.6]">Specializing in Spring Boot and microservices for mission-critical financial and logistical infrastructures.</p>
                  <ul className="space-y-2 pt-4">
                    <li className="flex items-center text-[12px] font-semibold tracking-widest text-[#454748] uppercase"><span className="material-symbols-outlined text-[18px] mr-2 text-[#001736]">check_circle</span>SPRING BOOT 3.x</li>
                    <li className="flex items-center text-[12px] font-semibold tracking-widest text-[#454748] uppercase"><span className="material-symbols-outlined text-[18px] mr-2 text-[#001736]">check_circle</span>QUARKUS NATIVE</li>
                    <li className="flex items-center text-[12px] font-semibold tracking-widest text-[#454748] uppercase"><span className="material-symbols-outlined text-[18px] mr-2 text-[#001736]">check_circle</span>HIBERNATE ORM</li>
                  </ul>
                </div>
              </div>
              {/* Python Card */}
              <div className="bg-white p-8 border border-[#c4c6d0] rounded-sm flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-[#001736] text-[48px] group-hover:scale-110 transition-transform">data_object</span>
                  <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] font-semibold text-[#001736]">Python & ML</h3>
                  <p className="text-[16px] text-[#5c5f60] leading-[1.6]">High-performance data pipelines and AI integration using Django, FastAPI, and robust asynchronous architectures.</p>
                  <ul className="space-y-2 pt-4">
                    <li className="flex items-center text-[12px] font-semibold tracking-widest text-[#454748] uppercase"><span className="material-symbols-outlined text-[18px] mr-2 text-[#001736]">check_circle</span>FASTAPI ECOSYSTEM</li>
                    <li className="flex items-center text-[12px] font-semibold tracking-widest text-[#454748] uppercase"><span className="material-symbols-outlined text-[18px] mr-2 text-[#001736]">check_circle</span>PYTORCH DEPLOYMENT</li>
                    <li className="flex items-center text-[12px] font-semibold tracking-widest text-[#454748] uppercase"><span className="material-symbols-outlined text-[18px] mr-2 text-[#001736]">check_circle</span>PANDAS PIPELINES</li>
                  </ul>
                </div>
              </div>
              {/* .NET Card */}
              <div className="bg-white p-8 border border-[#c4c6d0] rounded-sm flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-[#001736] text-[48px] group-hover:scale-110 transition-transform">settings_system_daydream</span>
                  <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] font-semibold text-[#001736]">.NET Core</h3>
                  <p className="text-[16px] text-[#5c5f60] leading-[1.6]">Modern C# development focused on Azure cloud-native solutions and cross-platform high-performance APIs.</p>
                  <ul className="space-y-2 pt-4">
                    <li className="flex items-center text-[12px] font-semibold tracking-widest text-[#454748] uppercase"><span className="material-symbols-outlined text-[18px] mr-2 text-[#001736]">check_circle</span>C# 12 / .NET 8</li>
                    <li className="flex items-center text-[12px] font-semibold tracking-widest text-[#454748] uppercase"><span className="material-symbols-outlined text-[18px] mr-2 text-[#001736]">check_circle</span>AZURE FUNCTIONS</li>
                    <li className="flex items-center text-[12px] font-semibold tracking-widest text-[#454748] uppercase"><span className="material-symbols-outlined text-[18px] mr-2 text-[#001736]">check_circle</span>ENTITY FRAMEWORK</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Framework & Benchmarks */}
        <section className="py-[120px] bg-[#f6f3f2] border-y border-[#c4c6d0]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[12px] font-semibold text-[#001736] uppercase tracking-widest">Performance Metrics</span>
                <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] font-bold mt-4 mb-8 text-[#001736]">Quantifiable Scalability Benchmarks</h2>
                <p className="text-[16px] text-[#5c5f60] mb-8 leading-[1.6]">Our NexusCore™ framework ensures that every line of code contributes to a leaner, more resilient system. We measure success through rigorous latency testing and throughput validation.</p>
                <div className="space-y-8">
                  <div className="p-6 bg-white border border-[#c4c6d0] rounded-sm">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[12px] font-semibold tracking-widest text-[#001736] uppercase">LOAD BALANCING EFFICIENCY</span>
                      <span className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#001736] font-bold leading-none">99.99<span className="text-[14px] font-normal">%</span></span>
                    </div>
                    <div className="w-full bg-[#f0eded] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#001736] h-full w-[99.99%]"></div>
                    </div>
                    <p className="text-[14px] text-[#5c5f60] mt-2">Zero-downtime deployment during peak seasonal traffic spikes.</p>
                  </div>
                  <div className="p-6 bg-white border border-[#c4c6d0] rounded-sm">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[12px] font-semibold tracking-widest text-[#001736] uppercase">API LATENCY (P99)</span>
                      <span className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#001736] font-bold leading-none">&lt;45<span className="text-[14px] font-normal">ms</span></span>
                    </div>
                    <div className="w-full bg-[#f0eded] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#5493f0] h-full w-[85%]"></div>
                    </div>
                    <p className="text-[14px] text-[#5c5f60] mt-2">Optimized request handling for global distributed services.</p>
                  </div>
                </div>
              </div>
              <div className="relative p-8 md:p-[48px] bg-[#001736] rounded-sm overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="relative z-10 border border-white/10 p-6 rounded-sm bg-white/5 backdrop-blur-md">
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="font-['Noto_Serif',serif] text-[24px] text-white font-semibold">System Throughput</h4>
                    <span className="bg-[#5493f0] text-[#001736] text-[10px] px-2 py-1 rounded font-bold">LIVE BENCHMARK</span>
                  </div>
                  <div className="aspect-square flex items-end justify-between gap-2 h-64">
                    <div className="w-full bg-white/20 hover:bg-white/40 h-[40%] rounded-t-sm transition-all cursor-pointer"></div>
                    <div className="w-full bg-white/20 hover:bg-white/40 h-[55%] rounded-t-sm transition-all cursor-pointer"></div>
                    <div className="w-full bg-white/20 hover:bg-white/40 h-[48%] rounded-t-sm transition-all cursor-pointer"></div>
                    <div className="w-full bg-[#5493f0] h-[88%] rounded-t-sm transition-all cursor-pointer"></div>
                    <div className="w-full bg-white/20 hover:bg-white/40 h-[62%] rounded-t-sm transition-all cursor-pointer"></div>
                    <div className="w-full bg-white/20 hover:bg-white/40 h-[75%] rounded-t-sm transition-all cursor-pointer"></div>
                    <div className="w-full bg-white/20 hover:bg-white/40 h-[50%] rounded-t-sm transition-all cursor-pointer"></div>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-8 text-center">
                    <div>
                      <p className="text-white/60 text-[12px] font-semibold tracking-widest uppercase mb-1">REQUESTS/SEC</p>
                      <p className="text-white font-['Noto_Serif',serif] text-[24px] md:text-[28px] font-bold">1.2M</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-[12px] font-semibold tracking-widest uppercase mb-1">CONCURRENCY</p>
                      <p className="text-white font-['Noto_Serif',serif] text-[24px] md:text-[28px] font-bold">500K</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-[12px] font-semibold tracking-widest uppercase mb-1">DATA FLOW</p>
                      <p className="text-white font-['Noto_Serif',serif] text-[24px] md:text-[28px] font-bold">4.2GB/s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Pillars */}
        <section className="py-[120px] bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-[64px]">
              <div className="max-w-2xl">
                <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] font-bold">Strategic Modernization Pathways</h2>
                <p className="text-[18px] text-[#5c5f60] mt-4 leading-[1.6]">Legacy systems shouldn't be a liability. We transform rigid monolithic structures into agile, cloud-native services.</p>
              </div>
              <button className="text-[#001736] font-medium border-b-2 border-[#001736] pb-1 hover:text-[#5493f0] hover:border-[#5493f0] transition-all uppercase tracking-widest text-[15px]">Explore Case Studies</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group flex gap-6 p-6 hover:bg-[#f0eded] rounded-sm transition-colors border border-transparent hover:border-[#c4c6d0] cursor-pointer">
                <div className="shrink-0 h-12 w-12 bg-[#001736] flex items-center justify-center rounded-sm text-white">
                  <span className="material-symbols-outlined">cloud_sync</span>
                </div>
                <div>
                  <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] text-[#001736] mb-2 font-semibold">Legacy Refactoring</h3>
                  <p className="text-[16px] text-[#5c5f60] leading-[1.6]">Deconstructing legacy codebases into secure, maintainable microservices without interrupting business operations.</p>
                </div>
              </div>
              <div className="group flex gap-6 p-6 hover:bg-[#f0eded] rounded-sm transition-colors border border-transparent hover:border-[#c4c6d0] cursor-pointer">
                <div className="shrink-0 h-12 w-12 bg-[#001736] flex items-center justify-center rounded-sm text-white">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div>
                  <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] text-[#001736] mb-2 font-semibold">SecDevOps Integration</h3>
                  <p className="text-[16px] text-[#5c5f60] leading-[1.6]">Embedding automated security protocols into the CI/CD pipeline to ensure compliance at every commit.</p>
                </div>
              </div>
              <div className="group flex gap-6 p-6 hover:bg-[#f0eded] rounded-sm transition-colors border border-transparent hover:border-[#c4c6d0] cursor-pointer">
                <div className="shrink-0 h-12 w-12 bg-[#001736] flex items-center justify-center rounded-sm text-white">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <div>
                  <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] text-[#001736] mb-2 font-semibold">Distributed Systems</h3>
                  <p className="text-[16px] text-[#5c5f60] leading-[1.6]">Architecting globally distributed databases and edge-computing nodes for sub-millisecond response times.</p>
                </div>
              </div>
              <div className="group flex gap-6 p-6 hover:bg-[#f0eded] rounded-sm transition-colors border border-transparent hover:border-[#c4c6d0] cursor-pointer">
                <div className="shrink-0 h-12 w-12 bg-[#001736] flex items-center justify-center rounded-sm text-white">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <div>
                  <h3 className="font-['Noto_Serif',serif] text-[20px] md:text-[24px] text-[#001736] mb-2 font-semibold">Cloud-Native Design</h3>
                  <p className="text-[16px] text-[#5c5f60] leading-[1.6]">Building exclusively for the cloud, leveraging serverless computing and container orchestration for maximum cost-efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-[120px] bg-[#f0eded] relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 text-center relative z-10">
            <h2 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] text-[#001736] mb-8 font-bold leading-[1.2]">Ready for Enterprise Excellence?</h2>
            <p className="text-[18px] text-[#5c5f60] max-w-2xl mx-auto mb-10 leading-[1.6]">Connect with our Lead Architects for a technical deep-dive into your system’s requirements.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <button className="bg-[#001736] text-white px-12 py-5 rounded-sm text-[15px] font-medium uppercase tracking-widest shadow-xl hover:bg-[#002b5b] transition-all w-full sm:w-auto cursor-pointer">Schedule Assessment</button>
              </Link>
              <button className="bg-white border border-[#c4c6d0] text-[#001736] px-12 py-5 rounded-sm text-[15px] font-medium uppercase tracking-widest shadow-sm hover:bg-[#fcf9f8] transition-all">Technical Whitepapers</button>
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

export default SoftwareEngineering