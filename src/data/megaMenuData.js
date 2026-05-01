export const sidebarLinks = [
  { label: 'Financial Reporting', hasArrow: true },
  { label: 'Risk Management', hasArrow: true, href: '/services/risk-management' },
  { label: 'Due Diligence', hasArrow: true, href: '/services/due-diligence' },
  { label: 'Forensic Investigations', hasArrow: true, href: '/services/forensic-investigations' },
  { label: 'Taxation', hasArrow: true, href: '/services/taxation' },
  { label: 'Transaction Advisory', hasArrow: true, href: '/services/transaction-advisory' },
  { label: 'Grant & Funding', hasArrow: true, href: '/services/grant-funding' },
  { label: 'Management Consulting', hasArrow: true },
  { label: 'Financial Advisory', hasArrow: true },
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
  'Risk Management': [
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
      { label: 'Corporate Tax', href: '/services/corporate-tax' },
      { label: 'International Tax', href: '/services/international-tax' },
      { label: 'Transfer Pricing', href: '/services/transfer-pricing' }
    ],
    [
      { label: 'Indirect Tax (GST)', href: '/services/indirect-tax' },
      { label: 'Personal Tax', href: '/services/personal-tax' },
      { label: 'Tax Controversy', href: '/services/tax-controversy' }
    ]
  ],
  'Transaction Advisory': [
    [
      { label: 'M&A Advisory', href: '/services/m-a-advisory' },
      { label: 'Valuation Modeling', href: '/services/valuation' },
      { label: 'Capital Structuring', href: '/services/capital-structuring' }
    ],
    [
      { label: 'Restructuring', href: '/services/restructuring' },
      { label: 'Post-Merger Integration', href: '/services/post-merger-integration' }
    ]
  ],
  'Grant & Funding': [
    [
      { label: 'Business Strategy and Consulting', href: '/services/business-strategy-consulting' },
      { label: 'Impact Assessment Services', href: '/services/impact-assessment' },
      { label: 'Program Management Consulting', href: '/services/program-management-consulting' },
      { label: 'Corporate Social Responsibility Consulting', href: '/services/csr-consulting' }
    ],
    [
      { label: 'Research & Documentation Services', href: '/services/research-documentation' },
      { label: 'Grant Management & Utilisation Services', href: '/services/grant-management-utilisation' },
      { label: 'GRC Control and Compliance Services', href: '/services/grc-control-compliance' }
    ]
  ],
  'Management Consulting': [
    [
      { label: 'Enterprise Strategy & Value Architecture', href: '/services/enterprise-strategy' },
      { label: 'Growth Structuring & Market Positioning', href: '/services/growth-structuring' },
      { label: 'Corporate Governance & Board Advisory', href: '/services/corporate-governance' },
      { label: 'Organizational Redesign & Capability Building', href: '/services/organizational-redesign' }
    ],
    [
      { label: 'Portfolio Rationalization & Business Exits', href: '/services/portfolio-rationalization' },
      { label: 'Performance Transformation & Margin Expansion', href: '/services/performance-transformation' },
      { label: 'Founder-to-Institution Transition Advisory', href: '/services/founder-transition' },
      { label: 'Conglomerate Strategy & Holding Structures', href: '/services/conglomerate-strategy' }
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
