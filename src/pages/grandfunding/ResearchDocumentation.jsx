import ServicePageLayout from '../../components/services/ServicePageLayout';

const ResearchDocumentationPage = () => {
  const data = {
    metaTitle: "Research & Documentation Services for NGOs | Northrop India",
    metaDescription: "Professional research, documentation, and grant application writing for NGOs and social enterprises. We help you build evidence-based proposals.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Research & Documentation", link: null }
    ],
    bannerTitle: <>The grant application asks for evidence.<br /> <span className="text-[#C4973B]">You have experience. You don't have documentation.</span></>,
    bannerDescription: "In the competitive world of institutional grants — government, bilateral, CSR, and philanthropic — documentation quality is the difference between funded and rejected. Research that is not documented is experience that cannot be verified. And experience that cannot be verified is experience that doesn't count.",
    primaryBtnText: "Commission Research & Documentation",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "GF — 05 /",
    svcTag: "Research & Documentation Services",
    svcH2: <>The application was scored 72 out of 100 on the technical section. <em className="italic text-blue-600 not-italic">The documentation didn't substantiate the claims.</em></>,
    hookText: "Funders receive hundreds of applications. They score them on criteria that heavily weight documented evidence of past performance, baseline data, and context analysis. Without professional research and documentation, your application competes at a disadvantage.",
    painLabel: "Where documentation gaps cost organisations grants",
    painList: [
      { label: "Government Tenders", text: "Technical bid requires documented past performance with specific metrics — organisation has done the work but never documented it formally. Bid disqualified." },
      { label: "Bilateral Donor Applications", text: "Context analysis section requires secondary data on the target population — organisation submits generic statistics. Competitor submits primary research. Competitor wins." },
      { label: "CSR Proposals", text: "Corporate CSR committee requires a needs assessment establishing why the target community needs this intervention. No baseline data exists." },
      { label: "FCRA Renewal", text: "Ministry requires documentation of programme activities and impact for the previous 5 years. Records are incomplete and inconsistent." },
      { label: "Impact Investor EOI", text: "Expression of interest requires a detailed programme documentation package — organisation does not have a standard set of programme documentation." }
    ],
    delGrid: [
      { title: "Primary & Secondary Research", desc: "Conducting primary research (surveys, FGDs, KIIs) and synthesising secondary data — producing evidence-based context analysis for grant applications and programme design." },
      { title: "Programme Documentation Package", desc: "Creating the standard documentation set that institutional funders require — case studies, programme reports, impact evidence, and organisational profile." },
      { title: "Grant Application Writing", desc: "Professional writing and editing of grant applications — translating programme knowledge and research into compelling, evidence-based proposals." },
      { title: "Annual Report & Communication Material", desc: "Preparing annual reports, donor communications, and programme briefs — combining narrative and data to communicate impact credibly." }
    ],
    outcomes: [
      "Grant Application Competitive",
      "Documentation Package Complete",
      "Research Evidence Available",
      "Baseline Data Established",
      "Annual Report Professional",
      "Donor Communications Credible"
    ],
    whoGrid: [
      { title: "NGOs Preparing Grant Applications", desc: "Organisations approaching a major funding opportunity — needing research, documentation, and application writing support to be competitive." },
      { title: "Organisations Without Dedicated Research Capacity", desc: "Development organisations that do the work but don't have the internal capacity to document, research, and communicate it professionally." },
      { title: "Social Enterprises Seeking Impact Investors", desc: "Mission-driven businesses preparing EOIs and investment proposals for impact investors — needing research and documentation to substantiate their claims." },
      { title: "Organisations Building their Documentation Library", desc: "NGOs and social enterprises that recognise their documentation is inadequate — needing to build a comprehensive programme documentation base." }
    ],
    ctaPrimaryText: "Commission Research & Documentation",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop provides research, documentation, and grant application support for development organisations — combining sector knowledge with professional writing to produce competitive funding proposals.",
    closingTitle: "Impact that isn't documented is impact that can't be funded. Documentation is not bureaucracy — it is the evidence that unlocks resources.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default ResearchDocumentationPage;