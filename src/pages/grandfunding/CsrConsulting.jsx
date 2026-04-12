import ServicePageLayout from '../../components/services/ServicePageLayout';

const CsrConsultingPage = () => {
  const data = {
    metaTitle: "CSR Consulting & Compliance Services | Northrop India",
    metaDescription: "Professional CSR policy design, implementing partner due diligence, and compliance support under the Companies Act 2013. We help companies create impactful CSR.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "CSR Consulting", link: null }
    ],
    bannerTitle: <>Your company is spending <br /> ₹2 Cr on CSR. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">You're not sure any of it <br /> is creating impact.</span></>,
    bannerDescription: "Corporate Social Responsibility is a legal obligation for applicable companies — but also a reputational and governance asset when done well. Done poorly, it creates compliance risk, reputational exposure, and wasted capital.",
    primaryBtnText: "Get CSR Advisory",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "GF — 04 /",
    svcTag: "Corporate Social Responsibility Consulting",
    svcH2: <>The CSR audit found that 40% of the spending did not qualify under Schedule VII. <em className="italic text-blue-600 not-italic">The shortfall is now a penalty plus mandatory catch-up expenditure.</em></>,
    hookText: "CSR compliance under the Companies Act 2013 is more complex than it appears — qualifying activities, implementing agency governance, utilisation certification, and CSR-1 compliance create a compliance architecture that many companies do not have in place.",
    painLabel: "Where CSR compliance creates corporate risk",
    painList: [
      { label: "Schedule VII Non-Compliance", text: "Expenditure on activities that don't qualify under Schedule VII — discovered during statutory audit. Unspent CSR must be transferred to the national unspent CSR fund." },
      { label: "Implementing Agency Failure", text: "CSR funds transferred to an NGO that is not CSR-1 registered or is subsequently found to be misappropriating funds — corporate is liable under the Act." },
      { label: "Utilisation Certificate Gaps", text: "Utilisation certificates not obtained from implementing agencies — CSR activity cannot be substantiated during MCA audit or scrutiny." },
      { label: "Impact Non-Documentation", text: "CSR report in the Annual Report shows activities and expenditure but no outcomes — governance failure that invites investor and regulator scrutiny." },
      { label: "Related Party NGO", text: "CSR funds directed to an NGO connected to company directors — related party transaction under CSR rules attracts regulatory and reputational risk." }
    ],
    delGrid: [
      { title: "CSR Policy & Committee Support", desc: "Drafting a CSR policy and supporting the CSR committee — with activity selection, budget allocation, and monitoring mechanisms aligned to the Act." },
      { title: "Implementing Partner Due Diligence", desc: "Due diligence on NGO implementing partners — CSR-1 registration, governance, financial management, and track record — before funds are transferred." },
      { title: "CSR Activity Design & Implementation Oversight", desc: "Designing CSR programmes aligned to Schedule VII and the company's strategic interests — with implementation oversight and milestone monitoring." },
      { title: "CSR Compliance & Annual Report Support", desc: "Ensuring full CSR compliance — utilisation certificates, CSR-1 filings, CSRB returns, and Annual Report disclosures — aligned to MCA requirements." }
    ],
    outcomes: [
      "Schedule VII Compliant",
      "CSR-1 Partners Vetted",
      "Utilisation Certified",
      "Annual Report Ready",
      "MCA Compliance Maintained",
      "Impact Documented"
    ],
    whoGrid: [
      { title: "Companies Above CSR Threshold", desc: "Listed and unlisted companies above the net worth, turnover, or profit thresholds triggering mandatory CSR — needing advisory on policy, activities, and compliance." },
      { title: "Companies with Compliance Gaps", desc: "Companies that have been spending on CSR but have not maintained the required documentation, certifications, or filings — needing compliance remediation." },
      { title: "Companies Seeking Strategic CSR", desc: "Organisations wanting to move from compliance-oriented CSR to strategic CSR — aligning social investment with business interests and measuring genuine impact." },
      { title: "Companies with First-Time CSR Obligations", desc: "Companies newly crossing the CSR threshold — needing to build their CSR infrastructure from scratch, including policy, committee, and implementing partnerships." }
    ],
    ctaPrimaryText: "Get CSR Advisory",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop advises corporate CSR committees on policy design, implementing partner governance, and compliance — ensuring every rupee of CSR expenditure is defensible, documented, and impactful.",
    closingTitle: "CSR that isn't documented correctly isn't compliance. It's a penalty waiting to be assessed.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default CsrConsultingPage;