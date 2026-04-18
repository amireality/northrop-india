

import  { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    name: "Strategy & Business Advisory",
    desc: "Growth architecture, market positioning, and 90-day execution roadmaps — grounded in real variance analysis and multi-sector due diligence experience across ₹10–100 Cr businesses."
  },
  {
    name: "Financial Due Diligence",
    desc: "Investor-grade FDD covering cash flow assessment, accounting discrepancy identification, and deal-ready financials. Conducted across 5+ sectors with turnovers up to ₹2,200 Cr."
  },
  {
    name: "Forensic Accounting",
    desc: "Forensic audits commissioned by public sector banks — fund diversion, shell entities, over-invoicing, circular transactions. 8+ clients including listed companies. Reports filed to regulatory committees."
  },
  {
    name: "IBC / NCLT Advisory",
    desc: "End-to-end IBC mandate management — Information Memorandums, CoC approvals, competitive bidding, and NCLT submissions across manufacturing, real estate, and services sectors."
  },
  {
    name: "M&A Transaction Advisory",
    desc: "Buy-side and sell-side advisory — valuation, deal structuring, and full transaction support. Direct experience as Transaction Auditor across hospitality, real estate, and industrial sectors."
  },
  {
    name: "Credit Analytics & Risk Surveillance",
    desc: "Quarterly credit analytics for listed and unlisted borrowers — ₹500–1,200 Cr loan exposure, balance sheets up to ₹60,000 Cr. 70–100-point monitoring framework. Early stress identification."
  }
];

export default function Services() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section id="services" className="bg-[#0E0E0E] py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-16 pb-12 border-b border-white/10">
          <div>
            <div ref={addToRefs} className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] uppercase text-[#C4973B]/90 mb-6 opacity-0 translate-y-10 transition-all duration-700">
              <span className="w-7 h-px bg-[#C4973B]"></span> What We Do
            </div>
            <h2 ref={addToRefs} className="font-serif text-[32px] lg:text-[46px] leading-[1.1] text-white tracking-tight opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Advisory Across<br />Every <em className="text-[#C4973B] italic">Critical Domain.</em>
            </h2>
          </div>
          <p ref={addToRefs} className="text-[14px] font-light leading-relaxed text-white opacity-0 translate-y-10 transition-all duration-700 delay-200">
            Twelve service verticals. One senior relationship. Backed by practitioners with real mandates — rigour and precision at every level of complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <div 
              key={svc.name} 
              ref={addToRefs}
              className={`p-10 border-b border-r border-white/5 last:border-r-0 md:nth-child(2n):border-r-0 lg:nth-child(3n):border-r-0 group hover:bg-white/5 transition-all duration-700 opacity-0 translate-y-10 delay-${(i % 3 + 1) * 100}`}
            >
              <div className="w-6 h-px bg-[#C4973B] mb-6 group-hover:w-12 transition-all duration-500"></div>
              <h3 className="font-serif text-[17px] text-[#C4973B] mb-3 underline">{svc.name}</h3>
              <p className="text-[12.5px] font-light leading-relaxed text-white">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div ref={addToRefs} className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 opacity-0 translate-y-10 transition-all duration-700 delay-500">
          <p className="text-[13px] font-light text-[#C4973B] max-w-[540px]">
            Also covering: <strong className="text-white font-normal">Tax · Risk & Compliance · Digital & AI · HR Advisory · Operations Excellence · Government Advisory · Managed Services</strong>
          </p>
          <Link to="/contact" className="flex items-center gap-3 text-[11px] font-medium tracking-widest uppercase text-[#C4973B] group transition-all">
            Discuss a Mandate <span className="text-lg group-hover:ml-4 transition-all">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
