
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import DueDiligenceBanner from '../../components/services/DueDiligenceBanner';

const RelatedPartyReviewPage = () => {
  return (
    <div className="bg-white text-[#1E2D3D]  ">
      <DueDiligenceBanner />

      {/* ══ DYNAMIC SERVICE CONTENT ══ */}
      <section id="service-content" className="py-[48px] lg:py-[80px] px-4 md:px-[6vw] border-b border-[#E8E5DE] bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex flex-wrap items-center gap-[10px] md:gap-[14px] mb-[20px] md:mb-[24px]">
            <span className="font-serif text-[13px] md:text-[14px] font-semibold text-[#5C6B7A] tracking-[0.05em]">09 /</span>
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase text-[#1E4D8C] bg-[#EBF0F7] px-[10px] md:px-[12px] py-[4px]">
              Related Party Review
            </span>
          </div>

          <h2
            className="font-serif text-[clamp(32px,3.2vw,44px)] font-bold leading-[1.15] text-[#0B1929] max-w-[780px] mb-[20px] md:mb-[24px]"
            dangerouslySetInnerHTML={{ __html: `The most expensive transactions in your<br/>target's history were with <em class="italic text-[#1E4D8C]">entities the promoter owns.</em>` }}
          />

          <p
            className="font-serif text-[18px] md:text-[20px] italic font-medium text-[#1E2D3D] leading-[1.5] md:leading-[1.65] max-w-[680px] mb-[36px] md:mb-[48px] pl-[16px] md:pl-[22px] border-l-[3px] border-[#1E4D8C]"
            dangerouslySetInnerHTML={{ __html: `Related party transactions are the single most common vehicle for value extraction in Indian mid-market companies. They are legal, disclosed — and they can destroy deal economics post-acquisition.` }}
          />

          {/* ══ PAIN BLOCK ══ */}
          <div className="mb-[40px] md:mb-[56px] max-w-[820px] bg-[#FBF0EF] border border-[#FBF0EF] border-l-[4px] border-l-[#7A1E1E] p-[24px] md:p-[32px]">
            <div className="flex items-center gap-[8px] text-[10px] md:text-[11px] font-bold tracking-[0.16em] uppercase text-[#7A1E1E] mb-[16px] md:mb-[18px]">
              <span className="w-[6px] h-[6px] bg-[#7A1E1E] rounded-full shrink-0"></span>
              What related party transactions actually look like
            </div>
            <ul className="flex flex-col">

              <li className="grid grid-cols-[20px_1fr] md:grid-cols-[28px_1fr] py-[10px] md:py-[13px] border-b border-[#7A1E1E]/10 last:border-0 last:pb-0 first:pt-0 text-[14px] md:text-[15px] font-normal text-[#0B1929] leading-[1.5] md:leading-[1.65]">
                <span className="text-[#7A1E1E] font-bold text-[13px] md:text-[14px] pt-[2px] md:pt-[1px]">→</span>
                <span>Rent paid to promoter family trust at 3× market rate — ₹1.2 Cr walking out annually</span>
              </li>
              <li className="grid grid-cols-[20px_1fr] md:grid-cols-[28px_1fr] py-[10px] md:py-[13px] border-b border-[#7A1E1E]/10 last:border-0 last:pb-0 first:pt-0 text-[14px] md:text-[15px] font-normal text-[#0B1929] leading-[1.5] md:leading-[1.65]">
                <span className="text-[#7A1E1E] font-bold text-[13px] md:text-[14px] pt-[2px] md:pt-[1px]">→</span>
                <span>Management fees to a holding company: a recurring charge with no documented service</span>
              </li>
              <li className="grid grid-cols-[20px_1fr] md:grid-cols-[28px_1fr] py-[10px] md:py-[13px] border-b border-[#7A1E1E]/10 last:border-0 last:pb-0 first:pt-0 text-[14px] md:text-[15px] font-normal text-[#0B1929] leading-[1.5] md:leading-[1.65]">
                <span className="text-[#7A1E1E] font-bold text-[13px] md:text-[14px] pt-[2px] md:pt-[1px]">→</span>
                <span>Loans to group companies at 0% interest — unsecured and effectively unrecoverable</span>
              </li>
              <li className="grid grid-cols-[20px_1fr] md:grid-cols-[28px_1fr] py-[10px] md:py-[13px] border-b border-[#7A1E1E]/10 last:border-0 last:pb-0 first:pt-0 text-[14px] md:text-[15px] font-normal text-[#0B1929] leading-[1.5] md:leading-[1.65]">
                <span className="text-[#7A1E1E] font-bold text-[13px] md:text-[14px] pt-[2px] md:pt-[1px]">→</span>
                <span>Sales to related parties at below-market prices — revenue suppressed, profit shifted externally</span>
              </li>
              <li className="grid grid-cols-[20px_1fr] md:grid-cols-[28px_1fr] py-[10px] md:py-[13px] border-b border-[#7A1E1E]/10 last:border-0 last:pb-0 first:pt-0 text-[14px] md:text-[15px] font-normal text-[#0B1929] leading-[1.5] md:leading-[1.65]">
                <span className="text-[#7A1E1E] font-bold text-[13px] md:text-[14px] pt-[2px] md:pt-[1px]">→</span>
                <span>Key IP, trademarks, or plant owned by a promoter entity — paid as licence fee by the target</span>
              </li>
            </ul>
          </div>

          {/* ══ DELIVERABLES ══ */}
          <div className="flex items-center gap-[10px] text-[10px] md:text-[11px] font-bold tracking-[0.16em] uppercase text-[#1E4D8C] mb-[16px] md:mb-[20px]">
            What we deliver
            <div className="flex-1 max-w-[60px] h-[2px] bg-[#B8CCE4]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-auto-fit gap-[1px] bg-[#D4D0C8] border border-[#D4D0C8] max-w-[900px] mb-[40px] md:mb-[48px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>

            <div className="relative bg-white p-[20px] md:p-[28px_26px]">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#1E4D8C]"></div>
              <h4 className="  text-[13px] md:text-[14px] font-bold text-[#0B1929] mb-[8px] md:mb-[10px] leading-[1.3] md:leading-[1.4]">Related Party Identification</h4>
              <p className="text-[13px] font-normal text-[#5C6B7A] leading-[1.6] md:leading-[1.7]">Full MCA-based entity relationship mapping — uncovering undisclosed related parties, beneficial ownerships, and family connections.</p>
            </div>
            <div className="relative bg-white p-[20px] md:p-[28px_26px]">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#1E4D8C]"></div>
              <h4 className="  text-[13px] md:text-[14px] font-bold text-[#0B1929] mb-[8px] md:mb-[10px] leading-[1.3] md:leading-[1.4]">Transaction Terms Review</h4>
              <p className="text-[13px] font-normal text-[#5C6B7A] leading-[1.6] md:leading-[1.7]">Are transactions genuinely at arm's length? We benchmark pricing, interest rates, and fees against market comparables.</p>
            </div>
            <div className="relative bg-white p-[20px] md:p-[28px_26px]">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#1E4D8C]"></div>
              <h4 className="  text-[13px] md:text-[14px] font-bold text-[#0B1929] mb-[8px] md:mb-[10px] leading-[1.3] md:leading-[1.4]">PUFE Transaction Identification</h4>
              <p className="text-[13px] font-normal text-[#5C6B7A] leading-[1.6] md:leading-[1.7]">Identifying Preferential, Undervalued, Fraudulent, and Extortionate transactions — critical for IBC CIRP mandates.</p>
            </div>
            <div className="relative bg-white p-[20px] md:p-[28px_26px]">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#1E4D8C]"></div>
              <h4 className="  text-[13px] md:text-[14px] font-bold text-[#0B1929] mb-[8px] md:mb-[10px] leading-[1.3] md:leading-[1.4]">NCLT Submission Ready</h4>
              <p className="text-[13px] font-normal text-[#5C6B7A] leading-[1.6] md:leading-[1.7]">Forensic-grade documentation of related party transactions structured for submission to NCLT in insolvency proceedings.</p>
            </div>
          </div>

          {/* ══ OUTCOMES ══ */}
          <div className="flex flex-wrap gap-[8px] md:gap-[10px] mb-[36px] md:mb-[44px] max-w-[820px]">

            <div className="flex items-center gap-[6px] md:gap-[7px] text-[11px] md:text-[11.5px] font-semibold tracking-[0.05em] text-[#1B3F6E] bg-[#EBF0F7] border border-[#B8CCE4] px-[12px] md:px-[16px] py-[6px] md:py-[7px]">
              <span className="font-bold text-[#1E4D8C] text-[12px] md:text-[13px]">✓</span> Value Leakage Quantified
            </div>
            <div className="flex items-center gap-[6px] md:gap-[7px] text-[11px] md:text-[11.5px] font-semibold tracking-[0.05em] text-[#1B3F6E] bg-[#EBF0F7] border border-[#B8CCE4] px-[12px] md:px-[16px] py-[6px] md:py-[7px]">
              <span className="font-bold text-[#1E4D8C] text-[12px] md:text-[13px]">✓</span> PUFE Transactions Identified
            </div>
            <div className="flex items-center gap-[6px] md:gap-[7px] text-[11px] md:text-[11.5px] font-semibold tracking-[0.05em] text-[#1B3F6E] bg-[#EBF0F7] border border-[#B8CCE4] px-[12px] md:px-[16px] py-[6px] md:py-[7px]">
              <span className="font-bold text-[#1E4D8C] text-[12px] md:text-[13px]">✓</span> Deal Adjustment Leverage
            </div>
            <div className="flex items-center gap-[6px] md:gap-[7px] text-[11px] md:text-[11.5px] font-semibold tracking-[0.05em] text-[#1B3F6E] bg-[#EBF0F7] border border-[#B8CCE4] px-[12px] md:px-[16px] py-[6px] md:py-[7px]">
              <span className="font-bold text-[#1E4D8C] text-[12px] md:text-[13px]">✓</span> NCLT-Ready Documentation
            </div>
            <div className="flex items-center gap-[6px] md:gap-[7px] text-[11px] md:text-[11.5px] font-semibold tracking-[0.05em] text-[#1B3F6E] bg-[#EBF0F7] border border-[#B8CCE4] px-[12px] md:px-[16px] py-[6px] md:py-[7px]">
              <span className="font-bold text-[#1E4D8C] text-[12px] md:text-[13px]">✓</span> Post-Close Governance Plan
            </div>
          </div>

          {/* ══ SECTION CTA ══ */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-[16px] sm:gap-[24px]">
            <Link to="/contact" className="inline-flex justify-center items-center bg-[#0B1929] hover:bg-[#1B3F6E] transition-colors text-white text-[11px] md:text-[12px] font-semibold tracking-[0.1em] uppercase px-[24px] md:px-[28px] py-[12px] md:py-[13px] w-full sm:w-auto">
              Commission Related Party Review
            </Link>
            <Link to="/contact" className="inline-flex justify-center items-center border-[1.5px] border-[#D4D0C8] hover:border-[#1E4D8C] hover:text-[#1E4D8C] transition-colors text-[#0B1929] text-[11px] md:text-[12px] font-semibold tracking-[0.08em] uppercase px-[20px] md:px-[24px] py-[11px] md:py-[12px] w-full sm:w-auto">
              IBC / NCLT Inquiry
            </Link>
          </div>

          {true && (
            <p className="mt-[20px] text-[12px] md:text-[13px] font-normal italic text-[#5C6B7A] leading-[1.5] md:leading-[1.65] max-w-[600px] pl-[12px] md:pl-[14px] border-l-[2px] border-[#D4D0C8]">
              Northrop has served as Transaction Auditor for CIRP cases including a Radisson Blu franchise (₹80 Cr+ exposure).
            </p>
          )}

        </div>
      </section>

    </div>
  );
};

export default RelatedPartyReviewPage;
