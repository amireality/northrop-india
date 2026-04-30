import React, { useEffect, useRef } from 'react';

export default function Foundation() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
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
    <section id="csr" className="relative overflow-hidden bg-[#0E0E0E] py-20 lg:py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.15] saturate-[0.5]" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=85')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/97 via-[#0E0E0E]/90 to-[#0E0E0E]/60"></div>
      
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="text-white">
          <div ref={addToRefs} className="flex items-center gap-3 text-[20px] font-medium tracking-[0.24em] uppercase text-[#C4973B] mb-6 opacity-0 translate-y-10 transition-all duration-700">
            <span className="w-7 h-px bg-[#C4973B]"></span> Northrop Foundation
          </div>
          <h2 ref={addToRefs} className="font-serif text-[32px] lg:text-[46px] leading-[1.1] text-white tracking-tight mb-4 opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Committed to the<br /><em className="text-[#C4973B] italic">Good of Society.</em>
          </h2>
          <p ref={addToRefs} className="font-serif text-[14px] italic text-[#C4973B] mb-8 opacity-0 translate-y-10 transition-all duration-700 delay-200">
            A part of what we make, we give back.
          </p>
          <div ref={addToRefs} className="text-[15px] font-light leading-relaxed text-white space-y-6 mb-12 opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <p>The Northrop Foundation is our commitment to contributing beyond commercial purpose — a structured giving initiative funded directly from the firm's revenues, directed to causes we have personally verified.</p>
            <p>We are not a charity. We are a firm that has chosen to build social responsibility into the architecture of how we operate.</p>
          </div>

          <div className="space-y-6 border-t border-white/10 pt-10">
            <div ref={addToRefs} className="flex gap-5 items-start opacity-0 translate-y-10 transition-all duration-700 delay-400">
              <span className="text-xl">🎓</span>
              <div>
                <div className="font-serif text-[16px] text-white mb-2">Education & Opportunity</div>
                <div className="text-[13px] font-light text-white leading-relaxed">Supporting access to quality education and financial literacy for young Indians from underserved communities.</div>
              </div>
            </div>
            <div ref={addToRefs} className="flex gap-5 items-start opacity-0 translate-y-10 transition-all duration-700 delay-500">
              <span className="text-xl">🤝</span>
              <div>
                <div className="font-serif text-[16px] text-white mb-2">Child Welfare & Rehabilitation</div>
                <div className="text-[13px] font-light text-white leading-relaxed">Partnering with foundations and NGOs focused on the welfare and development of children in need.</div>
              </div>
            </div>
            <div ref={addToRefs} className="flex gap-5 items-start opacity-0 translate-y-10 transition-all duration-700 delay-600">
              <span className="text-xl">🌱</span>
              <div>
                <div className="font-serif text-[16px] text-white mb-2">Livelihood & Economic Inclusion</div>
                <div className="text-[13px] font-light text-white leading-relaxed">Helping families build sustainable livelihoods through mentorship and small business support.</div>
              </div>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 delay-700">
          <div className="bg-white/5 border border-[#C4973B]/20 backdrop-blur-xl p-10 lg:p-12">
            <div className="text-[12px] font-medium tracking-[0.2em] uppercase text-[#C4973B] mb-6">The Northrop Pledge</div>
            <h3 className="font-serif text-[28px] text-white mb-6 leading-none italic">A Part of <br />  Every Mandate  <br />  <span className="text-[#C4973B]">Goes Further.</span></h3>
            <p className="text-[14px] font-light leading-relaxed text-white mb-5">
            A portion of every engagement fee is directed to the Northrop Foundation. Not as an afterthought — as a structural commitment built into how we operate.


            </p>
            <p className="text-[14px] font-light leading-relaxed text-white mb-5">
            We work with partners including the Hridya Saras Foundation and others committed to child welfare, rehabilitation, and community development across India.
            </p>
            <p className="text-[14px] font-light leading-relaxed text-white mb-5">
            If you are a charitable institution, NGO, or foundation seeking a serious advisory partner — we welcome that conversation.
            </p>

           


            <div className="flex flex-wrap gap-2 text-[10px] uppercase font-light text-[#C4973B] tracking-widest">
              <span className="border border-white/10 px-3 py-1.5 hover:bg-[#C4973B]/20 transition-all">Child Welfare</span>
              <span className="border border-white/10 px-3 py-1.5 hover:bg-[#C4973B]/20 transition-all">Education</span>
              <span className="border border-white/10 px-3 py-1.5 hover:bg-[#C4973B]/20 transition-all">Livelihood</span>
              <span className="border border-white/10 px-3 py-1.5 hover:bg-[#C4973B]/20 transition-all">Community Development</span>
              <span className="border border-white/10 px-3 py-1.5 hover:bg-[#C4973B]/20 transition-all">Financial Literacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
