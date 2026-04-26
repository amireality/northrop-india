
import ServicePageLayout from '../../components/services/ServicePageLayout';

const MaAdvisory = () => {
  const data = {
    metaTitle: "M&A Advisory Services | Transaction Strategy | Northrop India",
    metaDescription: "Strategic M&A advisory for mid-market transactions. From target screening to deal structuring and integration planning, we ensure value creation in every deal.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "M&A Advisory", link: null }
    ],
    bannerTitle: <>You've found the right <br />target. <br /> <span className="text-[#C4973B]">Now make sure you're right <br /> about it.</span></>,
    bannerDescription: "M&A is the highest-stakes financial decision most organisations make. The difference between a value-creating acquisition and a value-destroying one is almost always the quality of the advisory process — not the quality of the idea.",
    primaryBtnText: "Engage M&A Advisory",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "TA — 01 /",
    svcTag: "M&A Advisory",
    svcH2: <>The deal closed at ₹80 Cr. Eighteen months later, the business was worth ₹30 Cr. <em className="italic text-[#C4973B] not-italic font-serif">The issues were visible in the data room.</em></>,
    hookText: "Most acquisitions fail to create value. The research is consistent — between 50% and 70% of M&A transactions fail to meet their stated objectives. The reasons are almost always identifiable in advance: overpayment, hidden liabilities, integration failure, or key-man risk.",
    painLabel: "Where M&A value destruction happens",
    painList: [
      { label: "Overpayment", text: "EBITDA multiples applied to earnings that were inflated, non-recurring, or dependent on the exiting promoter. Business cannot service the acquisition debt." },
      { label: "Hidden Liabilities", text: "Tax demands, employee liabilities, and vendor disputes that were visible in the data room — but the buyer's team didn't look in the right places." },
      { label: "Integration Failure", text: "Cultural incompatibility, systems mismatch, and key talent departure within 6 months of closing — destroying the value the acquirer paid for." },
      { label: "Key-Man Risk", text: "The business was built around one person who negotiated a 12-month earnout and then left — taking the client relationships with them." },
      { label: "Regulatory Exposure", text: "Target operating in a regulated sector without all required licences — discovered post-close when the regulator identifies the acquirer as the new responsible party." }
    ],
    delGrid: [
      { title: "Target Identification & Screening",
         desc: "Identifying and screening acquisition targets against your strategic, financial, and cultural criteria — before resources are committed to detailed diligence." },
         
      { title: "Buy-Side Advisory & Negotiation", 
        desc: "Advising on valuation, structuring, and negotiation — ensuring commercial terms reflect the risks identified in due diligence." },
      { title: "Deal Structuring & Documentation", 
        desc: "Advising on deal structure — asset vs. share purchase, earn-out mechanics, representations and warranties — to protect your interests post-close." },
      { title: "Integration Planning", 
        desc: "Pre-close integration planning — identifying day-one priorities, key retention decisions, and systems integration requirements before signing." }
    ],
    outcomes: [
      "Target Assessed",
      "Valuation Defended",
      "Deal Structured",
      "Liabilities Protected",
      "Integration Planned",
      "Key-Man Risk Managed"
    ],
    whoGrid: [
      { title: "Strategic Acquirers", desc: "Companies pursuing acquisitions as part of their growth strategy — needing end-to-end advisory from target screening through deal closure." },
      { title: "PE Funds & Family Offices", desc: "Investors making acquisitions in Indian mid-market companies — needing local advisory expertise combined with institutional rigour." },
      { title: "Companies Receiving Acquisition Approaches", desc: "Businesses approached by potential acquirers — needing independent advisory on value, terms, and process to ensure they don't undersell." },
      { title: "Companies Pursuing International M&A", desc: "Indian companies acquiring overseas targets — needing cross-border advisory covering valuation, structure, and regulatory approvals." }
    ],
    ctaPrimaryText: "Engage M&A Advisory",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has advised on transactions in the ₹10 Cr — ₹200 Cr range across manufacturing, services, and financial sectors — providing buy-side and sell-side advisory combined with in-house FDD capability.",
    closingTitle: "The best M&A advisors don't just help you do the deal. They help you decide whether you should.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default MaAdvisory;