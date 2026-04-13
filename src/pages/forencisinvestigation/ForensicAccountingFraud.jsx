import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const ForensicAccountingFraudPage = () => {
  const data = {
    metaTitle: "Forensic Accounting Fraud Investigations | Northrop India",
    metaDescription: "Northrop's forensic investigators are trained to find fraud patterns in data that looks normal — and translate them into evidence that holds up in court.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Forensic Investigations", link: null }
    ],
    bannerTitle: <>Someone in your   <br /> organisation is  <br /> stealing from it.<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">The question is how much.</span></>,
    bannerDescription: "Financial fraud in Indian organisations rarely looks dramatic. It looks like slightly unusual creditor balances, vendors you've never verified, and year-end journals that nobody questions. By the time it's visible, it's been happening for years.",
    primaryBtnText: "Commission a Fraud Investigation",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "FI — 01 /",
    svcTag: "Forensic Accounting Fraud Investigations",
    svcH2: <>The irregularity was first noticed two years ago. <em className="italic text-blue-600 not-italic font-serif">It was dismissed as a data entry error.</em></>,
    hookText: "Fraud follows patterns. Round numbers. Clustered timing. Related-party coincidences. Northrop's forensic investigators are trained to find those patterns in data that looks normal — and translate them into evidence that holds up in court.",
    painLabel: "How fraud manifests — by industry",
    painList: [
      { label: "Manufacturing", text: "Procurement fraud — phantom vendors, inflated invoices, and kickback arrangements between purchase officers and suppliers. Average loss: ₹1–8 Cr per year, running for 3–5 years before detection." },
      { label: "Retail & FMCG", text: "Cash handling fraud — POS manipulation, refund fraud, and stock pilferage. Industry average loss is 1.5–2% of revenue annually. On ₹200 Cr turnover that is ₹3–4 Cr per year." },
      { label: "Financial Services", text: "Loan officer fraud — approving related-party or ghost borrowers, creating false documentation, receiving kickbacks from borrowers. Loss: ₹5–50 Cr per event." },
      { label: "IT & Services", text: "Payroll fraud — ghost employees, inflated contractor rates, timesheet falsification. Discovered on average 24 months after commencement." },
      { label: "Real Estate", text: "Fund diversion — project funds moved to promoter-linked entities under fictitious subcontractor or supplier invoices. Typically structured to stay below audit sampling thresholds." }
    ],
    delGrid: [
      { title: "Transaction-Level Data Analytics", desc: "Full-population analysis of all transactions — not sampling. Benford's Law, vendor analysis, duplicate detection, temporal pattern mapping." },
      { title: "Forensic Evidence Collection", desc: "Securing and preserving digital and physical evidence in a manner that maintains its admissibility in legal proceedings." },
      { title: "Suspect Interview & Statement Taking", desc: "Structured interviews with relevant personnel — designed to elicit relevant facts while maintaining the integrity of any subsequent legal process." },
      { title: "Forensic Investigation Report", desc: "A court-admissible report detailing findings, evidence, methodology, and quantified loss — structured for submission to management, lenders, or law enforcement." }
    ],
    outcomes: [
      "Fraud Quantified in Rupees",
      "Legal-Grade Evidence",
      "Court-Admissible Report",
      "Perpetrator Identified",
      "Loss Recovery Pathway",
      "Preventive Controls Recommended"
    ],
    whoGrid: [
      { title: "Boards & Audit Committees", desc: "Needing an independent investigation after an internal whistleblower report, auditor red flag, or suspicious financial movement." },
      { title: "Lenders & Banks", desc: "Commissioning forensic investigation into borrower accounts where fund diversion, false documentation, or misstatement is suspected." },
      { title: "Companies Post-Acquisition", desc: "Acquirers who discover post-close that the target's financials contained fraud that pre-acquisition due diligence did not identify." },
      { title: "Law Enforcement & Legal Counsel", desc: "Supporting civil litigation or criminal proceedings with forensic accounting evidence, expert testimony, and loss quantification." }
    ],
    ctaPrimaryText: "Commission a Fraud Investigation",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has identified fund diversion, shell entities, and circular transactions across 8+ forensic mandates for PSU banks — with reports filed before the NCLT and submitted to forensic committees.",
    closingTitle: "Every day a fraud continues is another day's loss you will never recover.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default ForensicAccountingFraudPage;
