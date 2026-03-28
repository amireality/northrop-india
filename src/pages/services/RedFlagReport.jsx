import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  BarChart3, 
  FileText, 
  Scale, 
  TrendingUp,
  ChevronRight,
  CheckCircle,
  Users,
  Target,
  Globe,
  ArrowRight
} from 'lucide-react';

const RedFlagReportPage = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Red Flag Report", link: null }
  ];

  const processSteps = [
    { id: "01", title: "Planning & Risk Assessment", desc: "We evaluate your business environment and identify key risk areas to tailor our audit approach." },
    { id: "02", title: "Internal Controls Evaluation", desc: "Testing the effectiveness of your internal systems to ensure data integrity and safeguard assets." },
    { id: "03", title: "Substantive Testing", desc: "Rigorous examination of financial records, transactions, and operational data for complete accuracy." },
    { id: "04", title: "Reporting & Insights", desc: "Delivering transparent, independent audit reports with actionable insights for management." }
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-blue-200">
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[70vh] flex items-center pt-24 pb-16 px-6 md:px-20 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-600/20 to-teal-500/10 blur-3xl" />
          <div className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-slate-700/40 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {crumb.link ? (
                  <a href={crumb.link} className="hover:text-blue-400 transition-colors">{crumb.name}</a>
                ) : (
                  <span className="text-slate-200 font-medium">{crumb.name}</span>
                )}
                {index < breadcrumbs.length - 1 && <ChevronRight size={14} />}
              </React.Fragment>
            ))}
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Red <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Flag Report</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed max-w-3xl mb-10">
            Driving transparency, building stakeholder trust, and illuminating operational truths through human intelligence and AI-powered precision.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
              Speak with an auditor <ArrowRight size={18} />
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm">
              Explore Our Insights
            </button>
          </div>
        </div>
      </section>

      {/* INTRODUCTION & WHY AUDIT */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6">
                <Search size={16} /> Overview
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Beyond Compliance: <br/>The Value of a Modern Audit</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                An audit is more than a statutory obligation - it's a powerful tool for discovering hidden value. We provide independent, objective evaluations of financial information, operational processes, and compliance frameworks to give you a clear picture of your organization's health.
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Enhance Stakeholder Trust:</strong> Assure investors and regulators with validated financial data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Identify Inefficiencies:</strong> Uncover process bottlenecks and optimize workflows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Mitigate Risks:</strong> Strengthen internal controls to prevent fraud and errors.</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <WhyCard 
                title="Verification"
                description="Confirming absolute accuracy of your complex financial records."
                icon={<BarChart3 size={28}/>}
              />
              <WhyCard 
                title="Compliance"
                description="Ensuring alignment with evolving global and local legal standards."
                icon={<Scale size={28}/>}
              />
              <WhyCard 
                title="Fraud Prevention"
                description="Acting as a powerful deterrent against internal and external fraud."
                icon={<ShieldCheck size={28}/>}
              />
              <WhyCard 
                title="Operational Edge"
                description="Turning regulatory audits into actionable business intelligence."
                icon={<TrendingUp size={28}/>}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE TOPICS / SERVICES */}
      <section className="py-24 px-6 md:px-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Comprehensive Audit Services</h2>
            <p className="text-lg text-slate-400">
              From financial statements to specialized IT assurance, our multi-disciplinary teams cover all dimensions of corporate auditing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Financial Statement"
              detail="Ensuring your financial reports align meticulously with standards like GAAP, IFRS, and local regulations."
            />
            <ServiceCard 
              title="Internal Audit"
              detail="A proactive consulting approach designed to add value, improve operations, and fortify risk management."
            />
            <ServiceCard 
              title="IT & Cybersecurity"
              detail="Evaluating the security, integrity, and resilience of your data systems against modern digital threats."
            />
            <ServiceCard 
              title="ESG & Sustainability"
              detail="Verifying non-financial disclosures regarding environmental impact, social responsibility, and governance."
            />
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Audit Methodology</h2>
              <p className="text-lg text-slate-600">
                A structured, technology-enabled approach that minimizes disruption to your daily operations while maximizing analytical depth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative class-step">
                <div className="text-6xl font-black text-slate-100 mb-6">{step.id}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                {/* Connector line for large screens */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 w-full left-1/2 h-[2px] bg-slate-100 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / CTA */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to elevate your assurance standards?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Partner with our global experts to experience an audit that goes beyond the numbers, delivering real strategic value to your board and management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <Users className="mb-4 text-blue-300" size={32} />
              <h4 className="font-bold text-lg mb-2">Industry Leaders</h4>
              <p className="text-sm text-blue-100">Teams specialized by sector to understand your unique regulatory landscape.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <Target className="mb-4 text-blue-300" size={32} />
              <h4 className="font-bold text-lg mb-2">Tech-Enabled</h4>
              <p className="text-sm text-blue-100">Harnessing AI, big data, and automation for deeper, faster insights.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <Globe className="mb-4 text-blue-300" size={32} />
              <h4 className="font-bold text-lg mb-2">Global Reach</h4>
              <p className="text-sm text-blue-100">Consistent audit quality delivered seamlessly across international borders.</p>
            </div>
          </div>
          <button className="bg-white text-blue-900 hover:bg-slate-50 px-10 py-4 rounded-full font-bold transition-all shadow-xl text-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>

    </div>
  );
};

// Sub-components
const WhyCard = ({ title, description, icon }) => (
  <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-lg hover:border-blue-100 transition-all bg-slate-50 hover:bg-white group">
    <div className="w-14 h-14 bg-white shadow-sm text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

const ServiceCard = ({ title, detail }) => (
  <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 transition-all group">
    <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300">
      <FileText size={24} />
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
  </div>
);

export default RedFlagReportPage;
