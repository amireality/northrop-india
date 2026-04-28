import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Journey from '../components/home/Journey'
import Services from '../components/home/Services'
import Leadership from '../components/home/Leadership'
import SocialProof from '../components/home/SocialProof'
// import Insights from '../components/home/Insights'
import Partner from '../components/home/Partner'
import SkylineDivider from '../components/home/SkylineDivider'
import Institute from '../components/home/Institute'
import Foundation from '../components/home/Foundation'
import ContactSection from '../components/home/ContactSection'
import Insights from '../components/home/insightsData'
import LocationsSection from '../components/home/Locationsection'


function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Northrop India | Global Financial Advisory & Management Consulting</title>
        <meta name="description" content="Northrop India provides institutional-grade financial reporting, risk management, and transaction advisory services. Build stakeholder trust with human intelligence and AI-powered precision." />
      </Helmet>
      <Hero />


      {/* ── MARQUEE STRIP ── */}
      <div className="overflow-hidden bg-[#C4973B] border-y border-[#C4973B]/25 py-3">
        <style>{`
          @keyframes marqueeScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .marquee-inner {
            display: flex;
            width: max-content;
            animation: marqueeScroll 28s linear infinite;
          }
          .marquee-inner:hover { animation-play-state: paused; }
        `}</style>
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {[
                'About Northrop',
                'Advisory · Risk · M&A',
                'Forensic Investigations',
                'IBC & Restructuring',
                'Strategic Finance',
                'New Delhi · Pan-India',
                'CA · CFA · IIT · MBA',
                'Institutional Rigour',
              ].map((item) => (
                <span key={item} className="flex items-center gap-0">
                  <span className="font-serif text-[15px] tracking-[0.18em] text-[#ffff] uppercase px-10 whitespace-nowrap">
                    {item}
                  </span>
                  <span className="text-[#C4973B]/50 text-[10px]">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <About />


      <SkylineDivider/>
    
      <Services />
      {/* <Institute/> */}
      {/* <Foundation/> */}



     
    

      <LocationsSection/>
      
      <ContactSection />
   
    
    </main>
  )
}

export default HomePage
