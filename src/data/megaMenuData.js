export const sidebarLinks = [
  { label: 'Services', hasArrow: true, href: '/services' },
  { label: 'Industry', hasArrow: true, href: '/industry' },
  { label: 'Alliances', hasArrow: true, href: '/alliances' },
  { label: 'Case studies', hasArrow: false, href: '/case-studies' },
]

const slugify = (text) => text.toLowerCase().replace(/ & /g, '-').replace(/, /g, '-').replace(/ /g, '-').replace(/\//g, '-');

export const menuContent = {
  'Services': [
    [
      { label: 'Audit', href: '/services/audit' },
      { label: 'Assurance', href: '/services/assurance' },
      { label: 'Business Process Solutions', href: '/services/business-process-solutions' },
      { label: 'Customer', href: '/services/customer' },
      { label: 'Cyber', href: '/services/cyber' },
      { label: 'Human Capital', href: '/services/human-capital' },
      { label: 'Strategy & Transactions', href: '/services/strategy-transactions' }
    ],
    [
      { label: 'Sustainability', href: '/services/sustainability' },
      { label: 'Risk, Regulatory & Forensic', href: '/services/risk-regulatory-forensic' },
      { label: 'Legal', href: '/services/legal' },
      { label: 'Operate', href: '/services/operate' },
      { label: 'Tax', href: '/services/tax' },
      { label: 'Deloitte Private', href: '/services/deloitte-private' },
      { label: 'Engineering, AI & Data', href: '/services/engineering-ai-data' }
    ],
    [
      { label: 'Enterprise Technology & Performance', href: '/services/enterprise-technology-performance' },
      { label: 'Generative AI', href: '/services/generative-ai' },
      { label: 'Global Employer Services', href: '/services/global-employer-services' }
    ]
  ],
  'Industry': [
    [
      { label: 'Consumer', href: '/industry/consumer' },
      { label: 'Energy, Resources & Industrials', href: '/industry/energy-resources-industrials' },
      { label: 'Financial Services', href: '/industry/financial-services' },
      { label: 'Government & Public Services', href: '/industry/government-public-services' }
    ],
    [
      { label: 'Life Sciences & Health Care', href: '/industry/life-sciences-health-care' },
      { label: 'Technology, Media & Telecommunications', href: '/industry/technology-media-telecommunications' },
      { label: 'Aerospace & Defense', href: '/industry/aerospace-defense' },
      { label: 'Automotive', href: '/industry/automotive' }
    ],
    [
      { label: 'Real Estate', href: '/industry/real-estate' },
      { label: 'Logistics', href: '/industry/logistics' },
      { label: 'Retail', href: '/industry/retail' }
    ]
  ],
  'Alliances': [
    [
      { label: 'SAP Alliance', href: '/alliances/sap' },
      { label: 'Oracle Alliance', href: '/alliances/oracle' },
      { label: 'Microsoft Alliance', href: '/alliances/microsoft' },
      { label: 'AWS Alliance', href: '/alliances/aws' }
    ],
    [
      { label: 'Google Cloud Alliance', href: '/alliances/google-cloud' },
      { label: 'Salesforce Alliance', href: '/alliances/salesforce' },
      { label: 'ServiceNow Alliance', href: '/alliances/servicenow' }
    ],
    [
      { label: 'Workday Alliance', href: '/alliances/workday' },
      { label: 'NVIDIA Alliance', href: '/alliances/nvidia' },
      { label: 'Adobe Alliance', href: '/alliances/adobe' }
    ]
  ],
  'Case studies': [
    [
      { label: 'Success Stories', href: '/case-studies/success-stories' },
      { label: 'Client Testimonials', href: '/case-studies/testimonials' },
      { label: 'Resource Library', href: '/case-studies/resources' }
    ],
    [
      { label: 'Browse by Industry', href: '/case-studies/by-industry' },
      { label: 'Browse by Service', href: '/case-studies/by-service' }
    ]
  ]
}
