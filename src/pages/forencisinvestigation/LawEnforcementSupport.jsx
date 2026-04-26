import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const LawEnforcementSupportPage = () => {
  const data = {
    metaTitle: "Law Enforcement Support Services | Northrop India",
    metaDescription: "Northrop provides the financial forensic backbone that makes complex fraud cases prosecutable. Get court-admissible evidence and quantitative analysis.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Forensic Investigations", link: null }
    ],
    bannerTitle: <>You have the allegation.<br />You need the evidence<br /> <span className="text-[#C4973B]">that makes it stand up in court.</span></>,
    bannerDescription: "Law enforcement agencies, regulatory bodies, and legal counsel increasingly need forensic accounting experts to translate complex financial transactions into evidence that investigators, prosecutors, and judges can understand and act upon.",
    primaryBtnText: "Engage Forensic Support",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "FI — 02 /",
    svcTag: "Law Enforcement Support Services",
    svcH2: <>The case collapsed. <em className="italic text-blue-600 not-italic font-serif">The financial evidence wasn't in a form the court could use.</em></>,
    hookText: "Financial fraud cases fail not because the fraud didn't happen — but because the forensic evidence wasn't structured correctly. Northrop provides the financial forensic backbone that makes complex fraud cases prosecutable.",
    painLabel: "Where financial evidence fails law enforcement",
    painList: [
      { label: "Economic Offences", text: "Complex multi-entity fund flows presented to court without a clear visual narrative — judge cannot follow the money trail. Case dismissed for lack of evidence structure." },
      { label: "Money Laundering", text: "AML investigation identifies suspicious transactions — forensic accountant needed to reconstruct the layering and integration phases for the chargesheet." },
      { label: "Corporate Fraud (CBI/ED)", text: "Bank fraud case with 50 shell companies — investigation team needs forensic mapping of beneficial ownership and transaction flows across all entities." },
      { label: "Insolvency Fraud (IBC)", text: "Resolution professional suspects pre-CIRP asset stripping — PUFE transaction analysis required for NCLT submission." },
      { label: "Regulatory Enforcement (SEBI)", text: "Market manipulation case requires reconstruction of trading patterns and fund flows to establish concerted action." }
    ],
    delGrid: [
      { title: "Transaction Flow Reconstruction", desc: "Mapping complex multi-entity, multi-account fund flows into a clear, court-presentable narrative — showing how money moved and where it went." },
      { title: "Expert Witness Report", desc: "A forensic accounting expert report prepared to the evidentiary standards required for court or tribunal submission." },
      { title: "Beneficial Ownership Mapping", desc: "Identifying the ultimate beneficial owners behind complex entity structures — for chargesheet, regulatory action, or NCLT submission." },
      { title: "Financial Loss Quantification", desc: "Independent quantification of financial loss for purposes of criminal sentencing, civil damages, or regulatory penalty determination." }
    ],
    outcomes: [
      "Court-Admissible Evidence",
      "Expert Witness Availability",
      "Fund Flow Visualised",
      "Loss Quantified",
      "Chargesheet Ready",
      "Regulatory Submission Ready"
    ],
    whoGrid: [
      { title: "CBI, ED & Economic Offences Wing", desc: "Law enforcement agencies needing forensic accounting support to build prosecutable financial fraud cases." },
      { title: "NCLT & Insolvency Professionals", desc: "Resolution professionals requiring PUFE transaction analysis and forensic reports for submission to the NCLT." },
      { title: "Legal Counsel in Civil Fraud Litigation", desc: "Solicitors and advocates needing forensic accounting expert evidence and expert witness testimony for civil fraud proceedings." },
      { title: "Banks Pursuing Loan Recovery", desc: "Lenders pursuing criminal action against fraudulent borrowers — needing forensic evidence to support FIR and recovery proceedings." }
    ],
    ctaPrimaryText: "Engage Forensic Support",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has served as Transaction Auditor and forensic advisor in IBC proceedings, providing PUFE analysis and forensic reports submitted before the NCLT.",
    closingTitle: "Financial fraud only leads to prosecution when the evidence is built by someone who speaks both finance and law.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default LawEnforcementSupportPage;
