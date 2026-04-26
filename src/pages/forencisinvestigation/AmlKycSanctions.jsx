import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const AmlKycSanctionsPage = () => {
  const data = {
    metaTitle: "AML, KYC & Sanctions Consulting | Northrop India",
    metaDescription: "Ensure AML compliance with forensic KYC remediation, transaction monitoring design, and sanctions screening for banks, fintech, and professional firms.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Forensic Investigations", link: null }
    ],
    bannerTitle: <>Your KYC is completed at onboarding.<br /><span className="text-[#C4973B]">Your customer has changed significantly since then.</span></>,
    bannerDescription: "Anti-Money Laundering compliance is not a one-time customer verification exercise. It is a continuous monitoring obligation — one where gaps create regulatory exposure, enforcement risk, and reputational damage that no KYC form can protect you from retrospectively.",
    primaryBtnText: "Commission AML / KYC Assessment",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "FI — 07 /",
    svcTag: "AML KYC & Sanctions Consulting Review Services",
    svcH2: <>The RBI inspection found SAR filing deficiencies across 340 customer accounts. <em className="italic text-blue-600 not-italic font-serif">The KYC was complete. The monitoring wasn't.</em></>,
    hookText: "AML compliance failure is the fastest path to regulatory action for financial institutions — and increasingly for fintech, real estate, and professional service firms. The question is never whether your KYC forms were complete. It is whether your monitoring caught what the KYC missed.",
    painLabel: "AML / KYC failures that trigger enforcement — by regulated sector",
    painList: [
      { label: "Banks & Scheduled Commercial Banks", text: "SAR filing rate significantly below peer benchmarks — RBI inspection finds systemic transaction monitoring failure. Penalty and mandatory remediation programme." },
      { label: "NBFCs", text: "Customer risk categorisation not updated post-onboarding — high-risk customers reclassified to medium-risk after initial filing to reduce monitoring overhead. Regulatory action on discovery." },
      { label: "Payment Aggregators & Fintech", text: "Merchant onboarding KYC completed digitally — beneficial ownership not verified for corporate merchants. Used for layering. ED notice and licence suspension." },
      { label: "Real Estate", text: "PMLA registration and STR filing obligations for real estate agents — not complied with. ED investigation into two transactions identified through industry-wide review." },
      { label: "Professional Services (CA, CS, Lawyers)", text: "PMLA obligations for designated non-financial businesses and professions — not implemented. Regulatory guidance being enforced more actively." }
    ],
    delGrid: [
      { title: "AML Framework Review & Gap Analysis", desc: "Assessment of your existing AML policies, controls, and monitoring systems against RBI/FIU-IND requirements — with a prioritised gap remediation plan." },
      { title: "KYC Remediation Programme", desc: "Systematic review and remediation of existing customer KYC files — prioritised by risk category, with documentation to the standard required for regulatory inspection." },
      { title: "Transaction Monitoring Design", desc: "Designing or reviewing transaction monitoring rules, alert thresholds, and SAR filing processes — to ensure genuine suspicious activity is identified and reported." },
      { title: "Sanctions Screening Implementation", desc: "Implementing or reviewing sanctions screening processes against OFAC, UN, EU, and domestic lists — for customer onboarding and ongoing monitoring." }
    ],
    outcomes: [
      "RBI Inspection Ready",
      "SAR Filing Compliant",
      "KYC Files Remediated",
      "Transaction Monitoring Operational",
      "Sanctions Screening Implemented",
      "PMLA Obligations Met"
    ],
    whoGrid: [
      { title: "Banks & NBFCs Under RBI Oversight", desc: "Regulated financial institutions subject to RBI AML guidelines — needing independent review of their AML framework before the next inspection." },
      { title: "Fintechs & Payment Aggregators", desc: "Digital financial services companies with RBI payment system licences — facing increasing AML scrutiny as the regulatory focus intensifies." },
      { title: "Real Estate & High-Value Goods Dealers", desc: "Entities subject to PMLA registration obligations as DNFBPs — needing compliance frameworks for their AML/STR filing obligations." },
      { title: "Professional Firms (CAs, CS, Legal)", desc: "Designated non-financial businesses and professions subject to emerging PMLA obligations — needing compliance frameworks appropriate to their practice." }
    ],
    ctaPrimaryText: "Commission AML / KYC Assessment",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop provides AML framework reviews, KYC remediation, and sanctions compliance advisory — bringing forensic rigour to AML compliance for regulated and designated non-financial sector entities.",
    closingTitle: "AML compliance checked once at onboarding is not compliance. It is the beginning of an exposure.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default AmlKycSanctionsPage;
