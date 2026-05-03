import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const PrivateEquityGrowthCapitalAdvisory = () => {
  const data = {
    metaTitle: "Private Equity & Growth Capital Advisory | Northrop India",
    metaDescription: "You can raise capital. What you can't reverse is the terms you raise it on. We build institutional-grade term sheet architecture.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Financial Advisory", link: null },
      { name: "Private Equity Advisory", link: null }
    ],
    bannerTitle: <>You can raise capital. <span className="text-[#C4973B]">What you can't reverse is the terms you raise it on.</span></>,
    bannerDescription: "Capital is plentiful. The right capital, on the right terms, from the right partner, is not. Founders raise once or twice in a decade; institutional investors run that process every week. Asymmetry compounds — unless you bring your own.",
    primaryBtnText: "Get Fundraise Advisory",
    secondaryBtnText: "Request a Term-Sheet Review",
    svcNum: "FA — 04 /",
    svcTag: "Private Equity & Growth Capital Advisory",
    svcH2: <>INDUSTRY-SPECIFIC FUNDRAISE FAILURES <br /><em className="italic text-[#C4973B] not-italic">— AND THEIR COST</em></>,
    hookText: "Founders raise once or twice in a decade; institutional investors run that process every week. Here is what fundraise failure looks like:",
    painLabel: "What fundraise failures look like — by situation",
    painList: [
      { label: "First-Time Fundraisers", text: "Term sheet negotiated on valuation alone. Liquidation preferences, anti-dilution, drag-along, and consent rights re-shape control and exit economics." },
      { label: "Growth-Stage Founders", text: "Multiple parallel processes managed informally. Best lead disengages; round closes at 25–35% lower valuation than first indications." },
      { label: "Family Businesses Taking First Capital", text: "Governance, RPT, and information rights underestimated. Within 18 months, founder finds operating decisions require investor approval." },
      { label: "Buy-and-Build Platforms", text: "Add-on financing terms inconsistent with platform terms. MOIC and IRR for sponsor compress despite operating performance." }
    ],
    delGrid: [
      { title: "Capital Strategy & Investor Mapping", desc: "Investor profiling — strategic, growth, control, sector, stage, and post-investment behaviour." },
      { title: "Term Sheet Architecture", desc: "Pre-built positions on valuation, liquidation, anti-dilution, governance, information rights, and exit mechanics — institutional grade." },
      { title: "Process Management", desc: "Disciplined competitive process — IM, data room, management meetings, and term-sheet negotiation — independent of sell-side bias." },
      { title: "Post-Close Operating Architecture", desc: "Reporting, governance, and value-creation plan calibrated to investor expectations — without surrendering operating control." }
    ],
    outcomes: [
      "Valuation Defended",
      "Control Preserved",
      "Term Sheet Discipline",
      "Investor Fit Optimised",
      "Process Competitive Tension",
      "Exit Optionality Protected"
    ],
    whoGrid: [
      { title: "First-Time Founders", desc: "Raising institutional capital where terms shape the next decade." },
      { title: "Family Businesses Taking PE Capital", desc: "For growth, succession, or partial buyout." },
      { title: "Growth-Stage Companies", desc: "Managing competitive funding processes with multiple investors." },
      { title: "PE-Backed Platforms", desc: "Raising add-on or follow-on capital." }
    ],
    ctaPrimaryText: "Get Fundraise Advisory",
    ctaSecondaryText: "Request a Term-Sheet Review",
    trustNote: "Northrop has advised on private equity, growth capital, and structured capital transactions across technology, consumer, manufacturing, and family-owned businesses in India.",
    closingTitle: "Capital is a contract. Read it like one.",
    // closingDescription: "Every engagement starts with a confidential conversation."
  };

  return <ServicePageLayout {...data} />;
};

export default PrivateEquityGrowthCapitalAdvisory;
