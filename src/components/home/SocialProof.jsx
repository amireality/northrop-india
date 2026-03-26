import { partners, testimonials } from '../../data/homeContent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function SocialProof() {
  return (
    <section className="bg-white px-6 py-10 md:px-10 lg:px-10">
      <div className="mx-auto w-full">
        
        {/* 1. Testimonial Section */}
        <div className="mb-10 text-center">
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