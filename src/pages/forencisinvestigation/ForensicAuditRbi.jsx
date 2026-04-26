import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const ForensicAuditRbiPage = () => {
  const data = {
    metaTitle: "RBI Mandated Forensic Audit | Northrop India",
    metaDescription: "Engage empanelled experts for RBI-mandated forensic audits. We provide reporting, CRILC compliance, and wilful default assessments.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Forensic Investigations", link: null }
    ],
    bannerTitle: <>The RBI has directed a<br />forensic audit <br /> of  your borrower account.<br /> <span className="text-[#C4973B]">You have 30 days.</span></>,
    bannerDescription: "RBI-mandated forensic audits are triggered for accounts classified as fraud or where suspected wilful default is detected. They are not voluntary. They are not advisory. They are a formal regulatory process — and the findings go to the RBI, the CBI, and the borrower's entire banking consortium.",
    primaryBtnText: "Engage for RBI Forensic Audit",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "FI — 03 /",
    svcTag: "Forensic Audit Services Under RBI",
    svcH2: <>The consortium bank ordered the forensic audit. <em className="italic text-blue-600 not-italic font-serif">The findings will determine your recovery strategy.</em></>,
    hookText: "RBI's Master Directions on Fraud Classification require forensic audits for accounts above ₹3 Cr where fraud is suspected. The forensic auditor's report triggers fraud classification, CRILC reporting, and CBI referral. Getting it right — or challenging findings that are wrong — requires deep regulatory expertise.",
    painLabel: "What RBI forensic audits uncover — and what's at stake",
    painList: [
      { label: "Fund Diversion", text: "End-use of working capital or term loans verified against actual application — diversion to promoter entities, sister companies, or personal accounts identified and quantified." },
      { label: "Misrepresentation to Lenders", text: "Stock statements, book debt statements, and financial statements submitted to banks verified for accuracy — fabrication identified and documented." },
      { label: "Wilful Default Determination", text: "Whether the borrower had the capacity to repay but chose not to — a finding with profound personal consequences for promoters including criminal prosecution." },
      { label: "Related Party Transactions", text: "Whether funds were moved to related parties at non-arm's-length terms — creating a recoverable claim against those entities." },
      { label: "Asset Stripping", text: "Whether assets pledged as collateral were transferred, encumbered, or disposed of without lender consent — undermining recovery prospects." }
    ],
    delGrid: [
      { title: "RBI-Compliant Forensic Audit Report", desc: "Forensic audit conducted and reported in accordance with RBI Master Directions on Fraud Classification — suitable for consortium submission and regulatory filing." },
      { title: "Fund Flow Analysis", desc: "Complete reconstruction of fund flows from loan disbursement — showing end-use, diversion, and beneficiary entities with transaction-level evidence." },
      { title: "Wilful Default Assessment", desc: "Structured analysis of the borrower's capacity to repay versus actual payment history — supporting or rebutting wilful default classification." },
      { title: "CRILC Reporting Support", desc: "Support for lenders in completing Central Repository of Information on Large Credits reporting consequent to forensic findings." }
    ],
    outcomes: [
      "RBI-Compliant Report",
      "CRILC Reporting Ready",
      "Fraud Classification Support",
      "Recovery Strategy Informed",
      "CBI Referral Support",
      "Consortium Submission Ready"
    ],
    whoGrid: [
      { title: "Banks & Financial Institutions (Lender Side)", desc: "Lenders required by RBI to commission forensic audits of suspected fraud accounts — needing an empanelled, experienced forensic auditor." },
      { title: "Resolution Professionals (IBC)", desc: "RPs who have identified potential fraud in CIRP accounts and require a forensic audit report to support PUFE applications to the NCLT." },
      { title: "Borrowers Facing Forensic Audit", desc: "Companies whose accounts have been referred for forensic audit — needing independent legal and financial support to respond to findings." },
      { title: "Consortium Lead Banks", desc: "Lead arrangers in consortium lending who must coordinate the forensic audit process and reporting across multiple lenders." }
    ],
    ctaPrimaryText: "Engage for RBI Forensic Audit",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has conducted forensic reviews and transaction audits for PSU bank mandates — with experience identifying fund diversion, misrepresentation, and related-party transactions across banking sector cases.",
    closingTitle: "An RBI forensic audit shapes the recovery. The quality of the forensic work shapes the audit.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default ForensicAuditRbiPage;
