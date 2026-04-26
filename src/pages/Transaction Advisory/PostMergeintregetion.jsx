
import ServicePageLayout from '../../components/services/ServicePageLayout';

const PostMergeintregetion = () => {
  const data = {
    metaTitle: "Post-Merger Integration Services | Transaction Success | Northrop India",
    metaDescription: "Structured post-merger integration to realize transaction value. We manage day-one readiness, system integration, and key talent retention to ensure M&A success.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Post-Merger Integration", link: null }
    ],
    bannerTitle: <>The deal closed six months<br />ago. <br /> <span className="text-[#C4973B]">The combined business is <br /> performing worse than either <br /> entity did separately.</span></>,
    bannerDescription: "Post-merger integration is where M&A value is created or destroyed. Most acquirers invest heavily in due diligence and almost nothing in integration planning — and pay the price in the 12 months after closing.",
    primaryBtnText: "Plan Your Post-Merger Integration",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "TA — 05 /",
    svcTag: "Post-Merger Integration",
    svcH2: <>The cultural clash was visible in the first week. <em className="italic text-blue-600 not-italic font-serif">The integration plan assumed it would resolve itself. It didn't.</em></>,
    hookText: "Integration failures are not random. They are predictable — and preventable — with the right planning before day one. The companies that create value from acquisitions are the ones that treat integration as a parallel workstream to deal closing, not an afterthought.",
    painLabel: "How post-merger integration goes wrong",
    painList: [
      { label: "Day-One Unpreparedness", text: "No plan on day one — employees don't know who their manager is, customers don't know who to call. Trust dissolves in the first week." },
      { label: "Key Talent Loss", text: "Top performers in the target company leave within 6 months because the integration process made them feel unwanted." },
      { label: "Systems Conflict", text: "Two incompatible ERP systems and charts of accounts — the finance team cannot produce consolidated management accounts for months." },
      { label: "Customer Confusion", text: "Acquirer announces brand changes before key relationships have been managed — revenue attrition begins immediately." },
      { label: "Culture Clash Ignored", text: "Plan focused entirely on systems — nobody addressed the cultural differences until they destroyed operating performance." }
    ],
    delGrid: [
      { title: "Day-One Integration Plan", desc: "Detailed plan for the first 30 days post-close — covering people, systems, customers, and communications — so the business skips no beats." },
      { title: "Integration Management Office (IMO)", desc: "Establishing and running the integration programme function — tracking workstreams, resolving conflicts, and reporting to the board." },
      { title: "Financial Systems Integration", desc: "Managing the consolidation of reporting, ERP systems, and chart of accounts — so management accounts are reliable from month one." },
      { title: "Retention & Change Management", desc: "Identifying and retaining key talent, designing communications, and managing the cultural change process to minimise attrition." }
    ],
    outcomes: [
      "Day-One Ready",
      "Key Talent Retained",
      "Systems Integrated",
      "Management Accounts Consolidated",
      "Customers Retained",
      "Integration Milestones Tracked"
    ],
    whoGrid: [
      { title: "Acquirers Post-Close", desc: "Companies that have completed an acquisition and are now facing the reality of integration — needing structured management support." },
      { title: "Acquirers in the Final Stages of Closing", desc: "Buyers in the final stages of deal close — needing pre-close integration planning to ensure day one is not chaotic." },
      { title: "Private Equity Portfolio Companies", desc: "PE-backed businesses that have made acquisitions as part of their buy-and-build strategy — needing multi-transaction support." },
      { title: "Boards Assessing Integration Progress", desc: "Audit committees and boards needing independent assessment of whether an integration programme is on track." }
    ],
    ctaPrimaryText: "Plan Your Post-Merger Integration",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop provides post-merger integration advisory combining financial, operational, and people dimensions — ensuring the value identified in due diligence is actually realised in the combined business.",
    closingTitle: "The value of an acquisition is not realised at signing. It is realised — or lost — in the 18 months after.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default PostMergeintregetion;