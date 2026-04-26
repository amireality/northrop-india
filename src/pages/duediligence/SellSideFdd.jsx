import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const SellSideFdd = () => {
  const data = {
    metaTitle: "Sell-Side Financial Due Diligence | Northrop India",
    metaDescription: "Comprehensive Sell-Side Financial Due Diligence services to maximize your valuation and streamline the exit process.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Due Diligence", link: "/services/due-diligence" },
      { name: "Sell-Side FDD", link: null }
    ],
    bannerTitle: <>Sell-Side <br /><span className=" text-[#C4973B]">FDD</span></>,
    bannerDescription: "Maximize your valuation and minimize disruptions during your exit process with proactive financial due diligence.",
    primaryBtnText: "Prepare for Sale",
    secondaryBtnText: "Speak to an Advisor",
    svcNum: "02 /",
    svcTag: "Sell-Side FDD",
    svcH2: <span dangerouslySetInnerHTML={{ __html: `Your buyer's FDD team is about to find<br/>everything you <em class="italic text-blue-600 not-italic font-serif">hoped they wouldn't.</em>` }} />,
    hookText: "Sell-side FDD is not about concealment. It is about finding the problems first — so you control the narrative, the timeline, and the price.",
    painLabel: "How deals collapse in the final stretch",
    painList: [
      { label: "Surprise Tax Demands", text: "Buyer's FDD discovers a tax demand in week 8 — they reprice by 30% or walk." },
      { label: "Peg Disputes", text: "Working capital peg disputes that drag on for months after close." },
      { label: "Contradictory Accounts", text: "Management accounts that contradict audited financials — trust collapses overnight." },
      { label: "Earn-Out Structures", text: "Earn-out structures imposed because buyers simply don't believe your EBITDA." },
      { label: "Delayed Closings", text: "Signing delayed six months while you scramble to explain your own accounting policies." }
    ],
    delGrid: [
      { title: "Vendor Due Diligence Preparation", desc: "A Northrop-prepared FDD report hands buyers confidence and accelerates their process — dramatically reducing retrade risk." },
      { title: "Financial Story Architecture", desc: "Normalising historical earnings, documenting one-off items, and building a clean EBITDA bridge that survives scrutiny." },
      { title: "Working Capital Peg Defence", desc: "Establishing a defensible working capital baseline before negotiations begin — so post-close adjustments go in your favour." },
      { title: "Data Room Readiness", desc: "Organising every document a buyer will request — so nothing surprises you when their team starts digging." }
    ],
    outcomes: [
      "Faster Deal Execution",
      "Full-Price Protection",
      "No Last-Minute Retrades",
      "Clean Working Capital Peg",
      "Buyer Confidence"
    ],
    whoGrid: [
      { title: "Founders & Owners", desc: "Entrepreneurs planning an exit or seeking growth capital on favorable terms." },
      { title: "Private Equity", desc: "Funds divesting portfolio companies and wanting to ensure maximum ROI." },
      { title: "Corporate Divestitures", desc: "Companies spinning off non-core assets or subsidiaries to streamline operations." }
    ],
    ctaPrimaryText: "Prepare for Sale",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Engage Northrop 3-6 months before running a sale process. The earlier the engagement, the better the outcome.",
    closingTitle: "Take the next step towards a secured transaction.",
    closingDescription: "Our teams stand ready to guide you through your critical next moves."
  };

  return <ServicePageLayout {...data} />;
};

export default SellSideFdd;