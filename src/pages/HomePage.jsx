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
      <About />

      <SkylineDivider/>
      {/* <Journey /> */}
      <Services />
      <Institute/>
      <Foundation/>
      {/* <Insights /> */}

      <LocationsSection/>
      
      <ContactSection />
   
    
    </main>
  )
}

export default HomePage
