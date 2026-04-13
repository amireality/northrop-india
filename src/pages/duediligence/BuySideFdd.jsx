import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const BuySideFdd = () => {
  const data = {
    metaTitle: "Buy-Side Financial Due Diligence | Northrop India",
    metaDescription: "Comprehensive Buy-Side Financial Due Diligence (FDD) services to identify risks, uncover value, and ensure informed decision-making.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Due Diligence", link: "/services/due-diligence" },
      { name: "Buy-Side FDD", link: null }
    ],
    bannerTitle: <>Buy-Side <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">FDD</span></>,
    bannerDescription: "Ensure that what you see is what you get. Evaluating target companies for financial robustness and potential risks before acquisition.",
    primaryBtnText: "Start Buy-Side FDD",
    secondaryBtnText: "Download Sample Report",
    svcNum: "01 /",
    svcTag: "Buy-Side FDD",
    svcH2: <span dangerouslySetInnerHTML={{ __html: `You're about to wire crores into a company<br/>you've known for <em class="italic text-blue-600 not-italic font-serif">ninety days.</em>` }} />,
    hookText: '"The financials looked clean. The management seemed honest. We didn\'t see it coming." — Every acquirer who skipped rigorous FDD.',
    painLabel: "What acquirers discover too late",
    painList: [
      { label: "Receivables", text: "Receivables that are 180+ days old, dressed up as current assets on the balance sheet." },
      { label: "Revenue Manipulation", text: "Revenue pulled forward to inflate EBITDA precisely at the point of valuation." },
      { label: "Contingent Liabilities", text: "Undisclosed contingent liabilities — tax demands, PF arrears, vendor disputes." },
      { label: "Key-Man Dependency", text: "60% of revenue walks out the day the promoter exits." },
      { label: "Cash Flow Illusion", text: "Cash flow that looks positive on paper and collapses within 90 days of signing." }
    ],
    delGrid: [
      { title: "Historical Financial Analysis", desc: "3-5 year P&L, balance sheet, and cash flow — normalised, restated, and stripped of accounting cosmetics." },
      { title: "Working Capital Deep-Dive", desc: "True NWC requirement, seasonality analysis, and a normalised working capital peg for deal structuring." },
      { title: "Quality of Earnings", desc: "Separating recurring from one-time. Adjusting for promoter perks, related-party distortions, and off-balance items." },
      { title: "Liability & Contingency Mapping", desc: "Tax positions, litigations, employee liabilities, regulatory exposures — documented before they become your problem." }
    ],
    outcomes: [
      "Deal Confidence",
      "Price Negotiation Leverage",
      "Reps & Warranties Clarity",
      "NCLT-Ready Documentation",
      "Post-Acquisition Baseline"
    ],
    whoGrid: [
      { title: "Private Equity", desc: "Funds looking to invest in new portfolio companies and needing comprehensive validation." },
      { title: "Corporate Acquirers", desc: "Strategic buyers entering new markets or consolidating their strategic positions." },
      { title: "Family Offices", desc: "Offices seeking lower-risk stable asset investments backed by meticulous data." }
    ],
    ctaPrimaryText: "Start Buy-Side FDD",
    ctaSecondaryText: "Download Sample Report",
    trustNote: "Mandates handled across ₹10 Cr — ₹100 Cr deal range. Sectors: Manufacturing, FMCG, Professional Services, Real Estate, Healthcare.",
    closingTitle: "Take the next step towards a secured transaction.",
    closingDescription: "Our teams stand ready to guide you through your critical next moves."
  };

  return <ServicePageLayout {...data} />;
};

export default BuySideFdd;