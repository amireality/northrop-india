import ServicePageLayout from '../../components/services/ServicePageLayout';

const PersonalTax = () => {
    const data = {
        metaTitle: "Personal Tax Advisory | HNI, ESOP & Foreign Asset Compliance | Northrop India",
        metaDescription: "Expert personal tax advisory for business owners, HNIs, and executives. We manage foreign asset disclosures (Schedule FA), ESOP taxation, and capital gains planning.",
        breadcrumbs: [
            { name: "Home", link: "/" },
            { name: "Personal Tax Advisory", link: null }
        ],
        bannerTitle: <>Your income tax return <br /> was filed. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Your offshore assets <br /> weren't disclosed.</span></>,
        bannerDescription: "Personal taxation for high-net-worth individuals and business owners in India has never been more scrutinised. Black Money Act disclosures, foreign asset reporting under Schedule FA, and beneficial ownership registers have eliminated the grey areas that previously existed.",
        primaryBtnText: "Get Personal Tax Advisory",
        secondaryBtnText: "See what's at risk ↓",
        svcNum: "TX — 05 /",
        svcTag: "Personal Tax Advisory",
        svcH2: <>The income tax notice was for undisclosed foreign assets. <em className="italic text-blue-600 not-italic font-serif">The penalty was 300% of the undisclosed amount.</em></>,
        hookText: "Personal tax in India is increasingly complex for business owners, senior executives, and HNIs — with ESOPs, capital gains, foreign assets, TDS obligations, and Equalisation Levy creating a compliance landscape that requires expert navigation.",
        painLabel: "Where personal tax exposure is highest",
        painList: [
            { label: "Business Owners & Promoters", text: "Dividend taxation, deemed dividend under Sec 2(22)(e), capital gains on buyback — the personal tax consequences of business decisions that finance teams often don't flag." },
            { label: "Senior Executives with ESOPs", text: "ESOP taxation — taxed as perquisite on exercise, capital gains on sale, potentially double taxation if the employer doesn't deposit TDS correctly." },
            { label: "Returning NRIs", text: "Residential status determination, foreign asset reporting, FEMA remittance requirements — the first year back in India is the most complex from a tax perspective." },
            { label: "HNIs with Foreign Assets", text: "Schedule FA disclosure of foreign bank accounts, overseas investments, and beneficial ownership — non-disclosure attracts penalties of up to ₹10L and prosecution under Black Money Act." },
            { label: "Real Estate Transactions", text: "Capital gains computation — cost of acquisition, indexation, reinvestment in Sec 54 assets — errors that create demands on transactions completed years ago." }
        ],
        delGrid: [
            { 
                title: "Individual Income Tax Return Preparation", 
                desc: "Comprehensive ITR preparation for business owners, executives, and HNIs — including all income sources, capital gains, foreign assets, and special provisions." 
            },
            { 
                title: "Foreign Asset & Offshore Disclosure Advisory", 
                desc: "Advisory on Schedule FA compliance, FEMA reporting, and Black Money Act obligations — for individuals with foreign bank accounts, investments, or property." 
            },
            { 
                title: "Capital Gains Planning & Computation", 
                desc: "Advising on and computing capital gains on sale of equity, property, or business assets — with reinvestment planning to mitigate liability." 
            },
            { 
                title: "Personal Tax Assessment Representation", 
                desc: "Managing personal income tax assessment proceedings and representing before the Assessing Officer, CIT(A), and ITAT." 
            }
        ],
        outcomes: [
            "Returns Filed Correctly",
            "Foreign Assets Disclosed",
            "Capital Gains Optimised",
            "ESOP Tax Managed",
            "Assessment Defended",
            "Black Money Risk Eliminated"
        ],
        whoGrid: [
            { 
                title: "Business Owners & Promoters", 
                desc: "Individuals whose personal and business tax positions are interconnected — needing coordinated advisory on both dimensions simultaneously." 
            },
            { 
                title: "Senior Executives with Complex Compensation", 
                desc: "Employees with ESOPs, RSUs, deferred compensation, and overseas income — where the employer's payroll function is insufficient." 
            },
            { 
                title: "HNIs with Foreign Assets or Income", 
                desc: "High-net-worth individuals with overseas bank accounts, foreign investments, or rental income from foreign property — with Schedule FA and FEMA compliance obligations." 
            },
            { 
                title: "Returning NRIs & Overseas Indians", 
                desc: "Individuals returning from overseas, or managing investments in India while residing abroad — navigating residential status, FEMA, and NRI taxation." 
            }
        ],
        ctaPrimaryText: "Get Personal Tax Advisory",
        ctaSecondaryText: "Speak to an Advisor",
        trustNote: "Northrop provides personal tax advisory for business owners, senior executives, and HNIs — covering domestic returns, foreign asset compliance, capital gains, and personal tax assessment representation.",
        closingTitle: "Personal tax complexity that isn't managed by an expert is a notice that is already being drafted.",
        closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
    };

    return <ServicePageLayout {...data} />;
};

export default PersonalTax;