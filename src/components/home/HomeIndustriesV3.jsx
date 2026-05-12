import React, { useState, useEffect } from 'react';

const clusters = [
  {
    id: 'fin',
    name: 'Financial Services',
    headerName: 'Banking, NBFC, Fintech & Trade',
    headerCount: '4 sectors · High regulatory intensity',
    num: '01',
    description: "The most heavily regulated sector cluster in Northrop's portfolio — spanning bank credit forensics, NBFC surveillance, fintech compliance, and cross-border trade structuring.",
    count: 4,
    color: '#2356B2',
    tagClass: 'bg-[#2356B2]/10 text-[#1740A0]',
    headerTagClass: 'bg-[#2356B2]/25 text-[#A5C2F9]',
    meta: [
      { value: '200+', label: 'SRA Audits' },
      { value: '₹1,200Cr+', label: 'Loan Exposure' },
      { value: 'High', label: 'Regulatory Intensity' }
    ],
    sectors: [
      { id: '01', icon: '🏦', name: 'Banking', mandate: 'Credit Risk — NPA', desc: 'Credit monitoring, SRA audits, RBI compliance frameworks, and forensic investigations on NPA accounts.', intensity: 3, services: ['Loan exposure monitoring & surveillance', 'Forensic audit on NPA accounts', 'RBI compliance & SRA reporting'] },
      { id: '02', icon: '📊', name: 'NBFC', mandate: 'Liquidity — SRA', desc: 'Liquidity risk audits, SRA compliance, credit analytics, and regulatory surveillance across non-banking finance companies.', intensity: 3, services: ['200+ SRA audits completed', 'Credit risk analytics & portfolio review', 'RBI framework compliance'] },
      { id: '03', icon: '💳', name: 'Fintech', mandate: 'DPDP — Fraud Risk', desc: 'DPDP compliance architecture, payment fraud forensics, AML frameworks, and digital transaction risk management.', intensity: 2, services: ['DPDP compliance framework design', 'Payment fraud forensic investigation', 'AML & KYC advisory'] },
      { id: '04', icon: '🚢', name: 'Export & Trade', mandate: 'Transfer Pricing', desc: 'Cross-border tax structuring, transfer pricing documentation, FEMA compliance, and export incentive advisory.', intensity: 2, services: ['Transfer pricing documentation', 'Cross-border tax structuring', 'FEMA & RBI compliance'] }
    ]
  },
  {
    id: 'ind',
    name: 'Industrial',
    headerName: 'Steel, Manufacturing, Construction, Energy & More',
    headerCount: '6 sectors · High operational complexity',
    num: '02',
    description: "India's manufacturing and industrial backbone — characterized by high operational complexity, IBC exposure, and the growing intersection of capex decisions and ESG obligations.",
    count: 6,
    color: '#C5963A',
    tagClass: 'bg-[#C5963A]/12 text-[#8A6520]',
    headerTagClass: 'bg-[#C5963A]/25 text-[#E5B54F]',
    meta: [
      { value: '6', label: 'Industrial Sectors' },
      { value: 'IBC', label: 'Resolution Mandates' },
      { value: 'High', label: 'Operational Complexity' }
    ],
    sectors: [
      { id: '05', icon: '🔩', name: 'Steel & Metals', mandate: 'IBC — Capex DD', desc: 'IBC resolution mandates, capital expenditure due diligence, scrap strategy advisory, and cost structure benchmarking.', intensity: 2, services: ['IBC resolution & NCLT advisory', 'Capex due diligence', 'ESG & EPR compliance'] },
      { id: '06', icon: '⚙️', name: 'Manufacturing', mandate: 'Operational DD', desc: 'Operational due diligence, supply chain risk, working capital analysis, and vendor payment forensics for mid-market manufacturers.', intensity: 2, services: ['Operational due diligence', 'Supply chain risk assessment', 'Working capital normalisation'] },
      { id: '07', icon: '🏗', name: 'Construction', mandate: 'Project Finance', desc: 'Project finance structuring, cost overrun forensics, contractor payment audit, and real estate developer financial due diligence.', intensity: 2, services: ['Cost overrun forensic audit', 'Project finance structuring', 'Contractor payment review'] },
      { id: '08', icon: '🔌', name: 'Wires & Cables', mandate: 'Channel Risk — WC', desc: 'Channel inventory diligence, trade payable forensics, working capital analysis, and related-party transaction review.', intensity: 2, services: ['Channel inventory diligence', 'Working capital cycle analysis', 'Trade payable forensics'] },
      { id: '09', icon: '🪟', name: 'Poly Pipes & Plastics', mandate: 'Inventory DD', desc: 'Inventory valuation, related-party exposure mapping, GST compliance review, and quality-of-earnings analysis for PE transactions.', intensity: 1, services: ['Inventory valuation diligence', 'Related-party exposure mapping', 'QoE analysis for PE deals'] },
      { id: '10', icon: '🛢', name: 'Oil & Energy', mandate: 'ESG — EPR', desc: 'ESG compliance, EPR obligation management, environmental liability diligence, and risk advisory for upstream and midstream energy businesses.', intensity: 3, services: ['ESG & EPR compliance advisory', 'Environmental liability due diligence', 'Energy sector risk frameworks'] }
    ]
  },
  {
    id: 'con',
    name: 'Consumer & Retail',
    headerName: 'Retail, FMCG, Hospitality & Digital Commerce',
    headerCount: '4 sectors · Growth-stage complexity',
    num: '03',
    description: "Growth-stage complexity across India's consumption economy — from channel-heavy FMCG businesses to ARR-quality reviews for D2C brands and hospitality asset transactions.",
    count: 4,
    color: '#1E7A5A',
    tagClass: 'bg-[#1E7A5A]/10 text-[#145E40]',
    headerTagClass: 'bg-[#1E7A5A]/25 text-[#6EE7B7]',
    meta: [
      { value: '4', label: 'Consumer Sectors' },
      { value: 'PE', label: 'Primary Deal Flow' },
      { value: 'Medium', label: 'Regulatory Intensity' }
    ],
    sectors: [
      { id: '11', icon: '🛒', name: 'Retail & D2C', mandate: 'Revenue Quality', desc: 'Revenue quality assessment, customer concentration risk, multi-channel margin analysis, and GST compliance for retail and direct-to-consumer brands.', intensity: 2, services: ['Revenue quality & QoE analysis', 'Customer concentration risk', 'Multi-channel margin review'] },
      { id: '12', icon: '🧴', name: 'FMCG', mandate: 'Seasonality — Channel', desc: 'Channel inventory diligence, seasonality normalisation, trade advance forensics, and distributor financial health assessment for FMCG M&A transactions.', intensity: 2, services: ['Channel & seasonality normalisation', 'Distributor financial assessment', 'Trade advance forensic review'] },
      { id: '13', icon: '🏨', name: 'Hotel & Leisure', mandate: 'Asset Valuation', desc: 'Asset and brand valuation, RevPAR benchmarking, operational due diligence, and tourism-sector financial advisory for hospitality operators and investors.', intensity: 2, services: ['Asset & brand valuation', 'RevPAR operational benchmarking', 'Hospitality M&A advisory'] },
      { id: '14', icon: '☁️', name: 'Cloud & SaaS', mandate: 'ARR Quality — DPDP', desc: 'ARR quality diligence, churn and cohort analysis, DPDP data privacy compliance, and AI governance for cloud-native and SaaS businesses raising growth capital.', intensity: 2, services: ['ARR quality & cohort analysis', 'DPDP privacy compliance', 'AI governance frameworks'] }
    ]
  },
  {
    id: 'tec',
    name: 'Technology & Social',
    headerName: 'Technology, NGO & Social Impact',
    headerCount: '2 sectors · Emerging regulatory frontier',
    num: '04',
    description: "Two sectors at the emerging frontier of India's regulatory landscape — where AI governance, data privacy law, and social sector financial compliance are converging into a new advisory category.",
    count: 2,
    color: '#5A3F8A',
    tagClass: 'bg-[#5A3F8A]/10 text-[#3D2570]',
    headerTagClass: 'bg-[#5A3F8A]/25 text-[#D8B4FE]',
    meta: [
      { value: '5+', label: 'NGO Partnerships' },
      { value: '10+', label: 'Impact Assessments' },
      { value: 'Emerging', label: 'Regulatory Frontier' }
    ],
    sectors: [
      { id: '15', icon: '🌐', name: 'Technology', mandate: 'GCC — IP Valuation', desc: 'GCC structuring advisory, intellectual property valuation, AI readiness assessment, and technology company financial due diligence for PE and strategic buyers.', intensity: 2, services: ['GCC structuring & governance', 'IP & intangible asset valuation', 'AI readiness & tech due diligence'] },
      { id: '16', icon: '🌱', name: 'NGO & Social Sector', mandate: 'Grant Mgmt — FCRA', desc: 'Grant management, FCRA compliance, PMLA obligations, CSR impact reporting, and outcome-based funding framework design for development organisations.', intensity: 3, services: ['Grant management & utilization audit', 'FCRA & PMLA compliance', 'CSR impact assessment & reporting'] }
    ]
  }
];

