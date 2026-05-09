import React from 'react';
import { Link } from 'react-router-dom';

const ReportCardMini = ({ img, tags, title, summary, pages, delay }) => (
  <div className={`bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group sr ${delay}`}>
    <div className="relative h-[160px] overflow-hidden">
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} alt={title} loading="lazy" />
      <div className="absolute top-3 left-3 flex gap-2">
        {tags.map((tag, i) => (
          <span key={i} className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider ${tag.className}`}>
            {tag.label}
          </span>
        ))}
      </div>
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <h4 className="font-serif text-[16px] font-bold text-[#1A2B45] leading-[1.3] mb-3 group-hover:text-[#C5963A] transition-colors">
        {title}
      </h4>
      <p className="text-[12px] text-gray-500 leading-relaxed mb-6 flex-1">
        {summary}
      </p>
      <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{pages}</span>
        <Link to="/contact" className="px-5 py-2.5 rounded-full border border-gray-200 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1A2B45] hover:bg-[#1A2B45] hover:text-white transition-all duration-300 flex items-center gap-2 group/btn shadow-sm">
          REQUEST
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </Link>


      </div>
    </div>
  </div>
);

const SectionHeader = ({ categories }) => (
  <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-10 sr">
    {categories.map((cat, i) => (
      <React.Fragment key={i}>
        <div className="flex items-center gap-4">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${cat.className}`}>
            {cat.label}
          </span>
          <h3 className="text-[18px] font-serif font-bold text-[#1A2B45] whitespace-nowrap">{cat.title}</h3>
        </div>
        {i < categories.length - 1 && (
          <div className="hidden lg:block h-[1px] bg-gray-200 flex-1 min-w-[20px]"></div>
        )}
      </React.Fragment>
    ))}
  </div>
);

const HomeReportsV3 = () => {
  const row1Reports = [
    {
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'Direct Tax', className: 'bg-green-50 text-green-700' }, { label: '2026', className: 'bg-[#F8F1E0] text-[#8A6C1A]' }],
      title: 'Income Tax Act 2025: Corporate Transition Guide',
      summary: 'Section mapping, tax year implications, revised return forms, and compliance action checklist for FY2025–26 finance teams.',
      pages: '34 pages',
      delay: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'GST', className: 'bg-green-50 text-green-700' }, { label: '2026', className: 'bg-[#F8F1E0] text-[#8A6C1A]' }],
      title: 'GST 2.0 Implementation Playbook',
      summary: 'New slab navigation, ITC impact analysis, e-invoice compliance, and GSTAT dispute resolution guidance for Indian corporates.',
      pages: '28 pages',
      delay: 'd1'
    },
    {
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'IBC', className: 'bg-purple-50 text-purple-700' }, { label: '2026', className: 'bg-[#F8F1E0] text-[#8A6C1A]' }],
      title: 'IBC Resolution Handbook 2026',
      summary: 'Strategy, timelines, and creditor rights across the full CIRP lifecycle under the amended insolvency framework.',
      pages: '30 pages',
      delay: 'd2'
    },
    {
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'M&A', className: 'bg-purple-50 text-purple-700' }],
      title: 'Mid-Market M&A: Deal Structuring & Valuation Guide',
      summary: 'PPA methodology, earn-out mechanics, and regulatory approvals for mid-market control transactions in India\'s evolving deal landscape.',
      pages: '26 pages',
      delay: 'd3'
    }
  ];

  const row2Reports = [
    {
      img: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'Ind AS', className: 'bg-teal-50 text-teal-700' }],
      title: 'Ind AS Amendment Digest: CFO Action Checklist FY2025–26',
      summary: 'Disclosure obligations, XBRL taxonomy changes, and fair value measurement updates under MCA\'s 2026 amendments.',
      pages: '22 pages',
      delay: ''
    },
    {
      img: '/hometaxcation/taxcation.jpg',
      tags: [{ label: 'BRSR', className: 'bg-teal-50 text-teal-700' }],
      title: 'BRSR Core Assurance Guide for Listed Companies',
      summary: 'KPI verification methodology and SEBI compliance obligations for assurance on sustainability disclosures across top listed entities.',
      pages: '20 pages',
      delay: 'd1'
    },
    {
      img: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'Internal Audit', className: 'bg-orange-50 text-orange-700' }],
      title: 'Agile Internal Audit: Continuous Assurance Framework',
      summary: 'Risk-responsive methodology, board communication templates, and stakeholder reporting design for in-house and co-sourced audit teams.',
      pages: '20 pages',
      delay: 'd2'
    },
    {
      img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'Credit Risk', className: 'bg-orange-50 text-orange-700' }],
      title: 'NPA Early Warning Systems: A Lender\'s Monitoring Playbook',
      summary: 'Covenant surveillance, utilisation trend analysis, and litigation signal integration for NBFC and bank credit risk teams.',
      pages: '18 pages',
      delay: 'd3'
    },
    {
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'Strategy', className: 'bg-sky-50 text-sky-700' }],
      title: 'India Growth Strategy 2026: Tier-2 Cities, GCCs & Supply Chain Resilience',
      summary: 'Strategic framework for companies expanding geographies, building GCC infrastructure, or diversifying supply chains in India\'s evolving landscape.',
      pages: '24 pages',
      delay: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'AI Readiness', className: 'bg-sky-50 text-sky-700' }],
      title: 'AI Readiness & Organisational Design for Indian Enterprises',
      summary: 'Governance structures, data ownership models, and change frameworks for deploying AI in finance, operations, and compliance functions.',
      pages: '20 pages',
      delay: 'd1'
    },
    {
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'NGO Governance', className: 'bg-green-50 text-green-700' }],
      title: 'NGO Financial Governance: FCRA, PMLA & CSR Compliance Handbook',
      summary: 'Audit-ready documentation standards, utilisation reporting frameworks, and FCRA renewal checklist for NGOs managing institutional grants.',
      pages: '26 pages',
      delay: 'd2'
    },
    {
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600&h=320',
      tags: [{ label: 'ESG Capital', className: 'bg-green-50 text-green-700' }],
      title: 'ESG Disclosure & Ratings: BRSR, SEBI Framework & Green Finance Access',
      summary: 'How Indian companies build credible ESG infrastructure, achieve favourable ratings, and access sustainability-linked debt markets.',
      pages: '22 pages',
      delay: 'd3'
    }
  ];

  return (
    <section className="py-20 bg-gray-50/30" id="reports">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        
        {/* Row 1: Taxation + Transaction */}
        <div className="mb-20">
          <SectionHeader categories={[
            { label: 'Taxation', title: 'Taxation & Regulatory', className: 'bg-green-50 text-green-700' },
            { label: 'Transaction', title: 'Transaction Advisory', className: 'bg-purple-50 text-purple-700' }
          ]} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {row1Reports.map((rep, i) => (
              <ReportCardMini key={i} {...rep} />
            ))}
          </div>
        </div>

        {/* Row 2: Reporting + Assurance + Consulting + Grants */}
        <div>
          <SectionHeader categories={[
            { label: 'Reporting', title: 'Financial Reporting', className: 'bg-teal-50 text-teal-700' },
            { label: 'Assurance', title: 'Assurance & Risk', className: 'bg-orange-50 text-orange-700' },
            { label: 'Consulting', title: 'Consulting', className: 'bg-sky-50 text-sky-700' },
            { label: 'Grants', title: 'Grants & ESG', className: 'bg-green-50 text-green-700' }
          ]} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {row2Reports.map((rep, i) => (
              <ReportCardMini key={i} {...rep} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeReportsV3;