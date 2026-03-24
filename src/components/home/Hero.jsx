import { heroContent } from '../../data/homeContent'

function Hero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-[#061a3a]">
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/path-to-your-handshake-image.jpg" // The image with the AI/Handshake effect
          alt="Global Expertise"
          className="h-full w-full object-cover object-right opacity-60"
        />
        {/* 2. Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a3a] via-[#061a3a]/80 to-transparent" />
      </div>

      {/* 3. Main Content Content */}
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1440px] flex-col justify-center px-6 py-20 md:px-12 lg:px-20">
        
        {/* Heading Group */}
        <div className="max-w-4xl space-y-2">
          <h1 className="text-[64px] font-bold leading-[1.1] tracking-tight text-[#f3f6fb] md:text-[82px]">
            Global <span className="text-[#19355f]">Expertise</span>
          </h1>
          <h2 className="text-[58px] font-bold leading-[1.1] text-[#e8b021] md:text-[76px]">
            Innovative Solutions
          </h2>
        </div>

        {/* Subtitle / Tagline */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-[1px] w-12 bg-[#e8b021]" />
          <p className="text-[20px] font-medium tracking-wide text-[#dbe5f5]">
            Offering a full spectrum of <span className="font-bold text-white uppercase">Advisory, Strategy, and Compliance</span> Services
          </p>
        </div>

        {/* Optional: Navigation/Dots similar to the original image slider */}
        <div className="mt-16 flex gap-3">
          <span className="h-1 w-10 bg-[#e8b021]" />
          <span className="h-1 w-10 bg-white/20" />
          <span className="h-1 w-10 bg-white/20" />
        </div>
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