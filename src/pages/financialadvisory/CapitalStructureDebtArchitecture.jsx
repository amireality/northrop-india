import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const CapitalStructureDebtArchitecture = () => {
  const data = {
    metaTitle: "Capital Structure & Debt Architecture | Northrop India",
    metaDescription: "Capital structure is not the residual of past financing decisions — it is the operating envelope of the business.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Financial Advisory", link: null },
      { name: "Capital Structure", link: null }
    ],
    bannerTitle: <>Your debt was raised one tranche at a time.<br /> <span className="text-[#C4973B]">It now constrains every decision you take.</span></>,
    bannerDescription: "Capital structure is not the residual of past financing decisions — it is the operating envelope of the business. A balance sheet built tactically, lender-by-lender, eventually decides what the company can and cannot do.",
    primaryBtnText: "Get Capital Advisory",
    secondaryBtnText: "Request a Debt Review",
    svcNum: "FA — 01 /",
    svcTag: "Capital Structure & Debt Architecture",
    svcH2: <>INDUSTRY-SPECIFIC CAPITAL FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "A balance sheet built tactically eventually decides what the company can and cannot do. Here is what capital structure failure looks like across industries:",
    painLabel: "What capital failures look like — by industry",
    painList: [
      { label: "Real Estate & Infrastructure", text: "Project-level debt aggregated to corporate level without tenor or covenant alignment. Refinancing risk concentrated in 12–18 month windows; lenders re-price 200–400 bps in stress." },
      { label: "Manufacturing & Industrial", text: "Working capital limits and term debt from the same banks; collateral cross-pledged. Capacity expansion requires fresh consortia — and 9–12 months of negotiation." },
      { label: "NBFCs & Financial Services", text: "ALM mismatch hidden by short-tenor borrowings against long-tenor assets. RBI scrutiny exposes the gap; ratings agencies re-rate one to two notches." },
      { label: "Mid-Cap Listed Companies", text: "Cost of debt 150–300 bps above optimal because of lender-mix and instrument-mix decisions. Equity story discounted accordingly." }
    ],
    delGrid: [
      { title: "Capital Structure Diagnostic", desc: "Tenor, instrument, lender, covenant, and pricing audit against business operating profile and cash flow architecture." },
      { title: "Debt Re-architecture Plan", desc: "Re-design of capital stack — bank, NBFC, NCD, ECB, mezzanine, and structured instruments — aligned to business cycle and risk profile." },
      { title: "Covenant & Lender Negotiation", desc: "Pre-emptive renegotiation of covenants, MFNs, and security structures — before, not during, stress." },
      { title: "Rating & Investor Communication", desc: "Independent rating agency narrative and lender-investor communication architecture." }
    ],
    outcomes: [
      "100–300 bps Cost-of-Debt Cut",
      "Refinancing Risk Eliminated",
      "Covenant Headroom Restored",
      "ALM Aligned",
      "Rating Narrative Strengthened",
      "Capital Flexibility Restored"
    ],
    whoGrid: [
      { title: "Companies Refinancing in 12–18 Months", desc: "Where structure must be reset, not just rolled." },
      { title: "NBFCs & Financial Services", desc: "Where ALM and liability mix invite regulatory and ratings risk." },
      { title: "PE-Backed Companies", desc: "Preparing capital structure for exit or recapitalisation." },
      { title: "Mid-Cap Listed Companies", desc: "Where cost of debt is dragging the equity multiple." }
    ],
    ctaPrimaryText: "Get Capital Advisory",
    ctaSecondaryText: "Request a Debt Review",
    trustNote: "Northrop has advised on capital structure restructuring and debt architecture mandates across real estate, infrastructure, NBFCs, manufacturing, and listed mid-caps.",
    closingTitle: "Your capital structure is a strategy. The question is whose strategy it is.",
    // closingDescription: "Every engagement starts with a confidential conversation."
  };

  return <ServicePageLayout {...data} />;
};

export default CapitalStructureDebtArchitecture;
