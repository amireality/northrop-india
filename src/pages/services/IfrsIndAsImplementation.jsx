import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
} from 'lucide-react';
import FinancialReportingBanner from '../../components/services/FinancialReportingBanner';
import FinancialReportingClosing from '../../components/services/FinancialReportingClosing';

const IfrsIndAsImplementationPage = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "IFRS & IND-AS Implementation", link: null }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <Helmet>
        <title>IFRS & IND-AS Implementation Services | Northrop India</title>
        <meta name="description" content="Seamlessly transition to IFRS and Ind-AS with expert guidance. We manage gap analysis, opening balance sheets, and first-time adoption compliance." />
      </Helmet>

      {/* HERO SECTION */}
      <FinancialReportingBanner 
        breadcrumbs={breadcrumbs}
        title={<>The standard changed.<br />Your financials haven't.<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">The <br /> regulator noticed.</span></>}
        description="Ind-AS and IFRS convergence is not a compliance exercise — it is a fundamental rewiring of how your business measures, presents, and communicates financial reality. Done wrong, it creates restatements, lender concerns, and regulatory action. Done right, it opens global capital markets."
        primaryBtnText="Plan Your Ind-AS Transition"
        secondaryBtnText="Understand the risks ↓"
      />

      {/* MAIN CONTENT AREA */}
      <div className="mx-auto py-[20px] px-[6vw]">
        
        {/* SERVICE HEADER */}
        <div className="flex items-center gap-[14px] mb-[20px]">
          <span className="font-serif text-[13.6px] font-semibold text-slate-400">FR — 04 /</span>
          <span className="text-[10.7px] font-bold tracking-[0.18em] uppercase text-blue-600 bg-blue-50 px-3 py-1">IFRS & IND-AS Implementation</span>
        </div>

        <h2 className="font-serif text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.1] text-[#111a22] max-w-[760px] mb-[22px]">
          Your company crossed the Ind-AS threshold<br />two years ago. <em className="italic text-blue-600 not-italic font-serif">Nobody told your accounts team.</em>
        </h2>
        
        <p className="font-serif text-[19.2px] italic font-medium text-slate-700 leading-[1.65] max-w-[660px] mb-[48px] pl-5 border-l-[3px] border-blue-600">
          Ind-AS applicability is not optional past certain thresholds. The consequences of delayed or incorrect implementation range from auditor qualifications to MCA penalties to covenant breaches with lenders who expect Ind-AS-compliant statements.
        </p>

        {/* PAIN BLOCK */}
        <div className="mb-[52px] max-w-[820px] border border-red-900/15 border-l-4 border-l-red-600 bg-red-50/50 p-[26px_30px]">
          <div className="text-[10.7px] font-bold tracking-[0.16em] uppercase text-red-600 mb-[16px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full inline-block"></span>
            Where Ind-AS transition destroys value — by sector
          </div>
          <ul className="list-none m-0 p-0">
            {[
              { label: "Real Estate", text: "Revenue recognition under Ind-AS 115 (percentage of completion vs. project completion) can eliminate years of reported profit in a single restatement — and trigger lender defaults." },
              { label: "Infrastructure & Leasing", text: "Ind-AS 116 (Leases) brings operating leases onto the balance sheet — debt ratios blow through covenants, banks demand security enhancement or early repayment." },
              { label: "Banking & NBFC", text: "Ind-AS 109 (Financial Instruments) requires Expected Credit Loss provisioning — provisions jump 40–60% on transition, eroding net worth and regulatory capital ratios." },
              { label: "Manufacturing", text: "Functional currency determination under Ind-AS 21 can reverse reported forex gains into losses, changing P&L by ₹10–50 Cr in a single year." },
              { label: "Listed & Pre-IPO", text: "SEBI requires Ind-AS-compliant financials for listing. Companies discover 6 months before IPO that their historical P&L needs complete restatement." }
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
            { title: "Applicability Assessment & Gap Analysis", desc: "Determining your Ind-AS applicability date, identifying every gap between current policies and Ind-AS requirements, and quantifying transition impact." },
            { title: "Transition Date Opening Balance Sheet", desc: "Restated transition date balance sheet with all Ind-AS adjustments — the foundation from which all future compliant financials are built." },
            { title: "First-Time Adoption Support (Ind-AS 101)", desc: "Navigating mandatory exceptions, optional exemptions, and the carve-outs available on first-time adoption — minimising disruption to reported numbers where permissible." },
            { title: "IFRS Financial Statement Preparation", desc: "Full IFRS-compliant financial statements for Indian subsidiaries of global groups, or Indian companies raising international capital." }
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
            "Ind-AS Applicability Confirmed",
            "Transition Impact Quantified",
            "Restatement Risk Managed",
            "Lender Communication Prepared",
            "SEBI / MCA Compliant",
            "IPO-Ready Financials",
            "IFRS Group Reporting Ready"
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
            { title: "Companies Crossing Ind-AS Thresholds", desc: "Businesses that have crossed the net worth or turnover thresholds requiring mandatory Ind-AS adoption — needing structured transition support." },
            { title: "Pre-IPO Companies", desc: "Companies planning a public listing who need SEBI-compliant Ind-AS financials for the draft red herring prospectus." },
            { title: "Indian Subsidiaries of MNCs", desc: "Subsidiaries required to report under IFRS for group consolidation — needing a local advisor who understands both Indian and global standards." },
            { title: "Companies with Ind-AS Audit Queries", desc: "Businesses facing auditor questions on Ind-AS treatment of specific transactions — needing a technical opinion before the audit file closes." }
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
            Start Ind-AS Implementation
          </button>
          <button className="border-[1.5px] border-slate-200 text-[#111a22] hover:border-blue-600 hover:text-blue-600 text-[11.7px] font-semibold tracking-[0.07em] uppercase px-[22px] py-[12px] transition-all">
            Request Applicability Assessment
          </button>
        </div>
        <p className="mt-[18px] text-[12.6px] italic text-slate-500 leading-relaxed max-w-[560px] pl-[14px] border-l-2 border-slate-200">
          Northrop has advised on Ind-AS transition for companies in real estate, manufacturing, technology, and financial services — including pre-IPO Ind-AS restatement support.
        </p>

      </div>

      {/* CLOSING / CONTACT */}
      <FinancialReportingClosing 
        title="Ind-AS transition managed well is a competitive advantage. Managed poorly, it is a crisis."
        description="Start with a confidential applicability and impact assessment — understand what transition means for your specific business before committing to a path."
      />

      <footer className="py-[30px] px-[6vw] border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-white">
        <div className="text-[11.7px] font-bold tracking-[0.1em] uppercase text-[#111a22]">Northrop Management Private Limited</div>
        <div className="text-[11.7px] text-slate-400">CIN: U70200DC2026PTC469133 · Connaught Place, New Delhi · © 2026</div>
      </footer>

    </div>
  );
};

export default IfrsIndAsImplementationPage;
