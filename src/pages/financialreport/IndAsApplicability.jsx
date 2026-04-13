
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import FinancialReportingBanner from '../../components/services/FinancialReportingBanner';
import FinancialReportingClosing from '../../components/services/FinancialReportingClosing';

const IndAsApplicabilityPage = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Ind-AS Applicability", link: null }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <Helmet>
        <title>Ind-AS Applicability Compliance Consultants | Northrop India</title>
        <meta name="description" content="Definitive Ind-AS applicability assessments for growing companies and group structures. Ensure compliance with MCA thresholds and prevent auditor qualifications." />
      </Helmet>

      {/* HERO SECTION */}
      <FinancialReportingBanner 
        breadcrumbs={breadcrumbs}
        title={<>You may already be<br />required <br />to comply with Ind-AS.  <br />  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Are you sure you're not?</span></>}
        description="Ind-AS applicability thresholds are triggered by net worth, turnover, listing status, and group structures — often without the company realising they've crossed them. Non-compliance is not a grey area. It is an MCA violation with penalties, and a qualification from your auditor."
        primaryBtnText="Assess Your Ind-AS Applicability"
        secondaryBtnText="Understand what triggers it ↓"
      />

      {/* MAIN CONTENT AREA */}
      <div className="mx-auto py-[20px] px-[6vw]">
        
        {/* SERVICE HEADER */}
        <div className="flex items-center gap-[14px] mb-[20px]">
          <span className="font-serif text-[13.6px] font-semibold text-slate-400">FR — 06 /</span>
          <span className="text-[10.7px] font-bold tracking-[0.18em] uppercase text-blue-600 bg-blue-50 px-3 py-1">Ind-AS Applicability Compliance Consultants</span>
        </div>

        <h2 className="font-serif text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.1] text-[#111a22] max-w-[760px] mb-[22px]">
          The MCA notice arrived. Your auditor<br />issued a qualification. <em className="italic text-blue-600 not-italic font-serif">You didn't know you needed Ind-AS.</em>
        </h2>
        
        <p className="font-serif text-[19.2px] italic font-medium text-slate-700 leading-[1.65] max-w-[660px] mb-[48px] pl-5 border-l-[3px] border-blue-600">
          Ind-AS applicability is determined by thresholds that change as your business grows — and subsidiaries of Ind-AS companies are drawn in automatically, regardless of their own size. Ignorance of applicability is not a defence.
        </p>

        {/* PAIN BLOCK */}
        <div className="mb-[52px] max-w-[820px] border border-red-900/15 border-l-4 border-l-red-600 bg-red-50/50 p-[26px_30px]">
          <div className="text-[10.7px] font-bold tracking-[0.16em] uppercase text-red-600 mb-[16px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full inline-block"></span>
            How companies get caught — by industry and structure
          </div>
          <ul className="list-none m-0 p-0">
            {[
              { label: "Subsidiaries of Listed Groups", text: "The parent crossed the Ind-AS threshold — every subsidiary is automatically required to adopt Ind-AS. The subsidiary's CFO finds out during the audit." },
              { label: "Fast-Growing SMEs", text: "Crossed ₹250 Cr net worth threshold in FY23 — Ind-AS was mandatory from FY25 with FY24 comparatives. No transition done. MCA compliance notice issued in FY26." },
              { label: "Foreign-Owned Indian Companies", text: "Indian subsidiary of a foreign holding company — required to report under Ind-AS for group consolidation. Parent's consolidated audit is qualified." },
              { label: "NBFCs & Financial Entities", text: "RBI mandates Ind-AS adoption based on asset size thresholds — companies that crossed the threshold are still applying IGAAP. RBI inspection reveals non-compliance." },
              { label: "Pre-IPO Companies", text: "SEBI requires Ind-AS financials in the DRHP. Company discovers 4 months before IPO filing that 3 years of restated Ind-AS financials are required immediately." }
            ].map((item, idx) => (
              <li key={idx} className="grid grid-cols-[26px_1fr] py-3 border-b last:border-b-0 border-red-900/10 text-[14.7px] text-slate-800 leading-[1.65]">
                <span className="text-red-600 font-bold mt-0.5">→</span>
                <span><strong className="font-bold">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DELIVERABLES */}
        <div className="flex items-center gap-[10px] mb-[30px]">
          <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#111a22]">What Northrop delivers</div>
          <div className="flex-1 max-w-[120px] h-[1px] bg-blue-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1000px] mb-[44px] border border-slate-200">
          {[
            { title: "Applicability Determination Report", desc: "A definitive written assessment of your Ind-AS applicability status — based on current MCA, RBI, SEBI, and IRDA thresholds — with the mandatory adoption date confirmed." },
            { title: "Group-Level Applicability Mapping", desc: "Mapping Ind-AS applicability across your entire group structure — identifying which entities are drawn in through subsidiary or associate status, regardless of their standalone size." },
            { title: "Compliance Roadmap & Timeline", desc: "A structured timeline for achieving Ind-AS compliance — covering policy changes, system requirements, restatement of comparatives, and auditor coordination." },
            { title: "Ongoing Ind-AS Compliance Advisory", desc: "Annual review of new standards, amendments, and MCA notifications — ensuring your accounting policies remain compliant as standards evolve." }
          ].map((card, idx) => (
            <div key={idx} className="p-[40px_30px] bg-white border-r border-b border-slate-200 relative border-l-[3px] border-l-blue-600">
              <h4 className="text-[16px] font-bold text-[#111a22] mb-[15px] leading-tight font-serif">{card.title}</h4>
              <p className="text-[14.5px] text-slate-500 leading-relaxed font-light">{card.desc}</p>
            </div>
          ))}
          <div className="bg-[#dbd9d0] border-b border-slate-200 hidden md:block"></div>
          <div className="bg-[#dbd9d0] border-b border-slate-200 hidden md:block"></div>
        </div>

        {/* OUTCOMES */}
        <div className="flex flex-wrap gap-[9px] mb-[40px] max-w-[820px]">
          {[
            "Applicability Confirmed in Writing",
            "MCA Penalty Risk Eliminated",
            "Auditor Qualification Prevented",
            "Group Structure Mapped",
            "Compliance Timeline Structured",
            "Ongoing Standard Updates",
            "IPO / Listing Ready"
          ].map((outcome, idx) => (
            <span key={idx} className="text-[11.2px] font-semibold tracking-wide text-blue-700 bg-blue-50 border border-blue-100 px-[15px] py-[7px] flex items-center gap-1.5">
              <CheckCircle size={12} className="text-blue-600" /> {outcome}
            </span>
          ))}
        </div>

        {/* WHO THIS IS FOR */}
        <div className="flex items-center gap-[10px] mb-[30px]">
          <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#111a22]">Who this is for</div>
          <div className="flex-1 max-w-[120px] h-[1px] bg-blue-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1000px] mb-[80px] border border-slate-200">
          {[
            { title: "Growing Companies Near Thresholds", desc: "Businesses with net worth approaching ₹250 Cr or turnover approaching ₹500 Cr — understanding when mandatory adoption will be triggered and preparing proactively." },
            { title: "Subsidiaries of Ind-AS Companies", desc: "Indian entities — regardless of size — that are subsidiaries, associates, or joint ventures of companies that have already adopted Ind-AS." },
            { title: "Regulated Entities (NBFCs, Insurers)", desc: "Financial sector entities subject to RBI or IRDA Ind-AS applicability mandates — needing sector-specific compliance guidance beyond MCA thresholds." },
            { title: "Companies with Auditor Qualification Risk", desc: "Businesses whose auditors have flagged potential Ind-AS non-compliance — needing an independent assessment and a documented remediation path before the audit closes." }
          ].map((card, idx) => (
            <div key={idx} className="p-[40px_30px] bg-white border-r border-b border-slate-200 relative border-l-[3px] border-l-[#111a22]">
              <h4 className="text-[16px] font-bold text-[#111a22] mb-[15px] leading-tight">{card.title}</h4>
              <p className="text-[14.5px] text-slate-500 leading-relaxed font-light">{card.desc}</p>
            </div>
          ))}
          <div className="bg-[#dbd9d0] border-b border-slate-200 hidden md:block"></div>
          <div className="bg-[#dbd9d0] border-b border-slate-200 hidden md:block"></div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-5 mb-5">
          <button className="bg-[#111a22] hover:bg-blue-700 text-white text-[11.7px] font-bold tracking-[0.1em] uppercase px-7 py-[13px] transition-all">
            Check Your Ind-AS Applicability
          </button>
          <button className="border-[1.5px] border-slate-200 text-[#111a22] hover:border-blue-600 hover:text-blue-600 text-[11.7px] font-semibold tracking-[0.07em] uppercase px-[22px] py-[12px] transition-all">
            Request a Compliance Assessment
          </button>
        </div>
        <p className="mt-[18px] text-[12.6px] italic text-slate-500 leading-relaxed max-w-[560px] pl-[14px] border-l-2 border-slate-200">
          Northrop has determined Ind-AS applicability and supported compliance across holding companies, subsidiaries, regulated entities, and pre-IPO businesses across sectors.
        </p>

      </div>

      {/* CLOSING / CONTACT */}
      <FinancialReportingClosing 
        title="Not knowing your Ind-AS status is not protection. It is exposure."
        description="A single applicability assessment call can confirm your position, identify your timeline, and prevent a compliance failure that costs multiples of what the advisory does."
      />

    

    </div>
  );
};

export default IndAsApplicabilityPage;
