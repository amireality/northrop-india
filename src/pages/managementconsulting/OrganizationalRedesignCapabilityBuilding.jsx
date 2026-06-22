import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OrganizationalRedesignCapabilityBuilding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f5f3ee] text-[#1b1c19] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern Architecture Detail"
              className="w-full h-full object-cover"
              src="/managmentcounsaltingimg/managmentconsulting.jpeg"
            />
            
          </div>
          <div className="relative z-10 px-[32px] md:px-[64px] max-w-[1200px] mx-auto w-full">
            <div className="max-w-4xl">
              <span className="font-sans text-[12px] font-semibold text-[#ffff] mb-6 block uppercase tracking-[0.2em]">Service MC-04 / Organizational Redesign</span>
              <h1 className="font-serif text-[48px] md:text-[64px] text-[#ffff] mb-8 leading-tight font-semibold">The structure that built the company is the structure that limits it now.</h1>
              <p className="font-sans text-[18px] text-[#ffff] max-w-2xl border-l-2 border-[#ffff] pl-8 py-2">
                Organizations accumulate; they aren't optimized. Reporting lines reflect history, not strategy. We redesign operating models for decision velocity and scale.
              </p>
            </div>
          </div>
        </section>

        {/* Diagnostic Section */}
        <section className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 md:col-span-5 md:pr-12">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-8 font-semibold">Industry-Specific Organizational Failures</h2>
              <p className="font-sans text-[18px] text-[#444748] mb-12 leading-relaxed">Symptoms of structural decay manifest differently across industries, but the root cause remains the same: misalignment between architecture and ambition.</p>
            </div>
            <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c4c7c7] border border-[#c4c7c7]">
              <div className="p-10 bg-[#fbf9f4]">
                <h3 className="font-sans text-[12px] font-semibold text-[#000000] mb-4 opacity-50 uppercase tracking-widest">01 / TECH GROWTH</h3>
                <p className="font-serif text-[24px] md:text-[28px] text-[#000000] mb-4 font-medium">Founder-centric bottlenecks</p>
                <p className="font-sans text-[16px] text-[#444748]">Paralyzed decision making post Series B due to legacy control structures.</p>
              </div>
              <div className="p-10 bg-[#fbf9f4]">
                <h3 className="font-sans text-[12px] font-semibold text-[#000000] mb-4 opacity-50 uppercase tracking-widest">02 / PRIVATE EQUITY</h3>
                <p className="font-serif text-[24px] md:text-[28px] text-[#000000] mb-4 font-medium">Legacy Professionalization</p>
                <p className="font-sans text-[16px] text-[#444748]">Informal structures inhibiting institutional-grade management scale.</p>
              </div>
              <div className="p-10 bg-[#fbf9f4]">
                <h3 className="font-sans text-[12px] font-semibold text-[#000000] mb-4 opacity-50 uppercase tracking-widest">03 / CONGLOMERATES</h3>
                <p className="font-serif text-[24px] md:text-[28px] text-[#000000] mb-4 font-medium">Corporate Center Drag</p>
                <p className="font-sans text-[16px] text-[#444748]">Bloated headquarters creating administrative friction rather than synergies.</p>
              </div>
              <div className="p-10 bg-[#fbf9f4]">
                <h3 className="font-sans text-[12px] font-semibold text-[#000000] mb-4 opacity-50 uppercase tracking-widest">04 / MANUFACTURING</h3>
                <p className="font-serif text-[24px] md:text-[28px] text-[#000000] mb-4 font-medium">Functional Silos</p>
                <p className="font-sans text-[16px] text-[#444748]">Preventing the integrated supply chain agility required for modern markets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Large Scale Visual */}
        <section className="w-full h-[400px] md:h-[600px] overflow-hidden">
          <img
            alt="High-end Workspace Architecture"
            className="w-full h-full object-cover grayscale brightness-90"
            src="/managmentcounsaltingimg/organizational-redesign1.png"
          />
        </section>

        {/* Case Study Section */}
        <section className="bg-[#e4e2dd]">
          <div className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto">
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-span-12 md:col-span-6">
                <span className="font-sans text-[12px] font-semibold text-[#000000] mb-6 block uppercase tracking-[0.2em]">Featured Case Study</span>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-8 font-semibold">Architecting Agility in Legacy Structures</h2>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-[#000000] text-[18px]">01</span>
                    <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                      <span className="text-[#000000] font-semibold">Challenge:</span> A century-old industrial conglomerate faced market share erosion due to slow decision cycles.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-[#000000] text-[18px]">02</span>
                    <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                      <span className="text-[#000000] font-semibold">Solution:</span> Northrop redesigned the global operating model, shifting from functional silos to customer-centric P&Ls.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-[#000000] text-[18px]">03</span>
                    <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                      <span className="text-[#000000] font-semibold">Impact:</span> 40% reduction in time-to-market and a revitalized innovation pipeline within 18 months.
                    </p>
                  </div>
                </div>
                <a className="inline-flex items-center gap-2 font-sans text-[12px] font-bold text-[#000000] group uppercase tracking-widest" href="#">
                  VIEW FULL CASE STUDY 
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-[18px]">arrow_forward</span>
                </a>
              </div>
              <div className="col-span-12 md:col-span-5 md:col-start-8 relative mt-12 md:mt-0">
                <div className="aspect-[4/5] bg-[#000000] relative overflow-hidden shadow-2xl">
                  <img
                    alt="Strategic Visual"
                    className="w-full h-full object-cover grayscale opacity-80"
                    src="/managmentcounsaltingimg/organizational-redesign2.png"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-12 text-center border-[20px] border-white/10">
                    <p className="font-serif text-[28px] text-white italic">"Structure is strategy in motion."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery/Capabilities Section */}
        <section className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-[24px] items-start">
            <div className="col-span-12 md:col-span-6 md:pr-8">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] mb-12 font-semibold">Strategic Outcomes</h2>
              <div className="divide-y divide-[#c4c7c7]">
                <div className="py-8">
                  <h4 className="font-sans text-[12px] font-bold text-[#000000] mb-3 uppercase tracking-widest">OPERATING MODEL ARCHITECTURE</h4>
                  <p className="font-sans text-[16px] text-[#444748] leading-relaxed">Designing the blueprint for how value is created and delivered across the global enterprise.</p>
                </div>
                <div className="py-8">
                  <h4 className="font-sans text-[12px] font-bold text-[#000000] mb-3 uppercase tracking-widest">DECISION RIGHTS MATRIX</h4>
                  <p className="font-sans text-[16px] text-[#444748] leading-relaxed">Clarifying accountability and governance protocols to eliminate consensus-driven paralysis.</p>
                </div>
                <div className="py-8">
                  <h4 className="font-sans text-[12px] font-bold text-[#000000] mb-3 uppercase tracking-widest">CAPABILITY BUILDING</h4>
                  <p className="font-sans text-[16px] text-[#444748] leading-relaxed">Identifying and embedding the critical organizational skills required for future state readiness.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mt-12 md:mt-0">
              <img
                alt="Corporate Strategy Workshop"
                className="w-full h-[400px] md:h-[600px] object-cover shadow-2xl grayscale"
                src="/managmentcounsaltingimg/organizational-redesign3.png"
              />
            </div>
          </div>
        </section>

        {/* Insights Grid Section */}
        <section className="px-[32px] md:px-[64px] py-[128px] max-w-[1200px] mx-auto border-t border-[#c4c7c7]">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-sans text-[12px] font-semibold text-[#000000] mb-4 block uppercase tracking-widest">Thought Leadership</span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#000000] font-semibold">Global Insights</h2>
            </div>
            <a className="font-sans text-[12px] font-bold text-[#444748] hover:text-[#000000] transition-colors mb-2 uppercase tracking-widest border-b-2 border-transparent hover:border-[#000000] pb-1" href="#">VIEW ALL INSIGHTS</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {/* Article 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-[#e4e2dd] mb-6 overflow-hidden">
                <img
                  alt="Article 1"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src="/managmentcounsaltingimg/organizational-redesign4.png"
                />
              </div>
              <span className="font-sans text-[10px] text-[#444748] uppercase mb-2 block font-semibold tracking-widest">Organization / 12 Oct 2024</span>
              <h3 className="font-serif text-[20px] md:text-[22px] text-[#000000] group-hover:underline underline-offset-4 mb-4 leading-snug font-medium">The End of the Matrix: Why Speed Demands Simplicity</h3>
            </div>
            {/* Article 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-[#e4e2dd] mb-6 overflow-hidden">
                <img
                  alt="Article 2"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src="/managmentcounsaltingimg/organizational-redesign5.png"
                />
              </div>
              <span className="font-sans text-[10px] text-[#444748] uppercase mb-2 block font-semibold tracking-widest">Strategy / 08 Oct 2024</span>
              <h3 className="font-serif text-[20px] md:text-[22px] text-[#000000] group-hover:underline underline-offset-4 mb-4 leading-snug font-medium">AI-Ready Structures: How to Rebuild for Automation</h3>
            </div>
            {/* Article 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-[#e4e2dd] mb-6 overflow-hidden">
                <img
                  alt="Article 3"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src="/managmentcounsaltingimg/organizational-redesign6.png"
                />
              </div>
              <span className="font-sans text-[10px] text-[#444748] uppercase mb-2 block font-semibold tracking-widest">Leadership / 22 Sep 2024</span>
              <h3 className="font-serif text-[20px] md:text-[22px] text-[#000000] group-hover:underline underline-offset-4 mb-4 leading-snug font-medium">The CEO's Playbook for Organizational Transformation</h3>
            </div>
            {/* Article 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-[#e4e2dd] mb-6 overflow-hidden">
                <img
                  alt="Article 4"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src="/managmentcounsaltingimg/organizational-redesign7.png"
                />
              </div>
              <span className="font-sans text-[10px] text-[#444748] uppercase mb-2 block font-semibold tracking-widest">Markets / 05 Sep 2024</span>
              <h3 className="font-serif text-[20px] md:text-[22px] text-[#000000] group-hover:underline underline-offset-4 mb-4 leading-snug font-medium">Regional Autonomy vs Global Standardisation</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OrganizationalRedesignCapabilityBuilding;