import ServicePageLayout from '../../components/services/ServicePageLayout';

const InternalAuditPage = () => {
  const data = {
    metaTitle: "Internal Audit & Risk Management Services | Northrop India",
    metaDescription: "Independent, risk-based internal audit services that report directly to the board. We provide genuine assurance beyond checkbox compliance.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Risk Management", link: "/risk-management" },
      { name: "Internal Audit", link: null }
    ],
    bannerTitle: <>Your internal audit <br /> function reports to <br /> management.<br /> <span className="text-[#C4973B]">Who is auditing management?</span></>,
    bannerDescription: "An internal audit that exists to satisfy a checkbox protects no one. A genuinely independent, risk-based internal audit function is the earliest warning system between your business and a material failure.",
    primaryBtnText: "Commission an Internal Audit",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "RM — 01 /",
    svcTag: "Internal Audit",
    svcH2: <>The control failure was flagged in the internal audit draft. <em className="italic text-blue-600 not-italic">It never made it to the board.</em></>,
    hookText: "Independence is not a formality. When internal audit reports to the CFO whose budgets are being reviewed, findings that matter quietly disappear. Northrop conducts internal audit as an independent mandate — findings reach the board, every time.",
    painLabel: "What happens when internal audit isn't truly independent",
    painList: [
      { label: "Manufacturing", text: "Inventory shrinkage of ₹4 Cr flagged in field audit — softened to 'process deviation' before the board sees it. Loss continues for three more years." },
      { label: "NBFC", text: "Internal audit identifies loan officers approving related-party borrowers outside credit policy — report sanitised before submission. NPA emerges 18 months later." },
      { label: "Healthcare", text: "Procurement irregularities in consumables purchasing — internal team reluctant to escalate against department head. External audit discovers ₹6 Cr overstatement." },
      { label: "IT & Services", text: "Billing leakages from unbilled project hours — internal audit scope excludes revenue cycle at management's request. 9% topline loss continues unchallenged." },
      { label: "Real Estate", text: "Project cost overruns attributed to 'market conditions' — internal audit does not verify subcontractor billings. ₹12 Cr in inflated sub-contractor invoices undetected." }
    ],
    delGrid: [
      { title: "Risk-Based Audit Planning", desc: "Audit scope built around your highest financial-impact risk areas — not a generic template applied uniformly every year." },
      { title: "Independent Field Verification", desc: "Physical verification of inventory, assets, and transactions — going beyond records to what is actually there." },
      { title: "Process & Control Testing", desc: "Testing whether controls are operating as designed, not just whether they exist on paper." },
      { title: "Board-Level Audit Report", desc: "Findings presented directly to audit committee or board — with management responses documented separately." }
    ],
    outcomes: [
      "Independent Board Reporting",
      "Risk-Ranked Findings",
      "Physical Verification",
      "Control Gap Closure",
      "Audit Committee Ready",
      "Lender-Grade Assurance"
    ],
    whoGrid: [
      { title: "Companies Without In-House IA", desc: "Businesses too small for a dedicated internal audit team — needing the function outsourced to an independent party." },
      { title: "Companies With IA Reporting to CFO", desc: "Organisations where internal audit independence is compromised by reporting structure — needing an external mandate to restore credibility." },
      { title: "PE-Backed Portfolio Companies", desc: "Where investors require independent internal audit as a governance condition of their investment or ongoing reporting obligations." },
      { title: "Boards & Audit Committees", desc: "Seeking a second, independent review of whether management-reported controls are actually functioning as described." }
    ],
    ctaPrimaryText: "Commission an Internal Audit",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop conducts internal audit engagements across manufacturing, NBFC, healthcare, and professional services — with all findings reported directly to the audit committee, not management.",
    closingTitle: "An internal audit that doesn't reach the board is not an audit. It is assurance theatre.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default InternalAuditPage;
