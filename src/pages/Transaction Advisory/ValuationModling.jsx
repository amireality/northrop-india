
import ServicePageLayout from '../../components/services/ServicePageLayout';

const ValuationModling = () => {
  const data = {
    metaTitle: "Valuation Modeling Services | IBBI Registered Valuer | Northrop India",
    metaDescription: "Professional valuation modeling for M&A, FEMA compliance, ESOPs, and IBC proceedings. Defensible assumptions and rigorous methodology by registered valuers.",
    breadcrumbs: [
      { name: "Home", link: "/" },
      { name: "Valuation Modeling", link: null }
    ],
    bannerTitle: <>Your business is worth what <br />someone<br />  will pay for it.<span className="text-[#C4973B]">But are they<br />paying the right price?.</span></>,
    bannerDescription: "Valuation is not an objective exercise. It is a combination of method selection, assumption defensibility, and narrative credibility. The same business can be valued at wildly different numbers depending on who does the work and how they do it.",
    primaryBtnText: "Commission a Valuation",
    secondaryBtnText: "See what's at risk ↓",
    svcNum: "TA — 02 /",
    svcTag: "Valuation Modeling",
    svcH2: <>The valuation report said ₹120 Cr. The buyer's FDD found earnings of half the projected amount. <em className="italic text-blue-600 not-italic font-serif">The valuation was built on assumptions that didn't hold.</em></>,
    hookText: "Regulatory, transactional, and litigation valuations are all different in scope and methodology — but they share one requirement: the assumptions must be defensible, the method must be appropriate, and the conclusion must survive scrutiny.",
    painLabel: "Where valuation failures create real-world consequences",
    painList: [
      { label: "FEMA / FDI", text: "Foreign investment at a valuation below the compliant DCF value — share premium treated as income, resulting in significant tax demands and penalties." },
      { label: "Sec 56(2)(viib)", text: "Angel tax — shares issued above 'fair market value' as determined under Rule 11UA. Tax on excess premium at 30%." },
      { label: "ESOPs", text: "Option exercise price set below FMV at grant date — perquisite tax liability crystallises at exercise, creating material employee tax exposure." },
      { label: "Mergers & Demergers", text: "Swap ratio inadequate methodology challenged by minority shareholders. NCLT proceedings delayed by valuation dispute." },
      { label: "IBC", text: "Errors in fair and liquidation value determined by registered valuer directly impact creditor recovery and resolution plan negotiations." }
    ],
    delGrid: [
      { title: "DCF Valuation", desc: "Discounted Cash Flow valuation — building the financial model, justifying the WACC, and defending the terminal growth rate assumptions." },
      { title: "Comparable Company & Transaction Analysis", desc: "Market multiples analysis — selecting appropriate comparables, adjusting for size and liquidity, and triangulating with the DCF." },
      { title: "FEMA / Sec 56 Compliant Valuation", desc: "Regulatory-compliant valuation reports — prepared under Rule 11UA, FEMA pricing guidelines, or Ind-AS 102 — by a qualified professional." },
      { title: "Registered Valuer (IBBI) Services", desc: "Valuations conducted by IBBI-registered valuers — for IBC proceedings, court orders, and regulatory requirements mandating certification." }
    ],
    outcomes: [
      "FEMA / FDI Compliant",
      "Angel Tax Protected",
      "ESOP FMV Established",
      "Merger Swap Ratio Defended",
      "IBC Valuation Certified",
      "Board-Ready Report"
    ],
    whoGrid: [
      { title: "Companies Raising Foreign Investment", desc: "Businesses receiving FDI or issuing shares to overseas investors — needing FEMA-compliant valuations to ensure regulatory compliance." },
      { title: "Startups Issuing ESOPs", desc: "Companies establishing ESOP plans — needing grant-date FMV valuations and ongoing valuation support as the plan evolves." },
      { title: "Companies in M&A Processes", desc: "Buyers and sellers in M&A transactions — needing independent valuation opinions to support negotiation." },
      { title: "Companies in IBC Proceedings", desc: "Corporate debtors, resolution applicants, and creditors needing IBBI-registered valuer reports for fair and liquidation value." }
    ],
    ctaPrimaryText: "Commission a Valuation",
    ctaSecondaryText: "Speak to an Advisor",
    trustNote: "Northrop provides valuation advisory for regulatory, transactional, and litigation purposes — combining financial modelling rigour with regulatory compliance expertise.",
    closingTitle: "A valuation that doesn't survive challenge is not a valuation. It is a number that will be replaced by someone else's.",
    closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
  };

  return <ServicePageLayout {...data} />;
};

export default ValuationModling;