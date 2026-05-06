import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const WorkingCapitalLiquidityOptimization = () => {
  const data = {
    metaTitle: "Working Capital & Liquidity Optimization | Northrop India",
    metaDescription: "Profit is opinion. Cash is fact. We build treasury and working capital architecture.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Financial Advisory", link: null },
      { name: "Working Capital", link: null }
    ],
    bannerTitle: <>Your P&L looks healthy. <span className="text-[#C4973B]">Your cash conversion cycle disagrees.</span></>,
    bannerDescription: "Profit is opinion. Cash is fact. Companies that grow profit while bleeding cash discover, eventually, that the balance sheet always wins. Working capital is rarely the cause of failure — but it is almost always the trigger.",
    primaryBtnText: "Get Liquidity Advisory",
    secondaryBtnText: "Request a Cash-Cycle Diagnostic",
    svcNum: "FA — 05 /",
    svcTag: "Working Capital & Liquidity Optimization",
    svcH2: <>INDUSTRY-SPECIFIC WORKING CAPITAL FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "Working capital is rarely the cause of failure — but it is almost always the trigger. Here is what working capital failure looks like across industries:",
    painLabel: "What working capital failures look like — by industry",
    painList: [
      { label: "Manufacturing & Distribution", text: "Cash conversion cycle 30–60 days longer than peer median. ₹100–300 crore of capital stranded in receivables, inventory, and supplier terms." },
      { label: "Real Estate & Construction", text: "Project working capital co-mingled with corporate. Cash flow visibility per project absent; lender confidence degrades." },
      { label: "B2B Services", text: "Payment terms negotiated at sales, not at deal-desk. DSO drifts 20–40 days above contracted terms; bad debt provisions rise." },
      { label: "Consumer & Retail", text: "Inventory mix and ageing not actively managed. Working capital absorbs 8–15% of revenue at peak season." }
    ],
    delGrid: [
      { title: "Cash Conversion Diagnostic", desc: "End-to-end cash cycle analysis — receivables, payables, inventory, advances, deposits — by business unit and customer cohort." },
      { title: "Working Capital Optimisation", desc: "Structural redesign of credit policy, collections architecture, payables governance, and inventory operating model." },
      { title: "Liquidity & Treasury Architecture", desc: "Treasury policy, liquidity buffer sizing, banking architecture, and stress-scenario plan." },
      { title: "Cash Flow Forecasting & Cadence", desc: "13-week rolling cash flow model, weekly treasury cadence, and management dashboard." }
    ],
    outcomes: [
      "15–30% Working Capital Released",
      "Cash Cycle Compressed",
      "Treasury Architecture Built",
      "Forecast Accuracy >90%",
      "Liquidity Resilience",
      "Lender Confidence"
    ],
    whoGrid: [
      { title: "Companies in Scale-Up", desc: "Where revenue growth is outrunning cash flow." },
      { title: "Manufacturing & Distribution", desc: "Where working capital is structurally trapped across receivables and inventory." },
      { title: "Real Estate & Infrastructure", desc: "Needing project-level cash visibility and treasury discipline." },
      { title: "CFOs Facing Liquidity Stress", desc: "Needing rapid, defensible action on covenants and cash runway." }
    ],
    ctaPrimaryText: "Get Liquidity Advisory",
    ctaSecondaryText: "Request a Cash-Cycle Diagnostic",
    trustNote: "Northrop has advised on working capital and liquidity optimisation mandates across manufacturing, real estate, consumer, and B2B services in India.",
    closingTitle: "A profitable company that cannot pay its suppliers is in distress. The market just hasn't read the footnotes yet.",
    // closingDescription: "Every engagement starts with a confidential conversation."
  };

  return <ServicePageLayout {...data} />;
};

export default WorkingCapitalLiquidityOptimization;
