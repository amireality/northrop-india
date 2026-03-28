import React from 'react';
import { 
  BookOpen, 
  Brain, 
  TrendingUp, 
  Globe, 
  Lightbulb, 
  Users, 
  ChevronRight,
  ArrowRight,
  ShieldAlert,
  BarChart,
  Briefcase,
  Target,
  Banknote,
  LineChart,
  Landmark,
  CircleDollarSign,
  PieChart,
  Calculator
} from 'lucide-react';

const InstitutePage = () => {
  const programs = [
    {
      id: "01",
      title: "Investment Banking & Mergers and Acquisitions",
      desc: "Understanding how investment banks structure deals, evaluate companies, and execute complex corporate transactions.",
      icon: <Briefcase className="text-blue-500" size={24} />,
      topics: ["Financial statement analysis", "Valuation methodologies (DCF, comps, precedent)", "Leveraged buyouts (LBO)", "M&A strategy", "Deal structuring and negotiations", "Transaction lifecycle and execution"]
    },
    {
      id: "02",
      title: "Private Equity & Venture Capital",
      desc: "How private capital is raised, deployed, and managed to build long-term enterprise value.",
      icon: <Target className="text-indigo-500" size={24} />,
      topics: ["Fund structures and limited partner models", "Deal sourcing and investment screening", "Portfolio management", "Value creation strategies", "Exit strategies and secondary markets"]
    },
    {
      id: "03",
      title: "Hedge Funds & Advanced Investment Strategies",
      desc: "Institutional investment strategies used by hedge funds and global asset managers.",
      icon: <LineChart className="text-teal-500" size={24} />,
      topics: ["Macro investing", "Long/short equity strategies", "Event-driven strategies", "Portfolio construction", "Risk management frameworks", "Derivatives and hedging techniques"]
    },
    {
      id: "04",
      title: "Global Capital Markets",
      desc: "Understanding the structure and functioning of global financial markets.",
      icon: <Globe className="text-cyan-500" size={24} />,
      topics: ["Equity markets", "Debt markets", "Derivatives markets", "Institutional investors", "Liquidity and market structure"]
    },
    {
      id: "05",
      title: "Fixed Income, Bonds & Credit Markets",
      desc: "Understanding how debt markets function and how governments and corporations raise capital.",
      icon: <Banknote className="text-emerald-500" size={24} />,
      topics: ["Bond markets", "Yield curves", "Credit risk", "Sovereign debt", "Corporate debt markets", "Interest rate dynamics"]
    },
    {
      id: "06",
      title: "Global Macro & Central Banking",
      desc: "How macroeconomic forces shape financial markets.",
      icon: <Landmark className="text-green-500" size={24} />,
      topics: ["Monetary policy", "Interest rate cycles", "Inflation dynamics", "Global liquidity cycles", "Central bank policy frameworks", "Economic indicators and forecasting"]
    },
    {
      id: "07",
      title: "Forex & Currency Markets",
      desc: "Understanding how global currency markets operate.",
      icon: <CircleDollarSign className="text-lime-500" size={24} />,
      topics: ["Foreign exchange market structure", "Central bank intervention", "Currency valuation", "Macroeconomic drivers of exchange rates", "Global capital flows"]
    },
    {
      id: "08",
      title: "Capital Allocation & Financial Strategy",
      desc: "How businesses and investors make capital decisions that determine long-term growth.",
      icon: <PieChart className="text-orange-500" size={24} />,
      topics: ["Capital allocation frameworks", "Investment decision-making", "Corporate finance strategy", "Risk-adjusted returns", "Long-term value creation"]
    },
    {
      id: "09",
      title: "Advanced Financial Modeling",
      desc: "Building financial models used by investment banks and private equity firms.",
      icon: <Calculator className="text-amber-500" size={24} />,
      topics: ["Financial modeling frameworks", "LBO models", "Valuation models", "Scenario analysis", "Deal modeling"]
    }
  ];

  const insights = [
    { title: "How Private Equity Actually Makes Money", category: "Research Paper" },
    { title: "Why Most Startups Misallocate Capital", category: "Market Analysis" },
    { title: "The Real Economics of Hedge Funds", category: "Strategy Insight" },
    { title: "India�s Next Capital Cycle", category: "Macro View" }
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-blue-200">
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[85vh] flex items-center pt-24 pb-16 px-6 md:px-20 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[900px] h-[900px] rounded-full bg-gradient-to-br from-blue-700/20 to-indigo-600/10 blur-3xl" />
          <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-900/40 to-transparent blur-3xl" />
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 font-medium text-sm mb-8 border border-blue-500/20">
            <BookOpen size={16} /> A research and education initiative
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight max-w-4xl">
            Northrop Institute of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Global Finance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed max-w-3xl mb-12">
            Where capital theory meets market reality. Developing the clarity of thinking required to evaluate capital decisions and operate with confidence in complex financial environments.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#programs" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
              Explore Programs <ArrowRight size={18} />
            </a>
            <a href="#philosophy" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm">
              Read Our Philosophy
            </a>
          </div>
        </div>
      </section>

      {/* 1. PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Our Philosophy</h2>
              <p className="text-xl text-blue-600 font-medium mb-8 leading-relaxed">
                Finance today moves faster than most professionals are trained to understand.
              </p>
              
              <div className="prose prose-lg text-slate-600">
                <p>
                  Capital flows across markets, businesses scale rapidly, and decisions often need to be made with incomplete information and real consequences.
                </p>
                <p>
                  Yet much of financial education remains overly theoretical�focused on models, presentations, and credentials rather than the discipline of making sound decisions when uncertainty is real.
                </p>
                <p className="font-semibold text-slate-800 border-l-4 border-blue-500 pl-4 py-1">
                  The Northrop Institute of Global Finance was created to address this gap.
                </p>
                <p>
                  Our focus is simple: to help professionals develop the clarity of thinking required to understand markets, evaluate capital decisions, and operate with confidence in complex financial environments.
                </p>
                <p>
                  Because in the real world, success in finance is rarely determined by how much theory someone knows, but by how well they think when the stakes are high.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="text-amber-500" size={28} />
                  <h3 className="text-2xl font-bold text-slate-900">Who This Program Is <span className="text-slate-500">Not</span> For</h3>
                </div>
                
                <p className="text-slate-600 mb-8">
                  The programs at the Northrop Institute of Global Finance are designed for individuals who are serious about understanding how finance, capital, and markets actually work. For this reason, the program may not be suitable for everyone.
                </p>
                
                <p className="font-medium text-slate-800 mb-4">This program is not designed for:</p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Individuals looking for quick financial shortcuts or trading tips",
                    "People seeking certificates rather than real understanding",
                    "Those who expect passive learning without active engagement",
                    "Individuals uncomfortable with challenging discussions and honest feedback",
                    "Participants who are not willing to invest time and effort in developing their financial thinking"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="min-w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 font-bold text-xs">?</span>
                      </div>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <p className="text-slate-700 italic">
                    "Our goal is not to maximize the number of participants, but to ensure that each cohort consists of individuals who genuinely want to develop their understanding of capital markets and financial decision-making."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TRUTH PILL & PROMISE SECTION */}
      <section className="py-24 px-6 md:px-20 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-blue-900/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Brain className="mx-auto text-blue-400 mb-6" size={48} />
          <h2 className="text-4xl font-bold mb-8">The Reality of Finance & Our Promise</h2>
          
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed mb-12 text-left md:text-center">
            <p>
              Many young professionals enter the world of finance believing that degrees, certifications, and technical knowledge will prepare them for the realities of markets and business. Very quickly, they discover something unsettling.
            </p>
            <p className="text-2xl font-medium text-white my-8">
              The real world does not operate like textbooks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center my-10">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="font-medium">Decisions must often be made with incomplete information.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="font-medium">Markets move faster than models.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="font-medium">Capital is unforgiving when judgment is weak.</p>
              </div>
            </div>
            <p>
              At the Northrop Institute of Global Finance, our promise is simple: We will not teach finance as a collection of formulas or presentations. We will focus on developing the clarity of thinking required to navigate real financial environments � where uncertainty, risk, and responsibility are constant.
            </p>
            <p className="font-medium text-blue-300 text-xl pt-6">
              If participants leave with sharper judgment, deeper understanding of capital, and greater confidence in making difficult decisions, the program has done its job. Because in finance, the difference between success and failure is rarely knowledge alone � it is the ability to think clearly when the stakes are real.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS SECTION */}
      <section id="programs" className="py-24 px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Institute Programs</h2>
            <p className="text-lg text-slate-600">
              Rigorous, intensive explorations into the core domains of high finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 transition-colors">
                    {program.icon}
                  </div>
                  <span className="text-slate-300 font-black text-2xl">{program.id}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{program.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{program.desc}</p>
                
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Topics</p>
                  <ul className="space-y-2">
                    {program.topics.slice(0, 4).map((topic, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">�</span> {topic}
                      </li>
                    ))}
                    {program.topics.length > 4 && (
                      <li className="text-sm text-slate-400 italic pl-3">
                        + {program.topics.length - 4} more topics
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 & 3. FELLOWS AND RESEARCH COMBINED SECTION */}
      <section className="py-24 px-6 md:px-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Fellows */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900 flex items-center gap-3">
                <Users className="text-blue-600" /> Fellows & Contributors
              </h2>
              
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-6">
                <h4 className="text-xl font-bold text-slate-900 mb-1">Ashish Chaudhary</h4>
                <p className="text-blue-600 font-medium text-sm mb-4">Founder � Northrop Institute of Global Finance</p>
                <p className="text-slate-500 text-sm">Managing Director � Northrop Management Private Limited</p>
              </div>
              
              <div className="p-6 border border-dashed border-slate-300 rounded-xl bg-slate-50/50">
                <p className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wide">Future Network Additions</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Industry Guests</li>
                  <li className="flex items-center gap-3 text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Visiting Professionals</li>
                  <li className="flex items-center gap-3 text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Guest Speakers</li>
                </ul>
              </div>
            </div>

            {/* Research */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900 flex items-center gap-3">
                <Lightbulb className="text-amber-500" /> Northrop Global Finance Insights
              </h2>
              
              <div className="space-y-4">
                {insights.map((insight, idx) => (
                  <div key={idx} className="group flex items-center justify-between p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all cursor-pointer">
                    <div>
                      <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">{insight.category}</p>
                      <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{insight.title}</h4>
                    </div>
                    <ChevronRight className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                ))}
              </div>
              
              <button className="mt-8 text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View all insights <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* CTA / FOOTER PORTION FOR INSTITUTE */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to elevate your financial decision-making?</h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
          Join a cohort of driven professionals committed to understanding how global markets and capital truly operate.
        </p>
        <button className="bg-white text-blue-900 hover:bg-slate-100 px-10 py-4 rounded-full font-bold transition-all shadow-xl text-lg">
          Inquire About Admissions
        </button>
      </section>
      
    </div>
  );
};

export default InstitutePage;
