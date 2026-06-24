import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Fcra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans antialiased overflow-x-hidden">
      <Helmet>
        <title>FCRA Compliance Mastery | Northrop India</title>
      </Helmet>

      <main className="w-full">
        {/* Hero Header */}
        <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-[20px] md:px-[64px] bg-[#001F3F] overflow-hidden">
          <div className="absolute inset-0 ">
            <img 
              alt="Strategic background" 
              className="w-full h-full object-cover" 
              src="/insightpage/fcra.jpg" 
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-white border border-white/30 px-3 py-1 bg-white/10">
                2026 REGULATORY MANDATE
              </span>
            </div> */}
            <h1 className="font-serif text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-bold text-white uppercase tracking-tighter mb-8">
              FCRA Compliance Mastery: <br />
              <span className="text-white/80">Navigating India's 2026 Amendment and the New Designated Authority Framework</span>
            </h1>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 px-[20px] md:px-[64px] bg-[#f8f9fa]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px]">
            <div className="md:col-span-4 border-l-4 border-[#001F3F] pl-8">
              <h2 className="text-[12px] leading-[16px] font-bold tracking-[0.2em] uppercase text-[#4A5568] mb-4">Executive Summary</h2>
              <p className="font-serif text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold text-[#001F3F]">
                THE 2026 FCRA <br />INFLECTION POINT.
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-[16px] md:text-[18px] leading-[28px] text-[#191c1d] mb-6">
                The Foreign Contribution Regulation Act (FCRA) 2026 Amendment Bill represents the most significant shift in India’s regulatory landscape for foreign funding in a decade. By introducing the 'Designated Authority Framework', the Ministry of Home Affairs has centralized oversight, moving from periodic audits to real-time investigative monitoring.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[28px] text-[#191c1d]">
                For institutional recipients and high-net-worth foundations, compliance is no longer a reporting exercise—it is a forensic necessity. The amendment redefines "Foreign Contribution" to include multi-layered hybrid vehicles, mandating a total reconciliation of funds at the primary source.
              </p>
            </div>
          </div>
        </section>

        {/* The Enforcement Backdrop (Stats) */}
        <section className="py-24 bg-[#001F3F] text-white">
          <div className="max-w-[1200px] mx-auto px-[20px] md:px-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <div>
                <div className="font-serif text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-bold text-[#7c5800] mb-2">20,000+</div>
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.2em] uppercase text-white/60">REGISTRATION REVOCATIONS</div>
              </div>
              <div>
                <div className="font-serif text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-bold text-[#7c5800] mb-2">₹22,000Cr</div>
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.2em] uppercase text-white/60">FOREIGN CONTRIBUTIONS FLOW</div>
              </div>
              <div>
                <div className="font-serif text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-bold text-[#7c5800] mb-2">100%</div>
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.2em] uppercase text-white/60">REAL-TIME MONITORING MANDATE</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 Amendment Changes Module */}
        <section className="py-24 px-[20px] md:px-[64px] bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-[12px] leading-[16px] font-bold tracking-[0.3em] uppercase text-[#4A5568] mb-4">Amendment Modules</h2>
              <h3 className="font-serif text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold text-[#001F3F]">TECHNICAL AMENDMENT PILLARS 2026</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-10 border border-[#c5c6cd]/50 hover:border-[#001F3F] transition-all group">
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#4A5568] mb-8">REG_01</div>
                <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-4 group-hover:text-[#7c5800] transition-colors">Designated Authority</h4>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">The creation of an independent authority with quasi-judicial powers to freeze accounts without prior notice.</p>
              </div>
              <div className="bg-white p-10 border border-[#c5c6cd]/50 hover:border-[#001F3F] transition-all group">
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#4A5568] mb-8">REG_02</div>
                <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-4 group-hover:text-[#7c5800] transition-colors">Asset Control</h4>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Mandatory mapping of all physical and digital assets created via foreign contribution with QR-linkage.</p>
              </div>
              <div className="bg-white p-10 border border-[#c5c6cd]/50 hover:border-[#001F3F] transition-all group">
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#4A5568] mb-8">REG_03</div>
                <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-4 group-hover:text-[#7c5800] transition-colors">Personal Liability</h4>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Statutory shift from corporate liability to personal board-level liability for misreporting of utilization certificates.</p>
              </div>
              <div className="bg-white p-10 border border-[#c5c6cd]/50 hover:border-[#001F3F] transition-all group">
                <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#4A5568] mb-8">REG_04</div>
                <h4 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-4 group-hover:text-[#7c5800] transition-colors">Centralized Intelligence</h4>
                <p className="text-[14px] leading-[20px] text-[#4A5568]">Integration of the FCRA portal with CBDT, ED, and MCA for forensic data triangulation across all financial filings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practitioner Framework Module */}
        <section className="py-24 px-[20px] md:px-[64px] bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto text-center border border-[#c5c6cd]/50 p-16 relative overflow-hidden bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#001F3F]"></div>
            <h3 className="text-[12px] leading-[16px] font-bold tracking-[0.2em] uppercase text-[#4A5568] mb-12">Mastery Framework</h3>
            <div className="flex flex-col gap-12 text-left">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <span className="font-serif text-[32px] md:text-[40px] font-bold text-[#4A5568]/30">01</span>
                <div>
                  <h5 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-2">Renewal Engineering</h5>
                  <p className="text-[16px] leading-[24px] text-[#4A5568]">Pre-empting the 6-month expiry window with institutional track-record audits.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <span className="font-serif text-[32px] md:text-[40px] font-bold text-[#4A5568]/30">02</span>
                <div>
                  <h5 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-2">Fund Reconciliation</h5>
                  <p className="text-[16px] leading-[24px] text-[#4A5568]">Matching project-specific bank statements with utilization certificates on a weekly basis.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <span className="font-serif text-[32px] md:text-[40px] font-bold text-[#4A5568]/30">03</span>
                <div>
                  <h5 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-2">Board Compliance Briefing</h5>
                  <p className="text-[16px] leading-[24px] text-[#4A5568]">Structured quarterly disclosures to management regarding foreign donor risk profiles.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <span className="font-serif text-[32px] md:text-[40px] font-bold text-[#4A5568]/30">04</span>
                <div>
                  <h5 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-2">Pre-emptive Reviews</h5>
                  <p className="text-[16px] leading-[24px] text-[#4A5568]">Simulating a Designated Authority audit to identify gaps in administrative expenditure limits.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <span className="font-serif text-[32px] md:text-[40px] font-bold text-[#4A5568]/30">05</span>
                <div>
                  <h5 className="font-serif text-[24px] leading-[32px] font-semibold text-[#001F3F] mb-2">Asset Mapping</h5>
                  <p className="text-[16px] leading-[24px] text-[#4A5568]">Establishing a physical asset register exclusively for FCRA-funded infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready for 2026 Checklist */}
        <section className="py-24 px-[20px] md:px-[64px] bg-[#001F3F]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px] items-center">
            <div className="text-white">
              <h3 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold mb-6">IS YOUR ORGANIZATION <br />READY FOR 2026?</h3>
              <p className="text-[16px] md:text-[18px] leading-[28px] text-white/80 mb-12">Implementation readiness is the only shield against retroactive penalties and account freezing.</p>
              <button className="bg-[#7c5800] text-white px-8 py-4 text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase hover:bg-[#5e4200] transition-all">
                REQUEST COMPLIANCE AUDIT
              </button>
            </div>
            <div className="bg-white p-12">
              <div className="space-y-8">
                <div className="flex items-center gap-6 border-b border-[#c5c6cd]/50 pb-6">
                  <span className="material-symbols-outlined text-[#001F3F]">check_box_outline_blank</span>
                  <span className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase text-[#191c1d]">Update PAN-level donor mapping</span>
                </div>
                <div className="flex items-center gap-6 border-b border-[#c5c6cd]/50 pb-6">
                  <span className="material-symbols-outlined text-[#001F3F]">check_box_outline_blank</span>
                  <span className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase text-[#191c1d]">Recalibrate admin overhead to 20% max</span>
                </div>
                <div className="flex items-center gap-6 border-b border-[#c5c6cd]/50 pb-6">
                  <span className="material-symbols-outlined text-[#001F3F]">check_box_outline_blank</span>
                  <span className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase text-[#191c1d]">Digitize physical asset QR linkage</span>
                </div>
                <div className="flex items-center gap-6 border-b border-[#c5c6cd]/50 pb-6">
                  <span className="material-symbols-outlined text-[#001F3F]">check_box_outline_blank</span>
                  <span className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase text-[#191c1d]">Formalize quarterly board risk review</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-[#001F3F]">check_box_outline_blank</span>
                  <span className="text-[14px] leading-[20px] font-bold tracking-[0.05em] uppercase text-[#191c1d]">Audit primary source of secondary donors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-24 px-[20px] md:px-[64px] bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto p-12 bg-[#e2e2e5] border-l-8 border-[#001F3F]">
            <h3 className="text-[12px] leading-[16px] font-bold tracking-[0.2em] uppercase text-[#4A5568] mb-6">Key Takeaways</h3>
            <div className="space-y-6">
              <p className="text-[16px] md:text-[18px] leading-[28px] italic text-[#001F3F] font-serif">
                "Compliance in 2026 is no longer a reactive filing exercise. The 'Designated Authority' mandates a shift toward forensic-level fund tracking and absolute board-level accountability. Organizations that fail to institutionalize reconciliation will face immediate operational disruption."
              </p>
              <div className="text-[12px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#191c1d]">
                — NORTHROP STRATEGIC ADVISORY MANDATE
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Fcra;