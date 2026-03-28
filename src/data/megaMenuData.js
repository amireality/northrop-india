export const sidebarLinks = [
  { label: 'Financial Reporting', hasArrow: true, href: '/services/financial-reporting' },
  { label: 'Risk Management', hasArrow: true, href: '/services/risk-management' },
  { label: 'Due Diligence', hasArrow: true, href: '/services/due-diligence' },
  { label: 'Forensic Investigations', hasArrow: true, href: '/services/forensic-investigations' },
  { label: 'Taxation', hasArrow: true, href: '/services/taxation' },
  { label: 'Transaction Advisory', hasArrow: true, href: '/services/transaction-advisory' },
  { label: 'Grant & Funding', hasArrow: true, href: '/services/grant-funding' },
]

const slugify = (text) => text.toLowerCase().replace(/ & /g, '-').replace(/, /g, '-').replace(/ /g, '-').replace(/\//g, '-');

export const menuContent = {
  'Financial Reporting': [
    [
      { label: 'Audit & Assurance', href: '/services/audit' },
      { label: 'IFRS Advisory', href: '/services/ifrs' },
      { label: 'Accounting Advisory', href: '/services/accounting-advisory' }
    ],
    [
      { label: 'Corporate Reporting', href: '/services/corporate-reporting' },
      { label: 'Consolidation Services', href: '/services/consolidation' }
    ]
  ],
  'Risk Management': [
    [
      { label: 'Enterprise Risk Management', href: '/services/erm' },
      { label: 'Internal Audit', href: '/services/internal-audit' },
      { label: 'IT Risk & Cyber Security', href: '/services/cyber' }
    ],
    [
      { label: 'Regulatory Compliance', href: '/services/regulatory' },
      { label: 'Third-Party Risk', href: '/services/third-party-risk' }
    ]
  ],
  'Due Diligence': [
    [
      { label: 'Financial Due Diligence', href: '/services/financial-dd' },
      { label: 'Tax Due Diligence', href: '/services/tax-dd' },
      { label: 'Commercial Due Diligence', href: '/services/commercial-dd' }
    ],
    [
      { label: 'IT Due Diligence', href: '/services/it-dd' },
      { label: 'HR Due Diligence', href: '/services/hr-dd' }
    ]
  ],
  'Forensic Investigations': [
    [
      { label: 'Fraud Investigations', href: '/services/fraud' },
      { label: 'Dispute Advisory', href: '/services/dispute-advisory' },
      { label: 'Digital Forensics', href: '/services/digital-forensics' }
    ],
    [
      { label: 'Anti-Bribery & Corruption', href: '/services/anti-bribery' },
      { label: 'Asset Tracing', href: '/services/asset-tracing' }
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
      { label: 'Post-Merger Integration', href: '/services/pmi' }
    ]
  ],
  'Grant & Funding': [
    [
      { label: 'Debt Syndication', href: '/services/debt-syndication' },
      { label: 'Private Equity Raising', href: '/services/pe-raising' },
      { label: 'Venture Capital', href: '/services/vc-funding' }
    ],
    [
      { label: 'Government Grants', href: '/services/government-grants' },
      { label: 'Project Finance', href: '/services/project-finance' }
  ]
  ]
}
