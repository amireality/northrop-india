
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import DueDiligenceBanner from '../../components/services/DueDiligenceBanner';

const SellSideFddPage = () => {
  return (
    <div className="bg-white text-[#1E2D3D]  ">
      <DueDiligenceBanner />

      {/* ══ DYNAMIC SERVICE CONTENT ══ */}
      <section id="service-content" className="py-[48px] lg:py-[80px] px-4 md:px-[6vw] border-b border-[#E8E5DE] bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex flex-wrap items-center gap-[10px] md:gap-[14px] mb-[20px] md:mb-[24px]">
            <span className="font-serif text-[13px] md:text-[14px] font-semibold text-[#5C6B7A] tracking-[0.05em]">02 /</span>
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase text-[#1E4D8C] bg-[#EBF0F7] px-[10px] md:px-[12px] py-[4px]">
              Sell-Side Financial Due Diligence
            </span>
          </div>

          <h2
            className="font-serif text-[clamp(32px,3.2vw,44px)] font-bold leading-[1.15] text-[#0B1929] max-w-[780px] mb-[20px] md:mb-[24px]"
            dangerouslySetInnerHTML={{ __html: `Your buyer's FDD team is about to find<br/>everything you <em class="italic text-[#1E4D8C]">hoped they wouldn't.</em>` }}
          />

          <p
            className="font-serif text-[18px] md:text-[20px] italic font-medium text-[#1E2D3D] leading-[1.5] md:leading-[1.65] max-w-[680px] mb-[36px] md:mb-[48px] pl-[16px] md:pl-[22px] border-l-[3px] border-[#1E4D8C]"
            dangerouslySetInnerHTML={{ __html: `Sell-side FDD is not about concealment. It is about finding the problems first — so you control the narrative, the timeline, and the price.` }}
          />

          {/* ══ PAIN BLOCK ══ */}
          <div className="mb-[40px] md:mb-[56px] max-w-[820px] bg-[#FBF0EF] border border-[#FBF0EF] border-l-[4px] border-l-[#7A1E1E] p-[24px] md:p-[32px]">
            <div className="flex items-center gap-[8px] text-[10px] md:text-[11px] font-bold tracking-[0.16em] uppercase text-[#7A1E1E] mb-[16px] md:mb-[18px]">
              <span className="w-[6px] h-[6px] bg-[#7A1E1E] rounded-full shrink-0"></span>
              How deals collapse in the final stretch
            </div>
            <ul className="flex flex-col">

              <li className="grid grid-cols-[20px_1fr] md:grid-cols-[28px_1fr] py-[10px] md:py-[13px] border-b border-[#7A1E1E]/10 last:border-0 last:pb-0 first:pt-0 text-[14px] md:text-[15px] font-normal text-[#0B1929] leading-[1.5] md:leading-[1.65]">
                <span className="text-[#7A1E1E] font-bold text-[13px] md:text-[14px] pt-[2px] md:pt-[1px]">→</span>
                <span>Buyer's FDD discovers a tax demand in week 8 — they reprice by 30% or walk</span>
              </li>
              <li className="grid grid-cols-[20px_1fr] md:grid-cols-[28px_1fr] py-[10px] md:py-[13px] border-b border-[#7A1E1E]/10 last:border-0 last:pb-0 first:pt-0 text-[14px] md:text-[15px] font-normal text-[#0B1929] leading-[1.5] md:leading-[1.65]">
                <span className="text-[#7A1E1E] font-bold text-[13px] md:text-[14px] pt-[2px] md:pt-[1px]">→</span>
                <span>Working capital peg disputes that drag on for months after close</span>
              </li>
              <li className="grid grid-cols-[20px_1fr] md:grid-cols-[28px_1fr] py-[10px] md:py-[13px] border-b border-[#7A1E1E]/10 last:border-0 last:pb-0 first:pt-0 text-[14px] md:text-[15px] font-normal text-[#0B1929] leading-[1.5] md:leading-[1.65]">
                <span className="text-[#7A1E1E] font-bold text-[13px] md:text-[14px] pt-[2px] md:pt-[1px]">→</span>
                <span>Management accounts that contradict audited financials — trust collapses overnight</span>
              </li>
              <li className="grid grid-cols-[20px_1fr] md:grid-cols-[28px_1fr] py-[10px] md:py-[13px] border-b border-[#7A1E1E]/10 last:border-0 last:pb-0 first:pt-0 text-[14px] md:text-[15px] font-normal text-[#0B1929] leading-[1.5] md:leading-[1.65]">
                <span className="text-[#7A1E1E] font-bold text-[13px] md:text-[14px] pt-[2px] md:pt-[1px]">→</span>
                <span>Earn-out structures imposed because buyers simply don't believe your EBITDA</span>
              </li>
              <li className="grid grid-cols-[20px_1fr] md:grid-cols-[28px_1fr] py-[10px] md:py-[13px] border-b border-[#7A1E1E]/10 last:border-0 last:pb-0 first:pt-0 text-[14px] md:text-[15px] font-normal text-[#0B1929] leading-[1.5] md:leading-[1.65]">
                <span className="text-[#7A1E1E] font-bold text-[13px] md:text-[14px] pt-[2px] md:pt-[1px]">→</span>
                <span>Signing delayed six months while you scramble to explain your own accounting policies</span>
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
              <h4 className="  text-[13px] md:text-[14px] font-bold text-[#0B1929] mb-[8px] md:mb-[10px] leading-[1.3] md:leading-[1.4]">Vendor Due Diligence Preparation</h4>
              <p className="text-[13px] font-normal text-[#5C6B7A] leading-[1.6] md:leading-[1.7]">A Northrop-prepared FDD report hands buyers confidence and accelerates their process — dramatically reducing retrade risk.</p>
            </div>
            <div className="relative bg-white p-[20px] md:p-[28px_26px]">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#1E4D8C]"></div>
              <h4 className="  text-[13px] md:text-[14px] font-bold text-[#0B1929] mb-[8px] md:mb-[10px] leading-[1.3] md:leading-[1.4]">Financial Story Architecture</h4>
              <p className="text-[13px] font-normal text-[#5C6B7A] leading-[1.6] md:leading-[1.7]">Normalising historical earnings, documenting one-off items, and building a clean EBITDA bridge that survives scrutiny.</p>
            </div>
            <div className="relative bg-white p-[20px] md:p-[28px_26px]">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#1E4D8C]"></div>
              <h4 className="  text-[13px] md:text-[14px] font-bold text-[#0B1929] mb-[8px] md:mb-[10px] leading-[1.3] md:leading-[1.4]">Working Capital Peg Defence</h4>
              <p className="text-[13px] font-normal text-[#5C6B7A] leading-[1.6] md:leading-[1.7]">Establishing a defensible working capital baseline before negotiations begin — so post-close adjustments go in your favour.</p>
            </div>
            <div className="relative bg-white p-[20px] md:p-[28px_26px]">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#1E4D8C]"></div>
              <h4 className="  text-[13px] md:text-[14px] font-bold text-[#0B1929] mb-[8px] md:mb-[10px] leading-[1.3] md:leading-[1.4]">Data Room Readiness</h4>
              <p className="text-[13px] font-normal text-[#5C6B7A] leading-[1.6] md:leading-[1.7]">Organising every document a buyer will request — so nothing surprises you when their team starts digging.</p>
            </div>
          </div>

          {/* ══ OUTCOMES ══ */}
          <div className="flex flex-wrap gap-[8px] md:gap-[10px] mb-[36px] md:mb-[44px] max-w-[820px]">

            <div className="flex items-center gap-[6px] md:gap-[7px] text-[11px] md:text-[11.5px] font-semibold tracking-[0.05em] text-[#1B3F6E] bg-[#EBF0F7] border border-[#B8CCE4] px-[12px] md:px-[16px] py-[6px] md:py-[7px]">
              <span className="font-bold text-[#1E4D8C] text-[12px] md:text-[13px]">✓</span> Faster Deal Execution
            </div>
            <div className="flex items-center gap-[6px] md:gap-[7px] text-[11px] md:text-[11.5px] font-semibold tracking-[0.05em] text-[#1B3F6E] bg-[#EBF0F7] border border-[#B8CCE4] px-[12px] md:px-[16px] py-[6px] md:py-[7px]">
              <span className="font-bold text-[#1E4D8C] text-[12px] md:text-[13px]">✓</span> Full-Price Protection
            </div>
            <div className="flex items-center gap-[6px] md:gap-[7px] text-[11px] md:text-[11.5px] font-semibold tracking-[0.05em] text-[#1B3F6E] bg-[#EBF0F7] border border-[#B8CCE4] px-[12px] md:px-[16px] py-[6px] md:py-[7px]">
              <span className="font-bold text-[#1E4D8C] text-[12px] md:text-[13px]">✓</span> No Last-Minute Retrades
            </div>
            <div className="flex items-center gap-[6px] md:gap-[7px] text-[11px] md:text-[11.5px] font-semibold tracking-[0.05em] text-[#1B3F6E] bg-[#EBF0F7] border border-[#B8CCE4] px-[12px] md:px-[16px] py-[6px] md:py-[7px]">
              <span className="font-bold text-[#1E4D8C] text-[12px] md:text-[13px]">✓</span> Clean Working Capital Peg
            </div>
            <div className="flex items-center gap-[6px] md:gap-[7px] text-[11px] md:text-[11.5px] font-semibold tracking-[0.05em] text-[#1B3F6E] bg-[#EBF0F7] border border-[#B8CCE4] px-[12px] md:px-[16px] py-[6px] md:py-[7px]">
              <span className="font-bold text-[#1E4D8C] text-[12px] md:text-[13px]">✓</span> Buyer Confidence
            </div>
          </div>

          {/* ══ SECTION CTA ══ */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-[16px] sm:gap-[24px]">
            <Link to="/contact" className="inline-flex justify-center items-center bg-[#0B1929] hover:bg-[#1B3F6E] transition-colors text-white text-[11px] md:text-[12px] font-semibold tracking-[0.1em] uppercase px-[24px] md:px-[28px] py-[12px] md:py-[13px] w-full sm:w-auto">
              Prepare for Sale
            </Link>
            <Link to="/contact" className="inline-flex justify-center items-center border-[1.5px] border-[#D4D0C8] hover:border-[#1E4D8C] hover:text-[#1E4D8C] transition-colors text-[#0B1929] text-[11px] md:text-[12px] font-semibold tracking-[0.08em] uppercase px-[20px] md:px-[24px] py-[11px] md:py-[12px] w-full sm:w-auto">
              Speak to an Advisor
            </Link>
          </div>

          {true && (
            <p className="mt-[20px] text-[12px] md:text-[13px] font-normal italic text-[#5C6B7A] leading-[1.5] md:leading-[1.65] max-w-[600px] pl-[12px] md:pl-[14px] border-l-[2px] border-[#D4D0C8]">
              Engage Northrop 3-6 months before running a sale process. The earlier the engagement, the better the outcome.
            </p>
          )}

        </div>
      </section>

    </div>
  );
};

export default SellSideFddPage;
