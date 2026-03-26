// import { aboutContent } from '../../data/homeContent'
// import { ArrowRight } from 'lucide-react'

// function About() {
//   return (
//     <section className="bg-[#ffff] px-6 py-24 md:px-10 lg:px-20">
//       <div className="mx-auto grid w-full max-w-[1400px] gap-16 lg:grid-cols-[1.1fr_1fr] items-center">
        
//         {/* Left Side: Visual Element (World Map / Brand Asset) */}
//         <div className="relative flex justify-center lg:justify-start">
//           {/* Using a placeholder for the world map image from your reference */}
//           <div className="relative w-full max-w-[550px]">
//             <img 
//               src="/homepageimg/Untitled design.png" 
//               alt="Global Presence Map" 
//               className="w-full  brightness-110"
//             />
           
//           </div>
          
//           {/* Background Decorative Element (The large 'N' or subtle pattern) */}
//           <div className="absolute -left-10 -top-10 -z-10 text-[20rem] font-bold  select-none">
//             N
//           </div>
//         </div>

//         {/* Right Side: Content */}
//         <div className="flex flex-col space-y-8">
//           <div className="space-y-4">
//             <h2 className="text-[44px] font-bold leading-[1.1]  tracking-tight">
//               About <span className="text-[#c5a044]">Northrop</span>
//             </h2>
            
      
//           </div>

//           <div className="space-y-6">
//             {/* Split body content into paragraphs for better readability like the image */}
//             <p className="text-[17px] leading-[1.8] text-black ">
//               {aboutContent.body_part_1 || "With over three decades of distinguished expertise, Northrop is one of India's fastest-growing consulting firms."}
//             </p>
//             <p className="text-[17px] leading-[1.8] text-black ">
//               {aboutContent.body_part_2 || "We serve a broad range of industries, providing customized solutions that tackle the distinct challenges of each sector."}
//             </p>
//           </div>

//           {/* Gold Button Style from Image 2 */}
//           <div className="pt-4">
//             <button className="group flex items-center gap-3 bg-[#e8b021] px-8 py-3 text-[14px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#d49f1a] rounded-full">
//               Read More
//               <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default About


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
      className={`p-10 border-r border-[#0E0E0E]/10 last:border-r-0 relative group transition-all duration-700 opacity-0 translate-y-10 ${delay}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C4973B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      <div className="text-[10px] font-medium tracking-widest text-[#C4973B] mb-5">{num}</div>
      <div className="font-serif text-[18px] text-[#0E0E0E] mb-4 leading-tight">{name}</div>
      <div className="text-[13px] font-light leading-relaxed text-[#5A5550]">{text}</div>
    </div>
  );

  return (
    <section id="about" className="bg-[#FAF8F3] py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">
          <div>
            <div ref={addToRefs} className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] uppercase text-[#C4973B] mb-6 opacity-0 translate-y-10 transition-all duration-700">
              <span className="w-7 h-px bg-[#C4973B]"></span> About Northrop
            </div>
            <h2 ref={addToRefs} className="font-serif text-[32px] lg:text-[46px] leading-[1.1] text-[#0E0E0E] tracking-tight opacity-0 translate-y-10 transition-all duration-700 delay-100">
              The Standard<br />We Hold<br /><em className="text-[#C4973B] italic">Ourselves To.</em>
            </h2>
          </div>
          <div ref={addToRefs} className="text-[15px] font-light leading-relaxed text-[#4A4540] space-y-6 opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <p>Northrop is staffed by professionals who have earned and lived their credentials — <strong>Chartered Accountants (CA), CFA charterholders, IIT graduates, and MBA professionals</strong> — with real, ground-level experience.</p>
            <p>Every engagement at Northrop is led by a senior professional who has worked through real transactions, real disputes, and real business pressure. That is the foundation of trust.</p>
            <p>Our positioning is deliberate: senior access at every stage, outcome-based pricing, 21-day delivery standards, and documented governance that clients trust completely.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#0E0E0E]/10">
          <Pillar 
            num="01" 
            name="CA · CFA · IIT · MBA" 
            text="Every Northrop engagement is led by a qualified professional with real transaction experience. You work with credentialed seniors, not trainees."
            delay="delay-300"
          />
          <Pillar 
            num="02" 
            name="Real-World Trust" 
            text="India's founders need advisors who understand regulatory realities, capital constraints, and relationship dynamics. Northrop is built on that trust."
            delay="delay-400"
          />
          <Pillar 
            num="03" 
            name="Institutional Rigour" 
            text="ERM frameworks and compliance infrastructure that banks and investors trust completely — at every stage of your business lifecycle."
            delay="delay-500"
          />
          <Pillar 
            num="04" 
            name="Delivered. Every Time." 
            text="Board-ready reports in 21 days. Written deliverables at every milestone. No vague consulting. When we take on a mandate, we see it through."
            delay="delay-600"
          />
        </div>
      </div>
    </section>
  );
}
