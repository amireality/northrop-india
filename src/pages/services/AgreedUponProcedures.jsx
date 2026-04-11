import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
} from 'lucide-react';
import FinancialReportingBanner from '../../components/services/FinancialReportingBanner';
import FinancialReportingClosing from '../../components/services/FinancialReportingClosing';

const AgreedUponProceduresPage = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Agreed Upon Procedures", link: null }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <Helmet>
        <title>Agreed Upon Procedures (AUP) & MIS Reporting | Northrop India</title>
        <meta name="description" content="Targeted independent verification (AUP) and strategic management reporting (MIS). Precision reporting for lenders, boards, and joint venture partners." />
      </Helmet>

      {/* HERO SECTION */}
      <FinancialReportingBanner 
        breadcrumbs={breadcrumbs}
        title={<>Your board makes decisions<br />on data<br /> that hasn't been <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">independently verified.</span></>}
        description="Agreed Upon Procedures (AUP) give lenders, investors, and boards targeted, independent verification of specific financial data — without the cost or scope of a full audit. Management reporting gives leadership the decision intelligence they need, in the format they can actually use."
        primaryBtnText="Commission an AUP or MIS Review"
        secondaryBtnText="Understand the gaps ↓"
      />

      {/* MAIN CONTENT AREA */}
      <div className="mx-auto py-[20px] px-[6vw]">
        
        {/* SERVICE HEADER */}
        <div className="flex items-center gap-[14px] mb-[20px]">
          <span className="font-serif text-[13.6px] font-semibold text-slate-400">FR — 05 /</span>
          <span className="text-[10.7px] font-bold tracking-[0.18em] uppercase text-blue-600 bg-blue-50 px-3 py-1">Agreed Upon Procedures & Management Reporting</span>
        </div>

        <h2 className="font-serif text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.1] text-[#111a22] max-w-[760px] mb-[22px]">
          Your lender wants specific verification.<br />Your full audit doesn't <em className="italic text-blue-600 not-italic font-serif">cover what they need.</em>
        </h2>
        
        <p className="font-serif text-[19.2px] italic font-medium text-slate-700 leading-[1.65] max-w-[660px] mb-[48px] pl-5 border-l-[3px] border-blue-600">
          AUP engagements fill the gap between a full statutory audit and no independent verification at all. They are precise, targeted, and legally defensible — exactly what lenders and investors demand when they need assurance on a specific financial claim.
        </p>

        {/* PAIN BLOCK */}
        <div className="mb-[52px] max-w-[820px] border border-red-900/15 border-l-4 border-l-red-600 bg-red-50/50 p-[26px_30px]">
          <div className="text-[10.7px] font-bold tracking-[0.16em] uppercase text-red-600 mb-[16px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full inline-block"></span>
            Where AUP and management reporting failures create real problems
          </div>
          <ul className="list-none m-0 p-0">
            {[
              { label: "Banks & Lenders", text: "Loan covenant compliance certificates submitted without independent verification — discovered during lender audit, triggering an Event of Default that wouldn't have existed." },
              { label: "PE-Backed Companies", text: "Monthly MIS reports to investors built on unreconciled data — management P&L diverges from books by ₹3–8 Cr per quarter, investor confidence destroyed." },
              { label: "Grant Disbursing Bodies", text: "Utilisation certificates submitted for government or CSR grants without an independent AUP — projects rejected from future funding rounds due to compliance failure." },
              { label: "Joint Ventures & Partnerships", text: "Revenue sharing disputes because neither party has an agreed independent verification mechanism — litigation that costs more than the disputed amount." },
              { label: "Pre-Acquisition Sellers", text: "Earn-out calculations disputed post-close because the agreed calculation methodology was never independently verified during the deal — years of legal wrangling." }
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
            { title: "Agreed Upon Procedures Engagement", desc: "Independent factual findings on specific financial data points — receivables, revenue, covenant metrics — scoped precisely to what the requesting party needs verified." },
            { title: "Management Information System (MIS) Design", desc: "Building or restructuring management reporting frameworks — P&L by business unit, working capital dashboards, and variance analysis that actually explains performance." },
            { title: "Board & Investor Reporting Packs", desc: "Monthly or quarterly board packs — structured, consistent, and presenting the right KPIs alongside the financial statements leadership needs to govern effectively." },
            { title: "Covenant Compliance Certificates", desc: "Independent preparation and verification of lender covenant compliance certificates — DSCR, NWC ratios, leverage covenants — submitted on schedule, every period." }
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
            "Lender-Verified Covenant Compliance",
            "Board Reporting Confidence",
            "Investor MIS Integrity",
            "Grant Utilisation Certified",
            "Earn-Out Dispute Prevention",
            "JV Revenue Verification"
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
            { title: "Companies with Loan Covenants", desc: "Businesses required to submit periodic covenant compliance certificates — needing independent preparation to protect against Event of Default risk." },
            { title: "PE-Backed & Investor-Funded Companies", desc: "Businesses with regular investor reporting obligations who need MIS that reconciles with books and withstands investor scrutiny each quarter." },
            { title: "NGOs & Grant Recipients", desc: "Organisations submitting utilisation certificates for government grants, CSR funds, or international aid — requiring independent AUP certification." },
            { title: "JV & Earn-Out Structures", desc: "Parties to joint ventures or M&A earn-out arrangements who need agreed independent verification of calculation mechanics to prevent disputes." }
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
            Commission an AUP Engagement
          </button>
          <button className="border-[1.5px] border-slate-200 text-[#111a22] hover:border-blue-600 hover:text-blue-600 text-[11.7px] font-semibold tracking-[0.07em] uppercase px-[22px] py-[12px] transition-all">
            Design Your MIS Framework
          </button>
        </div>
        <p className="mt-[18px] text-[12.6px] italic text-slate-500 leading-relaxed max-w-[560px] pl-[14px] border-l-2 border-slate-200">
          Northrop conducts AUP engagements for lenders, PE funds, government grant bodies, and JV partners — from single-metric verification to comprehensive reporting framework design.
        </p>

      </div>

      {/* CLOSING / CONTACT */}
      <FinancialReportingClosing 
        title="Independent verification is not a cost. It is protection against a much larger one."
        description="Tell us what data point needs verification, or what management reporting problem needs solving — we'll design the right engagement around it."
      />

      <footer className="py-[30px] px-[6vw] border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-white">
        <div className="text-[11.7px] font-bold tracking-[0.1em] uppercase text-[#111a22]">Northrop Management Private Limited</div>
        <div className="text-[11.7px] text-slate-400">CIN: U70200DC2026PTC469133 · Connaught Place, New Delhi · © 2026</div>
      </footer>

    </div>
  );
};

export default AgreedUponProceduresPage;
