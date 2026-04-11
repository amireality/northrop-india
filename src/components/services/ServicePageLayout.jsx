
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
} from 'lucide-react';
import FinancialReportingBanner from './FinancialReportingBanner';
import FinancialReportingClosing from './FinancialReportingClosing';

const ServicePageLayout = ({
  metaTitle,
  metaDescription,
  breadcrumbs,
  bannerTitle,
  bannerDescription,
  primaryBtnText,
  secondaryBtnText,
  svcNum,
  svcTag,
  svcH2,
  hookText,
  painLabel,
  painList,
  delLabel = "What Northrop delivers",
  delGrid,
  outcomes,
  whoLabel = "Who this is for",
  whoGrid,
  ctaPrimaryText,
  ctaSecondaryText,
  trustNote,
  closingTitle,
  closingDescription
}) => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* HERO SECTION */}
      <FinancialReportingBanner
        breadcrumbs={breadcrumbs}
        title={bannerTitle}
        description={bannerDescription}
        primaryBtnText={primaryBtnText}
        secondaryBtnText={secondaryBtnText}
      />

      {/* MAIN CONTENT AREA */}
      <div className="mx-auto py-[20px] px-[6vw]">

        {/* SERVICE HEADER */}
        <div className="flex items-center gap-[14px] mb-[20px]">
          <span className="font-serif text-[13.6px] font-semibold text-slate-400">{svcNum}</span>
          <span className="text-[10.7px] font-bold tracking-[0.18em] uppercase text-blue-600 bg-blue-50 px-3 py-1">{svcTag}</span>
        </div>

        <h2 className="font-serif text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.1] text-[#111a22] max-w-[760px] mb-[22px]">
          {svcH2}
        </h2>

        <p className="font-serif text-[19.2px] italic font-medium text-slate-700 leading-[1.65] max-w-[660px] mb-[48px] pl-5 border-l-[3px] border-blue-600">
          {hookText}
        </p>

        {/* PAIN BLOCK */}
        <div className="mb-[52px] max-w-[820px] border border-red-900/15 border-l-4 border-l-red-600 bg-red-50/50 p-[26px_30px]">
          <div className="text-[10.7px] font-bold tracking-[0.16em] uppercase text-red-600 mb-[16px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full inline-block"></span>
            {painLabel}
          </div>
          <ul className="list-none m-0 p-0">
            {painList.map((item, idx) => (
              <li key={idx} className="grid grid-cols-[26px_1fr] py-3 border-b last:border-b-0 border-red-900/10 text-[14.7px] text-slate-800 leading-[1.65]">
                <span className="text-red-600 font-bold mt-0.5">→</span>
                <span><strong className="font-bold">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DELIVERABLES */}
        <div className="flex items-center gap-[10px] mb-[30px]">
          <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#111a22]">{delLabel}</div>
          <div className="flex-1 max-w-[120px] h-[1px] bg-blue-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1000px] mb-[44px] border border-slate-200">
          {delGrid.map((card, idx) => (
            <div key={idx} className="p-[40px_30px] bg-white border-r border-b border-slate-200 relative border-l-[3px] border-l-blue-600">
              <h4 className="text-[16px] font-bold text-[#111a22] mb-[15px] leading-tight font-serif">{card.title}</h4>
              <p className="text-[14.5px] text-slate-500 leading-relaxed font-light">{card.desc}</p>
            </div>
          ))}
          {/* Fill empty spots for 3-column grid consistency */}
          {delGrid.length % 3 !== 0 && Array(3 - (delGrid.length % 3)).fill(0).map((_, i) => (
             <div key={`empty-del-${i}`} className="bg-[#dbd9d0] border-b border-slate-200 hidden md:block"></div>
          ))}
        </div>

        {/* OUTCOMES */}
        <div className="flex flex-wrap gap-[9px] mb-[40px] max-w-[820px]">
          {outcomes.map((outcome, idx) => (
            <span key={idx} className="text-[11.2px] font-semibold tracking-wide text-blue-700 bg-blue-50 border border-blue-100 px-[15px] py-[7px] flex items-center gap-1.5">
              <CheckCircle size={12} className="text-blue-600" /> {outcome}
            </span>
          ))}
        </div>

        {/* WHO THIS IS FOR */}
        <div className="flex items-center gap-[10px] mb-[30px]">
          <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#111a22]">{whoLabel}</div>
          <div className="flex-1 max-w-[120px] h-[1px] bg-blue-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1000px] mb-[80px] border border-slate-200">
          {whoGrid.map((card, idx) => (
            <div key={idx} className="p-[40px_30px] bg-white border-r border-b border-slate-200 relative border-l-[3px] border-l-[#111a22]">
              <h4 className="text-[16px] font-bold text-[#111a22] mb-[15px] leading-tight">{card.title}</h4>
              <p className="text-[14.5px] text-slate-500 leading-relaxed font-light">{card.desc}</p>
            </div>
          ))}
          {whoGrid.length % 3 !== 0 && Array(3 - (whoGrid.length % 3)).fill(0).map((_, i) => (
             <div key={`empty-who-${i}`} className="bg-[#dbd9d0] border-b border-slate-200 hidden md:block"></div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-5 mb-5">
          <button className="bg-[#111a22] hover:bg-blue-700 text-white text-[11.7px] font-bold tracking-[0.1em] uppercase px-7 py-[13px] transition-all">
            {ctaPrimaryText}
          </button>
          <button className="border-[1.5px] border-slate-200 text-[#111a22] hover:border-blue-600 hover:text-blue-600 text-[11.7px] font-semibold tracking-[0.07em] uppercase px-[22px] py-[12px] transition-all">
            {ctaSecondaryText}
          </button>
        </div>
        <p className="mt-[18px] text-[12.6px] italic text-slate-500 leading-relaxed max-w-[560px] pl-[14px] border-l-2 border-slate-200">
          {trustNote}
        </p>

      </div>

      {/* CLOSING / CONTACT */}
      <FinancialReportingClosing
        title={closingTitle}
        description={closingDescription}
      />

      <footer className="py-[30px] px-[6vw] border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-white">
        <div className="text-[11.7px] font-bold tracking-[0.1em] uppercase text-[#111a22]">Northrop Management Private Limited</div>
        <div className="text-[11.7px] text-slate-400">CIN: U70200DC2026PTC469133 · Connaught Place, New Delhi · © 2026</div>
      </footer>

    </div>
  );
};

export default ServicePageLayout;
