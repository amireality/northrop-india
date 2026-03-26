import { leadershipMembers, leadershipStats } from '../../data/homeContent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { ArrowRight, Share2 } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

function Leadership() {
  return (
    <section 
      style={{ backgroundImage: 'linear-gradient(to top, #fff, var(--pbmit-global-color, #7890ad))' }}
      className="w-full pt-16 pb-24 overflow-hidden"
    >
      {/* 1. Stats Ribbon */}
      <div className="px-6 mb-24 mt-8">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-y-12">
          {leadershipStats?.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`flex-1 text-center ${index !== leadershipStats.length - 1 ? 'border-r border-white/40' : ''}`}
            >
              <p className="text-4xl font-bold tracking-tighter text-white md:text-[44px]">
                {stat.value}
              </p>
              <p className="mt-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Leadership Section Content */}
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Intro Card (Exactly 50% via grid) */}
          <article className="flex flex-col justify-center">
            <h2 className="text-[36px] md:text-[40px] font-normal leading-[1.2] tracking-tight text-[#1a1a1a]">
              Introducing Our Leadership
            </h2>
            <p className="mt-6 text-[15px] leading-[1.8] text-[#333333] font-medium pr-8">
              Our leadership team combines deep industry expertise with visionary thinking to drive innovation and excellence. Committed to your success, we deliver strategic insights and solutions that unlock your business's full potential.
            </p>
            <div className="mt-10">
              <button className="group flex w-max items-center gap-2 rounded-full bg-[#072456] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#c5a044]">
                Get In Touch 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </article>

          {/* Right: Member Cards Slider (Exactly 50% via grid) */}
          <div className="w-full">
            <div className="relative w-full">
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
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 }, /* Exactly 2 images on desktop */
                }}
                className="w-full"
              >
                {leadershipMembers?.map((member) => (
                  <SwiperSlide key={member.name}>
                    <article className="group relative flex flex-col h-full bg-[#f4f4f4] overflow-hidden pb-8 shadow-sm">
                      {/* Image Container */}
                      <div className="relative aspect-[4/5] bg-[#e6e6e6] flex items-end justify-center">
                        {/* Placeholder silhouette/avatar for now */}
                        <div className="z-10 h-[75%] w-[60%] bg-[#d0d0d0] rounded-t-[100px] shadow-inner" />
                        
                        {/* Yellow Share Block at bottom right */}
                        <div className="absolute bottom-0 right-0 z-20 flex h-10 w-10 items-center justify-center bg-[#fdb714] text-[#072456] transition-transform hover:scale-110 cursor-pointer">
                          <Share2 size={18} strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Text Content Below Image */}
                      <div className="mt-5 px-5">
                        <h4 className="text-[20px] font-medium text-[#1a1a1a]">{member.name}</h4>
                        <p className="mt-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#072456] opacity-80 leading-snug">
                          {member.role}
                        </p>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Leadership   