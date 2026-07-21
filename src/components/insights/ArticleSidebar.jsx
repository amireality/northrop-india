import React from 'react';
import { Link } from 'react-router-dom';

const ArticleSidebar = () => {
  const suggestedArticles = [
    {
      title: "India's Next Capital Cycle: Emerging Structural Shifts",
      category: "Market Deep-Dive",
      tagClass: "bg-[#001F3F] text-white",
      link: "/insights/indias-next-capital-cycle",
      readTime: "18 min"
    },
    {
      title: "ESG AS ALPHA: The Decoupling of ESG Sentiment",
      category: "Due Diligence",
      tagClass: "bg-blue-50 text-blue-600",
      link: "/new-insights/esg-as-alpha",
      readTime: "5 min"
    },
    {
      title: "BRSR Core Assurance Is Now Mandatory",
      category: "Reporting",
      tagClass: "bg-teal-50 text-teal-600",
      link: "/insights/brsr-core-assurance",
      readTime: "5 min"
    }
  ];

  return (
    <div className="w-full">
      <div className="sticky top-28">
        <h3 className="font-serif text-[22px] font-bold text-[#1A2B45] mb-6 border-b border-gray-200 pb-4">
          Suggested Reading
        </h3>
        <div className="flex flex-col gap-6">
          {suggestedArticles.map((article, idx) => (
            <Link 
              key={idx} 
              to={article.link}
              className="group block border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider shadow-sm ${article.tagClass}`}>
                  {article.category}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                  {article.readTime}
                </span>
              </div>
              <h4 className="font-serif text-[15px] font-bold text-[#1A2B45] leading-[1.4] group-hover:text-[#C5963A] transition-colors">
                {article.title}
              </h4>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[#C5963A] uppercase tracking-widest">
                Read Article
                <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 group-hover:translate-x-1 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-[#001F3F] rounded-xl text-white">
          <h4 className="font-serif text-[18px] font-bold mb-3">Connect With Our Experts</h4>
          <p className="text-[13px] text-white/80 mb-5 leading-relaxed">
            Discuss these findings with our specialized advisory team to understand the direct implications for your business.
          </p>
          <Link 
            to="/contact"
            className="block w-full text-center py-3 bg-[#C5963A] hover:bg-[#A37B2E] transition-colors text-[11px] font-bold uppercase tracking-widest text-white rounded"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
