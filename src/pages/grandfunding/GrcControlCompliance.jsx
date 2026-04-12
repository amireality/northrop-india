import ServicePageLayout from '../../components/services/ServicePageLayout';

const GrcControlCompliance = () => {
  const data = {
    metaTitle: "GRC Compliance for NGOs & Development | Northrop India",
    metaDescription: "Governance, Risk, and Compliance (GRC) advisory for development organisations. FCRA compliance, Darpan management, and institutional due diligence readiness.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "GRC Compliance", link: null }
    ],
    bannerTitle: <>Governance, Risk, and Compliance for <br /> development organisations. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">It's not optional — it's the foundation <br /> of funder trust.</span></>,
    bannerDescription: "For NGOs, social enterprises, and development organisations, GRC (Governance, Risk, and Compliance) is the institutional infrastructure that separates organisations that funders trust from those they don't. Without it, access to institutional funding is perpetually limited.",
    primaryBtnText: "Build Your GRC Framework",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "GF — 07 /",
    svcTag: "GRC Control & Compliance Services",
    svcH2: <>The due diligence questionnaire asked about governance structures, risk management, and compliance. <em className="italic text-blue-600 not-italic">The organisation could only answer three of the twelve questions.</em></>,
    hookText: "International funders, bilateral donors, and sophisticated CSR committees conduct organisational due diligence before making grants. They are specifically looking for governance quality, risk awareness, and compliance credibility.",
    painLabel: "Where GRC gaps block organisational growth",
    painList: [
      { label: "FCRA Compliance", text: "Foreign Contribution Regulation Act requirements — designated account maintenance, reporting, prior permission — not fully complied with. FCRA renewal risk." },
      { label: "Darpan Registration", text: "NGO Darpan registration lapsed or incomplete — prerequisite for government grants, FCRA, and many CSR programmes. Ineligible for funding." },
      { label: "Board Governance", text: "Board not meeting minimum quorum or frequency requirements — minutes incomplete, conflict of interest policy absent. Funder due diligence fails governance assessment." },
      { label: "Financial Controls", text: "No documented procurement policy, no authorisation matrix, no separation of duties in finance — funder due diligence identifies systemic control weakness." },
      { label: "Statutory Compliance", text: "Income tax filings, 80G/12A registration, NITI Aayog Darpan, state registration — one or more expired or non-compliant. Organisation becomes ineligible for multiple funding streams." }
    ],
    delGrid: [
      { title: "GRC Assessment & Gap Analysis", desc: "Comprehensive assessment of your governance, risk management, and compliance status — against the requirements of your target funders and applicable regulations." },
      { title: "Governance Framework Design", desc: "Designing board structures, policies, and committee frameworks that meet institutional funder expectations — conflict of interest, whistleblower, and financial control policies." },
      { title: "Statutory Compliance Management", desc: "Managing the ongoing statutory compliance calendar — FCRA returns, income tax, Darpan, 80G/12A, state registration — so nothing lapses." },
      { title: "Pre-Due Diligence Readiness", desc: "Preparing the organisation for institutional funder due diligence — creating the documentation package that answers standard due diligence questionnaires comprehensively." }
    ],
    outcomes: [
      "FCRA Compliant",
      "Darpan Current",
      "Board Governance Documented",
      "Financial Controls Implemented",
      "Due Diligence Ready",
      "80G / 12A Valid"
    ],
    whoGrid: [
      { title: "NGOs Approaching Institutional Funders", desc: "Organisations preparing to approach bilateral donors, large foundations, or corporate CSR committees — needing to meet the governance standards required." },
      { title: "Organisations with Compliance Gaps", desc: "NGOs with lapsed registrations, incomplete filings, or governance weaknesses — needing systematic remediation before applying for significant funding." },
      { title: "Newly Established Development Organisations", desc: "New NGOs or social enterprises building their institutional infrastructure from the start — needing GRC guidance to build correctly from day one." },
      { title: "Organisations Scaling Fund-Raising", desc: "Development organisations moving from small local donors to institutional funders — requiring GRC infrastructure that matches the governance expectations of larger funders." }
    ],
    ctaPrimaryText: "Build Your GRC Framework",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop provides GRC advisory and compliance management for development organisations — including FCRA compliance, Darpan management, governance framework design, and institutional due diligence preparation.",
    closingTitle: "Funders don't give grants to organisations they don't trust. GRC is how you build that trust systematically.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default GrcControlCompliance;