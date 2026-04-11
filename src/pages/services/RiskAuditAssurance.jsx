
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
} from 'lucide-react';
import FinancialReportingBanner from '../../components/services/FinancialReportingBanner';
import FinancialReportingClosing from '../../components/services/FinancialReportingClosing';

const RiskAuditAssurancePage = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Risk Audit & Assurance", link: null }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <Helmet>
        <title>Risk Audit & Assurance Consulting | Northrop India</title>
        <meta name="description" content="Protect your business with independent risk audit and assurance services. We identify control gaps, recover revenue leakage, and ensure regulatory readiness." />
      </Helmet>

      {/* HERO SECTION */}
      <FinancialReportingBanner 
        breadcrumbs={breadcrumbs}
        title={<>Your auditor signs off.<br />Your board sleeps well.<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Your risk is still there.</span></>}
        description="A statutory audit confirms compliance. It does not tell you where your business is bleeding, where controls are failing, or what will surface in the next RBI or regulatory inspection. Risk Audit and Assurance does."
        primaryBtnText="Request an Assurance Review"
        secondaryBtnText="What's at stake"
      />

      {/* MAIN CONTENT AREA */}
      <div className=" mx-auto py-[20px] px-[6vw]">
        
        {/* SERVICE HEADER */}
        <div className="flex items-center gap-[14px] mb-[20px]">
          <span className="font-serif text-[13.6px] font-semibold text-slate-400">FR — 01 /</span>
          <span className="text-[10.7px] font-bold tracking-[0.18em] uppercase text-blue-600 bg-blue-50 px-3 py-1">Risk Audit & Assurance Consulting</span>
        </div>

        <h2 className="font-serif text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.1] text-[#111a22] max-w-[760px] mb-[22px]">
          The audit passed. The fraud was discovered <em className="italic text-blue-600 not-italic font-serif">six months later.</em>
        </h2>
        
        <p className="font-serif text-[19.2px] italic font-medium text-slate-700 leading-[1.65] max-w-[660px] mb-[48px] pl-5 border-l-[3px] border-blue-600">
          Most companies confuse regulatory compliance with actual risk management. They are not the same. One protects you from the regulator. The other protects you from the business.
        </p>

        {/* PAIN BLOCK */}
        <div className="mb-[52px] max-w-[820px] border border-red-900/15 border-l-4 border-l-red-600 bg-red-50/50 p-[26px_30px]">
          <div className="text-[10.7px] font-bold tracking-[0.16em] uppercase text-red-600 mb-[16px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full inline-block"></span>
            Who gets hurt — and how
          </div>
          <ul className="list-none m-0 p-0">
            {[
              { label: "Manufacturing & FMCG", text: "Physical stock reconciliation failures — inventory on paper, empty shelves in the warehouse. ₹2–15 Cr written off at year-end." },
              { label: "Banking & NBFC", text: "Internal audit sign-offs on loan files that were never physically verified — NPAs that could have been caught 12 months earlier." },
              { label: "Real Estate", text: "Revenue recognised on projects that don't meet RERA completion milestones — restatements that shake investor confidence." },
              { label: "Professional Services", text: "Billing leakages and unbilled work — revenue that exists in delivery but never reaches the invoice. Firms losing 8–12% of topline silently." },
              { label: "Healthcare", text: "Procurement audit failures — consumables billed at 2× rate, expired stock written off as sold, vendor-doctor kickbacks undetected for years." }
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
            { title: "Risk-Based Internal Audit", desc: "Audit scope built around your highest-risk areas — not a generic checklist. Every finding is ranked by financial impact and probability." },
            { title: "Control Framework Design", desc: "Identifying where controls are missing, weak, or bypassed — and designing replacements that are operationally practical, not just theoretically sound." },
            { title: "Process Audit & Leakage Quantification", desc: "Revenue leakage, procurement overruns, and approval bypass — identified, quantified in rupees, and mapped to the responsible process owner." },
            { title: "Assurance Report for Board / Lenders", desc: "A structured, auditor-grade report suitable for board presentation, lender covenant submission, or regulatory review." }
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
            "Risk Prioritised by Financial Impact",
            "Control Gaps Documented",
            "Revenue Leakage Recovered",
            "Board-Ready Assurance Report",
            "Lender Covenant Compliance",
            "Regulatory Inspection Ready"
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
            { title: "Boards & Audit Committees", desc: "Seeking independent assurance beyond the statutory auditor — a second opinion that protects board members personally." },
            { title: "CFOs & Finance Heads", desc: "Who want to close control gaps before they are found by auditors, regulators, or a lender's diligence team." },
            { title: "Banks & Lenders", desc: "Commissioning borrower assurance reviews as part of credit monitoring or post-disbursement fund-use verification." },
            { title: "PE Funds & Investors", desc: "Who need an independent assurance review on a portfolio company before a fresh capital infusion or exit." }
          ].map((card, idx) => (
            <div key={idx} className="p-[40px_30px] bg-white border-r border-b border-slate-200 relative border-l-[3px] border-l-[#111a22]">
              <h4 className="text-[16px] font-bold text-[#111a22] mb-[15px] leading-tight">{card.title}</h4>
              <p className="text-[14.5px] text-slate-500 leading-relaxed font-light">{card.desc}</p>
            </div>
          ))}
          {/* Empty placeholders to match the image's grid structure */}
          <div className="bg-[#dbd9d0] border-b border-slate-200 hidden md:block"></div>
          <div className="bg-[#dbd9d0] border-b border-slate-200 hidden md:block"></div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-5 mb-5">
          <button className="bg-[#111a22] hover:bg-blue-700 text-white text-[11.7px] font-bold tracking-[0.1em] uppercase px-7 py-[13px] transition-all">
            Commission an Assurance Review
          </button>
          <button className="border-[1.5px] border-slate-200 text-[#111a22] hover:border-blue-600 hover:text-blue-600 text-[11.7px] font-semibold tracking-[0.07em] uppercase px-[22px] py-[12px] transition-all">
            Speak to an Advisor
          </button>
        </div>
        <p className="mt-[18px] text-[12.6px] italic text-slate-500 leading-relaxed max-w-[560px] pl-[14px] border-l-2 border-slate-200">
          Northrop has conducted risk and assurance reviews for companies with ₹100 Cr — ₹2,200 Cr turnover across manufacturing, services, and financial sectors.
        </p>

      </div>

  
      {/* CLOSING / CONTACT */}
      <FinancialReportingClosing 
        title="The risk that isn't audited is the risk that materialises."
        description="Every engagement starts with a confidential scoping call. No obligation. Just a clear assessment of where your highest exposures sit."
      />

      <footer className="py-[30px] px-[6vw] border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-white">
        <div className="text-[11.7px] font-bold tracking-[0.1em] uppercase text-[#111a22]">Northrop Management Private Limited</div>
        <div className="text-[11.7px] text-slate-400">CIN: U70200DC2026PTC469133 · Connaught Place, New Delhi · © 2026</div>
      </footer>

    </div>
  );
};

export default RiskAuditAssurancePage;
