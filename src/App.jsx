import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import WhoWeAre from './pages/WhoWeAre'
import WhatWeDo from './pages/WhatWeDo'
import OurThinking from './pages/OurThinking'
import Careers from './pages/Careers'
import Services from './pages/Services'
import Industry from './pages/Industry'
import Alliances from './pages/Alliances'
import CaseStudies from './pages/CaseStudies'
import ContactFooter from './components/home/ContactFooter'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/our-thinking" element={<OurThinking />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/alliances" element={<Alliances />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </MainLayout>
       <ContactFooter />
    </BrowserRouter>
  )
}

export default App