const tickerItems = [
  "Banking", "NBFC", "Fintech", "Export & Trade", "Steel & Metals", "Manufacturing", 
  "Construction", "Wires & Cables", "Poly Pipes", "Oil & Energy", "Retail & D2C", 
  "FMCG", "Hotel & Leisure", "Cloud & SaaS", "Technology", "NGO & Social Sector"
];

const SectorCard = ({ sector, clusterColor, tagClass, delay }) => {
  return (
    <div 
      className="group relative bg-white p-[28px_28px_36px] border-r border-b border-[#E5E0D6] overflow-hidden transition-colors duration-200 hover:bg-[#F8F5F0] opacity-0 translate-y-6 animate-cardIn"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      {/* Accent Bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px] scale-y-0 origin-top transition-transform duration-250 group-hover:scale-y-100"
        style={{ backgroundColor: clusterColor }}
      />
      
      {/* Watermark Number */}
      <div className="absolute top-[-12px] right-[8px] font-serif text-[72px] font-medium leading-none text-[#1A2B45]/[0.04] pointer-events-none select-none">
        {sector.id}
      </div>

      <span className="text-[24px] mb-[13px] block leading-none">{sector.icon}</span>
      <h3 className="font-serif text-[20px] font-medium text-[#1A2B45] leading-[1.2] mb-[6px]">{sector.name}</h3>
      
      <div className={`inline-block px-[10px] py-[3px] rounded-full text-[10px] font-semibold tracking-[0.09em] uppercase mb-[12px] ${tagClass}`}>
        {sector.mandate}
      </div>
      
      <p className="text-[12px] text-[#6E685E] leading-[1.58] mb-[12px]">
        {sector.desc}
      </p>

      <div className="flex items-center gap-[8px] mt-[12px]">
        <span className="text-[9.5px] font-semibold tracking-[0.08em] uppercase text-[#A8A098] min-w-[72px]">Regulatory</span>
        <div className="flex gap-[3px]">
          {[1, 2, 3].map((bar) => (
            <div 
              key={bar}
              className={`w-[18px] h-[3px] rounded-[2px] transition-colors duration-200 ${bar <= sector.intensity ? '' : 'bg-[#E5E0D6]'}`}
              style={bar <= sector.intensity ? { backgroundColor: clusterColor } : {}}
            />
          ))}
        </div>
      </div>

      {/* Services Reveal */}
      <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-[140px] group-hover:mt-[12px] group-hover:mb-[16px]">
        <ul className="text-[11px] text-[#6E685E] leading-[1.5] space-y-[4px]">
          {sector.services.map((service, idx) => (
            <li key={idx} className="flex items-center gap-[6px]">
              <span className="w-[4px] h-[4px] rounded-full shrink-0" style={{ backgroundColor: clusterColor }} />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HomeIndustriesV3 = () => {
  const [activeCluster, setActiveCluster] = useState('all');
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, [activeCluster]);

  const currentCluster = clusters.find(c => c.id === activeCluster);

  return (
    <div className="bg-[#0D1825] font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes tick {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: tick 38s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-cardIn {
          animation: cardIn 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}} />

      {/* Ticker */}
      {/* <div className="bg-[#C5963A] overflow-hidden py-[11px] relative">
        <div className="absolute inset-y-0 left-0 w-[80px] z-10 bg-gradient-to-r from-[#C5963A] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[80px] z-10 bg-gradient-to-l from-[#C5963A] to-transparent" />
        <div className="flex w-max animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-[28px] px-[24px] whitespace-nowrap text-[11px] font-semibold tracking-[0.12em] uppercase text-[#ffff]">
              {item}
              <span className="w-[4px] h-[4px] rounded-full bg-[#ffff]/35" />
            </div>
          ))}
        </div>
      </div> */}

      {/* Hero Band */}
      <div className="bg-[#0D1825] pt-[80px] relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '52px 52px'
        }} />
        {/* Radial Glow */}
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(35,86,178,0.12)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-[28px] md:px-[60px] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-[32px] md:gap-[60px] items-end relative z-10">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#C5963A] mb-[20px] flex items-center gap-[10px]">
              <span className="w-[22px] h-[1px] bg-[#C5963A]/70" />
              Sector Intelligence
            </div>
            <h1 className="font-serif text-[52px] md:text-[94px] font-light text-white leading-[1.01] tracking-[-0.02em]">
              Industries <br />
              <em className="italic font-light text-white/38 block">we serve</em>
            </h1>
          </div>
          <div className="flex flex-col gap-[28px] pb-[8px]">
            <div className="text-right">
              <div className="font-serif text-[36px] font-normal text-white leading-none">16<sup className="text-[16px] text-[#C5963A] align-super">+</sup></div>
              <div className="text-[9.5px] font-semibold tracking-[0.1em] uppercase text-white/28 mt-[3px]">Active Sectors</div>
            </div>
            <div className="text-right">
              <div className="font-serif text-[36px] font-normal text-white leading-none">60,000 Cr+</div>
              <div className="text-[9.5px] font-semibold tracking-[0.1em] uppercase text-white/28 mt-[3px]">Balance Sheet Sizes Upto</div>
            </div>
            <div className="text-right">
              <div className="font-serif text-[36px] font-normal text-white leading-none">₹1,200<sup className="text-[16px] text-[#C5963A] align-super">Cr+</sup></div>
              <div className="text-[9.5px] font-semibold tracking-[0.1em] uppercase text-white/28 mt-[3px]">Loan Exposure</div>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto mt-[48px] px-[28px] md:px-[60px] flex items-center gap-[24px] relative z-10">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-white/[0.04]" />
          <div className="text-[13px] font-medium tracking-[0.1em] uppercase text-[#ffff]">Cross-sector depth built through active mandates, not desktop research</div>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-white/10 to-white/[0.04]" />
        </div>
      </div>

      {/* Cluster Tabs */}
      <div className="bg-[#0D1825] pt-[28px] relative z-20 border-b border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-[28px] md:px-[60px] flex gap-0 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveCluster('all')}
            className={`px-[28px] py-[14px] pb-[16px] text-[12px] font-semibold tracking-[0.06em] uppercase transition-colors duration-200 relative whitespace-nowrap ${activeCluster === 'all' ? 'text-white' : 'text-white/35 hover:text-white/65'}`}
          >
            All Sectors
            <div className={`absolute bottom-[-1px] left-[28px] right-[28px] h-[2px] bg-[#C5963A] transition-transform duration-250 origin-left ${activeCluster === 'all' ? 'scale-x-100' : 'scale-x-0'}`} />
          </button>
          {clusters.map((cluster) => (
            <button 
              key={cluster.id}
              onClick={() => setActiveCluster(cluster.id)}
              className={`px-[28px] py-[14px] pb-[16px] text-[12px] font-semibold tracking-[0.06em] uppercase transition-colors duration-200 relative whitespace-nowrap ${activeCluster === cluster.id ? 'text-white' : 'text-white/35 hover:text-white/65'}`}
            >
              {cluster.name}
              <div className={`absolute bottom-[-1px] left-[28px] right-[28px] h-[2px] bg-[#C5963A] transition-transform duration-250 origin-left ${activeCluster === cluster.id ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white min-h-[600px]">
        {activeCluster === 'all' ? (
          <div key="all" className="animate-fadeIn flex flex-col">
            {clusters.map((cluster) => (
              <div key={cluster.id} className="w-full">
                <div className="bg-[#1A2B45] px-[28px] py-[18px] flex items-center gap-[18px] border-b border-white/5 sticky top-0 z-30">
                  <span className={`text-[9px] font-bold tracking-[0.14em] uppercase px-[10px] py-[4px] rounded-full ${cluster.headerTagClass}`}>
                    {cluster.num} — {cluster.name}
                  </span>
                  <span className="font-serif text-[21px] font-medium text-white leading-none">{cluster.headerName}</span>
                  <span className="text-[10px] text-white/30 ml-auto font-sans tracking-wider uppercase font-semibold">{cluster.headerCount}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
                  {cluster.sectors.map((sector, idx) => (
                    <SectorCard 
                      key={sector.id} 
                      sector={sector} 
                      clusterColor={cluster.color} 
                      tagClass={cluster.tagClass}
                      delay={idx * 0.05}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div key={activeCluster} className={animate ? 'animate-fadeIn' : 'opacity-0'}>
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] border-b border-[#E5E0D6] sticky top-0 z-10 bg-white">
              <div className="bg-[#1A2B45] p-[32px_40px] relative overflow-hidden border-l-[4px]" style={{ borderColor: currentCluster.color }}>
                <div className="absolute right-[-10px] top-[-20px] font-serif text-[120px] font-medium text-white/[0.055] leading-none pointer-events-none select-none">
                  {currentCluster.num}
                </div>
                <div className="text-[10px] font-bold tracking-[0.14em] uppercase mb-[8px]" style={{ color: currentCluster.color }}>
                  Cluster {currentCluster.num}
                </div>
                <div className="font-serif text-[26px] font-normal text-white leading-[1.15] mb-[8px]">
                  {currentCluster.name}
                </div>
                <div className="text-[12px] text-white/38 leading-[1.55]">
                  {currentCluster.description}
                </div>
                <div className="inline-flex items-center gap-[6px] mt-[14px] text-[10px] font-semibold tracking-[0.08em] uppercase text-white/30">
                  <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-white/10 text-[10px] font-bold text-white">
                    {currentCluster.count}
                  </span>
                  active sectors
                </div>
              </div>
              <div className="bg-[#F8F5F0] p-[20px_40px] flex items-center gap-0 flex-wrap">
                {currentCluster.meta.map((m, i) => (
                  <div key={i} className="pr-[28px] mr-[28px] border-r border-[#E5E0D6] last:border-r-0 last:pr-0 last:mr-0">
                    <div className="font-serif text-[22px] font-medium text-[#1A2B45]">
                      {m.value.includes('+') ? (
                        <>
                          {m.value.split('+')[0]}
                          <sup className="text-[12px] ml-0.5">+</sup>
                        </>
                      ) : m.value}
                    </div>
                    <div className="text-[10px] font-semibold tracking-[0.07em] uppercase text-[#A8A098] mt-[2px]">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-[#E5E0D6]">
              {currentCluster.sectors.map((sector, idx) => (
                <SectorCard 
                  key={sector.id} 
                  sector={sector} 
                  clusterColor={currentCluster.color} 
                  tagClass={currentCluster.tagClass}
                  delay={idx * 0.05}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeIndustriesV3;