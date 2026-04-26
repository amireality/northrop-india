import ServicePageLayout from '../../components/services/ServicePageLayout';

const CorporateTax = () => {
    const data = {
        metaTitle: "Corporate Tax Advisory | Income Tax Return & Scrutiny | Northrop India",
        metaDescription: "Expert corporate tax advisory for Indian companies. From return preparation and provision advisory to representation in assessment proceedings and scrutiny.",
        breadcrumbs: [
            { name: "Home", link: "/" },
            { name: "Corporate Tax Advisory", link: null }
        ],
        bannerTitle: <>Your tax return was filed on <br /> time. <br /><span className="text-[#C4973B]">Was it filed correctly?</span></>,
        bannerDescription: "Corporate tax in India is not a filing exercise. It is a strategic decision with permanent consequences — on transaction structuring, inter-company pricing, depreciation claims, and provisions. Errors compound. Tax notices arrive 3–6 years later, with interest and penalties.",
        primaryBtnText: "Get Corporate Tax Advisory",
        secondaryBtnText: "See what's at risk ↓",
        svcNum: "TX — 01 /",
        svcTag: "Corporate Tax Advisory",
        svcH2: <>The assessment notice arrived for AY 2022-23. <em className="italic text-blue-600 not-italic font-serif">The issue was a provision disallowance they hadn't anticipated.</em></>,
        hookText: "Most companies discover their tax position has a problem when the notice arrives — not when the return is filed. Northrop's corporate tax advisory builds positions that are technically defensible, commercially optimised, and documented to withstand scrutiny.",
        painLabel: "Where corporate tax errors create lasting damage",
        painList: [
            { label: "Manufacturing", text: "Capital expenditure classification error — items expensed that should be capitalised, or vice versa. Tax notice 4 years later with 150% penalty on the differential." },
            { label: "Financial Services", text: "NPA provision disallowance — provisioning for bad debts not meeting Sec 36(1)(vii) conditions. Taxable income understated. Assessment with interest and penalty." },
            { label: "Real Estate", text: "Revenue recognition timing under income tax vs. Ind-AS — different years of recognition creating temporary differences that become permanent if not tracked." },
            { label: "Technology & Startups", text: "ESOP tax treatment — deduction timing under Sec 80-IAC benefits not correctly applied. Angel tax on share premium issuance not anticipated." },
            { label: "Export Companies", text: "Sec 10AA (STPI/SEZ) deduction claims not structured correctly — benefit denied in assessment. ₹2–5 Cr in denied deductions, with interest." }
        ],
        delGrid: [
            { 
                title: "Corporate Tax Return Preparation & Review", 
                desc: "Accurate, fully documented corporate tax return preparation — with every significant position documented in advance of potential assessment." 
            },
            { 
                title: "Tax Position & Provision Advisory", 
                desc: "Technical advice on tax treatment of specific transactions, provisions, and accounting entries — before the return is filed." 
            },
            { 
                title: "Assessment & Scrutiny Response", 
                desc: "Managing income tax assessment proceedings, responding to notices, and representing before the Assessing Officer, CIT(A), and ITAT." 
            },
            { 
                title: "Tax Planning & Structuring", 
                desc: "Identifying legitimate tax planning opportunities — restructuring, timing, deductions, and exemptions — to reduce the effective tax rate on an ongoing basis." 
            }
        ],
        outcomes: [
            "Returns Defensibly Filed",
            "Assessment Risk Reduced",
            "Notices Responded To",
            "Tax Planning Implemented",
            "Effective Rate Optimised",
            "MAT / AMT Managed"
        ],
        whoGrid: [
            { 
                title: "Companies With Complex P&L Adjustments", 
                desc: "Businesses with significant provisions, related-party transactions, or Ind-AS/tax differences needing expert tax return preparation." 
            },
            { 
                title: "Companies Under Assessment or Scrutiny", 
                desc: "Organisations that have received income tax notices, scrutiny assessments, or demand orders — needing expert representation." 
            },
            { 
                title: "Pre-Transaction Tax Planning", 
                desc: "Companies structuring mergers, acquisitions, investments, or business reorganisations needing tax impact analysis before execution." 
            },
            { 
                title: "High-Growth Companies", 
                desc: "Fast-growing businesses where the tax complexity has outpaced internal capability — needing an external expert to manage the increasing tax risk." 
            }
        ],
        ctaPrimaryText: "Get Corporate Tax Advisory",
        ctaSecondaryText: "Speak to an Advisor",
        trustNote: "Northrop provides corporate tax advisory across manufacturing, financial services, technology, and real estate — from return preparation to ITAT representation.",
        closingTitle: "A tax return filed without a defensible position is a notice waiting to arrive.",
        closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
    };

    return <ServicePageLayout {...data} />;
};

export default CorporateTax;