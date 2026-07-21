import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AuthorBlock from '../../components/insights/AuthorBlock';
import ArticleSidebar from '../../components/insights/ArticleSidebar';

const CorporateGovernance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans overflow-x-hidden">
      <Helmet>
        <title>The Evolution of Corporate Governance | Northrop India</title>
        <meta name="description" content="How Indian boards are restructuring their governance frameworks to meet SEBI's 2026 mandates and institutional investor expectations." />
      </Helmet>

      {/* Hero Section - Image-less Premium Design */}
      <header className="relative w-full h-[600px] flex flex-col items-center justify-center text-center overflow-hidden bg-white border-b border-[#e2e4ea]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-20 px-[20px] md:px-[64px] max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3 py-1 mb-6 rounded-md bg-[#C5963A] text-white text-[11px] font-bold uppercase tracking-widest">
            New Insight
          </span>
          <h1 className="font-serif text-[32px] md:text-[56px] leading-[40px] md:leading-[64px] font-bold tracking-[-0.02em] text-[#001F3F] mb-6 uppercase">
            Corporate Governance 2.0: The Board's New Fiduciary Mandate
          </h1>
          <div className="w-24 h-1 bg-[#C5963A] mb-8"></div>
          <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-[#45474c] max-w-2xl font-normal">
            Why independent directors are demanding forensic verification of executive narratives.
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
              Corporate Governance in India has transitioned from a compliance exercise (ticking boxes on the LODR checklist) into a core driver of institutional valuation. In 2026, global allocators discount Indian assets heavily if governance structures appear founder-dominated rather than institutionally independent.
            </p>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-8">
              The role of the Independent Director has never been more perilous. Faced with personal liability for corporate failures, independent board members are no longer willing to accept executive management reports at face value.
            </p>
            
            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">The End of Asymmetric Information</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              Historically, management controlled the flow of information to the Board. Today, Audit Committees are establishing direct reporting lines with Chief Risk Officers, Internal Auditors, and external Forensic Consultants. They are demanding raw, unfiltered data regarding related-party transactions, subsidiary cash flows, and off-balance-sheet leverage.
            </p>
            
            <div className="bg-white p-8 border-l-4 border-[#311b00] shadow-sm mb-12">
              <h4 className="text-[14px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#311b00] mb-4">Key Governance Triggers in 2026</h4>
              <ul className="list-disc pl-5 space-y-3 text-[16px] text-[#45474c]">
                <li><strong>Related Party Scrutiny:</strong> SEBI's broadened definition of RPTs requires rigorous arm's-length testing.</li>
                <li><strong>ESG Accountability:</strong> Boards must now legally attest to the accuracy of BRSR data.</li>
                <li><strong>Cyber Governance:</strong> Data breaches are now viewed as governance failures, not just IT failures.</li>
                <li><strong>Succession Planning:</strong> Transitioning from promoter-led structures to professionally managed institutional models.</li>
              </ul>
            </div>

            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">Building Institutional Trust</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              Strong governance is the most effective tool to lower the cost of capital. Companies that proactively institute robust Whistleblower mechanisms, separate the roles of Chairman and CEO, and subject themselves to independent governance audits consistently command higher valuation multiples in the public markets.
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

export default CorporateGovernance;
