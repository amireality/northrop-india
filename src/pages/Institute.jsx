import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Institute = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="  bg-[#080808] text-white leading-[1.6] overflow-x-hidden">
      <Helmet>
        <title>Northrop Institute of Global Finance | Intelligence & Research</title>
        <meta name="description" content="The Northrop Institute of Global Finance delivers research, intelligence, and thought leadership for the evolving global financial landscape." />
      </Helmet>



      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-end px-[20px] md:px-[80px] pb-[110px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/insituted/bannerinsituted.avif')" }}
        ></div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.25) 0%, rgba(8,8,8,0.45) 40%, rgba(8,8,8,0.88) 75%, rgba(8,8,8,1.00) 100%)" }}
        ></div>

        <div className="absolute left-[20px] md:left-[80px] bottom-[44px] z-[2] hidden md:flex flex-col items-center gap-[8px]">
          <div className="w-[1px] h-[52px]" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)" }}></div>
          <span className="text-[9px] tracking-[2.5px] uppercase text-[rgba(255,255,255,0.35)]" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>

        <div className="relative z-[2] max-w-[820px]">
          <div className="flex items-center gap-[10px] mb-[26px]">
            <div className="flex-1 max-w-[40px] h-[1px] bg-[#C4973B]"></div>
            <span className="text-[10.5px] font-[700] tracking-[3px] uppercase text-[#C4973B]">A Research & Education Initiative · Northrop Management Pvt. Ltd.</span>
          </div>
          <h1 className="text-white font-[900] leading-[1.02] tracking-[-3px] mb-[26px]" style={{ fontSize: 'clamp(46px, 6.5vw, 86px)' }}>
            Northrop Institute<br />of <em className="not-italic text-[#C4973B]">Global Finance</em>
          </h1>
          <p className="text-[17px] font-[300] text-[rgba(255,255,255,0.60)] max-w-[500px] leading-[1.8] mb-[48px] tracking-[0.1px]">
            Developing the clarity of thinking required to understand markets,<br className="hidden md:block" />
            evaluate capital decisions, and operate with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-[14px]">
            <a href="#programs" className="text-center bg-[#C4973B] hover:bg-[#6344d4] text-white text-[13.5px] font-[600] px-[38px] py-[15px] tracking-[0.3px] transition-colors duration-200">
              Explore Programs
            </a>
            <a href="#philosophy" className="text-center bg-transparent hover:bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.50)] hover:border-white text-white text-[13.5px] font-[500] px-[38px] py-[15px] tracking-[0.3px] transition-all duration-200">
              Our Philosophy
            </a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="relative grid grid-cols-1 md:grid-cols-2 min-h-[640px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/insituted/photo-1477959858617-67f85cf4f1df.avif')" }}
        ></div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(8,8,8,0.97) 50%, rgba(8,8,8,0.82) 100%)" }}
        ></div>

        <div className="relative z-[2] py-[100px] px-[40px] md:px-[80px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.10)]">
          <div className="text-[10px] font-[700] tracking-[3px] uppercase text-[#C4973B] mb-[18px]">01 — Our Philosophy</div>
          <h2 className="font-[900] leading-[1.08] tracking-[-1.5px] text-white" style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}>
            Finance demands clarity,<br />not just credentials.
          </h2>
        </div>

        <div className="relative z-[2] py-[100px] px-[40px] md:px-[80px] flex flex-col justify-center gap-[22px]">
          <p className="text-[14.5px] font-[300] text-[rgba(255,255,255,0.62)] leading-[1.9] tracking-[0.1px]">
            Finance today moves faster than most professionals are trained to understand. Capital flows across markets, businesses scale rapidly, and decisions must often be made with incomplete information and real consequences.
          </p>
          <p className="text-[14.5px] font-[300] text-[rgba(255,255,255,0.62)] leading-[1.9] tracking-[0.1px]">
            Yet much of financial education remains overly theoretical — focused on models, presentations, and credentials rather than <strong className="text-white font-[600]">the discipline of making sound decisions when uncertainty is real.</strong>
          </p>
          <p className="text-[14.5px] font-[300] text-[rgba(255,255,255,0.62)] leading-[1.9] tracking-[0.1px]">
            The Northrop Institute of Global Finance was created to address this gap. Our focus: helping professionals develop the clarity of thinking required to understand markets, evaluate capital, and operate with confidence in complex environments.
          </p>
          <p className="text-[14.5px] font-[300] text-[rgba(255,255,255,0.62)] leading-[1.9] tracking-[0.1px]">
            Because in the real world, success in finance is rarely about how much theory you know — it is about <strong className="text-white font-[600]">how clearly you think when the stakes are high.</strong>
          </p>
          <a href="#programs" className="inline-flex items-center gap-[8px] w-fit text-white text-[12.5px] font-[500] border-b border-[rgba(255,255,255,0.25)] hover:border-[#C4973B] hover:text-[#C4973B] pb-[2px] mt-[6px] transition-colors duration-200">
            Explore Programs →
          </a>
        </div>
      </section>

      {/* NOT FOR */}
      <section id="not-for" className="bg-[#f2f2f2] text-[#080808] grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
        <div className="py-[100px] px-[40px] md:px-[80px] border-b md:border-b-0 md:border-r border-[rgba(0,0,0,0.10)] flex flex-col justify-center">
          <div className="text-[10px] font-[700] tracking-[3px] uppercase text-[#C4973B] mb-[18px]">02 — Candidacy</div>
          <h2 className="font-[900] leading-[1.1] tracking-[-1.2px] text-[#0a0a0a]" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
            Who This Program<br />Is Not For
          </h2>
        </div>
        <div className="py-[100px] px-[40px] md:px-[80px] flex flex-col justify-center">
          <p className="text-[14.5px] text-[#555] leading-[1.85] mb-[32px] font-[300]">
            Our programs are designed for individuals serious about understanding how finance, capital, and markets actually work. For this reason, the program may not be suitable for everyone.
          </p>
          <ul className="flex flex-col gap-[15px]">
            {[
              "Individuals looking for quick financial shortcuts or trading tips",
              "People seeking certificates rather than real understanding",
              "Those who expect passive learning without active engagement",
              "Individuals uncomfortable with challenging discussions and honest feedback",
              "Participants not willing to invest time and effort in developing financial thinking"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-[16px] text-[14px] text-[#333] leading-[1.65] font-[400]">
                <span className="text-[#C4973B] font-[700] shrink-0 pt-[1px]">—</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative grid grid-cols-1 md:grid-cols-2 min-h-[680px] overflow-hidden">
        <div className="relative overflow-hidden min-h-[300px] md:min-h-full">
          <img
            src="/insituted/photo-1.avif"
            alt="Global Finance"
            className="w-full h-full object-cover block"
            style={{ filter: "brightness(0.65) contrast(1.1)" }}
          />
        </div>
        <div className="bg-[#0e0e0e] py-[100px] px-[40px] md:px-[80px] flex flex-col justify-center gap-[24px] border-l border-[rgba(255,255,255,0.10)]">
          <div className="text-[10px] font-[700] tracking-[3px] uppercase text-[#C4973B]">About the Institute</div>
          <h2 className="font-[900] leading-[1.1] tracking-[-1.2px] text-white" style={{ fontSize: 'clamp(28px, 3.2vw, 44px)' }}>
            About Northrop<br />Institute of Global<br />Finance
          </h2>
          <p className="text-[16px] font-[300] text-[rgba(255,255,255,0.55)] leading-[1.75]">
            We aim to empower professionals to navigate the world of capital with confidence and clarity.
          </p>
          <div className="w-[36px] h-[2px] bg-[#C4973B]"></div>
          <p className="text-[14.5px] font-[300] text-[rgba(255,255,255,0.58)] leading-[1.9]">
            Northrop Institute of Global Finance is a research and education initiative of <strong className="text-white font-[600]">Northrop Management Private Limited</strong>. We do not aim to maximise the number of participants — we aim to ensure that each cohort consists of individuals who genuinely want to develop their understanding of capital markets and financial decision-making.
          </p>
          <p className="text-[14.5px] font-[300] text-[rgba(255,255,255,0.58)] leading-[1.9]">
            Our goal is not to produce credential-holders. <strong className="text-white font-[600]">Our goal is to produce sharp financial thinkers.</strong>
          </p>
          <a href="#programs" className="inline-block border border-[rgba(255,255,255,0.28)] hover:border-[#C4973B] hover:text-[#C4973B] text-white text-[12.5px] font-[500] px-[30px] py-[13px] w-fit tracking-[0.3px] transition-all duration-200">
            Read More
          </a>
        </div>
      </section>

      {/* FELLOWS */}
      <section id="fellows" className="bg-[#0e0e0e] py-[110px] px-[20px] md:px-[80px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-[60px]">
            <div className="text-[10px] font-[700] tracking-[3px] uppercase text-[#C4973B] mb-[18px]">03 — Northrop Fellows & Contributors</div>
            <h2 className="font-[900] leading-[1.08] tracking-[-1.5px] text-white" style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}>The minds behind<br />the Institute.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[rgba(255,255,255,0.10)]">
            {[
              { in: "AC", name: "Ashish Chaudhary", role: "Founder", desc: "Founder — Northrop Institute of Global Finance. Managing Director — Northrop Management Private Limited." },
              { in: "SR", name: "CA Sudhanshu Rao", role: "Senior Fellow", desc: "IPO specialist and India–US GAAP professional with deep expertise in cross-border financial reporting and capital markets." },
              { in: "PM", name: "Pranav Mishra", role: "Research Fellow", desc: "IIT Patna — Electronics & Systems Design. Focused on the next phase of structural development of finance and the role of technology." },
              { in: "PR", name: "Prerna", role: "Social Impact Fellow", desc: "10+ years in social work. Working with Shiksha for over a decade across international programmes and grassroots community finance." }
            ].map((f, i) => (
              <div key={i} className="bg-[#0e0e0e] hover:bg-[#1c1c1c] p-[48px] px-[38px] border border-[rgba(255,255,255,0.10)] hover:border-[rgba(123,92,229,0.45)] transition-colors duration-250">
                <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#C4973B] to-[#4f32bb] flex items-center justify-center text-[17px] font-[800] text-white mb-[26px] tracking-[-0.5px]">
                  {f.in}
                </div>
                <div className="text-[15.5px] font-[700] mb-[6px] tracking-[-0.2px] text-white">{f.name}</div>
                <div className="text-[10.5px] font-[700] tracking-[1.5px] uppercase text-[#C4973B] mb-[14px]">{f.role}</div>
                <div className="text-[13px] font-[300] text-[rgba(255,255,255,0.50)] leading-[1.75]">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="bg-[#f2f2f2] text-[#080808] py-[110px] px-[20px] md:px-[80px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-[56px] gap-[20px]">
            <div>
              <div className="text-[10px] font-[700] tracking-[3px] uppercase text-[#C4973B] mb-[18px]">04 — Northrop Global Finance Insights</div>
              <h2 className="font-[900] leading-[1.1] tracking-[-1.2px] text-[#0a0a0a]" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>Research &<br />Insights</h2>
              <p className="text-[14.5px] text-[#555] max-w-[380px] mt-[14px] leading-[1.75] font-[300]">Expand your knowledge of capital, markets, and financial systems through our research publications.</p>
            </div>
            <a href="#" className="border border-[#1a1a1a] hover:bg-[#111] text-[#111] hover:text-white text-[12.5px] font-[500] px-[30px] py-[13px] tracking-[0.3px] transition-colors duration-200 whitespace-nowrap">View All Papers</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
            {[
              { img: "/insituted/reserch1.avif", meta: "Northrop Insights · 8 min read", title: "How Private Equity Actually Makes Money", excerpt: "Behind the returns: a clear-eyed look at the mechanics of value creation, leverage, and exit strategy in modern private equity." },
              { img: "/insituted/reserch2.avif", meta: "Northrop Insights · 6 min read", title: "Why Most Startups Misallocate Capital", excerpt: "The hidden cost of growth-at-all-costs thinking — and how founders and investors repeatedly misread unit economics." },
              { img: "/insituted/reserch3.avif", meta: "Northrop Insights · 7 min read", title: "The Real Economics of Hedge Funds", excerpt: "Demystifying fee structures, alpha generation, and why most hedge funds underperform their own benchmarks over time." },
              { img: "/insituted/reserch4.avif", meta: "Northrop Insights · 9 min read", title: "India's Next Capital Cycle", excerpt: "An analysis of where institutional capital is flowing in India — and what the next decade of market structure looks like." },
              { img: "/insituted/reserch5.avif", meta: "Northrop Insights · 5 min read", title: "Central Banks & the Limits of Monetary Policy", excerpt: "What history tells us about when central banks succeed, when they fail, and what comes after a decade of easy money." }
            ].map((r, i) => (
              <div key={i} className="bg-white overflow-hidden group hover:cursor-pointer">
                <div className="h-[210px] overflow-hidden relative">
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.04]" style={{ filter: "brightness(0.75) contrast(1.05)" }} />
                </div>
                <div className="p-[28px] pb-[36px]">
                  <div className="text-[11px] text-[#999] mb-[10px] tracking-[0.3px]">{r.meta}</div>
                  <div className="text-[16.5px] font-[700] text-[#0f0f0f] leading-[1.35] mb-[10px] tracking-[-0.3px]">{r.title}</div>
                  <div className="text-[13px] text-[#666] leading-[1.7] font-[300]">{r.excerpt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="relative py-[110px] px-[20px] md:px-[80px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/insituted/our promise.avif')" }}
        ></div>
        <div className="absolute inset-0 bg-[rgba(8,8,8,0.93)]"></div>

        <div className="relative z-[2] max-w-[1080px] mx-auto w-full">
          <div className="text-[10px] font-[700] tracking-[3px] uppercase text-[#C4973B] mb-[18px]">05 — Programs</div>
          <h2 className="font-[900] leading-[1.08] tracking-[-1.5px] text-white" style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}>Nine tracks.<br />One discipline: financial thinking.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[rgba(255,255,255,0.10)] mt-[56px]">
            {[
              { num: "01", title: "Investment Banking & Mergers and Acquisitions", desc: "How investment banks structure deals, evaluate companies, and execute complex corporate transactions.", tags: ["DCF & Valuation", "LBO", "M&A Strategy"] },
              { num: "02", title: "Private Equity & Venture Capital", desc: "How private capital is raised, deployed, and managed to build long-term enterprise value.", tags: ["Fund Structures", "Portfolio Mgmt", "Exit Strategy"] },
              { num: "03", title: "Hedge Funds & Advanced Investment Strategies", desc: "Institutional investment strategies used by hedge funds and global asset managers worldwide.", tags: ["Macro", "Long/Short", "Derivatives"] },
              { num: "04", title: "Global Capital Markets", desc: "The structure and functioning of global financial markets — equity, debt, and derivatives.", tags: ["Equity Markets", "Derivatives", "Liquidity"] },
              { num: "05", title: "Fixed Income, Bonds & Credit Markets", desc: "How debt markets function and how governments and corporations raise capital through bonds.", tags: ["Yield Curves", "Credit Risk", "Sovereign Debt"] },
              { num: "06", title: "Global Macro & Central Banking", desc: "How macroeconomic forces shape financial markets and drive capital allocation globally.", tags: ["Monetary Policy", "Inflation", "Forecasting"] },
              { num: "07", title: "Forex & Currency Markets", desc: "How global currency markets operate and the forces that drive exchange rate movements.", tags: ["FX Structure", "Central Banks", "Capital Flows"] },
              { num: "08", title: "Capital Allocation & Financial Strategy", desc: "How businesses and investors make capital decisions that determine long-term growth and value.", tags: ["Corp Finance", "Risk-Adj Returns", "Value Creation"] },
              { num: "09", title: "Advanced Financial Modeling", desc: "Building financial models used by investment banks and private equity firms in live transactions.", tags: ["LBO Models", "Valuation", "Scenario Analysis"] }
            ].map((p, i) => (
              <div key={i} className="bg-[rgba(14,14,14,0.97)] hover:bg-[rgba(123,92,229,0.07)] p-[44px] px-[36px] flex flex-col gap-[14px] border border-[rgba(255,255,255,0.10)] hover:border-[rgba(123,92,229,0.35)] relative overflow-hidden transition-colors duration-250 group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C4973B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-[10px] font-[700] tracking-[2.5px] text-[#C4973B]">{p.num}</div>
                <div className="text-[16.5px] font-[700] leading-[1.3] tracking-[-0.3px] text-white">{p.title}</div>
                <div className="text-[13px] font-[300] text-[rgba(255,255,255,0.48)] leading-[1.75] flex-1">{p.desc}</div>
                <div className="flex flex-wrap gap-[6px] mt-[4px]">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-[9.5px] font-[600] tracking-[0.8px] uppercase text-[rgba(255,255,255,0.35)] border border-[rgba(255,255,255,0.10)] px-[10px] py-[4px]">{t}</span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-[8px] w-fit text-[11.5px] font-[600] tracking-[1px] uppercase text-[#C4973B] hover:text-white mt-[4px] border border-[rgba(123,92,229,0.35)] hover:border-[#C4973B] px-[20px] py-[10px] bg-[rgba(123,92,229,0.08)] hover:bg-[#C4973B] transition-colors duration-200">
                  View Details →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section id="promise" className="relative overflow-hidden py-[140px] px-[20px] md:px-[80px]">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: "url('/insituted/PROGRAMS.avif')", backgroundPosition: "center 30%", backgroundSize: "cover" }}
        ></div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.88) 50%, rgba(30,20,70,0.85) 100%)" }}
        ></div>

        <div className="relative z-[2] max-w-[860px] mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-[700] tracking-[3px] uppercase text-[#C4973B] block mb-[44px]">06 — Our Promise</span>
          <h2 className="font-[900] tracking-[-2px] leading-[1.05] mb-[54px] text-white" style={{ fontSize: 'clamp(34px, 5vw, 64px)' }}>
            The Truth About<br />Finance Education.
          </h2>
          <div className="text-left flex flex-col gap-[20px] max-w-[680px] w-full mx-auto mb-[50px]">
            <p className="text-[15.5px] font-[300] text-[rgba(255,255,255,0.62)] leading-[1.9]">
              Many young professionals enter the world of finance believing that degrees, certifications, and technical knowledge will prepare them for the realities of markets and business.
            </p>
            <p className="text-[15.5px] font-[300] text-[rgba(255,255,255,0.62)] leading-[1.9]">
              Very quickly, they discover something unsettling.
            </p>
            <div className="w-[36px] h-[2px] bg-[#C4973B] my-[6px]"></div>
            <p className="text-[15.5px] font-[300] text-[rgba(255,255,255,0.62)] leading-[1.9]">
              <strong className="text-white font-[600]">The real world does not operate like textbooks.</strong> Decisions must often be made with incomplete information. Markets move faster than models. Capital is unforgiving when judgment is weak.
            </p>
            <div className="w-[36px] h-[2px] bg-[#C4973B] my-[6px]"></div>
            <p className="text-[15.5px] font-[300] text-[rgba(255,255,255,0.62)] leading-[1.9]">
              At the Northrop Institute, our promise is simple. We will not teach finance as a collection of formulas or presentations. We will focus on developing the clarity of thinking required to navigate real financial environments — where uncertainty, risk, and responsibility are constant.
            </p>
            <p className="text-[15.5px] font-[300] text-[rgba(255,255,255,0.62)] leading-[1.9]">
              If participants leave with <strong className="text-white font-[600]">sharper judgment, deeper understanding of capital, and greater confidence in making difficult decisions</strong>, the program has done its job.
            </p>
          </div>
          <p className="border-t border-[rgba(255,255,255,0.10)] pt-[44px] text-[20px] font-[400] italic text-[rgba(255,255,255,0.80)] leading-[1.7] max-w-[640px] w-full mx-auto tracking-[-0.3px]">
            "In finance, the difference between success and failure is rarely knowledge alone —<br />
            it is the ability to think clearly when the stakes are real."
          </p>
        </div>
      </section>


    </div>
  );
};

export default Institute;
