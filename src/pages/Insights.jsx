import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

const insightsData = {
  featuredArticle: {
    tag: "Market Deep-Dive",
    title: "India's Next Capital Cycle: Emerging Structural Shifts",
    description: "An exhaustive analysis of the infrastructure-led growth phase and its implications for global equity mandates over the coming decade.",
    words: "4,200",
    duration: "18 Min Read",
    image: "/insight/Market Deep-Dive.png"
  },
  sideArticles: [
    {
      tag: "Strategy Ledger",
      title: "How Private Equity Actually Makes Money",
      description: "Deconstructing the myth of operational alpha vs. the reality of financial engineering and leverage in the mid-market.",
      image: "/insight/strategyledger.png"
    },
    {
      tag: "Capital Allocation",
      title: "Why Most Startups Misallocate Capital",
      description: "An investigation into the 'growth-at-all-costs' fallacy and the structural failure of traditional venture financing models.",
      image: "/insight/capitalalocation.png"
    }
  ],
  longArticle: {
    tag: "Quarterly Mandate",
    title: "The Global Debt Supercycle: Preparing for Term Premium Volatility",
    description: "A strategic framework for institutional portfolios navigating the return of inflation and structural deficit spending in G7 economies.",
    yield: "4.2%",
    yieldLabel: "Target Yield"
  },
  strategicPerspectives: [
    {
      date: "Aug 14, 2024",
      title: "The Sovereign Wealth Shift",
      description: "Tracking the pivot from US Treasuries to alternative physical assets."
    },
    {
      date: "Aug 09, 2024",
      title: "Algorithm-Driven Liquidity",
      description: "How HFT influence is reshaping the baseline for market volatility."
    }
  ],
  mandateHighlight: {
    quote: "\"The true cost of capital is not what you pay, but what you forgo.\"",
    author: "— Excerpt from the Chairman's 2024 Mandate",
    image: "/insight/mandatehighlight.png"
  }
};

