
import ServicePageLayout from '../../components/services/ServicePageLayout';

const CapitalStructuring = () => {
    const data = {
        metaTitle: "Capital Structuring Advisory | Debt & Equity Optimization | Northrop India",
        metaDescription: "Strategic capital structuring to ensure business sustainability. We optimize debt-equity ratios, manage refinancing, and protect founder control during growth.",
        breadcrumbs: [
            { name: "Home", link: "/" },
            { name: "Capital Structuring", link: null }
        ],
        bannerTitle: <>Your balance sheet is <br />carrying debt<br /> that is costing you more <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">than your business earns.</span></>,
        bannerDescription: "Capital structure — the mix of debt, equity, and instruments between them — determines the financial resilience of your business in good times and its survival in bad ones. Getting it wrong is expensive. Getting it right is a competitive advantage.",
        primaryBtnText: "Get Capital Structuring Advisory",
        secondaryBtnText: "See what's at risk ↓",
        svcNum: "TA — 03 /",
        svcTag: "Capital Structuring",
        svcH2: <>The term loan seemed manageable at ₹8 Cr annual repayment. <em className="italic text-blue-600 not-italic font-serif">When EBITDA fell 30%, the debt service consumed the entire free cash flow.</em></>,
        hookText: "Capital structure is not just about finding the cheapest source of funds — it is about designing a financial architecture that is sustainable across business cycles, supports your growth plans, and preserves optionality for future decisions.",
        painLabel: "Where capital structure creates lasting problems",
        painList: [
            { label: "Over-Leveraged Businesses", text: "Debt taken at peak revenue — DSCR of 1.2× leaves no buffer. Any revenue shock pushes the company into covenant breach and bank pressure." },
            { label: "Working Capital Mismatch", text: "Long-term assets funded with short-term working capital loans — creating perpetual refinancing risk and heavy bank dependence." },
            { label: "Equity Dilution", text: "Capital raised at low valuations — excessive dilution that leaves the promoter with insufficient equity to justify continued commitment." },
            { label: "Instrument Mismatch", text: "Non-convertible debentures with bullet repayment — cash flow forecast didn't account for the large lump-sum obligation." },
            { label: "Cross-Collateralisation", text: "All borrowings secured against the same assets — one default triggers cross-default across all facilities. No ring-fencing of assets." }
        ],
        delGrid: [
            { title: "Capital Structure Review & Optimisation", desc: "Analysing your current capital structure against your cash flow profile, growth plans, and risk tolerance — identifying structural weaknesses and optimisation opportunities." },
            {
                title: "Debt Structuring & Lender Negotiation",
                desc: "Designing the right debt instrument, tenor, and security structure — and supporting the negotiation with lenders to achieve terms that work for the business."
            },
            { title: "Equity & Instrument Advisory", desc: "Advising on equity raises, convertible instruments, preference shares, and structured products — balancing dilution, control, and cost of capital." },
            { title: "Refinancing & Restructuring Advisory", desc: "Supporting businesses with existing debt that is mismatched, over-priced, or covenanted — designing and executing a refinancing that improves the structure." }
        ],
        outcomes: [
            "DSCR Improved",
            "Debt Tenor Matched",
            "Covenant Relief Secured",
            "Equity Dilution Managed",
            "Cross-Default Risk Reduced",
            "Growth Capital Structured"
        ],
        whoGrid: [
            { title: "Growth-Stage Companies Raising Capital", desc: "Businesses seeking their first institutional debt or equity raise — needing advisory on structure, instrument selection, and lender/investor approach." },
            { title: "Companies with Distressed Capital Structure", 
                desc: "Businesses whose existing debt structure is creating strain — over-leveraged, mismatched maturity, or covenanted against current performance." },
            { title: "Companies Refinancing Existing Debt", 
                desc: "Businesses approaching maturity on existing facilities or seeking better terms — needing advisory on alternative lenders, instruments, and structures." },
            { title: "Family Businesses Introducing External Capital",
                 desc: "Family-owned businesses bringing in PE or institutional capital for the first time — needing advisory on structure that protects family control and interests." }
        ],
        ctaPrimaryText: "Get Capital Structuring Advisory",
        ctaSecondaryText: "Speak to an Advisor",
        trustNote: "Northrop provides capital structure advisory across growth-stage, mid-market, and distressed scenarios — combining financial modelling with lender relationship and transaction structuring expertise.",
        closingTitle: "The right capital structure is the one your business can service when things don't go according to plan.",
        closingDescription: "Every engagement starts with a confidential conversation. No obligation — just clarity on your specific exposure and how Northrop can help."
    };

    return <ServicePageLayout {...data} />;
};

export default CapitalStructuring;