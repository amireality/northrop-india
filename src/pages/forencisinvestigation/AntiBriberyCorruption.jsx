import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const AntiBriberyCorruptionPage = () => {
  const data = {
    metaTitle: "Anti-Bribery & Corruption Services | Northrop India",
    metaDescription: "Assess, establish, and investigate anti-bribery policies to prevent and protect against corruption risks and ensure compliance with the Prevention of Corruption Act.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Forensic Investigations", link: null }
    ],
    bannerTitle: <>Your procurement team is the most trusted<br />people in the building.<br /> <span className="text-[#C4973B]">They are also the most exposed.</span></>,
    bannerDescription: "Bribery and corruption risk in India spans procurement, government licensing, customs, and sales. The consequences — criminal prosecution under the Prevention of Corruption Act, reputational damage, and business loss — are severe enough that prevention is categorically cheaper than response.",
    primaryBtnText: "Commission an ABC Assessment",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "FI — 05 /",
    svcTag: "Anti-Bribery & Corruption Services",
    svcH2: <>The whistleblower report said bribes were being paid<br />to win government contracts. <em className="italic text-[#C4973B] not-italic font-serif">The board had no framework to investigate.</em></>,
    hookText: "Anti-bribery and corruption work operates on two levels: the preventive (building the policies, controls, and culture that reduce exposure) and the reactive (investigating allegations when they arise, before they become criminal exposure for the organisation or its directors).",
    painLabel: "Where bribery and corruption risk is highest — by sector",
    painList: [
      { label: "Government Contracts & Infrastructure", text: "Payments to government officials for tender advantage, licence approvals, or inspection sign-offs. Criminal exposure under PCA for the company and its directors personally." },
      { label: "Pharma & Healthcare", text: "Doctor incentive programmes that cross the line from legitimate promotion to corrupt inducement — regulatory action under MCI guidelines and potential criminal proceedings." },
      { label: "Customs & Logistics", text: "Informal payments to expedite customs clearance — creating undocumented cash flows, false vendor invoices, and tax exposure." },
      { label: "Real Estate", text: "Payments to municipal officers for building plan approvals, completion certificates, and occupancy certificates — routine in practice, catastrophic in an enforcement scenario." },
      { label: "FMCG & Retail", text: "Channel partner incentive schemes structured to obscure payments that may constitute corrupt inducements to retail outlet owners or distributors." }
    ],
    delGrid: [
      { title: "ABC Risk Assessment", desc: "Mapping your highest bribery and corruption risk areas across geography, function, and transaction type — with a risk-based prioritisation." },
      { title: "Policy & Framework Design", desc: "Drafting anti-bribery policies, gifts and hospitality registers, third-party due diligence frameworks, and whistleblower mechanisms aligned to global best practice." },
      { title: "Bribery Allegation Investigation", desc: "Independent investigation of specific bribery or corruption allegations — structured to protect the company and preserve legal privilege where possible." },
      { title: "Third-Party Due Diligence", desc: "Due diligence on agents, distributors, and government-facing intermediaries — the highest-risk third parties in an ABC context." }
    ],
    outcomes: [
      "Risk Areas Mapped",
      "ABC Policy Implemented",
      "Allegation Investigated",
      "Third-Party Risk Mitigated",
      "Director Liability Protected",
      "Regulatory Defensibility Built"
    ],
    whoGrid: [
      { title: "Companies with Government-Facing Operations", desc: "Businesses regularly interacting with government officials for licences, approvals, contracts, or inspections — with elevated PCA exposure." },
      { title: "Multinationals with Indian Operations", desc: "Foreign companies with Indian subsidiaries facing FCPA, UK Bribery Act, or parent group ABC policy compliance requirements." },
      { title: "Companies Receiving Bribery Allegations", desc: "Organisations that have received a whistleblower report, regulatory query, or media allegation related to corruption — needing independent investigation." },
      { title: "Companies Pre-IPO or Pre-Acquisition", desc: "Businesses where investors or acquirers require an ABC compliance review as part of their due diligence process." }
    ],
    ctaPrimaryText: "Commission an ABC Assessment",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop provides ABC assessment, policy design, and allegation investigation services — bringing forensic rigour to corruption risk management across regulated and government-exposed sectors.",
    closingTitle: "In anti-bribery enforcement, the question is never whether it happened. It's whether you knew and what you did about it.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default AntiBriberyCorruptionPage;
