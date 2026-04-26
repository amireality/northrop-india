import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const LenderDueDiligence = () => {
  const data = {
    metaTitle: "Lender Due Diligence | Northrop India",
    metaDescription: "Lender Due Diligence to secure optimal debt financing, evaluating borrower cash flows and debt service capabilities.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Due Diligence", link: "/services/due-diligence" },
      { name: "Lender DD", link: null }
    ],
    bannerTitle: <>Lender <br /><span className=" text-[#C4973B]">DD</span></>,
    bannerDescription: "Robust financial evaluation to satisfy credit committees and structure appropriate debt facilities.",
    primaryBtnText: "Commission Lender FDD",
    secondaryBtnText: "Credit Surveillance Inquiry",
    svcNum: "04 /",
    svcTag: "Lender Due Diligence",
    svcH2: <span dangerouslySetInnerHTML={{ __html: `The borrower's financials looked strong<br/>at sanction. <em class="italic text-blue-600 not-italic font-serif">The NPA happened anyway.</em>` }} />,
    hookText: "Lender due diligence is not a compliance checkbox. It is the last independent verification between your capital and a borrower's ability to construct a convincing story.",
    painLabel: "What lenders miss at the appraisal stage",
    painList: [
      { label: "Unverified Projections", text: "DSCR looks healthy — but projections are built on assumptions nobody independently verified." },
      { label: "Fund Diversion", text: "End-use of funds diverted to promoter group companies within 90 days of disbursement." },
      { label: "Paper Collateral", text: "Collateral valued at 2× its actual realisable value — on paper, nowhere else." },
      { label: "Hidden Debt", text: "Borrower is already servicing debt at 8 other lenders — you're 9th in the waterfall." },
      { label: "Compliant Certification", text: "Financials certified by a compliant CA who has never visited the operating unit." }
    ],
    delGrid: [
      { title: "Credit Risk Assessment", desc: "In-depth financial statement analysis, ratio benchmarking, and debt serviceability stress-testing across multiple scenarios." },
      { title: "Loan Utilisation Review", desc: "Post-disbursement fund-use verification. End-use certificates validated against bank statements and actual activity." },
      { title: "Covenant Compliance Monitoring", desc: "70-100-point ongoing monitoring framework — quarterly surveillance for borrowers with ₹500 Cr+ loan exposure." },
      { title: "Early Warning System", desc: "Red-flag identification before stress becomes NPA. Cash flow divergence, covenant deviation, and management behaviour signals." }
    ],
    outcomes: [
      "NPA Prevention",
      "Covenant Discipline",
      "Regulatory Compliance",
      "Early Stress Detection",
      "RBI-Ready Documentation"
    ],
    whoGrid: [
      { title: "Commercial Banks", desc: "Traditional lenders needing third-party financial validation." },
      { title: "Private Credit Funds", desc: "Alternative lenders analyzing non-standard risk profiles." },
      { title: "Borrowing Corporations", desc: "Companies proactively building their credit narrative." }
    ],
    ctaPrimaryText: "Commission Lender FDD",
    ctaSecondaryText: "Credit Surveillance Inquiry",
    trustNote: "Credit surveillance conducted on borrowers with ₹500-1,200 Cr loan exposure and ₹100-2,200 Cr turnover.",
    closingTitle: "Take the next step in capital strategy.",
    closingDescription: "Our teams stand ready to guide you through your critical next moves."
  };

  return <ServicePageLayout {...data} />;
};

export default LenderDueDiligence;