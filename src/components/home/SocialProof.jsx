import { partners, testimonials } from '../../data/homeContent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function SocialProof() {
  return (
    <section className="bg-white px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-[1400px]">
        
        {/* 1. Testimonial Section */}
        <div className="mb-24 text-center">
          <h2 className="mb-16 text-4xl font-bold tracking-tight text-[#001f3f] md:text-[44px]">
            What Our <span className="text-[#c5a044]">Clients Say</span>
          </h2>

          <div className="relative mx-auto max-w-5xl">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              speed={800}
              pagination={{
                clickable: true,
                el: '.testimonial-pagination',
                bulletClass: 'swiper-custom-bullet-dark',
                bulletActiveClass: 'swiper-custom-bullet-dark-active',
              }}
              className="w-full pb-12"
            >
              {testimonials?.map((content, index) => (
                <SwiperSlide key={index}>
                  <article className="relative mx-auto w-full rounded-sm bg-[#f8f9fb] p-12 md:p-16 mt-6">
                    {/* Large Quote Icon Decoration */}
                    <div className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-[#001f3f] text-3xl font-serif text-white shadow-lg">
                      “
                    </div>

                    <div className="space-y-8">
                      <p className="text-[19px] italic leading-relaxed text-[#001f3f] md:text-[22px] font-light px-4">
                        "{content.quote}"
                      </p>
                      
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-0.5 w-12 bg-[#c5a044]" />
                        <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#001f3f]">
                          {content.author}
                        </p>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Visual Slider Dots Container */}
            <div className="testimonial-pagination mt-8 flex justify-center gap-2 items-center" />
          </div>
        </div>

        {/* 2. Trusted Partners (Logo Bar) */}
        <div className="pt-12 border-t border-gray-100">
          <h3 className="mb-12 text-center text-[13px] font-bold uppercase tracking-[0.4em] text-gray-400">
            Trusted Partners
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60">
            {partners?.map((partner) => (
              <div 
                key={partner} 
                className="text-[18px] font-black tracking-tighter text-[#001f3f] grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
              >
                {/* If you have actual logo images, use:
                   <img src={`/logos/${partner}.png`} alt={partner} className="h-8 object-contain" />
                */}
                {partner}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>
        {`
          .swiper-custom-bullet-dark {
            width: 32px;
            height: 4px;
            background-color: #d1d5db; /* tailwind gray-300 */
            display: inline-block;
            margin: 0 4px !important;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .swiper-custom-bullet-dark-active {
            background-color: #c5a044;
          }
        `}
      </style>
    </section>
  )
}

export default SocialProof