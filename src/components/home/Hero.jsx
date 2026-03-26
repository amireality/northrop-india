// import { heroContent } from '../../data/homeContent'

// function Hero() {
//   return (
//     <section className="relative min-h-[600px] w-full overflow-hidden">
//       {/* 1. Background Image Layer */}
//       <div className="absolute inset-0 z-0">
//         {/* Desktop Image */}
//         <img
//           src="/homepageimg/Website-images.webp"
//           alt="Global Expertise"
//           className="hidden md:block h-full w-full object-cover object-right "
//         />
//         {/* Mobile Image */}
//         <img
//           src="/homepageimg/new-mobile-website-bannAR.webp"
//           alt="Global Expertise"
//           className="block md:hidden h-full w-full object-contain object-right "
//         />
//         {/* 2. Gradient Overlay for Text Readability */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-[#061a3a] via-[#061a3a]/80 to-transparent" /> */}
//       </div>

     

//       {/* 4. Bottom Information Bar (Fixed Style) */}
//       <div className="relative z-10 border-t border-white/10 bg-[#061a3a]/60 backdrop-blur-md">
//         <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 text-[14px] uppercase tracking-widest text-gray-400 md:px-12">
//           <div className="flex gap-6">
//             <span>Connaught Place, New Delhi</span>
//             <span className="hidden md:inline">|</span>
//             <span className="hidden md:inline">northropindia.com</span>
//           </div>
//           <div className="text-[#e8b021]">
//             CIN: U70200DC2026PTC469133
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero



import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] relative grid grid-cols-1 lg:grid-cols-2 bg-[#141414]">
      <div className="flex flex-col justify-center px-6 py-20 lg:px-20 lg:py-32 relative z-10 border-r border-[#C4973B]/20">
        <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.22em] uppercase text-[#C4973B] mb-8 animate-fade-in">
          <span className="w-6 h-px bg-[#C4973B]"></span>
          CA · CFA · IIT · MBA · New Delhi · Strategy · Advisory · M&A
        </p>
        <h1 className="font-serif text-[42px] lg:text-[66px] leading-[1.07] text-white mb-8 tracking-tight">
          Advisory Built<br />for Those Who<br />
          <em className="text-[#D9AF58] italic">Build to Last.</em>
        </h1>
        <p className="text-[15px] font-light leading-[1.85] text-white/40 max-w-[430px] mb-12">
          Northrop Management is a senior-led strategic advisory firm headquartered at Connaught Place, New Delhi. 
          Our team delivers real advisory to founders, institutions, and enterprises who trust us with their 
          most consequential decisions.
        </p>
        <div className="flex flex-wrap gap-4 mb-20">
          <a href="mailto:Business@NorthropIndia.com" className="bg-[#C4973B] text-[#0E0E0E] text-[10.5px] font-medium tracking-[0.14em] uppercase px-8 py-4 transition-all hover:bg-[#D9AF58] hover:-translate-y-0.5">
            Engage With Us
          </a>
          <a href="#about" className="text-white/40 text-[10.5px] uppercase tracking-[0.1em] flex items-center gap-2 hover:text-white transition-all group">
            Our Approach <span className="text-lg transition-all group-hover:ml-2">→</span>
          </a>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex gap-10">
          <div><div className="font-serif text-3xl text-[#D9AF58]">12</div><div className="text-[9.5px] uppercase tracking-widest text-white/30 mt-2">Service Verticals</div></div>
          <div><div className="font-serif text-3xl text-[#D9AF58]">21</div><div className="text-[9.5px] uppercase tracking-widest text-white/30 mt-2">Day Delivery</div></div>
          <div><div className="font-serif text-3xl text-[#D9AF58]">1×</div><div className="text-[9.5px] uppercase tracking-widest text-white/30 mt-2">Senior on Every File</div></div>
        </div>
      </div>
      
      <div className="hidden lg:block relative overflow-hidden h-full min-h-[600px]">
        <div className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.4]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&q=90')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/70 to-transparent"></div>
        <div className="absolute bottom-10 right-10 border border-[#C4973B]/30 bg-[#0E0E0E]/50 backdrop-blur-md px-5 py-3 text-white/40 text-[10px] tracking-[0.14em] uppercase">
          Connaught Place · New Delhi
        </div>
      </div>
    </section>
  );
}
