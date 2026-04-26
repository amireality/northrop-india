import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const RelatedPartyReview = () => {
  const data = {
    metaTitle: "Related Party Review | Northrop",
    metaDescription: "Related party transactions are the single most common vehicle for value extraction in Indian mid-market companies.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Due Diligence", link: "/services/due-diligence" },
      { name: "Related Party Review", link: null }
    ],
    bannerTitle: <>Related Party <br /><span className=" text-[#C4973B]">Review</span></>,
    bannerDescription: "Uncovering undisclosed relationships and structurally embedded value leakage.",
    primaryBtnText: "Commission Related Party Review",
    secondaryBtnText: "IBC / NCLT Inquiry",
    svcNum: "09 /",
    svcTag: "Related Party Review",
    svcH2: "The most expensive transactions in your<br/>target's history were with <em class=\"italic text-[#1E4D8C]\">entities the promoter owns.</em>",
    hookText: "Related party transactions are the single most common vehicle for value extraction in Indian mid-market companies. They are legal, disclosed — and they can destroy deal economics post-acquisition.",
    painLabel: "What related party transactions actually look like",
    painList: [
      { label: "", text: "Rent paid to promoter family trust at 3× market rate — ₹1.2 Cr walking out annually" },
      { label: "", text: "Management fees to a holding company: a recurring charge with no documented service" },
      { label: "", text: "Loans to group companies at 0% interest — unsecured and effectively unrecoverable" },
      { label: "", text: "Sales to related parties at below-market prices — revenue suppressed, profit shifted externally" },
      { label: "", text: "Key IP, trademarks, or plant owned by a promoter entity — paid as licence fee by the target" }
    ],
    delGrid: [
      { title: "Related Party Identification", desc: "Full MCA-based entity relationship mapping — uncovering undisclosed related parties, beneficial ownerships, and family connections." },
      { title: "Transaction Terms Review", desc: "Are transactions genuinely at arm's length? We benchmark pricing, interest rates, and fees against market comparables." },
      { title: "PUFE Transaction Identification", desc: "Identifying Preferential, Undervalued, Fraudulent, and Extortionate transactions — critical for IBC CIRP mandates." },
      { title: "NCLT Submission Ready", desc: "Forensic-grade documentation of related party transactions structured for submission to NCLT in insolvency proceedings." }
    ],
    outcomes: [
      "Value Leakage Quantified",
      "PUFE Transactions Identified",
      "Deal Adjustment Leverage",
      "NCLT-Ready Documentation",
      "Post-Close Governance Plan"
    ],
    whoGrid: [
    ],
    ctaPrimaryText: "Commission Related Party Review",
    ctaSecondaryText: "IBC / NCLT Inquiry",
    trustNote: "Northrop has served as Transaction Auditor for CIRP cases including a Radisson Blu franchise (₹80 Cr+ exposure).",
    closingTitle: "Ensure independence in your transaction.",
    closingDescription: "Our teams stand ready to guide you through your critical next moves."
  };

  return <ServicePageLayout {...data} />;
};

export default RelatedPartyReview;