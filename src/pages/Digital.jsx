import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: "🤖",
    title: "AI & Machine Learning Advisory",
    desc: "Strategic guidance on deploying AI-driven models for financial risk scoring, fraud detection, and automated compliance monitoring."
  },
  {
    icon: "📊",
    title: "Data Analytics & Business Intelligence",
    desc: "End-to-end analytics strategy — from data architecture to executive dashboards — enabling faster, evidence-based decisions."
  },
  {
    icon: "🔄",
    title: "Digital Transformation",
    desc: "Process re-engineering and technology adoption roadmaps for finance, operations, and compliance functions across mid-to-large enterprises."
  },
  {
    icon: "🔐",
    title: "Cybersecurity & Data Governance",
    desc: "Risk-aligned cyber frameworks, data governance policies, and DPDPA/GDPR compliance advisory for regulated industries."
  },
  {
    icon: "☁️",
    title: "Cloud Financial Systems",
    desc: "Migration and optimisation of ERP, accounting, and reporting systems to cloud platforms — with full data integrity assurance."
  },
  {
    icon: "⚡",
    title: "Automation & Process Intelligence",
    desc: "RPA and workflow automation for audit, reconciliation, reporting, and regulatory submission processes."
  }
]

export default function Digital() {
  return (
    <>
      <Helmet>
        <title>Digital Advisory | Northrop Management Private Limited</title>
        <meta name="description" content="Northrop Management's Digital Advisory practice — AI strategy, data analytics, digital transformation, and cybersecurity advisory for enterprises and institutions." />
        <link rel="canonical" href="https://northropindia.com/digital" />
        <meta property="og:title" content="Digital Advisory | Northrop Management" />
        <meta property="og:description" content="Strategic digital advisory across AI, data analytics, cybersecurity, and enterprise transformation." />
      </Helmet>

      <div className="bg-[#FAF8F3]">
        {/* HERO */}
        <section className="bg-[#0E0E0E] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C4973B]" />
          <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
            <p className="flex items-center gap-3 text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-[#C4973B] mb-6">
              <span className="w-6 h-px bg-[#C4973B]" />
              Digital Practice
            </p>
            <h1 className="font-serif text-[40px] lg:text-[64px] leading-[1.07] text-white tracking-tight mb-8 max-w-3xl">
              Advisory for the{" "}
              <em className="text-[#D9AF58] italic">Digital Age.</em>
            </h1>
            <p className="text-[16px] leading-[1.8] text-white/40 font-sans max-w-xl mb-12">
              We combine institutional rigour with technology intelligence to help enterprises navigate AI adoption, data governance, and digital transformation — with the same precision we apply to financial advisory.
            </p>
            <a
              href="mailto:Business@NorthropIndia.com"
              className="inline-block bg-[#C4973B] text-white text-[11px] font-sans font-medium tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#D9AF58] transition-colors duration-200"
            >
              Engage With Us
            </a>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
          <div className="mb-14">
            <p className="flex items-center gap-3 text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-[#C4973B] mb-5">
              <span className="w-6 h-px bg-[#C4973B]" />
              Our Digital Services
            </p>
            <h2 className="font-serif text-[30px] lg:text-[40px] leading-[1.2] text-[#0E0E0E] tracking-tight">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <article
                key={svc.title}
                className="bg-white border border-[#E8E4DC] p-8 hover:border-[#C4973B]/60 transition-colors duration-300 group"
              >
                <span className="text-3xl mb-5 block">{svc.icon}</span>
                <h3 className="font-serif text-[18px] text-[#0E0E0E] mb-3 leading-snug">{svc.title}</h3>
                <p className="text-[14px] leading-[1.75] text-[#5A5A5A] font-sans">{svc.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="bg-[#0E1C2F]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-[24px] lg:text-[30px] text-white mb-2">Ready to begin a digital mandate?</h2>
              <p className="text-[14px] text-white/40 font-sans">Let's discuss your requirements in complete confidence.</p>
            </div>
            <a
              href="mailto:Business@NorthropIndia.com"
              className="shrink-0 bg-[#C4973B] text-white text-[11px] font-sans font-medium tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#D9AF58] transition-colors duration-200"
            >
              Contact Our Team
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
