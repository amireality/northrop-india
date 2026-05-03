import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const CorporateGovernanceBoardAdvisory = () => {
  const data = {
    metaTitle: "Corporate Governance & Board Advisory | Northrop India",
    metaDescription: "Governance is not a compliance overlay. It is the operating system through which institutional capital decides whether your company is investable.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Management Consulting", link: null },
      { name: "Corporate Governance", link: null }
    ],
    bannerTitle: <>Your governance worked when the company was smaller.<br /> <span className="text-[#C4973B]">Institutional capital is asking different questions now.</span></>,
    bannerDescription: "Governance is not a compliance overlay. It is the operating system through which institutional capital decides whether your company is investable. Founder-led governance survives the journey to product-market fit; it rarely survives the journey to public markets.",
    primaryBtnText: "Get Governance Advisory",
    secondaryBtnText: "Request a Board Review",
    svcNum: "MC — 03 /",
    svcTag: "Corporate Governance & Board Advisory",
    svcH2: <>INDUSTRY-SPECIFIC GOVERNANCE FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "Founder-led governance survives the journey to product-market fit; it rarely survives the journey to public markets. Here is what governance failure looks like across industries:",
    painLabel: "What governance failures look like — by industry",
    painList: [
      { label: "Family-Owned Businesses", text: "Family council and board are indistinguishable. Independent directors have no real authority over capital allocation. PE bidders price in a 20–25% control discount." },
      { label: "Founder-Led Startups", text: "Board functions as a quarterly update meeting; audit and risk committees are absent or symbolic. Series C and beyond conditions become governance reform contingencies." },
      { label: "NBFCs & Financial Services", text: "Regulatory risk concentrated in one or two individuals. RBI and SEBI scrutiny exposes weak segregation of duties; supervisory action follows." },
      { label: "Listed Mid-Caps", text: "Related-party transactions, ESOPs, and capital raises decided without independent committee process. Institutional shareholders and proxy advisors flag governance risk in voting reports." }
    ],
    delGrid: [
      { title: "Governance Framework Diagnostic", desc: "Independent assessment of board composition, committee charters, RPT processes, and decision rights against institutional and listing-grade benchmarks." },
      { title: "Board Effectiveness Review", desc: "Confidential evaluation of board, chair, and committee functioning — not a tick-box exercise." },
      { title: "Independent Director Curation", desc: "Sourcing and onboarding of independent directors with sectoral and institutional credibility — not socially proximate appointments." },
      { title: "Audit, Risk & RPT Architecture", desc: "Re-design of audit, risk, and related-party transaction processes to withstand SEBI, RBI, and institutional investor scrutiny." }
    ],
    outcomes: [
      "Institutional-Grade Board",
      "RPT Risk Eliminated",
      "Listing-Ready Governance",
      "Investor Voting Confidence",
      "Regulatory Defensibility",
      "Founder-Board Separation"
    ],
    whoGrid: [
      { title: "Pre-IPO Companies", desc: "Where SEBI listing-readiness and institutional shareholder expectations are imminent." },
      { title: "Founder-Led Post-Series C", desc: "Where investor directors now outnumber founder allies and decision rights are unclear." },
      { title: "Family Businesses Pre-Succession", desc: "Separating ownership, governance, and management before the next generation takes over." },
      { title: "Boards Facing Regulatory Scrutiny", desc: "Where independent oversight has become a credibility question for regulators or investors." }
    ],
    ctaPrimaryText: "Get Governance Advisory",
    ctaSecondaryText: "Request a Board Review",
    trustNote: "Northrop has advised on governance restructuring and board effectiveness for listed mid-caps, NBFCs, family businesses, and pre-IPO companies.",
    closingTitle: "Governance is what investors price when they cannot price the future.",
    // closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default CorporateGovernanceBoardAdvisory;
