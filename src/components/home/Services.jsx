// import { serviceCards } from '../../data/homeContent'
// import { Plus } from 'lucide-react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'

// function Services() {
//   return (
//     <section className="bg-[#f8f9fb] px-6 py-24 md:px-10 lg:px-20">
//       <div className="mx-auto w-full max-w-[1400px]">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.3em] text-[#c5a044]">
//             Our Expertise
//           </p>
//           <h2 className="text-4xl font-bold tracking-tight text-[#001f3f] md:text-5xl">
//             Core <span className="text-[#c5a044]">Services</span>
//           </h2>
//           <div className="mx-auto mt-6 h-1 w-20 bg-[#c5a044]" />
//         </div>

//         {/* Services Slider */}
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={24}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           speed={800}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           pagination={{
//             clickable: true,
//             el: '.services-pagination',
//             bulletClass: 'swiper-custom-bullet-dark',
//             bulletActiveClass: 'swiper-custom-bullet-dark-active',
//           }}
//           className="w-full !pb-4"
//         >
//           {serviceCards.map((card, index) => (
//             <SwiperSlide key={index} className="h-auto">
//               <article className="group flex h-full flex-col justify-between border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
//                 <div>
//                   {/* Icon: Gold circle with plus/icon as seen in image */}
//                   <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8b021] text-white shadow-md transition-transform group-hover:scale-110">
//                     <Plus size={24} strokeWidth={3} />
//                   </div>

//                   <h3 className="text-[22px] font-bold leading-tight text-[#001f3f] transition-colors group-hover:text-[#c5a044]">
//                     {card.title}
//                   </h3>
                  
//                   <p className="mt-5 text-[15px] leading-relaxed text-gray-500 font-light">
//                     {card.description}
//                   </p>
//                 </div>

//                 {/* Button: Navy Outline Style */}
//                 <div className="mt-10">
//                   <button
//                     type="button"
//                     className="border border-[#001f3f] px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-[#001f3f] transition-all group-hover:bg-[#001f3f] group-hover:text-white"
//                   >
//                     Read More
//                   </button>
//                 </div>
//               </article>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Visual Slider Dots Container */}
//         <div className="services-pagination mt-16 flex justify-center items-center gap-2" />

//         <style>
//           {`
//             .swiper-custom-bullet-dark {
//               width: 32px;
//               height: 4px;
//               background-color: #d1d5db; /* gray-300 */
//               display: inline-block;
//               margin: 0 4px !important;
//               cursor: pointer;
//               transition: all 0.3s ease;
//             }
//             .swiper-custom-bullet-dark-active {
//               background-color: #c5a044;
//             }
//           `}
//         </style>
//       </div>
//     </section>
//   )
// }

// export default Services


import React, { useEffect, useRef } from 'react';

const services = [
  {
    name: "Strategy & Business Advisory",
    desc: "Growth architecture, market positioning, and 90-day execution roadmaps. professionals who understand how Indian businesses actually scale."
  },
  {
    name: "Financial Due Diligence",
    desc: "Investor-grade FDD for PE/VC transactions, acquisitions, and debt placements — conducted by qualified CAs with real transaction experience."
  },
  {
    name: "Forensic Accounting",
    desc: "Deep fraud investigation and transaction testing. When the stakes are real and trust is on the line, Northrop delivers findings that hold up."
  },
  {
    name: "IBC / NCLT Advisory",
    desc: "Resolution support, creditor advisory, and CIRP management by professionals with direct IBC practitioner experience."
  },
  {
    name: "M&A Transaction Advisory",
    desc: "Buy-side and sell-side advisory by CFA and CA professionals who have structured real deals — valuation, negotiation, and closing."
  },
  {
    name: "Risk & Compliance",
    desc: "ERM, DPDP Act, ABAC, and ROC compliance. Indian businesses trust Northrop to keep them clean, governed, and audit-ready."
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
          <p ref={addToRefs} className="text-[14px] font-light leading-relaxed text-white/40 opacity-0 translate-y-10 transition-all duration-700 delay-200">
            Delivered by CA, CFA, IIT, and MBA professionals with real mandates behind them. Twelve verticals. One trusted senior relationship. Every engagement backed by genuine rigour.
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
              <h3 className="font-serif text-[17px] text-white mb-3">{svc.name}</h3>
              <p className="text-[12.5px] font-light leading-relaxed text-white/35">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div ref={addToRefs} className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 opacity-0 translate-y-10 transition-all duration-700 delay-500">
          <p className="text-[13px] font-light text-white/30 max-w-[540px]">
            Also covering: <strong className="text-white/50 font-normal">Credit Analytics · Tax · Digital & AI · HR Advisory · Operations Excellence · Government Advisory</strong>
          </p>
          <a href="mailto:Business@NorthropIndia.com" className="flex items-center gap-3 text-[11px] font-medium tracking-widest uppercase text-[#C4973B] group transition-all">
            Discuss a Mandate <span className="text-lg group-hover:ml-4 transition-all">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
