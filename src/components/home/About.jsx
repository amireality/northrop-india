import { aboutContent } from '../../data/homeContent'
import { ArrowRight } from 'lucide-react'

function About() {
  return (
    <section className="bg-[#ffff] px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto grid w-full max-w-[1400px] gap-16 lg:grid-cols-[1.1fr_1fr] items-center">
        
        {/* Left Side: Visual Element (World Map / Brand Asset) */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Using a placeholder for the world map image from your reference */}
          <div className="relative w-full max-w-[550px]">
            <img 
              src="/homepageimg/Untitled design.png" 
              alt="Global Presence Map" 
              className="w-full  brightness-110"
            />
           
          </div>
          
          {/* Background Decorative Element (The large 'N' or subtle pattern) */}
          <div className="absolute -left-10 -top-10 -z-10 text-[20rem] font-bold  select-none">
            N
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <h2 className="text-[44px] font-bold leading-[1.1]  tracking-tight">
              About <span className="text-[#c5a044]">Northrop</span>
            </h2>
            
      
          </div>

          <div className="space-y-6">
            {/* Split body content into paragraphs for better readability like the image */}
            <p className="text-[17px] leading-[1.8] text-black ">
              {aboutContent.body_part_1 || "With over three decades of distinguished expertise, Northrop is one of India's fastest-growing consulting firms."}
            </p>
            <p className="text-[17px] leading-[1.8] text-black ">
              {aboutContent.body_part_2 || "We serve a broad range of industries, providing customized solutions that tackle the distinct challenges of each sector."}
            </p>
          </div>

          {/* Gold Button Style from Image 2 */}
          <div className="pt-4">
            <button className="group flex items-center gap-3 bg-[#e8b021] px-8 py-3 text-[14px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#d49f1a] rounded-full">
              Read More
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About