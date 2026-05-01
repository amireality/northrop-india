import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
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
  bannerImage,
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
  const navigate = useNavigate();

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

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
        bgImage={bannerImage}
      />

      {/* MAIN CONTENT AREA */}
      <div className="mx-auto py-[20px] px-[6vw]">

        {/* SERVICE HEADER */}
        <div className="flex items-center gap-[14px] mb-[20px]">
          <span className=" text-[13.6px] font-semibold text-[#000000]">{svcNum}</span>
          <span className="text-[10.7px] font-bold tracking-[0.18em] uppercase text-[#ffff] bg-[#C4973B] px-3 py-1">{svcTag}</span>
        </div>

        <h2 className=" text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.1] text-[#111a22] max-w-[760px] mb-[22px]">
          {svcH2}
        </h2>

        <p className=" text-[17.2px] italic font-medium text-slate-700 leading-[1.65] max-w-[660px] mb-[48px] pl-5 border-l-[3px] border-blue-600">
          {hookText}
        </p>

        {/* PAIN BLOCK */}
        <div className="mb-[60px] max-w-[1240px]">
          <div className="flex items-center gap-[10px] mb-[30px]">
            <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#c4973b] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c4973b] rounded-full inline-block"></span>
              {painLabel}
            </div>
            <div className="flex-1 max-w-[120px] h-[1px] bg-[#c4973b]"></div>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {painList.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.04, y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                className="p-[30px] bg-white shadow-md border border-slate-100 relative border-l-[3px] border-l-[#c4973b] flex flex-col h-full cursor-default"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                <h4 className="text-[16px] font-bold text-[#111a22] mb-[12px] leading-tight flex gap-2 underline">
                  {item.label}
                </h4>
                <p className="text-[14.5px] text-[#111111] leading-relaxed font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* DELIVERABLES */}
        <div className="flex items-center gap-[10px] mb-[30px]">
          <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#111a22]">{delLabel}</div>
          <div className="flex-1 max-w-[120px] h-[1px] bg-blue-100"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mb-[44px]"
        >
          {delGrid.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              className="p-[40px_30px] bg-white shadow-md border border-slate-100 relative border-l-[3px] border-l-blue-600 flex flex-col h-full cursor-default"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <h4 className="text-[16px] font-bold text-[#111a22] mb-[15px] leading-tight underline">{card.title}</h4>
              <p className="text-[14.5px] text-[#111111] leading-relaxed font-medium">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* OUTCOMES */}
       {/* OUTCOMES */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-[40px] max-w-[820px]">
  {outcomes.map((outcome, idx) => {
    const colors = [
      { bg: "bg-[#C4973B]", hover: "hover:bg-[#C4973B]", shadow: "shadow-[#C4973B]" },
      { bg: "bg-[#001f3f]", hover: "hover:bg-[#001f3f]", shadow: "shadow-[#001f3f]" },
      { bg: "bg-[#C4973B]", hover: "hover:bg-[#C4973B]", shadow: "shadow-[#C4973B]" },
      { bg: "bg-[#001f3f]", hover: "hover:bg-[#001f3f]", shadow: "shadow-[#001f3f]" },
      { bg: "bg-[#C4973B]", hover: "hover:bg-[#C4973B]", shadow: "shadow-[#C4973B]" },
      { bg: "bg-[#001f3f]", hover: "hover:bg-[#001f3f]", shadow: "shadow-[#001f3f]" },
    ];
    const c = colors[idx % colors.length];

    return (
      <div
        key={idx}
        className={`${c.bg} ${c.hover} ${c.shadow} text-white rounded-2xl px-6 py-5 flex items-start gap-3 cursor-pointer shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
      >
        <div className="bg-white/20 rounded-full p-1.5 mt-0.5 shrink-0">
          <CheckCircle size={18} className="text-white" />
        </div>
        <span className="text-[14px] font-bold leading-snug tracking-wide">
          {outcome}
        </span>
      </div>
    );
  })}
</div>

        {/* WHO THIS IS FOR */}
        <div className="flex items-center gap-[10px] mb-[30px]">
          <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#111a22]">{whoLabel}</div>
          <div className="flex-1 max-w-[120px] h-[1px] bg-blue-100"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mb-[80px]"
        >
          {whoGrid.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              className="p-[40px_30px] bg-white shadow-md border border-slate-100 relative border-l-[3px] border-l-[#111a22] flex flex-col h-full cursor-default"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <h4 className="text-[16px] font-bold text-[#111a22] mb-[15px] leading-tight underline">{card.title}</h4>
              <p className="text-[14.5px] text-[#111111] leading-relaxed font-medium">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>



        

        {/* CTA */}
        <div className="flex flex-col items-center mt-10 mb-8">
          <div className="flex flex-wrap justify-center gap-5 mb-5">
            <button onClick={() => navigate('/contact')} className="bg-[#C4973B]  text-white text-[11.7px] font-bold tracking-[0.1em] uppercase px-7 py-[13px] transition-all">
              {ctaPrimaryText}
            </button>
            <button onClick={() => navigate('/contact')} className="border-[1.5px] border-slate-200 text-[#111a22] hover:border-blue-600 hover:text-blue-600 text-[11.7px] font-semibold tracking-[0.07em] uppercase px-[22px] py-[12px] transition-all">
              {ctaSecondaryText}
            </button>
          </div>
          <p className="mt-[18px] text-[12.6px] italic text-slate-500 leading-relaxed max-w-[560px] pl-[14px] border-l-2 border-slate-200 text-left">
            {trustNote}
          </p>
        </div>

      </div>

      {/* CLOSING / CONTACT */}
      <FinancialReportingClosing
        title={closingTitle}
        description={closingDescription}
      />


    </div>
  );
};

export default ServicePageLayout;
