import ServicePageLayout from '../../components/services/ServicePageLayout';

const InternationalTax = () => {
    const data = {
        metaTitle: "International Tax Advisory | POEM, GAAR & Treaty Planning | Northrop India",
        metaDescription: "Expert international tax advisory for Indian companies and multinationals. We manage POEM risk, GAAR compliance, withholding tax, and FEMA regulations.",
        breadcrumbs: [
            { name: "Home", link: "/" },
            { name: "International Tax Advisory", link: null }
        ],
        bannerTitle: <>Your subsidiary in Dubai <br /> saves tax. <br /><span className="text-[#C4973B]">The CBDT disagrees about <br /> whether it should.</span></>,
        bannerDescription: "India's international tax environment is among the most scrutinised in the world. GAAR, POEM, CbCR, Pillar Two — the tools available to tax authorities to look through international structures have never been sharper. Getting cross-border tax right is not optional.",
        primaryBtnText: "Get International Tax Advisory",
        secondaryBtnText: "See what's at risk ↓",
        svcNum: "TX — 02 /",
        svcTag: "International Tax Advisory",
        svcH2: <>The holding structure made commercial sense. <em className="italic text-[#C4973B] not-italic font-serif">POEM rules meant the Indian tax authority treated it as resident in India anyway.</em></>,
        hookText: "International tax structures that were standard practice five years ago are increasingly being challenged — through POEM, GAAR, treaty denial, and beneficial ownership challenges. Northrop helps Indian companies and multinationals navigate this environment with positions that hold up.",
        painLabel: "Where international tax exposure is highest",
        painList: [
            { label: "Indian Companies with Overseas Subs", text: "POEM (Place of Effective Management) — management of the overseas subsidiary from India makes it tax resident in India. Entire overseas income becomes taxable." },
            { label: "Multinationals in India", text: "Permanent Establishment risk — senior executives making decisions in India for their overseas employer. Undeclared PE triggers tax on all profits attributable to India." },
            { label: "Treaty Shopping Structures", text: "India-Mauritius / India-Singapore structures challenged under GAAR and PPT — beneficial ownership of dividends and capital gains challenged." },
            { label: "Royalty & Service Fee Payments", text: "Payments to group companies in low-tax jurisdictions — Sec 40A(2) disallowance, withholding tax defaults, and transfer pricing adjustment exposure." },
            { label: "Foreign Investment into India", text: "Angel tax on FDI from certain jurisdictions, FDI approval conditions, and FEMA compliance — a trifecta of exposure for inbound investors." }
        ],
        delGrid: [
            {
                title: "Cross-Border Structure Review",
                desc: "Assessment of your existing international structure against POEM, GAAR, PPT, and treaty rules — identifying exposure and recommending restructuring where needed."
            },
            {
                title: "Withholding Tax Advisory",
                desc: "Determining the correct withholding tax treatment for payments to non-residents — royalties, fees for technical services, dividends, and interest."
            },
            {
                title: "FEMA & RBI Compliance",
                desc: "Advisory on outbound investment, ECB compliance, ODI reporting, and APR filing obligations — the regulatory layer beneath the tax layer."
            },
            {
                title: "Treaty Application & Certification",
                desc: "Obtaining Tax Residency Certificates, structuring treaty claims, and managing the beneficial ownership documentation required for treaty relief."
            }
        ],
        outcomes: [
            "International Structure Reviewed",
            "POEM Risk Managed",
            "GAAR Defensibility Built",
            "Withholding Tax Correct",
            "Treaty Claims Structured",
            "FEMA Compliant"
        ],
        whoGrid: [
            {
                title: "Indian Companies Expanding Overseas",
                desc: "Businesses establishing or reviewing overseas subsidiaries, joint ventures, or representative offices — needing cross-border tax structuring advice."
            },
            {
                title: "Multinationals Entering or Expanding in India",
                desc: "Foreign companies establishing Indian operations — needing PE risk management, treaty planning, and inbound structuring advisory."
            },
            {
                title: "Companies with Cross-Border Related Party Transactions",
                desc: "Businesses making royalty, fee, or interest payments to overseas group companies — needing defensible withholding and transfer pricing positions."
            },
            {
                title: "Companies Under International Tax Assessment",
                desc: "Businesses that have received notices related to PE, POEM, treaty denial, or GAAR — needing expert representation before the tax authority."
            }
        ],
        ctaPrimaryText: "Get International Tax Advisory",
        ctaSecondaryText: "Speak to an Advisor",
        trustNote: "Northrop advises on international tax structuring, POEM and GAAR compliance, treaty planning, and FEMA obligations — for both Indian companies going global and multinationals operating in India.",
        closingTitle: "International tax structures that haven't been reviewed against GAAR and POEM are structures waiting to be challenged.",
        closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
    };

    return <ServicePageLayout {...data} />;
};

export default InternationalTax;