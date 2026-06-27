import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RealEstateInfrastructure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter'] antialiased selection:bg-[#fed488] selection:text-[#785a1a]">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-8 pt-24 pb-12 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-6 pr-8">
          <span className="text-[12px] font-bold text-[#775a19] uppercase tracking-widest block">Real Estate & Infrastructure</span>
          <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] font-semibold text-[#1c1b1b] tracking-[-0.02em]">
            Stabilize Cash Flows in High-Leverage, Long-Cycle Projects
          </h1>
          <p className="text-[18px] text-[#43474e] max-w-lg leading-[1.6]">
            Mitigate structural risks and enforce strict financial discipline across complex development portfolios. We re-engineer funding architectures to eliminate latency and maximize yield.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#000d22] text-white text-[16px] font-medium px-8 py-4 rounded-none hover:bg-[#455f88] transition-colors"
            >
              Discuss your situation
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border border-[#000d22] text-[#000d22] text-[16px] font-medium px-8 py-4 rounded-none hover:bg-[#f0f3ff] transition-colors"
            >
              30-min diagnostic
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 h-[500px] w-full relative bg-[#f6f3f2] border border-[#c4c6cf]">
          <img 
            alt="High-end infrastructure" 
            className="object-cover w-full h-full grayscale opacity-90 mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1KiEnAptMGUNAyR4h2FqIYBEuM07JD4-e9yHsROSxOnI5QXH3-H7Q9SzlmEmBGmIlbhtv4Q7WC-bz5HXoXrwrP-LCxQHMQw2aRRDsRcugFxibsHRaC4iMAm-bYrN3pH-kocjuGDLE1vmWQaqf2XyTSaYvN1KH_qcGuLnhbhZ_KPy-Mbgc-T_jEXft-T55QwmtUjjKzd9h8SSo_y8HKMuO4zFFmxwEbZ6NOtC6B04w3Ov23vM21pkbyylTsSCxpO4uIqoqwZqd5k0" 
          />
        </div>
      </section>

      {/* Targeted Outcomes */}
      <section className="max-w-[1280px] mx-auto px-8 py-12">
        <div className="mb-10">
          <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#1c1b1b] border-l-2 border-[#775a19] pl-4">Targeted Outcomes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-[#c4c6cf] bg-white hover:border-[#775a19]/50 transition-colors">
            <span className="material-symbols-outlined text-[#775a19] mb-4 text-[32px]">trending_down</span>
            <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-2">↓ Funding Cost</h3>
            <p className="text-[16px] text-[#43474e] leading-[1.5]">Optimize capital stacks to reduce weighted average cost of capital and eliminate debt drag.</p>
          </div>
          <div className="p-8 border border-[#c4c6cf] bg-white hover:border-[#775a19]/50 transition-colors">
            <span className="material-symbols-outlined text-[#775a19] mb-4 text-[32px]">visibility</span>
            <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-2">↑ Project Cash Visibility</h3>
            <p className="text-[16px] text-[#43474e] leading-[1.5]">Implement rigorous forecasting protocols to eradicate blind spots in long-cycle liquidity needs.</p>
          </div>
          <div className="p-8 border border-[#c4c6cf] bg-white hover:border-[#775a19]/50 transition-colors">
            <span className="material-symbols-outlined text-[#775a19] mb-4 text-[32px]">handshake</span>
            <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-2">↑ Investor Confidence</h3>
            <p className="text-[16px] text-[#43474e] leading-[1.5]">Demonstrate total control over project economics with MECE financial reporting structures.</p>
          </div>
        </div>
      </section>

      {/* Reality & Leaks Section */}
      <section className="max-w-[1280px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 pr-8">
            <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#1c1b1b] mb-6">The Reality</h2>
            <p className="text-[18px] text-[#43474e] mb-6 leading-[1.6]">
              Complex developments suffer from fundamental structuring errors. Without precision engineering of the cash flow timeline, high-leverage projects rapidly burn through contingencies, triggering costly emergency capitalization and eroding base-case returns.
            </p>
            <div className="h-[1px] w-full bg-[#c4c6cf] my-8"></div>
            <span className="text-[12px] font-bold text-[#775a19] uppercase block mb-4 tracking-widest">Core Vulnerability</span>
            <p className="text-[16px] text-[#43474e] leading-[1.5]">
              The assumption that macro-level funding secures micro-level execution. It does not. The gap between debt deployment and actual revenue realization is where value is destroyed.
            </p>
          </div>
          <div className="lg:col-span-7 bg-[#f0eded] p-8 border border-[#c4c6cf]">
            <h2 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-8 border-l-2 border-[#775a19] pl-4">The Leaks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="pb-6 border-b border-[#c4c6cf]/50">
                <h4 className="text-[12px] font-bold text-[#000d22] uppercase mb-2 flex items-center gap-2 tracking-widest">
                  <span className="material-symbols-outlined text-[18px]">account_balance</span>
                  Cash Flow Mismatch
                </h4>
                <p className="text-[16px] text-[#43474e] leading-[1.5]">Asynchronous timing between capital calls and contractor draws leading to liquidity traps.</p>
              </div>
              <div className="pb-6 border-b border-[#c4c6cf]/50">
                <h4 className="text-[12px] font-bold text-[#000d22] uppercase mb-2 flex items-center gap-2 tracking-widest">
                  <span className="material-symbols-outlined text-[18px]">account_tree</span>
                  Debt Structuring
                </h4>
                <p className="text-[16px] text-[#43474e] leading-[1.5]">Misaligned tranche deployments that trigger premature interest accumulation.</p>
              </div>
              <div className="pt-2">
                <h4 className="text-[12px] font-bold text-[#000d22] uppercase mb-2 flex items-center gap-2 tracking-widest">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  Revenue Timing
                </h4>
                <p className="text-[16px] text-[#43474e] leading-[1.5]">Optimistic stabilization timelines causing covenant breaches during transitional phases.</p>
              </div>
              <div className="pt-2">
                <h4 className="text-[12px] font-bold text-[#000d22] uppercase mb-2 flex items-center gap-2 tracking-widest">
                  <span className="material-symbols-outlined text-[18px]">monitoring</span>
                  No Monitoring
                </h4>
                <p className="text-[16px] text-[#43474e] leading-[1.5]">Lack of high-frequency variance analysis against the base financial model.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solve Section */}
      <section className="max-w-[1280px] mx-auto px-8 py-12">
        <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#1c1b1b] mb-12 border-l-2 border-[#775a19] pl-4">The Solve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#c4c6cf]">
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#c4c6cf] relative bg-white">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#775a19]"></div>
            <span className="text-[12px] font-bold text-[#74777f] uppercase block mb-4 tracking-widest">Phase 01</span>
            <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Diagnose</h3>
            <p className="text-[16px] text-[#43474e] leading-[1.5]">
              Comprehensive audit of existing project models, facility agreements, and construction schedules to quantify immediate exposure and identify structural leaks.
            </p>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#c4c6cf] relative bg-white">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c4c6cf]"></div>
            <span className="text-[12px] font-bold text-[#74777f] uppercase block mb-4 tracking-widest">Phase 02</span>
            <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Design</h3>
            <p className="text-[16px] text-[#43474e] leading-[1.5]">
              Re-engineering of the financial architecture. We construct a proprietary, dynamically linked model aligning cash demands strictly with capital availability.
            </p>
          </div>
          <div className="p-8 relative bg-white">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c4c6cf]"></div>
            <span className="text-[12px] font-bold text-[#74777f] uppercase block mb-4 tracking-widest">Phase 03</span>
            <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#000d22] mb-4">Execute</h3>
            <p className="text-[16px] text-[#43474e] leading-[1.5]">
              Implementation of rigorous variance tracking and executive dashboarding. We enforce discipline across internal teams and external stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="max-w-[1280px] mx-auto px-8 py-12">
        <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#1c1b1b] mb-8 border-l-2 border-[#775a19] pl-4">Developer Case Study</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#c4c6cf] overflow-hidden">
          <div className="h-[400px] w-full relative overflow-hidden">
            <img 
              alt="Developer Case Study Infrastructure" 
              className="object-cover w-full h-full grayscale hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjP8WGjaW464NaUcdecOyStBPBbjO7VYifE6oM1JiC8qD4SI_hVIzvHDfQuA99RFzyjAVdFuE3Hv4OXefHvDrCModm4d7OBY53oNoiP4G_yuru58elAl88SlORH-7-ycQH2G5sEChVNw5CIVlfW3CQ7AV5TMFxCZH4wPutiaeXdZPVPzD49kPj5fcWnLD9LZ4216A6z--e18GTWzOB0I9hxhuzHrcmjzIBRR-bIda05Tu2zPwmSnrcicrRTzwdQwoi3Lfa-E6zdWI" 
            />
          </div>
          <div className="p-12 bg-white flex flex-col justify-center">
            <span className="text-[12px] font-bold text-[#775a19] uppercase block mb-4 tracking-widest">Global Infrastructure Firm</span>
            <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-6">Restructuring a $1.2B Mixed-Use Pipeline</h3>
            <p className="text-[16px] text-[#43474e] mb-8 leading-[1.5]">
              Facing severe cost overruns and misaligned debt tranches across a multi-phase development, the client required immediate stabilization. STRATEGOS ELITE redesigned the facility structure, synchronizing draws with revised construction milestones.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#c4c6cf]">
              <div>
                <div className="font-['Newsreader'] text-[32px] font-medium text-[#000d22] mb-1">14%</div>
                <div className="text-[12px] font-bold text-[#74777f] uppercase tracking-widest">Reduction in WACC</div>
              </div>
              <div>
                <div className="font-['Newsreader'] text-[32px] font-medium text-[#000d22] mb-1">$45M</div>
                <div className="text-[12px] font-bold text-[#74777f] uppercase tracking-widest">Freed Liquidity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Intelligence Section */}
      <section className="max-w-[1280px] mx-auto px-8 py-12">
        <div className="mb-10">
          <h2 className="font-['Newsreader'] text-[32px] font-medium text-[#1c1b1b] border-l-2 border-[#775a19] pl-4">Industry Intelligence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border border-[#c4c6cf] bg-white flex flex-col group overflow-hidden hover:border-[#775a19]/50 transition-colors">
            <div className="h-48 w-full relative bg-[#f6f3f2] border-b border-[#c4c6cf] overflow-hidden">
              <img 
                alt="Report Thumbnail" 
                className="object-cover w-full h-full grayscale opacity-90 group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAiqC4k7VDwKG2IoZ4axZwdJ5QQNkYDjAUoEGdMmg6_Dk_u4NUfjmo1Faw-EclMvxLkiU9GJmWgssUbotymmEDKLhwYwIBn1sES6xS12DN97ftC-m9x2GuEGIEODH7RGWfQbrkI5SNwHh_qUA-EuBe7MHhn2Aet_-EYBfL76KZAqpRJM2qoa7VcrkLcLr6r--kj98I0GtaVtPrGTvMGSDWiwpjiTQ5qzLuEULjOTSPsC0vJlmqeqYdmo6TS1muR_abJHEp5_wJ0-E" 
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-[12px] font-bold text-[#775a19] uppercase block mb-3 tracking-widest">Oct 12, 2026</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-4">2026 Market Outlook: Global Real Estate</h3>
              <div className="mt-auto pt-6">
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-[12px] font-bold text-[#000d22] uppercase flex items-center gap-2 hover:text-[#775a19] transition-colors tracking-widest"
                >
                  Read Report <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border border-[#c4c6cf] bg-white flex flex-col group overflow-hidden hover:border-[#775a19]/50 transition-colors">
            <div className="h-48 w-full relative bg-[#f6f3f2] border-b border-[#c4c6cf] overflow-hidden">
              <img 
                alt="Report Thumbnail" 
                className="object-cover w-full h-full grayscale opacity-90 group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBi-czqJS0EezJNas4sPyZYiy1uR1Ejwa4TYSrXjmU9CjMUzwYdMhSMVklpy0vpXICDn-Pk7NVnqyjF1RvYnnDGKEtMiFExc0Z5ArebLUzWbR4KRepn7lMqO8QYQV6IstnSFDcqfOFdYSITHFH1z5_gA5IkKC1RVJyjyUFBM1Z5IZafwAVUmEp0chtbS_j97Kttu4ar5sadSH_LZvKqUJjm6k-f44P1d6HcYNoJ28YTvSd-U6s-fQrwZbmWmOSyPBH_4TZm5rlwDY" 
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-[12px] font-bold text-[#775a19] uppercase block mb-3 tracking-widest">Sep 28, 2026</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-4">Yield Optimization in High-Interest Cycles</h3>
              <div className="mt-auto pt-6">
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-[12px] font-bold text-[#000d22] uppercase flex items-center gap-2 hover:text-[#775a19] transition-colors tracking-widest"
                >
                  Read Report <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="border border-[#c4c6cf] bg-white flex flex-col group overflow-hidden hover:border-[#775a19]/50 transition-colors">
            <div className="h-48 w-full relative bg-[#f6f3f2] border-b border-[#c4c6cf] overflow-hidden">
              <img 
                alt="Report Thumbnail" 
                className="object-cover w-full h-full grayscale opacity-90 group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOCtUIIyj95DtzNp9Y8A9LqtYnrQc6uNvupKGEgTEKi1HSgfAB8EcdEvTwTmDslnwYE8O21kCl6k0XYmDYBDbmsnxKFpV2tCjAJ8jdNKwPzz8aQichy3Ab4x8CE6WWCxxeoKG11crJDXFlhz8GR0T_ggtDMWBxAUBbhjNKVB6Lo3bvVtQXnwZqugnYWkZ6ArxQP5KwIxz3EVVRYoEh3f5kaQfW1DfTGgfcvy8sD7YK9GKbuQXbBoE2uluUbx9PjTt4OSDANYTiKjA" 
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-[12px] font-bold text-[#775a19] uppercase block mb-3 tracking-widest">Aug 15, 2026</span>
              <h3 className="font-['Newsreader'] text-[24px] font-medium text-[#1c1b1b] mb-4">Infrastructure Debt Funding Structures</h3>
              <div className="mt-auto pt-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-[12px] font-bold text-[#000d22] uppercase flex items-center gap-2 hover:text-[#775a19] transition-colors tracking-widest"
                >
                  Read Report <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateInfrastructure;