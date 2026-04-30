import React, { useEffect, useRef } from 'react';

export default function About() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

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

  const Pillar = ({ num, name, text, delay }) => (
    <div
      ref={addToRefs}
      className={`p-10 border-r border-[#0E0E0E]/10 last:border-r-0 relative group transition-all duration-700 ${delay}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C4973B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      <div className="text-[10px] font-medium tracking-widest text-[#C4973B] mb-5">{num}</div>
      <div className="font-serif text-[18px] text-[#0E0E0E] mb-4 leading-tight">{name}</div>
      <div className="text-[13px] font-light leading-relaxed text-[#5A5550]">{text}</div>
    </div>
  );

  return (
    <section id="about" className="bg-[#FAF8F3] overflow-hidden">

      {/* MAIN GRID — Left Image / Right Text */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — Image */}
        <div ref={addToRefs} className="relative min-h-[400px] lg:min-h-full transition-all duration-1000">
          <div
            className="absolute inset-6 lg:inset-16 bg-cover bg-center rounded-sm shadow-2xl"
            style={{ backgroundImage: "url('/homepageimg/about.jpeg')" }}
          ></div>


        
        </div>

        {/* RIGHT — Content */}
        <div className="flex flex-col justify-center px-6 py-10 lg:px-16 lg:py-16 border-l border-[#C4973B]/15">

          {/* Eyebrow tag */}
          {/* <div ref={addToRefs} className="flex items-center gap-3 text-[10px] font-medium tracking-[0.22em] uppercase text-[#C4973B] mb-8 opacity-0 translate-y-10 transition-all duration-700">
            <span className="w-6 h-px bg-[#C4973B]"></span>
            About Northrop
          </div> */}

          {/* Heading */}
          <h2 ref={addToRefs} className="font-serif text-[42px] lg:text-[62px] leading-[1.07] text-[#0E0E0E] mb-8 tracking-tight transition-all duration-700 delay-100">
            The Standard<br />
            We Hold<br />
            <em className="text-[#C4973B] italic">Ourselves To.</em>
          </h2>

          {/* Body text */}
          <div ref={addToRefs} className="text-[15px] font-light leading-[1.85] text-[#4A4540] space-y-6 max-w-[600px] mb-12 transition-all duration-700 delay-200">
            <p>
              Northrop is built on practitioners, not presenters. Our team comprises Chartered Accountants, CFA professionals, and specialists with post-graduate training — people who have worked on live IBC mandates before the <strong className="text-[#0E0E0E]">Hon'ble NCLT</strong>, conducted forensic audits for public sector banks, and managed continuous risk surveillance on some of India's largest listed borrowers.
            </p>
            <p>
              We have investigated financial irregularities — fund diversion, circular transactions, shell entities — for lenders and regulatory committees across manufacturing, textiles, infrastructure, and energy sectors.
            </p>
            <p>
              That is the foundation of trust our clients engage. Not a brochure. Not a credential on a wall. Real work, done at real scale, with complete accountability.
            </p>
          </div>

          {/* CTA */}
          <div ref={addToRefs} className="flex flex-wrap gap-4 transition-all duration-700 delay-300">
            <a
              href="/who-we-are"
              className="bg-[#C4973B] text-[#ffff] text-[10.5px] font-medium tracking-[0.14em] uppercase px-8 py-4 transition-all hover:bg-[#D9AF58] hover:-translate-y-0.5"
            >
              Who We Are
            </a>
            <a
              href="#services"
              className="text-[#5A5550] text-[10.5px] uppercase tracking-[0.1em] flex items-center gap-2 hover:text-[#0E0E0E] transition-all group"
            >
              Our Services
              <span className="text-lg transition-all group-hover:ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* PILLARS GRID */}
      {/* <div className="border-t border-[#0E0E0E]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Pillar
            num="01"
            name="CA · CFA · IIT · MBA"
            text="Every Northrop engagement is led by a qualified professional with real transaction experience. You work with credentialed seniors, not trainees."
            delay="delay-300"
          />
          <Pillar
            num="02"
            name="Real-World Trust"
            text="India's founders need advisors who understand regulatory realities, capital constraints, and relationship dynamics."
            delay="delay-400"
          />
          <Pillar
            num="03"
            name="Institutional Rigour"
            text="ERM frameworks and compliance infrastructure that banks and investors trust completely — at every stage of your lifecycle."
            delay="delay-500"
          />
          <Pillar
            num="04"
            name="Delivered. Every Time."
            text="Board-ready reports in 21 days. Written accountability at every milestone. No vague consulting. When we take on a mandate, we see it through."
            delay="delay-600"
          />
        </div>
      </div> */}
    </section>
  );
}
