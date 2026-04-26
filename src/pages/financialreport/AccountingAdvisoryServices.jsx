import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const AccountingAdvisoryServicesPage = () => {
  const data = {
    metaTitle: "Accounting Advisory Services | Northrop India",
    metaDescription: "Expert accounting advisory on revenue recognition, complex transactions, and policy design. Ensure your financials withstand due diligence and institutional scrutiny.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Accounting Advisory", link: null }
    ],
    bannerTitle: <>Your accounting tells a  <br /> story.<br />Make sure it's <span className=" text-[#C4973B]">the right one.</span></>,
    bannerDescription: "Accounting decisions made at inception — revenue recognition policies, capitalisation choices, provisioning approaches — compound over years. The wrong call today becomes a restatement, a regulatory notice, or a deal-breaker in due diligence tomorrow.",
    primaryBtnText: "Get Accounting Clarity",
    secondaryBtnText: "See where it goes wrong ↓",
    svcNum: "FR — 02 /",
    svcTag: "Accounting Advisory Services",
    svcH2: <>The policy seemed reasonable when you adopted it. <em className="italic text-blue-600 not-italic">It doesn't hold up in a deal room.</em></>,
    hookText: "Accounting is not just bookkeeping — it is the language in which your business communicates its value to investors, lenders, and regulators. If that language is imprecise, the consequences follow you.",
    painLabel: "Industry-specific accounting failures — and their cost",
    painList: [
      { label: "Real Estate & Construction", text: "Revenue recognised on project completion percentage — not RERA compliant. Restated financials triggering lender covenant breaches and buyer price reductions of 15–25%." },
      { label: "SaaS & Technology", text: "Annual subscription revenue booked upfront — not amortised. A single Ind-AS 115 adjustment can collapse reported EBITDA by 30–40% at point of investor diligence." },
      { label: "Manufacturing", text: "R&D costs capitalised as intangibles with no documented technical feasibility. Auditors force write-offs; balance sheets deteriorate; credit ratings drop." },
      { label: "NBFC & Lending", text: "Provisioning policies that don't align with RBI's IRACP norms. Regulatory orders and mandatory capital infusion requirements that could have been avoided." },
      { label: "Retail & FMCG", text: "Trade discounts and promotional schemes netted against revenue inconsistently — topline inflated, comparability destroyed, buy-side FDD kills the deal." }
    ],
    delGrid: [
      { title: "Accounting Policy Design & Review", desc: "Drafting or reviewing revenue recognition, capitalisation, provisioning, and consolidation policies — aligned to Ind-AS and your commercial reality." },
      { title: "Complex Transaction Structuring", desc: "Advisory on the accounting treatment of leases, business combinations, financial instruments, and related-party transactions before they are executed." },
      { title: "Financial Restatement Support", desc: "Where prior-year policies require correction — managing the restatement process, regulator communication, and investor narrative with minimum disruption." },
      { title: "Deal-Ready Financial Preparation", desc: "Preparing historical financials that withstand buy-side FDD scrutiny — normalised, policy-compliant, and documented to institutional standards." }
    ],
    outcomes: [
      "Ind-AS Compliant Policies",
      "Investor-Grade Financials",
      "Restatement Risk Eliminated",
      "Deal Diligence Ready",
      "Regulatory Alignment",
      "Board & Auditor Confidence"
    ],
    whoGrid: [
      { title: "Pre-Fundraise Companies", desc: "Startups and growth-stage businesses preparing financials for the first time that will face institutional investor scrutiny." },
      { title: "Pre-Sale Businesses", desc: "Promoters preparing for M&A or PE sale who need accounting policies that survive a buy-side FDD without retrade." },
      { title: "Companies in Regulatory Transition", desc: "Businesses migrating from Indian GAAP to Ind-AS, or from one consolidation structure to another, requiring policy alignment guidance." },
      { title: "CFOs Facing Audit Queries", desc: "Finance heads who need an independent technical opinion before their next auditor conversation or board meeting." }
    ],
    ctaPrimaryText: "Get Accounting Advisory",
    ctaSecondaryText: "Request a Technical Opinion",
    trustNote: "Northrop has advised on accounting policy design and restatement support for companies across real estate, technology, manufacturing, and NBFC sectors.",
    closingTitle: "The accounting decision you delay is the problem you inherit.",
    closingDescription: "Every engagement begins with a confidential technical discussion. No obligation — just clarity on where your accounting exposure sits and how to address it."
  };

  return <ServicePageLayout {...data} />;
};

export default AccountingAdvisoryServicesPage;
