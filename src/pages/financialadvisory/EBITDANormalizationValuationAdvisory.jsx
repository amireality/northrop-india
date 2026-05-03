import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const EBITDANormalizationValuationAdvisory = () => {
  const data = {
    metaTitle: "EBITDA Normalization & Valuation Advisory | Northrop India",
    metaDescription: "You have an EBITDA number. Buyers, lenders, and auditors have a different one. We build institutional-grade EBITDA.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Financial Advisory", link: null },
      { name: "EBITDA Normalization", link: null }
    ],
    bannerTitle: <>You have an EBITDA number. <span className="text-[#C4973B]">Buyers, lenders, and auditors have a different one.</span></>,
    bannerDescription: "There is no such thing as a single EBITDA. Every reader — buyer, lender, ratings agency, regulator — adjusts for what they have learned to mistrust. Without an institutional-grade EBITDA, every conversation starts with a 10–30% discount you have to argue back.",
    primaryBtnText: "Get Valuation Advisory",
    secondaryBtnText: "Request a QoE Diagnostic",
    svcNum: "FA — 06 /",
    svcTag: "EBITDA Normalization & Valuation Advisory",
    svcH2: <>INDUSTRY-SPECIFIC VALUATION FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "Without an institutional-grade EBITDA, every conversation starts with a 10–30% discount. Here is what valuation failure looks like:",
    painLabel: "What valuation failures look like — by situation",
    painList: [
      { label: "Founder-Led Businesses", text: "Personal expenses, founder remuneration, and family overhead embedded in P&L. Buy-side QoE removes 12–25% of reported EBITDA." },
      { label: "Real Estate & Construction", text: "Revenue recognition aggressive; project costs deferred. Restated EBITDA collapses 20–40%; lender covenants breach retroactively." },
      { label: "SaaS & Technology", text: "Capitalised R&D and customer acquisition without amortisation discipline. Adjusted EBITDA looks attractive — until amortisation is added back." },
      { label: "Diversified Groups", text: "Inter-company margins, RPT pricing, and management fees inflate group EBITDA. Buyers strip them out at term-sheet stage." }
    ],
    delGrid: [
      { title: "Quality of Earnings Diagnostic", desc: "Independent QoE — non-recurring, non-operating, and one-time adjustments isolated; sustainable EBITDA defined." },
      { title: "Valuation Bridge & Defensibility", desc: "Reported-to-adjusted EBITDA bridge with defensible, evidence-based adjustments — buyer- and lender-ready." },
      { title: "Valuation Methodology & Range", desc: "DCF, trading comps, transaction comps, and SOTP — triangulated to a defensible range." },
      { title: "Negotiation Architecture", desc: "Pre-built positions on the 20–30 EBITDA adjustments most likely to be challenged at the negotiation table." }
    ],
    outcomes: [
      "EBITDA Defended",
      "Valuation Range Established",
      "Buyer Retrade Prevented",
      "Lender Confidence",
      "Audit Defensibility",
      "Negotiation Discipline"
    ],
    whoGrid: [
      { title: "Companies Pre-Sale or Exit", desc: "Needing defensible EBITDA before counter-parties define it for them." },
      { title: "Promoter-Led Businesses", desc: "Where personal-corporate boundaries need to be re-drawn for institutional readers." },
      { title: "PE Portfolio Companies", desc: "Preparing for secondary or strategic exit." },
      { title: "CFOs Pre-Refinancing", desc: "Where covenants are EBITDA-driven and headroom must be defensible." }
    ],
    ctaPrimaryText: "Get Valuation Advisory",
    ctaSecondaryText: "Request a QoE Diagnostic",
    trustNote: "Northrop has advised on EBITDA normalisation and valuation advisory for founders, PE-backed platforms, family businesses, and listed companies in India.",
    closingTitle: "EBITDA is a story. Make sure you are telling it. Not the buyer.",
    // closingDescription: "Every engagement starts with a confidential conversation."
  };

  return <ServicePageLayout {...data} />;
};

export default EBITDANormalizationValuationAdvisory;
