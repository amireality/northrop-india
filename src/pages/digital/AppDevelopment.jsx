
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function AppDevelopment() {
  return (
    <>
      <Helmet>
        <title>App Development | Northrop Management</title>
        <meta name="description" content="High-performance mobile and web architectures engineered for global enterprises. Custom solutions for iOS, Android, and Cross-Platform applications." />
       
      </Helmet>

      <main className=" bg-[#fcf9f8] text-[#1c1b1b] ">
        {/* Hero Section */}
        <section className="relative bg-[#001736] text-white py-[64px] md:py-[96px] overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              className="w-full h-full object-cover" 
              alt="Professional software engineering workspace" 
              src="/digitalimg/appdevlope.png" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-[48px] lg:gap-[64px] items-center">
            <div className="animate-fade-in-up">
              <span className="font-semibold text-[12px] text-[#d6e3ff] mb-4 block uppercase tracking-[0.05em]">CUSTOM SOLUTIONS</span>
              <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] font-bold mb-6">High-Performance Mobile & Web Architectures</h1>
              <p className="text-[16px] md:text-[18px] text-[#c5c7c8] mb-[32px] max-w-xl leading-[1.6]">
                We engineer mission-critical applications for global enterprises. From low-latency mobile interfaces to scalable cloud-native backends, our approach combines rigorous engineering with intuitive UX.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="bg-white text-[#001736] px-8 cursor-pointer py-4 text-[15px] font-medium uppercase tracking-wider hover:bg-[#d6e3ff] transition-all hover:scale-[1.02] w-full sm:w-auto">Start a Consultation</button>
                </Link>

                 <Link to="/contact">
                <button className="border border-white text-white px-8 cursor-pointer py-4 text-[15px] font-medium uppercase tracking-wider hover:bg-white/10 transition-all hover:scale-[1.02]">View Portfolio</button>
             
             </Link>
              </div>

            </div>
            <div className="hidden lg:block animate-fade-in">
              <div className="p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                <div className="bg-[#002b5c] p-[32px] rounded-lg border border-white/5 shadow-2xl">
                  <div className="flex justify-between items-start mb-8">
                    <span className="material-symbols-outlined text-4xl text-[#5493f0]">terminal</span>
                    <div className="text-right">
                      <div className="text-[12px] font-semibold text-[#5493f0] tracking-[0.05em]">RUNTIME STATUS</div>
                      <div className="text-[28px] font-semibold text-white font-['Noto_Serif',serif]">99.99%</div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-2.5 bg-white/10 w-full rounded-full overflow-hidden">
                      <div className="h-full bg-[#5493f0] w-[85%] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-14 bg-white/5 rounded border border-white/5 flex items-center justify-center">
                        <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="h-14 bg-white/5 rounded border border-white/5 flex items-center justify-center">
                        <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="h-14 bg-[#5493f0]/20 rounded border border-[#5493f0]/30 flex items-center justify-center">
                        <div className="w-8 h-1 bg-[#5493f0]/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Core Capabilities (Bento) */}
        <section className="py-[20px] md:py-[20px] bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="mb-[48px]">
              <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] font-semibold text-[#001736]">Core Engineering Capabilities</h2>
              <div className="w-16 h-1 bg-[#001736] mt-4"></div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {/* iOS/Android Native */}
              <div className="col-span-12 md:col-span-8 bg-white border border-[#c4c6d0] p-[32px] md:p-[48px] hover:border-[#001736] transition-all duration-300 group shadow-sm hover:shadow-md cursor-pointer">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="material-symbols-outlined text-[#001736] text-4xl group-hover:scale-110 transition-transform">phone_iphone</span>
                      <span className="material-symbols-outlined text-[#001736] text-4xl group-hover:scale-110 transition-transform delay-75">robot_2</span>
                    </div>
                    <h3 className="font-['Noto_Serif',serif] text-[26px] md:text-[30px] font-semibold text-[#001736] mb-4">Native Mobile Excellence</h3>
                    <p className="text-[16px] text-[#5c5f60] max-w-2xl leading-[1.6]">
                      Harness the full power of the hardware with Swift (iOS) and Kotlin (Android) development. We build high-performance, platform-compliant applications that leverage native APIs for biometric security, on-device ML, and seamless background processing.
                    </p>
                  </div>
                  <div className="mt-12 pt-8 border-t border-[#c4c6d0] flex flex-wrap gap-12">
                    <div>
                      <span className="text-[12px] font-semibold text-[#001736] tracking-[0.05em]">01. PERFORMANCE</span>
                      <p className="text-[14px] text-[#5c5f60] mt-1">60FPS standard</p>
                    </div>
                    <div>
                      <span className="text-[12px] font-semibold text-[#001736] tracking-[0.05em]">02. SECURITY</span>
                      <p className="text-[14px] text-[#5c5f60] mt-1">Bank-grade encryption</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cross-Platform */}
              <div className="col-span-12 md:col-span-4 bg-[#001736] text-white p-[32px] md:p-[40px] flex flex-col justify-between group overflow-hidden relative cursor-pointer">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-5xl mb-8 text-[#d6e3ff] group-hover:rotate-12 transition-transform">layers</span>
                  <h3 className="font-['Noto_Serif',serif] text-[26px] md:text-[28px] font-semibold mb-4 leading-tight">Cross-Platform Hybrid</h3>
                  <p className="text-[14px] text-[#c5c7c8] leading-[1.6] opacity-90">
                    Scalable solutions using React Native and Flutter. Optimize TTM (Time To Market) without compromising on the user experience.
                  </p>
                </div>
                <a className="mt-12 flex items-center text-[#d6e3ff] text-[15px] font-medium tracking-wider group-hover:translate-x-2 transition-all relative z-10" href="#">
                  EXPLORE FRAMEWORKS <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </a>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              </div>
              {/* UX-Led Engineering */}
              <div className="col-span-12 md:col-span-4 bg-[#f0eded] p-[32px] md:p-[40px] border border-[#c4c6d0] flex flex-col justify-between shadow-sm cursor-pointer">
                <div>
                  <h3 className="font-['Noto_Serif',serif] text-[26px] md:text-[28px] font-semibold text-[#001736] mb-6">UX-Led Engineering</h3>
                  <p className="text-[16px] text-[#5c5f60] leading-[1.6] mb-8">
                    We don't just write code; we design workflows. Every engineering decision is filtered through the lens of user friction reduction.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[14px] text-[#5c5f60] group cursor-default">
                      <span className="material-symbols-outlined text-[#001736] group-hover:scale-125 transition-transform" style={{ fontSize: '20px' }}>check_circle</span> 
                      <span>Cognitive load mapping</span>
                    </div>
                    <div className="flex items-center gap-3 text-[14px] text-[#5c5f60] group cursor-default">
                      <span className="material-symbols-outlined text-[#001736] group-hover:scale-125 transition-transform" style={{ fontSize: '20px' }}>check_circle</span> 
                      <span>Accessibility compliance</span>
                    </div>
                    <div className="flex items-center gap-3 text-[14px] text-[#5c5f60] group cursor-default">
                      <span className="material-symbols-outlined text-[#001736] group-hover:scale-125 transition-transform" style={{ fontSize: '20px' }}>check_circle</span> 
                      <span>Behavioral analytics integration</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cloud Infrastructure */}
              <div className="col-span-12 md:col-span-8 relative overflow-hidden group border border-[#c4c6d0] min-h-[300px] shadow-sm cursor-pointer">
                <img 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  alt="High-tech server room infrastructure" 
                  src="/digitalimg/appdevlope2.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001736] via-[#001736]/80 to-transparent"></div>
                <div className="relative z-10 p-[32px] md:p-[48px] h-full flex flex-col justify-center text-white">
                  <h3 className="font-['Noto_Serif',serif] text-[28px] md:text-[32px] font-semibold mb-4 leading-tight max-w-md">Robust Backend Infrastructure</h3>
                  <p className="text-[16px] text-[#c5c7c8] max-w-md leading-[1.6]">
                    Auto-scaling microservices architectures designed for resilience and millions of concurrent users. High-availability cloud deployments that grow with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Lifecycle */}
        <section className="py-[15px] md:py-[20px] bg-white border-y border-[#c4c6d0]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-[64px]">
              <span className="text-[12px] font-semibold text-[#001736] mb-2 block uppercase tracking-[0.05em]">OUR METHODOLOGY</span>
              <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] font-semibold text-[#001736]">The Development Lifecycle</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px] md:gap-[24px] relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-[#c4c6d0] -z-10"></div>
              
              {/* Step 1 */}
              <div className="text-center md:text-left group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#001736] text-white flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-4xl">lightbulb</span>
                </div>
                <h4 className="font-['Noto_Serif',serif] text-[22px] font-semibold text-[#001736] mb-3">Ideation</h4>
                <p className="text-[14px] text-[#5c5f60] leading-[1.6]">Requirement gathering, feasibility studies, and strategic architecture planning to align with business objectives.</p>
              </div>
              {/* Step 2 */}
              <div className="text-center md:text-left group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#f0eded] text-[#001736] flex items-center justify-center mb-6 mx-auto md:mx-0 border border-[#c4c6d0] group-hover:bg-white group-hover:shadow-lg group-hover:scale-105 transition-all">
                  <span className="material-symbols-outlined text-4xl">architecture</span>
                </div>
                <h4 className="font-['Noto_Serif',serif] text-[22px] font-semibold text-[#001736] mb-3">Design</h4>
                <p className="text-[14px] text-[#5c5f60] leading-[1.6]">High-fidelity UI design, rapid prototyping, and exhaustive user journey mapping across all device footprints.</p>
              </div>
              {/* Step 3 */}
              <div className="text-center md:text-left group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#f0eded] text-[#001736] flex items-center justify-center mb-6 mx-auto md:mx-0 border border-[#c4c6d0] group-hover:bg-white group-hover:shadow-lg group-hover:scale-105 transition-all">
                  <span className="material-symbols-outlined text-4xl">code</span>
                </div>
                <h4 className="font-['Noto_Serif',serif] text-[22px] font-semibold text-[#001736] mb-3">Build</h4>
                <p className="text-[14px] text-[#5c5f60] leading-[1.6]">Agile engineering sprints with continuous integration (CI/CD), automated testing, and rigorous QA benchmarks.</p>
              </div>
              {/* Step 4 */}
              <div className="text-center md:text-left group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#f0eded] text-[#001736] flex items-center justify-center mb-6 mx-auto md:mx-0 border border-[#c4c6d0] group-hover:bg-white group-hover:shadow-lg group-hover:scale-105 transition-all">
                  <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                </div>
                <h4 className="font-['Noto_Serif',serif] text-[22px] font-semibold text-[#001736] mb-3">Launch</h4>
                <p className="text-[14px] text-[#5c5f60] leading-[1.6]">App Store optimization, cloud deployment orchestration, and post-launch maintenance with 24/7 monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[64px] md:py-[26px] bg-[#fcf9f8] relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="bg-[#001736] p-8 md:p-16 lg:p-[96px] relative overflow-hidden text-center md:text-left shadow-2xl">
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
                <img 
                  className="w-full h-full object-cover" 
                  alt="High-tech engineering precision" 
                  src="/digitalimg/appdevlope3.png" 
                />
              </div>
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] font-bold text-white mb-6 leading-tight">Ready to Engineer Your Next Innovation?</h2>
                <p className="text-[18px] text-[#c5c7c8] mb-[32px] leading-[1.6]">
                  Schedule a technical briefing with our lead architects to discuss your specific infrastructure and application requirements.
                </p>
                <Link to="/contact">
                  <button className="bg-white text-[#001736] px-10 py-5 text-[15px] font-medium uppercase tracking-wider flex items-center gap-3 mx-auto md:mx-0 hover:bg-[#d6e3ff] transition-all hover:scale-105 active:scale-95 shadow-lg w-full md:w-auto justify-center">
                    Book a Briefing <span className="material-symbols-outlined">calendar_today</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

     
    </>
  )
}


