import ServicePageLayout from '../../components/services/ServicePageLayout';

const IndirectTax = () => {
    const data = {
        metaTitle: "Indirect Tax & GST Advisory | ITC Reconciliation & Audit | Northrop India",
        metaDescription: "Expert GST advisory for Indian businesses. We provide GST health checks, ITC reconciliation, HSN classification, and representation in GST audits.",
        breadcrumbs: [
            { name: "Home", link: "/" },
            { name: "Indirect Tax (GST) Advisory", link: null }
        ],
        bannerTitle: <>Your GST returns are filed <br /> every month. <br /><span className="text-[#C4973B]">Your ITC position has never <br /> been reconciled.</span></>,
        bannerDescription: "GST is the largest single compliance obligation for most Indian businesses — and the one with the highest ongoing risk of error. ITC mismatches, reverse charge failures, and classification disputes create demands that accumulate quietly until they cannot be ignored.",
        primaryBtnText: "Get GST Advisory",
        secondaryBtnText: "See what's at risk ↓",
        svcNum: "TX — 04 /",
        svcTag: "Indirect Tax (GST) Advisory",
        svcH2: <>The GST department audit found ₹4 Cr in ITC claimed on invoices that don't appear in GSTR-2B. <em className="italic text-[#C4973B] not-italic font-serif">The supplier had defaulted on their returns.</em></>,
        hookText: "GST compliance is a continuous obligation — not a monthly filing. GSTR-2B mismatches, ITC reversals on exempt supplies, and RCM defaults compound month after month. The cumulative liability at the time of an audit is rarely what the company anticipated.",
        painLabel: "Where GST exposure accumulates — by industry",
        painList: [
            { label: "Manufacturing", text: "ITC on capital goods — wrong apportionment between exempt and taxable supplies. ITC reversal demand covering 5 years of claimed credits." },
            { label: "Real Estate", text: "GST on under-construction property — output tax correctly applied, but ITC reversal obligation on completion not tracked. ₹2–8 Cr demand at project completion." },
            { label: "E-Commerce", text: "TCS compliance — seller GSTINs not validated, TCS collected but not remitted against correct GSTIN. Notice to sellers with GSTIN mismatch." },
            { label: "Services", text: "Reverse charge mechanism — import of services from overseas, legal services, freight — RCM liability not self-assessed. 3 years of accumulated demand with interest." },
            { label: "Retail & FMCG", text: "Classification disputes — HSN code disputes on products straddling two rate slabs. Retrospective demand with interest and 100% penalty." }
        ],
        delGrid: [
            { 
                title: "GST Health Check & Reconciliation", 
                desc: "Comprehensive review of GST returns, ITC position, GSTR-2B reconciliation, and output tax liability — identifying mismatches before the department does." 
            },
            { 
                title: "ITC Audit & Reversal Analysis", 
                desc: "Detailed analysis of ITC claimed — validating eligibility, apportionment for exempt supplies, and GSTR-2B matching — with reversal obligations quantified." 
            },
            { 
                title: "GST Classification Advisory", 
                desc: "Technical advisory on HSN classification and rate determination for products or services where classification is disputed or uncertain." 
            },
            { 
                title: "GST Assessment & Appellate Representation", 
                desc: "Representation before GST officers during audit, assessment, and appellate proceedings — with technical positions documented and argued." 
            }
        ],
        outcomes: [
            "ITC Position Reconciled",
            "GSTR-2B Matched",
            "RCM Compliance Achieved",
            "Classification Defended",
            "Assessment Managed",
            "Annual Return Filed Correctly"
        ],
        whoGrid: [
            { 
                title: "Companies with Complex ITC Positions", 
                desc: "Businesses with mixed taxable and exempt supplies, capital goods, or large vendor bases — where ITC risk is highest." 
            },
            { 
                title: "Real Estate Developers", 
                desc: "Builders and developers navigating the complex GST provisions on under-construction property, land sale, and commercial property development." 
            },
            { 
                title: "Companies Under GST Department Audit", 
                desc: "Organisations that have received GST audit notices or department scrutiny — needing expert advisory and representation." 
            },
            { 
                title: "Companies with Import of Services", 
                desc: "Businesses making payments to overseas service providers — where Reverse Charge Mechanism obligations are frequently missed." 
            }
        ],
        ctaPrimaryText: "Get GST Advisory",
        ctaSecondaryText: "Speak to an Advisor",
        trustNote: "Northrop provides GST health checks, ITC reconciliation, classification advisory, and GST department representation — across manufacturing, real estate, services, and e-commerce sectors.",
        closingTitle: "GST liability that isn't reconciled monthly is liability that is compounding silently.",
        closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
    };

    return <ServicePageLayout {...data} />;
};

export default IndirectTax;