
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
} from 'lucide-react';
import FinancialReportingBanner from '../../components/services/FinancialReportingBanner';
import FinancialReportingClosing from '../../components/services/FinancialReportingClosing';

const FinancialStatementPreparationPage = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Financial Statement Preparation", link: null }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <Helmet>
        <title>Financial Statement Preparation Services | Northrop India</title>
        <meta name="description" content="Professional preparation of standalone and consolidated financial statements. Investor-grade reporting that ensures clean auditor opinions and bankability." />
      </Helmet>

      {/* HERO SECTION */}
      <FinancialReportingBanner
        breadcrumbs={breadcrumbs}
        title={<>Your financials represent<br />your business <br /> to everyone who  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">matters.</span></>}
        description="Lenders, investors, acquirers, and regulators all make decisions based on your financial statements. If those statements are incomplete, inconsistently prepared, or non-compliant — the decisions they lead to will not be in your favour."
        primaryBtnText="Commission Statement Preparation"
        secondaryBtnText="See what's at risk ↓"
      />

      {/* MAIN CONTENT AREA */}
      <div className="mx-auto py-[20px] px-[6vw]">

        {/* SERVICE HEADER */}
        <div className="flex items-center gap-[14px] mb-[20px]">
          <span className="font-serif text-[13.6px] font-semibold text-slate-400">FR — 03 /</span>
          <span className="text-[10.7px] font-bold tracking-[0.18em] uppercase text-blue-600 bg-blue-50 px-3 py-1">Financial Statement Preparation Services</span>
        </div>

        <h2 className="font-serif text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.1] text-[#111a22] max-w-[760px] mb-[22px]">
          The bank declined the credit facility.<br />The reason was your <em className="italic text-blue-600 not-italic font-serif">financial statements.</em>
        </h2>

        <p className="font-serif text-[19.2px] italic font-medium text-slate-700 leading-[1.65] max-w-[660px] mb-[48px] pl-5 border-l-[3px] border-blue-600">
          Most founders don't realise their financials are communicating something unintended — until a lender declines, an investor loses confidence, or an auditor issues a qualified opinion.
        </p>

        {/* PAIN BLOCK */}
        <div className="mb-[52px] max-w-[820px] border border-red-900/15 border-l-4 border-l-red-600 bg-red-50/50 p-[26px_30px]">
          <div className="text-[10.7px] font-bold tracking-[0.16em] uppercase text-red-600 mb-[16px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full inline-block"></span>
            What poor financial statement preparation costs — by industry
          </div>
          <ul className="list-none m-0 p-0">
            {[
              { label: "SME & Mid-Market", text: "Financials prepared by the tax CA — optimised for minimum tax, not for bankability. Lenders see thin margins and high withdrawals. Credit declined or heavily collateralised." },
              { label: "Startups & Growth Companies", text: "Investor-ready financials requested for Series A. Books are in Tally, unreconciled, missing disclosures. Due diligence stalls. Deal falls through." },
              { label: "Family Businesses", text: "Multiple entities, intercompany transactions, and no consolidated view. PE buyer can't understand the structure. Price reduced 20% for complexity premium." },
              { label: "Export & Manufacturing", text: "CARO non-compliance, missing schedule disclosures, incorrect depreciation methods. Auditor issues qualifications. Banking relationships at risk." },
              { label: "Real Estate", text: "Project-wise financial statements absent. Lender can't assess project health individually. Consortium banking applications rejected or significantly delayed." }
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
            { title: "Ind-AS Compliant Financial Statements", desc: "Complete P&L, balance sheet, cash flow, and statement of changes in equity — prepared to Ind-AS standards with full disclosure notes." },
            { title: "Consolidated Financial Statements", desc: "Group consolidation across subsidiaries, associates, and joint ventures — eliminating intercompany transactions, correctly applying consolidation standards." },
            { title: "Lender-Ready & Investor-Grade Presentation", desc: "Financial statements structured for the specific audience — bank credit proposals, PE data rooms, or SEBI filings — each with the right level of disclosure." },
            { title: "CARO & Disclosure Compliance", desc: "Full CARO 2020 compliance, related party disclosures, segment reporting, and all Schedule III requirements — nothing that triggers an auditor qualification." }
          ].map((card, idx) => (
            <div key={idx} className="p-[40px_30px] bg-white border-r border-b border-slate-200 relative border-l-[3px] border-l-blue-600">
              <h4 className="text-[16px] font-bold text-[#111a22] mb-[15px] leading-tight font-serif">{card.title}</h4>
              <p className="text-[14.5px] text-slate-500 leading-relaxed font-light">{card.desc}</p>
            </div>
          ))}
          {/* Empty placeholders to match the image's grid structure */}
          <div className="bg-[#dbd9d0] border-b border-slate-200 hidden md:block"></div>
          <div className="bg-[#dbd9d0] border-b border-slate-200 hidden md:block"></div>
        </div>

        {/* OUTCOMES */}
        <div className="flex flex-wrap gap-[9px] mb-[40px] max-w-[820px]">
          {[
            "Lender-Ready Financials",
            "Investor-Grade Presentation",
            "CARO 2020 Compliant",
            "Audit-Ready Books",
            "Clean Auditor Opinion",
            "Consolidated Group View"
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
            { title: "Companies Seeking Bank Credit", desc: "Businesses preparing financial statements specifically for lender appraisal — structured to reflect true creditworthiness, not just tax efficiency." },
            { title: "Businesses Preparing for Investment", desc: "Companies ahead of a fundraise, acquisition, or PE process who need institutional-grade historical financials without gaps or qualifications." },
            { title: "Group Companies Needing Consolidation", desc: "Multi-entity structures where standalone financials exist but no consolidated view has ever been prepared — creating opacity for all stakeholders." },
            { title: "Companies Transitioning to Ind-AS", desc: "Businesses required to migrate from Indian GAAP to Ind-AS — needing restated comparatives and transition date balance sheets." }
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
            Commission Financial Statements
          </button>
          <button className="border-[1.5px] border-slate-200 text-[#111a22] hover:border-blue-600 hover:text-blue-600 text-[11.7px] font-semibold tracking-[0.07em] uppercase px-[22px] py-[12px] transition-all">
            Discuss Your Requirements
          </button>
        </div>
        <p className="mt-[18px] text-[12.6px] italic text-slate-500 leading-relaxed max-w-[560px] pl-[14px] border-l-2 border-slate-200">
          Northrop prepares financial statements for companies from ₹5 Cr to ₹500 Cr+ revenue — standalone, consolidated, and group-level — across sectors.
        </p>

      </div>

      {/* CLOSING / CONTACT */}
      <FinancialReportingClosing
        title="Financials that communicate clearly open doors. Financials that don't, close them."
        description="Let us understand your business and your audience — and build financials that work for both."
      />

   

    </div>
  );
};

export default FinancialStatementPreparationPage;
