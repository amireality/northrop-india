import React, { useEffect, useRef } from 'react';

export default function ContactSection() {
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
    <section id="contact" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#141414]">
      {/* Left side: Image & Quote */}
      <div className="hidden lg:block relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.35] saturate-[0.5]" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141414]"></div>
        <div className="absolute bottom-20 left-20 right-20">
          <blockquote className="font-serif text-[24px] lg:text-[28px] italic text-white/65 leading-relaxed mb-8 max-w-[460px]">
            "We don't sell services. We build advisory relationships — grounded in trust, delivered through expertise."
          </blockquote>
          <cite className="flex items-center gap-4 text-[10px] font-medium tracking-widest uppercase text-[#C4973B] not-italic">
            <span className="w-8 h-px bg-[#C4973B]"></span> Ashish Chaudhary, Managing Director
          </cite>
        </div>
      </div>

      {/* Right side: Contact Info & CTA */}
      <div className="flex flex-col justify-center px-6 py-24 lg:px-20 relative">
        <div ref={addToRefs} className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] uppercase text-[#C4973B]/80 mb-6 opacity-0 translate-y-10 transition-all duration-700">
          <span className="w-7 h-px bg-[#C4973B]"></span> Let's Begin
        </div>
        <h2 ref={addToRefs} className="font-serif text-[32px] lg:text-[46px] leading-[1.1] text-white tracking-tight mb-8 opacity-0 translate-y-10 transition-all duration-700 delay-100">
          The right engagement<br />starts with one<br /><em className="text-[#D9AF58] italic">trusted conversation.</em>
        </h2>
        <p ref={addToRefs} className="text-[14px] font-light leading-relaxed text-white/35 max-w-[450px] mb-12 opacity-0 translate-y-10 transition-all duration-700 delay-200">
          Our team of CA, CFA, IIT, and MBA professionals does not pitch before understanding your situation. Every Northrop engagement begins with a direct, confidential conversation.
        </p>

        <div className="space-y-2 mb-16 max-w-[500px]">
          {[
            { label: "Email", value: "Business@NorthropIndia.com", href: "mailto:Business@NorthropIndia.com" },
            { label: "Phone", value: "+91 93155 18112", href: "tel:+919315518112" },
            { label: "Office", value: "Connaught Place, New Delhi — 110001" }
          ].map((item, i) => (
            <div 
              key={item.label}
              ref={addToRefs}
              className={`flex py-6 border-b border-white/10 opacity-0 translate-y-10 transition-all duration-700 delay-${300 + i * 100}`}
            >
              <div className="text-[9.5px] font-medium tracking-widest uppercase text-[#C4973B] w-24 shrink-0">{item.label}</div>
              <div className="text-[15px] font-light text-white/65 leading-tight">
                {item.href ? <a href={item.href} className="hover:text-[#D9AF58] transition-all">{item.value}</a> : item.value}
              </div>
            </div>
          ))}
        </div>

        <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 delay-600">
          <a href="mailto:Business@NorthropIndia.com" className="bg-[#C4973B] text-[#0E0E0E] text-[10.5px] font-medium tracking-[0.14em] uppercase px-10 py-5 transition-all hover:bg-[#D9AF58] hover:-translate-y-0.5 inline-block">
            Book a Discovery Call →
          </a>
        </div>

        <div className="lg:absolute bottom-8 left-20 right-20 flex flex-col lg:flex-row justify-between pt-10 border-t border-white/5 mt-20 lg:mt-0">
          <span className="text-white/20 text-[10px] uppercase tracking-widest">© 2026 Northrop Management Private Limited.</span>
          <span className="text-white/20 text-[10px] uppercase tracking-widest">CIN: U70200DC2026PTC469133</span>
        </div>
      </div>
    </section>
  );
}
