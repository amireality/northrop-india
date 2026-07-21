import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AuthorBlock from '../../components/insights/AuthorBlock';
import ArticleSidebar from '../../components/insights/ArticleSidebar';

const InternalAudit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans overflow-x-hidden">
      <Helmet>
        <title>Internal Audit Transformation | Northrop India</title>
        <meta name="description" content="Moving internal audit from compliance to strategic value creation in modern Indian enterprises." />
      </Helmet>

      {/* Hero Section - Image-less Premium Design */}
      <header className="relative w-full h-[600px] flex flex-col items-center justify-center text-center overflow-hidden bg-white border-b border-[#e2e4ea]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-20 px-[20px] md:px-[64px] max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3 py-1 mb-6 rounded-md bg-[#C5963A] text-white text-[11px] font-bold uppercase tracking-widest">
            New Insight
          </span>
          <h1 className="font-serif text-[32px] md:text-[56px] leading-[40px] md:leading-[64px] font-bold tracking-[-0.02em] text-[#001F3F] mb-6 uppercase">
            Internal Audit: From Compliance Checkbox to Strategic Value (2026)
          </h1>
          <div className="w-24 h-1 bg-[#C5963A] mb-8"></div>
          <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-[#45474c] max-w-2xl font-normal">
            Why agile, risk-based internal assurance is replacing the static annual audit plan.
          </p>
        </div>
      </header>

      <main 
        className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[64px] py-20"
        style={{ backgroundImage: "radial-gradient(#c5c6cd 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px]">
          {/* Main Content */}
          <div className="md:col-span-8">
            <p className="text-[18px] leading-[32px] text-[#191c1d] mb-8 font-normal">
              Historically, Internal Audit (IA) functions operated on static, retrospective 12-month plans. They reviewed yesterday's processes to ensure yesterday's compliance. In the accelerated risk environment of 2026, this model is fundamentally broken.
            </p>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-8">
              Audit Committees now demand real-time risk intelligence. They need assurance over emerging vectors: cyber resilience, digital transformation deployments, ESG compliance, and complex supply chain dependencies.
            </p>
            
            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">The Shift to Agile Auditing</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              Agile internal auditing abandons the rigid annual cycle. It utilizes short, focused sprints to assess immediate risks as they emerge. If a new geopolitical event disrupts the supply chain, the IA team pivots to evaluate procurement controls within days, not quarters.
            </p>
            
            <div className="bg-white p-8 border-l-4 border-[#0A2624] shadow-sm mb-12">
              <h4 className="text-[14px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#0A2624] mb-4">Core Components of Agile IA</h4>
              <ul className="list-disc pl-5 space-y-3 text-[16px] text-[#45474c]">
                <li><strong>Continuous Risk Assessment:</strong> Monthly or quarterly re-evaluation of the risk universe.</li>
                <li><strong>Data Analytics Integration:</strong> Utilizing AI and full-population testing instead of manual sampling.</li>
                <li><strong>Cross-Functional Teams:</strong> Embedding cyber and forensic specialists into standard audit workflows.</li>
                <li><strong>Concise Reporting:</strong> Replacing 50-page reports with dashboard-driven, actionable insights for the Board.</li>
              </ul>
            </div>

            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">The ROI of Modern IA</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              When transformed from a cost center into a strategic partner, Internal Audit directly preserves enterprise value. It prevents revenue leakage, optimizes control frameworks, and ensures that executive strategy is actually executed on the front lines without regulatory blowback.
            </p>
            <AuthorBlock />
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <ArticleSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default InternalAudit;
