import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const QualityOfEarnings = () => {
  const data = {
    metaTitle: "Quality of Earnings | Northrop",
    metaDescription: "Quality of Earnings is the most important number in any deal — and the most manipulated. Every valuation multiple you apply is stacked on top of earnings that may be inflated, unsustainable, or constructed.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Due Diligence", link: "/services/due-diligence" },
      { name: "Quality of Earnings", link: null }
    ],
    bannerTitle: <>Quality of <br /><span className=" text-[#C4973B]">Earnings</span></>,
    bannerDescription: "Ensure that the EBITDA you are paying for actually exists sustainably.",
    primaryBtnText: "Commission QoE Analysis",
    secondaryBtnText: "Download QoE Overview",
    svcNum: "10 /",
    svcTag: "Quality of Earnings",
    svcH2: "You are valuing a business on EBITDA<br/>that <em class=\"italic text-[#1E4D8C]\">doesn't actually exist.</em>",
    hookText: "Quality of Earnings is the most important number in any deal — and the most manipulated. Every valuation multiple you apply is stacked on top of earnings that may be inflated, unsustainable, or constructed.",
    painLabel: "How EBITDA gets manufactured before a sale",
    painList: [
      { label: "", text: "One-time asset sale gain included in operating EBITDA — 100% non-recurring, 100% presented as normal" },
      { label: "", text: "Deferred maintenance capitalised to suppress expenses and inflate reported margins" },
      { label: "", text: "R&D and marketing spend completely eliminated in the 12 months preceding exit" },
      { label: "", text: "Customer contracts pulled forward to inflate revenue in the measurement period" },
      { label: "", text: "Key promoter cost replaced by a \"market rate\" normalisation — one that benefits the seller" }
    ],
    delGrid: [
      { title: "Recurring vs. Non-Recurring Split", desc: "Rigorous identification and removal of one-time, exceptional, and non-operational items from reported EBITDA." },
      { title: "Normalisation Adjustments", desc: "Owner compensation, related-party costs, above/below-market leases, discretionary spend — adjusted to true ongoing economics." },
      { title: "Revenue Sustainability Analysis", desc: "Customer concentration, contract durability, churn analysis, and pipeline quality — is the revenue base genuinely defensible?" },
      { title: "EBITDA Bridge to Investable Earnings", desc: "A clear, documented walk from reported EBITDA to a defensible, investment-grade earnings figure — the foundation of your valuation." }
    ],
    outcomes: [
      "True Investable EBITDA",
      "Valuation Accuracy",
      "Price Negotiation Basis",
      "Earn-Out Structure Clarity",
      "PE / Lender-Grade Report"
    ],
    whoGrid: [
    ],
    ctaPrimaryText: "Commission QoE Analysis",
    ctaSecondaryText: "Download QoE Overview",
    trustNote: "Northrop QoE reports are structured to PE fund and lender standards — accepted as primary diligence inputs in deal processes.",
    closingTitle: "Base your valuation on sustainable reality.",
    closingDescription: "Our teams stand ready to guide you through your critical next moves."
  };

  return <ServicePageLayout {...data} />;
};

export default QualityOfEarnings;