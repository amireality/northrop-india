import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const MissingDocsReport = () => {
  const data = {
    metaTitle: "Missing Docs Report | Northrop",
    metaDescription: "A structured missing documents report ensures that nothing can come back after signing to invalidate your reps, your warranties, or your valuation.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Due Diligence", link: "/services/due-diligence" },
      { name: "Missing Docs Report", link: null }
    ],
    bannerTitle: <>Missing Docs <br /><span className=" text-[#C4973B]">Report</span></>,
    bannerDescription: "Identify missing critical legal, financial, and operational documents before deal closure.",
    primaryBtnText: "Start Document Review",
    secondaryBtnText: "Speak to an Advisor",
    svcNum: "07 /",
    svcTag: "Missing Docs Report",
    svcH2:    <span dangerouslySetInnerHTML={{ __html:  `The document you couldn't find<br/>is the one that <em class="italic text-[#C4973B]">kills the deal.</em>`}} />,
    hookText: "A structured missing documents report ensures that nothing can come back after signing to invalidate your reps, your warranties, or your valuation.",
    painLabel: "What missing documents actually cost you",
    painList: [
      { label: "", text: "Title deed for key property unavailable — the entire land bank is now in dispute" },
      { label: "", text: "Statutory approvals lapsed — factory license, environmental clearance — operations at risk" },
      { label: "", text: "Key customer contract unsigned — 40% of projected revenue has no legal foundation" },
      { label: "", text: "No documentation of promoter loans — you've just acquired a hidden liability" },
      { label: "", text: "Tax assessment orders missing — undisclosed demands surface six months post-acquisition" }
    ],
    delGrid: [
      { title: "Document Checklist Construction", desc: "A comprehensive, deal-specific document requirement list — legal, financial, operational, regulatory — built before data room entry." },
      { title: "Gap Identification & Tracking", desc: "Systematic tracking of outstanding documents, materiality assessment of each gap, and escalation to the deal team." },
      { title: "Risk Weighting of Gaps", desc: "Not all gaps are equal. We quantify the financial and legal risk of each missing item and prioritise your negotiation accordingly." }
    ],
    outcomes: [
      "Complete Document Visibility",
      "Deal Closure Confidence",
      "Reps & Warranties Protection",
      "Liability Containment"
    ],
    whoGrid: [
    ],
    ctaPrimaryText: "Start Document Review",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Delivered as a structured tracker — suitable for data room management, legal coordination, and deal team reporting.",
    closingTitle: "Secure your deal with complete documentation.",
    closingDescription: "Our teams stand ready to guide you through your critical next moves."
  };

  return <ServicePageLayout {...data} />;
};

export default MissingDocsReport;