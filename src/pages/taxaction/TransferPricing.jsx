import ServicePageLayout from '../../components/services/ServicePageLayout';

const TransferPricing = () => {
    const data = {
        metaTitle: "Transfer Pricing Advisory | Form 3CEB & TP Documentation | Northrop India",
        metaDescription: "Expert transfer pricing advisory for companies with intercompany transactions. We provide TP studies, benchmarking, Form 3CEB filing, and TPO representation.",
        breadcrumbs: [
            { name: "Home", link: "/" },
            { name: "Transfer Pricing Advisory", link: null }
        ],
        bannerTitle: <>Your intercompany transactions <br /> need to be at arm's length. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Can you prove they are?</span></>,
        bannerDescription: "Transfer pricing is the single largest source of tax disputes for companies with related-party transactions across borders — or even across states. The burden of proof is on the taxpayer. Without documentation, the adjustment is automatic.",
        primaryBtnText: "Get Transfer Pricing Support",
        secondaryBtnText: "See what's at risk ↓",
        svcNum: "TX — 03 /",
        svcTag: "Transfer Pricing Advisory",
        svcH2: <>The TPO rejected the CUP method and applied TNMM. <em className="italic text-blue-600 not-italic font-serif">The adjustment was ₹18 Cr. The penalty was another ₹9 Cr.</em></>,
        hookText: "Transfer pricing adjustments are not theoretical. They are quantified, penalised, and enforced. The only protection is contemporaneous documentation — prepared at the time of the transaction, not after the notice arrives.",
        painLabel: "Where transfer pricing disputes originate",
        painList: [
            { label: "IT Services Companies", text: "Cost-plus markup on services to overseas parent challenged — TPO applies TNMM, finds markup below median, adjusts ₹20–50 Cr of income. Penalty on top." },
            { label: "Pharma", text: "Royalty rate for brand licence from parent challenged as above arm's length — deduction denied, tax on royalty treated as excessive payment to related party." },
            { label: "Manufacturing MNCs", text: "Intragroup procurement prices challenged — goods purchased from group company at above market rates, Sec 40A(2) disallowance and TP adjustment." },
            { label: "Financial Services", text: "Intercompany loans — interest rate challenged as below arm's length. Deemed income adjustment on the difference between charged rate and arm's length rate." },
            { label: "Startups with Foreign Investment", text: "Management fees charged to Indian subsidiary — entire deduction disallowed as no arm's length evidence of services received." }
        ],
        delGrid: [
            { 
                title: "Transfer Pricing Study & Documentation", 
                desc: "Contemporaneous TP documentation — functional analysis, comparability analysis, method selection, and benchmarking — prepared before the return is filed." 
            },
            { 
                title: "Form 3CEB Preparation", 
                desc: "Preparation of the Chartered Accountant's report in Form 3CEB — required for every company with international related-party transactions." 
            },
            { 
                title: "APA Application Support", 
                desc: "Advance Pricing Agreement application support — bilateral and unilateral — to provide multi-year certainty on your most significant intercompany transactions." 
            },
            { 
                title: "Transfer Pricing Dispute Resolution", 
                desc: "Representation before the Transfer Pricing Officer, DRP, and ITAT — defending your arm's length positions with documented benchmarking." 
            }
        ],
        outcomes: [
            "TP Documentation Ready",
            "Form 3CEB Filed",
            "APA Certainty Obtained",
            "TPO Representation",
            "Adjustment Risk Reduced",
            "Penalty Exposure Protected"
        ],
        whoGrid: [
            { 
                title: "Companies with International Related-Party Transactions", 
                desc: "Businesses with cross-border intercompany transactions — the primary audience for mandatory transfer pricing documentation." 
            },
            { 
                title: "Companies Under TP Assessment", 
                desc: "Organisations that have received Form 3CEB scrutiny, Transfer Pricing Officer examination, or TP adjustment orders — needing expert representation." 
            },
            { 
                title: "Companies Seeking APA Certainty", 
                desc: "High-value intercompany transaction companies who want multi-year certainty on their arm's length position through the APA programme." 
            },
            { 
                title: "Domestic Transfer Pricing Entities", 
                desc: "Companies with specified domestic transactions above ₹20 Cr — where the domestic TP provisions require the same documentation as international transactions." 
            }
        ],
        ctaPrimaryText: "Get Transfer Pricing Support",
        ctaSecondaryText: "Speak to an Advisor",
        trustNote: "Northrop provides transfer pricing documentation, Form 3CEB preparation, and TPO representation — for companies from IT services and pharma to manufacturing and financial services.",
        closingTitle: "Transfer pricing without documentation is a position without defence. The TPO will set the price for you.",
        closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
    };

    return <ServicePageLayout {...data} />;
};

export default TransferPricing;