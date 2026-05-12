import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedReportCard = ({ data, delay }) => (
    <div className={`bg-white rounded-[20px] border border-gray-100 overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl sr ${delay}`}>
        {/* Cover Image & Overlay */}
        <div className="relative h-[260px] md:h-[300px] overflow-hidden">
            <img className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src={data.img} alt={data.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-8 right-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5963A] mb-2">{data.series}</div>
                <h3 className="font-serif text-[24px] md:text-[32px] font-bold text-white leading-[1.2]" dangerouslySetInnerHTML={{ __html: data.title }}></h3>
            </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-[#0F1B2E] grid grid-cols-3 divide-x divide-white/10">
            {data.stats.map((s, i) => (
                <div key={i} className="px-4 py-5 text-center">
                    <div className="font-serif text-[20px] md:text-[24px] font-bold text-white leading-none mb-1" dangerouslySetInnerHTML={{ __html: s.val }}></div>
                    <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold leading-tight">{s.label}</div>
                </div>
            ))}
        </div>

        {/* Content Body */}
        <div className="p-8 flex-1 flex flex-col">
            <div className="flex flex-wrap items-center gap-3 mb-6">
                {data.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${tag.className}`}>
                        {tag.label}
                    </span>
                ))}
                <span className="text-[11px] text-gray-400 font-medium ml-auto">{data.date}</span>
            </div>

            <p className="text-[14.5px] text-gray-500 leading-relaxed mb-8">
                {data.summary}
            </p>

            {/* Findings */}
            <div className="mb-10">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-5">Key Report Findings</h4>
                <div className="space-y-4">
                    {data.findings.map((f, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C5963A] mt-1.5 shrink-0"></div>
                            <div className="text-[13.5px] text-[#1A2B45] leading-relaxed font-medium">{f}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-8 border-t border-gray-50 flex justify-between items-center">
                <div className="flex gap-6">
                    <div className="flex items-center gap-2 text-[12px] text-gray-400 font-medium">
                        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" /><path d="M5 8h6M5 5h6M5 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                        {data.pages}
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-gray-400 font-medium">
                        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M8 2v9M4 8l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><path d="M2 13h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                        PDF
                    </div>
                </div>
                <Link to="/contact" className="px-6 py-3 bg-[#1A2B45] text-white text-[12px] font-bold rounded-xl hover:bg-[#C5963A] transition-all flex items-center gap-2 shadow-lg shadow-[#1A2B45]/20 group/btn">
                    Request Report
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </Link>
            </div>
        </div>
    </div>
);

const Researchreports = () => {
    const featured = [
        {
            img: '/599-600x320.jpg',
            series: 'Northrop Intelligence Series · No. 01',
            title: 'Financial Due Diligence in<br/><em>India\'s Mid-Market</em>',
            date: 'May 2026',
            pages: '28 pages',
            summary: 'A practitioner\'s framework covering quality-of-earnings red flags in promoter-driven businesses, working capital normalisation methodology, and ESG/cyber integration into FDD scope — across manufacturing, FMCG, NBFC, and technology deal pipelines.',
            tags: [
                { label: 'Due Diligence', className: 'bg-blue-50 text-blue-600' },
                { label: 'Flagship', className: 'bg-[#F8F1E0] text-[#8A6C1A]' }
            ],
            stats: [
                { val: 'US $ 50B+', label: 'India M&A Value H1 2025' },
                { val: '9.3%', label: 'Diligence Market CAGR' },
                { val: '50%', label: 'AI Review Time Reduction' }
            ],
            findings: [
                'Quality-of-earnings manipulation patterns specific to Indian promoter-led businesses — related-party revenue, cost reclassification, channel stuffing',
                'Working capital normalisation across seasonal FMCG, infrastructure, and export businesses — adjusting for structural distortions',
                'When FDD findings should influence deal mechanics — price adjustment mechanisms, escrow structuring, and walk-away thresholds'
            ]
        },
        {
            img: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=1200&h=600',
            series: 'Northrop Intelligence Series · No. 02',
            title: 'Corporate Fraud in India:<br/><em>Detection, Response & Recovery</em>',
            date: 'May 2026',
            pages: '32 pages',
            summary: 'A structured reference for audit committees, risk officers, and lenders on forensic investigation methodology, FAIS compliance obligations, and evidence management — from discovery through multi-agency adjudication involving SFIO, SEBI, and RBI.',
            tags: [
                { label: 'Forensic', className: 'bg-red-50 text-red-600' },
                { label: 'New Release', className: 'bg-[#F8F1E0] text-[#8A6C1A]' }
            ],
            stats: [
                { val: '₹36 K Cr', label: 'Bank Fraud Value 2025' },
                { val: '20', label: 'FAIS Standards (ICAI)' },
                { val: '3x', label: 'YoY Fraud Volume Growth' }
            ],
            findings: [
                'India\'s fraud landscape in 2025–26: crypto fraud, digital payment scams, and supply chain finance abuse as the three fastest-growing vectors',
                'FAIS decoded: what 20 forensic standards mean for CAs and audit committees conducting internal investigations',
                'Predictive fraud detection: using ML and litigation intelligence to identify risk before defaults appear in financial statements'
            ]
        }
    ];

    return (
        <section className="py-10 bg-white" id="featured-reports">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-10 sr">
                    <div className="max-w-[640px]">
                        <div className="flex items-center gap-3 mb-5">

                            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C5963A]">Northrop Intelligence Series</span>
                        </div>
                        <h2 className="font-serif text-[44px] md:text-[56px] font-normal text-[#1A2B45] leading-[1.05] tracking-tight">
                            Research & <em className="italic font-light text-gray-400">Reports</em>
                        </h2>
                        <p className="text-[15px] text-gray-500 mt-6 leading-relaxed">
                            Structured practitioner publications for CFOs, audit committees, and senior advisors — two per service area, built from live mandates and regulatory analysis.
                        </p>
                    </div>
                    <Link to="/contact" className="text-[12px] font-bold text-[#1A2B45] flex items-center gap-2 hover:text-[#C5963A] transition-colors pb-2 border-b-2 border-transparent hover:border-[#C5963A]">
                        ALL PUBLICATIONS
                        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    {featured.map((report, i) => (
                        <FeaturedReportCard key={i} data={report} delay={i === 1 ? 'd1' : ''} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Researchreports;