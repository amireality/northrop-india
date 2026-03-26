import React, { useEffect, useRef } from 'react';

const insightsData = [
  {
    id:1,
    tag: "Private Equity · Forthcoming",
    title: "How Private Equity Actually Makes Money",
    desc: "A ground-level examination of how PE firms generate returns — separating the mechanics of leverage, operational value creation, and multiple expansion from the mythology.",
    footertag:"Northrop Institute of Global Finance"
  },
  {
    id:2,
    tag: "Capital Strategy · Forthcoming",
    title: "Why Most Startups Misallocate Capital",
    desc: "The patterns behind capital misallocation in early-stage businesses — and the frameworks that distinguish founders who scale from those who stall.",
    footertag:"Northrop Management"
  },
  {
    id:3,
    tag: "Hedge Funds · Forthcoming",
    title: "The Real Economics of Hedge Funds",
    desc: "Beyond the 2-and-20 headline — an honest look at fund economics, manager incentives, and what institutional investors actually experience over a full cycle.",
    footertag:"Northrop Institute of Global Finance"
  },
  {
    id:4,
    tag: "India Markets · Forthcoming",
    title: "India's Next Capital Cycle",
    desc: "Where capital is flowing in India over the next decade — and what it means for investors, founders, and financial professionals positioning themselves for the cycle ahead.",
    footertag:"Northrop Management"
  },
  {
    id:5,
    tag: "Credit Markets · Forthcoming",
    title: "How Credit Actually Gets Priced",
    desc: "The gap between textbook credit theory and how lenders, credit committees, and rating analysts actually assess and price risk in real transactions.",
    footertag:"Northrop Institute of Global Finance"
  },
  {
    id:6,
    // tag: "",
    title: "Research In Progress",
    desc: "Further papers, reports, and market perspectives from the Northrop team will be published here as they are completed. This section is updated on an ongoing basis.",
    // footertag:"Northrop Institute of Global Finance"
  }
];

export default function Insights() {
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
    <section id="insights" className="bg-[#FAF8F3] py-10 lg:py-20 border-t border-[#0E0E0E]/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-16 pb-12 border-b border-[#0E0E0E]/10">
          <div>
            <div ref={addToRefs} className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] uppercase text-[#C4973B] mb-6 opacity-0 translate-y-10 transition-all duration-700">
              <span className="w-7 h-px bg-[#C4973B]"></span> Northrop Global Finance Insights
            </div>
            <h2 ref={addToRefs} className="font-serif text-[32px] lg:text-[46px] leading-[1.1] text-[#0E0E0E] tracking-tight opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Research &<br /><em className="text-[#C4973B] italic">Perspectives.</em>
            </h2>
          </div>
          <p ref={addToRefs} className="text-[14px]  md:text-[16px] font-light leading-relaxed text-[#5A5550] opacity-0 translate-y-10 transition-all duration-700 delay-200">
            Perspectives on capital, markets, and strategy from the Northrop advisory team and the Institute of Global Finance. Forthcoming publications — updated as research is completed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-[#0E0E0E]/5">
          {insightsData.map((item, i) => (
            <div 
              key={item.title} 
              ref={addToRefs}
              className={`bg-white p-10 border-t-2 border-transparent hover:border-[#C4973B] transition-all duration-500 opacity-0 translate-y-10 delay-${(i + 1) * 100}`}
            >
              <div className="text-[9.5px] font-medium tracking-widest uppercase text-[#C4973B] mb-5">{item.tag}</div>
              <h3 className="font-serif text-[18px] text-[#0E0E0E] mb-4 leading-tight">{item.title}</h3>
              <p className="text-[13px] font-light leading-relaxed text-[#6A6560] mb-8">{item.desc}</p>
              <div className="pt-5 border-t border-[#0E0E0E]/5 text-[10px] uppercase font-light text-black/30 tracking-widest">
                {item.footertag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
