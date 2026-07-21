import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HomeInsightsV3 from '../components/home/HomeInsightsV3';
import { Boxes } from '../components/ui/background-boxes';

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
      title: "The flight to quality the anatomy of allocation",
      description: "An investigation into the 'growth-at-all-costs' fallacy and the structural failure of traditional venture financing models.",
      image: "/insight/capitalalocation.png"
    }
  ],
  longArticle: {
    tag: "Quarterly Mandate",
    title: "The Strategic Realignment of India’s Freight Ecosystem: A Paradigm Shift in Connectivity",
    description: "Analyzing the structural transition from road-dominant logistics to a rail-centric multimodal framework, driving efficiency and global competitiveness.",
    image: "/insight/unnamed1.png"
  },
  strategicPerspectives: [
    {
      date: "May 06, 2026",
      title: "The Sovereign Wealth Shift",
      description: "Tracking the pivot from US Treasuries to alternative physical assets.",
      link: "/insights/sovereign-wealth-shift"
    },
    {
      date: "May 06, 2026",
      title: "Algorithm-Driven Liquidity",
      description: "How HFT influence is reshaping the baseline for market volatility.",
      link: "/insights/algorithm-driven-liquidity"
    }
  ],
  mandateHighlight: {
    quote: "\"The true cost of capital is not what you pay, but what you forgot.\"",
    author: "— Excerpt from the Chairman's 2026 Mandate",
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


      {/* Full Width Hero Section */}
      <section className="pt-[140px] h-[600px] relative w-full overflow-hidden bg-[#001F3F] flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-[#001F3F] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="relative z-20 text-center px-[20px]">
          <span className="text-[#C5963A] font-[700] tracking-[0.2em] text-[14px] uppercase mb-[24px] block">Northrop Management</span>
          <h1 className="text-[56px] md:text-[72px] lg:text-[96px] font-sans font-extrabold tracking-tight leading-[1.05] text-white mb-0 break-words">
            Insights & Mandate Reports
          </h1>
        </div>
      </section>

      <main className="pb-[96px] px-[32px] max-w-[1536px] mx-auto">
        <div className="mb-20"></div>
        <HomeInsightsV3 />
      </main>
    </div>
  );
}
