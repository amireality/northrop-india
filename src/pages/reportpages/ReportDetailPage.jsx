import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { reportsData } from '../../data/reportsData';

const ReportDetailPage = () => {
    const { slug } = useParams();
    const report = reportsData[slug];

    if (!report) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-report-surface">
                <div className="text-center">
                    <h1 className="text-4xl font-report-headline mb-4">Report Not Found</h1>
                    <Link to="/" className="text-report-primary underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-report-surface text-report-on-surface font-report-body selection:bg-report-primary selection:text-white">
            {/* Hero Section */}
            <section className="w-full">
                <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                    <img 
                        alt={report.title} 
                        className="w-full h-full object-cover" 
                        src={report.heroImg} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-[24px]">
                        <div className="max-w-[1200px] mx-auto">
                            <div className="inline-block bg-report-primary text-white px-3 py-1 font-bold text-[12px] tracking-[0.1em] mb-6 uppercase">
                                {report.category}
                            </div>
                            <h1 className="text-white font-report-headline text-[40px] md:text-[64px] leading-[1.1] tracking-[-0.02em] font-semibold max-w-[900px] mb-6">
                                {report.title}
                            </h1>
                            {report.subheadline && (
                                <p className="text-white/80 font-report-body text-[18px] md:text-[22px] max-w-[700px] leading-relaxed mb-8">
                                    {report.subheadline}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Layout */}
            <article className="max-w-[1200px] mx-auto px-[10px] py-[80px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
                    
                    {/* Left Sidebar: Date & Meta */}
                    <div className="hidden md:block md:col-span-1 border-r border-report-surface-container-low pr-[24px] py-2">
                        <div className="text-[12px] font-bold tracking-[0.1em] uppercase text-report-on-secondary-container mb-4">
                            {report.date}
                        </div>
                        <div className="text-[12px] font-bold tracking-[0.1em] uppercase text-report-primary">
                            {report.readTime}
                        </div>
                        <div className="mt-8 flex flex-col gap-4">
                            <span className="material-symbols-outlined text-report-on-secondary-container cursor-pointer hover:text-report-primary transition-colors">share</span>
                            <span className="material-symbols-outlined text-report-on-secondary-container cursor-pointer hover:text-report-primary transition-colors">bookmark</span>
                            <span className="material-symbols-outlined text-report-on-secondary-container cursor-pointer hover:text-report-primary transition-colors">print</span>
                        </div>
                    </div>

                    {/* Main Content Body */}
                    <div className="md:col-span-8 flex flex-col gap-8 max-w-[720px] mx-auto md:mx-0">
                        {report.content.map((block, idx) => {
                            switch (block.type) {
                                case 'paragraph':
                                    return (
                                        <p 
                                            key={idx}
                                            className={`text-[18px] leading-[1.7] text-report-on-surface leading-relaxed ${block.dropCap ? 'first-letter:text-7xl md:first-letter:text-8xl first-letter:font-report-headline first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-[0.8] first-letter:pt-1' : ''} ${block.italic ? 'italic text-report-on-secondary-container' : ''} ${block.margin || ''}`}
                                        >
                                            {block.text}
                                        </p>
                                    );
                                case 'multi-stat-grid':
                                    return (
                                        <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-report-surface-container-low mb-12">
                                            {block.items.map((item, i) => (
                                                <div key={i} className={`p-8 text-center ${i < block.items.length - 1 ? 'border-b md:border-b-0 md:border-r border-report-surface-container-low' : ''}`}>
                                                    <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-report-on-primary-container mb-2 block">{item.label}</span>
                                                    <span className={`text-[32px] font-report-headline font-medium leading-[1.3] ${item.isError ? 'text-red-600' : 'text-report-primary'}`}>{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                case 'list-box':
                                    return (
                                        <div key={idx} className="bg-report-surface-container-low p-10 border border-report-surface-container-low my-12">
                                            <h3 className="text-[24px] font-report-headline font-medium text-report-primary mb-6">{block.title}</h3>
                                            <ul className="space-y-4">
                                                {block.items.map((item, i) => (
                                                    <li key={i} className="flex gap-4">
                                                        <span className="text-report-primary font-bold">•</span>
                                                        <span className="text-[16px] leading-[1.6] text-report-on-surface">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                case 'heading':
                                    return (
                                        <h2 key={idx} className="text-[32px] font-report-headline leading-[1.3] font-medium text-report-primary mt-4">
                                            {block.text}
                                        </h2>
                                    );
                                case 'pull-quote':
                                    return (
                                        <blockquote 
                                            key={idx} 
                                            className={`${block.withBg ? 'bg-report-surface-container-low p-8 border-l-2 border-report-primary my-10' : 'pl-8 border-l-2 border-report-primary italic py-4 my-6'} text-[24px] font-report-headline leading-[1.4] font-medium text-report-on-surface`}
                                        >
                                            {block.text}
                                        </blockquote>
                                    );
                                case 'obligation-item':
                                    return (
                                        <div key={idx} className="border-b border-report-surface-container-low pb-6 mb-8">
                                            <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-report-on-secondary-container opacity-60 block mb-2">{block.id}. {block.label}</span>
                                            <h3 className="text-[24px] font-report-headline font-semibold mb-3 leading-tight">{block.title}</h3>
                                            <p className="text-[16px] leading-[1.6] text-report-on-surface opacity-80">{block.text}</p>
                                        </div>
                                    );
                                case 'bento-grid':
                                    return (
                                        <div key={idx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                                            {block.items.map((item, i) => (
                                                <div 
                                                    key={i} 
                                                    className={`${item.dark ? 'bg-report-primary text-white' : 'bg-report-surface-container-highest p-6'} p-6 flex flex-col justify-between aspect-square md:aspect-video`}
                                                >
                                                    <div className={`text-[12px] font-bold tracking-[0.1em] uppercase ${item.dark ? 'opacity-70' : 'text-report-on-primary-container'}`}>
                                                        {item.label}
                                                    </div>
                                                    <div className={`text-[48px] md:text-[60px] font-report-headline font-semibold leading-none ${item.dark ? 'text-white' : 'text-report-primary'}`}>
                                                        {item.value}
                                                    </div>
                                                    <div className="text-[16px] leading-[1.6]">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })}

                        {/* Key Sources */}
                        <div className="border-t border-report-surface-container-low pt-8 mt-8">
                            <div className="text-[12px] font-bold tracking-[0.1em] uppercase text-report-on-primary-container mb-4">Key Sources</div>
                            <ul className="text-[14px] leading-[1.5] text-on-surface-variant flex flex-wrap gap-x-6 gap-y-2">
                                {report.sources.map((source, i) => (
                                    <li key={i}>{source}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Sidebar: Ad/Related/Newsletter */}
                    <div className="hidden md:block md:col-span-3 pl-[2px]">
                        {/* Series Section */}
                        {report.series && (
                            <div className="mb-12">
                                <h4 className="text-[12px] font-bold tracking-[0.2em] text-report-primary border-b border-report-primary pb-2 mb-6 uppercase">
                                    {report.series.title}
                                </h4>
                                <div className="space-y-6">
                                    {report.series.items.map((item, i) => (
                                        <div key={i} className={`block ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'group cursor-pointer'}`}>
                                            <span className={`text-[10px] font-bold tracking-[0.1em] mb-1 block ${item.active ? 'text-report-primary' : 'text-report-on-secondary-container'}`}>
                                                {item.id}
                                            </span>
                                            <h5 className={`text-[18px] font-report-headline ${item.active ? 'text-report-primary font-bold' : 'group-hover:text-report-primary transition-colors'}`}>
                                                {item.title}
                                            </h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Advertisement */}
                        <div className="bg-report-surface-container h-[400px] w-full flex flex-col items-center justify-center border border-report-surface-container-low p-6 text-center mb-12">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-report-on-secondary-container mb-4 uppercase">ADVERTISEMENT</span>
                            <div className="w-full h-full flex items-center justify-center border border-dashed border-report-surface-container-low">
                                <p className="text-[12px] font-bold uppercase tracking-widest text-report-on-secondary-container leading-relaxed">
                                    Premium Portfolio<br/>Management Services
                                </p>
                            </div>
                        </div>

                        {/* Related Articles */}
                        {report.relatedArticles && report.relatedArticles.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-[12px] font-bold tracking-[0.1em] uppercase text-report-primary mb-6 pb-2 border-b border-report-primary w-fit">
                                    RELATED ARTICLES
                                </h3>
                                <div className="space-y-8">
                                    {report.relatedArticles.map((article, i) => (
                                        <div key={i} className="group cursor-pointer">
                                            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-report-on-secondary-container opacity-60">{article.category}</span>
                                            <h4 className="text-[18px] font-report-headline font-semibold group-hover:text-report-primary transition-colors mt-2 leading-snug">
                                                {article.title}
                                            </h4>
                                            <p className="text-[13px] text-report-on-secondary-container mt-2 leading-relaxed">
                                                {article.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Newsletter Callout */}
                        {report.newsletter && (
                            <div className="p-8 border border-report-primary bg-report-surface">
                                <h3 className="text-[20px] font-report-headline font-semibold mb-4 leading-tight">{report.newsletter.title}</h3>
                                <p className="text-[14px] text-report-on-secondary-container mb-6 leading-relaxed">
                                    {report.newsletter.description}
                                </p>
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className="w-full bg-transparent border-0 border-b border-report-surface-container-low focus:border-report-primary focus:ring-0 px-0 py-2 mb-6 text-[14px]" 
                                />
                                <button className="w-full bg-report-primary text-white py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                                    JOIN THE CIRCLE
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ReportDetailPage;
