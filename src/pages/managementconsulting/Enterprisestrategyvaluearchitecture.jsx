import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const Enterprisestrategyvaluearchitecture = () => {
  const data = {
    metaTitle: "Enterprise Strategy & Value Architecture | Northrop India",
    metaDescription: "Strategy is the architecture through which capital, talent, and time are allocated. We help you build strategy that survives scrutiny.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Management Consulting", link: null },
      { name: "Enterprise Strategy", link: null }
    ],
    bannerTitle: <>You have a strategy deck.<br /> <span className="text-[#C4973B]"> The market still treats you like a transaction.</span></>,
    bannerDescription: "Strategy is not a planning ritual — it is the architecture through which capital, talent, and time are allocated. When that architecture is decorative, every operating decision becomes a debate, and every funding round becomes an excavation.",
    primaryBtnText: "Get Strategy Advisory",
    secondaryBtnText: "Request a Strategic Diagnostic",
    svcNum: "MC — 01 /",
    svcTag: "Enterprise Strategy & Value Architecture",
    svcH2: <>INDUSTRY-SPECIFIC STRATEGY FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "When strategic architecture is decorative, operating decisions become a debate, and funding rounds become an excavation. Here is what strategy failures look like across industries:",
    painLabel: "What strategy failures look like — by industry",
    painList: [
      { label: "Real Estate & Infrastructure", text: "Land bank and project commitments made on deal availability, not portfolio logic. Capital concentrated in 18–24 month cycles with no economic-profit screen. IRR dispersion of 600–900 bps across the book — buyers underwrite the worst project, not the best." },
      { label: "SaaS & Technology", text: "ARR growth chased without unit-economics discipline. CAC payback exceeds 30 months while gross retention drifts below 90%. Down-rounds of 35–55% at the next institutional priced round." },
      { label: "Manufacturing & Industrial", text: "Greenfield capacity sized to demand forecast rather than pricing power. ROCE drifts below WACC, balance sheet leverages up, and the equity story stalls at 6–7x EV/EBITDA when peers trade at 12x+." },
      { label: "Diversified Groups", text: "Capital re-circulated to legacy units; new-economy bets starved. Sum-of-parts value goes unrealised — public markets apply a 20–30% conglomerate discount." }
    ],
    delGrid: [
      { title: "Strategic Diagnostic & Value Hypothesis", desc: "Independent, evidence-based view of where economic profit is created, eroded, or trapped — by business unit, geography, and customer cohort." },
      { title: "Capital Allocation Framework", desc: "Operating model linking strategy to capex, M&A, and divestment decisions under a single P&L and balance-sheet logic." },
      { title: "Market Position Re-architecture", desc: "Repositioning of business units against pricing power, switching costs, and addressable economic-profit pools — not addressable revenue." },
      { title: "Investor-Grade Strategy Narrative", desc: "Strategy translated into the language institutional capital actually underwrites — capital cycle, value creation, and downside floor." }
    ],
    outcomes: [
      "Capital Discipline Restored",
      "Equity Story Sharpened",
      "EVA Visibility",
      "Board Alignment Achieved",
      "Investor Diligence Ready",
      "Multi-Horizon Coherence"
    ],
    whoGrid: [
      { title: "Founders Pre-Institutional Round", desc: "Founders who need a strategy that survives the data room — not just the boardroom." },
      { title: "Boards Inheriting Strategic Drift", desc: "Where the operating plan has detached from the value thesis and capital allocation has become reactive." },
      { title: "Diversified Indian Groups", desc: "Facing capital allocation conflict across unrelated businesses and an unsustainable holdco discount." },
      { title: "CEOs Entering a New Cycle", desc: "Downturn, new geography, regulatory inflection — where the prior strategy no longer fits the next chapter." }
    ],
    ctaPrimaryText: "Get Strategy Advisory",
    ctaSecondaryText: "Request a Strategic Diagnostic",
    trustNote: "Northrop has advised on enterprise strategy and value architecture mandates across financial services, infrastructure, technology, manufacturing, and diversified Indian conglomerates.",
    closingTitle: "Strategy that doesn't survive scrutiny isn't strategy. It's vocabulary.",
    // closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default Enterprisestrategyvaluearchitecture;