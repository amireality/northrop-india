import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const MgmtAccountScrutiny = () => {
  const data = {
    metaTitle: "Management Account Scrutiny | Northrop",
    metaDescription: "The gap between management accounts and audited financials is where deals unravel, credit decisions collapse, and boards get blindsided. Management Account Scrutiny closes that gap.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Due Diligence", link: "/services/due-diligence" },
      { name: "Management Account Scrutiny", link: null }
    ],
    bannerTitle: <>Management Account <br /><span className=" text-[#C4973B]">Scrutiny</span></>,
    bannerDescription: "Bridge the gap between management reports and audited reality.",
    primaryBtnText: "Scrutinise Management Accounts",
    secondaryBtnText: "Scope a Review",
    svcNum: "08 /",
    svcTag: "Management Account Scrutiny",
    svcH2:    <span dangerouslySetInnerHTML={{ __html:  `Management accounts show ₹8 Cr EBITDA.<br/>Audited accounts show <em class="italic text-[#C4973B]">₹4.2 Cr.</em>`}} />,
    hookText: "The gap between management accounts and audited financials is where deals unravel, credit decisions collapse, and boards get blindsided. Management Account Scrutiny closes that gap.",
    painLabel: "Why management accounts cannot be trusted at face value",
    painList: [
      { label: "", text: "Revenue recognised on dispatch — not delivery, not cash, not contract milestone" },
      { label: "", text: "Provisions reversed to inflate monthly profitability before board presentations" },
      { label: "", text: "Depreciation excluded from management P&L entirely without disclosure" },
      { label: "", text: "Intercompany transactions included in standalone revenue — systematic double counting" },
      { label: "", text: "One-time gains presented as recurring — EBITDA inflated by 25-40% at a stroke" }
    ],
    delGrid: [
      { title: "Statutory vs. MIS Reconciliation", desc: "Line-by-line reconciliation between management accounts and audited financials — every divergence explained clearly." },
      { title: "Accounting Policy Audit", desc: "Revenue recognition, provisioning, depreciation, and capitalisation policies reviewed for consistency and Ind-AS compliance." },
      { title: "Normalised EBITDA Build", desc: "A clean, adjusted EBITDA bridge from management accounts to a fully defensible, investor-grade earnings figure." },
      { title: "Monthly Trend Analysis", desc: "Identifying seasonal patterns, one-time items, and unusual monthly movements within the management P&L." }
    ],
    outcomes: [
      "True Earnings Visibility",
      "EBITDA Integrity Assured",
      "Accounting Policy Clarity",
      "Board-Ready Reporting"
    ],
    whoGrid: [
    ],
    ctaPrimaryText: "Scrutinise Management Accounts",
    ctaSecondaryText: "Scope a Review",
    trustNote: "Critical for PE investors, lenders, and boards without real-time access to auditor-verified financials.",
    closingTitle: "Align your data with reality.",
    closingDescription: "Our teams stand ready to guide you through your critical next moves."
  };

  return <ServicePageLayout {...data} />;
};

export default MgmtAccountScrutiny;