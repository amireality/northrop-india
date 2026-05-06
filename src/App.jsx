import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
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

import InstitutePage from './pages/Institute'
import Advisory from './pages/Advisory'
import Contact from './pages/Contact'
import Insights from './pages/Insights'
import NotFound from './pages/NotFound'
import Digital from './pages/Digital'
import PrivacyPolicy from './pages/PrivacyPolicy'


// Services Imports
import RiskManagement from './pages/services/RiskManagement'
import DueDiligence from './pages/services/DueDiligence'
import ForensicInvestigations from './pages/services/ForensicInvestigations'
import Taxation from './pages/services/Taxation'
import TransactionAdvisory from './pages/services/TransactionAdvisory'
import GrantFunding from './pages/services/GrantFunding'
import RiskAuditAssurance from './pages/financialreport/RiskAuditAssurance'
import AccountingAdvisoryServices from './pages/financialreport/AccountingAdvisoryServices'
import FinancialStatementPreparation from './pages/financialreport/FinancialStatementPreparation'
import IfrsIndAsImplementation from './pages/financialreport/IfrsIndAsImplementation'
import AgreedUponProcedures from './pages/financialreport/AgreedUponProcedures'
import IndAsApplicability from './pages/financialreport/IndAsApplicability'
import InternalAudit from './pages/riskmanagment/InternalAudit'
import InternalAuditTransformation from './pages/riskmanagment/InternalAuditTransformation'
import EnterpriseRiskManagement from './pages/riskmanagment/EnterpriseRiskManagement'
import RiskControlRegisters from './pages/riskmanagment/RiskControlRegisters'


import BuySideFdd from './pages/duediligence/BuySideFdd'
import SellSideFdd from './pages/duediligence/SellSideFdd'
import VendorDd from './pages/duediligence/VendorDd'
import LenderDueDiligence from './pages/duediligence/LenderDueDiligence'
import RedFlagReport from './pages/duediligence/RedFlagReport'
import FraudIndicators from './pages/duediligence/FraudIndicators'
import MissingDocsReport from './pages/duediligence/MissingDocsReport'
import MgmtAccountScrutiny from './pages/duediligence/MgmtAccountScrutiny'
import RelatedPartyReview from './pages/duediligence/RelatedPartyReview'
import QualityOfEarnings from './pages/duediligence/QualityOfEarnings'
import ForensicAccountingFraud from './pages/forencisinvestigation/ForensicAccountingFraud'
import LawEnforcementSupport from './pages/forencisinvestigation/LawEnforcementSupport'
import ForensicAuditRbi from './pages/forencisinvestigation/ForensicAuditRbi'
import TransactionAuditIbc from './pages/forencisinvestigation/TransactionAuditIbc'
import AntiBriberyCorruption from './pages/forencisinvestigation/AntiBriberyCorruption'
import AssetTracingInvestigation from './pages/forencisinvestigation/AssetTracingInvestigation'
import AmlKycSanctions from './pages/forencisinvestigation/AmlKycSanctions'
import DigitalForensic from './pages/forencisinvestigation/DigitalForensic'



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
import EngineeringAiData from './pages/services/EngineeringAiData'
import EnterpriseTechnologyPerformance from './pages/services/EnterpriseTechnologyPerformance'
import GenerativeAI from './pages/services/GenerativeAI'
import GlobalEmployerServices from './pages/services/GlobalEmployerServices'






import Foundation from './pages/Foundation'
import About from './components/home/About'
import MaAdvisory from './pages/Transaction Advisory/MaAdvisory'
import Restructuring from './pages/Transaction Advisory/Restructuring'
import ValuationModling from './pages/Transaction Advisory/ValuationModling'
import PostMergeintregetion from './pages/Transaction Advisory/PostMergeintregetion'
import CapitalStructuring from './pages/Transaction Advisory/Capital-Structuring'
import CorporateTax from './pages/taxaction/CorporateTax'
import InternationalTax from './pages/taxaction/InternationalTax'
import TransferPricing from './pages/taxaction/TransferPricing'
import IndirectTax from './pages/taxaction/IndirectTax'
import PersonalTax from './pages/taxaction/PersonalTax'
import TaxControversy from './pages/taxaction/TaxControversy'

import BusinessStrategyConsulting from './pages/grandfunding/BusinessStrategyConsulting'
import ImpactAssessmentPage from './pages/grandfunding/ImpactAssessment'
import ResearchDocumentationPage from './pages/grandfunding/ResearchDocumentation'
import GrantManagementUtilisationPage from './pages/grandfunding/GrantManagementUtilisation'
import ProgramManagementConsulting from './pages/grandfunding/ProgramManagementConsulting'
import CsrConsulting from './pages/grandfunding/CsrConsulting'
import GrcControlCompliance from './pages/grandfunding/GrcControlCompliance'
import IfcIcfrIndia from './pages/riskmanagment/IfcIcfrIndia'
import ProcessDesignDocumentation from './pages/riskmanagment/ProcessDesignDocumentation'
import Companyprofile from './pages/Companyprofile'
import CorporateStrategy from './subpages/Pillar_1_corporate_strategy'
import CapitalAdvisory from './subpages/Pillar_2_capital_advisory'
import RiskGovernance from './subpages/Pillar_3_risk_governance'
import FinancialControls from './subpages/Pillar_4_financial_controls'
import MaIntegration from './subpages/Pillar_5_ma_integration'
import GlobalTaxStructuring from './subpages/Pillar_6_global_tax_structuring'
import DigitalSovereignty from './subpages/Pillar_7_digital_sovereignty'
import IpoReadiness from './subpages/Pillar_8_ipo_readiness'

// Management Consulting Subpages
import Enterprisestrategyvaluearchitecture from './pages/managementconsulting/Enterprisestrategyvaluearchitecture'
import Growthstructuringmarketpositioning from './pages/managementconsulting/Growthstructuringmarketpositioning'
import CorporateGovernanceBoardAdvisory from './pages/managementconsulting/CorporateGovernanceBoardAdvisory'
import OrganizationalRedesignCapabilityBuilding from './pages/managementconsulting/OrganizationalRedesignCapabilityBuilding'

import PerformanceTransformationMarginExpansion from './pages/managementconsulting/PerformanceTransformationMarginExpansion'
import FoundertoInstitutionTransitionAdvisory from './pages/managementconsulting/FoundertoInstitutionTransitionAdvisory'
import ConglomerateStrategyHoldingStructures from './pages/managementconsulting/ConglomerateStrategyHoldingStructures'
import PortfolioRationalizationBusinessExits from './pages/managementconsulting/PortfolioRationalizationBusinessExits'

