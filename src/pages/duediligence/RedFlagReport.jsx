import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const RedFlagReport = () => {
  const data = {
    metaTitle: "Red Flag Report | Northrop",
    metaDescription: "The Red Flag Report is designed for speed.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Due Diligence", link: "/services/due-diligence" },
      { name: "Red Flag Report", link: null }
    ],
    bannerTitle: <>Red Flag <br /><span className=" text-[#C4973B]">Report</span></>,
    bannerDescription: "Rapid, focused assessments for critical go/no-go decisions.",
    primaryBtnText: "Order a Red Flag Report",
    secondaryBtnText: "Urgent Inquiry",
    svcNum: "05 /",
    svcTag: "Red Flag Report",
    svcH2:    <span dangerouslySetInnerHTML={{ __html:  `You don't need a 200-page report.<br/>You need to know <em class="italic text-[#C4973B]">if something is wrong.</em>`}} />,
    hookText: "The Red Flag Report is designed for speed. When a deal, a credit, or a partnership raises a question — we answer it within 5-7 business days with a focused, actionable assessment.",
    painLabel: "When you need a Red Flag Report — immediately",
    painList: [
      { label: "", text: "A borrower's cash flow suddenly deteriorates — you need to know why, fast" },
      { label: "", text: "A potential acquisition target: \"something feels off\" but you can't articulate it" },
      { label: "", text: "Whistleblower complaint received — you need an independent first assessment urgently" },
      { label: "", text: "Partner or JV entity showing unusual transactions you cannot explain internally" },
      { label: "", text: "Board needs a quick review before a major credit decision goes to committee" }
    ],
    delGrid: [
      { title: "Financial Anomaly Scan", desc: "Rapid ratio analysis, trend deviation identification, and unusual account movement flagging across available financials." },
      { title: "Entity & Ownership Check", desc: "MCA records, director history, related-party mapping, and litigation screening — consolidated within 48 hours of engagement." },
      { title: "Management Account Review", desc: "Reconciliation of MIS data against statutory records — identifying precisely where the numbers diverge and why." }
    ],
    outcomes: [
      "5-7 Day Turnaround",
      "Decision-Ready Findings",
      "Go / No-Go Recommendation",
      "Escalation Pathway if Needed"
    ],
    whoGrid: [
    ],
    ctaPrimaryText: "Order a Red Flag Report",
    ctaSecondaryText: "Urgent Inquiry",
    trustNote: "Fixed-scope, fixed-fee engagement. Delivered in 5-7 business days from document receipt.",
    closingTitle: "Gain an immediate look behind the curtain.",
    closingDescription: "Our teams stand ready to guide you through your critical next moves."
  };

  return <ServicePageLayout {...data} />;
};

export default RedFlagReport;
