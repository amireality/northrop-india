import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partnerLogos = [
  { name: 'Panasonic', logo: '/partnerlogo/Panasonic.png' },
  { name: 'Paytm', logo: '/partnerlogo/Paytm.png' },
  { name: 'Ray-ban', logo: '/partnerlogo/Ray-ban.png' },
  { name: 'Rohm', logo: '/partnerlogo/Rohm.png' },
  { name: 'Roki', logo: '/partnerlogo/Roki.png' },
];

export default function Partner() {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="mx-auto w-full">
        <h3 className="mb-14 text-center text-[12px] font-bold uppercase tracking-[0.4em] text-gray-400">
          Trusted Partners
        </h3>
        
        <div className="relative overflow-hidden px-6 lg:px-20">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={80}
            slidesPerView={2}
            loop={true}
            allowTouchMove={false} // Prevents snapping and keeps it smooth
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={5000} // Speed adjusted for a slow, premium crawl
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 60 },
              1024: { slidesPerView: 5, spaceBetween: 80 },
            }}
            className="partner-swiper"
          >
            {partnerLogos.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} — Northrop Management trusted partner`} 
                    className="h-20 w-auto object-contain transition-all cursor-pointer" 
                    title={partner.name}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
            
            {/* Duplicated slides to ensure perfect infinite loop without gap */}
            {partnerLogos.map((partner, index) => (
              <SwiperSlide key={`dup-${index}`}>
                <div className="flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} — Northrop Management trusted partner`}
                    className="h-20 w-auto object-contain transition-all duration-500 cursor-pointer" 
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Global CSS for seamless linear motion */}
      <style>
        {`
          .partner-swiper .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}
      </style>
    </section>
  );
}
