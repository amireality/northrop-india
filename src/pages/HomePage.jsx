import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Journey from '../components/home/Journey'
import Services from '../components/home/Services'
import Leadership from '../components/home/Leadership'
import SocialProof from '../components/home/SocialProof'
import Insights from '../components/home/Insights'
import ContactFooter from '../components/home/ContactFooter'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Journey />
      <Services />
      <Leadership />
      <SocialProof />
      <Insights />
      <ContactFooter />
    </main>
  )
}

export default HomePage
