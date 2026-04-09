import { Link } from 'react-router-dom';

const DueDiligenceBanner = () => {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="bg-white border-b border-[#E8E5DE] px-4 md:px-[6vw] pt-[48px] lg:pt-[80px] pb-[40px] lg:pb-[64px]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B8862A] mb-[20px] md:mb-[28px]">
            Northrop Management · Due Diligence Practice
          </span>
          <h1 className="font-serif text-[clamp(42px,6.5vw,84px)] font-bold leading-[1.05] text-[#0B1929] max-w-[950px] mb-[24px] md:mb-[32px]">
            You cannot afford to discover<br/>the problem <em className="italic text-[#1E4D8C]">after</em> the deal closes.
          </h1>
          <p className="max-w-[520px] text-[15px] md:text-[16px] font-normal text-[#1E2D3D] leading-[1.6] md:leading-[1.8] mb-[32px] md:mb-[40px]">
            Every acquisition, credit decision, and vendor relationship carries risk that is invisible from the surface. Northrop's Due Diligence practice finds what others miss — before it costs you.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[24px]">
            <Link to="/contact" className="inline-flex justify-center items-center bg-[#0B1929] hover:bg-[#1B3F6E] transition-colors text-white text-[12px] font-semibold tracking-[0.12em] uppercase px-[32px] md:px-[38px] py-[14px] md:py-[15px] w-full sm:w-auto">
              Request a Consultation
            </Link>
            <a href="#service-content" className="inline-flex justify-center items-center text-[12px] font-semibold tracking-[0.08em] uppercase text-[#0B1929] border-b-2 border-[#D4D0C8] pb-[2px] hover:text-[#1E4D8C] hover:border-[#1E4D8C] transition-colors w-full sm:w-auto mt-2 sm:mt-0">
              Explore Services ↓
            </a>
          </div>
        </div>
      </section>

      {/* ══ BLUE ACCENT RULE ══ */}
      <div className="h-[3px] bg-gradient-to-r from-[#1E4D8C] via-[#E8EFF8] to-transparent w-full"></div>
    </>
  );
};

export default DueDiligenceBanner;
