import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const AssetTracingInvestigationPage = () => {
  const data = {
    metaTitle: "Asset Tracing Investigation Services | Northrop India",
    metaDescription: "Trace hidden assets, reconstruct financial trails, and identify undisclosed properties with Northrop's forensic asset tracing investigations.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Forensic Investigations", link: null }
    ],
    bannerTitle: <>The money left the <br /> business.<br />You know it did.<br /> <span className="text-[#C4973B]">You just can't prove where it went.</span></>,
    bannerDescription: "Asset tracing is the forensic process of following money — through accounts, entities, jurisdictions, and transactions — to identify where it is today and establish a legal basis for recovery. Without it, creditors, defrauded businesses, and insolvency estates cannot recover what is rightfully theirs.",
    primaryBtnText: "Commission an Asset Trace",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "FI — 06 /",
    svcTag: "Asset Tracing Investigation Services India",
    svcH2: <>The borrower said he had no assets.<br /><em className="italic text-[#C4973B] not-italic font-serif">The asset trace found three properties and a holding company in Mauritius.</em></>,
    hookText: "Fraudsters don't keep stolen money in one place. They layer it through multiple accounts, entities, and sometimes jurisdictions. Asset tracing reconstructs that journey — identifying assets that can be attached, frozen, and ultimately recovered.",
    painLabel: "When asset tracing becomes critical",
    painList: [
      { label: "Loan Default & Recovery", text: "Borrower claims inability to repay — asset trace identifies undisclosed properties, investments, and business interests that should form part of recovery." },
      { label: "Divorce & Family Disputes", text: "Business owner concealing assets from a settlement — hidden company shareholdings, benami property, and offshore accounts identified." },
      { label: "Post-Fraud Recovery", text: "Funds misappropriated by a director, employee, or business partner — asset trace identifies where those funds were deployed and what can be attached." },
      { label: "IBC & Insolvency", text: "Corporate debtor's promoter transferred assets before CIRP — asset trace identifies the receiving entities and supports avoidance applications." },
      { label: "Enforcement of Judgements", text: "Court decree holder unable to locate assets for enforcement — asset trace provides the intelligence needed for attachment and execution." }
    ],
    delGrid: [
      { title: "Financial Trail Reconstruction", desc: "Following money from source to current location — through bank accounts, wire transfers, and asset purchases — with documented evidence at each step." },
      { title: "Entity & Ownership Investigation", desc: "Identifying connected companies, trusts, and individuals through MCA records, beneficial ownership databases, and public record analysis." },
      { title: "Property & Asset Identification", desc: "Identifying undisclosed real estate, vehicles, investments, and business interests held by the subject — registered directly or through nominees." },
      { title: "Asset Tracing Report for Legal Proceedings", desc: "A structured report suitable for use in court proceedings, enforcement applications, or negotiations — with all evidence indexed and cross-referenced." }
    ],
    outcomes: [
      "Hidden Assets Identified",
      "Recovery Strategy Informed",
      "Court-Ready Evidence",
      "Attachment Applications Supported",
      "Jurisdiction Mapped",
      "Nominee Structures Uncovered"
    ],
    whoGrid: [
      { title: "Banks & Lenders Pursuing Recovery", desc: "Financial institutions needing asset intelligence to support enforcement action against defaulting borrowers who claim to have no assets." },
      { title: "Resolution Professionals & Liquidators", desc: "IBC practitioners needing asset intelligence on promoters and related parties to maximise estate recovery." },
      { title: "Victims of Fraud", desc: "Companies and individuals defrauded by a business partner, employee, or counterparty — needing to locate assets before they are dissipated further." },
      { title: "Legal Counsel in Enforcement Proceedings", desc: "Advocates needing forensic asset intelligence to support attachment, garnishment, or Mareva injunction applications." }
    ],
    ctaPrimaryText: "Commission an Asset Trace",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop conducts asset tracing investigations using forensic accounting, public records analysis, and entity relationship mapping — producing evidence suitable for court proceedings and recovery applications.",
    closingTitle: "Assets that cannot be found cannot be recovered. Asset tracing is the difference between a judgement and an outcome.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default AssetTracingInvestigationPage;
