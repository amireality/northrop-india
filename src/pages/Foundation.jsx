import React from 'react';
import { Link } from 'react-router-dom';

const Foundation = () => {
  return (
    <div className="font-['Plus_Jakarta_Sans'] text-[#1A1A1A] bg-white min-h-screen antialiased">
      <style>{`
        .foundation-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .hero-pattern::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(90deg, rgba(197, 150, 58, 0.03) 0, rgba(197, 150, 58, 0.03) 1px, transparent 1px, transparent 100px),
                            repeating-linear-gradient(0deg, rgba(197, 150, 58, 0.02) 0, rgba(197, 150, 58, 0.02) 1px, transparent 1px, transparent 100px);
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.5s ease both; }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero-pattern relative bg-[#0A1628] overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-[24px] md:px-[56px] grid grid-cols-1 lg:grid-cols-[1fr_380px] min-h-[560px]">
          <div className="py-[60px] lg:pr-[64px] lg:border-r border-[rgba(197,150,58,0.18)] flex flex-col justify-between relative z-10">
            <div className="animate-fade-up [animation-delay:0.05s]">
              <div className="flex items-center gap-[14px] mb-[32px]">
                <span className="bg-[#C5963A] text-[#0A1628] text-[9.5px] font-bold tracking-[0.16em] uppercase px-[10px] py-[4px]">
                  Featured Research
                </span>
                <span className="text-[rgba(255,255,255,0.38)] text-[10.5px] tracking-[0.1em] uppercase">
                  Annual Governance Report · 2026
                </span>
              </div>
              <h1 className="foundation-serif text-[40px] md:text-[54px] text-white leading-[1.08] mb-[22px] animate-fade-up [animation-delay:0.12s]">
                The <em className="text-[#C5963A] italic">Governance Deficit</em> in Indian MSMEs:<br />
                Structures, Failures & Reform Imperatives
              </h1>
              <p className="text-[14.5px] text-[rgba(255,255,255,0.58)] leading-[1.75] max-w-[600px] mb-[40px] animate-fade-up [animation-delay:0.2s]">
                A comprehensive examination of internal governance frameworks across 1,200 MSMEs in six Indian states, revealing systemic deficiencies in audit infrastructure, compliance architecture, and board accountability — and proposing a three-pillar reform agenda for the Ministry of MSME.
              </p>
            </div>
            
            <div className="flex items-center gap-[32px] flex-wrap animate-fade-up [animation-delay:0.28s]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[38px] h-[38px] rounded-full bg-[rgba(197,150,58,0.2)] border border-[rgba(197,150,58,0.35)] flex items-center justify-center foundation-serif text-[14px] text-[#C5963A] font-bold">
                  AC
                </div>
                <div>
                  <div className="text-[13px] text-[rgba(255,255,255,0.82)] font-medium">Ashish Chaudhary</div>
                  <div className="text-[11px] text-[rgba(255,255,255,0.38)]">Founder & Director of Research, NRF</div>
                </div>
              </div>
              <div className="text-[11px] text-[rgba(255,255,255,0.35)] tracking-[0.05em]">May 2026 &nbsp;·&nbsp; 84 pages</div>
              <Link to="/contact" className="inline-flex items-center gap-[8px] px-[30px] py-[13px] border border-[rgba(197,150,58,0.45)] text-[#C5963A] text-[11.5px] tracking-[0.09em] uppercase font-medium hover:bg-[rgba(197,150,58,0.1)] hover:border-[#C5963A] transition-all">
                Read Report
                <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex flex-col py-[40px] pl-[40px] relative z-10">
            <div className="text-[9.5px] tracking-[0.16em] uppercase text-[rgba(255,255,255,0.28)] pb-[14px] border-b border-[rgba(197,150,58,0.15)] mb-[4px]">
              Latest from NRF
            </div>
            {[
              { cat: "Policy Brief", title: "IBC 2.0: Reforming the Resolution Timeline for Operational Creditors", meta: "Pranav Mishra · Apr 2026" },
              { cat: "Working Paper", title: "ESG Disclosure Readiness Among Mid-Sized Indian Corporates: A Baseline Assessment", meta: "CA Sudhanshu Rao · Apr 2026" },
              { cat: "Research Note", title: "Fraud Risk in Infrastructure Procurement: Evidence from Six State Audits", meta: "Pratham Sharma · Mar 2026" },
              { cat: "CFO Survey", title: "India CFO Governance Confidence Index — Q1 2026", meta: "NRF Research Team · Mar 2026" }
            ].map((item, idx) => (
              <div key={idx} className="py-[18px] border-b border-[rgba(255,255,255,0.06)] last:border-b-0 cursor-pointer hover:opacity-75 transition-opacity">
                <div className="text-[9.5px] text-[#C5963A] tracking-[0.12em] uppercase mb-[7px]">{item.cat}</div>
                <h3 className="foundation-serif text-[16.5px] text-[rgba(255,255,255,0.8)] leading-[1.28] font-normal mb-[8px]">{item.title}</h3>
                <div className="text-[10.5px] text-[rgba(255,255,255,0.32)]">{item.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEMES STRIP */}
      <div className="bg-[#F5F0E8] border-b border-[#D8D0C0]">
        <div className="max-w-[1360px] mx-auto px-[24px] md:px-[56px] flex items-stretch h-[54px] overflow-x-auto no-scrollbar">
          <span className="text-[9.5px] tracking-[0.14em] uppercase text-[#6B6257] border-r border-[#D8D0C0] pr-[24px] flex items-center shrink-0 font-bold">
            Research Themes
          </span>
          <nav className="flex">
            {[
              "Corporate Governance", "ESG & Sustainability", "Insolvency & IBC", 
              "MSME Development", "Forensic & Fraud", "Tax Policy", "Financial Markets", "Public Systems"
            ].map((theme, idx) => (
              <Link 
                key={idx} 
                to="#" 
                className={`flex items-center px-[20px] text-[12px] font-medium border-r border-[#EDE8DF] transition-all hover:bg-[rgba(10,22,40,0.03)] whitespace-nowrap ${idx === 0 ? 'text-[#C5963A]' : 'text-[#3D3830]'}`}
              >
                {theme}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* HIGHLIGHT STRIP */}
      <div className="bg-white border-b border-[#D8D0C0]">
        <div className="max-w-[1360px] mx-auto px-[24px] md:px-[56px] flex items-stretch min-h-[48px] overflow-x-auto no-scrollbar">
          <span className="flex items-center text-[10px] tracking-[0.14em] uppercase text-[#C5963A] font-bold pr-[24px] border-r border-[#D8D0C0] shrink-0">
            New This Month
          </span>
          <div className="flex items-center">
            {[
              "India MSME Governance Report 2026", "IBC Resolution Timeline Study", 
              "CFO Governance Index Q1 2026", "ESG Disclosure Readiness Survey", "Fraud in Infrastructure Procurement"
            ].map((item, idx) => (
              <span key={idx} className="flex items-center px-[22px] text-[12px] text-[#3D3830] border-r border-[#EDE8DF] h-[48px] whitespace-nowrap cursor-pointer hover:bg-[#FDFAF5] transition-all font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED RESEARCH SECTION */}
      <section className="py-[80px] px-[24px] md:px-[56px]">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex items-end justify-between mb-[48px] pb-[20px] border-b border-[#D8D0C0]">
            <div className="foundation-serif text-[32px] font-medium text-[#0A1628] leading-[1.1]">
              <small className="block text-[11px] tracking-[0.14em] uppercase text-[#C5963A] font-['Plus_Jakarta_Sans'] font-bold mb-[8px]">
                Research Output
              </small>
              Latest Publications
            </div>
            <Link to="/insights" className="text-[12px] text-[#6B6257] tracking-[0.04em] border-b border-[#D8D0C0] pb-[2px] hover:text-[#0A1628] hover:border-[#0A1628] transition-all font-medium whitespace-nowrap">
              View all publications →
            </Link>
          </div>

          <div className="bg-[#FDFAF5] border border-[#D8D0C0] grid grid-cols-1 md:grid-cols-[56px_1fr_auto] items-stretch mb-[40px] overflow-hidden">
            <div className="bg-[#0A1628] flex items-center justify-center [writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.14em] uppercase text-[#C5963A] font-bold p-[20px_18px]">
              Annual Report
            </div>
            <div className="p-[32px_36px]">
              <div className="text-[9.5px] tracking-[0.14em] uppercase text-[#C5963A] font-bold mb-[10px]">📄 &nbsp;Flagship Report &nbsp;·&nbsp; Corporate Governance</div>
              <h2 className="foundation-serif text-[28px] font-medium text-[#0A1628] leading-[1.2] mb-[12px]">
                Boardroom Accountability in Indian Family-Controlled Enterprises: A Structural Analysis of Governance Failure Modes
              </h2>
              <p className="text-[13.5px] text-[#6B6257] leading-[1.7] max-w-[640px] mb-[20px]">
                This report examines governance architecture in 340 listed family-controlled Indian enterprises. Drawing on three years of board resolution data, statutory audit findings, and related-party transaction disclosures, it identifies six recurring structural failure modes and recommends regulatory interventions for MCA, SEBI, and audit standard-setters.
              </p>
              <div className="flex gap-[20px] items-center flex-wrap">
                <div className="flex items-center gap-[8px]">
                  <div className="w-[28px] h-[28px] rounded-full bg-[rgba(10,22,40,0.1)] flex items-center justify-center foundation-serif text-[11px] text-[#0A1628] font-bold">AC</div>
                  <span className="text-[12px] text-[#3D3830] font-medium">Ashish Chaudhary</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[28px] h-[28px] rounded-full bg-[rgba(10,22,40,0.1)] flex items-center justify-center foundation-serif text-[11px] text-[#0A1628] font-bold">PS</div>
                  <span className="text-[12px] text-[#3D3830] font-medium">Pratham Sharma</span>
                </div>
                <span className="text-[11px] text-[#D8D0C0] px-1">·</span>
                <span className="text-[11px] text-[#6B6257]">February 2026</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-[32px_28px] border-t md:border-t-0 md:border-l border-[#D8D0C0] gap-[16px] min-w-[160px]">
              <div className="text-center">
                <div className="foundation-serif text-[36px] text-[#0A1628] font-light leading-[1]">112</div>
                <div className="text-[10px] text-[#6B6257] tracking-[0.08em] uppercase">Pages</div>
              </div>
              <Link to="/contact" className="w-full py-[10px] bg-[#0A1628] text-white text-[11px] tracking-[0.07em] uppercase font-bold text-center hover:bg-[#132240] transition-colors">Read Online</Link>
              <Link to="/contact" className="w-full py-[9px] border border-[#D8D0C0] text-[#3D3830] text-[11px] tracking-[0.07em] uppercase font-medium text-center hover:border-[#0A1628] hover:text-[#0A1628] transition-all">↓ Download PDF</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS GRID */}
      <section className="pb-[80px] px-[24px] md:px-[56px]">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#D8D0C0] border border-[#D8D0C0]">
            {[
              { type: "Policy Brief", code: "NRF-PB-025", title: "Reforming Section 135 CSR: Towards Outcome-Linked Compliance and Third-Party Assurance", excerpt: "The current CSR compliance framework incentivises spending over impact. This brief recommends a shift to outcome-linked reporting with mandatory third-party social audits for entities exceeding ₹50 Cr CSR obligation.", author: "CA Sudhanshu Rao", date: "May 2026", color: "bg-[#EBF4FF] text-[#0C447C]" },
              { type: "Working Paper", code: "NRF-WP-018", title: "Digital Forensics in Financial Fraud Detection: An Evidentiary Framework for Indian Courts", excerpt: "As financial fraud increasingly migrates to digital channels, Indian courts face an evidentiary gap. This paper proposes a standardised admissibility framework for digitally sourced forensic evidence under the Information Technology Act.", author: "Pratham Sharma", date: "Apr 2026", color: "bg-[#E1F5EE] text-[#085041]" },
              { type: "Research Report", code: "NRF-RR-011", title: "The State of Internal Audit in Indian NBFCs: Gaps, Risks, and Regulatory Expectations", excerpt: "Based on a study of 180 registered NBFCs, this report benchmarks internal audit function maturity against RBI guidelines, identifying critical gaps in risk-based auditing, board oversight, and third-line independence.", author: "Ashish Chaudhary", date: "Apr 2026", color: "bg-[#FAF3E0] text-[#7A5820]" },
              { type: "Discussion Paper", code: "NRF-DP-009", title: "Operational Creditor Rights Under IBC: Structural Inequities and the Case for Parity Reform", excerpt: "Operational creditors remain structurally disadvantaged in IBC resolution processes. This paper analyses 220 CIRP cases to quantify recovery rate disparities and proposes legislative amendments for equitable treatment.", author: "Pranav Mishra", date: "Mar 2026", color: "bg-[#F3E8FF] text-[#4A1B6A]" },
              { type: "CFO Survey", code: "NRF-SR-006", title: "India CFO Governance Confidence Index: Q1 2026 — Risk Perception, Audit Quality & Board Independence", excerpt: "Quarterly survey of 340 CFOs across manufacturing, services, and financial sectors measuring confidence in governance infrastructure, audit quality, internal controls, and regulatory environment.", author: "NRF Research Team", date: "Mar 2026", color: "bg-[#FEF3E2] text-[#7C4A00]" },
              { type: "Policy Brief", code: "NRF-PB-024", title: "SEBI's Related Party Transaction Framework: Implementation Gaps and the Path to Substantive Compliance", excerpt: "An audit of related-party transaction disclosures across 500 NSE-listed companies reveals significant substantive non-compliance beneath formal adherence to SEBI's LODR regulations. This brief recommends enhanced board committee protocols.", author: "CA Sudhanshu Rao", date: "Feb 2026", color: "bg-[#EBF4FF] text-[#0C447C]" }
            ].map((pub, idx) => (
              <div key={idx} className="bg-white p-[28px] hover:bg-[#FDFAF5] transition-colors cursor-pointer flex flex-col group">
                <div className="flex justify-between items-start mb-[16px]">
                  <span className={`text-[9px] tracking-[0.14em] uppercase font-bold px-[8px] py-[3px] ${pub.color}`}>{pub.type}</span>
                  <span className="text-[10.5px] text-[#D8D0C0] foundation-serif font-light">{pub.code}</span>
                </div>
                <h3 className="foundation-serif text-[20px] font-medium text-[#0A1628] leading-[1.25] mb-[10px] flex-1 group-hover:text-[#C5963A] transition-colors">{pub.title}</h3>
                <p className="text-[12.5px] text-[#6B6257] leading-[1.65] mb-[20px]">{pub.excerpt}</p>
                <div className="flex justify-between items-center border-t border-[#EDE8DF] pt-[14px] mt-auto">
                  <span className="text-[11.5px] text-[#3D3830] font-medium">{pub.author}</span>
                  <span className="text-[11px] text-[#6B6257]">{pub.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-[36px]">
            <Link to="#" className="inline-block text-[12.5px] text-[#6B6257] tracking-[0.06em] border border-[#D8D0C0] px-[32px] py-[12px] font-medium hover:border-[#0A1628] hover:text-[#0A1628] transition-all">
              Browse Full Publications Archive →
            </Link>
          </div>
        </div>
      </section>

      {/* RESEARCH THEMES (DARK) */}
      <section className="py-[80px] px-[24px] md:px-[56px] bg-[#0A1628]">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex items-end justify-between mb-[48px] pb-[20px] border-b border-[rgba(197,150,58,0.2)]">
            <div className="foundation-serif text-[32px] font-medium text-white leading-[1.1]">
              <small className="block text-[11px] tracking-[0.14em] uppercase text-[#C5963A] font-['Plus_Jakarta_Sans'] font-bold mb-[8px]">
                Intellectual Focus
              </small>
              Research Themes
            </div>
            <Link to="#" className="text-[12px] text-[rgba(255,255,255,0.4)] border-b border-[rgba(255,255,255,0.2)] pb-[2px] hover:text-white hover:border-white transition-all font-medium">
              All themes →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[rgba(197,150,58,0.15)] border border-[rgba(197,150,58,0.15)]">
            {[
              { num: "01", cat: "Pillar I", title: "Corporate Governance & Board Accountability", desc: "Examining board composition, audit committee function, related-party oversight, promoter accountability, and governance failure patterns across Indian listed and unlisted entities.", tags: ["Board Independence", "Audit Committees", "SEBI LODR", "Family Businesses"], count: "12 Publications" },
              { num: "02", cat: "Pillar II", title: "Insolvency, IBC Reform & Creditor Rights", desc: "Tracking CIRP case outcomes, analysing resolution timelines, evaluating haircut dynamics, and recommending legislative amendments to strengthen the insolvency ecosystem for all stakeholders.", tags: ["CIRP Outcomes", "NCLT", "Operational Creditors", "Liquidation"], count: "9 Publications" },
              { num: "03", cat: "Pillar III", title: "ESG Disclosure, Sustainability & Climate Finance", desc: "Assessing BRSR compliance quality, ESG rating methodology, green finance allocation, and the gap between stated sustainability commitments and independently verifiable outcomes in Indian corporates.", tags: ["BRSR", "Green Finance", "Climate Risk", "Social Audit"], count: "7 Publications" },
              { num: "04", cat: "Pillar IV", title: "MSME Formalisation, Risk & Financial Access", desc: "Investigating barriers to MSME formalisation, internal control maturity, credit access constraints, digitisation readiness, and the governance reforms needed to enable MSME-led GDP growth at scale.", tags: ["Formalisation", "Credit Access", "Internal Controls", "Digital GST"], count: "11 Publications" }
            ].map((theme, idx) => (
              <div key={idx} className="bg-[#0A1628] p-[40px] relative overflow-hidden group hover:bg-[#132240] transition-colors cursor-pointer">
                <div className="absolute right-[-10px] top-[-20px] foundation-serif text-[120px] font-light text-[rgba(197,150,58,0.06)] leading-none pointer-events-none group-hover:text-[rgba(197,150,58,0.1)] transition-colors">
                  {theme.num}
                </div>
                <div className="relative z-10">
                  <div className="text-[9.5px] tracking-[0.16em] uppercase text-[#C5963A] font-bold mb-[16px]">{theme.cat}</div>
                  <h3 className="foundation-serif text-[26px] font-normal text-white leading-[1.25] mb-[14px]">{theme.title}</h3>
                  <p className="text-[13px] text-[rgba(255,255,255,0.5)] leading-[1.7] mb-[24px] max-w-[90%]">{theme.desc}</p>
                  <div className="flex flex-wrap gap-[6px]">
                    {theme.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-[10px] py-[4px] border border-[rgba(197,150,58,0.25)] text-[rgba(197,150,58,0.7)] tracking-[0.04em]">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-[32px] text-[11px] text-[rgba(255,255,255,0.25)] tracking-[0.06em]">{theme.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA STATS */}
      <section className="bg-[#0A1628]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[rgba(197,150,58,0.2)]">
          {[
            { num: "39", span: "+", label: "Research publications since inception, spanning policy briefs, working papers, annual reports, and CFO surveys" },
            { num: "1,200", span: "", label: "Enterprises covered in NRF's flagship MSME Governance Study across six Indian states" },
            { num: "340", span: "+", label: "CFOs and senior finance leaders participating in NRF's quarterly Governance Confidence Index" },
            { num: "4", span: "", label: "Core research pillars: Corporate Governance, IBC & Insolvency, ESG, and MSME Development" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#0A1628] p-[36px_32px]">
              <div className="foundation-serif text-[56px] font-light text-white leading-none mb-[6px]">
                {stat.num}<span className="text-[#C5963A]">{stat.span}</span>
              </div>
              <div className="w-[24px] h-[1px] bg-[rgba(197,150,58,0.4)] my-[16px]"></div>
              <div className="text-[12px] text-[rgba(255,255,255,0.45)] leading-[1.5]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRESS SECTION */}
      <section className="py-[80px] px-[24px] md:px-[56px] bg-[#FDFAF5]">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex items-end justify-between mb-[48px] pb-[20px] border-b border-[#D8D0C0]">
            <div className="foundation-serif text-[32px] font-medium text-[#0A1628] leading-[1.1]">
              <small className="block text-[11px] tracking-[0.14em] uppercase text-[#C5963A] font-['Plus_Jakarta_Sans'] font-bold mb-[8px]">
                Media Coverage
              </small>
              NRF in the Press
            </div>
            <Link to="#" className="text-[12px] text-[#6B6257] border-b border-[#D8D0C0] pb-[2px] hover:text-[#0A1628] hover:border-[#0A1628] transition-all font-medium">
              All press mentions →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
            {[
              { pub: "The Economic Times", title: "\"NRF report exposes governance vacuum in 60% of surveyed MSMEs, calls for mandatory audit threshold reform\"", excerpt: "Northrop Research Foundation's annual study finds that fewer than two in five MSMEs with turnover exceeding ₹10 Cr maintain a functioning internal audit mechanism, prompting calls for statutory intervention.", meta: "May 8, 2026" },
              { pub: "Business Standard", title: "\"Think tank flags structural bias against operational creditors in IBC resolution outcomes\"", excerpt: "A new discussion paper from NRF's insolvency research unit analysing 220 CIRP cases finds that operational creditors recover an average of 4.2 paise per rupee, compared to 18.6 paise for financial creditors.", meta: "Apr 24, 2026" },
              { pub: "Financial Express", title: "\"India Inc's ESG disclosures lack independent verification, NRF baseline study finds\"", excerpt: "NRF's inaugural ESG Disclosure Readiness Survey, covering 280 listed entities, reveals that only 11% have subjected their BRSR disclosures to any form of third-party assurance, raising concerns about disclosure credibility.", meta: "Apr 11, 2026" }
            ].map((news, idx) => (
              <div key={idx} className="border-t-2 border-[#D8D0C0] pt-[20px]">
                <div className="text-[12px] font-bold text-[#0A1628] tracking-[0.04em] mb-[8px] uppercase">{news.pub}</div>
                <h3 className="foundation-serif text-[18px] font-normal text-[#1A1A1A] leading-[1.35] mb-[10px]">{news.title}</h3>
                <p className="text-[12.5px] text-[#6B6257] leading-[1.6] mb-[14px]">{news.excerpt}</p>
                <div className="text-[11px] text-[#6B6257] tracking-[0.03em]">
                  {news.meta} &nbsp;·&nbsp; <Link to="/contact" className="text-[#C5963A] font-medium hover:underline">Read article →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTES SECTION */}
      <section className="bg-[#FDFAF5] border-y border-[#D8D0C0]">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-[#D8D0C0]">
          {[
            { text: "Northrop Research Foundation's MSME governance study is among the most rigorous field-based assessments of small business compliance infrastructure I have encountered. The methodology is sound and the policy recommendations are actionable.", source: "Dr. Raghavan Iyer", role: "Former Principal Adviser, Ministry of MSME" },
            { text: "The NRF IBC working paper on operational creditor parity should be required reading for every NCLT practitioner and insolvency professional in India. It brings both empirical weight and legal rigour to a debate that has been driven largely by anecdote.", source: "Advocate Priya Menon", role: "Senior Partner, Resolution & Insolvency Practice" },
            { text: "The CFO Governance Confidence Index fills a genuine data gap. We look forward to every quarterly edition — it has become a reliable leading indicator of sentiment among India's senior finance leadership community.", source: "Rajan Malhotra", role: "CFO, Varun Enterprises Group" }
          ].map((quote, idx) => (
            <div key={idx} className="bg-[#FDFAF5] p-[40px_36px]">
              <div className="foundation-serif text-[64px] text-[#E8D5A3] leading-[0.7] mb-[16px]">"</div>
              <p className="foundation-serif text-[18px] italic text-[#1A1A1A] leading-[1.55] mb-[20px] font-normal">
                {quote.text}
              </p>
              <div className="text-[11.5px] text-[#6B6257]">
                <strong className="text-[#3D3830] font-bold">{quote.source}</strong> &nbsp;·&nbsp; {quote.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="py-[80px] px-[24px] md:px-[56px] bg-[#F5F0E8]">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex items-end justify-between mb-[48px] pb-[20px] border-b border-[#D8D0C0]">
            <div className="foundation-serif text-[32px] font-medium text-[#0A1628] leading-[1.1]">
              <small className="block text-[11px] tracking-[0.14em] uppercase text-[#C5963A] font-['Plus_Jakarta_Sans'] font-bold mb-[8px]">
                Convening & Engagement
              </small>
              Upcoming Events
            </div>
            <Link to="#" className="text-[12px] text-[#6B6257] border-b border-[#D8D0C0] pb-[2px] hover:text-[#0A1628] hover:border-[#0A1628] transition-all font-medium">
              Full events calendar →
            </Link>
          </div>

          <div className="flex flex-col">
            {[
              { day: "22", month: "May", year: "2026", tag: "Roundtable", title: "Governing the Ungoverned: Internal Audit Reform for India's NBFC Sector", sub: "High-level closed roundtable with CFOs, audit committee chairs, and RBI-registered auditors", loc: "India International Centre, New Delhi · Invitation only", btn: "Request Invite" },
              { day: "06", month: "Jun", year: "2026", tag: "Public Lecture", title: "The Political Economy of Insolvency: Why IBC Outcomes Diverge from Legislative Intent", sub: "Annual NRF lecture in collaboration with FICCI & Indian Institute of Insolvency Professionals", loc: "FICCI Federation House, New Delhi · Open Registration", btn: "Register →" },
              { day: "18", month: "Jun", year: "2026", tag: "Workshop", title: "ESG for MSMEs: A Practical Framework for BRSR Compliance & Impact Measurement", sub: "Half-day practitioner workshop for finance and compliance professionals from mid-sized enterprises", loc: "Online & The Lalit, New Delhi · Limited seats", btn: "Register →" }
            ].map((event, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] items-center gap-[0] border-b border-[#D8D0C0] py-[28px] group cursor-pointer hover:bg-[rgba(197,150,58,0.02)] transition-colors">
                <div className="text-center md:border-r border-[#D8D0C0] md:pr-[32px]">
                  <div className="foundation-serif text-[48px] font-light text-[#0A1628] leading-none">{event.day}</div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-[#6B6257] font-bold">{event.month}</div>
                  <div className="text-[10px] text-[#D8D0C0] tracking-[0.06em]">{event.year}</div>
                </div>
                <div className="px-[24px] md:px-[36px] py-[20px] md:py-0">
                  <div className="inline-block text-[9px] tracking-[0.12em] uppercase px-[8px] py-[3px] bg-[#FAF3E0] text-[#C5963A] font-bold mb-[10px]">{event.tag}</div>
                  <h3 className="foundation-serif text-[22px] font-medium text-[#0A1628] leading-[1.25] mb-[6px] group-hover:text-[#C5963A] transition-colors">{event.title}</h3>
                  <div className="text-[12.5px] text-[#6B6257] mb-[8px]">{event.sub}</div>
                  <div className="text-[11.5px] text-[#6B6257] flex items-center gap-1">
                    <svg className="w-[12px] h-[12px] opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {event.loc}
                  </div>
                </div>
                <div className="md:pl-[32px] text-right">
                  <Link to="/contact" className="inline-block px-[22px] py-[10px] border border-[#0A1628] text-[#0A1628] text-[11px] tracking-[0.07em] uppercase font-bold hover:bg-[#0A1628] hover:text-white transition-all">
                    {event.btn}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FELLOWS SECTION */}
      <section className="py-[80px] px-[24px] md:px-[56px]">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex items-end justify-between mb-[48px] pb-[20px] border-b border-[#D8D0C0]">
            <div className="foundation-serif text-[32px] font-medium text-[#0A1628] leading-[1.1]">
              <small className="block text-[11px] tracking-[0.14em] uppercase text-[#C5963A] font-['Plus_Jakarta_Sans'] font-bold mb-[8px]">
                Our Researchers
              </small>
              Research Fellows & Associates
            </div>
            <Link to="#" className="text-[12px] text-[#6B6257] border-b border-[#D8D0C0] pb-[2px] hover:text-[#0A1628] hover:border-[#0A1628] transition-all font-medium">
              All fellows →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[28px]">
            {[
              { name: "Ashish Chaudhary", role: "Director of Research", bio: "Founder & Managing Director, Northrop Research Foundation. Expertise in forensic accounting, FDD, and IBC advisory.", initial: "AC", areas: ["Corporate Governance", "Forensic", "IBC"] },
              { name: "Pratham Sharma", role: "Senior Research Fellow", bio: "Head of Strategy & Assurance research. Leads NRF's corporate governance and board accountability programme.", initial: "PS", areas: ["Governance", "Assurance", "Strategy"] },
              { name: "Pranav Mishra", role: "Research Fellow — Technology", bio: "IIT Patna. Leads NRF's digital governance and AI-in-finance research programme. Heads technology infrastructure.", initial: "PM", areas: ["Digital Governance", "FinTech", "AI Policy"] },
              { name: "CA Sudhanshu Rao", role: "Senior Fellow — Tax & Capital Markets", bio: "Chartered Accountant. Leads NRF's tax policy and ESG disclosure research. Capital markets advisory specialist.", initial: "SR", areas: ["Tax Policy", "ESG", "Capital Markets"] }
            ].map((fellow, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-square bg-[#F5F0E8] border border-[#D8D0C0] flex items-center justify-center mb-[16px] overflow-hidden transition-all group-hover:border-[#C5963A]">
                  <div className="foundation-serif text-[40px] font-light text-[#0A1628] opacity-[0.35] group-hover:opacity-100 transition-opacity">
                    {fellow.initial}
                  </div>
                </div>
                <div className="text-[9px] tracking-[0.12em] uppercase text-[#C5963A] font-bold mb-[6px]">{fellow.role}</div>
                <h3 className="foundation-serif text-[20px] font-medium text-[#0A1628] mb-[4px] group-hover:text-[#C5963A] transition-colors">{fellow.name}</h3>
                <p className="text-[12px] text-[#6B6257] leading-[1.4] mb-[10px]">{fellow.bio}</p>
                <div className="flex flex-wrap gap-[5px]">
                  {fellow.areas.map(area => (
                    <span key={area} className="text-[10px] px-[8px] py-[3px] border border-[#D8D0C0] text-[#6B6257]">{area}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="bg-[#F5F0E8] border-y border-[#D8D0C0]">
        <div className="max-w-[1360px] mx-auto px-[24px] md:px-[56px] py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] items-center">
          <div>
            <small className="block text-[10px] tracking-[0.16em] uppercase text-[#C5963A] font-bold mb-[12px]">Stay Informed</small>
            <h2 className="foundation-serif text-[30px] font-medium text-[#0A1628] leading-[1.2] mb-[10px]">Research Intelligence, Delivered to Your Inbox</h2>
            <p className="text-[13px] text-[#6B6257] leading-[1.7]">Subscribe to receive NRF's latest publications, policy briefs, event announcements, and the quarterly CFO Governance Confidence Index directly. Trusted by 2,400+ CFOs, CAs, policymakers, and institutional leaders.</p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[10px]">
              <input className="flex-1 p-[12px_16px] border border-[#D8D0C0] text-[13px] outline-none focus:border-[#0A1628] transition-all" type="text" placeholder="First name" />
              <input className="flex-1 p-[12px_16px] border border-[#D8D0C0] text-[13px] outline-none focus:border-[#0A1628] transition-all" type="text" placeholder="Last name" />
            </div>
            <input className="p-[12px_16px] border border-[#D8D0C0] text-[13px] outline-none focus:border-[#0A1628] transition-all" type="email" placeholder="Professional email address" />
            <input className="p-[12px_16px] border border-[#D8D0C0] text-[13px] outline-none focus:border-[#0A1628] transition-all" type="text" placeholder="Organisation & designation" />
            <div className="flex flex-wrap gap-[20px] py-[4px]">
              {["All publications", "Events", "CFO Index only", "Weekly digest"].map((label, idx) => (
                <label key={idx} className="flex items-center gap-[6px] text-[12.5px] text-[#3D3830] cursor-pointer">
                  <input type="checkbox" className="accent-[#0A1628]" defaultChecked={idx < 2} /> {label}
                </label>
              ))}
            </div>
            <div className="flex items-center gap-[12px] flex-wrap md:flex-nowrap">
              <button className="whitespace-nowrap px-[28px] py-[12px] bg-[#0A1628] text-white text-[12px] font-bold tracking-[0.06em] uppercase hover:bg-[#132240] transition-colors">Subscribe to NRF Research</button>
              <span className="text-[11px] text-[#6B6257]">No spam. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER STRIP */}
      <div className="bg-[#0A1628] py-[14px] px-[24px] md:px-[56px] border-t border-[rgba(197,150,58,0.15)] overflow-hidden">
        <div className="max-w-[1360px] mx-auto flex items-center">
          <div className="text-[9.5px] tracking-[0.14em] uppercase text-[#C5963A] font-bold pr-[24px] border-r border-[rgba(197,150,58,0.25)] shrink-0">New Research</div>
          <div className="flex overflow-hidden relative">
            <div className="flex whitespace-nowrap px-[24px] animate-[ticker-scroll_30s_linear_infinite]">
              {[
                { code: "NRF-PB-025", title: "Reforming Section 135 CSR" },
                { code: "NRF-WP-018", title: "Digital Forensics in Financial Fraud" },
                { code: "NRF-RR-011", title: "Internal Audit in Indian NBFCs" },
                { code: "NRF-DP-009", title: "Operational Creditor Rights Under IBC" },
                { code: "NRF-SR-006", title: "CFO Governance Index Q1 2026" },
                { code: "NRF-PB-024", title: "SEBI Related Party Transactions" }
              ].map((item, idx) => (
                <span key={idx} className="text-[12px] text-[rgba(255,255,255,0.5)] pr-[48px]">
                  <strong className="text-[rgba(255,255,255,0.75)] font-medium">{item.code}</strong> {item.title}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { code: "NRF-PB-025", title: "Reforming Section 135 CSR" },
                { code: "NRF-WP-018", title: "Digital Forensics in Financial Fraud" },
                { code: "NRF-RR-011", title: "Internal Audit in Indian NBFCs" },
                { code: "NRF-DP-009", title: "Operational Creditor Rights Under IBC" },
                { code: "NRF-SR-006", title: "CFO Governance Index Q1 2026" },
                { code: "NRF-PB-024", title: "SEBI Related Party Transactions" }
              ].map((item, idx) => (
                <span key={idx + 6} className="text-[12px] text-[rgba(255,255,255,0.5)] pr-[48px]">
                  <strong className="text-[rgba(255,255,255,0.75)] font-medium">{item.code}</strong> {item.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;