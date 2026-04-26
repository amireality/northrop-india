import ServicePageLayout from '../../components/services/ServicePageLayout';

const ImpactAssessmentPage = () => {
  const data = {
    metaTitle: "Impact Assessment Services for NGOs & CSR | Northrop India",
    metaDescription: "Independent impact assessment, baseline studies, and SROI analysis for NGOs, CSR programs, and social enterprises. We help you demonstrate impact to funders.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Impact Assessment", link: null }
    ],
    bannerTitle: <>Your programme is changing lives. <br /> <span className="text-[#C4973B]">But your funder wants numbers.</span></>,
    bannerDescription: "Impact assessment is the systematic measurement of whether your programmes are achieving the outcomes they set out to achieve — and by how much. Without it, renewal funding is at risk, and your organisation's credibility in the funding ecosystem is limited.",
    primaryBtnText: "Commission an Impact Assessment",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "GF — 02 /",
    svcTag: "Impact Assessment Services",
    svcH2: <>The three-year grant ended. <em className="italic text-blue-600 not-italic">The funder wanted impact data before renewing. The organisation had anecdotes.</em></>,
    hookText: "Funders have become significantly more sophisticated in their impact requirements. Anecdotes and activity counts are no longer sufficient. Social return on investment, outcome harvesting, and theory of change verification are increasingly standard requirements.",
    painLabel: "Where inadequate impact measurement creates funding risk",
    painList: [
      { label: "CSR Grant Renewal", text: "Two-year CSR partnership completed. Corporate donor requires demonstrated impact data before renewal. Organisation has output numbers but no outcome data. Renewal denied." },
      { label: "Bilateral / FCRA Grants", text: "International funder requires mid-term review with outcome data against targets set in the grant agreement. Baselines were not established at project start." },
      { label: "Government Programme Evaluation", text: "State government scheme requires third-party impact evaluation before next tranche is released. No independent evaluation commissioned." },
      { label: "Social Enterprise Investment", text: "Impact investor requires SROI or equivalent before follow-on investment. Organisation cannot demonstrate financial proxies for social outcomes." },
      { label: "Multiple Funders", text: "Different funders require different impact frameworks — organisation is reporting against 5 different frameworks, none of them coherently." }
    ],
    delGrid: [
      { title: "Baseline Study & Theory of Change Verification", desc: "Establishing the baseline against which impact will be measured — and verifying that the theory of change connecting activities to outcomes is sound." },
      { title: "Outcome & Impact Measurement Framework", desc: "Designing the specific indicators, data collection methods, and reporting cadence for measuring outcomes — not just outputs." },
      { title: "Independent Impact Assessment Report", desc: "An independent assessment of programme impact — suitable for funder reporting, grant renewal applications, or public communication." },
      { title: "SROI Analysis", desc: "Social Return on Investment analysis — quantifying the financial value of social outcomes relative to investment, for impact investors and sophisticated CSR funders." }
    ],
    outcomes: [
      "Funder-Ready Impact Report",
      "Baseline Established",
      "Outcome Data Collected",
      "SROI Quantified",
      "Grant Renewal Supported",
      "Reporting Consolidated"
    ],
    whoGrid: [
      { title: "NGOs Seeking Grant Renewal", desc: "Organisations at the end of a funding cycle — needing impact data to demonstrate outcomes and justify renewal funding." },
      { title: "Organisations Mid-Programme", desc: "Programmes reaching the mid-point of a multi-year grant — where the funder requires independent mid-term review before releasing subsequent tranches." },
      { title: "Social Enterprises Seeking Investment", desc: "Impact-driven businesses seeking investment from impact funds or DFIs — needing SROI or equivalent analysis to demonstrate the financial value of social outcomes." },
      { title: "Organisations Building Measurement Systems", desc: "NGOs and social enterprises that recognise their impact measurement is inadequate — needing to build a sustainable framework from the ground up." }
    ],
    ctaPrimaryText: "Commission an Impact Assessment",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop provides impact assessment and measurement framework design for NGOs, CSR-funded programmes, and social enterprises — aligned to the specific requirements of your funder base.",
    closingTitle: "Impact you can't measure is impact you can't defend — to funders, to beneficiaries, or to yourself.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default ImpactAssessmentPage;