// Financial Advisory Subpages
import CapitalStructureDebtArchitecture from './pages/financialadvisory/CapitalStructureDebtArchitecture'
import InvestorRelationsEquityPositioning from './pages/financialadvisory/InvestorRelationsEquityPositioning'
import PreTransactionFinancialReadiness from './pages/financialadvisory/PreTransactionFinancialReadiness'
import PrivateEquityGrowthCapitalAdvisory from './pages/financialadvisory/PrivateEquityGrowthCapitalAdvisory'
import WorkingCapitalLiquidityOptimization from './pages/financialadvisory/WorkingCapitalLiquidityOptimization'
import EBITDANormalizationValuationAdvisory from './pages/financialadvisory/EBITDANormalizationValuationAdvisory'
import CrossBorderFinancialStructuring from './pages/financialadvisory/CrossBorderFinancialStructuring'
import DistressedAssetTurnaroundAdvisory from './pages/financialadvisory/DistressedAssetTurnaroundAdvisory'
import BankingFinancialServices from './subpages/StrategicClient/BankingFinancialServices'
import ManufacturingIndustrials from './subpages/StrategicClient/ManufacturingIndustrials'
import RealEstateInfrastructure from './subpages/StrategicClient/RealEstateInfrastructure'
import NonProfitGrantAdvisory from './subpages/StrategicClient/NonProfitGrantAdvisory'
import EnergyUtilities from './subpages/StrategicClient/EnergyUtilities'
import TextilesConsumer from './subpages/StrategicClient/TextilesConsumer'
import IndiasNextCapitalCycle from './pages/insights/IndiasNextCapitalCycle'


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen   antialiased">
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
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/company-profile" element={<Companyprofile />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />


          {/* Services Sub-routes */}
          {/* <Route path="/services/financial-reporting" element={<FinancialReporting />} /> */}

          <Route path="/services/risk-management" element={<RiskManagement />} />
          <Route path="/services/due-diligence" element={<DueDiligence />} />
          <Route path="/services/forensic-investigations" element={<ForensicInvestigations />} />
          <Route path="/services/taxation" element={<Taxation />} />
          <Route path="/services/transaction-advisory" element={<TransactionAdvisory />} />
          <Route path="/services/grant-funding" element={<GrantFunding />} />


          <Route path="/services/risk-audit-assurance" element={<RiskAuditAssurance />} />
          <Route path="/services/accounting-advisory-services" element={<AccountingAdvisoryServices />} />
          <Route path="/services/financial-statement-preparation" element={<FinancialStatementPreparation />} />
          <Route path="/services/ifrs-ind-as-implementation" element={<IfrsIndAsImplementation />} />
          <Route path="/services/agreed-upon-procedures" element={<AgreedUponProcedures />} />
          <Route path="/services/ind-as-applicability" element={<IndAsApplicability />} />






          <Route path="/services/buy-side-fdd" element={<BuySideFdd />} />
          <Route path="/services/sell-side-fdd" element={<SellSideFdd />} />
          <Route path="/services/vendor-dd" element={<VendorDd />} />
          <Route path="/services/lender-due-diligence" element={<LenderDueDiligence />} />
          <Route path="/services/red-flag-report" element={<RedFlagReport />} />
          <Route path="/services/fraud-indicators" element={<FraudIndicators />} />
          <Route path="/services/missing-docs-report" element={<MissingDocsReport />} />
          <Route path="/services/mgmt-account-scrutiny" element={<MgmtAccountScrutiny />} />
          <Route path="/services/related-party-review" element={<RelatedPartyReview />} />
          <Route path="/services/quality-of-earnings" element={<QualityOfEarnings />} />


          <Route path="/services/forensic-accounting-fraud" element={<ForensicAccountingFraud />} />
          <Route path="/services/law-enforcement-support" element={<LawEnforcementSupport />} />
          <Route path="/services/forensic-audit-rbi" element={<ForensicAuditRbi />} />
          <Route path="/services/transaction-audit-ibc" element={<TransactionAuditIbc />} />
          <Route path="/services/anti-bribery-corruption" element={<AntiBriberyCorruption />} />
          <Route path="/services/asset-tracing-investigation" element={<AssetTracingInvestigation />} />
          <Route path="/services/aml-kyc-sanctions" element={<AmlKycSanctions />} />
          <Route path="/services/digital-forensic" element={<DigitalForensic />} />




          <Route path="/services/internal-audit" element={<InternalAudit />} />
          <Route path="/services/internal-audit-transformation" element={<InternalAuditTransformation />} />
          <Route path="/services/enterprise-risk-management" element={<EnterpriseRiskManagement />} />
          <Route path="/services/risk-control-registers" element={<RiskControlRegisters />} />
          <Route path="/services/ifc-icfr-india" element={<IfcIcfrIndia />} />
          <Route path="/services/process-design-documentation" element={<ProcessDesignDocumentation />} />






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
          <Route path="/services/engineering-ai-data" element={<EngineeringAiData />} />
          <Route path="/services/enterprise-technology-performance" element={<EnterpriseTechnologyPerformance />} />
          <Route path="/services/generative-ai" element={<GenerativeAI />} />
          <Route path="/services/global-employer-services" element={<GlobalEmployerServices />} />


          <Route path="/services/corporate-tax" element={<CorporateTax />} />
          <Route path="/services/international-tax" element={<InternationalTax />} />
          <Route path="/services/transfer-pricing" element={<TransferPricing />} />
          <Route path="/services/indirect-tax" element={<IndirectTax />} />
          <Route path="/services/personal-tax" element={<PersonalTax />} />
          <Route path="/services/tax-controversy" element={<TaxControversy />} />


          <Route path="/services/restructuring" element={<Restructuring />} />
          <Route path="/services/m-a-advisory" element={<MaAdvisory />} />
          <Route path="/services/valuation" element={<ValuationModling />} />
          <Route path="/services/post-merger-integration" element={<PostMergeintregetion />} />
          <Route path="/services/capital-structuring" element={<CapitalStructuring />} />


          <Route path="/services/business-strategy-consulting" element={<BusinessStrategyConsulting />} />
          <Route path="/services/impact-assessment" element={<ImpactAssessmentPage />} />
          <Route path="/services/research-documentation" element={<ResearchDocumentationPage />} />
          <Route path="/services/grant-management-utilisation" element={<GrantManagementUtilisationPage />} />
          <Route path="/services/program-management-consulting" element={<ProgramManagementConsulting />} />
          <Route path="/services/csr-consulting" element={<CsrConsulting />} />

          <Route path="/services/grc-control-compliance" element={<GrcControlCompliance />} />

          {/* Pillar subpages */}
          <Route path="/pillars/corporate-strategy" element={<CorporateStrategy />} />
          <Route path="/pillars/capital-advisory" element={<CapitalAdvisory />} />
          <Route path="/pillars/risk-governance" element={<RiskGovernance />} />
          <Route path="/pillars/financial-controls" element={<FinancialControls />} />
          <Route path="/pillars/ma-integration" element={<MaIntegration />} />
          <Route path="/pillars/global-tax-structuring" element={<GlobalTaxStructuring />} />
          <Route path="/pillars/digital-sovereignty" element={<DigitalSovereignty />} />
          <Route path="/pillars/ipo-readiness" element={<IpoReadiness />} />

          {/* Management Consulting Subpages */}
          <Route path="/services/enterprise-strategy-value-architecture" element={<Enterprisestrategyvaluearchitecture />} />
          <Route path="/services/growth-structuring-market-positioning" element={<Growthstructuringmarketpositioning />} />
          <Route path="/services/corporate-governance-board-advisory" element={<CorporateGovernanceBoardAdvisory />} />
          <Route path="/services/organizational-redesign-capability-building" element={<OrganizationalRedesignCapabilityBuilding />} />
          <Route path="/services/portfolio-rationalization-business-exits" element={<PortfolioRationalizationBusinessExits />} />
          <Route path="/services/performance-transformation-margin-expansion" element={<PerformanceTransformationMarginExpansion />} />
          <Route path="/services/founder-to-institution-transition-advisory" element={<FoundertoInstitutionTransitionAdvisory />} />
          <Route path="/services/conglomerate-strategy-holding-structures" element={<ConglomerateStrategyHoldingStructures />} />

          {/* Financial Advisory Subpages */}
          <Route path="/services/capital-structure" element={<CapitalStructureDebtArchitecture />} />
          <Route path="/services/investor-relations" element={<InvestorRelationsEquityPositioning />} />
          <Route path="/services/pre-transaction-readiness" element={<PreTransactionFinancialReadiness />} />
          <Route path="/services/private-equity-advisory" element={<PrivateEquityGrowthCapitalAdvisory />} />
          <Route path="/services/working-capital" element={<WorkingCapitalLiquidityOptimization />} />
          <Route path="/services/ebitda-valuation" element={<EBITDANormalizationValuationAdvisory />} />
          <Route path="/services/cross-border-structuring" element={<CrossBorderFinancialStructuring />} />
          <Route path="/services/distressed-asset-turnaround" element={<DistressedAssetTurnaroundAdvisory />} />
          <Route path="/insights/indias-next-capital-cycle" element={<IndiasNextCapitalCycle />} />





          {/* Industry Pages */}
          <Route path="/services/banking-financial-services" element={<BankingFinancialServices />} />
          <Route path="/services/manufacturing-industrials" element={<ManufacturingIndustrials />} />
          <Route path="/services/real-estate-infrastructure" element={<RealEstateInfrastructure />} />
          <Route path="/services/non-profit-grant-advisory" element={<NonProfitGrantAdvisory />} />
          <Route path="/services/energy-utilities" element={<EnergyUtilities />} />
          <Route path="/services/textiles-consumer" element={<TextilesConsumer />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>





      <Footer />
    </BrowserRouter>
  )
}

export default App
