import ServicePageLayout from '../../components/services/ServicePageLayout';

const EnterpriseRiskManagement = () => {
  const data = {
    metaTitle: "Enterprise Risk Management (ERM) Services | Northrop India",
    metaDescription: "Build a living ERM framework that connects risks to owners and response plans. We provide board-level visibility into your highest-impact risks.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Risk Management", link: "/risk-management" },
      { name: "ERM", link: null }
    ],
    bannerTitle: <>Your business has a risk  <br />  register.<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Nobody has updated it since <br />  2022.</span></>,
    bannerDescription: "Enterprise Risk Management is not a document exercise. It is a living framework that connects your highest-probability risks to specific owners, response plans, and board-level visibility — before those risks become crises.",
    primaryBtnText: "Build Your ERM Framework",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "RM — 03 /",
    svcTag: "Enterprise Risk Management Services",
    svcH2: <>The risk was identified. It was on the register. <em className="italic text-blue-600 not-italic">Nobody owned the response plan.</em></>,
    hookText: "Most risk registers are written once, approved by the board, and never touched again. Enterprise risk management done right is a continuous process — with quarterly reviews, escalation triggers, and risk owners who are accountable.",
    painLabel: "What ERM failures look like — by industry",
    painList: [
      { label: "Manufacturing", text: "Single-supplier dependency flagged as a risk — no alternative sourcing plan developed. Supplier fails. Production halts for 6 weeks. ₹8 Cr revenue loss." },
      { label: "Financial Services", text: "Concentration risk in real estate lending identified in ERM review — no portfolio cap established. Sector downturn triggers simultaneous NPAs across 40% of the book." },
      { label: "Technology", text: "Cyber security risk rated 'medium' — no penetration testing, no incident response plan. Data breach affects 200,000 customers. CERT-In notice, customer churn, and reputational damage." },
      { label: "Healthcare", text: "Regulatory risk from drug pricing changes not escalated. NPPA order cuts margins by 35% — no contingency plan, no product diversification initiated." },
      { label: "Real Estate", text: "Liquidity risk from project delays not monitored. Three simultaneous projects delayed — lender cross-default clause triggered across all loan accounts." }
    ],
    delGrid: [
      { title: "Risk Identification & Assessment", desc: "Structured workshops with leadership to identify, assess, and rank risks across financial, operational, strategic, and compliance dimensions." },
      { title: "Risk Register Design & Ownership", desc: "A live, maintained risk register with designated risk owners, response plans, and escalation triggers — not a static document." },
      { title: "Risk Appetite Framework", desc: "Defining the organisation's risk appetite across risk categories — establishing clear thresholds for board escalation and management action." },
      { title: "Quarterly Risk Reporting to Board", desc: "Structured board-level risk reporting — showing risk movement, new emerging risks, and status of mitigation actions." }
    ],
    outcomes: [
      "Live Risk Register",
      "Risk Owners Designated",
      "Board Risk Reporting",
      "Risk Appetite Defined",
      "Early Warning Triggers",
      "Regulatory Compliance"
    ],
    whoGrid: [
      { title: "Boards Seeking Governance Credibility", desc: "Organisations where the board needs demonstrable evidence of risk oversight — for regulators, lenders, or institutional investors." },
      { title: "Companies in High-Volatility Sectors", desc: "Businesses in real estate, financial services, manufacturing, or healthcare where concentration, liquidity, or regulatory risks require structured oversight." },
      { title: "PE-Backed Companies", desc: "Portfolio companies where the investor requires a functioning ERM framework as part of their governance requirements post-investment." },
      { title: "Companies Approaching IPO or Listing", desc: "Businesses where SEBI requires evidence of enterprise risk management in the corporate governance disclosures." }
    ],
    ctaPrimaryText: "Build Your ERM Framework",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has designed and implemented ERM frameworks for companies across financial services, real estate, manufacturing, and technology — with quarterly risk reporting to audit committees and boards.",
    closingTitle: "A risk register that isn't reviewed quarterly is not risk management. It is wishful thinking.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default EnterpriseRiskManagement;


