import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const DigitalForensicPage = () => {
  const data = {
    metaTitle: "Digital Forensic Investigation | Northrop India",
    metaDescription: "Recover, preserve, and analyse digital evidence for investigations, litigation, and compliance with our court-admissible digital forensic services.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Forensic Investigations", link: null }
    ],
    bannerTitle: <>The evidence is in the <br /> system.<br /><span className="text-[#C4973B]">It's been deleted. Can you still find it?</span></>,
    bannerDescription: "Digital forensic investigation recovers, preserves, and analyses electronic evidence from computers, servers, mobile devices, and cloud systems — in a manner that maintains its admissibility in legal proceedings and regulatory investigations.",
    primaryBtnText: "Commission Digital Forensics",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "FI — 08 /",
    svcTag: "Digital Forensic Investigation",
    svcH2: <>The director said the email never existed. <em className="italic text-[#C4973B] not-italic font-serif">Digital forensics found it — and 340 others in the same thread.</em></>,
    hookText: "In the modern business environment, fraud leaves a digital trail. Deleted files, modified timestamps, WhatsApp messages, and email chains — digital forensics recovers and preserves that trail before it is further corrupted or destroyed.",
    painLabel: "When digital forensics becomes essential",
    painList: [
      { label: "Employee Fraud", text: "Departing employee deleted all files before leaving — digital forensics recovers deleted files, reconstruction of activity, and evidence of data exfiltration." },
      { label: "Contract Disputes", text: "Counterparty denies having sent an email — digital forensics establishes authenticity of electronic communications for legal proceedings." },
      { label: "Intellectual Property Theft", text: "Key employee joins competitor and takes confidential data — forensic investigation of devices and cloud accounts to identify what was taken." },
      { label: "Financial Fraud", text: "Accounting software records modified — forensic examination of database logs identifies what was changed, when, and by whom." },
      { label: "Regulatory Investigation", text: "SEBI or ED investigation requires production of electronic documents — forensic preservation ensures documents produced are complete and unaltered." }
    ],
    delGrid: [
      { title: "Forensic Device Imaging", desc: "Creating forensically sound copies of hard drives, servers, and mobile devices — preserving evidence in its original state without alteration." },
      { title: "Deleted File Recovery", desc: "Recovering deleted files, emails, and documents from forensic images — reconstructing what was removed and when." },
      { title: "Digital Evidence Analysis", desc: "Analysing electronic evidence to identify relevant communications, documents, and activity — structured around the specific questions of the investigation." },
      { title: "Digital Forensic Report", desc: "A court-admissible report documenting methodology, findings, and conclusions — prepared to the standard required for legal proceedings or regulatory submission." }
    ],
    outcomes: [
      "Deleted Files Recovered",
      "Evidence Chain of Custody Maintained",
      "Court-Admissible Report",
      "Device Analysis Completed",
      "Cloud Account Examined",
      "Regulatory Submission Ready"
    ],
    whoGrid: [
      { title: "Companies Investigating Employee Fraud", desc: "Organisations where an employee is suspected of fraud, data theft, or misconduct — needing forensic examination of their devices and accounts." },
      { title: "Legal Counsel in Litigation", desc: "Lawyers needing forensic evidence from electronic devices or systems — for civil fraud, employment dispute, or intellectual property litigation." },
      { title: "Companies Under Regulatory Investigation", desc: "Businesses subject to SEBI, ED, CBI, or other regulatory investigation requiring preservation and production of electronic evidence." },
      { title: "Boards Responding to Whistleblower Allegations", desc: "Companies where a whistleblower has alleged misconduct — needing independent digital forensic investigation to test the allegation." }
    ],
    ctaPrimaryText: "Commission Digital Forensics",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop's digital forensic investigations are conducted using industry-standard forensic tools and methodology — ensuring evidence is preserved, admissible, and defensible in any forum.",
    closingTitle: "Digital evidence is only useful if it's been preserved correctly. After it's been tampered with, it's inadmissible.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default DigitalForensicPage;
