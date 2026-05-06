import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const PreTransactionFinancialReadiness = () => {
  const data = {
    metaTitle: "Pre-Transaction Financial Readiness | Northrop India",
    metaDescription: "The deal you are about to enter will scrutinise three years you have already lived. We provide pre-transaction readiness.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Financial Advisory", link: null },
      { name: "Pre-Transaction", link: null }
    ],
    bannerTitle: <>The deal you are about to enter will scrutinise <span className="text-[#C4973B]">three years you have already lived.</span></>,
    bannerDescription: "Buyers and institutional investors do not read what you choose to disclose — they reconstruct what you didn't. Pre-transaction readiness is the difference between negotiating from a position of evidence and negotiating from a position of explanation.",
    primaryBtnText: "Get Readiness Advisory",
    secondaryBtnText: "Request a Diagnostic Diligence",
    svcNum: "FA — 03 /",
    svcTag: "Pre-Transaction Financial Readiness",
    svcH2: <>INDUSTRY-SPECIFIC READINESS FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "Pre-transaction readiness is the difference between negotiating from evidence and explanation. Here is what readiness failure looks like:",
    painLabel: "What readiness failures look like — by situation",
    painList: [
      { label: "Pre Series C/D Startups", text: "Revenue cuts, cohort tables, and unit economics rebuilt under pressure during diligence. 20–35% valuation cuts as new analyses surface mid-process." },
      { label: "Family Businesses Pre-Sale", text: "Personal expenses, related-party transactions, and inter-company flows revealed late. Buyers retrade or walk; deal certainty drops below 50%." },
      { label: "PE Exits", text: "Vendor due diligence prepared by auditors without buyer-lens. Buy-side QoE finds 8–15% EBITDA adjustments — value transfers to buyer." },
      { label: "Pre-IPO Issuers", text: "Financial restatements late in DRHP process. SEBI queries delay listing window; market window closes before issue." }
    ],
    delGrid: [
      { title: "Diagnostic Diligence", desc: "Buy-side simulation of QoE, working capital, debt-like items, and accounting policy tests — months before counter-parties see the company." },
      { title: "Financial Restatement & Normalisation", desc: "Historical financials restated to institutional grade — Ind-AS aligned, related-party normalised, exceptional items isolated." },
      { title: "Data Room Architecture", desc: "Information memorandum, data room, and management presentation built to buyer-analyst standard." },
      { title: "Negotiation Defensibility Pack", desc: "Pre-built defensibility on the 30–50 questions that compress value at the term-sheet table." }
    ],
    outcomes: [
      "Diligence Surprises Eliminated",
      "EBITDA Quality Defended",
      "Working Capital Normalised",
      "Restatement Risk Closed",
      "Buyer Retrade Prevented",
      "Deal Certainty Improved"
    ],
    whoGrid: [
      { title: "Founders & Promoters Pre-Sale", desc: "First-time sellers facing institutional buyers and structured processes." },
      { title: "PE-Backed Companies", desc: "Preparing for secondary, strategic exit, or IPO." },
      { title: "Pre-IPO Issuers", desc: "Preparing for SEBI and institutional investor scrutiny." },
      { title: "Family Businesses", desc: "Preparing for first institutional capital event." }
    ],
    ctaPrimaryText: "Get Readiness Advisory",
    ctaSecondaryText: "Request a Diagnostic Diligence",
    trustNote: "Northrop has advised on pre-transaction financial readiness for founders, PE-backed platforms, family businesses, and pre-IPO issuers across sectors.",
    closingTitle: "The diligence you don't run on yourself, the buyer will run on you. With less generous adjustments.",
    // closingDescription: "Every engagement starts with a confidential conversation."
  };

  return <ServicePageLayout {...data} />;
};

export default PreTransactionFinancialReadiness;
