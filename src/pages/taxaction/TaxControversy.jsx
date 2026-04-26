import ServicePageLayout from '../../components/services/ServicePageLayout';

const TaxControversy = () => {
    const data = {
        metaTitle: "Tax Controversy & Dispute Resolution | ITAT Appeals & Assessment | Northrop India",
        metaDescription: "Expert tax controversy support for Indian companies. From responding to assessment notices and audits to representation before CIT(A), ITAT, and settlement commissions.",
        breadcrumbs: [
            { name: "Home", link: "/" },
            { name: "Tax Controversy & Dispute Resolution", link: null }
        ],
        bannerTitle: <>The demand notice arrived. <br /> <span className="text-[#C4973B]">How you respond in the next <br /> 30 days determines everything.</span></>,
        bannerDescription: "Tax controversy — from assessment notices to ITAT appeals — requires a combination of technical knowledge, procedural expertise, and strategic judgement. The first response to a notice often sets the trajectory of the entire dispute.",
        primaryBtnText: "Get Tax Controversy Support",
        secondaryBtnText: "See what's at risk ↓",
        svcNum: "TX — 06 /",
        svcTag: "Tax Controversy & Dispute Resolution",
        svcH2: <>The company paid the demand to avoid interest. <em className="italic text-[#C4973B] not-italic font-serif">It should have appealed. The position was defensible.</em></>,
        hookText: "Not every tax demand is correct. Not every assessment position taken by an Assessing Officer is sustainable. The difference between a company that pays ₹8 Cr it didn't owe and one that recovers it is the quality of its tax controversy representation.",
        painLabel: "Where tax disputes go wrong — without expert management",
        painList: [
            { label: "Missed Time Limits", text: "Opportunity to appeal CIT(A) order missed due to internal delay — ITAT jurisdiction lost. ₹12 Cr demand becomes final and payable." },
            { label: "Poor Initial Response", text: "Response to scrutiny notice prepared internally — factual errors in the submission become the basis for adverse assessment findings." },
            { label: "Accepting Unjust Demands", text: "Company pays demand to avoid notice, interest, and prosecution threat — without realising the position was technically and legally defensible." },
            { label: "No Advance Preparation", text: "Assessment proceedings commence without documented support for key positions — AO draws adverse inference from absence of contemporaneous records." },
            { label: "Faceless Assessment Errors", text: "Faceless assessment unit raises additions without opportunity for personal hearing — response rights not exercised within the prescribed timeline." }
        ],
        delGrid: [
            { 
                title: "Notice Response & Assessment Management", 
                desc: "Expert preparation of responses to income tax, GST, and other tax authority notices — with all positions documented and legally supportable." 
            },
            { 
                title: "CIT(A) & ITAT Representation", 
                desc: "Preparation of appeal memorials and representation before the Commissioner of Income Tax (Appeals) and Income Tax Appellate Tribunal." 
            },
            { 
                title: "Settlement Commission & Dispute Resolution", 
                desc: "Advisory on and representation in income tax settlement, Direct Tax Vivad se Vishwas, and GST Amnesty proceedings." 
            },
            { 
                title: "Advance Ruling Applications", 
                desc: "Obtaining advance rulings from the AAR or CAAR — providing certainty on the tax treatment of specific transactions before they are executed." 
            }
        ],
        outcomes: [
            "Notice Responded Correctly",
            "Appeals Filed Timely",
            "ITAT Representation",
            "Settlement Explored",
            "Demand Reduced or Eliminated",
            "Penalty Mitigation"
        ],
        whoGrid: [
            { 
                title: "Companies with Pending Tax Demands", 
                desc: "Businesses that have received income tax or GST demands — needing expert assessment of whether to pay, appeal, or settle." 
            },
            { 
                title: "Companies in Ongoing Assessment Proceedings", 
                desc: "Organisations currently under income tax scrutiny or GST audit — needing expert management of the assessment process." 
            },
            { 
                title: "Companies with Large Tax Arrears", 
                desc: "Businesses with accumulated tax demands — needing strategic advice on settlement, appeal, and cash flow management." 
            },
            { 
                title: "Companies Seeking Advance Certainty", 
                desc: "Businesses planning significant transactions — needing advance ruling or expert opinion on the tax treatment before committing." 
            }
        ],
        ctaPrimaryText: "Get Tax Controversy Support",
        ctaSecondaryText: "Speak to an Advisor",
        trustNote: "Northrop provides tax controversy support from initial notice through ITAT — combining technical tax knowledge with procedural expertise to achieve the best achievable outcome for each client.",
        closingTitle: "A tax demand is not always a liability. An expert response determines which one it is.",
        closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
    };

    return <ServicePageLayout {...data} />;
};

export default TaxControversy;