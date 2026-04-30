import ServicePageLayout from '../../components/services/ServicePageLayout';

const ProcessDesignDocumentation = () => {
  const data = {
    metaTitle: "Process Designing & Documentation Services | Northrop India",
    metaDescription: "Document and redesign your business processes to eliminate key-person risk and build institutional memory. Professional SOP design and process mapping services.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Risk Management", link: "/risk-management" },
      { name: "Process Design", link: null }
    ],
    bannerTitle: <>Your business runs on <br /> processes<br /> that exist only in<br /> <span className="text-[#C4973B]">one person's head.</span></>,
    bannerDescription: "When processes are undocumented, key-person risk is total. When a critical employee leaves, gets sick, or is found to be committing fraud — there is no record of what they were doing, how they were doing it, or how to continue without them.",
    bannerImage: "/contactusimg.avif",
    primaryBtnText: "Document and Design Your Processes",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "RM — 06 /",
    svcTag: "Process Designing & Documentation Services",
    svcH2: <>The CFO resigned. <em className="italic text-[#C4973B] not-italic">Six months later, nobody could explain how the month-end close worked.</em></>,
    hookText: "Process documentation is not bureaucracy — it is institutional memory. It is the foundation on which controls are built, audits are conducted, and businesses scale without catastrophic dependence on specific individuals.",
    painLabel: "What undocumented processes cost — across industries",
    painList: [
      { label: "Financial Services", text: "Key credit officer leaves — replacement cannot replicate the informal credit assessment approach. NPAs double in the first year after departure." },
      { label: "Manufacturing", text: "Plant manager with 15 years of process knowledge retires — production quality drops immediately. Six months of defects before the tacit knowledge is partially reconstructed." },
      { label: "Technology", text: "Lead developer departs without documentation — 3 years of custom code is effectively unmaintainable. ₹2 Cr in reconstruction costs." },
      { label: "FMCG", text: "Undocumented trade promotion approval process allows sales team to commit discounts outside policy — ₹5 Cr in unauthorised promotional spend discovered at year-end." },
      { label: "Healthcare", text: "Billing process not documented — different staff use different coding practices. Insurance rejection rate of 28%. Revenue leakage of ₹3 Cr annually." }
    ],
    delGrid: [
      { title: "As-Is Process Mapping", desc: "Documenting how processes actually work today — through interviews, observation, and transaction walkthroughs — not how the policy manual says they should." },
      { title: "To-Be Process Design", desc: "Redesigning processes to eliminate inefficiency, reduce key-person dependency, and embed controls at the right points in the workflow." },
      { title: "Standard Operating Procedures (SOPs)", desc: "Written SOPs to the level of detail required for a new employee to execute the process correctly without guidance — the test of genuine documentation." },
      { title: "Process Owner Assignment & Training", desc: "Assigning documented process ownership and supporting the transition from key-person dependency to institutional process management." }
    ],
    outcomes: [
      "Key-Person Risk Eliminated",
      "SOPs Documented",
      "Control Points Embedded",
      "Audit Trail Established",
      "Scalable Operations",
      "Training Foundation Built"
    ],
    whoGrid: [
      { title: "Companies Scaling Rapidly", desc: "Businesses growing faster than their process infrastructure — where informal, undocumented processes that worked at ₹20 Cr are failing at ₹200 Cr." },
      { title: "Companies with High Key-Person Dependency", desc: "Organisations where the departure of one or two individuals would create operational disruption — needing institutional processes to replace individual knowledge." },
      { title: "Companies Preparing for Due Diligence", desc: "Businesses approaching M&A, PE investment, or lending reviews — where undocumented processes raise red flags with acquirers and lenders." },
      { title: "Companies with Control Failures", desc: "Organisations that have experienced fraud, error, or operational failure — needing process redesign to close the gap that allowed the failure to occur." }
    ],
    ctaPrimaryText: "Document and Design Your Processes",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop has designed and documented processes for companies from ₹25 Cr to ₹500 Cr turnover — covering finance, operations, procurement, and revenue processes across sectors.",
    closingTitle: "The process that only one person knows is the process that will break you when that person leaves.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default ProcessDesignDocumentation;





