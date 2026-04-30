
import ServicePageLayout from '../../components/services/ServicePageLayout';

const Restructuring = () => {
  const data = {
    metaTitle: "Restructuring Advisory Services | Debt Management | Northrop India",
    metaDescription: "Expert restructuring advisory to avoid insolvency, manage lender pressure, and stabilize cash flows. We protect business value and promoter interest through credible plans.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Restructuring Advisory", link: null }
    ],
    bannerTitle: <>The business is viable. <br />The debt structure is not. <br /> <span className="text-[#C4973B]">There is a difference.</span></>,
    bannerDescription: "Business restructuring — whether financial, operational, or legal — is the process of rebuilding a business around what works, shedding what doesn't, and restoring the conditions for sustainable performance. Done early, it preserves value. Done late, it accelerates loss.",
    primaryBtnText: "Engage Restructuring Advisory",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "TA — 04 /",
    svcTag: "Restructuring Advisory",
    svcH2: <>The company had ₹80 Cr of enterprise value and ₹110 Cr of debt. <em className="italic text-[#C4973B] not-italic font-serif">Restructuring recovered ₹60 Cr for creditors. Liquidation would have recovered ₹20 Cr.</em></>,
    hookText: "Restructuring is not the same as insolvency. Most businesses that successfully restructure never enter IBC proceedings. The difference is the quality and timing of the restructuring advisory — and the ability to create a credible plan that lenders will accept.",
    painLabel: "When restructuring becomes necessary — and the cost of waiting",
    painList: [
      { label: "Cash Flow Stress", text: "Business is generating positive EBITDA but insufficient free cash flow after debt service — every month of delay increases interest and reduces leverage." },
      { label: "Lender Pressure", text: "Bank has classified the account as SMA-2 — the window before NPA classification and forced action is shrinking." },
      { label: "Covenant Breach", text: "Financial covenants breached — lender has the right to accelerate the loan. Proactive restructuring is possible; reactive is not." },
      { label: "Promoter Guarantees", text: "Personal guarantees given to all lenders — if IBC is triggered, promoter's personal assets are at risk. Early restructuring protects both." },
      { label: "Industry Downturn", text: "Sector-wide stress — where the business has a viable long-term model but cannot service its pre-downturn debt quantum." }
    ],
    delGrid: [
      { title: "Financial Restructuring Plan", desc: "A credible, detailed restructuring plan — with revised cash flow projections, proposed debt restructuring terms, and the supporting operational changes." },
      { title: "Lender Negotiation & Consortium Management", desc: "Managing negotiations with individual lenders and banking consortia — building the consensus required for a restructuring to succeed." },
      { title: "One-Time Settlement (OTS) Advisory", desc: "Advising on and negotiating OTS arrangements with lenders — quantifying the realistic settlement range and managing the negotiation process." },
      { title: "Operational Restructuring Support", desc: "Identifying and implementing the operational changes — cost reduction, business line rationalisation — that make the financial restructuring sustainable." }
    ],
    outcomes: [
      "Restructuring Plan Credible",
      "Lender Acceptance Secured",
      "OTS Negotiated",
      "Cash Flow Stabilised",
      "IBC Avoided",
      "Business Continuity Preserved"
    ],
    whoGrid: [
      { title: "Businesses Under Lender Pressure", desc: "Companies in SMA or early NPA classification — with a viable business model that can survive if the debt structure is corrected." },
      { title: "Promoters with Personal Guarantees", desc: "Individuals who have provided extensive personal security — needing restructuring to protect both business and personal assets." },
      { title: "Businesses Affected by Sector Downturns", desc: "Companies in hospitality, real estate, or other cyclical sectors where the downturn is temporary but the debt structure is not." },
      { title: "Resolution Applicants (IBC)", desc: "Parties bidding for distressed assets under IBC who need post-acquisition restructuring advisory to execute a viable resolution plan." }
    ],
    ctaPrimaryText: "Engage Restructuring Advisory",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop combines financial advisory, lender relationship management, and operational insight to design and execute restructuring plans that achieve lender acceptance.",
    closingTitle: "Restructuring that starts too late costs more for everyone. The business, the promoter, and the lenders.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default Restructuring;