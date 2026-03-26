import { journeyItems } from '../../data/homeContent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function Journey() {
  return (
    <section className="relative overflow-hidden bg-[#134988] px-6 py-24 md:px-10 lg:px-20">
      {/* Hexagonal background pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center" 
        style={{ backgroundImage: `url('/homepageimg/wcu_bg_1.jpg')` }}
      />

      <style>
        {`
          .swiper-custom-bullet {
            width: 35px;
            height: 5px;
            background-color: rgba(255, 255, 255, 0.3);
            display: inline-block;
            border-radius: 2px;
            margin: 0 6px !important;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .swiper-custom-bullet-active {
            background-color: #ffffff;
            opacity: 1;
          }
        `}
      </style>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-[40px] font-bold tracking-tight text-white md:text-[48px]">
            Our Journey
          </h2>
          <p className="mt-4 text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-white">
            Evolving with the times, leading with integrity
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination,Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
         loop={true}   // ✅ infinite loop

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          speed={800} 
        
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'swiper-custom-bullet',
            bulletActiveClass: 'swiper-custom-bullet-active',
          }}
          className="w-full"
        >
          {journeyItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative bg-[#0a2f5e]/60 flex flex-col items-center justify-center min-h-[300px] p-8 sm:p-12 transition-all duration-300 hover:bg-[#0a2f5e]/80">
                {/* Year Label */}
                <h3 className="mb-8 text-4xl sm:text-[44px] font-bold text-white">
                  {item.year}
                </h3>

                {/* Connecting Line with Square Icon */}
                <div className="relative w-full flex items-center justify-center mb-8">
                  {/* The Horizontal Line */}
                  <div className="absolute left-0 right-0 h-[1px] bg-white/40" />
                  {/* The Center Square Box */}
                  <div className="relative z-10 flex h-[18px] w-[18px] items-center justify-center bg-[#fdb714] ring-2 ring-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  {item.title && (
                    <strong className="block mb-2 text-[17px] text-white">
                      {item.title}
                    </strong>
                  )}
                  <p className="text-[16px] leading-relaxed text-white font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container */}
        <div className="custom-pagination mt-16 flex justify-center items-center" />
      </div>
    </section>
  )
}

export default Journey