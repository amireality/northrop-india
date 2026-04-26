import ServicePageLayout from '../../components/services/ServicePageLayout';

const ProgramManagementConsulting = () => {
  const data = {
    metaTitle: "Program Management Consulting for NGOs & CSR | Northrop India",
    metaDescription: "Professional program management, work planning, and implementation monitoring for NGOs and social enterprises. We help you stay on track for impact.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Program Management Consulting", link: null }
    ],
    bannerTitle: <>The grant was received. <br /> <span className="text-[#C4973B]">The implementation is <br /> running six months behind.</span></>,
    bannerDescription: "Programme management for development organisations requires a different discipline than commercial project management — navigating community dynamics, government coordination, and funder reporting simultaneously, while keeping the programme on track for impact.",
    primaryBtnText: "Get Program Management Support",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "GF — 03 /",
    svcTag: "Program Management Consulting",
    svcH2: <>The utilisation certificate was due. <em className="italic text-blue-600 not-italic">The programme had spent 40% of the budget and delivered 20% of the promised outcomes.</em></>,
    hookText: "Funder relationships are built on delivery credibility. An organisation that consistently delivers on its programme commitments — on time, within budget, and against stated outcomes — builds a funding relationship that transcends individual grants.",
    painLabel: "Where programme management failures damage organisations",
    painList: [
      { label: "Utilisation Pace", text: "Grant funds not being utilised at the pace required by the grant agreement — funder withdraws remaining tranches or demands return of unspent funds." },
      { label: "Reporting Failures", text: "Quarterly and annual reports not submitted on time or not meeting the format requirements — funder loses confidence in organisational capability." },
      { label: "Implementation Lag", text: "Programme activities running behind schedule — outcomes will not be achieved by the grant end date. Last-minute scramble damages quality and credibility." },
      { label: "Budget Overspend", text: "Programme running over budget in delivery costs — overhead is not covered, staff are underpaid, and programme quality is compromised." },
      { label: "Coordination Failure", text: "Multiple implementation partners not coordinated effectively — duplication of effort, gaps in coverage, and inter-partner conflict undermining delivery." }
    ],
    delGrid: [
      { title: "Programme Design & Work Planning", desc: "Designing a realistic, detailed programme work plan — with milestones, resource requirements, and budget allocation aligned to the grant agreement." },
      { title: "Implementation Monitoring & Course Correction", desc: "Monthly monitoring of programme implementation against the work plan — with proactive identification of delays and course correction before they become crises." },
      { title: "Funder Reporting Support", desc: "Preparing narrative and financial reports to funder standards — on time, in the right format, and with the right level of outcome evidence." },
      { title: "Multi-Partner Coordination", desc: "Managing coordination across multiple implementing partners — establishing shared MIS, reporting systems, and regular coordination mechanisms." }
    ],
    outcomes: [
      "Programme On Track",
      "Utilisation On Schedule",
      "Funder Reporting Timely",
      "Partner Coordination Effective",
      "Budget Managed",
      "Impact Evidenced"
    ],
    whoGrid: [
      { title: "NGOs with Large Grant Portfolios", desc: "Organisations managing multiple grants simultaneously — needing programme management support to maintain delivery quality across all programmes." },
      { title: "Organisations Implementing First Institutional Grant", desc: "NGOs receiving their first large institutional grant — needing programme management expertise they do not yet have in-house." },
      { title: "Organisations with Implementation Challenges", desc: "Programmes that are falling behind — needing expert intervention to stabilise implementation and restore funder confidence." },
      { title: "CSR Implementing Partners", desc: "Organisations implementing CSR programmes on behalf of corporate donors — where the corporate requires professional programme management oversight." }
    ],
    ctaPrimaryText: "Get Program Management Support",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop provides programme management consulting for development organisations and CSR implementers — combining programme design expertise with financial management and funder reporting capability.",
    closingTitle: "Grant management credibility is built programme by programme. It is lost in a single reporting failure.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default ProgramManagementConsulting;