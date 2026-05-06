import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const DistressedAssetTurnaroundAdvisory = () => {
  const data = {
    metaTitle: "Distressed Asset & Turnaround Advisory | Northrop India",
    metaDescription: "Distress is rarely sudden — it is sequential. We build turnaround architecture before the window closes.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Financial Advisory", link: null },
      { name: "Distressed Asset Advisory", link: null }
    ],
    bannerTitle: <>By the time the lender calls a meeting, <span className="text-[#C4973B]">you have lost the option of choosing the meeting.</span></>,
    bannerDescription: "Distress is rarely sudden — it is sequential. A delayed customer payment, a missed covenant test, a cancelled facility, a whisper at a lender. The window to act on your terms is short and closes silently. After it closes, the conversation is no longer yours to lead.",
    primaryBtnText: "Get Turnaround Advisory",
    secondaryBtnText: "Request a Distress Diagnostic",
    svcNum: "FA — 08 /",
    svcTag: "Distressed Asset & Turnaround Advisory",
    svcH2: <>INDUSTRY-SPECIFIC DISTRESS FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "The window to act on your terms is short and closes silently. Here is what distress failure looks like:",
    painLabel: "What distress failures look like — by situation",
    painList: [
      { label: "Mid-Cap Manufacturers", text: "Single-customer or single-geography concentration. Demand contraction exposes fixed-cost base; covenant breach within 2–3 quarters." },
      { label: "Real Estate & Infrastructure", text: "Project delays compound carrying cost. Lender consortium fragments; recovery proceedings under SARFAESI or NCLT begin without warning." },
      { label: "NBFCs", text: "Asset quality deterioration masked by restructuring. RBI inspection exposes provisioning gap; net-worth erosion follows." },
      { label: "Founder-Led Businesses", text: "Personal guarantees, collateral cross-pledging, and covenant complacency. By the time stress is visible, family wealth is already at risk." }
    ],
    delGrid: [
      { title: "Distress Diagnostic", desc: "Independent assessment of operating, financial, and liquidity position — covenant headroom, cash runway, lender posture, and stakeholder map." },
      { title: "Turnaround Architecture", desc: "Operating restructuring — cost, working capital, asset disposals, and contract renegotiation — sequenced to lender and operating timelines." },
      { title: "Lender & Stakeholder Negotiation", desc: "ICA, OTS, restructuring proposal, and IBC-track engagement — managed with one negotiation logic across all stakeholders." },
      { title: "IBC, Pre-Pack & Resolution Strategy", desc: "Section 230, pre-pack, IBC, and asset-monetisation pathways — evaluated and executed with regulator and creditor alignment." }
    ],
    outcomes: [
      "Lender Posture Stabilised",
      "Liquidity Runway Extended",
      "Covenant Cure Architected",
      "Promoter Risk Contained",
      "Resolution Pathway Defined",
      "Going Concern Preserved"
    ],
    whoGrid: [
      { title: "Companies Approaching Covenant Breach", desc: "Needing pre-emptive lender engagement before posture hardens." },
      { title: "Promoters Facing Personal Guarantee Risk", desc: "Needing controlled stakeholder management." },
      { title: "Boards Inheriting Stressed Balance Sheets", desc: "Needing independent diagnosis and pathway." },
      { title: "Lenders or Creditors", desc: "Evaluating restructuring versus resolution options." }
    ],
    ctaPrimaryText: "Get Turnaround Advisory",
    ctaSecondaryText: "Request a Distress Diagnostic",
    trustNote: "Northrop has advised on distressed asset, turnaround, and resolution mandates across manufacturing, real estate, NBFCs, and promoter-led groups in India under IBC, RBI, and SEBI frameworks.",
    closingTitle: "Distress respects timelines you set early. It dictates them once you don't.",
    // closingDescription: "Every engagement starts with a confidential conversation."
  };

  return <ServicePageLayout {...data} />;
};

export default DistressedAssetTurnaroundAdvisory;
