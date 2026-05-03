import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const Growthstructuringmarketpositioning = () => {
  const data = {
    metaTitle: "Growth Structuring & Market Positioning | Northrop India",
    metaDescription: "Growth and value are not the same number. We help you build defensible, capital-light growth that compounds.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Management Consulting", link: null },
      { name: "Growth Structuring", link: null }
    ],
    bannerTitle: <>You have growth.<br /> <span className="text-[#C4973B]">Investors aren't paying for it.</span></>,
    bannerDescription: "Growth and value are not the same number. Capital pays for growth that compounds — defensible, capital-light, and economically productive. Unstructured growth raises revenue, dilutes return, and shrinks the multiple.",
    primaryBtnText: "Get Growth Advisory",
    secondaryBtnText: "Request a Positioning Review",
    svcNum: "MC — 02 /",
    svcTag: "Growth Structuring & Market Positioning",
    svcH2: <>INDUSTRY-SPECIFIC GROWTH FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "Unstructured growth raises revenue, dilutes return, and shrinks the multiple. Here is what growth failures look like across industries:",
    painLabel: "What growth failures look like — by industry",
    painList: [
      { label: "Consumer Brands & D2C", text: "Topline scaling on discount-led acquisition. Contribution margin per cohort negative beyond month 6. Investor diligence demands LTV/CAC by cohort — and the answer collapses the round." },
      { label: "B2B SaaS", text: "Logo growth without net-revenue retention discipline. NRR below 105% caps the Rule-of-40 narrative; valuation multiples compress 30–45% at the next priced round." },
      { label: "Manufacturing & Distribution", text: "Geographic expansion without channel economics. Working capital absorbs profit; ROCE deteriorates as topline grows." },
      { label: "Healthcare & Education", text: "New site or centre rollouts on operational gut. Steady-state economics arrive 18 months later — by which time the next funding round has already been underwritten on optimistic ramp curves." }
    ],
    delGrid: [
      { title: "Growth Architecture Diagnostic", desc: "Decomposition of growth into volume, price, mix, and channel — and identification of which vector earns its cost of capital." },
      { title: "Cohort & Unit Economics Build", desc: "Customer-cohort, store-cohort, or product-cohort economics — institutional-grade and defensible to a buy-side analyst." },
      { title: "Positioning & Pricing Power Strategy", desc: "Where pricing power is real, where it is borrowed, and how to convert volume share into structural margin." },
      { title: "Growth Investment Case", desc: "Growth thesis with capital plan, milestone gates, and value-bridge — designed for institutional underwriting." }
    ],
    outcomes: [
      "Cohort Economics Built",
      "Valuation Multiple Defended",
      "Pricing Power Identified",
      "Channel ROI Visible",
      "Growth-to-Value Linked",
      "Diligence Survivable"
    ],
    whoGrid: [
      { title: "Founders Pre Series B/C", desc: "Where the revenue narrative will not survive cohort scrutiny in the next institutional process." },
      { title: "Operating CEOs Scaling", desc: "Regional or international expansion where profitability has stopped scaling with revenue." },
      { title: "Boards Pre Strategic Sale", desc: "Preparing a growth story that withstands buyer-led re-rating during diligence." },
      { title: "PE-Backed Companies Pre-Exit", desc: "Companies that need to convert topline growth into multiple expansion before sponsor exit." }
    ],
    ctaPrimaryText: "Get Growth Advisory",
    ctaSecondaryText: "Request a Positioning Review",
    trustNote: "Northrop has advised on growth structuring and market positioning across consumer brands, B2B SaaS, manufacturing, healthcare, and education sectors.",
    closingTitle: "Growth that doesn't translate to multiple is dilution wearing a slide deck.",
    // closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default Growthstructuringmarketpositioning;