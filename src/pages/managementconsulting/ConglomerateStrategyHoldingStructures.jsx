import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const ConglomerateStrategyHoldingStructures = () => {
  const data = {
    metaTitle: "Conglomerate Strategy & Holding Structures | Northrop India",
    metaDescription: "The market sees a holding company. It cannot see the businesses inside it. We redesign holding structures to close the conglomerate discount.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Management Consulting", link: null },
      { name: "Conglomerate Strategy", link: null }
    ],
    bannerTitle: <>The market sees a holding company. <span className="text-[#C4973B]">It cannot see the businesses inside it.</span></>,
    bannerDescription: "Indian conglomerates were built when capital was scarce and trust was scarcer. Today, capital is plentiful, trust is institutional — and the conglomerate discount is a tax the public market levies on opacity. The strategy question is no longer “what businesses to own” but “how to be valued for owning them.”",
    primaryBtnText: "Get Holdco Advisory",
    secondaryBtnText: "Request a Structure Review",
    svcNum: "MC — 08 /",
    svcTag: "Conglomerate Strategy & Holding Structures",
    svcH2: <>INDUSTRY-SPECIFIC HOLDCO FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "The conglomerate discount is a tax the public market levies on opacity. Here is what holding structure failure looks like:",
    painLabel: "What holdco failures look like — by structure type",
    painList: [
      { label: "Listed Holdcos", text: "SOTP-to-traded gap of 30–45%. Investors cannot see capital allocation logic across business units; analysts model the portfolio as a single under-performing entity." },
      { label: "Multi-Generation Family Groups", text: "Cross-holdings, related-party transactions, and royalty flows obscure unit-level economics. Each governance event triggers a 5–10% re-rating downward." },
      { label: "Diversified Promoter Groups", text: "New-economy bets stranded inside old-economy parents. Listing pathway for high-multiple businesses blocked by group structure." },
      { label: "Cross-Border Holdcos", text: "Mauritius, Singapore, and Netherlands holding structures legacy of past tax and capital regimes — now sources of regulatory and tax risk." }
    ],
    delGrid: [
      { title: "Holding Structure Diagnostic", desc: "Map of legal entities, cross-holdings, RPTs, and capital flows against strategic, tax, and governance objectives." },
      { title: "Group Architecture Redesign", desc: "Re-design of holdcos, sub-holdcos, and operating entities — Ind-AS, Companies Act, FEMA, and tax-aligned." },
      { title: "Listing & Demerger Pathway", desc: "Structured pathway to unlock SOTP — listing of subsidiaries, demergers, vertical/horizontal splits, and value-crystallisation events." },
      { title: "Capital Allocation Operating Model", desc: "Group-level capital allocation framework — explicit, governed, and transparent to public market scrutiny." }
    ],
    outcomes: [
      "SOTP Discount Closed",
      "Listing Pathway Defined",
      "Tax & FEMA Compliant",
      "RPT Architecture Reset",
      "Family Settlement Aligned",
      "Investor Visibility Restored"
    ],
    whoGrid: [
      { title: "Listed Conglomerates", desc: "Facing structural SOTP discount and inability to communicate capital allocation logic." },
      { title: "Promoter Families", desc: "Restructuring multi-generational holdings ahead of succession or capital event." },
      { title: "Group CFOs", desc: "Preparing demerger, vertical listing, or holdco simplification." },
      { title: "Boards of Holdcos", desc: "Where capital allocation logic has become invisible to the market." }
    ],
    ctaPrimaryText: "Get Holdco Advisory",
    ctaSecondaryText: "Request a Structure Review",
    trustNote: "Northrop has advised on conglomerate restructuring, holding-company redesign, and demerger pathways for listed groups, promoter families, and multi-jurisdictional holding companies.",
    closingTitle: "The market does not pay for complexity. It charges for it.",
    // closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default ConglomerateStrategyHoldingStructures;
