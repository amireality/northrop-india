import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const IfrsIndAsImplementationPage = () => {
  const data = {
    metaTitle: "IFRS & IND-AS Implementation Services | Northrop India",
    metaDescription: "Seamlessly transition to IFRS and Ind-AS with expert guidance. We manage gap analysis, opening balance sheets, and first-time adoption compliance.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "IFRS & IND-AS Implementation", link: null }
    ],
    bannerTitle: <>The standard changed.<br />Your financials haven't.<span className="text-[#C4973B]">The <br /> regulator noticed.</span></>,
    bannerDescription: "Ind-AS and IFRS convergence is not a compliance exercise — it is a fundamental rewiring of how your business measures, presents, and communicates financial reality. Done wrong, it creates restatements, lender concerns, and regulatory action. Done right, it opens global capital markets.",
    primaryBtnText: "Plan Your Ind-AS Transition",
    secondaryBtnText: "Understand the risks ↓",
    svcNum: "FR — 04 /",
    svcTag: "IFRS & IND-AS Implementation",
    svcH2: <>Your company crossed the Ind-AS threshold<br />two years ago. <em className="italic text-blue-600 not-italic font-serif">Nobody told your accounts team.</em></>,
    hookText: "Ind-AS applicability is not optional past certain thresholds. The consequences of delayed or incorrect implementation range from auditor qualifications to MCA penalties to covenant breaches with lenders who expect Ind-AS-compliant statements.",
    painLabel: "Where Ind-AS transition destroys value — by sector",
    painList: [
      { label: "Real Estate", text: "Revenue recognition under Ind-AS 115 (percentage of completion vs. project completion) can eliminate years of reported profit in a single restatement — and trigger lender defaults." },
      { label: "Infrastructure & Leasing", text: "Ind-AS 116 (Leases) brings operating leases onto the balance sheet — debt ratios blow through covenants, banks demand security enhancement or early repayment." },
      { label: "Banking & NBFC", text: "Ind-AS 109 (Financial Instruments) requires Expected Credit Loss provisioning — provisions jump 40–60% on transition, eroding net worth and regulatory capital ratios." },
      { label: "Manufacturing", text: "Functional currency determination under Ind-AS 21 can reverse reported forex gains into losses, changing P&L by ₹10–50 Cr in a single year." },
      { label: "Listed & Pre-IPO", text: "SEBI requires Ind-AS-compliant financials for listing. Companies discover 6 months before IPO that their historical P&L needs complete restatement." }
    ],
    delGrid: [
      { title: "Applicability Assessment & Gap Analysis", desc: "Determining your Ind-AS applicability date, identifying every gap between current policies and Ind-AS requirements, and quantifying transition impact." },
      { title: "Transition Date Opening Balance Sheet", desc: "Restated transition date balance sheet with all Ind-AS adjustments — the foundation from which all future compliant financials are built." },
      { title: "First-Time Adoption Support (Ind-AS 101)", desc: "Navigating mandatory exceptions, optional exemptions, and the carve-outs available on first-time adoption — minimising disruption to reported numbers where permissible." },
      { title: "IFRS Financial Statement Preparation", desc: "Full IFRS-compliant financial statements for Indian subsidiaries of global groups, or Indian companies raising international capital." }
    ],
    outcomes: [
      "Ind-AS Applicability Confirmed",
      "Transition Impact Quantified",
      "Restatement Risk Managed",
      "Lender Communication Prepared",
      "SEBI / MCA Compliant",
      "IPO-Ready Financials",
      "IFRS Group Reporting Ready"
    ],
    whoGrid: [
      { title: "Companies Crossing Ind-AS Thresholds", desc: "Businesses that have crossed the net worth or turnover thresholds requiring mandatory Ind-AS adoption — needing structured transition support." },
      { title: "Pre-IPO Companies", desc: "Companies planning a public listing who need SEBI-compliant Ind-AS financials for the draft red herring prospectus." },
      { title: "Indian Subsidiaries of MNCs", desc: "Subsidiaries required to report under IFRS for group consolidation — needing a local advisor who understands both Indian and global standards." },
      { title: "Companies with Ind-AS Audit Queries", desc: "Businesses facing auditor questions on Ind-AS treatment of specific transactions — needing a technical opinion before the audit file closes." }
    ],
    ctaPrimaryText: "Start Ind-AS Implementation",
    ctaSecondaryText: "Request Applicability Assessment",
    trustNote: "Northrop has advised on Ind-AS transition for companies in real estate, manufacturing, technology, and financial services — including pre-IPO Ind-AS restatement support.",
    closingTitle: "Ind-AS transition managed well is a competitive advantage. Managed poorly, it is a crisis.",
    closingDescription: "Start with a confidential applicability and impact assessment — understand what transition means for your specific business before committing to a path."
  };

  return <ServicePageLayout {...data} />;
};

export default IfrsIndAsImplementationPage;
