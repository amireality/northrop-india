import ServicePageLayout from '../../components/services/ServicePageLayout';

const RiskControlRegister = () => {
  const data = {
    metaTitle: "Risk & Control Registers (RCR) Consulting | Northrop India",
    metaDescription: "Build and test your Risk & Control Registers. We map risks to controls and test operating effectiveness to provide genuine board-level assurance.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Risk Management", link: "/risk-management" },
      { name: "Risk & Control Registers", link: null }
    ],
    bannerTitle: <>Your controls are <br /> documented.<br /> <span className="text-[#C4973B]">None of them are tested.</span></>,
    bannerDescription: "A Risk and Control Register (RCR) maps every significant risk to the specific control designed to mitigate it — and tests whether that control is actually operating. Without it, your assurance framework is a narrative. With it, it's a system.",
    primaryBtnText: "Build Your Risk & Control Register",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "RM — 04 /",
    svcTag: "Risk & Control Registers Consulting",
    svcH2: <>The control was in the register. <em className="italic text-blue-600 not-italic">It had never been tested. It didn't work.</em></>,
    hookText: "Most organisations can tell you what controls exist. Almost none can tell you whether those controls are operating effectively today. The Risk and Control Register closes that gap — linking risk to control to evidence.",
    painLabel: "Where RCR gaps create real exposure",
    painList: [
      { label: "Banking & NBFC", text: "Credit approval control requires dual authorisation — but the system allows single-officer override for loans under ₹50L. 40% of NPAs originated under override." },
      { label: "Manufacturing", text: "Inventory write-off control requires physical count before write-off is approved — count never actually conducted. ₹3 Cr in fictitious write-offs over 2 years." },
      { label: "IT Services", text: "Access control policy restricts database access to 3 administrators — 22 users have active database credentials. Data breach occurs through a former employee's account." },
      { label: "Pharma", text: "Quality control sign-off required before batch release — backdated sign-offs discovered during FDA inspection. ₹15 Cr product recall and regulatory action." },
      { label: "FMCG", text: "Vendor payment control requires 3-way match — system configured to auto-approve without purchase order if invoice is under ₹2L. ₹4 Cr in duplicate payments over 3 years." }
    ],
    delGrid: [
      { title: "Risk-Control Mapping", desc: "Every significant risk mapped to the specific control(s) designed to mitigate it — with gap identification where controls are absent or inadequate." },
      { title: "Control Design Assessment", desc: "Evaluating whether each control is designed to be effective — not just whether it exists on paper." },
      { title: "Control Operating Effectiveness Testing", desc: "Testing whether controls are actually working — through transaction testing, observation, inquiry, and re-performance." },
      { title: "Control Remediation Roadmap", desc: "Prioritised recommendations for control gaps, design deficiencies, and operating failures — with owners and timelines." }
    ],
    outcomes: [
      "Risk-Control Matrix Built",
      "Design Gaps Identified",
      "Operating Effectiveness Tested",
      "Remediation Prioritised",
      "Audit Committee Ready",
      "Regulatory Inspection Ready"
    ],
    whoGrid: [
      { title: "Companies Preparing for Regulatory Inspection", desc: "Businesses facing RBI, SEBI, IRDA, or other regulatory review who need documented and tested controls before the inspection." },
      { title: "Companies Under ICFR/SOX Requirements", desc: "Listed companies or subsidiaries of US-listed entities where ICFR compliance requires tested risk-control documentation." },
      { title: "Companies Post-Fraud or Control Failure", desc: "Organisations that have experienced a control failure or fraud — needing a systematic rebuild of their control environment." },
      { title: "Boards Seeking Independent Control Assurance", desc: "Audit committees needing independent confirmation that management's controls are functioning as reported." }
    ],
    ctaPrimaryText: "Build Your Risk & Control Register",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has built and tested risk-control registers for regulated entities, listed companies, and PE-backed businesses — with findings reported to boards and audit committees.",
    closingTitle: "A control that isn't tested isn't a control. It's an assumption.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default RiskControlRegister;



