import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const IndAsApplicabilityPage = () => {
  const data = {
    metaTitle: "Ind-AS Applicability Compliance Consultants | Northrop India",
    metaDescription: "Definitive Ind-AS applicability assessments for growing companies and group structures. Ensure compliance with MCA thresholds and prevent auditor qualifications.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Ind-AS Applicability", link: null }
    ],
    bannerTitle: <>You may already be<br />required <br />to comply with Ind-AS.  <br />  <span className="text-[#C4973B]">Are you sure you're not?</span></>,
    bannerDescription: "Ind-AS applicability thresholds are triggered by net worth, turnover, listing status, and group structures — often without the company realising they've crossed them. Non-compliance is not a grey area. It is an MCA violation with penalties, and a qualification from your auditor.",
    primaryBtnText: "Assess Your Ind-AS Applicability",
    secondaryBtnText: "Understand what triggers it ↓",
    svcNum: "FR — 06 /",
    svcTag: "Ind-AS Applicability Compliance Consultants",
    svcH2: <>The MCA notice arrived. Your auditor<br />issued a qualification. <em className="italic text-blue-600 not-italic font-serif">You didn't know you needed Ind-AS.</em></>,
    hookText: "Ind-AS applicability is determined by thresholds that change as your business grows — and subsidiaries of Ind-AS companies are drawn in automatically, regardless of their own size. Ignorance of applicability is not a defence.",
    painLabel: "How companies get caught — by industry and structure",
    painList: [
      { label: "Subsidiaries of Listed Groups", text: "The parent crossed the Ind-AS threshold — every subsidiary is automatically required to adopt Ind-AS. The subsidiary's CFO finds out during the audit." },
      { label: "Fast-Growing SMEs", text: "Crossed ₹250 Cr net worth threshold in FY23 — Ind-AS was mandatory from FY25 with FY24 comparatives. No transition done. MCA compliance notice issued in FY26." },
      { label: "Foreign-Owned Indian Companies", text: "Indian subsidiary of a foreign holding company — required to report under Ind-AS for group consolidation. Parent's consolidated audit is qualified." },
      { label: "NBFCs & Financial Entities", text: "RBI mandates Ind-AS adoption based on asset size thresholds — companies that crossed the threshold are still applying IGAAP. RBI inspection reveals non-compliance." },
      { label: "Pre-IPO Companies", text: "SEBI requires Ind-AS financials in the DRHP. Company discovers 4 months before IPO filing that 3 years of restated Ind-AS financials are required immediately." }
    ],
    delGrid: [
      { title: "Applicability Determination Report", desc: "A definitive written assessment of your Ind-AS applicability status — based on current MCA, RBI, SEBI, and IRDA thresholds — with the mandatory adoption date confirmed." },
      { title: "Group-Level Applicability Mapping", desc: "Mapping Ind-AS applicability across your entire group structure — identifying which entities are drawn in through subsidiary or associate status, regardless of their standalone size." },
      { title: "Compliance Roadmap & Timeline", desc: "A structured timeline for achieving Ind-AS compliance — covering policy changes, system requirements, restatement of comparatives, and auditor coordination." },
      { title: "Ongoing Ind-AS Compliance Advisory", desc: "Annual review of new standards, amendments, and MCA notifications — ensuring your accounting policies remain compliant as standards evolve." }
    ],
    outcomes: [
      "Applicability Confirmed in Writing",
      "MCA Penalty Risk Eliminated",
      "Auditor Qualification Prevented",
      "Group Structure Mapped",
      "Compliance Timeline Structured",
      "Ongoing Standard Updates",
      "IPO / Listing Ready"
    ],
    whoGrid: [
      { title: "Growing Companies Near Thresholds", desc: "Businesses with net worth approaching ₹250 Cr or turnover approaching ₹500 Cr — understanding when mandatory adoption will be triggered and preparing proactively." },
      { title: "Subsidiaries of Ind-AS Companies", desc: "Indian entities — regardless of size — that are subsidiaries, associates, or joint ventures of companies that have already adopted Ind-AS." },
      { title: "Regulated Entities (NBFCs, Insurers)", desc: "Financial sector entities subject to RBI or IRDA Ind-AS applicability mandates — needing sector-specific compliance guidance beyond MCA thresholds." },
      { title: "Companies with Auditor Qualification Risk", desc: "Businesses whose auditors have flagged potential Ind-AS non-compliance — needing an independent assessment and a documented remediation path before the audit closes." }
    ],
    ctaPrimaryText: "Check Your Ind-AS Applicability",
    ctaSecondaryText: "Request a Compliance Assessment",
    trustNote: "Northrop has determined Ind-AS applicability and supported compliance across holding companies, subsidiaries, regulated entities, and pre-IPO businesses across sectors.",
    closingTitle: "Not knowing your Ind-AS status is not protection. It is exposure.",
    closingDescription: "A single applicability assessment call can confirm your position, identify your timeline, and prevent a compliance failure that costs multiples of what the advisory does."
  };

  return <ServicePageLayout {...data} />;
};

export default IndAsApplicabilityPage;
