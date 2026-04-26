import ServicePageLayout from '../../components/services/ServicePageLayout';

const IfcIcfrIndia = () => {
  const data = {
    metaTitle: "IFC / ICFR Compliance Services | Northrop India",
    metaDescription: "Professional support for Internal Financial Controls (IFC) and ICFR documentation and testing. We help boards manage liability and remediate material weaknesses.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Risk Management", link: "/risk-management" },
      { name: "IFC / ICFR", link: null }
    ],
    bannerTitle: <>Your auditor has flagged a  <br />  material weakness<br /> in Internal Financial  <br /> Controls.<br /> <span className="text-[#C4973B]">Now what?</span></>,
    bannerDescription: "Internal Financial Controls (IFC) and Internal Controls over Financial Reporting (ICFR) are mandatory requirements under the Companies Act 2013 for applicable companies. A material weakness is not just an audit observation — it is a potential D&O liability, a lender concern, and a market signal that something is wrong.",
    primaryBtnText: "Strengthen Your IFC / ICFR",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "RM — 05 /",
    svcTag: "IFC / ICFR in India",
    svcH2: <>The board signed the IFC declaration. <em className="italic text-blue-600 not-italic">Nobody had actually tested the controls.</em></>,
    hookText: "Directors sign off on the adequacy of Internal Financial Controls every year. Most have never seen the underlying testing documentation. When a material weakness surfaces — in audit, in due diligence, or in a regulatory review — the personal liability lands with the board.",
    painLabel: "Where IFC / ICFR failures create serious consequences",
    painList: [
      { label: "Listed Companies", text: "Auditor reports material weakness in IFC over revenue recognition — stock price falls 12% on announcement. Institutional investors demand board explanation." },
      { label: "PE-Backed Companies", text: "Pre-exit due diligence reveals IFC framework exists on paper only — no testing, no evidence. Buyer uses this to reprice by 15% or demand indemnity." },
      { label: "Banks & NBFCs", text: "RBI inspection identifies IFC gaps in credit appraisal process — mandatory remediation programme imposed. Six-month management distraction." },
      { label: "Subsidiaries of MNCs", text: "Parent company's SOX audit requires ICFR evidence from Indian subsidiary — subsidiary has no documented or tested control framework. Group audit qualified." },
      { label: "Companies Approaching IPO", text: "SEBI requires IFC compliance declaration in DRHP — company discovers 3 months before filing that their IFC framework has never been independently tested." }
    ],
    delGrid: [
      { title: "IFC Scoping & Entity-Level Controls", desc: "Identifying in-scope business processes, significant accounts, and entity-level controls — building the foundation of a defensible IFC framework." },
      { title: "Process-Level Control Documentation", desc: "Documenting process flows, risk points, and control activities for all in-scope processes — to the standard required by auditors and regulators." },
      { title: "Control Testing & Evidence Collection", desc: "Independent testing of all key controls — with evidence documented to support the directors' IFC declaration." },
      { title: "Material Weakness Remediation", desc: "Where material weaknesses or significant deficiencies exist — designing remediated controls and supporting management through the remediation programme." }
    ],
    outcomes: [
      "Directors' IFC Declaration Supported",
      "Material Weaknesses Remediated",
      "Auditor Sign-Off Facilitated",
      "ICFR Evidence Documented",
      "IPO / PE Ready",
      "RBI Inspection Ready"
    ],
    whoGrid: [
      { title: "Listed Companies with IFC Obligations", desc: "Companies required to include auditor commentary on IFC in their annual report — needing a tested, documented framework behind the declaration." },
      { title: "Companies with Material Weakness Flagged", desc: "Organisations where the statutory auditor has identified a material weakness — needing rapid remediation and evidence before the next audit cycle." },
      { title: "Subsidiaries in SOX / ICFR Groups", desc: "Indian subsidiaries required to contribute to a group-level ICFR or SOX compliance programme — needing local documentation and testing support." },
      { title: "Companies Approaching IPO or PE Exit", desc: "Businesses where IFC adequacy will be scrutinised in the listing process or exit due diligence — needing a clean, tested framework in place beforehand." }
    ],
    ctaPrimaryText: "Strengthen Your IFC / ICFR",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has supported IFC documentation and testing for listed companies, pre-IPO businesses, MNC subsidiaries, and regulated entities — with all work performed to the standard required for auditor reliance.",
    closingTitle: "Signing an IFC declaration without tested evidence is not compliance. It is personal liability.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default IfcIcfrIndia;