export default function Insights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9ff] text-[#131c2a]  ">
      <Helmet>
        <title>Insights & Mandate Reports | Global Financial Intelligence | Northrop India</title>
        <meta name="description" content="Access Northrop's proprietary research, macroeconomic mandates, and institutional perspectives. Deep-dives into capital markets, private equity, and global finance." />
      </Helmet>


      <main className="pt-[140px] pb-[96px] px-[32px] max-w-[1536px] mx-auto">
        {/* Hero Section */}
        <section className="mb-[96px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-end">
            <div className="lg:col-span-8">
              <span className="text-[#C4973B] font-[500] tracking-[0.2em] text-[14px] uppercase mb-[16px] block">Northrop Management</span>
              <h1 className="text-[72px] md:text-[96px] lg:text-[128px] font-playfair italic font-[700] tracking-tighter leading-[0.85] text-[#001f3f] mb-[32px]">
                Insights & Mandate Reports
              </h1>
            </div>
            <div className="lg:col-span-4 pb-[16px]">
              <p className="text-[18px] text-[#43474e] leading-[1.6] max-w-[448px]">
                A definitive archive of proprietary research, macroeconomic mandates, and institutional perspectives curated for the modern capital allocator.
              </p>
            </div>
          </div>
        </section>

        {/* Institutional Research: Bento Grid */}
        <section className="mb-[128px]">
          <div className="flex items-center justify-between mb-[48px] border-b border-[#c4c6cf]/15 pb-[16px]">
            <h2 className="text-[36px] font-playfair font-[700] text-[#001f3f]">Institutional Research</h2>
            <span className="text-[12px] uppercase tracking-widest text-[#43474e]">Volume IV • Q3 2024</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px]">
            {/* Featured Article */}
            <article className="md:col-span-8 group relative overflow-hidden bg-white p-[32px] flex flex-col justify-between min-h-[500px]">
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img
                  className="w-full h-full object-cover"
                  src={insightsData.featuredArticle.image}
                  alt="Market Deep-Dive"
                />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-[12px] py-[4px] bg-[#001f3f] text-white text-[10px] font-[700] tracking-tighter uppercase mb-[24px]">
                  {insightsData.featuredArticle.tag}
                </span>
                <h3 className="text-[48px] font-playfair font-[700] text-[#001f3f] mb-[24px] max-w-[672px] leading-[1.1]">
                  {insightsData.featuredArticle.title}
                </h3>
                <p className="text-[#43474e] max-w-[576px] mb-[32px] text-[16px] leading-[1.6]">
                  {insightsData.featuredArticle.description}
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-between mt-auto">
                <div className="flex gap-[16px] items-center">
                  <span className="text-[12px] tracking-tighter text-[#43474e]">Words: {insightsData.featuredArticle.words}</span>
                  <span className="w-[4px] h-[4px] bg-[#C4973B] rounded-full"></span>
                  <span className="text-[12px] tracking-tighter text-[#43474e]">Duration: {insightsData.featuredArticle.duration}</span>
                </div>
                <button className="group/btn flex items-center gap-[8px] text-[#C4973B] font-[700] uppercase tracking-widest text-[12px]">
                  Read Report
                  <ArrowRight className="w-[14px] h-[14px] group-hover/btn:translate-x-[4px] transition-transform" />
                </button>
              </div>
            </article>

            {/* Side Article 1 */}
            <article className="md:col-span-4 bg-[#f0f3ff] p-[32px] flex flex-col group">
              <div className="aspect-[4/3] mb-[24px] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={insightsData.sideArticles[0].image}
                  alt="Strategy Ledger"
                />
              </div>
              <span className="text-[#C4973B] font-[700] text-[10px] tracking-widest uppercase mb-[16px] block">
                {insightsData.sideArticles[0].tag}
              </span>
              <h3 className="text-[30px] font-playfair font-[700] text-[#001f3f] mb-[16px] leading-[1.1]">
                {insightsData.sideArticles[0].title}
              </h3>
              <p className="text-[14px] text-[#43474e] mb-[32px] flex-grow leading-[1.6]">
                {insightsData.sideArticles[0].description}
              </p>
              <button className="w-fit border-b border-[#C4973B]/30 pb-[4px] text-[#C4973B] font-[700] uppercase tracking-widest text-[10px] hover:border-[#C4973B] transition-colors">
                Read Report
              </button>
            </article>

            {/* Side Article 2 */}
            <article className="md:col-span-4 bg-[#f0f3ff] p-[32px] flex flex-col group">
              <span className="text-[#C4973B] font-[700] text-[10px] tracking-widest uppercase mb-[16px] block">
                {insightsData.sideArticles[1].tag}
              </span>
              <h3 className="text-[30px] font-playfair font-[700] text-[#001f3f] mb-[16px] leading-[1.1]">
                {insightsData.sideArticles[1].title}
              </h3>
              <p className="text-[14px] text-[#43474e] mb-[32px] flex-grow leading-[1.6]">
                {insightsData.sideArticles[1].description}
              </p>
              <div className="aspect-video mb-[24px] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={insightsData.sideArticles[1].image}
                  alt="Capital Allocation"
                />
              </div>
              <button className="w-fit border-b border-[#C4973B]/30 pb-[4px] text-[#C4973B] font-[700] uppercase tracking-widest text-[10px] hover:border-[#C4973B] transition-colors">
                Read Report
              </button>
            </article>

            {/* Long Article / Data Visualization */}
            <article className="md:col-span-8 bg-[#001f3f] p-[48px] flex flex-col md:flex-row gap-[48px] items-center group">
              <div className="md:w-1/2">
                <span className="text-[#C4973B] font-[700] text-[10px] tracking-widest uppercase mb-[24px] block">
                  {insightsData.longArticle.tag}
                </span>
                <h3 className="text-[36px] font-playfair font-[700] text-white mb-[24px] leading-[1.1]">
                  {insightsData.longArticle.title}
                </h3>
                <p className="text-[#9ea4b0] text-[14px] mb-[32px] leading-[1.6]">
                  {insightsData.longArticle.description}
                </p>
                <button className="px-[32px] py-[12px] bg-[#C4973B] text-white text-[12px] font-[700] uppercase tracking-widest hover:opacity-90 transition-opacity">
                  Read Report
                </button>
              </div>
              <div className="md:w-1/2 flex items-center justify-center p-[16px] w-full">
                <div className="relative w-full max-w-[280px] aspect-square border border-white/10 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 animate-pulse border-[2px] border-[#C4973B]/20 rounded-full"></div>
                  <div className="text-center">
                    <span className="text-[48px] font-playfair text-[#C4973B] block leading-[1]">
                      {insightsData.longArticle.yield}
                    </span>
                    <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] mt-[8px] block">
                      {insightsData.longArticle.yieldLabel}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Strategic Perspectives: Editorial Row */}
        <section className="mb-[48px]">
          <div className="flex items-center justify-between mb-[48px] border-b border-[#c4c6cf]/15 pb-[16px]">
            <h2 className="text-[36px] font-playfair font-[700] text-[#001f3f]">Strategic Perspectives</h2>
            <a className="text-[12px] uppercase tracking-widest text-[#C4973B] font-[700] border-b border-[#C4973B] pb-[4px]" href="#">
              View Archives
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[48px]">
            <div className="space-y-[48px]">
              {insightsData.strategicPerspectives.map((perspective, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <span className="text-[10px] text-[#43474e] uppercase tracking-widest mb-[8px] block">
                    {perspective.date}
                  </span>
                  <h4 className="text-[24px] font-playfair font-[700] text-[#001f3f] group-hover:text-[#C4973B] transition-colors mb-[8px] leading-[1.2]">
                    {perspective.title}
                  </h4>
                  <p className="text-[14px] text-[#43474e] leading-[1.6]">
                    {perspective.description}
                  </p>
                  <button className="mt-[16px] text-[10px] font-[700] text-[#C4973B] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Report
                  </button>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 bg-[#e7eeff] flex flex-col md:flex-row overflow-hidden group">
              <div className="md:w-1/2 h-full min-h-[300px]">
                <img
                  className="w-full h-full object-cover"
                  src={insightsData.mandateHighlight.image}
                  alt="Chairman's Mandate"
                />
              </div>
              <div className="md:w-1/2 p-[48px] flex flex-col justify-center">
                <h4 className="text-[36px] font-playfair font-[700] text-[#001f3f] mb-[24px] italic leading-[1.1]">
                  {insightsData.mandateHighlight.quote}
                </h4>
                <p className="text-[#43474e] text-[14px] mb-[32px] italic leading-[1.6]">
                  {insightsData.mandateHighlight.author}
                </p>
                <button className="w-full py-[16px] border border-[#001f3f] text-[#001f3f] font-[700] uppercase tracking-widest text-[10px] hover:bg-[#001f3f] hover:text-white transition-all duration-300">
                  Read Full Mandate
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
