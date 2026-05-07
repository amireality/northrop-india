import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const StrategicRealignmentFreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>The Strategic Realignment of India’s Freight Ecosystem</title>
     
      </Helmet>

      <div className="bg-[#ffffff] text-[#171c20] antialiased [font-family:'Inter']">
        <main className="max-w-[1200px] mx-auto px-[32px] py-[20px]">
          {/* Header Text */}
          <div className="mb-[40px]">
            <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.2em] text-[#43474f] uppercase">
              Executive Report | Series 2026
            </span>
          </div>

          {/* Hero Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-[64px] mb-[20px] border-b border-[#c4c6d0] pb-[64px]">
            <div className="md:col-span-7 flex flex-col justify-center">
              <h1 className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#001736] mb-[24px]">
                The Strategic Realignment of India’s Freight Ecosystem: A Paradigm Shift in Connectivity
              </h1>
              <p className="font-[Inter] text-[18px] font-normal leading-[1.6] text-[#43474f] leading-relaxed">
                Analyzing the structural transition from road-dominant logistics to a rail-centric multimodal framework, driving efficiency and global competitiveness.
              </p>
            </div>
            <div className="md:col-span-5 aspect-[4/5] bg-[#eaeef4] overflow-hidden">
              <img
                alt="Modern cargo train"
                className="w-full h-full object-cover"
                src="/insight/unnamed1.png"
              />
            </div>
          </section>

          {/* Executive Summary & Metrics */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-[64px] mb-[64px] items-start">
            <div className="md:col-span-2">
              <h2 className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] mb-[16px] border-b border-[#c4c6d0] pb-[8px] w-fit">
                Executive Summary
              </h2>
              <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#171c20] mb-[24px]">
                India's logistics sector is undergoing a profound structural correction. Historically, the ecosystem has relied on a skewed modal mix, with road transport accounting for approximately 70% of freight volume, while rail—despite its inherent scalability—remained at 25%. This imbalance has significant economic implications.
              </p>
            </div>
            <div className="bg-[#f0f4fa] p-[24px] border border-[#c4c6d0]">
              <h3 className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] mb-[24px]">
                Cost Per Tonne-Km
              </h3>
              <div className="space-y-[16px]">
                <div className="flex justify-between items-end">
                  <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#43474f]">
                    Road Freight
                  </span>
                  <span className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736]">
                    ₹3.78
                  </span>
                </div>
                <div className="w-full bg-[#c4c6d0] h-[2px]">
                  <div className="bg-[#001736] h-full w-full"></div>
                </div>
                <div className="flex justify-between items-end pt-[16px]">
                  <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#43474f]">
                    Rail Freight
                  </span>
                  <span className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736]">
                    ₹1.90
                  </span>
                </div>
                <div className="w-full bg-[#c4c6d0] h-[2px]">
                  <div className="bg-[#001736] h-full w-1/2"></div>
                </div>
              </div>
            </div>
          </section>

          {/* The Shift: Bento Grid Style */}
          <section className="mb-[64px]">
            <h2 className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] mb-[24px] border-b border-[#c4c6d0] pb-[8px] w-fit">
              The Infrastructure Pivot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px]">
              <div className="md:col-span-2 border border-[#c4c6d0] p-[24px]">
                <h3 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] mb-[16px]">
                  Dedicated Freight Corridors (DFCs)
                </h3>
                <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                  High-capacity, high-speed rail corridors designed exclusively for goods transport, decoupling freight from passenger traffic to ensure transit predictability.
                </p>
              </div>
              <div className="border border-[#c4c6d0] p-[24px] flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-[#001736] text-[32px] mb-[8px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                    hub
                  </span>
                  <h4 className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736]">
                    Gati Shakti
                  </h4>
                </div>
                <p className="font-[Inter] text-[14px] font-medium leading-[1.4] tracking-[0.02em]">
                  National Master Plan for multi-modal connectivity.
                </p>
              </div>
              <div className="border border-[#c4c6d0] p-[24px] bg-[#001736] text-[#ffffff] flex flex-col justify-between">
                <span className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em]">
                  306
                </span>
                <h4 className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#7594ca]">
                  Multi-Modal GCTs
                </h4>
              </div>
            </div>
          </section>

          {/* Economic Growth & Tech */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-[64px] mb-[64px]">
            <div className="md:col-span-5 space-y-[40px]">
              <div>
                <h2 className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] mb-[16px] border-b border-[#c4c6d0] pb-[8px] w-fit">
                  Economic Growth
                </h2>
                <div className="py-[24px]">
                  <div className="flex items-baseline gap-[8px]">
                    <span className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#001736]">
                      ₹8,600
                    </span>
                    <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">
                      Crore
                    </span>
                  </div>
                  <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                    Private investment leveraged via Terminal policies.
                  </p>
                </div>
                <div className="py-[24px] border-t border-[#c4c6d0]">
                  <div className="flex items-baseline gap-[8px]">
                    <span className="font-[Newsreader] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#001736]">
                      ₹12,608
                    </span>
                    <span className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] uppercase">
                      Crore
                    </span>
                  </div>
                  <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                    Q3 Freight Revenue (Historical High).
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 bg-[#eaeef4] p-[40px] border border-[#c4c6d0]">
              <div className="flex items-start gap-[24px] mb-[24px]">
                <span className="material-symbols-outlined text-[#001736] text-[40px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                  dataset
                </span>
                <div>
                  <h3 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736]">
                    Technological Transformation
                  </h3>
                  <p className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#43474f] mb-[24px] uppercase">
                    Unified Logistics Interface Platform (ULIP)
                  </p>
                </div>
              </div>
              <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#171c20] leading-relaxed border-t border-[#c4c6d0] pt-[24px]">
                ULIP serves as the digital backbone, integrating 30+ systems across 7 ministries. It provides real-time visibility, reduces documentation overhead, and enables data-driven decision-making for both public and private stakeholders in the freight ecosystem.
              </p>
            </div>
          </section>

          {/* Strategic Imperatives List */}
          <section className="mb-[64px] bg-[#f0f4fa] p-[64px] border border-[#c4c6d0]">
            <h2 className="font-[Newsreader] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#001736] mb-[40px] text-center">
              Strategic Imperatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
              <div className="text-center px-[24px]">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#001736] text-[#ffffff] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] mb-[24px]">
                  01
                </div>
                <h4 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] mb-[16px]">
                  Enhancing Rail Accessibility
                </h4>
                <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                  Expanding first-and-last mile rail connectivity to industrial clusters.
                </p>
              </div>
              <div className="text-center px-[24px]">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#001736] text-[#ffffff] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] mb-[24px]">
                  02
                </div>
                <h4 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] mb-[16px]">
                  Actualizing Multimodal Integration
                </h4>
                <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                  Seamless transfer between road, rail, and port infrastructure.
                </p>
              </div>
              <div className="text-center px-[24px]">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#001736] text-[#ffffff] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] mb-[24px]">
                  03
                </div>
                <h4 className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] mb-[16px]">
                  Institutionalizing Predictability
                </h4>
                <p className="font-[Inter] text-[16px] font-normal leading-[1.5] text-[#43474f]">
                  Deploying fixed schedules and transparent pricing for freight ops.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="max-w-[800px] mx-auto text-center mb-[20px]">
            <h2 className="font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#43474f] mb-[16px] tracking-widest uppercase">
              CONCLUSION
            </h2>
            <p className="font-[Newsreader] text-[24px] font-medium leading-[1.3] text-[#001736] italic leading-relaxed">
              "The realignment of India’s freight strategy is not merely an infrastructure upgrade but a strategic necessity. By optimizing modal shares, India positions its manufacturing sector as a central pillar of the global supply chain, underpinned by cost-efficiency and institutional reliability."
            </p>
            <div className="mt-[24px] font-[Inter] text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#001736] uppercase">
              BOTTOM LINE ANALYSIS
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default StrategicRealignmentFreight;
