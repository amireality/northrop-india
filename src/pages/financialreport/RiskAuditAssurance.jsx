import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const RiskAuditAssurancePage = () => {
  const data = {
    metaTitle: "Risk Audit & Assurance Consulting | Northrop India",
    metaDescription: "Protect your business with independent risk audit and assurance services. We identify control gaps, recover revenue leakage, and ensure regulatory readiness.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Risk Audit & Assurance", link: null }
    ],
    bannerTitle: <>Your auditor signs off.<br />Your board sleeps well.<br /> <span className="text-transparent bg-clip-text bg-[#C4973B]">Your risk is still there.</span></>,
    bannerDescription: "A statutory audit confirms compliance. It does not tell you where your business is bleeding, where controls are failing, or what will surface in the next RBI or regulatory inspection. Risk Audit and Assurance does.",
    primaryBtnText: "Request an Assurance Review",
    secondaryBtnText: "What's at stake",
    svcNum: "FR — 01 /",
    svcTag: "Risk Audit & Assurance Consulting",
    svcH2: <>The audit passed. The fraud was discovered <em className="italic text-[#C4973B] not-italic">six months later.</em></>,
    hookText: "Most companies confuse regulatory compliance with actual risk management. They are not the same. One protects you from the regulator. The other protects you from the business.",
    painLabel: "Who gets hurt — and how",
    painList: [
      { label: "Manufacturing & FMCG", text: "Physical stock reconciliation failures — inventory on paper, empty shelves in the warehouse. ₹2–15 Cr written off at year-end." },
      { label: "Banking & NBFC", text: "Internal audit sign-offs on loan files that were never physically verified — NPAs that could have been caught 12 months earlier." },
      { label: "Real Estate", text: "Revenue recognised on projects that don't meet RERA completion milestones — restatements that shake investor confidence." },
      { label: "Professional Services", text: "Billing leakages and unbilled work — revenue that exists in delivery but never reaches the invoice. Firms losing 8–12% of topline silently." },
      { label: "Healthcare", text: "Procurement audit failures — consumables billed at 2× rate, expired stock written off as sold, vendor-doctor kickbacks undetected for years." }
    ],
    delGrid: [
      { title: "Risk-Based Internal Audit", desc: "Audit scope built around your highest-risk areas — not a generic checklist. Every finding is ranked by financial impact and probability." },
      { title: "Control Framework Design", desc: "Identifying where controls are missing, weak, or bypassed — and designing replacements that are operationally practical, not just theoretically sound." },
      { title: "Process Audit & Leakage Quantification", desc: "Revenue leakage, procurement overruns, and approval bypass — identified, quantified in rupees, and mapped to the responsible process owner." },
      { title: "Assurance Report for Board / Lenders", desc: "A structured, auditor-grade report suitable for board presentation, lender covenant submission, or regulatory review." }
    ],
    outcomes: [
      "Risk Prioritised by Financial Impact",
      "Control Gaps Documented",
      "Revenue Leakage Recovered",
      "Board-Ready Assurance Report",
      "Lender Covenant Compliance",
      "Regulatory Inspection Ready"
    ],
    whoGrid: [
      { title: "Boards & Audit Committees", desc: "Seeking independent assurance beyond the statutory auditor — a second opinion that protects board members personally." },
      { title: "CFOs & Finance Heads", desc: "Who want to close control gaps before they are found by auditors, regulators, or a lender's diligence team." },
      { title: "Banks & Lenders", desc: "Commissioning borrower assurance reviews as part of credit monitoring or post-disbursement fund-use verification." },
      { title: "PE Funds & Investors", desc: "Who need an independent assurance review on a portfolio company before a fresh capital infusion or exit." }
    ],
    ctaPrimaryText: "Commission an Assurance Review",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has conducted risk and assurance reviews for companies with ₹100 Cr — ₹2,200 Cr turnover across manufacturing, services, and financial sectors.",
    closingTitle: "The risk that isn't audited is the risk that materialises.",
    closingDescription: "Every engagement starts with a confidential scoping call. No obligation. Just a clear assessment of where your highest exposures sit."
  };

  return <ServicePageLayout {...data} />;
};

export default RiskAuditAssurancePage;
