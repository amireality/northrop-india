import ServicePageLayout from '../../components/services/ServicePageLayout';

const BusinessStrategyConsulting = () => {
  const data = {
    metaTitle: "Business Strategy & Consulting for NGOs | Theory of Change | Northrop India",
    metaDescription: "Strategic planning and business model advisory for NGOs, social enterprises, and mission-driven organisations. We help design theories of change and funder-ready narratives.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Business Strategy & Consulting", link: null }
    ],
    bannerTitle: <>Your organisation does <br /> important work. <br /> <span className="text-[#C4973B]">But you can't fund what you <br /> can't articulate strategically.</span></>,
    bannerDescription: "For NGOs, social enterprises, and mission-driven organisations, strategy is not about competitive advantage — it is about mission clarity, resource allocation, and organisational resilience. Without it, even the most impactful work becomes unsustainable.",
    primaryBtnText: "Build Your Strategy",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "GF — 01 /",
    svcTag: "Business Strategy & Consulting",
    svcH2: <>The funder liked the work. <em className="italic text-[#C4973B] not-italic">They didn't fund it because the strategy wasn't clear.</em></>,
    hookText: "Institutional funders — CSR committees, bilateral donors, government bodies — do not fund impact alone. They fund impact that is articulated clearly, delivered by organisations with a credible strategy, and measured with defensible frameworks.",
    painLabel: "Where strategy gaps cost organisations funding and impact",
    painList: [
      { label: "NGOs seeking CSR funding", text: "Impact is genuine — but the organisation cannot articulate a coherent theory of change. Corporate CSR heads cannot justify the funding to their board." },
      { label: "Social enterprises scaling operations", text: "Strong at programme delivery, weak at business model — growth stalls because the financial model doesn't scale with the impact." },
      { label: "Government grant applicants", text: "Technical competence is present — but the strategic narrative in the application is generic. Competitive funding goes to better-articulated proposals." },
      { label: "Multi-programme organisations", text: "Spreading effort across too many initiatives without a clear strategic focus — funders question the organisation's ability to deliver depth." },
      { label: "Organisations transitioning leadership", text: "Founder-driven strategy not documented or institutionalised — new leadership cannot build on what was created." }
    ],
    delGrid: [
      { title: "Strategic Plan Development", desc: "A structured 3-year strategic plan — mission, vision, strategic priorities, resource plan, and measurable milestones — built through a facilitated leadership process." },
      { title: "Theory of Change Design", desc: "Articulating the logical chain from activities to outputs to outcomes to impact — the foundational document that institutional funders require." },
      { title: "Business Model Review", desc: "Assessing the financial sustainability of the organisation's model — revenue diversification, cost structure, and the path to reduced donor dependence." },
      { title: "Funder-Ready Strategic Narrative", desc: "Translating the strategic plan into the compelling narrative that grant applications, CSR proposals, and donor presentations require." }
    ],
    outcomes: [
      "Strategic Plan Documented",
      "Theory of Change Articulated",
      "Business Model Stress-Tested",
      "Funder Narrative Built",
      "Leadership Aligned",
      "Sustainability Pathway Defined"
    ],
    whoGrid: [
      { title: "NGOs Seeking Institutional Funding", desc: "Organisations approaching CSR committees, bilateral funders, or government grant bodies — needing a strategic foundation before the application." },
      { title: "Social Enterprises Planning Scale", desc: "Mission-driven businesses planning to scale — needing a strategy that aligns operational growth with financial sustainability." },
      { title: "Organisations in Leadership Transition", desc: "NGOs or social enterprises where founder-era strategy needs to be documented and institutionalised for the next generation of leadership." },
      { title: "Multi-Programme Organisations Seeking Focus", desc: "Organisations with too many initiatives and insufficient resources — needing strategic prioritisation to concentrate impact and improve funder credibility." }
    ],
    ctaPrimaryText: "Build Your Strategy",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop provides business strategy advisory for NGOs, social enterprises, and mission-driven organisations — combining strategic planning rigour with deep understanding of the Indian funding ecosystem.",
    closingTitle: "Impact that isn't articulated clearly is impact that doesn't get funded.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default BusinessStrategyConsulting;