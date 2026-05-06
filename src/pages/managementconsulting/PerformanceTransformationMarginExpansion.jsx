import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const PerformanceTransformationMarginExpansion = () => {
  const data = {
    metaTitle: "Performance Transformation & Margin Expansion | Northrop India",
    metaDescription: "Cost programmes save what is visible. Margin lives where no one is looking. We build structural margin architecture.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Management Consulting", link: null },
      { name: "Performance Transformation", link: null }
    ],
    bannerTitle: <>Cost programmes save what is visible. <span className="text-[#C4973B]">Margin lives where no one is looking.</span></>,
    bannerDescription: "Most cost programmes are spreadsheet exercises — across-the-board cuts that erode capability and return next quarter. Real margin expansion is structural: pricing, mix, complexity, and process. It survives the next cycle.",
    primaryBtnText: "Get Margin Advisory",
    secondaryBtnText: "Request a Margin Diagnostic",
    svcNum: "MC — 06 /",
    svcTag: "Performance Transformation & Margin Expansion",
    svcH2: <>INDUSTRY-SPECIFIC MARGIN FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "Most cost programmes are spreadsheet exercises that erode capability. Real margin expansion is structural. Here is what margin failure looks like across industries:",
    painLabel: "What margin failures look like — by industry",
    painList: [
      { label: "Manufacturing & Industrial", text: "18–25% margin loss to product-line proliferation. SKUs that contribute less than 1% of revenue absorb 8–12% of overhead. No SKU-level economic-profit view exists." },
      { label: "Consumer & Retail", text: "Trade promotion budgets unmeasured at SKU and account level. 30–40% of trade spend has zero or negative incremental margin." },
      { label: "B2B Services", text: "Pricing leakage at deal-desk level. Discount approvals decentralised; gross margin variance across similar deals is 10–15 percentage points." },
      { label: "Financial Services", text: "Operating expense ratio benchmarks ignored. Cost-to-income drifts 400–700 bps above peers; ROE narrative is vulnerable to a single rate cycle." }
    ],
    delGrid: [
      { title: "Margin Diagnostic", desc: "SKU, customer, channel, and process economic-profit view — root-cause, not symptom." },
      { title: "Pricing & Commercial Architecture", desc: "Pricing model redesign — segmentation, deal-desk discipline, discount governance, and value-based pricing." },
      { title: "Complexity & Footprint Reduction", desc: "SKU rationalisation, network optimisation, and shared-service consolidation — with stranded-cost discipline." },
      { title: "Process & Organisational Lean", desc: "End-to-end process redesign with measurable economic outcome — not function-by-function cost cuts." }
    ],
    outcomes: [
      "200–500 bps Margin Expansion",
      "Pricing Power Restored",
      "SKU Economics Visible",
      "Stranded Cost Eliminated",
      "Cost-to-Income Reset",
      "Structurally Defensible"
    ],
    whoGrid: [
      { title: "Mid-Cap Manufacturers", desc: "Where margin is leaking through complexity, pricing, and process — not headcount." },
      { title: "Consumer Companies", desc: "Where trade spend has detached from incremental margin and SKU economics are invisible." },
      { title: "B2B Services Firms", desc: "Where pricing discipline has eroded and discount governance is decentralised." },
      { title: "Listed Companies", desc: "Where the equity story needs a sustainable margin re-rating, not a one-quarter cost cut." }
    ],
    ctaPrimaryText: "Get Margin Advisory",
    ctaSecondaryText: "Request a Margin Diagnostic",
    trustNote: "Northrop has advised on performance transformation and margin expansion mandates across manufacturing, consumer, B2B services, and financial services in India.",
    closingTitle: "Cost cuts return next quarter. Margin architecture compounds.",
    // closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default PerformanceTransformationMarginExpansion;
