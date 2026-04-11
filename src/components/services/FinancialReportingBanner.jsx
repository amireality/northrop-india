import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const FinancialReportingBanner = ({ 
  breadcrumbs = [], 
  title, 
  description, 
  primaryBtnText = "Get Started", 
  secondaryBtnText = "Learn More",
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <section className="relative bg-[#111a22] text-white flex items-center pt-14 pb-10 px-6 md:px-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-600/20 to-teal-500/10 blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-slate-700/40 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 mx-auto w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[12px] text-slate-400 mb-8 uppercase tracking-widest font-medium">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.link ? (
                <a href={crumb.link} className="hover:text-blue-400 transition-colors duration-300">{crumb.name}</a>
              ) : (
                <span className="text-slate-200">{crumb.name}</span>
              )}
              {index < breadcrumbs.length - 1 && <ChevronRight size={12} className="opacity-50" />}
            </React.Fragment>
          ))}
        </nav>

        <h1 className="text-[40px] md:text-[68px] font-bold mb-6 tracking-tight leading-[1.1]">
          {title}
        </h1>
        <p className="text-[18px] md:text-[22px] font-light text-slate-300 leading-relaxed max-w-3xl mb-10">
          {description}
        </p>

        <div className="flex flex-wrap gap-5">
          <button 
            onClick={onPrimaryClick}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all shadow-xl hover:shadow-blue-500/25 flex items-center gap-2 text-[14px] uppercase"
          >
            {primaryBtnText}
          </button>
          <button 
            onClick={onSecondaryClick}
            className="bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all backdrop-blur-sm text-[14px] uppercase"
          >
            {secondaryBtnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinancialReportingBanner;
