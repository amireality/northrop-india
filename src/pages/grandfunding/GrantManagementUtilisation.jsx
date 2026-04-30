import ServicePageLayout from '../../components/services/ServicePageLayout';

const GrantManagementUtilisationPage = () => {
  const data = {
    metaTitle: "Grant Management & Utilisation Services for NGOs | Northrop India",
    metaDescription: "Professional grant management, financial controls, and utilisation reporting for NGOs and social enterprises. We ensure institutional-grade rigour for your grants.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Grant Management & Utilisation", link: null }
    ],
    bannerTitle: <>The grant was received. <br /> <span className="text-[#C4973B]">Who is managing it with <br /> institutional rigour?</span></>,
    bannerDescription: "Grant management is the professional discipline of receiving, tracking, deploying, and reporting on grant funding — with the governance, financial controls, and documentation that institutional funders require. Northrop serves as professional grant manager for organisations that need institutional-grade management without building it in-house.",
    primaryBtnText: "Engage Grant Management Services",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "GF — 06 /",
    svcTag: "Grant Management & Utilisation Services",
    svcH2: <>The funder commissioned an audit. <em className="italic text-[#C4973B] not-italic">The implementing organisation could not reconcile grant expenditure to activities. The grant was recalled.</em></>,
    hookText: "Grant management failure is more common than funders publicly acknowledge. Funds not tracked to activities, utilisation certificates not obtained, reporting timelines missed — each failure erodes the funder relationship and creates financial risk for the organisation.",
    painLabel: "Where grant management failures create serious consequences",
    painList: [
      { label: "Utilisation Certificate Gaps", text: "Funds disbursed to sub-grantees without utilisation certification — lead organisation cannot certify to the funder that funds were used as intended. Grant recalled." },
      { label: "Expenditure Not Linked to Outputs", text: "Grant expenditure tracked in accounting system but not linked to specific activities or outputs — funder audit cannot verify value for money." },
      { label: "Fund Diversion Risk", text: "Without ring-fenced grant accounts and fund flow documentation, commingling of restricted and unrestricted funds creates regulatory and fiduciary risk." },
      { label: "Reporting Delays", text: "Financial reports consistently delayed — funder loses confidence in organisational capacity and does not renew, regardless of programme quality." },
      { label: "Compliance with Donor Conditions", text: "Grant agreement contains specific financial conditions — procurement thresholds, prior approval requirements, restricted cost categories — not tracked systematically." }
    ],
    delGrid: [
      { title: "Grant Account Management", desc: "Establishing and managing ring-fenced grant accounts — fund flow tracking from receipt through to sub-grantee and activity-level disbursement." },
      { title: "Sub-Grantee Fund Management", desc: "Managing fund flows to implementing partners — due diligence, grant agreements, disbursements, utilisation certification, and reconciliation." },
      { title: "Funder Financial Reporting", desc: "Preparing periodic financial reports to funder standards — budget vs. actuals, variance explanation, and forecast to completion — on time, every period." },
      { title: "Grant Audit Support", desc: "Managing the grant audit process — preparing the audit file, coordinating with auditors, and supporting any funder-commissioned review." }
    ],
    outcomes: [
      "Funds Tracked to Activities",
      "Utilisation Certified",
      "Reporting On Time",
      "Sub-Grantees Managed",
      "Audit Trail Complete",
      "Funder Relationship Protected"
    ],
    whoGrid: [
      { title: "NGOs Managing Large Institutional Grants", desc: "Organisations receiving first or largest institutional grant — needing professional grant management that their own systems cannot provide." },
      { title: "CSR Implementing Partners", desc: "NGOs implementing corporate CSR programmes where the corporate donor requires institutional-grade financial management and reporting." },
      { title: "Multi-Partner Consortia", desc: "Consortium leads managing grants distributed across multiple implementing partners — needing a fund manager to ensure accountability across the consortium." },
      { title: "International NGOs with Indian Operations", desc: "International organisations running India programmes — needing a local professional grant manager with knowledge of Indian financial regulations." }
    ],
    ctaPrimaryText: "Engage Grant Management Services",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop serves as professional Grant Manager for development organisations — providing the governance, financial management, and reporting infrastructure that institutional funders require.",
    closingTitle: "Grant management is the infrastructure of impact. Without it, even the best programmes lose their funding.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default GrantManagementUtilisationPage;