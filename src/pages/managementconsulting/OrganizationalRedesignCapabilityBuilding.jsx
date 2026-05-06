import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const OrganizationalRedesignCapabilityBuilding = () => {
  const data = {
    metaTitle: "Organizational Redesign & Capability Building | Northrop India",
    metaDescription: "The structure that built the company is the structure that limits it now. We redesign operating models for scale.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Management Consulting", link: null },
      { name: "Organizational Redesign", link: null }
    ],
    bannerTitle: <>The structure that built the company <span className="text-[#C4973B]">is the structure that limits it now.</span></>,
    bannerDescription: "Organisations are not optimised — they accumulate. Reporting lines reflect history, not strategy. Spans of control reward proximity to the founder. As the company scales, the cost of decision delay quietly exceeds the cost of headcount.",
    primaryBtnText: "Get Org Advisory",
    secondaryBtnText: "Request an Org Diagnostic",
    svcNum: "MC — 04 /",
    svcTag: "Organizational Redesign & Capability Building",
    svcH2: <>INDUSTRY-SPECIFIC ORG FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "Reporting lines reflect history, not strategy. Here is what organizational scale failures look like across industries:",
    painLabel: "What organizational failures look like — by industry",
    painList: [
      { label: "High-Growth Startups", text: "Series B+ companies where the org is designed by hire date, not capability map. Two layers of “Head of” with overlapping mandates; decision velocity collapses 40–60%." },
      { label: "Family Businesses Professionalising", text: "Professional managers report into family executives by convention, not by mandate. Talent attrition at the GM/VP level exceeds 30% annually." },
      { label: "Conglomerates", text: "Shared services and group functions taxed against business units without service-level agreements. BU CEOs treat group costs as overhead, not capability." },
      { label: "Manufacturing & Industrial", text: "Plant, function, and region matrix unresolved. Accountability for margin sits in three places — and therefore nowhere." }
    ],
    delGrid: [
      { title: "Organisation Diagnostic", desc: "Spans, layers, decision rights, and accountability map against strategic and economic imperatives — not org chart cosmetics." },
      { title: "Capability Architecture", desc: "Identification of the 8–12 capabilities that drive economic outcome — and the gap between current and required maturity." },
      { title: "Operating Model Redesign", desc: "Re-design of structure, decision rights, governance forums, and incentive system — implementable, not theoretical." },
      { title: "Capability Build Plan", desc: "Talent, technology, and process investment plan to close the capability gap on a defined and funded timeline." }
    ],
    outcomes: [
      "Decision Velocity Restored",
      "Spans Rationalised",
      "Capability Map Defined",
      "Talent Attrition Reduced",
      "Accountability Architecture",
      "Operating-Model Coherence"
    ],
    whoGrid: [
      { title: "Companies Post Series B/C", desc: "Where the founding org is now the constraint to scaling, not the engine." },
      { title: "Family Businesses Professionalising", desc: "Introducing professional management — and finding the original org cannot absorb it." },
      { title: "Conglomerates Redesigning the Centre", desc: "To recover pricing power over BU performance and group function value." },
      { title: "CEOs Entering a New Cycle", desc: "Where the existing structure was built for a different problem set." }
    ],
    ctaPrimaryText: "Get Org Advisory",
    ctaSecondaryText: "Request an Org Diagnostic",
    trustNote: "Northrop has advised on organisation redesign and capability building for technology, manufacturing, financial services, and diversified family-owned businesses.",
    closingTitle: "Structure is the slowest-moving cost on your P&L. And the most expensive.",
    // closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default OrganizationalRedesignCapabilityBuilding;
