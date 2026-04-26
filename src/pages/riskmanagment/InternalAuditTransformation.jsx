import ServicePageLayout from '../../components/services/ServicePageLayout';

const InternalAuditTransformationPage = () => {
  const data = {
    metaTitle: "Internal Audit Transformation Services | Northrop India",
    metaDescription: "Modernize your internal audit function into a business intelligence engine. We help boards and management drive forward-looking risk management.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Risk Management", link: "/risk-management" },
      { name: "Internal Audit Transformation", link: null }
    ],
    bannerTitle: <>Your internal audit <br /> function costs <br /> ₹40 lakhs a year. <br /> <span className="text-[#C4973B]">Nobody reads the reports.</span></>,
    bannerDescription: "Internal audit transformation converts a compliance function into a genuine business intelligence engine — one that boards actually use, management actually responds to, and that prevents failures rather than documenting them after the fact.",
    primaryBtnText: "Transform Your Internal Audit",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "RM — 02 /",
    svcTag: "Internal Audit Transformation",
    svcH2: <>The audit team files 12 reports a year. <em className="italic text-blue-600 not-italic">The board has actioned findings from two of them.</em></>,
    hookText: "Internal audit transformation is about building an IA function that matters — with the right risk framework, the right reporting cadence, and findings calibrated to decisions, not documentation.",
    painLabel: "Signs your internal audit function needs transformation",
    painList: [
      { label: "Reports ignored", text: "Management acknowledges findings, agrees to corrective actions, and the same finding appears in the next quarter's audit. Nothing changes." },
      { label: "Scope too narrow", text: "Audit covers the same low-risk processes year after year. High-risk areas — revenue, procurement, related parties — are perpetually 'out of scope'." },
      { label: "Backward-looking only", text: "Every audit report describes what went wrong 6 months ago. No forward-looking risk identification, no early warning mechanism." },
      { label: "No data analytics", text: "Audit samples 25 transactions out of 25,000. The fraudulent transactions are in the 24,975 that weren't reviewed." },
      { label: "No board confidence", text: "Audit committee meetings treat the IA report as a formality. No discussion, no challenge, no follow-through on open observations." }
    ],
    delGrid: [
      { title: "Risk Universe & Audit Universe Design", desc: "Building the complete map of your business risks — financial, operational, compliance, strategic — ranked by impact and likelihood." },
      { title: "Data Analytics Integration", desc: "Embedding data analytics into the audit process — moving from sample-based testing to full-population transaction analysis." },
      { title: "Audit Methodology & Charter", desc: "Designing the IA charter, methodology, reporting templates, and escalation protocols that define how findings flow to the board." },
      { title: "Audit Committee Engagement Framework", desc: "Structuring how internal audit presents to the audit committee — ensuring findings drive decisions, not just acknowledgements." }
    ],
    outcomes: [
      "Board-Responsive IA Function",
      "Risk Universe Mapped",
      "Data Analytics Embedded",
      "Findings That Drive Action",
      "Audit Committee Confidence",
      "Forward-Looking Risk Identification"
    ],
    whoGrid: [
      { title: "Companies with Underperforming IA Functions", desc: "Organisations whose internal audit exists but doesn't deliver — findings not actioned, reports not read, board confidence low." },
      { title: "Companies Scaling Rapidly", desc: "Businesses that have outgrown their original IA setup — needing a function redesigned for their current risk profile and complexity." },
      { title: "Pre-IPO & Pre-PE Companies", desc: "Businesses preparing for institutional scrutiny who need a demonstrably independent and functional internal audit before investors look closely." },
      { title: "Banks & Regulated Entities", desc: "Financial institutions where RBI or SEBI audit framework compliance requires a specific IA structure — needing transformation to meet regulatory expectations." }
    ],
    ctaPrimaryText: "Transform Your Internal Audit",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has redesigned internal audit functions for companies ranging from ₹50 Cr to ₹1,000 Cr turnover — delivering audit transformation that results in board-level action, not filing cabinet reports.",
    closingTitle: "An internal audit function that doesn't change outcomes isn't a function. It's a cost centre.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default InternalAuditTransformationPage;

