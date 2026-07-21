import React, { useState, useMemo } from 'react';
import { Notch } from '../components/ui/notch';
import { Check, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const SERVICES = [
  { id: 'incorporation', label: 'Incorporation', active: true },
  { id: 'bookkeeping', label: 'Bookkeeping', active: true },
  { id: 'financial-reporting', label: 'Financial Reporting', active: false },
  { id: 'tax', label: 'Direct & Indirect Tax', active: false },
  { id: 'agreed-procedures', label: 'Agreed Upon Procedures', active: false },
  { id: 'ngo', label: 'NGO Advisory', active: false },
];

export default function Pricing() {
  const [selectedService, setSelectedService] = useState('bookkeeping');
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly, quarterly, annually

  // Bookkeeping State
  const [revenue, setRevenue] = useState('under_30l');
  const [transactions, setTransactions] = useState('under_250');
  const [employees, setEmployees] = useState('1_5');
  const [framework, setFramework] = useState('as');

  // Bookkeeping Multipliers
  const revenueMultipliers = {
    'under_30l': 1.0,
    '30l_75l': 1.2,
    '75l_2cr': 1.45,
    '2cr_5cr': 1.75,
    '5cr_10cr': 2.25,
    '10cr_plus': 'custom',
  };

  const transactionMultipliers = {
    'under_250': 1.0,
    '250_500': 1.15,
    '500_1000': 1.35,
    '1000_2500': 1.7,
    '2500_5000': 2.2,
    '5000_plus': 'custom',
  };

  const employeeMultipliers = {
    '1_5': 1.0,
    '6_15': 1.15,
    '16_30': 1.35,
    '31_50': 1.6,
    '50_plus': 'custom',
  };

  const frameworkMultipliers = {
    'as': 1.0,
    'ind_as': 1.6,
    'ifrs': 2.1,
    'us_gaap': 2.5,
  };

  const isCustomQuote = useMemo(() => {
    return (
      revenueMultipliers[revenue] === 'custom' ||
      transactionMultipliers[transactions] === 'custom' ||
      employeeMultipliers[employees] === 'custom'
    );
  }, [revenue, transactions, employees]);

  const calculatePrice = (base) => {
    if (isCustomQuote) return 'Custom';
    let multiplier = 
      revenueMultipliers[revenue] * 
      transactionMultipliers[transactions] * 
      employeeMultipliers[employees] * 
      frameworkMultipliers[framework];
    
    let monthlyPrice = Math.round(base * multiplier);

    if (billingCycle === 'quarterly') {
      monthlyPrice = Math.round(monthlyPrice * 0.9);
    } else if (billingCycle === 'annually') {
      monthlyPrice = Math.round(monthlyPrice * 0.8);
    }

    return monthlyPrice.toLocaleString('en-IN');
  };

  const calculateBilledAmount = (monthlyFormatted) => {
    if (monthlyFormatted === 'Custom') return null;
    const monthlyNum = parseInt(monthlyFormatted.replace(/,/g, ''), 10);
    if (billingCycle === 'quarterly') {
      return (monthlyNum * 3).toLocaleString('en-IN');
    } else if (billingCycle === 'annually') {
      return (monthlyNum * 12).toLocaleString('en-IN');
    }
    return null;
  };

  const basePrices = {
    essential: 10000,
    growth: 25000,
  };

  const essentialPrice = calculatePrice(basePrices.essential);
  const growthPrice = calculatePrice(basePrices.growth);
  
  const essentialBilled = calculateBilledAmount(essentialPrice);
  const growthBilled = calculateBilledAmount(growthPrice);

  const getFrameworkFeatures = () => {
    switch (framework) {
      case 'ind_as':
        return [
          'Ind AS Financial Statements',
          'Schedule III Division II',
          'SOCE',
          'Deferred Tax',
          'Financial Instruments',
          'Fair Value',
          'Consolidation'
        ];
      case 'ifrs':
        return [
          'IFRS Financial Statements',
          'Group Reporting',
          'IFRS Disclosures',
          'Consolidation',
          'Foreign Subsidiaries',
          'Multi-currency'
        ];
      case 'us_gaap':
        return [
          'US GAAP Reporting',
          'ASC Compliance',
          'SEC-ready Financials',
          'Revenue Recognition',
          'Lease Accounting',
          'Stock Compensation'
        ];
      case 'as':
      default:
        return [
          'Schedule III',
          'AS Compliance',
          'Financial Statements',
          'Notes to Accounts'
        ];
    }
  };

  const bookkeepingNotchItems = [
    {
      id: 'revenue',
      label: 'Revenue',
      value: revenue,
      onChange: (val) => setRevenue(val),
      options: [
        { id: 'under_30l', label: 'Under ₹30 Lakh' },
        { id: '30l_75l', label: '₹30L – ₹75L' },
        { id: '75l_2cr', label: '₹75L – ₹2 Cr' },
        { id: '2cr_5cr', label: '₹2 Cr – ₹5 Cr' },
        { id: '5cr_10cr', label: '₹5 Cr – ₹10 Cr' },
        { id: '10cr_plus', label: '₹10 Cr+' },
      ]
    },
    {
      id: 'transactions',
      label: 'Transactions',
      value: transactions,
      onChange: (val) => setTransactions(val),
      options: [
        { id: 'under_250', label: 'Under 250/mo' },
        { id: '250_500', label: '250–500/mo' },
        { id: '500_1000', label: '500–1,000/mo' },
        { id: '1000_2500', label: '1,000–2,500/mo' },
        { id: '2500_5000', label: '2,500–5,000/mo' },
        { id: '5000_plus', label: '5,000+/mo' },
      ]
    },
    {
      id: 'employees',
      label: 'Employees',
      value: employees,
      onChange: (val) => setEmployees(val),
      options: [
        { id: '1_5', label: '1–5' },
        { id: '6_15', label: '6–15' },
        { id: '16_30', label: '16–30' },
        { id: '31_50', label: '31–50' },
        { id: '50_plus', label: '50+' },
      ]
    },
    {
      id: 'framework',
      label: 'Framework',
      value: framework,
      onChange: (val) => setFramework(val),
      options: [
        { id: 'as', label: 'Accounting Standards (AS)' },
        { id: 'ind_as', label: 'Ind AS' },
        { id: 'ifrs', label: 'IFRS' },
        { id: 'us_gaap', label: 'US GAAP' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-advisory-on-surface font-sans pb-32">
      {/* Hero Section */}
      <section className="bg-advisory-on-surface text-white pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#c5a044] via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Transparent Structuring.<br className="hidden md:block"/> Absolute Clarity.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Dynamic, scalable pricing engineered for precise financial operations. Select your service to explore tailored engagement models.
          </p>

          {/* Service Selector (Master) */}
          <div className="inline-flex bg-white/10 p-1.5 rounded-full backdrop-blur-md overflow-x-auto max-w-full">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => service.active && setSelectedService(service.id)}
                disabled={!service.active}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedService === service.id 
                    ? 'bg-advisory-primary text-white shadow-lg' 
                    : service.active
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-gray-500 cursor-not-allowed'
                }`}
              >
                {service.label}
                {!service.active && <span className="bg-white/10 text-[10px] px-2 py-0.5 rounded-full text-gray-300">Coming Soon</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        
        {selectedService === 'bookkeeping' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            {/* Billing Pills */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-200/50 p-1 rounded-full inline-flex border border-gray-300 shadow-inner">
                <button 
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white text-advisory-on-surface shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setBillingCycle('quarterly')}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${billingCycle === 'quarterly' ? 'bg-white text-advisory-on-surface shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Quarterly <span className="bg-advisory-primary/10 text-advisory-primary text-[10px] px-2 py-0.5 rounded-full">Save 10%</span>
                </button>
                <button 
                  onClick={() => setBillingCycle('annually')}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${billingCycle === 'annually' ? 'bg-white text-advisory-on-surface shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Annually <span className="bg-advisory-primary/10 text-advisory-primary text-[10px] px-2 py-0.5 rounded-full">Save 20%</span>
                </button>
              </div>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              
              {/* Essential Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-advisory-primary font-bold tracking-wider text-xs uppercase mb-2">Essential</div>
                <h3 className="text-2xl font-extrabold mb-1">Best for Startups</h3>
                <div className="text-sm text-gray-500 mb-6">Starting from</div>
                
                <div className="mb-6">
                  {isCustomQuote ? (
                    <div className="text-3xl font-extrabold">Custom Pricing</div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold">₹{essentialPrice}</span>
                        <span className="text-gray-500 font-medium">/month</span>
                      </div>
                      {essentialBilled && (
                        <div className="text-sm text-gray-500 mt-2">
                          Billed ₹{essentialBilled} {billingCycle}
                        </div>
                      )}
                    </>
                  )}
                </div>

                <Link to="/contact" className="w-full inline-block text-center bg-transparent border-2 border-advisory-on-surface text-advisory-on-surface hover:bg-advisory-on-surface hover:text-white font-bold py-3 rounded-lg transition-colors mb-8">
                  {isCustomQuote ? 'Contact Sales' : 'Get Started'}
                </Link>

                <div className="space-y-4">
                  <div className="font-semibold border-b pb-2 mb-4">Core Features</div>
                  {['Monthly Bookkeeping', 'GST Returns', 'ROC Compliance', 'Annual Financial Statements', 'TDS Returns', 'Dedicated Accountant', 'Chat Support'].map(feature => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  <div className="font-semibold border-b pb-2 mb-4 mt-6">Dynamic Features ({framework.toUpperCase()})</div>
                  {getFrameworkFeatures().map(feature => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-advisory-primary shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth Card (Highlighted) */}
              <div className="bg-advisory-on-surface text-white rounded-2xl border-2 border-advisory-primary shadow-2xl p-8 relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-advisory-primary text-white font-bold text-xs uppercase px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
                
                <div className="text-advisory-primary font-bold tracking-wider text-xs uppercase mb-2 mt-2">Growth</div>
                <h3 className="text-2xl font-extrabold mb-1">Growing Businesses</h3>
                <div className="text-sm text-gray-400 mb-6">Starting from</div>
                
                <div className="mb-6">
                  {isCustomQuote ? (
                    <div className="text-3xl font-extrabold">Custom Pricing</div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold">₹{growthPrice}</span>
                        <span className="text-gray-300 font-medium">/month</span>
                      </div>
                      {growthBilled && (
                        <div className="text-sm text-gray-400 mt-2">
                          Billed ₹{growthBilled} {billingCycle}
                        </div>
                      )}
                    </>
                  )}
                </div>

                <Link to="/contact" className="w-full inline-block text-center bg-advisory-primary hover:bg-white hover:text-advisory-on-surface text-white font-bold py-3 rounded-lg transition-colors mb-8 shadow-lg">
                  {isCustomQuote ? 'Contact Sales' : 'Talk to Expert'}
                </Link>

                <div className="space-y-4">
                  <div className="font-semibold border-b border-gray-700 pb-2 mb-4">Everything in Essential, plus:</div>
                  {['Monthly Closing', 'MIS Reporting', 'Management Accounts', 'Dedicated CA Review', employees !== '1_5' ? 'Payroll Included' : 'Payroll (Optional)', 'Vendor Reconciliation', 'Priority Support'].map(feature => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-advisory-primary shrink-0" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                  
                  <div className="font-semibold border-b border-gray-700 pb-2 mb-4 mt-6">Dynamic Features ({framework.toUpperCase()})</div>
                  {getFrameworkFeatures().map(feature => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-advisory-primary shrink-0" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-gray-500 font-bold tracking-wider text-xs uppercase mb-2">Enterprise</div>
                <h3 className="text-2xl font-extrabold mb-1">Finance Office as a Service</h3>
                <div className="text-sm text-gray-500 mb-6">Starting from</div>
                
                <div className="mb-6">
                  <div className="text-3xl font-extrabold">Custom Quote</div>
                  <div className="text-sm text-gray-500 mt-2">Tailored to exact needs</div>
                </div>

                <Link to="/contact" className="w-full inline-block text-center bg-gray-100 hover:bg-gray-200 text-advisory-on-surface font-bold py-3 rounded-lg transition-colors mb-8">
                  Contact Sales
                </Link>

                <div className="space-y-4">
                  <div className="font-semibold border-b pb-2 mb-4">Everything in Growth, plus:</div>
                  {['Virtual CFO', 'Group Consolidation', 'Investor Reporting', 'Budgeting & Forecasting', 'Board Reporting', 'Internal Controls', 'Dedicated Finance Team'].map(feature => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-700 shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {selectedService === 'incorporation' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4">Private Limited Company Registration</h2>
              <p className="text-gray-600">Choose the tier that fits your founding journey.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
              
              {/* Starter Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-extrabold">Starter</h3>
                    <div className="text-sm text-gray-500">Professional Fees Only</div>
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">Affordable</span>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-extrabold">₹4,999</div>
                </div>

                <Link to="/contact" className="w-full inline-block text-center bg-transparent border-2 border-advisory-on-surface text-advisory-on-surface hover:bg-advisory-on-surface hover:text-white font-bold py-3 rounded-lg transition-colors mb-8">
                  Get Started
                </Link>

                <div className="space-y-3">
                  <div className="font-semibold text-sm mb-4">What's Included:</div>
                  {['Name Availability Check & Reservation', 'DIN Application', 'Preparation of MOA & AOA', 'SPICe+ Application Filing', 'PAN & TAN Application', 'Certificate of Incorporation', 'CIN Allotment'].map(feature => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  <div className="font-semibold text-sm mb-4 mt-6 text-red-500">Not Included:</div>
                  {['Government Filing Fees', 'Digital Signature Certificate (DSC)', 'Stamp Duty', 'Other Statutory Charges'].map(feature => (
                    <div key={feature} className="flex items-start gap-3 text-gray-500">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Card */}
              <div className="bg-advisory-on-surface text-white rounded-2xl border-2 border-advisory-primary shadow-2xl p-8 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-advisory-primary text-white font-bold text-xs uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <span className="text-yellow-200">★</span> Most Popular
                </div>
                
                <div className="flex justify-between items-start mb-4 mt-2">
                  <div>
                    <h3 className="text-2xl font-extrabold text-advisory-primary">Pro</h3>
                    <div className="text-sm text-gray-300">Everything Included</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-extrabold">₹9,999</div>
                  <div className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                    <Info className="w-3 h-3" /> Includes Gov fees & DSC (subject to norms)
                  </div>
                </div>

                <Link to="/contact" className="w-full inline-block text-center bg-advisory-primary hover:bg-white hover:text-advisory-on-surface text-white font-bold py-3 rounded-lg transition-colors mb-8 shadow-lg">
                  Get Started
                </Link>

                <div className="space-y-3">
                  <div className="font-semibold text-sm mb-4">Everything in Starter, PLUS:</div>
                  {['Digital Signature Certificate (DSC)', 'Government Filing Fees', 'INC-20A (Commencement of Business)', 'ADT-1 (Appointment of Auditor)', 'GST Registration Assistance', 'Bank Account Assistance', 'ROC Compliance Guidance', 'Dedicated Relationship Manager', 'Priority Processing & Support'].map(feature => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-advisory-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-bold text-lg">
                Detailed Comparison
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-700 uppercase text-xs border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Feature</th>
                      <th className="px-6 py-3 font-semibold text-center">Starter</th>
                      <th className="px-6 py-3 font-semibold text-center text-advisory-primary">Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { f: 'Professional Fees', s: true, p: true },
                      { f: 'Government Fees Included', s: false, p: true },
                      { f: 'DSC Included', s: false, p: true },
                      { f: 'Name Reservation', s: true, p: true },
                      { f: 'DIN Application', s: true, p: true },
                      { f: 'MOA & AOA Drafting', s: true, p: true },
                      { f: 'SPICe+ Filing', s: true, p: true },
                      { f: 'PAN & TAN', s: true, p: true },
                      { f: 'Certificate of Incorporation', s: true, p: true },
                      { f: 'INC-20A Filing', s: false, p: true },
                      { f: 'ADT-1 Filing', s: false, p: true },
                      { f: 'GST Registration Assistance', s: false, p: true },
                      { f: 'Bank Account Assistance', s: false, p: true },
                      { f: 'Dedicated Support', s: false, p: true },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-800">{row.f}</td>
                        <td className="px-6 py-4 text-center">
                          {row.s ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                        </td>
                        <td className="px-6 py-4 text-center bg-advisory-primary/5">
                          {row.p ? <Check className="w-5 h-5 text-advisory-primary mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Fallback for other services */}
        {selectedService !== 'bookkeeping' && selectedService !== 'incorporation' && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">Pricing Modules in Development</h3>
            <p className="text-gray-500">The dynamic pricing engine for this service is being tailored for exact compliance standards.</p>
          </div>
        )}

      </main>

      {/* Floating Notch for Bookkeeping Engine */}
      <AnimatePresence>
        {selectedService === 'bookkeeping' && (
          <Notch 
            items={bookkeepingNotchItems} 
            position="bottom" 
            accentColor="#c5a044"
          />
        )}
      </AnimatePresence>

    </div>
  );
}
