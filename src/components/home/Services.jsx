import { serviceCards } from '../../data/homeContent'
import { Plus } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function Services() {
  return (
    <section className="bg-[#f8f9fb] px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.3em] text-[#c5a044]">
            Our Expertise
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#001f3f] md:text-5xl">
            Core <span className="text-[#c5a044]">Services</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-[#c5a044]" />
        </div>

        {/* Services Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          pagination={{
            clickable: true,
            el: '.services-pagination',
            bulletClass: 'swiper-custom-bullet-dark',
            bulletActiveClass: 'swiper-custom-bullet-dark-active',
          }}
          className="w-full !pb-4"
        >
          {serviceCards.map((card, index) => (
            <SwiperSlide key={index} className="h-auto">
              <article className="group flex h-full flex-col justify-between border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div>
                  {/* Icon: Gold circle with plus/icon as seen in image */}
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8b021] text-white shadow-md transition-transform group-hover:scale-110">
                    <Plus size={24} strokeWidth={3} />
                  </div>

                  <h3 className="text-[22px] font-bold leading-tight text-[#001f3f] transition-colors group-hover:text-[#c5a044]">
                    {card.title}
                  </h3>
                  
                  <p className="mt-5 text-[15px] leading-relaxed text-gray-500 font-light">
                    {card.description}
                  </p>
                </div>

                {/* Button: Navy Outline Style */}
                <div className="mt-10">
                  <button
                    type="button"
                    className="border border-[#001f3f] px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-[#001f3f] transition-all group-hover:bg-[#001f3f] group-hover:text-white"
                  >
                    Read More
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Visual Slider Dots Container */}
        <div className="services-pagination mt-16 flex justify-center items-center gap-2" />

        <style>
          {`
            .swiper-custom-bullet-dark {
              width: 32px;
              height: 4px;
              background-color: #d1d5db; /* gray-300 */
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
      </div>
    </section>
  )
}

export default Services