import { heroContent } from '../../data/homeContent'

function Hero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <img
          src="/homepageimg/Website-images.webp"
          alt="Global Expertise"
          className="hidden md:block h-full w-full object-cover object-right "
        />
        {/* Mobile Image */}
        <img
          src="/homepageimg/new-mobile-website-bannAR.webp"
          alt="Global Expertise"
          className="block md:hidden h-full w-full object-contain object-right "
        />
        {/* 2. Gradient Overlay for Text Readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#061a3a] via-[#061a3a]/80 to-transparent" /> */}
      </div>

     

      {/* 4. Bottom Information Bar (Fixed Style) */}
      <div className="relative z-10 border-t border-white/10 bg-[#061a3a]/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 text-[14px] uppercase tracking-widest text-gray-400 md:px-12">
          <div className="flex gap-6">
            <span>Connaught Place, New Delhi</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">northropindia.com</span>
          </div>
          <div className="text-[#e8b021]">
            CIN: U70200DC2026PTC469133
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero