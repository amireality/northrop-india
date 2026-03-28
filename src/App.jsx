import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import WhoWeAre from './pages/WhoWeAre'
import WhatWeDo from './pages/WhatWeDo'
import OurThinking from './pages/OurThinking'
import Careers from './pages/Careers'
import Services from './pages/Services'
import Industry from './pages/Industry'
import Alliances from './pages/Alliances'
import CaseStudies from './pages/CaseStudies'
import DynamicSubPage from './pages/DynamicSubPage'
import InstitutePage from './pages/Institute'

// Services Imports
import Audit from './pages/services/Audit'
import Assurance from './pages/services/Assurance'
import BusinessProcessSolutions from './pages/services/BusinessProcessSolutions'
import Customer from './pages/services/Customer'
import Cyber from './pages/services/Cyber'
import HumanCapital from './pages/services/HumanCapital'
import StrategyTransactions from './pages/services/StrategyTransactions'
import Sustainability from './pages/services/Sustainability'
import RiskRegulatoryForensic from './pages/services/RiskRegulatoryForensic'
import Legal from './pages/services/Legal'
import Operate from './pages/services/Operate'
import Tax from './pages/services/Tax'
import DeloittePrivate from './pages/services/DeloittePrivate'
import EngineeringAiData from './pages/services/EngineeringAiData'
import EnterpriseTechnologyPerformance from './pages/services/EnterpriseTechnologyPerformance'
import GenerativeAI from './pages/services/GenerativeAI'
import GlobalEmployerServices from './pages/services/GlobalEmployerServices'

// Industry Imports
import Consumer from './pages/industry/Consumer'
import EnergyResourcesIndustrials from './pages/industry/EnergyResourcesIndustrials'
import FinancialServices from './pages/industry/FinancialServices'
import GovernmentPublicServices from './pages/industry/GovernmentPublicServices'
import LifeSciencesHealthCare from './pages/industry/LifeSciencesHealthCare'
import TechnologyMediaTelecommunications from './pages/industry/TechnologyMediaTelecommunications'
import AerospaceDefense from './pages/industry/AerospaceDefense'
import Automotive from './pages/industry/Automotive'
import RealEstate from './pages/industry/RealEstate'
import Logistics from './pages/industry/Logistics'
import Retail from './pages/industry/Retail'

// Alliances Imports
import SAP from './pages/alliances/SAP'
import Oracle from './pages/alliances/Oracle'
import Microsoft from './pages/alliances/Microsoft'
import AWS from './pages/alliances/AWS'
import GoogleCloud from './pages/alliances/GoogleCloud'
import Salesforce from './pages/alliances/Salesforce'
import ServiceNow from './pages/alliances/ServiceNow'
import Workday from './pages/alliances/Workday'
import NVIDIA from './pages/alliances/NVIDIA'
import Adobe from './pages/alliances/Adobe'

// Case Studies Imports
import SuccessStories from './pages/case-studies/SuccessStories'
import Testimonials from './pages/case-studies/Testimonials'
import Resources from './pages/case-studies/Resources'
import ByIndustry from './pages/case-studies/ByIndustry'
import ByService from './pages/case-studies/ByService'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen font-sans antialiased text-[#001f3f]">
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
          <Route path="/institute" element={<InstitutePage />} />

          {/* Services Sub-routes */}
          <Route path="/services/audit" element={<Audit />} />
          <Route path="/services/assurance" element={<Assurance />} />
          <Route path="/services/business-process-solutions" element={<BusinessProcessSolutions />} />
          <Route path="/services/customer" element={<Customer />} />
          <Route path="/services/cyber" element={<Cyber />} />
          <Route path="/services/human-capital" element={<HumanCapital />} />
          <Route path="/services/strategy-transactions" element={<StrategyTransactions />} />
          <Route path="/services/sustainability" element={<Sustainability />} />
          <Route path="/services/risk-regulatory-forensic" element={<RiskRegulatoryForensic />} />
          <Route path="/services/legal" element={<Legal />} />
          <Route path="/services/operate" element={<Operate />} />
          <Route path="/services/tax" element={<Tax />} />
          <Route path="/services/deloitte-private" element={<DeloittePrivate />} />
          <Route path="/services/engineering-ai-data" element={<EngineeringAiData />} />
          <Route path="/services/enterprise-technology-performance" element={<EnterpriseTechnologyPerformance />} />
          <Route path="/services/generative-ai" element={<GenerativeAI />} />
          <Route path="/services/global-employer-services" element={<GlobalEmployerServices />} />

          {/* Industry Sub-routes */}
          <Route path="/industry/consumer" element={<Consumer />} />
          <Route path="/industry/energy-resources-industrials" element={<EnergyResourcesIndustrials />} />
          <Route path="/industry/financial-services" element={<FinancialServices />} />
          <Route path="/industry/government-public-services" element={<GovernmentPublicServices />} />
          <Route path="/industry/life-sciences-health-care" element={<LifeSciencesHealthCare />} />
          <Route path="/industry/technology-media-telecommunications" element={<TechnologyMediaTelecommunications />} />
          <Route path="/industry/aerospace-defense" element={<AerospaceDefense />} />
          <Route path="/industry/automotive" element={<Automotive />} />
          <Route path="/industry/real-estate" element={<RealEstate />} />
          <Route path="/industry/logistics" element={<Logistics />} />
          <Route path="/industry/retail" element={<Retail />} />

          {/* Alliances Sub-routes */}
          <Route path="/alliances/sap" element={<SAP />} />
          <Route path="/alliances/oracle" element={<Oracle />} />
          <Route path="/alliances/microsoft" element={<Microsoft />} />
          <Route path="/alliances/aws" element={<AWS />} />
          <Route path="/alliances/google-cloud" element={<GoogleCloud />} />
          <Route path="/alliances/salesforce" element={<Salesforce />} />
          <Route path="/alliances/servicenow" element={<ServiceNow />} />
          <Route path="/alliances/workday" element={<Workday />} />
          <Route path="/alliances/nvidia" element={<NVIDIA />} />
          <Route path="/alliances/adobe" element={<Adobe />} />

          {/* Case Studies Sub-routes */}
          <Route path="/case-studies/success-stories" element={<SuccessStories />} />
          <Route path="/case-studies/testimonials" element={<Testimonials />} />
          <Route path="/case-studies/resources" element={<Resources />} />
          <Route path="/case-studies/by-industry" element={<ByIndustry />} />
          <Route path="/case-studies/by-service" element={<ByService />} />

          {/* Dynamic Catch-all (Optional backup if new data added) */}
          <Route path="/:category/:slug" element={<DynamicSubPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
