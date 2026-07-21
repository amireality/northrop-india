import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AuthorBlock from '../../components/insights/AuthorBlock';
import ArticleSidebar from '../../components/insights/ArticleSidebar';

const FddChecklist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans overflow-x-hidden">
      <Helmet>
        <title>Financial Due Diligence Checklist | Northrop India</title>
        <meta name="description" content="The definitive Financial Due Diligence (FDD) Checklist for Indian M&A in 2026." />
      </Helmet>

      {/* Hero Section - Image-less Premium Design */}
      <header className="relative w-full h-[600px] flex flex-col items-center justify-center text-center overflow-hidden bg-white border-b border-[#e2e4ea]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-20 px-[20px] md:px-[64px] max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3 py-1 mb-6 rounded-md bg-[#C5963A] text-white text-[11px] font-bold uppercase tracking-widest">
            New Insight
          </span>
          <h1 className="font-serif text-[32px] md:text-[56px] leading-[40px] md:leading-[64px] font-bold tracking-[-0.02em] text-[#001F3F] mb-6 uppercase">
            The Definitive Financial Due Diligence Checklist (2026)
          </h1>
          <div className="w-24 h-1 bg-[#C5963A] mb-8"></div>
          <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-[#45474c] max-w-2xl font-normal">
            De-risking Mid-Market M&A in India's Tightening Regulatory Environment.
          </p>
        </div>
      </header>

      <main 
        className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[64px] py-20"
        style={{ backgroundImage: "radial-gradient(#c5c6cd 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px]">
          {/* Main Content */}
          <div className="md:col-span-8">
            <p className="text-[18px] leading-[32px] text-[#191c1d] mb-8 font-normal">
              Financial Due Diligence (FDD) is the cornerstone of any successful merger or acquisition. In the Indian market, where mid-cap valuations are aggressively priced, acquirers cannot afford to rely on audited financials alone.
            </p>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-8">
              A comprehensive FDD process uncovers the true run-rate EBITDA, identifies off-balance-sheet liabilities, and tests the sustainability of historical earnings. This checklist outlines the critical components of a modern, institutional-grade FDD mandate.
            </p>
            
            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">Phase 1: Quality of Earnings (QoE)</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              The primary objective of QoE analysis is to determine the normalized EBITDA of the target. This involves identifying and adjusting for non-recurring, one-time, or owner-related expenses that distort true operational profitability.
            </p>
            
            <div className="bg-white p-8 border-l-4 border-[#1A2B45] shadow-sm mb-12">
              <ul className="list-disc pl-5 space-y-3 text-[16px] text-[#45474c]">
                <li>Adjustment for non-arm's length transactions (related parties).</li>
                <li>Reversal of accounting policy shifts that artificially inflate revenue.</li>
                <li>Capitalization of expenses vs. immediate write-offs review.</li>
                <li>Impact of recent macro-events on supply chain costs.</li>
              </ul>
            </div>

            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">Phase 2: Working Capital Peg</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              A precise net working capital (NWC) target ensures that the buyer doesn't inject immediate liquidity post-close just to keep the lights on. It protects the purchase price against inventory bloat or aggressive receivable collection prior to closing.
            </p>
            
            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">Phase 3: Tax and Regulatory Exposure</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              With GST frameworks evolving and Income Tax scrutiny tightening, contingent tax liabilities can erase deal value overnight. Evaluating ongoing litigation, unrecorded assessments, and aggressive tax positions is non-negotiable for 2026 mandates.
            </p>
            <AuthorBlock />
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <ArticleSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FddChecklist;
