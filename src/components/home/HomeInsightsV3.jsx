import { useState } from 'react';
import { Link } from 'react-router-dom';

const InsightCard = ({ data }) => (
  <Link
    to={data.link || (data.slug ? `/reports/${data.slug}` : "/contact")}
    className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group cursor-pointer"
  >
    <div className="relative h-40 overflow-hidden">
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={data.img}
        alt={data.title}
        loading="lazy"
      />
      <div className="absolute top-4 left-4">
        <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider ${data.tagClass} shadow-sm`}>
          {data.categoryName}
        </span>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-semibold">
        {data.date}
      </div>
      <h3 className="font-serif text-[17px] font-bold text-[#1A2B45] leading-[1.3] mb-4 group-hover:text-[#C5963A] transition-colors">
        {data.title}
      </h3>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-6 flex-1 line-clamp-3">
        {data.text}
      </p>
      <div className="pt-5 border-t border-gray-50 flex justify-between items-center">
        <div className="px-5 py-2 rounded-full border border-gray-100 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1A2B45] group-hover:bg-[#1A2B45] group-hover:text-white transition-all duration-300 flex items-center gap-2">
          READ
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </div>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{data.readTime}</span>
      </div>
    </div>
  </Link>
);

const HomeInsightsV3 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Topics' },
    { id: 'due-diligence', label: 'Due Diligence' },
    { id: 'forensic', label: 'Forensic' },
    { id: 'taxation', label: 'Taxation' },
    { id: 'transaction', label: 'Transaction Advisory' },
    { id: 'reporting', label: 'Financial Reporting' },
    { id: 'assurance', label: 'Assurance & Risk' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'grants', label: 'Grants & ESG' }
  ];

  const insights = [
    { id: 1, slug: 'india-ma-2025', category: 'due-diligence', categoryName: 'Due Diligence', tagClass: 'bg-blue-50 text-blue-600', date: 'Apr 2026', img: '/reportimg/india-ma-2025.jpg', title: 'India M&A Crosses US$50B — AI Now Cuts FDD Review Time by 50%', text: 'Infrastructure-led deals and AI-enabled diligence tools are reshaping how mid-market acquirers assess risk and valuation.', readTime: '5 min' },
    { id: 2, link: '/insights/esg-due-diligence-ma-india', category: 'due-diligence', categoryName: 'Due Diligence', tagClass: 'bg-blue-50 text-blue-600', date: 'Feb 2026', img: '/reportimg/esg.avif', title: 'ESG Is Now a Deal Essential in Every M&A Review — Not a Post-Signing Consideration', text: 'Buyers who skip ESG diligence face significant post-close exposure. Sustainability performance is being priced into mid-market valuations.', readTime: '4 min' },
    { id: 3, slug: 'rbi-bank-fraud-2025', category: 'forensic', categoryName: 'Forensic', tagClass: 'bg-red-50 text-red-600', date: 'Apr 2026', img: '/reportimg/rbi-bank-fraud-2025.jpg', title: 'RBI Reports Bank Fraud Rising to ₹36,014 Crore — Three Times the Prior Year', text: 'Organisations must move from reactive investigation to continuous fraud surveillance. The surge demands forensic frameworks beyond statutory audit.', readTime: '5 min' },
    { id: 4, slug: 'icai-fais-standards-2025', category: 'forensic', categoryName: 'Forensic', tagClass: 'bg-red-50 text-red-600', date: 'Mar 2026', img: 'reportimg/icai-fais.png', title: 'ICAI\'s FAIS Standards: 20 Obligations Every Audit Committee Must Now Understand', text: 'From fraud hypothesis to chain-of-custody — FAIS compliance is mandatory for CAs and is redefining forensic governance at board level.', readTime: '6 min' },
    { id: 5, link: '/insights/income-tax-act-2025', category: 'taxation', categoryName: 'Taxation', tagClass: 'bg-green-50 text-green-600', date: 'Apr 2026', img: '/reportimg/incometax.avif', title: 'Income Tax Act 2025: What the "Tax Year" Concept Means for Corporates from April 2026', text: 'The landmark restructuring demands a full enterprise review of tax positions. Higher exemptions and new forms take effect immediately.', readTime: '6 min' },
    { id: 6, link: '/insights/gst-new-structure', category: 'taxation', categoryName: 'Taxation', tagClass: 'bg-green-50 text-green-600', date: 'Mar 2026', img: '/reportimg/gst-new-structure.avif', title: 'GST 2.0: India\'s New Four-Slab Structure and What It Means for Business Cash Flows', text: 'Rationalized slabs, eliminated compensation cess, and hard e-invoice validation are catching businesses unprepared across supply chains.', readTime: '5 min' },
    { id: 7, link: '/insights/ibc-nine-years', category: 'transaction', categoryName: 'Transaction', tagClass: 'bg-purple-50 text-purple-600', date: 'Apr 2026', img: '/reportimg/ibc.avif', title: 'IBC at Nine Years: Stronger Credit Discipline, Faster Revival, and the 2025 Amendment', text: 'The insolvency framework has materially improved NPA recovery. The 2025 Amendment expands resolution pathways for MSME insolvencies.', readTime: '6 min' },
    { id: 8, link: '/insights/india-ma-2025', category: 'transaction', categoryName: 'Transaction', tagClass: 'bg-purple-50 text-purple-600', date: 'Mar 2026', img: '/reportimg/india-ma.avif', title: 'India M&A 2025: Fewer Deals, 18% Higher Value — Execution Certainty Over Financial Engineering', text: 'Mid-market control deals are dominating. PE is deploying capital with greater discipline, reshaping how advisory mandates are structured.', readTime: '5 min' },
    { id: 9, link: '/insights/mca-accounting-standards', category: 'reporting', categoryName: 'Reporting', tagClass: 'bg-teal-50 text-teal-600', date: 'Apr 2026', img: '/reportimg/mca-accounting.avif', title: 'MCA\'s Accounting Standards Amendment Rules 2026 — What CFOs Must Act On Immediately', text: 'Revenue recognition, instrument classification, and disclosure changes take effect this quarter. Delayed review risks Q1 restatements.', readTime: '6 min' },
    { id: 10, link: '/insights/brsr-core-assurance', category: 'reporting', categoryName: 'Reporting', tagClass: 'bg-teal-50 text-teal-600', date: 'Feb 2026', img: '/reportimg/brsr-core.avif', title: 'BRSR Core Assurance Is Now Mandatory — and SEBI Is Reading What Gets Disclosed', text: 'Third-party assurance on ESG KPIs is no longer optional for India\'s top 1,000 listed companies. Vague disclosures attract exchange scrutiny.', readTime: '5 min' },
    { id: 11, category: 'assurance', link:"/insights/traditional-to-agile", categoryName: 'Assurance', tagClass: 'bg-orange-50 text-orange-600', date: 'Apr 2026', img: '/reportimg/from-tradition.avif', title: 'From Traditional to Agile: Internal Audit\'s New Mandate in India\'s Regulatory Environment', text: 'Boards demand real-time risk intelligence. Static annual audit plans are giving way to continuous, risk-responsive assurance frameworks.', readTime: '5 min' },
    { id: 12, link: '/insights/dpdp-rules-2025', category: 'assurance', categoryName: 'Assurance', tagClass: 'bg-orange-50 text-orange-600', date: 'Mar 2026', img: '/reportimg/dpdp-rules.avif', title: 'DPDP Rules 2025: Data Privacy Risk Is Now a Board-Level Compliance Obligation', text: 'Penalties of up to ₹250 crore. Consent management obligations. Breach notification windows. A full compliance architecture review is required now.', readTime: '5 min' },
    { id: 13, link: '/insights/tier-2-cities', category: 'consulting', categoryName: 'Consulting', tagClass: 'bg-sky-50 text-sky-600', date: 'Apr 2026', img: '/reportimg/tier-2-cities.avif', title: 'Tier-2 Cities, GCCs, and Supply Chain Resilience — India\'s Three Strategic Growth Vectors', text: 'Overlapping growth opportunities are creating new advisory demand at the intersection of strategy and regulatory execution for Indian enterprises.', readTime: '5 min' },
    { id: 14, link: '/insights/ai-integration-failures', category: 'consulting', categoryName: 'Consulting', tagClass: 'bg-sky-50 text-sky-600', date: 'Feb 2026', img: '/reportimg/ai-integration.avif', title: 'AI Integration Failures Trace Back to Governance Design — Not Technology Selection', text: 'Role clarity, data ownership, and change management are the real constraints on AI value realisation in Indian enterprises in 2026.', readTime: '4 min' },
    { id: 15, link: '/insights/csr-impact-evidence', category: 'grants', categoryName: 'Grants & ESG', tagClass: 'bg-green-50 text-green-600', date: 'Apr 2026', img: '/reportimg/csr-impact-evidence.avif', title: 'CSR 2.0: MCA Now Demands Impact Evidence — Not Just Expenditure Proof', text: 'NGOs without documented outcome metrics are losing renewals. Grant managers must build verified impact frameworks that satisfy MCA\'s evolved expectations.', readTime: '5 min' },
    { id: 16, link: '/insights/fcra-compliance-pmla', category: 'grants', categoryName: 'Grants & ESG', tagClass: 'bg-green-50 text-green-600', date: 'Feb 2026', img: '/reportimg/fcra-compliance.avif', title: 'FCRA Compliance and PMLA Obligations — Why Financial Governance Is Core to NGO Survival', text: 'FCRA renewal rejections are rising sharply. Organisations without audit-ready utilisation documentation risk account freezes and donor loss.', readTime: '5 min' }
  ];

  const filteredInsights = insights.filter(i => activeFilter === 'all' || i.category === activeFilter);

  return (
    <section className="py-10 bg-white" id="insights">
      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 py-5 mb-16 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center gap-6 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 whitespace-nowrap border-r border-gray-200 pr-6 mr-2">Filter</span>
          <div className="flex gap-2.5">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`px-5 py-2.5 rounded-full text-[12px] font-bold transition-all duration-300 whitespace-nowrap ${activeFilter === f.id ? 'bg-[#1A2B45] text-white shadow-lg shadow-[#1A2B45]/20' : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#1A2B45]'}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-10 sr">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-5">

              <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C5963A]">Latest Thinking</span>
            </div>
            <h2 className="font-serif text-[42px] md:text-[52px] font-normal text-[#1A2B45] leading-[1.05] tracking-tight">
              Insights & <em className="italic font-light text-gray-400">Perspectives</em>
            </h2>
            <p className="text-[15px] text-gray-500 mt-6 leading-relaxed">
              Two curated reads per service area — drawn from live mandates and regulatory change across India.
            </p>
          </div>
          <Link to="/contact" className="text-[12px] font-bold text-[#1A2B45] flex items-center gap-2 hover:text-[#C5963A] transition-colors pb-2 border-b-2 border-transparent hover:border-[#C5963A] mb-2 uppercase tracking-widest">
            All Insights
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredInsights.length > 0 ? (
            filteredInsights.map((insight) => (
              <InsightCard
                key={insight.id}
                data={insight}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-100 rounded-3xl">
              <p className="text-gray-400 font-serif text-[24px]">No insights for this topic yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeInsightsV3;