import React from 'react';
import { Link } from 'react-router-dom';

const TheFounderCapitalStack = () => {
  return (
    <div className="font-['Inter'] text-[#1b1c1c] bg-white min-h-screen">
      
      <main className="">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden border-b-[3px] border-[#00113a]">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Sun-drenched collaborative workspace" 
              className="w-full h-full " 
              src="/insituted/founders-capital-stack.jpeg"
            />
            <div className="absolute inset-0 bg-white/10 backdrop-contrast-[1.1]"></div>
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-[24px] md:px-[64px] text-center">
            <div className="inline-block bg-[#00113a] text-white px-6 py-1.5 mb-8 text-[12px] font-semibold uppercase tracking-[0.3em] shadow-xl">
              Curriculum Core 2026
            </div>
            <h1 className="text-[32px] md:text-[72px] font-bold text-[#ffff] uppercase mb-8 max-w-4xl mx-auto leading-[1.1] drop-shadow-lg">
              The Founder’s <br/><span className="text-[#ffff] font-black">Capital Stack</span>
            </h1>
            <div className="max-w-2xl mx-auto mb-12 relative">
              <div className="absolute inset-0 bg-white/90 backdrop-blur-md transform -skew-x-2"></div>
              <p className="relative z-10 text-[20px] leading-[1.6] text-[#00113a] px-8 py-8 border-l-8 border-[#00113a] text-left font-normal">
                A comprehensive immersion for high-growth founders on the architecture of building, valuing, and scaling a venture into a global institution. 
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-[#00113a] text-white px-12 py-5 text-[12px] font-semibold tracking-[0.25em] uppercase hover:bg-[#595f67] hover:-translate-y-1 transition-all shadow-lg text-center"
              >
                START ENROLLMENT
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-white text-[#00113a] border-2 border-[#00113a] px-12 py-5 text-[12px] font-semibold tracking-[0.25em] uppercase hover:bg-[#00113a] hover:text-white hover:-translate-y-1 transition-all shadow-md text-center"
              >
                DOWNLOAD SYLLABUS
              </Link>
            </div>
          </div>
        </section>

        {/* Realities of Scale Section */}
        <section className="py-[28px] px-[24px] md:px-[64px] max-w-[1280px] mx-auto bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[32px] md:text-[48px] font-bold text-[#00113a] uppercase leading-[1.1] mb-10">
                The Structural <br/><span className="text-[#595f67]">Realities of Scale</span>
              </h2>
              <div className="w-32 h-2.5 bg-[#00113a] mb-10"></div>
              <p className="text-[20px] leading-relaxed text-[#00113a] mb-8 pr-12">
                Beyond the spark of innovation lies the complex structural reality of financial endurance. We provide the architectural framework to navigate these waters.
              </p>
              <div className="relative h-64 w-full overflow-hidden border-2 border-[#00113a]">
                <img 
                  alt="Modern Architecture" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeUkgjbbh2sUqbjLYrLg3FwJr84hOPIYxTI7MO7y4zkF71XeCEz8To-kaVZsFOGpDg0LHofdiXmnOAdPqtbKjIeGKP7cLaEi6ITZCio6X_9A68YaSXRS2Vh0N1IS_r2b6SIv6f0pCHSwLRivCid-MN0bNjLTJMI76mSWsnldFV-TSI39V3C6lE-zRy-xJV_kAX0qhvFA1ymKDFnaNVgRt2NvQeEJAnwvMVWzHb8hG-fEUMdA8Hfj4fyXnzR-jru_PjUWxGdFZEmw"
                />
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: "calculate", title: "Unit Economics", desc: "Master the foundational mathematics of customer acquisition, lifetime value, and sustainable margins from day one." },
                { icon: "account_balance", title: "Alternative Funding", desc: "Venture capital is not the only path. Explore debt financing, revenue sharing, and non-dilutive capital structures." },
                { icon: "pie_chart", title: "Equity Dilution", desc: "Detailed cap table modeling to ensure founders maintain control while fuel-injecting growth through outside investment." },
                { icon: "trending_up", title: "Market Valuation", desc: "Learn how institutions value intellectual property and momentum in shifting global market cycles." }
              ].map((item, idx) => (
                <div key={idx} className="border-2 border-[#00113a] p-8 bg-white flex flex-col justify-between min-h-[320px] hover:bg-[#00113a] hover:text-white group transition-all">
                  <div>
                    <span className="material-symbols-outlined text-[#00113a] group-hover:text-white text-5xl mb-8 transition-colors">{item.icon}</span>
                    <h3 className="text-[32px] font-semibold uppercase mb-4 leading-tight">{item.title}</h3>
                    <p className="text-[16px] leading-[1.6] opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Path Section */}
        <section className="blueprint-grid py-[28px] border-y-2 border-[#00113a]">
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[64px]">
            <div className="mb-20 text-center">
              <h2 className="text-[48px] font-bold text-[#00113a] uppercase tracking-tight">Curriculum Path</h2>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px bg-[#00113a]/20 w-12"></div>
                <p className="text-[12px] font-semibold tracking-[0.4em] text-[#595f67]">FOUR PILLARS OF ARCHITECTURAL SCALE</p>
                <div className="h-px bg-[#00113a]/20 w-12"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { 
                  id: "01", 
                  category: "[SYSTEMS & REVENUE]", 
                  title: "The Core Operating System", 
                  quote: '"Before you scale, you must build the plumbing."',
                  desc: "Zero-to-One Revenue, Distribution Engines, and the Technical Stack essential for structural integrity.",
                  skills: ["Revenue Infrastructure Design", "Stack Interoperability", "Go-to-Market Mechanics"]
                },
                { 
                  id: "02", 
                  category: "[FORMATION & HIERARCHY]", 
                  title: "The Architectural Foundation", 
                  quote: '"Designing the skeleton of the company."',
                  desc: "Optimal entity design (Pvt Ltd, LLP), organizational hierarchy, and the critical governance layer.",
                  skills: ["Corporate Entity Selection", "Governance Protocol Setup", "Command Hierarchy Mapping"]
                },
                { 
                  id: "03", 
                  category: "[TAX, BANKING & LEGAL]", 
                  title: "The Regulatory Fortress", 
                  quote: '"Protecting the treasury."',
                  desc: "Institutional Banking, cross-border tax strategy, and the agreement vault protecting IP assets.",
                  skills: ["Capital Flow Optimization", "Regulatory Compliance Audit", "IP & Asset Protection"]
                },
                { 
                  id: "04", 
                  category: "[CAPITAL & DILUTION]", 
                  title: "The Equity Blueprint", 
                  quote: '"Mastering the math of ownership."',
                  desc: "Cap Tables, Vesting & Cliffs, and the mechanics of venture capital vs. alternative funding.",
                  skills: ["Cap Table Modeling", "Term Sheet Simulation", "Dilution Math Proficiency"]
                }
              ].map((module) => (
                <div key={module.id} className="bg-white p-8 border-2 border-[#00113a] flex flex-col justify-between min-h-[500px] relative transition-all hover:-translate-y-2 hover:shadow-2xl group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-[12rem] text-[#00113a] pointer-events-none group-hover:opacity-10 transition-opacity leading-none">
                    {module.id}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-[12px] font-semibold text-[#595f67] uppercase mb-3 tracking-[0.25em]">{module.category}</h4>
                    <h3 className="text-[32px] font-semibold text-[#00113a] uppercase mb-6 leading-tight">{module.title}</h3>
                    <div className="w-16 h-1.5 bg-[#00113a] mb-8"></div>
                    <p className="text-[16px] text-[#00113a] font-bold mb-6 italic border-l-4 border-[#595f67] pl-4">{module.quote}</p>
                    <p className="text-[16px] leading-[1.6] text-[#444650] mb-10 leading-relaxed">{module.desc}</p>
                  </div>
                  <div className="mt-auto bg-[#00113a]/5 -mx-8 -mb-8 p-8 border-t-2 border-[#00113a] relative z-10">
                    <h5 className="text-[12px] font-black text-[#00113a] uppercase mb-6 tracking-widest">Skill Checklist</h5>
                    <ul className="space-y-4">
                      {module.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-4 text-[#00113a] font-bold uppercase text-xs">
                          <span className="material-symbols-outlined text-xl">check_circle</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admissions Criteria Section */}
        <section className="py-[28px] px-[24px] md:px-[64px] max-w-[1280px] mx-auto">
          <div className="bg-[#00113a] text-white p-8 md:p-20 flex flex-col lg:flex-row gap-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <img 
                alt="Team Growth" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAccr8gWO4_oTa6PyssUnSs1nJuMsUur3VqxFAPT7DqzIc1wfiu6pyvTgjYaZxcyqk0fGMZs2SjmCJOMOmCNJFaX209jPn9NR8xwtgJdZqYwxyqCoxGtMn3pk-LwsZ4C6j91KSL8_6sYG2soZYoYhaQ3b8TC992u7jjjwbvOsH4rU5xAtFYkpzBF_k2J0Mz2VM9Axf2C98jKSGtt-FCZtyVM2WkN1fW34RsZ15qDxRrqJYlzJw-fS2ii7f-tFtHMRn02ps81oaL-g"
              />
            </div>
            <div className="lg:w-2/5 relative z-10">
              <h2 className="text-[48px] font-bold uppercase mb-10 tracking-tight leading-none">
                Admissions <br/><span className="text-[#595f67] opacity-80">Criteria</span>
              </h2>
              <p className="text-white/90 text-[20px] leading-relaxed">
                We seek high-conviction founders who prioritize structural stability as much as disruptive innovation. Each cohort is hand-selected for synergy and scale potential.
              </p>
            </div>
            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-16 relative z-10">
              {[
                { title: "Revenue Stage", desc: "Post-launch companies with initial revenue or verifiable pilot traction. Pre-seed and Seed stage preferred." },
                { title: "Global Intent", desc: "Solutions that possess the inherent DNA for cross-border expansion and institutional scaling." },
                { title: "Commitment", desc: "Ability to dedicate 8 hours weekly to intensive curriculum sessions and boardroom simulations." },
                { title: "Vision", desc: "A clear articulation of the social or economic problem being addressed at a foundational structural level." }
              ].map((item, idx) => (
                <div key={idx} className="border-t border-white/20 pt-8">
                  <h4 className="text-[12px] font-black uppercase mb-4 text-white tracking-[0.2em]">{item.title}</h4>
                  <p className="text-white/70 text-[16px] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="pb-[28px] px-[24px] md:px-[64px] max-w-[1280px] mx-auto text-center">
          <div className="border-4 border-[#00113a] p-16 md:p-24 relative group overflow-hidden">
            <div className="absolute inset-0 bg-[#00113a] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="relative z-10 group-hover:text-white transition-colors duration-500">
              <h2 className="text-[32px] md:text-[48px] font-bold uppercase mb-8">Build Your Foundation.</h2>
              <p className="text-[20px] mb-12 max-w-2xl mx-auto font-medium">Applications for the Autumn cohort close September 15th. Limited to 24 founders per session.</p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#00113a] text-white group-hover:bg-white group-hover:text-[#00113a] px-16 py-6 text-[12px] font-semibold tracking-[0.4em] uppercase transition-all shadow-2xl"
              >
                APPLY TO JOIN THE COHORT
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TheFounderCapitalStack;