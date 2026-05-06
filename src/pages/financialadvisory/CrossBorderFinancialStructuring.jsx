import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const CrossBorderFinancialStructuring = () => {
  const data = {
    metaTitle: "Cross-Border Financial Structuring | Northrop India",
    metaDescription: "Your structure was built for yesterday's tax regime. We redesign cross-border structures for today.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Financial Advisory", link: null },
      { name: "Cross-Border Structuring", link: null }
    ],
    bannerTitle: <>Your structure was built for yesterday's tax regime, <span className="text-[#C4973B]">yesterday's investors, and yesterday's regulator.</span></>,
    bannerDescription: "Cross-border structures accumulate. Mauritius, Singapore, Netherlands, Cayman — each layer made sense at the time. Tax treaties evolved, GAAR arrived, BEPS rules tightened, RBI and FEMA framework hardened. The structure that protected you yesterday is the one that exposes you today.",
    primaryBtnText: "Get Structuring Advisory",
    secondaryBtnText: "Request a Structure Review",
    svcNum: "FA — 07 /",
    svcTag: "Cross-Border Financial Structuring",
    svcH2: <>INDUSTRY-SPECIFIC STRUCTURE FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "The structure that protected you yesterday is the one that exposes you today. Here is what cross-border failure looks like:",
    painLabel: "What structure failures look like — by entity type",
    painList: [
      { label: "Indian Promoter Holdcos Abroad", text: "Mauritius and Singapore SPVs without commercial substance. GAAR and POEM exposure crystallises during transactions; tax leakage of 15–25% on exit." },
      { label: "Foreign-Invested Indian Subsidiaries", text: "Inter-company royalties, management fees, and TP positions inconsistent with substance. Indian transfer-pricing assessments add 200–400 bps tax cost." },
      { label: "Diaspora & Global Indian Founders", text: "Personal asset structures (trusts, foundations, LPs) misaligned with FEMA and Indian tax residence rules. Estate and succession planning collapses on first audit." },
      { label: "ODI / FDI Heavy Groups", text: "Structures inconsistent with current ODI Rules 2022 and FEMA framework. Compounding penalties accrue silently." }
    ],
    delGrid: [
      { title: "Cross-Border Structure Diagnostic", desc: "Map of all cross-border entities, flows, instruments, and substance — against current tax, FEMA, GAAR, BEPS, and ODI/FDI framework." },
      { title: "Structure Re-architecture", desc: "Re-design of holding, financing, and operating structures — substance-aligned, treaty-defensible, and regulator-resilient." },
      { title: "Inter-Company & TP Architecture", desc: "Intra-group pricing, royalties, financing, and management fees — TP-defensible and aligned to value chain." },
      { title: "Migration & Transition Plan", desc: "Phased re-domiciliation, restructuring, and exit pathway — tax, regulatory, and lender-aligned." }
    ],
    outcomes: [
      "Substance & Treaty Aligned",
      "GAAR/POEM Defensible",
      "TP Architecture",
      "FEMA Compliant",
      "Estate-Planning Coherent",
      "Exit-Tax Optimised"
    ],
    whoGrid: [
      { title: "Indian Promoters with Offshore Holdcos", desc: "Facing regulatory or tax inflection — GAAR, POEM, BEPS, ODI." },
      { title: "Multinational Indian Subsidiaries", desc: "Preparing for transfer pricing or POEM scrutiny." },
      { title: "Diaspora Founders", desc: "Restructuring personal and business holdings across jurisdictions." },
      { title: "PE-Backed Cross-Border Groups", desc: "Preparing for cross-border exit or refinancing." }
    ],
    ctaPrimaryText: "Get Structuring Advisory",
    ctaSecondaryText: "Request a Structure Review",
    trustNote: "Northrop has advised on cross-border financial structuring for Indian promoter groups, multinational subsidiaries, diaspora founders, and PE-backed platforms.",
    closingTitle: "Yesterday's structure is today's contingency. Eventually, tomorrow's settlement.",
    // closingDescription: "Every engagement starts with a confidential conversation."
  };

  return <ServicePageLayout {...data} />;
};

export default CrossBorderFinancialStructuring;
