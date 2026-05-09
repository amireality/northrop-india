import React, { useEffect, useRef, useState } from 'react';

const StatItemV3 = ({ target, label, isFirst }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const end = parseInt(target);
        const duration = 1800;
        const startTime = performance.now();

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentCount = Math.round(easeOut * end);
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className={`p-8 border-r border-white/10 last:border-r-0 text-center flex flex-col items-center justify-center ${isFirst ? 'bg-white/5' : ''}`} ref={elementRef}>
      <div className="font-serif text-[32px] md:text-[40px] font-bold text-white leading-none mb-2">
        {count}<sup className="text-[#C5963A] ml-0.5">+</sup>
      </div>
      <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
        {label}
      </div>
    </div>
  );
};

const HomeStatsV3 = () => {
  const stats = [
    { target: "100", label: "Audits Completed", first: true },
    { target: "200", label: "SRA Audits" },
    { target: "15", label: "Forensic Mandates" },
    { target: "5", label: "NGO Partners" },
    { target: "10", label: "Impact Assets" },
    { target: "5", label: "Diligence" },
    { target: "16", label: "Sectors" }
  ];

  return (
    <div className="bg-[#0F1B2E] border-y border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {stats.map((stat, i) => (
            <StatItemV3 key={i} target={stat.target} label={stat.label} isFirst={stat.first} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStatsV3;
