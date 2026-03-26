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


function HomePage() {
  return (
    <main>
      <Hero />
      <About />

      <SkylineDivider/>
      {/* <Journey /> */}
      <Services />
      <Institute/>
      <Foundation/>
      <Insights />
      
      <ContactSection />
      {/* <Leadership /> */}
      {/* <SocialProof /> */}
      {/* <Partner /> */}
      {/* <Insights /> */}
    
    </main>
  )
}

export default HomePage
