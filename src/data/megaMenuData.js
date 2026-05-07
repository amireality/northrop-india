export const sidebarLinks = [
  { label: 'Management Consulting', hasArrow: true },
  { label: 'Financial Advisory', hasArrow: true },
  { label: 'Financial Reporting', hasArrow: true },
  { label: 'Assurance & Risk Advisory', hasArrow: true, href: '/services/risk-management' },
  { label: 'Due Diligence', hasArrow: true, href: '/services/due-diligence' },
  { label: 'Forensic Investigations', hasArrow: true, href: '/services/forensic-investigations' },
  { label: 'Taxation', hasArrow: true, href: '/services/taxation' },
  { label: 'Transaction Advisory', hasArrow: true, href: '/services/transaction-advisory' },
  { label: 'Grants & ESG Advisory', hasArrow: true, href: '/services/grant-funding' },
  
  
]

const slugify = (text) => text.toLowerCase().replace(/ & /g, '-').replace(/, /g, '-').replace(/ /g, '-').replace(/\//g, '-');

export const menuContent = {
  'Financial Reporting': [
    [
      { label: 'Risk Audit and Assurance Consulting', href: '/services/risk-audit-assurance' },
      { label: 'Accounting Advisory Services', href: '/services/accounting-advisory-services' },
      { label: 'Financial Statement Preparation Services', href: '/services/financial-statement-preparation' }
    ],
    [
      { label: 'International Financial Reporting Standards (IFRS) & IND-AS Implementation', href: '/services/ifrs-ind-as-implementation' },
      { label: 'Agreed Upon Procedures Management Reporting', href: '/services/agreed-upon-procedures' },
      { label: 'Ind AS Applicability Compliance Consultants', href: '/services/ind-as-applicability' }
    ]
  ],
  'Assurance & Risk Advisory': [
    [
      { label: 'Internal Audit', href: '/services/internal-audit' },
      { label: 'Internal Audit Transformation Service', href: '/services/internal-audit-transformation' },
      { label: 'Enterprise Risk Management Services', href: '/services/enterprise-risk-management' }
    ],
    [
      { label: 'Risk and Control Registers Consulting', href: '/services/risk-control-registers' },
      { label: 'IFC/ICFR in India', href: '/services/ifc-icfr-india' },
      { label: 'Process Designing and Documentation Services', href: '/services/process-design-documentation' }
    ]
  ],
  'Due Diligence': [
    [
      { label: 'Buy-Side FDD', href: '/services/buy-side-fdd' },
      { label: 'Sell-Side FDD', href: '/services/sell-side-fdd' },
      { label: 'Vendor DD (VDD)', href: '/services/vendor-dd' },
      { label: 'Lender Due Diligence', href: '/services/lender-due-diligence' },
      { label: 'Red Flag Report', href: '/services/red-flag-report' }
    ],
    [
      { label: 'Fraud Indicators', href: '/services/fraud-indicators' },
      { label: 'Missing Docs Report', href: '/services/missing-docs-report' },
      { label: 'Mgmt Account Scrutiny', href: '/services/mgmt-account-scrutiny' },
      { label: 'Related Party Review', href: '/services/related-party-review' },
      { label: 'Quality of Earnings', href: '/services/quality-of-earnings' }
    ]
  ],
  'Forensic Investigations': [
    [
      { label: 'Forensic Accounting Fraud Investigations Service', href: '/services/forensic-accounting-fraud' },
      { label: 'Law Enforcement Support Services', href: '/services/law-enforcement-support' },
      { label: 'Forensic Audit Services Under RBI', href: '/services/forensic-audit-rbi' },
      { label: 'Transaction Audit under IBC', href: '/services/transaction-audit-ibc' }
    ],
    [
      { label: 'Anti-Bribery and Corruption Services', href: '/services/anti-bribery-corruption' },
      { label: 'Asset Tracing Investigation Services India', href: '/services/asset-tracing-investigation' },
      { label: 'AML KYC & Sanctions Consulting Review services', href: '/services/aml-kyc-sanctions' },
      { label: 'Digital Forensic Investigation', href: '/services/digital-forensic' }
    ]
  ],
  'Taxation': [
    [
      { label: 'Corporate & Business Tax Advisory', href: '/services/corporate-business-tax-advisory' },
      { label: 'Indirect Tax & GST Advisory', href: '/services/indirect-tax-gst-advisory' },
      { label: 'International Tax & Cross-Border Planning', href: '/services/international-tax-cross-border-planning' }
    ],
    [
      { label: 'Transfer Pricing & Documentation', href: '/services/transfer-pricing-documentation' },
      { label: 'Tax Controversy & Dispute Resolution', href: '/services/tax-controversy-dispute-resolution' },
      { label: 'Private Client & High Net-Worth Services', href: '/services/private-client-high-net-worth' }
    ]
    // [
    //   { label: 'Corporate Tax', href: '/services/corporate-tax' },
    //   { label: 'International Tax', href: '/services/international-tax' },
    //   { label: 'Transfer Pricing', href: '/services/transfer-pricing' }
    // ],
    // [
    //   { label: 'Indirect Tax (GST)', href: '/services/indirect-tax' },
    //   { label: 'Personal Tax', href: '/services/personal-tax' },
    //   { label: 'Tax Controversy', href: '/services/tax-controversy' }
    // ]
  ],
  'Transaction Advisory': [
     [
      { label: 'Merger & Acquisition Advisory', href: '/services/merger-acquisition-advisory' },
      { label: 'Valuation & Financial Business Modelling', href: '/services/valuation-financial-business-modelling' },
      { label: 'Corporate Restructuring & turnaround Advisory', href: '/services/corporate-restructuring-turnaround-advisory' }
    ],
    [
      { label: 'Capital & Debt Advisory', href: '/services/capital-debt-advisory' },
      { label: 'Post Merger Integration & Value Creation', href: '/services/post-merger-integration-value-creation' },
      { label: 'Strategic Portfolio Review & Carve-Outs', href: '/services/strategic-portfolio-review-carve-outs' },
    ]
    // [
    //   { label: 'M&A Advisory', href: '/services/m-a-advisory' },
    //   { label: 'Valuation Modeling', href: '/services/valuation' },
    //   { label: 'Capital Structuring', href: '/services/capital-structuring' }
    // ],
    // [
    //   { label: 'Restructuring', href: '/services/restructuring' },
    //   { label: 'Post-Merger Integration', href: '/services/post-merger-integration' }
    // ]
  ],
  'Grants & ESG Advisory': [
     [
      { label: 'Grant Management & Utilisation Services', href: '/services/institutional-grant-management' },
      { label: 'ESG Reporting & Disclosure', href: '/services/esg-reporting-disclosure' },
      { label: 'Sustainability Strategy & ESG Integration', href: '/services/sustainability-strategy-esg-integration' },
      { label: 'ESG Compliance & Gap Analysis', href: '/services/esg-compliance-gap-analysis' }
    ],
    [
      { label: 'Impact Assessment & Materiality Analysis', href: '/services/impact-assessment-materiality-analysis' },
      { label: 'Carbon Footprint & Net Zero Planning', href: '/services/carbon-footprint-net-zero-planning' },
      { label: 'Sustainable Supply Chain Due Diligence', href: '/services/sustainable-supply-chain-due-diligence' },
      { label: 'Green Finance & Investment Advisory', href: '/services/green-finance-investment-advisory' }
    ]
    // [
    //   { label: 'Business Strategy and Consulting', href: '/services/business-strategy-consulting' },
    //   { label: 'Impact Assessment Services', href: '/services/impact-assessment' },
    //   { label: 'Program Management Consulting', href: '/services/program-management-consulting' },
    //   { label: 'Corporate Social Responsibility Consulting', href: '/services/csr-consulting' }
    // ],
    // [
    //   { label: 'Research & Documentation Services', href: '/services/research-documentation' },
    //   { label: 'Grant Management & Utilisation Services', href: '/services/grant-management-utilisation' },
    //   { label: 'GRC Control and Compliance Services', href: '/services/grc-control-compliance' }
    // ]
  ],
  'Management Consulting': [
    [
      { label: 'Enterprise Strategy & Value Architecture', href: '/services/enterprise-strategy-value-architecture' },
      { label: 'Growth Structuring & Market Positioning', href: '/services/growth-structuring-market-positioning' },
      { label: 'Corporate Governance & Board Advisory', href: '/services/corporate-governance-board-advisory' },
      { label: 'Organizational Redesign & Capability Building', href: '/services/organizational-redesign-capability-building' }
    ],
    [
      { label: 'Portfolio Rationalization & Business Exits', href: '/services/portfolio-rationalization-business-exits' },
      { label: 'Performance Transformation & Margin Expansion', href: '/services/performance-transformation-margin-expansion' },
      { label: 'Founder-to-Institution Transition Advisory', href: '/services/founder-to-institution-transition-advisory' },
      { label: 'Conglomerate Strategy & Holding Structures', href: '/services/conglomerate-strategy-holding-structures' }
    ]
  ],
  'Financial Advisory': [
    [
      { label: 'Capital Structure & Debt Architecture', href: '/services/capital-structure' },
      { label: 'Investor Relations & Equity Positioning', href: '/services/investor-relations' },
      { label: 'Pre-Transaction Financial Readiness', href: '/services/pre-transaction-readiness' },
      { label: 'Private Equity & Growth Capital Advisory', href: '/services/private-equity-advisory' }
    ],
    [
      { label: 'Working Capital & Liquidity Optimization', href: '/services/working-capital' },
      { label: 'EBITDA Normalization & Valuation Advisory', href: '/services/ebitda-valuation' },
      { label: 'Cross-Border Financial Structuring', href: '/services/cross-border-structuring' },
      { label: 'Distressed Asset & Turnaround Advisory', href: '/services/distressed-asset-turnaround' }
    ]
  ]
}
