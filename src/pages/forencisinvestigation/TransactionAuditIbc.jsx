import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const TransactionAuditIbcPage = () => {
  const data = {
    metaTitle: "IBC Transaction Audit | Northrop India",
    metaDescription: "Expert PUFE transaction audits under the Insolvency and Bankruptcy Code. We identify preferential, undervalued, and fraudulent transactions for NCLT submission.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Forensic Investigations", link: null }
    ],
    bannerTitle: <>The company is in CIRP.<br />Assets were moved before admission.<br /> <span className="text-[#C4973B]">Where did they go?</span></>,
    bannerDescription: "Under the Insolvency and Bankruptcy Code 2016, Resolution Professionals and Liquidators are required to examine transactions in the two-year look-back period for Preferential, Undervalued, Fraudulent, and Extortionate transactions. What is recovered in this process can be the difference between creditor recovery and total loss.",
    primaryBtnText: "Commission IBC Transaction Audit",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "FI — 04 /",
    svcTag: "Transaction Audit under IBC",
    svcH2: <>The resolution value was ₹40 Cr. <em className="italic text-blue-600 not-italic font-serif">₹25 Cr had been moved to related parties in the 18 months before CIRP.</em></>,
    hookText: "PUFE transactions represent value that was extracted from the corporate debtor before creditors could protect themselves. The transaction audit is the legal and forensic mechanism to identify, quantify, and recover that value — and Northrop has done this before the NCLT.",
    painLabel: "What PUFE transactions look like — and what they cost creditors",
    painList: [
      { label: "Preferential Transactions", text: "Payments to related-party creditors in the 2-year look-back period — money that should have stayed in the estate but was preferentially paid out before CIRP." },
      { label: "Undervalued Transactions", text: "Assets sold at below fair value to promoter-linked entities — land, plant, inventory, or IP transferred at a fraction of true value before insolvency." },
      { label: "Fraudulent Transactions", text: "Transactions designed to defraud creditors — creating fictitious liabilities, inflating related-party payables, or generating false security interests." },
      { label: "Extortionate Credit Transactions", text: "Loan arrangements with interest rates or security terms that were extortionate — providing a basis for setting aside those terms." },
      { label: "Concealed Assets", text: "Assets not disclosed in the information memorandum — discovered through forensic transaction analysis and asset tracing." }
    ],
    delGrid: [
      { title: "2-Year Look-Back Transaction Review", desc: "Systematic examination of all significant transactions in the look-back period — identifying transactions that meet the criteria for PUFE avoidance." },
      { title: "PUFE Analysis Report", desc: "Structured forensic report documenting identified PUFE transactions with evidence, legal basis, and quantified amount — for submission to the NCLT." },
      { title: "Related Party Mapping", desc: "Identifying all related parties of the corporate debtor — building the map of entities to which value was transferred before CIRP." },
      { title: "Asset Tracing", desc: "Tracing assets that left the estate to their current location — providing the RP with a basis for recovery applications." }
    ],
    outcomes: [
      "PUFE Transactions Identified",
      "NCLT Application Ready",
      "Related Parties Mapped",
      "Assets Traced",
      "Creditor Recovery Maximised",
      "IBC Compliant Report"
    ],
    whoGrid: [
      { title: "Resolution Professionals", desc: "RPs required by IBC to examine pre-CIRP transactions and apply to the NCLT for avoidance of PUFE transactions." },
      { title: "Liquidators", desc: "Liquidators conducting transaction reviews as part of the liquidation process — identifying assets recoverable for the estate." },
      { title: "Committee of Creditors", desc: "CoCs seeking independent forensic analysis of pre-CIRP transactions to maximise recovery from the resolution process." },
      { title: "Financial Creditors & Banks", desc: "Lenders who suspect pre-CIRP asset stripping and need forensic evidence to support avoidance applications before the NCLT." }
    ],
    ctaPrimaryText: "Commission IBC Transaction Audit",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has served as Transaction Auditor for CIRP proceedings — including a Radisson Blu hotel franchise (₹80 Cr+ exposure) — with PUFE analysis reports filed before the NCLT.",
    closingTitle: "Every rupee moved before CIRP is a rupee creditors may never see. Transaction audit is the mechanism to get it back.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default TransactionAuditIbcPage;
