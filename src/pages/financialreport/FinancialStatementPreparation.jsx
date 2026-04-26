import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const FinancialStatementPreparationPage = () => {
  const data = {
    metaTitle: "Financial Statement Preparation Services | Northrop India",
    metaDescription: "Professional preparation of standalone and consolidated financial statements. Investor-grade reporting that ensures clean auditor opinions and bankability.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Financial Statement Preparation", link: null }
    ],
    bannerTitle: <>Your financials represent<br />your business <br /> to everyone who  <span className=" text-[#C4973B]">matters.</span></>,
    bannerDescription: "Lenders, investors, acquirers, and regulators all make decisions based on your financial statements. If those statements are incomplete, inconsistently prepared, or non-compliant — the decisions they lead to will not be in your favour.",
    primaryBtnText: "Commission Statement Preparation",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "FR — 03 /",
    svcTag: "Financial Statement Preparation Services",
    svcH2: <>The bank declined the credit facility.<br />The reason was your <em className="italic text-[#C4973B] not-italic font-serif">financial statements.</em></>,
    hookText: "Most founders don't realise their financials are communicating something unintended — until a lender declines, an investor loses confidence, or an auditor issues a qualified opinion.",
    painLabel: "What poor financial statement preparation costs — by industry",
    painList: [
      { label: "SME & Mid-Market", text: "Financials prepared by the tax CA — optimised for minimum tax, not for bankability. Lenders see thin margins and high withdrawals. Credit declined or heavily collateralised." },
      { label: "Startups & Growth Companies", text: "Investor-ready financials requested for Series A. Books are in Tally, unreconciled, missing disclosures. Due diligence stalls. Deal falls through." },
      { label: "Family Businesses", text: "Multiple entities, intercompany transactions, and no consolidated view. PE buyer can't understand the structure. Price reduced 20% for complexity premium." },
      { label: "Export & Manufacturing", text: "CARO non-compliance, missing schedule disclosures, incorrect depreciation methods. Auditor issues qualifications. Banking relationships at risk." },
      { label: "Real Estate", text: "Project-wise financial statements absent. Lender can't assess project health individually. Consortium banking applications rejected or significantly delayed." }
    ],
    delGrid: [
      { title: "Ind-AS Compliant Financial Statements", desc: "Complete P&L, balance sheet, cash flow, and statement of changes in equity — prepared to Ind-AS standards with full disclosure notes." },
      { title: "Consolidated Financial Statements", desc: "Group consolidation across subsidiaries, associates, and joint ventures — eliminating intercompany transactions, correctly applying consolidation standards." },
      { title: "Lender-Ready & Investor-Grade Presentation", desc: "Financial statements structured for the specific audience — bank credit proposals, PE data rooms, or SEBI filings — each with the right level of disclosure." },
      { title: "CARO & Disclosure Compliance", desc: "Full CARO 2020 compliance, related party disclosures, segment reporting, and all Schedule III requirements — nothing that triggers an auditor qualification." }
    ],
    outcomes: [
      "Lender-Ready Financials",
      "Investor-Grade Presentation",
      "CARO 2020 Compliant",
      "Audit-Ready Books",
      "Clean Auditor Opinion",
      "Consolidated Group View"
    ],
    whoGrid: [
      { title: "Companies Seeking Bank Credit", desc: "Businesses preparing financial statements specifically for lender appraisal — structured to reflect true creditworthiness, not just tax efficiency." },
      { title: "Businesses Preparing for Investment", desc: "Companies ahead of a fundraise, acquisition, or PE process who need institutional-grade historical financials without gaps or qualifications." },
      { title: "Group Companies Needing Consolidation", desc: "Multi-entity structures where standalone financials exist but no consolidated view has ever been prepared — creating opacity for all stakeholders." },
      { title: "Companies Transitioning to Ind-AS", desc: "Businesses required to migrate from Indian GAAP to Ind-AS — needing restated comparatives and transition date balance sheets." }
    ],
    ctaPrimaryText: "Commission Financial Statements",
    ctaSecondaryText: "Discuss Your Requirements",
    trustNote: "Northrop prepares financial statements for companies from ₹5 Cr to ₹500 Cr+ revenue — standalone, consolidated, and group-level — across sectors.",
    closingTitle: "Financials that communicate clearly open doors. Financials that don't, close them.",
    closingDescription: "Let us understand your business and your audience — and build financials that work for both."
  };

  return <ServicePageLayout {...data} />;
};

export default FinancialStatementPreparationPage;
