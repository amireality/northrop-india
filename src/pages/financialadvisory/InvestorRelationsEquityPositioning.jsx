import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const InvestorRelationsEquityPositioning = () => {
  const data = {
    metaTitle: "Investor Relations & Equity Positioning | Northrop India",
    metaDescription: "Investor relations is not an earnings ritual. It is the architecture by which the equity story is built, defended, and re-priced.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Financial Advisory", link: null },
      { name: "Investor Relations", link: null }
    ],
    bannerTitle: <>You report numbers every quarter . <span className="text-[#C4973B]">Investors still don't understand the company.</span></>,
    bannerDescription: "Investor relations is not an earnings ritual. It is the architecture by which the equity story is built, defended, and re-priced. Companies that treat IR as a compliance function are priced as compliance assets — at multiples to match.",
    primaryBtnText: "Get IR Advisory",
    secondaryBtnText: "Request an Equity-Story Review",
    svcNum: "FA — 02 /",
    svcTag: "Investor Relations & Equity Positioning",
    svcH2: <>INDUSTRY-SPECIFIC IR FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "Companies that treat IR as a compliance function are priced as compliance assets. Here is what IR failure looks like:",
    painLabel: "What IR failures look like — by situation",
    painList: [
      { label: "Recently Listed Mid-Caps", text: "Quarterly disclosures prepared by finance team without equity-narrative architecture. Analyst models drift from management view; consensus EPS undershoots 8–12%." },
      { label: "Family-Promoted Listed Companies", text: "Promoter holding pattern, RPTs, and capital allocation history not pro-actively explained. Institutional investors apply governance discount." },
      { label: "Pre-IPO Companies", text: "Equity story built for the prospectus, not for the institutional investor base. Post-listing, the narrative has no cadence and no custodian." },
      { label: "PE-Backed Listed Platforms", text: "Sponsor exit path priced into the stock without management owning the narrative. Stock overhangs persist for 18–24 months." }
    ],
    delGrid: [
      { title: "Equity Story Architecture", desc: "Re-build of equity narrative — value drivers, growth thesis, capital allocation logic, and downside floor — in institutional language." },
      { title: "Disclosure & Analyst Programme", desc: "Disclosure architecture, KPI cadence, and analyst engagement framework that compounds credibility quarter on quarter." },
      { title: "Investor Targeting & Engagement", desc: "Identification and engagement of long-only, mutual fund, and sovereign capital aligned to the business profile." },
      { title: "Governance & Promoter Communication", desc: "Pro-active communication on governance, RPTs, and promoter-related questions — before they become equity events." }
    ],
    outcomes: [
      "Multiple Re-Rated",
      "Analyst Coverage Deepened",
      "Long-Only Investor Base",
      "Governance Discount Closed",
      "Disclosure Architecture",
      "Narrative Custody"
    ],
    whoGrid: [
      { title: "Recently Listed Companies", desc: "Where post-IPO IR cadence has not yet been built." },
      { title: "Listed Mid-Caps", desc: "Where the multiple does not reflect the underlying economics." },
      { title: "Promoter-Led Listed Companies", desc: "Where governance perception caps the multiple." },
      { title: "PE-Backed Listed Platforms", desc: "Preparing for sponsor exit and institutional investor handover." }
    ],
    ctaPrimaryText: "Get IR Advisory",
    ctaSecondaryText: "Request an Equity-Story Review",
    trustNote: "Northrop has advised on equity positioning and investor relations strategy for listed mid-caps, recently listed companies, and PE-backed listed platforms.",
    closingTitle: "The market cannot price what it cannot understand. And it does not try.",
    // closingDescription: "Every engagement starts with a confidential conversation."
  };

  return <ServicePageLayout {...data} />;
};

export default InvestorRelationsEquityPositioning;
