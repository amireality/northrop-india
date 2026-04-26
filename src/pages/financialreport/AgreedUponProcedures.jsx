import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const AgreedUponProceduresPage = () => {
  const data = {
    metaTitle: "Agreed Upon Procedures (AUP) & MIS Reporting | Northrop India",
    metaDescription: "Targeted independent verification (AUP) and strategic management reporting (MIS). Precision reporting for lenders, boards, and joint venture partners.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Agreed Upon Procedures", link: null }
    ],
    bannerTitle: <>Your board makes decisions<br />on data<br /> that hasn't been <br /><span className="text-[#C4973B]">independently verified.</span></>,
    bannerDescription: "Agreed Upon Procedures (AUP) give lenders, investors, and boards targeted, independent verification of specific financial data — without the cost or scope of a full audit. Management reporting gives leadership the decision intelligence they need, in the format they can actually use.",
    primaryBtnText: "Commission an AUP or MIS Review",
    secondaryBtnText: "Understand the gaps ↓",
    svcNum: "FR — 05 /",
    svcTag: "Agreed Upon Procedures & Management Reporting",
    svcH2: <>Your lender wants specific verification.<br />Your full audit doesn't <em className="italic text-blue-600 not-italic font-serif">cover what they need.</em></>,
    hookText: "AUP engagements fill the gap between a full statutory audit and no independent verification at all. They are precise, targeted, and legally defensible — exactly what lenders and investors demand when they need assurance on a specific financial claim.",
    painLabel: "Where AUP and management reporting failures create real problems",
    painList: [
      { label: "Banks & Lenders", text: "Loan covenant compliance certificates submitted without independent verification — discovered during lender audit, triggering an Event of Default that wouldn't have existed." },
      { label: "PE-Backed Companies", text: "Monthly MIS reports to investors built on unreconciled data — management P&L diverges from books by ₹3–8 Cr per quarter, investor confidence destroyed." },
      { label: "Grant Disbursing Bodies", text: "Utilisation certificates submitted for government or CSR grants without an independent AUP — projects rejected from future funding rounds due to compliance failure." },
      { label: "Joint Ventures & Partnerships", text: "Revenue sharing disputes because neither party has an agreed independent verification mechanism — litigation that costs more than the disputed amount." },
      { label: "Pre-Acquisition Sellers", text: "Earn-out calculations disputed post-close because the agreed calculation methodology was never independently verified during the deal — years of legal wrangling." }
    ],
    delGrid: [
      { title: "Agreed Upon Procedures Engagement", desc: "Independent factual findings on specific financial data points — receivables, revenue, covenant metrics — scoped precisely to what the requesting party needs verified." },
      { title: "Management Information System (MIS) Design", desc: "Building or restructuring management reporting frameworks — P&L by business unit, working capital dashboards, and variance analysis that actually explains performance." },
      { title: "Board & Investor Reporting Packs", desc: "Monthly or quarterly board packs — structured, consistent, and presenting the right KPIs alongside the financial statements leadership needs to govern effectively." },
      { title: "Covenant Compliance Certificates", desc: "Independent preparation and verification of lender covenant compliance certificates — DSCR, NWC ratios, leverage covenants — submitted on schedule, every period." }
    ],
    outcomes: [
      "Lender-Verified Covenant Compliance",
      "Board Reporting Confidence",
      "Investor MIS Integrity",
      "Grant Utilisation Certified",
      "Earn-Out Dispute Prevention",
      "JV Revenue Verification"
    ],
    whoGrid: [
      { title: "Companies with Loan Covenants", desc: "Businesses required to submit periodic covenant compliance certificates — needing independent preparation to protect against Event of Default risk." },
      { title: "PE-Backed & Investor-Funded Companies", desc: "Businesses with regular investor reporting obligations who need MIS that reconciles with books and withstands investor scrutiny each quarter." },
      { title: "NGOs & Grant Recipients", desc: "Organisations submitting utilisation certificates for government grants, CSR funds, or international aid — requiring independent AUP certification." },
      { title: "JV & Earn-Out Structures", desc: "Parties to joint ventures or M&A earn-out arrangements who need agreed independent verification of calculation mechanics to prevent disputes." }
    ],
    ctaPrimaryText: "Commission an AUP Engagement",
    ctaSecondaryText: "Design Your MIS Framework",
    trustNote: "Northrop conducts AUP engagements for lenders, PE funds, government grant bodies, and JV partners — from single-metric verification to comprehensive reporting framework design.",
    closingTitle: "Independent verification is not a cost. It is protection against a much larger one.",
    closingDescription: "Tell us what data point needs verification, or what management reporting problem needs solving — we'll design the right engagement around it."
  };

  return <ServicePageLayout {...data} />;
};

export default AgreedUponProceduresPage;
