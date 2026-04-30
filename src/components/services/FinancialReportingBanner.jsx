import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinancialReportingBanner = ({ 
  breadcrumbs = [], 
  title, 
  description, 
  primaryBtnText = "Get Started", 
  secondaryBtnText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  bgImage = "/contactusimg.avif"
}) => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#0a0f14] text-white flex items-center pt-24 pb-16 px-6 md:px-20 overflow-hidden min-h-[60vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      {/* Background Accents (Kept for depth) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-600/10 to-teal-500/5 blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 mx-auto w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[11px] text-[#C4973B] mb-8 uppercase tracking-[0.2em] font-bold">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.link ? (
                <a href={crumb.link} className="hover:text-white transition-colors duration-300">{crumb.name}</a>
              ) : (
                <span className="text-white">{crumb.name}</span>
              )}
              {index < breadcrumbs.length - 1 && <ChevronRight size={12} className="opacity-40 text-white" />}
            </React.Fragment>
          ))}
        </nav>

        <h1 className="text-[42px] md:text-[64px] font-bold mb-6 tracking-tight leading-[1.05] max-w-4xl">
          {title}
        </h1>
        <p className="text-[16px] md:text-[19px] font-light text-slate-200 leading-relaxed max-w-2xl mb-12 opacity-90">
          {description}
        </p>

        <div className="flex flex-wrap gap-5">
          <button 
            onClick={onPrimaryClick || (() => navigate('/contact'))}
            className="bg-[#C4973B] text-white px-10 py-4 rounded-sm font-bold tracking-widest transition-all shadow-2xl hover:shadow-blue-500/20 flex items-center gap-2 text-[12px] uppercase cursor-pointer"
          >
            {primaryBtnText}
            <ArrowRight size={16} />
          </button>
          <button 
            onClick={onSecondaryClick}
            className="bg-white/5 hover:bg-white/10 border border-white/20 text-white px-10 py-4 rounded-sm font-bold tracking-widest transition-all backdrop-blur-md text-[12px] uppercase"
          >
            {secondaryBtnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinancialReportingBanner;
