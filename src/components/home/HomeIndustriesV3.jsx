import React from 'react';

const SectorItem = ({ icon, name, desc, intensity, intensityColors }) => (
  <div className="flex items-start gap-4 p-5 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-all group relative overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5963A] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
    <div className="text-[24px] shrink-0">{icon}</div>
    <div className="flex-1">
      <div className="text-[14px] font-bold text-[#1A2B45] mb-1 group-hover:text-[#C5963A] transition-colors leading-tight">{name}</div>
      <div className="text-[11.5px] text-gray-500 leading-[1.4] mb-3">{desc}</div>
      <div className="flex gap-1">
        {[1, 2, 3].map(i => (
          <span 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full ${i <= intensity ? intensityColors : 'bg-gray-200'}`}
          ></span>
        ))}
      </div>
    </div>
  </div>
);

const HomeIndustriesV3 = () => {
  const clusters = [
    {
      label: 'Cluster 01',
      title: 'Financial Services',
      count: '4 sectors · High regulatory intensity',
      sectors: [
        { icon: '🏦', name: 'Banking', desc: 'Credit risk, NPA monitoring, RBI compliance', intensity: 3 },
        { icon: '📊', name: 'NBFC', desc: 'Liquidity audits, SRA, regulatory surveillance', intensity: 3 },
        { icon: '💳', name: 'Fintech', desc: 'DPDP compliance, payment fraud forensics', intensity: 3 },
        { icon: '🚢', name: 'Export & Trade', desc: 'Transfer pricing, cross-border tax structuring', intensity: 2 }
      ]
    },
    {
      label: 'Cluster 02',
      title: 'Industrial',
      count: '6 sectors · High operational complexity',
      sectors: [
        { icon: '🔩', name: 'Steel & Metals', desc: 'IBC mandates, capex diligence, scrap strategy', intensity: 2 },
        { icon: '⚙️', name: 'Manufacturing', desc: 'Operational due diligence, supply chain risk', intensity: 2 },
        { icon: '🏗', name: 'Construction', desc: 'Project finance, cost overrun forensics', intensity: 2 },
        { icon: '🔌', name: 'Wires & Cables', desc: 'Working capital analysis, channel fraud risk', intensity: 1 },
        { icon: '🪟', name: 'Poly Pipes & Plastics', desc: 'Inventory diligence, related-party exposure', intensity: 0 },
        { icon: '🛢', name: 'Oil & Energy', desc: 'ESG compliance, EPR obligations, risk advisory', intensity: 3 }
      ]
    },
    {
      label: 'Cluster 03',
      title: 'Consumer & Digital',
      count: '4 sectors · Growth-stage complexity',
      sectors: [
        { icon: '🛒', name: 'Retail & D2C', desc: 'Revenue quality, customer concentration risk', intensity: 1 },
        { icon: '🧴', name: 'FMCG', desc: 'Channel inventory, seasonality normalisation', intensity: 2 },
        { icon: '🏨', name: 'Hotel & Leisure', desc: 'Asset valuation, operational benchmarking', intensity: 1 },
        { icon: '☁️', name: 'Cloud & SaaS', intensity: 2, name: 'Cloud & SaaS', desc: 'ARR quality, data privacy, AI governance' }
      ]
    },
    {
      label: 'Cluster 04',
      title: 'Technology & Social',
      count: '2 sectors · Emerging regulatory frontier',
      sectors: [
        { icon: '🌐', name: 'Technology', desc: 'AI readiness, GCC structuring, IP valuation', intensity: 2 },
        { icon: '🌱', name: 'NGO & Social Sector', desc: 'Grant management, FCRA, CSR compliance, impact assessment', intensity: 3 }
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden" id="industries">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mb-16 sr">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#C5963A]"></div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#C5963A]">Sector Intelligence</span>
            </div>
            <h2 className="font-serif text-[34px] md:text-[52px] font-normal text-[#1A2B45] leading-[1.1] tracking-tight">
              Industries <em className="italic font-light text-gray-400">we serve</em>
            </h2>
            <p className="text-[14px] text-gray-500 mt-5 leading-[1.75] max-w-[440px]">
              Cross-sector depth that generalist firms cannot replicate — built through active mandates, not desktop research. Each cluster reflects distinct regulatory complexity and advisory demand.
            </p>
          </div>
          
          <div className="lg:pt-6">
            <p className="text-[15px] text-gray-500 leading-[1.7] mb-10">
              Our mandate portfolio spans four sector clusters, each with distinct regulatory environments, compliance obligations, and risk profiles. This cross-sector exposure allows Northrop practitioners to draw pattern recognition across industries that most advisory firms serve in isolation.
            </p>
            <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="font-serif text-[32px] font-normal text-[#1A2B45] leading-none mb-2">16<sup>+</sup></div>
                <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Active Sectors</div>
              </div>
              <div>
                <div className="font-serif text-[32px] font-normal text-[#1A2B45] leading-none mb-2">4</div>
                <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Sector Clusters</div>
              </div>
              <div>
                <div className="font-serif text-[32px] font-normal text-[#1A2B45] leading-none mb-2">8<sup>+</sup></div>
                <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Years Depth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-100 rounded-2xl overflow-hidden shadow-sm sr d1">
          {clusters.map((cluster, index) => (
            <div key={index} className={`flex flex-col border-gray-100 ${index < 3 ? 'lg:border-r' : ''} ${index % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0'} lg:border-r last:border-r-0 border-b lg:border-b-0`}>
              <div className="p-6 bg-[#1A2B45] text-white min-h-[140px] flex flex-col justify-end">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-2">{cluster.label}</div>
                <h3 className="font-serif text-[22px] font-normal leading-tight mb-2">{cluster.title}</h3>
                <div className="text-[11px] opacity-60 font-medium">{cluster.count}</div>
              </div>
              
              <div className="flex-1 bg-white">
                {cluster.sectors.map((sector, sIdx) => (
                  <SectorItem 
                    key={sIdx} 
                    {...sector} 
                    intensityColors={sector.intensity === 3 ? 'bg-[#C5963A]' : 'bg-[#1A2B45]'}
                  />
                ))}
              </div>

              {/* Legend for Cluster 04 */}
              {index === 3 && (
                <div className="p-6 border-t border-gray-50 mt-auto bg-gray-50/30">
                  <div className="text-[9.5px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-4">Regulatory Intensity</div>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-[11px] text-gray-500">
                      <span className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#C5963A]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#C5963A]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#C5963A]"></span>
                      </span>
                      High — multi-regulator
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-gray-500">
                      <span className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#1A2B45]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#1A2B45]"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                      </span>
                      Medium — sector regulator
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-gray-500">
                      <span className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#1A2B45]"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                      </span>
                      Standard — compliance
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeIndustriesV3;