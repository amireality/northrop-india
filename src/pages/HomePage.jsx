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


      {/* ── CREDENTIAL BAR (H-05: replaced marquee) ── */}
      <div className="bg-[#001F3F] border-y border-[#C4973B]/20 py-[14px] px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            "CA", "CFA", "IIT Trained", "IBC Before NCLT",
            "Forensic Audit", "PSU Bank Mandates", "New Delhi · Mumbai · Pan-India"
          ].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-6">
              <span className="font-sans text-[12px] font-medium tracking-[0.12em] uppercase text-[#C4973B] whitespace-nowrap">
                {item}
              </span>
              {i < arr.length - 1 && (
                <span className="text-[#C4973B]/40 text-[10px]">·</span>
              )}
            </span>
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
