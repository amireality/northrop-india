import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
 
} from 'lucide-react';
import FinancialReportingBanner from '../../components/services/FinancialReportingBanner';
import FinancialReportingClosing from '../../components/services/FinancialReportingClosing';

const AccountingAdvisoryServicesPage = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Accounting Advisory", link: null }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <Helmet>
        <title>Accounting Advisory Services | Northrop India</title>
        <meta name="description" content="Expert accounting advisory on revenue recognition, complex transactions, and policy design. Ensure your financials withstand due diligence and institutional scrutiny." />
      </Helmet>

      {/* HERO SECTION */}
      <FinancialReportingBanner 
        breadcrumbs={breadcrumbs}
        title={<>Your accounting tells a  <br /> story.<br />Make sure it's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">the right one.</span></>}
        description="Accounting decisions made at inception — revenue recognition policies, capitalisation choices, provisioning approaches — compound over years. The wrong call today becomes a restatement, a regulatory notice, or a deal-breaker in due diligence tomorrow."
        primaryBtnText="Get Accounting Clarity"
        secondaryBtnText="See where it goes wrong ↓"
      />

      {/* MAIN CONTENT AREA */}
      <div className=" mx-auto py-[20px] px-[6vw]">
        
        {/* SERVICE HEADER */}
        <div className="flex items-center gap-[14px] mb-[20px]">
          <span className="font-serif text-[13.6px] font-semibold text-slate-400">FR — 02 /</span>
          <span className="text-[10.7px] font-bold tracking-[0.18em] uppercase text-blue-600 bg-blue-50 px-3 py-1">Accounting Advisory Services</span>
        </div>

        <h2 className="font-serif text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.1] text-[#111a22] max-w-[760px] mb-[22px]">
          The policy seemed reasonable when you adopted it. <em className="italic text-blue-600 not-italic font-serif">It doesn't hold up in a deal room.</em>
        </h2>
        
        <p className="font-serif text-[19.2px] italic font-medium text-slate-700 leading-[1.65] max-w-[660px] mb-[48px] pl-5 border-l-[3px] border-blue-600">
          Accounting is not just bookkeeping — it is the language in which your business communicates its value to investors, lenders, and regulators. If that language is imprecise, the consequences follow you.
        </p>

        {/* PAIN BLOCK */}
        <div className="mb-[52px] max-w-[820px] border border-red-900/15 border-l-4 border-l-red-600 bg-red-50/50 p-[26px_30px]">
          <div className="text-[10.7px] font-bold tracking-[0.16em] uppercase text-red-600 mb-[16px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full inline-block"></span>
            Industry-specific accounting failures — and their cost
          </div>
          <ul className="list-none m-0 p-0">
            {[
              { label: "Real Estate & Construction", text: "Revenue recognised on project completion percentage — not RERA compliant. Restated financials triggering lender covenant breaches and buyer price reductions of 15–25%." },
              { label: "SaaS & Technology", text: "Annual subscription revenue booked upfront — not amortised. A single Ind-AS 115 adjustment can collapse reported EBITDA by 30–40% at point of investor diligence." },
              { label: "Manufacturing", text: "R&D costs capitalised as intangibles with no documented technical feasibility. Auditors force write-offs; balance sheets deteriorate; credit ratings drop." },
              { label: "NBFC & Lending", text: "Provisioning policies that don't align with RBI's IRACP norms. Regulatory orders and mandatory capital infusion requirements that could have been avoided." },
              { label: "Retail & FMCG", text: "Trade discounts and promotional schemes netted against revenue inconsistently — topline inflated, comparability destroyed, buy-side FDD kills the deal." }
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
            { title: "Accounting Policy Design & Review", desc: "Drafting or reviewing revenue recognition, capitalisation, provisioning, and consolidation policies — aligned to Ind-AS and your commercial reality." },
            { title: "Complex Transaction Structuring", desc: "Advisory on the accounting treatment of leases, business combinations, financial instruments, and related-party transactions before they are executed." },
            { title: "Financial Restatement Support", desc: "Where prior-year policies require correction — managing the restatement process, regulator communication, and investor narrative with minimum disruption." },
            { title: "Deal-Ready Financial Preparation", desc: "Preparing historical financials that withstand buy-side FDD scrutiny — normalised, policy-compliant, and documented to institutional standards." }
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
            "Ind-AS Compliant Policies",
            "Investor-Grade Financials",
            "Restatement Risk Eliminated",
            "Deal Diligence Ready",
            "Regulatory Alignment",
            "Board & Auditor Confidence"
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
            { title: "Pre-Fundraise Companies", desc: "Startups and growth-stage businesses preparing financials for the first time that will face institutional investor scrutiny." },
            { title: "Pre-Sale Businesses", desc: "Promoters preparing for M&A or PE sale who need accounting policies that survive a buy-side FDD without retrade." },
            { title: "Companies in Regulatory Transition", desc: "Businesses migrating from Indian GAAP to Ind-AS, or from one consolidation structure to another, requiring policy alignment guidance." },
            { title: "CFOs Facing Audit Queries", desc: "Finance heads who need an independent technical opinion before their next auditor conversation or board meeting." }
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
            Get Accounting Advisory
          </button>
          <button className="border-[1.5px] border-slate-200 text-[#111a22] hover:border-blue-600 hover:text-blue-600 text-[11.7px] font-semibold tracking-[0.07em] uppercase px-[22px] py-[12px] transition-all">
            Request a Technical Opinion
          </button>
        </div>
        <p className="mt-[18px] text-[12.6px] italic text-slate-500 leading-relaxed max-w-[560px] pl-[14px] border-l-2 border-slate-200">
          Northrop has advised on accounting policy design and restatement support for companies across real estate, technology, manufacturing, and NBFC sectors.
        </p>

      </div>

      {/* CLOSING / CONTACT */}
      <FinancialReportingClosing 
        title="The accounting decision you delay is the problem you inherit."
        description="Every engagement begins with a confidential technical discussion. No obligation — just clarity on where your accounting exposure sits and how to address it."
      />

      <footer className="py-[30px] px-[6vw] border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-white">
        <div className="text-[11.7px] font-bold tracking-[0.1em] uppercase text-[#111a22]">Northrop Management Private Limited</div>
        <div className="text-[11.7px] text-slate-400">CIN: U70200DC2026PTC469133 · Connaught Place, New Delhi · © 2026</div>
      </footer>

    </div>
  );
};

export default AccountingAdvisoryServicesPage;
