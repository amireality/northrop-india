import { useState } from 'react';
import { Link } from 'react-router-dom';

const InsightCard = ({ data }) => (
  <Link
    to={data.link || (data.slug ? `/reports/${data.slug}` : "/contact")}
    className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group cursor-pointer"
  >
    <div className="relative h-40 overflow-hidden">
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={data.img}
        alt={data.title}
        loading="lazy"
      />
      <div className="absolute top-4 left-4">
        <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider ${data.tagClass} shadow-sm`}>
          {data.categoryName}
        </span>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-semibold">
        {data.date}
      </div>
      <h3 className="font-serif text-[17px] font-bold text-[#1A2B45] leading-[1.3] mb-4 group-hover:text-[#C5963A] transition-colors">
        {data.title}
      </h3>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-6 flex-1 line-clamp-3">
        {data.text}
      </p>
      <div className="pt-5 border-t border-gray-50 flex justify-between items-center">
        <div className="px-5 py-2 rounded-full border border-gray-100 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1A2B45] group-hover:bg-[#1A2B45] group-hover:text-white transition-all duration-300 flex items-center gap-2">
          READ
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </div>
        
      </div>
    </div>
  </Link>
);

const Insightsv3 = () => {
  

  const insights = [
    { id: 1, link: '/new-insights/esg-as-alpha', category: 'due-diligence', categoryName: 'Due Diligence', tagClass: 'bg-blue-50 text-blue-600', date: 'Apr 2026', img: '/insightpage/esgalpha1.png', title: 'ESG AS ALPHA: THE DECOUPLING OF ESG SENTIMENT', text: 'A forensic analysis of the emerging divergence between public perception and core financial resilience in the Indian M&A landscape.', readTime: '5 min' },
    { id: 2, link: '/new-insights/a-fiduciary-approach-to-social-capital', category: 'due-diligence', categoryName: 'Due Diligence', tagClass: 'bg-blue-50 text-blue-600', date: 'Feb 2026', img: '/insightpage/fiduciary.jpg', title: 'A FIDUCIARY APPROACH TO SOCIAL CAPITAL', text: 'As the strategic landscape of India matures toward 2026, social capital deployment can no longer rely on anecdotal success or philanthropic sentiment.', readTime: '4 min' },
    { id: 3, link: '/new-insights/brsr', category: 'forensic', categoryName: 'Forensic', tagClass: 'bg-red-50 text-red-600', date: 'Apr 2026', img: '/insightpage/brsr.png', title: 'THE NEW ANATOMY OF CORPORATE FRAUD', text: 'Moving Beyond the Balance Sheet in 2026. The nature of corporate malfeasance has evolved from rudimentary embezzlement to highly sophisticated, cross-border orchestration.', readTime: '5 min' },
    { id: 4, link: '/new-insights/climate-risk-as-material-risk', category: 'forensic', categoryName: 'Forensic', tagClass: 'bg-red-50 text-red-600', date: 'Mar 2026', img: '/insightpage/climaterisk.jpg', title: 'CLIMATE RISK AS MATERIAL RISK', text: 'A forensic approach to integrating extreme weather volatility into enterprise valuation models for 2026.', readTime: '6 min' },
    { id: 5, link: '/new-insights/fcra', category: 'taxation', categoryName: 'Taxation', tagClass: 'bg-green-50 text-green-600', date: 'Apr 2026', img: '/insightpage/fcra.jpg', title: 'THE FORENSICS OF FCRA COMPLIANCE', text: 'Navigating the 2026 Regulatory Tightening for Cross-Border Philanthropic Capital. Non-compliance is no longer a civil penalty—it is an existential operational risk.', readTime: '6 min' },
    { id: 6, link: '/new-insights/from-isae-3000', category: 'taxation', categoryName: 'Taxation', tagClass: 'bg-green-50 text-green-600', date: 'Mar 2026', img: '/insightpage/isae3000.png', title: 'FROM ISAE 3000 TO REASONABLE ASSURANCE', text: 'The Evolution of ESG Auditing and What It Means for the Indian Boardroom in 2026. The grace period for narrative-driven sustainability reporting has expired.', readTime: '5 min' },
    { id: 7, link: '/new-insights/hearing-all-voices', category: 'transaction', categoryName: 'Transaction', tagClass: 'bg-purple-50 text-purple-600', date: 'Apr 2026', img: '/insightpage/hereallvoice.png', title: 'HEARING ALL VOICES: STAKEHOLDER MATERIALITY', text: 'Strategic Engagement and Forensic-Grade Materiality in 2026. The shift from surface-level compliance to strategic clarity marks a new era for Indian infrastructure.', readTime: '6 min' },
    { id: 8, link: '/new-insights/modernising-the-grant-lifecycle', category: 'transaction', categoryName: 'Transaction', tagClass: 'bg-purple-50 text-purple-600', date: 'Mar 2026', img: '/insightpage/modern.jpeg', title: 'MODERNISING THE GRANT LIFECYCLE', text: 'Digital Governance and Auditable Transparency in CSR and Philanthropic Deployment in 2026. Legacy processes in a tightening regulatory era.', readTime: '5 min' },
    { id: 9, link: '/new-insights/quantifying-the-intangible', category: 'reporting', categoryName: 'Reporting', tagClass: 'bg-teal-50 text-teal-600', date: 'Apr 2026', img: '/insightpage/quantifying.png', title: 'QUANTIFYING THE INTANGIBLE', text: 'Predictive Modeling and the Future of ESG Materiality Assessment. An Analysis of the Shift from Reactive Reporting to Forensic Forward-Looking Mandates.', readTime: '6 min' },
    { id: 10, link: '/new-insights/beyond-the-narrative', category: 'reporting', categoryName: 'Reporting', tagClass: 'bg-teal-50 text-teal-600', date: 'Feb 2026', img: '/insightpage/beyond.png', title: 'BEYOND THE NARRATIVE', text: 'Dissecting the architecture of modern accountability through forensic SROI and strategic audit frameworks. The era of anecdotal CSR reporting is over.', readTime: '5 min' },
  ];

 

  return (
    <section className="py-10 bg-white" id="insights">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-10 sr">
     


          <Link to="/contact" className="text-[12px] font-bold text-[#1A2B45] flex items-center gap-2 hover:text-[#C5963A] transition-colors pb-2 border-b-2 border-transparent hover:border-[#C5963A] mb-2 uppercase tracking-widest">
            All Insights
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <InsightCard key={insight.id} data={insight} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insightsv3;