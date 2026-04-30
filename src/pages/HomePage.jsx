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
import TrackRecord from '../components/TrackRecord'


function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Northrop India | Global Financial Advisory & Management Consulting</title>
        <meta name="description" content="Northrop India provides institutional-grade financial reporting, risk management, and transaction advisory services. Build stakeholder trust with human intelligence and AI-powered precision." />
      </Helmet>
      <Hero />


      {/* ── CREDENTIAL MARQUEE ── */}
      <div className="bg-[#c4973b] border-y border-[#C4973B]/20 py-[13px] overflow-hidden">
        <style>{`
          @keyframes credScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .cred-track {
            display: flex;
            width: max-content;
            animation: credScroll 32s linear infinite;
          }
          .cred-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="cred-track">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex items-center">
              {[
                "CA", "CFA", "IIT Trained", "IBC Before NCLT",
                "Forensic Audit", "PSU Bank Mandates", "New Delhi · Mumbai · Pan-India"
              ].map((item, i) => (
                <span key={`${copy}-${i}`} className="flex items-center">
                  <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#ffFF] whitespace-nowrap px-8">
                    {item}
                  </span>
                  <span className="text-[#ffff]/35 text-[8px]">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <About />


      <SkylineDivider/>

      <TrackRecord />

      {/* <Services /> */}

      
      {/* <Institute/> */}
      {/* <Foundation/> */}



     
    

      <LocationsSection/>
      
      <ContactSection />
   
    
    </main>
  )
}

export default HomePage
