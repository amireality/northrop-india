import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const VendorDd = () => {
  const data = {
    metaTitle: "Vendor Due Diligence | Northrop India",
    metaDescription: "Independent Vendor Due Diligence reports providing objective, detailed financial analysis for potential buyers and mitigating transaction risks.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Due Diligence", link: "/services/due-diligence" },
      { name: "Vendor DD", link: null }
    ],
    bannerTitle: <>Vendor <br /><span className=" text-[#C4973B]">Due Diligence</span></>,
    bannerDescription: "Independent reports evaluating your business on an objective basis to accelerate M&A and give potential buyers confidence.",
    primaryBtnText: "Vet Your Vendor Base",
    secondaryBtnText: "Request a Scope Call",
    svcNum: "03 /",
    svcTag: "Vendor Due Diligence",
    svcH2: <span dangerouslySetInnerHTML={{ __html: `Your largest vendor accounts for 40% of<br/>your cost base. <em class="italic text-blue-600 not-italic font-serif">Do you actually know them?</em>` }} />,
    hookText: "Vendor fraud, inflated invoicing, and shell-company intermediaries are endemic in Indian supply chains. VDD is the firewall between your business and its biggest operational blind spot.",
    painLabel: "What goes wrong with unvetted vendors",
    painList: [
      { label: "Shell Entities", text: "Vendor is a shell entity — purchases funnelled back to a promoter-linked party." },
      { label: "Over-Invoicing", text: "Over-invoicing: goods at ₹100, billed at ₹140 — systematically, for years." },
      { label: "Kickbacks", text: "Kickback structures between your procurement team and the vendor's management." },
      { label: "Supply Chain Collapse", text: "Single-source vendors with no financial capacity to perform — supply chain collapse risk." },
      { label: "GST Non-Compliance", text: "GST non-compliance creating ITC reversal exposure directly for your company." }
    ],
    delGrid: [
      { title: "Entity Verification", desc: "MCA, GST, litigation, and ownership checks. Identifying related-party links, shell characteristics, and beneficial ownership." },
      { title: "Financial Health Assessment", desc: "Can your critical vendor actually perform? Balance sheet size, bank lines, and operational capacity verified before you commit." },
      { title: "Pricing Benchmark Analysis", desc: "Are you paying market rates? Invoice-level analysis against benchmarks — overpricing exposure quantified precisely." },
      { title: "GST & Compliance Audit", desc: "GSTR-2A/2B reconciliation, e-way bill verification, and ITC risk quantification across your vendor base." }
    ],
    outcomes: [
      "Fraud Prevention",
      "ITC Risk Eliminated",
      "Supply Chain Resilience",
      "Procurement Governance"
    ],
    whoGrid: [
      { title: "Investment Banks", desc: "Advisors managing auction processes and requiring a robust data foundation." },
      { title: "Private Equity", desc: "Sponsors seeking a clean exit from a portfolio asset." },
      { title: "Corporate Sellers", desc: "Enterprises spinning out divisions or wholly-owned subsidiaries." }
    ],
    ctaPrimaryText: "Vet Your Vendor Base",
    ctaSecondaryText: "Request a Scope Call",
    trustNote: "Financial irregularities identified in 60%+ of vendor forensic reviews conducted across PSU bank mandates.",
    closingTitle: "Take the next step towards an efficient exit.",
    closingDescription: "Our teams stand ready to guide you through your critical next moves."
  };

  return <ServicePageLayout {...data} />;
};

export default VendorDd;