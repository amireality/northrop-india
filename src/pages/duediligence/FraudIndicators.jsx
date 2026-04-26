import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const FraudIndicators = () => {
  const data = {
    metaTitle: "Fraud Indicators Analysis | Northrop",
    metaDescription: "Data-driven detection of anomalies, diversion, and complex financial fraud.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Due Diligence", link: "/services/due-diligence" },
      { name: "Fraud Indicators Analysis", link: null }
    ],
    bannerTitle: <>Fraud <br /><span className=" text-[#C4973B]">Indicators Assessment</span></>,
    bannerDescription: "Data-driven detection of anomalies, diversion, and complex financial fraud.",
    primaryBtnText: "Commission Fraud Analysis",
    secondaryBtnText: "Confidential Inquiry",
    svcNum: "06 /",
    svcTag: "Fraud Indicators Analysis",
   svcH2:     <span dangerouslySetInnerHTML={{ __html: `Fraud never announces itself.<br/>It hides in the <em class="italic text-[#C4973B] not-italic font-serif">ordinary.</em>` }} />,


    hookText: "Most financial fraud doesn't look dramatic. It looks like a slightly unusual creditor balance, a vendor nobody has ever met, and a year-end journal entry nobody questions.",
    painLabel: "The patterns that precede every major fraud",
    painList: [
      { label: "", text: "Sundry creditors ballooning with no corresponding inventory — classic diversion signal" },
      { label: "", text: "Round-number transactions clustering near quarter-end or financial year close" },
      { label: "", text: "Vendor concentration: 70-80% of purchases from entities sharing a promoter's PIN code" },
      { label: "", text: "Fixed asset additions that do not appear in any physical verification exercise" },
      { label: "", text: "Transactions booked outside business hours, on public holidays, by a single user ID" }
    ],
    delGrid: [
      { title: "Data Analytics & Pattern Recognition", desc: "Full-dataset transaction analysis — not samples. Benford's Law testing, outlier detection, and temporal clustering." },
      { title: "Related Party Transaction Mapping", desc: "Identifying circular transactions, sham invoicing, and diversion routes through comprehensive entity relationship mapping." },
      { title: "Control Environment Assessment", desc: "Evaluating the gaps that allowed fraud to occur — and recommending structural controls to prevent recurrence." },
      { title: "Forensic Report for Legal Action", desc: "Court-admissible documentation structured for submission to lenders, forensic committees, or the NCLT." }
    ],
    outcomes: [
      "Quantified Loss Estimation",
      "Legal-Grade Evidence",
      "Lender Submission Ready",
      "Board-Level Reporting"
    ],
    whoGrid: [
    ],
    ctaPrimaryText: "Commission Fraud Analysis",
    ctaSecondaryText: "Confidential Inquiry",
    trustNote: "Fund diversion, shell entities, over-invoicing, and circular transactions identified across 8+ forensic mandates for PSU lenders.",
    closingTitle: "Discover what lies beneath the balance sheet.",
    closingDescription: "Our teams stand ready to guide you through your critical next moves."
  };

  return <ServicePageLayout {...data} />;
};

export default FraudIndicators;