import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const FoundertoInstitutionTransitionAdvisory = () => {
  const data = {
    metaTitle: "Founder-to-Institution Transition Advisory | Northrop India",
    metaDescription: "The company became too big for one mind. It hasn't become small enough for many. We build institutional transition roadmaps.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Management Consulting", link: null },
      { name: "Founder Transition", link: null }
    ],
    bannerTitle: <>The company became too big for one mind. <span className="text-[#C4973B]">It hasn't become small enough for many.</span></>,
    bannerDescription: "Every founder-led company reaches a transition point: the founder's intuition becomes the bottleneck rather than the engine. Done well, this transition compounds value for two decades. Done poorly, it triggers attrition, governance breakdown, and a 30–50% valuation discount at the next round.",
    primaryBtnText: "Get Transition Advisory",
    secondaryBtnText: "Request a Succession Review",
    svcNum: "MC — 07 /",
    svcTag: "Founder-to-Institution Transition Advisory",
    svcH2: <>INDUSTRY-SPECIFIC TRANSITION FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "Done poorly, the founder transition triggers attrition, governance breakdown, and a 30–50% valuation discount at the next round. Here is what transition failure looks like across industries:",
    painLabel: "What transition failures look like — by industry",
    painList: [
      { label: "Indian Family Businesses", text: "Next-generation transition treated as a dynastic event, not an institutional one. No clear separation of ownership, governance, and management roles. PE and strategic bidders price the ambiguity." },
      { label: "Founder-Led Startups", text: "Founder retains all P&L decision rights post Series C. Senior hires who joined to “build the institution” leave within 18 months. Investor patience runs out." },
      { label: "First-Generation Conglomerates", text: "Operating control concentrated in promoter family. Group cost-of-capital rises as governance perception falls. Listing-day governance metrics reveal the gap." },
      { label: "Mid-Sized Professional Services", text: "Equity, decision rights, and succession all sit with founding partner. Next-generation partners cannot price their stake or their authority." }
    ],
    delGrid: [
      { title: "Founder-Institution Diagnostic", desc: "Where founder dependence creates value, where it caps it — by function, by decision class, and by capital cycle." },
      { title: "Governance & Decision-Rights Architecture", desc: "Re-allocation of decision rights between founder, board, management, and shareholders — explicit and defensible." },
      { title: "CEO/Successor Transition Plan", desc: "Identification, onboarding, and authority-transfer roadmap for incoming CEO or next-generation leadership." },
      { title: "Ownership & Holding Structure Re-architecture", desc: "Family settlement, holdco design, trust structures, and shareholder alignment — built to survive two cycles, not one." }
    ],
    outcomes: [
      "Institutional Decision Rights",
      "Successor Authority Established",
      "Governance Discount Removed",
      "Family-Business Continuity",
      "Listing-Ready Architecture",
      "Investor Confidence"
    ],
    whoGrid: [
      { title: "Founders Post Series C/D", desc: "Where the round-after-next is contingent on a credible institutional transition." },
      { title: "Promoter Families", desc: "Preparing for next-generation succession or eventual public listing." },
      { title: "Boards Mediating Succession", desc: "Boards needing an independent, structured process around founder-CEO succession." },
      { title: "Pre-IPO Companies", desc: "Where SEBI and institutional investors will read founder concentration as risk." }
    ],
    ctaPrimaryText: "Get Transition Advisory",
    ctaSecondaryText: "Request a Succession Review",
    trustNote: "Northrop has advised on founder-to-institution transitions for promoter-led groups, family businesses, founder-led startups, and pre-IPO companies in India.",
    closingTitle: "An institution is what survives the founder. A company that doesn't, isn't one.",
    // closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default FoundertoInstitutionTransitionAdvisory;
