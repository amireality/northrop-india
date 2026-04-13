import React from 'react';

const FinancialReportingClosing = ({ 
  title, 
  description, 
  email = "business@northropindia.com", 
  phone = "+91 93155 18112",
  primaryBtnText,
  secondaryBtnText,
  primaryBtnLink = "mailto:business@northropindia.com",
  secondaryBtnLink = "tel:+919315518112"
}) => {
  return (
    <section className="bg-[#111a22] py-[30px] px-[4vw] text-center" id="contact">
      <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#c8902a] mb-[18px] block">Begin the Conversation</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] font-bold text-white max-w-[800px] mx-auto mb-[18px] leading-[1.15]">
        {title}
      </h2>
      <p className="text-[14.8px] text-white/50 max-w-[500px] mx-auto mb-[44px] leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-[14px] justify-center">
        <a 
          href={primaryBtnLink || `mailto:${email}`} 
          className="bg-[#c8902a] hover:bg-[#efc266] text-[#ffff] text-[11.7px] font-bold tracking-[0.1em] uppercase px-[34px] py-[14px] transition-all"
        >
          {primaryBtnText || email}
        </a>
        <a 
          href={secondaryBtnLink || `tel:${phone.replace(/\s/g, '')}`} 
          className="border-[1.5px] border-white/20 text-white/70 hover:border-[#c8902a] hover:text-[#c8902a] text-[11.7px] font-semibold tracking-[0.07em] uppercase px-[28px] py-[13px] transition-all"
        >
          {secondaryBtnText || phone}
        </a>
      </div>
    </section>
  );
};

export default FinancialReportingClosing;
