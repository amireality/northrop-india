import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 
  ShieldAlert, 
  Briefcase, 
  Search, 
  Scale, 
  Target,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicePillar = ({ icon: Icon, title, description, links, delay }) => (
  <div className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.08] transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2">
    <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
      <Icon className="text-blue-400" size={30} />
    </div>
    <h3 className="text-2xl font-serif font-bold text-white mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <div className="space-y-3">
      {links.map((link, i) => (
        <Link 
          key={i} 
          to={link.url} 
          className="flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400 transition-colors group/link"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/link:scale-150 transition-transform" />
          {link.title}
        </Link>
      ))}
    </div>
  </div>
);

export default function WhatWeDo() {
  const pillars = [
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Navigating the complexities of global accounting standards with precision. We bridge the gap between regulatory requirements and institutional clarity.",
      links: [
        { title: "Accounting Advisory", url: "/services/accounting-advisory-services" },
        { title: "IFRS & Ind-AS Implementation", url: "/services/ifrs-ind-as-implementation" },
        { title: "Financial Statement Prep", url: "/services/financial-statement-preparation" }
      ]
    },
    {
      icon: ShieldAlert,
      title: "Risk Audit & Assurance",
      description: "Transforming risk into a strategic asset. Our independent assessments provide boardrooms with the confidence to move forward in uncertain markets.",
      links: [
        { title: "Internal Audit", url: "/services/internal-audit" },
        { title: "Risk Management", url: "/services/risk-management" },
        { title: "GRC Compliance", url: "/services/grc-control-compliance" }
      ]
    },
    {
      icon: Search,
      title: "Forensic Investigations",
      description: "Uncovering truth through deep forensic rigor. We combine human intelligence with digital forensic mastery to safeguard institutional integrity.",
      links: [
        { title: "Asset Tracing", url: "/services/asset-tracing-investigation" },
        { title: "Digital Forensics", url: "/services/digital-forensic" },
        { title: "AML & KYC Sanctions", url: "/services/aml-kyc-sanctions" }
      ]
    },
    {
      icon: Briefcase,
      title: "Transaction Advisory",
      description: "Strategic deal execution for the modern capital cycle. From buy-side diligence to valuation, we optimize ever step of the M&A process.",
      links: [
        { title: "Buy-side/Sell-side FDD", url: "/services/buy-side-fdd" },
        { title: "Quality of Earnings", url: "/services/quality-of-earnings" },
        { title: "Lender Due Diligence", url: "/services/lender-due-diligence" }
      ]
    },
    {
      icon: Scale,
      title: "Tax & Regulatory",
      description: "Managing fiscal complexity in a shifting global landscape. We align tax strategy with sustainable corporate governance and statutory hygiene.",
      links: [
        { title: "Fiscal Structuring", url: "/services/taxation" },
        { title: "Regulatory Compliance", url: "/services/risk-regulatory-forensic" },
        { title: "CSR Consulting", url: "/services/csr-consulting" }
      ]
    },
    {
      icon: Target,
      title: "Management Consulting",
      description: "Driving operational excellence and structural optimization. We partner with founders and boards to navigate scaling and transformation.",
      links: [
        { title: "Business Strategy", url: "/services/business-strategy-consulting" },
        { title: "Impact Assessment", url: "/services/impact-assessment" },
        { title: "BPS Solutions", url: "/services/business-process-solutions" }
      ]
    }
  ];

  return (
    <div className="bg-[#111a22] min-h-screen text-white overflow-x-hidden">
      <Helmet>
        <title>What We Do | Integrated Advisory Mastery | Northrop India</title>
        <meta name="description" content="Explore Northrop's multidisciplinary mastery across 6 core pillars: Financial Reporting, Risk & Audit, Transaction Advisory, Forensics, Tax, and Management Consulting." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-blue-400 uppercase tracking-[0.3em] font-bold text-xs mb-8">
            <div className="w-10 h-[1px] bg-blue-400" />
            Capabilities
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold italic leading-[0.9] text-white/90 mb-12">
            Multidisciplinary <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500">Mastery.</span>
          </h1>
          <p className="max-w-3xl text-xl text-slate-400 leading-relaxed font-light">
            Northrop Management operates at the intersection of regulatory rigor and strategic growth. Our integrated framework ensures that every institutional challenge is met with a multivalent solution.
          </p>
        </div>
      </section>

      {/* The 6 Pillars Grid */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <ServicePillar key={i} {...pillar} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* The Northrop Integrated Advantage */}
      <section className="py-32 px-6 md:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-600/20 to-teal-500/20 p-1 rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-[#111a22] rounded-[1.4rem] p-12 relative overflow-hidden group">
                  <div className="absolute -top-[40%] -right-[40%] w-[200px] h-[200px] bg-blue-500/20 blur-3xl rounded-full" />
                  
                  <div className="space-y-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                        <Cpu size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">AI-Powered Diligence</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Leveraging advanced analytics to uncover patterns that manual methods miss.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400">
                        <Globe2 size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Cross-Border Mastery</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">A specialized lens for companies navigating global expansion and multi-jurisdictional tax.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 border-t border-white/5 pt-8 mt-8">
                      <div className="text-center w-full">
                        <div className="text-4xl font-serif italic text-blue-400 mb-2">360°</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Integrated Vision</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Why We Differ</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                An Integrated Philosophy for <br />
                <span className="italic text-slate-400">Institutional Excellence.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                Traditional firms work in silos. We treat your institution as a single complex organism. A tax decision impacts capital structure; a forensic finding reshapes internal audit. 
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  "Independent Oversight with Surgeon-like Precision",
                  "Founder-Led Accountability for Every Mandate",
                  "AI-Infused Rigor Combined with Human Wisdom",
                  "Bespoke Frameworks, Not Generic Checklists"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <CheckCircle2 className="text-blue-500" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-white font-bold tracking-widest text-xs uppercase group"
              >
                Connect with our board 
                <ArrowRight size={16} className="text-blue-500 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pt-20 pb-32 px-6 text-center bg-gradient-to-t from-black/40 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to secure your <span className="text-blue-400">institutional future?</span></h2>
          <Link 
            to="/contact" 
            className="bg-white text-[#111a22] px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-400 hover:text-white transition-all shadow-2xl"
          >
            Request Mandate Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
