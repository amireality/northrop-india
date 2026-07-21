import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AuthorBlock from '../../components/insights/AuthorBlock';
import ArticleSidebar from '../../components/insights/ArticleSidebar';

const ForensicAuditIbc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans overflow-x-hidden">
      <Helmet>
        <title>Forensic Audit in IBC | Northrop India</title>
        <meta name="description" content="Navigating Forensic Audits under the Insolvency and Bankruptcy Code (IBC). A guide for Resolution Professionals and Creditors." />
      </Helmet>

      {/* Hero Section - Image-less Premium Design */}
      <header className="relative w-full h-[600px] flex flex-col items-center justify-center text-center overflow-hidden bg-white border-b border-[#e2e4ea]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-20 px-[20px] md:px-[64px] max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3 py-1 mb-6 rounded-md bg-[#C5963A] text-white text-[11px] font-bold uppercase tracking-widest">
            New Insight
          </span>
          <h1 className="font-serif text-[32px] md:text-[56px] leading-[40px] md:leading-[64px] font-bold tracking-[-0.02em] text-[#001F3F] mb-6 uppercase">
            Forensic Audit Under IBC: Recovering Value and Proving PUFE Transactions
          </h1>
          <div className="w-24 h-1 bg-[#C5963A] mb-8"></div>
          <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-[#45474c] max-w-2xl font-normal">
            Where financial investigation meets the justice system to hold wrongdoers accountable.
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
              When a company enters the Corporate Insolvency Resolution Process (CIRP) under the IBC, the focus immediately shifts to value recovery. However, creditors frequently discover that the asset base has been eroded prior to the insolvency filing through preferential, undervalued, fraudulent, or extortionate (PUFE) transactions.
            </p>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-8">
              Under Section 66 of the IBC, it is the statutory duty of the Resolution Professional (RP) to identify these transactions and apply to the National Company Law Tribunal (NCLT) for their reversal. This is impossible without a rigorous Forensic Audit.
            </p>
            
            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">How Does the Forensic Accountant Work With the Resolution Professional?</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              The Resolution Professional (RP) is appointed by the NCLT to manage the company during the CIRP. The RP appoints the forensic accountant - often from a panel of professionals - and provides them access to the company's records.
            </p>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-8">
              The forensic accountant reports to the RP and, through the RP, to the Committee of Creditors. If the forensic investigation uncovers evidence of fraud or serious governance failure, the RP has the authority to approach the NCLT to set aside the relevant transactions and recover value for creditors.
            </p>
            
            <div className="bg-white p-8 border-l-4 border-[#731919] shadow-sm mb-12">
              <h4 className="text-[14px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#731919] mb-4">What Does the NCLT Expect From a Forensic Report?</h4>
              <ul className="list-disc pl-5 space-y-3 text-[16px] text-[#45474c]">
                <li><strong>Evidence-based:</strong> Every finding must be supported by documentary evidence.</li>
                <li><strong>Clear and structured:</strong> The NCLT is not an accounting body; the report must be readable by lawyers and judges.</li>
                <li><strong>Specific:</strong> Vague conclusions do not help; the report must name transactions, amounts, dates, and parties.</li>
                <li><strong>Objective:</strong> A forensic accountant is not an advocate for the creditors or the promoter; they present the facts.</li>
              </ul>
            </div>

            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">Can Promoters Challenge the Forensic Report?</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              Yes. Promoters have the right to respond to forensic findings in NCLT proceedings. This is why the quality of forensic documentation is so important - findings that are not clearly supported by evidence are vulnerable to challenge.
            </p>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              <strong>Verdict:</strong> Forensic accounting in IBC cases is where financial investigation meets the justice system. The quality of the forensic work directly determines how much creditors recover - and whether wrongdoers are held accountable.
            </p>
            <p className="text-[16px] leading-[28px] text-[#45474c] font-semibold">
              At Northrop Management, our IBC forensic engagements are structured specifically to meet NCLT standards - documented, defensible, and clear.
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

export default ForensicAuditIbc;
