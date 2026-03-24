import { partners, testimonial } from '../../data/homeContent'

function SocialProof() {
  return (
    <section className="bg-white px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-[1400px]">
        
        {/* 1. Testimonial Section */}
        <div className="mb-24 text-center">
          <h2 className="mb-16 text-4xl font-bold tracking-tight text-[#001f3f] md:text-5xl">
            What Our <span className="text-[#c5a044]">Clients Say</span>
          </h2>

          <article className="relative mx-auto max-w-5xl rounded-sm bg-[#f8f9fb] p-12 md:p-16">
            {/* Large Quote Icon Decoration */}
            <div className="absolute -top-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-[#001f3f] text-3xl font-serif text-white shadow-lg">
              “
            </div>

            <div className="space-y-8">
              <p className="text-[19px] italic leading-relaxed text-[#001f3f] md:text-[22px] font-light">
                {testimonial?.quote || "The advice provided by Northrop has been instrumental in our strategic expansion. Their team combines deep expertise with a highly personalized approach."}
              </p>
              
              <div className="flex flex-col items-center gap-2">
                <div className="h-0.5 w-12 bg-[#c5a044]" />
                <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#001f3f]">
                  {testimonial?.author || "Managing Director, Global Tech"}
                </p>
              </div>
            </div>
          </article>
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
    </section>
  )
}

export default SocialProof